#!/usr/bin/env node
/*
 * Checks the static export before it is published.
 *
 *   node scripts/check-export.mjs [outDir]
 *
 * Asserts that every URL Super served exists in the export, that each page
 * carries the site chrome, and -- the part that matters most -- that pages
 * actually contain Notion content rather than an empty shell. An earlier build
 * shipped pages with the chrome but no body, because the renderer was fetching
 * from Notion at request time and those fetches were failing.
 */
import { readFile, stat } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = dirname(here)
const outDir = process.argv[2] ?? join(root, 'out')

const slugMap = JSON.parse(await readFile(join(here, 'slug_map.json'), 'utf8'))
const slugs = ['/', ...new Set(Object.values(slugMap.by_title))]

/*
 * What counts as a page having content. Prose is the common case, but some
 * pages carry almost none: the homepage is a grid of cards, /brandbook is a
 * sentence and a Figma embed, and the section pages are lists of child links.
 * Any of these is a real page; an empty shell has none of them.
 */
const SUBSTANTIVE_BLOCKS = [
  'notion-collection-card', // card grids
  'notion-page-link', // lists of child pages
  'notion-asset-wrapper', // images, video, embeds
  'notion-simple-table',
  'notion-code',
  'notion-callout',
]

const MIN_TEXT = 200 // characters of visible body text, when there is nothing else

const failures = []

function visibleText(html) {
  const body = html.match(/class="notion-page-content[\s\S]*?(?=<footer)/)
  const segment = body ? body[0] : ''
  return segment
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

for (const slug of slugs) {
  const candidates =
    slug === '/'
      ? [join(outDir, 'index.html')]
      : [join(outDir, `${slug.slice(1)}.html`), join(outDir, slug.slice(1), 'index.html')]

  let file
  for (const candidate of candidates) {
    try {
      await stat(candidate)
      file = candidate
      break
    } catch {
      /* try the next shape */
    }
  }

  if (!file) {
    failures.push(`${slug}: not generated`)
    continue
  }

  const html = await readFile(file, 'utf8')
  const problems = []

  if (!html.includes('super-sidebar')) problems.push('no sidebar')
  if (!html.includes('super-navbar__logo')) problems.push('no navbar')
  if (!html.includes('super-footer')) problems.push('no footer')
  if (!html.includes('notion-page')) problems.push('no notion content')

  // Either real prose, or something substantive that is not prose. A page with
  // neither is the empty shell this check exists to catch.
  const text = visibleText(html)
  const hasBlocks = SUBSTANTIVE_BLOCKS.some((className) => html.includes(className))
  if (text.length < MIN_TEXT && !hasBlocks) {
    problems.push(`no content: ${text.length} chars of text and no content blocks`)
  }

  if (problems.length) failures.push(`${slug}: ${problems.join(', ')}`)
}

if (failures.length) {
  console.error(`\n${failures.length} of ${slugs.length} pages failed:\n`)
  for (const failure of failures) console.error(`  ${failure}`)
  process.exit(1)
}

console.log(`All ${slugs.length} pages generated, with chrome and content.`)
