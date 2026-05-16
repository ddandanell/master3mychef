/**
 * myCHEF — MASTER SITEMAP & CONTENT INDEX
 *
 * This file is the primary engine for the Vite SPA's dynamic routing
 * and SEO. It combines static route data with rich content for:
 *
 * 1) Generating the dynamic sitemap.xml
 * 2) Feeding the LandingPage component with raw HTML/Markdown content
 * 3) Managing canonical redirects and aliases
 */
import { LOCATIONS } from './siteArchitecture'

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
  { slug: 'private-chef-menteng', name: 'Menteng' },
  { slug: 'private-chef-kemang', name: 'Kemang' },
  { slug: 'private-chef-scbd', name: 'SCBD' },
  { slug: 'private-chef-pondok-indah', name: 'Pondok Indah' },
  { slug: 'private-chef-bsd', name: 'BSD City' },
]

export const MICRO_AREAS: { slug: string; name: string }[] = [
  { slug: 'echo-beach-private-chef', name: 'Echo Beach' },
  { slug: 'batu-bolong-private-chef', name: 'Batu Bolong' },
  { slug: 'bingin-private-chef', name: 'Bingin' },
  { slug: 'balangan-private-chef', name: 'Balangan' },
  { slug: 'medewi-private-chef', name: 'Medewi' },
  { slug: 'nyang-nyang-private-chef', name: 'Nyang Nyang' },
  { slug: 'green-bowl-private-chef', name: 'Green Bowl' },
  { slug: 'dreamland-private-chef', name: 'Dreamland' },
  { slug: 'sayan-private-chef', name: 'Sayan' },
  { slug: 'padang-padang-private-chef', name: 'Padang Padang' },
  { slug: 'pererenan-private-chef', name: 'Pererenan Beach' },
  { slug: 'sanur-beach-private-chef', name: 'Sanur Beach' },
  { slug: 'penestanan-private-chef', name: 'Penestanan' },
]

export const SERVICES = [
  {
    slug: 'villa-parties',
    name: 'Villa Parties',
    description: 'Private villa parties with chef-led food, staffed service, cocktails, and full setup across Bali.',
  },
  {
    slug: 'romantic-dinners',
    name: 'Romantic Dinners',
    description: 'Intimate multi-course dinners for couples with candlelight service, custom menus, and restaurant-level plating.',
  },
  {
    slug: 'birthday-celebrations',
    name: 'Birthday Celebrations',
    description: 'Birthday dining experiences from elegant dinners to lively group celebrations, all handled in-villa.',
  },
  {
    slug: 'family-reunions',
    name: 'Family Reunions',
    description: 'Stress-free reunion dining with flexible menus, dietary coverage, and service sized for multi-generational groups.',
  },
  {
    slug: 'corporate-events',
    name: 'Corporate Events',
    description: 'Executive dinners, retreats, and branded hospitality events with invoice-ready coordination and polished service.',
  },
  {
    slug: 'wedding-celebrations',
    name: 'Wedding Celebrations',
    description: 'Wedding catering and event execution for Bali villas, from rehearsal dinners to full reception service.',
  },
  {
    slug: 'cooking-classes',
    name: 'Cooking Classes',
    description: 'Interactive chef-led cooking classes in your villa with curated ingredients, instruction, and shared dining.',
  },
  {
    slug: 'weekly-meal-prep',
    name: 'Weekly Meal Prep',
    description: 'Recurring private-chef meal prep for villa stays and residents who want healthy, tailored food without the work.',
  },
] as const

export const MENUS = [
  { slug: 'mediterranean', name: 'Mediterranean', description: 'Fresh seafood, artisanal pasta, and vibrant citrus-led flavors.' },
  { slug: 'balinese', name: 'Balinese', description: 'Traditional spice pastes, slow-roasted proteins, and heritage recipes.' },
  { slug: 'asian-fusion', name: 'Asian Fusion', description: 'Japanese precision meets Indonesian heat and Thai aromatics.' },
  { slug: 'vegan', name: 'Vegan', description: 'Innovative plant-based craft using Bali\'s extraordinary organic produce.' },
  { slug: 'modern-european', name: 'Modern European', description: 'Classic techniques applied to seasonal market ingredients.' },
  { slug: 'halal', name: 'Halal', description: 'Certified halal sourcing and specialized preparation for group events.' },
]

