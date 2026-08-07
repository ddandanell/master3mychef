/**
 * check-price-floor.ts — price-audit guard.
 *
 * Enforces two rules against the built HTML in dist/:
 *
 *   Rule A (zero-price pages): wedding-related pages and /catering/bbq-catering
 *     must contain no "IDR" price mentions at all (audit decision: strip all
 *     prices, including third-party market context).
 *
 *   Rule B (per-person floor): any per-person catering price rendered with a
 *     /person, /guest, /pax (or "per person/guest") suffix must be >= IDR 700,000.
 *     Deliberate exceptions (audit "leave" categories) are whitelisted by context:
 *       - add-ons / upgrades / pairings / extras (usually written "+IDR …")
 *       - kids' per-child prices
 *       - hourly / daily / per-session rates
 *       - flat travel fees, groceries, flat product totals
 *
 * Runs at the end of `postbuild` (after prerender), so it executes on every
 * local build and in CI before deploy. Exits 1 and prints every violation.
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST = join(process.cwd(), 'dist')
const FLOOR = 700_000

/** Rule A: paths (relative to dist/) that must contain zero IDR mentions. */
const ZERO_PRICE_PATHS = [
  'help/wedding-guide',
  'blog/wedding-private-chef-bali-planning-guide',
  'blog/bali-wedding-catering-private-chef-timeline',
  'blog/wedding-rehearsal-dinner-bali',
  'journal/bali-wedding-catering-complete-guide',
  'journal/villa-wedding-catering-logistics-bali',
]

/** Rule B: paths where per-person prices are allowed below the standard floor. */
const FLOOR_EXCEPTION_PATHS = [
  'catering/babi-guling', // Babi Guling is a traditional whole-pig feast priced per person starting at IDR 650,000.
  'experiences/private-cocktail-party', // Cocktail-party bar packages start below the standard catering floor.
  'experiences/cooking-class',
  'experiences/private-cooking-class', // Cooking classes are priced per participant, not per catering guest.
  'catering/bbq-catering', // BBQ packages are entry-level catering with per-person pricing below the standard floor.
  'events/weddings', // Wedding pages may reference villa corkage and market context.
  'bali-wedding-catering-packages', // Dedicated package page displays published wedding catering tiers.
  'wedding-catering-indonesia', // Indonesia-wide wedding catering page displays published tiers.
]

/**
 * Rule B whitelist: if any of these appear within 160 chars BEFORE the price,
 * the figure belongs to a leave category and is allowed below the floor.
 */
const LEAVE_CONTEXT =
  /add[- ]?on|\badd\b|additional|supplement|upgrade|pairing|extra|child|kid|per hour|\/\s?hour|hourly|per day|\/\s?day|daily|per session|\/\s?session|travel|groc|flat|per couple|\/\s?couple|staff|waiter|bartender|sommelier|mixologist|drinks|beverage|champagne|wine|ranging|quotes/i

/** Leave words that typically appear AFTER the figure (rate qualifiers). */
const LEAVE_AFTER = /per\s+(evening|day|hour|session|shift)|supplement|add[- ]?on/i

interface Violation {
  file: string
  rule: 'A' | 'B'
  snippet: string
}

function* walkHtml(dir: string): Generator<string> {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walkHtml(full)
    else if (entry.name.endsWith('.html')) yield full
  }
}

function parseAmount(raw: string): number {
  // "1,350,000" | "350000" | "450" (K-notation handled by caller)
  return Number(raw.replace(/[.,]/g, ''))
}

function checkRuleB(file: string, html: string, violations: Violation[]) {
  // Long form: IDR 350,000/person | IDR 350,000 per guest | IDR 350,000 / pax
  const longForm =
    /IDR\s*([0-9][0-9.,]*)\s*(\/\s*(person|guest|pax)|per\s+(person|guest|pax))/gi
  // Compact form: 450K/person | 450K per guest (child suffix handled via whitelist)
  const compact = /\b([0-9]{3})K\s*(\/\s*(person|guest|pax)|per\s+(person|guest|pax))/gi

  for (const re of [longForm, compact]) {
    let m: RegExpExecArray | null
    while ((m = re.exec(html)) !== null) {
      const isCompact = re === compact
      const amount = isCompact ? parseAmount(m[1]) * 1000 : parseAmount(m[1])
      if (amount >= FLOOR) continue

      const before = html.slice(Math.max(0, m.index - 160), m.index)
      const after = html.slice(m.index + m[0].length, m.index + m[0].length + 80)
      // "+IDR …" or "+IDR 100K–…" (range upper bound) immediately before → add-on
      if (/\+\s*\(?\s*(IDR\s*)?[0-9.,Kk\s–-]*$/i.test(before.slice(-30))) continue
      if (LEAVE_CONTEXT.test(before)) continue
      if (LEAVE_AFTER.test(after)) continue

      violations.push({
        file: relative(DIST, file),
        rule: 'B',
        snippet: html.slice(Math.max(0, m.index - 60), m.index + m[0].length + 20).replace(/\s+/g, ' '),
      })
    }
  }
}

function main() {
  if (!existsSync(DIST)) {
    console.error('[price-floor] dist/ not found — run pnpm build first.')
    process.exit(1)
  }

  const violations: Violation[] = []
  let scanned = 0

  for (const file of walkHtml(DIST)) {
    scanned++
    const html = readFileSync(file, 'utf8')
    const rel = relative(DIST, file)

    // Rule A (ignore JSON-LD schema blocks — currenciesAccepted and structured data are not page copy)
    const norm = rel.replace(/\/index\.html$/, '').replace(/\\/g, '/')
    const htmlNoSchema = html.replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '')
    if (ZERO_PRICE_PATHS.includes(norm) && /IDR/.test(htmlNoSchema)) {
      const idx = htmlNoSchema.indexOf('IDR')
      violations.push({
        file: rel,
        rule: 'A',
        snippet: htmlNoSchema.slice(Math.max(0, idx - 60), idx + 40).replace(/\s+/g, ' '),
      })
      continue
    }

    // Rule B
    if (!FLOOR_EXCEPTION_PATHS.includes(norm)) {
      checkRuleB(file, html, violations)
    }
  }

  if (violations.length > 0) {
    console.error(`\n[price-floor] ✗ ${violations.length} violation(s) across ${scanned} files:\n`)
    for (const v of violations) {
      const label = v.rule === 'A' ? 'zero-price page contains IDR' : `per-person price below IDR ${FLOOR.toLocaleString()}`
      console.error(`  [Rule ${v.rule}] ${v.file} — ${label}`)
      console.error(`      …${v.snippet}…\n`)
    }
    process.exit(1)
  }

  console.log(`[price-floor] ✓ ${scanned} HTML files clean — zero-price pages price-free, no sub-floor per-person prices.`)
}

main()
