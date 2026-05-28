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

import { BLOG_POSTS, GUIDES, SITEMAP } from '../src/data/sitemap'
import { JOURNAL_POSTS } from '../src/data/siteArchitecture'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const SITE = 'https://mychef.id'

// ── OG images for major brand pages ──────────────────────────────────────────
const OG_IMAGES: Record<string, string> = {
  '/': '/hero-home.webp',
  '/fine-dining': '/hero-fine-dining.webp',
  '/villa-chef': '/villa-aerial.webp',
  '/events': '/hero-events.webp',
  '/events/weddings': '/event-wedding.webp',
  '/events/weddings-bali': '/event-wedding.webp',
  '/events/villa-parties': '/bbq-poolside.webp',
  '/services': '/generated/bali-hub-hero.webp',
  '/staffing': '/chef-portrait.webp',
  '/contact': '/generated/contact-hero.webp',
  '/corporate-events': '/generated/corp-hero.webp',
  '/partners': '/partners-hero.webp',
  '/press': '/partners-hero.webp',
  '/partner-platform': '/generated/partner-platform-hero.webp',
  '/catering': '/hero-catering.webp',
  '/catering/floating-breakfast': '/breakfast-spread.webp',
  '/catering/bbq-catering': '/bbq-poolside.webp',
  '/in-villa-service': '/bartender.webp',
  '/about': '/chef-portrait.webp',
  '/chefs': '/chef-portrait.webp',
  '/pricing': '/generated/pricing-hero.webp',
  '/faq': '/generated/faq-hero.webp',
  '/locations': '/generated/hub-villa.webp',
  '/journal': '/generated/journal-hero.webp',
  '/blog': '/generated/journal-hero.webp',
  // Journal posts (individual OG images)
  '/journal/michelin-training-bali': '/generated/journal-hero.webp',
  '/journal/sustainable-sourcing': '/generated/journal-hero.webp',
  '/journal/private-chef-vs-villa-staff-bali': '/generated/journal-hero.webp',
  '/journal/bali-private-chef-cost-guide-2026': '/generated/journal-hero.webp',
  '/journal/villa-wedding-catering-logistics-bali': '/generated/journal-hero.webp',
  '/journal/yoga-retreat-meal-planning-bali': '/generated/journal-hero.webp',
  '/journal/private-chef-seminyak-guide': '/generated/journal-hero.webp',
  '/journal/private-chef-canggu-guide': '/generated/journal-hero.webp',
  '/journal/private-chef-ubud-villa-dining': '/generated/journal-hero.webp',
  '/journal/bali-wedding-catering-complete-guide': '/generated/journal-hero.webp',
  '/journal/private-chef-jakarta-guide': '/generated/journal-hero.webp',
  '/journal/rehearsal-dinner-planning-bali': '/generated/journal-hero.webp',
  '/journal/live-in-chef-vs-daily-service': '/generated/journal-hero.webp',
  '/journal/bbq-catering-cost-breakdown-bali': '/generated/journal-hero.webp',
  '/reviews': '/dining-table.webp',
  '/why-mychef': '/generated/why-mychef-hero.webp',
  '/retreats': '/generated/hero-retreats.jpg',
  '/recommended-services': '/generated/aura-setup.webp',
  '/join-our-team': '/generated/staffing-hero.webp',
  '/calculator': '/generated/pricing-hero.webp',
  '/book': '/generated/book-hero.webp',
  '/quote': '/og-image.webp',
}

const PILLAR_OG_IMAGES: Record<string, string> = {
  'fine-dining': '/hero-fine-dining.webp',
  'catering': '/hero-catering.webp',
  'events': '/hero-events.webp',
  'in-villa-service': '/bartender.webp',
  'staffing': '/chef-portrait.webp',
}

const ARTICLE_AUTHOR = 'myCHEF Team'
const ARTICLE_ROUTES = new Map(
  [...GUIDES.filter((guide) => guide.slug !== 'guide/private-chef-bali'), ...BLOG_POSTS, ...JOURNAL_POSTS].map((entry: any) => [
    entry.slug.startsWith('blog/') || entry.slug.startsWith('guide/') ? `/${entry.slug}` : `/journal/${entry.slug}`,
    entry,
  ])
)

