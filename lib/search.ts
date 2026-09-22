import { getBlockValue, getTextContent } from 'notion-utils'
import { unstable_cache } from 'next/cache'

import { SITE_MAP_REVALIDATE_SECONDS, TAG_SITE_MAP } from './config'
import { fetchPage } from './notion'
import { getSiteMap } from './site-map'

export interface SearchDocument {
  slug: string
  title: string
  breadcrumb: string[]
  text: string
}

export interface SearchResult {
  slug: string
  title: string
  breadcrumb: string[]
  excerpt: string
}

/** Plain text of every text-bearing block on a page, for matching. */
function plainTextOf(recordMap: Awaited<ReturnType<typeof fetchPage>>): string {
  const parts: string[] = []
  for (const wrapper of Object.values(recordMap.block)) {
    const block = getBlockValue(wrapper) as any
    const title = block?.properties?.title
    if (!title) continue
    const text = getTextContent(title)
    if (text) parts.push(text)
  }
  return parts.join(' \n ')
}

async function buildSearchIndex(): Promise<SearchDocument[]> {
  const siteMap = await getSiteMap()
  const entries = Object.entries(siteMap.slugToPage)
  const documents: SearchDocument[] = []

  // Sequential on purpose: the index rebuild runs in the background on an ISR
  // revalidation, so there is no reason to hammer Notion for it.
  for (const [slug, entry] of entries) {
    try {
      const recordMap = await fetchPage(entry.pageId)
      documents.push({
        slug,
        title: entry.title,
        breadcrumb: entry.breadcrumb,
        text: plainTextOf(recordMap),
      })
    } catch (err) {
      console.error(`[search] skipped ${slug}:`, err)
    }
  }
  return documents
}

export function getSearchIndex(): Promise<SearchDocument[]> {
  return unstable_cache(buildSearchIndex, ['notion-search-index'], {
    revalidate: SITE_MAP_REVALIDATE_SECONDS,
    tags: [TAG_SITE_MAP],
  })()
}

function excerptAround(text: string, query: string): string {
  const index = text.toLowerCase().indexOf(query.toLowerCase())
  if (index < 0) return text.slice(0, 160).trim()
  const start = Math.max(0, index - 60)
  const excerpt = text.slice(start, start + 200).replace(/\s+/g, ' ').trim()
  return `${start > 0 ? '…' : ''}${excerpt}${start + 200 < text.length ? '…' : ''}`
}

export function searchDocuments(
  documents: SearchDocument[],
  query: string,
  limit = 12
): SearchResult[] {
  const needle = query.trim().toLowerCase()
  if (needle.length < 2) return []

  const scored = documents
    .map((doc) => {
      const title = doc.title.toLowerCase()
      const text = doc.text.toLowerCase()
      let score = 0
      if (title === needle) score += 100
      else if (title.startsWith(needle)) score += 60
      else if (title.includes(needle)) score += 40
      if (doc.breadcrumb.join(' ').toLowerCase().includes(needle)) score += 10

      const occurrences = text.split(needle).length - 1
      score += Math.min(occurrences, 10) * 3

      return { doc, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return scored.map(({ doc }) => ({
    slug: doc.slug,
    title: doc.title,
    breadcrumb: doc.breadcrumb,
    excerpt: excerptAround(doc.text, needle),
  }))
}
