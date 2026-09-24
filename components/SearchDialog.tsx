'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

import { SearchIcon } from './icons'

interface SearchDocument {
  slug: string
  title: string
  breadcrumb: string[]
  text: string
}

interface SearchResult extends Omit<SearchDocument, 'text'> {
  excerpt: string
}

/*
 * The site is a static export, so there is no search API to call. The index is
 * a static asset built by scripts/fetch-notion.mjs, fetched once the first time
 * someone opens search and then matched in the browser.
 */
let indexPromise: Promise<SearchDocument[]> | undefined

function loadIndex(): Promise<SearchDocument[]> {
  indexPromise ??= fetch('/search-index.json')
    .then((response) => {
      if (!response.ok) throw new Error(`search index returned ${response.status}`)
      return response.json()
    })
    .catch((err) => {
      indexPromise = undefined // let the next attempt try again
      throw err
    })
  return indexPromise
}

function excerptAround(text: string, query: string): string {
  const index = text.toLowerCase().indexOf(query.toLowerCase())
  if (index < 0) return text.slice(0, 160).trim()
  const start = Math.max(0, index - 60)
  const excerpt = text.slice(start, start + 200).replace(/\s+/g, ' ').trim()
  return `${start > 0 ? '…' : ''}${excerpt}${start + 200 < text.length ? '…' : ''}`
}

function search(documents: SearchDocument[], query: string, limit = 12): SearchResult[] {
  const needle = query.trim().toLowerCase()
  if (needle.length < 2) return []

  return documents
    .map((doc) => {
      const title = doc.title.toLowerCase()
      let score = 0
      if (title === needle) score += 100
      else if (title.startsWith(needle)) score += 60
      else if (title.includes(needle)) score += 40
      if (doc.breadcrumb.join(' ').toLowerCase().includes(needle)) score += 10

      const occurrences = doc.text.toLowerCase().split(needle).length - 1
      score += Math.min(occurrences, 10) * 3
      return { doc, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ doc }) => ({
      slug: doc.slug,
      title: doc.title,
      breadcrumb: doc.breadcrumb,
      excerpt: excerptAround(doc.text, needle),
    }))
}

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [failed, setFailed] = useState(false)

  const warmIndex = useCallback(() => {
    loadIndex().catch(() => setFailed(true))
  }, [])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
      warmIndex()
    } else {
      setQuery('')
      setResults([])
    }
  }, [open, warmIndex])

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
    let cancelled = false
    loadIndex()
      .then((documents) => {
        if (!cancelled) {
          setFailed(false)
          setResults(search(documents, query))
        }
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
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
          {failed && <p className="search-empty">Search is unavailable right now.</p>}
          {!failed && query.trim().length >= 2 && results.length === 0 && (
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
