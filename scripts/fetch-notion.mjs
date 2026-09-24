#!/usr/bin/env node
/*
 * Build stage: pull everything the site needs out of Notion and write it into
 * the repo, so building and serving the site needs no network access at all.
 *
 *   node scripts/fetch-notion.mjs [--dry-run]
 *
 * Writes:
 *   content/site-map.json          every page, its title, breadcrumb and URL
 *   content/pages/<pageId>.json    a page's record map plus its image map
 *   public/search-index.json       page text, for the client-side search
 *   public/notion-assets/*         the images themselves
 *
 * Notion's API is slow and drops requests, so every call is retried with
 * backoff. A run that cannot read a page leaves the previously committed copy
 * in place rather than publishing a half-empty site.
 */
import { createHash } from 'node:crypto'
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { NotionAPI } from 'notion-client'
import {
  defaultMapImageUrl,
  getBlockCollectionId,
  getBlockTitle,
  getBlockValue,
  getTextContent,
} from 'notion-utils'

import { resolveSlug } from './lib/slugs.mjs'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT_DIR = join(ROOT, 'content')
const PAGES_DIR = join(CONTENT_DIR, 'pages')
const PUBLIC_DIR = join(ROOT, 'public')
const ASSETS_DIR = join(PUBLIC_DIR, 'notion-assets')

const NOTION_ROOT_PAGE_ID = '1703ab28-d48c-806f-883e-fb81cbf40c1d'
const USER_AGENT = 'Mozilla/5.0 (compatible; giveth-docs/1.0)'
const DRY_RUN = process.argv.includes('--dry-run')

const notion = new NotionAPI()

/* ------------------------------------------------------------------ utils */

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/** Notion times out often enough that a single attempt is not good enough. */
async function withRetry(label, fn, attempts = 5) {
  let lastError
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await fn()
    } catch (err) {
      lastError = err
      if (err.permanent) break
      if (attempt < attempts) {
        const delay = Math.min(500 * 2 ** (attempt - 1), 8000)
        console.warn(`  retry ${attempt}/${attempts - 1} for ${label}: ${err.message}`)
        await sleep(delay)
      }
    }
  }
  throw new Error(`${label} failed after ${attempts} attempts: ${lastError?.message}`)
}

async function mapLimit(items, limit, fn) {
  const results = new Array(items.length)
  let cursor = 0
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (cursor < items.length) {
        const index = cursor++
        results[index] = await fn(items[index], index)
      }
    })
  )
  return results
}

/* --------------------------------------------------------- custom emoji */

const CUSTOM_EMOJI_PATTERN = /^notion:\/\/custom_emoji\/([\w-]+)\/([\w-]+)$/

/**
 * Custom emoji page icons appear as `notion://custom_emoji/<space>/<id>`, a
 * scheme nothing in notion-utils resolves and which Notion's image endpoint
 * 404s on. They have to be looked up separately -- and the lookup answers 403
 * without a browser-shaped user agent.
 */
async function resolveCustomEmoji(recordMap) {
  const refs = new Map()
  for (const wrapper of Object.values(recordMap.block)) {
    const value = wrapper?.value?.value ?? wrapper?.value
    const match = CUSTOM_EMOJI_PATTERN.exec(value?.format?.page_icon ?? '')
    if (match) refs.set(match[2], { spaceId: match[1], id: match[2] })
  }
  if (!refs.size) return

  const urls = await withRetry('custom emoji lookup', async () => {
    const response = await fetch('https://www.notion.so/api/v3/syncRecordValues', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'user-agent': USER_AGENT },
      body: JSON.stringify({
        requests: [...refs.values()].map((ref) => ({
          pointer: { table: 'custom_emoji', id: ref.id, spaceId: ref.spaceId },
          version: -1,
        })),
      }),
    })
    if (!response.ok) throw new Error(`syncRecordValues returned ${response.status}`)
    const data = await response.json()
    const out = new Map()
    for (const [id, record] of Object.entries(data?.recordMap?.custom_emoji ?? {})) {
      const url = record?.value?.value?.url ?? record?.value?.url
      if (url) out.set(id, url)
    }
    return out
  })

  for (const wrapper of Object.values(recordMap.block)) {
    const value = wrapper?.value?.value ?? wrapper?.value
    const match = CUSTOM_EMOJI_PATTERN.exec(value?.format?.page_icon ?? '')
    const url = match && urls.get(match[2])
    if (url) value.format.page_icon = url
  }
}