// Landing pages with rich content for the SPA's dynamic renderer
export const LANDING_PAGES: { slug: string; title: string; description: string; date?: string; content?: string }[] = [
  {
    slug: 'villa-bbq-catering-bali',
    title: 'Villa BBQ Catering Bali | Seafood & Wagyu Grills',
    description: 'The #1 villa BBQ catering service in Bali. Fresh Jimbaran seafood, Australian Wagyu, and organic sides grilled live at your villa.',
    date: '2026-05-16',
    content: `<h2>Bali\'s Signature Villa BBQ Experience</h2>
<p>There is nothing quite like a <a href="/catering/bbq-catering" class="text-[#C5A028] hover:underline font-medium">seafood BBQ in a Bali villa</a>. The smell of coconut-husk charcoal, the sound of the ocean (or the jungle), and the convenience of having a professional chef handle the grill while you stay in the pool.</p>
<h2>What We Grill</h2>
<ul>
<li><strong>Jimbaran Seafood</strong> — Red snapper, jumbo king prawns, calamari, and local lobster.</li>
<li><strong>Premium Meats</strong> — Australian Wagyu striploin, marinated chicken thighs, and artisanal skewers.</li>
<li><strong>Organic Sides</strong> — Corn on the cob, roasted potatoes, Balinese lawar, and fresh sambals.</li>
</ul>
<p>We provide everything: the chef, the grill team, the charcoal, and all serving platters. No mess, no stress. <a href="/book" class="text-[#C5A028] hover:underline font-medium">Book your BBQ date today</a>.</p>`,
  },
  {
    slug: 'bali-wedding-catering-packages',
    title: 'Bali Wedding Catering Packages | Villa Wedding Menus',
    description: 'Elegant wedding catering packages for Bali villa weddings. Plated fine dining, family-style sharing, and cocktail receptions.',
    date: '2026-05-16',
    content: `<h2>Wedding Catering That Scales with Your Dream</h2>
<p>From intimate elopements for 2 to grand estate weddings for 150, myCHEF provides <a href="/events/weddings" class="text-[#C5A028] hover:underline font-medium">wedding catering</a> that prioritizes taste and timing. We understand the logistics of Bali villas and work alongside your wedding planner to ensure the culinary flow is perfect.</p>
<h2>Our Package Styles</h2>
<ul>
<li><strong>The Plated Elegance</strong> — 3 to 5 course formal service for intimate groups.</li>
<li><strong>The Tropical Sharing Table</strong> — A social, high-end family-style feast.</li>
<li><strong>The Cocktail Soirée</strong> — Refined canapés and interactive food stations.</li>
</ul>
<p>Speak with Olivia, our Head of Events, to receive a custom proposal and <a href="/help/wedding-guide" class="text-[#C5A028] hover:underline font-medium">view our planning guide</a>.</p>`,
  },
  {
    slug: 'michelin-private-chef-bali-prices',
    title: 'Michelin Private Chef Bali Prices | 2026 Cost Guide',
    description: 'Transparent pricing for Michelin-standard private chef experiences in Bali. Cost breakdowns for tasting menus, villa dinners, and groceries.',
    date: '2026-05-17',
    content: `<h2>What Does a Michelin-Level Chef Cost in Bali?</h2>
<p>Luxury private dining should be extraordinary, but the pricing should be transparent. At myCHEF, we follow a strict no-hidden-fee policy. Our <a href="/fine-dining" class="text-[#C5A028] hover:underline font-medium">fine dining experiences</a> are priced per guest, including the chef fee, service team, and all equipment.</p>
<h2>Price Breakdown (2026 Standards)</h2>
<ul>
<li><strong>Mediterranean Tasting Menus</strong> — Starting from IDR 2,200,000++ per guest.</li>
<li><strong>Wagyu & Seafood Specialists</strong> — Starting from IDR 2,400,000++ per guest.</li>
<li><strong>Private Chef Table</strong> — A unique counter-side experience from IDR 2,800,000++ per guest.</li>
</ul>
<h2>The myCHEF Value Proposition</h2>
<p>While restaurant prices in Bali have surged, a <a href="/fine-dining/private-chef-bali" class="text-[#C5A028] hover:underline font-medium">private chef booking</a> often provides better value for groups. You avoid the 300% wine markups, the transport costs to Seminyak or Ubud, and the 21% tax/service charge common in hotels. Most importantly, you get a dedicated Michelin-trained team focused entirely on your table.</p>
<p>Use our <a href="/calculator" class="text-[#C5A028] hover:underline font-medium">online pricing calculator</a> to build a budget for your specific dates and guest count.</p>`,
  },
  {
    slug: 'private-tasting-menu-bali-villa',
    title: 'Private Tasting Menu Bali Villa | 7-11 Course Experiences',
    description: 'Book a multi-course private tasting menu in your Bali villa. Michelin-trained chefs, premium ingredients, and professional service.',
    date: '2026-05-18',
    content: `<h2>Restaurant-Level Tasting Menus, Inside Your Villa</h2>
<p>The tasting menu is the ultimate expression of the myCHEF culinary philosophy. It is a structured sequence of 7 to 11 courses, each designed to showcase a specific Balinese ingredient or Mediterranean technique. Our <a href="/fine-dining/tasting-menu" class="text-[#C5A028] hover:underline font-medium">private tasting menus</a> bring the discipline of a Michelin-starred kitchen to the privacy of your villa terrace.</p>
<h2>What to Expect from a myCHEF Tasting Menu</h2>
<ul>
<li><strong>Personalized Menu Design</strong> — Adriano and the team adapt the sequence to your dietary preferences and the morning market's best catch.</li>
<li><strong>Full Table Service</strong> — A dedicated service manager and waitstaff handle all plating, wine pouring, and table management.</li>
<li><strong>Wine Pairing</strong> — Optional tailored wine pairings curated by our sommelier to complement each course.</li>
</ul>
<p>Whether you are celebrating a <strong>wedding anniversary</strong>, a <strong>significant birthday</strong>, or simply want to experience the best private dining in Bali, the tasting menu is our flagship recommendation. We serve all areas including Seminyak, Canggu, and Uluwatu.</p>`,
  },
  {
    slug: 'chef-table-experience-bali',
    title: 'Chef Table Experience Bali | Counter-Side Fine Dining',
    description: 'The most exclusive private chef experience in Bali. Watch your meal being built course-by-course with live chef commentary.',
    date: '2026-05-18',
    content: `<h2>The Theatre of the Kitchen, Brought to Your Villa</h2>
<p>A <a href="/fine-dining/chefs-table" class="text-[#C5A028] hover:underline font-medium">chef’s table experience</a> is for those who love the process as much as the plate. Instead of being served at a formal dining table, you and your guests gather around your villa’s kitchen island or counter to watch the chef work. It is interactive, educational, and deeply personal.</p>
<h2>Why Book a Private Chef Table?</h2>
<p>In a standard private dinner, the kitchen is a workspace. In a chef’s table experience, the kitchen is the stage. You see the knife work, hear the stories behind the ingredients, and watch each dish built with architectural precision. It is the perfect format for groups of 2 to 6 who want a high-engagement evening.</p>
<p>Adriano personally leads many of our chef table bookings, sharing his journey from Michelin kitchens in Italy to the markets of Bali. <a href="/book" class="text-[#C5A028] hover:underline font-medium">Check availability for your dates</a>.</p>`,
  },
  {
    slug: 'seafood-bbq-catering-bali-cost',
    title: 'Seafood BBQ Catering Bali Cost | 2026 Price Guide',
    description: 'Understand the cost of seafood BBQ catering in Bali. Price per head for jumbo prawns, snapper, lobster, and premium sides.',
    date: '2026-05-18',
    content: `<h2>Planning a Bali Seafood BBQ? Here is the Budget Guide</h2>
<p>Seafood is the cornerstone of Bali’s catering scene, but prices vary wildly depending on sourcing and quality. At myCHEF, we source daily from the morning catch in Jimbaran and Kedonganan to ensure the highest possible standard for our <a href="/catering/bbq-catering" class="text-[#C5A028] hover:underline font-medium">seafood BBQs</a>.</p>
<h2>Average Costs Per Person (2026)</h2>
<ul>
<li><strong>Standard Seafood BBQ</strong> — IDR 450,000 to 650,000 per head. Includes snapper, squid, clams, and prawns with organic sides.</li>
<li><strong>Premium Seafood Feast</strong> — IDR 750,000 to 950,000 per head. Adds jumbo prawns, barramundi, and premium imported ingredients.</li>
<li><strong>The Lobster Upgrade</strong> — Market price (typically +IDR 400,000 per head). Local Balinese rock lobster or bamboo lobster.</li>
</ul>
<p>Our pricing includes the chef, the grill team, charcoal, and all serving equipment. No hidden transport fees for villas in south Bali. <a href="/calculator" class="text-[#C5A028] hover:underline font-medium">Calculate your specific event cost here</a>.</p>`,
  },
  {
    slug: 'group-villa-dinner-packages-bali',
    title: 'Group Villa Dinner Packages Bali | Catering for 10-50 Guests',
    description: 'Simplified villa dinner packages for large groups in Bali. Perfect for family reunions, birthdays, and villa parties.',
    date: '2026-05-18',
    content: `<h2>Hassle-Free Catering for Large Villa Groups</h2>
<p>Hosting 15 or 20 people in a Bali villa can be logistical chaos. myCHEF’s <a href="/catering/villa-catering" class="text-[#C5A028] hover:underline font-medium">group dinner packages</a> are designed to remove the stress. We provide one-price-per-head models that include everything: food, staff, setup, and cleanup.</p>
<h2>Most Popular Group Formats</h2>
<ul>
<li><strong>The Indonesian Rijsttafel</strong> — A grand spread of Balinese and Indonesian classics. Best for mixed international groups.</li>
<li><strong>Mediterranean Sharing Table</strong> — Large platters of pasta, roasted meats, and salads served down the center of the table.</li>
<li><strong>Poolside Buffet</strong> — Maximum flexibility for groups who want to eat at different times.</li>
</ul>
<p>We specialize in managing the flow of large groups inside private residences. Our team is background-checked and accustomed to working alongside villa staff. <a href="/quote" class="text-[#C5A028] hover:underline font-medium">Get a group quote today</a>.</p>`,
  },
  {
    slug: 'private-chef-jakarta-launch-michelin-standards',
    title: 'Private Chef Jakarta Launch | Michelin Standards in the City',
    description: 'myCHEF officially launches in Jakarta. Bringing Michelin-standard private dining to Menteng, Kemang, and SCBD residences.',
    date: '2026-05-18',
    content: `<h2>myCHEF Indonesia: Now Serving Jakarta</h2>
<p>After serving 12,000+ guests in Bali, myCHEF is proud to announce our official expansion into the capital. We are now accepting bookings for <a href="/locations/jakarta" class="text-[#C5A028] hover:underline font-medium">private chef services in Jakarta</a>, specifically tailored to premier residential districts and corporate suites.</p>
<h2>Our Jakarta Service Areas</h2>
<ul>
<li><strong>Menteng</strong> — Discreet, high-security service for diplomatic and family estates.</li>
<li><strong>Kemang</strong> — Sophisticated social catering and family dinners for the international community.</li>
<li><strong>SCBD</strong> — Executive corporate hospitality and boardroom private dining.</li>
<li><strong>Pondok Indah & BSD</strong> — Professional at-home dining for large family residences.</li>
</ul>
<p>Our Jakarta team follows the same rigorous standards as our Bali operation: Michelin-trained leadership, vetted staff, and daily market-fresh sourcing. <a href="/book" class="text-[#C5A028] hover:underline font-medium">Reserve your Jakarta villa or residence chef today</a>.</p>`,
  },
]

