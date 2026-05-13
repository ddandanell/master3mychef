// Generates real 301 redirect config for both Vercel and Netlify.
// Run with: npx tsx scripts/generate-redirects.ts
// Also wired into prebuild via package.json.

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

import { REDIRECTS } from '../src/data/redirects'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 1. Netlify _redirects file (public/_redirects)
// Format: "from to status"
const netlifyLines = [
  '# 301 redirects generated from src/data/redirects.ts',
  '# Do not edit by hand — edit the source and re-run `pnpm redirects`.',
  '',
  ...REDIRECTS.map((r) => `${r.from}  ${r.to}  301`),
]
writeFileSync(join(__dirname, '..', 'public', '_redirects'), netlifyLines.join('\n') + '\n')

// 2. Vercel vercel.json (project root)
const vercelConfig = {
  redirects: REDIRECTS.map((r) => ({
    source: r.from,
    destination: r.to,
    permanent: true,
  })),
}
writeFileSync(join(__dirname, '..', 'vercel.json'), JSON.stringify(vercelConfig, null, 2) + '\n')

console.log(`Wrote ${REDIRECTS.length} redirects to public/_redirects and vercel.json`)
