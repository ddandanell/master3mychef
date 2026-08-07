/**
 * myCHEF — MASTER SITEMAP & CONTENT INDEX
 */
import { LOCATIONS, PILLARS, LOCATION_PAGE_SLUGS } from './siteArchitecture'
import { PRIVATE_CHEF_AREAS } from './privateChefAreas'
import { LANDING_PAGES } from './content/landingPages'
import { GUIDES } from './content/guides'
import { BLOG_POSTS } from './content/blogPosts'
import { JOURNAL_POSTS } from './content/journalPosts'
import { BAR_SERVICES, BAR_RESOURCES } from './bar-services'
import { RKS_GUIDES, RKS_HUB_PATH, RKS_SERVICES } from './restaurant-kitchen-solutions'
import { PAGE_META, PAGE_META_BY_PATH } from './page-meta'
import { REDIRECT_MAP } from './redirects'

// Re-export the (content-free) metadata arrays so existing importers of
// `@/data/sitemap` keep working. Article bodies live in ./content/articleContent.
export { LANDING_PAGES, GUIDES, BLOG_POSTS }

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
  { slug: 'uluwatu', name: 'Uluwatu' },
  { slug: 'ubud', name: 'Ubud' },
  { slug: 'nusa-dua', name: 'Nusa Dua' },
  { slug: 'jimbaran', name: 'Jimbaran' },
  { slug: 'sanur', name: 'Sanur' },
  { slug: 'berawa', name: 'Berawa' },
  { slug: 'pererenan', name: 'Pererenan' },
  { slug: 'bukit', name: 'Bukit Peninsula' },
  { slug: 'kuta', name: 'Kuta' },
  { slug: 'legian', name: 'Legian' },
  { slug: 'kerobokan', name: 'Kerobokan' },
  { slug: 'petitenget', name: 'Petitenget' },
  { slug: 'tanah-lot', name: 'Tanah Lot' },
  { slug: 'tabanan', name: 'Tabanan' },
  { slug: 'denpasar', name: 'Denpasar' },
  { slug: 'gianyar', name: 'Gianyar' },
  { slug: 'tegallalang', name: 'Tegallalang' },
  { slug: 'amed', name: 'Amed' },
  { slug: 'lovina', name: 'Lovina' },
  { slug: 'candidasa', name: 'Candidasa' },
  { slug: 'padang-bai', name: 'Padang Bai' },
  { slug: 'ungasan', name: 'Ungasan' },
  { slug: 'pecatu', name: 'Pecatu' },
]

export const MICRO_AREAS: { slug: string; name: string }[] = [
  { slug: 'echo-beach-private-chef', name: 'Echo Beach' },
  { slug: 'batu-bolong-private-chef', name: 'Batu Bolong' },
  { slug: 'bingin-private-chef', name: 'Bingin' },
  { slug: 'balangan-private-chef', name: 'Balangan' },
]


