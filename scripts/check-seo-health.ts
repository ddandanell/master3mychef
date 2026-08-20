/**
 * check-seo-health.ts — SEO regression guard.
 *
 * Runs against the built HTML in dist/ (after prerender) and fails the build
 * if frequent editing has introduced the classic on-page SEO mistakes:
 *
 *   ERRORS (fail the build):
 *     - Duplicate <title> across indexable pages
 *     - Duplicate <meta name="description"> across indexable pages
 *     - Duplicate <h1> across indexable pages (keyword cannibalization)
 *     - Missing title / description / h1 on an indexable page
 *
 *   WARNINGS (printed, do not fail):
 *     - Title longer than 65 chars (SERP truncation risk)
 *     - noindex on a page that is in the sitemap
 *     - Internal link that does not resolve to a prerendered page or a redirect
 *
 * Scope: only the URLs declared in dist/sitemap.xml (the indexable surface),
 * so utility/non-indexed prerenders never cause false positives.
 *
 * Runs at the end of `postbuild` (after prerender + price-floor), so it executes
 * on every local build and in CI before deploy. Exits 1 and prints every error.
 */

import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { REDIRECT_MAP } from '../src/data/redirects'

const DIST = join(process.cwd(), 'dist')
const SITE = 'https://mychef.id'
const TITLE_MAX = 65

interface PageInfo {
  path: string
  title: string
  desc: string
  h1: string
  robots: string
  links: string[]
}

function firstMatch(html: string, re: RegExp): string {
  const m = re.exec(html)
  return m ? decode(m[1].trim()) : ''
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

/** dist path for a route path, supporting both /foo/index.html and /foo.html layouts. */
function distFileFor(routePath: string): string | null {
  const clean = routePath.replace(/\/$/, '') || ''
  const candidates = clean === ''
    ? [join(DIST, 'index.html')]
    : [join(DIST, clean, 'index.html'), join(DIST, `${clean}.html`)]
  return candidates.find((c) => existsSync(c)) ?? null
}

function readSitemapPaths(): string[] {
  const smPath = join(DIST, 'sitemap.xml')
  if (!existsSync(smPath)) {
    console.error('[seo-health] dist/sitemap.xml not found — run the build first.')
    process.exit(1)
  }
  const xml = readFileSync(smPath, 'utf8')
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  return locs
    .map((u) => u.replace(SITE, '') || '/')
    .filter((p) => p.startsWith('/'))
}

function parsePage(path: string, html: string): PageInfo {
  const title = firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i)
  const desc =
    firstMatch(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i) ||
    firstMatch(html, /<meta[^>]+content="([^"]*)"[^>]+name="description"/i)
  const robots = firstMatch(html, /<meta[^>]+name="robots"[^>]+content="([^"]*)"/i)
  const h1raw = firstMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i)
  const h1 = decode(h1raw.replace(/<[^>]+>/g, ' '))
  const links = [...html.matchAll(/href="(\/[^"#?]*)"/g)]
    .map((m) => m[1])
    .filter((h) => !/^\/(assets|generated|ingest|_|favicon|robots|sitemap)/.test(h))
    .filter((h) => !/\.(png|jpe?g|webp|svg|ico|gif|webmanifest|xml|json|txt|css|js|mjs|pdf)$/i.test(h))
  return { path, title, desc, h1, robots, links: [...new Set(links)] }
}

// ── Collect ────────────────────────────────────────────────────────────────
const sitemapPaths = readSitemapPaths()
const pages: PageInfo[] = []
const missingFiles: string[] = []
for (const p of sitemapPaths) {
  const f = distFileFor(p)
  if (!f) {
    missingFiles.push(p)
    continue
  }
  pages.push(parsePage(p, readFileSync(f, 'utf8')))
}

const validPathSet = new Set(sitemapPaths.map((p) => p.replace(/\/$/, '') || '/'))
const redirectSources = new Set(Object.keys(REDIRECT_MAP).map((p) => p.replace(/\/$/, '') || '/'))

// ── Checks ───────────────────────────────────────────────────────────────────
const errors: string[] = []
const warnings: string[] = []

function dupCheck(field: 'title' | 'desc' | 'h1', label: string) {
  const map = new Map<string, string[]>()
  for (const pg of pages) {
    const v = pg[field]
    if (!v) continue
    const arr = map.get(v) ?? []
    arr.push(pg.path)
    map.set(v, arr)
  }
  for (const [value, paths] of map) {
    if (paths.length > 1) {
      errors.push(`Duplicate ${label} on ${paths.length} pages: "${value.slice(0, 70)}"\n      → ${paths.join(', ')}`)
    }
  }
}

dupCheck('title', 'title')
dupCheck('desc', 'meta description')
dupCheck('h1', 'H1')

for (const pg of pages) {
  if (!pg.title) errors.push(`Missing <title>: ${pg.path}`)
  if (!pg.desc) errors.push(`Missing meta description: ${pg.path}`)
  if (!pg.h1) errors.push(`Missing <h1>: ${pg.path}`)
  if (pg.title.length > TITLE_MAX) warnings.push(`Title ${pg.title.length} chars (>${TITLE_MAX}): ${pg.path}`)
  if (/noindex/i.test(pg.robots)) warnings.push(`noindex on sitemap page: ${pg.path}`)
}

// Best-effort internal broken-link check (WARN only)
const brokenLinks = new Map<string, string[]>()
for (const pg of pages) {
  for (const link of pg.links) {
    const norm = link.replace(/\/$/, '') || '/'
    if (validPathSet.has(norm) || redirectSources.has(norm)) continue
    // resolves to a prerendered file that just is not in the sitemap? treat as OK.
    if (distFileFor(norm)) continue
    const arr = brokenLinks.get(norm) ?? []
    arr.push(pg.path)
    brokenLinks.set(norm, arr)
  }
}
for (const [target, sources] of brokenLinks) {
  warnings.push(`Internal link to non-prerendered/redirect target "${target}" (from ${sources.length} page(s), e.g. ${sources[0]})`)
}

if (missingFiles.length) {
  warnings.push(`${missingFiles.length} sitemap URL(s) had no prerendered file: ${missingFiles.slice(0, 5).join(', ')}`)
}

// ── Report ────────────────────────────────────────────────────────────────────
console.log(`[seo-health] Checked ${pages.length} indexable pages.`)
if (warnings.length) {
  console.log(`\n[seo-health] ${warnings.length} warning(s):`)
  for (const w of warnings) console.log(`  ⚠ ${w}`)
}
if (errors.length) {
  console.error(`\n[seo-health] ✗ ${errors.length} ERROR(s) — failing the build:`)
  for (const e of errors) console.error(`  ✗ ${e}`)
  process.exit(1)
}
console.log(`\n[seo-health] ✓ No duplicate/missing titles, descriptions, or H1s. Clean.`)
