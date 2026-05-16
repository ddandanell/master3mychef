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
    excerpt: 'Discover how Michelin-trained techniques translate to intimate villa dining in Bali.',
    content: 'Full article content...',
  },
  {
    slug: 'sustainable-sourcing',
    title: 'Sustainable Sourcing: Our Farm-to-Villa Philosophy',
    category: 'wellness',
    author: 'myCHEF Team',
    date: '2026-05-05',
    excerpt: 'Learn about our commitment to local, organic ingredients.',
    content: 'Full article content...',
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
