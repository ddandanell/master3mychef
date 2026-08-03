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
  /**
   * schema.org telephone field. Must be IDENTICAL to `display` — Google treats
   * a differently-formatted telephone as a separate NAP signal.
   * (Was '+62-896-7407-2020'; unified 2026-07-29.)
   */
  schema:   '+62 896-7407-2020',
}

export const SITE = {
  name: 'myCHEF',
  url: 'https://mychef.id',
  email: 'bali@mychef.id',
  /** @deprecated use PHONE.digits */
  whatsapp: PHONE.digits,
}

export type PillarSlug = 'fine-dining' | 'catering' | 'events' | 'in-villa-service' | 'staffing' | 'experiences'

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
      { slug: 'romantic-dinner', label: 'Romantic Dinner', h1: 'A Private Dinner Built for Two', title: 'Romantic Dinner Bali | Private Villa Chef for Two | myCHEF', description: 'Intimate five-course romantic dinners for two in your Bali villa: candlelight, flowers, sommelier pairing & Michelin-trained service. WhatsApp myCHEF.' },
      { slug: 'tasting-menu', label: 'Tasting Menu', h1: 'A Private Tasting Menu in Your Bali Villa', title: 'Private Tasting Menu Bali | 5 & 7 Course Villa Degustation', description: 'Signature 5 & 7 course private tasting menus in your Bali villa — Italian technique, Balinese ingredients, optional wine pairing. WhatsApp myCHEF.' },
      { slug: 'chefs-table', label: 'Chef’s Table', h1: "The Chef's Table — At Your Villa", title: 'Chef Table Experience Bali | Private Counter Dining | myCHEF', description: 'A private chef table at your Bali villa: counter-side seating, course-by-course commentary from Michelin-trained chefs. WhatsApp myCHEF.' },
      { slug: 'menus', label: 'Our Menus', h1: 'Our Menus', title: 'Private Chef Menus Bali | 24 Fine Dining Set Menus | myCHEF', description: 'Browse 24 set menus for private villa dining in Bali — vegetarian, seafood, mixed meats & single-meat. From IDR 1.25M per guest.' },
      { slug: 'our-chefs', label: 'Our Chefs', h1: 'Our Chefs', title: 'Our Chefs | Fine Dining Culinary Team | myCHEF', description: 'Meet the myCHEF fine dining brigade: Michelin-trained chefs crafting private villa dinners and tasting menus across Bali. Meet the team.' },
      { slug: 'private-chef-bali', label: 'Private Chef Bali', h1: 'A Michelin-Trained Private Chef. At Your Space.', title: 'Michelin Private Chef Bali | Fine Dining at Your Villa', description: 'Book a Michelin-trained private chef for your Bali villa. Tasting menus, wine pairing, 5-act dining experiences. Transparent pricing. WhatsApp myCHEF.' },
    ],
  },
  catering: {
    slug: 'catering',
    label: 'Catering',
    url: '/catering',
    h1: 'Catering in Bali — Built for Groups, Parties & Hosted Dinners',
    description: 'Full-service catering in Bali: BBQ nights, buffets, plated dinners, babi guling & grazing for groups of 10-150. Transparent pricing. WhatsApp myCHEF.',
    title: 'Catering Bali | Villa & Event Catering by Private Chefs',
    intro: 'Restaurant-level food, cooked and served at your villa, venue, or estate. BBQ nights, buffets, plated dinners, babi guling feasts, grazing tables and delivered meals — one team, one itemised quote, full cleanup.',
    navLabel: 'Catering',
    ctaPrimary: 'Get a Catering Quote',
    accent: '#6B8E5A',
    relatedPillars: ['fine-dining', 'events', 'in-villa-service'],
    subPages: [
      { slug: 'bbq-catering', label: 'BBQ Catering', h1: 'BBQ Catering Bali for Villas, Parties & Events', title: 'BBQ Catering Bali | Villa BBQ & Live Chef Grill | myCHEF', description: 'Bali BBQ catering for villas, parties & events: fresh seafood, Wagyu, organic sides grilled live at your pool. Per-pax pricing. WhatsApp myCHEF.' },
      { slug: 'buffet', label: 'Buffet Catering', h1: 'Buffet Catering for Bali Villa Events', title: 'Buffet Catering Bali | Large Group & Event Buffets | myCHEF', description: 'Buffet catering in Bali for weddings, corporate retreats & large villa parties — full setup, service & cleanup included. WhatsApp myCHEF.' },
      { slug: 'plated-catering', label: 'Plated Dinner Catering', h1: 'Plated Dinner Bali for Private Villa Fine Dining', title: 'Plated Catering Bali | Formal Villa Dinner Service | myCHEF', description: 'Plated catering in Bali: formal 3-5 course table service tailored to your occasion and group size. WhatsApp myCHEF.' },
      { slug: 'drop-off-catering', label: 'Drop-Off Catering', h1: 'Drop-Off Catering — Bali Villa Dinners Delivered', title: 'Drop-Off Catering Bali | Chef Food Delivered to Your Villa', description: 'Drop-off catering in Bali: premium chef-prepared food delivered to your villa, ready to serve. From per-person pricing. WhatsApp myCHEF.' },
      { slug: 'babi-guling', label: 'Babi Guling', h1: 'Babi Guling Catering Bali — A Proper Balinese Feast', title: 'Babi Guling Catering Bali | Whole-Pig Roast at Your Villa', description: 'Babi guling catering for Bali villas: traditional whole-pig roast for 10-50 guests, with halal alternatives. Celebration feasts. WhatsApp myCHEF.' },
      { slug: 'grazing-tables', label: 'Grazing Tables', h1: 'Grazing Tables Bali for Events, Villas & Parties', title: 'Grazing Table Bali | Styled Event Platters & Spreads', description: 'Grazing tables in Bali: artisan cheese, charcuterie & fresh fruit spreads styled for welcome drinks, weddings & poolside events. WhatsApp myCHEF.' },
      { slug: 'villa-catering', label: 'Villa Catering', h1: 'Villa Catering Bali — Easy Lunches, Dinners & Long Stays', title: 'Villa Catering Bali | Multi-Day Meal Plans for Groups', description: 'Reliable in-villa catering for multi-day Bali stays: breakfast, lunch & dinner plans for families and groups of 10-150. From per-guest pricing. WhatsApp.' },
      { slug: 'corporate-catering', label: 'Corporate Catering', h1: 'Corporate Catering Bali for Teams, Meetings & Events', title: 'Corporate Catering Bali | Boardroom to Conference | myCHEF', description: 'Corporate catering in Bali for offsites, boardroom dinners & conferences. Tax invoices (NPWP), executive service, dietary-exact menus. WhatsApp myCHEF.' },
      { slug: 'retreat-catering', label: 'Retreat Catering', h1: 'Retreat Catering Bali for Wellness, Yoga & Group Stays', title: 'Retreat Catering Bali | Healthy Group Meal Plans | myCHEF', description: 'Retreat catering in Bali: plant-forward, nutrient-dense meal plans for multi-day retreats. Vegan, raw & gluten-free specialists. WhatsApp myCHEF.' },
      { slug: 'floating-breakfast', label: 'Floating Breakfast', h1: 'Floating Breakfast — In Your Bali Villa Pool', title: 'Floating Breakfast Bali | Chef-Prepared, Island-Wide', description: 'Floating breakfast in your Bali villa pool — chef-prepared and styled, delivered island-wide incl. Ubud, Uluwatu & Nusa Dua. WhatsApp myCHEF.' },
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
      { slug: 'weddings', label: 'Weddings', h1: 'Wedding Catering in Bali — Villa Weddings, Run by One Team', title: 'Wedding Catering Bali | Villa Wedding Specialists | myCHEF', description: 'Wedding catering for Bali villa weddings: plated dinners, buffets & cocktail receptions with full team, tastings & transparent packages. WhatsApp myCHEF.' },
      { slug: 'birthdays', label: 'Birthdays', h1: 'Birthday Parties in Bali — Villa Catering & Events', title: 'Birthday Catering Bali | Private Villa Celebrations | myCHEF', description: 'Birthday catering for Bali villas: live chef BBQs or fine-dining menus with food, drinks, cake & styling handled. WhatsApp myCHEF.' },
      { slug: 'anniversaries', label: 'Anniversaries', h1: 'Anniversary Celebrations in Bali — Private Chef Dinners', title: 'Anniversary Dinner Bali | Private Romantic Catering | myCHEF', description: 'Celebrate your anniversary with an intimate styled dinner under the stars — custom menus and sommelier pairing at your Bali villa. WhatsApp myCHEF.' },
      { slug: 'corporate-events', label: 'Corporate', h1: 'Corporate Events in Bali — Catering & Venue Support', title: 'Corporate Event Catering Bali | Full-Service Production', description: 'Corporate event catering in Bali: offsites, launches, boardroom dinners with full production, NPWP-ready invoicing & executive service. WhatsApp myCHEF.' },
      { slug: 'retreats', label: 'Retreats', h1: 'Wellness Retreats in Bali — Healthy Catering & Meal Planning', title: 'Wellness Retreat Catering Bali | Multi-Day Event Support', description: 'Multi-day catering for wellness retreats in Bali: healthy plant-forward menus, meal scheduling and full event support. WhatsApp myCHEF.' },
      { slug: 'baby-showers', label: 'Baby Showers', h1: 'Baby Shower Catering in Bali — Brunch, Grazing & Garden Parties', title: 'Baby Shower Catering Bali | Styled Villa Brunches | myCHEF', description: 'Baby shower catering in Bali: light brunches, high tea and themed decor for villa celebrations. Photo-ready setups. WhatsApp myCHEF.' },
      { slug: 'villa-parties', label: 'Villa Parties', h1: 'Villa Parties in Bali — BBQ, Pool, Cocktail & Night Events', title: 'Villa Party Catering Bali | Social Events Done Right', description: 'Villa party catering in Bali: cocktail receptions, pool parties & BBQs with food, bar staff and coordination. WhatsApp myCHEF.' },
    ],
  },
  'in-villa-service': {
    slug: 'in-villa-service',
    label: 'In-Villa Service',
    url: '/in-villa-service',
    h1: 'Professional Villa Service Staff — Hired by the Shift',
    description: 'Uniformed, English-speaking villa staff in Bali — waiters, butlers, mixologists, sommeliers and hosts from IDR 250,000/hour; bartenders from IDR 350,000/hour.',
    title: 'Hire Villa Staff Bali | Professional Waiters & Butlers — myCHEF',
    intro: 'Uniformed, trained service staff for villa events. Waiters, butlers, bartenders, sommeliers, and event coordinators.',
    navLabel: 'In-Villa Service',
    ctaPrimary: 'Hire Staff',
    accent: '#D4A574',
    relatedPillars: ['catering', 'events', 'fine-dining'],
    subPages: [
      { slug: 'waiters', label: 'Waiters', h1: 'Waiter Hire in Bali', title: 'Waiter Hire Bali | Professional Villa Servers | myCHEF', description: 'Hire waiters in Bali for villa dinners & events — uniformed, English-speaking, fine-dining trained. From IDR 250K/hour. WhatsApp myCHEF.' },
      { slug: 'butlers', label: 'Butlers', h1: 'Hire a Butler in Bali', title: 'Hire a Butler in Bali | From IDR 1.2M/Day | myCHEF', description: 'Hire a professional butler in Bali by the day or shift — discreet, anticipatory guest service for villas & estates. WhatsApp myCHEF.' },
      { slug: 'bartenders', label: 'Bartenders', h1: 'Private Bartender Hire for Villas & Events', title: 'Private Bartender Bali | Hire for Your Villa Party | myCHEF', description: 'Hire a private bartender for your Bali villa party or wedding — classic cocktails, full bar setup, premium service. WhatsApp myCHEF.' },
      { slug: 'mixology', label: 'Mixology', h1: 'Mixology in Bali — Custom Cocktail Programs', title: 'Mixologist Hire Bali | Custom Cocktail Programs | myCHEF', description: 'Hire a mixologist in Bali: signature cocktail creation and custom bar programs for villa events & weddings. Premium ingredients. WhatsApp myCHEF.' },
      { slug: 'sommelier', label: 'Sommelier', h1: 'Sommelier Service in Bali — At Your Villa', title: 'Private Sommelier Hire Bali | Wine Service at Your Villa', description: 'Hire a private sommelier for your Bali villa dinner — pairings, sourcing advice and professional cellar service. WhatsApp myCHEF.' },
      { slug: 'host-hostess', label: 'Hosts', h1: 'Host & Hostess Hire in Bali', title: 'Hostess Hire Bali | Professional Event Reception | myCHEF', description: 'Hire professional event hosts & hostesses in Bali for guest reception and event flow at weddings and corporate events. WhatsApp myCHEF.' },
    ],
  },
  staffing: {
    slug: 'staffing',
    label: 'Staffing',
    url: '/staffing',
    h1: 'Hire Vetted Hospitality Staff for Your Villa, Hotel or Home',
    description: 'Long-term villa staff placement in Bali — private chefs, live-in chefs, villa managers, butlers, housekeepers and full household teams.',
    title: 'Staff Placement Bali | Hire Chefs & Household Staff — myCHEF',
    intro: 'Permanent and seasonal staffing solutions. Private chef placement, villa managers, household teams, and specialized hospitality roles.',
    navLabel: 'Staffing',
    ctaPrimary: 'Find Staff',
    accent: '#8B7355',
    relatedPillars: ['fine-dining', 'catering', 'in-villa-service'],
    subPages: [
      { slug: 'private-chef-placement', label: 'Chef Placement', h1: 'Private Chef Placement in Bali', title: 'Private Chef Placement Bali | Full-Time Chef Hire | myCHEF', description: 'Permanent or seasonal private chef placement for your Bali villa or residence — vetting, trials and contracts handled. WhatsApp myCHEF.' },
      { slug: 'live-in-chef', label: 'Live-In Chef', h1: 'Live-In Chef in Bali', title: 'Live-In Chef Bali | Full-Board Villa Chef | myCHEF', description: 'Live-in chefs in Bali who manage all meals, groceries and kitchen logistics for your family or guests. From IDR 8M/month. WhatsApp myCHEF.' },
      { slug: 'villa-staff', label: 'Villa Staff', h1: 'Hire Villa Staff in Bali — Long-Term Placement', title: 'Hire Villa Staff Bali | Long-Term Villa Teams | myCHEF', description: 'Hire villa staff in Bali for estates & portfolios: villa managers, housekeepers and support teams. Vetted placements with guarantees. WhatsApp myCHEF.' },
      { slug: 'household-staff', label: 'Household Staff', h1: 'Household Staff in Bali — Estate Operations', title: 'Hire Household Staff Bali | Estate Operations | myCHEF', description: 'Hire household staff in Bali: experienced managers & staff for large residences — scheduling, maintenance and vendor management. WhatsApp myCHEF.' },
      { slug: 'for-villa-managers', label: 'For Villa Managers', h1: 'Staffing & Partnerships for Villa Managers', title: 'Villa Manager Partnership Bali | myCHEF Partner Program', description: 'Earn commission offering on-demand private dining to your guests — menus, team and logistics by myCHEF. Apply via WhatsApp.' },
      { slug: 'for-hotels-restaurants', label: 'For Hotels', h1: 'Hotels & Restaurants Staffing', title: 'Hotel & Restaurant Staffing Bali | Culinary Teams | myCHEF', description: 'Temporary or permanent culinary staffing for Bali hotels and restaurants — vetted, high-standard professionals. WhatsApp myCHEF.' },
    ],
  },
  experiences: {
    slug: 'experiences',
    label: 'Experiences',
    url: '/experiences',
    h1: 'Private Experiences in Bali',
    description: 'Curated private experiences in Bali: cocktail parties, sushi classes, cooking classes, kids parties, oyster bars and proposal dinners at your villa.',
    title: 'Private Experiences Bali | Culinary & Celebration Experiences | myCHEF',
    intro: 'Curated private experiences brought directly to your Bali villa. Chefs, bartenders, teachers and event specialists turn any occasion into something memorable.',
    navLabel: 'Experiences',
    ctaPrimary: 'Plan Your Experience',
    accent: '#C5A028',
    relatedPillars: ['fine-dining', 'catering', 'events'],
    subPages: [],
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
    description: 'Hire a private chef in Kuta Bali for villa dinners, BBQ parties, and celebrations. myCHEF serves Kuta, Legian, and Tuban from IDR 1M++/day for one meal.',
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
  'bukit', 'canggu', 'denpasar',  'jimbaran', 'kuta',
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
  { label: 'Experiences', href: '/experiences' },
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
  /** Cover image path under /public, e.g. /generated/mychef-journal-….webp */
  image?: string
  /** SEO keyword focus for the article card/alt text */
  focusKeyword?: string
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
