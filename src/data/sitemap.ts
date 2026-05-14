// Single source of truth for all indexable URLs on mychef.id.
// Mirrors the production sitemap.xml exactly so that organic traffic is preserved.
// Each entry drives:
//   1) the React Router route
//   2) the per-page SEO meta + JSON-LD
//   3) the public/sitemap.xml output
// When adding a new page, add it here first.

import { PILLARS, LOCATIONS, JOURNAL_POSTS } from './siteArchitecture'

export type PageType =
  | 'home'
  | 'area'           // city/neighbourhood landing pages: /seminyak, /canggu...
  | 'micro-area'    // narrower neighbourhood pages: /echo-beach-private-chef...
  | 'service'        // /services/* — what we offer
  | 'menu'           // /menus + /menus/*
  | 'landing'        // SEO keyword landing pages: /best-private-chef-indonesia...
  | 'guide'          // /guide/*
  | 'blog-index'
  | 'blog-post'
  | 'info'           // /about, /chefs, /faq, /why-mychef, /reviews, /pricing...
  | 'legal'
  | 'tool'           // /quote, /calculator

export interface SitemapEntry {
  path: string
  type: PageType
  /** H1 + browser title base */
  title: string
  /** meta description */
  description: string
  /** sitemap.xml priority 0–1 */
  priority: number
  /** sitemap.xml changefreq */
  changefreq: 'weekly' | 'monthly' | 'yearly'
  /** For area / micro-area pages — the human area name (used in H1, copy, schema) */
  area?: string
  /** For services + menus — short slug-friendly key */
  slug?: string
  /** Optional alias paths that should also resolve to this page (redirects in code) */
  aliases?: string[]
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
  { slug: 'sayan-private-chef', name: 'Sayan' },
  { slug: 'padang-padang-private-chef', name: 'Padang Padang' },
  { slug: 'pererenan-private-chef', name: 'Pererenan Beach' },
  { slug: 'sanur-beach-private-chef', name: 'Sanur Beach' },
  { slug: 'penestanan-private-chef', name: 'Penestanan' },
]

export const SERVICES: { slug: string; name: string; description: string }[] = [
  { slug: 'villa-parties', name: 'Villa Parties', description: 'Full-service villa parties with private chef, bar, and event coordination.' },
  { slug: 'romantic-dinners', name: 'Romantic Dinners', description: 'Candlelit private chef dinners for two — perfect for anniversaries, proposals, and honeymoons.' },
  { slug: 'birthday-celebrations', name: 'Birthday Celebrations', description: 'Private chef birthday dinners and parties from intimate gatherings to 50-guest celebrations.' },
  { slug: 'family-reunions', name: 'Family Reunions', description: 'Multi-day private chef services for family reunions and multi-generational villa stays.' },
  { slug: 'corporate-events', name: 'Corporate Events', description: 'Executive dinners, team retreats, and corporate hospitality with full-service catering.' },
  { slug: 'wedding-celebrations', name: 'Wedding Celebrations', description: 'Wedding catering for intimate ceremonies to 200-guest receptions across Bali.' },
  { slug: 'cooking-classes', name: 'Cooking Classes', description: 'Hands-on private cooking classes in your villa kitchen with one of our chefs.' },
  { slug: 'weekly-meal-prep', name: 'Weekly Meal Prep', description: 'Regular chef visits for weekly meal preparation and stocking your villa kitchen.' },
]

export const MENUS: { slug: string; name: string; description: string }[] = [
  { slug: 'mediterranean', name: 'Mediterranean Menu', description: 'Italian and Mediterranean menus — fresh seafood, handmade pasta, olive oil, basil, and seasonal produce.' },
  { slug: 'balinese', name: 'Balinese Menu', description: 'Traditional Balinese menus — nasi campur, sate lilit, bebek betutu, and modern interpretations of island classics.' },
  { slug: 'asian-fusion', name: 'Asian Fusion Menu', description: 'Modern Asian fusion menus drawing from Japanese, Thai, Vietnamese, and Indonesian cuisine.' },
  { slug: 'vegan', name: 'Vegan Menu', description: 'Fully plant-based menus using local Balinese produce, tropical fruits, and creative substitutions.' },
  { slug: 'modern-european', name: 'Modern European Menu', description: 'Contemporary European tasting menus with French, Italian, and Nordic influences.' },
  { slug: 'halal', name: 'Halal Menu', description: 'Certified halal menus prepared with care for Muslim guests visiting Bali.' },
]

