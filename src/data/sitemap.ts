/**
 * myCHEF — MASTER SITEMAP & CONTENT INDEX
 */
import { LOCATIONS, PILLARS } from './siteArchitecture'

export interface SitemapEntry {
  path: string
  type: 'home' | 'area' | 'micro-area' | 'service' | 'menu' | 'landing' | 'guide' | 'blog-post' | 'blog-index' | 'info' | 'legal' | 'tool'
  title: string
  description: string
  priority: number
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  area?: string
  slug?: string
  aliases?: string[]
  date?: string
  content?: string
}

export const AREAS: { slug: string; name: string }[] = [
  { slug: 'seminyak', name: 'Seminyak' },
  { slug: 'canggu', name: 'Canggu' },
  { slug: 'ubud', name: 'Ubud' },
  { slug: 'sanur', name: 'Sanur' },
  { slug: 'nusa-dua', name: 'Nusa Dua' },
  { slug: 'uluwatu', name: 'Uluwatu' },
  { slug: 'jimbaran', name: 'Jimbaran' },
  { slug: 'kuta', name: 'Kuta' },
  { slug: 'legian', name: 'Legian' },
  { slug: 'kerobokan', name: 'Kerobokan' },
  { slug: 'petitenget', name: 'Petitenget' },
  { slug: 'berawa', name: 'Berawa' },
  { slug: 'pererenan', name: 'Pererenan' },
  { slug: 'bukit', name: 'Bukit Peninsula' },
]

export const MICRO_AREAS: { slug: string; name: string }[] = [
  { slug: 'echo-beach-private-chef', name: 'Echo Beach' },
  { slug: 'batu-bolong-private-chef', name: 'Batu Bolong' },
  { slug: 'bingin-private-chef', name: 'Bingin' },
  { slug: 'balangan-private-chef', name: 'Balangan' },
]

// Expansion Landing Pages (Revenue-focused)
export const LANDING_PAGES = [
  {
    slug: 'villa-bbq-catering-bali',
    title: 'Villa BBQ Catering Bali | Best Private BBQ Experiences',
    description: 'The #1 villa BBQ catering service in Bali. Fresh grills, chef-led service, and full setup for your villa poolside party.',
    date: '2026-05-17',
    content: `<h2>The Ultimate Villa BBQ Experience in Bali</h2><p>myCHEF transforms your villa garden into a professional grill station. We handle everything from charcoal management to the final cleanup.</p>`,
  },
  {
    slug: 'bali-wedding-catering-packages',
    title: 'Bali Wedding Catering Packages 2026 | Private Estate Weddings',
    description: 'Transparent wedding catering packages for Bali villa weddings. Plated dinners, buffets, and cocktail receptions.',
    date: '2026-05-17',
    content: `<h2>Wedding Catering Built for Bali Villa Estates</h2><p>Planning a wedding in a Bali villa requires a logistics team that understands the island's unique environments.</p>`,
  },
  {
    slug: 'michelin-private-chef-bali-prices',
    title: 'Michelin Private Chef Bali Prices | 2026 Cost Guide',
    description: 'Transparent pricing for Michelin-standard private chef experiences in Bali. Cost breakdowns for menus and groceries.',
    date: '2026-05-17',
    content: `<h2>What Does a Michelin-Level Chef Cost in Bali?</h2><p>Luxury private dining should be extraordinary, but the pricing should be transparent. No hidden fees.</p>`,
  },
]

// Educational Help Guides
export const GUIDES = [
  {
    slug: 'guide/bali-cuisine-glossary',
    title: 'Bali Cuisine Glossary',
    description: 'A complete glossary of Balinese cuisine — ingredients, dishes, and cooking techniques.',
    date: '2025-01-15',
    content: `<h2>Essential Balinese Ingredients</h2><p>Base Genep — Bali's foundational spice paste, made from fresh aromatics and chillies.</p>`,
  },
  {
    slug: 'guide/private-chef-bali',
    title: 'Private Chef in Bali — Complete Guide',
    description: 'Everything you need to know about hiring a private chef in Bali — costs and expectations.',
    date: '2025-02-01',
    content: `<h2>The Villa Chef Experience</h2><p>A private chef comes to your villa, prepares a full meal from scratch, serves it, and cleans up after.</p>`,
  },
]

