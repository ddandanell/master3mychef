#!/usr/bin/env tsx
/**
 * Bulk-deploy SEO metadata from the external CSV metadata map into
 * src/data/page-meta.ts.
 *
 * For every CSV row whose action is "rewrite" or "keep":
 *  - Update an existing PAGE_META entry matched by URL path or generated key.
 *  - Or append a new entry if the page is not yet present.
 *
 * Existing entries that are not referenced by the CSV are left untouched,
 * including their formatting and any dynamic values (e.g. LOCATION_LANDING_PAGES).
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const CSV_PATH = path.resolve('/Users/openclaw/Movies/LIve website/mychef-seo/10-metadata-map.csv')
const PAGE_META_PATH = path.resolve(__dirname, '../src/data/page-meta.ts')

interface ParsedEntry {
  key: string
  start: number
  end: number
  text: string
  path: string
}

interface MetaUpdate {
  path: string
  title: string
  description: string
  h1: string
  canonicalExpr: string
  ogImageExpr?: string
}

/** Convert a URL path into a safe JS object key ("path/to-page" -> "path-to-page"). */
function safeKeyFromUrl(url: string): string {
  const key = url
    .replace(/^\/+|\/+$/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
  return key || 'page'
}

/** Render a key as an unquoted identifier when possible, otherwise single-quoted. */
function keyLiteral(key: string): string {
  return /^[A-Za-z_$][\w$]*$/.test(key) ? key : `'${escapeSingleQuotes(key)}'`
}

/** Single-quote a string literal, escaping backslashes and single quotes. */
function sq(value: string): string {
  return `'${escapeSingleQuotes(value)}'`
}

function escapeSingleQuotes(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

/** Simple CSV parser that handles quoted fields and commas inside quotes. */
function parseCSV(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]

    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        field += ch
      }
      continue
    }

    if (ch === '"') {
      inQuotes = true
    } else if (ch === ',') {
      row.push(field)
      field = ''
    } else if (ch === '\n') {
      row.push(field)
      if (row.length > 1 || row[0] !== '') {
        rows.push(row)
      }
      row = []
      field = ''
    } else if (ch === '\r') {
      // Ignore carriage returns; \n terminates the row.
    } else {
      field += ch
    }
  }

  if (field !== '' || row.length > 0) {
    row.push(field)
    if (row.length > 1 || row[0] !== '') {
      rows.push(row)
    }
  }

  return rows
}