export const LANDING_PAGES: { slug: string; title: string; description: string }[] = [
  { slug: 'best-private-chef-indonesia', title: 'Best Private Chef in Indonesia', description: 'Top-rated private chefs across Indonesia — Bali, Jakarta, and beyond. Background-checked, fluent in international cuisine.' },
  { slug: 'private-chef-for-events', title: 'Private Chef for Events', description: 'Hire a private chef for weddings, corporate events, birthdays, and milestone celebrations across Indonesia.' },
  { slug: 'luxury-chef-indonesia', title: 'Luxury Private Chef in Indonesia', description: 'Michelin-trained luxury private chefs for villa dining, yacht charters, and high-net-worth hospitality in Indonesia.' },
  { slug: 'wedding-catering-indonesia', title: 'Wedding Catering in Indonesia', description: 'Full-service wedding catering across Bali and Jakarta — from intimate ceremonies to grand receptions.' },
  { slug: 'private-dining-indonesia', title: 'Private Dining in Indonesia', description: 'Curated private dining experiences in your villa, hotel suite, or private residence anywhere in Indonesia.' },
  { slug: 'healthy-meal-delivery-indonesia', title: 'Healthy Meal Delivery in Indonesia', description: 'Private chef meal prep and healthy meal services — keto, paleo, vegan, and macro-balanced menus.' },
  { slug: 'private-chef-booking-indonesia', title: 'Private Chef Booking in Indonesia', description: 'Book a vetted private chef in minutes. Transparent pricing, dietary customization, and same-day responses.' },
  { slug: 'chef-for-hire-indonesia', title: 'Chef for Hire in Indonesia', description: 'Hire a professional chef by the hour, day, or trip. Single events, recurring visits, and long-term arrangements.' },
  { slug: 'proposal-dinner', title: 'Proposal Dinner Private Chef in Bali', description: 'Plan the perfect proposal dinner — candlelit beachfront menus, ring boxes, and discreet service.' },
  { slug: 'honeymoon-chef', title: 'Honeymoon Private Chef in Bali', description: 'Honeymoon villa chef packages — breakfast in bed, sunset dinners, and curated romantic menus.' },
  { slug: 'private-chef-breakfast-bali', title: 'Private Chef Breakfast in Bali', description: 'Wake up to a chef-prepared breakfast in your Bali villa — tropical fruits, fresh pastries, eggs any style.' },
  { slug: 'private-chef-cost-per-day-bali', title: 'Private Chef Cost Per Day in Bali', description: 'What does a private chef cost per day in Bali? Transparent daily rates, hourly breakdowns, and grocery pass-through.' },
  { slug: 'private-chef-cost-bali', title: 'Private Chef Cost in Bali', description: 'Detailed cost breakdown for hiring a private chef in Bali — chef fee, groceries, service charges, and tax.' },
  { slug: 'private-chef-menteng', title: 'Private Chef in Menteng, Jakarta', description: 'Private chef services in Menteng, Central Jakarta — for residences, expats, and corporate hospitality.' },
]

export const GUIDES: { slug: string; title: string; description: string }[] = [
  { slug: 'guide/bali-cuisine-glossary', title: 'Bali Cuisine Glossary', description: 'A complete glossary of Balinese cuisine — ingredients, dishes, cooking techniques, and regional specialties.' },
  { slug: 'guide/private-chef-bali', title: 'Private Chef in Bali — Complete Guide', description: 'Everything you need to know about hiring a private chef in Bali — costs, what to expect, how to choose.' },
]

export const BLOG_POSTS: { slug: string; title: string; description: string }[] = [
  { slug: 'blog/private-chef-bali-cost-breakdown-2026', title: 'Private Chef Bali — Cost Breakdown 2026', description: 'Full 2026 cost breakdown for hiring a private chef in Bali — chef fees, groceries, service charges, and tipping.' },
  { slug: 'blog/best-bali-villas-private-chef-kitchen', title: 'Best Bali Villas with a Private Chef Kitchen', description: 'Our pick of the best Bali villas with chef-friendly kitchens — gas hobs, professional ranges, prep space, and storage.' },
  { slug: 'blog/wedding-rehearsal-dinner-bali', title: 'Wedding Rehearsal Dinner in Bali — Planning Guide', description: 'How to plan a wedding rehearsal dinner in Bali — venue tips, menu ideas, and timeline templates.' },
  { slug: 'blog/yoga-retreat-chef-bali-meal-planning', title: 'Yoga Retreat Chef in Bali — Meal Planning', description: 'Meal planning for yoga retreats in Bali — plant-based menus, ayurvedic principles, and post-asana nutrition.' },
  { slug: 'blog/private-chef-vs-restaurant-bali', title: 'Private Chef vs Restaurant in Bali — Which Is Better?', description: 'A side-by-side comparison of hiring a private chef versus dining at a restaurant in Bali — cost, experience, and convenience.' },
]

