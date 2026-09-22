'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { SearchDialog } from './SearchDialog'
import { Sidebar } from './Sidebar'

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Navigating away should close the mobile panel.
  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [pathname])

  // Cmd/Ctrl-K opens search, as on most docs sites.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="super-root">
      <Navbar
        pathname={pathname}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <div className="super-content-wrapper has-sidebar">
        <Sidebar
          pathname={pathname}
          isOpen={menuOpen}
          onOpenSearch={() => setSearchOpen(true)}
        />
        <main className="super-content">
          {children}
          <Footer />
        </main>
      </div>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