export function buildSitemap(): SitemapEntry[] {
  const home: SitemapEntry = {
    path: PAGE_META.home.path,
    type: 'home',
    title: PAGE_META.home.title,
    description: PAGE_META.home.description,
    priority: 1.0,
    changefreq: 'weekly',
  }

  // const areas: SitemapEntry[] = AREAS.map((a) => ({
  //   path: `/${a.slug}`,
  //   type: 'area',
  //   title: `Private Chef in ${a.name}, Bali`,
  //   description: `Private chef services in ${a.name}, Bali. Custom menus, transparent pricing, and professional service.`,
  //   priority: 0.8,
  //   changefreq: 'weekly',
  //   area: a.name,
  //   slug: a.slug,
  // }))

  // Only the slugs with a real /locations/<slug> page belong in the sitemap.
  // The rest are redirect sources (e.g. /locations/berawa → /locations/canggu);
  // prerendering them creates duplicate/conflicting HTML and "not in sitemap" noise.
  const locationPages: SitemapEntry[] = Object.values(LOCATIONS)
    .filter((l) => LOCATION_PAGE_SLUGS.has(l.slug))
    .map((l) => ({
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
    date: l.date,
  }))

  const guides: SitemapEntry[] = GUIDES.map((g) => ({
    path: `/${g.slug}`,
    type: 'guide',
    title: g.title,
    description: g.description,
    priority: 0.8,
    changefreq: 'monthly',
    slug: g.slug,
    date: g.date,
  }))

  const blogPosts: SitemapEntry[] = BLOG_POSTS.map((b) => ({
    path: `/${b.slug}`,
    type: 'blog-post',
    title: b.title,
    description: b.description,
    priority: 0.8,
    changefreq: 'monthly',
    slug: b.slug,
    date: b.date,
  }))

  // Journal posts (newer content format)
  const journalPosts: SitemapEntry[] = JOURNAL_POSTS.map((p) => ({
    path: `/journal/${p.slug}`,
    type: 'blog-post',
    title: p.title,
    description: p.excerpt,
    priority: 0.8,
    changefreq: 'monthly',
    date: p.date,
  }))

  const pillarSubPages: SitemapEntry[] = Object.values(PILLARS).flatMap((p) =>
    p.subPages.map((s) => ({
      path: `${p.url}/${s.slug}`,
      type: 'service',
      title: s.title,
      description: s.description,
      priority: 0.9,
      changefreq: 'weekly' as const,
      slug: s.slug,
    }))
  )


  // Restaurant & Kitchen Solutions (B2B)
  const rksPages: SitemapEntry[] = [
    {
      path: RKS_HUB_PATH,
      type: 'info',
      title: PAGE_META['rks-hub'].title,
      description: PAGE_META['rks-hub'].description,
      priority: 0.9,
      changefreq: 'weekly',
    },
    ...RKS_SERVICES.map((s) => ({
      path: s.path,
      type: 'service' as const,
      title: s.title,
      description: s.description,
      priority: 0.85,
      changefreq: 'monthly' as const,
    })),
    ...RKS_GUIDES.map((g) => ({
      path: g.path,
      type: 'info' as const,
      title: g.title,
      description: g.description,
      priority: 0.7,
      changefreq: 'monthly' as const,
    })),
  ]

  // Bar Services pages
  const barServicesPages: SitemapEntry[] = [
    {
      path: '/bar-services/',
      type: 'info',
      title: PAGE_META['bar-services-hub'].title,
      description: PAGE_META['bar-services-hub'].description,
      priority: 0.9,
      changefreq: 'weekly',
    },
    {
      path: '/bar-services/faq/',
      type: 'info',
      title: PAGE_META['bar-services-faq'].title,
      description: PAGE_META['bar-services-faq'].description,
      priority: 0.7,
      changefreq: 'monthly',
    },
    {
      path: '/bar-services/contact/',
      type: 'info',
      title: PAGE_META['bar-services-contact'].title,
      description: PAGE_META['bar-services-contact'].description,
      priority: 0.6,
      changefreq: 'monthly',
    },
    {
      path: '/bar-services/resources/',
      type: 'info',
      title: PAGE_META['bar-services-resources'].title,
      description: PAGE_META['bar-services-resources'].description,
      priority: 0.8,
      changefreq: 'weekly',
    },
    // Experience pages
    {
      path: PAGE_META.experiences.path,
      type: 'info',
      title: PAGE_META.experiences.title,
      description: PAGE_META.experiences.description,
      priority: 0.9,
      changefreq: 'weekly',
    },
    {
      path: PAGE_META['experience-private-cocktail-party'].path,
      type: 'service',
      title: PAGE_META['experience-private-cocktail-party'].title,
      description: PAGE_META['experience-private-cocktail-party'].description,
      priority: 0.8,
      changefreq: 'monthly',
    },
    {
      path: PAGE_META['experience-sushi-masterclass'].path,
      type: 'service',
      title: PAGE_META['experience-sushi-masterclass'].title,
      description: PAGE_META['experience-sushi-masterclass'].description,
      priority: 0.8,
      changefreq: 'monthly',
    },
    {
      path: PAGE_META['experience-cooking-class'].path,
      type: 'service',
      title: PAGE_META['experience-cooking-class'].title,
      description: PAGE_META['experience-cooking-class'].description,
      priority: 0.85,
      changefreq: 'monthly',
    },
    {
      path: PAGE_META['experience-kids-birthday-chef-party'].path,
      type: 'service',
      title: PAGE_META['experience-kids-birthday-chef-party'].title,
      description: PAGE_META['experience-kids-birthday-chef-party'].description,
      priority: 0.8,
      changefreq: 'monthly',
    },
    {
      path: PAGE_META['experience-champagne-oyster-experience'].path,
      type: 'service',
      title: PAGE_META['experience-champagne-oyster-experience'].title,
      description: PAGE_META['experience-champagne-oyster-experience'].description,
      priority: 0.8,
      changefreq: 'monthly',
    },
    {
      path: PAGE_META['experience-romantic-proposal-dinner'].path,
      type: 'service',
      title: PAGE_META['experience-romantic-proposal-dinner'].title,
      description: PAGE_META['experience-romantic-proposal-dinner'].description,
      priority: 0.8,
      changefreq: 'monthly',
    },
    ...BAR_SERVICES.map((s) => ({
      path: s.route,
      type: 'service' as const,
      title: PAGE_META[s.metaKey].title,
      description: PAGE_META[s.metaKey].description,
      priority: 0.8,
      changefreq: 'monthly' as const,
      slug: s.slug,
    })),
    ...BAR_RESOURCES.map((r) => ({
      path: r.route,
      type: 'guide' as const,
      title: PAGE_META[r.metaKey].title,
      description: PAGE_META[r.metaKey].description,
      priority: 0.8,
      changefreq: 'monthly' as const,
      slug: r.slug,
    })),
  ]

  // Supporting info pages — title/description sourced from PAGE_META (single source of truth)
  const metaInfo = (key: keyof typeof PAGE_META, type: SitemapEntry['type'], priority: number, changefreq: SitemapEntry['changefreq'], date?: string): SitemapEntry => {
    const m = PAGE_META[key]
    return { path: m.path, type, title: m.title, description: m.description, priority, changefreq, ...(date ? { date } : {}) }
  }

  const infoPages: SitemapEntry[] = [
    metaInfo('fine-dining', 'info', 0.9, 'weekly'),
    metaInfo('catering', 'info', 0.9, 'weekly'),
    metaInfo('events', 'info', 0.9, 'weekly'),
    metaInfo('in-villa-service', 'info', 0.8, 'monthly'),
    metaInfo('villa-event-packages', 'info', 0.8, 'monthly'),
    metaInfo('vip-transport-bali', 'info', 0.8, 'monthly'),
    metaInfo('complete-villa-experience', 'info', 0.8, 'monthly'),
    metaInfo('services', 'info', 0.9, 'weekly'),
    metaInfo('three-course', 'info', 0.8, 'weekly'),
    metaInfo('kids-menus', 'info', 0.8, 'weekly'),
    metaInfo('bbq-grill', 'info', 0.8, 'weekly'),
    metaInfo('dining-styles', 'info', 0.8, 'weekly'),
    metaInfo('family-styling', 'info', 0.8, 'weekly'),
    metaInfo('faq', 'info', 0.7, 'monthly'),
    metaInfo('why-mychef', 'info', 0.7, 'monthly'),
    metaInfo('reviews', 'info', 0.7, 'monthly'),
    metaInfo('help', 'info', 0.6, 'monthly'),
    metaInfo('private-chef-bali', 'service', 0.95, 'weekly'),
    metaInfo('recommended-services', 'info', 0.6, 'monthly'),
    metaInfo('help-getting-started', 'guide', 0.6, 'monthly'),
    metaInfo('help-pricing', 'guide', 0.6, 'monthly'),
    metaInfo('help-menu-guide', 'guide', 0.6, 'monthly'),
    metaInfo('help-wedding-guide', 'guide', 0.6, 'monthly'),
    metaInfo('help-corporate-guide', 'guide', 0.6, 'monthly'),
    metaInfo('help-staffing-guide', 'guide', 0.6, 'monthly'),
    metaInfo('help-managing-booking', 'guide', 0.6, 'monthly'),
    metaInfo('locations', 'info', 0.8, 'monthly'),
    metaInfo('chefs', 'info', 0.8, 'monthly'),
    metaInfo('chefs-adriano', 'info', 0.7, 'monthly'),
    metaInfo('chefs-made-surya', 'info', 0.7, 'monthly'),
    metaInfo('chefs-bayu-pranata', 'info', 0.7, 'monthly'),
    metaInfo('chefs-ni-putu-asri', 'info', 0.7, 'monthly'),
    metaInfo('chefs-wayan-suarjana', 'info', 0.7, 'monthly'),
    metaInfo('chefs-ketut-mahardika', 'info', 0.7, 'monthly'),
    metaInfo('chefs-sari-dewi-kusuma', 'info', 0.7, 'monthly'),
    metaInfo('chefs-komang-artha', 'info', 0.7, 'monthly'),
    metaInfo('corporate-case-studies', 'info', 0.7, 'monthly'),
    metaInfo('journal', 'blog-index', 0.8, 'weekly'),
    metaInfo('pricing', 'info', 0.8, 'monthly'),
    metaInfo('staffing', 'info', 0.8, 'monthly'),
    metaInfo('contact', 'info', 0.5, 'monthly'),
    metaInfo('certified-partner', 'info', 0.5, 'monthly'),
    // B2B villa-manager referral programme. Distinct audience from /staffing/for-villa-managers
    // (that page sells staffing; this one sells a commission partnership). Added 2026-08-05 —
    // the page was live, indexable and internally linked but had no sitemap entry.
    metaInfo('partner', 'service', 0.7, 'monthly'),
    metaInfo('press', 'info', 0.3, 'monthly'),
    metaInfo('privacy', 'legal', 0.3, 'yearly'),
    metaInfo('terms', 'legal', 0.3, 'yearly'),
    metaInfo('cancellation', 'legal', 0.3, 'yearly'),
    metaInfo('blog-drop-off-catering-bali', 'blog-post', 0.8, 'monthly', '2026-06-30'),
    metaInfo('blog-hostess-hire-bali', 'blog-post', 0.8, 'monthly', '2026-06-30'),
    metaInfo('blog-chef-for-photoshoot-bali', 'blog-post', 0.8, 'monthly', '2026-06-30'),
    metaInfo('blog-tasting-menu-bali', 'blog-post', 0.8, 'monthly', '2026-06-30'),
    metaInfo('blog-luxury-dining-bali', 'blog-post', 0.8, 'monthly', '2026-06-30'),
    metaInfo('blog-fine-dining-at-home-bali', 'blog-post', 0.8, 'monthly', '2026-06-30'),
    metaInfo('blog-holiday-chef-bali', 'blog-post', 0.8, 'monthly', '2026-06-30'),
    metaInfo('blog-dietary-specific-chef-bali', 'blog-post', 0.8, 'monthly', '2026-06-30'),
    metaInfo('blog-hotel-restaurant-chef-staffing', 'blog-post', 0.8, 'monthly', '2026-06-30'),
    metaInfo('blog-indonesian-street-food-private-chef-bali', 'blog-post', 0.8, 'monthly', '2026-06-30'),
    // Added 2026-08-05 (SEO audit). These eight routes were live, indexable and internally
    // linked but had never been submitted — no sitemap entry and no PAGE_META entry.
    // scripts/verify-all.ts now fails the build if a static route ends up in this state again.
    metaInfo('blog-bachelor-party-bali-private-chef', 'blog-post', 0.7, 'monthly'),
    metaInfo('blog-corporate-catering-bali-case-studies', 'blog-post', 0.7, 'monthly'),
    metaInfo('blog-dry-season-menu-bali', 'blog-post', 0.7, 'monthly'),
    metaInfo('blog-festive-season-menu-bali', 'blog-post', 0.7, 'monthly'),
    metaInfo('blog-private-chef-seminyak-canggu-ubud-comparison', 'blog-post', 0.7, 'monthly'),
    metaInfo('blog-private-dinner-party-bali', 'blog-post', 0.7, 'monthly'),
    metaInfo('blog-wet-season-menu-bali', 'blog-post', 0.7, 'monthly'),
    // Wave 5 (2026-08): support guide kept live (no 301). Commercial owner remains /experiences/cooking-class.
    metaInfo('blog-bali-villa-cooking-class-private-chef', 'blog-post', 0.7, 'monthly', '2026-08-07'),
    // NOT /pricing-calculator — deliberately excluded, see below.
    //
    // Adding it here on 2026-08-05 broke the deploy (Actions runs #221 and #222 both
    // failed at `vercel build`). Putting a path in SITEMAP makes prerender emit static
    // HTML for it, which brings it inside the scan window of scripts/check-price-floor.ts.
    // PricingCalculatorPage renders `IDR {formatIDR(service.basePricePerPerson)}/person`
    // for villa catering (400,000), floating breakfast (450,000), corporate (480,000) and
    // wedding (550,000) — all under the 700,000 per-person floor that script enforces, so
    // postbuild exits 1 and nothing deploys.
    //
    // This is a real price contradiction, not a tooling quirk: the calculator advertises
    // per-guest rates below the floor published everywhere else. Whitelisting the page
    // would ship that contradiction into the index. Resolve the prices with management
    // first, then either re-add this line or add the path to FLOOR_EXCEPTION_PATHS.
    // Pages without PAGE_META entry (keep explicit)
    { path: '/calculator', type: 'info', title: 'Pricing Calculator | Private Chef Bali | myCHEF.id', description: 'Estimate your private chef, catering, or event costs instantly. Transparent IDR pricing, no hidden fees.', priority: 0.6, changefreq: 'monthly' },
    { path: '/join-our-team', type: 'info', title: 'Chef Jobs Bali | Join the myCHEF Team — Apply via WhatsApp', description: 'Chef jobs in Bali with myCHEF. Roles for chefs, bartenders, waiters and coordinators. Join a team trusted by 560+ events served. Apply via WhatsApp.', priority: 0.5, changefreq: 'monthly' },
  ]

  // /private-chef/[slug] — Bali Domination Blueprint area landing pages
  const privateChefAreaPages: SitemapEntry[] = PRIVATE_CHEF_AREAS.filter((a) => a.published).map(
    (a) => ({
      path: `/private-chef/${a.slug}`,
      type: 'area' as const,
      title: a.metaTitle,
      description: a.metaDescription,
      priority: 0.9,
      changefreq: 'weekly' as const,
      area: a.name,
      slug: a.slug,
    })
  )

  const entries = [
    home,
    // ...areas,  // Fjernet: disse redirecter til /locations/*
    ...locationPages,
    ...privateChefAreaPages,
    ...landing,
    ...guides,
    ...blogPosts,
    ...journalPosts,
    ...pillarSubPages,
    ...rksPages,
    ...barServicesPages,
    ...infoPages,
  ]

  // Safety net: never index redirect sources. A path that has a 301 rule should
  // not appear in the sitemap, inject-meta, or prerender output.
  const liveEntries = entries.filter((entry) => !REDIRECT_MAP[entry.path])

  // Metadata-map override: every route with a matching PAGE_META entry uses the
  // SEO-optimized title/description from the canonical source of truth.
  return liveEntries.map((entry) => {
    const mapped = PAGE_META_BY_PATH[entry.path]
    if (!mapped) return entry
    return {
      ...entry,
      title: mapped.title,
      description: mapped.description,
    }
  })
}

export const SERVICES = Object.values(PILLARS).map((pillar) => ({
  slug: pillar.slug,
  name: pillar.label,
  description: pillar.description,
}))

export const SITEMAP = buildSitemap()
