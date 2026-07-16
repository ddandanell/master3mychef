/**
 * myCHEF — PAGE META DATA
 *
 * Centralised, unique title / description / H1 for every primary route.
 * Prevents duplicate title tag catastrophes and keeps SEO data in one
 * typed source of truth.
 */

import { LOCATION_LANDING_PAGES } from './locationLandingPages'

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
    title: 'Private Chef Bali | Dining, Catering & Events — myCHEF',
    description:
      'Hire a private chef in Bali for villa dining, catering & events. Michelin-trained team, all-inclusive pricing, 560+ villas served. Book via WhatsApp.',
    canonical: `${SITE}/`,
    h1: 'A Michelin-Trained Private Chef, in Your Bali Villa.',
    ogImage: `${SITE}/hero-home.webp`,
  },

  'fine-dining': {
    path: '/fine-dining',
    title: 'Private Fine Dining Bali — 24 Set Menus | myCHEF.id',
    description:
      '24 premium set menus for private villa dining in Bali. Vegetarian, seafood, mixed meats & single-meat. From IDR 1.25M per guest. Book your chef.',
    canonical: `${SITE}/fine-dining`,
    h1: 'Private Chef Bali — Fine Dining Tasting Menu in Your Villa',
    ogImage: `${SITE}/hero-fine-dining.webp`,
  },

  catering: {
    path: '/catering',
    title: 'Catering Bali | BBQ, Buffet, Plated & Babi Guling — myCHEF',
    description:
      'Bali catering for villas & events: BBQ, buffet, plated dinners, Babi Guling, grazing tables. Chef, staff & cleanup included. WhatsApp for a quote.',
    canonical: `${SITE}/catering`,
    h1: 'Villa Catering Bali. Chef, Staff & Setup Included.',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  events: {
    path: '/events',
    title: 'Private Events Bali | Weddings & Corporate — myCHEF',
    description:
      'Private events in Bali: weddings, birthdays, corporate offsites, retreats & villa parties. One team — chef, staff & setup. Book via WhatsApp.',
    canonical: `${SITE}/events`,
    h1: 'One team builds the whole evening. You just host.',
    ogImage: `${SITE}/hero-events.webp`,
  },

  'villa-chef': {
    path: '/villa-chef',
    title: 'Private Chef Bali Villa | Michelin-Trained Dining',
    description:
      'Hire a private chef for your Bali villa: ingredients, service & Michelin-trained standards included. 560+ villas served. WhatsApp to check availability.',
    canonical: `${SITE}/villa-chef`,
    h1: 'Private Chef in Bali',
    ogImage: `${SITE}/generated/mychef-experience-bali-luna-hero-v2.webp`,
  },

  'in-villa-service': {
    path: '/in-villa-service',
    title: 'Villa Service Bali | Waiters, Butlers & Bartenders — myCHEF',
    description:
      'Hire villa waitstaff in Bali: waiters, butlers, bartenders, sommeliers & mixologists. Uniformed, English-speaking, same-day booking via WhatsApp.',
    canonical: `${SITE}/in-villa-service`,
    h1: 'In-Villa Service Staff — Waiters, Butlers, Mixologists',
    ogImage: `${SITE}/bartender.webp`,
  },

  contact: {
    path: '/contact',
    title: 'Contact Private Chef Bali | WhatsApp myCHEF Today',
    description:
      'Contact myCHEF to book a private chef in Bali. WhatsApp us your date, villa & guest count — we reply within the hour with a confirmed quote.',
    canonical: `${SITE}/contact`,
    h1: 'Speak to the right person',
    ogImage: `${SITE}/generated/contact-hero.webp`,
  },

  book: {
    path: '/book',
    title: 'Book a Private Chef Bali | Reserve Your Villa Dining',
    description:
      'Book a private chef, catering, event or staffing in Bali. Same-day WhatsApp confirmation and a 50% deposit secure your date.',
    canonical: `${SITE}/book`,
    h1: 'Book Your Experience',
    ogImage: `${SITE}/generated/book-hero.webp`,
  },

  staffing: {
    path: '/staffing',
    title: 'Chef Staffing Bali | Villas, Hotels & Homes — myCHEF',
    description:
      'Hire vetted private chefs, live-in chefs & villa staff in Bali. 48-hour placement for hotels, villas & estates. WhatsApp us to start the search.',
    canonical: `${SITE}/staffing`,
    h1: 'Hire Vetted Hospitality Staff for Your Villa, Hotel or Home.',
    ogImage: `${SITE}/generated/luna-chef-portrait.webp`,
  },

  locations: {
    path: '/locations',
    title: 'Chef Locations Bali | Seminyak, Canggu, Ubud & Uluwatu',
    description:
      'Browse private chef coverage across Bali villas, from Seminyak and Canggu to Ubud and Uluwatu. Find dining, catering and event service.',
    canonical: `${SITE}/locations`,
    h1: 'Private Chef Coverage Across Bali',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  'catering-bbq': {
    path: '/catering/bbq-catering',
    title: 'BBQ Catering Bali | Live-Fire Villa BBQ for Groups — myCHEF',
    description:
      'BBQ catering in Bali: chef grills live at your villa. Seafood, Wagyu & Indonesian menus for birthdays, parties & groups. WhatsApp for instant quote.',
    canonical: `${SITE}/catering/bbq-catering`,
    h1: 'BBQ Catering in Bali — Villa BBQ for Groups',
    ogImage: `${SITE}/bbq-poolside.webp`,
  },

  'catering-buffet': {
    path: '/catering/buffet',
    title: 'Buffet Catering Bali | Villa & Event Buffets — myCHEF',
    description:
      'Buffet catering in Bali for villas, weddings & retreats. Indonesian, international & live-station menus with chef, staff & cleanup. WhatsApp for pricing.',
    canonical: `${SITE}/catering/buffet`,
    h1: 'Buffet Catering in Bali — Group Buffets for Villas',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-plated': {
    path: '/catering/plated-catering',
    title: 'Plated Dinner Bali | 3–5 Course Villa Catering — myCHEF',
    description:
      'Plated dinner catering in Bali for villa events, weddings & anniversaries. 3–5 course set menus with private chef, waiters & full service included.',
    canonical: `${SITE}/catering/plated-catering`,
    h1: 'Plated Set Menu Catering Bali — 3, 4, 5 Course',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-drop-off': {
    path: '/catering/drop-off-catering',
    title: 'Drop-Off Catering Bali | Delivered to Your Villa — myCHEF',
    description:
      'Drop-off catering in Bali: fresh platters, ready-to-serve trays & grazing boxes delivered on time. Ideal for villa lunches, parties & staff meals.',
    canonical: `${SITE}/catering/drop-off-catering`,
    h1: 'Drop-Off Catering in Bali — Delivered to Your Villa',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-babi-guling': {
    path: '/catering/babi-guling',
    title: 'Babi Guling Catering Bali | Traditional Whole Pig Feast',
    description:
      'Babi guling catering in Bali for villa feasts, weddings & birthdays. Authentic whole pig roast with Balinese sides, carving & full delivery service.',
    canonical: `${SITE}/catering/babi-guling`,
    h1: 'Babi Guling Villa Catering Bali — Whole Pig Feasts',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-grazing-tables': {
    path: '/catering/grazing-tables',
    title: 'Grazing Table Bali | Styled Spreads for Villa Events',
    description:
      'Grazing tables in Bali for weddings, birthdays & villa parties. Styled cheese, charcuterie & tropical spreads designed and delivered to your villa.',
    canonical: `${SITE}/catering/grazing-tables`,
    h1: 'Grazing Tables in Bali — Editorial Spreads for Villas',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-villa': {
    path: '/catering/villa-catering',
    title: 'Villa Catering Bali | Daily Chef for Private Groups',
    description:
      'Villa catering in Bali for Seminyak, Canggu, Ubud & Uluwatu stays. Breakfast, lunch & dinner with chef setup, service & cleanup. WhatsApp for a quote.',
    canonical: `${SITE}/catering/villa-catering`,
    h1: 'Villa Catering Bali — Daily Chef Service for Groups',
    ogImage: `${SITE}/hero-catering.webp`,
  },

  'catering-corporate': {
    path: '/catering/corporate-catering',
    title: 'Corporate Catering Bali | Offsites, Lunches & Launches',
    description:
      'Corporate catering in Bali for team offsites, board lunches & product launches. Buffet or plated, professional service & clear logistics. WhatsApp us.',
    canonical: `${SITE}/catering/corporate-catering`,
    h1: 'Corporate Catering Bali — Business Lunches & Event Catering',
    ogImage: `${SITE}/generated/corp-hero.webp`,
  },

  'catering-retreat': {
    path: '/catering/retreat-catering',
    title: 'Retreat Catering Bali | Yoga, Wellness & Multi-Day Meals',
    description:
      'Retreat catering in Bali for yoga, wellness & creative groups. Multi-day menus, dietary planning & calm villa service. WhatsApp us to plan your retreat.',
    canonical: `${SITE}/catering/retreat-catering`,
    h1: 'Retreat Catering Bali — Yoga, Wellness & Group Meals',
    ogImage: `${SITE}/generated/hero-retreats.jpg`,
  },

  'catering-floating-breakfast': {
    path: '/catering/floating-breakfast',
    title: 'Floating Breakfast Bali | Villa Pool Tray Service — myCHEF',
    description:
      'Floating breakfast Bali for Seminyak, Canggu & Uluwatu villas. Photo-ready pool trays with tropical fruit, pastries & eggs. WhatsApp to book yours.',
    canonical: `${SITE}/catering/floating-breakfast`,
    h1: 'Floating Breakfast Bali — Villa Pool Tray Brunch',
    ogImage: `${SITE}/breakfast-spread.webp`,
  },

  'events-weddings': {
    path: '/events/weddings',
    title: 'Wedding Catering Bali | Villa Weddings & Receptions',
    description:
      'Wedding catering in Bali for villa ceremonies & receptions. Michelin-trained chefs, full staffing, bespoke menus, and complete coordination. WhatsApp us.',
    canonical: `${SITE}/events/weddings`,
    h1: 'Wedding Catering in Bali — Villa Weddings & Receptions',
    ogImage: `${SITE}/events-event-wedding-xl.webp`,
  },

  'events-birthdays': {
    path: '/events/birthdays',
    title: 'Birthday Party Bali Villa | Catering & Events — myCHEF',
    description:
      'Birthday party catering in Bali for villa dinners, BBQs & milestone events. Private chefs, cocktails & staff for 10–100 guests. WhatsApp to plan yours.',
    canonical: `${SITE}/events/birthdays`,
    h1: 'Birthday Catering in Bali — Villa Parties & Private Dinners',
    ogImage: `${SITE}/hero-events.webp`,
  },

  'events-anniversaries': {
    path: '/events/anniversaries',
    title: 'Anniversary Dinner Bali Villa | Private Chef — myCHEF',
    description:
      'Anniversary dinners in Bali with a private chef, plated multi-course menu, wine pairing & romantic villa styling. WhatsApp to plan your celebration.',
    canonical: `${SITE}/events/anniversaries`,
    h1: 'Anniversary Dinners in Bali — Private Chef Villa Celebrations',
    ogImage: `${SITE}/hero-events.webp`,
  },

  'events-corporate': {
    path: '/events/corporate-events',
    title: 'Corporate Events Bali | Offsites, Dinners & Launches',
    description:
      'Corporate event catering in Bali for offsites, conferences & client dinners. Structured menus, staffing & on-site coordination. WhatsApp for a proposal.',
    canonical: `${SITE}/events/corporate-events`,
    h1: 'Corporate Event Catering in Bali',
    ogImage: `${SITE}/generated/corp-hero.webp`,
  },

  'events-retreats': {
    path: '/events/retreats',
    title: 'Retreat Catering Bali | Wellness & Group Stays — myCHEF',
    description:
      'Retreat catering in Bali for yoga, wellness & leadership groups. Multi-day menus, dietary planning & reliable on-site chef service. WhatsApp us today.',
    canonical: `${SITE}/events/retreats`,
    h1: 'Retreat Catering in Bali — Multi-Day Group Dining',
    ogImage: `${SITE}/generated/hero-retreats.jpg`,
  },

  'events-baby-showers': {
    path: '/events/baby-showers',
    title: 'Baby Shower Bali Villa | Brunch & Catering — myCHEF',
    description:
      'Baby shower catering in Bali for villa brunches, grazing tables & plated lunches. Mocktail bar, elegant setup & service staff included. WhatsApp us.',
    canonical: `${SITE}/events/baby-showers`,
    h1: 'Baby Shower Catering in Bali — Villa Brunches & Lunches',
    ogImage: `${SITE}/hero-events.webp`,
  },

  'events-villa-parties': {
    path: '/events/villa-parties',
    title: 'Villa Party Bali | BBQ, Cocktails & Private Events — myCHEF',
    description:
      'Villa party catering in Bali for birthdays, sunset BBQs & private celebrations. Chef stations, cocktail bar & full event staffing. WhatsApp to plan yours.',
    canonical: `${SITE}/events/villa-parties`,
    h1: 'Villa Party Catering in Bali',
    ogImage: `${SITE}/bbq-poolside.webp`,
  },

  seminyak: {
    path: '/seminyak',
    title: 'Private Chef Seminyak | Beachfront Villa Dining — myCHEF',
    description:
      'Hire a private chef in Seminyak for beachfront villa dinners, BBQs & events. Michelin-trained, fast setup, all Seminyak areas covered. WhatsApp us.',
    canonical: `${SITE}/seminyak`,
    h1: 'Private Chef Seminyak — Fine Dining, Catering & Events',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  canggu: {
    path: '/canggu',
    title: 'Private Chef Canggu | Dining & Retreat Catering — myCHEF',
    description:
      'Hire a private chef in Canggu for villa dinners, poolside BBQs & retreat catering. Perfect for surf groups, families & long stays. WhatsApp us today.',
    canonical: `${SITE}/canggu`,
    h1: 'Private Chef Canggu — Villa Dining & Group Catering',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  ubud: {
    path: '/ubud',
    title: 'Private Chef Ubud | Jungle Villa & Retreat Dining — myCHEF',
    description:
      'Hire a private chef in Ubud for jungle villa dinners, wellness retreats & multi-day catering. Plant-forward menus, organic sourcing. WhatsApp to book.',
    canonical: `${SITE}/ubud`,
    h1: 'Private Chef Ubud — Jungle Villa Dining & Retreats',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  uluwatu: {
    path: '/uluwatu',
    title: 'Private Chef Uluwatu | Clifftop Villa Dining — myCHEF',
    description:
      'Hire a private chef in Uluwatu for clifftop villa dinners, sunset feasts & wedding catering. Seafood-forward menus, polished service. WhatsApp us.',
    canonical: `${SITE}/uluwatu`,
    h1: 'Private Chef Uluwatu — Clifftop & Villa Fine Dining',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  'nusa-dua': {
    path: '/nusa-dua',
    title: LOCATION_LANDING_PAGES['nusa-dua'].title,
    description: LOCATION_LANDING_PAGES['nusa-dua'].description,
    canonical: `${SITE}/nusa-dua`,
    h1: LOCATION_LANDING_PAGES['nusa-dua'].h1,
    ogImage: `${SITE}${LOCATION_LANDING_PAGES['nusa-dua'].heroImage}`,
  },

  jimbaran: {
    path: '/jimbaran',
    title: LOCATION_LANDING_PAGES.jimbaran.title,
    description: LOCATION_LANDING_PAGES.jimbaran.description,
    canonical: `${SITE}/jimbaran`,
    h1: LOCATION_LANDING_PAGES.jimbaran.h1,
    ogImage: `${SITE}${LOCATION_LANDING_PAGES.jimbaran.heroImage}`,
  },

  sanur: {
    path: '/sanur',
    title: LOCATION_LANDING_PAGES.sanur.title,
    description: LOCATION_LANDING_PAGES.sanur.description,
    canonical: `${SITE}/sanur`,
    h1: LOCATION_LANDING_PAGES.sanur.h1,
    ogImage: `${SITE}${LOCATION_LANDING_PAGES.sanur.heroImage}`,
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
    title: LOCATION_LANDING_PAGES.pererenan.title,
    description: LOCATION_LANDING_PAGES.pererenan.description,
    canonical: `${SITE}/pererenan`,
    h1: LOCATION_LANDING_PAGES.pererenan.h1,
    ogImage: `${SITE}${LOCATION_LANDING_PAGES.pererenan.heroImage}`,
  },

  bukit: {
    path: '/bukit',
    title: LOCATION_LANDING_PAGES.bukit.title,
    description: LOCATION_LANDING_PAGES.bukit.description,
    canonical: `${SITE}/bukit`,
    h1: LOCATION_LANDING_PAGES.bukit.h1,
    ogImage: `${SITE}${LOCATION_LANDING_PAGES.bukit.heroImage}`,
  },

  denpasar: {
    path: '/denpasar',
    title: LOCATION_LANDING_PAGES.denpasar.title,
    description: LOCATION_LANDING_PAGES.denpasar.description,
    canonical: `${SITE}/denpasar`,
    h1: LOCATION_LANDING_PAGES.denpasar.h1,
    ogImage: `${SITE}${LOCATION_LANDING_PAGES.denpasar.heroImage}`,
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


  about: {
    path: '/about',
    title: 'About myCHEF Bali | Michelin-Trained Private Chef Team',
    description:
      'Meet the myCHEF Bali team: Michelin-trained founder Adriano, 50+ local professionals, 560+ villas served. See how we make villa dining exceptional.',
    canonical: `${SITE}/about`,
    h1: 'About myCHEF',
    ogImage: `${SITE}/generated/luna-chef-portrait.webp`,
  },

  chefs: {
    path: '/chefs',
    title: 'Michelin-Trained Chefs Bali | Meet the Team — myCHEF',
    description:
      'Meet the myCHEF private chef team in Bali. Michelin-trained leadership, 50+ villa-tested chefs for fine dining, BBQs, retreats & events. Book via WhatsApp.',
    canonical: `${SITE}/chefs`,
    h1: 'Meet the myCHEF Chefs',
    ogImage: `${SITE}/generated/finedining-chefs-hero-xl.webp`,
  },

  faq: {
    path: '/faq',
    title: 'Private Chef Bali FAQ | Booking, Pricing & Menus — myCHEF',
    description:
      'Answers to every private chef Bali question: pricing, menus, dietary needs, staffing, weddings & booking flow. Get clarity before you confirm your date.',
    canonical: `${SITE}/faq`,
    h1: 'Frequently Asked Questions',
    ogImage: `${SITE}/og-image.webp`,
  },

  'why-mychef': {
    path: '/why-mychef',
    title: 'Best Private Chef Service Bali | Why myCHEF? — 560+ Villas',
    description:
      'Why 560+ Bali villas trust myCHEF: Michelin-trained leadership, 50+ local staff, same-day confirmation & no-stress guarantee. See the full difference.',
    canonical: `${SITE}/why-mychef`,
    h1: 'Why 560+ Villas Choose myCHEF',
    ogImage: `${SITE}/generated/misc-hub-bali-lg.webp`,
  },

  reviews: {
    path: '/reviews',
    title: 'myCHEF Bali Reviews | 4.9★ Private Chef & Catering',
    description:
      'Read 4.9★ myCHEF Bali reviews from villa guests, weddings, retreats & events. Real hosts, real outcomes — see why 560+ villas keep coming back.',
    canonical: `${SITE}/reviews`,
    h1: 'What Our Guests Say',
    ogImage: `${SITE}/dining-table.webp`,
  },

  pricing: {
    path: '/pricing',
    title: 'Private Chef Bali Price Guide | All-In Rates — myCHEF',
    description:
      'See private chef Bali pricing before you book. Tasting menus from IDR 2.2M, catering from IDR 350K/pp. No hidden fees, no grocery markup.',
    canonical: `${SITE}/pricing`,
    h1: 'Pricing',
    ogImage: `${SITE}/generated/catering-catering-hero-lg.webp`,
  },

  press: {
    path: '/press',
    title: 'myCHEF Bali Press & Media | Private Chef Coverage',
    description:
      'myCHEF Bali press kit, brand facts & media contact. Access coverage, imagery & PR details for stories on private chef dining & villa catering in Bali.',
    canonical: `${SITE}/press`,
    h1: 'myCHEF in the Press',
    ogImage: `${SITE}/generated/partner-platform-hero.webp`,
  },

  'partner-platform': {
    path: '/partner-platform',
    title: 'Villa Management Catering Bali | Partner Platform — myCHEF',
    description:
      'Co-branded private chef & catering for Bali villa managers. Live booking visibility, commission sharing & white-label dining offers for your guests.',
    canonical: `${SITE}/partner-platform`,
    h1: 'Partner Platform for Bali Villas',
    ogImage: `${SITE}/generated/partner-platform-hero.webp`,
  },

  services: {
    path: '/services',
    title: 'Private Chef Services Bali | All-In Villa Dining — myCHEF',
    description:
      'Compare all private chef services in Bali: fine dining, catering, events, staffing & classes. Michelin-trained team. WhatsApp us to find the right fit.',
    canonical: `${SITE}/services`,
    h1: 'Private Chef Services in Bali',
    ogImage: `${SITE}/generated/bali-hub-hero.webp`,
  },

  'recommended-services': {
    path: '/recommended-services',
    title: 'Build Your Perfect Villa Experience | myCHEF Concierge Bali',
    description:
      "Tell myCHEF what you're hosting and get the right service fast. Match guest count, mood, and budget to the best villa dining format.",
    canonical: `${SITE}/recommended-services`,
    h1: 'Build Your Perfect Villa Experience',
    ogImage: `${SITE}/generated/experience-aura-setup-lg.webp`,
  },

  'join-our-team': {
    path: '/join-our-team',
    title: 'Chef Jobs Bali | Join the myCHEF Team — Apply via WhatsApp',
    description:
      'Chef jobs in Bali with myCHEF. Roles for chefs, bartenders, waiters & coordinators. Join a fast-moving team trusted by 560+ villas. Apply via WhatsApp.',
    canonical: `${SITE}/join-our-team`,
    h1: 'Join the myCHEF Team',
    ogImage: `${SITE}/generated/staffing-staffing-hero-xl.webp`,
  },

  quote: {
    path: '/quote',
    title: 'Get a Custom Quote — Private Chef in Bali | myCHEF',
    description:
      'Send your date, guest count, and villa details to get a custom private chef Bali quote for dinners, parties, weddings, or multi-day stays.',
    canonical: `${SITE}/quote`,
    h1: 'Get Your Custom Quote',
    ogImage: `${SITE}/og-image.webp`,
  },

  calculator: {
    path: '/calculator',
    title: 'Chef Cost Calculator Bali | Instant Estimate — myCHEF',
    description:
      'Estimate your private chef Bali cost in 30 seconds. Adjust guests, meals, menu style & add-ons for a realistic all-in budget. No hidden fees.',
    canonical: `${SITE}/calculator`,
    h1: 'Private Chef Pricing Calculator',
    ogImage: `${SITE}/generated/catering-catering-hero-lg.webp`,
  },

  'privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy | myCHEF.id',
    description:
      'myCHEF.id privacy policy — how we collect, store and use your data when you book private chef or catering services in Bali.',
    canonical: `${SITE}/privacy-policy`,
    h1: 'Privacy Policy',
    ogImage: `${SITE}/og-image.webp`,
  },

  'terms-of-service': {
    path: '/terms-of-service',
    title: 'Terms of Service | myCHEF.id',
    description:
      'myCHEF.id terms of service: payment terms, deposits, booking rules & service conditions for private chef & catering bookings in Bali.',
    canonical: `${SITE}/terms-of-service`,
    h1: 'Payment & Booking Terms',
    ogImage: `${SITE}/og-image.webp`,
  },

  cancellation: {
    path: '/cancellation',
    title: 'Cancellation Policy | myCHEF.id',
    description:
      'myCHEF.id cancellation policy: refund timelines & rules for private chef, catering & event bookings. Full refund available 14+ days before your date.',
    canonical: `${SITE}/cancellation`,
    h1: 'Cancellation Policy',
    ogImage: `${SITE}/og-image.webp`,
  },

  journal: {
    path: '/journal',
    title: 'Bali Private Chef Journal | Tips, Menus & Guides — myCHEF',
    description:
      'Explore Bali private chef stories, menu ideas, and hosting insights for villas, retreats, and events from the myCHEF journal.',
    canonical: `${SITE}/journal`,
    h1: 'Journal',
    ogImage: `${SITE}/og-image.webp`,
  },

  help: {
    path: '/help',
    title: 'Private Chef Bali Guide | Help Centre — myCHEF',
    description:
      'Your complete guide to booking a private chef in Bali. From first enquiry to menus, pricing, staffing & on-the-day logistics. Get answers fast.',
    canonical: `${SITE}/help`,
    h1: 'How can we help?',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-getting-started': {
    path: '/help/getting-started',
    title: 'How to Book a Private Chef Bali | Getting Started — myCHEF',
    description:
      'Step-by-step guide to booking your first private chef in Bali. What to send, how quotes work & what happens after you confirm with myCHEF.',
    canonical: `${SITE}/help/getting-started`,
    h1: 'Getting Started',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-pricing': {
    path: '/help/pricing',
    title: 'Private Chef Bali Pricing Guide | What It Really Costs',
    description:
      'Understand private chef Bali pricing: what each format includes, how guest count & menu style affect cost, and how to read your myCHEF quote.',
    canonical: `${SITE}/help/pricing`,
    h1: 'Pricing Breakdown',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-menu-guide': {
    path: '/help/menu-guide',
    title: 'Private Chef Menu Guide Bali | Cuisines & Dietary Options',
    description:
      'Choose the right private chef menu for your Bali villa. Guidance on cuisines, dietary needs, course styles & how to shape a meal for your group.',
    canonical: `${SITE}/help/menu-guide`,
    h1: 'Menu Selection Guide',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-wedding-guide': {
    path: '/help/wedding-guide',
    title: 'Wedding Catering Guide Bali | Plan Your Villa Wedding',
    description:
      'Plan Bali wedding catering step by step: guest counts, service styles, tastings, staffing & multi-day villa celebrations. Everything you need to know.',
    canonical: `${SITE}/help/wedding-guide`,
    h1: 'Planning a Villa Wedding',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-corporate-guide': {
    path: '/help/corporate-guide',
    title: 'Corporate Catering Guide Bali | Offsites & Team Retreats',
    description:
      'Plan corporate catering in Bali: menu options, staffing, timing & multi-day meal flow for teams and offsites. Everything your team needs, handled.',
    canonical: `${SITE}/help/corporate-guide`,
    h1: 'Corporate & Retreat Catering',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-staffing-guide': {
    path: '/help/staffing-guide',
    title: 'Villa Staffing Guide Bali | Waiters, Butlers & More',
    description:
      'Find the right villa staff in Bali for dinners, parties & extended stays. Waiters, bartenders, butlers & household staff explained clearly.',
    canonical: `${SITE}/help/staffing-guide`,
    h1: 'In-Villa Staffing & Service',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-managing-booking': {
    path: '/help/managing-booking',
    title: 'Manage Your Chef Booking Bali | After You Confirm — myCHEF',
    description:
      'Everything that happens after booking your myCHEF private chef in Bali: menu sign-off, villa setup, chef arrival, changes & day-of coordination.',
    canonical: `${SITE}/help/managing-booking`,
    h1: 'Managing Your Booking',
    ogImage: `${SITE}/og-image.webp`,
  },

  menus: {
    path: '/menus',
    title: 'Private Chef Menus in Bali | myCHEF',
    description:
      'Browse private chef menus for Bali villas, from Mediterranean tasting dinners to Indonesian feasts, BBQs, breakfasts, and custom group meals.',
    canonical: `${SITE}/menus`,
    h1: 'Private Chef Menus in Bali',
    ogImage: `${SITE}/hero-fine-dining.webp`,
  },

  'guide-private-chef-bali': {
    path: '/guide/private-chef-bali',
    title: 'Private Chef in Bali — Every Villa Region We Serve | myCHEF',
    description:
      'Understand how private chef Bali bookings work, what it costs, which villas fit best, and how to choose the right dining format.',
    canonical: `${SITE}/guide/private-chef-bali`,
    h1: 'Private Chef in Bali — Every Villa Region We Serve',
    ogImage: `${SITE}/generated/bali-hub-hero.webp`,
  },

  'fine-dining-romantic-dinner': {
    path: '/fine-dining/romantic-dinner',
    title: 'Romantic Dinner Bali Villa | Private Chef Date Night',
    description:
      'Book a romantic dinner in your Bali villa: private chef, candlelit setup, 5-course menu, flowers & champagne optional. WhatsApp us to plan your night.',
    canonical: `${SITE}/fine-dining/romantic-dinner`,
    h1: 'Romantic Dinner in Bali',
    ogImage: `${SITE}/generated/section-romantic-dinner.webp`,
  },

  'fine-dining-tasting-menu': {
    path: '/fine-dining/tasting-menu',
    title: 'Tasting Menu Bali | 5-Course Private Villa Dining — myCHEF',
    description:
      'Private tasting menu in your Bali villa: Michelin-trained chef, 5 courses, handmade pasta, Mediterranean or Wagyu path. From IDR 2.2M/pp. WhatsApp us.',
    canonical: `${SITE}/fine-dining/tasting-menu`,
    h1: 'Tasting Menu in Bali',
    ogImage: `${SITE}/generated/misc-luna-plating-md.webp`,
  },

  'fine-dining-private-chef-bali': {
    path: '/fine-dining/private-chef-bali',
    title: 'Private Chef Bali Villa | Michelin-Trained Dining — myCHEF',
    description:
      'Hire a private chef for your Bali villa: ingredients, service & Michelin-trained standards included. 560+ villas served. WhatsApp to check availability.',
    canonical: `${SITE}/fine-dining/private-chef-bali`,
    h1: 'Private Chef in Bali',
    ogImage: `${SITE}/generated/mychef-experience-bali-luna-hero-v2.webp`,
  },

  'fine-dining-chefs-table': {
    path: '/fine-dining/chefs-table',
    title: "Chef's Table Bali | Adriano 7-Course Exclusive Dining",
    description:
      "Book Adriano's Chef's Table in Bali: 7-course market menu, counter seating, live commentary. Max 6 guests. IDR 3.5M/pp. WhatsApp to reserve.",
    canonical: `${SITE}/fine-dining/chefs-table`,
    h1: "Chef's Table in Bali",
    ogImage: `${SITE}/generated/chefs-table-hero-luxury.webp`,
  },

  'fine-dining-menus': {
    path: '/fine-dining/menus',
    title: 'Private Chef Menu Bali | Mediterranean & Wagyu — myCHEF',
    description:
      'Browse myCHEF private chef menus for Bali villas. Compare Mediterranean & Wagyu tasting paths, signature dishes & wine pairing add-ons before you book.',
    canonical: `${SITE}/fine-dining/menus`,
    h1: 'Private Chef Menus in Bali',
    ogImage: `${SITE}/generated/misc-luna-plating-md.webp`,
  },

  'fine-dining-our-chefs': {
    path: '/fine-dining/our-chefs',
    title: 'Hire a Private Chef Bali | Meet the myCHEF Team',
    description:
      'Meet myCHEF\'s private chefs in Bali: Michelin-trained Adriano & specialists in Mediterranean, seafood & fire cooking. Hire yours via WhatsApp today.',
    canonical: `${SITE}/fine-dining/our-chefs`,
    h1: 'Our Chefs — myCHEF Bali',
    ogImage: `${SITE}/generated/finedining-chefs-hero-xl.webp`,
  },

  'in-villa-service-waiters': {
    path: '/in-villa-service/waiters',
    title: 'Villa Waiters Bali | Professional Per-Shift Service',
    description:
      'Hire villa waiters in Bali for dinners, weddings & events. Uniformed, English-speaking, trained in plated service. From IDR 250K/hour. WhatsApp us.',
    canonical: `${SITE}/in-villa-service/waiters`,
    h1: 'Waiter Hire in Bali',
    ogImage: `${SITE}/generated/aura-bartender.webp`,
  },

  'in-villa-service-butlers': {
    path: '/in-villa-service/butlers',
    title: 'Butler Hire Bali Villa | Discreet In-Villa Service — myCHEF',
    description:
      'Hire a private butler in Bali for arrival service, discreet hosting & polished villa support. From IDR 1.2M/day. WhatsApp us to check availability.',
    canonical: `${SITE}/in-villa-service/butlers`,
    h1: 'Butler Service in Bali',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  'in-villa-service-bartenders': {
    path: '/in-villa-service/bartenders',
    title: 'Bartender Hire Bali | Villa Cocktail Service — myCHEF',
    description:
      'Hire a bartender in Bali for villa parties & dinners. Cocktails, glassware, ice & garnish prep included. From IDR 350K/hour. WhatsApp to book yours.',
    canonical: `${SITE}/in-villa-service/bartenders`,
    h1: 'Bartender Hire in Bali',
    ogImage: `${SITE}/generated/aura-bartender.webp`,
  },

  'in-villa-service-mixology': {
    path: '/in-villa-service/mixology',
    title: 'Mixology Service Bali | Signature Cocktails for Villas',
    description:
      'Private mixology in Bali: signature cocktail menus, guided tastings & cocktail classes for villa events. From IDR 1.5M/session. WhatsApp us to book.',
    canonical: `${SITE}/in-villa-service/mixology`,
    h1: 'Private Mixology in Bali',
    ogImage: `${SITE}/bartender.webp`,
  },

  'in-villa-service-sommelier': {
    path: '/in-villa-service/sommelier',
    title: 'Sommelier Hire Bali | Villa Wine Pairings — myCHEF',
    description:
      'Hire a sommelier in Bali for villa dinners & tasting menus. Expert wine pairings, bottle selection & tableside service. WhatsApp us to add wine service.',
    canonical: `${SITE}/in-villa-service/sommelier`,
    h1: 'Sommelier Service in Bali',
    ogImage: `${SITE}/generated/luna-wine.webp`,
  },

  'in-villa-service-host-hostess': {
    path: '/in-villa-service/host-hostess',
    title: 'Event Host Hire Bali Villa | Host & Hostess — myCHEF',
    description:
      'Hire event hosts & hostesses in Bali for villa weddings, corporate events & parties. Guest greeting, arrival flow & reception management. WhatsApp us.',
    canonical: `${SITE}/in-villa-service/host-hostess`,
    h1: 'Host & Hostess Hire in Bali',
    ogImage: `${SITE}/generated/misc-trust-hosts-lg.webp`,
  },

  'staffing-private-chef-placement': {
    path: '/staffing/private-chef-placement',
    title: 'Private Chef Placement Bali | Villa Recruitment — myCHEF',
    description:
      'Fill long-term kitchen roles in Bali fast. Vetted private chef candidates, cooking trials, contracts & onboarding support. WhatsApp to start the search.',
    canonical: `${SITE}/staffing/private-chef-placement`,
    h1: 'Private Chef Placement in Bali',
    ogImage: `${SITE}/generated/staffing-staffing-hero-xl.webp`,
  },

  'staffing-live-in-chef': {
    path: '/staffing/live-in-chef',
    title: 'Live-In Chef Bali | Full-Time Villa Chef Placement — myCHEF',
    description:
      'Find a live-in chef in Bali for daily family meals, estate stays & full-time kitchen coverage. Vetted placements from IDR 8M/month. WhatsApp us.',
    canonical: `${SITE}/staffing/live-in-chef`,
    h1: 'Live-In Chef Placement in Bali',
    ogImage: `${SITE}/generated/staffing-staffing-kitchen-lg.webp`,
  },

  'staffing-villa-staff': {
    path: '/staffing/villa-staff',
    title: 'Villa Staff Bali | Managers, Housekeepers & More — myCHEF',
    description:
      'Hire villa staff in Bali: managers, housekeepers, gardeners, pool crew & front-of-house. One partner, vetted placements. WhatsApp to discuss your needs.',
    canonical: `${SITE}/staffing/villa-staff`,
    h1: 'Villa Staff Placement in Bali',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  'staffing-household-staff': {
    path: '/staffing/household-staff',
    title: 'Household Staff Bali | Private Estate Recruitment — myCHEF',
    description:
      'Recruit household staff in Bali for private residences & estates. Housekeepers, drivers, nannies & heads of house. Vetted & placed in 48 hours.',
    canonical: `${SITE}/staffing/household-staff`,
    h1: 'Household Staff Placement in Bali',
    ogImage: `${SITE}/generated/staffing-staffing-table-lg.webp`,
  },

  'staffing-for-villa-managers': {
    path: '/staffing/for-villa-managers',
    title: 'Villa Manager Staffing Bali | Chef & Service Hires — myCHEF',
    description:
      'Outsource hospitality hiring to myCHEF for your Bali villa properties. Pre-vetted chefs & service staff, partnership rates, 48-hour placement. WhatsApp us.',
    canonical: `${SITE}/staffing/for-villa-managers`,
    h1: 'Staffing for Villa Managers in Bali',
    ogImage: `${SITE}/generated/corp-villa.webp`,
  },

  'staffing-for-hotels-restaurants': {
    path: '/staffing/for-hotels-restaurants',
    title: 'Chef Staffing Hotels Bali | Kitchen & Service Hires',
    description:
      'Hospitality staffing for Bali hotels, restaurants & beach clubs. Vetted chefs, servers & managers. Volume rates available. WhatsApp us to get started.',
    canonical: `${SITE}/staffing/for-hotels-restaurants`,
    h1: 'Staffing for Hotels & Restaurants in Bali',
    ogImage: `${SITE}/generated/aura-corporate.webp`,
  },

  jakarta: {
    path: '/jakarta',
    title: 'Private Chef in Jakarta | Residence & Corporate Dining',
    description:
      'Bring the myCHEF private chef standard to Jakarta for residence dinners, business hosting, and discreet service in premium homes and suites.',
    canonical: `${SITE}/jakarta`,
    h1: 'Private Chef in Jakarta',
    ogImage: `${SITE}/og-image.webp`,
  },

  'private-chef-menteng': {
    path: '/private-chef-menteng',
    title: 'Private Chef in Menteng | Residence Dining & Hosting',
    description:
      "Book a private chef in Menteng for embassy dinners, family hosting, and polished in-home service in one of Jakarta's top districts.",
    canonical: `${SITE}/private-chef-menteng`,
    h1: 'Private Chef in Menteng',
    ogImage: `${SITE}/og-image.webp`,
  },

  'private-chef-kemang': {
    path: '/private-chef-kemang',
    title: 'Private Chef in Kemang | Home Dining & Social Hosting',
    description:
      'Hire a private chef in Kemang for expat homes, creative gatherings, birthdays, and relaxed private dining without restaurant travel.',
    canonical: `${SITE}/private-chef-kemang`,
    h1: 'Private Chef in Kemang',
    ogImage: `${SITE}/og-image.webp`,
  },

  'private-chef-scbd': {
    path: '/private-chef-scbd',
    title: 'Private Chef in SCBD | Executive Dining & Hosting',
    description:
      'Book a private chef in SCBD for executive dinners, apartment hosting, and business entertainment with polished service and timing.',
    canonical: `${SITE}/private-chef-scbd`,
    h1: 'Private Chef in SCBD',
    ogImage: `${SITE}/og-image.webp`,
  },

  'private-chef-pondok-indah': {
    path: '/private-chef-pondok-indah',
    title: 'Private Chef in Pondok Indah | Family Estate Dining',
    description:
      'Hire a private chef in Pondok Indah for family estates, weekend entertaining, and private dining with discreet in-home service.',
    canonical: `${SITE}/private-chef-pondok-indah`,
    h1: 'Private Chef in Pondok Indah',
    ogImage: `${SITE}/og-image.webp`,
  },

  'private-chef-bsd': {
    path: '/private-chef-bsd',
    title: 'Private Chef in BSD City | Home Dining & Group Catering',
    description:
      "Book a private chef in BSD City for home dinners, company gatherings, and polished catering across Jakarta's fast-growing west side.",
    canonical: `${SITE}/private-chef-bsd`,
    h1: 'Private Chef in BSD City',
    ogImage: `${SITE}/og-image.webp`,
  },

  kuta: {
    path: '/kuta',
    title: 'Private Chef Kuta | Villa Dinners, Surf Trips & Catering',
    description:
      'Book a private chef in Kuta for villa dinners, surf-group meals, and last-night celebrations with fast setup near the airport and beach.',
    canonical: `${SITE}/kuta`,
    h1: 'Private Chef Kuta — Villa Dining & Group Meals',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  'blog-private-chef-bali-cost-breakdown-2026': {
    path: '/blog/private-chef-bali-cost-breakdown-2026',
    title: 'Private Chef Bali Cost 2026 | Fees, Groceries & Service',
    description:
      'Private chef Bali cost breakdown for 2026, including chef fees, groceries, service charges and what changes the final villa quote.',
    canonical: `${SITE}/blog/private-chef-bali-cost-breakdown-2026`,
    h1: 'Private Chef Bali — Cost Breakdown 2026',
    ogImage: `${SITE}/generated/journal-hero.webp`,
  },

  'blog-best-bali-villas-private-chef-kitchen': {
    path: '/blog/best-bali-villas-private-chef-kitchen',
    title: 'Best Bali Villas with Chef Kitchen | Planning Guide',
    description:
      'Best Bali villas with chef-friendly kitchens, from prep space and gas hobs to storage, staffing flow and dining-friendly layouts.',
    canonical: `${SITE}/blog/best-bali-villas-private-chef-kitchen`,
    h1: 'Best Bali Villas with a Private Chef Kitchen',
    ogImage: `${SITE}/generated/journal-hero.webp`,
  },

  'blog-wedding-rehearsal-dinner-bali': {
    path: '/blog/wedding-rehearsal-dinner-bali',
    title: 'Wedding Rehearsal Dinner Bali | Villa Events Planning Guide',
    description:
      'Wedding rehearsal dinner Bali guide covering villa formats, menu ideas, timing and how to host guests before the ceremony.',
    canonical: `${SITE}/blog/wedding-rehearsal-dinner-bali`,
    h1: 'Wedding Rehearsal Dinner in Bali — Planning Guide',
    ogImage: `${SITE}/generated/journal-hero.webp`,
  },

  'blog-yoga-retreat-chef-bali-meal-planning': {
    path: '/blog/yoga-retreat-chef-bali-meal-planning',
    title: 'Yoga Retreat Chef Bali | Meal Planning Guide',
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
  'pricing-calculator': {
    path: '/pricing-calculator',
    title: 'Pricing Calculator | Private Chef Bali — myCHEF',
    description:
      'Calculate your private chef Bali cost in seconds. Adjust guests, menu style & add-ons for an instant estimate. No hidden fees.',
    canonical: `${SITE}/pricing-calculator`,
    h1: 'Private Chef Pricing Calculator',
    ogImage: `${SITE}/generated/catering-catering-hero-lg.webp`,
  },

  'corporate-case-studies': {
    path: '/corporate-case-studies',
    title: 'Corporate Case Studies | myCHEF Bali Catering',
    description:
      'See how myCHEF delivers corporate catering in Bali for team offsites, board lunches & product launches. Real events, real results.',
    canonical: `${SITE}/corporate-case-studies`,
    h1: 'Corporate Case Studies',
    ogImage: `${SITE}/generated/corp-hero.webp`,
  },

} as const

/** Helper to retrieve meta by route key with strict typing */
export function getPageMeta(key: keyof typeof PAGE_META): PageMeta {
  return PAGE_META[key]
}

/** All page meta entries as an array for bulk operations (sitemaps, audits, etc.) */
export const ALL_PAGE_META: PageMeta[] = Object.values(PAGE_META)
