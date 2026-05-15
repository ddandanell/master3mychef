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
  { href: '/about', label: 'About' },
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
        slug: 'bbq-catering',
        label: 'BBQ Catering',
        h1: 'BBQ Catering in Bali — Villa BBQ for Groups',
        title: 'BBQ Catering Bali | Villa BBQ for Groups — myCHEF',
        description:
          'BBQ catering for Bali villas. Whole fish, prawns, ribs, skewers, salads, plated in your villa or by the pool.',
        keywords: ['bbq catering bali', 'villa bbq bali', 'pool bbq catering'],
      },
      {
        slug: 'buffet',
        label: 'Buffet Catering',
        h1: 'Buffet Catering in Bali — Group Buffets for Villas',
        title: 'Buffet Catering Bali | Villa & Group Buffets — myCHEF',
        description:
          'Buffet catering for Bali villas, retreats and events — Mediterranean, Indonesian, fusion, plant-forward.',
        keywords: ['buffet catering bali', 'villa buffet bali'],
      },
      {
        slug: 'plated-catering',
        label: 'Plated Set Menu',
        h1: 'Plated Set Menu Catering Bali — 3, 4, 5 Course',
        title: 'Plated Set Menu Catering Bali — myCHEF',
        description:
          'Plated set menu catering for Bali villa events. Three, four, or five courses from IDR 800K/pp. Chef + service manager included.',
        keywords: ['plated catering bali villa', 'plated dinner catering bali', 'private plated dinner bali'],
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
        slug: 'babi-guling',
        label: 'Babi Guling',
        h1: 'Babi Guling Villa Catering Bali — Whole Pig Feasts',
        title: 'Babi Guling Villa Catering Bali — myCHEF',
        description:
          'Authentic Babi Guling whole-pig feast delivered to your Bali villa. Small, medium, large packages with traditional sides.',
        keywords: ['babi guling catering bali', 'whole pig roast bali', 'balinese suckling pig villa'],
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
      'myCHEF handles polished villa dining in Seminyak, from sunset seafood dinners near Petitenget to private suppers after beach-club afternoons. We time chef arrivals around Oberoi traffic, source quickly from premium nearby suppliers, and keep service sharp inside compact luxury villas.',
  },
  canggu: {
    slug: 'canggu',
    label: 'Canggu',
    h1: 'Private Chef Canggu — Villa Dining & Group Catering',
    title: 'Private Chef Canggu | Villa Dining & Group Catering — myCHEF',
    description:
      'Private chef and catering in Canggu. Plant-forward menus, group BBQs and full event production for villas, retreats and creatives.',
    intro:
      'In Canggu, myCHEF cooks for surf groups, digital nomads, and long-stay families across Batu Bolong, Berawa, and the villa lanes behind the beach. We set up poolside breakfasts, relaxed sharing feasts, and dinner service that works in open-plan kitchens where boards, kids, and laptops are all part of the scene.',
  },
  uluwatu: {
    slug: 'uluwatu',
    label: 'Uluwatu',
    h1: 'Private Chef Uluwatu — Clifftop & Villa Fine Dining',
    title: 'Private Chef Uluwatu | Clifftop Villa Dining — myCHEF',
    description:
      'Clifftop private chef service in Uluwatu. Sunset tasting menus, weddings, retreats, full event production.',
    intro:
      'myCHEF serves Uluwatu’s clifftop estates with sunset-timed dinners, post-surf recovery lunches, and event catering built for oceanfront setups. We arrive early for lift access, wind exposure, and terrace plating so the view, timing, and service all land together.',
  },
  ubud: {
    slug: 'ubud',
    label: 'Ubud',
    h1: 'Private Chef Ubud — Jungle Villa Dining & Retreats',
    title: 'Private Chef Ubud | Jungle Villa Dining & Retreats — myCHEF',
    description:
      'Private chef Ubud — plant-forward menus, retreat catering, multi-day wellness, weddings in jungle villas.',
    intro:
      'Ubud bookings lean wellness-led, retreat-based, and design-conscious, so myCHEF builds plant-forward menus, Balinese feasts, and multi-day retreat meal plans around the valley villas. We coordinate early market runs, longer jungle transfers, and quiet, polished service that fits the pace of the area.',
  },
  'nusa-dua': {
    slug: 'nusa-dua',
    label: 'Nusa Dua',
    h1: 'Private Chef Nusa Dua — Resort Villa Fine Dining & Events',
    title: 'Private Chef Nusa Dua | Resort Villa Dining — myCHEF',
    description:
      'Private chef and event catering in Nusa Dua. Resort-grade plated service, beachfront dinners, corporate offsites.',
    intro:
      'In Nusa Dua, myCHEF delivers resort-grade villa dining for family compounds, corporate offsites, and polished multi-course dinners inside secure estates. We coordinate gate clearance, staff passes, and larger service brigades so guests get five-star pacing without leaving the villa.',
  },
  jimbaran: {
    slug: 'jimbaran',
    label: 'Jimbaran',
    h1: 'Private Chef Jimbaran — Bayfront Villa Dining & Seafood',
    title: 'Private Chef Jimbaran | Bayfront Villa Dining — myCHEF',
    description:
      'Private chef and catering in Jimbaran. Seafood-forward menus, bayfront villa dinners and weddings.',
    intro:
      'In Jimbaran, myCHEF builds seafood-led villa dinners, beachside BBQs, and intimate sunset suppers for guests staying between the bay and the clifftop resorts. We source from the morning catch, handle smoke-friendly grill setups, and plate polished meals that feel more private than the beach restaurants below.',
  },
  sanur: {
    slug: 'sanur',
    label: 'Sanur',
    h1: 'Private Chef Sanur — Quiet Villa Dining & Family Events',
    title: 'Private Chef Sanur | Quiet Villa Dining — myCHEF',
    description:
      'Private chef and event catering in Sanur. Family-friendly menus, quieter villas, multi-generational dining.',
    intro:
      'Sanur bookings are slower-paced and family-led, so myCHEF designs sunrise breakfasts, elegant seafood dinners, and multi-generational villa meals that suit children, grandparents, and dietary needs in one service. We work around relaxed east-coast schedules with calm staffing, earlier dining times, and menus that feel refined without being heavy.',
  },
  berawa: {
    slug: 'berawa',
    label: 'Berawa',
    h1: 'Private Chef Berawa — Villa Dining & Beach Club Events',
    title: 'Private Chef Berawa | Villa Dining & Events — myCHEF',
    description:
      'Private chef and catering in Berawa, Bali. Modern villas, beach club events, and group dining for 20–80 guests.',
    intro:
      'In Berawa, myCHEF serves surf-villa groups, wellness-minded families, and stylish birthday dinners in modern villas just north of Canggu. We build lighter Mediterranean menus, high-protein brunches, and cocktail-friendly sharing feasts that fit the area\'s health-conscious, social crowd.',
  },
  pererenan: {
    slug: 'pererenan',
    label: 'Pererenan',
    h1: 'Private Chef Pererenan — Design Villas & Intimate Dining',
    title: 'Private Chef Pererenan | Design Villa Dining — myCHEF',
    description:
      'Private chef in Pererenan, Bali. Quiet, design-forward villas, romantic dinners, small-group fine dining, and weekly meal prep.',
    intro:
      'Pererenan calls for quieter, design-led service, and myCHEF delivers romantic dinners, chef-table evenings, and discreet multi-day meal plans inside architect-designed villas near the surf. We handle harder-to-reach addresses, privacy-sensitive setups, and polished service for guests who chose Pererenan precisely because it feels more removed.',
  },
  bukit: {
    slug: 'bukit',
    label: 'Bukit Peninsula',
    h1: 'Private Chef Bukit Peninsula — Clifftop Villa Fine Dining',
    title: 'Private Chef Bukit Peninsula | Clifftop Dining — myCHEF',
    description:
      'Private chef and event catering in the Bukit Peninsula — Bingin, Padang Padang, Ungasan. Clifftop fine dining for elopements and celebrations.',
    intro:
      'Across the Bukit Peninsula, myCHEF runs clifftop dining, surf-group feasts, and milestone celebrations for villas in Bingin, Pecatu, Padang Padang, and Ungasan. We plan around wind, lift access, and dramatic terrace layouts so the food, service, and sunset timing all feel intentional.',
  },
}