// --- Info / utility pages ----------------------------------------------------

export const INFO_PAGES: SitemapEntry[] = [
  // Primary brand pages — these are the keyword targets and must be in the sitemap as canonicals.
  { path: '/fine-dining', type: 'info', title: 'Fine Dining Bali | Private Chef Villa Tasting Menus by myCHEF', description: 'Private chef fine dining in your Bali villa — Italian and Mediterranean tasting menus, open-flame cooking, sommelier pairing. From IDR 2,200,000++ per guest.', priority: 0.95, changefreq: 'weekly' },
  { path: '/villa-chef', type: 'info', title: 'Bali Villa Catering | Private Chef in Your Villa — Daily Dining', description: 'Bali villa catering with a private chef in your kitchen — daily breakfast, lunch, and dinner for the length of your stay. Groceries at cost. From IDR 600,000 per hour.', priority: 0.95, changefreq: 'weekly', aliases: ['/catering'] },
  { path: '/events', type: 'info', title: 'Bali Party and Event Catering | Weddings, Villas & Corporate | myCHEF', description: 'Bali party and event catering by myCHEF — luxury villa parties, weddings, corporate dinners, retreats, and gala nights. Catering, bar, décor, and staffing handled.', priority: 0.95, changefreq: 'weekly' },
  { path: '/partners', type: 'info', title: 'Villa Partner Programme | myCHEF for Bali Hospitality', description: 'Trusted by 50+ luxury villas across Bali. Certified chef placement, insurance, dedicated account management. Join the myCHEF villa partner programme.', priority: 0.8, changefreq: 'monthly', aliases: ['/villa-partners'] },
  { path: '/services', type: 'info', title: 'Private Chef Services in Bali | Villa, Weddings, Corporate | myCHEF', description: 'Eight ways myCHEF brings extraordinary food to your villa in Bali — villa parties, romantic dinners, birthdays, family reunions, corporate events, weddings, classes, and meal prep.', priority: 0.85, changefreq: 'monthly' },
  { path: '/contact', type: 'info', title: 'Contact myCHEF | Concierges by Service — Bali Private Chef', description: 'Speak directly with the right person — Sofia for fine dining, Daniel for villa catering, Olivia for events, Marco for partnerships and staffing.', priority: 0.75, changefreq: 'monthly' },

  // Supporting info pages
  { path: '/about', type: 'info', title: 'About myCHEF — Bali Private Chef Team', description: 'About myCHEF — our story, our team, and our mission to bring extraordinary food to villas across Bali and Indonesia.', priority: 0.7, changefreq: 'monthly' },
  { path: '/chefs', type: 'info', title: 'Our Chefs | myCHEF Bali Private Chef Team', description: 'Meet our team of professional private chefs in Bali — backgrounds, specialties, and what they cook best.', priority: 0.7, changefreq: 'monthly' },
  { path: '/faq', type: 'info', title: 'FAQ | Private Chef Bali — Bookings, Pricing & Dietary', description: 'Answers to common questions about private chef services in Bali — bookings, pricing, dietary needs, and logistics.', priority: 0.7, changefreq: 'monthly' },
  { path: '/why-mychef', type: 'info', title: 'Why Choose myCHEF | Bali Private Chef You Can Trust', description: 'Why myCHEF is the most-trusted private chef service in Bali — vetted chefs, transparent pricing, and same-day response.', priority: 0.7, changefreq: 'monthly' },
  { path: '/reviews', type: 'info', title: 'Reviews | myCHEF Bali Private Chef Guests', description: 'Real reviews from real guests — read what families, couples, and event hosts say about myCHEF villa dining and catering in Bali.', priority: 0.7, changefreq: 'monthly' },
  { path: '/pricing', type: 'info', title: 'Pricing | Private Chef Bali, Villa Catering & Events', description: 'Transparent pricing for private chef services in Bali — hourly rates, menu pricing, fine dining, and full event packages.', priority: 0.8, changefreq: 'monthly' },
  { path: '/jakarta', type: 'area', title: 'Private Chef in Jakarta — Residences & Corporate Hospitality', description: 'Private chef services in Jakarta for residences, expat households, and corporate hospitality — Menteng, Kemang, SCBD, Pondok Indah.', priority: 0.75, changefreq: 'weekly', area: 'Jakarta' },
  { path: '/retreats', type: 'info', title: 'Retreat Catering in Bali | Yoga, Wellness & Corporate Offsites', description: 'Multi-day retreat catering across Bali for yoga retreats, wellness retreats, and corporate offsites — full-board menus and on-site coordination.', priority: 0.7, changefreq: 'monthly' },
  { path: '/recommended-services', type: 'info', title: 'Recommended Services in Bali | DJs, Decor & Photography', description: 'Our trusted partners for DJs, decor, photography, transport, and other event services in Bali.', priority: 0.4, changefreq: 'monthly' },
  { path: '/join-our-team', type: 'info', title: 'Join Our Team | myCHEF Bali Chef & Hospitality Roles', description: 'Open chef and hospitality roles at myCHEF — apply to join our growing team in Bali and Jakarta.', priority: 0.3, changefreq: 'monthly' },
  { path: '/quote', type: 'tool', title: 'Get a Custom Quote | Private Chef Bali by myCHEF', description: 'Tell us about your event and receive a personalized private chef quote — villa dining, party, corporate, or wedding — within 24 hours.', priority: 0.9, changefreq: 'monthly' },
  { path: '/staffing', type: 'info', title: 'Private Chef Staffing in Bali | Full-Time, Part-Time, Live-In', description: 'Full-time, part-time, live-in, retreat, and temporary cover private chef staffing for villas, families, and retreats in Bali.', priority: 0.85, changefreq: 'monthly' },
  { path: '/partner-platform', type: 'info', title: 'Partner Platform | myCHEF — Bali Villa Operator Dining', description: 'A villa dining partner platform for luxury villas, villa management companies, boutique hospitality brands, and premium operators across Bali. Co-branded or white-label.', priority: 0.85, changefreq: 'monthly' },
  { path: '/corporate-events', type: 'info', title: 'Corporate Events Bali | Luxury Corporate Catering & Event Dining', description: 'Premium corporate events in Bali with luxury catering, cocktails, staffing, chefs, and full event support for conferences, executive dinners, gala events, and company celebrations.', priority: 0.9, changefreq: 'monthly' },
  { path: '/calculator', type: 'tool', title: 'Private Chef Bali Pricing Calculator | myCHEF', description: 'Estimate the cost of a private chef in Bali — guests, meals, cuisine, and add-ons — in under a minute.', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog', type: 'blog-index', title: 'Bali Hosting & Private Chef Guides | myCHEF Blog', description: 'Guides, cost breakdowns, and culinary insights for hosting in Bali — private chef cost, villa kitchens, retreats, and rehearsal dinners.', priority: 0.75, changefreq: 'monthly' },
]

export const LEGAL_PAGES: SitemapEntry[] = [
  { path: '/privacy-policy', type: 'legal', title: 'Privacy Policy', description: 'How myCHEF collects, stores, and protects your personal information.', priority: 0.2, changefreq: 'monthly', aliases: ['/privacy'] },
  { path: '/terms-of-service', type: 'legal', title: 'Terms of Service', description: 'The terms that govern your use of myCHEF services.', priority: 0.2, changefreq: 'monthly', aliases: ['/terms'] },
  { path: '/payment-terms', type: 'legal', title: 'Payment Terms', description: 'Deposit, balance, refund, and cancellation policy for myCHEF bookings.', priority: 0.2, changefreq: 'monthly', aliases: ['/cancellation'] },
]

// Build the full flat sitemap from the structured arrays above.
export function buildSitemap(): SitemapEntry[] {
  const home: SitemapEntry = {
    path: '/',
    type: 'home',
    title: 'myCHEF.id — Private Chef & Event Experiences in Bali',
    description: 'Private chefs, villa catering, and full-service events in Bali. Italian fine dining and Michelin-trained leadership across Seminyak, Canggu, Ubud, Uluwatu, and Sanur.',
    priority: 1.0,
    changefreq: 'weekly',
  }

  const areas: SitemapEntry[] = AREAS.map((a) => ({
    path: `/${a.slug}`,
    type: 'area',
    title: `Private Chef in ${a.name}, Bali`,
    description: `Private chef services in ${a.name}, Bali. Custom menus, transparent pricing, same-day responses. Background-checked chefs.`,
    priority: 0.8,
    changefreq: 'weekly',
    area: a.name,
    slug: a.slug,
  }))

  const microAreas: SitemapEntry[] = MICRO_AREAS.map((m) => ({
    path: `/${m.slug}`,
    type: 'micro-area',
    title: `Private Chef in ${m.name}, Bali`,
    description: `Private chef in ${m.name}, Bali. Villa dinners, weekly meal prep, events. Trusted by 1000+ guests.`,
    priority: 0.8,
    changefreq: 'monthly',
    area: m.name,
    slug: m.slug,
  }))

  const services: SitemapEntry[] = SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    type: 'service',
    title: s.name,
    description: s.description,
    priority: 0.7,
    changefreq: 'monthly',
    slug: s.slug,
  }))

  const menus: SitemapEntry[] = [
    { path: '/menus', type: 'menu', title: 'All Sample Menus', description: 'Browse every cuisine we cook — Mediterranean, Balinese, Asian fusion, vegan, modern European, and halal.', priority: 0.8, changefreq: 'monthly' },
    ...MENUS.map<SitemapEntry>((m) => ({
      path: `/menus/${m.slug}`,
      type: 'menu',
      title: m.name,
      description: m.description,
      priority: 0.8,
      changefreq: 'monthly',
      slug: m.slug,
    })),
  ]

  const landing: SitemapEntry[] = LANDING_PAGES.map((l) => ({
    path: `/${l.slug}`,
    type: 'landing',
    title: l.title,
    description: l.description,
    priority: 0.7,
    changefreq: 'monthly',
    slug: l.slug,
  }))

  const guides: SitemapEntry[] = GUIDES.map((g) => ({
    path: `/${g.slug}`,
    type: 'guide',
    title: g.title,
    description: g.description,
    priority: 0.8,
    changefreq: 'monthly',
    slug: g.slug,
  }))

  const blogPosts: SitemapEntry[] = BLOG_POSTS.map((b) => ({
    path: `/${b.slug}`,
    type: 'blog-post',
    title: b.title,
    description: b.description,
    priority: 0.8,
    changefreq: 'monthly',
    slug: b.slug,
  }))

  // --- System-plan pages ----------------------------------------------------

  const pillarPages: SitemapEntry[] = Object.values(PILLARS).map((p) => ({
    path: p.url,
    type: 'info',
    title: p.title,
    description: p.description,
    priority: 0.95,
    changefreq: 'weekly',
  }))

  const pillarSubPages: SitemapEntry[] = Object.values(PILLARS).flatMap((p) =>
    p.subPages.map((s) => ({
      path: `${p.url}/${s.slug}`,
      type: 'info' as const,
      title: s.title,
      description: s.description,
      priority: 0.85,
      changefreq: 'monthly',
    }))
  )

  const locationHub: SitemapEntry = {
    path: '/locations',
    type: 'info',
    title: 'Private Chef Locations Bali | Seminyak, Canggu, Ubud, Uluwatu — myCHEF',
    description: 'Hire a private chef across Bali — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran and Sanur. Villa dining, catering and events in every region.',
    priority: 0.9,
    changefreq: 'weekly',
  }

  const locationPages: SitemapEntry[] = Object.values(LOCATIONS).map((l) => ({
    path: `/locations/${l.slug}`,
    type: 'area',
    title: l.title,
    description: l.description,
    priority: 0.85,
    changefreq: 'weekly',
    area: l.label,
    slug: l.slug,
  }))

  const journalIndex: SitemapEntry = {
    path: '/journal',
    type: 'blog-index',
    title: 'Journal | Bali Private Chef Guides, Menus & Hosting Tips — myCHEF',
    description: 'Guides, cost breakdowns, and culinary insights for hosting in Bali — private chef cost, villa kitchens, retreats, and rehearsal dinners.',
    priority: 0.8,
    changefreq: 'weekly',
  }

  const journalPosts: SitemapEntry[] = JOURNAL_POSTS.map((p) => ({
    path: `/journal/${p.slug}`,
    type: 'blog-post',
    title: p.title,
    description: p.description,
    priority: 0.75,
    changefreq: 'monthly',
    slug: p.slug,
  }))

  const bookPage: SitemapEntry = {
    path: '/book',
    type: 'info',
    title: 'Book | Private Chef, Catering & Events Bali — myCHEF',
    description: 'Book a private chef, catering, event or staffing in Bali. Same-day WhatsApp confirmation.',
    priority: 0.95,
    changefreq: 'weekly',
  }

  return [
    home,
    ...areas,
    ...microAreas,
    ...services,
    ...menus,
    ...landing,
    ...guides,
    ...blogPosts,
    ...pillarPages,
    ...pillarSubPages,
    locationHub,
    ...locationPages,
    journalIndex,
    ...journalPosts,
    bookPage,
    ...INFO_PAGES,
    ...LEGAL_PAGES,
  ]
}

export const SITEMAP = buildSitemap()
