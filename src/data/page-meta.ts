/**
 * myCHEF — PAGE META DATA
 *
 * Centralised, unique title / description / H1 for every primary route.
 * Prevents duplicate title tag catastrophes and keeps SEO data in one
 * typed source of truth.
 *
 * KEYWORD OWNERSHIP: before changing title/h1/description, read
 * docs/seo/KEYWORD-OWNERSHIP-MAP.md. One primary page owns each commercial
 * keyword; supporting pages must lead with a modifier (area/occasion/format).
 *
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
    title: 'Private Chef Bali | Michelin-Trained Villa Dining & Events',
    description:
      'Hire a private chef in Bali for villa dining, BBQs, weddings & events. Michelin-trained team, clear prices from IDR 700K/guest. WhatsApp reply in 1 hour.',
    canonical: `${SITE}/`,
    h1: 'Private Chef in Bali — Your Villa. Our Kitchen.',
    ogImage: `${SITE}/hero-home.webp`,
  },

      'locations-seminyak': {
    path: '/locations/seminyak',
    title: 'Private Dining in Seminyak | Dining Guide & Chef Services',
    description:
      'Seminyak dining guide: Petitenget and Oberoi restaurants, beach clubs, private dining rooms, and in-villa chef options for villa stays. Local picks by myCHEF.',
    canonical: `${SITE}/locations/seminyak`,
    h1: 'Private Dining in Seminyak: Where to Eat & In-Villa Chef Options',
  },

      'locations-canggu': {
    path: '/locations/canggu',
    title: 'Private Dining in Canggu | Dining Guide & Chef Services',
    description:
      'Canggu dining guide: Berawa to Batu Bolong cafes, beach clubs, private dining, and in-villa chef options for surf-town villa stays. Local picks by myCHEF.',
    canonical: `${SITE}/locations/canggu`,
    h1: 'Private Dining in Canggu: Where to Eat & In-Villa Chef Options',
  },

      'locations-uluwatu': {
    path: '/locations/uluwatu',
    title: 'Private Dining in Uluwatu | Dining Guide & Chef Services',
    description:
      'Uluwatu dining guide: clifftop restaurants, sunset spots, private dining rooms, and in-villa chef options for Bukit villa stays. Local picks by myCHEF.',
    canonical: `${SITE}/locations/uluwatu`,
    h1: 'Private Dining in Uluwatu: Where to Eat & In-Villa Chef Options',
  },

      'locations-ubud': {
    path: '/locations/ubud',
    title: 'Private Dining in Ubud | Dining Guide & Chef Services',
    description:
      'Ubud dining guide: rice-field restaurants, farm-to-table spots, private dining, and in-villa chef options for jungle villa stays. Local picks by myCHEF.',
    canonical: `${SITE}/locations/ubud`,
    h1: 'Private Dining in Ubud: Where to Eat & In-Villa Chef Options',
  },

      'locations-nusa-dua': {
    path: '/locations/nusa-dua',
    title: 'Private Dining in Nusa Dua | Dining Guide & Chef Services',
    description:
      'Nusa Dua dining guide: resort restaurants, BTDC private dining, and in-villa chef options for corporate stays and family villas. Local picks by myCHEF.',
    canonical: `${SITE}/locations/nusa-dua`,
    h1: 'Private Dining in Nusa Dua: Where to Eat & In-Villa Chef Options',
  },

      'locations-jimbaran': {
    path: '/locations/jimbaran',
    title: 'Private Dining in Jimbaran | Dining Guide & Chef Services',
    description:
      'Jimbaran dining guide: bay seafood restaurants, beach BBQs, private dining rooms, and in-villa chef options for bayfront villa stays. Local picks by myCHEF.',
    canonical: `${SITE}/locations/jimbaran`,
    h1: 'Private Dining in Jimbaran: Where to Eat & In-Villa Chef Options',
  },

      'locations-sanur': {
    path: '/locations/sanur',
    title: 'Private Dining in Sanur | Dining Guide & Chef Services',
    description:
      'Sanur dining guide: calm beachfront restaurants, family-friendly spots, private dining, and in-villa chef options for east-coast villa stays. By myCHEF.',
    canonical: `${SITE}/locations/sanur`,
    h1: 'Private Dining in Sanur: Where to Eat & In-Villa Chef Options',
  },

      'locations-pererenan': {
    path: '/locations/pererenan',
    title: 'Private Dining in Pererenan | Dining Guide & Chef Services',
    description:
      'Pererenan dining guide: design cafes, quiet beach clubs, private dining, and in-villa chef options for west-coast villa stays north of Canggu. By myCHEF.',
    canonical: `${SITE}/locations/pererenan`,
    h1: 'Private Dining in Pererenan: Where to Eat & In-Villa Chef Options',
  },

      'locations-bukit': {
    path: '/locations/bukit',
    title: 'Private Dining in Bukit | Dining Guide & Chef Services',
    description:
      'Bukit Peninsula dining guide: Bingin to Uluwatu restaurants, clifftop private dining, and in-villa chef options for surf and sunset villas. By myCHEF.',
    canonical: `${SITE}/locations/bukit`,
    h1: 'Private Dining in Bukit: Where to Eat & In-Villa Chef Options',
  },

      'locations-kuta': {
    path: '/locations/kuta',
    title: 'Private Dining in Kuta | Dining Guide & Chef Services',
    description:
      'Kuta dining guide: central Bali restaurants, beach clubs, private dining rooms, and in-villa chef options for group villas near the airport. By myCHEF.',
    canonical: `${SITE}/locations/kuta`,
    h1: 'Private Dining in Kuta: Where to Eat & In-Villa Chef Options',
  },

      'locations-denpasar': {
    path: '/locations/denpasar',
    title: 'Private Dining in Denpasar | Dining Guide & Chef Services',
    description:
      'Denpasar dining guide: local restaurants, business lunch spots, private dining, and in-villa chef options for city stays and residential compounds. By myCHEF.',
    canonical: `${SITE}/locations/denpasar`,
    h1: 'Private Dining in Denpasar: Where to Eat & In-Villa Chef Options',
  },

      'private-chef-seminyak': {
    path: '/private-chef/seminyak',
    title: 'Private Chef in Seminyak, Bali | Hire a Chef for Your Villa',
    description:
      'Hire a private chef in Seminyak, Bali. Villa dinners, fine dining, catering and events. HACCP chefs from IDR 1M++/day. Fixed quotes via WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/seminyak`,
    h1: 'Private Chef in Seminyak, Bali',
  },

      'private-chef-canggu': {
    path: '/private-chef/canggu',
    title: 'Private Chef in Canggu, Bali | Villa Dining & Meal Prep',
    description:
      'Hire a private chef in Canggu, Bali. Weekly meal prep, villa dinners, catering and birthday parties. HACCP-certified chefs, transparent rates. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/canggu`,
    h1: 'Private Chef in Canggu, Bali',
  },

      'private-chef-ubud': {
    path: '/private-chef/ubud',
    title: 'Private Chef in Ubud, Bali | Villa Dining, Retreat Catering',
    description:
      'Hire a private chef in Ubud, Bali. Balinese tasting menus, plant-based retreat catering and jungle villa dinners. HACCP chefs, clear rates. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/ubud`,
    h1: 'Private Chef in Ubud, Bali',
  },

      'private-chef-uluwatu': {
    path: '/private-chef/uluwatu',
    title: 'Private Chef in Uluwatu, Bali | Clifftop Villa Dining',
    description:
      'Book a private chef in Uluwatu, Bali. Clifftop fine dining, wedding catering and villa dinners. HACCP-certified chefs, transparent pricing. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/uluwatu`,
    h1: 'Private Chef in Uluwatu, Bali',
  },

      'private-chef-jimbaran': {
    path: '/private-chef/jimbaran',
    title: 'Private Chef in Jimbaran, Bali | Seafood Villa Dining',
    description:
      'Book a private chef in Jimbaran, Bali. Fresh seafood BBQ, fine dining and villa events. Boat-to-villa seafood sourcing. Transparent pricing. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/jimbaran`,
    h1: 'Private Chef in Jimbaran, Bali',
  },

      'private-chef-nusa-dua': {
    path: '/private-chef/nusa-dua',
    title: 'Private Chef Nusa Dua, Bali | Corporate, Luxury Villa Dining',
    description:
      'Hire a private chef in Nusa Dua, Bali. Corporate retreat catering, executive fine dining and villa events. Five-star service, clear packages. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/nusa-dua`,
    h1: 'Private Chef in Nusa Dua, Bali',
  },

      'private-chef-sanur': {
    path: '/private-chef/sanur',
    title: 'Private Chef in Sanur, Bali | Family Villa Dining, Meal Prep',
    description:
      'Book a private chef in Sanur, Bali. Family villa dinners, weekly meal prep and event catering. HACCP-certified chefs, transparent pricing. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/sanur`,
    h1: 'Private Chef in Sanur, Bali',
  },

      'private-chef-denpasar': {
    path: '/private-chef/denpasar',
    title: 'Private Chef Denpasar, Bali | Executive, Residential Dining',
    description:
      'Hire a private chef in Denpasar, Bali. Executive dinner parties, corporate catering and household meal prep in the capital. HACCP-certified chefs. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/denpasar`,
    h1: 'Private Chef in Denpasar, Bali',
  },

      'private-chef-berawa': {
    path: '/private-chef/berawa',
    title: 'Private Chef Berawa, Bali | Villa Dining, Birthday Catering',
    description:
      'Book a private chef in Berawa, Bali. Villa birthday parties, weekly meal prep and fine dining. HACCP-certified chefs, transparent pricing. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/berawa`,
    h1: 'Private Chef in Berawa, Bali',
  },

      'private-chef-pererenan': {
    path: '/private-chef/pererenan',
    title: 'Private Chef in Pererenan, Bali | Villa Dining, Meal Prep',
    description:
      'Book a private chef in Pererenan, Bali. Private villa dinners, meal prep and small-group fine dining. HACCP-certified, transparent pricing. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/pererenan`,
    h1: 'Private Chef in Pererenan, Bali',
  },

      'private-chef-kerobokan': {
    path: '/private-chef/kerobokan',
    title: 'Private Chef Kerobokan, Bali | Residential Dining, Meal Prep',
    description:
      'Book a private chef in Kerobokan, Bali. Regular household meal prep, dinner parties and villa events. Transparent pricing, HACCP-certified. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/kerobokan`,
    h1: 'Private Chef in Kerobokan, Bali',
  },

      'private-chef-petitenget': {
    path: '/private-chef/petitenget',
    title: 'Private Chef in Petitenget, Bali | Fine Dining at Your Villa',
    description:
      'Book a private chef in Petitenget, Bali. Fine dining tasting menus and romantic villa dinners. HACCP-certified chefs, transparent pricing. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/petitenget`,
    h1: 'Private Chef in Petitenget, Bali',
  },

      'private-chef-kuta': {
    path: '/private-chef/kuta',
    title: 'Private Chef in Kuta, Bali | Villa Dinner & Catering',
    description:
      'Hire a private chef in Kuta, Bali. Villa dinners, group catering and birthday parties. HACCP chefs from IDR 1M++/day. Transparent quotes — WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/kuta`,
    h1: 'Private Chef in Kuta, Bali',
  },

      'private-chef-legian': {
    path: '/private-chef/legian',
    title: 'Private Chef in Legian, Bali | Villa Dining & Catering',
    description:
      'Book a private chef in Legian, Bali. Villa group dinners, poolside catering and event service. HACCP-certified chefs with transparent pricing. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/legian`,
    h1: 'Private Chef in Legian, Bali',
  },

      'private-chef-bukit': {
    path: '/private-chef/bukit',
    title: 'Private Chef Bukit Peninsula Bali | Clifftop Villa Dining',
    description:
      'Book a private chef on the Bukit Peninsula, Bali. Clifftop fine dining, elopement dinners and villa events in Bingin, Padang Padang and Dreamland. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/bukit`,
    h1: 'Private Chef in Bukit Peninsula, Bali',
  },

      'private-chef-umalas': {
    path: '/private-chef/umalas',
    title: 'Private Chef in Umalas, Bali | Villa Dining & Catering',
    description:
      'Book a private chef in Umalas, Bali. Intimate villa dinners, catering and fine dining for retreats and groups — no travel surcharge in the Umalas zone. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/umalas`,
    h1: 'Private Chef in Umalas, Bali',
  },

      'private-chef-batu-belig': {
    path: '/private-chef/batu-belig',
    title: 'Private Chef in Batu Belig, Bali | Beachfront Villa Dining',
    description:
      'Book a private chef at Batu Belig beach villas, Bali. Sunset dinners, fine dining and catering on the quiet stretch of beach between Seminyak and Canggu. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/batu-belig`,
    h1: 'Private Chef in Batu Belig, Bali',
  },

      'private-chef-pecatu': {
    path: '/private-chef/pecatu',
    title: 'Private Chef in Pecatu, Bali | Clifftop Villa Dining',
    description:
      'Book a private chef in Pecatu, Bali. Clifftop villa dinners, honeymoon fine dining and events on the Bukit Peninsula. Transparent rates. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/pecatu`,
    h1: 'Private Chef in Pecatu, Bali',
  },

      'private-chef-ungasan': {
    path: '/private-chef/ungasan',
    title: 'Private Chef in Ungasan, Bali | Clifftop Villa Dining',
    description:
      'Book a private chef in Ungasan, Bali. Luxury villa dinners and elopement fine dining at the southernmost tip of the Bukit Peninsula. Clear rates via WhatsApp.',
    canonical: `${SITE}/private-chef/ungasan`,
    h1: 'Private Chef in Ungasan, Bali',
  },

      'private-chef-tanjung-benoa': {
    path: '/private-chef/tanjung-benoa',
    title: 'Private Chef in Tanjung Benoa, Bali | Villa Dining, Catering',
    description:
      'Book a private chef in Tanjung Benoa, Bali. Family villa dinners, catering and fine dining near Nusa Dua. No travel surcharge. Clear rates via WhatsApp.',
    canonical: `${SITE}/private-chef/tanjung-benoa`,
    h1: 'Private Chef in Tanjung Benoa, Bali',
  },

      'private-chef-sayan': {
    path: '/private-chef/sayan',
    title: 'Private Chef in Sayan, Bali | Jungle Villa Dining | myCHEF',
    description:
      'Book a private chef in Sayan, Bali. Jungle fine dining above the Ayung River gorge — intimate tasting menus, retreat meals and end-to-end villa service. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/sayan`,
    h1: 'Private Chef in Sayan, Bali',
  },

      'private-chef-tegallalang': {
    path: '/private-chef/tegallalang',
    title: 'Private Chef Tegallalang Bali | Rice Terrace Villa Dining',
    description:
      'Book a private chef in Tegallalang, Bali. Private dinners overlooking the famous rice terraces — Balinese cuisine, fine dining, and catering for retreats.',
    canonical: `${SITE}/private-chef/tegallalang`,
    h1: 'Private Chef in Tegallalang, Bali',
  },

      'private-chef-renon': {
    path: '/private-chef/renon',
    title: 'Private Chef Renon, Denpasar Bali | Corporate, Villa Dining',
    description:
      'Book a private chef in Renon, Denpasar — corporate dinners, expat villa dining and catering in Bali\'s diplomatic quarter. Transparent rates and WhatsApp quotes from myCHEF.',
    canonical: `${SITE}/private-chef/renon`,
    h1: 'Private Chef in Renon, Bali',
  },

      'private-chef-tanah-lot': {
    path: '/private-chef/tanah-lot',
    title: 'Private Chef near Tanah Lot, Bali | Sunset Villa Dining',
    description:
      'Book a private chef near Tanah Lot, Bali — sunset dinners, honeymoon fine dining and retreat catering on Tabanan\'s west coast. Transparent rates and WhatsApp quotes.',
    canonical: `${SITE}/private-chef/tanah-lot`,
    h1: 'Private Chef in Tanah Lot, Bali',
  },

      'private-chef-nusa-lembongan': {
    path: '/private-chef/nusa-lembongan',
    title: 'Private Chef on Nusa Lembongan | myCHEF Bali',
    description:
      'Book a private chef on Nusa Lembongan, Bali — fresh seafood, sunset fine dining and villa catering for island stays. Logistics-aware team. myCHEF travels to you.',
    canonical: `${SITE}/private-chef/nusa-lembongan`,
    h1: 'Private Chef in Nusa Lembongan, Bali',
  },

      'private-chef-nusa-penida': {
    path: '/private-chef/nusa-penida',
    title: 'Private Chef on Nusa Penida | myCHEF Bali',
    description:
      'Book a private chef on Nusa Penida, Bali. Clifftop villa fine dining and island catering at Kelingking, Crystal Bay, and Atuh Beach. myCHEF travels to you.',
    canonical: `${SITE}/private-chef/nusa-penida`,
    h1: 'Private Chef in Nusa Penida, Bali',
  },

      'private-chef-mas': {
    path: '/private-chef/mas',
    title: 'Private Chef Mas Bali | Ubud Corridor Villa Dining',
    description:
      'Book a private chef in Mas, Bali. myCHEF cooks at your boutique villa — fine dining, Balinese feasts, and catering for retreat groups. Gianyar artisan.',
    canonical: `${SITE}/private-chef/mas`,
    h1: 'Private Chef in Mas, Bali',
  },

      'private-chef-penestanan': {
    path: '/private-chef/penestanan',
    title: 'Private Chef in Penestanan, Bali | Rice Terrace Villa Dining',
    description:
      'Hire a private chef in Penestanan, Bali. myCHEF cooks at your ridge villa above the Campuhan — fine dining, tasting menus and retreat catering. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/penestanan`,
    h1: 'Private Chef in Penestanan, Bali',
  },

      'private-chef-nyanyi': {
    path: '/private-chef/nyanyi',
    title: 'Private Chef in Nyanyi, Bali | Tabanan Beach Villa Dining',
    description:
      'Hire a private chef in Nyanyi, Tabanan. myCHEF cooks at your coast villa — fresh seafood, sunset fine dining, and catering for surf retreats and families.',
    canonical: `${SITE}/private-chef/nyanyi`,
    h1: 'Private Chef in Nyanyi, Bali',
  },

      'private-chef-cemagi': {
    path: '/private-chef/cemagi',
    title: 'Private Chef Cemagi Bali | Luxury Tabanan Coast Dining',
    description:
      'Hire a private chef in Cemagi, Tabanan — luxury west-coast villas, wedding dinners and retreat catering. Multi-day packages available. WhatsApp myCHEF for a fast quote.',
    canonical: `${SITE}/private-chef/cemagi`,
    h1: 'Private Chef in Cemagi, Bali',
  },

      'private-chef-seseh': {
    path: '/private-chef/seseh',
    title: 'Private Chef Seseh Bali | Cliffside Tabanan Dining | myCHEF',
    description:
      'Hire a private chef in Seseh, Tabanan. myCHEF serves private coastal villas — fine dining, intimate dinners, and catering on the black-sand west coast.',
    canonical: `${SITE}/private-chef/seseh`,
    h1: 'Private Chef in Seseh, Bali',
  },

      'private-chef-nusa-ceningan': {
    path: '/private-chef/nusa-ceningan',
    title: 'Private Chef on Nusa Ceningan | myCHEF Bali',
    description:
      'Book a private chef on Nusa Ceningan, Bali. myCHEF travels to the sister islands — clifftop fine dining, seafood feasts, and island catering at your villa.',
    canonical: `${SITE}/private-chef/nusa-ceningan`,
    h1: 'Private Chef in Nusa Ceningan, Bali',
  },

      'private-chef-balangan': {
    path: '/private-chef/balangan',
    title: 'Private Chef Balangan Bali | Clifftop Villa Dining | myCHEF',
    description:
      'Book a private chef in Balangan, Bali. myCHEF serves clifftop villas on the Bukit Peninsula — seafood dinners, Balinese menus and surf-trip catering packages.',
    canonical: `${SITE}/private-chef/balangan`,
    h1: 'Private Chef in Balangan, Bali',
  },

      'private-chef-bingin': {
    path: '/private-chef/bingin',
    title: 'Private Chef Bingin Bali | Clifftop Villa Dining | myCHEF',
    description:
      'Private chef in Bingin, Bali. myCHEF cooks in cliff villas above the break — sunset dinners, seafood feasts, and surf-trip catering on the Bukit Peninsula.',
    canonical: `${SITE}/private-chef/bingin`,
    h1: 'Private Chef in Bingin, Bali',
  },

      'private-chef-padang-padang': {
    path: '/private-chef/padang-padang',
    title: 'Private Chef Padang Padang Bali | Villa Dining | myCHEF',
    description:
      'Book a private chef near Padang Padang, Bali. myCHEF serves Bukit Peninsula villas — sunset dinners, surf-trip catering and Balinese menus by the beach. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/padang-padang`,
    h1: 'Private Chef in Padang Padang, Bali',
  },

      'private-chef-sukawati': {
    path: '/private-chef/sukawati',
    title: 'Private Chef Sukawati Bali | Balinese Villa Dining | myCHEF',
    description:
      'Hire a private chef in Sukawati. myCHEF serves Gianyar villas with authentic Balinese menus, traditional cooking and private dining in rice-field estates. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/sukawati`,
    h1: 'Private Chef in Sukawati, Bali',
  },

      'private-chef-payangan': {
    path: '/private-chef/payangan',
    title: 'Private Chef Payangan Bali | Retreat Villa Dining | myCHEF',
    description:
      'Book a private chef in Payangan, Bali. myCHEF serves highland retreats and eco-villas north of Ubud — organic menus, wellness catering and Balinese feasts. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/payangan`,
    h1: 'Private Chef in Payangan, Bali',
  },

      'private-chef-keramas': {
    path: '/private-chef/keramas',
    title: 'Private Chef Keramas Bali | Black Sand Beach Villa Dining',
    description:
      'Book a private chef in Keramas, Bali. myCHEF serves east Gianyar coast villas — surf-trip catering, Balinese menus and private dining near the break. WhatsApp.',
    canonical: `${SITE}/private-chef/keramas`,
    h1: 'Private Chef in Keramas, Bali',
  },

      'private-chef-bedugul': {
    path: '/private-chef/bedugul',
    title: 'Private Chef Bedugul Bali | Highland Lake Villa Dining',
    description:
      'Book a private chef in Bedugul, Bali. myCHEF serves highland villas near Lake Beratan — mountain menus with fresh local produce, retreats, and private.',
    canonical: `${SITE}/private-chef/bedugul`,
    h1: 'Private Chef in Bedugul, Bali',
  },

      'private-chef-jatiluwih': {
    path: '/private-chef/jatiluwih',
    title: 'Private Chef Jatiluwih Bali | UNESCO Rice Terrace Dining',
    description:
      'Hire a private chef in Jatiluwih. myCHEF serves highland villas near the UNESCO rice terraces — Balinese menus, local produce and private dining. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/jatiluwih`,
    h1: 'Private Chef in Jatiluwih, Bali',
  },

      'private-chef-tabanan': {
    path: '/private-chef/tabanan',
    title: 'Private Chef Tabanan Bali | Villa Dining West Bali | myCHEF',
    description:
      'Book a private chef in Tabanan, Bali. myCHEF serves Tabanan regency villas — fresh local produce, Balinese menus and private dining in West Bali. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/tabanan`,
    h1: 'Private Chef in Tabanan, Bali',
  },

      'private-chef-amed': {
    path: '/private-chef/amed',
    title: 'Private Chef Amed Bali | Seafood Villa Dining East Bali',
    description:
      'Book a private chef in Amed, Bali. myCHEF serves east coast villas and dive resorts — fresh local seafood, Balinese menus and private dining. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/amed`,
    h1: 'Private Chef in Amed, Bali',
  },

      'private-chef-sidemen': {
    path: '/private-chef/sidemen',
    title: 'Private Chef Sidemen Bali | Rice Terrace Villa Dining',
    description:
      'Book a private chef in Sidemen, Bali. myCHEF serves the Sidemen valley — Balinese menus, highland produce and private dining below Mount Agung. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/sidemen`,
    h1: 'Private Chef in Sidemen, Bali',
  },

      'private-chef-candidasa': {
    path: '/private-chef/candidasa',
    title: 'Private Chef Candidasa Bali | East Bali Villa Dining',
    description:
      'Hire a private chef in Candidasa. myCHEF serves East Bali villas and guesthouses — fresh seafood menus, Balinese cooking, and private dining in Karangasem.',
    canonical: `${SITE}/private-chef/candidasa`,
    h1: 'Private Chef in Candidasa, Bali',
  },

      'private-chef-tulamben': {
    path: '/private-chef/tulamben',
    title: 'Private Chef Tulamben Bali | Dive Resort Catering | myCHEF',
    description:
      'Book a private chef in Tulamben, Bali. myCHEF serves dive resorts and villas near the USAT Liberty wreck — seafood menus, group catering and private dining.',
    canonical: `${SITE}/private-chef/tulamben`,
    h1: 'Private Chef in Tulamben, Bali',
  },

      'private-chef-lovina': {
    path: '/private-chef/lovina',
    title: 'Private Chef Lovina Bali | North Bali Villa Dining | myCHEF',
    description:
      'Book a private chef in Lovina, Bali. myCHEF serves North Bali villas and resorts — fresh local fish, Balinese menus, and private dining on the black sand.',
    canonical: `${SITE}/private-chef/lovina`,
    h1: 'Private Chef in Lovina, Bali',
  },

      'private-chef-singaraja': {
    path: '/private-chef/singaraja',
    title: 'Private Chef Singaraja Bali | North Bali Event Catering',
    description:
      'Book a private chef in Singaraja, Bali. myCHEF serves Buleleng regency — North Balinese cuisine, villa dining, and event catering in the historic port.',
    canonical: `${SITE}/private-chef/singaraja`,
    h1: 'Private Chef in Singaraja, Bali',
  },

      'private-chef-pemuteran': {
    path: '/private-chef/pemuteran',
    title: 'Private Chef Pemuteran Bali | Eco-Villa Diving Resort Dining',
    description:
      'Hire a private chef in Pemuteran. myCHEF serves Menjangan Island villas — fresh seafood, organic menus and private dining in northwest Bali. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/pemuteran`,
    h1: 'Private Chef in Pemuteran, Bali',
  },

      'private-chef-kintamani': {
    path: '/private-chef/kintamani',
    title: 'Private Chef Kintamani Bali | Mount Batur Villa Dining',
    description:
      'Hire a private chef in Kintamani. myCHEF serves highland villas on the Mount Batur caldera rim — warming mountain menus, sunrise breakfasts, and private.',
    canonical: `${SITE}/private-chef/kintamani`,
    h1: 'Private Chef in Kintamani, Bali',
  },

      'private-chef-kedewatan': {
    path: '/private-chef/kedewatan',
    title: 'Private Chef Kedewatan Bali | Ayung Gorge Villa Dining',
    description:
      'Hire a private chef in Kedewatan. myCHEF serves Amandari-area gorge villas with Michelin-trained chefs — tasting menus, intimate dinners and luxury catering. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/kedewatan`,
    h1: 'Private Chef in Kedewatan, Bali',
  },

      'private-chef-nyuh-kuning': {
    path: '/private-chef/nyuh-kuning',
    title: 'Private Chef Nyuh Kuning Bali | Monkey Forest Villa Dining',
    description:
      'Hire a private chef in Nyuh Kuning beside Ubud\'s Sacred Monkey Forest — boutique villa dinners, Balinese menus and quiet retreat catering. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/nyuh-kuning`,
    h1: 'Private Chef in Nyuh Kuning, Bali',
  },

      'private-chef-lodtunduh': {
    path: '/private-chef/lodtunduh',
    title: 'Private Chef Lodtunduh Bali | Villa Estate, Retreat Catering',
    description:
      'Hire a private chef in Lodtunduh. myCHEF serves estates between Ubud and Mas — daily catering, group dinners and Balinese menus. WhatsApp myCHEF for a quote.',
    canonical: `${SITE}/private-chef/lodtunduh`,
    h1: 'Private Chef in Lodtunduh, Bali',
  },

      'private-chef-tirta-gangga': {
    path: '/private-chef/tirta-gangga',
    title: 'Private Chef Tirta Gangga Bali | Royal Palace Villa Dining',
    description:
      'Hire a private chef in Tirta Gangga, East Bali. myCHEF serves villas near royal water gardens — intimate dinners, Balinese cuisine and luxury villa catering. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/tirta-gangga`,
    h1: 'Private Chef in Tirta Gangga, Bali',
  },

      'private-chef-munduk': {
    path: '/private-chef/munduk',
    title: 'Private Chef Munduk Bali | Highland Plantation Villa Dining',
    description:
      'Hire a private chef in Munduk. myCHEF serves Buleleng highland villas — warming mountain menus, waterfall-view dinners and highland catering. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/munduk`,
    h1: 'Private Chef in Munduk, Bali',
  },

      'private-chef-gianyar': {
    path: '/private-chef/gianyar',
    title: 'Private Chef Gianyar Bali | Gianyar Villa, Event Catering',
    description:
      'Hire a private chef in Gianyar, Bali\'s cultural capital — babi guling feasts, Balinese menus and villa catering near Ubud\'s hinterland. WhatsApp myCHEF for packages.',
    canonical: `${SITE}/private-chef/gianyar`,
    h1: 'Private Chef in Gianyar, Bali',
  },

      'private-chef-padang-bai': {
    path: '/private-chef/padang-bai',
    title: 'Private Chef Padang Bai Bali | Harbour Seafood Dining',
    description:
      'Book a private chef in Padang Bai, East Bali. myCHEF serves boutique villas with fresh seafood BBQs, Balinese menus, and villa catering near the ferry.',
    canonical: `${SITE}/private-chef/padang-bai`,
    h1: 'Private Chef in Padang Bai, Bali',
  },

      'private-chef-baturiti': {
    path: '/private-chef/baturiti',
    title: 'Private Chef Baturiti Bali | Highland Strawberry Dining',
    description:
      'Hire a private chef in Baturiti. myCHEF serves Bedugul highland villas — farm-fresh menus, warming mountain dinners and highland catering. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/baturiti`,
    h1: 'Private Chef in Baturiti, Bali',
  },

      'private-chef-mengwi': {
    path: '/private-chef/mengwi',
    title: 'Private Chef Mengwi Bali | Royal Temple Town Villa Dining',
    description:
      'Hire a private chef in Mengwi. myCHEF serves villas near Pura Taman Ayun — family dinners, Balinese feast menus and catering in the heart of Badung. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/mengwi`,
    h1: 'Private Chef in Mengwi, Bali',
  },

      'private-chef-ketewel': {
    path: '/private-chef/ketewel',
    title: 'Private Chef Ketewel Bali | Beachfront & BBQ Dining',
    description:
      'Hire a private chef in Ketewel. myCHEF serves Gianyar beachfront villas — seafood BBQs, sunset dinners and villa catering between Sanur and Keramas. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/ketewel`,
    h1: 'Private Chef in Ketewel, Bali',
  },

      'private-chef-abiansemal': {
    path: '/private-chef/abiansemal',
    title: 'Private Chef Abiansemal Bali | Highland Wine Estate Dining',
    description:
      'Hire a private chef in Abiansemal. myCHEF serves central Badung estates — wine-pairing dinners, farm-to-table menus, and Hatten Wines country catering.',
    canonical: `${SITE}/private-chef/abiansemal`,
    h1: 'Private Chef in Abiansemal, Bali',
  },

      'private-chef-cepaka': {
    path: '/private-chef/cepaka',
    title: 'Private Chef Cepaka Bali | Tabanan Coast Villa Dining',
    description:
      'Hire a private chef in Cepaka. myCHEF serves Tabanan coast villas — sunset BBQs, villa dinners and catering in Bali\'s newest villa corridor. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef/cepaka`,
    h1: 'Private Chef in Cepaka, Bali',
  },

      'villa-bbq-catering-bali': {
    path: '/villa-bbq-catering-bali',
    title: 'Villa BBQ Party Bali | Poolside Grill Nights & Packages',
    description:
      'In-villa BBQ party packages in Bali: chef, grill, setup & cleanup at your villa poolside. Packages for 6-80 guests with per-pax pricing. WhatsApp myCHEF.',
    canonical: `${SITE}/villa-bbq-catering-bali`,
    h1: 'Villa BBQ Parties in Bali — Poolside Grill Nights',
  },

      'bali-wedding-catering-packages': {
    path: '/bali-wedding-catering-packages',
    title: 'Bali Wedding Catering Packages & Prices 2026 | myCHEF',
    description:
      'Bali wedding catering packages with per-guest prices by headcount — plated, buffet and grazing. See inclusions, staffing and what changes the total. Updated 2026.',
    canonical: `${SITE}/bali-wedding-catering-packages`,
    h1: 'Bali Wedding Catering Packages — Transparent Pricing',
  },

      'michelin-private-chef-bali-prices': {
    path: '/michelin-private-chef-bali-prices',
    title: 'Michelin-Standard Chef Prices in Bali | 2026 Premium Guide',
    description:
      'Premium Michelin-standard chef pricing in Bali: tasting menus, groceries and service breakdowns for villa fine dining. Transparent 2026 figures — not the standard day-rate table.',
    canonical: `${SITE}/michelin-private-chef-bali-prices`,
    h1: 'Michelin-Standard Chef Prices in Bali — 2026 Guide',
  },

      'seafood-bbq-catering-bali': {
    path: '/seafood-bbq-catering-bali',
    title: 'Seafood BBQ Bali | Market-Fresh Grill at Your Villa | myCHEF',
    description:
      'Fresh seafood BBQs for Bali villas: snapper, prawns and lobster grilled live poolside, sourced direct from Jimbaran market. Clear packages via WhatsApp.',
    canonical: `${SITE}/seafood-bbq-catering-bali`,
    h1: 'Seafood BBQ Catering Bali — Direct-from-Market Freshness',
  },

      'group-villa-dinner-packages-bali': {
    path: '/group-villa-dinner-packages-bali',
    title: 'Group Villa Dinner Packages Bali | Private Chef & Luxury Dining | myCHEF',
    description:
      'Luxury group villa dinner packages in Bali for 10–150 guests. Private chef, villa catering, BBQ, fine dining and all-inclusive service for families, weddings and celebrations.',
    canonical: `${SITE}/group-villa-dinner-packages-bali`,
    h1: 'Group Villa Dinner Packages in Bali',
  },

      'corporate-retreat-catering-bali': {
    path: '/corporate-retreat-catering-bali',
    title: 'Corporate Retreat Catering Bali | Offsite Meal Programs',
    description:
      'Multi-day catering for corporate retreats and offsites in Bali: full-day meal structures, NPWP invoices and executive service. Clear quotes via WhatsApp.',
    canonical: `${SITE}/corporate-retreat-catering-bali`,
    h1: 'Corporate Retreat Catering Bali — Professional Event Hospitality',
  },

      'luxury-birthday-party-bali': {
    path: '/luxury-birthday-party-bali',
    title: 'Luxury Birthday Party Bali | Milestone Celebrations | myCHEF',
    description:
      'Luxury milestone birthday parties in Bali: private chef, premium menus, drinks and styling for 30th, 40th and 50th villa celebrations. Transparent packages — WhatsApp myCHEF.',
    canonical: `${SITE}/luxury-birthday-party-bali`,
    h1: 'Luxury Birthday Parties in Bali — Chef-Led & Fully Styled',
  },

      
      'butler-service-bali-daily-rate': {
    path: '/butler-service-bali-daily-rate',
    title: 'Butler Service Bali Cost: Daily Rates & Inclusions | myCHEF',
    description:
      'Butler service in Bali from IDR 1.2M per day — what is included, shift options, guest hosting duties and how booking works for villa stays. Transparent rates. WhatsApp myCHEF.',
    canonical: `${SITE}/butler-service-bali-daily-rate`,
    h1: 'Butler Service in Bali — Daily Rates Explained',
  },

      'best-private-chef-indonesia': {
    path: '/best-private-chef-indonesia',
    title: 'Best Private Chef Indonesia | Michelin-Standard Team',
    description:
      'Why myCHEF is trusted for private chef service in Indonesia: Michelin-trained leadership, 560+ events served, world-class villa standards. WhatsApp us.',
    canonical: `${SITE}/best-private-chef-indonesia`,
    h1: 'The Best Private Chef Service in Indonesia',
  },

      'private-chef-for-events': {
    path: '/private-chef-for-events',
    title: 'Private Chef for Events Bali | Hire a Chef for Your Event',
    description:
      'Hire a private chef for your Bali event — from intimate birthdays to large villa celebrations. Culinary team, menus and full service staff. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef-for-events`,
    h1: 'Private Chef for Events in Bali',
  },

      'luxury-chef-indonesia': {
    path: '/luxury-chef-indonesia',
    title: 'Luxury Private Chef Indonesia | Estates & Residences',
    description:
      'Luxury private chef services for high-end residences and estates across Indonesia — discreet, professional and refined. Enquire via WhatsApp myCHEF.',
    canonical: `${SITE}/luxury-chef-indonesia`,
    h1: 'Luxury Chef Indonesia — Premium Private Dining',
  },

      'wedding-catering-indonesia': {
    path: '/wedding-catering-indonesia',
    title: 'Wedding Catering Indonesia | Villa Wedding Specialists',
    description:
      'Premium wedding catering across Indonesia — Bali and beyond. Custom menus, full service teams and event coordination for multi-city couples. WhatsApp myCHEF.',
    canonical: `${SITE}/wedding-catering-indonesia`,
    h1: 'Wedding Catering Indonesia — Villa Wedding Specialists',
  },

      'private-dining-indonesia': {
    path: '/private-dining-indonesia',
    title: 'Private Dining Indonesia | At-Home Fine Dining | myCHEF',
    description:
      'At-home fine dining across Indonesia: Michelin-trained chefs, premium ingredients and professional service in your home or villa. Transparent quotes. WhatsApp myCHEF.',
    canonical: `${SITE}/private-dining-indonesia`,
    h1: 'Private Dining Indonesia — At-Home Fine Dining',
  },

      'healthy-meal-delivery-indonesia': {
    path: '/healthy-meal-delivery-indonesia',
    title: 'Healthy Meal Delivery Bali | Chef-Prepared Meal Plans',
    description:
      'Healthy meal delivery in Bali: chef-prepared, organic and nutrient-dense menus for villas and residences. Multi-day plans available. WhatsApp myCHEF.',
    canonical: `${SITE}/healthy-meal-delivery-indonesia`,
    h1: 'Healthy Meal Delivery — Chef-Prepared, Delivered',
  },

      'chef-for-hire-indonesia': {
    path: '/chef-for-hire-indonesia',
    title: 'Chef for Hire Indonesia | Private & Personal Chefs | myCHEF',
    description:
      'Hire a vetted private chef in Indonesia — one dinner, daily villa service, recurring meals or full-time placement in Bali. Clear quotes via WhatsApp myCHEF.',
    canonical: `${SITE}/chef-for-hire-indonesia`,
    h1: 'Chef for Hire Indonesia — Private Chef Services',
  },

      'proposal-dinner': {
    path: '/proposal-dinner',
    title: 'Proposal Dinner Bali | Private Chef Proposal Experience',
    description:
      'Plan the perfect proposal with a private chef dinner in your Bali villa — intimate, styled and unforgettable. Confidential planning. WhatsApp myCHEF.',
    canonical: `${SITE}/proposal-dinner`,
    h1: 'Proposal Dinner Bali — The Yes Starts at Dinner',
  },

      'honeymoon-chef': {
    path: '/honeymoon-chef',
    title: 'Honeymoon Chef Bali | Romantic Villa Dining for Couples',
    description:
      'Private chef experiences for honeymooners in Bali: romantic breakfasts, sunset dinners and intimate in-villa hosting. Custom menus. WhatsApp myCHEF.',
    canonical: `${SITE}/honeymoon-chef`,
    h1: 'Honeymoon Chef Bali — Private Villa Dining for Two',
  },

      'guide-private-chef-bali': {
    path: '/guide/private-chef-bali',
    title: 'Private Chef Bali Areas | Coverage Map by Villa Region | myCHEF',
    description:
      'myCHEF private chef coverage across Bali’s top villa regions — Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Berawa, Pererenan and Bukit. Pick your area and book.',
    canonical: `${SITE}/guide/private-chef-bali`,
    h1: 'Private Chef Coverage Across Bali',
    ogImage: `${SITE}/generated/bali-hub-hero.webp`,
  },

      'blog-private-chef-cost-bali': {
    path: '/blog/private-chef-cost-bali',
    title: 'How Much Does a Private Chef in Bali Cost? (2026 Guide)',
    description:
      'Private chef costs in Bali from IDR 1M++/day (chef + assistant) to IDR 20M+ events. Real 2026 pricing, inclusions, and how to book with myCHEF via WhatsApp.',
    canonical: `${SITE}/blog/private-chef-cost-bali`,
    h1: 'How Much Does a Private Chef in Bali Cost?',
  },

      'blog-best-bali-villas-private-chef-kitchen': {
    path: '/blog/best-bali-villas-private-chef-kitchen',
    title: 'What Makes a Bali Villa Kitchen Work for a Private Chef',
    description:
      'What private chefs need in a Bali villa kitchen — prep space, equipment, ventilation and cold storage — and how to check before you book. Guide by myCHEF.',
    canonical: `${SITE}/blog/best-bali-villas-private-chef-kitchen`,
    h1: 'What Makes a Bali Villa Kitchen Work for a Private Chef',
    ogImage: `${SITE}/generated/journal-hero.webp`,
  },

      'blog-private-chef-vs-restaurant-bali': {
    path: '/blog/private-chef-vs-restaurant-bali',
    title: 'Private Chef vs Restaurant Bali: Which Is Actually Better',
    description:
      'Private chef or restaurant in Bali? Full cost comparison, menu control, and comfort breakdown for groups, families, and villa stays. Find out which wins.',
    canonical: `${SITE}/blog/private-chef-vs-restaurant-bali`,
    h1: 'Private Chef vs Restaurant Bali: Which Is Actually Better for Groups?',
    ogImage: `${SITE}/generated/journal-hero.webp`,
  },

      'blog-how-to-plan-villa-birthday-party-bali': {
    path: '/blog/how-to-plan-villa-birthday-party-bali',
    title: 'How to Plan a Villa Birthday Party in Bali: Complete Guide',
    description:
      'Step-by-step guide to planning a villa birthday party in Bali — catering formats, guest counts, timelines, styling and chef logistics explained by myCHEF.',
    canonical: `${SITE}/blog/how-to-plan-villa-birthday-party-bali`,
    h1: 'How to Plan a Villa Birthday Party in Bali',
  },

      'blog-private-chef-romantic-dinners-bali': {
    path: '/blog/private-chef-romantic-dinners-bali',
    title: 'Private Chef Romantic Dinners in Bali: Planning Guide',
    description:
      'How to plan a romantic private chef dinner in your Bali villa — menu styles, timing, proposal setups and what makes the evening work. Tips from myCHEF.',
    canonical: `${SITE}/blog/private-chef-romantic-dinners-bali`,
    h1: 'Private Chef Romantic Dinners in Bali: How to Plan',
  },

      'blog-how-to-hire-private-chef-bali-complete-guide': {
    path: '/blog/how-to-hire-private-chef-bali-complete-guide',
    title: 'How to Hire a Private Chef in Bali: Complete Guide | myCHEF',
    description:
      'Step-by-step guide to hiring a private chef in Bali — qualifications, vetting, costs, deposits and the full booking process with transparent myCHEF pricing.oking process.',
    canonical: `${SITE}/blog/how-to-hire-private-chef-bali-complete-guide`,
    h1: 'How to Hire a Private Chef in Bali',
  },

      'blog-chef-qualifications-credentials-bali-hiring': {
    path: '/blog/chef-qualifications-credentials-bali-hiring',
    title: 'Private Chef Qualifications & Credentials: Bali Hiring Guide',
    description:
      'Essential qualifications, certifications and experience markers to check when hiring a private chef in Bali — a practical vetting checklist before you book.',
    canonical: `${SITE}/blog/chef-qualifications-credentials-bali-hiring`,
    h1: 'Chef Qualifications & Credentials: Hiring Guide for Bali',
  },

      'blog-fine-dining-guide': {
    path: '/blog/fine-dining-guide',
    title: 'Fine Dining in Bali: Ultimate Guide (Restaurants & In-Villa)',
    description:
      'Discover fine dining in Bali — curated tasting menus, wine pairings and luxury culinary experiences, from restaurants to your villa. Insights from myCHEF.',
    canonical: `${SITE}/blog/fine-dining-guide`,
    h1: 'Fine Dining in Bali: The Ultimate Guide',
  },

      'blog-private-chef-roles-responsibilities-explained': {
    path: '/blog/private-chef-roles-responsibilities-explained',
    title: 'Private Chef Roles & Responsibilities Explained | myCHEF',
    description:
      'What private chefs actually do in Bali, how they differ from other culinary professionals, and what to expect when you hire one for a villa stay with myCHEF.',
    canonical: `${SITE}/blog/private-chef-roles-responsibilities-explained`,
    h1: 'Private Chef Roles & Responsibilities Explained',
  },

      'blog-wedding-private-chef-bali-planning-guide': {
    path: '/blog/wedding-private-chef-bali-planning-guide',
    // Title and h1 are deliberately different — they were byte-identical, which
    // Semrush flags as "duplicate content in h1 and title" and wastes the title tag.
    // Kept byte-identical to seoTitle in WeddingPrivateChefPage.tsx so the prerendered
    // title and the client-hydrated title agree.
    title: 'Wedding Private Chef Bali | Villa Catering Planning Guide',
    description:
      'How to plan catering for a Bali villa wedding with a private chef — menu planning, logistics, guest flow and cost ranges for intimate and larger celebrations.',
    canonical: `${SITE}/blog/wedding-private-chef-bali-planning-guide`,
    h1: 'Wedding Private Chef in Bali: Planning & Logistics Guide',
  },

      'blog-corporate-events-catering-bali-team-dining': {
    path: '/blog/corporate-events-catering-bali-team-dining',
    title: 'Corporate Events & Team Dining in Bali: Private Chef Guide',
    description:
      'How to plan corporate events, team meals and executive dinners in Bali with private chef catering — formats, logistics, staffing and transparent pricing guidance from myCHEF.',
    canonical: `${SITE}/blog/corporate-events-catering-bali-team-dining`,
    h1: 'Corporate Events Catering in Bali — Team Dinners & Incentive Meals',
  },

      'blog-dining-by-location-bali-neighborhood-guide': {
    path: '/blog/dining-by-location-bali-neighborhood-guide',
    title: 'Dining by Location in Bali: Private Chef Areas Guide',
    description:
      'Region-specific dining guide for Bali: neighborhood profiles for Seminyak, Canggu, Ubud, Uluwatu and beyond, and how private chefs adapt menus to each area.',
    canonical: `${SITE}/blog/dining-by-location-bali-neighborhood-guide`,
    h1: 'Dining by Location in Bali',
  },

      'blog-fine-dining-trends-bali-2026-innovations': {
    path: '/blog/fine-dining-trends-bali-2026-innovations',
    title: 'Fine Dining Trends in Bali 2026: Modern Innovations',
    description:
      'Emerging culinary trends in Bali for 2026: sustainability, technique innovation, and what sophisticated diners expect from villa fine dining with myCHEF.',
    canonical: `${SITE}/blog/fine-dining-trends-bali-2026-innovations`,
    h1: 'Fine Dining Trends Bali 2026 — What\'s Shaping Luxury Villa Dining',
  },

      'blog-seasonal-ingredients-bali-cooking-guide': {
    path: '/blog/seasonal-ingredients-bali-cooking-guide',
    title: 'Seasonal Ingredients in Bali: Cooking & Sourcing Guide',
    description:
      'Complete guide to Bali seasonal ingredients: what is available when, market tips, and how private chefs plan villa menus around the seasons. By myCHEF.',
    canonical: `${SITE}/blog/seasonal-ingredients-bali-cooking-guide`,
    h1: 'Seasonal Ingredients in Bali: Cooking & Sourcing Guide for',
  },

      'blog-private-chef-breakfast-bali-villas': {
    path: '/blog/private-chef-breakfast-bali-villas',
    title: 'Private Chef Breakfast in Bali Villas: Plan Before Day One',
    description:
      'Plan a private chef breakfast in Bali before you land — menu ideas, kitchen checks, staffing tips and realistic timing for villa stays. Tips from myCHEF.',
    canonical: `${SITE}/blog/private-chef-breakfast-bali-villas`,
    h1: 'Private Chef Breakfast in Bali Villas: Plan Before Day One',
  },

      'blog-birthday-dinner-bali-villa-without-planner': {
    path: '/blog/birthday-dinner-bali-villa-without-planner',
    title: 'Birthday Dinner in a Bali Villa: Plan It Without a Planner',
    description:
      'Plan a birthday dinner in a Bali villa without a full planner — food formats, staffing math, timing and a simple host run sheet. Practical myCHEF guide.',
    canonical: `${SITE}/blog/birthday-dinner-bali-villa-without-planner`,
    h1: 'Birthday Dinner Bali Villa: Plan It Without a Full Planner',
  },

      'blog-seminyak-canggu-ubud-uluwatu-private-chef-night': {
    path: '/blog/seminyak-canggu-ubud-uluwatu-private-chef-night',
    title: 'Best Bali Area for a Private Chef Night: Seminyak–Uluwatu',
    description:
      'Compare Seminyak, Canggu, Ubud and Uluwatu for a private chef night — traffic, sunset timing, menu style and villa flow so you pick the right area for your group.',
    canonical: `${SITE}/blog/seminyak-canggu-ubud-uluwatu-private-chef-night`,
    h1: 'Seminyak, Canggu, Ubud or Uluwatu for a Private Chef Night?',
  },

      'blog-private-chef-bali-preparation-12-guest-villa-dinner': {
    path: '/blog/private-chef-bali-preparation-12-guest-villa-dinner',
    title: 'Private Chef Bali: Villa Dinner Preparation for 12 Guests',
    description:
      'See how myCHEF prepares a 12-guest villa dinner in Bali — market runs, packing lists, service timing, plating and cleanup. A practical day-in-the-life guide.',
    canonical: `${SITE}/blog/private-chef-bali-preparation-12-guest-villa-dinner`,
    h1: 'Private Chef Bali Preparation: Behind a 12-Guest Villa',
  },

      'blog-family-kids-menu-private-chef-bali': {
    path: '/blog/family-kids-menu-private-chef-bali',
    title: 'Family Dining with a Private Chef in Bali: A Parent\'s Guide',
    description:
      'Planning villa dining for a family in Bali? Our chefs build kids\' menus around ages and preferences. No restaurant stress. Book within 24 hours via WhatsApp.',
    canonical: `${SITE}/blog/family-kids-menu-private-chef-bali`,
    h1: 'Family Dining with a Private Chef in Bali: A Complete Guide for Parents',
  },

      'blog-corporate-events-catering-bali': {
    path: '/blog/corporate-events-catering-bali',
    title: 'Corporate Event Catering in Bali: 4 Real Case Studies',
    description:
      'How myCHEF handled a 38-person tech retreat, bank executive dinner, fashion launch and 7-day wellness retreat in Bali. Real costs, menus and outcomes.',
    canonical: `${SITE}/blog/corporate-events-catering-bali`,
    h1: 'Corporate Event Catering in Bali: Real Case Studies',
  },

      'blog-food-allergies-dietary-requirements-private-chef-bali': {
    path: '/blog/food-allergies-dietary-requirements-private-chef-bali',
    title: 'Food Allergies & Private Chef Dining in Bali: Safety Guide',
    description:
      'How myCHEF handles food allergies and special diets in Bali: HACCP protocols, cross-contamination controls, and custom menus for vegan, gluten-free, halal.',
    canonical: `${SITE}/blog/food-allergies-dietary-requirements-private-chef-bali`,
    h1: 'Food Allergies & Dietary Requirements with a Private Chef in Bali: The Complete Safety Guide',
  },

      'blog-event-planning-bali': {
    path: '/blog/event-planning-bali',
    title: 'Event Planning in Bali: Weddings & Celebrations Guide',
    description:
      'Complete Bali event planning guide: catering, staffing, venue setup and timeline for weddings, corporate events and villa celebrations. Practical myCHEF tips.',
    canonical: `${SITE}/blog/event-planning-bali`,
    h1: 'Event Planning in Bali',
  },

      'blog-bali-wedding-catering-private-chef-timeline': {
    path: '/blog/bali-wedding-catering-private-chef-timeline',
    title: 'Bali Wedding Catering Timeline: 6-Month Planning Guide',
    description:
      'The complete Bali wedding catering timeline — what to book, when to confirm, and how chefs coordinate with venues, planners and your schedule. myCHEF guide.',
    canonical: `${SITE}/blog/bali-wedding-catering-private-chef-timeline`,
    h1: 'Bali Wedding Catering with a Private Chef: Timeline & Planning Guide',
  },

      'blog-bali-catering-menu': {
    path: '/blog/bali-catering-menu',
    title: 'Bali Catering Menu Ideas: Traditional & Modern | myCHEF',
    description:
      'Explore Bali catering menus — traditional Indonesian, modern fusion, plated dinners, buffets and grazing boards for villa events. Sample formats from myCHEF.',
    canonical: `${SITE}/blog/bali-catering-menu`,
    h1: 'Bali Catering Menus',
  },

      'journal-michelin-training-bali': {
    path: '/journal/michelin-training-bali',
    title: 'Michelin Training in Bali: Mastering Italian Technique',
    description:
      'How Michelin-trained technique translates to intimate Bali villa dining: pacing, plating, sourcing and service standards guests feel at a private table — not a hotel dining room.',
    canonical: `${SITE}/journal/michelin-training-bali`,
    h1: 'Michelin Training in Bali: How Our Chefs Master Italian Technique',
  },

      'journal-sustainable-sourcing': {
    path: '/journal/sustainable-sourcing',
    title: 'Sustainable Sourcing in Bali: Farm-to-Villa | myCHEF',
    description:
      'Learn how myCHEF sources local and organic ingredients across Bali — markets, producers and freshness practices behind villa dining and catering menus.',
    canonical: `${SITE}/journal/sustainable-sourcing`,
    h1: 'Sustainable Sourcing: Our Farm-to-Villa Philosophy',
  },

      'journal-private-chef-vs-villa-staff-bali': {
    path: '/journal/private-chef-vs-villa-staff-bali',
    title: 'Private Chef vs Villa Staff in Bali: The Difference | myCHEF',
    description:
      'Why hiring a specialized private chef beats relying on general villa staff for milestone dinners in Bali — quality, pacing, risk and guest experience compared.',
    canonical: `${SITE}/journal/private-chef-vs-villa-staff-bali`,
    h1: 'Private Chef vs. Villa Staff — Understanding the Difference',
  },

      'journal-bali-private-chef-cost-guide-2026': {
    path: '/journal/bali-private-chef-cost-guide-2026',
    title: 'Bali Private Chef Costs: Groceries, Tax & Tipping Explained',
    description:
      'The hidden line items of a Bali private chef booking — groceries at cost, the ++ (tax & service), and tipping norms explained. For published day rates, see our pricing page.',
    canonical: `${SITE}/journal/bali-private-chef-cost-guide-2026`,
    h1: 'Bali Private Chef Costs: Groceries, Tax & Tipping Explained',
  },

      'journal-villa-wedding-catering-logistics-bali': {
    path: '/journal/villa-wedding-catering-logistics-bali',
    title: 'Villa Wedding Catering Logistics Guide for Bali | myCHEF',
    description:
      'Villa wedding catering logistics in Bali: kitchen requirements, service flow, guest counts, timing and how a private chef team runs a seamless villa reception.',
    canonical: `${SITE}/journal/villa-wedding-catering-logistics-bali`,
    h1: 'Villa Wedding Catering Logistics Guide for Bali',
  },

      'journal-yoga-retreat-meal-planning-bali': {
    path: '/journal/yoga-retreat-meal-planning-bali',
    title: 'Yoga Retreat Meal Planning Bali | Nutritional Integrity',
    description:
      'How myCHEF designs yoga retreat menus in Bali: plant-forward nutrition, multi-day meal flow, dietary notes and culinary satisfaction without heaviness. For hosts and facilitators.',
    canonical: `${SITE}/journal/yoga-retreat-meal-planning-bali`,
    h1: 'Yoga Retreat Meal Planning: Nutritional Integrity for Bali Retreats',
  },

      'journal-private-chef-seminyak-guide': {
    path: '/journal/private-chef-seminyak-guide',
    title: 'Hiring a Private Chef in Seminyak: The 2026 Local\'s Guide',
    description:
      'Everything you need to know about booking a private chef for a Seminyak villa stay — pricing, menus, logistics and what makes Seminyak dining different. Practical myCHEF guide.',
    canonical: `${SITE}/journal/private-chef-seminyak-guide`,
    h1: 'Hiring a Private Chef in Seminyak: The 2026 Local\'s Guide',
  },

      'journal-private-chef-canggu-guide': {
    path: '/journal/private-chef-canggu-guide',
    title: 'Private Chef Canggu Guide: What Makes It Different | myCHEF',
    description:
      'Why Canggu villa dining is different: surf-lifestyle schedules, poolside BBQ culture, and private chef formats that fit Berawa to Pererenan stays. Practical booking tips.',
    canonical: `${SITE}/journal/private-chef-canggu-guide`,
    h1: 'Private Chef Services in Canggu: What Makes It Different',
  },

      'journal-private-chef-ubud-villa-dining': {
    path: '/journal/private-chef-ubud-villa-dining',
    title: 'Private Chef Ubud Guide: Logistics & Pricing | myCHEF',
    description:
      'The complete guide to hiring a private chef for your Ubud villa — jungle logistics, cultural dining experiences, menus and practical booking tips from myCHEF.',
    canonical: `${SITE}/journal/private-chef-ubud-villa-dining`,
    h1: 'Private Chef Services in Ubud: Logistics, Pricing & What to Expect',
  },

      'journal-bali-wedding-catering-complete-guide': {
    path: '/journal/bali-wedding-catering-complete-guide',
    title: 'Bali Wedding Catering Guide: Budgets, Logistics & Vendors',
    description:
      'Everything about catering a destination wedding in Bali — menu design, budgets, cultural considerations and villa logistics for a calm celebration with myCHEF.',
    canonical: `${SITE}/journal/bali-wedding-catering-complete-guide`,
    h1: 'Bali Wedding Catering Guide: Budgets, Logistics & Vendors',
  },

      'journal-rehearsal-dinner-planning-bali': {
    path: '/journal/rehearsal-dinner-planning-bali',
    title: 'Rehearsal Dinner Bali: The Complete Planning Guide | myCHEF',
    description:
      'Plan an unforgettable rehearsal or welcome dinner in Bali — villa selection, menu design, staffing and private chef options. Practical tips via myCHEF.',
    canonical: `${SITE}/journal/rehearsal-dinner-planning-bali`,
    h1: 'Planning Your Bali Rehearsal Dinner: The Complete Guide',
  },

      'journal-live-in-chef-vs-daily-service': {
    path: '/journal/live-in-chef-vs-daily-service',
    title: 'Live-In Chef vs Daily Service: Which Fits Your Bali Villa?',
    description:
      'Live-in chef vs daily private chef service in Bali: costs, lifestyle fit, grocery handling and when each model works best for long-stay villas and residences.',
    canonical: `${SITE}/journal/live-in-chef-vs-daily-service`,
    h1: 'Live-In Chef vs. Daily Service — Which Is Right for You?',
  },

      'journal-bbq-catering-cost-breakdown-bali': {
    path: '/journal/bbq-catering-cost-breakdown-bali',
    title: 'BBQ Catering in Bali: The Complete Cost Breakdown | myCHEF',
    description:
      'Transparent pricing for villa BBQ catering in Bali — from budget feasts to premium Wagyu experiences. Per-person tables and what drives the total cost.',
    canonical: `${SITE}/journal/bbq-catering-cost-breakdown-bali`,
    h1: 'BBQ Catering in Bali: The Complete Cost Breakdown',
  },

      'fine-dining-romantic-dinner': {
    path: '/fine-dining/romantic-dinner',
    title: 'Romantic Dinner Bali | Private Villa Chef for Two | myCHEF',
    description:
      'Intimate five-course romantic dinners for two in your Bali villa: candlelight, flowers, sommelier pairing and Michelin-trained service. WhatsApp myCHEF.',
    canonical: `${SITE}/fine-dining/romantic-dinner`,
    h1: 'A Private Dinner Built for Two',
    ogImage: `${SITE}/generated/section-romantic-dinner.webp`,
  },

      'fine-dining-tasting-menu': {
    path: '/fine-dining/tasting-menu',
    title: 'Private Tasting Menu Bali | 5 & 7 Course Villa Degustation',
    description:
      'Signature 5- and 7-course private tasting menus in your Bali villa — Italian technique, Balinese ingredients, optional wine pairing. Transparent rates. WhatsApp myCHEF.',
    canonical: `${SITE}/fine-dining/tasting-menu`,
    h1: 'A Private Tasting Menu in Your Bali Villa',
    ogImage: `${SITE}/generated/misc-luna-plating-md.webp`,
  },

      'fine-dining-chefs-table': {
    path: '/fine-dining/chefs-table',
    title: 'Chef Table Experience Bali | Private Counter Dining | myCHEF',
    description:
      'A private chef’s table at your Bali villa: counter-side seating and course-by-course commentary from Michelin-trained chefs. Transparent rates. WhatsApp myCHEF.',
    canonical: `${SITE}/fine-dining/chefs-table`,
    h1: 'The Chef\'s Table — At Your Villa',
    ogImage: `${SITE}/generated/chefs-table-hero-luxury.webp`,
  },

      'fine-dining-menus': {
    path: '/fine-dining/menus',
    title: 'Private Chef Villa Menus Bali | 24 Fine Dining Set Menus',
    description:
      'Browse 24 private chef villa menus for Bali — vegetarian, seafood, mixed meats & single-meat set menus, cooked in your villa. From IDR 1.25M per guest.',
    canonical: `${SITE}/fine-dining/menus`,
    h1: 'Private Chef Villa Menus',
    ogImage: `${SITE}/generated/misc-luna-plating-md.webp`,
  },

      'fine-dining-private-chef-bali': {
    path: '/fine-dining/private-chef-bali',
    title: 'Michelin Tasting Menu Bali | Fine Dining in Your Villa | myCHEF',
    description:
      'A five-course Michelin-trained tasting menu served in your Bali villa. Mediterranean or Wagyu, wine pairing, full chef brigade. From IDR 2.2M++ per person.',
    canonical: `${SITE}/fine-dining/private-chef-bali`,
    h1: 'A Michelin-Trained Tasting Menu. In Your Villa.',
    ogImage: `${SITE}/generated/mychef-experience-bali-luna-hero-v2.webp`,
  },

      'catering-bbq': {
    path: '/catering/bbq-catering',
    title: 'BBQ Catering Bali | Villa BBQ & Live Chef Grill | myCHEF',
    description:
      'Bali BBQ catering for villas, parties and events: fresh seafood, Wagyu and organic sides grilled live at your pool. Transparent per-person pricing. WhatsApp myCHEF.',
    canonical: `${SITE}/catering/bbq-catering`,
    h1: 'BBQ Catering Bali for Villas, Parties & Events',
    ogImage: `${SITE}/bbq-poolside.webp`,
  },

      'catering-buffet': {
    path: '/catering/buffet',
    title: 'Buffet Catering Bali | Large Group & Event Buffets | myCHEF',
    description:
      'Buffet catering in Bali for weddings, corporate retreats and large villa parties — full setup, service and cleanup included. Transparent rates. WhatsApp myCHEF.',
    canonical: `${SITE}/catering/buffet`,
    h1: 'Buffet Catering for Bali Villa Events',
    ogImage: `${SITE}/hero-catering.webp`,
  },

      'catering-plated': {
    path: '/catering/plated-catering',
    title: 'Plated Catering Bali | Formal Villa Dinner Service | myCHEF',
    description:
      'Plated catering in Bali: formal 3–5 course table service for villas, weddings and corporate dinners. Tailored menus, full staffing and transparent rates. WhatsApp myCHEF.',
    canonical: `${SITE}/catering/plated-catering`,
    h1: 'Plated Dinner Bali for Private Villa Fine Dining',
    ogImage: `${SITE}/hero-catering.webp`,
  },

      'catering-drop-off': {
    path: '/catering/drop-off-catering',
    title: 'Drop-Off Catering Bali | Chef Food Delivered to Your Villa',
    description:
      'Drop-off catering in Bali: premium chef-prepared food delivered to your villa, ready to serve. Transparent per-person pricing across Bali. WhatsApp myCHEF.',
    canonical: `${SITE}/catering/drop-off-catering`,
    h1: 'Drop-Off Catering — Bali Villa Dinners Delivered',
    ogImage: `${SITE}/hero-catering.webp`,
  },

      'catering-babi-guling': {
    path: '/catering/babi-guling',
    title: 'Babi Guling Catering Bali | Whole-Pig Roast at Your Villa',
    description:
      'Babi guling catering Bali: traditional whole-pig roast cooked & carved at your villa. 6–100+ guests, IDR 525K–650K per person ++. Pork-free options too.',
    canonical: `${SITE}/catering/babi-guling`,
    h1: "Babi Guling Catering Bali — The Island's Celebration Roast, at Your Villa",
    ogImage: `${SITE}/generated/mychef-catering-bali-hero-babiguling-new.webp`,
  },

      'catering-grazing-tables': {
    path: '/catering/grazing-tables',
    title: 'Grazing Table Bali | Styled Event Platters & Spreads',
    description:
      'Grazing tables in Bali: artisan cheese, charcuterie and fresh fruit spreads styled for welcome drinks, weddings and poolside villa events. WhatsApp myCHEF.',
    canonical: `${SITE}/catering/grazing-tables`,
    h1: 'Grazing Tables Bali for Events, Villas & Parties',
    ogImage: `${SITE}/hero-catering.webp`,
  },

      'catering-villa': {
    path: '/catering/villa-catering',
    title: 'Villa Catering Bali | Multi-Day Meal Plans for Groups',
    description:
      'Reliable in-villa catering for multi-day Bali stays: breakfast, lunch and dinner plans for families and groups of 10–150. From per-guest pricing. WhatsApp myCHEF.',
    canonical: `${SITE}/catering/villa-catering`,
    h1: 'Villa Catering Bali — Easy Lunches, Dinners & Long Stays',
    ogImage: `${SITE}/hero-catering.webp`,
  },

      'catering-corporate': {
    path: '/catering/corporate-catering',
    title: 'Corporate Catering Bali | Boardroom to Conference | myCHEF',
    description:
      'Corporate catering in Bali for offsites, boardroom dinners & conferences. Tax invoices (NPWP), executive service, dietary-exact menus. WhatsApp myCHEF.',
    canonical: `${SITE}/catering/corporate-catering`,
    h1: 'Corporate Catering Bali for Teams, Meetings & Events',
    ogImage: `${SITE}/generated/corp-hero.webp`,
  },

      'catering-retreat': {
    path: '/catering/retreat-catering',
    title: 'Retreat Catering Bali | Healthy Group Meal Plans | myCHEF',
    description:
      'Retreat catering in Bali: plant-forward, nutrient-dense meal plans for multi-day yoga and wellness retreats. Vegan, raw and gluten-free options. WhatsApp myCHEF.',
    canonical: `${SITE}/catering/retreat-catering`,
    h1: 'Retreat Catering Bali for Wellness, Yoga & Group Stays',
    ogImage: `${SITE}/generated/mychef-catering-bali-hero-retreat.webp`,
  },

      'catering-floating-breakfast': {
    path: '/catering/floating-breakfast',
    title: 'Floating Breakfast Bali | Add-On to Your Chef Booking',
    description:
      'Floating breakfast styled in your Bali villa pool — an add-on to a myCHEF private chef or catering booking, not sold alone. Instagram-ready setup. WhatsApp to book.',
    canonical: `${SITE}/catering/floating-breakfast`,
    h1: 'Floating Breakfast — In Your Bali Villa Pool',
    ogImage: `${SITE}/breakfast-spread.webp`,
  },

      'events-weddings': {
    path: '/events/weddings',
    title: 'Wedding Catering Bali | Villa Wedding Specialists | myCHEF',
    description:
      'Bali wedding catering for 20–250 guests at private villas. Chefs, waiters, bar and coordination from one team — tasting before you commit. WhatsApp myCHEF.',
    canonical: `${SITE}/events/weddings`,
    h1: 'Wedding Catering in Bali — Villa Weddings, Run by One Team',
    ogImage: `${SITE}/events-event-wedding-xl.webp`,
  },

      'events-birthdays': {
    path: '/events/birthdays',
    title: 'Birthday Catering Bali | Private Villa Celebrations | myCHEF',
    description:
      'Birthday catering for Bali villas: live chef BBQs or fine-dining menus with food, drinks, cake and styling handled end to end. Clear packages. WhatsApp myCHEF.',
    canonical: `${SITE}/events/birthdays`,
    h1: 'Birthday Parties in Bali — Villa Catering & Events',
    ogImage: `${SITE}/hero-events.webp`,
  },

      'events-anniversaries': {
    path: '/events/anniversaries',
    title: 'Anniversary Dinner Bali | Private Romantic Catering | myCHEF',
    description:
      'Celebrate your anniversary with an intimate styled dinner under the stars — custom menus, florals and optional sommelier pairing at your Bali villa. WhatsApp myCHEF.',
    canonical: `${SITE}/events/anniversaries`,
    h1: 'Anniversary Celebrations in Bali — Private Chef Dinners',
    ogImage: `${SITE}/hero-events.webp`,
  },

      'events-corporate': {
    path: '/events/corporate-events',
    title: 'Corporate Event Catering Bali | Full-Service Production',
    description:
      'Corporate event catering in Bali: offsites, launches, boardroom dinners with full production, NPWP-ready invoicing & executive service. WhatsApp myCHEF.',
    canonical: `${SITE}/events/corporate-events`,
    h1: 'Corporate Events in Bali — Catering & Venue Support',
    ogImage: `${SITE}/generated/corp-hero.webp`,
  },

      'events-retreats': {
    path: '/events/retreats',
    title: 'Wellness Retreat Catering Bali | Multi-Day Event Support',
    description:
      'Multi-day catering for wellness retreats in Bali: healthy plant-forward menus, meal scheduling and full event support. Clear packages. WhatsApp myCHEF.',
    canonical: `${SITE}/events/retreats`,
    h1: 'Wellness Retreats in Bali — Healthy Catering & Meal Planning',
    ogImage: `${SITE}/generated/hero-retreats.jpg`,
  },

      'events-baby-showers': {
    path: '/events/baby-showers',
    title: 'Baby Shower Catering Bali | Styled Villa Brunches | myCHEF',
    description:
      'Baby shower catering in Bali: light brunches, high tea and themed villa setups. Photo-ready tables, soft menus and calm service for intimate gatherings. WhatsApp myCHEF.',
    canonical: `${SITE}/events/baby-showers`,
    h1: 'Baby Shower Catering in Bali — Brunch, Grazing & Garden Parties',
    ogImage: `${SITE}/hero-events.webp`,
  },

      'events-villa-parties': {
    path: '/events/villa-parties',
    title: 'Villa Party Catering Bali | Social Events Done Right',
    description:
      'Villa party catering in Bali: cocktail receptions, pool parties and BBQs with food, bar staff and full coordination. Transparent packages. WhatsApp myCHEF.',
    canonical: `${SITE}/events/villa-parties`,
    h1: 'Villa Parties in Bali — BBQ, Pool, Cocktail & Night Events',
    ogImage: `${SITE}/bbq-poolside.webp`,
  },

      'in-villa-service-waiters': {
    path: '/in-villa-service/waiters',
    title: 'Waiter Hire Bali | Professional Villa Servers | myCHEF',
    description:
      'Hire waiters in Bali for villa dinners and events — uniformed, English-speaking, fine-dining trained staff. From IDR 250K/hour. Transparent rates via WhatsApp.',
    canonical: `${SITE}/in-villa-service/waiters`,
    h1: 'Waiter Hire in Bali',
    ogImage: `${SITE}/generated/aura-bartender.webp`,
  },

      'in-villa-service-butlers': {
    path: '/in-villa-service/butlers',
    title: 'Hire a Butler in Bali | From IDR 1.2M/Day | myCHEF',
    description:
      'Hire a professional butler in Bali by the day or shift — discreet, anticipatory guest service for villas and estates. Clear daily rates. WhatsApp myCHEF.',
    canonical: `${SITE}/in-villa-service/butlers`,
    h1: 'Hire a Butler in Bali',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

      'in-villa-service-bartenders': {
    path: '/in-villa-service/bartenders',
    title: 'Private Bartender Bali | Hire for Your Villa Party | myCHEF',
    description:
      'Hire a private bartender for your Bali villa party or wedding — classic cocktails, full bar setup and premium service. Clear hourly rates. WhatsApp myCHEF.',
    canonical: `${SITE}/in-villa-service/bartenders`,
    h1: 'Private Bartender Hire for Villas & Events',
    ogImage: `${SITE}/generated/aura-bartender.webp`,
  },

      'in-villa-service-mixology': {
    path: '/in-villa-service/mixology',
    title: 'Mixologist Hire Bali | Custom Cocktail Programs | myCHEF',
    description:
      'Hire a mixologist in Bali: signature cocktail creation and custom bar programs for villa events and weddings. Premium ingredients and full setup. WhatsApp myCHEF.',
    canonical: `${SITE}/in-villa-service/mixology`,
    h1: 'Mixology in Bali — Custom Cocktail Programs',
    ogImage: `${SITE}/bartender.webp`,
  },

      'in-villa-service-sommelier': {
    path: '/in-villa-service/sommelier',
    title: 'Private Sommelier Hire Bali | Wine Service at Your Villa',
    description:
      'Hire a private sommelier for your Bali villa dinner — wine pairings, sourcing advice and professional cellar service alongside your chef. WhatsApp myCHEF.',
    canonical: `${SITE}/in-villa-service/sommelier`,
    h1: 'Sommelier Service in Bali — At Your Villa',
    ogImage: `${SITE}/generated/luna-wine.webp`,
  },

      'in-villa-service-host-hostess': {
    path: '/in-villa-service/host-hostess',
    title: 'Hostess Hire Bali | Professional Event Reception | myCHEF',
    description:
      'Hire professional event hosts and hostesses in Bali for guest reception and event flow at weddings and corporate events. Clear hourly rates. WhatsApp myCHEF.',
    canonical: `${SITE}/in-villa-service/host-hostess`,
    h1: 'Host & Hostess Hire in Bali',
    ogImage: `${SITE}/generated/misc-trust-hosts-lg.webp`,
  },

      'staffing-private-chef-placement': {
    path: '/staffing/private-chef-placement',
    title: 'Private Chef Placement Bali | Full-Time Chef Hire | myCHEF',
    description:
      'Permanent or seasonal private chef placement for your Bali villa or residence — vetting, trials and contracts handled by myCHEF. Start via WhatsApp today.',
    canonical: `${SITE}/staffing/private-chef-placement`,
    h1: 'Private Chef Placement in Bali',
    ogImage: `${SITE}/generated/staffing-staffing-hero-xl.webp`,
  },

      'staffing-live-in-chef': {
    path: '/staffing/live-in-chef',
    title: 'Live-In Chef Bali | Full-Board Villa Chef | myCHEF',
    description:
      'Live-in chefs in Bali who manage all meals, groceries and kitchen logistics for your family or guests. Tailored multi-day quotes — WhatsApp myCHEF.',
    canonical: `${SITE}/staffing/live-in-chef`,
    h1: 'Live-In Chef in Bali',
    ogImage: `${SITE}/generated/staffing-staffing-kitchen-lg.webp`,
  },

      'staffing-villa-staff': {
    path: '/staffing/villa-staff',
    title: 'Hire Villa Staff Bali | Long-Term Villa Teams | myCHEF',
    description:
      'Hire villa staff in Bali for estates and portfolios: villa managers, housekeepers and support teams. Vetted placements with written guarantees. WhatsApp myCHEF.',
    canonical: `${SITE}/staffing/villa-staff`,
    h1: 'Hire Villa Staff in Bali — Long-Term Placement',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

      'staffing-household-staff': {
    path: '/staffing/household-staff',
    title: 'Hire Household Staff Bali | Estate Operations | myCHEF',
    description:
      'Hire household staff in Bali: experienced managers and staff for large residences — scheduling, maintenance and vendor management. Clear terms. WhatsApp myCHEF.',
    canonical: `${SITE}/staffing/household-staff`,
    h1: 'Household Staff in Bali — Estate Operations',
    ogImage: `${SITE}/generated/staffing-staffing-table-lg.webp`,
  },

      'staffing-for-villa-managers': {
    path: '/staffing/for-villa-managers',
    title: 'Villa Manager Partnership Bali | myCHEF Partner Program',
    description:
      'Villa managers: earn commission offering on-demand private dining to guests — menus, chef team and logistics handled by myCHEF. Partner terms via WhatsApp.',
    canonical: `${SITE}/staffing/for-villa-managers`,
    h1: 'Staffing & Partnerships for Villa Managers',
    ogImage: `${SITE}/generated/corp-villa.webp`,
  },

      'staffing-for-hotels-restaurants': {
    path: '/staffing/for-hotels-restaurants',
    title: 'Hotel & Restaurant Staffing Bali | Culinary Teams | myCHEF',
    description:
      'Temporary or permanent culinary staffing for Bali hotels and restaurants — vetted, high-standard chefs and kitchen professionals. Clear terms. WhatsApp myCHEF.',
    canonical: `${SITE}/staffing/for-hotels-restaurants`,
    h1: 'Hotels & Restaurants Staffing',
    ogImage: `${SITE}/generated/aura-corporate.webp`,
  },

      'bar-services-hub': {
    path: '/bar-services/',
    title: 'Bar Consultant Bali | B2B Bar Services & Consulting | MyChef',
    description:
      'Bali’s B2B bar consultancy: staff training, cocktail menus, staffing, audits & bar management for hotels, villas and beach clubs. Request a proposal.',
    canonical: `${SITE}/bar-services/`,
    h1: 'Bar Consultant Bali — B2B Bar Services',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-hub.jpg`,
  },

      'bar-services-faq': {
    path: '/bar-services/faq/',
    title: 'Bar Services FAQ Bali | Pricing, Staffing & Licences',
    description:
      'Straight answers on bartender rates, staffing ratios, licences, packages and what is included — Bali bar services FAQ, explained clearly by myCHEF Bar.',
    canonical: `${SITE}/bar-services/faq/`,
    h1: 'Bar Services FAQ',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-faq.jpg`,
  },

      'bar-services-contact': {
    path: '/bar-services/contact/',
    title: 'Contact MyChef Bar Services | Bar Consultancy Bali',
    description:
      'Request a proposal, book a site survey or check staff availability — WhatsApp, phone or enquiry form. Response within four business hours from myCHEF Bar.',
    canonical: `${SITE}/bar-services/contact/`,
    h1: 'Let’s Talk About Your Bar',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-contact.jpg`,
  },

      'bar-services-resources': {
    path: '/bar-services/resources/',
    title: 'Bar Services Resources | Bali Venue Guides | MyChef',
    description:
      'Free bar management guides for Bali venues: staffing ratios, pour costs, cocktail menus, salaries and setup. Practical myCHEF Bar resources.',
    canonical: `${SITE}/bar-services/resources/`,
    h1: 'Bar Services Resources',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-resources.jpg`,
  },

      experiences: {
    path: '/experiences',
    title: 'Private Experiences Bali | Culinary & Celebration | myCHEF',
    description:
      'Private culinary and celebration experiences in Bali: cocktail parties, sushi classes, cooking classes, kids parties and proposal dinners at your villa. WhatsApp myCHEF.',
    canonical: `${SITE}/experiences`,
    h1: 'Private Experiences in Bali',
    ogImage: `${SITE}/generated/private-experiences-bali-hub.webp`,
  },

      'experience-private-cocktail-party': {
    path: '/experiences/private-cocktail-party',
    title: 'Private Cocktail Party Bali | Chef & Bartender at Your Villa',
    description:
      'Host a private cocktail party at your Bali villa: private chef, bartender, canapés, custom cocktails and full bar setup. Fixed quotes via WhatsApp myCHEF.',
    canonical: `${SITE}/experiences/private-cocktail-party`,
    h1: 'Private Cocktail Party Bali',
    ogImage: `${SITE}/generated/bartender-hire-bali-cocktail-party.webp`,
  },

      'experience-sushi-masterclass': {
    path: '/experiences/sushi-masterclass',
    title: 'Sushi Masterclass Bali | Private Villa Sushi Class | myCHEF',
    description:
      'Book a private sushi masterclass at your Bali villa — maki, nigiri and hand rolls with a sushi chef. Ingredients and equipment included. WhatsApp myCHEF.',
    canonical: `${SITE}/experiences/sushi-masterclass`,
    h1: 'Sushi Masterclass Bali',
    ogImage: `${SITE}/generated/sushi-making-class-bali-masterclass.webp`,
  },

      'experience-private-cooking-class': {
    path: '/experiences/private-cooking-class',
    title: 'Private Cooking Class Bali | Chef Comes to Your Villa',
    description:
      'Book a private cooking class at your Bali villa — Italian, Indonesian, Japanese, French, healthy or kids menus. Ingredients included. WhatsApp myCHEF today.',
    canonical: `${SITE}/experiences/private-cooking-class`,
    h1: 'Private Cooking Class Bali',
    ogImage: `${SITE}/generated/private-cooking-class-bali-villa.webp`,
  },

      'experience-kids-birthday-chef-party': {
    path: '/experiences/kids-birthday-chef-party',
    title: 'Kids Birthday Party Bali | Catering, Entertainment & Villa Parties',
    description:
      'Complete kids birthday party planning in Bali: villa catering, interactive chef parties, entertainment, foam parties, decorations and adult bar service.',
    canonical: `${SITE}/experiences/kids-birthday-chef-party`,
    h1: 'Kids Birthday Party Bali',
    ogImage: `${SITE}/generated/kids-birthday-party-bali-chef.webp`,
  },

      'experience-champagne-oyster-experience': {
    path: '/experiences/champagne-oyster-experience',
    title: 'Oyster Bar Bali | Champagne Brunch, Villa Parties & Events',
    description:
      'Private oyster bar and champagne service in Bali: live shucking, Sunday brunch, villa parties, weddings and corporate receptions. Custom proposals via WhatsApp.',
    canonical: `${SITE}/experiences/champagne-oyster-experience`,
    h1: 'Oyster Bar Bali',
    ogImage: `${SITE}/generated/oyster-bar-bali-champagne.webp`,
  },

      'experience-romantic-proposal-dinner': {
    path: '/experiences/romantic-proposal-dinner',
    title: 'Proposal Package Bali | Full-Service Villa Proposal | myCHEF',
    description:
      'Complete Bali proposal packages: private chef dinner, flowers, candles, styling, photographer and musician — fully coordinated and confidential. WhatsApp myCHEF.',
    canonical: `${SITE}/experiences/romantic-proposal-dinner`,
    h1: 'Romantic Proposal Dinner Bali — Everything Arranged',
    ogImage: `${SITE}/generated/proposal-package-bali-dinner.webp`,
  },

      'bar-services-bar-staff-training': {
    path: '/bar-services/bar-staff-training/',
    title: 'Bar Staff Training Bali | Venue Mixology Courses | MyChef',
    description:
      'On-site bar staff training for Bali hotels, villas and restaurants — basics to advanced mixology. From IDR 2.75M per pax. Request a proposal from myCHEF Bar.',
    canonical: `${SITE}/bar-services/bar-staff-training/`,
    h1: 'Bar Staff Training Bali',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-bar-staff-training.jpg`,
  },

      'bar-services-cocktail-menu-development': {
    path: '/bar-services/cocktail-menu-development/',
    title: 'Cocktail Menu Development Bali | Menu Engineering | MyChef',
    description:
      'Profitable, venue-ready cocktail menus for Bali bars — costing, specs and supplier lists. Packages from IDR 25M. Request a proposal from myCHEF Bar.',
    canonical: `${SITE}/bar-services/cocktail-menu-development/`,
    h1: 'Cocktail Menu Development Bali',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-cocktail-menu-development.jpg`,
  },

      'bar-services-signature-cocktail-creation': {
    path: '/bar-services/signature-cocktail-creation/',
    title: 'Signature Cocktail Creation Bali | Bespoke Serves | MyChef',
    description:
      'Bespoke signature cocktails that tell your Bali venue’s story — R&D, tastings and specs included. From IDR 2.5M per serve. Request a proposal from myCHEF Bar.',
    canonical: `${SITE}/bar-services/signature-cocktail-creation/`,
    h1: 'Signature Cocktail Creation Bali',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-signature-cocktail-creation.jpg`,
  },

      'bar-services-temporary-bartender-staffing': {
    path: '/bar-services/temporary-bartender-staffing/',
    title: 'Bartender Hire Bali | Temporary Bar Staffing for Venues',
    description:
      'Temporary bartender and barback staffing for Bali venues, weddings and events — vetted, insured, from IDR 250K/hour. WhatsApp myCHEF Bar Services.',
    canonical: `${SITE}/bar-services/temporary-bartender-staffing/`,
    h1: 'Bartender Hire Bali — Temporary Bar Staffing',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-temporary-bartender-staffing.jpg`,
  },

      'bar-services-permanent-bar-staff-recruitment': {
    path: '/bar-services/permanent-bar-staff-recruitment/',
    title: 'Bar Staff Recruitment Bali | Permanent Placement | MyChef',
    description:
      'Permanent bartender, head bartender and bar manager recruitment in Bali — trade-tested, replacement guarantee. Fees from IDR 4M. Request a shortlist.',
    canonical: `${SITE}/bar-services/permanent-bar-staff-recruitment/`,
    h1: 'Bar Staff Recruitment Bali',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-permanent-bar-staff-recruitment.jpg`,
  },

      'bar-services-new-bar-setup': {
    path: '/bar-services/new-bar-setup/',
    title: 'New Bar Setup Consultant Bali | Concept to Launch | MyChef',
    description:
      'Concept-to-launch bar setup in Bali: layout, equipment, menu, hiring, SOPs and opening support. Packages from IDR 35M. Request a proposal from myCHEF Bar.',
    canonical: `${SITE}/bar-services/new-bar-setup/`,
    h1: 'New Bar Setup Bali',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-new-bar-setup.jpg`,
  },

      'bar-services-bar-audit-improvement': {
    path: '/bar-services/bar-audit-improvement/',
    title: 'Bar Audit Bali | Operations & Profit Audit | MyChef',
    description:
      'Bar audits in Bali: mystery visits, pour-cost analysis and a fix plan that finds the margin your bar is leaking. Projects from IDR 16.5M. Book a review.',
    canonical: `${SITE}/bar-services/bar-audit-improvement/`,
    h1: 'Bar Audit & Improvement Bali',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-bar-audit-improvement.jpg`,
  },

      'bar-services-bar-costing-inventory-control': {
    path: '/bar-services/bar-costing-inventory-control/',
    title: 'Bar Costing & Inventory Control Bali | MyChef',
    description:
      'Pour-cost engineering, inventory SOPs and shrinkage control for Bali bars. Projects from IDR 18M with 30-day follow-up. Request a proposal from myCHEF Bar.',
    canonical: `${SITE}/bar-services/bar-costing-inventory-control/`,
    h1: 'Bar Costing & Inventory Control Bali',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-bar-costing-inventory-control.jpg`,
  },

      'bar-services-bar-equipment-supply-rental': {
    path: '/bar-services/bar-equipment-supply-rental/',
    title: 'Bar Equipment Supplier & Rental Bali | MyChef',
    description:
      'Bar tools, mobile bars, glassware and machines — supplied or rented for Bali venues and events. Mobile bars from IDR 2.5M per event. Request stock list.',
    canonical: `${SITE}/bar-services/bar-equipment-supply-rental/`,
    h1: 'Bar Equipment Supply & Rental Bali',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-bar-equipment-supply-rental.jpg`,
  },

      'bar-services-monthly-bar-management-support': {
    path: '/bar-services/monthly-bar-management-support/',
    title: 'Monthly Bar Management Support Bali | MyChef',
    description:
      'A fractional bar manager for your Bali venue: oversight, stock control, training refreshers and reporting. Retainers from IDR 4.5M/month. Request a proposal.',
    canonical: `${SITE}/bar-services/monthly-bar-management-support/`,
    h1: 'Monthly Bar Management Support Bali',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-monthly-bar-management-support.jpg`,
  },

      'bar-services-complete-bar-performance-programme': {
    path: '/bar-services/complete-bar-performance-programme/',
    title: 'Complete Bar Performance Programme Bali | MyChef',
    description:
      'One annual programme — audit, costing, training, menu refresh and monthly management — to lift your Bali bar’s profit. From IDR 132M/year. Enquire now.',
    canonical: `${SITE}/bar-services/complete-bar-performance-programme/`,
    h1: 'Complete Bar Performance Programme Bali',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-complete-bar-performance-programme.jpg`,
  },

      'bar-services-resources-how-much-does-a-bartender-cost-bali': {
    path: '/bar-services/resources/how-much-does-a-bartender-cost-bali/',
    title: 'How Much Does a Bartender Cost in Bali? (2026) | MyChef',
    description:
      'Real 2026 prices: event bartenders from IDR 250K/hour, packages from IDR 9M — what drives cost and how to budget. Free myCHEF Bar guide.',
    canonical: `${SITE}/bar-services/resources/how-much-does-a-bartender-cost-bali/`,
    h1: 'How Much Does a Bartender Cost in Bali? (2026)',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-how-much-does-a-bartender-cost-bali.jpg`,
  },

      'bar-services-resources-bartender-salary-benchmarks-bali': {
    path: '/bar-services/resources/bartender-salary-benchmarks-bali/',
    title: 'Bartender Salary & Staffing Costs in Bali — 2026 | MyChef',
    description:
      '2026 benchmarks: bartender pay from IDR 3.8M/month, on-costs, and the real maths of in-house hiring vs outsourced staffing. Free myCHEF Bar guide.',
    canonical: `${SITE}/bar-services/resources/bartender-salary-benchmarks-bali/`,
    h1: 'Bartender Salary & Staffing Costs in Bali — 2026',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-bartender-salary-benchmarks-bali.jpg`,
  },

      'bar-services-resources-how-many-bartenders-per-guest': {
    path: '/bar-services/resources/how-many-bartenders-per-guest/',
    title: 'How Many Bartenders Per Guest? Bali Event Guide | MyChef',
    description:
      'Bar staffing ratios for 20–300 guests: the 1:15–20 rule, when to add barbacks, and how ratios affect service speed. Free myCHEF Bar guide.',
    canonical: `${SITE}/bar-services/resources/how-many-bartenders-per-guest/`,
    h1: 'How Many Bartenders Per Guest? Bali Event Guide',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-how-many-bartenders-per-guest.jpg`,
  },

      'bar-services-resources-beverage-cost-percentage-guide': {
    path: '/bar-services/resources/beverage-cost-percentage-guide/',
    title: 'Beverage Cost Percentage Explained | MyChef',
    description:
      'What beverage cost percentage is, the 18–24% benchmark, how shrinkage erodes it and the controls that fix it. Free myCHEF Bar guide.',
    canonical: `${SITE}/bar-services/resources/beverage-cost-percentage-guide/`,
    h1: 'Beverage Cost Percentage Explained',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-beverage-cost-percentage-guide.jpg`,
  },

      'bar-services-resources-how-to-open-a-bar-in-bali': {
    path: '/bar-services/resources/how-to-open-a-bar-in-bali/',
    title: 'How to Open a Bar in Bali: Licences & Costs | MyChef',
    description:
      'Step-by-step guide to opening a Bali bar: TDUP and SIUP-MB licences, PT PMA rules, budgets and timelines. Free myCHEF Bar resource.',
    canonical: `${SITE}/bar-services/resources/how-to-open-a-bar-in-bali/`,
    h1: 'How to Open a Bar in Bali: Licences & Costs',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-how-to-open-a-bar-in-bali.jpg`,
  },

      'bar-services-resources-how-to-create-a-cocktail-menu': {
    path: '/bar-services/resources/how-to-create-a-cocktail-menu/',
    title: 'How to Create a Cocktail Menu That Sells | MyChef',
    description:
      'Menu engineering for Bali venues: pricing to a pour-cost target, spec cards, seasonality and local ingredients. Free myCHEF Bar guide.',
    canonical: `${SITE}/bar-services/resources/how-to-create-a-cocktail-menu/`,
    h1: 'How to Create a Cocktail Menu That Sells',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-how-to-create-a-cocktail-menu.jpg`,
  },

      'bar-services-resources-how-to-reduce-bar-shrinkage-bali': {
    path: '/bar-services/resources/how-to-reduce-bar-shrinkage-bali/',
    title: 'How to Reduce Bar Shrinkage in Bali | MyChef',
    description:
      'Cut bar inventory loss in Bali venues with recipe standards, stock controls, comp policies and accountability systems. Free myCHEF Bar guide.',
    canonical: `${SITE}/bar-services/resources/how-to-reduce-bar-shrinkage-bali/`,
    h1: 'How to Reduce Bar Shrinkage in Bali',
    ogImage: `${SITE}/generated/mychef-bar-services-bali-og-how-to-reduce-bar-shrinkage-bali.jpg`,
  },

      'fine-dining': {
    path: '/fine-dining',
    title: 'Private Fine Dining Bali | Fine Dining at Home by myCHEF',
    description:
      'Fine dining at home in Bali: 24 premium set menus, tasting experiences and wine pairing in your villa from IDR 1.25M per guest. Clear packages. WhatsApp myCHEF.',
    canonical: `${SITE}/fine-dining`,
    h1: 'Private Fine Dining in Your Bali Villa',
    ogImage: `${SITE}/hero-fine-dining.webp`,
  },

      catering: {
    path: '/catering',
    title: 'Catering Bali | Villa & Event Catering by Private Chefs',
    description:
      'Full-service catering in Bali: BBQ nights, buffets, plated dinners, babi guling and grazing tables for groups of 10–150. Transparent per-person pricing. WhatsApp myCHEF.',
    canonical: `${SITE}/catering`,
    h1: 'Catering in Bali — Built for Groups, Parties & Hosted Dinners',
    ogImage: `${SITE}/hero-catering.webp`,
  },

      events: {
    path: '/events',
    title: 'Event Catering Bali | One Team for Your Entire Event',
    description:
      'Bali event catering for weddings, birthdays, corporate retreats and villa parties — one team for food, staff, bar and coordination. Fixed quotes. WhatsApp myCHEF.',
    canonical: `${SITE}/events`,
    h1: 'Events in Bali, Run by One Team. You Just Host.',
    ogImage: `${SITE}/hero-events.webp`,
  },

      'in-villa-service': {
    path: '/in-villa-service',
    title: 'Villa Service Staff Bali | Waiters, Butlers & Bartenders',
    description:
      'Uniformed, English-speaking villa staff in Bali — waiters, butlers and coordinators from IDR 250K/hour; bartenders from IDR 350K/hour. WhatsApp myCHEF.',
    canonical: `${SITE}/in-villa-service`,
    h1: 'Professional Villa Service Staff — Hired by the Shift',
    ogImage: `${SITE}/bartender.webp`,
  },

      'villa-event-packages': {
    path: '/villa-event-packages',
    title: 'Bali Villa Event Packages | All-Inclusive Events | myCHEF',
    description:
      'All-inclusive Bali villa event packages: private chef, bar service, staffing, transport and cleanup in one bundle. Transparent tailored quotes. WhatsApp myCHEF.',
    canonical: `${SITE}/villa-event-packages`,
    h1: 'Bali Villa Event Packages — Everything, Arranged',
    ogImage: `${SITE}/generated/mychef-villa-event-packages-hero.webp`,
  },

      'vip-transport-bali': {
    path: '/vip-transport-bali',
    title: 'VIP Transport Bali | Luxury Cars & Yachts | myCHEF',
    description:
      'VIP transport in Bali: luxury car hire, minibuses, yacht charters and event logistics with English-speaking drivers. Coordinate with chef bookings via WhatsApp myCHEF.',
    canonical: `${SITE}/vip-transport-bali`,
    h1: 'VIP Transport Bali — Luxury Cars, Yachts & Private Transfers',
    ogImage: `${SITE}/generated/mychef-vip-transport-bali-hero.webp`,
  },

      'complete-villa-experience': {
    path: '/complete-villa-experience',
    title: 'Complete Villa Experience Bali | End-to-End Hospitality',
    description:
      'Full-service villa hospitality in Bali: airport transfers, daily private chef, events, staff, concierge and cleanup — one coordinated team from arrival to departure.',
    canonical: `${SITE}/complete-villa-experience`,
    h1: 'Complete Villa Experience — We Handle Everything',
    ogImage: `${SITE}/generated/mychef-catering-bali-catering-hero.webp`,
  },

      services: {
    path: '/services',
    title: 'All Services | Chefs, Catering, Events & Staffing in Bali',
    description:
      'Compare all private chef services in Bali: fine dining, catering, events, staffing & classes. Michelin-trained team. WhatsApp us to find the right fit.',
    canonical: `${SITE}/services`,
    h1: 'Our Services',
    ogImage: `${SITE}/generated/bali-hub-hero.webp`,
  },

      'three-course': {
    path: '/three-course',
    title: 'Three-Course Villa Dining Bali | 8 Menus from IDR 850K',
    description:
      'Lighter three-course villa dining in Bali — starter, main and dessert. Eight menus from IDR 850K. Ideal for casual lunches and family nights. WhatsApp myCHEF.',
    canonical: `${SITE}/three-course`,
    h1: 'Three Perfect Courses',
  },

      'kids-menus': {
    path: '/kids-menus',
    title: 'Kids\' Party Menus Bali | 6 Fun Options | myCHEF',
    description:
      'Fun, healthy kids\' party menus in Bali — pizza, pasta, burgers, seafood and Indonesian favourites. From IDR 250K/child with nut-free options. WhatsApp myCHEF.',
    canonical: `${SITE}/kids-menus`,
    h1: 'Little Guests. Big Flavours.',
  },

      'bbq-grill': {
    path: '/bbq-grill',
    title: 'BBQ Grill Menu Bali | Live Grill Station & Prices | myCHEF',
    description:
      'Browse myCHEF BBQ grill menus: live grill station, seafood, Wagyu and ribs at your Bali villa. Menus from IDR 950K per guest. WhatsApp myCHEF to book.',
    canonical: `${SITE}/bbq-grill`,
    h1: 'The BBQ Grill Menu — Fire. Smoke. Flavour.',
  },

      'dining-styles': {
    path: '/dining-styles',
    title: 'Dining Styles | myCHEF Bali',
    description:
      'Browse myCHEF Bali menus by dining style — fine dining, BBQ, family, kids, tasting menus and more across six collections. Find the right format for your villa evening.',
    canonical: `${SITE}/dining-styles`,
    h1: 'Find Your Perfect Menu',
  },

      'family-styling': {
    path: '/family-styling',
    title: 'How myCHEF Styles Dining Experiences | Food Styling',
    description:
      'How each myCHEF menu family is styled and served in Bali villas — from fine dining tasting menus to BBQ grill nights and kids party formats. Choose your dining style.',
    canonical: `${SITE}/family-styling`,
    h1: 'How We Style Each Experience',
  },

      faq: {
    path: '/faq',
    title: 'Private Chef Bali FAQ | Booking, Pricing & Menus | myCHEF',
    description:
      'Answers to every private chef Bali question: pricing, menus, dietary needs, staffing, weddings & booking flow. Get clarity before you confirm your date.',
    canonical: `${SITE}/faq`,
    h1: 'Frequently Asked Questions',
    ogImage: `${SITE}/og-image.webp`,
  },

      'why-mychef': {
    path: '/why-mychef',
    title: 'Best Private Chef Service Bali | Why Villas Choose myCHEF',
    description:
      'Why 560+ Bali villas trust myCHEF: Michelin-trained leadership, 50+ local staff, same-day confirmation & no-stress guarantee. See the full difference.',
    canonical: `${SITE}/why-mychef`,
    h1: 'Why 560+ Villas Choose myCHEF',
    ogImage: `${SITE}/generated/misc-hub-bali-lg.webp`,
  },

      reviews: {
    path: '/reviews',
    title: 'myCHEF Reviews | 560+ Villas Served in Bali',
    description:
      'Read guest reviews from myCHEF Bali villa dinners, weddings, retreats and events — real hosts, real outcomes. Book with confidence via WhatsApp myCHEF.',
    canonical: `${SITE}/reviews`,
    h1: 'What Our Guests Say',
    ogImage: `${SITE}/dining-table.webp`,
  },

      help: {
    path: '/help',
    title: 'Help Centre | Private Chef & Catering Bali | myCHEF',
    description:
      'Answers to your questions about booking a private chef or catering service in Bali — guides, pricing explainers and planning support from myCHEF.',
    canonical: `${SITE}/help`,
    h1: 'How Can We Help?',
    ogImage: `${SITE}/og-image.webp`,
  },

  // Private Chef pillar (2026-07-30). Replaces the 'villa-chef' entry — /villa-chef
  // now 301s here. This is the only page that publishes private chef day rates.
  'private-chef-bali': {
    path: '/private-chef-bali',
    title: 'Private Chef Bali | From IDR 1,000,000++ Per Day | myCHEF',
    description:
      'Hire a private chef in Bali. One meal IDR 1M++, two meals IDR 1.8M++, three meals IDR 2.7M++ per day. Chef + assistant, groceries at cost. WhatsApp myCHEF.',
    canonical: `${SITE}/private-chef-bali`,
    h1: 'Private Chef in Bali',
    ogImage: `${SITE}/generated/mychef-experience-bali-home-hero-ivory-villa.webp`,
  },

      'recommended-services': {
    path: '/recommended-services',
    title: 'Build Your Perfect Villa Experience | myCHEF Bali',
    description:
      'Tell myCHEF what you are hosting — guest count, mood and budget — and get matched to the right private chef, catering or event service in Bali. WhatsApp quote fast.',
    canonical: `${SITE}/recommended-services`,
    h1: 'Not Sure What You Need? We’ll Help.',
    ogImage: `${SITE}/generated/experience-aura-setup-lg.webp`,
  },

      'help-getting-started': {
    path: '/help/getting-started',
    title: 'How to Book a Private Chef in Bali | Getting Started',
    description:
      'Step-by-step guide to booking your first myCHEF private chef in Bali — what to send, how quotes work, and what happens after you confirm. Start here.',
    canonical: `${SITE}/help/getting-started`,
    h1: 'Getting Started',
    ogImage: `${SITE}/og-image.webp`,
  },

      'help-pricing': {
    path: '/help/pricing',
    title: 'myCHEF Pricing Explained: How Your Quote Works',
    description:
      'Understand your myCHEF quote: what each format includes, how guest count and menu style affect cost, ++ tax notes, and the steps after you confirm.',
    canonical: `${SITE}/help/pricing`,
    h1: 'Pricing Breakdown',
    ogImage: `${SITE}/og-image.webp`,
  },

      'help-menu-guide': {
    path: '/help/menu-guide',
    title: 'Choosing Your Menu | Courses, Dietaries & Tastings',
    description:
      'Choose the right private chef menu for your Bali villa — cuisines, dietary needs, course styles and how to shape a meal for your group. Practical myCHEF guide.',
    canonical: `${SITE}/help/menu-guide`,
    h1: 'Menu Selection Guide',
    ogImage: `${SITE}/og-image.webp`,
  },

      'help-wedding-guide': {
    path: '/help/wedding-guide',
    title: 'Planning Wedding Catering | What to Decide & When',
    description:
      'Plan Bali wedding catering step by step: guest counts, service styles, tastings, staffing and multi-day villa celebrations. Practical myCHEF wedding guide.',
    canonical: `${SITE}/help/wedding-guide`,
    h1: 'Planning a Villa Wedding',
    ogImage: `${SITE}/og-image.webp`,
  },

      'help-corporate-guide': {
    path: '/help/corporate-guide',
    title: 'Planning Corporate Catering | Invoicing, Timing & Headcount',
    description:
      'Plan corporate catering in Bali: menu options, staffing ratios, timing and multi-day meal flow for leadership offsites, retreats and team dining. Clear quotes via WhatsApp.',
    canonical: `${SITE}/help/corporate-guide`,
    h1: 'Corporate & Retreat Catering',
    ogImage: `${SITE}/og-image.webp`,
  },

      'help-staffing-guide': {
    path: '/help/staffing-guide',
    title: 'Planning Villa Staffing | Roles, Ratios & Scheduling',
    description:
      'Find the right villa staff in Bali for dinners, parties and extended stays — waiters, bartenders, butlers and household roles explained by myCHEF.',
    canonical: `${SITE}/help/staffing-guide`,
    h1: 'In-Villa Staffing & Service',
    ogImage: `${SITE}/og-image.webp`,
  },

      'help-managing-booking': {
    path: '/help/managing-booking',
    title: 'Manage Your Chef Booking | After You Confirm | myCHEF',
    description:
      'What happens after booking your myCHEF private chef: menu sign-off, villa setup, chef arrival, last-minute changes and day-of coordination. Clear steps.',
    canonical: `${SITE}/help/managing-booking`,
    h1: 'Managing Your Booking',
    ogImage: `${SITE}/og-image.webp`,
  },

      locations: {
    path: '/locations',
    title: 'Private Chef Locations Bali | All Areas We Serve | myCHEF',
    description:
      'Private chef coverage across Bali — Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua and 60+ villa areas. Find your location, compare areas and WhatsApp myCHEF for a quote.',
    canonical: `${SITE}/locations`,
    h1: 'Private Chef & Hospitality Across Bali',
    ogImage: `${SITE}/generated/hub-villa.webp`,
  },

      chefs: {
    path: '/chefs',
    title: 'Our Chefs | Michelin-Trained Private Chefs Bali | myCHEF',
    description:
      'Meet Adriano and the myCHEF culinary team — Michelin-trained leadership and villa-tested specialists across Bali. Browse chefs and request a booking via WhatsApp.',
    canonical: `${SITE}/chefs`,
    h1: 'Meet the Chefs Behind Every myCHEF Experience',
    ogImage: `${SITE}/generated/finedining-chefs-hero-xl.webp`,
  },

      'chefs-adriano': {
    path: '/chefs/adriano',
    title: 'Adriano | Private Chef Bali | Michelin-Trained Founder',
    description:
      'Book Adriano, Executive Chef & Founder of myCHEF Bali. Michelin-trained in Milan — Italian tasting menus, romantic dinners and VIP villa experiences.',
    canonical: `${SITE}/chefs/adriano`,
    h1: 'Adriano',
  },

      'chefs-made-surya': {
    path: '/chefs/made-surya',
    title: 'I Made Surya | myCHEF Bali',
    description:
      'Book I Made Surya for Mediterranean villa dinners and handmade pasta in Bali. Ubud-born, trained under Adriano. Ideal for 2–15 guests. WhatsApp myCHEF.',
    canonical: `${SITE}/chefs/made-surya`,
    h1: 'I Made Surya',
  },

      'chefs-bayu-pranata': {
    path: '/chefs/bayu-pranata',
    title: 'Bayu Pranata | BBQ Grill Chef | Live-Fire Specialist',
    description:
      'Book Bayu Pranata for poolside BBQ and grill events in Bali. Wagyu nights and large group celebrations (10–80+ guests). Jimbaran live-fire specialist.',
    canonical: `${SITE}/chefs/bayu-pranata`,
    h1: 'Bayu Pranata',
  },

      'chefs-ni-putu-asri': {
    path: '/chefs/ni-putu-asri',
    title: 'Ni Putu Asri | Balinese Chef | Indonesian Feast Specialist',
    description:
      'Book Ni Putu Asri for authentic Balinese and Indonesian feast menus. Gianyar-born, ceremonial cooking heritage and Asian fusion specialist. WhatsApp myCHEF.',
    canonical: `${SITE}/chefs/ni-putu-asri`,
    h1: 'Ni Putu Asri',
  },

      'chefs-wayan-suarjana': {
    path: '/chefs/wayan-suarjana',
    title: 'Wayan Suarjana — Pastry Chef | Cakes & Desserts | myCHEF',
    description:
      'Book Wayan Suarjana, myCHEF Head Pastry Chef in Bali. Custom cakes, plated desserts and chocolate tasting courses — hotel-trained pastry specialist.',
    canonical: `${SITE}/chefs/wayan-suarjana`,
    h1: 'Wayan Suarjana',
  },

      'chefs-ketut-mahardika': {
    path: '/chefs/ketut-mahardika',
    title: 'Ketut Mahardika — Seafood & Japanese Chef | Sashimi | myCHEF',
    description:
      'Book Ketut Mahardika for Japanese seafood and sashimi in your Bali villa. Jimbaran-born, knife-trained, daily market sourcing. Omakase and feast menus.',
    canonical: `${SITE}/chefs/ketut-mahardika`,
    h1: 'Ketut Mahardika',
  },

      'chefs-sari-dewi-kusuma': {
    path: '/chefs/sari-dewi-kusuma',
    title: 'Sari Dewi Kusuma — Wellness Chef | Vegan Retreats | myCHEF',
    description:
      'Book Sari Dewi Kusuma for wellness and retreat catering in Bali. Vegan, raw and Ayurvedic menus — yoga retreat specialist for detox and wellness dinners.',
    canonical: `${SITE}/chefs/sari-dewi-kusuma`,
    h1: 'Sari Dewi Kusuma',
  },

      'chefs-komang-artha': {
    path: '/chefs/komang-artha',
    title: 'Komang Artha — Event Chef | Villa Events & Weddings | myCHEF',
    description:
      'Book Komang Artha for villa events, weddings and corporate catering in Bali. 15 years experience with groups of 30–200+. Indonesian feast and buffet menus.',
    canonical: `${SITE}/chefs/komang-artha`,
    h1: 'Komang Artha',
  },

      'corporate-case-studies': {
    path: '/corporate-case-studies',
    title: 'Corporate Catering Case Studies Bali | Real Events & Costs',
    description:
      'Real corporate event case studies in Bali — executive dinners, offsites, retreats and conference catering with outcomes, menus and budgets from myCHEF.',
    canonical: `${SITE}/corporate-case-studies`,
    h1: 'How Companies Run Flawless Corporate Events in Bali',
    ogImage: `${SITE}/generated/corp-hero.webp`,
  },

      journal: {
    path: '/journal',
    title: 'Journal | Bali Private Chef Guides & Hosting Tips | myCHEF',
    description:
      'Expert guides, cost breakdowns and insider tips for hosting private chefs, villa dinners, weddings and events in Bali. Practical planning advice from myCHEF.',
    canonical: `${SITE}/journal`,
    h1: 'Journal',
    ogImage: `${SITE}/og-image.webp`,
  },

      pricing: {
    path: '/pricing',
    title: 'Private Chef Bali Prices | Catering & Event Pricing | myCHEF',
    description:
      'myCHEF price list for Bali: private chef day rates, catering per-person pricing and event packages. Tax and service stated. WhatsApp quote within 1 hour.',
    canonical: `${SITE}/pricing`,
    h1: 'Private Chef & Catering Prices in Bali',
    ogImage: `${SITE}/generated/catering-catering-hero-lg.webp`,
  },

      staffing: {
    path: '/staffing',
    title: 'Villa Staff Placement Bali | Hospitality Staffing Agency',
    description:
      'Villa staff placement in Bali: long-term private chefs, villa managers, butlers and hospitality teams. Vetted placements with guarantees. WhatsApp myCHEF.',
    canonical: `${SITE}/staffing`,
    h1: 'Hire Vetted Hospitality Staff for Your Villa, Hotel or Home',
    ogImage: `${SITE}/generated/luna-chef-portrait.webp`,
  },

      contact: {
    path: '/contact',
    title: 'Contact myCHEF | Private Chef & Catering Bali',
    description:
      'Contact myCHEF for private chef bookings, catering and event enquiries in Bali. Same-day quotes; WhatsApp replies typically within one hour. Bali-wide.',
    canonical: `${SITE}/contact`,
    h1: 'Contact Us',
    ogImage: `${SITE}/generated/contact-hero.webp`,
  },

      'certified-partner': {
    path: '/certified-partner',
    title: 'Certified Partner Programme Bali | myCHEF for Villas',
    description:
      'Become a myCHEF certified partner — preferred private chef and staffing services for Bali villas, with partner rates and priority booking. Apply via WhatsApp.',
    canonical: `${SITE}/certified-partner`,
    h1: 'The myCHEF Certified Partner Programme',
  },

      press: {
    path: '/press',
    title: 'Press & Media | myCHEF Bali',
    description:
      'Press coverage, media kit and brand story for myCHEF — Bali private chef and catering. High-res assets and interview requests welcome.',
    canonical: `${SITE}/press`,
    h1: 'myCHEF Media Kit',
    ogImage: `${SITE}/generated/partner-platform-hero.webp`,
  },

      privacy: {
    path: '/privacy',
    title: 'Privacy Policy | myCHEF',
    description:
      'How myCHEF collects, stores and protects your data when booking chef, catering or event services in Bali. Privacy policy and contact details.',
    canonical: `${SITE}/privacy`,
    h1: 'Privacy Policy',
  },

      terms: {
    path: '/terms',
    title: 'Terms of Service | myCHEF',
    description:
      'Terms of service for myCHEF private chef bookings, catering and events in Bali. Read before confirming a booking or service agreement.',
    canonical: `${SITE}/terms`,
    h1: 'Terms of Service',
  },

      cancellation: {
    path: '/cancellation',
    title: 'Cancellation Policy | myCHEF',
    description:
      'Cancellation and refund policy for myCHEF private chef and catering bookings in Bali. Timing windows, deposits and how changes are handled.',
    canonical: `${SITE}/cancellation`,
    h1: 'Cancellation Policy',
    ogImage: `${SITE}/og-image.webp`,
  },

      'blog-drop-off-catering-bali': {
    path: '/blog/drop-off-catering-bali',
    title: 'Drop-Off Catering in Bali: How Villa Food Delivery Works',
    description:
      'How drop-off catering works in Bali — what is delivered, areas covered, pricing ranges, and when to choose it over a full private chef service. myCHEF explains.',
    canonical: `${SITE}/blog/drop-off-catering-bali`,
    h1: 'Drop-Off Catering in Bali: What to Know Before You Order',
  },

      'blog-hostess-hire-bali': {
    path: '/blog/hostess-hire-bali',
    title: 'Hiring an Event Hostess in Bali: What to Know',
    description:
      'What professional event hostesses do, when you need one, and how hiring works for Bali villa parties, weddings and corporate events. Explained by myCHEF.',
    canonical: `${SITE}/blog/hostess-hire-bali`,
    h1: 'Event Hostess Hire in Bali — A Practical Guide',
  },

      'blog-chef-for-photoshoot-bali': {
    path: '/blog/chef-for-photoshoot-bali',
    title: 'Chef for Food Photoshoot Bali | Content Creation & Video',
    description:
      'Hire a chef for food photoshoots and content creation in Bali. Hotels, brands, influencers and publications — market-fresh sourcing and food styling included.',
    canonical: `${SITE}/blog/chef-for-photoshoot-bali`,
    h1: 'Chef for Food Photoshoot and Content Creation in Bali',
  },

      'blog-tasting-menu-bali': {
    path: '/blog/tasting-menu-bali',
    title: 'Private Tasting Menus in Bali: What to Expect',
    description:
      'What a private tasting menu in Bali involves — courses, market-led menus, dietary adaptation and wine pairing for villa dining. Practical guide from myCHEF.',
    canonical: `${SITE}/blog/tasting-menu-bali`,
    h1: 'Private Tasting Menus in Bali — What to Expect',
  },

      'blog-luxury-dining-bali': {
    path: '/blog/luxury-dining-bali',
    title: 'Luxury Private Dining Bali: Ultra-Premium Villa Experiences',
    description:
      'Luxury private dining in Bali by executive chefs with Michelin credentials — bespoke menus, premium ingredients and full front-of-house service. WhatsApp myCHEF.',
    canonical: `${SITE}/blog/luxury-dining-bali`,
    h1: 'Luxury Private Dining in Bali',
  },

      'blog-fine-dining-at-home-bali': {
    path: '/blog/fine-dining-at-home-bali',
    title: 'Fine Dining at Home in Bali: How It Works',
    description:
      'Fine dining at home in Bali — how restaurant-quality menus, plating and service are delivered to your villa by professional private chefs. Guide from myCHEF.',
    canonical: `${SITE}/blog/fine-dining-at-home-bali`,
    h1: 'Fine Dining at Home in Bali — What to Expect',
  },

      'blog-holiday-chef-bali': {
    path: '/blog/holiday-chef-bali',
    title: 'Holiday Chef Bali | Christmas, New Year & Festive Season',
    description:
      'Holiday chef service in Bali for Christmas, New Year and the festive season. Roast, seafood, Balinese spreads or bespoke villa menus across all service areas. WhatsApp myCHEF.',
    canonical: `${SITE}/blog/holiday-chef-bali`,
    h1: 'Holiday Chef Bali -- Christmas, New Year & Festive Season  myCHEF',
  },

      'blog-dietary-specific-chef-bali': {
    path: '/blog/dietary-specific-chef-bali',
    title: 'Dietary-Specific Private Chef Bali | Vegan & GF Menus',
    description:
      'Dietary-specific private chef in Bali. Vegan, gluten-free, halal, keto, allergen-free menus. Specialist chefs and multi-requirement groups. All Bali areas.',
    canonical: `${SITE}/blog/dietary-specific-chef-bali`,
    h1: 'Dietary-Specific Private Chef Bali -- Vegan, Gluten-Free, Halal, Keto, and Allergen-Free',
  },

      'blog-hotel-restaurant-chef-staffing': {
    path: '/blog/hotel-restaurant-chef-staffing',
    title: 'Hotel & Restaurant Chef Staffing in Bali: F&B Hiring Guide',
    description:
      'How chef staffing works for Bali hotels, resorts and restaurants — roles, contracts, salaries and placement process through myCHEF staffing partners.ement options.',
    canonical: `${SITE}/blog/hotel-restaurant-chef-staffing`,
    h1: 'Hotel & Restaurant Chef Staffing Bali — F&B Hiring Guide',
  },

      'blog-indonesian-street-food-private-chef-bali': {
    path: '/blog/indonesian-street-food-private-chef-bali',
    title: 'Indonesian Street Food at Your Bali Villa | Private Chef',
    description:
      'Authentic Indonesian street food classics at your Bali villa — nasi goreng, satay lilit, babi guling, gado-gado — by a private chef. From IDR 700K/person.',
    canonical: `${SITE}/blog/indonesian-street-food-private-chef-bali`,
    h1: 'Indonesian Street Food at Your Bali Villa',
  },
} as const

/** Helper to retrieve meta by route key with strict typing */
export function getPageMeta(key: keyof typeof PAGE_META): PageMeta {
  return PAGE_META[key]
}

/** All page meta entries as an array for bulk operations (sitemaps, audits, etc.) */
export const ALL_PAGE_META: PageMeta[] = Object.values(PAGE_META)

/** Lookup table by canonical route path (e.g. '/catering/bbq-catering') */
export const PAGE_META_BY_PATH: Record<string, PageMeta> = Object.fromEntries(
  ALL_PAGE_META.map((meta) => [meta.path, meta])
)

/** Retrieve metadata for a route by its path, if it exists. */
export function getPageMetaByPath(path: string): PageMeta | undefined {
  return PAGE_META_BY_PATH[path.replace(/\/$/, '') || '/']
}
