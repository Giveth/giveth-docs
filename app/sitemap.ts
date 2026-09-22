import type { MetadataRoute } from 'next'

import { SITE } from '@/lib/config'
import { getSiteMap } from '@/lib/site-map'

export const revalidate = 900

/**
 * Built from the live Notion tree. Super's old sitemap listed ~130 URLs, most
 * of them pages long since deleted from Notion; those are intentionally gone
 * and are not reinstated here.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteMap = await getSiteMap()
  return Object.keys(siteMap.slugToPage).map((slug) => ({
    url: `https://${SITE.domain}${slug === '/' ? '' : slug}`,
    changeFrequency: 'weekly' as const,
    priority: slug === '/' ? 1 : 0.7,
  }))
}