/* -------------------------------------------------------------- the walk */

const fetchPage = (pageId) =>
  withRetry(`page ${pageId}`, async () => {
    const recordMap = await notion.getPage(pageId)
    await resolveCustomEmoji(recordMap)
    return recordMap
  })

/** Child pages, following both child pages and inline databases. */
function childrenOf(pageId, recordMap) {
  const value = (id) => getBlockValue(recordMap.block[id])
  const children = []
  const seen = new Set()

  const visit = (id) => {
    const block = value(id)
    if (!block || seen.has(id)) return
    seen.add(id)

    if (block.type === 'page' && id !== pageId) {
      children.push({ pageId: id, title: getBlockTitle(block, recordMap) })
      return
    }

    // An inline database: its rows are the child pages. A walker that only
    // follows child_page blocks finds nothing here.
    if (typeof block.type === 'string' && block.type.startsWith('collection_view')) {
      const collectionId = getBlockCollectionId(block, recordMap)
      const query = (collectionId && recordMap.collection_query?.[collectionId]) || {}
      for (const viewId of Object.keys(query)) {
        const result = query[viewId]
        const rowIds = result?.collection_group_results?.blockIds ?? result?.blockIds ?? []
        for (const rowId of rowIds) {
          const row = value(rowId)
          if (row && !seen.has(rowId)) {
            seen.add(rowId)
            children.push({ pageId: rowId, title: getBlockTitle(row, recordMap) })
          }
        }
      }
      return
    }

    for (const childId of block.content || []) visit(childId)
  }

  for (const childId of value(pageId)?.content || []) visit(childId)
  return children
}

/* ----------------------------------------------------------------- images */

const ASSET_HOSTS = [
  'notion.com',
  'notion.so',
  'notion-static.com',
  'notionusercontent.com',
  'amazonaws.com',
]

const isNotionHosted = (url) => {
  try {
    const { hostname } = new URL(url)
    return ASSET_HOSTS.some((host) => hostname.endsWith(host))
  } catch {
    return false
  }
}

const ASSET_BLOCK_TYPES = new Set(['video', 'file', 'pdf', 'audio'])

/**
 * Every Notion-hosted asset a page references.
 *
 * Images and non-images are reached differently. react-notion-x resolves an
 * image through mapImageUrl, so the key we have to match later is whatever
 * defaultMapImageUrl produces. Video, audio, PDF and file blocks bypass
 * mapImageUrl entirely and read recordMap.signed_urls instead -- and those
 * signed URLs expire about an hour after they are issued, so a static build
 * has to rewrite them to local files or the assets break shortly after deploy.
 *
 * Both are hashed on the raw Notion URL, which is stable, rather than on the
 * signed URL, which changes on every fetch and would rewrite every filename.
 */
function assetsOf(recordMap) {
  const assets = []
  const signedUrls = recordMap.signed_urls ?? {}

  const add = (raw, block, kind) => {
    if (!raw || typeof raw !== 'string') return
    if (!/^(https?:|attachment:)/.test(raw)) return // plain emoji and the like

    const mapped = defaultMapImageUrl(raw, block)
    const download = signedUrls[raw] ?? mapped ?? raw
    if (!isNotionHosted(download)) return

    assets.push({ raw, blockId: block.id, kind, lookupKey: mapped, download })
  }

  for (const wrapper of Object.values(recordMap.block)) {
    const block = wrapper?.value?.value ?? wrapper?.value
    if (!block) continue

    add(block.format?.page_cover, block, 'image')
    add(block.format?.page_icon, block, 'image')

    if (block.type === 'image') {
      add(block.properties?.source?.[0]?.[0], block, 'image')
    } else if (ASSET_BLOCK_TYPES.has(block.type)) {
      add(block.properties?.source?.[0]?.[0], block, 'file')
    }
  }
  return assets
}

const EXTENSION_BY_TYPE = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/gif': '.gif',
  'image/webp': '.webp',
  'image/svg+xml': '.svg',
  'image/avif': '.avif',
  'video/mp4': '.mp4',
  'video/quicktime': '.mov',
  'video/webm': '.webm',
  'audio/mpeg': '.mp3',
  'application/pdf': '.pdf',
}