function stripHtml(text = ''): string {
  return text
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&#39;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

function getOgImage(path: string): string {
  if (OG_IMAGES[path]) return OG_IMAGES[path]
  if (ARTICLE_ROUTES.has(path)) return '/generated/luna-hero-v3.webp'
  // Try pillar sub-page fallback: /pillar/subpage → use pillar hero
  const segments = path.split('/').filter(Boolean)
  if (segments.length >= 2) {
    const pillarOg = PILLAR_OG_IMAGES[segments[0]]
    if (pillarOg) return pillarOg
  }
  return '/og-image.webp'
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildBreadcrumbJsonLd(path: string, name: string): string {
  const isArticle = ARTICLE_ROUTES.has(path)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
      ...(isArticle
        ? [{ '@type': 'ListItem', position: 2, name: path.startsWith('/blog/') || path.startsWith('/journal/') ? 'Journal' : 'Help', item: `https://mychef.id${path.startsWith('/blog/') ? '/blog' : path.startsWith('/journal/') ? '/journal' : '/help'}` }]
        : []),
      { '@type': 'ListItem', position: isArticle ? 3 : 2, name, item: `https://mychef.id${path}` },
    ],
  }
  return `<script type="application/ld+json" data-seohead="jsonld">${JSON.stringify(schema)}</script>`
}

function buildArticleJsonLd(path: string, title: string, description: string, ogImage: string): string {
  const article = ARTICLE_ROUTES.get(path)
  if (!article) return ''

  const schema = {
    '@context': 'https://schema.org',
    '@type': path.startsWith('/blog/') || path.startsWith('/journal/') ? 'BlogPosting' : 'Article',
    headline: title,
    description,
    url: `${SITE}${path}`,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Person', name: ARTICLE_AUTHOR },
    publisher: {
      '@type': 'Organization',
      name: 'myCHEF',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/mychef-logo.svg` },
    },
    image: ogImage,
    ...(article.content ? { articleBody: stripHtml(article.content), wordCount: stripHtml(article.content).split(/\s+/).filter(Boolean).length } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}${path}` },
  }

  return `<script type="application/ld+json" data-seohead="jsonld">${JSON.stringify(schema)}</script>`
}

function injectMeta(html: string, path: string, title: string, description: string): string {
  const canonical = `${SITE}${path}`
  const ogImage = `${SITE}${getOgImage(path)}`
  const article = ARTICLE_ROUTES.get(path)

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

  // OG type
  html = html.replace(
    /<meta property="og:type" content=".*?"\s*\/?>/,
    `<meta property="og:type" content="${article ? 'article' : 'website'}" />`
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

  if (article?.date) {
    html = html.replace(
      '</head>',
      `  <meta property="article:published_time" content="${article.date}" />\n  <meta property="article:modified_time" content="${article.date}" />\n  <meta property="article:author" content="${escapeHtml(ARTICLE_AUTHOR)}" />\n</head>`
    )
  }

  // Robots — noindex for thin-content pages and 404
  const noindexPaths = ['/404', '/book', '/quote', '/calculator', '/join-our-team']
  if (noindexPaths.includes(path)) {
    html = html.replace(
      /<meta name="robots" content=".*?"\s*\/?>/,
      `<meta name="robots" content="noindex,nofollow" />`
    )
  } else {
    html = html.replace(
      /<meta name="robots" content=".*?"\s*\/?>/,
      `<meta name="robots" content="index,follow,max-image-preview:large" />`
    )
  }

  // Note: FAQPage schema is now exclusively handled by SeoHead component at runtime.
  // The static FAQPage block was removed from index.html to prevent duplicate field errors.

  // Inject structured data before closing </head>
  const structuredData = [
    buildBreadcrumbJsonLd(path, title.split('|')[0].trim()),
    buildArticleJsonLd(path, title, description, ogImage),
  ].filter(Boolean).join('\n  ')
  html = html.replace('</head>', `${structuredData}\n  </head>`)

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
