#!/usr/bin/env node
/**
 * change-phone.js — update the WhatsApp / phone number across the entire site.
 *
 * Usage:
 *   node scripts/change-phone.js <new-digits>
 *
 * Example:
 *   node scripts/change-phone.js 6289674072020
 *
 * The script:
 *  1. Reads the current number from src/data/siteArchitecture.ts  (PHONE.digits)
 *  2. Derives all 4 format variants for both old and new numbers
 *  3. Replaces every occurrence in src/**\/*.{ts,tsx} and index.html
 *  4. Updates PHONE.digits / display / schema in siteArchitecture.ts
 *
 * After running, commit + push — Vercel auto-deploys.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = dirname(__filename)
const ROOT       = join(__dirname, '..')

// ── helpers ─────────────────────────────────────────────────────────────────

/** Build the 4 canonical format variants from raw digits (no + or spaces) */
function variants(digits) {
  // We support DE (+49) and ID (+62) patterns; adapt groups as needed.
  // Generic rule: first 2 digits = country code, rest split at natural breaks.
  const raw = digits.replace(/\D/g, '')

  // Attempt smart grouping based on known country codes
  let display, schema
  if (raw.startsWith('49')) {
    // Germany: +49 <net> <subscriber>
    const cc   = raw.slice(0, 2)
    const net  = raw.slice(2, 5)
    const sub  = raw.slice(5)
    display = `+${cc} ${net} ${sub}`
    schema  = `+${cc}-${net}-${sub}`
  } else if (raw.startsWith('62')) {
    // Indonesia: +6289674072020
    const cc   = raw.slice(0, 2)
    const rest = raw.slice(2)
    display = `+${cc} ${rest.slice(0,3)}-${rest.slice(3,7)}-${rest.slice(7)}`
    schema  = `+${cc}-${rest.slice(0,3)}-${rest.slice(3,7)}-${rest.slice(7)}`
  } else {
    // Fallback: just add + for display / schema
    display = `+${raw}`
    schema  = `+${raw}`
  }

  return { digits: raw, display, schema }
}

/** Walk a directory recursively and return all file paths */
function walk(dir, exts) {
  const results = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) {
      if (['node_modules', 'dist', '.git', '.vercel'].includes(name)) continue
      results.push(...walk(full, exts))
    } else if (exts.includes(extname(name))) {
      results.push(full)
    }
  }
  return results
}

/** Replace all occurrences of str in content (returns new string + change count) */
function replaceAll(content, from, to) {
  let count = 0
  const next = content.split(from).join(() => { count++; return to })
  // split/join trick doesn't work with a function — use replace loop instead
  let result = content
  while (result.includes(from)) { result = result.replace(from, to); count++ }
  return { result, count }
}

// ── main ────────────────────────────────────────────────────────────────────

const newDigits = process.argv[2]
if (!newDigits || !/^\d{10,15}$/.test(newDigits)) {
  console.error('Usage: node scripts/change-phone.js <digits>\nExample: node scripts/change-phone.js 6289674072020')
  process.exit(1)
}

// Read current PHONE.digits from siteArchitecture.ts
const archPath    = join(ROOT, 'src/data/siteArchitecture.ts')
const archContent = readFileSync(archPath, 'utf8')
const digitsMatch = archContent.match(/digits:\s*'(\d+)'/)
if (!digitsMatch) {
  console.error('Could not find PHONE.digits in siteArchitecture.ts')
  process.exit(1)
}

const oldDigits = digitsMatch[1]
if (oldDigits === newDigits) {
  console.log(`Phone number is already ${newDigits}. Nothing to do.`)
  process.exit(0)
}

const OLD = variants(oldDigits)
const NEW = variants(newDigits)

console.log(`\nChanging phone number:`)
console.log(`  Old: ${OLD.digits}  /  ${OLD.display}  /  ${OLD.schema}`)
console.log(`  New: ${NEW.digits}  /  ${NEW.display}  /  ${NEW.schema}`)
console.log()

// Collect all source files
const srcFiles = [
  ...walk(join(ROOT, 'src'), ['.ts', '.tsx']),
  join(ROOT, 'index.html'),
]

let totalChanges = 0
for (const file of srcFiles) {
  let content = readFileSync(file, 'utf8')
  let changed = false

  for (const [oldFmt, newFmt] of [
    [OLD.digits,  NEW.digits],
    [OLD.display, NEW.display],
    [OLD.schema,  NEW.schema],
    // Also handle the wa.me URL form (digits only, embedded in URLs)
    [`wa.me/${OLD.digits}`, `wa.me/${NEW.digits}`],
  ]) {
    const { result, count } = replaceAll(content, oldFmt, newFmt)
    if (count > 0) {
      content = result
      totalChanges += count
      changed = true
    }
  }

  if (changed) {
    writeFileSync(file, content, 'utf8')
    console.log(`  ✓ ${file.replace(ROOT + '/', '')}`)
  }
}

// Update siteArchitecture.ts PHONE block
const updatedArch = archContent
  .replace(/digits:\s*'[^']+'/, `digits:   '${NEW.digits}'`)
  .replace(/display:\s*'[^']+'/, `display:  '${NEW.display}'`)
  .replace(/schema:\s*'[^']+'/, `schema:   '${NEW.schema}'`)
writeFileSync(archPath, updatedArch, 'utf8')

console.log(`\n✅ Done — ${totalChanges} replacements across ${srcFiles.length} files checked.`)
console.log(`\nNext steps:`)
console.log(`  git add -A && git commit -m "chore: change phone to ${NEW.display}" && git push`)
console.log(`  Vercel auto-deploys on push.\n`)
