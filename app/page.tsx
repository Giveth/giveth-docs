import { NotionPage } from '@/components/NotionPage'
import { getPage } from '@/lib/notion'
import { getSiteMap } from '@/lib/site-map'

export const revalidate = 300 // keep in sync with PAGE_REVALIDATE_SECONDS (must be a literal)

export default async function Home() {
  const siteMap = await getSiteMap()
  const recordMap = await getPage(siteMap.rootPageId)
  return (
    <NotionPage
      recordMap={recordMap}
      rootPageId={siteMap.rootPageId}
      pageIdToSlug={siteMap.pageIdToSlug}
    />
  )
}
