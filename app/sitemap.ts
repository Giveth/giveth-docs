import type { MetadataRoute } from 'next'

// Required by output: 'export' -- generated once at build time.
export const dynamic = 'force-static'

import { SITE } from '@/lib/config'
import { getSiteMap } from '@/lib/content'

/**
 * Built from the Notion tree captured at build time. Super's old sitemap listed
 * ~130 URLs, most of them pages long since deleted from Notion; those are
 * intentionally gone and are not reinstated here.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteMap = await getSiteMap()
  return Object.keys(siteMap.slugToPage).map((slug) => ({
    url: `https://${SITE.domain}${slug === '/' ? '' : slug}`,
    changeFrequency: 'weekly' as const,
    priority: slug === '/' ? 1 : 0.7,
  }))
}
