import { getBlockCollectionId, getBlockTitle, getBlockValue } from 'notion-utils'
import type { ExtendedRecordMap } from 'notion-types'
import { unstable_cache } from 'next/cache'

import slugMap from '@/scripts/slug_map.json'
import {
  NOTION_ROOT_PAGE_ID,
  SITE_MAP_REVALIDATE_SECONDS,
  TAG_SITE_MAP,
} from './config'
import { fetchPage } from './notion'

export interface SiteMapEntry {
  pageId: string
  title: string
  /** Titles from the root down to this page, root excluded. */
  breadcrumb: string[]
}

export interface SiteMap {
  rootPageId: string
  /** Canonical url path (leading slash, no trailing slash) -> page. */
  slugToPage: Record<string, SiteMapEntry>
  /** Notion page id (dashed) -> canonical url path. */
  pageIdToSlug: Record<string, string>
}

/**
 * Super's slugs were hand-set in its dashboard and are not derivable from page
 * titles -- "Making a Donation" served at /projectdonating. scripts/slug_map.json
 * is the recovered override table, keyed by title because the Notion page ids
 * Super stored are all stale. See NOTION-RENDERER-PLAN.md section 5.
 */
const SLUG_OVERRIDES: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap.by_title).map(([title, slug]) => [
    normalizeTitle(title),
    slug as string,
  ])
)

function normalizeTitle(title: string): string {
  return title.trim().toLowerCase()
}

/** Fallback for pages created in Notion after Super was cancelled. */
export function slugify(title: string): string {
  const slug = title
    .trim()
    .toLowerCase()
    .replace(/['‘’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || 'page'
}

/**
 * A page's url path: the hand-set Super slug when there is one, otherwise a
 * slugified title nested under its parent. New Notion pages therefore get a
 * working URL with no code change.
 */
export function resolveSlug(title: string, parentSlug: string): string {
  const override = SLUG_OVERRIDES[normalizeTitle(title)]
  if (override) return override
  const base = parentSlug === '/' ? '' : parentSlug
  return `${base}/${slugify(title)}`
}

/** Child pages of a page, following both child pages and inline databases. */
function childrenOf(pageId: string, recordMap: ExtendedRecordMap) {
  const value = (id: string) => getBlockValue(recordMap.block[id]) as any
  const children: Array<{ pageId: string; title: string }> = []
  const seen = new Set<string>()

  const visit = (id: string) => {
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
        const result = (query as any)[viewId]
        const rowIds: string[] =
          result?.collection_group_results?.blockIds ?? result?.blockIds ?? []
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

/** Bounded-concurrency map, to stay well under Notion's rate limits. */
async function mapLimit<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>
): Promise<R[]> {
  const results = new Array<R>(items.length)
  let cursor = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++
      results[index] = await fn(items[index])
    }
  })
  await Promise.all(workers)
  return results
}

export async function buildSiteMap(): Promise<SiteMap> {
  const slugToPage: Record<string, SiteMapEntry> = {}
  const pageIdToSlug: Record<string, string> = {}
  const visited = new Set<string>()

  const walk = async (
    pageId: string,
    title: string,
    slug: string,
    breadcrumb: string[]
  ): Promise<void> => {
    if (visited.has(pageId)) return
    visited.add(pageId)

    if (!slugToPage[slug]) {
      slugToPage[slug] = { pageId, title: title.trim(), breadcrumb }
      pageIdToSlug[pageId] = slug
    }

    let recordMap: ExtendedRecordMap
    try {
      recordMap = await fetchPage(pageId)
    } catch (err) {
      console.error(`[site-map] failed to read ${pageId} (${title}):`, err)
      return
    }

    const children = childrenOf(pageId, recordMap)
    await mapLimit(children, 4, (child) =>
      walk(
        child.pageId,
        child.title,
        resolveSlug(child.title, slug),
        [...breadcrumb, child.title.trim()]
      )
    )
  }

  await walk(NOTION_ROOT_PAGE_ID, 'Giveth Docs', '/', [])
  return { rootPageId: NOTION_ROOT_PAGE_ID, slugToPage, pageIdToSlug }
}

export function getSiteMap(): Promise<SiteMap> {
  return unstable_cache(buildSiteMap, ['notion-site-map'], {
    revalidate: SITE_MAP_REVALIDATE_SECONDS,
    tags: [TAG_SITE_MAP],
  })()
}

/** Normalises "/a/b/", "a/b" and "" to the canonical "/a/b" and "/". */
export function canonicalPath(path: string): string {
  const trimmed = `/${path}`.replace(/\/+/g, '/').replace(/\/+$/, '')
  return trimmed || '/'
}
