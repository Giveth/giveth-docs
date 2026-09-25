import { NotionPage } from '@/components/NotionPage'
import { getPageContent, getSiteMap } from '@/lib/content'

export default async function Home() {
  const siteMap = await getSiteMap()
  const { recordMap, images } = await getPageContent(siteMap.rootPageId)
  return (
    <NotionPage
      recordMap={recordMap}
      rootPageId={siteMap.rootPageId}
      pageIdToSlug={siteMap.pageIdToSlug}
      images={images}
    />
  )
}
