import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

// Prerender requires a full Chromium environment. Vercel's build image lacks the
// system libraries Playwright needs, so the production build prerenders in CI
// (GitHub Actions) and deploys the prebuilt dist. Skip validation here to avoid
// failing preview deployments that build directly on Vercel.
if (process.env.SKIP_PRERENDER === '1') {
  console.log('⏭  validate-prerender: skipped (SKIP_PRERENDER=1)')
  process.exit(0)
}

const DIST = './dist'

// Routes that are intentionally client-only (forms and authenticated tools).
// They stay as SPA shells and are not expected to carry prerendered body content.
const CLIENT_ONLY_ROUTES = new Set(['book/index.html', 'quote/index.html', 'ops/index.html'])

// SEO-critical routes that must have a real <h1> and rendered body text.
const CRITICAL_ROUTES = new Set([
  'index.html', // /
  'bar-services/index.html',
  'bar-services/bar-audit-improvement/index.html',
  'bar-services/bar-costing-inventory-control/index.html',
  'bar-services/cocktail-menu-development/index.html',
  'bar-services/signature-cocktail-creation/index.html',
  'bar-services/new-bar-setup/index.html',
  'bar-services/temporary-bartender-staffing/index.html',
  'bar-services/permanent-bar-staff-recruitment/index.html',
  'bar-services/bar-equipment-supply-rental/index.html',
  'bar-services/bar-staff-training/index.html',
  'bar-services/monthly-bar-management-support/index.html',
  'bar-services/complete-bar-performance-programme/index.html',
  'bar-services/faq/index.html',
  'bar-services/contact/index.html',
  'bar-services/resources/index.html',
  'catering/index.html',
  'fine-dining/index.html',
  'fine-dining/our-chefs/index.html',
  'events/index.html',
  'contact/index.html',
  'locations/seminyak/index.html',
  'locations/canggu/index.html',
  'locations/ubud/index.html',
])

const checked: string[] = []
const failures: string[] = []

function walk(dir: string) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full)
    } else if (entry.name === 'index.html') {
      checked.push(full)
    }
  }
}

walk(DIST)

function getRootContent(html: string): { content: string | null; found: boolean } {
  const rootOpenMatch = html.match(/<div\b[^>]*\bid=["']root["'][^>]*>/i)
  if (!rootOpenMatch) return { content: null, found: false }

  const openTagEnd = rootOpenMatch.index! + rootOpenMatch[0].length
  let depth = 1
  let pos = openTagEnd

  while (depth > 0 && pos < html.length) {
    const nextOpen = html.indexOf('<div', pos)
    const nextClose = html.indexOf('</div>', pos)

    if (nextClose === -1) break

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++
      pos = nextOpen + 4
    } else {
      depth--
      pos = nextClose + 6
    }
  }

  return { content: html.slice(openTagEnd, pos - 6), found: true }
}

for (const file of checked) {
  const rel = relative(DIST, file)
  const html = readFileSync(file, 'utf8')

  const { content: rootContent, found: rootFound } = getRootContent(html)

  if (!rootFound) {
    failures.push(`${rel}: missing #root div`)
    continue
  }

  const isClientOnly = CLIENT_ONLY_ROUTES.has(rel)

  if (!isClientOnly && (!rootContent || rootContent.trim().length === 0)) {
    failures.push(`${rel}: #root is empty (prerender skipped)`)
  }

  if (CRITICAL_ROUTES.has(rel)) {
    if (!/<h1[\s>]/i.test(html)) {
      failures.push(`${rel}: missing <h1>`)
    }
    if (!rootContent || rootContent.trim().length === 0) {
      failures.push(`${rel}: #root is empty`)
    }
  }
}

if (failures.length) {
  console.error('Prerender validation failed:')
  for (const f of failures) console.error(`  - ${f}`)
  process.exit(1)
}

console.log(`✓ validate-prerender: ${checked.length} routes checked, critical routes rendered`)
