export const CUSTOM_LOCATION_PAGE_SLUGS = [
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
  sanur: {
    slug: 'sanur',
    name: 'Sanur',
    title: 'Private Chef Sanur Bali | myCHEF Services',
    description: 'Private chef in Sanur, Bali for family villas, beach dinners and events. Breakfast, catering and chef service with east-coast travel covered.',
    h1: 'Private Chef Service in Sanur',
    heroImage: '/generated/bali-locations-sunset.webp',
    heroAlt: 'Sunrise-style beach villa atmosphere in Sanur, Bali prepared for a private chef breakfast service',
    intro: 'Sanur suits guests who want Bali to feel easy: calm water, walkable beachfront mornings, and villa evenings that finish before the island traffic starts again.',
    areaDescription: [
      'Sanur is Bali\'s classic east-coast beach town: flatter roads, gentler beaches, and a villa market built around families, grandparents, and longer stays. Guests staying here usually want a polished private-chef dinner without the noise or late-night rhythm of Seminyak and Canggu.',
      'myCHEF plans Sanur service around sunrise breakfasts, early family suppers, and menus that work for mixed age groups. We regularly build seafood-led dinners, Indonesian sharing tables, kids-friendly breakfast spreads, and private catering for birthdays in larger beachfront compounds.',
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
        availability: 'Best fit for 8-40 guests in villa compounds.',
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
    title: 'Private Chef Nusa Dua Bali | myCHEF Services',
    description: 'Private chef in Nusa Dua, Bali for resort villas, executive dinners and events. Fine dining, catering and secure-estate service.',
    h1: 'Private Chef Service in Nusa Dua',
    heroImage: '/generated/misc-hub-bali-lg.webp',
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
    title: 'Private Chef Jimbaran Bali | myCHEF Services',
    description: 'Private chef in Jimbaran, Bali for seafood dinners, beachside villas and group BBQs. Catering, events and sunset service by myCHEF.',
    h1: 'Private Chef Service in Jimbaran',
    heroImage: '/generated/bali-hub-hero.webp',
    heroAlt: 'Clifftop and bay-side villa setting in Jimbaran, Bali styled for a sunset private chef dinner',
    intro: 'Jimbaran is Bali\'s seafood coast: bay villas, clifftop estates, and guests who expect the sunset meal to be the main event of the day.',
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
        availability: 'Most-booked for 8-30 guest villas.',
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
    title: 'Private Chef Denpasar Bali | myCHEF Services',
    description: 'Private chef in Denpasar, Bali for business lunches, family villas and private events. Fast central logistics, catering and chef service.',
    h1: 'Private Chef Service in Denpasar',
    heroImage: '/generated/corp-villa.webp',
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
    title: 'Private Chef Bukit Peninsula Bali | myCHEF Services',
    description: 'Private chef in Bukit Peninsula, Bali for clifftop villas, surf groups and celebrations. Fine dining, catering and event service.',
    h1: 'Private Chef Service in Bukit Peninsula',
    heroImage: '/generated/misc-hub-bali-lg.webp',
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
        availability: 'Popular for 8-40 guest villas across Pecatu and Ungasan.',
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
    title: 'Private Chef Pererenan Bali | myCHEF Services',
    description: 'Private chef in Pererenan, Bali for design villas, quiet stays and group dinners. Fine dining, catering and weekly chef service.',
    h1: 'Private Chef Service in Pererenan',
    heroImage: '/generated/home-hero-ivory-villa.webp',
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
        summary: 'Breakfast prep, healthy lunches, kids meals, and recurring villa cooking for longer bookings north of Canggu.',
        availability: 'Best for multi-day and family stays.',
      },
      {
        title: 'Private catering & events',
        href: '/events/birthdays',
        summary: 'Birthday dinners, arrival feasts, and small-group events with chef, service, and cleanup fully handled.',
        availability: 'Works well for 6-24 guest villas.',
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
