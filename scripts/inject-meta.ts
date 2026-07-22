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
import { REVIEWS, toIsoDate } from '../src/data/reviews'
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
  '/journal': '/generated/journal-hero.webp',
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
  // Bar Services
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

// Per-route LCP hero image preloads. Mirrors the actual <img> rendered above the fold
// on each page so the browser can start fetching it before React hydrates.
// For unknown routes the default homepage preload is removed to avoid wasting bandwidth.
const HERO_PRELOADS: Record<string, string> = {
  '/': '/generated/mychef-location-bali-hub-hero.webp',
  '/reviews': '/generated/mychef-ui-bali-testimonials-bg.webp',
  '/locations/canggu': '/generated/mychef-location-bali-city-canggu.webp',
  '/locations/seminyak': '/generated/mychef-location-bali-city-seminyak.webp',
  '/locations/ubud': '/generated/mychef-location-bali-city-ubud.webp',
  '/locations/uluwatu': '/generated/mychef-location-bali-city-uluwatu.webp',
  '/locations/nusa-dua': '/generated/mychef-location-bali-city-nusa-dua.webp',
  '/locations/jimbaran': '/generated/mychef-location-bali-city-jimbaran.webp',
  '/locations/sanur': '/generated/mychef-location-bali-city-sanur.webp',
  '/locations/pererenan': '/generated/mychef-location-bali-city-pererenan.webp',
  '/locations/bukit': '/generated/mychef-location-bali-city-bukit.webp',
  '/locations/kuta': '/generated/mychef-location-bali-city-kuta.webp',
  '/locations/denpasar': '/generated/mychef-location-bali-city-denpasar.webp',
  '/locations/jakarta': '/generated/mychef-location-bali-city-jakarta.webp',
  '/fine-dining': '/generated/mychef-experience-bali-luna-hero-v4.webp',
  '/fine-dining/romantic-dinner': '/generated/mychef-experience-bali-luna-hero-v4.webp',
  '/fine-dining/tasting-menu': '/generated/mychef-experience-bali-luna-hero-v4.webp',
  '/fine-dining/private-chef-bali': '/generated/mychef-experience-bali-luna-hero-v4.webp',
  '/fine-dining/chefs-table': '/generated/mychef-experience-bali-luna-hero-v4.webp',
  '/fine-dining/menus': '/generated/mychef-experience-bali-luna-hero-v4.webp',
  '/fine-dining/our-chefs': '/generated/mychef-experience-bali-luna-hero-v4.webp',
  '/bali-wedding-catering-packages': '/generated/hero-how-it-works.webp',
  '/private-chef/canggu': '/generated/mychef-location-bali-city-canggu.webp',
  '/private-chef/seminyak': '/generated/mychef-location-bali-city-seminyak.webp',
  '/private-chef/ubud': '/generated/mychef-location-bali-city-ubud.webp',
  '/private-chef/uluwatu': '/generated/mychef-location-bali-city-uluwatu.webp',
  '/catering/floating-breakfast': '/generated/mychef-location-bali-floating-breakfast-bali.webp',
  '/catering/bbq-catering': '/generated/mychef-catering-bali-hero-bbq.webp',
  '/catering/buffet': '/generated/mychef-catering-bali-hero-buffet.webp',
  '/catering/plated-catering': '/generated/mychef-catering-bali-hero-plated.webp',
  '/catering/drop-off-catering': '/generated/mychef-catering-bali-hero-dropoff.webp',
  '/catering/grazing-tables': '/generated/mychef-catering-bali-hero-grazing.webp',
  '/catering/villa-catering': '/generated/mychef-catering-bali-hero-villa.webp',
  '/catering/corporate-catering': '/generated/mychef-catering-bali-hero-corporate.webp',
  '/catering/retreat-catering': '/generated/mychef-catering-bali-hero-retreat.webp',
  '/book': '/generated/mychef-ui-bali-book-hero.webp',
  '/bbq-grill': '/generated/mychef-catering-bali-bbq-grill-satay.webp',
  '/bar-services': '/generated/mychef-bar-services-bali-hero-hub.webp',
  '/bar-services/': '/generated/mychef-bar-services-bali-hero-hub.webp',
  '/services': '/generated/mychef-location-bali-hub-hero.webp',
  '/events/weddings': '/generated/mychef-events-bali-hero-weddings.webp',
  '/events/birthdays': '/generated/mychef-events-bali-hero-birthdays.webp',
  '/events/anniversaries': '/generated/mychef-events-bali-hero-anniversaries.webp',
  '/events/corporate-events': '/generated/mychef-events-bali-hero-corporate.webp',
  '/events/retreats': '/generated/mychef-events-bali-hero-retreats.webp',
  '/events/baby-showers': '/generated/mychef-events-bali-hero-baby-showers.webp',
  '/events/villa-parties': '/generated/mychef-events-bali-hero-villa-parties.webp',
  '/events': '/generated/mychef-events-bali-hero-events.webp',
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
      logo: { '@type': 'ImageObject', url: `${SITE}/mychef-logo.svg` },
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


const SERVICE_SCHEMA_CONFIG: Record<string, { name: string; description: string; priceRange?: string; image?: string }> = {
  '/fine-dining': {
    name: 'Private Fine Dining Bali',
    description: 'Michelin-trained private chef tasting menus in your Bali villa. Italian, Mediterranean, Wagyu and seafood paths for 6+ guests.',
    priceRange: '$$$$',
    image: `${SITE}/hero-fine-dining.webp`,
  },
  '/catering': {
    name: 'Villa Catering Bali',
    description: 'BBQ, buffet, plated dinners, Babi Guling, grazing tables and drop-off catering for Bali villas and events.',
    priceRange: '$$$',
    image: `${SITE}/hero-catering.webp`,
  },
  '/events': {
    name: 'Private Event Catering Bali',
    description: 'Full-service hospitality for weddings, birthdays, corporate offsites and villa celebrations in Bali.',
    priceRange: '$$$$',
    image: `${SITE}/hero-events.webp`,
  },
  '/in-villa-service': {
    name: 'In-Villa Service Staff Bali',
    description: 'Uniformed waiters, butlers, bartenders, mixologists and sommeliers for villa dining and events in Bali.',
    priceRange: '$$$',
    image: `${SITE}/bartender.webp`,
  },
  '/staffing': {
    name: 'Hospitality Staffing Bali',
    description: 'Hire vetted private chefs, live-in chefs, villa staff and household staff across Bali with 48-hour placement.',
    priceRange: '$$$',
    image: `${SITE}/chef-portrait.webp`,
  },
  '/services': {
    name: 'Private Chef Services Bali',
    description: 'Compare all private chef services in Bali: fine dining, catering, events, staffing and villa experiences.',
    image: `${SITE}/generated/bali-hub-hero.webp`,
  },
  '/villa-chef': {
    name: 'Private Chef for Bali Villas',
    description: 'Daily private chef service for Bali villa stays — breakfast, lunch and dinner with groceries at cost.',
    priceRange: '$$$',
    image: `${SITE}/villa-aerial.webp`,
  },
}

const BALI_AREAS = [
  { '@type': 'Place', name: 'Seminyak, Bali' },
  { '@type': 'Place', name: 'Canggu, Bali' },
  { '@type': 'Place', name: 'Ubud, Bali' },
  { '@type': 'Place', name: 'Uluwatu, Bali' },
  { '@type': 'Place', name: 'Nusa Dua, Bali' },
  { '@type': 'Place', name: 'Jimbaran, Bali' },
  { '@type': 'Place', name: 'Sanur, Bali' },
]

function buildServiceJsonLd(path: string): string {
  const config = SERVICE_SCHEMA_CONFIG[path]
  if (!config) return ''
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.name,
    description: config.description,
    url: `${SITE}${path}`,
    provider: { '@id': `${SITE}/#business` },
    areaServed: BALI_AREAS,
  }
  if (config.priceRange) {
    schema.priceRange = config.priceRange
  }
  if (config.image) {
    schema.image = config.image
  }
  return `<script type="application/ld+json" data-seohead="jsonld">${JSON.stringify(schema)}</script>`
}

