'use client'

import Image from 'next/image'
import Link from 'next/link'

import { NAVBAR } from '@/config/navigation'
import { MenuIcon, SearchIcon } from './icons'
import { ThemeToggle } from './ThemeToggle'

export function Navbar({
  pathname,
  onToggleMenu,
  onOpenSearch,
}: {
  pathname: string
  onToggleMenu: () => void
  onOpenSearch: () => void
}) {
  return (
    <nav className="super-navbar simple" aria-label="Main">
      <div className="super-navbar__content">
        <Link className="super-navbar__logo" href="/" aria-label="Giveth Docs home">
          <div className="super-navbar__logo-image">
            <Image
              src="/logo/navbar-logo-light.png"
              alt="Giveth Docs"
              width={75}
              height={40}
              priority
              className="navbar-logo navbar-logo--light"
              style={{ objectFit: 'contain', objectPosition: 'left', height: '40px', width: 'auto' }}
            />
            <Image
              src="/logo/navbar-logo-dark.png"
              alt="Giveth Docs"
              width={75}
              height={40}
              priority
              className="navbar-logo navbar-logo--dark"
              style={{ objectFit: 'contain', objectPosition: 'left', height: '40px', width: 'auto' }}
            />
          </div>
        </Link>

        <ul className="super-navbar__item-list">
          {NAVBAR.map((link) => (
            <li key={link.href}>
              <Link
                className={`super-navbar__item${
                  link.href === pathname ? ' active' : ''
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="super-navbar__actions">
          <ThemeToggle />
          <button
            type="button"
            className="super-navbar__button super-navbar__search"
            onClick={onOpenSearch}
            aria-label="Search"
          >
            <SearchIcon size={20} />
          </button>
          <button
            type="button"
            className="super-navbar__button super-navbar__menu-open"
            onClick={onToggleMenu}
            aria-label="Open navigation"
          >
            <MenuIcon size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}
