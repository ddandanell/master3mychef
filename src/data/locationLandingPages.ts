export const CUSTOM_LOCATION_PAGE_SLUGS = [
  'seminyak',
  'canggu',
  'ubud',
  'uluwatu',
  'sanur',
  'nusa-dua',
  'jimbaran',
  'denpasar',
  'bukit',
  'pererenan',
] as const

export type CustomLocationPageSlug = typeof CUSTOM_LOCATION_PAGE_SLUGS[number]

export interface LocationLandingPageConfig {
  slug: CustomLocationPageSlug
  name: string
  title: string
  description: string
  h1: string
  heroImage: string
  heroAlt: string
  intro: string
  areaDescription: [string, string, string]
  serviceAvailability: {
    title: string
    href: string
    summary: string
    availability: string
  }[]
  travelFees: {
    from: 'Canggu' | 'Seminyak'
    travelTime: string
    fee: string
    note: string
  }[]
  bookingRecommendation: string
  villaDensity: string
  guestProfile: string
  landmarks: string[]
  coordinates: {
    latitude: number
    longitude: number
  }
}

export const LOCATION_LANDING_PAGES: Record<CustomLocationPageSlug, LocationLandingPageConfig> = {
  seminyak: {
    slug: 'seminyak',
    name: 'Seminyak',
    title: 'Private Chef Seminyak | Beachfront Villa Dining — myCHEF',
    description: 'Hire a private chef in Seminyak for beachfront villa dinners, BBQs & events. Michelin-trained, fast setup, all Seminyak areas covered. WhatsApp us.',
    h1: 'Private Chef Service in Seminyak',
    heroImage: '/generated/mychef-city-seminyak.webp',
    heroAlt: 'Luxury beachfront villa in Seminyak, Bali set for a private chef sunset dinner',
    intro: 'Seminyak is Bali’s premier villa destination, where beachfront estates meet a world-class food scene. We provide on-demand fine dining that rivals the strip’s best restaurants.',
    areaDescription: [
      'Seminyak is the original Bali villa scene — Petitenget and Oberoi-area villas, walk-to-beach addresses, and a dense restaurant culture. Guests here usually want one private evening that beats every restaurant on the strip.',
      'myCHEF plans Seminyak service around beachfront access, sunset timing, and menus that match the high-end energy of the area. We regularly build seafood-led dinners, Italian tasting menus, and private catering for birthdays in the landmark estates near Kudeta and Potato Head.',
      'Because Seminyak is a core part of our west-coast flow, we offer fast deployment and lower travel fees, with chefs who know the exact layouts of the primary villa complexes in the neighborhood.',
    ],
    serviceAvailability: [
      {
        title: 'Beachfront fine dining',
        href: '/fine-dining',
        summary: 'Michelin-trained chefs delivering multi-course tasting menus directly to your Seminyak beachfront villa.',
        availability: 'Daily breakfast, lunch, and dinner coverage.',
      },
      {
        title: 'Villa parties & events',
        href: '/events/villa-parties',
        summary: 'Cocktail receptions, BBQ nights, and milestone celebrations with full staffing and bar service.',
        availability: 'Best for 10-80 guests in Seminyak estates.',
      },
      {
        title: 'Weekly chef service',
        href: '/staffing/live-in-chef',
        summary: 'Dedicated chefs for your full stay, handling all grocery shopping, cooking, and kitchen management.',
        availability: 'Recommended for 7+ day villa bookings.',
      },
    ],
    travelFees: [
      {
        from: 'Seminyak',
        travelTime: '5-15 min',
        fee: 'IDR 150k',
        note: 'Our primary operations hub is minutes from central Seminyak.',
      },
      {
        from: 'Canggu',
        travelTime: '20-30 min',
        fee: 'IDR 250k',
        note: 'Covers cross-district transport during peak traffic windows.',
      },
    ],
    bookingRecommendation: 'Book Seminyak 24-48 hours ahead for standard dinners. For beachfront events or large parties, 3-7 days is ideal.',
    villaDensity: 'Extremely high density of premium, high-turnover holiday villas and larger beachfront estates.',
    guestProfile: 'Fine-dining lovers, fashion travellers, luxury families, and groups looking for high-energy Bali hosting.',
    landmarks: ['Petitenget Beach', 'Oberoi Street', 'Kudeta area', 'Jl. Kayu Aya', 'Seminyak Square district'],
    coordinates: {
      latitude: -8.6833,
      longitude: 115.1500,
    },
  },
  canggu: {
    slug: 'canggu',
    name: 'Canggu',
    title: 'Private Chef Canggu | Surf Villas & Family Feasts — myCHEF',
    description: 'Hire a private chef in Canggu for villa dinners, poolside BBQs & retreat catering. Perfect for surf groups, families & long stays. WhatsApp us.',
    h1: 'Private Chef Service in Canggu',
    heroImage: '/generated/mychef-city-canggu.webp',
    heroAlt: 'Modern pool villa in Canggu, Bali prepared for a casual private chef BBQ',
    intro: 'In the heart of Bali’s creative and surf culture, our Canggu service focuses on vibrant, healthy menus and relaxed social dining that fits the neighborhood’s lifestyle.',
    areaDescription: [
      'Canggu villas are larger, often family-run, with great kitchens and open-plan living. The area spans from the busy Batu Bolong strip to the quieter rice-field lanes of Babakan and the surf villas of Echo Beach.',
      'myCHEF uses Canggu best for weekly meal prep, casual poolside BBQs, and family-style sharing dinners. We focus on high-protein, nutrient-dense menus that support the active lifestyle Canggu guests come for.',
      'We know every villa kitchen layout from Nelayan to Pererenan border. Because we are based here, we offer the fastest confirmation times and most flexible scheduling for Canggu-based groups.',
    ],
    serviceAvailability: [
      {
        title: 'Weekly meal prep & hosting',
        href: '/services/weekly-meal-prep',
        summary: 'Daily healthy lunches, family dinners, and breakfast service for long-stay nomads and families.',
        availability: 'Flexible daily and multi-day packages.',
      },
      {
        title: 'Poolside BBQ catering',
        href: '/catering/bbq-catering',
        summary: 'Live-fire seafood and steak BBQs with fresh sides and service, perfect for post-surf hosting.',
        availability: 'Best for villas of 8–30 guests.',
      },
      {
        title: 'In-villa fine dining',
        href: '/fine-dining',
        summary: 'Casual-luxury tasting menus and private chef dinners that bridge restaurant quality with villa comfort.',
        availability: 'Daily dinner coverage across all Canggu zones.',
      },
    ],
    travelFees: [
      {
        from: 'Canggu',
        travelTime: '5-15 min',
        fee: 'IDR 100k',
        note: 'Our Canggu-based teams serve this area with minimal logistics overhead.',
      },
      {
        from: 'Seminyak',
        travelTime: '15-25 min',
        fee: 'IDR 200k',
        note: 'Simple routing unless moving through Shortcut traffic at sunset.',
      },
    ],
    bookingRecommendation: 'Canggu can often be confirmed within 12-24 hours. Weekly meal prep and BBQ events are best booked 2-3 days in advance.',
    villaDensity: 'Very high density of modern villas, larger family compounds, and new design-led boutique properties.',
    guestProfile: 'Digital nomads, young families, surf groups, and wellness-focused travellers who value health and ease.',
    landmarks: ['Batu Bolong', 'Echo Beach', 'Berawa Shortcut', 'Babakan', 'Nelayan Beach'],
    coordinates: {
      latitude: -8.6478,
      longitude: 115.1385,
    },
  },
  ubud: {
    slug: 'ubud',
    name: 'Ubud',
    title: 'Private Chef Ubud | Jungle Villa & Retreat Dining — myCHEF',
    description: 'Hire a private chef in Ubud for jungle villa dinners, wellness retreats & multi-day catering. Plant-forward menus, organic sourcing. WhatsApp to book.',
    h1: 'Private Chef Service in Ubud',
    heroImage: '/generated/mychef-city-ubud.webp',
    heroAlt: 'Jungle valley villa in Ubud, Bali set for a traditional Balinese private chef dinner',
    intro: 'From Sayan to the rice terraces of Tegalalang, our Ubud service embraces the island’s spiritual heart with organic, locally sourced menus.',
    areaDescription: [
      'Ubud villas are spread through deep jungle valleys, quiet village lanes, and expansive rice terraces. Guests here usually prioritize privacy, wellness, and a deeper connection to Balinese culture and produce.',
      'myCHEF plans Ubud service around organic sourcing, plant-forward nutrition, and the quiet, professional hosting that fits a retreat setting. We specialize in multi-day retreat catering, traditional Balinese "megibung" feasts, and healthy breakfast service.',
      'Because Ubud covers a large geographic area with complex village roads, we coordinate transport and staging carefully to ensure service starts on time despite the jungle logistics.',
    ],
    serviceAvailability: [
      {
        title: 'Wellness & retreat catering',
        href: '/catering/retreat-catering',
        summary: 'Nutrient-dense, multi-day food programmes designed for yoga retreats and wellness groups.',
        availability: 'Full-board and half-board retreat support.',
      },
      {
        title: 'Balinese cultural dining',
        href: '/catering/babi-guling',
        summary: 'Traditional feasts, whole-roasted pig (Babi Guling), and market-led Balinese tasting menus.',
        availability: 'Authentic local cuisine with Michelin standards.',
      },
      {
        title: 'Private jungle dinners',
        href: '/fine-dining/romantic-dinner',
        summary: 'Intimate fine dining for couples and small groups set against the Ubud jungle backdrop.',
        availability: 'Daily dinner coverage in Sayan and Tegalalang.',
      },
    ],
    travelFees: [
      {
        from: 'Canggu',
        travelTime: '60-80 min',
        fee: 'IDR 550k',
        note: 'Covers longer northbound transit and jungle-access logistics.',
      },
      {
        from: 'Seminyak',
        travelTime: '50-70 min',
        fee: 'IDR 500k',
        note: 'Matches the longer route through central Bali traffic windows.',
      },
    ],
    bookingRecommendation: 'Book Ubud 3-5 days ahead, especially for retreat catering or traditional feasts that require specific morning-market sourcing.',
    villaDensity: 'Low-to-moderate density but high-value; villas are often more spread out and integrated into villages and jungle.',
    guestProfile: 'Wellness travellers, yoga groups, nature lovers, and cultural explorers who prefer quiet over coast.',
    landmarks: ['Sayan Ridge', 'Penestanan', 'Tegalalang Rice Terrace', 'Monkey Forest district', 'Titi Batu area'],
    coordinates: {
      latitude: -8.5069,
      longitude: 115.2625,
    },
  },
  uluwatu: {
    slug: 'uluwatu',
    name: 'Uluwatu',
    title: 'Private Chef Uluwatu | Clifftop Villa Dining — myCHEF',
    description: 'Hire a private chef in Uluwatu for clifftop villa dinners, sunset feasts & wedding catering. Seafood-forward menus, polished service. WhatsApp us.',
    h1: 'Private Chef Service in Uluwatu',
    heroImage: '/generated/mychef-city-uluwatu.webp',
    heroAlt: 'Clifftop villa terrace in Uluwatu, Bali styled for a premium private chef seafood dinner',
    intro: 'Uluwatu’s dramatic cliffs demand a dining experience to match. We specialize in clifftop seafood feasts and high-end celebrations with the Indian Ocean as your backdrop.',
    areaDescription: [
      'Uluwatu is Bali’s southern clifftop belt, known for world-class surf, iconic temples, and some of the island’s most expensive private estates. Most villas here are built for the view, with expansive terraces and open-air dining rooms.',
      'myCHEF works Uluwatu with a focus on clifftop seafood BBQs, elegant wedding rehearsal dinners, and high-end private hosting. We plan around wind, sun exposure, and the unique logistics of cliff-access properties.',
      'We leverage the local Bingin and Padang‑Padang fish landings to bring the island’s best catch directly to the villa, often within hours of it being caught.',
    ],
    serviceAvailability: [
      {
        title: 'Clifftop fine dining',
        href: '/fine-dining',
        summary: 'Premium tasting menus and plated dinners built for sunset views and high-end hosting.',
        availability: 'Ideal for couples and milestone celebrations.',
      },
      {
        title: 'Seafood BBQ catering',
        href: '/catering/bbq-catering',
        summary: 'Live-fire seafood feasts featuring lobster, snapper, and prawns sourced from local landings.',
        availability: 'Popular for villa groups of 10–40 guests.',
      },
      {
        title: 'Wedding & event support',
        href: '/events/weddings',
        summary: 'Rehearsal dinners, post-wedding brunches, and intimate villa ceremonies with full staffing.',
        availability: 'Best fit for event weekends and elopements.',
      },
    ],
    travelFees: [
      {
        from: 'Canggu',
        travelTime: '55-75 min',
        fee: 'IDR 550k',
        note: 'Covers the full southbound route and clifftop loading requirements.',
      },
      {
        from: 'Seminyak',
        travelTime: '45-60 min',
        fee: 'IDR 500k',
        note: 'Matches the airport-bypass route and estate-access planning.',
      },
    ],
    bookingRecommendation: 'Book Uluwatu 3-4 days ahead for dinners and 7-14 days for event weekends or high-budget seafood feasts.',
    villaDensity: 'Moderate density with many very large estates, event villas, and surf-group houses.',
    guestProfile: 'Surf travellers, wedding groups, premium couples, and guests who value dramatic views and privacy.',
    landmarks: ['Bingin Cliff', 'Padang‑Padang', 'Pura Uluwatu', 'Ungasan Ridge', 'Melasti Beach area'],
    coordinates: {
      latitude: -8.8291,
      longitude: 115.0884,
    },
  },
  sanur: {
    slug: 'sanur',
    name: 'Sanur',
    title: 'Private Chef Sanur | Family Villa Dining & Catering — myCHEF',
    description: 'Hire a private chef in Sanur for family villa dinners, beach brunches & events. Calm east-coast service, seafood menus & easy booking. WhatsApp us.',
    h1: 'Private Chef Service in Sanur',
    heroImage: '/generated/mychef-city-sanur.webp',
    heroAlt: 'Sunrise-style beach villa atmosphere in Sanur, Bali prepared for a private chef breakfast service',
    intro: 'Sanur suits guests who want Bali to feel easy: calm water, walkable beachfront mornings, and villa evenings that finish before the island traffic starts again.',
    areaDescription: [
      'Sanur is Bali\'s classic east-coast beach town: flatter roads, gentler beaches, and a villa market built around families, grandparents, and longer stays. Guests staying here usually want a polished private-chef dinner without the noise or late-night rhythm of Seminyak and Canggu.',
      'myCHEF plans Sanur service around sunrise breakfasts, early family suppers, and menus that work for mixed age groups. We regularly build seafood-led dinners, Indonesian sharing tables, kid-friendly breakfast spreads, and private catering for birthdays in larger beachfront compounds.',
      'Because Sanur sits east of our main west-coast flow, we confirm timing and travel early, then arrive with everything staged so the service still feels relaxed. The result is calm, well-paced dining that matches the area itself.',
    ],
    serviceAvailability: [
      {
        title: 'Private chef villa dining',
        href: '/fine-dining',
        summary: 'Plated dinners, breakfast service, and chef-led family meals designed for beachfront villas and quieter evening schedules.',
        availability: 'Daily breakfast, lunch, and dinner coverage.',
      },
      {
        title: 'Villa catering',
        href: '/catering',
        summary: 'Buffets, seafood BBQs, and sharing menus for multi-generational stays, birthdays, and arrival-night dinners.',
        availability: 'Best fit for villa compounds of 8–40 guests.',
      },
      {
        title: 'Private events',
        href: '/events',
        summary: 'Birthday lunches, anniversary dinners, and smaller family celebrations with staffing and setup handled by one team.',
        availability: 'Ideal for intimate celebrations and villa events.',
      },
    ],
    travelFees: [
      {
        from: 'Canggu',
        travelTime: '30-40 min',
        fee: 'IDR 350k',
        note: 'Typical east-coast logistics fee for chef, equipment, and chilled transport.',
      },
      {
        from: 'Seminyak',
        travelTime: '25-35 min',
        fee: 'IDR 300k',
        note: 'Lower when service is booked outside peak airport traffic windows.',
      },
    ],
    bookingRecommendation: 'Book Sanur 48 hours ahead for breakfast or family dinner service. For birthdays, compound dinners, or dietary-heavy groups, 3-5 days is safer.',
    villaDensity: 'Moderate villa density with a strong concentration of family compounds and beachfront residences rather than party villas.',
    guestProfile: 'Families, grandparents, wellness travellers, and guests who prefer earlier dining times, gentler menus, and smooth logistics.',
    landmarks: ['Sanur Beach', 'Sindhu Beach', 'Mertasari', 'Sindhu Market', 'Icon Bali mall district'],
    coordinates: {
      latitude: -8.6935,
      longitude: 115.2629,
    },
  },
  'nusa-dua': {
    slug: 'nusa-dua',
    name: 'Nusa Dua',
    title: 'Private Chef Nusa Dua | Resort Villa & Executive Dining — myCHEF',
    description: 'Hire a private chef in Nusa Dua for resort villas & executive dinners. Fine dining, plated catering & secure-estate service. WhatsApp us today.',
    h1: 'Private Chef Service in Nusa Dua',
    heroImage: '/generated/mychef-city-nusa-dua.webp',
    heroAlt: 'Luxury estate mood in Nusa Dua, Bali set for a private chef dinner with resort-style service',
    intro: 'Nusa Dua is where Bali shifts into polished resort energy: secure estates, larger compounds, and guests who expect service to run with hotel precision.',
    areaDescription: [
      'Nusa Dua is built around five-star resorts, gated residences, and private estates where access, timing, and presentation matter as much as the menu. The area attracts executive groups, destination families, and guests upgrading a resort stay with one truly private dinner inside the villa.',
      'myCHEF treats Nusa Dua more like a resort operation than a casual villa call-out. We coordinate security entry, larger staffing teams, plated fine-dining flow, and polished breakfast or brunch service for compounds that want hotel-grade standards without leaving the property.',
      'This is also one of our best areas for corporate offsites and board-level dinners. Menus skew refined, international, and service-led: tasting menus, elevated buffets, seafood stations, and smart recovery brunches after a long event day.',
    ],
    serviceAvailability: [
      {
        title: 'Private chef fine dining',
        href: '/fine-dining',
        summary: 'Multi-course dinners, executive hosting, and villa tasting menus staged with quiet, polished front-of-house support.',
        availability: 'Best for 2-20 guests in private estates and resort villas.',
      },
      {
        title: 'Corporate & villa catering',
        href: '/catering/corporate-catering',
        summary: 'Structured breakfasts, working lunches, buffets, and plated corporate dinners with precise run sheets.',
        availability: 'Strong for offsites, retreats, and family compounds.',
      },
      {
        title: 'Events & celebrations',
        href: '/events',
        summary: 'Anniversaries, proposal dinners, and corporate receptions with chefs, waiters, and event pacing under one roof.',
        availability: 'Recommended for milestone dinners and executive gatherings.',
      },
    ],
    travelFees: [
      {
        from: 'Canggu',
        travelTime: '50-60 min',
        fee: 'IDR 500k',
        note: 'Traffic exposure is highest at sunset and airport rush hours.',
      },
      {
        from: 'Seminyak',
        travelTime: '40-50 min',
        fee: 'IDR 450k',
        note: 'Matches the longer secure-estate routing and loading time in the area.',
      },
    ],
    bookingRecommendation: 'Book Nusa Dua 72 hours ahead whenever possible. Resort villas, corporate dinners, and pass-controlled estates often need more pre-arrival coordination.',
    villaDensity: 'High-end but lower-density than Seminyak; larger compounds, branded residences, and secure villas dominate the market.',
    guestProfile: 'Corporate groups, executive families, destination wedding guests, and travellers who value refined pacing over nightlife access.',
    landmarks: ['ITDC Nusa Dua', 'Geger Beach', 'Sawangan', 'Bali Nusa Dua Convention Center', 'Benoa side estates'],
    coordinates: {
      latitude: -8.8093,
      longitude: 115.2287,
    },
  },
  jimbaran: {
    slug: 'jimbaran',
    name: 'Jimbaran',
    title: 'Private Chef Jimbaran | Seafood Villa Dining & BBQ — myCHEF',
    description: 'Hire a private chef in Jimbaran for seafood villa dinners, bayfront BBQs & sunset events. Fresh local catch, polished service. WhatsApp us today.',
    h1: 'Private Chef Service in Jimbaran',
    heroImage: '/generated/mychef-city-jimbaran.webp',
    heroAlt: 'Clifftop and bay-side villa setting in Jimbaran, Bali styled for a sunset private chef dinner',
    intro: 'Jimbaran is Bali\'s seafood coast: bay villas, cliff‑top estates, and guests who expect the sunset meal to be the main event of the day.',
    areaDescription: [
      'Jimbaran spans two strong dining moods: laid-back villas near the bay and more elevated estates above the coast. Both suit private-chef service because guests usually want the seafood quality of the shoreline restaurants without the crowds, traffic, or beach-table compromise.',
      'myCHEF uses Jimbaran best for seafood-focused menus, villa BBQs, whole-fish service, and elegant plated dinners after a beach day. We shop around the morning landing, design menus around the freshest catch, and adapt service flow to outdoor terraces, lawn dinners, and open-air kitchens.',
      'The area also works well for small events, engagement dinners, and arrival-night feasts because access is straightforward compared with the deeper Bukit roads. That balance of fresh product and easier logistics makes Jimbaran one of Bali\'s most dependable luxury-villa zones.',
    ],
    serviceAvailability: [
      {
        title: 'Seafood-led private chef dining',
        href: '/fine-dining',
        summary: 'Snapper, prawns, lobster, and plated villa dinners cooked for couples, families, and small celebratory groups.',
        availability: 'Daily lunch and dinner coverage with seafood sourcing built in.',
      },
      {
        title: 'BBQ & group catering',
        href: '/catering/bbq-catering',
        summary: 'Live-grill seafood feasts, bayfront BBQs, and casual high-quality catering for groups that want a social format.',
        availability: 'Most-booked for villas of 8–30 guests.',
      },
      {
        title: 'Celebration events',
        href: '/events/villa-parties',
        summary: 'Proposal dinners, birthdays, and sunset events with chefs, service staff, and pacing timed around the view.',
        availability: 'Strong for milestone dinners and informal villa parties.',
      },
    ],
    travelFees: [
      {
        from: 'Canggu',
        travelTime: '35-45 min',
        fee: 'IDR 400k',
        note: 'Best confirmed early when moving grill equipment or larger seafood loads.',
      },
      {
        from: 'Seminyak',
        travelTime: '30-40 min',
        fee: 'IDR 350k',
        note: 'Shorter route but still affected by airport and sunset traffic.',
      },
    ],
    bookingRecommendation: 'Book Jimbaran 48 hours ahead for seafood menus so we can source the right catch. BBQs and event-style bookings are best confirmed 3-4 days ahead.',
    villaDensity: 'Strong mix of bay villas, family compounds, and premium cliffside estates with outdoor dining areas that suit chef-led service.',
    guestProfile: 'Seafood lovers, families, surf groups, and celebration guests who want a sunset dinner without leaving the villa.',
    landmarks: ['Jimbaran Bay', 'Kedonganan fish market', 'Four Seasons side estates', 'Ayana ridge villas', 'Muaya Beach'],
    coordinates: {
      latitude: -8.7906,
      longitude: 115.1606,
    },
  },
  denpasar: {
    slug: 'denpasar',
    name: 'Denpasar',
    title: 'Private Chef Denpasar | Home Dining & Business Catering — myCHEF',
    description: 'Hire a private chef in Denpasar for business lunches, family dinners & private events. Fast central logistics, same-day booking. WhatsApp us.',
    h1: 'Private Chef Service in Denpasar',
    heroImage: '/generated/mychef-city-denpasar.webp',
    heroAlt: 'Urban villa and business-district atmosphere in Denpasar, Bali set for a private chef lunch or dinner',
    intro: 'Denpasar is Bali\'s operational center: quicker logistics, residential compounds, and business-friendly service windows that make chef deployment simpler and faster.',
    areaDescription: [
      'Denpasar is less about destination-villa tourism and more about real residential life: private compounds, family homes, business gatherings, and practical central access to the rest of south Bali. That changes what good private-chef service looks like here.',
      'myCHEF uses Denpasar for elegant home dining, executive lunches, family celebrations, and catering where timing matters. Menus often need to feel efficient but premium: fast setup, clear service windows, and dishes that land well for both business and residential hosting.',
      'Because the area sits close to our operational routes, Denpasar is also one of the easiest locations for weekday bookings, last-minute chef requests, and recurring meal service. It is ideal when hosts want a strong hospitality layer without the overhead of a resort zone.',
    ],
    serviceAvailability: [
      {
        title: 'Private chef home dining',
        href: '/fine-dining/private-chef-bali',
        summary: 'Chef-led lunches and dinners for residences, compound hosting, and refined home entertaining across Denpasar.',
        availability: 'Excellent for weekday and repeat bookings.',
      },
      {
        title: 'Business & residential catering',
        href: '/catering/corporate-catering',
        summary: 'Working lunches, executive dinners, and polished catering for offices, residences, and private compounds.',
        availability: 'Fast deployment for 10-60 guest formats.',
      },
      {
        title: 'Events support',
        href: '/events/corporate-events',
        summary: 'Corporate receptions, family milestones, and service-led gatherings with chefs, staffing, and cleanup included.',
        availability: 'Strong for shorter-format central Bali events.',
      },
    ],
    travelFees: [
      {
        from: 'Canggu',
        travelTime: '25-30 min',
        fee: 'IDR 250k',
        note: 'Central routing keeps Denpasar one of our most efficient travel zones.',
      },
      {
        from: 'Seminyak',
        travelTime: '15-20 min',
        fee: 'IDR 200k',
        note: 'Often the most cost-effective major-area booking in south Bali.',
      },
    ],
    bookingRecommendation: 'Denpasar can often be confirmed within 24 hours, but business lunches, staffed dinners, and corporate events still benefit from 48 hours\' notice.',
    villaDensity: 'Lower tourist-villa density than the coasts, but a high concentration of private homes, compounds, and event-friendly residences.',
    guestProfile: 'Business hosts, expat families, local celebrations, and guests prioritising speed, structure, and central access.',
    landmarks: ['Renon', 'Panjer', 'Denpasar Selatan', 'Bajra Sandhi', 'Teuku Umar business corridor'],
    coordinates: {
      latitude: -8.6705,
      longitude: 115.2126,
    },
  },
  bukit: {
    slug: 'bukit',
    name: 'Bukit Peninsula',
    title: 'Private Chef Bukit Peninsula Bali | Clifftop Villas — myCHEF',
    description: 'Hire a private chef on the Bukit Peninsula for clifftop villa dinners, surf-group feasts & celebrations. Uluwatu, Pecatu & Ungasan covered.',
    h1: 'Private Chef Service in Bukit Peninsula',
    heroImage: '/generated/mychef-city-bukit.webp',
    heroAlt: 'Dramatic cliffside villa setting across the Bukit Peninsula in Bali prepared for a private chef service',
    intro: 'The Bukit Peninsula covers Bali\'s southern clifftop belt: Pecatu, Ungasan, Bingin, Padang Padang, and villas where the setting is part of the dinner.',
    areaDescription: [
      'Bukit is not one neighbourhood; it is a connected premium region. Guests book here for surf access, Indian Ocean views, and large villas perched on the limestone cliffs from Pecatu through Ungasan. That means every dinner is part hospitality, part logistics project.',
      'myCHEF works the Bukit with a fully mobile model: staged prep, wind-aware setup, terrace-friendly menus, and service timing built around long driveways, elevators, and sunset windows. We cover romantic dinners, surf-group sharing feasts, clifftop BBQs, and full private events with the same operating discipline.',
      'When guests want a single page for the full Uluwatu-Pecatu-Ungasan zone, this is it. The Bukit Peninsula page is designed for travellers who know they are staying somewhere on the cliffs but want one trusted chef team that already understands the terrain.',
    ],
    serviceAvailability: [
      {
        title: 'Clifftop fine dining',
        href: '/fine-dining',
        summary: 'Private tasting menus, chef tables, and plated sunset dinners built for high-view terraces and intimate groups.',
        availability: 'Ideal for couples, elopements, and premium villa stays.',
      },
      {
        title: 'Villa catering & BBQs',
        href: '/catering/villa-catering',
        summary: 'Sharing feasts, premium BBQs, and family-style catering for surf groups and larger villas across the cliffs.',
        availability: 'Popular for villas of 8–40 guests across Pecatu and Ungasan.',
      },
      {
        title: 'Celebrations & events',
        href: '/events/weddings',
        summary: 'Elopements, rehearsal dinners, birthdays, and oceanfront villa events with full staffing and production support.',
        availability: 'Best fit for milestone nights and event weekends.',
      },
    ],
    travelFees: [
      {
        from: 'Canggu',
        travelTime: '50-65 min',
        fee: 'IDR 500k',
        note: 'The widest range because villa access varies sharply across the peninsula.',
      },
      {
        from: 'Seminyak',
        travelTime: '45-60 min',
        fee: 'IDR 450k',
        note: 'Covers longer southbound transfers, loading, and cliff-access planning.',
      },
    ],
    bookingRecommendation: 'Book Bukit Peninsula 72 hours ahead for dinners and 4-7 days ahead for event weekends. Remote cliff villas need more staging time than central Bali locations.',
    villaDensity: 'High concentration of large-format clifftop villas, surf houses, and event-capable estates spread across multiple sub-areas.',
    guestProfile: 'Surf travellers, wedding guests, couples on milestone trips, and villa groups who chose the cliffs for privacy and the view.',
    landmarks: ['Pecatu', 'Ungasan', 'Bingin', 'Padang Padang', 'Melasti side estates'],
    coordinates: {
      latitude: -8.8391,
      longitude: 115.1398,
    },
  },
  pererenan: {
    slug: 'pererenan',
    name: 'Pererenan',
    title: 'Private Chef Pererenan | Design Villas & Private Dining — myCHEF',
    description: 'Hire a private chef in Pererenan for design villa dinners, weekly meal plans & relaxed group feasts. Quiet Canggu enclave. WhatsApp us today.',
    h1: 'Private Chef Service in Pererenan',
    heroImage: '/generated/mychef-city-pererenan.webp',
    heroAlt: 'Design-led villa in Pererenan, Bali styled for an intimate private chef dinner',
    intro: 'Pererenan is the quieter north-west edge of the Canggu orbit: bigger villas, calmer streets, and guests who want design, privacy, and better breathing room.',
    areaDescription: [
      'Pererenan has become one of Bali\'s strongest villa markets for guests who like Canggu\'s energy but do not want to sleep inside it. The area is full of new architect-designed villas, strong kitchens, and longer-stay travellers who care about detail, privacy, and low-friction service.',
      'myCHEF uses Pererenan for chef-table dinners, weekly meal plans, relaxed breakfast service, and polished group feasts that still feel understated. Guests here often want the quality of fine dining without the performance of a party-villa setup.',
      'Because it sits only minutes north of central Canggu, Pererenan also gives us reliable access without losing the sense of escape that guests came for. It is one of the easiest locations for repeat chef visits and multi-day food planning.',
    ],
    serviceAvailability: [
      {
        title: 'Fine dining & chef tables',
        href: '/fine-dining/chefs-table',
        summary: 'Intimate private dinners, tasting menus, and chef-led evenings for villas with strong kitchen and dining layouts.',
        availability: 'Excellent for couples and design-led stays.',
      },
      {
        title: 'Weekly chef service',
        href: '/services/weekly-meal-prep',
        summary: 'Breakfast prep, healthy lunches, kids\' meals, and recurring villa cooking for longer bookings north of Canggu.',
        availability: 'Best for multi-day and family stays.',
      },
      {
        title: 'Private catering & events',
        href: '/events/birthdays',
        summary: 'Birthday dinners, arrival feasts, and small-group events with chef, service, and cleanup fully handled.',
        availability: 'Works well for villas of 6–24 guests.',
      },
    ],
    travelFees: [
      {
        from: 'Canggu',
        travelTime: '10-15 min',
        fee: 'IDR 150k',
        note: 'Often the fastest premium-villa deployment north of central Canggu.',
      },
      {
        from: 'Seminyak',
        travelTime: '20-30 min',
        fee: 'IDR 250k',
        note: 'Simple routing unless there is heavy sunset traffic through Berawa.',
      },
    ],
    bookingRecommendation: 'Book Pererenan 24-48 hours ahead for dinners and 72 hours for weekly-chef planning. It is one of the easiest areas for repeat service windows.',
    villaDensity: 'Fast-growing villa density with many new high-design properties, larger kitchens, and stronger fit-outs than older Canggu stock.',
    guestProfile: 'Long-stay families, design-conscious couples, remote workers, and groups who want quality dining without the traffic and noise of central Canggu.',
    landmarks: ['Pererenan Beach', 'Pantai Lima', 'Seseh side villas', 'North Canggu rice-field lanes', 'Batu Mejan approach roads'],
    coordinates: {
      latitude: -8.6399,
      longitude: 115.1198,
    },
  },
}

export function isCustomLocationPageSlug(slug: string): slug is CustomLocationPageSlug {
  return CUSTOM_LOCATION_PAGE_SLUGS.includes(slug as CustomLocationPageSlug)
}

export function getCustomLocationPage(slug: string): LocationLandingPageConfig | undefined {
  return isCustomLocationPageSlug(slug) ? LOCATION_LANDING_PAGES[slug] : undefined
}
