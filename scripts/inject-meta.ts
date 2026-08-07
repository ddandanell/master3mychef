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
import { JOURNAL_POSTS } from '../src/data/content/journalPosts'
import { ARTICLE_CONTENT } from '../src/data/content/articleContent'
import type { ContentEntry } from '../src/lib/blog'
import type { JournalPost } from '../src/data/siteArchitecture'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const SITE = 'https://mychef.id'

// ── OG images for major brand pages ──────────────────────────────────────────
const OG_IMAGES: Record<string, string> = {
  '/': '/hero-home.webp',
  '/fine-dining': '/hero-fine-dining.webp',
  '/three-course': '/generated/mychef-catering-bali-plated-3course-table.webp',
  '/kids-menus': '/generated/mychef-events-bali-party-birthday.webp',
  '/bbq-grill': '/generated/mychef-catering-bali-bbq-grill-satay.webp',
  '/dining-styles': '/generated/mychef-dining-styles-bali-hero.webp',
  '/family-styling': '/generated/mychef-catering-bali-plated-menus.webp',
  '/villa-chef': '/villa-aerial.webp',
  '/events': '/hero-events.webp',
  '/villa-event-packages': '/generated/mychef-villa-event-packages-hero.webp',
  '/vip-transport-bali': '/generated/mychef-vip-transport-bali-hero.webp',
  '/complete-villa-experience': '/generated/mychef-catering-bali-catering-hero.webp',
  '/events/weddings': '/generated/mychef-events-bali-hero-weddings.webp',
  '/events/weddings-bali': '/generated/mychef-events-bali-hero-weddings.webp',
  '/events/birthdays': '/generated/mychef-events-bali-hero-birthdays.webp',
  '/events/anniversaries': '/generated/mychef-events-bali-hero-anniversaries.webp',
  '/events/corporate-events': '/generated/mychef-events-bali-hero-corporate.webp',
  '/events/retreats': '/generated/mychef-events-bali-hero-retreats.webp',
  '/events/baby-showers': '/generated/mychef-events-bali-hero-baby-showers.webp',
  '/events/villa-parties': '/generated/mychef-events-bali-hero-villa-parties.webp',
  '/services': '/generated/bali-hub-hero.webp',
  '/staffing': '/chef-portrait.webp',
  '/contact': '/generated/contact-hero.webp',
  '/corporate-events': '/generated/corp-hero.webp',
  '/partners': '/partners-hero.webp',
  '/press': '/partners-hero.webp',
  '/partner-platform': '/generated/partner-platform-hero.webp',
  '/catering': '/hero-catering.webp',
  '/catering/floating-breakfast': '/generated/mychef-catering-bali-hero-floating-breakfast.webp',
  '/catering/bbq-catering': '/generated/mychef-catering-bali-hero-bbq.webp',
  '/catering/buffet': '/generated/mychef-catering-bali-hero-buffet.webp',
  '/catering/plated-catering': '/generated/mychef-catering-bali-hero-plated.webp',
  '/catering/drop-off-catering': '/generated/mychef-catering-bali-hero-dropoff.webp',
  '/catering/grazing-tables': '/generated/mychef-catering-bali-hero-grazing.webp',
  '/catering/villa-catering': '/generated/mychef-catering-bali-hero-villa.webp',
  '/catering/corporate-catering': '/generated/mychef-catering-bali-hero-corporate.webp',
  '/catering/retreat-catering': '/generated/mychef-catering-bali-hero-retreat.webp',
  '/in-villa-service': '/generated/mychef-service-bali-hero-waiters.webp',
  '/in-villa-service/waiters': '/generated/mychef-service-bali-hero-waiters.webp',
  '/in-villa-service/butlers': '/generated/mychef-service-bali-hero-butlers.webp',
  '/in-villa-service/bartenders': '/generated/mychef-service-bali-hero-bartenders.webp',
  '/in-villa-service/mixology': '/generated/mychef-service-bali-hero-mixology.webp',
  '/in-villa-service/sommelier': '/generated/mychef-service-bali-hero-sommelier.webp',
  '/in-villa-service/host-hostess': '/bartender.webp',
  '/about': '/chef-portrait.webp',
  '/chefs': '/chef-portrait.webp',
  '/pricing': '/generated/pricing-hero.webp',
  '/faq': '/generated/faq-hero.webp',
  '/locations': '/generated/hub-villa.webp',
  '/journal': '/generated/mychef-journal-private-chef-cost-guide.webp',
  // Journal posts (individual OG images)
  '/journal/michelin-training-bali': '/generated/mychef-journal-michelin-training-bali.webp',
  '/journal/sustainable-sourcing': '/generated/mychef-journal-sustainable-sourcing.webp',
  '/journal/private-chef-vs-villa-staff-bali': '/generated/mychef-journal-private-chef-vs-villa-staff.webp',
  '/journal/bali-private-chef-cost-guide-2026': '/generated/mychef-journal-private-chef-cost-guide.webp',
  '/journal/villa-wedding-catering-logistics-bali': '/generated/mychef-journal-villa-wedding-catering.webp',
  '/journal/yoga-retreat-meal-planning-bali': '/generated/mychef-journal-yoga-retreat-meals.webp',
  '/journal/private-chef-seminyak-guide': '/generated/mychef-journal-private-chef-seminyak.webp',
  '/journal/private-chef-canggu-guide': '/generated/mychef-journal-private-chef-canggu.webp',
  '/journal/private-chef-ubud-villa-dining': '/generated/mychef-journal-private-chef-ubud.webp',
  '/journal/bali-wedding-catering-complete-guide': '/generated/mychef-journal-bali-wedding-catering.webp',
  '/journal/rehearsal-dinner-planning-bali': '/generated/mychef-journal-rehearsal-dinner-bali.webp',
  '/journal/live-in-chef-vs-daily-service': '/generated/mychef-journal-live-in-vs-daily-chef.webp',
  '/journal/bbq-catering-cost-breakdown-bali': '/generated/mychef-journal-bbq-catering-cost.webp',
  '/reviews': '/dining-table.webp',
  '/why-mychef': '/generated/why-mychef-hero.webp',
  '/retreats': '/generated/hero-retreats.jpg',
  '/recommended-services': '/generated/aura-setup.webp',
  '/join-our-team': '/generated/staffing-hero.webp',
  '/calculator': '/generated/pricing-hero.webp',
  '/book': '/generated/book-hero.webp',
  '/quote': '/og-image.webp',
  // Bar Services
  '/experiences': '/generated/private-experiences-bali-hub.webp',
  '/experiences/private-cocktail-party': '/generated/bartender-hire-bali-cocktail-party.webp',
  '/experiences/sushi-masterclass': '/generated/sushi-making-class-bali-masterclass.webp',
  '/experiences/cooking-class': '/generated/mychef-cooking-class-bali-hero-villa.webp',
  '/experiences/private-cooking-class': '/generated/mychef-cooking-class-bali-hero-villa.webp',
  '/experiences/kids-birthday-chef-party': '/generated/kids-birthday-party-bali-chef.webp',
  '/experiences/champagne-oyster-experience': '/generated/oyster-bar-bali-champagne.webp',
  '/experiences/caviar-experience': '/generated/mychef-caviar-experience-bali-hero-villa.webp',
  '/experiences/whiskey-cigar-experience': '/generated/mychef-whiskey-cigar-experience-bali-hero-villa.webp',
  '/experiences/romantic-proposal-dinner': '/generated/proposal-package-bali-dinner.webp',
  '/bar-services/': '/generated/mychef-bar-services-bali-og-hub.jpg',
  '/bar-services/bar-staff-training/': '/generated/mychef-bar-services-bali-og-bar-staff-training.jpg',
  '/bar-services/cocktail-menu-development/': '/generated/mychef-bar-services-bali-og-cocktail-menu-development.jpg',
  '/bar-services/signature-cocktail-creation/': '/generated/mychef-bar-services-bali-og-signature-cocktail-creation.jpg',
  '/bar-services/temporary-bartender-staffing/': '/generated/mychef-bar-services-bali-og-temporary-bartender-staffing.jpg',
  '/bar-services/permanent-bar-staff-recruitment/': '/generated/mychef-bar-services-bali-og-permanent-bar-staff-recruitment.jpg',
  '/bar-services/new-bar-setup/': '/generated/mychef-bar-services-bali-og-new-bar-setup.jpg',
  '/bar-services/bar-audit-improvement/': '/generated/mychef-bar-services-bali-og-bar-audit-improvement.jpg',
  '/bar-services/bar-costing-inventory-control/': '/generated/mychef-bar-services-bali-og-bar-costing-inventory-control.jpg',
  '/bar-services/bar-equipment-supply-rental/': '/generated/mychef-bar-services-bali-og-bar-equipment-supply-rental.jpg',
  '/bar-services/monthly-bar-management-support/': '/generated/mychef-bar-services-bali-og-monthly-bar-management-support.jpg',
  '/bar-services/complete-bar-performance-programme/': '/generated/mychef-bar-services-bali-og-complete-bar-performance-programme.jpg',
  '/bar-services/faq/': '/generated/mychef-bar-services-bali-og-faq.jpg',
  '/bar-services/contact/': '/generated/mychef-bar-services-bali-og-contact.jpg',
  '/bar-services/resources/': '/generated/mychef-bar-services-bali-og-resources.jpg',
  '/bar-services/resources/how-much-does-a-bartender-cost-bali/': '/generated/mychef-bar-services-bali-og-how-much-does-a-bartender-cost-bali.jpg',
  '/bar-services/resources/bartender-salary-benchmarks-bali/': '/generated/mychef-bar-services-bali-og-bartender-salary-benchmarks-bali.jpg',
  '/bar-services/resources/how-many-bartenders-per-guest/': '/generated/mychef-bar-services-bali-og-how-many-bartenders-per-guest.jpg',
  '/bar-services/resources/beverage-cost-percentage-guide/': '/generated/mychef-bar-services-bali-og-beverage-cost-percentage-guide.jpg',
  '/bar-services/resources/how-to-open-a-bar-in-bali/': '/generated/mychef-bar-services-bali-og-how-to-open-a-bar-in-bali.jpg',
  '/bar-services/resources/how-to-create-a-cocktail-menu/': '/generated/mychef-bar-services-bali-og-how-to-create-a-cocktail-menu.jpg',
  '/bar-services/resources/how-to-reduce-bar-shrinkage-bali/': '/generated/mychef-bar-services-bali-og-how-to-reduce-bar-shrinkage-bali.jpg',
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
  [...GUIDES.filter((guide) => guide.slug !== 'guide/private-chef-bali'), ...BLOG_POSTS, ...JOURNAL_POSTS].map(
    (entry: ContentEntry | JournalPost) => [
      entry.slug.startsWith('blog/') || entry.slug.startsWith('guide/') ? `/${entry.slug}` : `/journal/${entry.slug}`,
      entry,
    ]
  )
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

function getOgImageAlt(path: string): string {
  if (path === '/') {
    return 'myCHEF private chef service in Bali — villa dining and catering'
  }
  if (path.startsWith('/fine-dining')) {
    return 'myCHEF fine dining private chef experience in Bali'
  }
  if (path.startsWith('/catering')) {
    return 'myCHEF villa catering service in Bali'
  }
  if (path.startsWith('/events')) {
    return 'myCHEF event catering and private chef in Bali'
  }
  if (path.startsWith('/staffing')) {
    return 'myCHEF hospitality staffing and chef placement in Bali'
  }
  if (path.startsWith('/locations/') || path.startsWith('/private-chef/')) {
    const location = path.split('/').pop() || 'Bali'
    const prettyLocation = location.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    return `myCHEF private chef in ${prettyLocation}`
  }
  if (path.startsWith('/in-villa-service')) {
    return 'myCHEF in-villa service staff for Bali villas'
  }
  if (path.startsWith('/bar-services')) {
    return 'myCHEF Bar Services — B2B bar consultancy, staffing and management in Bali'
  }
  if (path.startsWith('/blog/') || path.startsWith('/journal/')) {
    return 'myCHEF private chef and villa dining experience in Bali'
  }
  return 'myCHEF — private chef plating a fine dining course in a Bali villa'
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildBreadcrumbJsonLd(path: string, name: string): string {
  // Homepage breadcrumbs are pointless and self-referential; skip them per audit H-11.
  if (path === '/') return ''

  const isArticle = ARTICLE_ROUTES.has(path)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
      ...(isArticle
        ? [{ '@type': 'ListItem', position: 2, name: path.startsWith('/blog/') || path.startsWith('/journal/') ? 'Journal' : 'Help', item: `https://mychef.id/journal` }]
        : []),
      { '@type': 'ListItem', position: isArticle ? 3 : 2, name, item: `https://mychef.id${path}` },
    ],
  }
  return `<script type="application/ld+json" data-seohead="jsonld">${JSON.stringify(schema)}</script>`
}

