import type { Metadata, Viewport } from 'next'

import { SiteChrome } from '@/components/SiteChrome'
import { THEME_INIT_SCRIPT } from '@/components/ThemeToggle'
import { SITE } from '@/lib/config'

import 'react-notion-x/styles.css'
import './globals.css'
import './chrome.css'
import './notion.css'
import './search.css'

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    siteName: SITE.name,
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1b1657' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Sets the theme class before first paint, so there is no flash. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
