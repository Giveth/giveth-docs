import { revalidateTag } from 'next/cache'
import type { NextRequest } from 'next/server'

import { TAG_PAGE, TAG_SITE_MAP } from '@/lib/config'

export const runtime = 'nodejs'

/**
 * On-demand refresh, so a Notion automation (or a person with the secret) can
 * push an edit live immediately instead of waiting for the ISR window.
 *
 *   POST /api/revalidate            -> refresh the whole site
 *   POST /api/revalidate            -> body {"pageId": "..."} refreshes one page
 *
 * Authenticate with `Authorization: Bearer <REVALIDATE_SECRET>` or `?secret=`.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET
  if (!secret) {
    return Response.json(
      { revalidated: false, error: 'REVALIDATE_SECRET is not configured' },
      { status: 503 }
    )
  }

  const provided =
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ??
    request.nextUrl.searchParams.get('secret') ??
    ''

  if (provided !== secret) {
    return Response.json({ revalidated: false, error: 'unauthorized' }, { status: 401 })
  }

  let pageId: string | undefined
  try {
    const body = await request.json()
    pageId = typeof body?.pageId === 'string' ? body.pageId : undefined
  } catch {
    // No body is fine -- that means "refresh everything".
  }

  const tags = pageId ? [TAG_PAGE(pageId)] : [TAG_SITE_MAP]
  for (const tag of tags) revalidateTag(tag)

  // A new or renamed page changes routing, so the site map always goes too.
  if (pageId) revalidateTag(TAG_SITE_MAP)

  return Response.json({ revalidated: true, tags, at: Date.now() })
}
