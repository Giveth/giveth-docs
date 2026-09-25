'use client'

import Link from 'next/link'
import { useState } from 'react'

import { SIDEBAR, type NavSection } from '@/config/navigation'
import { ChevronDownIcon, SECTION_ICONS, SearchIcon } from './icons'

function sectionContains(section: NavSection, pathname: string) {
  if (section.href === pathname) return true
  return (section.items ?? []).some((item) => item.href === pathname)
}

function SectionIcon({ name }: { name: string }) {
  const Icon = SECTION_ICONS[name]
  return Icon ? <Icon size={16} /> : null
}

function Section({ section, pathname }: { section: NavSection; pathname: string }) {
  // The section holding the current page starts expanded; the rest start closed,
  // as on Super.
  const [open, setOpen] = useState(() => sectionContains(section, pathname))

  // A bare link, not a category. FAQ is one -- do not assume every top-level
  // entry has children.
  if (!section.items?.length) {
    return (
      <Link
        className={`super-navigation-menu__item${
          section.href === pathname ? ' active' : ''
        }`}
        href={section.href ?? '/'}
      >
        <SectionIcon name={section.icon} />
        <div className="super-navigation-menu__item-content">
          <p className="super-navigation-menu__item-title">{section.label}</p>
        </div>
      </Link>
    )
  }

  return (
    <div
      className="super-navigation-menu__list"
      data-state={open ? 'open' : 'closed'}
    >
      <button
        type="button"
        className="super-navigation-menu__list-header"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <SectionIcon name={section.icon} />
        <div className="super-navigation-menu__item-content">
          <p className="super-navigation-menu__item-title">{section.label}</p>
        </div>
        <ChevronDownIcon size={16} className="super-navigation-menu__list-chevron" />
      </button>

      <div className="super-navigation-menu__list-items">
        {section.items.map((item) => (
          <Link
            key={item.href}
            className={`super-navigation-menu__item${
              item.href === pathname ? ' active' : ''
            }`}
            href={item.href}
          >
            <div className="super-navigation-menu__item-content">
              <p className="super-navigation-menu__item-title">{item.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

/**
 * Global chrome: the sidebar shows on every page including the homepage, and is
 * not tied to whether the current page appears in it.
 */
export function Sidebar({
  pathname,
  isOpen,
  onOpenSearch,
}: {
  pathname: string
  isOpen: boolean
  onOpenSearch: () => void
}) {
  return (
    <div className={`super-sidebar${isOpen ? ' is-open' : ''}`}>
      <div className="super-sidebar__content">
        <div className="super-sidebar__heading">
          <button type="button" className="super-search-input" onClick={onOpenSearch}>
            <SearchIcon size={14} />
            <p>Search</p>
          </button>
        </div>
        <nav className="super-navigation-menu__items" aria-label="Documentation">
          {SIDEBAR.map((section) => (
            <Section key={section.label} section={section} pathname={pathname} />
          ))}
        </nav>
      </div>
    </div>
  )
}
