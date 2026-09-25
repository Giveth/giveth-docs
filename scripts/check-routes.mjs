#!/usr/bin/env node
/*
 * Acceptance criterion 1: every URL Super served must still resolve.
 *
 * Checks all 45 slugs in scripts/slug_map.json against a running site.
 *
 *   node scripts/check-routes.mjs [baseUrl]
 */
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const baseUrl = (process.argv[2] ?? 'http://localhost:3000').replace(/\/$/, '')

const slugMap = JSON.parse(await readFile(join(here, 'slug_map.json'), 'utf8'))
const slugs = ['/', ...Object.values(slugMap.by_title)]
const unique = [...new Set(slugs)]

let failures = 0
const results = []

for (const slug of unique) {
  const url = `${baseUrl}${slug === '/' ? '/' : slug}`
  try {
    const response = await fetch(url, { redirect: 'manual' })
    const ok = response.status === 200
    if (!ok) failures++
    results.push({ slug, status: response.status, ok })
  } catch (err) {
    failures++
    results.push({ slug, status: `ERR ${err.message}`, ok: false })
  }
}

for (const result of results) {
  if (!result.ok) console.log(`  FAIL ${String(result.status).padEnd(6)} ${result.slug}`)
}

console.log(
  `\n${unique.length - failures}/${unique.length} routes returned 200` +
    (failures ? ` -- ${failures} FAILED` : ' -- all good')
)
process.exit(failures ? 1 : 0)