export const GUIDES: { slug: string; title: string; description: string; date?: string; content?: string }[] = [
  {
    slug: 'guide/bali-cuisine-glossary',
    title: 'Bali Cuisine Glossary',
    description: 'A complete glossary of Balinese cuisine — ingredients, dishes, cooking techniques, and regional specialties.',
    date: '2025-01-15',
    content: `<h2>Essential Balinese Ingredients</h2>
<p><strong>Base Genep</strong> — Bali's foundational spice paste, made from shallots, garlic, galangal, ginger, turmeric, lemongrass, candlenut, and chilli.</p>
<p><strong>Salam Leaf</strong> — The Indonesian bay leaf. Slightly earthier than Mediterranean varieties.</p>
<h2>Core Balinese Dishes</h2>
<p><strong>Babi Guling</strong> — Whole roasted pig, seasoned with base genep. 센터피스 dish for <a href="/events" class="text-[#C5A028] hover:underline font-medium">events</a>.</p>
<p><strong>Bebek Betutu</strong> — Duck packed with spice paste, wrapped in banana leaf and coconut husks.</p>
<p>Explore <a href="/fine-dining" class="text-[#C5A028] hover:underline font-medium">fine dining options</a> using these traditional ingredients.</p>`,
  },
  {
    slug: 'guide/private-chef-bali',
    title: 'Private Chef in Bali — Complete Guide',
    description: 'Everything you need to know about hiring a private chef in Bali — costs, what to expect, how to choose.',
    date: '2025-02-01',
    content: `<h2>What Does a Private Chef in Bali Actually Do?</h2>
<p>A private chef comes to your villa, prepares a full meal from scratch, serves it, and cleans up. You stay at your table.</p>
<h2>How Much Does it Cost?</h2>
<ul>
<li><strong>Fine dining</strong> — from IDR 2.2M per person.</li>
<li><strong>BBQ catering</strong> — from IDR 450K per person.</li>
</ul>
<p>Read more on our <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">pricing page</a>.</p>`,
  },
]

