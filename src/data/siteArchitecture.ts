import { REDIRECT_MAP } from './redirects'

/**
 * myCHEF — MASTER SITE ARCHITECTURE (Vite SPA)
 *
 * Single source of truth for navigation, pages, SEO, and internal linking.
 */

// ─────────────────────────────────────────────────────────────────────────────
// PHONE / WHATSAPP — SINGLE SOURCE OF TRUTH
// To change the number site-wide, run: node scripts/change-phone.js <new>
// e.g.  node scripts/change-phone.js 6289674072020
// ─────────────────────────────────────────────────────────────────────────────
export const PHONE = {
  /** Digits only — used in wa.me links and tel: href   e.g. 6289674072020 */
  digits:   '6289674072020',
  /** Display format with spaces                        e.g. +62 896-7407-2020 */
  display:  '+62 896-7407-2020',
  /** Hyphenated — used in schema.org telephone field   e.g. +62-896-7407-2020 */
  schema:   '+62-896-7407-2020',
}

export const SITE = {
  name: 'myCHEF',
  url: 'https://mychef.id',
  email: 'bali@mychef.id',
  /** @deprecated use PHONE.digits */
  whatsapp: PHONE.digits,
}

export type PillarSlug = 'fine-dining' | 'catering' | 'events' | 'in-villa-service' | 'staffing'

export interface SubPage {
  slug: string
  label: string
  h1: string
  title: string
  description: string
  intro?: string
  icon?: string
}

export interface Pillar {
  slug: PillarSlug
  label: string
  url: string
  description: string
  h1: string
  title: string
  intro: string
  navLabel: string
  ctaPrimary: string
  accent: string
  relatedPillars: PillarSlug[]
  subPages: SubPage[]
}

