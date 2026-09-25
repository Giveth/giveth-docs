/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
   * The site is a static export served from GitHub Pages, so there is no server
   * at runtime and nothing talks to Notion when a visitor loads a page. Content
   * comes from content/, refreshed by scripts/fetch-notion.mjs.
   */
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['react-notion-x', 'notion-client', 'notion-utils', 'notion-types'],
  images: {
    // No image optimiser without a server; the build stage has already
    // downloaded every Notion image into public/notion-assets/.
    unoptimized: true,
  },
}
export default nextConfig