export const BLOG_POSTS: { slug: string; title: string; description: string; date?: string; content?: string }[] = [
  {
    slug: "blog/private-chef-bali-cost-breakdown-2026",
    title: "Private Chef Bali Cost Breakdown 2026",
    description: "2026 Bali private chef cost breakdown with sample villa dinner totals, grocery ranges, staffing add-ons, and booking tips.",
    date: "2026-05-10",
    content: `<p>If you are pricing a private chef in Bali, split it into parts: chef fee, groceries, and extras.</p>
<h2>Rates You Can Use</h2>
<ul>
<li><strong>Hourly villa chef</strong> — IDR 600,000 per hour (3h min).</li>
<li><strong>Mediterranean fine dining</strong> — IDR 2,200,000 per guest.</li>
</ul>
<p>Check the <a href="/calculator" class="text-[#C5A028] hover:underline font-medium">pricing calculator</a> for more.</p>`,
  },
  {
    slug: "blog/best-bali-villas-private-chef-kitchen",
    title: "Best Bali Villas With a Private Chef Kitchen",
    description: "What makes a Bali villa kitchen work for a private chef, with prep-space checks and equipment notes.",
    date: "2026-04-24",
    content: `<p>A chef-friendly kitchen needs heat, prep space, and cold storage. Most <a href="/locations/seminyak" class="text-[#C5A028] hover:underline font-medium">Seminyak</a> and <a href="/locations/canggu" class="text-[#C5A028] hover:underline font-medium">Canggu</a> villas handle this well.</p>`,
  },
]

