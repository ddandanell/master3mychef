/**
 * myCHEF — PAGE META DATA
 *
 * Centralised, unique title / description / H1 for every primary route.
 * Prevents duplicate title tag catastrophes and keeps SEO data in one
 * typed source of truth.
 */

export interface PageMeta {
  /** Route path (e.g. '/', '/fine-dining') */
  path: string
  /** HTML <title> — must be unique site-wide, ≤ 60 chars ideal */
  title: string
  /** Meta description — ≤ 160 chars ideal */
  description: string
  /** Canonical URL */
  canonical: string
  /** Primary H1 heading — must be unique and keyword-rich */
  h1: string
  /** Open Graph / social image */
  ogImage?: string
}

const SITE = 'https://mychef.id'

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    path: '/',
    title: 'Private Chef Bali | myCHEF.id — Villa Dining & Catering',
    description:
      'Hire a private chef in Bali for villa dining, catering & events. Michelin-trained team, same-day WhatsApp confirmation. 560+ villas served.',
    canonical: `${SITE}/`,
    h1: 'A Michelin-Trained Private Chef, in Your Bali Villa.',
    ogImage: `${SITE}/hero-home.webp`,
  },

  'fine-dining': {
    path: '/fine-dining',
    title: 'Fine Dining Bali | Private Chef Tasting Menu in Your Villa',
    description:
      'Private chef fine dining in your villa. Mediterranean & Wagyu tasting menus, open-flame cooking, wine pairing. From IDR 2.2M per guest.',
    canonical: `${SITE}/fine-dining`,
    h1: 'Private Chef Bali — Fine Dining Tasting Menu in Your Villa',
    ogImage: `${SITE}/hero-fine-dining.webp`,
  },

  catering: {
    path: '/catering',
    title: 'Villa Catering Bali | BBQ, Buffet & Plated Service',
    description:
      'Bali villa catering: BBQ, buffet, plated service, Babi Guling. Chef grills at your villa for birthdays, weddings and retreats.',
    canonical: `${SITE}/catering`,
    h1: 'Villa Catering Bali. Chef, Staff & Setup Included.',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  events: {
    path: '/events',
    title: 'Event Catering Bali | Weddings, Parties & Corporate',
    description:
      'Bali villa event catering and coordination for weddings, birthdays, anniversaries, corporate events, retreats, baby showers, and villa parties.',
    canonical: `${SITE}/events`,
    h1: 'One team builds the whole evening. You just host.',
    ogImage: `${SITE}/hero-events.webp`,
  },

  'villa-chef': {
    path: '/villa-chef',
    title: 'Private Chef Bali | Daily Villa Chef Service',
    description:
      'Bali villa catering with a private chef for your stay. Daily breakfast, lunch, dinner. Groceries at cost. From IDR 600K/hour.',
    canonical: `${SITE}/villa-chef`,
    h1: 'Your Private Villa Chef',
    ogImage: `${SITE}/villa-aerial.webp`,
  },

  'in-villa-service': {
    path: '/in-villa-service',
    title: 'In-Villa Service Bali | Waiters, Butlers & Bartenders',
    description:
      'Hire villa service staff in Bali: waiters, butlers, bartenders, mixologists, sommeliers. Uniformed, trained, same-day booking.',
    canonical: `${SITE}/in-villa-service`,
    h1: 'In-Villa Service Staff — Waiters, Butlers, Mixologists',
    ogImage: `${SITE}/bartender.webp`,
  },

  contact: {
    path: '/contact',
    title: 'Contact myCHEF.id | Book Your Private Chef in Bali',
    description:
      'Contact myCHEF: Sofia for fine dining, Daniel for villa chef service, Olivia for events, Marco for staffing. Direct WhatsApp booking.',
    canonical: `${SITE}/contact`,
    h1: 'Speak to the right person',
    ogImage: `${SITE}/generated/contact-hero.webp`,
  },

  book: {
    path: '/book',
    title: 'Book a Private Chef Bali | Reserve Your Villa Dining',
    description:
      'Book a private chef, catering, event or staffing in Bali. Same-day WhatsApp confirmation and a 25% deposit secure your date.',
    canonical: `${SITE}/book`,
    h1: 'Book Your Experience',
    ogImage: `${SITE}/generated/book-hero.webp`,
  },

  staffing: {
    path: '/staffing',
    title: 'Hire Villa Staff Bali | Chefs, Butlers & Household',
    description:
      'Hire vetted private chefs, live-in chefs, and villa staff in Bali. 48-hour placement. Hotels, villas, restaurants. Message Marco on WhatsApp.',
    canonical: `${SITE}/staffing`,
    h1: 'Hire Vetted Hospitality Staff for Your Villa, Hotel or Home.',
    ogImage: `${SITE}/generated/luna-chef-portrait.webp`,
  },

  locations: {
    path: '/locations',
    title: 'Private Chef Locations Bali | Seminyak, Canggu, Ubud & Uluwatu',
    description:
      'Browse private chef coverage across Bali villas, from Seminyak and Canggu to Ubud and Uluwatu. Find dining, catering and event service.',
    canonical: `${SITE}/locations`,
    h1: 'Private Chef Coverage Across Bali',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  'catering-bbq': {
    path: '/catering/bbq-catering',
    title: 'BBQ Catering Bali | Villa BBQ Catering for Groups',
    description:
      'BBQ catering in Bali for villa parties, birthdays and group dinners. Chef-grilled seafood, wagyu and skewers with setup and service.',
    canonical: `${SITE}/catering/bbq-catering`,
    h1: 'BBQ Catering in Bali — Villa BBQ for Groups',
    ogImage: `${SITE}/bbq-poolside.webp`,
  },

  'catering-buffet': {
    path: '/catering/buffet',
    title: 'Buffet Catering Bali | Villa & Event Buffet Service',
    description:
      'Buffet catering in Bali for villas, retreats and events. Mediterranean, Indonesian and family-style menus with chef setup and service.',
    canonical: `${SITE}/catering/buffet`,
    h1: 'Buffet Catering in Bali — Group Buffets for Villas',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-plated': {
    path: '/catering/plated-catering',
    title: 'Plated Catering Bali | Set Menu Catering for Villa Events',
    description:
      'Plated catering in Bali for weddings, corporate dinners and villa events. Three to five courses with chefs, waiters and polished service.',
    canonical: `${SITE}/catering/plated-catering`,
    h1: 'Plated Set Menu Catering Bali — 3, 4, 5 Course',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-drop-off': {
    path: '/catering/drop-off-catering',
    title: 'Drop-Off Catering Bali | Delivered Villa Catering',
    description:
      'Drop-off catering in Bali for villas and day events. Fresh platters, ready-to-serve trays and grazing boxes delivered on time.',
    canonical: `${SITE}/catering/drop-off-catering`,
    h1: 'Drop-Off Catering in Bali — Delivered to Your Villa',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-babi-guling': {
    path: '/catering/babi-guling',
    title: 'Babi Guling Catering Bali | Whole Pig Roast for Villas',
    description:
      'Babi Guling catering in Bali for villa feasts and celebrations. Whole pig roast packages with Balinese sides, carving and delivery.',
    canonical: `${SITE}/catering/babi-guling`,
    h1: 'Babi Guling Villa Catering Bali — Whole Pig Feasts',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-grazing-tables': {
    path: '/catering/grazing-tables',
    title: 'Grazing Tables Bali | Styled Grazing Catering for Events',
    description:
      'Grazing tables in Bali for weddings, birthdays and villa events. Styled cheese, charcuterie and tropical fruit spreads for 20+ guests.',
    canonical: `${SITE}/catering/grazing-tables`,
    h1: 'Grazing Tables in Bali — Editorial Spreads for Villas',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-villa': {
    path: '/catering/villa-catering',
    title: 'Villa Catering Bali | Daily Catering for Private Villas',
    description:
      'Villa catering in Bali for private groups staying in Seminyak, Canggu, Ubud and Uluwatu. Breakfast, lunch and dinner with chef setup.',
    canonical: `${SITE}/catering/villa-catering`,
    h1: 'Villa Catering Bali — Daily Chef Service for Groups',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-corporate': {
    path: '/catering/corporate-catering',
    title: 'Corporate Catering Bali | Catering for Offsites & Launches',
    description:
      'Corporate catering in Bali for offsites, launches and team dinners. Professional service, buffet or plated menus, and clear logistics.',
    canonical: `${SITE}/catering/corporate-catering`,
    h1: 'Corporate Catering Bali — Business Lunches & Event Catering',
    ogImage: `${SITE}/generated/corp-hero.webp`,
  },

  'catering-retreat': {
    path: '/catering/retreat-catering',
    title: 'Retreat Catering Bali | Yoga, Wellness & Group Meals',
    description:
      'Retreat catering in Bali for yoga, wellness and creative groups. Multi-day menu planning, dietary support and calm villa service.',
    canonical: `${SITE}/catering/retreat-catering`,
    h1: 'Retreat Catering Bali — Yoga, Wellness & Group Meals',
    ogImage: `${SITE}/generated/hero-retreats.jpg`,
  },

  'catering-floating-breakfast': {
    path: '/catering/floating-breakfast',
    title: 'Floating Breakfast Bali | Villa Pool Breakfast Service',
    description:
      'Floating breakfast Bali service for villas in Seminyak, Canggu and Uluwatu. Photo-ready pool trays with fruit, pastries and eggs.',
    canonical: `${SITE}/catering/floating-breakfast`,
    h1: 'Floating Breakfast Bali — Villa Pool Tray Brunch',
    ogImage: `${SITE}/breakfast-spread.webp`,
  },

  'events-weddings': {
    path: '/events/weddings',
    title: 'Wedding Catering Bali | Villa Weddings & Receptions',
    description:
      'Wedding catering in Bali for villa ceremonies, receptions and recovery brunches. Menus, staffing and service built for estate weddings.',
    canonical: `${SITE}/events/weddings`,
    h1: 'Wedding Catering in Bali — Villa Weddings & Receptions',
    ogImage: `${SITE}/event-wedding.webp`,
  },

  'events-birthdays': {
    path: '/events/birthdays',
    title: 'Birthday Catering Bali | Villa Birthday Parties & Dinners',
    description:
      'Birthday catering in Bali for villa dinners, BBQs and milestone parties. Private chefs, cocktails and staff for groups of 10 to 100.',
    canonical: `${SITE}/events/birthdays`,
    h1: 'Birthday Catering in Bali — Villa Parties & Private Dinners',
    ogImage: `${SITE}/hero-events.webp`,
  },

  'events-anniversaries': {
    path: '/events/anniversaries',
    title: 'Anniversary Dinner Bali | Private Chef Villa Celebrations',
    description:
      'Anniversary dinners in Bali with a private chef, plated menu and villa service. Built for romantic evenings and family celebrations.',
    canonical: `${SITE}/events/anniversaries`,
    h1: 'Anniversary Dinners in Bali — Private Chef Villa Celebrations',
    ogImage: `${SITE}/hero-events.webp`,
  },

  'events-corporate': {
    path: '/events/corporate-events',
    title: 'Corporate Events Bali | Catering for Offsites & Launches',
    description:
      'Corporate event catering in Bali for team offsites, launches and client dinners. Structured menus, staffing and on-site coordination.',
    canonical: `${SITE}/events/corporate-events`,
    h1: 'Corporate Event Catering in Bali',
    ogImage: `${SITE}/generated/corp-hero.webp`,
  },

  'events-retreats': {
    path: '/events/retreats',
    title: 'Retreat Events Bali | Catering for Wellness & Group Stays',
    description:
      'Retreat catering in Bali for yoga, wellness and leadership groups. Multi-day menus, dietary planning and reliable villa service.',
    canonical: `${SITE}/events/retreats`,
    h1: 'Retreat Catering in Bali — Multi-Day Group Dining',
    ogImage: `${SITE}/generated/hero-retreats.jpg`,
  },

  'events-baby-showers': {
    path: '/events/baby-showers',
    title: 'Baby Shower Catering Bali | Villa Brunches & Lunches',
    description:
      'Baby shower catering in Bali for villa brunches, grazing tables and plated lunches. Elegant setup, mocktails and service staff included.',
    canonical: `${SITE}/events/baby-showers`,
    h1: 'Baby Shower Catering in Bali — Villa Brunches & Lunches',
    ogImage: `${SITE}/hero-events.webp`,
  },

  'events-villa-parties': {
    path: '/events/villa-parties',
    title: 'Villa Party Catering Bali | Private Parties, BBQs & Bars',
    description:
      'Villa party catering in Bali for birthdays, sunset BBQs and private celebrations. Chef stations, cocktails and full event staffing.',
    canonical: `${SITE}/events/villa-parties`,
    h1: 'Villa Party Catering in Bali',
    ogImage: `${SITE}/bbq-poolside.webp`,
  },

  seminyak: {
    path: '/seminyak',
    title: 'Private Chef Seminyak | Villa Dining, BBQs & Catering',
    description:
      'Private chef Seminyak service for villa dinners, BBQs and event catering. Fast logistics, polished staff and menus for beachside stays.',
    canonical: `${SITE}/seminyak`,
    h1: 'Private Chef Seminyak — Fine Dining, Catering & Events',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  canggu: {
    path: '/canggu',
    title: 'Private Chef Canggu | Villa Dining, BBQs & Retreat Catering',
    description:
      'Private chef Canggu service for villa dining, BBQs and retreat catering. Great for surf groups, birthdays and long-stay families.',
    canonical: `${SITE}/canggu`,
    h1: 'Private Chef Canggu — Villa Dining & Group Catering',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  ubud: {
    path: '/ubud',
    title: 'Private Chef Ubud | Jungle Villa Dining & Retreat Catering',
    description:
      'Private chef Ubud service for jungle villas, wellness stays and retreat dining. Plant-forward menus, breakfasts and multi-day catering.',
    canonical: `${SITE}/ubud`,
    h1: 'Private Chef Ubud — Jungle Villa Dining & Retreats',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  uluwatu: {
    path: '/uluwatu',
    title: 'Private Chef Uluwatu | Clifftop Dining & Wedding Catering',
    description:
      'Private chef Uluwatu service for clifftop villas, sunset dinners and wedding catering. Early setup, polished service and strong logistics.',
    canonical: `${SITE}/uluwatu`,
    h1: 'Private Chef Uluwatu — Clifftop & Villa Fine Dining',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  'nusa-dua': {
    path: '/nusa-dua',
    title: 'Private Chef Nusa Dua | Resort Villa Dining & Catering',
    description:
      'Private chef Nusa Dua service for resort villas, family compounds and corporate offsites. Plated dinners, breakfasts and event catering.',
    canonical: `${SITE}/nusa-dua`,
    h1: 'Private Chef Nusa Dua — Resort Villa Fine Dining & Events',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  jimbaran: {
    path: '/jimbaran',
    title: 'Private Chef Jimbaran | Seafood Dinners & Villa BBQs',
    description:
      'Private chef Jimbaran service for seafood dinners, beachside BBQs and villa celebrations. Fresh catch menus with chef-led grilling.',
    canonical: `${SITE}/jimbaran`,
    h1: 'Private Chef Jimbaran — Bayfront Villa Dining & Seafood',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  sanur: {
    path: '/sanur',
    title: 'Private Chef Sanur | Family Villa Dining & Small Events',
    description:
      'Private chef Sanur service for family villas, quiet dinners and small events. Early dining, flexible menus and calm service staff.',
    canonical: `${SITE}/sanur`,
    h1: 'Private Chef Sanur — Quiet Villa Dining & Family Events',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  berawa: {
    path: '/berawa',
    title: 'Private Chef Berawa | Villa Brunches, Dinners & Catering',
    description:
      'Private chef Berawa service for modern villas, brunches and group dinners. Healthy menus, cocktails and event catering near the beach.',
    canonical: `${SITE}/berawa`,
    h1: 'Private Chef Berawa — Villa Dining & Beach Club Events',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  pererenan: {
    path: '/pererenan',
    title: 'Private Chef Pererenan | Fine Dining & Weekly Chef Service',
    description:
      'Private chef Pererenan service for design villas, romantic dinners and meal prep. Quiet setups, fine dining and weekly chef service.',
    canonical: `${SITE}/pererenan`,
    h1: 'Private Chef Pererenan — Design Villas & Intimate Dining',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  pecatu: {
    path: '/pecatu',
    title: 'Private Chef Pecatu | Surf Villa Dining & Sunset BBQs',
    description:
      'Private chef Pecatu service for surf villas, sunset BBQs and recovery brunches. Fast chef setup for stays across the Bukit coast.',
    canonical: `${SITE}/pecatu`,
    h1: 'Private Chef Pecatu — Surf & Sunset Dining',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  'blog-private-chef-bali-cost-breakdown-2026': {
    path: '/blog/private-chef-bali-cost-breakdown-2026',
    title: 'Private Chef Bali Cost Breakdown 2026 | Fees, Groceries & Service',
    description:
      'Private chef Bali cost breakdown for 2026, including chef fees, groceries, service charges and what changes the final villa quote.',
    canonical: `${SITE}/blog/private-chef-bali-cost-breakdown-2026`,
    h1: 'Private Chef Bali — Cost Breakdown 2026',
    ogImage: `${SITE}/generated/journal-hero.webp`,
  },

  'blog-best-bali-villas-private-chef-kitchen': {
    path: '/blog/best-bali-villas-private-chef-kitchen',
    title: 'Best Bali Villas with a Private Chef Kitchen | Planning Guide',
    description:
      'Best Bali villas with chef-friendly kitchens, from prep space and gas hobs to storage, staffing flow and dining-friendly layouts.',
    canonical: `${SITE}/blog/best-bali-villas-private-chef-kitchen`,
    h1: 'Best Bali Villas with a Private Chef Kitchen',
    ogImage: `${SITE}/generated/journal-hero.webp`,
  },

  'blog-wedding-rehearsal-dinner-bali': {
    path: '/blog/wedding-rehearsal-dinner-bali',
    title: 'Wedding Rehearsal Dinner Bali | Planning Guide for Villa Events',
    description:
      'Wedding rehearsal dinner Bali guide covering villa formats, menu ideas, timing and how to host guests before the ceremony.',
    canonical: `${SITE}/blog/wedding-rehearsal-dinner-bali`,
    h1: 'Wedding Rehearsal Dinner in Bali — Planning Guide',
    ogImage: `${SITE}/generated/journal-hero.webp`,
  },

  'blog-yoga-retreat-chef-bali-meal-planning': {
    path: '/blog/yoga-retreat-chef-bali-meal-planning',
    title: 'Yoga Retreat Chef Bali | Meal Planning for Multi-Day Retreats',
    description:
      'Yoga retreat chef Bali guide to meal planning, plant-forward menus, dietary requests and service for multi-day wellness stays.',
    canonical: `${SITE}/blog/yoga-retreat-chef-bali-meal-planning`,
    h1: 'Yoga Retreat Chef in Bali — Meal Planning',
    ogImage: `${SITE}/generated/journal-hero.webp`,
  },

  'blog-private-chef-vs-restaurant-bali': {
    path: '/blog/private-chef-vs-restaurant-bali',
    title: 'Private Chef vs Restaurant Bali | Compare Cost & Experience',
    description:
      'Private chef vs restaurant in Bali: compare cost, privacy, travel time and the guest experience for villa dinners and group trips.',
    canonical: `${SITE}/blog/private-chef-vs-restaurant-bali`,
    h1: 'Private Chef vs Restaurant in Bali — Which Is Better?',
    ogImage: `${SITE}/generated/journal-hero.webp`,
  },
} as const

/** Helper to retrieve meta by route key with strict typing */
export function getPageMeta(key: keyof typeof PAGE_META): PageMeta {
  return PAGE_META[key]
}

/** All page meta entries as an array for bulk operations (sitemaps, audits, etc.) */
export const ALL_PAGE_META: PageMeta[] = Object.values(PAGE_META)