/** Locate every top-level object entry in the PAGE_META body. */
function findEntries(body: string): ParsedEntry[] {
  const entries: ParsedEntry[] = []
  const keyRegex = /([A-Za-z_$][\w$]*|'[^']*'|"[^"]*"):\s*\{/g
  let match: RegExpExecArray | null

  while ((match = keyRegex.exec(body)) !== null) {
    const rawKey = match[1]
    const key =
      rawKey.startsWith("'") || rawKey.startsWith('"')
        ? rawKey.slice(1, -1)
        : rawKey

    const blockStart = body.indexOf('{', match.index)
    const keyStart = match.index
    const end = findClosingBrace(body, blockStart)
    if (end === -1) {
      throw new Error(`Could not find closing brace for PAGE_META key "${key}"`)
    }

    const block = body.slice(blockStart, end + 1)
    const pathMatch = block.match(/path:\s*(['"`])(.*?)\1,/s)

    entries.push({
      key,
      start: keyStart,
      end: end + 1,
      text: block,
      path: pathMatch?.[2] ?? '',
    })
  }

  return entries
}

/** Find the matching `}` for the `{` at `start`, respecting strings and template literals. */
function findClosingBrace(text: string, start: number): number {
  let depth = 1
  let i = start + 1
  let inString: null | '"' | "'" | '`' = null
  let escape = false
  let templateDepth = 0

  while (i < text.length) {
    const c = text[i]

    if (escape) {
      escape = false
      i++
      continue
    }

    if (c === '\\') {
      escape = true
      i++
      continue
    }

    if (inString) {
      if (c === '$' && inString === '`' && text[i + 1] === '{') {
        templateDepth++
        i += 2
        continue
      }

      if (c === '}' && inString === '`' && templateDepth > 0) {
        templateDepth--
        i++
        continue
      }

      if (c === inString && templateDepth === 0) {
        inString = null
      }

      i++
      continue
    }

    if (c === '"' || c === "'" || c === '`') {
      inString = c
      i++
      continue
    }

    if (c === '{') {
      depth++
    } else if (c === '}') {
      depth--
      if (depth === 0) {
        return i
      }
    }

    i++
  }

  return -1
}

function extractOgImageExpr(block: string): string | undefined {
  const match = block.match(/ogImage:\s*(.+?)\s*,/s)
  return match?.[1]
}

function buildCanonicalExpr(canonical: string, url: string): string {
  const c = canonical.trim()
  if (c === 'self') {
    return `\`${SITE_PLACEHOLDER}${url}\``
  }
  if (c.startsWith('/')) {
    return `\`${SITE_PLACEHOLDER}${c}\``
  }
  return sq(c)
}

const SITE_PLACEHOLDER = '${SITE}'

function formatEntry(key: string, meta: MetaUpdate): string {
  const lines: string[] = []
  lines.push(`  ${keyLiteral(key)}: {`)
  lines.push(`    path: ${sq(meta.path)},`)
  lines.push(`    title: ${sq(meta.title)},`)
  lines.push(`    description:`)
  lines.push(`      ${sq(meta.description)},`)
  lines.push(`    canonical: ${meta.canonicalExpr},`)
  lines.push(`    h1: ${sq(meta.h1)},`)
  if (meta.ogImageExpr) {
    lines.push(`    ogImage: ${meta.ogImageExpr},`)
  }
  lines.push(`  },`)
  return lines.join('\n')
}

function main() {
  if (!fs.existsSync(CSV_PATH)) {
    console.error(`CSV not found: ${CSV_PATH}`)
    process.exit(1)
  }

  const csvText = fs.readFileSync(CSV_PATH, 'utf8')
  const csvRows = parseCSV(csvText)

  if (csvRows.length === 0) {
    console.error('CSV appears to be empty')
    process.exit(1)
  }

  const pageMetaText = fs.readFileSync(PAGE_META_PATH, 'utf8')

  const declMatch = pageMetaText.match(/export const PAGE_META: Record<string, PageMeta> = \{/)
  if (!declMatch || declMatch.index === undefined) {
    console.error('Could not find PAGE_META declaration in page-meta.ts')
    process.exit(1)
  }

  const closeMatch = pageMetaText.match(/\n\} as const/)
  if (!closeMatch || closeMatch.index === undefined) {
    console.error('Could not find PAGE_META closing "} as const" in page-meta.ts')
    process.exit(1)
  }

  const bodyStart = declMatch.index + declMatch[0].length
  const bodyEnd = closeMatch.index
  const body = pageMetaText.slice(bodyStart, bodyEnd)

  const entries = findEntries(body)
  const byPath = new Map(entries.map((e) => [e.path, e]))
  const byKey = new Map(entries.map((e) => [e.key, e]))

  const updates = new Map<string, { entry: ParsedEntry; block: string }>()
  const additions: { key: string; block: string }[] = []
  let skipped = 0

  // Skip the header row.
  for (let i = 1; i < csvRows.length; i++) {
    const row = csvRows[i]
    if (row.length < 11) {
      skipped++
      continue
    }

    const [
      url,
      _currentTitle,
      recommendedTitle,
      _currentMeta,
      recommendedMeta,
      recommendedH1,
      canonical,
      _ogTitle,
      _ogDescription,
      _schema,
      action,
    ] = row

    const actionNorm = action.trim().toLowerCase()
    if (actionNorm !== 'rewrite' && actionNorm !== 'keep') {
      skipped++
      continue
    }

    const existing = byPath.get(url) ?? byKey.get(safeKeyFromUrl(url))
    const key = existing?.key ?? safeKeyFromUrl(url)
    const ogImageExpr = existing ? extractOgImageExpr(existing.text) : undefined

    const update: MetaUpdate = {
      path: url,
      title: recommendedTitle,
      description: recommendedMeta,
      h1: recommendedH1,
      canonicalExpr: buildCanonicalExpr(canonical, url),
      ogImageExpr,
    }

    const block = formatEntry(key, update)

    if (existing) {
      updates.set(existing.key, { entry: existing, block })
    } else {
      additions.push({ key, block })
    }
  }

  // Rebuild the PAGE_META body, preserving the order and formatting of
  // untouched entries.
  let pos = 0
  let newBody = ''

  for (const entry of entries) {
    const updated = updates.get(entry.key)
    if (updated) {
      newBody += body.slice(pos, entry.start) + updated.block
      pos = entry.end
    } else {
      pos = entry.end
    }
  }

  newBody += body.slice(pos)

  // Append brand-new entries before the final object-closing `}`.
  if (additions.length > 0) {
    const closeIdx = newBody.lastIndexOf('}')
    if (closeIdx === -1) {
      throw new Error('Could not locate the final closing brace of PAGE_META')
    }

    const prefix = newBody.slice(0, closeIdx)
    const suffix = newBody.slice(closeIdx + 1)
    const inserted = additions
      .map((addition, idx) => {
        return idx === 0 ? `\n\n${addition.block}` : `,\n${addition.block}`
      })
      .join('')

    newBody = `${prefix}${inserted}\n}${suffix}`
  }

  let newFile =
    pageMetaText.slice(0, bodyStart) + newBody + pageMetaText.slice(bodyEnd)

  // The replacement preserves the original trailing comma after each entry;
  // formatEntry also appends one. Collapse any doubled commas that result.
  newFile = newFile.replace(/},\s*,/g, '},')

  fs.writeFileSync(PAGE_META_PATH, newFile, 'utf8')

  console.log('Metadata deploy complete')
  console.log(`  Updated existing entries: ${updates.size}`)
  console.log(`  Added new entries:        ${additions.length}`)
  console.log(`  Skipped rows:             ${skipped}`)
}

main()
