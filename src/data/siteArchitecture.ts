/**
 * myCHEF — MASTER SITE ARCHITECTURE (Vite SPA)
 *
 * Single source of truth for navigation, pages, SEO, and internal linking.
 * Adapted from the Next.js app systems plan.
 */

export const SITE = {
  name: 'myCHEF',
  url: 'https://mychef.id',
  tagline: 'Luxury Hospitality — Bali',
  defaultLocale: 'en_US',
  region: 'Bali, Indonesia',
} as const

export type PillarSlug =
  | 'fine-dining'
  | 'catering'
  | 'events'
  | 'in-villa-service'
  | 'staffing'

export type LocationSlug =
  | 'seminyak'
  | 'canggu'
  | 'uluwatu'
  | 'ubud'
  | 'nusa-dua'
  | 'jimbaran'
  | 'sanur'
  | 'berawa'
  | 'pererenan'
  | 'bukit'

export interface SubPage {
  slug: string
  label: string
  h1: string
  title: string
  description: string
  keywords: string[]
}

export interface Pillar {
  slug: PillarSlug
  navLabel: string
  url: string
  h1: string
  title: string
  description: string
  intro: string
  accent: string
  ownsKeywords: string[]
  forbiddenKeywords: string[]
  subPages: SubPage[]
  relatedPillars: PillarSlug[]
  ctaPrimary: string
}

export interface LocationPage {
  slug: LocationSlug
  label: string
  h1: string
  title: string
  description: string
  intro: string
}

/* -----------------------------------------------------------------------
 * NAVIGATION (header)
 * --------------------------------------------------------------------- */

