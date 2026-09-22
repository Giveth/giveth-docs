'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import { defaultMapImageUrl } from 'notion-utils'

/**
 * The heavier block types ship as separate entry points so they are not in the
 * main bundle. They stay server-rendered (no `ssr: false`) because the card
 * grids are the site's primary navigation and must exist in the HTML.
 */
const Collection = dynamic(() =>
  import('react-notion-x/third-party/collection').then((m) => m.Collection)
)
const Code = dynamic(() =>
  import('react-notion-x/third-party/code').then((m) => m.Code)
)
const Equation = dynamic(() =>
  import('react-notion-x/third-party/equation').then((m) => m.Equation)
)
const Modal = dynamic(
  () => import('react-notion-x/third-party/modal').then((m) => m.Modal),
  { ssr: false }
)

export interface NotionPageProps {
  recordMap: ExtendedRecordMap
  rootPageId: string
  /** Notion page id -> the url path this site serves it at. */
  pageIdToSlug: Record<string, string>
  fullPage?: boolean
}

export function NotionPage({
  recordMap,
  rootPageId,
  pageIdToSlug,
  fullPage = true,
}: NotionPageProps) {
  /**
   * Internal links point at the slug we serve, so Super's hand-set URLs keep
   * working inside page content too. Unknown ids fall back to the Notion id,
   * which the catch-all route also resolves.
   */
  const mapPageUrl = (pageId: string) => {
    const id = pageId.replace(/-/g, '')
    for (const [knownId, slug] of Object.entries(pageIdToSlug)) {
      if (knownId.replace(/-/g, '') === id) return slug
    }
    return `/${id}`
  }

  /**
   * Every image goes through our own proxy. notion-utils has already rewritten
   * the expiring S3 links into Notion's stable image endpoint, so what we proxy
   * is a URL that stays valid; the proxy exists so images are served from this
   * origin and can be cached by a CDN rather than hotlinked.
   */
  const mapImageUrl = (url: string | undefined, block: any) => {
    if (!url) return undefined
    const resolved = defaultMapImageUrl(url, block)
    if (!resolved) return undefined
    if (resolved.startsWith('/')) return resolved
    return `/api/image?url=${encodeURIComponent(resolved)}`
  }

  return (
    <NotionRenderer
      recordMap={recordMap}
      rootPageId={rootPageId}
      fullPage={fullPage}
      darkMode={false}
      disableHeader
      previewImages={false}
      mapPageUrl={mapPageUrl}
      mapImageUrl={mapImageUrl}
      components={{
        Collection,
        Code,
        Equation,
        Modal,
        nextLink: Link,
      }}
    />
  )
}