function buildLocationServiceJsonLd(path: string, title: string, description: string): string {
  if (!path.startsWith('/locations/')) return ''
  const location = path.replace('/locations/', '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Private Chef ${location}`,
    description,
    url: `${SITE}${path}`,
    provider: { '@id': `${SITE}/#business` },
    areaServed: { '@type': 'Place', name: `${location}, Bali` },
    serviceType: 'Private Chef & Villa Catering',
  }
  return `<script type="application/ld+json" data-seohead="jsonld">${JSON.stringify(schema)}</script>`
}

// Review + AggregateRating schema for /reviews. Standalone Review entities are
// emitted (not wrapped in ItemList) because Google review snippets reject
// ListItem parents and require an explicit itemReviewed field.
function buildReviewsJsonLd(path: string): string {
  if (path !== '/reviews') return ''
  const reviewedBusiness = {
    '@type': 'LocalBusiness',
    name: 'myCHEF Bali',
    '@id': `${SITE}/#business`,
    url: SITE,
  }
  const aggregateRating = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: reviewedBusiness,
    ratingValue: '4.9',
    bestRating: '5',
    reviewCount: '560',
  }
  const reviewSchemas = REVIEWS.slice(0, 5).map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: { '@type': 'Person', name: review.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
    },
    reviewBody: review.review,
    datePublished: toIsoDate(review.date),
    itemReviewed: reviewedBusiness,
  }))
  return [
    `<script type="application/ld+json" data-seohead="jsonld">${JSON.stringify(aggregateRating)}</script>`,
    ...reviewSchemas.map(
      (schema) => `<script type="application/ld+json" data-seohead="jsonld">${JSON.stringify(schema)}</script>`
    ),
  ].join('\n  ')
}