export const PILLARS: Record<PillarSlug, Pillar> = {
  'fine-dining': {
    slug: 'fine-dining',
    label: 'Fine Dining',
    url: '/fine-dining',
    h1: 'Michelin-Trained Private Chef Experiences',
    description: '24 premium set menus for private villa dining in Bali. Vegetarian, seafood, mixed meats & single-meat. From IDR 1.25M per guest. Book your chef.',
    title: 'Private Fine Dining Bali — 24 Set Menus | myCHEF.id',
    intro: 'Experience Michelin-standard dining in the privacy of your villa. Multi-course tasting menus, wine pairings, and Italian fine dining technique.',
    navLabel: 'Fine Dining',
    ctaPrimary: 'Reserve Fine Dining',
    accent: '#C5A028',
    relatedPillars: ['catering', 'events', 'in-villa-service'],
    subPages: [
      { slug: 'romantic-dinner', label: 'Romantic Dinner', h1: 'Private Romantic Dinner in Bali', title: 'Romantic Dinner Bali | Private Villa Chef — myCHEF', description: 'Intimate five-course private chef dinners for couples in Bali villas. Candlelight, sommelier pairing, and Michelin-trained service.' },
      { slug: 'tasting-menu', label: 'Tasting Menu', h1: 'Market-Led Private Tasting Menus', title: 'Private Tasting Menu Bali | 7-11 Course Experiences — myCHEF', description: 'Signature 7 to 11 course tasting menus by Adriano. Seasonal Balinese ingredients met with Italian technique.' },
      { slug: 'chefs-table', label: 'Chef’s Table', h1: 'Private Chef’s Table Experience', title: 'Chef Table Experience Bali | Counter-Side Fine Dining — myCHEF', description: 'An interactive, counter-side private dining experience. Watch the chef work course-by-course with live commentary.' },
      { slug: 'menus', label: 'Our Menus', h1: 'Fine Dining Menus', title: 'Classic Set Menus — Private Fine Dining Bali | myCHEF.id', description: 'Browse 24 classic set menus for private villa dining in Bali. Vegetarian, seafood, mixed meats & single-meat. From IDR 1.25M per guest.' },
      { slug: 'our-chefs', label: 'Our Chefs', h1: 'The myCHEF Culinary Team', title: 'Our Private Chefs in Bali | Michelin-Trained Team — myCHEF', description: 'Meet the chefs behind the brand. Led by Adriano, our team is trained in Milan, Tokyo, and Bali’s best kitchens.' },
      { slug: 'private-chef-bali', label: 'Private Chef Bali', h1: 'Private Chef Bali Service', title: 'Private Chef Bali | Michelin-Trained Villa Dining — myCHEF', description: 'Hire a Michelin-trained private chef for your Bali villa. 560+ villas served across Seminyak, Canggu, Ubud, and Uluwatu.' },
    ],
  },
  catering: {
    slug: 'catering',
    label: 'Catering',
    url: '/catering',
    h1: 'Villa Catering & Group Events',
    description: 'Full-service catering for Bali villas. BBQ nights, buffets, drop-off feasts, and grazing tables for groups of 10 to 150.',
    title: 'Villa Catering Bali | Private Chef Catering Service — myCHEF',
    intro: 'From intimate dinners to 150-guest celebrations. BBQs, buffets, and chef-led services with full setup and cleanup.',
    navLabel: 'Catering',
    ctaPrimary: 'Get Catering Quote',
    accent: '#6B8E5A',
    relatedPillars: ['fine-dining', 'events', 'in-villa-service'],
    subPages: [
      { slug: 'bbq-catering', label: 'BBQ Catering', h1: 'Live-Fire BBQ Catering Bali', title: 'BBQ Catering Bali | Private Villa BBQ & Chef Service — myCHEF', description: 'Bali’s #1 villa BBQ catering. Fresh seafood, Wagyu steaks, and organic sides grilled live at your pool.' },
      { slug: 'buffet', label: 'Buffet', h1: 'Buffet Catering Bali for Villas, Weddings & Corporate Events', title: 'Buffet Catering Bali from IDR 475K++ | Villa & Event Buffets — myCHEF', description: 'Buffet catering in Bali from IDR 475,000++ per guest. Indonesian buffet, international buffet & live-station catering for villas, weddings & corporate events. Chef, staff & cleanup included.' },
      { slug: 'plated-catering', label: 'Plated Catering', h1: 'Seated Plated Catering', title: 'Plated Catering Bali | Formal Villa Dinner Service — myCHEF', description: 'Formal table service for events. 3 to 5 course plated menus tailored to your occasion and group size.' },
      { slug: 'drop-off-catering', label: 'Drop-Off', h1: 'Gourmet Drop-Off Catering', title: 'Drop-Off Catering Bali | Ready-to-Serve Villa Food — myCHEF', description: 'Premium food delivered to your villa. Perfect for casual groups who want great food without the on-site staff.' },
      { slug: 'babi-guling', label: 'Babi Guling', h1: 'Traditional Babi Guling Catering', title: 'Babi Guling Catering Bali | Whole-Pig Roast — myCHEF', description: 'The ultimate Balinese celebration feast. Traditional whole-pig roast served at your villa for 10-50 guests.' },
      { slug: 'grazing-tables', label: 'Grazing Tables', h1: 'Styled Grazing Tables', title: 'Grazing Table Bali | Styled Event Platters — myCHEF', description: 'Artisan cheese, charcuterie, and fresh fruit spreads. Styled grazing tables for welcome drinks and poolside events.' },
      { slug: 'villa-catering', label: 'Villa Catering', h1: 'Catering for Villa Stays', title: 'Villa Catering Bali | Group & Family Dining — myCHEF', description: 'Reliable group catering for multi-day villa stays. Breakfast, lunch, and dinner plans for families and groups.' },
      { slug: 'corporate-catering', label: 'Corporate', h1: 'Bali Corporate Catering', title: 'Corporate Catering Bali | Business Event Hospitality — myCHEF', description: 'Professional catering for offsites, boardroom dinners, and conferences. Tax invoices (NPWP) and executive service.' },
      { slug: 'retreat-catering', label: 'Retreats', h1: 'Luxury Retreat Catering & Hospitality in Bali', title: 'Luxury Retreat Catering Bali | Yoga, Wellness & Corporate Retreat Hospitality | myCHEF', description: 'Premium retreat catering across Bali for yoga, wellness, corporate and luxury retreats. Multi-day menu planning, healthy chef-prepared meals, dietary specialists and professional hospitality teams. Custom proposals for retreats of every size.' },
      { slug: 'floating-breakfast', label: 'Floating Breakfast', h1: 'Luxury Floating Breakfast Experience in Bali', title: 'Luxury Floating Breakfast Bali | Private Villa Pool Experience | myCHEF', description: 'Book a luxury floating breakfast experience at your Bali villa. Chef-prepared dishes, fresh coffee, champagne options and full setup. Perfect for honeymoons, birthdays and celebrations.' },
    ],
  },
  events: {
    slug: 'events',
    label: 'Events',
    url: '/events',
    h1: 'Bali Event Production & Hospitality',
    description: 'One team for your entire event. Weddings, birthdays, corporate retreats, and villa parties anywhere in Bali.',
    title: 'Bali Event Catering | Private Villa Celebrations — myCHEF',
    intro: 'Weddings, birthdays, corporate retreats, and celebrations. Full production, coordination, and hospitality for any group size.',
    navLabel: 'Events',
    ctaPrimary: 'Plan Your Event',
    accent: '#A67C52',
    relatedPillars: ['catering', 'fine-dining', 'in-villa-service'],
    subPages: [
      { slug: 'weddings', label: 'Weddings', h1: 'Villa Wedding Catering & Planning', title: 'Bali Wedding Catering | Villa Wedding Specialist — myCHEF', description: 'Elegant wedding catering for Bali villa weddings. Plated dinners, buffets, and cocktail receptions with full team support.' },
      { slug: 'birthdays', label: 'Birthdays', h1: 'Villa Birthday Party Catering', title: 'Birthday Catering Bali | Private Villa Celebration — myCHEF', description: 'Celebrate your birthday with a live chef BBQ or fine-dining menu. We handle food, drinks, cake, and styling.' },
      { slug: 'anniversaries', label: 'Anniversaries', h1: 'Anniversary Dinner Planning', title: 'Anniversary Dinner Bali | Private Romantic Catering — myCHEF', description: 'Celebrate your milestone with an intimate, styled dinner under the stars. Custom menus and sommelier pairing.' },
      { slug: 'corporate-events', label: 'Corporate', h1: 'Executive Corporate Events', title: 'Corporate Event Catering Bali | Business Hospitality — myCHEF', description: 'Seamless hospitality for corporate offsites, product launches, and boardroom dinners. Full production and NPWP-ready.' },
      { slug: 'retreats', label: 'Retreats', h1: 'Yoga & Wellness Retreats', title: 'Retreat Catering Bali | Wellness Event Support — myCHEF', description: 'Multi-day catering for wellness retreats. Healthy, plant-forward menus that support your retreat schedule.' },
      { slug: 'baby-showers', label: 'Baby Showers', h1: 'Baby Shower Catering & Decor', title: 'Baby Shower Bali | Styled Villa Brunches — myCHEF', description: 'Light brunches, high tea, and themed decor for villa baby showers. Beautiful, photo-ready setups.' },
      { slug: 'villa-parties', label: 'Villa Parties', h1: 'Catered Villa Parties & Receptions', title: 'Villa Party Catering Bali | Social Event Support — myCHEF', description: 'From cocktail receptions to pool parties. We provide the food, bar staff, and coordination for your villa gathering.' },
    ],
  },
  'in-villa-service': {
    slug: 'in-villa-service',
    label: 'In-Villa Service',
    url: '/in-villa-service',
    h1: 'Professional Villa Service Staff',
    description: 'Uniformed, English-speaking staff for your villa. Waiters, butlers, bartenders, and coordinators available by the shift.',
    title: 'Hire Villa Staff Bali | Professional Waiters & Butlers — myCHEF',
    intro: 'Uniformed, trained service staff for villa events. Waiters, butlers, bartenders, sommeliers, and event coordinators.',
    navLabel: 'In-Villa Service',
    ctaPrimary: 'Hire Staff',
    accent: '#D4A574',
    relatedPillars: ['catering', 'events', 'fine-dining'],
    subPages: [
      { slug: 'waiters', label: 'Waiters', h1: 'Private Waiter Service Bali', title: 'Hire Waiters Bali | Professional Villa Server — myCHEF', description: 'Uniformed waiters for villa dinners and events. English-speaking, trained in fine-dining service standards.' },
      { slug: 'butlers', label: 'Butlers', h1: 'Private Butler Service Bali', title: 'Hire Butlers Bali | Professional Villa Host — myCHEF', description: 'Discreet, anticipatory butler service for villas and estates. Expert in guest relations and household flow.' },
      { slug: 'bartenders', label: 'Bartenders', h1: 'Villa Bartender Service', title: 'Hire Bartenders Bali | Cocktail & Bar Service — myCHEF', description: 'Professional bartenders for villa events. Classic cocktails, bar setup, and efficient service flow.' },
      { slug: 'mixology', label: 'Mixology', h1: 'Signature Mixology Service', title: 'Mixology Service Bali | Custom Cocktail Programs — myCHEF', description: 'Signature cocktail creation and bar consultancy for special events. Custom menus and premium ingredients.' },
      { slug: 'sommelier', label: 'Sommelier', h1: 'Private Sommelier Service', title: 'Hire Sommelier Bali | Wine Service & Pairing — myCHEF', description: 'Expert wine service for your villa dinner. Pairings, selection advice, and professional cellar management.' },
      { slug: 'host-hostess', label: 'Hosts', h1: 'Event Host & Hostess Service', title: 'Hire Hosts Bali | Event Entry & Guest Flow — myCHEF', description: 'Guest reception and event flow management for weddings and corporate gatherings. The face of your event.' },
    ],
  },
  staffing: {
    slug: 'staffing',
    label: 'Staffing',
    url: '/staffing',
    h1: 'Hospitality Staffing & Placement',
    description: 'Long-term staffing for villas, hotels, and residences. We source, vet, and place private chefs and household teams.',
    title: 'Staff Placement Bali | Hire Chefs & Household Staff — myCHEF',
    intro: 'Permanent and seasonal staffing solutions. Private chef placement, villa managers, household teams, and specialized hospitality roles.',
    navLabel: 'Staffing',
    ctaPrimary: 'Find Staff',
    accent: '#8B7355',
    relatedPillars: ['fine-dining', 'catering', 'in-villa-service'],
    subPages: [
      { slug: 'private-chef-placement', label: 'Chef Placement', h1: 'Private Chef Placement Bali', title: 'Hire a Full-Time Chef Bali | Staff Placement — myCHEF', description: 'Permanent or seasonal private chef placement for your villa or residence. We handle vetting, trials, and contracts.' },
      { slug: 'live-in-chef', label: 'Live-In Chef', h1: 'Live-In Villa Chef Service', title: 'Live-In Chef Bali | Full-Board Villa Hosting — myCHEF', description: 'Professional chefs who live on-site to manage all meals, groceries, and kitchen logistics for your family or guests.' },
      { slug: 'villa-staff', label: 'Villa Staff', h1: 'B2B Villa & Household Staffing', title: 'Hire Villa Staff Bali | Management & Teams — myCHEF', description: 'Comprehensive staffing for large estates and villa portfolios. Villa managers, housekeepers, and support teams.' },
      { slug: 'household-staff', label: 'Household Staff', h1: 'Professional Household Staffing', title: 'Hire Household Staff Bali | Estate Operations — myCHEF', description: 'Experienced managers and staff to oversee large residences, staff scheduling, maintenance, and vendor relationships.' },
      { slug: 'for-villa-managers', label: 'For Villa Managers', h1: 'Partner Program for Villa Managers', title: 'Villa Manager Partnership Bali | myCHEF Affiliate — myCHEF', description: 'Earn commission by offering on-demand private dining to your guests. We provide the menus, team, and logistics.' },
      { slug: 'for-hotels-restaurants', label: 'For Hotels', h1: 'Hotel Culinary Staffing Support', title: 'Hotel Staffing Bali | Kitchen & Service Support — myCHEF', description: 'Temporary or permanent culinary staffing solutions for Bali hotels and restaurants. Vetted, high-standard professionals.' },
    ],
  },
}

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
  | 'kuta'
  | 'legian'
  | 'kerobokan'
  | 'petitenget'
  | 'tanah-lot'
  | 'tabanan'
  | 'denpasar'
  | 'gianyar'
  | 'tegallalang'
  | 'amed'
  | 'lovina'
  | 'candidasa'
  | 'padang-bai'
  | 'ungasan'
  | 'pecatu'

