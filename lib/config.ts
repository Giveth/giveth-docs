/**
 * Site-wide constants.
 *
 * The Notion root page is the "Giveth Docs" page. Its body is an inline
 * database whose four rows are the top-level sections -- see
 * NOTION-RENDERER-PLAN.md section 4.
 */
export const NOTION_ROOT_PAGE_ID = '1703ab28-d48c-806f-883e-fb81cbf40c1d'

export const SITE = {
  name: 'Giveth Docs',
  domain: 'docs.giveth.io',
  description: 'The Future of Giving, Documented',
}

/**
 * How long a cached Notion read stays fresh. Notion edits show up within this
 * window without a deploy; /api/revalidate pushes them immediately.
 */
export const PAGE_REVALIDATE_SECONDS = 300
export const SITE_MAP_REVALIDATE_SECONDS = 900

/** Cache tags, so on-demand revalidation can target one thing or everything. */
export const TAG_SITE_MAP = 'notion-site-map'
export const TAG_PAGE = (pageId: string) => `notion-page-${pageId}`
