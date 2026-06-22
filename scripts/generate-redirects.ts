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
  headers: [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://www.googletagmanager.com https://*.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
        },
      ],
    },
    {
      source: '/assets/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
    {
      source: '/(.*)\\.html',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
      ],
    },
  ],
}
writeFileSync(join(__dirname, '..', 'vercel.json'), JSON.stringify(vercelConfig, null, 2) + '\n')

console.log(`Wrote ${REDIRECTS.length} redirects to public/_redirects and vercel.json`)