export interface LocationPage {
  slug: LocationSlug
  label: string
  h1: string
  title: string
  description: string
  intro?: string
}

export const LOCATIONS: Record<LocationSlug, LocationPage> = {
  seminyak: {
    slug: 'seminyak',
    label: 'Seminyak',
    h1: 'Private Chef Seminyak — Beachfront Villa Dining',
    title: 'Private Chef Seminyak | Beachfront Villa Dining — myCHEF',
    description: 'Hire a private chef in Seminyak for beachfront villa dinners, parties, and fine dining. Michelin-trained chefs serving Petitenget and Oberoi area.',
    intro: 'Seminyak is Bali’s premier villa destination, where beachfront estates meet a world-class food scene. We provide on-demand fine dining that rivals the strip’s best restaurants, served in the privacy of your own villa.',
  },
  canggu: {
    slug: 'canggu',
    label: 'Canggu',
    h1: 'Private Chef Canggu — Surf Villas & Family Feasts',
    title: 'Private Chef Canggu | Surf Villas & Family Feasts — myCHEF',
    description: 'Private chef services in Canggu for families, surfers, and social groups. Healthy meal prep, poolside BBQs, and Mediterranean dinners.',
    intro: 'In the heart of Bali’s creative and surf culture, our Canggu service focuses on vibrant, healthy menus and relaxed social dining that fits the neighborhood’s lifestyle.',
  },
  uluwatu: {
    slug: 'uluwatu',
    label: 'Uluwatu',
    h1: 'Private Chef Uluwatu — Clifftop Fine Dining',
    title: 'Private Chef Uluwatu | Clifftop Fine Dining — myCHEF',
    description: 'Exclusive private chef service in Uluwatu for clifftop estates and wedding villas. Seafood-forward menus and sunset dining experiences.',
    intro: 'Uluwatu’s dramatic cliffs demand a dining experience to match. We specialize in clifftop seafood feasts and high-end celebrations with the Indian Ocean as your backdrop.',
  },
  ubud: {
    slug: 'ubud',
    label: 'Ubud',
    h1: 'Private Chef Ubud — Jungle Retreats & Wellness',
    title: 'Private Chef Ubud | Jungle Retreats & Wellness — myCHEF',
    description: 'Private chef and retreat catering in Ubud. Plant-forward menus, traditional Balinese feasts, and wellness-focused meal plans.',
    intro: 'From Sayan to the rice terraces of Tegallalang, our Ubud service embraces the island’s spiritual heart with organic, locally-sourced menus and quiet, professional service.',
  },
  'nusa-dua': {
    slug: 'nusa-dua',
    label: 'Nusa Dua',
    h1: 'Private Chef Nusa Dua — Resort Estates & Events',
    title: 'Private Chef Nusa Dua | Resort Estates & Events — myCHEF',
    description: 'Premium private chef services in Nusa Dua for gated estates and corporate retreats. Polished service and Michelin-standard menus.',
    intro: 'In Bali’s enclave of five-star hospitality, we deliver a private alternative to resort dining, offering bespoke menus and executive-level service for the area’s premier estates.',
  },
  jimbaran: {
    slug: 'jimbaran',
    label: 'Jimbaran',
    h1: 'Private Chef Jimbaran — Seafood & Bay Dining',
    title: 'Private Chef Jimbaran | Seafood & Bay Dining — myCHEF',
    description: 'Seafood-focused private chef services in Jimbaran. Direct-from-market catch and beachfront villa catering.',
    intro: 'Leveraging our proximity to Bali’s primary seafood market, our Jimbaran service features the island’s freshest catch, prepared with Mediterranean and Balinese techniques.',
  },
  sanur: {
    slug: 'sanur',
    label: 'Sanur',
    h1: 'Private Chef Sanur — Relaxed East Coast Dining',
    title: 'Private Chef Sanur | Relaxed East Coast Dining — myCHEF',
    description: 'Private chef services in Sanur for families and long-stay guests. Classic Mediterranean and traditional Indonesian menus.',
    intro: 'Sanur’s calm, family-friendly energy is reflected in our service there — gentle, professional hosting and menus that prioritize comfort and consistency.',
  },
  berawa: {
    slug: 'berawa',
    label: 'Berawa',
    h1: 'Private Chef Berawa — Modern Villa Hosting',
    title: 'Private Chef Berawa | Modern Villa Hosting — myCHEF',
    description: 'Private chef and event catering in Berawa. Mediterranean menus for modern villas and social group stays.',
    intro: 'Serving the stylish villas of Berawa, we provide a sophisticated hospitality layer for groups who want the best of Bali’s social scene brought to their doorstep.',
  },
  pererenan: {
    slug: 'pererenan',
    label: 'Pererenan',
    h1: 'Private Chef Pererenan — Design Villas & Privacy',
    title: 'Private Chef Pererenan | Design Villas & Privacy — myCHEF',
    description: 'Intimate private chef experiences in Pererenan. Fine dining and small-group catering for design-led villas.',
    intro: 'In Bali’s most sought-after quiet neighborhood, we focus on intimacy and craft, delivering Michelin-level meals for guests who value privacy and design.',
  },
  bukit: {
    slug: 'bukit',
    label: 'Bukit Peninsula',
    h1: 'Private Chef Bukit Peninsula — Clifftop Villa Fine Dining',
    title: 'Private Chef Bukit Peninsula | Clifftop Dining — myCHEF',
    description: 'Private chef and event catering in the Bukit Peninsula — Bingin, Padang Padang, Ungasan. Clifftop fine dining for elopements and celebrations.',
    intro: 'Across the Bukit Peninsula, myCHEF runs clifftop dining, surf-group feasts, and milestone celebrations for villas in Bingin, Pecatu, Padang Padang, and Ungasan. We plan around wind, lift access, and dramatic terrace layouts so the food, service, and sunset timing all feel intentional.',
  },
  kuta: {
    slug: 'kuta',
    label: 'Kuta',
    h1: 'Private Chef in Kuta Bali — Villa Dining & Event Catering',
    title: 'Private Chef Kuta Bali | Villa Dining & Event Catering — myCHEF',
    description: 'Hire a private chef in Kuta Bali for villa dinners, BBQ parties, and celebrations. myCHEF serves Kuta, Legian, and Tuban from IDR 600k/day.',
    intro: 'In Kuta, myCHEF provides private chef services for families, groups, and celebrations staying near the heart of Bali. We specialize in poolside BBQ parties, family villa dinners, and birthday celebrations across Kuta, Legian, and Tuban.',
  },
  legian: {
    slug: 'legian',
    label: 'Legian',
    h1: 'Private Chef Legian — Fine Dining & Private Catering',
    title: 'Private Chef Legian | Fine Dining & Private Catering — myCHEF',
    description: 'Premium private chef services in Legian. Plated fine dining and group catering.',
    intro: 'myCHEF brings restaurant-quality dining to Legian’s private villas, offering an intimate alternative to the busy local dining strip. We handle all logistics, from market sourcing to kitchen cleanup.',
  },
  kerobokan: {
    slug: 'kerobokan',
    label: 'Kerobokan',
    h1: 'Private Chef Kerobokan — Local Villa Dining',
    title: 'Private Chef Kerobokan | Local Villa Dining — myCHEF',
    description: 'Private chef and catering services in Kerobokan. Healthy meal prep and family dinners.',
    intro: 'Serving the residential heart of Bali, myCHEF in Kerobokan focuses on consistent quality for both holiday guests and expatriate families looking for professional at-home dining.',
  },
  petitenget: {
    slug: 'petitenget',
    label: 'Petitenget',
    h1: 'Private Chef Petitenget — High-End Villa Dining',
    title: 'Private Chef Petitenget | High-End Villa Dining — myCHEF',
    description: 'Bespoke private chef experiences in Petitenget. Fine dining and cocktail parties.',
    intro: 'In the stylish Petitenget area, we deliver high-touch service and Michelin-level menus that match the sophisticated atmosphere of the neighborhood’s premier estates.',
  },
  'tanah-lot': {
    slug: 'tanah-lot',
    label: 'Tanah Lot',
    h1: 'Private Chef Tanah Lot — Destination Dining',
    title: 'Private Chef Tanah Lot | Destination Dining — myCHEF',
    description: 'Exclusive private chef service near Tanah Lot. Oceanfront dining and clifftop events.',
    intro: 'Experience dramatic sunset dining near Tanah Lot with myCHEF. We coordinate specialized logistics for more remote villas to ensure five-star service in every location.',
  },
  tabanan: {
    slug: 'tabanan',
    label: 'Tabanan',
    h1: 'Private Chef Tabanan — Retreat & Jungle Dining',
    title: 'Private Chef Tabanan | Retreat & Jungle Dining — myCHEF',
    description: 'Retreat catering and private chef services in Tabanan. Plant-forward menus.',
    intro: 'Tabanan’s vast estates and wellness retreats are a natural fit for myCHEF’s multi-day service models and healthy, locally-sourced menu concepts.',
  },
  denpasar: {
    slug: 'denpasar',
    label: 'Denpasar',
    h1: 'Private Chef Denpasar — Corporate & Residential Dining',
    title: 'Private Chef Denpasar | Corporate & Residential — myCHEF',
    description: 'Professional catering and private chef services in Denpasar for corporate events.',
    intro: 'Serving Bali’s administrative center, we provide structured catering for business events and professional private chef services for urban residences.',
  },
  gianyar: {
    slug: 'gianyar',
    label: 'Gianyar',
    h1: 'Private Chef Gianyar — Cultural & Estate Dining',
    title: 'Private Chef Gianyar | Cultural & Estate Dining — myCHEF',
    description: 'Private chef services in Gianyar. Traditional Balinese feasts and large estate catering.',
    intro: 'Gianyar’s heritage estates provide a stunning backdrop for our traditional Balinese whole-pig roasts and large-scale family gatherings.',
  },
  tegallalang: {
    slug: 'tegallalang',
    label: 'Tegallalang',
    h1: 'Private Chef Tegallalang — Rice Terrace Dining',
    title: 'Private Chef Tegallalang | Rice Terrace Dining — myCHEF',
    description: 'Unique private dining experiences in Tegallalang. Scenic lunches and intimate jungle dinners.',
    intro: 'We bring the myCHEF standard to the iconic rice terraces of Tegallalang, creating unforgettable dining moments in some of Bali’s most photogenic villas.',
  },
  amed: {
    slug: 'amed',
    label: 'Amed',
    h1: 'Private Chef Amed — East Bali Seafood Dining',
    title: 'Private Chef Amed | East Bali Seafood Dining — myCHEF',
    description: 'Seafood-forward private chef services in Amed. Fresh catch menus and quiet villa dining.',
    intro: 'In Amed, we leverage the morning’s fresh catch to deliver exceptional seafood-led menus for guests exploring Bali’s serene eastern coast.',
  },
  lovina: {
    slug: 'lovina',
    label: 'Lovina',
    h1: 'Private Chef Lovina — North Bali Villa Dining',
    title: 'Private Chef Lovina | North Bali Villa Dining — myCHEF',
    description: 'Private chef and catering in Lovina. Family-style dinners and sunrise breakfast service.',
    intro: 'myCHEF serves the tranquil villas of north Bali with calm, professional service that complements the relaxed pace of life in Lovina.',
  },
  candidasa: {
    slug: 'candidasa',
    label: 'Candidasa',
    h1: 'Private Chef Candidasa — Coastal Villa Dining',
    title: 'Private Chef Candidasa | Coastal Villa Dining — myCHEF',
    description: 'Premium private chef services in Candidasa. Oceanfront catering and intimate plated dinners.',
    intro: 'Our Candidasa service focuses on coastal elegance, delivering refined Mediterranean and Balinese menus to the area’s beautiful waterfront properties.',
  },
  'padang-bai': {
    slug: 'padang-bai',
    label: 'Padang Bai',
    h1: 'Private Chef Padang Bai — Port-Side Private Dining',
    title: 'Private Chef Padang Bai | Private Dining — myCHEF',
    description: 'Private chef services in Padang Bai for villa guests and yacht departures.',
    intro: 'We provide high-quality villa dining and specialized provisioning for guests staying in or departing from the Padang Bai area.',
  },
  ungasan: {
    slug: 'ungasan',
    label: 'Ungasan',
    h1: 'Private Chef Ungasan — Clifftop Dining',
    title: 'Private Chef Ungasan | Clifftop Dining — myCHEF',
    description: 'High-end private chef and event catering in Ungasan. Michelin-trained teams.',
    intro: 'Serving the premier estates of Ungasan, we deliver an ultra-premium hospitality layer that matches the standard of the world’s finest clifftop villas.',
  },
  pecatu: {
    slug: 'pecatu',
    label: 'Pecatu',
    h1: 'Private Chef Pecatu — Surf & Sunset Dining',
    title: 'Private Chef Pecatu | Surf & Sunset Dining — myCHEF',
    description: 'Private chef services in Pecatu. Sunset BBQs and recovery brunches.',
    intro: 'In Pecatu, myCHEF provides the perfect culinary accompaniment to a day on the waves, with high-protein brunches and celebratory sunset dinners.',
  },
}

