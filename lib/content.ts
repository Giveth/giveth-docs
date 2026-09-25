import { readFile } from 'node:fs/promises'
import path from 'node:path'

import type { ExtendedRecordMap } from 'notion-types'

/*
 * The site's content, read from disk. Everything here was written by
 * scripts/fetch-notion.mjs at build time -- nothing in the running site talks
 * to Notion.
 */
const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface SiteMapEntry {
  pageId: string
  title: string
  /** Titles from the root down to this page, root excluded. */
  breadcrumb: string[]
}

export interface SiteMap {
  rootPageId: string
  generatedAt: string
  /** Canonical url path (leading slash, no trailing slash) -> page. */
  slugToPage: Record<string, SiteMapEntry>
  /** Notion page id (dashed) -> canonical url path. */
  pageIdToSlug: Record<string, string>
}

export interface PageContent {
  recordMap: ExtendedRecordMap
  /** Notion image URL -> the local file the build stage downloaded it to. */
  images: Record<string, string>
}

async function readJson<T>(...segments: string[]): Promise<T> {
  const file = path.join(CONTENT_DIR, ...segments)
  try {
    return JSON.parse(await readFile(file, 'utf8')) as T
  } catch (err) {
    throw new Error(
      `Could not read ${path.relative(process.cwd(), file)}. ` +
        `Run "npm run fetch-notion" to populate content/. (${(err as Error).message})`
    )
  }
}

let siteMapPromise: Promise<SiteMap> | undefined

export function getSiteMap(): Promise<SiteMap> {
  siteMapPromise ??= readJson<SiteMap>('site-map.json')
  return siteMapPromise
}

export function getPageContent(pageId: string): Promise<PageContent> {
  return readJson<PageContent>('pages', `${pageId}.json`)
}

/** Normalises "/a/b/", "a/b" and "" to the canonical "/a/b" and "/". */
export function canonicalPath(urlPath: string): string {
  const trimmed = `/${urlPath}`.replace(/\/+/g, '/').replace(/\/+$/, '')
  return trimmed || '/'
}
