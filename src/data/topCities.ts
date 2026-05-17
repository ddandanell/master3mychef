// The 15 top Bali & Jakarta regions where we actively sell catering, events, and fine dining.
// Used by AreaPage (each city links to the other siblings) and by the Locations hub.
//
// Each entry carries the short "why people go there" hook used as page copy.

export interface TopCity {
  slug: string
  name: string
  /** One-line positioning shown on the hub + as the intro line on the area page. */
  hook: string
  /** Two-sentence body used in the area page intro and on the hub. */
  blurb: string
  /** Local highlight that hints we know the area — markets, beaches, landmarks. */
  signature: string
  /** Hero image path under public/. Generated via BFL FLUX. */
  hero: string
}

export const TOP_CITIES: TopCity[] = [
  {
    slug: 'seminyak',
    name: 'Seminyak',
    hook: 'Beach clubs, premium villas, and a sunset dining culture built around Petitenget and the coast.',
    blurb: 'Seminyak is the original Bali villa scene — Petitenget and Oberoi-area villas, walk-to-beach addresses, and a dense restaurant culture. We cook fine dining for groups who came for the food scene and want one private evening that beats every restaurant on the strip.',
    signature: 'We shop Pasar Seminyak and Jl. Petitenget producers each morning.',
    hero: '/generated/mychef-location-bali-city-seminyak.webp',
  },
  {
    slug: 'canggu',
    name: 'Canggu',
    hook: 'Surf crowd, digital nomads, and jungle pool villas tucked behind the beach clubs.',
    blurb: 'Canggu villas are larger, often family-run, with great kitchens. We cook weekly meal prep for long-stay families, casual poolside lunches, and Mediterranean dinners that work as well for kids as for parents.',
    signature: 'We know every villa kitchen layout from Echo Beach to Batu Bolong.',
    hero: '/generated/mychef-location-bali-city-canggu.webp',
  },
  {
    slug: 'ubud',
    name: 'Ubud',
    hook: 'Rice terraces, wellness retreats, and an artistic community spread through Bali’s jungle valleys.',
    blurb: 'Ubud villas are spread through Sayan, Penestanan, and the rice terraces. We cook plant-based menus for wellness travellers, Balinese tasting menus for first-time visitors, and full-board catering for yoga retreats.',
    signature: 'We source produce from the Ubud organic farms and Sukawati market.',
    hero: '/generated/mychef-location-bali-city-ubud.webp',
  },
  {
    slug: 'uluwatu',
    name: 'Uluwatu',
    hook: 'Clifftop villas, iconic surf breaks, and dramatic ocean views across Bali’s southern edge.',
    blurb: 'Uluwatu villas hang on cliffs above the Indian Ocean. We bring fine dining experiences that match the view — Wagyu under the stars, seafood the night it was caught, wine pairings that respect the setting.',
    signature: 'We work with the Bingin and Padang Padang fish landings.',
    hero: '/generated/mychef-location-bali-city-uluwatu.webp',
  },
  {
    slug: 'sanur',
    name: 'Sanur',
    hook: 'Relaxed east-coast beach town, family villas, and a sunrise dining culture.',
    blurb: 'Sanur villas favour multi-generational families and longer stays. We cook gentle, classic menus — handmade pasta, fresh seafood, simple Balinese — and weekly meal plans that handle dietary needs across three generations.',
    signature: 'We shop Pasar Sindhu at first light for produce and reef fish.',
    hero: '/generated/city-sanur.webp',
  },
  {
    slug: 'nusa-dua',
    name: 'Nusa Dua',
    hook: 'A five-star resort enclave with large villa estates, polished service, and family retreat energy.',
    blurb: 'Nusa Dua is the home of Bali\'s gated premium villas and resort hospitality. We cater corporate retreats, executive dinners, and high-end private events with the same precision as the surrounding five-star kitchens.',
    signature: 'We coordinate with the major estate kitchens and bring full service teams.',
    hero: '/generated/city-nusa-dua.webp',
  },
  {
    slug: 'jimbaran',
    name: 'Jimbaran',
    hook: 'Famous for seafood grills and clifftop resorts — intimate fish suppers, beachside BBQs.',
    blurb: 'Jimbaran is where Bali eats seafood. We cook from the morning landing at Kedonganan — barramundi, lobster, prawns, snapper — straight to your villa table, with the salt still on the catch.',
    signature: 'We bring the boat-to-villa supply chain to every Jimbaran booking.',
    hero: '/generated/city-jimbaran.webp',
  },
  {
    slug: 'berawa',
    name: 'Berawa',
    hook: 'Canggu\'s quieter northern sibling — surf villa clusters, health-conscious guests.',
    blurb: 'Berawa villas are modern, well-equipped, and built for entertaining. We cook villa parties for 20–80 guests, birthday dinners, and Mediterranean menus that complement the beach-club aesthetic.',
    signature: 'We handle the logistics for the bigger-than-Canggu villa events.',
    hero: '/generated/city-berawa.webp',
  },
  {
    slug: 'pererenan',
    name: 'Pererenan',
    hook: 'Remote surf breaks, architect-designed villas, and off-grid privacy.',
    blurb: 'Pererenan is what Canggu was five years ago — quieter, more design-led, and full of new villas with great kitchens. We cook romantic dinners, small-group fine dining, and weekly meal prep for the long-stayers.',
    signature: 'We know every chef-friendly villa Pererenan has come online with.',
    hero: '/generated/city-pererenan.webp',
  },
  {
    slug: 'bukit',
    name: 'Bukit Peninsula',
    hook: 'The southern peninsula — dramatic limestone cliffs, world-class surf, and clifftop villas.',
    blurb: 'The Bukit Peninsula is Bali\'s premium clifftop region — Bingin, Padang Padang, Ungasan, Pecatu. We cook fine dining for elopements, surf-trip groups, and milestone celebrations against the Indian Ocean horizon.',
    signature: 'We service every Bukit clifftop villa with a full team.',
    hero: '/generated/city-bukit.webp',
  },
  {
    slug: 'jakarta',
    name: 'Jakarta',
    hook: 'Urban fine dining and executive corporate catering in Indonesia’s capital.',
    blurb: 'myCHEF Jakarta brings our Bali standards to the city’s premier residences and corporate suites. We specialize in discreet executive lunches, boardroom dinners, and high-end residential events.',
    signature: 'We shop the premium markets of South Jakarta each morning.',
    hero: '/generated/mychef-location-bali-locations-sunset.webp',
  },
  {
    slug: 'menteng',
    name: 'Menteng',
    hook: 'Discreet, high-security private dining for Jakarta’s diplomatic and historic residential heart.',
    blurb: 'Menteng demands the highest level of discretion and service. We provide Michelin-trained chefs for embassy dinners, formal family hosting, and elite residential events within Jakarta’s most prestigious district.',
    signature: 'Our teams are vetted for high-security diplomatic residences.',
    hero: '/generated/mychef-location-bali-locations-sunset.webp',
  },
  {
    slug: 'kemang',
    name: 'Kemang',
    hook: 'Sophisticated social catering and family dining for Jakarta’s international and creative community.',
    blurb: 'Kemang is the heart of Jakarta’s expat social life. We cook Mediterranean feasts, social BBQ events, and healthy family-style dinners for the district’s vibrant community of international residents.',
    signature: 'We understand the culinary diversity Kemang residents expect.',
    hero: '/generated/mychef-location-bali-locations-sunset.webp',
  },
  {
    slug: 'scbd',
    name: 'SCBD',
    hook: 'Executive corporate hospitality and boardroom private dining in the Business District.',
    blurb: 'Serving the high-rises and penthouses of SCBD, myCHEF provides seamless executive hospitality. We manage boardroom lunches, corporate networking events, and premium apartment dining with absolute precision.',
    signature: 'We specialize in corporate timing and executive menu flow.',
    hero: '/generated/mychef-location-bali-locations-sunset.webp',
  },
  {
    slug: 'pondok-indah',
    name: 'Pondok Indah',
    hook: 'Exclusive residential private chef services for Jakarta’s premier family estates.',
    blurb: 'Pondok Indah villas and estates are built for multi-generational dining. We provide large-format catering, milestone birthday dinners, and consistent private chef service for the district’s primary residences.',
    signature: 'We manage the kitchen logistics for Pondok Indah’s largest family estates.',
    hero: '/generated/mychef-location-bali-locations-sunset.webp',
  },
]