/**
 * Slugs that have a REAL /locations/<slug> page (routed in App.tsx). LOCATIONS data
 * holds more entries than there are pages, so link generators MUST gate on this set
 * or they emit /locations/<slug> links that 404 (crawl waste). Keep in sync with
 * the /locations routes in App.tsx.
 */
export const LOCATION_PAGE_SLUGS: ReadonlySet<string> = new Set([
  'bukit', 'canggu', 'denpasar', 'jimbaran', 'kuta',
  'nusa-dua', 'pererenan', 'sanur', 'seminyak', 'ubud', 'uluwatu',
])
export const hasLocationPage = (slug: string): boolean => LOCATION_PAGE_SLUGS.has(slug)

/**
 * Returns the canonical internal URL for a location slug.
 *
 * Only the slugs in LOCATION_PAGE_SLUGS have a real /locations/<slug> page.
 * Linking to /locations/<slug> for any other slug hits a redirect rule,
 * which wastes crawl budget and dilutes internal link equity. For slugs
 * without a dedicated location page, follow the redirect map to the real
 * canonical target (e.g. berawa -> /locations/canggu).
 */
export function getLocationCanonical(slug: string): string {
  if (hasLocationPage(slug)) return `/locations/${slug}`
  return REDIRECT_MAP[`/${slug}`] ?? `/${slug}`
}

