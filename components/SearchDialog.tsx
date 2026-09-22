'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { SearchIcon } from './icons'

interface SearchResult {
  slug: string
  title: string
  breadcrumb: string[]
  excerpt: string
}

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) inputRef.current?.focus()
    else {
      setQuery('')
      setResults([])
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      return
    }
    const controller = new AbortController()
    const timer = setTimeout(async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
          signal: controller.signal,
        })
        const data = await response.json()
        setResults(data.results ?? [])
      } catch {
        // Aborted or offline -- leave the previous results in place.
      } finally {
        setLoading(false)
      }
    }, 180)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  if (!open) return null

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search">
      <div className="search-backdrop" onClick={onClose} />
      <div className="search-panel">
        <div className="search-input-row">
          <SearchIcon size={18} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            placeholder="Search the docs"
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search the docs"
          />
          <kbd>esc</kbd>
        </div>

        <div className="search-results">
          {query.trim().length >= 2 && !loading && results.length === 0 && (
            <p className="search-empty">No results for “{query}”.</p>
          )}
          {results.map((result) => (
            <button
              key={result.slug}
              type="button"
              className="search-result"
              onClick={() => {
                onClose()
                router.push(result.slug)
              }}
            >
              <span className="search-result__title">{result.title}</span>
              {result.breadcrumb.length > 1 && (
                <span className="search-result__crumb">
                  {result.breadcrumb.slice(0, -1).join(' › ')}
                </span>
              )}
              <span className="search-result__excerpt">{result.excerpt}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
