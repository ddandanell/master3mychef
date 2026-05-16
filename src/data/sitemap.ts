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
  {
    slug: 'private-tasting-menu-bali',
    title: 'Private Tasting Menu Bali | Michelin-Standard Villa Dining',
    description: 'Experience 7-11 course private tasting menus in your Bali villa. Italian technique met with Balinese ingredients.',
    date: '2026-05-17',
    content: `<h2>Michelin-Standard Tasting Menus in Your Villa</h2><p>Our signature tasting menus are the pinnacle of private dining in Bali. Each course is a story of technique and terroir.</p>`,
  },
  {
    slug: 'chef-table-experience-bali',
    title: 'Chef Table Experience Bali | Interactive Fine Dining',
    description: 'An interactive, counter-side private dining experience. Watch our Michelin-trained chefs work course-by-course.',
    date: '2026-05-17',
    content: `<h2>The Chef’s Table: A Culinary Performance</h2><p>Turn your villa kitchen into a stage. Watch, learn, and taste as our chefs prepare a world-class meal before your eyes.</p>`,
  },
  {
    slug: 'seafood-bbq-catering-bali',
    title: 'Seafood BBQ Catering Bali | Direct-from-Market Freshness',
    description: 'Fresh seafood BBQs for Bali villas. Snapper, prawns, lobster, and more grilled live at your poolside.',
    date: '2026-05-17',
    content: `<h2>Fresh Seafood BBQs: The Taste of the Island</h2><p>We shop the Kedonganan market at dawn to bring the freshest catch directly to your villa grill.</p>`,
  },
  {
    slug: 'group-villa-dinner-packages-bali',
    title: 'Group Villa Dinner Packages Bali | Easy Booking for 10-150 Guests',
    description: 'All-inclusive villa dinner packages for large groups in Bali. Perfect for family reunions and social gatherings.',
    date: '2026-05-17',
    content: `<h2>Stress-Free Group Dining in Bali</h2><p>We handle the logistics, staffing, and cleanup for your large group, so you can focus on the celebration.</p>`,
  },
  {
    slug: 'corporate-retreat-catering-bali',
    title: 'Corporate Retreat Catering Bali | Professional Event Hospitality',
    description: 'Professional catering for corporate retreats and offsites in Bali. NPWP-ready invoices and executive service standards.',
    date: '2026-05-17',
    content: `<h2>Executive Catering for Bali Retreats</h2><p>Boost team morale with high-quality, reliable catering that respects your retreat schedule and dietary needs.</p>`,
  },
  {
    slug: 'luxury-birthday-party-bali',
    title: 'Luxury Birthday Party Bali | Private Chef & Event Planning',
    description: 'Celebrate your birthday with a luxury private chef experience in Bali. We handle food, drinks, and styling.',
    date: '2026-05-17',
    content: `<h2>Unforgettable Birthday Celebrations</h2><p>From intimate dinners to grand villa parties, we make your Bali birthday milestone truly extraordinary.</p>`,
  },
  {
    slug: 'hire-private-chef-bali-monthly',
    title: 'Hire Private Chef Bali Monthly | Long-Stay Villa Hosting',
    description: 'Monthly and long-term private chef placements for Bali villas and residences. Vetted, professional culinary teams.',
    date: '2026-05-17',
    content: `<h2>Professional Long-Term Villa Chefs</h2><p>Consistency and quality for your long Bali stay. We provide vetted chefs who understand your palate and household flow.</p>`,
  },
  {
    slug: 'villa-staff-bali-agency',
    title: 'Villa Staff Bali Agency | Professional Household Placement',
    description: 'The premier agency for villa staff in Bali. We source and vet housekeepers, butlers, and villa managers.',
    date: '2026-05-17',
    content: `<h2>Trusted Villa Staffing Solutions</h2><p>Build a reliable household team with our professional vetting and placement service.</p>`,
  },
  {
    slug: 'butler-service-bali-daily-rate',
    title: 'Butler Service Bali Daily Rate | Professional Villa Hosting',
    description: 'Hire professional, English-speaking butlers in Bali by the day or shift. Discreet and anticipatory guest service.',
    date: '2026-05-17',
    content: `<h2>Expert Butler Service for Your Villa</h2><p>Experience true hospitality with our trained butlers who manage your guest relations and household flow.</p>`,
  },
  {
    slug: 'best-private-chef-indonesia',
    title: 'Best Private Chef Indonesia | Michelin-Standard Villa Dining',
    description: 'The premier private chef service in Indonesia. Michelin-trained leadership, local sourcing, and world-class service standards.',
    date: '2026-05-17',
    content: `<h2>Setting the Standard for Private Dining in Indonesia</h2><p>myCHEF brings international fine-dining standards to private residences across Bali and Jakarta.</p>`,
  },
  {
    slug: 'private-chef-for-events',
    title: 'Private Chef for Events | Bali Villa Party Catering',
    description: 'Hire a private chef for your next Bali villa event. From small birthdays to large celebrations, we provide the culinary team.',
    date: '2026-05-17',
    content: `<h2>Professional Event Chefs for Your Villa</h2><p>We specialize in villa event hospitality, ensuring your guests enjoy restaurant-quality food in a private setting.</p>`,
  },
  {
    slug: 'luxury-chef-indonesia',
    title: 'Luxury Chef Indonesia | Premium Private Dining Experiences',
    description: 'Exclusive private chef services for high-end residences and estates in Indonesia. Discreet, professional, and refined.',
    date: '2026-05-17',
    content: `<h2>Refined Private Dining for Elite Residences</h2><p>Our luxury chef service is designed for guests who expect the highest standards of culinary craft and discretion.</p>`,
  },
  {
    slug: 'wedding-catering-indonesia',
    title: 'Wedding Catering Indonesia | Villa Wedding Specialists',
    description: 'Premium wedding catering for villa weddings in Indonesia. Customized menus, full service teams, and event coordination.',
    date: '2026-05-17',
    content: `<h2>Your Dream Wedding, Catered by Experts</h2><p>We understand the unique logistics of villa weddings in Indonesia, providing seamless hospitality for your big day.</p>`,
  },
  {
    slug: 'private-dining-indonesia',
    title: 'Private Dining Indonesia | At-Home Fine Dining Services',
    description: 'Experience at-home fine dining across Indonesia. Michelin-trained chefs, premium ingredients, and professional service.',
    date: '2026-05-17',
    content: `<h2>Fine Dining, Reimagined for the Private Home</h2><p>Enjoy the intimacy of your own space with the culinary quality of a world-class restaurant.</p>`,
  },
  {
    slug: 'healthy-meal-delivery-indonesia',
    title: 'Healthy Meal Delivery Indonesia | Chef-Prepared Villa Food',
    description: 'Gourmet healthy meal delivery and prep for Bali and Jakarta. Organic ingredients and nutrient-dense menus.',
    date: '2026-05-17',
    content: `<h2>Gourmet Wellness, Delivered to Your Door</h2><p>Fuel your body with chef-prepared meals that prioritize both flavor and nutritional integrity.</p>`,
  },
  {
    slug: 'chef-for-hire-indonesia',
    title: 'Chef for Hire Indonesia | Personal Chef Services',
    description: 'Hire a personal chef in Indonesia for your villa or residence. Vetted professional chefs for daily or occasional service.',
    date: '2026-05-17',
    content: `<h2>Reliable Personal Chefs Across Indonesia</h2><p>Find the perfect chef for your household with our professional vetting and placement service.</p>`,
  },
  {
    slug: 'proposal-dinner',
    title: 'Proposal Dinner Bali | Romantic Private Chef Experiences',
    description: 'Plan the perfect proposal with a private chef dinner in your Bali villa. Intimate, styled, and unforgettable.',
    date: '2026-05-17',
    content: `<h2>An Unforgettable Night for Your Proposal</h2><p>We create the perfect romantic atmosphere for your big moment, with a menu to match.</p>`,
  },
  {
    slug: 'honeymoon-chef',
    title: 'Honeymoon Chef Bali | Private Villa Dining for Couples',
    description: 'Exclusive private chef services for honeymooners in Bali. Romantic breakfasts, sunset dinners, and intimate hosting.',
    date: '2026-05-17',
    content: `<h2>Celebrating Your New Journey Together</h2><p>Enjoy the ultimate honeymoon luxury: a private chef who handles everything while you focus on each other.</p>`,
  },
  {
    slug: 'private-chef-breakfast-bali',
    title: 'Private Chef Breakfast Bali | Poolside Villa Service',
    description: 'Wake up to a chef-prepared breakfast in your Bali villa. Floating trays, fresh juices, and international spreads.',
    date: '2026-05-17',
    content: `<h2>The Best Way to Start Your Bali Day</h2><p>Experience the signature Bali villa breakfast, prepared fresh and served poolside by your private chef.</p>`,
  },
  {
    slug: 'private-chef-menteng',
    title: 'Private Chef Menteng | Diplomatic District Fine Dining',
    description: 'Discreet and professional private chef services for Jakarta’s Menteng district. Elite residential hospitality.',
    date: '2026-05-17',
    content: `<h2>Discreet Hospitality for Menteng’s Premier Residences</h2><p>We provide Michelin-trained culinary teams for embassy dinners and private family events in Menteng.</p>`,
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
  {
    slug: 'private-chef-vs-villa-staff-bali',
    title: 'Private Chef vs. Villa Staff: Understanding the Difference in Bali',
    description: 'Why hiring a specialized private chef beats relying on general villa staff for your milestone dinner.',
    date: '2026-05-17',
    content: `<h2>The Difference Between Cooking and Hospitality</h2><p>While many Bali villas come with staff who can cook, a professional private chef brings a level of culinary craft and event pacing that general staff cannot match. A private chef handles the full lifecycle of the meal: from sourcing the premium ingredients to the final cleanup, allowing the villa staff to focus on their core duties.</p>`,
  },
  {
    slug: 'bali-private-chef-cost-guide-2026',
    title: 'The 2026 Bali Private Chef Cost Guide: Menus, Groceries, and Tips',
    description: 'A transparent breakdown of what to expect when booking a private chef in Bali this year.',
    date: '2026-05-17',
    content: `<h2>Transparent Pricing for Bali Private Dining</h2><p>Understanding the cost of a private chef in Bali involves looking at chef fees, grocery budgets, and service expectations. In 2026, a standard private chef dinner in Bali starts from $85 per session plus the cost of ingredients. For larger groups, catering packages starting from $35 per person offer excellent value.</p>`,
  },
  {
    slug: 'villa-wedding-catering-logistics-bali',
    title: 'Planning a Villa Wedding in Bali? The Essential Catering Logistics Guide',
    description: 'From kitchen requirements to service flow, here is what you need to know for your villa wedding catering.',
    date: '2026-05-17',
    content: `<h2>Successful Villa Wedding Catering Logistics</h2><p>Catering a wedding in a private villa requires careful planning around power, water, access, and service flow. Unlike a hotel, a villa kitchen often needs augmentation with professional equipment, specialized staff, and clear run sheets to ensure a seamless guest experience.</p>`,
  },
  {
    slug: 'yoga-retreat-meal-planning-bali',
    title: 'Yoga Retreat Meal Planning: Nutritional Integrity for Bali Retreats',
    description: 'How we design retreat menus that balance detoxification with culinary satisfaction.',
    date: '2026-05-17',
    content: `<h2>Nourishing the Mind and Body</h2><p>Our retreat catering focus is on nutrient-dense, plant-forward menus that support the intensive physical and mental work of a yoga retreat. We work with retreat leaders to design menus that are both detoxifying and satisfying, ensuring guests have the energy they need for their practice.</p>`,
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
    ...pillarSubPages,
    ...infoPages,
  ]
}

export const SERVICES = Object.values(PILLARS).map((pillar) => ({
  slug: pillar.slug,
  name: pillar.label,
  description: pillar.description,
}))

export const SITEMAP = buildSitemap()
