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
  ...REDIRECTS.map((r) => `${r.from}  ${r.to}  ${r.statusCode ?? 301}`),
]
writeFileSync(join(__dirname, '..', 'public', '_redirects'), netlifyLines.join('\n') + '\n')

// 2. Vercel vercel.json (project root)
const vercelConfig = {
  // Deploys come from GitHub Actions via `vercel deploy --prebuilt` (CI runs the
  // Playwright prerender that Vercel's own build container can't). Disable Vercel's
  // Git-integration auto-build entirely so it never (a) overwrites the prerendered
  // output with a meta-only shell, nor (b) errors because the new prerender needs
  // Chromium (which Vercel's build container lacks). CLI `--prebuilt` deploys are
  // unaffected. See .github/workflows/deploy.yml.
  git: { deploymentEnabled: false },

  // PostHog reverse proxy — REQUIRED, and required by the CSP below.
  //
  // The Content-Security-Policy further down this file allows 'self', Google Tag
  // Manager, Google Analytics and Vercel in connect-src/script-src — and nothing
  // from PostHog. So on 2026-07-30, with PostHog correctly installed and deployed,
  // a real browser refused every request to us.i.posthog.com and
  // us-assets.i.posthog.com ("Failed to fetch"; the network log showed a
  // synthesised 503), while a control request to mychef.id returned 200. Zero
  // requests ever reached the ingestion host and ingested_event stayed false.
  //
  // (Initially misread as an ad blocker. It was not — a blocker would hit some
  // visitors, the CSP hit all of them.)
  //
  // That is fatal, not partial: posthog-js fetches its remote config from us-assets
  // during init. When that fetch fails the SDK never finishes bootstrapping, so it
  // sends no events and never starts the session recorder ($sesid absent). One blocked
  // host silently costs you the entire visitor — pageviews, funnel steps and replay.
  //
  // Routing through mychef.id/ingest makes the traffic same-origin, so it is already
  // covered by 'self' and needs no CSP widening. It also happens to defeat
  // domain-based ad/DNS blocking, which is a real secondary benefit for an audience
  // of Western travellers — but the CSP is the reason this is mandatory.
  //
  // If you ever remove this proxy and point api_host back at us.i.posthog.com, you
  // MUST add https://us.i.posthog.com to connect-src and
  // https://us-assets.i.posthog.com to script-src, or analytics dies silently again.
  //
  // Order matters: the /static/ rule MUST precede the catch-all, or asset requests get
  // sent to the ingestion host and 404. Keep in step with api_host in src/lib/posthog.ts.
  //
  // Use the regex form `(.*)` + `$1`, NOT the segment form `:path*`. Verified in a real
  // browser on 2026-07-30: with `:path*` the asset GETs proxied fine (200) but the two
  // POSTs that actually carry data both 404'd —
  //
  //   POST /ingest/e/  -> 404   (events)
  //   POST /ingest/s/  -> 404   (session recording snapshots)
  //
  // because `:path*` matches path SEGMENTS and drops the trailing slash, so `/ingest/e/`
  // was rewritten to `/e` rather than `/e/`. PostHog's ingestion endpoints require the
  // trailing slash. The regex form passes the remainder through byte-for-byte.
  //
  // This failure mode is silent and easy to declare done too early: every asset returns
  // 200, the SDK boots, remote config arrives and session recording reports itself as
  // enabled — while nothing is actually stored. Check for POSTs to /ingest/e/ and
  // /ingest/s/ returning 200, not just that the scripts load.
  rewrites: [
    { source: '/ingest/static/(.*)', destination: 'https://us-assets.i.posthog.com/static/$1' },
    { source: '/ingest/(.*)', destination: 'https://us.i.posthog.com/$1' },
  ],

  redirects: [
    // Force www → apex as a permanent 308 (was 307 temporary — §2.3.3 canonicalization).
    { source: '/(.*)', has: [{ type: 'host', value: 'www.mychef.id' }], destination: 'https://mychef.id/$1', permanent: true },
    ...REDIRECTS.map((r) =>
      r.statusCode
        ? { source: r.from, destination: r.to, statusCode: r.statusCode }
        : { source: r.from, destination: r.to, permanent: true }
    ),
  ],
  headers: [
    {
      source: '/(.*)',
      headers: [
        // NOTE: HSTS is Vercel-managed (max-age=63072000, apex). includeSubDomains+preload
        // (§6.2.3) intentionally NOT forced here — it's a hard-to-reverse commitment across
        // ALL subdomains (e.g. the separate "Mychef Live" app). Owner decision.
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        {
          key: 'Content-Security-Policy',
          // Web Grower (index.html) loads wg.js and POSTs beacons to the same origin.
          // Without these hosts the snippet is present but CSP-blocked (same failure
          // mode as PostHog on 2026-07-30). Do not hand-edit vercel.json.
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://www.googletagmanager.com https://*.googletagmanager.com https://web-grower.vercel.app; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://analytics.google.com https://stats.g.doubleclick.net https://www.google.com https://web-grower.vercel.app; frame-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
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
    {
      source: '/quote',
      headers: [
        { key: 'X-Robots-Tag', value: 'noindex,follow' },
      ],
    },
    {
      // noindex,FOLLOW — not nofollow. /calculator carries the normal site nav, so nofollow
      // blocked PageRank flow for no benefit; fe16f93d ("close /calculator robots conflict")
      // moved it to noindex,follow, matching /quote above and the reasoning applied to
      // /join-our-team. Only /404 deliberately keeps nofollow.
      //
      // That commit edited the generated vercel.json by hand and left this line untouched, so
      // every `prebuild` regenerated vercel.json and reverted the fix — the same failure mode as
      // D-020. Keep this value in step with `noindexFollowPaths` in scripts/inject-meta.ts and
      // src/components/SeoHead.tsx. Edit here, never in vercel.json.
      source: '/calculator',
      headers: [
        { key: 'X-Robots-Tag', value: 'noindex,follow' },
      ],
    },
  ],
}
writeFileSync(join(__dirname, '..', 'vercel.json'), JSON.stringify(vercelConfig, null, 2) + '\n')

console.log(`Wrote ${REDIRECTS.length} redirects to public/_redirects and vercel.json`)
