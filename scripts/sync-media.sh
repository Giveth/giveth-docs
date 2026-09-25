#!/usr/bin/env bash
#
# Makes sure every video and file the pages point at is on the DigitalOcean
# Space. Runs in CI (refresh-content.yml), straight after fetch-notion.mjs.
#
#   scripts/sync-media.sh           upload anything the Space does not have yet
#   scripts/sync-media.sh --verify  check every hosted file is publicly reachable
#
# Sync reads .cache/media-sync.json, which fetch-notion.mjs writes. It holds
# Notion's signed download URLs, which expire within the hour -- that is why
# this has to run in the same job as the fetch, and why the file is not
# committed. It needs DO_SPACES_KEY and DO_SPACES_SECRET.
#
# --verify reads the committed content/media.json and needs no credentials.
#
# Requires the aws CLI, jq and curl, all preinstalled on GitHub's runners.

set -euo pipefail

cd "$(dirname "$0")/.."

USER_AGENT='Mozilla/5.0 (compatible; giveth-docs/1.0)'

if [[ "${1:-}" == "--verify" ]]; then
  manifest=content/media.json
  [[ -f "$manifest" ]] || { echo "No $manifest -- nothing hosted."; exit 0; }

  total=$(jq length "$manifest")
  missing=0
  while IFS= read -r url; do
    if ! curl -sfI -o /dev/null --retry 3 --retry-all-errors -A "$USER_AGENT" "$url"; then
      echo "::error::Not reachable on the Space: $url"
      missing=$((missing + 1))
    fi
  done < <(jq -r '.[].url' "$manifest")

  if ((missing)); then
    echo "$missing of $total hosted file(s) are missing. Run refresh-content to upload them."
    exit 1
  fi
  echo "All $total hosted file(s) are reachable."
  exit 0
fi

plan=.cache/media-sync.json
[[ -f "$plan" ]] || { echo "No $plan -- run scripts/fetch-notion.mjs first."; exit 1; }

count=$(jq '.items | length' "$plan")
if ((count == 0)); then
  echo "No videos or files to host."
  exit 0
fi

: "${DO_SPACES_KEY:?DO_SPACES_KEY is not set}"
: "${DO_SPACES_SECRET:?DO_SPACES_SECRET is not set}"

bucket=$(jq -r .bucket "$plan")
endpoint=$(jq -r .endpoint "$plan")
prefix=$(jq -r .prefix "$plan")

export AWS_ACCESS_KEY_ID="$DO_SPACES_KEY"
export AWS_SECRET_ACCESS_KEY="$DO_SPACES_SECRET"
# Spaces takes its location from the endpoint; the signing region is nominal.
export AWS_DEFAULT_REGION=us-east-1
# Newer aws CLI versions add checksum headers by default that S3-compatible
# stores, Spaces included, can reject. Only send them when S3 requires them.
export AWS_REQUEST_CHECKSUM_CALCULATION=when_required
export AWS_RESPONSE_CHECKSUM_VALIDATION=when_required

list_keys() {
  aws s3api list-objects-v2 \
    --endpoint-url "$endpoint" \
    --bucket "$bucket" \
    --prefix "${prefix:+$prefix/}" \
    --query 'Contents[].Key' \
    --output json | jq -r '.[]?'
}

# One listing up front rather than a request per file.
existing=$(list_keys)

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

uploaded=0
present=0

while IFS=$'\t' read -r key download content_type; do
  if grep -qxF "$key" <<<"$existing"; then
    present=$((present + 1))
    continue
  fi

  echo "Uploading $key"
  file="$tmp/$(basename "$key")"
  curl -fsSL --retry 4 --retry-all-errors --retry-delay 3 -A "$USER_AGENT" \
    -o "$file" "$download"

  # A zero-byte upload would sit on the Space looking like success.
  if [[ ! -s "$file" ]]; then
    echo "::error::Downloaded an empty file for $key"
    exit 1
  fi

  aws s3 cp "$file" "s3://$bucket/$key" \
    --endpoint-url "$endpoint" \
    --acl public-read \
    --content-type "$content_type" \
    --cache-control 'public, max-age=31536000, immutable' \
    --only-show-errors

  rm -f "$file"
  uploaded=$((uploaded + 1))
done < <(jq -r '.items[] | [.key, .download, .contentType] | @tsv' "$plan")

# Confirm against the Space itself, not just the exit codes above.
after=$(list_keys)
missing=0
while IFS= read -r key; do
  if ! grep -qxF "$key" <<<"$after"; then
    echo "::error::Still missing after upload: $key"
    missing=$((missing + 1))
  fi
done < <(jq -r '.items[].key' "$plan")

echo "$count file(s): $present already on the Space, $uploaded uploaded."
((missing == 0))