// Editorial Blog Posts
export const BLOG_POSTS = [
  {
    slug: "blog/private-chef-bali-cost-breakdown-2026",
    title: "Private Chef Bali Cost Breakdown 2026",
    description: "2026 Bali private chef cost breakdown with sample villa dinner totals and grocery ranges.",
    date: "2026-05-10",
    content: `<p>If you are pricing a private chef in Bali, split it into parts: chef fee, groceries, and extras.</p>`,
  },
  {
    slug: "blog/best-bali-villas-private-chef-kitchen",
    title: "Best Bali Villas With a Private Chef Kitchen",
    description: "What makes a Bali villa kitchen work for a private chef, with prep-space checks.",
    date: "2026-04-24",
    content: `<p>A chef-friendly kitchen needs heat, prep space, and cold storage. Ventilation is critical.</p>`,
  },
  {
    slug: 'blog/wedding-rehearsal-dinner-bali',
    title: 'Wedding Rehearsal Dinner in Bali',
    description: 'How to plan a stress-free rehearsal dinner in your villa before the big day.',
    date: '2026-04-08',
    content: `<p>A Bali rehearsal dinner has one job: get everyone settled before the wedding day starts.</p>`,
  },
  {
    slug: 'blog/yoga-retreat-chef-bali-meal-planning',
    title: 'Yoga Retreat Chef Bali | Meal Planning',
    description: 'Structuring nutrient-dense, plant-forward menus for multi-day wellness retreats.',
    date: '2026-03-21',
    content: `<p>Retreat food in Bali shapes energy, mood, and digestion. It is part of the recovery plan.</p>`,
  },
  {
    slug: 'blog/private-chef-vs-restaurant-bali',
    title: 'Private Chef vs Restaurant Bali',
    description: 'Comparing total cost, comfort, and menu control for large groups and families.',
    date: '2026-03-05',
    content: `<p>Compare a private chef and a restaurant in Bali on total cost, comfort, and menu control.</p>`,
  },
  {
    slug: 'blog/private-chef-jakarta-launch-michelin-standards',
    title: 'Private Chef Jakarta Launch',
    description: 'myCHEF officially expands to Jakarta residences and corporate suites.',
    date: '2026-05-18',
    content: `<p>myCHEF Indonesia: Now serving Jakarta with the same Michelin-trained standards.</p>`,
  },
]

export function buildSitemap(): SitemapEntry[] {
  const home: SitemapEntry = {
    path: '/',
    type: 'home',
    title: 'myCHEF.id — Private Chef & Event Experiences in Bali',
    description: 'Private chefs, villa catering, and full-service events in Bali. Italian fine dining and Michelin-trained leadership.',
    priority: 1.0,
    changefreq: 'weekly',
  }

  const areas: SitemapEntry[] = AREAS.map((a) => ({
    path: `/${a.slug}`,
    type: 'area',
    title: `Private Chef in ${a.name}, Bali`,
    description: `Private chef services in ${a.name}, Bali. Custom menus, transparent pricing, and professional service.`,
    priority: 0.8,
    changefreq: 'weekly',
    area: a.name,
    slug: a.slug,
  }))

  const locationPages: SitemapEntry[] = Object.values(LOCATIONS).map((l) => ({
    path: `/locations/${l.slug}`,
    type: 'area',
    title: l.title,
    description: l.description,
    priority: 0.7,
    changefreq: 'monthly',
    area: l.label,
    slug: l.slug,
  }))

  const landing: SitemapEntry[] = LANDING_PAGES.map((l) => ({
    path: `/${l.slug}`,
    type: 'landing',
    title: l.title,
    description: l.description,
    priority: 0.7,
    changefreq: 'monthly',
    slug: l.slug,
    content: l.content,
  }))

  const guides: SitemapEntry[] = GUIDES.map((g) => ({
    path: `/${g.slug}`,
    type: 'guide',
    title: g.title,
    description: g.description,
    priority: 0.8,
    changefreq: 'monthly',
    slug: g.slug,
    content: g.content,
  }))

  const blogPosts: SitemapEntry[] = BLOG_POSTS.map((b) => ({
    path: `/${b.slug}`,
    type: 'blog-post',
    title: b.title,
    description: b.description,
    priority: 0.8,
    changefreq: 'monthly',
    slug: b.slug,
    content: b.content,
  }))

  // Supporting info pages
  const infoPages: SitemapEntry[] = [
    { path: '/locations', type: 'info', title: 'Private Chef Locations Bali | myCHEF', description: 'Hire a private chef across Bali — Seminyak, Canggu, Ubud, Uluwatu, and beyond.', priority: 0.8, changefreq: 'monthly' },
    { path: '/journal', type: 'blog-index', title: 'Journal | Bali Private Chef Guides & Hosting Tips', description: 'Guides, cost breakdowns, and insights for hosting in Bali villas.', priority: 0.8, changefreq: 'weekly' },
    { path: '/pricing', type: 'info', title: 'Pricing | Private Chef Bali, Villa Catering & Events', description: 'Transparent pricing for private chef services in Bali.', priority: 0.8, changefreq: 'monthly' },
    { path: '/book', type: 'info', title: 'Book | Private Chef & Catering Bali — myCHEF', description: 'Book a private chef, catering, or event in Bali. Same-day WhatsApp confirmation.', priority: 0.8, changefreq: 'monthly' },
  ]

  return [
    home,
    ...areas,
    ...locationPages,
    ...landing,
    ...guides,
    ...blogPosts,
    ...infoPages,
  ]
}

export const SERVICES = Object.values(PILLARS).map((pillar) => ({
  slug: pillar.slug,
  name: pillar.label,
  description: pillar.description,
}))

export const SITEMAP = buildSitemap()