async function downloadAsset(asset, existing) {
  const key = createHash('sha1').update(asset.raw).digest('hex').slice(0, 20)

  // Already downloaded on an earlier run and still on disk: leave it alone.
  if (existing.has(key)) return { key, file: existing.get(key), reused: true }

  return withRetry(`asset ${key}`, async () => {
    const response = await fetch(asset.download, {
      redirect: 'follow',
      headers: { 'user-agent': USER_AGENT },
      signal: AbortSignal.timeout(120_000),
    })
    if (!response.ok) {
      const err = new Error(`upstream returned ${response.status}`)
      // 4xx is an answer, not a hiccup.
      if (response.status >= 400 && response.status < 500) err.permanent = true
      throw err
    }

    const buffer = Buffer.from(await response.arrayBuffer())
    // A zero-byte file caches the failure permanently, so treat it as one.
    if (!buffer.length) throw new Error('empty response body')

    const contentType = (response.headers.get('content-type') ?? '').split(';')[0]
    const extension =
      EXTENSION_BY_TYPE[contentType] ||
      extname(new URL(asset.download).pathname).toLowerCase() ||
      extname(new URL(asset.raw.replace(/^attachment:/, 'https://x/')).pathname).toLowerCase() ||
      '.bin'
    const file = `${key}${extension}`
    if (!DRY_RUN) await writeFile(join(ASSETS_DIR, file), buffer)
    return { key, file, bytes: buffer.length }
  })
}

/* ------------------------------------------------------------------ prune */

/**
 * Trims a record map before it is written. Every byte here is serialised into
 * the HTML of the page that renders it, so anything the renderer does not read
 * is pure weight -- and the leftover signed URLs carry access tokens that
 * expire an hour after the build, so they are worse than useless.
 */
function pruneRecordMap(recordMap) {
  // Keep only the signed URLs we rewrote to local files. The rest point at
  // assets we already downloaded, or at ones we could not.
  if (recordMap.signed_urls) {
    recordMap.signed_urls = Object.fromEntries(
      Object.entries(recordMap.signed_urls).filter(([, value]) =>
        String(value).startsWith('/notion-assets/')
      )
    )
  }

  for (const wrapper of Object.values(recordMap.block)) {
    const block = wrapper?.value?.value ?? wrapper?.value
    if (!block?.format) continue
    // Notion's own social preview, which this site does not render.
    delete block.format.social_media_image_preview_url
  }

  // Permissions and space metadata are not read by the renderer.
  for (const wrapper of Object.values(recordMap.block)) {
    const block = wrapper?.value?.value ?? wrapper?.value
    if (block) delete block.permissions
  }

  return recordMap
}

/* ------------------------------------------------------------------ main */