/* -----------------------------------------------------------------------
 * JOURNAL
 * --------------------------------------------------------------------- */

export interface JournalCategory {
  slug: string
  label: string
  parentPillar: PillarSlug
}

export interface JournalPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  content: string
}

export const JOURNAL_CATEGORIES: readonly JournalCategory[] = [
  { slug: 'menu-showcases', label: 'Menu Showcases', parentPillar: 'fine-dining' },
  { slug: 'buyer-guides', label: 'Buyer Guides', parentPillar: 'fine-dining' },
  { slug: 'location-guides', label: 'Location Guides', parentPillar: 'fine-dining' },
  { slug: 'villa-dining-guides', label: 'Villa Dining Guides', parentPillar: 'fine-dining' },
  { slug: 'event-planning-guides', label: 'Event Planning Guides', parentPillar: 'events' },
  { slug: 'staffing-guides', label: 'Staffing Guides', parentPillar: 'staffing' },
  { slug: 'chef-stories', label: 'Chef Stories', parentPillar: 'fine-dining' },
  { slug: 'hosting-tips', label: 'Hosting Tips', parentPillar: 'events' },
  { slug: 'locations', label: 'Locations', parentPillar: 'fine-dining' },
  { slug: 'cost-value', label: 'Cost & Value', parentPillar: 'catering' },
  { slug: 'events', label: 'Events', parentPillar: 'events' },
  { slug: 'our-team', label: 'Our Team', parentPillar: 'fine-dining' },
  { slug: 'menus', label: 'Menus', parentPillar: 'catering' },
]