function injectMeta(html: string, path: string, title: string, description: string): string {
  const canonical = `${SITE}${path}`
  const ogImage = `${SITE}${getOgImage(path)}`
  const article = ARTICLE_ROUTES.get(path)

  // Replacement-string-safe wrapper: a callback prevents literal '$' characters
  // in titles, descriptions, JSON-LD, etc. from being interpreted as replacement
  // patterns (e.g. priceRange '$$$$' must stay as four dollars, not collapse to '$$').
  const r = (search: string | RegExp, replacement: string): string => html.replace(search, () => replacement)

  // Title
  html = r(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)

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

  // Per-route LCP hero preload: replace the default homepage preload with the
  // actual above-the-fold image for this route, or remove it when unknown.
  const heroPreload = HERO_PRELOADS[path]
  if (heroPreload) {
    html = html.replace(
      /<link rel="preload" as="image" href=".*?" fetchpriority="high"\s*\/?>/,
      `<link rel="preload" as="image" href="${heroPreload}" fetchpriority="high" />`
    )
  } else {
    html = html.replace(
      /\s*<link rel="preload" as="image" href=".*?" fetchpriority="high"\s*\/>/,
      ''
    )
  }

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

  // Robots — noindex for thin-content/conversion pages and 404.
  // /join-our-team now has real JobPosting + FAQ content and is indexable.
  const noindexPaths = ['/404', '/book', '/quote', '/calculator', '/pricing-calculator']
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
    buildWebPageJsonLd(path, title.split('|')[0].trim(), description),
    buildServiceJsonLd(path),
    buildLocationServiceJsonLd(path, title, description),
    buildReviewsJsonLd(path),
  ].filter(Boolean).join('\n  ')
  // Use a replacer callback so literal '$' characters in JSON-LD (e.g. priceRange
  // '$$$$') are not interpreted as replacement patterns by String.prototype.replace.
  html = html.replace('</head>', () => `${structuredData}\n  </head>`)

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

  // Hreflang for international SEO
  const hrefLangTags = [
    `<link rel="alternate" hreflang="en" href="${canonical}" />`,
    `<link rel="alternate" hreflang="id" href="${canonical}" />`,
    `<link rel="alternate" hreflang="x-default" href="${canonical}" />`,
  ].join('\n  ')
  html = html.replace('</head>', `${hrefLangTags}\n  </head>`)

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
  { path: '/quote', title: 'Get a Quote | myCHEF Private Chef Bali', description: 'Get a fast, itemised quote for private chef, villa catering, or event staffing in Bali. No obligation.' },
  { path: '/calculator', title: 'Pricing Calculator | Private Chef Bali | myCHEF.id', description: 'Estimate your private chef, catering, or event costs instantly. Transparent IDR pricing, no hidden fees.' },
  { path: '/pricing-calculator', title: 'Pricing Calculator | Private Chef Bali — myCHEF', description: 'Calculate your private chef Bali cost in seconds. Adjust guests, menu style & add-ons for an instant estimate. No hidden fees.' },
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
