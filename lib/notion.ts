import { NotionAPI } from 'notion-client'
import type { ExtendedRecordMap } from 'notion-types'
import { unstable_cache } from 'next/cache'

import { PAGE_REVALIDATE_SECONDS, TAG_PAGE } from './config'

/**
 * Notion's private API. It needs no credentials for public pages, which the
 * Giveth docs tree is -- verified against the live workspace. If the tree is
 * ever made private this is where a `authToken` / `activeUser` would go.
 */
export const notion = new NotionAPI()

/** Uncached read. Use `getPage` unless you deliberately want a fresh fetch. */
export function fetchPage(pageId: string): Promise<ExtendedRecordMap> {
  return notion.getPage(pageId)
}

/**
 * Cached read. Each page gets its own tag so a Notion automation can refresh a
 * single page rather than the whole site.
 */
export function getPage(pageId: string): Promise<ExtendedRecordMap> {
  return unstable_cache(() => fetchPage(pageId), ['notion-page', pageId], {
    revalidate: PAGE_REVALIDATE_SECONDS,
    tags: [TAG_PAGE(pageId)],
  })()
}
