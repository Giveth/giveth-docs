import { NotionAPI } from 'notion-client'
import type { ExtendedRecordMap } from 'notion-types'
import { unstable_cache } from 'next/cache'

import { PAGE_REVALIDATE_SECONDS, TAG_PAGE } from './config'

/**
 * Notion's private API. It needs no credentials for public pages, which the
 * Giveth docs tree is -- verified against the live workspace. If the tree is
 * ever made private this is where an `authToken` / `activeUser` would go.
 */
export const notion = new NotionAPI()

/**
 * Custom emoji (a workspace-uploaded image used as a page icon) appear in the
 * record map as `notion://custom_emoji/<spaceId>/<emojiId>`. Nothing in
 * notion-utils or react-notion-x resolves that scheme, and Notion's image
 * endpoint 404s on it, so the icon renders broken. The record has to be looked
 * up separately; it yields a plain public URL.
 */
const CUSTOM_EMOJI_PATTERN = /^notion:\/\/custom_emoji\/([\w-]+)\/([\w-]+)$/

async function fetchCustomEmojiUrls(
  refs: Array<{ spaceId: string; id: string }>
): Promise<Map<string, string>> {
  const urls = new Map<string, string>()
  if (!refs.length) return urls

  const response = await fetch('https://www.notion.so/api/v3/syncRecordValues', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      // Without a browser-shaped user agent Notion answers 403 here.
      'user-agent': 'Mozilla/5.0 (compatible; giveth-docs/1.0)',
    },
    body: JSON.stringify({
      requests: refs.map((ref) => ({
        pointer: { table: 'custom_emoji', id: ref.id, spaceId: ref.spaceId },
        version: -1,
      })),
    }),
  })

  if (!response.ok) throw new Error(`syncRecordValues returned ${response.status}`)

  const data = await response.json()
  for (const [id, record] of Object.entries<any>(data?.recordMap?.custom_emoji ?? {})) {
    const url = record?.value?.value?.url ?? record?.value?.url
    if (url) urls.set(id, url)
  }
  return urls
}

/** Rewrites every custom-emoji icon in the record map to its real image URL. */
async function resolveCustomEmoji(recordMap: ExtendedRecordMap): Promise<void> {
  const refs = new Map<string, { spaceId: string; id: string }>()

  const iconsOf = (value: any) => [value?.format]

  for (const wrapper of Object.values<any>(recordMap.block)) {
    for (const format of iconsOf(wrapper?.value?.value ?? wrapper?.value)) {
      const match = CUSTOM_EMOJI_PATTERN.exec(format?.page_icon ?? '')
      if (match) refs.set(match[2], { spaceId: match[1], id: match[2] })
    }
  }

  if (!refs.size) return

  let urls: Map<string, string>
  try {
    urls = await fetchCustomEmojiUrls([...refs.values()])
  } catch (err) {
    // A broken icon is better than a broken page.
    console.error('[notion] could not resolve custom emoji:', err)
    return
  }

  for (const wrapper of Object.values<any>(recordMap.block)) {
    const value = wrapper?.value?.value ?? wrapper?.value
    const match = CUSTOM_EMOJI_PATTERN.exec(value?.format?.page_icon ?? '')
    const url = match && urls.get(match[2])
    if (url) value.format.page_icon = url
  }
}

/** Uncached read. Use `getPage` unless you deliberately want a fresh fetch. */
export async function fetchPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId)
  await resolveCustomEmoji(recordMap)
  return recordMap
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
