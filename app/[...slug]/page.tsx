import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { NotionPage } from '@/components/NotionPage'
import { getPage } from '@/lib/notion'
import { canonicalPath, getSiteMap } from '@/lib/site-map'

export const revalidate = 300 // keep in sync with PAGE_REVALIDATE_SECONDS (must be a literal)

/**
 * Pages created in Notion after the last build still resolve -- the site map is
 * re-read on revalidation and this route renders whatever it finds.
 */
export const dynamicParams = true

export async function generateStaticParams() {
  const siteMap = await getSiteMap()
  return Object.keys(siteMap.slugToPage)
    .filter((slug) => slug !== '/')
    .map((slug) => ({ slug: slug.replace(/^\//, '').split('/') }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const siteMap = await getSiteMap()
  const entry = siteMap.slugToPage[canonicalPath(slug.join('/'))]
  if (!entry) return {}
  return {
    title: entry.title,
    alternates: { canonical: canonicalPath(slug.join('/')) },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const path = canonicalPath(slug.join('/'))
  const siteMap = await getSiteMap()
  const entry = siteMap.slugToPage[path]
  if (!entry) notFound()

  const recordMap = await getPage(entry.pageId)
  return (
    <NotionPage
      recordMap={recordMap}
      rootPageId={siteMap.rootPageId}
      pageIdToSlug={siteMap.pageIdToSlug}
    />
  )
}