/* -----------------------------------------------------------------------
 * JOURNAL (HELPERS REMOVED FOR BREVITY IN EXPORT)
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

/* -----------------------------------------------------------------------
 * PRIMARY NAVIGATION & CTA
 * --------------------------------------------------------------------- */

export const PRIMARY_NAV: Array<{ label: string; href: string }> = [
  { label: 'Fine Dining', href: '/fine-dining' },
  { label: 'Catering', href: '/catering' },
  { label: 'Events', href: '/events' },
  { label: 'In-Villa Service', href: '/in-villa-service' },
  { label: 'Staffing', href: '/staffing' },
  { label: 'Locations', href: '/locations' },
  { label: 'Help', href: '/help' },
  { label: 'About', href: '/fine-dining/our-chefs' },
]

export const PRIMARY_CTA = {
  label: 'Book Now',
  href: '/quote',
}

/* -----------------------------------------------------------------------
 * JOURNAL & BLOG CONTENT
 * --------------------------------------------------------------------- */

export interface JournalPost {
  slug: string
  title: string
  category: string
  author: string
  date: string
  excerpt: string
  content?: string
  readTime?: number
}

export interface JournalCategory {
  slug: string
  label: string
  description: string
}

export const JOURNAL_CATEGORIES: JournalCategory[] = [
  { slug: 'recipes', label: 'Recipes', description: 'Chef-created recipes and culinary techniques' },
  { slug: 'travel', label: 'Travel', description: 'Bali destination guides and travel stories' },
  { slug: 'events', label: 'Events', description: 'Event planning tips and celebration ideas' },
  { slug: 'wellness', label: 'Wellness', description: 'Health, nutrition, and wellness insights' },
]