function buildArticleJsonLd(path: string, title: string, description: string, ogImage: string): string {
  const article = ARTICLE_ROUTES.get(path)
  if (!article) return ''
  // Bodies live in the split content store now — hydrate for articleBody/wordCount.
  const body: string = article.content ?? ARTICLE_CONTENT[path] ?? ''

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
      logo: { '@type': 'ImageObject', url: `${SITE}/mychef-logo-512.png`, width: 512, height: 512 },
    },
    image: ogImage,
    ...(body ? { articleBody: stripHtml(body), wordCount: stripHtml(body).split(/\s+/).filter(Boolean).length } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}${path}` },
  }

  return `<script type="application/ld+json" data-seohead="jsonld">${JSON.stringify(schema)}</script>`
}

// WebPage schema for every non-article page (§5.1.3). Article pages already reference
// a WebPage via the article schema's mainEntityOfPage, so we skip them to avoid duplicates.
function buildWebPageJsonLd(path: string, name: string, description: string): string {
  if (ARTICLE_ROUTES.has(path)) return ''
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE}${path}#webpage`,
    url: `${SITE}${path}`,
    name,
    description,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'myCHEF' },
    inLanguage: 'en',
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

  // OG image alt
  html = html.replace(
    /<meta property="og:image:alt" content=".*?"\s*\/?>/,
    `<meta property="og:image:alt" content="${escapeHtml(getOgImageAlt(path))}" />`
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
    const section = path.startsWith('/blog/') ? 'Blog' : path.startsWith('/journal/') ? 'Journal' : 'Guide'
    const tags = path.startsWith('/blog/') ? 'private chef, Bali, villa dining' : path.startsWith('/journal/') ? 'Bali dining, private chef, villa catering' : 'Bali, private chef, guide'
    html = html.replace(
      '</head>',
      `  <meta property="article:published_time" content="${article.date}" />
  <meta property="article:modified_time" content="${article.date}" />
  <meta property="article:author" content="${escapeHtml(ARTICLE_AUTHOR)}" />
  <meta property="article:section" content="${section}" />
  <meta property="article:tag" content="${tags}" />
</head>`)
  }

  // Robots — noindex for thin-content pages and 404
  // NOTE: /join-our-team was removed from this list — it is a real careers landing
  // page, it ships in sitemap.xml, and noindex,nofollow both hid it from search and
  // dumped the link equity of its 104 outgoing internal links.
  // /book and /calculator moved from noindex,nofollow to noindex,follow to match
  // /quote. All three are utility pages we don't want indexed, but they carry the
  // normal site nav, and 'nofollow' stops PageRank flowing through those links for
  // no stated benefit — the same reasoning already applied to /join-our-team.
  // Screaming Frog flagged this as "Directives: Nofollow" (High, 2 URLs).
  // /404 keeps nofollow: it should neither be indexed nor pass equity onwards.
  const noindexNoFollowPaths = ['/404']
  const noindexFollowPaths = ['/quote', '/book', '/calculator']
  if (noindexNoFollowPaths.includes(path)) {
    html = html.replace(
      /<meta name="robots" content=".*?"\s*\/?>/,
      `<meta name="robots" content="noindex,nofollow" />`
    )
  } else if (noindexFollowPaths.includes(path)) {
    html = html.replace(
      /<meta name="robots" content=".*?"\s*\/?>/,
      `<meta name="robots" content="noindex,follow" />`
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
    buildWebPageJsonLd(path, title.split('|')[0].trim(), description),
  ].filter(Boolean).join('\n  ')
  html = html.replace('</head>', `${structuredData}\n  </head>`)

  // OG locale (all content is in English)
  html = html.replace(
    /<meta property="og:locale" content=".*?"\s*\/?>/,
    `<meta property="og:locale" content="en_US" />`
  )

  // OG site_name for brand recognition in social shares
  html = html.replace(
    /<meta property="og:site_name" content=".*?"\s*\/?>/,
    `<meta property="og:site_name" content="myCHEF" />`
  )

  // Hreflang for international SEO.
  // NOTE: do not add 'id' here. The site is English-only (<html lang="en">), so an
  // `id` alternate pointing at the same English URL is a language mismatch —
  // it was failing on 94/94 pages in Semrush. Only re-add when a real /id/ locale ships.
  //
  // NOTE: noindex pages emit NO hreflang at all. Every URL in an hreflang set must be
  // indexable, so a noindex page annotating itself makes the whole relationship liable
  // to be ignored. Screaming Frog reported this as "Hreflang: Noindex Return Links"
  // (High, 3 URLs) — exactly the three crawlable noindex paths below.
  // Mirrored in src/components/SeoHead.tsx for the client-rendered path.
  if (!noindexNoFollowPaths.includes(path) && !noindexFollowPaths.includes(path)) {
    const hrefLangTags = [
      `<link rel="alternate" hreflang="en" href="${canonical}" />`,
      `<link rel="alternate" hreflang="x-default" href="${canonical}" />`,
    ].join('\n  ')
    html = html.replace('</head>', `${hrefLangTags}\n  </head>`)
  }

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
    if (entry.aliases) {
      for (const alias of entry.aliases) {
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

// Serve noindex utility pages that aren't in SITEMAP (they were 404 on direct access /
// share / crawl, even though they work via client-side nav). injectMeta noindexes them
// (they're in noindexPaths), and they're excluded from sitemap.xml (see generate-sitemap).
const EXTRA_NOINDEX_PAGES = [
  { path: '/book', title: 'Book myCHEF | Private Chef & Catering Bali', description: 'Book your private chef, villa catering, or event in Bali. Send your date, villa, and guest count for a fast quote.' },
  { path: '/quote', title: 'Get a Custom Quote — Private Chef in Bali | myCHEF', description: 'Get a fast, itemised quote for private chef, villa catering or event staffing in Bali. Tell us your occasion, guests and location — we reply in 24 hours.' },
]
for (const p of EXTRA_NOINDEX_PAGES) {
  try {
    const html = injectMeta(baseHtml, p.path, p.title, p.description)
    const outDir = join(DIST, p.path)
    mkdirSync(outDir, { recursive: true })
    writeFileSync(join(outDir, 'index.html'), html)
    success++
  } catch (err) {
    console.error(`  ✗ ${p.path}:`, err)
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