// Internal log of all journal posts (excerpt-based for lists)
const JOURNAL_POSTS = [
  {
    slug: 'private-chef-bali-cost-breakdown-2026',
    title: 'Private Chef Bali Cost Breakdown 2026',
    excerpt: 'Detailed cost breakdown for 2026: chef fees, groceries, and service charges for villa dinners.',
  },
  {
    slug: 'best-bali-villas-private-chef-kitchen',
    title: 'Best Bali Villas with a Private Chef Kitchen',
    excerpt: 'What to look for in a villa kitchen to ensure your private chef service runs perfectly.',
  },
  {
    slug: 'wedding-rehearsal-dinner-bali',
    title: 'Wedding Rehearsal Dinner in Bali',
    excerpt: 'How to plan a stress-free rehearsal dinner in your villa before the big day.',
  },
  {
    slug: 'yoga-retreat-chef-bali-meal-planning',
    title: 'Yoga Retreat Chef Bali | Meal Planning',
    excerpt: 'Structuring nutrient-dense, plant-forward menus for multi-day wellness retreats.',
  },
  {
    slug: 'private-chef-vs-restaurant-bali',
    title: 'Private Chef vs Restaurant Bali',
    excerpt: 'Comparing total cost, comfort, and menu control for large groups and families.',
  },
  {
    slug: 'private-chef-jakarta-launch-michelin-standards',
    title: 'Private Chef Jakarta Launch',
    excerpt: 'myCHEF officially expands to Jakarta residences and corporate suites.',
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
    title: `Private Chef in ${a.name}`,
    description: `Private chef services in ${a.name}. Custom menus, transparent pricing, same-day responses.`,
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
  }))

  const journalPosts: SitemapEntry[] = JOURNAL_POSTS.map((p) => {
    const rich = LANDING_PAGES.find(l => l.slug === p.slug)
    return {
      path: `/journal/${p.slug}`,
      type: 'blog-post',
      title: p.title,
      description: rich?.description || p.excerpt,
      priority: 0.75,
      changefreq: 'monthly',
      slug: p.slug,
      content: rich?.content,
    }
  })

  // Supporting info pages
  const infoPages: SitemapEntry[] = [
    { path: '/locations', type: 'info', title: 'Locations', description: 'Our coverage areas in Bali and Jakarta.', priority: 0.8, changefreq: 'monthly' },
    { path: '/journal', type: 'blog-index', title: 'Journal', description: 'Guides and insights for Bali villa hosting.', priority: 0.8, changefreq: 'weekly' },
    { path: '/pricing', type: 'info', title: 'Pricing', description: 'Transparent pricing for private chef services.', priority: 0.8, changefreq: 'monthly' },
    { path: '/book', type: 'info', title: 'Book Now', description: 'Reserve your private chef date.', priority: 0.8, changefreq: 'monthly' },
  ]

  return [
    home,
    ...areas,
    ...locationPages,
    ...landing,
    ...journalPosts,
    ...infoPages,
  ]
}

export const SITEMAP = buildSitemap()