// JOURNAL_POSTS bodies moved to src/data/content/{journalPosts,articleContent}.ts
// (kept out of the eager bundle). Import JOURNAL_POSTS from '@/data/content/journalPosts'.

/* -----------------------------------------------------------------------
 * MENUS & DINING
 * --------------------------------------------------------------------- */

export interface MenuItem {
  name: string
  description: string
  price?: number
  allergens?: string[]
}

export interface Menu {
  slug: string
  name: string
  description: string
  servings: string
  items: MenuItem[]
}

export const MENUS: Menu[] = [
  {
    slug: 'italian-tasting',
    name: 'Italian Tasting Menu',
    description: 'Seven-course Mediterranean journey',
    servings: '4-6 guests',
    items: [
      { name: 'Amuse Bouche', description: 'Chef\'s welcome bite' },
      { name: 'Antipasti', description: 'Seasonal Italian starters' },
    ],
  },
  {
    slug: 'wagyu-experience',
    name: 'Wagyu Experience',
    description: 'Premium Japanese beef feast',
    servings: '4-6 guests',
    items: [
      { name: 'A5 Wagyu Tataki', description: 'Seared Japanese beef carpaccio' },
      { name: 'Wagyu Steak Course', description: 'Prime cuts with seasonal accompaniments' },
    ],
  },
]