export const JOURNAL_POSTS: readonly JournalPost[] = [
  {
    slug: 'private-chef-cost-bali',
    title: 'How Much Does a Private Chef Cost in Bali? (2025 Guide)',
    excerpt:
      'Private chef pricing in Bali depends on guest count, menu complexity, service style, and whether wine pairing is included. This 2025 guide explains what you actually pay for and when villa dining can outperform a restaurant booking on value.',
    date: '2025-05-12',
    category: 'buyer-guides',
    readTime: '6 min read',
    content: `<p>In Bali, private chef pricing usually moves with four variables: number of guests, menu ambition, staffing requirements, and how much production is needed in the villa kitchen. A simple family-style dinner costs less than a plated tasting menu with service staff, glassware, and multiple courses.</p><p>For couples and small groups, the number can feel premium at first glance. But once you compare restaurant transport, beverage markup, service charges, and the privacy of staying in your villa, the gap narrows quickly — especially for celebrations.</p><p>The biggest pricing mistake guests make is comparing only headline menu prices. The better comparison is all-in value: menu design, ingredient sourcing, chef travel, setup, service flow, cleanup, and dietary customization without friction.</p><p>If you want a realistic quote, send your villa location, date, guest count, and preferred style of meal. That gives the clearest way to compare a relaxed villa dinner, a premium BBQ, and a full fine-dining experience.</p>`,
  },
  {
    slug: 'villa-catering-seminyak',
    title: 'The Best Villa Catering in Seminyak — What to Expect',
    excerpt:
      'Seminyak villa catering works best when the team understands tight villa access, polished service timing, and menus that suit mixed groups. Here is what to expect when booking catering in one of Bali\'s busiest luxury neighborhoods.',
    date: '2025-04-28',
    category: 'location-guides',
    readTime: '5 min read',
    content: `<p>Seminyak is one of the easiest areas in Bali for stylish private hosting, but it also punishes weak logistics. Traffic, villa access, and narrow service windows mean your caterer has to think like an operator, not just a cook.</p><p>The strongest Seminyak catering setups arrive with a clear run sheet: arrival time, kitchen assessment, plating plan, service staffing, and a menu that fits the villa rather than fighting it. That matters for rooftop dinners, poolside BBQs, and events where guests arrive in waves.</p><p>Expect the best teams to offer menu flexibility without losing structure. A good villa menu should work for international guests, children, dietary restrictions, and tropical weather — which usually means lighter starters, reliable mains, and desserts that travel well.</p><p>If your villa is in Seminyak, ask specifically about setup timing, cleanup, and whether service staff are included. Those details are what separate a smooth evening from a stressful one.</p>`,
  },
  {
    slug: 'bali-wedding-catering-guide',
    title: 'Planning a Wedding in Bali: Chef & Catering Guide',
    excerpt:
      'Bali wedding catering is not only about food — it is about production, timing, guest flow, and handling multiple service moments without stress. This guide covers how chefs, staffing, and menu planning fit into a wedding weekend.',
    date: '2025-03-18',
    category: 'event-planning-guides',
    readTime: '7 min read',
    content: `<p>Wedding catering in Bali usually starts long before the reception meal. Welcome dinners, bridal lunches, recovery brunches, and late-night snacks all shape the guest experience, which is why the right catering partner thinks across the full event timeline.</p><p>The best wedding teams build menus around service format first. Plated dinners demand a disciplined kitchen and floor team. Shared-style feasts create warmth and speed. Live stations add theatre, but only when the venue flow supports them.</p><p>Chef planning also matters for guest mix. International weddings often need a menu that feels destination-worthy without becoming too experimental. That is where a blend of Mediterranean crowd-pleasers, Indonesian highlights, and allergy-aware execution usually performs best.</p><p>Before you book, confirm guest count ranges, rain plans, staffing ratios, and power or kitchen limitations at the venue. Those operational details are what protect the romance of the day.</p>`,
  },
  {
    slug: 'indonesian-vs-mediterranean-menu',
    title: 'Indonesian vs Mediterranean Menu: Which for Your Villa?',
    excerpt:
      'Choosing between an Indonesian and Mediterranean villa menu is usually a question of atmosphere, guest familiarity, and how interactive you want the meal to feel. Both can be excellent — the right choice depends on the kind of night you want to host.',
    date: '2025-02-21',
    category: 'menu-showcases',
    readTime: '5 min read',
    content: `<p>An Indonesian menu tends to feel generous, aromatic, and rooted in place. It works beautifully for guests who want Bali to show up on the table — satay, sambals, grilled seafood, ceremonial dishes, and family-style sharing.</p><p>Mediterranean menus usually feel lighter, more polished, and more familiar to mixed international groups. Handmade pasta, grilled fish, bright salads, and olive-oil-led flavours make them especially strong for birthdays, anniversaries, and villa dinners with wine.</p><p>Think about your guest list before you decide. If the group wants a local sense of occasion, Indonesian dishes often create the stronger memory. If you need broad appeal with a premium visual finish, Mediterranean menus are usually the safer choice.</p><p>The strongest answer is often a hybrid. Many villa hosts choose Mediterranean structure with one or two Indonesian signatures so the dinner feels both elevated and unmistakably Bali.</p>`,
  },
  {
    slug: 'adriano-michelin-trained-chef-bali',
    title: 'Michelin-Trained in Bali: The Story of Adriano & myCHEF',
    excerpt:
      'Adriano brought Michelin-trained discipline to Bali, but the myCHEF story is really about building a local brigade that can deliver that standard in villas. This is how his background shaped the company and why guests notice it on the plate.',
    date: '2025-01-30',
    category: 'chef-stories',
    readTime: '6 min read',
    content: `<p>Adriano's training gave him a bias toward precision: mise en place, pacing, repetition, and respect for ingredients. What changed in Bali was the setting. Instead of a fixed restaurant pass, he had to build consistency inside dozens of private kitchens with different equipment, layouts, and service rhythms.</p><p>That challenge became the foundation of myCHEF. Rather than relying on imported talent, he built systems and trained Indonesian chefs to execute at a premium level in villas, events, and private residences across the island.</p><p>Guests experience that in subtle ways: cleaner timing between courses, better communication, sharper plating, and a team that feels calm inside someone else's home. The luxury is not only the food — it is the control behind it.</p><p>That combination of European discipline and Bali-based hospitality is what turned myCHEF from a single-chef service into a trusted private dining brand.</p>`,
  },
  {
    slug: 'bali-villa-dinner-party-guide',
    title: 'How to Host a Villa Dinner Party in Bali (Complete Guide)',
    excerpt:
      'A great Bali villa dinner party comes down to matching the menu, service style, and setup to your villa. This guide covers what to confirm before the chef arrives so the evening feels effortless for guests and hosts alike.',
    date: '2025-05-18',
    category: 'hosting-tips',
    readTime: '6 min read',
    content: `<p>Start with the shape of the night, not the menu. For six to ten guests, a plated dinner or chef's table creates the strongest sense of occasion. For larger birthdays or mixed-age groups, a shared feast, premium BBQ, or buffet usually works better because people can move, swim, and eat on their own rhythm without the service feeling delayed.</p><p>Before you confirm anything, ask your villa manager for four details: dining table capacity, kitchen condition, parking or loading access, and quiet-hour rules. In Bali, those practical details matter more than hosts expect. A villa with a small kitchen can still deliver a beautiful dinner, but the chef may need more prep time, extra tables, or a menu designed around fewer last-minute components.</p><p>Choose dishes that suit the weather and your guests. Seafood, grilled meats, bright salads, and tropical desserts perform well in Bali's heat. If children or older relatives are joining, it helps to include one familiar main and one lighter starter. Ask for dietary notes early, especially allergies, pregnancy restrictions, halal requirements, and whether anyone wants low-spice food.</p><p>The smoothest villa dinners run on a simple timeline: chef arrival two to three hours before service, cocktails at sunset, dinner just after dark, then full cleanup before the night ends. If you are hosting in rainy season, confirm a covered dining backup and where staff can plate if the terrace becomes unusable. That one step can save the entire evening.</p>`,
  },
  {
    slug: 'private-chef-ubud-retreat',
    title: 'Hiring a Private Chef for Your Ubud Retreat',
    excerpt:
      'Retreat catering in Ubud is not just about healthy food. You need a chef who can work around early yoga sessions, jungle logistics, and changing dietary requests without disrupting the calm of the retreat schedule.',
    date: '2025-05-20',
    category: 'locations',
    readTime: '5 min read',
    content: `<p>Ubud retreat guests usually remember three things: how the villa felt, how the schedule flowed, and whether the food supported the experience. A private chef for a retreat should therefore think beyond individual meals. Breakfast must be ready after yoga, snacks need to appear before workshops without fuss, and dinner should feel restorative rather than heavy.</p><p>When comparing chefs, ask how they handle multi-day menu rotation. The best retreat teams build variety across proteins, vegetables, grains, and hydration-friendly dishes so guests do not feel they are eating the same 'healthy bowl' every day. Good Ubud retreat menus also account for humidity and travel fatigue, with lighter lunches, strong coffee service, and thoughtful vegetarian or gluten-free options that still feel generous.</p><p>Logistics in Ubud matter more than in Seminyak or Canggu. Deliveries can take longer, some villas sit on narrow access roads, and morning ceremonies or sound restrictions may affect timing. A professional chef will ask about the villa kitchen, staff entrance, refrigerator space, and daily schedule before finalizing the menu.</p><p>If your retreat includes eight or more guests, consider whether you need one chef, a chef plus assistant, or full service staff for certain meals. That staffing decision often matters more than the menu itself because it determines whether service feels calm and seamless or rushed and visible.</p>`,
  },
  {
    slug: 'bali-catering-vs-restaurant',
    title: 'Villa Catering vs Bali Restaurants: Which Is Worth It?',
    excerpt:
      'For Bali villa guests, the real comparison is not menu price alone. It is total cost, comfort, transport, drinks, privacy, and whether your group will actually enjoy leaving the villa at the best part of the day.',
    date: '2025-05-22',
    category: 'cost-value',
    readTime: '6 min read',
    content: `<p>Restaurants are still the right choice when your group is small, spontaneous, and wants the atmosphere of a busy room. If you are two people staying near a strong dining strip and you want to bar-hop afterward, going out makes perfect sense. Bali has excellent restaurants, and part of the fun can be seeing the scene.</p><p>Villa catering becomes much stronger once you have a group, children, older parents, or a schedule built around the villa itself. No transfers, no waiting for late guests, no splitting taxis after drinks, and no pressure to finish because another booking is coming in. That convenience is not just luxury — it can be the difference between a relaxed celebration and an evening spent managing logistics.</p><p>To compare value properly, add everything up. Restaurant transport, service charge, tax, corkage, babysitting, and drinks often narrow the gap faster than people expect. In-villa dining also gives you menu flexibility, easier allergy management, and the ability to shape the evening around sunset, pool time, or a birthday speech without worrying about disturbing other tables.</p><p>The best question is not 'which is cheaper?' but 'what experience are we buying?' For couples chasing energy and nightlife, restaurants often win. For groups of six or more, villa guests usually decide catering was worth it the moment the first course arrives and nobody has had to leave the pool early to beat traffic.</p>`,
  },
  {
    slug: 'wedding-catering-bali-cost',
    title: 'Bali Wedding Catering Cost: What to Budget in 2025',
    excerpt:
      'Wedding catering budgets in Bali depend heavily on service style, guest count, and venue limitations. Here is how to think about food spend in 2025 without getting surprised by staffing, rentals, or tax.',
    date: '2025-05-24',
    category: 'events',
    readTime: '7 min read',
    content: `<p>In 2025, Bali wedding catering usually starts with service style. A relaxed buffet or shared-style dinner can land in a very different range from a plated multi-course reception because staffing, plating equipment, and kitchen pressure all change. As a rule of thumb, couples should expect buffet and family-style menus to start lower, while plated dinners with premium proteins, canapés, and dessert service push the budget up quickly.</p><p>The hidden costs are rarely the food itself. Staffing ratios, rentals, glassware, ice, cake plating, coffee service, generator support, and transport to hard-to-access villas can all change the total. Many Bali venues also have limited kitchen infrastructure, so your caterer may need prep tents, hot boxes, or extra labor simply to execute the same menu cleanly.</p><p>It also helps to budget the wedding weekend, not just the reception. Welcome drinks, recovery brunches, family dinners, and vendor meals often add meaningful spend but are easier to plan when included from the start. If your guest list may move, ask for pricing in tiers such as 40, 60, and 80 guests so you can see how per-head economics change.</p><p>For a realistic 2025 conversation, ask for a proposal that separates food, staffing, rentals, tax, and service charge. Once those are listed clearly, it becomes much easier to decide whether you want a simpler menu with better service, or a more ambitious culinary experience with a bigger production footprint.</p>`,
  },
  {
    slug: 'indonesian-chef-bali-villa',
    title: 'What Makes a Great Indonesian Private Chef? Our Hiring Standards',
    excerpt:
      "The best Indonesian private chefs do far more than cook well. They manage unfamiliar villa kitchens, read guests quickly, communicate clearly, and deliver restaurant-level calm inside someone else's home.",
    date: '2025-05-26',
    category: 'our-team',
    readTime: '6 min read',
    content: `<p>Technical skill comes first, but it is only the start. A strong Indonesian private chef needs command of fundamentals such as butchery, sauces, seasoning, and timing, yet villa work adds another test: can they execute those skills in a kitchen they have never seen before, with limited equipment, while guests are walking in and out of the room?</p><p>We also look hard at hospitality behavior. Private chefs work inside people's holidays, not behind a restaurant door. That means cleanliness, quiet confidence, allergy awareness, communication with villa staff, and the ability to adapt when a child suddenly wants plain pasta or a guest decides dinner should move from indoors to the pool deck.</p><p>Versatility matters in Bali because guest expectations change day to day. A chef may need to prepare Indonesian breakfast, Mediterranean lunch, and a refined seafood dinner over the same stay. We therefore test menu range, purchasing discipline, food-safety habits, and whether the chef can keep grocery planning transparent and organized for the host.</p><p>The final filter is consistency. Beautiful food once is not enough. The chefs worth hiring are the ones who can repeat standards across villas, guest types, and service styles — and still leave the kitchen cleaner than they found it.</p>`,
  },
  {
    slug: 'floating-breakfast-bali',
    title: 'The Bali Floating Breakfast: History, Recipes & How to Order One',
    excerpt:
      "Floating breakfasts became one of Bali's signature villa rituals because they are playful, photogenic, and easy to personalize. Here is where the trend came from, what belongs on the tray, and how to order one that still tastes good.",
    date: '2025-05-28',
    category: 'menus',
    readTime: '5 min read',
    content: `<p>Despite the name, the floating breakfast is not a centuries-old Balinese tradition. It is a modern luxury-hospitality idea that grew through Bali resorts and villa stays, especially in Ubud and Seminyak, where guests wanted breakfast service that felt both indulgent and unmistakably tropical. Social media amplified it, but the reason it endured is simple: it turns an ordinary meal into a vacation moment.</p><p>The best trays balance beauty with practicality. Fresh fruit, pastries, yogurt, juice, coffee, and one hot item such as eggs or nasi goreng work well because they hold their texture long enough to serve and photograph. Overloading the tray with too many sauces, delicate fried foods, or melting desserts usually looks impressive for five minutes and then declines fast in the heat.</p><p>If you are ordering one for your villa, ask about tray size, pool depth, delivery timing, and whether you want a light photo-friendly setup or a breakfast that actually replaces a full meal. Morning is best, both for the weather and because water movement from pool use tends to be calmer before everyone is awake and swimming.</p><p>It is also worth telling your chef whether the breakfast is a honeymoon surprise, birthday moment, or group brunch. That changes portioning, garnish, and whether the setup should feel romantic, family-friendly, or more editorial in style.</p>`,
  },
  {
    slug: 'villa-chef-seminyak-canggu',
    title: 'Private Chef in Seminyak vs Canggu: Area Guide for Villa Guests',
    excerpt:
      'Seminyak and Canggu both suit private chef bookings, but they create very different types of stays. Choosing the right area can affect menu style, logistics, and the kind of atmosphere your villa dining experience will have.',
    date: '2025-05-30',
    category: 'locations',
    readTime: '6 min read',
    content: `<p>Seminyak usually suits guests who want polished convenience. Villas tend to be closer to established suppliers, better roads, premium grocery options, and older hospitality infrastructure. That makes Seminyak especially good for celebratory dinners, date nights, and short stays where guests want restaurant-level food without sacrificing a central location.</p><p>Canggu is often better for longer stays, larger villas, and groups that want a more relaxed rhythm. You see more surfers, families, and remote-work groups who prefer brunches, family-style dinners, BBQs, and repeated chef service across several days. The trade-off is traffic and timing — moving ingredients and staff through Canggu can take longer than first-time visitors expect.</p><p>From a dining perspective, Seminyak leans naturally toward polished plating and sunset entertaining, while Canggu often rewards flexible service: breakfast after surf, poolside lunch, then a casual dinner once everyone is back at the villa. Neither is better in absolute terms; they simply support different holiday patterns.</p><p>If you are deciding between the two, think about how often you actually want to leave the villa. Guests who plan to stay in, host friends, and make the villa part of the holiday often love Canggu. Guests who want easier access, sharper pace, and more classic luxury still tend to choose Seminyak.</p>`,
  },
]


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
