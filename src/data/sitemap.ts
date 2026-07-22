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
import { PAGE_META } from './page-meta'
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
  { slug: 'jakarta', name: 'Jakarta' },
  { slug: 'menteng', name: 'Menteng' },
  { slug: 'kemang', name: 'Kemang' },
  { slug: 'scbd', name: 'SCBD' },
  { slug: 'pondok-indah', name: 'Pondok Indah' },
  { slug: 'bsd', name: 'BSD City' },
]

export const MICRO_AREAS: { slug: string; name: string }[] = [
  { slug: 'echo-beach-private-chef', name: 'Echo Beach' },
  { slug: 'batu-bolong-private-chef', name: 'Batu Bolong' },
  { slug: 'bingin-private-chef', name: 'Bingin' },
  { slug: 'balangan-private-chef', name: 'Balangan' },
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

  // Supporting info pages
  const infoPages: SitemapEntry[] = [
    // Pillar hub pages — must be here or inject-meta.ts skips them → 404
    { path: '/fine-dining', type: 'info', title: 'Private Fine Dining Bali — 24 Set Menus | myCHEF.id', description: '24 premium set menus for private villa dining in Bali. Vegetarian, seafood, mixed meats & single-meat. From IDR 1.25M per guest. Book your chef.', priority: 0.9, changefreq: 'weekly' },
    { path: '/catering', type: 'info', title: 'Villa Catering Bali | Private Chef Catering Service — myCHEF', description: 'Full-service catering for Bali villas. BBQ nights, buffets, drop-off feasts, and grazing tables for groups of 10 to 150.', priority: 0.9, changefreq: 'weekly' },
    { path: '/events', type: 'info', title: 'Bali Event Catering | Private Villa Celebrations — myCHEF', description: 'One team for your entire event. Weddings, birthdays, corporate retreats, and villa parties anywhere in Bali.', priority: 0.9, changefreq: 'weekly' },
    { path: '/in-villa-service', type: 'info', title: 'Hire Villa Staff Bali | Professional Waiters & Butlers — myCHEF', description: 'Uniformed, English-speaking staff for your villa. Waiters, butlers, bartenders, and coordinators available by the shift.', priority: 0.8, changefreq: 'monthly' },
    { path: '/villa-event-packages', type: 'info', title: 'Bali Villa Event Packages | All-Inclusive — myCHEF', description: 'All-inclusive villa experience in Bali: airport pickup, daily private chef, event planning, bar service, staffing & cleanup. Tailored quotes.', priority: 0.8, changefreq: 'monthly' },
    { path: '/vip-transport-bali', type: 'info', title: 'VIP Transport Bali | Luxury Cars & Yachts — myCHEF', description: 'VIP transport in Bali: luxury car hire, minibuses, yacht charters & event logistics with English-speaking drivers. Enquire via WhatsApp.', priority: 0.8, changefreq: 'monthly' },
    { path: '/complete-villa-experience', type: 'info', title: 'Complete Villa Experience Bali | End-to-End Hospitality — myCHEF', description: 'Full-service villa hospitality in Bali: airport transfers, daily private chef, events, staff, concierge & cleanup. One team from arrival to departure.', priority: 0.8, changefreq: 'monthly' },
    { path: '/services', type: 'info', title: 'Private Chef Services Bali | All-In Villa Experiences — myCHEF', description: 'Compare all private chef services in Bali: fine dining, catering, events, staffing & classes. Michelin-trained team. WhatsApp us to find the right fit.', priority: 0.9, changefreq: 'weekly' },
    // Menu family pages
    { path: '/three-course', type: 'info', title: 'Three-Course Villa Dining Bali — 8 Menus | myCHEF.id', description: 'Lighter 3-course villa dining in Bali. Starter, main, dessert. 8 menus from IDR 850K. Perfect for casual lunches.', priority: 0.8, changefreq: 'weekly' },
    { path: '/kids-menus', type: 'info', title: "Kids' Party Menus Bali — 6 Fun Options | myCHEF.id", description: "Fun, healthy kids' party menus in Bali. Pizza, pasta, burgers, seafood & Indonesian. From IDR 250K/child. Nut-free.", priority: 0.8, changefreq: 'weekly' },
    { path: '/bbq-grill', type: 'info', title: 'BBQ Grill Experience Bali — Live Grill Station | myCHEF.id', description: 'Premium BBQ grill experiences at your Bali villa. Live grill station, seafood, Wagyu, ribs. From IDR 950K.', priority: 0.8, changefreq: 'weekly' },
    { path: '/dining-styles', type: 'info', title: 'Dining Styles — Find Your Perfect Menu | myCHEF.id', description: 'Browse myCHEF.id menus by dining style. 50 menus across 6 collections. Find your perfect dining experience.', priority: 0.8, changefreq: 'weekly' },
    { path: '/family-styling', type: 'info', title: 'How We Style Each Dining Experience | myCHEF.id', description: "Discover how each myCHEF.id menu family is styled and served. From fine dining to BBQ grill to kids' parties.", priority: 0.8, changefreq: 'weekly' },
    // Conversion & utility pages — /quote and /book intentionally excluded (noindex tags)
    { path: '/faq', type: 'info', title: 'Private Chef Bali FAQ | Booking, Pricing & Menus — myCHEF', description: 'Answers to every private chef Bali question: pricing, menus, dietary needs, staffing, weddings & booking flow. Get clarity before you confirm your date.', priority: 0.7, changefreq: 'monthly' },
    { path: '/why-mychef', type: 'info', title: 'Best Private Chef Service Bali | Why myCHEF? — 560+ Villas', description: 'Why 560+ Bali villas trust myCHEF: Michelin-trained leadership, 50+ local staff, same-day confirmation & no-stress guarantee. See the full difference.', priority: 0.7, changefreq: 'monthly' },
    { path: '/reviews', type: 'info', title: 'myCHEF Bali Reviews | 4.9★ Private Chef & Catering', description: 'Read 4.9★ myCHEF Bali reviews from villa guests, weddings, retreats & events. Real hosts, real outcomes — see why 560+ villas keep coming back.', priority: 0.7, changefreq: 'monthly' },
    { path: '/calculator', type: 'info', title: 'Pricing Calculator | Private Chef Bali | myCHEF.id', description: 'Estimate your private chef, catering, or event costs instantly. Transparent IDR pricing, no hidden fees.', priority: 0.6, changefreq: 'monthly' },
    { path: '/help', type: 'info', title: 'Help Centre | Private Chef & Catering Bali — myCHEF', description: 'Answers to your questions about booking a private chef or catering service in Bali. Guides, pricing, and planning support.', priority: 0.6, changefreq: 'monthly' },
    // Internally-linked pages restored from direct-access 404 (prerendered 2026-06-23)
    { path: '/villa-chef', type: 'info', title: 'Private Chef Bali | Daily Villa Chef Service', description: 'Bali villa catering with a private chef for your stay. Daily breakfast, lunch, dinner. Groceries at cost. From IDR 600K/hour.', priority: 0.7, changefreq: 'monthly' },
    { path: '/recommended-services', type: 'info', title: 'Build Your Perfect Villa Experience | myCHEF Concierge Bali', description: "Tell myCHEF what you're hosting and get the right service fast. Match guest count, mood, and budget to the best villa dining format.", priority: 0.6, changefreq: 'monthly' },
    { path: '/join-our-team', type: 'info', title: 'Chef Jobs Bali | Join the myCHEF Team — Apply via WhatsApp', description: 'Chef jobs in Bali with myCHEF. Roles for chefs, bartenders, waiters & coordinators. Join a fast-moving team trusted by 560+ villas. Apply via WhatsApp.', priority: 0.5, changefreq: 'monthly' },
    { path: '/help/getting-started', type: 'guide', title: 'How to Book a Private Chef Bali | Getting Started — myCHEF', description: 'Step-by-step guide to booking your first private chef in Bali. What to send, how quotes work & what happens after you confirm with myCHEF.', priority: 0.6, changefreq: 'monthly' },
    { path: '/help/pricing', type: 'guide', title: 'Private Chef Bali Pricing Guide | What It Really Costs — myCHEF', description: 'Understand private chef Bali pricing: what each format includes, how guest count & menu style affect cost, and how to read your myCHEF quote.', priority: 0.6, changefreq: 'monthly' },
    { path: '/help/menu-guide', type: 'guide', title: 'Private Chef Menu Guide Bali | Cuisines & Dietary Options — myCHEF', description: 'Choose the right private chef menu for your Bali villa. Guidance on cuisines, dietary needs, course styles & how to shape a meal for your group.', priority: 0.6, changefreq: 'monthly' },
    { path: '/help/wedding-guide', type: 'guide', title: 'Wedding Catering Guide Bali | Plan Your Villa Wedding — myCHEF', description: 'Plan Bali wedding catering step by step: guest counts, service styles, tastings, staffing & multi-day villa celebrations. Everything you need to know.', priority: 0.6, changefreq: 'monthly' },
    { path: '/help/corporate-guide', type: 'guide', title: 'Corporate Catering Guide Bali | Offsites & Team Retreats — myCHEF', description: 'Plan corporate catering in Bali: menu options, staffing, timing & multi-day meal flow for teams and offsites. Everything your team needs, handled.', priority: 0.6, changefreq: 'monthly' },
    { path: '/help/staffing-guide', type: 'guide', title: 'Villa Staffing Guide Bali | Waiters, Butlers & More — myCHEF', description: 'Find the right villa staff in Bali for dinners, parties & extended stays. Waiters, bartenders, butlers & household staff explained clearly.', priority: 0.6, changefreq: 'monthly' },
    { path: '/help/managing-booking', type: 'guide', title: 'Manage Your Chef Booking Bali | After You Confirm — myCHEF', description: 'Everything that happens after booking your myCHEF private chef in Bali: menu sign-off, villa setup, chef arrival, changes & day-of coordination.', priority: 0.6, changefreq: 'monthly' },
    { path: '/locations', type: 'info', title: 'Private Chef Locations Bali | myCHEF', description: 'Hire a private chef across Bali — Seminyak, Canggu, Ubud, Uluwatu, and beyond.', priority: 0.8, changefreq: 'monthly' },
    { path: '/chefs', type: 'info', title: 'Our Chefs | Michelin-Trained Private Chefs Bali — myCHEF', description: 'Meet Adriano and the myCHEF culinary team — Michelin-trained leadership and villa-tested specialists in Bali.', priority: 0.8, changefreq: 'monthly' },
    { path: '/chefs/adriano', type: 'info', title: 'Adriano — Private Chef Bali | Michelin-Trained Founder | myCHEF', description: 'Book Adriano, Executive Chef & Founder of myCHEF Bali. Michelin-trained in Modena. Italian tasting menus, romantic dinners and VIP villa experiences.', priority: 0.7, changefreq: 'monthly' },
    { path: '/chefs/made-surya', type: 'info', title: 'I Made Surya — Mediterranean & Pasta Chef | myCHEF', description: 'Book I Made Surya for Mediterranean villa dinners and handmade pasta in Bali. Ubud-born, trained under Adriano. Perfect for 2–15 guests.', priority: 0.7, changefreq: 'monthly' },
    { path: '/chefs/bayu-pranata', type: 'info', title: 'Bayu Pranata — BBQ Grill Chef | Live-Fire Specialist | myCHEF', description: 'Book Bayu Pranata for poolside BBQ and grill events in Bali. Wagyu nights, large group celebrations (10–80+ guests). Jimbaran live-fire specialist.', priority: 0.7, changefreq: 'monthly' },
    { path: '/chefs/ni-putu-asri', type: 'info', title: 'Ni Putu Asri — Balinese Chef | Indonesian Feast Specialist | myCHEF', description: 'Book Ni Putu Asri for authentic Balinese and Indonesian feast menus. Gianyar-born, ceremonial cooking heritage, Asian fusion specialist.', priority: 0.7, changefreq: 'monthly' },
    { path: '/chefs/wayan-suarjana', type: 'info', title: 'Wayan Suarjana — Pastry Chef | Cakes & Desserts | myCHEF', description: 'Book Wayan Suarjana, myCHEF Head Pastry Chef in Bali. Custom cakes, plated desserts and chocolate tasting courses. Hotel-trained pastry specialist.', priority: 0.7, changefreq: 'monthly' },
    { path: '/chefs/ketut-mahardika', type: 'info', title: 'Ketut Mahardika — Seafood & Japanese Chef | Sashimi | myCHEF', description: 'Book Ketut Mahardika for Japanese seafood and sashimi in your Bali villa. Jimbaran-born, knife-trained, daily market sourcing. Omakase & feast menus.', priority: 0.7, changefreq: 'monthly' },
    { path: '/chefs/sari-dewi-kusuma', type: 'info', title: 'Sari Dewi Kusuma — Wellness Chef | Vegan Retreats | myCHEF', description: 'Book Sari Dewi Kusuma for wellness and retreat catering in Bali. Vegan, raw, Ayurvedic menus. Yoga retreat specialist. Detox and wellness dinners.', priority: 0.7, changefreq: 'monthly' },
    { path: '/chefs/komang-artha', type: 'info', title: 'Komang Artha — Event Chef | Villa Events & Weddings | myCHEF', description: 'Book Komang Artha for villa events, weddings and corporate catering in Bali. 15 years experience, groups 30–200+ guests. Indonesian feast and buffet specialist.', priority: 0.7, changefreq: 'monthly' },
    { path: '/corporate-case-studies', type: 'info', title: 'Corporate Catering Case Studies Bali | myCHEF', description: 'Real corporate event case studies in Bali — executive dinners, leadership offsites, retreats and conference catering. Outcomes, metrics and client results.', priority: 0.7, changefreq: 'monthly' },
    { path: '/journal', type: 'blog-index', title: 'Journal | Bali Private Chef Guides & Hosting Tips', description: 'Expert guides, cost breakdowns, and insider tips for hosting private chefs, villa dinners, weddings, and events in Bali.', priority: 0.8, changefreq: 'weekly' },
    { path: '/pricing', type: 'info', title: 'Pricing | Private Chef Bali, Villa Catering & Events', description: 'Transparent pricing for private chef, catering & event services in Bali. Hourly rates, menu pricing & full packages. No hidden fees. Get a quote.', priority: 0.8, changefreq: 'monthly' },
    // /book removed from sitemap — noindex tag in BookPage.tsx
    { path: '/staffing', type: 'info', title: 'Villa Staff Placement Bali | Hire Hospitality Staff — myCHEF', description: 'Long-term private chef placement, villa staff, and hospitality recruitment in Bali and Jakarta.', priority: 0.8, changefreq: 'monthly' },
    { path: '/contact', type: 'info', title: 'Contact myCHEF | Private Chef & Catering Bali', description: 'Contact myCHEF for private chef bookings, catering, and event enquiries in Bali.', priority: 0.5, changefreq: 'monthly' },
    { path: '/partner-platform', type: 'info', title: 'Villa Partner Platform | myCHEF Bali', description: 'Partner with myCHEF — private chef and catering services for Bali villa managers and owners.', priority: 0.6, changefreq: 'monthly' },
    { path: '/certified-partner', type: 'info', title: 'Certified Partner Programme | myCHEF Bali', description: 'Become a myCHEF certified partner — preferred private chef and staffing services for Bali villas.', priority: 0.5, changefreq: 'monthly' },
    { path: '/press', type: 'info', title: 'Press & Media | myCHEF Bali Private Chef', description: 'Press coverage, media kit, and brand story for myCHEF — Bali private chef and catering service.', priority: 0.3, changefreq: 'monthly' },
    { path: '/privacy', type: 'legal', title: 'Privacy Policy | myCHEF.id Private Chef & Catering Services Bali', description: 'Read the myCHEF.id privacy policy: how we collect, store, and protect your data when you book private chef, catering, or event services in Bali.', priority: 0.3, changefreq: 'yearly' },
    { path: '/terms', type: 'legal', title: 'Terms of Service | myCHEF Bali', description: 'Terms of service for myCHEF private chef bookings, catering, and events in Bali.', priority: 0.3, changefreq: 'yearly' },
    { path: '/cancellation', type: 'legal', title: 'Cancellation Policy | myCHEF Bali', description: 'Cancellation and refund policy for myCHEF private chef and catering bookings in Bali.', priority: 0.3, changefreq: 'yearly' },
    // Batch #143–147 blog pages (PremiumPage format, dedicated routes)
    { path: '/blog/drop-off-catering-bali', type: 'blog-post', title: 'Drop-Off Catering Bali -- Fresh Villa Food Delivered Ready', description: 'Drop-off catering in Bali for villa stays. Fresh food prepared professionally and delivered ready to serve. From IDR 700K/person. All areas covered.', priority: 0.8, changefreq: 'monthly', date: '2026-06-30' },
    { path: '/blog/hostess-hire-bali', type: 'blog-post', title: 'Hostess Hire Bali -- Event Hostess & Greeter Service', description: 'Hire a professional hostess in Bali for corporate events, villa parties, brand activations and VIP gatherings. English-fluent, luxury-trained.', priority: 0.8, changefreq: 'monthly', date: '2026-06-30' },
    { path: '/blog/private-chef-surabaya-guide', type: 'blog-post', title: 'Private Chef Surabaya -- In-Home & Corporate Catering', description: 'Hire a private chef in Surabaya for in-home dinners, weekly household service or corporate entertaining. Halal available. European, Indonesian and Asian menus.', priority: 0.8, changefreq: 'monthly', date: '2026-06-30' },
    { path: '/blog/chef-for-photoshoot-bali', type: 'blog-post', title: 'Chef for Food Photoshoot Bali -- Content Creation & Video', description: 'Hire a chef for food photoshoots and content creation in Bali. Hotels, brands, influencers and publications. Market-fresh sourcing and food styling.', priority: 0.8, changefreq: 'monthly', date: '2026-06-30' },
    { path: '/blog/tasting-menu-bali', type: 'blog-post', title: 'Private Tasting Menu Bali -- Multi-Course Villa Dinner', description: 'Private tasting menu in Bali. 7--11 progressive courses by an executive chef in your villa. Market-led menus, dietary adaptation and wine pairing.', priority: 0.8, changefreq: 'monthly', date: '2026-06-30' },
    // Batch #148–152 blog pages (PremiumPage format, dedicated routes)
    { path: '/blog/luxury-dining-bali', type: 'blog-post', title: 'Luxury Private Dining Bali -- Ultra-Premium Villa Experience', description: 'Luxury private dining in Bali delivered by executive chefs with Michelin credentials. Bespoke menus, premium ingredients and full front-of-house service.', priority: 0.8, changefreq: 'monthly', date: '2026-06-30' },
    { path: '/blog/fine-dining-at-home-bali', type: 'blog-post', title: 'Fine Dining at Home Bali -- Restaurant Quality to Your Villa', description: 'Fine dining at home in Bali -- restaurant-quality menus, plating, and service delivered to your villa by professional private chefs. All areas covered.', priority: 0.8, changefreq: 'monthly', date: '2026-06-30' },
    { path: '/blog/holiday-chef-bali', type: 'blog-post', title: 'Holiday Chef Bali -- Christmas, New Year & Festive Season', description: 'Holiday chef service in Bali for Christmas, New Year, and the festive season. Roast, seafood, Balinese spread, or bespoke menus. All villa areas.', priority: 0.8, changefreq: 'monthly', date: '2026-06-30' },
    { path: '/blog/dietary-specific-chef-bali', type: 'blog-post', title: 'Dietary Specific Private Chef Bali -- Vegan, Gluten-Free & More', description: 'Dietary-specific private chef in Bali. Vegan, gluten-free, halal, keto, allergen-free menus. Specialist chefs and multi-requirement groups. All Bali areas.', priority: 0.8, changefreq: 'monthly', date: '2026-06-30' },
    { path: '/blog/hotel-restaurant-chef-staffing', type: 'blog-post', title: 'Hotel & Restaurant Chef Staffing Bali -- F&B Recruitment', description: 'Chef staffing for hotels, resorts and restaurants in Bali. Executive, sous, pastry and line chefs. Temporary, contract and permanent placement.', priority: 0.8, changefreq: 'monthly', date: '2026-06-30' },
    // 2026-07-01: unique cultural content (2.4k words), no live equivalent → served (was routed but unregistered).
    { path: '/blog/indonesian-street-food-private-chef-bali', type: 'blog-post', title: 'Indonesian Street Food at Your Bali Villa -- Private Chef', description: 'Authentic Indonesian street food classics at your Bali villa -- nasi goreng, satay lilit, babi guling, gado-gado -- by a private chef. From IDR 700K/person.', priority: 0.8, changefreq: 'monthly', date: '2026-06-30' },
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
    ...barServicesPages,
    ...infoPages,
  ]

  // Safety net: never index redirect sources. A path that has a 301 rule should
  // not appear in the sitemap, inject-meta, or prerender output.
  return entries.filter((entry) => !REDIRECT_MAP[entry.path])
}

export const SERVICES = Object.values(PILLARS).map((pillar) => ({
  slug: pillar.slug,
  name: pillar.label,
  description: pillar.description,
}))

export const SITEMAP = buildSitemap()
