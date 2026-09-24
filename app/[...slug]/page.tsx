import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { NotionPage } from '@/components/NotionPage'
import { canonicalPath, getPageContent, getSiteMap } from '@/lib/content'

/**
 * Every page is generated at build time from content/. A URL that is not in the
 * site map is genuinely not part of the docs, so it 404s rather than being
 * looked up somewhere at runtime.
 */
export const dynamicParams = false

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
  const path = canonicalPath(slug.join('/'))
  const entry = siteMap.slugToPage[path]
  if (!entry) return {}
  return { title: entry.title, alternates: { canonical: path } }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const siteMap = await getSiteMap()
  const entry = siteMap.slugToPage[canonicalPath(slug.join('/'))]
  if (!entry) notFound()

  const { recordMap, images } = await getPageContent(entry.pageId)
  return (
    <NotionPage
      recordMap={recordMap}
      rootPageId={siteMap.rootPageId}
      pageIdToSlug={siteMap.pageIdToSlug}
      images={images}
    />
  )
}
