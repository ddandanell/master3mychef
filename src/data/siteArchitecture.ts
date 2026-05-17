/**
 * myCHEF — MASTER SITE ARCHITECTURE (Vite SPA)
 *
 * Single source of truth for navigation, pages, SEO, and internal linking.
 */

export const SITE = {
  name: 'myCHEF',
  url: 'https://mychef.id',
  email: 'indonesia@mychef.id',
  whatsapp: '6282237565997',
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
    description: 'The premier private fine-dining service in Bali. Italian tasting menus, sommelier pairing, and open-flame cooking in your villa.',
    title: 'Private Chef Fine Dining | Michelin-Trained Villa Dinners — myCHEF',
    intro: 'Experience Michelin-standard dining in the privacy of your villa. Multi-course tasting menus, wine pairings, and Italian fine dining technique.',
    navLabel: 'Fine Dining',
    ctaPrimary: 'Reserve Fine Dining',
    accent: '#C5A028',
    relatedPillars: ['catering', 'events', 'in-villa-service'],
    subPages: [
      { slug: 'romantic-dinner', label: 'Romantic Dinner', h1: 'Private Romantic Dinner in Bali', title: 'Romantic Dinner Bali | Private Villa Chef — myCHEF', description: 'Intimate five-course private chef dinners for couples in Bali villas. Candlelight, sommelier pairing, and Michelin-trained service.' },
      { slug: 'tasting-menu', label: 'Tasting Menu', h1: 'Market-Led Private Tasting Menus', title: 'Private Tasting Menu Bali | 7-11 Course Experiences — myCHEF', description: 'Signature 7 to 11 course tasting menus by Adriano. Seasonal Balinese ingredients met with Italian technique.' },
      { slug: 'chefs-table', label: 'Chef’s Table', h1: 'Private Chef’s Table Experience', title: 'Chef Table Experience Bali | Counter-Side Fine Dining — myCHEF', description: 'An interactive, counter-side private dining experience. Watch the chef work course-by-course with live commentary.' },
      { slug: 'menus', label: 'Our Menus', h1: 'Fine Dining Menus', title: 'Private Chef Menus Bali | Tasting & A La Carte — myCHEF', description: 'Explore our current seasonal private dining menus. Mediterranean, Wagyu Experience, and custom dietary-led options.' },
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
      { slug: 'buffet', label: 'Buffet', h1: 'Event Buffet Catering', title: 'Buffet Catering Bali | Large Group & Event Service — myCHEF', description: 'Sophisticated buffet lines for weddings, corporate retreats, and large villa parties. Full setup and service included.' },
      { slug: 'plated-catering', label: 'Plated Catering', h1: 'Seated Plated Catering', title: 'Plated Catering Bali | Formal Villa Dinner Service — myCHEF', description: 'Formal table service for events. 3 to 5 course plated menus tailored to your occasion and group size.' },
      { slug: 'drop-off-catering', label: 'Drop-Off', h1: 'Gourmet Drop-Off Catering', title: 'Drop-Off Catering Bali | Ready-to-Serve Villa Food — myCHEF', description: 'Premium food delivered to your villa. Perfect for casual groups who want great food without the on-site staff.' },
      { slug: 'babi-guling', label: 'Babi Guling', h1: 'Traditional Babi Guling Catering', title: 'Babi Guling Catering Bali | Whole-Pig Roast — myCHEF', description: 'The ultimate Balinese celebration feast. Traditional whole-pig roast served at your villa for 10-50 guests.' },
      { slug: 'grazing-tables', label: 'Grazing Tables', h1: 'Styled Grazing Tables', title: 'Grazing Table Bali | Styled Event Platters — myCHEF', description: 'Artisan cheese, charcuterie, and fresh fruit spreads. Styled grazing tables for welcome drinks and poolside events.' },
      { slug: 'villa-catering', label: 'Villa Catering', h1: 'Catering for Villa Stays', title: 'Villa Catering Bali | Group & Family Dining — myCHEF', description: 'Reliable group catering for multi-day villa stays. Breakfast, lunch, and dinner plans for families and groups.' },
      { slug: 'corporate-catering', label: 'Corporate', h1: 'Jakarta & Bali Corporate Catering', title: 'Corporate Catering Bali | Business Event Hospitality — myCHEF', description: 'Professional catering for offsites, boardroom dinners, and conferences. Tax invoices (NPWP) and executive service.' },
      { slug: 'retreat-catering', label: 'Retreats', h1: 'Wellness & Yoga Retreat Catering', title: 'Retreat Catering Bali | Healthy Group Meal Plans — myCHEF', description: 'Plant-forward, nutrient-dense menus for multi-day retreats. Specializing in vegan, raw, and gluten-free diets.' },
      { slug: 'floating-breakfast', label: 'Floating Breakfast', h1: 'Bali Floating Breakfast Service', title: 'Floating Breakfast Bali | Private Villa Pool Service — myCHEF', description: 'The signature Bali villa ritual. Chef-prepared breakfast styled and served on a floating tray in your pool.' },
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
  | 'jakarta'
  | 'menteng'
  | 'kemang'
  | 'scbd'
  | 'pondok-indah'
  | 'bsd'

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
    h1: 'Private Chef Kuta — Villa Dining & Group BBQs',
    title: 'Private Chef Kuta | Villa Dining & Group BBQs — myCHEF',
    description: 'Hire a private chef in Kuta for villa dinners, family BBQs, and group celebrations.',
    intro: 'In Kuta, myCHEF provides reliable villa dining for families and groups staying near the heart of Bali’s activity. We specialize in casual sharing feasts and poolside BBQs that work perfectly for high-energy holiday villas.',
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
  jakarta: {
    slug: 'jakarta',
    label: 'Jakarta',
    h1: 'Private Chef Jakarta — Urban Fine Dining & Catering',
    title: 'Private Chef Jakarta | Urban Fine Dining — myCHEF',
    description: 'Premium private chef and corporate catering in Jakarta. Michelin-trained standards for residences and offices.',
    intro: 'myCHEF brings our signature Bali standards to Jakarta, serving Menteng, Kemang, SCBD, and Pondok Indah with discreet, professional hospitality.',
  },
  menteng: {
    slug: 'menteng',
    label: 'Menteng',
    h1: 'Private Chef Menteng — Diplomatic & Estate Dining',
    title: 'Private Chef Menteng | Diplomatic & Estate Dining — myCHEF',
    description: 'Specialized private chef services for Jakarta’s premier residential district.',
    intro: 'In Menteng, we deliver high-security, discreet service tailored to embassy hospitality and elite family residences.',
  },
  kemang: {
    slug: 'kemang',
    label: 'Kemang',
    h1: 'Private Chef Kemang — Social & Family Catering',
    title: 'Private Chef Kemang | Social & Family Catering — myCHEF',
    description: 'Sophisticated private dining for Kemang’s international and creative community.',
    intro: 'Kemang’s social energy calls for flexible, high-quality catering. We provide everything from intimate dinners to larger social gatherings.',
  },
  scbd: {
    slug: 'scbd',
    label: 'SCBD',
    h1: 'Private Chef SCBD — Executive Corporate Dining',
    title: 'Private Chef SCBD | Executive Corporate Dining — myCHEF',
    description: 'Premium corporate catering and boardroom private dining in Jakarta’s heart.',
    intro: 'Serving SCBD’s high-rises, we provide seamless executive lunches and corporate hospitality with a focus on precision and timing.',
  },
  'pondok-indah': {
    slug: 'pondok-indah',
    label: 'Pondok Indah',
    h1: 'Private Chef Pondok Indah — Premier Family Estate Dining',
    title: 'Private Chef Pondok Indah | Family Estate Dining — myCHEF',
    description: 'Exclusive private chef services for Jakarta’s iconic family estates.',
    intro: 'We specialize in multi-generational family dining and milestone celebrations inside Pondok Indah’s premier residences.',
  },
  bsd: {
    slug: 'bsd',
    label: 'BSD City',
    h1: 'Private Chef BSD City — Modern Residential Dining',
    title: 'Private Chef BSD City | Modern Residential Dining — myCHEF',
    description: 'Convenient private dining and group catering for the hubs of BSD.',
    intro: 'myCHEF serves the modern residences and offices of BSD with fresh, reliable private chef services.',
  },
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
  { label: 'About', href: '/about' },
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
  content: string
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

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: 'michelin-training-bali',
    title: 'Michelin Training in Bali: How Our Chefs Master Italian Technique',
    category: 'recipes',
    author: 'Adriano',
    date: '2026-05-10',
    readTime: 7,
    excerpt: 'Discover how Michelin-trained techniques translate to intimate villa dining in Bali.',
    content: `
      <h2>From Como to Canggu: What Michelin Training Actually Changes</h2>
      <p>I trained in Milan under a two-Michelin-star kitchen before coming to Bali. People ask what that experience gives you that you cannot find in a standard culinary school. The honest answer is pressure — but a very specific kind. You learn to hold precision under volume, to keep technique clean when service is at full speed, and to never cut the corner that the guest cannot see, because the dish always tells the truth.</p>
      
      <p>When I moved those skills into a Bali villa kitchen, the translation was not about recreating the Michelin environment. It was about extracting what is essential — the discipline of temperature, the restraint in seasoning, the understanding of texture contrast — and applying it to an intimate, personal setting where the guest is three metres from the pass.</p>

      <h3>The Pasta Standard</h3>
      <p>The single clearest test of Italian technique is fresh pasta. It tells you everything: egg quality, humidity control, resting discipline, rolling pressure. In a villa kitchen, you are working without a commercial sheeter in most cases. The dough must be made by hand, rolled to the correct gauge by feel, and cut at the moment of cooking. This is not harder than a professional kitchen — in some ways it is more honest. You cannot hide behind equipment.</p>
      
      <p>We source eggs from a small farm in Tabanan, twenty minutes inland. The yolks run deep orange from the chickens' diet and the pasta they produce has a richness that imported Italian eggs simply cannot match. Local adaptation is not a compromise — it is the actual ingredient.</p>

      <h3>The Sauce Discipline</h3>
      <p>In a Michelin kitchen you learn that a sauce is never finished — it is stopped. The moment you add the pasta water, hit the butter mount, and pull the pan, the entire dish changes in thirty seconds. Over-cooking by fifteen seconds at that point loses the emulsion. This is the kind of micro-discipline that a villa guest never sees but absolutely tastes.</p>
      
      <p>It is also the kind of discipline that produces consistency across twelve guests across one service. That is what Michelin training actually provides: the ability to replicate quality under pressure, not just demonstrate it once on a good day.</p>

      <h3>What It Means for Your Dinner</h3>
      <p>When you book a <a href="/fine-dining/private-chef-bali">private chef</a> through myCHEF, you are not booking a talented cook who "knows Italian food." You are booking someone who has been trained in a system that does not tolerate inconsistency at any level of service. That system travels. It works in a Seminyak villa kitchen just as well as it works on the pass of a Milan restaurant — because the standard is internal, not architectural.</p>
      
      <p>Explore our <a href="/fine-dining/menus">tasting menus</a> to see the current seasonal offerings, or message our team on WhatsApp to discuss a custom menu for your stay.</p>
    `,
  },
  {
    slug: 'sustainable-sourcing',
    title: 'Sustainable Sourcing: Our Farm-to-Villa Philosophy',
    category: 'wellness',
    author: 'myCHEF Team',
    date: '2026-05-05',
    readTime: 6,
    excerpt: 'Learn about our commitment to local, organic ingredients and the Bali producers we work with directly.',
    content: `
      <h2>Why We Source Locally — and What It Actually Costs Us</h2>
      <p>There is a version of "farm-to-table" that is marketing, and there is a version that is operational discipline. Ours is the latter. We source locally because local produce in Bali — when you know where to look — is genuinely superior, not because it photographs better at the market.</p>
      
      <p>Bali sits at 8 degrees south of the equator. The volcanic soil in the highlands around Kintamani and Bedugul is extraordinarily fertile. Produce grown here and harvested that morning is categorically different from the same ingredient flown from Jakarta or imported from Australia. The flavour density is higher. The texture holds better through cooking. The dish is easier to cook well because the ingredient gives you more to work with.</p>

      <h3>The Producers We Return To</h3>
      <p>We do not use a single supplier. We use a network of small producers that we have tested, visited, and maintained relationships with over years of operation in Bali.</p>
      
      <ul>
        <li><strong>Bedugul highlands:</strong> Strawberries, capsicums, brassicas, leafy greens, and tomatoes. We pick up directly from a family operation that has been farming the same plot for three generations.</li>
        <li><strong>Tabanan:</strong> Free-range eggs with deep orange yolks, used in all our fresh pasta and our breakfast programmes. The flavour difference against supermarket eggs is not subtle.</li>
        <li><strong>Jimbaran fish market:</strong> Yellowfin tuna, snapper, barramundi, and prawns landed the same morning. We buy at 5:00 AM for same-day service.</li>
        <li><strong>Ubud organic collective:</strong> Microgreens, edible flowers, fresh herbs, and specialty vegetables for fine dining plating. These are available seasonally and drive many of our tasting menu specials.</li>
      </ul>

      <h3>The Real Cost</h3>
      <p>Sourcing this way is not cheaper than buying from a central distributor. It requires more time, more logistics, and a willingness to change the menu when a specific ingredient is unavailable that week. We absorb that cost because the alternative — consistent mediocrity — is not a standard we are willing to operate at.</p>
      
      <p>When you book through myCHEF, the ingredient budget you pay goes directly back to these producers. There is no margin on groceries. We work on an at-cost basis for all fresh produce, and we can provide receipts on request.</p>

      <h2>Seasonal Menu Adaptation</h2>
      <p>Because we follow what is actually available and excellent, our menus shift. If you book a <a href="/fine-dining/private-chef-bali">private chef experience</a> in the wet season, the menu will look different from the dry season — not worse, just accurately matched to what Bali is producing at that moment.</p>
      
      <p>This is the correct approach for a kitchen that claims to care about ingredients. We are happy to discuss seasonal availability when you book. Message our team on WhatsApp or use the <a href="/pricing">pricing calculator</a> to begin planning your stay.</p>
    `,
  },
  {
    slug: 'private-chef-vs-villa-staff-bali',
    title: 'Private Chef vs. Villa Staff: Understanding the Difference in Bali',
    category: 'travel',
    author: 'myCHEF Team',
    date: '2026-05-17',
    readTime: 6,
    excerpt: 'Why hiring a specialized private chef beats relying on general villa staff for your milestone dinner.',
    content: `
      <h2>The Nuance of Bali Villa Hospitality</h2>
      <p>When you book a luxury villa in Bali, the listing often includes "staff who can cook." For a casual breakfast or a simple nasi goreng lunch, this is often a fantastic benefit. However, when you are planning a milestone dinner, a multi-day retreat, or a wedding welcome party, the difference between "staff who cook" and a professional private chef becomes critical.</p>
      
      <h3>1. Culinary Specialization vs. General Maintenance</h3>
      <p>Villa staff are incredible multi-taskers. They manage housekeeping, gardening, pool maintenance, and guest relations. While they may have a repertoire of excellent local dishes, their primary role is the upkeep of the property. A professional private chef from myCHEF has one single focus: the culinary experience. They are Michelin-trained or come from five-star hotel backgrounds, bringing advanced techniques, plating aesthetics, and menu depth that a generalist simply cannot provide.</p>
      
      <h3>2. Sourcing and Ingredient Integrity</h3>
      <p>A specialized chef has established relationships with Bali's best producers. They know which market has the freshest snapper at 5:00 AM and which organic farms in Bedugul are producing the best heirloom tomatoes this week. When you hire a <a href="/fine-dining/private-chef-bali">private chef in Bali</a>, you aren't just paying for the cooking; you are paying for the supply chain of premium ingredients that never reaches the average villa kitchen.</p>

      <h3>3. Professional Service and Pacing</h3>
      <p>Cooking the food is only half the battle. In a fine-dining or large-group setting, the pacing of the meal is everything. Villa staff, often juggling other duties, may struggle to deliver a synchronized seven-course tasting menu while ensuring drinks are topped up and the table is reset. MyCHEF provides a dedicated service team—waiters and butlers—who work in harmony with the chef to ensure the rhythm of your evening is seamless.</p>

      <h3>4. Kitchen Reset and Hygiene Standards</h3>
      <p>One of the most overlooked aspects of villa dining is the cleanup. After a large dinner, a villa kitchen can be in a state of chaos. Expecting the regular villa staff to handle a deep kitchen reset late at night, after they've been working since dawn, is often unrealistic. Our teams handle the entire lifecycle of the event, leaving your kitchen exactly as we found it—or cleaner—before we depart.</p>

      <h2>When to Choose a Private Chef?</h2>
      <p>If you are looking for a consistent, high-standard hospitality layer for your entire stay, consider our <a href="/in-villa-service">in-villa service</a> or <a href="/catering/villa-catering">villa catering packages</a>. For birthdays, anniversaries, or proposals, our <a href="/fine-dining">fine dining</a> experiences are the definitive choice.</p>
      
      <p>Explore our <a href="/pricing">transparent pricing</a> to see how a professional chef fits into your Bali holiday budget.</p>
    `,
  },
  {
    slug: 'bali-private-chef-cost-guide-2026',
    title: 'The 2026 Bali Private Chef Cost Guide: Menus, Groceries, and Tips',
    category: 'travel',
    author: 'Adriano',
    date: '2026-05-17',
    readTime: 8,
    excerpt: 'A transparent breakdown of what to expect when booking a private chef in Bali this year.',
    content: `
      <h2>Pricing Transparency in Bali Private Dining</h2>
      <p>Hiring a private chef in Bali shouldn't be an exercise in guesswork. In 2026, the market has standardized across several key tiers, allowing guests to plan their villa hosting with precision. This guide breaks down the three main components of your booking: the service fee, the ingredient budget, and the operational extras.</p>
      
      <h3>1. The Base Service Fee</h3>
      <p>In Bali, you are typically charged a flat fee for the chef and their service team (if applicable). This fee covers the planning, prep, and the physical presence of the team at your villa. For a high-standard private chef in 2026, expect the following starting rates:</p>
      <ul>
        <li><strong>Single Session (Dinner):</strong> From $85 - $150 (depending on group size).</li>
        <li><strong>Daily Rate (Full Day):</strong> From $150 - $250.</li>
        <li><strong>Event Catering:</strong> Usually priced per-person (from $35/pp).</li>
      </ul>
      
      <h3>2. The "At-Cost" Grocery Model</h3>
      <p>Most reputable private chefs in Bali work on an "at-cost" basis for ingredients. This means you pay the actual market price for the food, plus a small shopping fee (usually 10-20%) to cover the chef's transport and time in the markets. This is the most transparent way to dine—you see the receipts and only pay for what you eat.</p>
      <p><em>Pro Tip:</em> Ask for a grocery estimate upfront. A 4-course Italian dinner for 6 guests typically averages $30-$50 per person in groceries, depending on your choice of protein (e.g., local snapper vs. imported Wagyu).</p>

      <h3>3. Service Tiers and What They Include</h3>
      <p>At myCHEF, we differentiate between <strong>Casual Villa Dining</strong> and <strong>Premium Fine Dining</strong>. Our <a href="/fine-dining/menus">tasting menus</a> include a higher ratio of staff to ensure Michelin-level service, while our <a href="/catering/villa-catering">group catering</a> focuses on social sharing formats like BBQs and buffets which are often more budget-friendly for large groups.</p>

      <h3>4. Operational Extras</h3>
      <p>Don't forget to account for these common additions:</p>
      <ul>
        <li><strong>Alcohol:</strong> Most chefs allow you to provide your own drinks, but we can provide a sommelier or bartender if required.</li>
        <li><strong>Equipment Hire:</strong> For events over 20 guests, you may need extra glassware or specialized ovens.</li>
        <li><strong>Staff Overtime:</strong> Standard service windows are usually 4 hours.</li>
      </ul>

      <h2>Summary: Budgeting for Success</h2>
      <p>To get the most value, we recommend booking a <a href="/catering/villa-catering">villa catering package</a> for your arrival night and a specialized <a href="/fine-dining/private-dinner">private dinner</a> for your final evening. This balances cost and extraordinary experiences perfectly.</p>
      
      <p>Ready to start planning? Use our <a href="/pricing">instant price breakdown</a> or message Putu, our AI Concierge, for a custom quote.</p>
    `,
  },
  {
    slug: 'villa-wedding-catering-logistics-bali',
    title: 'Planning a Villa Wedding in Bali? The Essential Catering Logistics Guide',
    category: 'events',
    author: 'myCHEF Team',
    date: '2026-05-17',
    readTime: 10,
    excerpt: 'From kitchen requirements to service flow, here is what you need to know for your villa wedding.',
    content: `
      <h2>The Reality of Villa Wedding Catering</h2>
      <p>A Bali villa wedding is the dream—Indian Ocean views, complete privacy, and a bespoke atmosphere. But unlike a hotel ballroom, a private villa is not naturally designed to serve 80 guests a synchronized three-course meal. To ensure your wedding catering runs flawlessly, you need to understand the "behind-the-scenes" logistics that make it happen.</p>
      
      <h3>1. The Kitchen Augmentation</h3>
      <p>Even the most beautiful villa kitchens usually lack the commercial power and space needed for large-scale catering. At myCHEF, we often bring in mobile ovens, extra cold storage, and stainless-steel prep tables. If you are planning a <a href="/events/weddings">wedding in a Bali villa</a>, always check if your catering partner provides their own back-of-house equipment or if they expect to use the villa's existing home-grade appliances.</p>
      
      <h3>2. Power and Water Reliability</h3>
      <p>One of the most common "day-of" failures in Bali is the power grid. A catering team using multiple high-powered induction burners and ovens can easily trip a villa's main breaker. We always recommend (and often insist on) a dedicated generator for the catering and styling teams to ensure the music and the ovens never stop.</p>

      <h3>3. The Service Flow: Buffet vs. Plated</h3>
      <p>The layout of your villa determines your service style. If your dining area is spread across multiple levels or narrow terraces, a <a href="/catering/buffet">wedding buffet</a> might be more practical to prevent service delays. For clifftop estates with wide-open lawns, a <a href="/catering/plated-catering">plated dinner</a> provides a more formal, high-end resort feel.</p>

      <h3>4. Navigating Dietary Complexity</h3>
      <p>Bali weddings attract international guest lists. You will likely have guests requesting vegan, gluten-free, halal, and nut-free options. Managing this in a villa environment requires a sophisticated labeling and tracking system. Our service teams use digital run sheets to ensure every guest receives their specific menu without hesitation.</p>

      <h3>5. The Operational Checklist</h3>
      <ul>
        <li><strong>Load-in Access:</strong> Can a 2-tonne catering truck reach the villa entrance?</li>
        <li><strong>Kitchen Proximity:</strong> Is the prep area close enough to the dining area to keep food at the correct temperature?</li>
        <li><strong>Staff Break Area:</strong> Where will the 10-15 service staff reset between courses?</li>
        <li><strong>Waste Management:</strong> Who handles the removal of event waste from the property?</li>
      </ul>

      <h2>A Seamless Night Starts with Planning</h2>
      <p>Planning a <a href="/events/villa-parties">villa party</a> or wedding requires a partner who knows the local terrain. myCHEF has successfully catered over 500 events in villas across Seminyak, Canggu, and Uluwatu.</p>
      
      <p>Ready to build your wedding menu? Browse our <a href="/fine-dining/menus">event menu samples</a> or message our coordinators for a direct consultation.</p>
    `,
  },
  {
    slug: 'yoga-retreat-meal-planning-bali',
    title: 'Yoga Retreat Meal Planning: Nutritional Integrity for Bali Retreats',
    category: 'wellness',
    author: 'myCHEF Team',
    date: '2026-05-17',
    readTime: 7,
    excerpt: 'How we design retreat menus that balance detoxification with culinary satisfaction.',
    content: `
      <h2>The Role of Food in a Bali Yoga Retreat</h2>
      <p>A yoga retreat in Bali is a commitment to physical and mental transformation. While the yoga practice provides the movement, the food provides the fuel. Many retreat leaders struggle with the balance between "healthy" and "satisfying." At myCHEF, we believe that retreat food should never feel like a sacrifice. It should be a highlight of the guest's day.</p>
      
      <h3>1. Designing for Energy, Not Just Calories</h3>
      <p>Retreat guests often engage in 4-6 hours of physical activity daily. Standard "detox" menus that are too light can lead to midday energy crashes. We design <a href="/catering/retreat-catering">retreat catering plans</a> around complex carbohydrates, lean plant-based proteins, and healthy fats that provide sustained energy release without the "heavy" feeling that interferes with afternoon practice.</p>
      
      <h3>2. The Intersection of Detox and Flavor</h3>
      <p>You don't need refined sugar or processed oils to create incredible flavor. Our chefs use Balinese aromatics—turmeric, ginger, galangal, and lemongrass—to create vibrant, nutrient-dense menus that support the body's natural detoxification processes. By focusing on <a href="/menus/vegan">plant-based and vegan options</a>, we ensure that every meal contributes to the retreat's wellness goals.</p>

      <h3>3. Managing the Multi-Day Cycle</h3>
      <p>A 7-day retreat has a specific rhythm. We typically start with "Arrival Night Comfort" (gentle, grounding Balinese food) and transition into lighter, more intensive detox menus in the middle of the week. Toward the final days, we introduce more celebratory, social sharing formats like a healthy Mediterranean feast to mark the journey's completion.</p>

      <h3>4. Silent Service and Morning Discipline</h3>
      <p>Retreat hosting requires a specific service etiquette. Our teams are trained for "silent setup"—arriving at dawn to prepare fresh juices and breakfast spreads while the villa remains in its morning silence. We respect the space and the practice, ensuring the hospitality layer is supportive but never intrusive.</p>

      <h2>Plan Your Next Retreat Menu</h2>
      <p>Whether you are hosting an intensive teacher training or a gentle wellness weekend, myCHEF provides the specialized culinary support you need. We handle all grocery shopping, prep, service, and cleanup, allowing you to focus entirely on your students.</p>
      
      <p>Browse our <a href="/menus/halal">halal-certified</a> and <a href="/menus/vegan">vegan menu samples</a> or message our retreat coordinator on WhatsApp to begin your planning.</p>
    `,
  },
  {
    slug: 'private-chef-seminyak-guide',
    title: 'Hiring a Private Chef in Seminyak: The 2026 Local\'s Guide',
    category: 'travel',
    author: 'myCHEF Team',
    date: '2026-05-18',
    readTime: 8,
    excerpt: 'Everything you need to know about booking a private chef for your Seminyak villa stay—from pricing to logistics.',
    content: `<h2>Why Seminyak Dominates Bali's Villa Dining Scene</h2><p>Seminyak is Bali's undisputed center for luxury villa hospitality. With more high-end villas per square kilometer than any other area on the island, it has become the testing ground for premium private chef services. If you are staying in Seminyak and considering a <a href="/fine-dining/private-chef-bali">private chef</a>, you are in the right place—the supply chain, talent pool, and infrastructure here are unmatched.</p><h3>The Seminyak Advantage: Infrastructure</h3><p>Unlike Ubud (where logistics can add two hours to your service) or Uluwatu (where ingredient sourcing is limited), Seminyak offers immediate access to everything a professional kitchen needs. The morning fish market in Jimbaran is 20 minutes away. The organic farms in Canggu are 15 minutes. The imported cheese supplier? Five minutes. This logistical density translates directly into food quality and service reliability.</p><h3>What to Expect: Pricing in Seminyak</h3><p>Seminyak pricing sits at the premium end of Bali's private chef market, but it reflects the quality of talent and ingredients available:</p><ul><li><strong>Single Dinner Service (4-6 guests):</strong> From $120 USD for the chef, plus groceries ($40-60/person)</li><li><strong>Multi-Day Booking:</strong> From $200 USD/day for daily meal service</li><li><strong>Event Catering (10+ guests):</strong> Starting at $45/person all-inclusive</li></ul><p>These rates include the chef, sous chef (for groups 8+), and full kitchen cleanup. Service staff (waiters, bartenders) are typically an additional $30-40 per person.</p><h3>Booking Timeline: How Far in Advance?</h3><p>Seminyak's high season (July-August, December-January) books out 4-6 weeks in advance for premium dates. If you are planning a milestone dinner during peak season, reach out at least one month ahead. For shoulder season (April-June, September-November), two weeks is usually sufficient.</p><p>Last-minute bookings (48-72 hours) are possible but expect limited chef availability and potentially higher rates due to rushed grocery procurement.</p><h3>Villa Kitchen Requirements</h3><p>Most Seminyak villas are chef-ready, but verify these basics before booking:</p><ul><li>A working 4-burner stove (gas preferred)</li><li>Standard oven (even if small)</li><li>Refrigerator with freezer compartment</li><li>Basic cookware and knives (we bring specialty tools)</li></ul><p>If your villa lacks any of these, mention it upfront—we can often work around it or bring portable equipment.</p><h3>Cuisine Specializations in Seminyak</h3><p>Seminyak's chef pool is cosmopolitan. You'll find specialists in:</p><ul><li><strong>Italian:</strong> Fresh pasta, risotto, authentic Neapolitan technique</li><li><strong>Japanese:</strong> Sushi-grade fish sourcing, omakase-style tasting menus</li><li><strong>Modern Australian:</strong> Seafood-forward, native ingredients, BBQ excellence</li><li><strong>Indonesian:</strong> High-end renditions of rijsttafel and regional classics</li></ul><p>At myCHEF, our Seminyak-based chefs have trained in Michelin kitchens across Europe and Asia. Browse our <a href="/fine-dining/menus">signature tasting menus</a> or request a custom menu tailored to your preferences.</p><h3>The Hidden Cost: Dietary Restrictions</h3><p>If you have complex dietary needs (e.g., gluten-free, vegan, nut allergies), mention them early. Specialized ingredients like gluten-free pasta or high-quality vegan cheeses are available in Seminyak but may require advance ordering, which can add 10-15% to your grocery budget.</p><h2>How to Book</h2><p>Our Seminyak booking process is simple:</p><ol><li>Message us on WhatsApp with your dates, guest count, and any dietary restrictions</li><li>We'll send you 2-3 chef profiles matching your cuisine preference</li><li>Choose your chef and approve the proposed menu</li><li>We handle all grocery shopping, logistics, and coordination</li><li>The team arrives 2-3 hours before service to begin prep</li></ol><h3>Why myCHEF for Seminyak?</h3><p>We've been operating in Seminyak since 2019 and have relationships with every major villa manager in the area. If there's a logistics issue—a delayed grocery order, a broken oven, a last-minute guest count change—we have the network to solve it within the hour. That operational resilience is what differentiates a professional service from an independent chef.</p><p>Explore our <a href="/locations/seminyak">Seminyak service page</a> for neighborhood-specific details, or browse our <a href="/pricing">pricing guide</a> to understand the full cost structure. Ready to book? <a href="/book">Start your inquiry here</a>.</p>`,
  },
  {
    slug: 'private-chef-canggu-guide',
    title: 'Private Chef Services in Canggu: What Makes It Different',
    category: 'travel',
    author: 'Adriano',
    date: '2026-05-18',
    readTime: 7,
    excerpt: 'Why Canggu\'s laid-back surf culture creates unique opportunities for villa dining experiences.',
    content: `<h2>Canggu's Culinary Identity: Where Wellness Meets Indulgence</h2><p>Canggu is not Seminyak. While Seminyak leans luxury and polish, Canggu embraces a deliberately casual, wellness-forward vibe. The private chef scene here reflects that identity: less Michelin formality, more farm-to-table authenticity. If you're staying in Canggu and booking a <a href="/fine-dining/private-chef-bali">private chef</a>, understand that you're entering a market optimized for long-stay digital nomads and surf-focused travelers who want quality without pretense.</p><h3>The Canggu Villa Landscape</h3><p>Canggu's villa stock is younger and more experimental than Seminyak's. Many are architect-designed, Instagram-famous properties with open-air kitchens, rooftop dining areas, and infinity pools overlooking rice fields. These villas are stunning but often lack the full-service infrastructure (staff quarters, backup generators, commercial-grade appliances) that Seminyak villas have. Expect your private chef to adapt more creatively here.</p><h3>Ingredient Access: The Organic Advantage</h3><p>Canggu sits adjacent to some of Bali's best organic farms. Samadi Bali, Alchemy, and several permaculture projects supply restaurants and private chefs with produce that never sees a supermarket. If you value transparency in sourcing, Canggu offers something Seminyak cannot: direct farm relationships within a 10-minute drive. Your chef can literally pick herbs from a garden an hour before your meal.</p><p>The trade-off? Imported specialty ingredients (French cheeses, Japanese wagyu, European wines) take longer to source here. If your menu requires those, expect a 24-hour lead time for procurement.</p><h3>Pricing Reality Check</h3><p>Canggu pricing sits 10-20% below Seminyak for equivalent services:</p><ul><li><strong>Single Dinner (4-6 guests):</strong> From $100 USD chef fee, plus groceries ($35-50/person)</li><li><strong>Weekly Booking:</strong> $175/day for daily meal service</li><li><strong>Retreat/Group Catering:</strong> From $38/person all-inclusive</li></ul><p>This lower pricing reflects lower villa rental costs in the area, not lower chef quality. Many of our Canggu-based chefs have the same training as Seminyak chefs but choose to work in Canggu for the lifestyle and community.</p><h3>Cuisine Trends: What Works in Canggu</h3><p>Canggu's dining culture skews toward:</p><ul><li><strong>Plant-Based:</strong> Vegan and vegetarian menus are standard, not specialty requests</li><li><strong>Mexican:</strong> Surprisingly popular—tacos, ceviche, and elote are Canggu staples</li><li><strong>Middle Eastern:</strong> Mezze platters, shakshuka, fresh pita</li><li><strong>Japanese-Fusion:</strong> Poke bowls, miso-glazed proteins, rice bowl formats</li></ul><p>Traditional European fine dining (French, Italian tasting menus) is less common here. If that's your preference, consider booking a chef who typically operates in Seminyak but is willing to travel to Canggu.</p><h3>The "Surf Villa" Service Model</h3><p>Many Canggu bookings are for surf groups: 6-10 friends renting a villa for a week, surfing mornings, and wanting communal dinners at night. For these groups, we recommend our <a href="/catering/villa-catering">villa catering packages</a> over individual fine-dining services. Formats like BBQ, buffet, and sharing platters fit the social vibe better and are significantly more cost-effective.</p><h3>Logistics: Traffic and Timing</h3><p>Canggu's main roads (Batu Bolong, Pantai Batu Mejan, Berawa) experience severe congestion during peak hours (7-9 AM, 4-7 PM). If you're booking an evening service, ensure your chef has a 3-hour arrival buffer. Most experienced Canggu chefs plan to arrive by 3 PM for a 7 PM dinner to avoid getting stuck in traffic with perishable groceries.</p><h3>Villa Kitchen Reality</h3><p>Canggu villas often have aesthetically beautiful but functionally limited kitchens:</p><ul><li>Small 2-burner stoves (challenging for multi-course menus)</li><li>Limited counter space (open-air design trades function for views)</li><li>No proper exhaust fans (outdoor kitchens mean smoke isn't vented)</li></ul><p>A professional chef can navigate these constraints, but communicate your kitchen setup upfront. If your villa kitchen is undersized, we may recommend simpler menu formats that don't require simultaneous multi-pan cooking.</p><h2>Booking Recommendations</h2><p>For <strong>wellness retreats</strong> or <strong>yoga groups</strong>, Canggu is ideal. Browse our <a href="/catering/retreat-catering">retreat catering plans</a> designed specifically for this market. For <strong>milestone celebrations</strong> (birthdays, anniversaries), consider whether the casual Canggu vibe matches your vision—or whether <a href="/locations/seminyak">Seminyak's premium service layer</a> is a better fit.</p><p>Ready to book? Message our team on WhatsApp or explore our <a href="/fine-dining/menus">signature menus</a> and <a href="/pricing">pricing guide</a>.</p>`,
  },
  {
    slug: 'private-chef-ubud-villa-dining',
    title: 'Private Chef Services in Ubud: Logistics, Pricing & What to Expect',
    category: 'travel',
    author: 'myCHEF Team',
    date: '2026-05-18',
    readTime: 8,
    excerpt: 'The complete guide to hiring a private chef for your Ubud villa—from jungle logistics to cultural dining experiences.',
    content: `<h2>Why Ubud Private Chef Services Are Different</h2><p>Ubud occupies a unique position in Bali's culinary landscape. It's the spiritual and cultural heart of the island, surrounded by rice terraces, art galleries, and wellness retreats—but it's also a 90-minute drive from the coast. That geographic isolation creates specific challenges and opportunities for <a href="/fine-dining/private-chef-bali">private chef services</a> that don't exist in Seminyak or Canggu.</p><h3>The Supply Chain Reality</h3><p>Ubud's distance from Jimbaran fish market means seafood arrives later and with less selection. What a Seminyak chef can source at 6 AM might not reach Ubud suppliers until noon. For reef fish, prawns, and octopus, this is manageable. For ultra-perishable items like oysters or sea urchin, it's often not worth the risk. Ubud private chefs compensate by specializing in what the region does best: organic produce, jungle foraging, and river fish.</p><h3>What Ubud Does Better Than Anywhere</h3><p>While coastal areas have seafood advantages, Ubud offers unmatched access to:</p><ul><li><strong>Heirloom Vegetables:</strong> The volcanic soil around Bedugul produces vegetables that simply taste different—more mineral, more intense</li><li><strong>Wild Foraged Ingredients:</strong> Fiddlehead ferns, jungle mushrooms, edible flowers that never appear in markets</li><li><strong>Artisan Producers:</strong> Small-batch tempeh makers, traditional rice farmers, spice cooperatives</li><li><strong>Ceremonial Knowledge:</strong> Chefs here understand Balinese temple food and can create authentic ceremonial feasts</li></ul><p>If you want a menu that reflects Bali's agricultural and spiritual identity, Ubud is where that menu should happen.</p><h3>Pricing: Why Ubud Costs More</h3><p>Ubud private chef services typically run 15-25% higher than equivalent Seminyak bookings:</p><ul><li><strong>Single Dinner (4-6 guests):</strong> From $135 USD chef fee, plus groceries ($45-65/person)</li><li><strong>Daily Service:</strong> From $220/day for full meal service</li><li><strong>Retreat Catering:</strong> From $48/person all-inclusive</li></ul><p>This premium reflects three factors: longer travel time for chefs (most live in Denpasar or Sanur), higher logistics costs (grocery runs require more fuel and time), and limited chef pool (fewer professionals are willing to work this far from the coast).</p><h3>Cuisine Specializations</h3><p>Ubud's chef scene gravitates toward:</p><ul><li><strong>Traditional Balinese:</strong> Authentic lawar, betutu, and ceremonial dishes</li><li><strong>Pan-Asian Wellness:</strong> Macrobiotic bowls, Ayurvedic-inspired menus, traditional Chinese medicine principles</li><li><strong>Raw and Plant-Based:</strong> The wellness community here demands high-level vegan execution</li><li><strong>Farm-to-Table European:</strong> Italian and French techniques applied to Balinese ingredients</li></ul><p>If your vision involves imported Australian beef or Norwegian salmon, you'll find better options on the coast. But if you want a 7-course vegetarian tasting menu built entirely from ingredients sourced within 20 kilometers, Ubud is unmatched.</p><h3>Villa Infrastructure Challenges</h3><p>Ubud villas range from ultra-luxe resorts to rustic jungle cabins. Before booking a private chef, verify:</p><ul><li><strong>Road Access:</strong> Can a car reach your villa, or is it a 10-minute walk through rice fields?</li><li><strong>Power Reliability:</strong> Does your villa have backup generators for refrigeration?</li><li><strong>Kitchen Size:</strong> Many boutique Ubud villas have minimal kitchens designed for breakfast only</li><li><strong>Water Quality:</strong> Jungle villas sometimes have untreated well water unsuitable for cooking</li></ul><p>Experienced Ubud chefs know how to adapt, but surprises add stress. Share detailed villa information upfront.</p><h3>The Retreat Market</h3><p>Ubud is Bali's retreat capital. Yoga teacher trainings, silent meditation retreats, and wellness intensives dominate the long-stay villa market. If you're hosting a retreat, our <a href="/catering/retreat-catering">retreat catering packages</a> are specifically designed for Ubud's unique needs: silent early-morning service, plant-based menus, multi-day rhythm management, and staff trained to respect ceremonial spaces.</p><h3>Booking Timeline</h3><p>Ubud's limited chef pool means you need more advance notice:</p><ul><li><strong>High Season (July-Aug, Dec-Jan):</strong> Book 6-8 weeks ahead</li><li><strong>Shoulder Season:</strong> 3-4 weeks recommended</li><li><strong>Last-Minute (72 hours):</strong> Possible but expect 20-30% premium pricing</li></ul><h3>Cultural Context Matters</h3><p>Ubud is deeply traditional. During major ceremonies (Galungan, Kuningan, Nyepi), chef availability drops significantly as local staff participate in temple obligations. If your dates overlap with Balinese holidays, mention this when inquiring—we can often arrange chefs from outside Ubud who are less affected by local ceremonial schedules.</p><h2>Why Book myCHEF for Ubud?</h2><p>We've been operating in Ubud since 2020 and understand the logistical complexity. Our team includes chefs who live in Ubud full-time and understand the ingredient landscape intimately. When a coastal-based chef would struggle, our Ubud specialists thrive.</p><p>Explore our <a href="/fine-dining/menus">tasting menus</a>, browse <a href="/menus/vegan">plant-based options</a>, or <a href="/book">start your inquiry</a> with details about your villa and vision. We'll match you with the right chef and build a menu that honors both your preferences and Ubud's unique culinary identity.</p>`,
  },
  {
    slug: 'bali-wedding-catering-complete-guide',
    title: 'The Complete Bali Wedding Catering Guide: Budgets, Logistics & Vendor Coordination',
    category: 'events',
    author: 'Adriano',
    date: '2026-05-18',
    readTime: 10,
    excerpt: 'Everything you need to know about catering a destination wedding in Bali—from menu design to cultural considerations.',
    content: `<h2>Why Bali Wedding Catering Is a Specialist Service</h2><p>Catering a wedding in Bali is not the same as catering a corporate event or a villa dinner. It requires vendor coordination, cultural fluency, logistical precision, and the ability to execute flawlessly in venues that range from clifftop temples to beachfront estates. If you are planning a <a href="/events/weddings">destination wedding in Bali</a>, understand that your catering partner will be your most critical vendor after your venue and planner.</p><h3>The Three Catering Models</h3><p>Bali wedding catering operates on three distinct models:</p><h4>1. Venue-Exclusive Catering</h4><p>Many high-end wedding venues (Tirtha Uluwatu, The Edge, Alila Villas) require you to use their in-house catering. These packages are turnkey but expensive—expect $120-200 per guest for a full dinner service. The advantage is seamless coordination. The downside is limited menu flexibility and premium pricing.</p><h4>2. Independent Catering with Villa Venue</h4><p>If you're hosting your wedding at a private villa, you have full catering freedom. This is where <a href="/catering/villa-catering">myCHEF's villa catering services</a> shine. We bring the entire operation—chefs, waitstaff, equipment, glassware, and cleanup—to your venue. Pricing ranges from $65-110 per guest depending on menu complexity. This model offers maximum customization at a significantly lower cost than venue-exclusive options.</p><h4>3. Hybrid: Off-Site Prep with On-Site Finishing</h4><p>For large weddings (100+ guests), many caterers use a hybrid model: bulk prep happens in a commercial kitchen, then finishing and plating occur on-site. This approach balances efficiency with quality but requires careful logistics planning to ensure hot food stays hot and cold food stays cold during transport.</p><h3>Budget Reality: What Does Bali Wedding Catering Actually Cost?</h3><p>A realistic per-person budget breakdown for 2026:</p><ul><li><strong>Budget Tier ($35-50/pp):</strong> Buffet format, local ingredients, minimal service staff, self-serve bar</li><li><strong>Mid-Tier ($65-90/pp):</strong> Plated 3-course dinner, imported proteins available, full waitstaff, hosted bar</li><li><strong>Premium Tier ($110-150/pp):</strong> Multi-course tasting menu, premium proteins (Wagyu, lobster), sommelier service, specialty cocktails</li><li><strong>Ultra-Luxury ($180-250/pp):</strong> Michelin-level execution, rare ingredients, chef's table experience, multi-station interactive dining</li></ul><p>These figures include food, labor, equipment rental, and service—but NOT alcohol. Bar service is typically quoted separately.</p><h3>Menu Design Strategy</h3><p>The best Bali wedding menus balance three elements:</p><h4>1. Cultural Authenticity</h4><p>Your guests flew to Bali for a reason. Include at least one course that reflects Indonesian cuisine—whether that's a sate station during cocktail hour, a rijsttafel-inspired sharing course, or a traditional dessert like dadar gulung. This signals respect for the location and creates a memorable "sense of place."</p><h4>2. Dietary Inclusivity</h4><p>Destination weddings attract diverse dietary needs. Plan for at least 15-20% of guests requiring vegetarian, vegan, gluten-free, or halal options. Don't treat these as "alternate plates"—design them as equally appealing choices. Our <a href="/menus/vegan">plant-based menus</a> and <a href="/menus/halal">halal-certified options</a> are crafted to be desirable, not compromise.</p><h4>3. Heat Management</h4><p>Bali is hot. Heavy European sauces, rich cream-based dishes, and dense proteins can feel oppressive at 7 PM when it's still 28°C. Opt for lighter preparations: citrus-forward sauces, grilled proteins, fresh salads, and fruit-based desserts. Your guests will thank you.</p><h3>The Hidden Logistics of Bali Wedding Catering</h3><h4>Power and Water Access</h4><p>Not all villa venues have sufficient electrical capacity to run professional kitchen equipment for 80+ guests. Before booking, confirm:</p><ul><li>Backup generator capacity (in case the main power fails mid-service)</li><li>Number of available power outlets near the service area</li><li>Water access for washing dishes, glassware, and cookware</li></ul><p>If infrastructure is limited, we bring portable generators, water tanks, and satellite washing stations—but these add to your budget.</p><h4>Vendor Coordination Timeline</h4><p>Catering doesn't happen in isolation. You need:</p><ul><li><strong>4-6 months before:</strong> Book your caterer and lock in menu concepts</li><li><strong>3 months before:</strong> Share final guest count estimates (within 20%)</li><li><strong>6 weeks before:</strong> Conduct tasting session and finalize menu</li><li><strong>2 weeks before:</strong> Provide final headcount and dietary restrictions</li><li><strong>3 days before:</strong> Confirm venue access, power, and equipment drop-off schedule</li></ul><h3>Cultural and Legal Considerations</h3><h4>Alcohol Licensing</h4><p>Bali has complex alcohol regulations. If you are serving alcohol at a private villa, technically you need a temporary event license (SIUP-MB). Most villa weddings operate in a gray area, but for large events (100+ guests), it's wise to work with a catering company that handles permits.</p><h4>Ceremonial Timing</h4><p>If your wedding includes a Balinese blessing ceremony, understand that these ceremonies run on spiritual timing, not clock time. Your caterer needs to be flexible with dinner service. Build in a 30-60 minute buffer between ceremony end and dinner service to account for ceremonial unpredictability.</p><h4>Staff Etiquette</h4><p>Balinese culture is deeply respectful. During ceremonies, service staff should not stand higher than the priest, should not cross in front of offerings, and should dress modestly. Experienced Bali wedding caterers train their teams in this cultural protocol. Ask your caterer about their cultural training process—it's a sign of professionalism.</p><h2>Common Budget Mistakes</h2><p><strong>Underestimating alcohol costs:</strong> Bar service can equal or exceed food costs. For a 4-hour reception with open bar, budget $30-50/pp minimum.</p><p><strong>Forgetting vendor meals:</strong> Your photographer, videographer, DJ, and planner need to eat. Budget an additional 10-15 "vendor meals" (usually a simplified version of the guest menu).</p><p><strong>Skipping the tasting:</strong> A menu looks great on paper but may not execute well in a tropical villa kitchen. Always do a tasting 6 weeks before the event.</p><h2>Why Choose myCHEF for Your Bali Wedding?</h2><p>We've catered over 150 weddings across Bali since 2019. Our team understands the cultural nuances, the logistical challenges, and the emotional stakes. We don't just cook—we coordinate with your planner, communicate with your venue, and ensure that the food becomes a seamless part of your celebration, not a source of stress.</p><p>Ready to start planning? Browse our <a href="/events/weddings">wedding service overview</a>, explore <a href="/fine-dining/menus">menu samples</a>, or <a href="/book">schedule a consultation</a> to discuss your vision. We'll build a catering plan that honors your story and delivers an unforgettable meal.</p>`,
  },
]

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
