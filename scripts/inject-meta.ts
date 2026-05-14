#!/usr/bin/env node
/**
 * Injects per-route SEO meta tags into dist/index.html copies.
 * Replaces the Playwright-based prerender for Vercel deployments.
 *
 * Reads the Vite-built dist/index.html (empty <div id="root">), then creates
 * a copy at dist/<route>/index.html for every route in the sitemap with the
 * correct <title>, <meta description>, <canonical>, OG tags, Twitter cards,
 * and JSON-LD BreadcrumbList schema.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { SITEMAP } from '../src/data/sitemap'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const SITE = 'https://mychef.id'

// ── OG images for major brand pages ──────────────────────────────────────────
const OG_IMAGES: Record<string, string> = {
  '/': '/generated/hub-hero-v3.webp',
  '/fine-dining': '/generated/luna-hero-v2.webp',
  '/villa-chef': '/generated/catering-hero.webp',
  '/events': '/generated/aura-hero-v2.webp',
  '/services': '/generated/bali-hub-hero.webp',
  '/staffing': '/generated/staffing-hero.webp',
  '/contact': '/generated/contact-hero.webp',
  '/corporate-events': '/generated/corp-hero.webp',
  '/partners': '/generated/partner-platform-hero.webp',
  '/partner-platform': '/generated/partner-platform-hero.webp',
}

function getOgImage(path: string): string {
  return OG_IMAGES[path] || '/og-image.webp'
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildBreadcrumbJsonLd(path: string, name: string): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
      { '@type': 'ListItem', position: 2, name, item: `https://mychef.id${path}` },
    ],
  }
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
}

function injectMeta(html: string, path: string, title: string, description: string): string {
  const canonical = `${SITE}${path}`
  const ogImage = `${SITE}${getOgImage(path)}`

  // Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)

  // Description
  html = html.replace(
    /<meta name="description" content=".*?"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  )

  // Canonical
  html = html.replace(
    /<link rel="canonical" href=".*?"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  )

  // OG title
  html = html.replace(
    /<meta property="og:title" content=".*?"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  )

  // OG description
  html = html.replace(
    /<meta property="og:description" content=".*?"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  )

  // OG URL
  html = html.replace(
    /<meta property="og:url" content=".*?"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`
  )

  // OG image
  html = html.replace(
    /<meta property="og:image" content=".*?"\s*\/?>/,
    `<meta property="og:image" content="${ogImage}" />`
  )

  // Twitter title
  html = html.replace(
    /<meta name="twitter:title" content=".*?"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`
  )

  // Twitter description
  html = html.replace(
    /<meta name="twitter:description" content=".*?"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`
  )

  // Twitter image
  html = html.replace(
    /<meta name="twitter:image" content=".*?"\s*\/?>/,
    `<meta name="twitter:image" content="${ogImage}" />`
  )

  // Robots — noindex for 404, index for everything else
  if (path === '/404') {
    html = html.replace(
      /<meta name="robots" content=".*?"\s*\/?>/,
      `<meta name="robots" content="noindex,nofollow" />`
    )
  }

  // Remove FAQPage schema for non-homepage routes
  if (path !== '/') {
    html = html.replace(
      /<!-- Structured data: FAQPage[\s\S]*?<\/script>\s*/,
      ''
    )
  }

  // Inject BreadcrumbList before closing </head>
  const breadcrumb = buildBreadcrumbJsonLd(path, title.split('|')[0].trim())
  html = html.replace('</head>', `${breadcrumb}\n  </head>`)

  return html
}

// ── Main ─────────────────────────────────────────────────────────────────────
const baseHtml = readFileSync(join(DIST, 'index.html'), 'utf-8')
let success = 0
let fail = 0

for (const entry of SITEMAP) {
  try {
    const html = injectMeta(baseHtml, entry.path, entry.title, entry.description)
    const outDir = join(DIST, entry.path)
    mkdirSync(outDir, { recursive: true })
    writeFileSync(join(outDir, 'index.html'), html)
    success++

    // Also write alias paths
    if ((entry as any).aliases) {
      for (const alias of (entry as any).aliases) {
        const aliasHtml = injectMeta(baseHtml, alias, entry.title, entry.description)
        const aliasDir = join(DIST, alias)
        mkdirSync(aliasDir, { recursive: true })
        writeFileSync(join(aliasDir, 'index.html'), aliasHtml)
        success++
      }
    }
  } catch (err) {
    console.error(`  ✗ ${entry.path}:`, err)
    fail++
  }
}

// Create 404.html with noindex
const notFoundHtml = baseHtml.replace(
  /<meta name="robots" content=".*?"\s*\/?>/,
  `<meta name="robots" content="noindex,nofollow" />`
).replace(
  /<title>.*?<\/title>/,
  `<title>Page Not Found | myCHEF — Private Chef Bali</title>`
).replace(
  /<meta name="description" content=".*?"\s*\/?>/,
  `<meta name="description" content="The page you are looking for does not exist. Explore private chef, Bali villa catering, fine dining, and event experiences with myCHEF." />`
)
writeFileSync(join(DIST, '404.html'), notFoundHtml)

console.log(`Injected meta tags: ${success} files created, ${fail} failed`)