async function main() {
  console.log(DRY_RUN ? 'Fetching from Notion (dry run)\n' : 'Fetching from Notion\n')
  const startedAt = Date.now()

  // --- walk the tree -------------------------------------------------------
  const pages = new Map()
  const slugToPage = {}
  const pageIdToSlug = {}
  const recordMaps = new Map()

  const walk = async (pageId, title, slug, breadcrumb) => {
    if (pages.has(pageId)) return
    pages.set(pageId, true)

    const recordMap = await fetchPage(pageId)
    recordMaps.set(pageId, recordMap)

    if (!slugToPage[slug]) {
      slugToPage[slug] = { pageId, title: title.trim(), breadcrumb }
      pageIdToSlug[pageId] = slug
    }

    const children = childrenOf(pageId, recordMap)
    await mapLimit(children, 3, (child) =>
      walk(child.pageId, child.title, resolveSlug(child.title, slug), [
        ...breadcrumb,
        child.title.trim(),
      ])
    )
  }

  await walk(NOTION_ROOT_PAGE_ID, 'Giveth Docs', '/', [])
  const slugs = Object.keys(slugToPage)
  console.log(`Walked ${slugs.length} pages in ${((Date.now() - startedAt) / 1000).toFixed(0)}s`)

  if (slugs.length < 10) {
    throw new Error(
      `only ${slugs.length} pages found -- refusing to overwrite content with a bad read`
    )
  }

  // --- images --------------------------------------------------------------
  if (!DRY_RUN) await mkdir(ASSETS_DIR, { recursive: true })

  const existing = new Map()
  if (existsSync(ASSETS_DIR)) {
    for (const file of await readdir(ASSETS_DIR)) {
      existing.set(file.replace(/\.[^.]+$/, ''), file)
    }
  }

  const assetsByPage = new Map()
  const allAssets = new Map() // raw url -> asset (deduped across pages)
  for (const [pageId, recordMap] of recordMaps) {
    const assets = assetsOf(recordMap)
    assetsByPage.set(pageId, assets)
    for (const asset of assets) {
      if (!allAssets.has(asset.raw)) allAssets.set(asset.raw, asset)
    }
  }

  const assetList = [...allAssets.values()]
  console.log(`\nDownloading ${assetList.length} assets (${existing.size} already local)`)

  const localByRaw = new Map()
  let downloaded = 0
  let reused = 0
  const failures = []

  await mapLimit(assetList, 4, async (asset) => {
    try {
      const result = await downloadAsset(asset, existing)
      localByRaw.set(asset.raw, `/notion-assets/${result.file}`)
      if (result.reused) reused++
      else downloaded++
    } catch (err) {
      failures.push({ url: asset.raw, error: err.message })
    }
  })

  console.log(`  ${downloaded} downloaded, ${reused} reused, ${failures.length} failed`)
  for (const failure of failures) {
    console.warn(`  ! ${failure.error}: ${failure.url.slice(0, 110)}`)
  }

  /*
   * Point the record maps at the local copies. Images are matched through the
   * per-page map the renderer consults; video and file blocks read
   * signed_urls directly, so those entries are rewritten in place -- otherwise
   * they would still hold URLs that expire an hour after the build.
   */
  const imagesByPage = new Map()
  for (const [pageId, recordMap] of recordMaps) {
    const images = {}
    for (const asset of assetsByPage.get(pageId)) {
      const local = localByRaw.get(asset.raw)
      if (!local) continue
      if (asset.kind === 'image') {
        if (asset.lookupKey) images[asset.lookupKey] = local
      } else {
        recordMap.signed_urls ??= {}
        recordMap.signed_urls[asset.raw] = local
        if (asset.blockId) recordMap.signed_urls[asset.blockId] = local
      }
    }
    imagesByPage.set(pageId, images)
  }

  // --- search index --------------------------------------------------------
  const searchIndex = slugs.map((slug) => {
    const entry = slugToPage[slug]
    const recordMap = recordMaps.get(entry.pageId)
    const parts = []
    for (const wrapper of Object.values(recordMap.block)) {
      const block = getBlockValue(wrapper)
      const title = block?.properties?.title
      if (!title) continue
      const text = getTextContent(title)
      if (text) parts.push(text)
    }
    return {
      slug,
      title: entry.title,
      breadcrumb: entry.breadcrumb,
      text: parts.join(' \n ').slice(0, 20_000),
    }
  })

  // --- write ---------------------------------------------------------------
  if (DRY_RUN) {
    console.log('\nDry run: nothing written.')
    return
  }

  await rm(PAGES_DIR, { recursive: true, force: true })
  await mkdir(PAGES_DIR, { recursive: true })

  for (const [pageId, recordMap] of recordMaps) {
    // Each page carries only the images it uses, so a page's HTML does not
    // have to inline the whole site's image map.
    await writeFile(
      join(PAGES_DIR, `${pageId}.json`),
      JSON.stringify({
        recordMap: pruneRecordMap(recordMap),
        images: imagesByPage.get(pageId) ?? {},
      })
    )
  }

  await writeFile(
    join(CONTENT_DIR, 'site-map.json'),
    JSON.stringify(
      { rootPageId: NOTION_ROOT_PAGE_ID, generatedAt: new Date().toISOString(), slugToPage, pageIdToSlug },
      null,
      2
    )
  )
  // The search index is a static asset: the browser fetches it on first use.
  await writeFile(join(PUBLIC_DIR, 'search-index.json'), JSON.stringify(searchIndex))

  // Drop assets nothing references any more.
  const referenced = new Set([...localByRaw.values()].map((path) => path.split('/').pop()))
  let removed = 0
  for (const file of await readdir(ASSETS_DIR)) {
    if (!referenced.has(file)) {
      await rm(join(ASSETS_DIR, file))
      removed++
    }
  }

  console.log(`\nWrote ${recordMaps.size} pages, ${localByRaw.size} assets`)
  if (removed) console.log(`Removed ${removed} unreferenced assets`)
  console.log(`Done in ${((Date.now() - startedAt) / 1000).toFixed(0)}s`)

  if (failures.length) {
    console.error(`\n${failures.length} asset(s) could not be fetched.`)
    process.exitCode = 1
  }
}

await mkdir(CONTENT_DIR, { recursive: true })
main().catch((err) => {
  console.error('\nFetch failed:', err.message)
  console.error('Committed content left untouched.')
  process.exit(1)
})
