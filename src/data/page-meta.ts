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
      'Private chef fine dining in your Bali villa. Mediterranean & Wagyu tasting menus, open-flame cooking, wine pairing. From IDR 2.2M++ per guest.',
    canonical: `${SITE}/fine-dining`,
    h1: 'Private Chef Bali — Fine Dining Tasting Menu in Your Villa',
    ogImage: `${SITE}/hero-fine-dining.webp`,
  },

  catering: {
    path: '/catering',
    title: 'Villa Catering Bali | BBQ, Buffet & Plated Service',
    description:
      'Premium Bali catering for villas. BBQ, buffet, plated dinners, drop-off, Babi Guling, grazing tables. Real chef grills at your villa. From IDR 450K pp.',
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
      'Short-term hospitality staff for Bali villas and events — waiters, butlers, bartenders, mixologists, sommeliers, hosts. Uniformed, trained, same-day booking.',
    canonical: `${SITE}/in-villa-service`,
    h1: 'In-Villa Service Staff — Waiters, Butlers, Mixologists',
    ogImage: `${SITE}/bartender.webp`,
  },

  contact: {
    path: '/contact',
    title: 'Contact myCHEF.id | Book Your Private Chef in Bali',
    description:
      'Speak directly with the right person — Sofia for fine dining, Daniel for villa chef catering, Olivia for events, Marco for partnerships and staffing.',
    canonical: `${SITE}/contact`,
    h1: 'Speak to the right person',
    ogImage: `${SITE}/generated/contact-hero.webp`,
  },

  book: {
    path: '/book',
    title: 'Book a Private Chef Bali | Reserve Your Villa Dining',
    description:
      'Book a private chef, catering, event or staffing in Bali. Same-day WhatsApp confirmation. 25% deposit locks your date.',
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
    ogImage: `${SITE}/chef-portrait.webp`,
  },
} as const

/** Helper to retrieve meta by route key with strict typing */
export function getPageMeta(key: keyof typeof PAGE_META): PageMeta {
  return PAGE_META[key]
}

/** All page meta entries as an array for bulk operations (sitemaps, audits, etc.) */
export const ALL_PAGE_META: PageMeta[] = Object.values(PAGE_META)
