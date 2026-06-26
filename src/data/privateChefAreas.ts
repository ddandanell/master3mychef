/**
 * Area data for the /private-chef/[slug] landing page system.
 * Each record drives every section of PrivateChefAreaPage.tsx.
 * `published: false` gates a page from routing until supply is confirmed.
 */

export interface NearbyArea {
  slug: string
  name: string
}

export interface AreaFaq {
  q: string
  a: string
}

export interface PrivateChefArea {
  slug: string
  name: string
  regency: string
  tier: 1 | 2 | 3
  heroImage: string
  heroAlt: string
  /** 2-3 sentence area-specific intro shown in hero and intro section. */
  intro: string
  /** Short paragraph about villa density / character. */
  villaDensity: string
  /** Who typically books in this area. */
  guestProfile: string
  /** 5-8 recognisable landmarks / beaches / roads. */
  landmarks: string[]
  /** Starting price signal shown in pricing section. */
  priceFrom: string
  /** One or two sentences adding pricing context. */
  pricingNote: string
  /** Which service categories myCHEF offers here (gates the service grid). */
  services: ('private-chef' | 'fine-dining' | 'catering' | 'bbq' | 'events' | 'staffing')[]
  /** Area-specific FAQs for rich snippets. */
  faqs: AreaFaq[]
  /** Slugs of 4–6 adjacent areas for the mesh linking section. */
  nearbyAreas: NearbyArea[]
  /** Canonical meta title. */
  metaTitle: string
  /** Meta description (~155 chars). */
  metaDescription: string
  /** GPS coords used in LocalBusiness + GeoCoordinates schema. */
  coordinates: { lat: number; lng: number }
  /** Booking lead time note. */
  bookingNote: string
  /** Supply gate — only publish when myCHEF genuinely delivers here. */
  published: boolean
}

