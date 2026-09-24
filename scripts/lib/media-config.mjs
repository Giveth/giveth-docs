/*
 * Reads config/media.json: where Notion's videos and other non-image files are
 * hosted. See the comment in that file.
 */
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(dirname(fileURLToPath(import.meta.url))))

export async function loadMediaConfig() {
  const raw = JSON.parse(await readFile(join(root, 'config', 'media.json'), 'utf8'))
  const bucket = raw.bucket?.trim()
  const region = raw.region?.trim()
  const prefix = (raw.prefix ?? '').trim().replace(/^\/+|\/+$/g, '')

  if (!bucket || !region) return { configured: false, prefix }

  const publicBaseUrl = (
    raw.publicBaseUrl?.trim() || `https://${bucket}.${region}.cdn.digitaloceanspaces.com`
  ).replace(/\/+$/, '')

  return {
    configured: true,
    bucket,
    region,
    prefix,
    publicBaseUrl,
    // Used by the CI upload step, not by the site.
    endpoint: `https://${region}.digitaloceanspaces.com`,
  }
}

/** The object key a file is stored under, inside the configured folder. */
export function mediaKey(prefix, file) {
  return prefix ? `${prefix}/${file}` : file
}
