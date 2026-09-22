'use client'

import { useEffect, useState } from 'react'

import { MoonIcon, SunIcon } from './icons'

export const THEME_STORAGE_KEY = 'giveth-docs-theme'

/**
 * Runs before first paint so the page never flashes the wrong theme. Kept as a
 * string because it has to be inlined into <head> ahead of React.
 */
export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var dark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('theme-dark');
  } catch (e) {}
})();
`

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // The real value lives on <html>, put there by THEME_INIT_SCRIPT. Read it
  // after mount so server and client markup agree.
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('theme-dark'))
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('theme-dark', next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light')
    } catch {
      // Private mode, or storage disabled -- the toggle still works for this page.
    }
  }

  return (
    <button
      type="button"
      className="super-navbar__button super-navbar__theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </button>
  )
}