export const PRIVATE_CHEF_AREAS: PrivateChefArea[] = [
  // ─── TIER 1: South Badung / Seminyak–Canggu Belt ──────────────────────────
  {
    slug: 'seminyak',
    name: 'Seminyak',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-seminyak.webp',
    heroAlt: 'Private chef plating a fine dining course at a luxury Seminyak villa pool at sunset',
    intro:
      'Seminyak is where Bali\'s villa dining culture started — Petitenget road, Oberoi corridor, and a dense belt of 5-star private estates a short walk from the beach. myCHEF cooks everything here: intimate tasting menus for couples, poolside BBQs for 30, and fully staffed weddings in the villa gardens.',
    villaDensity:
      'Seminyak has the highest concentration of private pool villas in Bali. The Oberoi–Petitenget strip alone has 200+ rentable luxury villas within two kilometres of the beach.',
    guestProfile:
      'European and Australian couples celebrating anniversaries or honeymoons, groups of friends splitting a villa for a long weekend, and families who come for the food scene and want one private evening that beats any restaurant.',
    landmarks: [
      'Petitenget Beach',
      'Jl. Kayu Aya (Oberoi strip)',
      'Seminyak Square',
      'La Plancha beach bar',
      'Potato Head Beach Club',
      'Pasar Seminyak market',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote:
      'Villa catering for groups starts from IDR 560,000 per person. Fine dining tasting menus from IDR 980,000 per person. 25% deposit confirms the booking.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Seminyak?',
        a: 'A private chef session in Seminyak starts from IDR 1,350,000 and covers grocery shopping, cooking, serving, and clean-up. Villa catering for groups of 8–30 guests starts from IDR 560,000 per person. Request a free itemised quote via WhatsApp.',
      },
      {
        q: 'Can I book a private chef at my Seminyak villa for one evening?',
        a: 'Yes. Most Seminyak bookings are single-evening dinners. We confirm chef availability, agree the menu, handle grocery shopping from Pasar Seminyak, and arrive at your villa ready to cook. Same-day bookings are often possible.',
      },
      {
        q: 'Do you cater events and villa parties in Seminyak?',
        a: 'Yes — villa parties, weddings, birthday dinners, and corporate events are all within our scope in Seminyak. We bring the full team: chef, sous chef, waiters, bartender, and equipment. Groups of 8 to 100+ guests.',
      },
      {
        q: 'What cuisines do your Seminyak chefs cook?',
        a: 'Mediterranean tasting menus, traditional Balinese rice-table dinners, modern Asian fusion, wood-fired Italian, plant-based and vegan menus. Our chefs hold HACCP certification and adapt every menu to dietary requirements.',
      },
      {
        q: 'How far in advance should I book a private chef in Seminyak?',
        a: '1–3 days is ideal for private dinners; 2–4 weeks for events and catering. Peak season (July–August and December) books out quickly — the earlier you confirm, the better the chef and menu options.',
      },
    ],
    nearbyAreas: [
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'petitenget', name: 'Petitenget' },
      { slug: 'kerobokan', name: 'Kerobokan' },
      { slug: 'legian', name: 'Legian' },
      { slug: 'kuta', name: 'Kuta' },
    ],
    metaTitle: 'Private Chef in Seminyak, Bali | Hire a Chef for Your Villa | myCHEF',
    metaDescription:
      'Book a private chef in Seminyak, Bali. Villa dinners, fine dining, catering, and events. HACCP-certified chefs, transparent pricing from IDR 1.35M. WhatsApp myCHEF.',
    coordinates: { lat: -8.6748, lng: 115.1612 },
    bookingNote:
      'Book 1–3 days ahead for private dinners, 2–4 weeks for events. Peak season (July–August, December) fills fast.',
    published: true,
  },
  {
    slug: 'canggu',
    name: 'Canggu',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-canggu.webp',
    heroAlt: 'Balinese chef preparing poolside brunch at a modern Canggu villa with rice field views',
    intro:
      'Canggu is the epicentre of long-stay Bali life — surf families, digital nomads, and villa groups who want great food without restaurant queues. myCHEF cooks weekly meal prep for month-long stays, casual poolside lunches for 15, and Saturday night dinners that beat anything on Jl. Batu Bolong.',
    villaDensity:
      'Canggu has the fastest-growing villa stock in Bali — especially the Echo Beach, Batu Bolong, Berawa, and Pererenan corridors. Most villas are equipped with proper cooking kitchens.',
    guestProfile:
      'Long-stay digital nomad families, surf groups sharing a villa for a week, and health-conscious travellers who want consistent meal prep throughout their stay.',
    landmarks: [
      'Echo Beach',
      'Batu Bolong beach',
      'Jl. Pantai Batu Mejan',
      'Canggu Club',
      'Pasar Canggu',
      'Tanah Lot road corridor',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote:
      'Weekly meal prep packages from IDR 4,500,000 per week for 2 people. Group catering from IDR 560,000 per person. No travel surcharge within Canggu–Berawa.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Canggu?',
        a: 'Private chef sessions in Canggu start from IDR 1,350,000 (groceries billed at cost). Weekly meal prep packages for 2 people from IDR 4,500,000. Group catering from IDR 560,000 per person. Free quote via WhatsApp.',
      },
      {
        q: 'Can I hire a chef for my entire stay in Canggu?',
        a: 'Yes — weekly and monthly meal prep is one of our most popular services in Canggu. We create a meal plan, shop daily from local markets, and cook breakfast, lunch, or dinner on a schedule that fits your villa life.',
      },
      {
        q: 'Do you cater villa birthday parties and events in Canggu?',
        a: 'Absolutely. Villa birthday parties, beach BBQs, and group dinners up to 80 guests are a specialty in Canggu. We handle the menu, staff, setup, and cleanup — you enjoy the event.',
      },
      {
        q: 'Are there travel fees for Canggu?',
        a: 'No travel surcharge within the Canggu–Berawa–Batu Bolong corridor. For villas further towards Pererenan or Seseh, a small travel allowance applies — always quoted upfront.',
      },
      {
        q: 'Do you cater for vegan and plant-based diets in Canggu?',
        a: 'Yes. Canggu has one of Bali\'s most health-conscious guest profiles and we\'re very experienced with vegan, plant-based, gluten-free, and raw food menus. All dietary requirements are handled without extra charge.',
      },
    ],
    nearbyAreas: [
      { slug: 'berawa', name: 'Berawa' },
      { slug: 'pererenan', name: 'Pererenan' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'kerobokan', name: 'Kerobokan' },
      { slug: 'ubud', name: 'Ubud' },
    ],
    metaTitle: 'Private Chef in Canggu, Bali | Villa Dining & Meal Prep | myCHEF',
    metaDescription:
      'Book a private chef in Canggu, Bali. Weekly meal prep, villa dinners, catering, and birthday parties. HACCP-certified chefs, transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.6522, lng: 115.1279 },
    bookingNote:
      'Book 1–2 days ahead for single dinners. Weekly meal prep packages need 3–5 days lead time. Events need 2–4 weeks.',
    published: true,
  },
  {
    slug: 'ubud',
    name: 'Ubud',
    regency: 'Gianyar',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-ubud.webp',
    heroAlt: 'Balinese chef preparing a plant-based feast at a jungle villa in Ubud with rice terrace views',
    intro:
      'Ubud villas are spread through Sayan, Penestanan, and the rice terraces of Tegallalang — smaller, more private, often surrounded by jungle. myCHEF cooks plant-based menus for wellness retreats, authentic Balinese tasting dinners for first-time visitors, and full-board catering for yoga and creative programs.',
    villaDensity:
      'Ubud has 300+ boutique villas scattered across rice terraces and jungle ravines. Most are intimate 2–4 bedroom properties with outdoor kitchens or pavilions — perfect for private dining.',
    guestProfile:
      'Wellness travellers doing a yoga retreat or meditation programme, cultural tourists wanting to eat authentically Balinese, and creatives on longer stays who want consistent plant-based or whole-food cooking.',
    landmarks: [
      'Sayan Ridge',
      'Campuhan Ridge Walk',
      'Penestanan rice terraces',
      'Pasar Ubud (Ubud Market)',
      'Tegallalang rice fields',
      'Tjampuhan Hotel area',
    ],
    priceFrom: 'From IDR 1,500,000 per session',
    pricingNote:
      'A small travel allowance applies to villas beyond Ubud central — always quoted upfront. Retreat full-board packages quoted per head per day. 25% deposit confirms the booking.',
    services: ['private-chef', 'fine-dining', 'catering', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Ubud?',
        a: 'Private chef sessions in Ubud start from IDR 1,500,000 (a small travel allowance applies for remote jungle villas). Retreat full-board packages are quoted per person per day. Free quote via WhatsApp.',
      },
      {
        q: 'Do you cook for yoga retreats and wellness programs in Ubud?',
        a: 'Yes — retreat catering is one of our most common Ubud bookings. We design full-board plant-based, vegan, or Ayurvedic menus for 6–30 participants and cook twice or three times daily for the duration of the program.',
      },
      {
        q: 'Can I get a traditional Balinese dinner at my Ubud villa?',
        a: 'Absolutely. We cook authentic Balinese rijsttafel (rice table) dinners — nasi campur, lawar, sate lilit, bebek betutu, and seasonal vegetables sourced from Ubud\'s morning market. A genuine cultural experience at your table.',
      },
      {
        q: 'Do you travel to remote villas in Sayan and Penestanan?',
        a: 'Yes. We regularly cook at villas in Sayan, Penestanan, Campuhan, and Tegallalang. A travel allowance applies for very remote access points — always quoted before confirmation.',
      },
      {
        q: 'What plant-based and vegan options do you offer in Ubud?',
        a: 'Full vegan menus, raw food, macrobiotics, and Ayurvedic cooking are all available. Our Ubud chefs have extensive experience with plant-forward and whole-food approaches and source ingredients from local organic farms.',
      },
    ],
    nearbyAreas: [
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
    ],
    metaTitle: 'Private Chef in Ubud, Bali | Villa Dining & Retreat Catering | myCHEF',
    metaDescription:
      'Book a private chef in Ubud, Bali. Balinese tasting menus, plant-based retreat catering, and villa dinners. HACCP-certified chefs, transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.5069, lng: 115.2625 },
    bookingNote:
      'Book 2–3 days ahead for single dinners. Retreat programs need 1–2 weeks notice. Remote jungle villa access confirmed on booking.',
    published: true,
  },
  {
    slug: 'uluwatu',
    name: 'Uluwatu',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-uluwatu.webp',
    heroAlt: 'Private chef serving a seafood platter at a clifftop villa in Uluwatu with Indian Ocean views',
    intro:
      'Uluwatu villas hang on limestone cliffs above the Indian Ocean — the most dramatic villa setting in Bali. myCHEF brings fine dining that matches: freshly landed seafood, Wagyu under the stars, wine pairings timed to the sunset. We cook for elopements, surf group dinners, and clifftop weddings for 200 guests.',
    villaDensity:
      'The Uluwatu–Bingin–Padang Padang cliff belt has 150+ high-end villas built into the limestone. Most have outdoor dining areas engineered for the ocean view — spectacular settings for private dinners.',
    guestProfile:
      'Couples celebrating a honeymoon or elopement, surf groups sharing a premium villa, and wedding parties looking for a clifftop ceremony followed by a seated dinner.',
    landmarks: [
      'Uluwatu Temple (Pura Luhur)',
      'Bingin Beach',
      'Padang Padang Beach',
      'Dreamland Beach',
      'Suluban surf break',
      'Jl. Labuan Sait cliff road',
    ],
    priceFrom: 'From IDR 1,500,000 per session',
    pricingNote:
      'Clifftop fine dining tasting menus from IDR 1,100,000 per person. Wedding catering quoted per head. A travel allowance applies from our Seminyak base — always included in the quote.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Uluwatu?',
        a: 'Private chef sessions in Uluwatu start from IDR 1,500,000 (a travel allowance from our Seminyak base is included in all quotes). Fine dining tasting menus from IDR 1,100,000 per person. Free quote via WhatsApp.',
      },
      {
        q: 'Can I hire a private chef for a clifftop elopement dinner in Uluwatu?',
        a: 'Yes — clifftop elopement dinners are one of our signature Uluwatu experiences. We design the menu, bring the full table setup, and coordinate the timing with the sunset for you. Available for 2–10 guests.',
      },
      {
        q: 'Do you cater weddings in Uluwatu?',
        a: 'Yes. We cater Uluwatu clifftop weddings for 20–200 guests — cocktail receptions, seated plated dinners, and live buffet stations. We coordinate with your villa or venue coordinator and supply the full kitchen and service team.',
      },
      {
        q: 'Is there a travel fee from Seminyak to Uluwatu?',
        a: 'Yes — a travel allowance of around IDR 150,000–250,000 applies depending on the exact Uluwatu address. This is always quoted upfront and included in your total before you confirm.',
      },
      {
        q: 'What seafood options are available at my Uluwatu villa?',
        a: 'We source daily from the Kedonganan fish landing in Jimbaran — barramundi, lobster, prawns, snapper, crab, and local reef fish. Your seafood is caught the same morning we cook it. Custom seafood platters and BBQ grills are a speciality.',
      },
    ],
    nearbyAreas: [
      { slug: 'jimbaran', name: 'Jimbaran' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
      { slug: 'bukit', name: 'Bukit Peninsula' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'canggu', name: 'Canggu' },
    ],
    metaTitle: 'Private Chef in Uluwatu, Bali | Clifftop Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Uluwatu, Bali. Clifftop fine dining, wedding catering, and villa dinners. HACCP-certified chefs, transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.8293, lng: 115.0849 },
    bookingNote:
      'Book 2–3 days ahead for single dinners. Weddings and large events need 3–6 weeks. Travel time from Seminyak is 45–60 min — confirm your villa address on booking.',
    published: true,
  },
  {
    slug: 'jimbaran',
    name: 'Jimbaran',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-jimbaran.webp',
    heroAlt: 'Indonesian chef grilling fresh seafood at a Jimbaran villa with Jimbaran Bay in the background',
    intro:
      'Jimbaran is where Bali eats seafood — the bay\'s morning fish landing supplies the freshest barramundi, prawns, and lobster on the island. myCHEF brings the boat-to-villa supply chain directly to your table: fish landed at dawn, cooked at sunset, served with your feet near the sand.',
    villaDensity:
      'Jimbaran has a mix of clifftop resort villas on Jl. Uluwatu and beach-access properties along the bay. Many are large family estates built for multi-generational groups.',
    guestProfile:
      'Seafood-loving families, couples celebrating anniversaries, and resort guests who want a private dining upgrade from the hotel restaurants.',
    landmarks: [
      'Jimbaran Bay',
      'Kedonganan fish market',
      'Jl. Uluwatu (cliff road)',
      'Four Seasons Jimbaran',
      'Intercontinental Bali',
      'Jimbaran beach seafood grills',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote:
      'Seafood BBQ packages from IDR 720,000 per person (includes fresh catch, charcoal grill, full service). Fine dining from IDR 980,000 per person.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Jimbaran?',
        a: 'Private chef sessions in Jimbaran start from IDR 1,350,000. Seafood BBQ packages with fresh catch from IDR 720,000 per person. Fine dining tasting menus from IDR 980,000 per person. Free quote via WhatsApp.',
      },
      {
        q: 'Can I get fresh seafood cooked at my villa in Jimbaran?',
        a: 'Yes — this is our most popular Jimbaran service. We source from the Kedonganan fish landing each morning and cook the same evening at your villa. Choose your catch: barramundi, lobster, tiger prawns, snapper, or crab.',
      },
      {
        q: 'Do you do BBQ catering for villa parties in Jimbaran?',
        a: 'Absolutely. Villa BBQ parties with fresh seafood, satay, and grilled meats are a Jimbaran specialty. We bring the full setup — chef, charcoal grill, serving staff, and cleanup. Ideal for 8–40 guests.',
      },
      {
        q: 'Is Jimbaran the same as Uluwatu?',
        a: 'Jimbaran is at the base of the Uluwatu peninsula, on the bay. Uluwatu is on the clifftops 20 minutes south. Both areas are served by myCHEF. Jimbaran is known for its seafood culture and bay views; Uluwatu for its clifftop drama.',
      },
      {
        q: 'Do you cater for resort villa events in Jimbaran?',
        a: 'Yes. We regularly cater for villas in the Four Seasons, Intercontinental, and Karma Kandara resort complexes in Jimbaran. We coordinate with resort management and work within property guidelines.',
      },
    ],
    nearbyAreas: [
      { slug: 'uluwatu', name: 'Uluwatu' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
      { slug: 'bukit', name: 'Bukit Peninsula' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'kuta', name: 'Kuta' },
    ],
    metaTitle: 'Private Chef in Jimbaran, Bali | Seafood Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Jimbaran, Bali. Fresh seafood BBQ, fine dining, and villa events. Boat-to-villa seafood sourcing. Transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.7897, lng: 115.1683 },
    bookingNote:
      'Book 1–2 days ahead for private dinners and seafood BBQ. Seafood availability dependent on daily catch — confirm the day before.',
    published: true,
  },
  {
    slug: 'nusa-dua',
    name: 'Nusa Dua',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-nusa-dua.webp',
    heroAlt: 'Private chef serving a formal plated course at a Nusa Dua luxury estate with pool and ocean view',
    intro:
      'Nusa Dua is the home of Bali\'s five-star resort enclave — gated estates, polished hospitality, and a guest profile that expects precision. myCHEF caters corporate retreats, executive private dinners, and high-end residential events with the same exacting standards as the surrounding five-star kitchens.',
    villaDensity:
      'Nusa Dua\'s ITDC resort zone has some of the largest villa estates in Bali — 5+ bedroom properties with full kitchens, private pools, and event spaces. Many are used for corporate and incentive travel.',
    guestProfile:
      'Corporate retreat groups using incentive travel villas, high-net-worth families on multi-generational holidays, and luxury honeymooners who want a private dining upgrade from their five-star resort.',
    landmarks: [
      'ITDC resort complex',
      'Nusa Dua Beach',
      'Bali International Convention Centre',
      'Tanjung Benoa peninsula',
      'Pandanus Beach',
      'Grand Hyatt Bali',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote:
      'Corporate retreat catering quoted per person per day (full board available). Executive fine dining from IDR 1,200,000 per person. 25% deposit confirms the booking.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Nusa Dua?',
        a: 'Private chef sessions in Nusa Dua start from IDR 1,350,000. Corporate full-board catering is quoted per person per day. Executive fine dining from IDR 1,200,000 per person. Free quote via WhatsApp.',
      },
      {
        q: 'Do you cater corporate retreats and incentive travel in Nusa Dua?',
        a: 'Yes — corporate retreat catering is one of our main Nusa Dua services. We cater teambuilding dinners, executive lunches, conference refreshments, and end-of-program gala dinners for groups of 10–200 people.',
      },
      {
        q: 'Can I hire a private chef at an ITDC resort villa?',
        a: 'Yes. We are experienced working within the ITDC resort complex — we coordinate with property management, comply with access procedures, and bring a fully equipped team. We can serve villas in Grand Hyatt, Melia, St. Regis, and surrounding estates.',
      },
      {
        q: 'Do you offer wine service and sommelier pairing in Nusa Dua?',
        a: 'Yes. Our fine dining service in Nusa Dua includes optional sommelier wine pairing — we curate a wine list aligned to the menu and guest preferences. Custom champagne and cocktail service also available.',
      },
      {
        q: 'Is Tanjung Benoa the same as Nusa Dua?',
        a: 'Tanjung Benoa is the narrow peninsula directly north of Nusa Dua, about 10–15 minutes away. myCHEF serves both areas. Nusa Dua is the five-star resort enclave; Tanjung Benoa has a mix of boutique resorts and private villas.',
      },
    ],
    nearbyAreas: [
      { slug: 'jimbaran', name: 'Jimbaran' },
      { slug: 'uluwatu', name: 'Uluwatu' },
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'kuta', name: 'Kuta' },
    ],
    metaTitle: 'Private Chef in Nusa Dua, Bali | Corporate & Luxury Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Nusa Dua, Bali. Corporate retreat catering, executive fine dining, and villa events. Five-star service, transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.8007, lng: 115.2302 },
    bookingNote:
      'Book 2–3 days ahead for private dinners. Corporate retreat programs need 1–2 weeks. ITDC villa access requires advance coordination — confirm property details on booking.',
    published: true,
  },
  {
    slug: 'sanur',
    name: 'Sanur',
    regency: 'Denpasar',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-sanur.webp',
    heroAlt: 'Private chef setting a multi-generational family dinner table at a Sanur villa with sunrise beach views',
    intro:
      'Sanur is Bali\'s relaxed east-coast beach town — calmer surf, multi-generational family villas, and a guest profile that values consistency over spectacle. myCHEF cooks gentle, classic menus here: handmade pasta, fresh reef fish, traditional Balinese, and weekly meal plans that handle three generations of dietary preferences.',
    villaDensity:
      'Sanur has a settled villa market — mostly large 3–5 bedroom family homes along the beachside corridors and Bypass Ngurah Rai. Many are long-term rental properties used by expat families.',
    guestProfile:
      'Multi-generational families on a 2-week Bali holiday, expat residents who want recurring private chef service, and older couples who prefer Sanur\'s quieter pace to Seminyak\'s bustle.',
    landmarks: [
      'Sanur Beach promenade',
      'Pasar Sindhu market',
      'Le Mayeur Museum',
      'Jl. Danau Tamblingan',
      'Matahari beach',
      'Sanur night market',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote:
      'Weekly meal prep for 2–4 people from IDR 4,500,000 per week. Family catering for larger groups from IDR 560,000 per person. No travel surcharge within Sanur.',
    services: ['private-chef', 'fine-dining', 'catering', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Sanur?',
        a: 'Private chef sessions in Sanur start from IDR 1,350,000 with no travel surcharge. Weekly meal prep for 2–4 people from IDR 4,500,000 per week. Family catering from IDR 560,000 per person. Free quote via WhatsApp.',
      },
      {
        q: 'Do you offer weekly meal prep in Sanur?',
        a: 'Yes — recurring weekly meal prep is very popular with Sanur\'s expat and long-stay community. We design a rotating weekly menu, shop Pasar Sindhu each morning, and cook daily at your villa on your schedule.',
      },
      {
        q: 'Can you cook for a multi-generational family with different dietary needs?',
        a: 'Absolutely. Our chefs are experienced managing multiple dietary requirements in one sitting — gluten-free for one grandparent, vegan for the adult children, child-friendly for the grandkids. We customise every course at no extra charge.',
      },
      {
        q: 'Is Sanur far from Ubud and Canggu?',
        a: 'Sanur is 45 minutes to Ubud and 40 minutes to Canggu by car. We operate across all three areas — if your itinerary covers Sanur and Ubud, we can coordinate chef service at both locations.',
      },
      {
        q: 'Do you work with expat residents in Sanur for regular chef service?',
        a: 'Yes. Many of our Sanur clients are long-term residents who use myCHEF 3–5 times per week. We accommodate recurring schedules, standing weekly menus, and special event dinners on request.',
      },
    ],
    nearbyAreas: [
      { slug: 'ubud', name: 'Ubud' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
      { slug: 'denpasar', name: 'Denpasar' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'canggu', name: 'Canggu' },
    ],
    metaTitle: 'Private Chef in Sanur, Bali | Family Villa Dining & Meal Prep | myCHEF',
    metaDescription:
      'Book a private chef in Sanur, Bali. Family villa dinners, weekly meal prep, and event catering. HACCP-certified chefs, transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.7042, lng: 115.2607 },
    bookingNote:
      'Book 1–2 days ahead for private dinners. Weekly meal prep packages start on Monday — confirm by the Friday before.',
    published: true,
  },
  {
    slug: 'denpasar',
    name: 'Denpasar',
    regency: 'Denpasar',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-denpasar.webp',
    heroAlt: 'Private chef preparing Indonesian and Balinese cuisine at a Denpasar residential kitchen',
    intro:
      'Denpasar is Bali\'s capital and its urban core — a city of working professionals, residential expats, and a growing premium dining market. myCHEF serves Denpasar for executive dinner parties, corporate catering, household meal prep, and milestone celebrations in the city\'s residential villas and penthouses.',
    villaDensity:
      'Denpasar has a mix of residential estates and upmarket apartments in Renon, Sanglah, and the Gatot Subroto corridor. Villa rentals are less common than in tourist Bali but the private household dining market is substantial.',
    guestProfile:
      'Balinese and Indonesian professionals hosting dinner parties, expatriate households wanting regular chef service, and companies catering for internal events and client meetings.',
    landmarks: [
      'Renon district',
      'Bajra Sandhi Monument',
      'Jl. Gatot Subroto',
      'Bali Nusa Dua Convention Centre',
      'Pasar Badung',
      'Ngurah Rai International Airport corridor',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote:
      'Executive dinner catering from IDR 750,000 per person. Corporate event catering quoted per head. Household weekly meal prep from IDR 4,500,000 per week.',
    services: ['private-chef', 'catering', 'events', 'staffing'],
    faqs: [
      {
        q: 'Do you cook private chef dinners in Denpasar?',
        a: 'Yes. myCHEF serves the Denpasar city area for private dinner parties, executive dining, household meal prep, and corporate event catering. Same HACCP-certified chefs, same transparent pricing as our Bali villa service.',
      },
      {
        q: 'How much does a private chef cost in Denpasar?',
        a: 'Private chef sessions in Denpasar start from IDR 1,350,000. Executive dinner catering from IDR 750,000 per person. Corporate event catering is quoted per head based on menu and guest count.',
      },
      {
        q: 'Do you cater corporate events in Denpasar?',
        a: 'Yes. We cater boardroom lunches, networking dinners, company celebrations, and client entertainment events in Denpasar. Full service team with kitchen, serving staff, and equipment.',
      },
      {
        q: 'Is there a travel fee for Denpasar?',
        a: 'A small travel allowance may apply depending on the exact address in Denpasar. This is always quoted upfront and included in your total before confirmation.',
      },
    ],
    nearbyAreas: [
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
      { slug: 'canggu', name: 'Canggu' },
    ],
    metaTitle: 'Private Chef in Denpasar, Bali | Executive & Residential Dining | myCHEF',
    metaDescription:
      'Book a private chef in Denpasar, Bali. Executive dinner parties, corporate catering, and household meal prep. Transparent pricing, HACCP-certified. WhatsApp myCHEF.',
    coordinates: { lat: -8.6705, lng: 115.2126 },
    bookingNote:
      'Book 1–3 days ahead. Corporate events need 1–2 weeks minimum. Airport transfers can be coordinated on request.',
    published: true,
  },
  // ─── Tier 1 Sub-areas ──────────────────────────────────────────────────────
  {
    slug: 'berawa',
    name: 'Berawa',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-berawa.webp',
    heroAlt: 'Private chef setting up a poolside dinner at a modern Berawa villa with rice field horizon',
    intro:
      'Berawa is Canggu\'s quieter, more design-led neighbour — newer villas, better kitchens, and a guest profile that leans health-conscious and long-stay. myCHEF cooks villa birthday parties for 20–60 guests, weekly meal prep for surf families, and Saturday dinner experiences that feel worlds away from the beach club scene.',
    villaDensity:
      'Berawa has seen rapid villa development in the last 5 years — architect-designed properties with full cook-and-entertain layouts. Many feature open-plan kitchens that chefs love to work in.',
    guestProfile:
      'Design-conscious villa groups, health-focused surf travellers, and long-stay digital nomads who want meal prep without compromising on quality or variety.',
    landmarks: [
      'Berawa Beach',
      'Finns Beach Club',
      'Jl. Pantai Berawa',
      'Echo Beach corridor',
      'Berawa rice fields',
      'Jl. Subak Canggu',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote:
      'No travel surcharge within Berawa. Weekly meal prep from IDR 4,500,000 per week. Group catering from IDR 560,000 per person.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Berawa?',
        a: 'Private chef sessions in Berawa start from IDR 1,350,000 with no travel surcharge. Group catering from IDR 560,000 per person. Free quote via WhatsApp.',
      },
      {
        q: 'Is Berawa the same as Canggu?',
        a: 'Berawa is a neighbourhood within the greater Canggu area, about 2 km north of Batu Bolong beach. It has a slightly quieter and more residential character than central Canggu. myCHEF serves the entire Canggu–Berawa corridor with no additional travel charge.',
      },
      {
        q: 'Do you cater villa birthday parties in Berawa?',
        a: 'Yes — villa birthday parties for 20–60 guests are a popular booking in Berawa. We bring the full setup: chef, sous chef, waiters, bartender, decorations-friendly service, and complete cleanup.',
      },
    ],
    nearbyAreas: [
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'pererenan', name: 'Pererenan' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'kerobokan', name: 'Kerobokan' },
    ],
    metaTitle: 'Private Chef in Berawa, Bali | Villa Dining & Birthday Catering | myCHEF',
    metaDescription:
      'Book a private chef in Berawa, Bali. Villa birthday parties, weekly meal prep, and fine dining. HACCP-certified chefs, transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.6437, lng: 115.1261 },
    bookingNote: 'Book 1–2 days ahead for dinners, 1–2 weeks for villa birthday parties.',
    published: true,
  },
  {
    slug: 'pererenan',
    name: 'Pererenan',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-pererenan.webp',
    heroAlt: 'Chef preparing romantic dinner at a secluded Pererenan villa at dusk',
    intro:
      'Pererenan is what Canggu was before the beach clubs arrived — quieter surf breaks, architect-designed villas, and a guest profile who came for the privacy. myCHEF cooks romantic dinners, small-group fine dining, and weekly meal prep for the long-stayers who chose Pererenan specifically to escape the noise.',
    villaDensity:
      'Pererenan has emerging high-end villa stock — newer builds, often with private rice field or ocean views. Villas here tend to be more spacious and more isolated than central Canggu.',
    guestProfile:
      'Couples on a longer Bali stay seeking privacy, digital nomads who want quieter surroundings, and small groups of friends sharing a design villa for a week.',
    landmarks: [
      'Pererenan Beach',
      'Jl. Pererenan',
      'Yeh Gangga Beach',
      'Seseh village',
      'Echo Beach (northern end)',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote:
      'A small travel allowance applies for very remote Pererenan addresses. Always included in the quote before confirmation.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Do you serve private chefs in Pererenan?',
        a: 'Yes. myCHEF covers the Pererenan corridor regularly. A small travel allowance applies for addresses beyond the main Jl. Pererenan — always quoted upfront.',
      },
      {
        q: 'How is Pererenan different from Canggu for private chef bookings?',
        a: 'Pererenan is quieter and more remote. Villas tend to be larger and more private. myCHEF provides the same service quality but travel times are slightly longer — factor in an extra 10–15 minutes from our Seminyak base.',
      },
    ],
    nearbyAreas: [
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'berawa', name: 'Berawa' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'ubud', name: 'Ubud' },
    ],
    metaTitle: 'Private Chef in Pererenan, Bali | Villa Dining & Meal Prep | myCHEF',
    metaDescription:
      'Book a private chef in Pererenan, Bali. Private villa dinners, meal prep, and small-group fine dining. HACCP-certified, transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.6338, lng: 115.1140 },
    bookingNote: 'Book 1–2 days ahead. Confirm your villa address for accurate travel time and allowance.',
    published: true,
  },
  {
    slug: 'kerobokan',
    name: 'Kerobokan',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-seminyak.webp',
    heroAlt: 'Private chef preparing a dinner at a Kerobokan villa with garden terrace',
    intro:
      'Kerobokan sits between Seminyak and Canggu — an easy-to-reach area with a dense mix of residential villas, long-stay rentals, and a resident expat community. myCHEF cooks here for recurring household meal prep, family dinner parties, and villa events in one of Bali\'s most lived-in neighbourhoods.',
    villaDensity:
      'Kerobokan is heavily residential — a blend of Balinese compound homes, expat rental villas, and newer boutique properties along the rice field edges. Excellent kitchens are common.',
    guestProfile:
      'Expat residents needing regular private chef service, families on longer Bali stays, and villa groups who want the convenience of Seminyak proximity without the premium pricing.',
    landmarks: [
      'Jl. Raya Kerobokan',
      'Kerobokan rice fields',
      'Eat Street Seminyak border',
      'Jl. Umalas',
      'Bali Zoo vicinity',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote:
      'No travel surcharge within Kerobokan. Same pricing as central Seminyak.',
    services: ['private-chef', 'catering', 'events', 'staffing'],
    faqs: [
      {
        q: 'Do you serve private chefs in Kerobokan?',
        a: 'Yes. Kerobokan is served with no travel surcharge — same pricing as Seminyak. We cover the full Kerobokan area including Umalas and the Jl. Raya Kerobokan corridor.',
      },
      {
        q: 'Is Kerobokan good for recurring private chef service?',
        a: 'Yes — Kerobokan\'s expat resident community is one of our most consistent recurring booking areas. We set up weekly or bi-weekly schedules and adapt menus based on what\'s fresh at the Seminyak market that morning.',
      },
    ],
    nearbyAreas: [
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'berawa', name: 'Berawa' },
      { slug: 'petitenget', name: 'Petitenget' },
    ],
    metaTitle: 'Private Chef in Kerobokan, Bali | Residential Dining & Meal Prep | myCHEF',
    metaDescription:
      'Book a private chef in Kerobokan, Bali. Regular household meal prep, dinner parties, and villa events. Transparent pricing, HACCP-certified. WhatsApp myCHEF.',
    coordinates: { lat: -8.6631, lng: 115.1542 },
    bookingNote: 'Book 1–2 days ahead for dinners. Weekly meal prep confirmed on Fridays for the following week.',
    published: true,
  },
  {
    slug: 'petitenget',
    name: 'Petitenget',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-seminyak.webp',
    heroAlt: 'Private chef serving fine dining at a Petitenget villa beachfront',
    intro:
      'Petitenget is Seminyak\'s most prestigious corridor — the Oberoi strip, beachfront temple, and the road that birthed Bali\'s fine dining scene. myCHEF cooks intimate tasting menus and romantic dinners for couples staying in the high-end villas along Jl. Petitenget, where privacy and quality are the non-negotiables.',
    villaDensity:
      'The Petitenget strip is the densest concentration of premium villas in Bali — 5-star private estates, high-thread-count linens, and kitchens designed to host fine dining.',
    guestProfile:
      'Honeymooners in premium villas, anniversary couples, and high-net-worth travellers who chose Petitenget specifically for its quality and proximity to the ocean.',
    landmarks: [
      'Pura Petitenget temple',
      'Jl. Petitenget',
      'Oberoi beach corridor',
      'Potato Head Beach Club',
      'La Plancha',
      'Petitenget beach',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote: 'No travel surcharge. Petitenget is within our core Seminyak service area.',
    services: ['private-chef', 'fine-dining', 'catering', 'events', 'staffing'],
    faqs: [
      {
        q: 'Do you serve private chefs in Petitenget?',
        a: 'Yes. Petitenget is within our core Seminyak area — no travel surcharge. We specialise in fine dining tasting menus and romantic villa dinners along the Jl. Petitenget corridor.',
      },
    ],
    nearbyAreas: [
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'kerobokan', name: 'Kerobokan' },
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'legian', name: 'Legian' },
    ],
    metaTitle: 'Private Chef in Petitenget, Bali | Fine Dining at Your Villa | myCHEF',
    metaDescription:
      'Book a private chef in Petitenget, Bali. Fine dining tasting menus and romantic villa dinners. HACCP-certified chefs, transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.6772, lng: 115.1600 },
    bookingNote: 'Book 1–3 days ahead for fine dining. Same availability as Seminyak.',
    published: true,
  },
  {
    slug: 'kuta',
    name: 'Kuta',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-kuta.webp',
    heroAlt: 'Private chef preparing a casual villa dinner in Kuta, Bali',
    intro:
      'Kuta is Bali\'s original tourist hub — fast-paced, high-volume, and home to a growing base of private villa rentals away from the main strip. myCHEF serves Kuta for villa group dinners, birthday party catering, and travellers who want the convenience of central Bali without the Seminyak price tag.',
    villaDensity:
      'Kuta has a dense mix of tourist accommodation and increasingly private villa rentals. Villas are typically more affordable and well-located for airport convenience.',
    guestProfile:
      'Budget-conscious villa groups, airport-nearby pre/post-trip stays, and short-stay travellers who want a private dinner experience without commitment to a premium area.',
    landmarks: [
      'Kuta Beach',
      'Jl. Legian',
      'Kuta Square',
      'Ngurah Rai Airport corridor',
      'Discovery Shopping Mall',
      'Bemo Corner',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote:
      'No travel surcharge within Kuta. Great value for central Bali villa groups.',
    services: ['private-chef', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Do you serve private chefs in Kuta?',
        a: 'Yes. myCHEF covers Kuta with no travel surcharge. We serve villa groups, birthday parties, and casual poolside catering in the Kuta–Legian corridor.',
      },
      {
        q: 'Is a private chef in Kuta the same price as Seminyak?',
        a: 'Yes — private chef pricing is the same across Seminyak, Kuta, Legian, and Kerobokan. Starting from IDR 1,350,000 per session with no travel surcharge.',
      },
    ],
    nearbyAreas: [
      { slug: 'legian', name: 'Legian' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'jimbaran', name: 'Jimbaran' },
      { slug: 'canggu', name: 'Canggu' },
    ],
    metaTitle: 'Private Chef in Kuta, Bali | Villa Dinner & Catering | myCHEF',
    metaDescription:
      'Book a private chef in Kuta, Bali. Villa dinners, group catering, and birthday parties. HACCP-certified chefs, transparent pricing from IDR 1.35M. WhatsApp myCHEF.',
    coordinates: { lat: -8.7175, lng: 115.1686 },
    bookingNote: 'Book 1–2 days ahead. Airport transfers can be arranged for arriving guests.',
    published: true,
  },
  {
    slug: 'legian',
    name: 'Legian',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-seminyak.webp',
    heroAlt: 'Private chef catering a villa group dinner in Legian, Bali',
    intro:
      'Legian sits between Kuta and Seminyak — a compact, easy-to-navigate strip with a good selection of villa rentals and a loyal returning visitor base. myCHEF cooks villa group dinners, pre-trip welcome dinners, and poolside lunches for travellers who pick Legian for its central convenience.',
    villaDensity:
      'Legian has a mid-range villa stock — practical 2–4 bedroom properties with good amenities, ideal for small friend groups or families who want a base between the airport and Seminyak.',
    guestProfile:
      'Returning Bali visitors who know Legian well, short-stay groups, and families wanting villa convenience at a central Bali location.',
    landmarks: [
      'Legian Beach',
      'Jl. Legian main strip',
      'Double Six Beach',
      'Hard Rock Café area',
      'Legian night market',
    ],
    priceFrom: 'From IDR 1,350,000 per session',
    pricingNote: 'No travel surcharge. Legian pricing is the same as Seminyak.',
    services: ['private-chef', 'catering', 'events'],
    faqs: [
      {
        q: 'Do you serve private chefs in Legian?',
        a: 'Yes. Legian is within our core South Bali service area. No travel surcharge — same pricing as Seminyak from IDR 1,350,000 per session.',
      },
    ],
    nearbyAreas: [
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'kuta', name: 'Kuta' },
      { slug: 'canggu', name: 'Canggu' },
    ],
    metaTitle: 'Private Chef in Legian, Bali | Villa Dining & Catering | myCHEF',
    metaDescription:
      'Book a private chef in Legian, Bali. Villa group dinners, poolside catering, and event service. HACCP-certified, transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.7012, lng: 115.1677 },
    bookingNote: 'Book 1–2 days ahead. Same availability as Seminyak.',
    published: true,
  },
  {
    slug: 'bukit',
    name: 'Bukit Peninsula',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-bukit.webp',
    heroAlt: 'Private chef setting a candlelit dinner on a clifftop terrace at a Bukit Peninsula villa',
    intro:
      'The Bukit Peninsula is Bali\'s dramatic southern limestone plateau — Bingin, Padang Padang, Dreamland, and the chain of clifftop villas that define luxury Bali. myCHEF cooks here for elopements, honeymoon dinners, surf group celebrations, and anniversary parties at the island\'s most spectacular private addresses.',
    villaDensity:
      'The Bukit has a concentration of cliffside and hilltop luxury villas built into the limestone escarpment. Access can be steep but the views are unmatched anywhere in Bali.',
    guestProfile:
      'Honeymooners and elopement couples, premium villa renters celebrating milestone occasions, and surf groups staying for a week in a clifftop villa.',
    landmarks: [
      'Bingin Beach',
      'Padang Padang Beach',
      'Dreamland Beach',
      'Nyang Nyang Beach',
      'Thomas Beach',
      'Jl. Labuan Sait',
    ],
    priceFrom: 'From IDR 1,500,000 per session',
    pricingNote:
      'Travel allowance applies from our Seminyak base. Clifftop fine dining from IDR 1,100,000 per person. Always quoted upfront.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Do you cook private chef dinners at Bukit Peninsula villas?',
        a: 'Yes. We regularly cook at clifftop villas in Bingin, Padang Padang, Dreamland, and Nyang Nyang. A travel allowance from Seminyak is included in all quotes.',
      },
      {
        q: 'What is the difference between Bukit Peninsula and Uluwatu for private chef bookings?',
        a: 'Uluwatu refers specifically to the area around Pura Luhur temple. The Bukit Peninsula covers the whole southern plateau including Bingin, Padang Padang, Dreamland, and Ungasan. myCHEF serves the entire Bukit area.',
      },
    ],
    nearbyAreas: [
      { slug: 'uluwatu', name: 'Uluwatu' },
      { slug: 'jimbaran', name: 'Jimbaran' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
      { slug: 'seminyak', name: 'Seminyak' },
    ],
    metaTitle: 'Private Chef in Bukit Peninsula, Bali | Clifftop Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef at Bukit Peninsula, Bali. Clifftop fine dining, elopement dinners, and villa events in Bingin, Padang Padang & Dreamland. WhatsApp myCHEF.',
    coordinates: { lat: -8.8100, lng: 115.1000 },
    bookingNote:
      'Book 2–3 days ahead. Access to steep clifftop villas confirmed on booking — travel time and allowance quoted per address.',
    published: true,
  },
]

/** Quick lookup by slug */
export function getPrivateChefArea(slug: string): PrivateChefArea | undefined {
  return PRIVATE_CHEF_AREAS.find((a) => a.slug === slug && a.published)
}

/** All published area slugs — for route generation and sitemap */
export const PUBLISHED_AREA_SLUGS: string[] = PRIVATE_CHEF_AREAS.filter((a) => a.published).map(
  (a) => a.slug
)
