import type { MetadataRoute } from 'next'

// Required by output: 'export' -- generated once at build time.
export const dynamic = 'force-static'

import { SITE } from '@/lib/config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `https://${SITE.domain}/sitemap.xml`,
  }
}
