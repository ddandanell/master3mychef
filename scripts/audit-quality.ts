/**
 * audit-quality.ts — Deterministic site quality checks.
 *
 * Validates:
 *   1. All meta titles ≤ 65 chars
 *   2. All meta descriptions 80–160 chars
 *   3. All referenced OG images exist in public/
 *   4. No console.log in production page files
 *   5. All sitemap URLs are canonical (not in redirect map)
 *
 * Run: npx tsx scripts/audit-quality.ts
 * Exit 0 = clean, Exit 1 = issues found
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const PUBLIC = join(ROOT, 'public')
const PAGES = join(ROOT, 'src/pages')

let issues = 0

function fail(msg: string) {
  console.error(`  ❌ ${msg}`)
  issues++
}

function ok(msg: string) {
  console.log(`  ✅ ${msg}`)
}

function readPage(file: string) {
  return readFileSync(join(PAGES, file), 'utf8')
}

const pageFiles = readdirSync(PAGES).filter(f => f.endsWith('.tsx'))

// ── 1. Meta title lengths ───────────────────────────────────────────────────
console.log('\n[1] Meta titles (≤65 chars)')
// Only match title= that appears within a few lines of SeoHead or PremiumPage SeoHead calls
const seoTitleRe = /(?:SeoHead|<SeoHead)[^>]*?\btitle="([^"]+)"/gs
const t0 = issues
for (const file of pageFiles) {
  const src = readPage(file)
  for (const m of src.matchAll(seoTitleRe)) {
    if (m[1].length > 65) fail(`${file}: SeoHead title too long (${m[1].length} chars): "${m[1].slice(0, 60)}…"`)
  }
}
if (issues === t0) ok('All meta titles ≤ 65 chars')

// ── 2. Meta description lengths ─────────────────────────────────────────────
console.log('\n[2] Meta descriptions (80–160 chars)')
// Only match description= within SeoHead context
const seoDescRe = /(?:SeoHead|<SeoHead)[^>]*?\bdescription="([^"]+)"/gs
const skipDesc = ['NotFoundPage', 'PrivacyPage', 'TermsPage', 'CancellationPage']
const d0 = issues
for (const file of pageFiles) {
  if (skipDesc.some(s => file.includes(s))) continue
  const src = readPage(file)
  for (const m of src.matchAll(seoDescRe)) {
    const d = m[1]
    if (d.length > 160) fail(`${file}: description too long (${d.length} chars)`)
    else if (d.length < 80) fail(`${file}: description too short (${d.length} chars): "${d}"`)
  }
}
if (issues === d0) ok('All meta descriptions in range')

// ── 3. OG images exist ───────────────────────────────────────────────────────
console.log('\n[3] OG images exist in public/')
const ogRe = /ogImage=["'`]https?:\/\/mychef\.id(\/[^"'`]+)["'`]/g
const allSrc = pageFiles.map(f => readPage(f)).join('\n')
const seenOg = new Set<string>()
const o0 = issues
for (const m of allSrc.matchAll(ogRe)) {
  const relPath = m[1]
  if (seenOg.has(relPath)) continue
  seenOg.add(relPath)
  if (!existsSync(join(PUBLIC, relPath))) fail(`OG image missing: public${relPath}`)
}
if (issues === o0) ok(`All ${seenOg.size} OG image paths resolve`)

// ── 4. No console.log in production pages ────────────────────────────────────
console.log('\n[4] No console.log in production pages')
const consoleRe = /console\.log\(/
const c0 = issues
for (const file of pageFiles) {
  const lines = readPage(file).split('\n')
  lines.forEach((line, i) => {
    if (consoleRe.test(line) && !line.trimStart().startsWith('//')) {
      fail(`${file}:${i + 1} has console.log`)
    }
  })
}
if (issues === c0) ok('No console.log in production pages')

// ── 5. Sitemap URLs not in redirect map ──────────────────────────────────────
console.log('\n[5] Sitemap URLs not redirected')
const sitemap = readFileSync(join(PUBLIC, 'sitemap.xml'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>https:\/\/mychef\.id([^<]+)<\/loc>/g)].map(m => m[1])
const redirects = readFileSync(join(ROOT, 'src/data/redirects.ts'), 'utf8')
const redirectSet = new Set([...redirects.matchAll(/from:\s*'([^']+)'/g)].map(m => m[1]))
const s0 = issues
for (const url of sitemapUrls) {
  if (redirectSet.has(url)) fail(`Sitemap has redirected URL: ${url}`)
}
if (issues === s0) ok(`All ${sitemapUrls.length} sitemap URLs are canonical`)

// ── Check 6: No www.mychef.id in source ──────────────────────────────────────
console.log('\n[6] No www.mychef.id in source files')
const srcDirs = ['src/pages', 'src/components', 'src/data', 'index.html']
const w0 = issues
for (const dir of srcDirs) {
  const fullDir = join(ROOT, dir)
  if (!existsSync(fullDir)) continue
  const stat = (await import('node:fs')).statSync(fullDir)
  const files = stat.isDirectory()
    ? readdirSync(fullDir).filter(f => /\.(tsx?|html)$/.test(f)).map(f => join(fullDir, f))
    : [fullDir]
  for (const file of files) {
    const content = readFileSync(file, 'utf8')
    if (content.includes('www.mychef.id')) {
      fail(`www.mychef.id found in ${file.replace(ROOT + '/', '')}`)
    }
  }
}
if (issues === w0) ok('No www.mychef.id in source')

// ── Check 7: All LandingPages, Guides, and BlogPosts have content ─────────────
console.log('\n[7] All landing/guide/blog pages have article content')
{
  const sitemapSrc = readFileSync(join(ROOT, 'src/data/sitemap.ts'), 'utf8')
  // Parse slugs for LANDING_PAGES, GUIDES, BLOG_POSTS and check each has a content field
  const sections = ['LANDING_PAGES', 'GUIDES', 'BLOG_POSTS']
  const n0 = issues
  for (const section of sections) {
    // Find block start
    const startIdx = sitemapSrc.indexOf(`export const ${section}`)
    if (startIdx === -1) continue
    // Find next export const after this one
    const nextExport = sitemapSrc.indexOf('\nexport const ', startIdx + 10)
    const block = nextExport === -1 ? sitemapSrc.slice(startIdx) : sitemapSrc.slice(startIdx, nextExport)
    // Extract slugs and check if each has a content field nearby
    const slugMatches = [...block.matchAll(/slug:\s*['"]([^'"]+)['"]/g)]
    for (const m of slugMatches) {
      const slug = m[1]
      const pos = m.index ?? 0
      // Look for content: in the next 200 chars after this slug
      const nearby = block.slice(pos, pos + 400)
      if (!nearby.includes('content:')) {
        fail(`${section} slug '${slug}' has no article content field`)
      }
    }
  }
  if (issues === n0) ok('All landing/guide/blog pages have article content')
}


console.log('')
if (issues === 0) {
  console.log('✅ All checks passed — site quality is clean.\n')
  process.exit(0)
} else {
  console.error(`❌ ${issues} issue(s) found — fix before shipping.\n`)
  process.exit(1)
}
