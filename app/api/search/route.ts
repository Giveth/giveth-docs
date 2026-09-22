import type { NextRequest } from 'next/server'

import { getSearchIndex, searchDocuments } from '@/lib/search'

export const runtime = 'nodejs'
export const revalidate = 900

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') ?? ''
  if (query.trim().length < 2) {
    return Response.json({ results: [] })
  }

  try {
    const index = await getSearchIndex()
    return Response.json({ results: searchDocuments(index, query) })
  } catch (err) {
    console.error('[search] index unavailable:', err)
    return Response.json({ results: [], error: 'search unavailable' }, { status: 503 })
  }
}
