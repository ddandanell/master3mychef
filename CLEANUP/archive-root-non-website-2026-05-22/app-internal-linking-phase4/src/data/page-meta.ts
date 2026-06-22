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
    title: 'About myCHEF | Michelin-Trained Private Chef Team in Bali',
    description:
      'Meet the team behind myCHEF and see how Michelin-trained leadership, Bali sourcing, and villa-first service shape every private chef booking.',
    canonical: `${SITE}/about`,
    h1: 'About myCHEF',
    ogImage: `${SITE}/generated/luna-chef-portrait.webp`,
  },

  chefs: {
    path: '/chefs',
    title: 'Our Chefs Bali | Meet the myCHEF Private Chef Team',
    description:
      'Meet Adriano and the chefs behind myCHEF. See specialties, training, and who cooks fine dining, BBQs, retreats, and villa dinners.',
    canonical: `${SITE}/chefs`,
    h1: 'Meet the myCHEF Chefs',
    ogImage: `${SITE}/generated/chefs-hero.webp`,
  },

  faq: {
    path: '/faq',
    title: 'FAQ | Private Chef Bali Booking Questions — myCHEF',
    description:
      'Get fast answers on private chef pricing, menus, dietary requests, staffing, weddings, and booking flow before you confirm your Bali date.',
    canonical: `${SITE}/faq`,
    h1: 'Frequently Asked Questions',
    ogImage: `${SITE}/og-image.webp`,
  },

  'why-mychef': {
    path: '/why-mychef',
    title: 'Why 560+ Villas Choose myCHEF | Trusted Private Chef Bali',
    description:
      'See why 560+ villas book myCHEF for private dining, catering, and events. Michelin-trained leadership, calm logistics, and fast replies.',
    canonical: `${SITE}/why-mychef`,
    h1: 'Why 560+ Villas Choose myCHEF',
    ogImage: `${SITE}/generated/hub-bali.webp`,
  },

  reviews: {
    path: '/reviews',
    title: 'myCHEF Reviews | 4.9★ Private Chef & Catering Bali',
    description:
      'Read what villa guests say after weddings, family dinners, retreats, and chef-led events in Bali. Real reviews, real hosts, clear outcomes.',
    canonical: `${SITE}/reviews`,
    h1: 'What Our Guests Say',
    ogImage: `${SITE}/dining-table.webp`,
  },

  pricing: {
    path: '/pricing',
    title: 'Private Chef Bali Pricing | Fine Dining, Catering & Events',
    description:
      'See private chef Bali pricing before you book. Compare hourly service, tasting menus, catering packages, and event formats with no hidden fees.',
    canonical: `${SITE}/pricing`,
    h1: 'Pricing',
    ogImage: `${SITE}/generated/catering-hero.webp`,
  },

  press: {
    path: '/press',
    title: 'Press & Media | myCHEF.id Bali',
    description:
      'Access myCHEF press coverage, brand facts, media contact details, and images for stories about private chef dining, catering, and Bali villas.',
    canonical: `${SITE}/press`,
    h1: 'myCHEF in the Press',
    ogImage: `${SITE}/generated/partner-platform-hero.webp`,
  },

  'partner-platform': {
    path: '/partner-platform',
    title: 'Partner Platform | Private Dining for Bali Villas — myCHEF',
    description:
      'Give villa owners a better guest dining offer with co-branded private chef service, live booking visibility, and revenue-sharing in Bali.',
    canonical: `${SITE}/partner-platform`,
    h1: 'Partner Platform for Bali Villas',
    ogImage: `${SITE}/generated/partner-platform-hero.webp`,
  },

  services: {
    path: '/services',
    title: 'Private Chef Services Bali | Parties, Weddings & Villas',
    description:
      'Compare private chef services in Bali for birthdays, weddings, villa parties, meal prep, classes, and romantic dinners before you enquire.',
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
    ogImage: `${SITE}/generated/aura-setup.webp`,
  },

  'join-our-team': {
    path: '/join-our-team',
    title: 'Join the myCHEF Team | Private Chef & Villa Roles in Bali',
    description:
      'Apply to join myCHEF as a chef, bartender, waiter, or coordinator in Bali. Work with a fast-moving team trusted by 560+ villas.',
    canonical: `${SITE}/join-our-team`,
    h1: 'Join the myCHEF Team',
    ogImage: `${SITE}/generated/staffing-hero.webp`,
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
    title: 'Private Chef Bali Pricing Calculator | Estimate Your Cost',
    description:
      'Estimate private chef Bali pricing in under a minute. Adjust guests, meals, menu style, and add-ons to see a realistic starting budget.',
    canonical: `${SITE}/calculator`,
    h1: 'Private Chef Pricing Calculator',
    ogImage: `${SITE}/generated/catering-hero.webp`,
  },

  'privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy | myCHEF — Private Chef Bali',
    description:
      'Read how myCHEF collects, stores, and uses guest details when you enquire, book private chef service, or message the Bali concierge team.',
    canonical: `${SITE}/privacy-policy`,
    h1: 'Privacy Policy',
    ogImage: `${SITE}/og-image.webp`,
  },

  'terms-of-service': {
    path: '/terms-of-service',
    title: 'Terms & Payment | myCHEF — Private Chef Bali',
    description:
      'Review payment terms, deposits, booking rules, and service conditions before you confirm a private chef, catering, or staffing booking.',
    canonical: `${SITE}/terms-of-service`,
    h1: 'Payment & Booking Terms',
    ogImage: `${SITE}/og-image.webp`,
  },

  cancellation: {
    path: '/cancellation',
    title: 'Cancellation Policy | myCHEF — Private Chef Bali',
    description:
      'See refund timelines and cancellation rules for private chef, catering, and event bookings so you can confirm dates with clear expectations.',
    canonical: `${SITE}/cancellation`,
    h1: 'Cancellation Policy',
    ogImage: `${SITE}/og-image.webp`,
  },

  blog: {
    path: '/blog',
    title: 'myCHEF Journal | Private Chef Bali & Hosting Guides',
    description:
      'Read practical Bali hosting guides on private chef costs, villa kitchens, retreat menus, and event planning written by the myCHEF team.',
    canonical: `${SITE}/blog`,
    h1: 'myCHEF Journal',
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
    title: 'Help & Guides | myCHEF Bali Support Center',
    description:
      'Browse booking help for private chef Bali services, from first enquiry to menus, pricing, staffing, and changes before your villa date.',
    canonical: `${SITE}/help`,
    h1: 'How can we help?',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-getting-started': {
    path: '/help/getting-started',
    title: 'Getting Started: Book Your First Private Chef in Bali',
    description:
      'Learn how to book your first private chef in Bali, what details to send, how quotes work, and what happens after you confirm.',
    canonical: `${SITE}/help/getting-started`,
    h1: 'Getting Started',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-pricing': {
    path: '/help/pricing',
    title: 'Pricing Guide | myCHEF Private Chef & Catering Costs',
    description:
      'Understand private chef Bali pricing, what each format includes, and how guest count, menu style, and staffing change the final quote.',
    canonical: `${SITE}/help/pricing`,
    h1: 'Pricing Breakdown',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-menu-guide': {
    path: '/help/menu-guide',
    title: 'Menu Selection Guide | myCHEF Bali Cuisine & Dietary Options',
    description:
      'Choose the right myCHEF menu with guidance on cuisines, dietary needs, course styles, and how to shape a meal around your group.',
    canonical: `${SITE}/help/menu-guide`,
    h1: 'Menu Selection Guide',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-wedding-guide': {
    path: '/help/wedding-guide',
    title: 'Wedding Catering Guide | myCHEF Bali Villa Weddings',
    description:
      'Plan Bali wedding catering with clear steps for guest counts, service styles, tastings, staffing, and multi-day villa celebrations.',
    canonical: `${SITE}/help/wedding-guide`,
    h1: 'Planning a Villa Wedding',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-corporate-guide': {
    path: '/help/corporate-guide',
    title: 'Corporate & Team Retreat Catering | myCHEF Bali',
    description:
      'Plan corporate catering in Bali with menu guidance, staffing options, timing, and multi-day meal flow for teams and offsites.',
    canonical: `${SITE}/help/corporate-guide`,
    h1: 'Corporate & Retreat Catering',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-staffing-guide': {
    path: '/help/staffing-guide',
    title: 'In-Villa Staffing & Service Guide | myCHEF Bali',
    description:
      'Find the right Bali villa staff for dinners, parties, and extended stays, from waiters and bartenders to butlers and household help.',
    canonical: `${SITE}/help/staffing-guide`,
    h1: 'In-Villa Staffing & Service',
    ogImage: `${SITE}/og-image.webp`,
  },

  'help-managing-booking': {
    path: '/help/managing-booking',
    title: 'Managing Your Booking | myCHEF Bali Support',
    description:
      'Know what happens after booking: menu sign-off, villa setup, chef arrival, changes, dietary updates, and event-day coordination.',
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
    title: 'Romantic Dinner Bali | Private Villa Date Night — myCHEF',
    description:
      'Plan a romantic dinner in Bali with a private chef, candlelit villa setup, refined courses, and optional flowers or champagne.',
    canonical: `${SITE}/fine-dining/romantic-dinner`,
    h1: 'Romantic Dinner in Bali',
    ogImage: `${SITE}/generated/section-romantic-dinner.webp`,
  },

  'fine-dining-tasting-menu': {
    path: '/fine-dining/tasting-menu',
    title: 'Tasting Menu Bali | Multi-Course Private Dining — myCHEF',
    description:
      'Book a tasting menu in Bali with a private chef cooking multi-course Mediterranean or Wagyu dinners in your villa kitchen.',
    canonical: `${SITE}/fine-dining/tasting-menu`,
    h1: 'Tasting Menu in Bali',
    ogImage: `${SITE}/generated/luna-plating.webp`,
  },

  'fine-dining-private-chef-bali': {
    path: '/fine-dining/private-chef-bali',
    title: 'Private Chef Bali | Michelin-Trained Villa Dining — myCHEF',
    description:
      'Hire a private chef in Bali for plated villa dinners with ingredients, service, and Michelin-trained standards built into the night.',
    canonical: `${SITE}/fine-dining/private-chef-bali`,
    h1: 'Private Chef in Bali',
    ogImage: `${SITE}/generated/luna-hero-v2.webp`,
  },

  'fine-dining-chefs-table': {
    path: '/fine-dining/chefs-table',
    title: "Chef's Table Bali | Adriano 7-Course Private Dining — myCHEF",
    description:
      "Reserve a chef's table in Bali for front-row dining, live plating, and a guided multi-course menu served inside your villa.",
    canonical: `${SITE}/fine-dining/chefs-table`,
    h1: "Chef's Table in Bali",
    ogImage: `${SITE}/generated/chefs-table-hero-luxury.webp`,
  },

  'fine-dining-menus': {
    path: '/fine-dining/menus',
    title: 'Private Chef Menus Bali | Riviera & Odyssey — myCHEF',
    description:
      'See private chef menus in Bali before you book. Compare Riviera and Odyssey paths, signature dishes, and add-ons for villa dinners.',
    canonical: `${SITE}/fine-dining/menus`,
    h1: 'Private Chef Menus in Bali',
    ogImage: `${SITE}/generated/luna-plating.webp`,
  },

  'fine-dining-our-chefs': {
    path: '/fine-dining/our-chefs',
    title: 'Our Chefs Bali | Vetted Private Chefs — myCHEF',
    description:
      'Meet the myCHEF fine dining chefs behind Bali villa tastings, from Michelin-trained leadership to specialists in fire, seafood, and sauce.',
    canonical: `${SITE}/fine-dining/our-chefs`,
    h1: 'Our Chefs — myCHEF Bali',
    ogImage: `${SITE}/generated/chefs-hero.webp`,
  },

  'in-villa-service-waiters': {
    path: '/in-villa-service/waiters',
    title: 'Waiter Hire Bali | Per-Shift Villa Waiters — myCHEF',
    description:
      'Hire waiters in Bali for villa dinners, weddings, and events. Uniformed staff handle serving, clearing, and calm guest flow.',
    canonical: `${SITE}/in-villa-service/waiters`,
    h1: 'Waiter Hire in Bali',
    ogImage: `${SITE}/generated/aura-bartender.webp`,
  },

  'in-villa-service-butlers': {
    path: '/in-villa-service/butlers',
    title: 'Butler Service Bali | Villa Butlers Per Shift — myCHEF',
    description:
      'Book a villa butler in Bali for arrival service, discreet hosting, table resets, and polished support throughout the stay.',
    canonical: `${SITE}/in-villa-service/butlers`,
    h1: 'Butler Service in Bali',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  'in-villa-service-bartenders': {
    path: '/in-villa-service/bartenders',
    title: 'Bartender Hire Bali | Villa Bartenders — myCHEF',
    description:
      'Hire a Bali bartender for villa parties and dinners. Cocktails, glassware, ice, garnish prep, and smooth service in one booking.',
    canonical: `${SITE}/in-villa-service/bartenders`,
    h1: 'Bartender Hire in Bali',
    ogImage: `${SITE}/generated/aura-bartender.webp`,
  },

  'in-villa-service-mixology': {
    path: '/in-villa-service/mixology',
    title: 'Mixology Bali | Private Villa Cocktail Programs — myCHEF',
    description:
      'Add private mixology in Bali for signature cocktails, guided tastings, and cocktail classes built around your villa gathering.',
    canonical: `${SITE}/in-villa-service/mixology`,
    h1: 'Private Mixology in Bali',
    ogImage: `${SITE}/bartender.webp`,
  },

  'in-villa-service-sommelier': {
    path: '/in-villa-service/sommelier',
    title: 'Sommelier Bali | Villa Wine Pairings — myCHEF',
    description:
      'Hire a sommelier in Bali for villa wine pairings, bottle selection, and service that lifts tasting menus, dinners, and celebrations.',
    canonical: `${SITE}/in-villa-service/sommelier`,
    h1: 'Sommelier Service in Bali',
    ogImage: `${SITE}/generated/luna-wine.webp`,
  },

  'in-villa-service-host-hostess': {
    path: '/in-villa-service/host-hostess',
    title: 'Host & Hostess Hire Bali | Event Reception — myCHEF',
    description:
      'Book hosts and hostesses in Bali to greet guests, manage arrival flow, and keep villa weddings and events running smoothly.',
    canonical: `${SITE}/in-villa-service/host-hostess`,
    h1: 'Host & Hostess Hire in Bali',
    ogImage: `${SITE}/generated/trust-hosts.webp`,
  },

  'staffing-private-chef-placement': {
    path: '/staffing/private-chef-placement',
    title: 'Private Chef Placement Bali | Villa Recruitment — myCHEF',
    description:
      'Fill long-term kitchen roles faster with private chef placement in Bali. Vetted candidates, trials, contracts, and onboarding support.',
    canonical: `${SITE}/staffing/private-chef-placement`,
    h1: 'Private Chef Placement in Bali',
    ogImage: `${SITE}/generated/staffing-hero.webp`,
  },

  'staffing-live-in-chef': {
    path: '/staffing/live-in-chef',
    title: 'Live-In Chef Bali | Full-Time Villa Chef Placement — myCHEF',
    description:
      'Find a live-in chef in Bali for daily family meals, estate stays, and full-time kitchen coverage with vetted monthly placements.',
    canonical: `${SITE}/staffing/live-in-chef`,
    h1: 'Live-In Chef Placement in Bali',
    ogImage: `${SITE}/generated/staffing-kitchen.webp`,
  },

  'staffing-villa-staff': {
    path: '/staffing/villa-staff',
    title: 'Villa Staff Placement Bali | Managers & Housekeepers — myCHEF',
    description:
      'Hire villa staff in Bali with one partner for managers, housekeepers, gardeners, pool crew, and front-of-house hospitality roles.',
    canonical: `${SITE}/staffing/villa-staff`,
    h1: 'Villa Staff Placement in Bali',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

  'staffing-household-staff': {
    path: '/staffing/household-staff',
    title: 'Household Staff Bali | Private Estate Recruitment — myCHEF',
    description:
      'Recruit household staff in Bali for residences and estates, from housekeepers and drivers to nannies and heads of house.',
    canonical: `${SITE}/staffing/household-staff`,
    h1: 'Household Staff Placement in Bali',
    ogImage: `${SITE}/generated/staffing-table.webp`,
  },

  'staffing-for-villa-managers': {
    path: '/staffing/for-villa-managers',
    title: 'Staffing for Villa Managers Bali | myCHEF',
    description:
      'Give your properties faster staffing support with vetted chefs and service hires for Bali villa managers and hospitality teams.',
    canonical: `${SITE}/staffing/for-villa-managers`,
    h1: 'Staffing for Villa Managers in Bali',
    ogImage: `${SITE}/generated/corp-villa.webp`,
  },

  'staffing-for-hotels-restaurants': {
    path: '/staffing/for-hotels-restaurants',
    title: 'Hotels & Restaurants Staffing Bali | myCHEF',
    description:
      'Solve hospitality hiring in Bali with vetted chefs, servers, and managers for hotels, restaurants, beach clubs, and resorts.',
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
