import type { NextRequest } from 'next/server'

export const runtime = 'nodejs'

/**
 * Image proxy.
 *
 * Notion's own image endpoint never expires -- it 302s to a freshly signed CDN
 * URL on every request -- so the URLs baked into cached HTML stay valid. We
 * still proxy rather than hotlink, so the images are served from our own origin
 * and a CDN in front of this route can cache them.
 */
const ALLOWED_HOSTS = new Set([
  'app.notion.com',
  'www.notion.so',
  'notion.so',
  'img.notionusercontent.com',
  'file.notion.com',
  'prod-files-secure.s3.us-west-2.amazonaws.com',
  's3.us-west-2.amazonaws.com',
  'images.unsplash.com',
])

const ONE_DAY = 60 * 60 * 24

export async function GET(request: NextRequest) {
  const target = request.nextUrl.searchParams.get('url')
  if (!target) {
    return new Response('missing url', { status: 400 })
  }

  let url: URL
  try {
    url = new URL(target)
  } catch {
    return new Response('invalid url', { status: 400 })
  }

  if (url.protocol !== 'https:' || !ALLOWED_HOSTS.has(url.hostname)) {
    return new Response('host not allowed', { status: 400 })
  }

  let upstream: Response
  try {
    upstream = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': 'giveth-docs-image-proxy' },
      next: { revalidate: ONE_DAY },
    })
  } catch {
    return new Response('upstream fetch failed', { status: 502 })
  }

  if (!upstream.ok || !upstream.body) {
    return new Response('upstream error', { status: 502 })
  }

  const contentType = upstream.headers.get('content-type') ?? 'application/octet-stream'
  if (!contentType.startsWith('image/') && !contentType.startsWith('video/')) {
    return new Response('not an image', { status: 415 })
  }

  // A zero-length body would otherwise be cached as a permanent broken image.
  const contentLength = upstream.headers.get('content-length')
  if (contentLength === '0') {
    return new Response('empty upstream body', { status: 502 })
  }

  const headers = new Headers({
    'content-type': contentType,
    'cache-control': `public, max-age=${ONE_DAY}, s-maxage=${ONE_DAY}, stale-while-revalidate=${ONE_DAY * 7}`,
  })
  if (contentLength) headers.set('content-length', contentLength)

  return new Response(upstream.body, { status: 200, headers })
}