export const PRIMARY_NAV = [
  { href: '/fine-dining', label: 'Fine Dining' },
  { href: '/catering', label: 'Catering' },
  { href: '/events', label: 'Events' },
  { href: '/in-villa-service', label: 'In-Villa Service' },
  { href: '/staffing', label: 'Staffing' },
  { href: '/locations', label: 'Locations' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
] as const

export const PRIMARY_CTA = { href: '/book', label: 'Book' } as const

/* -----------------------------------------------------------------------
 * PILLARS
 * --------------------------------------------------------------------- */

export const PILLARS: Record<PillarSlug, Pillar> = {
  'fine-dining': {
    slug: 'fine-dining',
    navLabel: 'Fine Dining',
    url: '/fine-dining',
    h1: 'Private Chef Bali — In-Villa Fine Dining',
    title: 'Private Chef Bali | In-Villa Fine Dining — myCHEF',
    description:
      'Premium private chef experiences across Bali. Tasting menus, romantic villa dinners and chef’s tables — designed, plated and served in your villa.',
    intro:
      'Hire a private chef in Bali for an in-villa fine dining evening: a tasting menu cooked in your kitchen, served course by course, with full set-up, service and clean-up.',
    accent: '#C5A028',
    ownsKeywords: [
      'private chef bali',
      'in-villa dining bali',
      'tasting menu bali',
      'chefs table bali',
      'romantic dinner bali',
      'luxury villa dining bali',
      'personal chef bali',
    ],
    forbiddenKeywords: [
      'villa catering',
      'bbq catering',
      'buffet catering',
      'wedding',
      'event production',
    ],
    relatedPillars: ['in-villa-service', 'events'],
    ctaPrimary: 'Reserve Dinner',
    subPages: [
      {
        slug: 'private-chef-bali',
        label: 'Private Chef in Bali',
        h1: 'Private Chef in Bali — Hire a Chef for Your Villa',
        title: 'Private Chef in Bali | Hire a Chef for Your Villa — myCHEF',
        description:
          'Hire a private chef in Bali for in-villa dinners. Vetted chefs, plated service, all tableware included.',
        keywords: ['private chef bali', 'hire private chef bali', 'villa chef bali'],
      },
      {
        slug: 'tasting-menu',
        label: 'Tasting Menu',
        h1: 'Tasting Menu in Bali — Multi-Course Private Dining',
        title: 'Tasting Menu Bali | Multi-Course Private Dining — myCHEF',
        description:
          'A 7–11 course Mediterranean tasting menu plated in your villa with full service and wine pairing on request.',
        keywords: ['tasting menu bali', 'multi-course dinner bali', 'chef tasting menu villa'],
      },
      {
        slug: 'romantic-dinner',
        label: 'Romantic Dinner',
        h1: 'Romantic Dinner in Bali — Private Villa Date Night',
        title: 'Romantic Dinner Bali | Private Villa Date Night — myCHEF',
        description:
          'Honeymoon, anniversary, proposal. A private candlelit dinner for two in your Bali villa, prepared course-by-course.',
        keywords: ['romantic dinner bali', 'honeymoon dinner bali', 'proposal dinner bali villa'],
      },
      {
        slug: 'chefs-table',
        label: 'Chef’s Table',
        h1: 'Chef’s Table in Bali — Counter-Side Cooking Experience',
        title: 'Chef’s Table Bali | Counter-Side Private Dining — myCHEF',
        description:
          'A counter-side chef’s table experience in your villa. Watch the dishes built course by course in front of you.',
        keywords: ['chefs table bali', 'private chefs table villa', 'counter dining bali'],
      },
      {
        slug: 'menus',
        label: 'Our Menus',
        h1: 'Private Chef Menus in Bali',
        title: 'Private Chef Menus Bali | Riviera & Odyssey — myCHEF',
        description:
          'Browse the myCHEF private chef menus for Bali villas — Mediterranean tasting menus, seafood, plant-forward, and bespoke.',
        keywords: ['private chef menus bali', 'tasting menu pricing bali'],
      },
      {
        slug: 'our-chefs',
        label: 'Our Chefs',
        h1: 'Our Chefs — myCHEF Bali',
        title: 'Our Chefs Bali | Vetted Private Chefs — myCHEF',
        description:
          'Meet the chefs behind myCHEF. International training, Indonesian sourcing, plated for your villa.',
        keywords: ['private chef profile bali', 'chefs at mychef bali'],
      },
    ],
  },

  catering: {
    slug: 'catering',
    navLabel: 'Catering',
    url: '/catering',
    h1: 'Villa Catering Bali — BBQ, Buffet & Corporate',
    title: 'Villa Catering Bali | BBQ, Buffet & Corporate — myCHEF',
    description:
      'Villa catering across Bali — BBQ, buffet, drop-off, corporate, retreat and grazing tables. Built for groups of 8 to 200.',
    intro:
      'Catering for villas, groups, retreats and companies in Bali — buffets, BBQ, drop-off platters, grazing tables and full corporate catering, costed per head.',
    accent: '#6B8E5A',
    ownsKeywords: [
      'villa catering bali',
      'bbq catering bali',
      'buffet catering bali',
      'corporate catering bali',
      'retreat catering bali',
      'drop-off catering bali',
      'grazing tables bali',
    ],
    forbiddenKeywords: [
      'private chef',
      'tasting menu',
      'romantic dinner',
      'wedding planning',
    ],
    relatedPillars: ['events', 'in-villa-service'],
    ctaPrimary: 'Get Catering Quote',
    subPages: [
      {
        slug: 'villa-catering',
        label: 'Villa Catering',
        h1: 'Villa Catering in Bali — Group Meals at Your Villa',
        title: 'Villa Catering Bali | Group Catering at Your Villa — myCHEF',
        description:
          'Hire villa catering in Bali for groups of 8–200. Lunches, dinners, multi-day catering, plated or buffet.',
        keywords: ['villa catering bali', 'group catering villa bali'],
      },
      {
        slug: 'bbq-catering',
        label: 'BBQ Catering',
        h1: 'BBQ Catering in Bali — Villa BBQ for Groups',
        title: 'BBQ Catering Bali | Villa BBQ for Groups — myCHEF',
        description:
          'BBQ catering for Bali villas. Whole fish, prawns, ribs, skewers, salads, plated in your villa or by the pool.',
        keywords: ['bbq catering bali', 'villa bbq bali', 'pool bbq catering'],
      },
      {
        slug: 'buffet-catering',
        label: 'Buffet Catering',
        h1: 'Buffet Catering in Bali — Group Buffets for Villas',
        title: 'Buffet Catering Bali | Villa & Group Buffets — myCHEF',
        description:
          'Buffet catering for Bali villas, retreats and events — Mediterranean, Indonesian, fusion, plant-forward.',
        keywords: ['buffet catering bali', 'villa buffet bali'],
      },
      {
        slug: 'corporate-catering',
        label: 'Corporate Catering',
        h1: 'Corporate Catering in Bali — Offsites & Conferences',
        title: 'Corporate Catering Bali | Offsites & Conferences — myCHEF',
        description:
          'Corporate catering in Bali for offsites, board dinners, conferences and team retreats — invoiced, scalable, on time.',
        keywords: ['corporate catering bali', 'offsite catering bali', 'conference catering bali'],
      },
      {
        slug: 'retreat-catering',
        label: 'Retreat Catering',
        h1: 'Retreat Catering in Bali — Multi-Day Group Meals',
        title: 'Retreat Catering Bali | Multi-Day Group Meals — myCHEF',
        description:
          'Multi-day retreat catering in Bali — breakfast, lunch, dinner. Plant-forward, gluten-free, allergy-aware.',
        keywords: ['retreat catering bali', 'yoga retreat catering bali', 'wellness catering bali'],
      },
      {
        slug: 'drop-off-catering',
        label: 'Drop-Off Catering',
        h1: 'Drop-Off Catering in Bali — Delivered to Your Villa',
        title: 'Drop-Off Catering Bali | Delivered to Your Villa — myCHEF',
        description:
          'Drop-off catering across Bali — platters, family-style trays, grazing boxes, delivered chilled and ready to serve.',
        keywords: ['drop off catering bali', 'platter catering bali', 'delivery catering bali'],
      },
      {
        slug: 'grazing-tables',
        label: 'Grazing Tables',
        h1: 'Grazing Tables in Bali — Editorial Spreads for Villas',
        title: 'Grazing Tables Bali | Editorial Villa Spreads — myCHEF',
        description:
          'Editorial grazing tables for villa events in Bali. Cheese, charcuterie, seafood, antipasti, dressed for photography.',
        keywords: ['grazing tables bali', 'villa grazing table', 'charcuterie table bali'],
      },
      {
        slug: 'babi-guling',
        label: 'Babi Guling',
        h1: 'Babi Guling Villa Catering Bali — Whole Pig Feasts',
        title: 'Babi Guling Villa Catering Bali — myCHEF',
        description:
          'Authentic Babi Guling whole-pig feast delivered to your Bali villa. Small, medium, large packages with traditional sides.',
        keywords: ['babi guling catering bali', 'whole pig roast bali', 'balinese suckling pig villa'],
      },
      {
        slug: 'plated-catering',
        label: 'Plated Dinner',
        h1: 'Plated Set Menu Catering Bali — 3, 4, 5 Course',
        title: 'Plated Set Menu Catering Bali — myCHEF',
        description:
          'Plated set menu catering for Bali villa events. Three, four, or five courses from IDR 800K/pp. Chef + service manager included.',
        keywords: ['plated catering bali villa', 'plated dinner catering bali', 'private plated dinner bali'],
      },
      {
        slug: 'floating-breakfast',
        label: 'Floating Breakfast',
        h1: 'Floating Breakfast Bali — Villa Pool Tray Brunch',
        title: 'Floating Breakfast Bali — myCHEF',
        description:
          'Floating breakfast and brunch delivered to your Bali villa pool. Bamboo tray, tropical fruit, photo-ready setup.',
        keywords: ['floating breakfast bali', 'bali floating breakfast villa', 'floating brunch bali'],
      },
    ],
  },

  events: {
    slug: 'events',
    navLabel: 'Events',
    url: '/events',
    h1: 'Private Events in Bali — Weddings, Parties, Retreats',
    title: 'Private Events Bali | Weddings, Parties, Retreats — myCHEF',
    description:
      'Private event planning across Bali — villa weddings, birthdays, anniversaries, corporate events, retreats, baby showers and villa parties.',
    intro:
      'Full event design, coordination and production in Bali. We handle timeline, vendors, staffing and hospitality flow — food handled by our catering team.',
    accent: '#C5A028',
    ownsKeywords: [
      'private events bali',
      'villa wedding bali',
      'birthday party villa bali',
      'corporate event bali',
      'retreat bali',
      'baby shower villa bali',
      'villa party bali',
    ],
    forbiddenKeywords: ['private chef', 'tasting menu', 'recruitment'],
    relatedPillars: ['catering', 'in-villa-service'],
    ctaPrimary: 'Book Event Consultation',
    subPages: [
      {
        slug: 'weddings',
        label: 'Weddings',
        h1: 'Villa Weddings in Bali — Private Estate Weddings',
        title: 'Villa Weddings Bali | Private Estate Weddings — myCHEF',
        description:
          'Villa weddings in Bali — venue dressing, timeline, vendor coordination, full event hospitality, catering and staffing.',
        keywords: ['villa wedding bali', 'private wedding bali', 'estate wedding bali'],
      },
      {
        slug: 'birthdays',
        label: 'Birthdays',
        h1: 'Birthday Parties in Bali — Private Villa Birthdays',
        title: 'Birthday Parties Bali | Private Villa Birthdays — myCHEF',
        description:
          'Private birthday parties in Bali villas — milestone birthdays, surprise dinners, dessert and entertainment.',
        keywords: ['birthday party bali', 'villa birthday bali', '40th birthday villa bali'],
      },
      {
        slug: 'anniversaries',
        label: 'Anniversaries',
        h1: 'Anniversary Celebrations in Bali — Private Villa Evenings',
        title: 'Anniversary Celebrations Bali | Private Villa — myCHEF',
        description:
          'Plan an anniversary celebration in Bali. Private villa dinners, candlelit gardens, custom menus.',
        keywords: ['anniversary villa bali', 'anniversary dinner bali'],
      },
      {
        slug: 'corporate-events',
        label: 'Corporate Events',
        h1: 'Corporate Events in Bali — Offsites, Dinners & Conferences',
        title: 'Corporate Events Bali | Offsites & Dinners — myCHEF',
        description:
          'Corporate event planning in Bali — offsites, board dinners, leadership retreats, awards, conferences.',
        keywords: ['corporate event bali', 'offsite bali', 'board dinner bali'],
      },
      {
        slug: 'retreats',
        label: 'Retreats',
        h1: 'Retreats in Bali — Wellness, Leadership & Mastermind',
        title: 'Retreats Bali | Wellness & Leadership — myCHEF',
        description:
          'Production support for retreats in Bali — wellness, leadership, mastermind. Logistics, catering, staffing.',
        keywords: ['retreat bali', 'mastermind retreat bali', 'wellness retreat bali'],
      },
      {
        slug: 'baby-showers',
        label: 'Baby Showers',
        h1: 'Baby Showers in Bali — Private Villa Brunches',
        title: 'Baby Showers Bali | Private Villa Brunches — myCHEF',
        description:
          'Baby shower planning in Bali — private villa brunches, grazing tables, dessert stations, photographer-ready styling.',
        keywords: ['baby shower bali', 'villa baby shower bali'],
      },
      {
        slug: 'villa-parties',
        label: 'Villa Parties',
        h1: 'Villa Parties in Bali — Private Cocktail & Dinner Parties',
        title: 'Villa Parties Bali | Private Cocktail & Dinner — myCHEF',
        description:
          'Plan a private villa party in Bali — cocktail, dinner, after-party. Staff, bar, sound, hospitality flow.',
        keywords: ['villa party bali', 'cocktail party villa bali'],
      },
    ],
  },

  'in-villa-service': {
    slug: 'in-villa-service',
    navLabel: 'In-Villa Service',
    url: '/in-villa-service',
    h1: 'In-Villa Service Staff — Waiters, Butlers, Mixologists',
    title: 'In-Villa Service Staff Bali | Waiters, Butlers — myCHEF',
    description:
      'Short-term hospitality staff for Bali villas and events — waiters, butlers, bartenders, mixologists, sommeliers, hosts.',
    intro:
      'Per-shift service staff for villas, events and private homes in Bali. Uniformed, trained, briefed for your occasion.',
    accent: '#8B5A2B',
    ownsKeywords: [
      'waiter hire bali villa',
      'butler service bali',
      'bartender hire bali',
      'mixologist bali villa',
      'sommelier bali',
      'host hostess hire bali',
    ],
    forbiddenKeywords: ['long-term recruitment', 'placement', 'live-in chef'],
    relatedPillars: ['fine-dining', 'events'],
    ctaPrimary: 'Hire Staff',
    subPages: [
      {
        slug: 'waiters',
        label: 'Waiters',
        h1: 'Waiter Hire in Bali — Per-Shift Villa Waiters',
        title: 'Waiter Hire Bali | Per-Shift Villa Waiters — myCHEF',
        description:
          'Hire trained waiters in Bali for villa dinners, weddings and events. Uniformed, English-speaking, plated service.',
        keywords: ['waiter hire bali villa', 'private dinner waiter bali'],
      },
      {
        slug: 'butlers',
        label: 'Butlers',
        h1: 'Butler Service in Bali — Villa Butlers Per Shift',
        title: 'Butler Service Bali | Villa Butlers Per Shift — myCHEF',
        description:
          'Hire a butler in Bali for in-villa hosting, arrival service, guest experience and discreet anticipation.',
        keywords: ['butler service bali', 'villa butler bali'],
      },
      {
        slug: 'bartenders',
        label: 'Bartenders',
        h1: 'Bartender Hire in Bali — Villa Bartenders',
        title: 'Bartender Hire Bali | Villa Bartenders — myCHEF',
        description:
          'Hire a bartender for your Bali villa. Cocktails, glassware, ice, garnishes, full pour for parties and events.',
        keywords: ['bartender hire bali', 'villa bartender bali', 'cocktail bartender bali'],
      },
      {
        slug: 'mixology',
        label: 'Mixology',
        h1: 'Mixology in Bali — Private Villa Cocktail Programs',
        title: 'Mixology Bali | Private Villa Cocktail Programs — myCHEF',
        description:
          'Private mixology in Bali — bespoke cocktail menus, signature drinks, demonstrations, fresh-pressed builds.',
        keywords: ['mixologist bali villa', 'cocktail program bali', 'villa mixology bali'],
      },
      {
        slug: 'sommelier',
        label: 'Sommelier',
        h1: 'Sommelier Service in Bali — Villa Wine Pairings',
        title: 'Sommelier Bali | Villa Wine Pairings — myCHEF',
        description:
          'Hire a sommelier in Bali for villa dinners. Curated wine pairings, table service, cellar selection.',
        keywords: ['sommelier bali', 'wine pairing villa bali'],
      },
      {
        slug: 'host-hostess',
        label: 'Host & Hostess',
        h1: 'Host & Hostess Hire in Bali — Event & Villa Reception',
        title: 'Host & Hostess Hire Bali | Event Reception — myCHEF',
        description:
          'Hosts and hostesses for villa events, weddings and corporate functions in Bali. Welcome service, guest direction.',
        keywords: ['host hostess hire bali', 'event reception bali'],
      },
    ],
  },

  staffing: {
    slug: 'staffing',
    navLabel: 'Staffing',
    url: '/staffing',
    h1: 'Hospitality Staffing & Placement Bali',
    title: 'Hospitality Staffing Bali | Chef & Villa Staff Placement',
    description:
      'Long-term hospitality recruitment in Bali — private chefs, live-in chefs, villa staff, household staff, placements for hotels and restaurants.',
    intro:
      'Recruitment and placement for villa owners, villa managers, hotels and private households across Bali — vetted, briefed, contracted.',
    accent: '#C5A028',
    ownsKeywords: [
      'hospitality staffing bali',
      'villa staff bali',
      'private chef placement bali',
      'live-in chef bali',
      'household staff bali',
      'hotel recruitment bali',
    ],
    forbiddenKeywords: ['per-shift hire', 'waiter hire', 'event staff'],
    relatedPillars: ['in-villa-service', 'fine-dining'],
    ctaPrimary: 'Request Candidate Profiles',
    subPages: [
      {
        slug: 'private-chef-placement',
        label: 'Private Chef Placement',
        h1: 'Private Chef Placement in Bali — Recruitment for Villas',
        title: 'Private Chef Placement Bali | Villa Recruitment — myCHEF',
        description:
          'Long-term private chef placement in Bali. Profiles, trials, contracts, payroll guidance.',
        keywords: ['private chef placement bali', 'hire long term chef bali'],
      },
      {
        slug: 'live-in-chef',
        label: 'Live-In Chef',
        h1: 'Live-In Chef in Bali — Full-Time Villa Chef Placement',
        title: 'Live-In Chef Bali | Full-Time Villa Chef — myCHEF',
        description:
          'Find a live-in chef in Bali. Pre-vetted candidates, trial dinners, structured onboarding.',
        keywords: ['live in chef bali', 'full time chef villa bali'],
      },
      {
        slug: 'villa-staff',
        label: 'Villa Staff',
        h1: 'Villa Staff Placement in Bali — Managers, Hosts, Housekeepers',
        title: 'Villa Staff Placement Bali | Managers & Housekeepers — myCHEF',
        description:
          'Recruit villa staff in Bali — managers, hosts, housekeepers, gardeners, pool, security. Vetted and trained.',
        keywords: ['villa staff bali', 'villa manager recruitment bali'],
      },
      {
        slug: 'household-staff',
        label: 'Household Staff',
        h1: 'Household Staff Placement in Bali — Private Estates',
        title: 'Household Staff Bali | Private Estate Recruitment — myCHEF',
        description:
          'Household staff recruitment in Bali for private residences — nannies, drivers, housekeepers, head of house.',
        keywords: ['household staff bali', 'nanny driver bali', 'estate staff bali'],
      },
      {
        slug: 'for-villa-managers',
        label: 'For Villa Managers',
        h1: 'For Villa Managers — Staffing Partner for Bali Villas',
        title: 'Staffing for Villa Managers Bali | myCHEF',
        description:
          'Villa managers: outsource your hospitality hiring to myCHEF. Pre-vetted chefs and front-of-house staff.',
        keywords: ['villa manager staffing bali', 'staffing partner villa bali'],
      },
      {
        slug: 'for-hotels-restaurants',
        label: 'For Hotels & Restaurants',
        h1: 'For Hotels & Restaurants — Hospitality Recruitment in Bali',
        title: 'Hotels & Restaurants Staffing Bali | myCHEF',
        description:
          'Hospitality recruitment in Bali for boutique hotels, restaurants and resorts. Kitchen, service, management.',
        keywords: ['hotel staffing bali', 'restaurant staffing bali'],
      },
    ],
  },
}

/* -----------------------------------------------------------------------
 * LOCATIONS
 * --------------------------------------------------------------------- */

export const LOCATIONS: Record<LocationSlug, LocationPage> = {
  seminyak: {
    slug: 'seminyak',
    label: 'Seminyak',
    h1: 'Private Chef Seminyak — Fine Dining, Catering & Events',
    title: 'Private Chef Seminyak | Fine Dining, Catering & Events — myCHEF',
    description:
      'Hire a private chef, catering team or full event production in Seminyak. Villa logistics, beachside service, fine dining and group catering.',
    intro:
      'Seminyak is myCHEF’s most-served area. Tight access roads, mature villa stock, late-night catering allowed in most estates.',
  },
  canggu: {
    slug: 'canggu',
    label: 'Canggu',
    h1: 'Private Chef Canggu — Villa Dining & Group Catering',
    title: 'Private Chef Canggu | Villa Dining & Group Catering — myCHEF',
    description:
      'Private chef and catering in Canggu. Plant-forward menus, group BBQs and full event production for villas, retreats and creatives.',
    intro:
      'Canggu villas tend to be open-plan with outdoor kitchens. We bring full setup, including portable plating stations.',
  },
  uluwatu: {
    slug: 'uluwatu',
    label: 'Uluwatu',
    h1: 'Private Chef Uluwatu — Clifftop & Villa Fine Dining',
    title: 'Private Chef Uluwatu | Clifftop Villa Dining — myCHEF',
    description:
      'Clifftop private chef service in Uluwatu. Sunset tasting menus, weddings, retreats, full event production.',
    intro:
      'Uluwatu access takes longer. We arrive 90–120 minutes earlier to allow for clifftop logistics and sunset timing.',
  },
  ubud: {
    slug: 'ubud',
    label: 'Ubud',
    h1: 'Private Chef Ubud — Jungle Villa Dining & Retreats',
    title: 'Private Chef Ubud | Jungle Villa Dining & Retreats — myCHEF',
    description:
      'Private chef Ubud — plant-forward menus, retreat catering, multi-day wellness, weddings in jungle villas.',
    intro:
      'Ubud is our retreat hub. Strong plant-forward menus, organic sourcing, multi-day catering at scale.',
  },
  'nusa-dua': {
    slug: 'nusa-dua',
    label: 'Nusa Dua',
    h1: 'Private Chef Nusa Dua — Resort Villa Fine Dining & Events',
    title: 'Private Chef Nusa Dua | Resort Villa Dining — myCHEF',
    description:
      'Private chef and event catering in Nusa Dua. Resort-grade plated service, beachfront dinners, corporate offsites.',
    intro:
      'Nusa Dua is structured, resort-style. We coordinate gate access, security and on-property service teams.',
  },
  jimbaran: {
    slug: 'jimbaran',
    label: 'Jimbaran',
    h1: 'Private Chef Jimbaran — Bayfront Villa Dining & Seafood',
    title: 'Private Chef Jimbaran | Bayfront Villa Dining — myCHEF',
    description:
      'Private chef and catering in Jimbaran. Seafood-forward menus, bayfront villa dinners and weddings.',
    intro:
      'Jimbaran is our seafood-heavy area. Whole fish, lobster, prawns, fresh daily.',
  },
  sanur: {
    slug: 'sanur',
    label: 'Sanur',
    h1: 'Private Chef Sanur — Quiet Villa Dining & Family Events',
    title: 'Private Chef Sanur | Quiet Villa Dining — myCHEF',
    description:
      'Private chef and event catering in Sanur. Family-friendly menus, quieter villas, multi-generational dining.',
    intro:
      'Sanur is our quietest area — relaxed pace, family-friendly service, longer dinners, slower courses.',
  },
  berawa: {
    slug: 'berawa',
    label: 'Berawa',
    h1: 'Private Chef Berawa — Villa Dining & Beach Club Events',
    title: 'Private Chef Berawa | Villa Dining & Events — myCHEF',
    description:
      'Private chef and catering in Berawa, Bali. Modern villas, beach club events, and group dining for 20–80 guests.',
    intro:
      'Berawa villas are modern, well-equipped, and built for entertaining. We cook villa parties, birthday dinners, and Mediterranean menus.',
  },
  pererenan: {
    slug: 'pererenan',
    label: 'Pererenan',
    h1: 'Private Chef Pererenan — Design Villas & Intimate Dining',
    title: 'Private Chef Pererenan | Design Villa Dining — myCHEF',
    description:
      'Private chef in Pererenan, Bali. Quiet, design-forward villas, romantic dinners, small-group fine dining, and weekly meal prep.',
    intro:
      'Pererenan is what Canggu was five years ago — quieter, more design-led, and full of new villas with great kitchens.',
  },
  bukit: {
    slug: 'bukit',
    label: 'Bukit Peninsula',
    h1: 'Private Chef Bukit Peninsula — Clifftop Villa Fine Dining',
    title: 'Private Chef Bukit Peninsula | Clifftop Dining — myCHEF',
    description:
      'Private chef and event catering in the Bukit Peninsula — Bingin, Padang Padang, Ungasan. Clifftop fine dining for elopements and celebrations.',
    intro:
      'The Bukit Peninsula is Bali\'s premium clifftop region. We cook fine dining for elopements, surf-trip groups, and milestone celebrations.',
  },
}

/* -----------------------------------------------------------------------
 * JOURNAL
 * --------------------------------------------------------------------- */

export const JOURNAL_CATEGORIES = [
  { slug: 'menu-showcases', label: 'Menu Showcases', parentPillar: 'fine-dining' },
  { slug: 'buyer-guides', label: 'Buyer Guides', parentPillar: 'fine-dining' },
  { slug: 'location-guides', label: 'Location Guides', parentPillar: 'fine-dining' },
  { slug: 'villa-dining-guides', label: 'Villa Dining Guides', parentPillar: 'fine-dining' },
  { slug: 'event-planning-guides', label: 'Event Planning Guides', parentPillar: 'events' },
  { slug: 'staffing-guides', label: 'Staffing Guides', parentPillar: 'staffing' },
] as const

export const JOURNAL_POSTS = [
  {
    slug: 'how-to-hire-a-private-chef-in-bali',
    title: 'How to Hire a Private Chef in Bali — A Complete Guide',
    description: 'Everything you need to know about hiring a private chef in Bali — from vetting and pricing to menu planning and dietary needs.',
    category: 'buyer-guides',
    date: '2026-04-15',
  },
  {
    slug: 'villa-bbq-bali-costs-menus-booking',
    title: 'Villa BBQ in Bali — Costs, Menus & How to Book',
    description: 'Planning a villa BBQ in Bali? Here’s what it costs, what’s on the menu, and how to book the right catering team.',
    category: 'menu-showcases',
    date: '2026-04-22',
  },
  {
    slug: 'hiring-a-live-in-chef-bali',
    title: 'Hiring a Live-In Chef in Bali — What to Expect',
    description: 'A practical guide to hiring a full-time live-in chef in Bali — salaries, contracts, trials, and villa kitchen requirements.',
    category: 'staffing-guides',
    date: '2026-05-01',
  },
] as const

/* -----------------------------------------------------------------------
 * HELPERS
 * --------------------------------------------------------------------- */

export function getPillarBySlug(slug: string): Pillar | undefined {
  return PILLARS[slug as PillarSlug]
}

export function getSubPage(pillarSlug: string, subSlug: string): SubPage | undefined {
  const pillar = getPillarBySlug(pillarSlug)
  return pillar?.subPages.find((s) => s.slug === subSlug)
}

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return LOCATIONS[slug as LocationSlug]
}

export function getJournalPostBySlug(slug: string) {
  return JOURNAL_POSTS.find((p) => p.slug === slug)
}

export function getAllSubPages(): { pillar: Pillar; subPage: SubPage; path: string }[] {
  const out: { pillar: Pillar; subPage: SubPage; path: string }[] = []
  Object.values(PILLARS).forEach((pillar) => {
    pillar.subPages.forEach((subPage) => {
      out.push({ pillar, subPage, path: `${pillar.url}/${subPage.slug}` })
    })
  })
  return out
}

export function getAllLocationPaths(): { location: LocationPage; path: string }[] {
  return Object.values(LOCATIONS).map((location) => ({
    location,
    path: `/locations/${location.slug}`,
  }))
}
