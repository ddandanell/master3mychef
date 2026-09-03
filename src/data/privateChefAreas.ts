/**
 * Area data for the /private-chef/[slug] landing page system.
 * Each record drives every section of PrivateChefAreaPage.tsx.
 * `published: false` gates a page from routing until supply is confirmed.
 */

import { siteFacts } from './siteFacts'

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
    heroImage: '/generated/mychef-private-chef-area-seminyak-hero.webp',
    heroAlt: 'Private chef plating a fine dining course at a luxury Seminyak villa pool at sunset',
    intro:
      `Seminyak is where Bali's villa dining culture began — the Petitenget road, the Oberoi corridor, and a dense belt of five-star private estates a short walk from the beach. The people staying here know what they want: couples marking an anniversary or honeymoon, friends splitting a design villa for a long weekend, families who came for the restaurant scene but want one evening no restaurant can give them. That evening is what we cook. A myCHEF private chef in Seminyak shops that morning, cooks in your villa kitchen, serves at your table and leaves the kitchen spotless — whether it's a tasting menu for two beside the pool or a staffed dinner for thirty on the terrace.`,
    villaDensity:
      `Seminyak has the highest concentration of private pool villas in Bali. The Oberoi–Petitenget strip alone holds 200+ rentable luxury villas within two kilometres of the beach.`,
    guestProfile:
      `Villa groups, couples celebrating anniversaries or honeymoons, expats and event hosts across Seminyak, Petitenget, Oberoi and the beachfront strip.`,
    landmarks: [
      'Petitenget',
      'Oberoi (Jl. Kayu Aya)',
      'Seminyak Beach & La Plancha stretch',
      'Batu Belig edge',
      'Kerobokan & Umalas fringe',
      'Legian border',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Villa catering from IDR 700,000 per person. Tasting menus from IDR 980,000 per person. A 50% deposit secures your date; the remaining 50% is due the day before the event.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Seminyak?',
        a: `Stay chef starts at a full day of staff from IDR 2,700,000++ (one chef and one dedicated assistant) plus groceries at cost with receipts. Group catering runs from IDR 700,000 per person and tasting menus from IDR 980,000 per person. Prices are subject to a 10% service charge and 11% tax. Your itemised quote is fixed before you commit.`,
      },
      {
        q: 'Is there a travel fee for Seminyak villas?',
        a: `Travel within Seminyak, Petitenget and Oberoi is part of our core service zone; any allowance beyond it is always quoted upfront before you confirm.`,
      },
      {
        q: 'Can you time dinner to the Seminyak sunset?',
        a: `Yes — the beach faces due west, and sunset courses are one of our most-requested formats. Tell us your villa's aspect and we'll pace the menu so the main course lands just after the sun drops.`,
      },
      {
        q: 'Do you cook for kids and families?',
        a: `Absolutely — child-friendly plates, earlier seatings and split menus (kids first, tasting menu for the adults after) are standard, at no extra charge.`,
      },
      {
        q: 'Can you cater a villa party or large group in Seminyak?',
        a: `Yes — groups of 8 to 100+ guests with the full team: chef, sous chef, waiters, bartender and equipment. Local villas with large pools and terraces comfortably host 60–80.`,
      },
      {
        q: 'Will our villa or its management allow a private chef?',
        a: `In almost all cases, yes. We coordinate access and house rules with your villa manager before the day, bring our own equipment where kitchens are compact, and leave everything as we found it.`,
      },
      {
        q: 'How far in advance should I book?',
        a: `1–3 days is ideal for dinners, 2–4 weeks for events — and same-day requests are often possible. The earlier you confirm in peak season, the better your chef and menu options.`,
      },
    ],
    nearbyAreas: [
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'petitenget', name: 'Petitenget' },
      { slug: 'kerobokan', name: 'Kerobokan' },
      { slug: 'legian', name: 'Legian' },
      { slug: 'kuta', name: 'Kuta' },
    ],
    metaTitle: 'Private Chef Seminyak Bali | Hire for Your Villa | myCHEF',
    metaDescription:
      'Hire a private chef in Seminyak, Bali. Villa dinners, tasting menus and events from IDR 700K/person. HACCP-certified chefs with fixed quotes via WhatsApp.',
    coordinates: { lat: -8.6748, lng: 115.1612 },
    bookingNote:
      'Book 1–3 days ahead for private dinners, 2–4 weeks for events. Peak season (July–August, December) fills fast — same-day bookings are often possible.',
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
      `Canggu runs on a different clock to the rest of Bali. Surf before breakfast, laptop until four, dinner whenever the light goes. The people staying here — surf families sharing a villa for a month, digital nomads on their third Bali winter, groups of friends splitting a Berawa compound — don't want a reservation. They want food that fits the house: a Saturday dinner that beats anything on Jl. Batu Bolong, a poolside lunch for fifteen, or a chef who quietly handles the whole week's eating. That's our version of the service here. A private chef in Canggu from myCHEF cooks in your kitchen on your schedule — one memorable night, or every day of your stay.`,
    villaDensity:
      `Canggu has the fastest-growing villa stock in Bali — especially along Echo Beach, Batu Bolong and Berawa — and most kitchens here are genuinely good to cook in.`,
    guestProfile:
      `Surf families, digital nomads, health-conscious long-stayers, expats and villa groups who want great food without restaurant queues.`,
    landmarks: [
      'Batu Bolong',
      'Echo Beach',
      'Berawa',
      'Pererenan border',
      'Tibubeneng & the Tanah Lot road corridor',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      `Weekly chef service from IDR 900,000++ per day at the weekly rate (10% off standard). No travel surcharge within the Canggu–Berawa–Batu Bolong corridor.`,
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Canggu?',
        a: `Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost. Group catering from IDR 700,000 per person, tasting menus from IDR 980,000, weekly stay chef from IDR 2,430,000++ per day at the weekly rate. Prices are subject to a 10% service charge and 11% tax, quoted as one fixed figure.`,
      },
      {
        q: 'Are there travel fees for Canggu?',
        a: `No travel surcharge within the Canggu–Berawa–Batu Bolong corridor. Villas further toward Pererenan or Seseh carry a small travel allowance — always quoted upfront before you confirm.`,
      },
      {
        q: 'Can I hire a chef for my entire stay in Canggu?',
        a: `Yes — weekly and monthly meal prep is one of our most popular services here. We design a meal plan, shop daily from local markets, and cook breakfast, lunch or dinner on a schedule that fits your villa life.`,
      },
      {
        q: 'Do you cater vegan and plant-based diets?',
        a: `Extensively. Vegan, plant-based, gluten-free and raw menus are core to what we cook here — at no extra charge.`,
      },
      {
        q: 'Can you cook for a surf family with kids?',
        a: `All the time. Early seatings after the beach, child-friendly plates alongside the adult menu, and flexible timing around naps and tides. Kids' needs are priced into the quote, not added on.`,
      },
      {
        q: 'Do you cater birthday parties and events in Canggu?',
        a: `Yes — villa birthdays, beach BBQs and group dinners up to 80 guests are a specialty of ours in the area. We bring the full setup: chef, staff, equipment and complete cleanup, so the host actually relaxes.`,
      },
      {
        q: 'How far ahead should I book?',
        a: `1–2 days for dinners, 3–5 days for weekly plans, 2–4 weeks for events — earlier in the busy months, though short-notice requests are often possible.`,
      },
    ],
    nearbyAreas: [
      { slug: 'berawa', name: 'Berawa' },
      { slug: 'pererenan', name: 'Pererenan' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'kerobokan', name: 'Kerobokan' },
      { slug: 'ubud', name: 'Ubud' },
    ],
    metaTitle: 'Private Chef Canggu Bali | Villa Hire & BBQ | myCHEF',
    metaDescription:
      'Hire a private chef in Canggu, Bali. Weekly meal prep, villa dinners, catering and birthday parties. HACCP-certified chefs with transparent rates. WhatsApp.',
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
      `Ubud's villas don't sit on a strip — they're scattered through Sayan, Penestanan and the rice terraces of Tegallalang: smaller, more private, often wrapped in jungle. The people in them come for a reason. A week of yoga and meditation. A first trip to Bali that should taste like Bali. A month of writing or painting that runs on clean, consistent food rather than restaurant logistics. A myCHEF private chef in Ubud cooks to all three: plant-based menus for wellness programmes, authentic Balinese tasting dinners for travellers who want the real table, and quiet, excellent dinners for couples in jungle villas.`,
    villaDensity:
      `Ubud holds 300+ boutique villas across rice terraces and jungle ravines — most built for outdoor dining, yoga decks and private chef evenings.`,
    guestProfile:
      `Wellness and retreat guests on multi-day programmes, couples in jungle villas, cultural travellers, plant-based diners, and creatives on longer Ubud stays who want consistent in-villa cooking.`,
    landmarks: [
      'Sayan',
      'Penestanan',
      'Campuhan',
      'Tegallalang',
      'Ubud central / Pasar Ubud',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'A small travel allowance applies for villas beyond Ubud central — always quoted upfront. Retreat full-board quoted per person per day. A 50% deposit confirms your date.',
    services: ['private-chef', 'fine-dining', 'catering', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Ubud?',
        a: `Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost — remote-villa logistics may add a premium, always quoted upfront. Group catering from IDR 700,000 per person, tasting menus from IDR 980,000, retreat full-board quoted per person per day. Prices are subject to a 10% service charge and 11% tax.`,
      },
      {
        q: 'Is there a travel fee for Sayan, Penestanan or Tegallalang?',
        a: `We cook in all three regularly. A small travel allowance applies for villas beyond Ubud central and for very remote access points — always quoted before confirmation, never added afterwards.`,
      },
      {
        q: 'Do you cater yoga retreats and wellness programmes?',
        a: `Yes — retreat catering is one of our most common Ubud bookings. We design full-board plant-based, vegan or Ayurvedic menus for 6–30 participants and cook two or three times daily for the programme's duration.`,
      },
      {
        q: 'Can you cook a traditional Balinese dinner at our villa?',
        a: `Absolutely — the rijsttafel: nasi campur, lawar, sate lilit, bebek betutu and market vegetables, served family-style. A genuine cultural dinner at your own table.`,
      },
      {
        q: 'Do you cook for families with children?',
        a: `Yes. Jungle villas are wonderful for family dinners — child-friendly plates, flexible timing and mild versions of Balinese dishes are all standard at no extra charge.`,
      },
      {
        q: 'What group sizes work in Ubud villas?',
        a: `Most Ubud properties are intimate, which suits dinners of 2–10 beautifully; we cater groups up to 30 and retreat programmes in that range. For larger events we'll advise on the right format for your villa's layout.`,
      },
      {
        q: 'How far in advance should I book?',
        a: `2–3 days for dinners, 1–2 weeks for retreats — longer in peak season. Same-day and next-day requests are sometimes possible for Ubud central.`,
      },
    ],
    nearbyAreas: [
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
    ],
    metaTitle: 'Private Chef Ubud Bali | Jungle Villa Dining | myCHEF',
    metaDescription:
      'Hire a private chef in Ubud, Bali. Balinese rijsttafel, plant-based retreat catering and jungle villa dinners from IDR 700K/person. WhatsApp myCHEF today.',
    coordinates: { lat: -8.5069, lng: 115.2625 },
    bookingNote:
      'Book 2–3 days ahead for single dinners. Retreat programmes need 1–2 weeks notice. Remote jungle villa access confirmed on booking.',
    published: true,
  },
  {
    slug: 'uluwatu',
    name: 'Uluwatu',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-private-chef-area-uluwatu-hero.webp',
    heroAlt: 'Private chef serving a seafood platter at a clifftop villa in Uluwatu with Indian Ocean views',
    intro:
      `Uluwatu's villas hang on limestone cliffs above the Indian Ocean — the most dramatic dining setting in Bali, and the least forgiving of average food. The guests here know it: honeymooning couples who booked the cliff-edge pool villa precisely for the view, surf groups splitting a premium house above Bingin, wedding parties who want the ceremony and the dinner in the same golden light. A myCHEF private chef in Uluwatu brings cooking that matches the setting — freshly landed seafood, tasting menus paced to the sunset, and a team that has worked these clifftop kitchens hundreds of times.`,
    villaDensity:
      `The Uluwatu–Bingin–Padang Padang belt holds 150+ high-end villas built into the limestone, most with outdoor dining areas engineered for the view.`,
    guestProfile:
      `Luxury clifftop villa guests, honeymooners and eloping couples, surf groups splitting premium houses, and wedding parties who want dinner timed to the Uluwatu sunset.`,
    landmarks: [
      'Uluwatu & Suluban',
      'Bingin',
      'Padang Padang',
      'Dreamland',
      'Pecatu & Ungasan',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'A travel allowance of IDR 150,000–250,000 is included in every quote. Sunset tasting menus from IDR 1,100,000 per person. A 50% deposit secures your date.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Uluwatu?',
        a: `Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost. Sunset tasting menus from IDR 1,100,000 per person, villa catering from IDR 700,000 per person. Prices are subject to a 10% service charge and 11% tax, quoted as one fixed figure including travel.`,
      },
      {
        q: 'Is there a travel fee from Seminyak to Uluwatu?',
        a: `Yes — an allowance of around IDR 150,000–250,000 depending on your exact address, always quoted upfront and included in your total before you confirm. No surprises on the day.`,
      },
      {
        q: 'Can dinner be timed to the clifftop sunset?',
        a: `That's the point of dining here. We build the run of courses backwards from golden hour for your villa's aspect — drinks at first light, main course just after the sun drops.`,
      },
      {
        q: 'Do you cater clifftop elopement dinners?',
        a: `Yes — one of our signature experiences for 2–10 guests. We design the menu, bring the full table setup, and coordinate timing with the sunset.`,
      },
      {
        q: 'Do you cater Uluwatu weddings?',
        a: `Yes, for 20–200 guests — receptions, seated dinners and live stations, coordinated with your venue's team. Book 3–6 weeks ahead.`,
      },
      {
        q: 'Can you cook for kids and mixed groups in a surf villa?',
        a: `All the time. Early kids' seatings before the adults' sunset menu, child-friendly plates, and flexible service around surf schedules — no extra charge for dietary or kids' needs.`,
      },
      {
        q: 'What if our clifftop kitchen is small?',
        a: `Common on the cliff, and not a problem. We confirm your setup at booking, bring our own equipment where needed, and can cook live-fire outdoors if the villa suits it.`,
      },
    ],
    nearbyAreas: [
      { slug: 'jimbaran', name: 'Jimbaran' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
      { slug: 'bukit', name: 'Bukit Peninsula' },
      { slug: 'pecatu', name: 'Pecatu' },
      { slug: 'ungasan', name: 'Ungasan' },
    ],
    metaTitle: 'Private Chef Uluwatu Bali | Cliff Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Uluwatu, Bali. Sunset-timed clifftop dinners, elopements and wedding catering. Travel fees quoted upfront. Clear rates via WhatsApp myCHEF.',
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
    heroImage: '/generated/mychef-private-chef-area-jimbaran-hero.webp',
    heroAlt: 'Indonesian chef grilling fresh seafood at a Jimbaran villa with Jimbaran Bay in the background',
    intro:
      `Jimbaran is where Bali eats seafood. Every dawn, the Kedonganan fish landing takes in the night's catch — barramundi, prawns, lobster, snapper — and by evening the bay's famous grills are smoking. The guests who stay here come for exactly that: seafood-loving families, couples celebrating over a bay sunset, and resort-villa guests who want the catch without the crowds. A myCHEF private chef in Jimbaran shortens the supply chain to a single day: fish landed at dawn, shopped that morning, cooked at your villa at sunset. The same catch as the bay — at your own table.`,
    villaDensity:
      `Jimbaran has a mix of beach-access properties along the bay and clifftop resort villas on Jl. Uluwatu. Many are large family estates built for multi-generational groups.`,
    guestProfile:
      `Seafood-loving families, couples celebrating over a Jimbaran bay sunset, resort-villa guests, and celebration groups hosting beachside BBQ or fine dining nights.`,
    landmarks: [
      'Jimbaran Bay beachside',
      'Kedonganan',
      'Muaya & the south bay',
      'Jl. Uluwatu clifftop',
      'Four Seasons, Intercontinental & Karma Kandara villas',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Seafood BBQ from IDR 720,000 per person including fresh catch, charcoal grill and full service. A 50% deposit secures your date.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Jimbaran?',
        a: `Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost. Seafood BBQ packages from IDR 720,000 per person including catch, charcoal grill and full service; tasting menus from IDR 980,000. Prices are subject to a 10% service charge and 11% tax.`,
      },
      {
        q: 'Can I really get fresh seafood cooked at my villa?',
        a: `Yes — it's our most popular Jimbaran service. We source from the Kedonganan fish landing each morning and cook it the same evening. Choose your catch: barramundi, lobster, tiger prawns, snapper or crab.`,
      },
      {
        q: 'Can dinner be timed to the Jimbaran sunset?',
        a: `Absolutely — the bay faces due west, and sunset is Jimbaran's main event. We pace courses to golden hour so the main lands just as the sky does its best work.`,
      },
      {
        q: 'Do you cater BBQ parties for groups?',
        a: `Yes — villa BBQ parties for 8–40 guests are a local specialty: chef, charcoal grill, seafood, satay, grilled meats, serving staff and complete cleanup.`,
      },
      {
        q: 'Is Jimbaran the same as Uluwatu?',
        a: `No — Jimbaran sits on the bay at the base of the peninsula; Uluwatu is on the clifftops about 20 minutes south. Jimbaran is seafood culture and sunsets over the water; Uluwatu is cliff drama. We serve both.`,
      },
      {
        q: 'Will our resort villa allow a private chef?',
        a: `Yes — we regularly cook within the Four Seasons, Intercontinental and Karma Kandara complexes, coordinating with resort management and working within property guidelines.`,
      },
      {
        q: 'Do you cook for kids and multi-generational families?',
        a: `All the time — Jimbaran's large family estates are built for it. Child-friendly plates, milder marinades, early seatings and split menus come at no extra charge.`,
      },
    ],
    nearbyAreas: [
      { slug: 'uluwatu', name: 'Uluwatu' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
      { slug: 'bukit', name: 'Bukit Peninsula' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'kuta', name: 'Kuta' },
    ],
    metaTitle: 'Private Chef Jimbaran Bali | Seafood Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Jimbaran, Bali. Fresh seafood BBQ, fine dining and villa events. Boat-to-villa seafood sourcing. Transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.7897, lng: 115.1683 },
    bookingNote:
      'Book 1–2 days ahead for private dinners and seafood BBQs; earlier for weekends and holiday sunsets. Seafood availability confirmed the day before.',
    published: true,
  },
  {
    slug: 'nusa-dua',
    name: 'Nusa Dua',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-private-chef-area-nusa-dua-hero.webp',
    heroAlt: 'Private chef serving a formal plated course at a Nusa Dua luxury estate with pool and ocean view',
    intro:
      `The five-star enclave runs on precision — gated estates, manicured grounds, service that arrives exactly when promised. Guests here expect the same standard at a private table, whether they're a board of twelve flying in for an incentive week, a family occupying a six-bedroom estate, or honeymooners who want one evening above the resort restaurants. A myCHEF private chef in Nusa Dua delivers exactly that: the discipline of a five-star kitchen, at your own table, quoted to the rupiah before you commit.`,
    villaDensity:
      `Nusa Dua's ITDC resort zone has some of Bali's largest villa estates — 5+ bedroom properties with full kitchens, pools and event spaces suited to corporate retreats, multi-generational families and formal private dinners.`,
    guestProfile:
      `Corporate retreat and incentive groups, high-net-worth multi-generational families, luxury honeymooners, and resort-adjacent guests who want five-star service at a private estate table.`,
    landmarks: [
      'ITDC resort zone',
      'Beachfront estates',
      'Sawangan',
      'Tanjung Benoa',
      'Benoa & the Bukit edge',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      `Executive fine dining from IDR 1,200,000 per person. Corporate full-board quoted per person per day; minimum spend ${siteFacts.corporateMinSpend} for corporate programmes. A 50% deposit secures your date.`,
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Nusa Dua?',
        a: `Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost. Executive fine dining from IDR 1,200,000 per person, villa catering from IDR 700,000 per person, corporate full-board quoted per person per day. Prices are subject to a 10% service charge and 11% tax, fixed in one upfront quote.`,
      },
      {
        q: 'Do you cater corporate retreats and incentive travel?',
        a: `Yes — it's one of our main services here: teambuilding dinners, executive lunches, conference refreshments and gala dinners for 10–200 people, with run-sheets built around your agenda.`,
      },
      {
        q: 'Can you cook at a villa inside the ITDC resort complex?',
        a: `Yes. We coordinate with property management, comply with access procedures and bring a fully equipped team — including villas in the Grand Hyatt, Melia, St. Regis and surrounding estates.`,
      },
      {
        q: 'Do you offer wine service or a sommelier?',
        a: `Yes. Our fine dining format includes optional sommelier wine pairing, with a list curated to the menu and your guests' preferences; champagne and cocktail service also available.`,
      },
      {
        q: 'Is Tanjung Benoa the same area?',
        a: `Almost — it's the narrow peninsula directly north, about 10–15 minutes away. The enclave is the five-star resort zone; Tanjung Benoa mixes boutique resorts and private villas. We serve both.`,
      },
      {
        q: 'Can you handle children and mixed dietary needs in one group?',
        a: `Yes — child-friendly plates, halal, vegetarian, gluten-free and allergy-aware menus across a single table, planned in advance at no extra charge.`,
      },
      {
        q: 'How far ahead should we book?',
        a: `2–3 days for estate dinners; 1–2 weeks for corporate programmes, longer in peak conference season.`,
      },
    ],
    nearbyAreas: [
      { slug: 'jimbaran', name: 'Jimbaran' },
      { slug: 'uluwatu', name: 'Uluwatu' },
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'kuta', name: 'Kuta' },
    ],
    metaTitle: 'Private Chef Nusa Dua Bali | Resort Villa Hire | myCHEF',
    metaDescription:
      'Hire a private chef in Nusa Dua, Bali. Corporate retreat catering, executive fine dining and villa events. Five-star service, clear packages. WhatsApp myCHEF.',
    coordinates: { lat: -8.8007, lng: 115.2302 },
    bookingNote:
      'Book 2–3 days ahead for estate dinners and 1–2 weeks for corporate programmes. ITDC villa access requires advance coordination — confirm property details on booking.',
    published: true,
  },
  {
    slug: 'sanur',
    name: 'Sanur',
    regency: 'Denpasar',
    tier: 1,
    heroImage: '/generated/mychef-private-chef-area-sanur-hero.webp',
    heroAlt: 'Private chef setting a multi-generational family dinner table at a Sanur villa with sunrise beach views',
    intro:
      `Sanur doesn't do spectacle, and that's why people love it. The east-coast beach town runs at a gentler pace: calmer water, morning walks on the promenade, and villas full of families — grandparents, parents, grandkids — staying a fortnight rather than a weekend. Alongside them, a settled expat community that treats Bali as home, not holiday. The cooking they want matches: consistent, generous, and considerate of everyone at the table. A myCHEF private chef in Sanur cooks gentle, classic menus — handmade pasta, fresh reef fish, traditional Balinese — and weekly meal plans that quietly handle three generations of dietary preferences at once.`,
    villaDensity:
      `Sanur has a settled villa market — mostly large 3–5 bedroom family homes along the beachside corridors and Bypass Ngurah Rai. Many are long-term rental properties used by expat families.`,
    guestProfile:
      `Multi-generational families on longer holidays, long-term expat residents and older couples who prefer Sanur's quieter east-coast pace and easy beach access.`,
    landmarks: [
      'Beachside corridors',
      'Sindhu',
      'Jl. Danau Tamblingan',
      'Mertasari & the south end',
      'Bypass Ngurah Rai villas',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      `Weekly chef service from IDR 900,000++ per day at the weekly rate (10% off standard). No travel surcharge anywhere in Sanur.`,
    services: ['private-chef', 'fine-dining', 'catering', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Sanur?',
        a: `Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost — no travel surcharge anywhere in Sanur. Family catering from IDR 700,000 per person, weekly stay chef from IDR 2,430,000++ per day at the weekly rate. Prices are subject to a 10% service charge and 11% tax.`,
      },
      {
        q: 'Is there any travel fee for Sanur villas?',
        a: `No. Sanur is a no-surcharge zone — the price in your quote is the price you pay.`,
      },
      {
        q: 'Can you cook for a multi-generational family with different dietary needs?',
        a: `Absolutely — it's our signature Sanur brief. Gluten-free for one grandparent, vegan for the adult children, child-friendly for the grandkids, all in one sitting, customised per course at no extra charge.`,
      },
      {
        q: 'Do you offer weekly or recurring chef service?',
        a: `Yes — very popular with Sanur's expat and long-stay community. We design a rotating weekly menu, shop Pasar Sindhu each morning and cook daily on your schedule. Many clients book three to five times a week.`,
      },
      {
        q: 'What about kids?',
        a: `Children are half the brief in Sanur. Early seatings, familiar dishes done well, and patient service around bedtimes — all standard, never surcharged.`,
      },
      {
        q: 'Do you do breakfast and brunch?',
        a: `Yes — villa breakfast and brunch service from IDR 700,000 per person: fresh fruit, proper coffee, cooked-to-order plates, and a kitchen left spotless.`,
      },
      {
        q: 'Is Sanur far from Ubud and Canggu?',
        a: `Sanur is 45 minutes to Ubud and 40 minutes to Canggu by car. We operate across all three and can coordinate chef service across a multi-stop itinerary.`,
      },
    ],
    nearbyAreas: [
      { slug: 'ubud', name: 'Ubud' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
      { slug: 'denpasar', name: 'Denpasar' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'canggu', name: 'Canggu' },
    ],
    metaTitle: 'Private Chef Sanur Bali | Beach Villa Hire | myCHEF',
    metaDescription:
      'Hire a private chef in Sanur Bali for beach villas and family stays. Clear daily rates. WhatsApp myCHEF.',
    coordinates: { lat: -8.7042, lng: 115.2607 },
    bookingNote:
      'Book 1–2 days ahead for dinners; weekly meal plans start Mondays, confirmed by the Friday before.',
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
      'Denpasar is Bali\'s capital and its urban core — a city of working professionals, residential expats, and a growing premium dining market. myCHEF serves Denpasar for executive dinner parties, corporate catering, household meal prep, and milestone celebrations in the city\'s residential villas and penthouses. myCHEF covers Denpasar for executive dinners, corporate catering, and residential meal prep with central-city logistics and same-day response.',
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
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Executive dinner catering from IDR 750,000 per person. Corporate event catering quoted per head. Household weekly stay chef from IDR 2,430,000++ per day at the weekly rate.',
    services: ['private-chef', 'catering', 'events', 'staffing'],
    faqs: [
      {
        q: 'Do you cook private chef dinners in Denpasar?',
        a: 'Yes. myCHEF serves the Denpasar city area for private dinner parties, executive dining, household meal prep, and corporate event catering. Same HACCP-certified chefs, same transparent pricing as our Bali villa service.',
      },
      {
        q: 'How much does a private chef cost in Denpasar?',
        a: 'Private chef service in Denpasar starts from Full-day stay chef from IDR 2,700,000++ per day. Executive dinner catering from IDR 750,000 per person. Corporate event catering is quoted per head based on menu and guest count.',
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
    metaTitle: 'Private Chef Denpasar, Bali | Executive, Residential Dining | myCHEF',
    metaDescription:
      'Hire a private chef in Denpasar, Bali. Executive dinner parties, corporate catering and household meal prep. HACCP-certified chefs — WhatsApp myCHEF today.',
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
    heroImage: '/generated/mychef-private-chef-area-berawa-hero.webp',
    heroAlt: 'Private chef setting up a poolside dinner at a modern Berawa villa with rice field horizon',
    intro:
      'Berawa is Canggu\'s quieter, more design-led neighbour — newer villas, better kitchens, and a guest profile that leans health-conscious and long-stay. myCHEF cooks villa birthday parties for 20–60 guests, weekly meal prep for surf families, and Saturday dinner experiences that feel worlds away from the beach club scene. myCHEF handles Berawa birthday parties, weekly meal prep, and design-villa fine dining with Canggu-side logistics.',
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
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'No travel surcharge within Berawa. Weekly chef service from IDR 900,000++ per day at the weekly rate (10% off standard). Group catering from IDR 700,000 per person.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'How much does a private chef cost in Berawa?',
        a: 'Private chef service in Berawa starts from Full-day stay chef from IDR 2,700,000++ per day with no travel surcharge. Group catering from IDR 700,000 per person. Free quote via WhatsApp.',
      },
      {
        q: 'Is Berawa the same as Canggu?',
        a: 'Berawa is a neighbourhood within the greater Canggu area, about 2 km north of Batu Bolong beach. It has a slightly quieter and more residential character than central Canggu. myCHEF serves the entire Canggu–Berawa corridor with no additional travel charge.',
      },
      {
        q: 'Do you cater villa birthday parties in Berawa?',
        a: 'Yes — villa birthday parties for 20–60 guests are a popular booking in Berawa. We bring the full setup: chef, sous chef, waiters, bartender, decorations-friendly service, and complete cleanup.',
      },
      {
        q: 'Do you offer weekly meal prep in Berawa?',
        a: 'Yes — weekly meal prep for long-stay and design-villa guests is a regular Berawa booking. We plan menus around your schedule, shop with receipts, and leave the kitchen ready for the next day.',
      },
    ],
    nearbyAreas: [
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'pererenan', name: 'Pererenan' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'kerobokan', name: 'Kerobokan' },
    ],
    metaTitle: 'Private Chef Berawa, Bali | Villa Dining, Birthday Catering | myCHEF',
    metaDescription:
      'Book a private chef in Berawa, Bali. Villa birthday parties, weekly meal prep, and fine dining. HACCP-certified chefs, transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.6437, lng: 115.1261 },
    bookingNote: 'Book 1–2 days ahead for Berawa dinners; 1–2 weeks for villa birthday parties of 20–60. Same-day quotes via WhatsApp.',
    published: true,
  },
  {
    slug: 'pererenan',
    name: 'Pererenan',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-private-chef-area-pererenan-hero.webp',
    heroAlt: 'Chef preparing a romantic dinner at a secluded design villa in Pererenan at dusk',
    intro:
      `Pererenan is what Canggu was before the beach clubs arrived. The surf breaks are quieter, the villas are newer and often architect-designed, and the people who book them chose this address precisely because it isn't busy. Couples on a month-long stay. Remote workers who want silence until dinner. Small groups sharing a design villa who'd rather cook in than queue anywhere. That's exactly the brief a private chef answers. A myCHEF private chef in Pererenan brings restaurant-calibre cooking to villas built for privacy — intimate dinners, small-group fine dining, and weekly service for the long-stayers who came here to escape the noise, not to find a restaurant.`,
    villaDensity:
      `Pererenan's villa stock is newer and more spacious than central Canggu's, often with rice-field or ocean views and open-air dining areas made for evenings in.`,
    guestProfile:
      `Couples on longer stays, digital nomads wanting quiet, and small groups sharing architect-designed villas north of Canggu who prefer privacy over beach-club noise.`,
    landmarks: [
      'Pererenan Beach & Jl. Pererenan',
      'Echo Beach (northern end)',
      'Batu Mejan fringe',
      'Seseh village',
      'Yeh Gangga',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'A small travel allowance applies for addresses beyond the main Jl. Pererenan — always itemised before you confirm. A 50% deposit secures your date.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Do you serve Pererenan?',
        a: `Yes — we cover the Pererenan corridor regularly, from Pererenan Beach to Seseh and Yeh Gangga. A small travel allowance applies for addresses beyond the main Jl. Pererenan, always quoted upfront.`,
      },
      {
        q: 'How much does a private chef cost in Pererenan?',
        a: `Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost. Group dinners from IDR 700,000 per person, tasting menus from IDR 980,000, weekly stay chef from IDR 2,430,000++ per day at the weekly rate. Prices are subject to a 10% service charge and 11% tax.`,
      },
      {
        q: 'How is Pererenan different from Canggu for a chef booking?',
        a: `Quieter and more spread out. Villas are newer, larger and more private — ideal for intimate dining and weekly service. Travel times run slightly longer, so we factor an extra 10–15 minutes from our Seminyak base.`,
      },
      {
        q: 'Can we book a chef for our whole stay?',
        a: `Yes — it's the most Pererenan booking we take. Recurring chef days each week, menus designed around your household, everything shopped fresh. Tell us your dates and we'll build the plan.`,
      },
      {
        q: 'Do you cook for couples and very small groups?',
        a: `Happily — much of our Pererenan work is dinners for two to six: tasting menus, relaxed family-style spreads, or a private BBQ for a small group of friends.`,
      },
      {
        q: 'Do you cater for children and dietary requirements?',
        a: `Yes — child-friendly plates, plant-based, gluten-free, halal and allergy-aware menus are all planned in advance at no extra charge.`,
      },
      {
        q: 'How far ahead should we book?',
        a: `1–2 days is usually enough; longer for weekly service in peak months so we can hold the same chef for your whole stay.`,
      },
    ],
    nearbyAreas: [
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'berawa', name: 'Berawa' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'ubud', name: 'Ubud' },
    ],
    metaTitle: 'Private Chef Pererenan Bali | Long-Stay Villa Hire | myCHEF',
    metaDescription:
      'Book a private chef in Pererenan, Bali. Private villa dinners, meal prep and small-group fine dining. HACCP-certified, transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.6338, lng: 115.1140 },
    bookingNote:
      'Book 1–2 days ahead. Confirm your exact villa address when you enquire so travel time and any allowance are quoted accurately.',
    published: true,
  },
  {
    slug: 'kerobokan',
    name: 'Kerobokan',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-private-chef-area-kerobokan-hero.webp',
    heroAlt: 'Private chef preparing a dinner at a Kerobokan villa with garden terrace',
    intro:
      'Kerobokan sits between Seminyak and Canggu — an easy-to-reach area with a dense mix of residential villas, long-stay rentals, and a resident expat community. myCHEF cooks here for recurring household meal prep, family dinner parties, and villa events in one of Bali\'s most lived-in neighbourhoods. myCHEF cooks recurring household meal prep, family dinner parties, and villa events here with no south-Bali travel drama.',
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
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'No travel surcharge within Kerobokan. Same pricing as central Seminyak — from Full-day stay chef from IDR 2,700,000++ per day. Weekly meal prep packages available.',
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
      {
        q: 'How much does a private chef cost in Kerobokan?',
        a: 'Private chef service in Kerobokan starts from Full-day stay chef from IDR 2,700,000++ per day, plus groceries at cost. Weekly meal prep packages are available for resident expats — WhatsApp for a fixed quote.',
      },
      {
        q: 'Can you cater a villa dinner party in Kerobokan?',
        a: 'Yes — family dinner parties and small villa events for 8–40 guests are common in Kerobokan. We bring chef and service staff, shop with receipts, and leave the kitchen spotless.',
      },
    ],
    nearbyAreas: [
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'berawa', name: 'Berawa' },
      { slug: 'petitenget', name: 'Petitenget' },
    ],
    metaTitle: 'Private Chef Kerobokan, Bali | Residential Dining, Meal Prep | myCHEF',
    metaDescription:
      'Book a private chef in Kerobokan, Bali. Regular household meal prep, dinner parties, and villa events. Transparent pricing, HACCP-certified. WhatsApp myCHEF.',
    coordinates: { lat: -8.6631, lng: 115.1542 },
    bookingNote: 'Book 1–2 days ahead for Kerobokan dinners. Weekly meal prep is confirmed on Fridays for the following week — ideal for long villa stays.',
    published: true,
  },
  {
    slug: 'petitenget',
    name: 'Petitenget',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-private-chef-area-petitenget-hero.webp',
    heroAlt: 'Private chef serving fine dining at a beachfront Petitenget villa terrace, Bali',
    intro:
      'Petitenget is Seminyak\'s most prestigious corridor — the Oberoi strip, beachfront temple, and the road that birthed Bali\'s fine dining scene. myCHEF cooks intimate tasting menus and romantic dinners for couples staying in the high-end villas along Jl. Petitenget, where privacy and quality are the non-negotiables. myCHEF delivers intimate tasting menus and romantic villa dinners along Jl. Petitenget for guests who expect Seminyak-level polish.',
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
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote: 'No travel surcharge. Petitenget is within our core Seminyak service area — from Full-day stay chef from IDR 2,700,000++ per day, tasting menus from IDR 980,000 per person.',
    services: ['private-chef', 'fine-dining', 'catering', 'events', 'staffing'],
    faqs: [
      {
        q: 'Do you serve private chefs in Petitenget?',
        a: 'Yes. Petitenget is within our core Seminyak area — no travel surcharge. We specialise in fine dining tasting menus and romantic villa dinners along the Jl. Petitenget corridor.',
      },
      {
        q: 'How much does a private chef cost in Petitenget?',
        a: 'Private chef service in Petitenget starts from Full-day stay chef from IDR 2,700,000++ per day, plus groceries at cost. Fine dining tasting menus start from IDR 980,000 per person for two or more guests.',
      },
      {
        q: 'Can you arrange a romantic or proposal dinner in Petitenget?',
        a: 'Yes — Petitenget is one of our most requested areas for anniversary and proposal dinners. We handle menu design, timing to sunset, and discreet service so the evening stays private.',
      },
      {
        q: 'Is there a travel fee for Petitenget villas?',
        a: 'No — Petitenget is inside our core Seminyak service zone, so standard rates apply with no travel surcharge. Your quote is itemised before you confirm.',
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
    bookingNote: 'Book 1–3 days ahead for Petitenget fine dining or beachfront dinners. Same availability and core pricing as the Seminyak service zone.',
    published: true,
  },
  {
    slug: 'kuta',
    name: 'Kuta',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-kuta.webp',
    heroAlt: 'Private chef preparing a casual villa dinner for a group stay in Kuta, Bali',
    intro:
      'Kuta is Bali\'s original tourist hub — fast-paced, high-volume, and home to a growing base of private villa rentals away from the main strip. myCHEF serves Kuta for villa group dinners, birthday party catering, and travellers who want the convenience of central Bali without the Seminyak price tag. myCHEF serves Kuta villa groups, birthday catering, and welcome dinners for travellers who want central convenience without restaurant queues.',
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
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'No travel surcharge within Kuta. Same day-rate band as Seminyak — great value for central Bali villa groups, birthday parties and welcome dinners.',
    services: ['private-chef', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Do you serve private chefs in Kuta?',
        a: 'Yes. myCHEF covers Kuta with no travel surcharge. We serve villa groups, birthday parties, and casual poolside catering in the Kuta–Legian corridor.',
      },
      {
        q: 'Is a private chef in Kuta the same price as Seminyak?',
        a: 'Yes — private chef pricing is the same across Seminyak, Kuta, Legian, and Kerobokan. Starting from Full-day stay chef from IDR 2,700,000++ per day with no travel surcharge.',
      },
      {
        q: 'Can you cater a birthday party at a Kuta villa?',
        a: 'Yes — Kuta is popular for group birthday catering and poolside BBQs. We handle food, staffing and cleanup for villa parties from small dinners to larger group feasts. Book a week ahead for weekends.',
      },
      {
        q: 'Can you cook a first-night dinner after our airport arrival in Kuta?',
        a: 'Yes — welcome dinners for guests landing at Ngurah Rai are a frequent Kuta request. Tell us your landing time and guest count; we schedule the chef around your arrival when possible.',
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
      'Stay chef in Kuta, Bali from IDR 2.7M++/day (full day of staff). Villa dinners, group catering and birthday parties. HACCP chefs. Transparent quotes via WhatsApp myCHEF.',
    coordinates: { lat: -8.7175, lng: 115.1686 },
    bookingNote: 'Book 1–2 days ahead for Kuta villa dinners. Airport-arrival chef service and first-night menus can be arranged for arriving guests.',
    published: true,
  },
  {
    slug: 'legian',
    name: 'Legian',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-private-chef-area-legian-hero.webp',
    heroAlt: 'Private chef catering a villa group dinner and poolside service in Legian, Bali',
    intro:
      'Legian sits between Kuta and Seminyak — a compact, easy-to-navigate strip with a good selection of villa rentals and a loyal returning visitor base. myCHEF cooks villa group dinners, pre-trip welcome dinners, and poolside lunches for travellers who pick Legian for its central convenience — fast deployment from our south-Bali network, clear packages, and kitchen reset included.',
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
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote: 'No travel surcharge. Legian pricing matches Seminyak — from Full-day stay chef from IDR 2,700,000++ per day, groceries at cost. Ideal for short-stay villa groups.',
    services: ['private-chef', 'catering', 'events'],
    faqs: [
      {
        q: 'Do you serve private chefs in Legian?',
        a: 'Yes. Legian is within our core South Bali service area. No travel surcharge — same pricing as Seminyak from Full-day stay chef from IDR 2,700,000++ per day.',
      },
      {
        q: 'Is Legian good for villa group dinners and birthday catering?',
        a: 'Yes — Legian suits short-stay groups and families who want central access. We regularly cook poolside BBQs, birthday dinners, and welcome meals for villas between Kuta and Seminyak.',
      },
      {
        q: 'How far in advance should I book a private chef in Legian?',
        a: 'Book 1–2 days ahead for standard dinners. Birthday parties and larger groups are best confirmed a week ahead so we can lock staffing and menus.',
      },
      {
        q: 'Is there a travel surcharge for Legian villas?',
        a: 'No — Legian is inside our core South Bali zone with the same rates as Seminyak and Kuta. Travel is included; groceries are billed at cost with receipts.',
      },
    ],
    nearbyAreas: [
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'kuta', name: 'Kuta' },
      { slug: 'canggu', name: 'Canggu' },
    ],
    metaTitle: 'Private Chef in Legian, Bali | Villa Dining & Catering | myCHEF',
    metaDescription:
      'Book a private chef in Legian, Bali. Villa group dinners, poolside catering and event service. HACCP-certified chefs with transparent pricing. WhatsApp myCHEF.',
    coordinates: { lat: -8.7012, lng: 115.1677 },
    bookingNote: 'Book 1–2 days ahead for Legian dinners. Same availability and pricing as Seminyak — WhatsApp for same-day requests.',
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
      'The Bukit Peninsula is Bali\'s dramatic southern limestone plateau — Bingin, Padang Padang, Dreamland, and the chain of clifftop villas that define luxury Bali. myCHEF cooks here for elopements, honeymoon dinners, surf group celebrations, and anniversary parties at the island\'s most spectacular private addresses. myCHEF serves the full Bukit plateau for elopements, surf-group feasts, and clifftop fine dining from Bingin through Dreamland and beyond.',
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
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
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
      {
        q: 'How much does a private chef cost on the Bukit Peninsula?',
        a: 'Bukit Peninsula bookings start from Full-day stay chef from IDR 2,700,000++ per day, plus groceries at cost. A transparent travel allowance from south Bali is included in every quote — no surprise fees on the day.',
      },
      {
        q: 'Can you time dinner to the Bukit sunset?',
        a: 'Yes — clifftop Bukit villas face west over the Indian Ocean. We pace multi-course menus so the main course lands near sunset when the villa aspect allows.',
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
      'Book a private chef at Bukit Peninsula, Bali. Clifftop fine dining, elopement dinners, and villa events in Bingin, Padang Padang, Dreamland. WhatsApp myCHEF.',
    coordinates: { lat: -8.8100, lng: 115.1000 },
    bookingNote:
      'Book 2–3 days ahead. Access to steep clifftop villas confirmed on booking — travel time and allowance quoted per address.',
    published: true,
  },

  // ─── TIER 1: Additional South Badung areas ───────────────────────────────
  {
    slug: 'umalas',
    name: 'Umalas',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-seminyak.webp',
    heroAlt: 'Private chef preparing a dinner table at a luxury Umalas villa with rice field views',
    intro:
      'Umalas sits in the quiet corridor between Seminyak and Canggu — a grid of wide lanes lined with architect-designed private villas, boutique retreats, and long-term rental compounds popular with digital nomads and wellness tourists. myCHEF cooks here for intimate villa dinners, weekend celebration meals, and multi-day retreats. myCHEF cooks intimate villa dinners, retreat catering, and group feasts in Umalas design villas with no travel surcharge from the Seminyak–Canggu belt.',
    villaDensity:
      'Umalas has a high concentration of modern designer villas with generous garden space and private pools. It is one of Bali\'s preferred residential areas for expats and premium short-term rentals.',
    guestProfile:
      'Long-stay villa renters, wellness and yoga retreat groups, and couples who want privacy away from the Seminyak strip without sacrificing access to great food.',
    landmarks: [
      'Jl. Umalas Kauh',
      'Jl. Umalas I',
      'Bumbak village',
      'Nearby Echo Beach',
      'Pererenan rice fields',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Umalas is within our standard service zone — no travel surcharge. Villa catering from IDR 700,000 per person. Weekly chef rates available for longer stays.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'Do you cook private chef dinners in Umalas?',
        a: 'Yes. Umalas is in our core Canggu–Seminyak service zone. We cook intimate villa dinners, multi-course fine dining, and group catering here with no travel surcharge.',
      },
      {
        q: 'How far is Umalas from Seminyak for a private chef booking?',
        a: 'Umalas is roughly 5–10 minutes from central Seminyak, fully within our standard service area. We regularly cook at villas along Jl. Umalas Kauh and surrounding lanes.',
      },
      {
        q: 'How much does a private chef cost in Umalas?',
        a: 'Umalas pricing matches the Seminyak–Canggu belt: from Full-day stay chef from IDR 2,700,000++ per day, groceries at cost, no travel surcharge. Multi-day and retreat packages available on request.',
      },
      {
        q: 'Can you cater a wellness or yoga retreat in Umalas?',
        a: 'Yes — multi-day retreat catering with plant-forward menus is a regular Umalas booking. Send your schedule and dietary requirements for a fixed full-board quote.',
      },
    ],
    nearbyAreas: [
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'berawa', name: 'Berawa' },
      { slug: 'kerobokan', name: 'Kerobokan' },
      { slug: 'pererenan', name: 'Pererenan' },
    ],
    metaTitle: 'Private Chef in Umalas, Bali | Villa Dining & Catering | myCHEF',
    metaDescription:
      'Book a private chef in Umalas, Bali. Intimate villa dinners, catering and fine dining for retreats and groups. No travel surcharge. WhatsApp myCHEF today.',
    coordinates: { lat: -8.6580, lng: 115.1460 },
    bookingNote: 'Book 24–48 hours ahead for Umalas. Same-day requests are reviewed on chef availability with no travel surcharge.',
    published: true,
  },
  {
    slug: 'batu-belig',
    name: 'Batu Belig',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-berawa.webp',
    heroAlt: 'Private chef at a sunset villa dinner on the quiet Batu Belig beachfront, Bali',
    intro:
      'Batu Belig is a short stretch of beach between Seminyak and Canggu — one of Bali\'s best-kept secrets for villa renters who want beachfront access without the crowds. A handful of high-end private villas sit directly on the sand here. myCHEF cooks sunset dinners, multi-day villa chef packages, and group catering at Batu Belig\'s most exclusive addresses.',
    villaDensity:
      'Batu Belig has a small but very high-end collection of beachfront villas and boutique resorts. The area\'s limited scale means you get genuine seclusion at ocean-facing properties.',
    guestProfile:
      'Premium villa renters seeking beachfront seclusion, honeymoon couples, and small groups celebrating milestones at boutique Bali hideaways.',
    landmarks: [
      'Batu Belig Beach',
      'Jl. Batu Belig',
      'Semara Luxury Villa',
      'Nearby Petitenget Beach',
      'Jl. Pantai Batu Belig',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Batu Belig is in our core service area — no travel surcharge. Fine dining at the beach from IDR 980,000 per person.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Can you cook a private dinner on the beach at Batu Belig?',
        a: 'We cook at villa properties in Batu Belig, including garden and poolside set-ups. Beachfront dinners require a private villa that has beach access — we can advise on the set-up.',
      },
      {
        q: 'Is Batu Belig in the same service area as Seminyak?',
        a: 'Yes. Batu Belig is directly between Seminyak and Canggu on the coast road. myCHEF covers it within the standard Seminyak–Canggu service zone at no extra charge.',
      },
      {
        q: 'How much does a private chef cost at Batu Belig?',
        a: 'Batu Belig is in our Seminyak–Canggu service zone with no travel surcharge. Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost. Sunset dinners are our most requested format here.',
      },
      {
        q: 'Can you cater a small villa party at Batu Belig?',
        a: 'Yes — beachfront birthday dinners and small villa parties for 8–40 guests are common at Batu Belig. We bring staffing, setup and full cleanup.',
      },
],
    nearbyAreas: [
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'petitenget', name: 'Petitenget' },
      { slug: 'kerobokan', name: 'Kerobokan' },
      { slug: 'berawa', name: 'Berawa' },
      { slug: 'canggu', name: 'Canggu' },
    ],
    metaTitle: 'Private Chef in Batu Belig, Bali | Beachfront Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef at Batu Belig beach villas, Bali. Sunset dinners, fine dining, and catering at the quietest stretch of beach between Seminyak and Canggu.',
    coordinates: { lat: -8.6710, lng: 115.1500 },
    bookingNote: 'Book 24–48 hours ahead for Batu Belig beachfront villas. Sunset timing, table set-up and access notes are confirmed when you book.',
    published: true,
  },
  {
    slug: 'pecatu',
    name: 'Pecatu',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-private-chef-area-pecatu-hero.webp',
    heroAlt: 'Private chef setting a candlelit table at a Pecatu clifftop villa, Bukit Peninsula',
    intro:
      'Pecatu is the upscale neighbourhood at the heart of the Bukit Peninsula — home to Bali\'s most iconic resort belt (Karma Kandara, Alila Villas Uluwatu, The Edge) and some of the island\'s highest-perched private villas. myCHEF cooks here for honeymooners, milestone celebrations, and resort-adjacent villa events where the view is as important as the food.',
    villaDensity:
      'Pecatu sits on the limestone plateau above the Indian Ocean, with luxury villas commanding panoramic views. The area is dominated by premium hotel estates and high-end private residences.',
    guestProfile:
      'Honeymooners and anniversary couples at clifftop villas, destination wedding groups, and guests at neighbouring five-star resorts who want a private in-villa experience.',
    landmarks: [
      'Karma Beach',
      'The Ungasan Clifftop Resort',
      'Alila Villas Uluwatu vicinity',
      'Jl. Pantai Karma Kandara',
      'GWK Cultural Park',
      'Jl. Pecatu Indah',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'A travel allowance from Seminyak is included in all Pecatu quotes. Clifftop fine dining from IDR 1,100,000 per person.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Do you cook private chef dinners in Pecatu?',
        a: 'Yes. Pecatu and the Ungasan plateau are fully covered. Travel allowance from our Seminyak kitchen is quoted upfront and never a surprise.',
      },
      {
        q: 'What is the difference between Pecatu and Uluwatu?',
        a: 'Pecatu is the broader residential and resort area on the western side of the Bukit plateau. Uluwatu refers to the famous temple headland. myCHEF serves both areas.',
      },
      {
        q: 'How far in advance should I book a private chef in Pecatu?',
        a: 'Book 48–72 hours ahead for standard Pecatu dinners so we can plan Bukit logistics and market runs. Elopements and wedding catering need longer lead times — share your date on WhatsApp for availability.',
      },
      {
        q: 'Is there a travel fee for Pecatu villas?',
        a: 'Pecatu sits on the Bukit Peninsula south of Seminyak. A travel allowance is quoted per address before you confirm — never added as a surprise fee after booking.',
      },
],
    nearbyAreas: [
      { slug: 'uluwatu', name: 'Uluwatu' },
      { slug: 'ungasan', name: 'Ungasan' },
      { slug: 'bukit', name: 'Bukit Peninsula' },
      { slug: 'jimbaran', name: 'Jimbaran' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
    ],
    metaTitle: 'Private Chef in Pecatu, Bali | Clifftop Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Pecatu, Bali. Clifftop villa dinners, honeymoon fine dining and events on the Bukit Peninsula. Transparent rates. WhatsApp myCHEF.',
    coordinates: { lat: -8.8350, lng: 115.0880 },
    bookingNote: 'Book 2–3 days ahead for Pecatu cliff villas. Any travel allowance from the Seminyak base is quoted per address before you confirm.',
    published: true,
  },
  {
    slug: 'ungasan',
    name: 'Ungasan',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-private-chef-area-ungasan-hero.webp',
    heroAlt: 'Private chef plating a fine-dining course at a clifftop villa in Ungasan, Bali',
    intro:
      'Ungasan is the high plateau village at the southernmost tip of the Bukit Peninsula — famous for the Six Senses Uluwatu and a cluster of ultra-luxury private villas that overlook the Indian Ocean. myCHEF cooks here for elopements, anniversary dinners, and exclusive villa events at some of Bali\'s most dramatic addresses. myCHEF cooks elopements, anniversary dinners, and exclusive villa events at Ungasan\'s dramatic clifftop addresses.',
    villaDensity:
      'Ungasan has a growing collection of clifftop luxury estates, many built into the limestone escarpment with infinity pools over the ocean. Villa density is lower here but average booking value is very high.',
    guestProfile:
      'Elopement and honeymoon couples at premium clifftop villas, milestone birthday and anniversary groups, and guests seeking the most remote and exclusive private chef experience on the island.',
    landmarks: [
      'Six Senses Uluwatu vicinity',
      'Jl. Pantai Suluban',
      'Nyang Nyang Beach',
      'GWK Cultural Park',
      'Jl. Goa Lempeh',
      'Ungasan village',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Travel allowance from Seminyak included in all quotes. Ungasan is at the furthest point of the Bukit — always quoted clearly before booking.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Does myCHEF cook at villas in Ungasan?',
        a: 'Yes. Ungasan is one of the most requested Bukit areas for elopement dinners and luxury villa events. Travel allowance applies and is quoted upfront.',
      },
      {
        q: 'How far is Ungasan from Uluwatu?',
        a: 'Ungasan and Uluwatu are directly adjacent on the southern Bukit Peninsula. myCHEF covers both as part of the same service area.',
      },
      {
        q: 'Can you arrange an elopement or anniversary dinner in Ungasan?',
        a: 'Yes — Ungasan is one of our top addresses for elopements and anniversary tasting menus. We time service to the clifftop sunset, handle staffing, and leave the villa kitchen spotless after service.',
      },
      {
        q: 'How much does a private chef cost in Ungasan?',
        a: 'Ungasan follows South Bali pricing: from Full-day stay chef from IDR 2,700,000++ per day, plus groceries at cost. Clifftop travel allowance is itemised in your quote.',
      },
],
    nearbyAreas: [
      { slug: 'uluwatu', name: 'Uluwatu' },
      { slug: 'pecatu', name: 'Pecatu' },
      { slug: 'bukit', name: 'Bukit Peninsula' },
      { slug: 'jimbaran', name: 'Jimbaran' },
    ],
    metaTitle: 'Private Chef in Ungasan, Bali | Clifftop Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Ungasan, Bali. Luxury villa dinners and elopement fine dining at the southernmost tip of the Bukit Peninsula. Clear rates via WhatsApp myCHEF.',
    coordinates: { lat: -8.8450, lng: 115.1100 },
    bookingNote: 'Book 2–3 days ahead for Ungasan clifftop estates. Access notes and any travel allowance are confirmed on booking — no surprise fees.',
    published: true,
  },
  {
    slug: 'tanjung-benoa',
    name: 'Tanjung Benoa',
    regency: 'Badung',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-city-nusa-dua.webp',
    heroAlt: 'Private chef serving a private dinner on a Tanjung Benoa beachfront villa terrace',
    intro:
      'Tanjung Benoa is the narrow peninsula that extends north from Nusa Dua — a calm, family-friendly resort village with its own beach, water-sport operators, and a collection of well-appointed villas and boutique hotels. myCHEF cooks here for families on week-long villa stays, retreat groups, and couples who want a quieter alternative to the Seminyak scene.',
    villaDensity:
      'Tanjung Benoa has a mixture of hotel-style villas and private rental properties along the peninsula beachfront. It is lower density than Seminyak but very popular with families and long-stay guests.',
    guestProfile:
      'Families on week-long Bali holidays, couples who prefer a calm beach environment, and small corporate or wellness retreat groups based in the Nusa Dua–Tanjung Benoa corridor.',
    landmarks: [
      'Tanjung Benoa Beach',
      'Jl. Pratama',
      'Benoa port area',
      'Turtle Island',
      'Nusa Dua water park',
      'Nearby BTDC resort area',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Tanjung Benoa is adjacent to Nusa Dua — no travel surcharge. Villa catering from IDR 700,000 per person, family menus available.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'Can you cook a private chef dinner at my Tanjung Benoa villa?',
        a: 'Yes. Tanjung Benoa is in our core Nusa Dua service zone with no travel surcharge. We cook family dinners, couple fine dining, and villa parties here regularly.',
      },
      {
        q: 'Do you offer family-friendly menus in Tanjung Benoa?',
        a: 'Absolutely. Family menus with kids options are available on request. All dietary requirements are accommodated at no extra charge.',
      },
      {
        q: 'Is there a travel surcharge for Tanjung Benoa?',
        a: 'No — Tanjung Benoa sits next to Nusa Dua in our standard south Bali coverage with no travel surcharge. Family villa dinners and resort-adjacent catering are common here.',
      },
      {
        q: 'Can you cook a welcome dinner after we arrive near Nusa Dua?',
        a: 'Yes — first-night dinners for families arriving into the Nusa Dua–Tanjung Benoa corridor are a frequent request. Share your landing time and guest count for scheduling.',
      },
],
    nearbyAreas: [
      { slug: 'nusa-dua', name: 'Nusa Dua' },
      { slug: 'jimbaran', name: 'Jimbaran' },
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'bukit', name: 'Bukit Peninsula' },
    ],
    metaTitle: 'Private Chef in Tanjung Benoa, Bali | Villa Dining, Catering | myCHEF',
    metaDescription:
      'Book a private chef in Tanjung Benoa, Bali. Family villa dinners, catering and fine dining near Nusa Dua. No travel surcharge. Clear rates via WhatsApp.',
    coordinates: { lat: -8.7580, lng: 115.2280 },
    bookingNote: 'Book 24–48 hours ahead for Tanjung Benoa water-sport villas. Same-day availability on request when a south-Bali chef is free — WhatsApp for a check.',
    published: true,
  },

  // ─── TIER 1: Gianyar / Ubud surrounds ────────────────────────────────────
  {
    slug: 'sayan',
    name: 'Sayan',
    regency: 'Gianyar',
    tier: 1,
    heroImage: '/generated/mychef-catering-bali-hero-babiguling-new.webp',
    heroAlt: 'Private chef serving a candlelit jungle dinner at a Sayan valley villa',
    intro:
      'Sayan is the steep forested ridge just west of Ubud — home to some of Bali\'s most extraordinary hideaways perched above the Ayung River gorge. Four Seasons Resort Sayan put the area on the map; since then a cluster of private villas and boutique retreats have followed. myCHEF cooks here for jungle fine dining experiences, intimate couples\' retreats, and multi-day chef packages at hilltop compounds.',
    villaDensity:
      'Sayan has a small concentration of ultra-luxury villas and boutique resorts built into the jungle ridge above the Ayung. Access requires steep paths or private steps but the reward is total seclusion and river valley views.',
    guestProfile:
      'Luxury travellers at boutique jungle retreats, couples celebrating honeymoons or anniversaries, and wellness guests who want a world-class private dining experience in one of Bali\'s most magical settings.',
    landmarks: [
      'Ayung River gorge',
      'Four Seasons Sayan vicinity',
      'Jl. Raya Sayan',
      'Campuhan ridge walk',
      'Sayan rice terraces',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Sayan is in the greater Ubud service area — standard pricing applies. Jungle fine dining from IDR 980,000 per person.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Do you cook private dinners at Sayan valley villas?',
        a: 'Yes. Sayan is one of our favourite Ubud-area locations for intimate fine dining. We bring everything to the villa — equipment, ingredients, and full service. Access paths are confirmed on booking.',
      },
      {
        q: 'How far is Sayan from Ubud?',
        a: 'Sayan is about 2 km west of central Ubud, a 5–10 minute drive. It sits within our standard Ubud service area at no extra charge.',
      },
      {
        q: 'What menus work best for Sayan gorge villas?',
        a: 'Sayan suits intimate tasting menus and jungle-view fine dining. We design courses around Ayung valley produce and quieter service pacing so the setting stays the focus. Multi-day chef stays are common here.',
      },
      {
        q: 'Is there a travel surcharge for Sayan gorge villas?',
        a: 'Sayan is close to Ubud central. A small travel or access note may apply for steep driveways — always quoted per address before you confirm, never after.',
      },
],
    nearbyAreas: [
      { slug: 'ubud', name: 'Ubud' },
      { slug: 'tegallalang', name: 'Tegallalang' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'canggu', name: 'Canggu' },
    ],
    metaTitle: 'Private Chef in Sayan, Bali | Jungle Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Sayan, Bali. Jungle fine dining above the Ayung River gorge — intimate tasting menus managed end to end. Book via WhatsApp myCHEF.',
    coordinates: { lat: -8.5020, lng: 115.2470 },
    bookingNote: 'Book 48 hours ahead for Sayan gorge villas. Steep driveways and villa access are confirmed per address so the team arrives ready and fully equipped.',
    published: true,
  },
  {
    slug: 'tegallalang',
    name: 'Tegallalang',
    regency: 'Gianyar',
    tier: 1,
    heroImage: '/generated/mychef-catering-bali-hero-babiguling.webp',
    heroAlt: 'Private chef plating dishes with Tegallalang rice terrace views in the background',
    intro:
      'Tegallalang is the rice-terrace village north of Ubud — one of Bali\'s most photographed landscapes and a growing hub for luxury villas perched above the padi fields. myCHEF cooks here for immersive Balinese dining experiences, retreats, and villa celebration dinners where guests can eat in the terraces with panoramic views. myCHEF brings Balinese terrace dinners and retreat catering to Tegallalang villas with rice-field views and Ubud-zone logistics.',
    villaDensity:
      'Tegallalang has a growing number of villa compounds and eco-retreats built along the terrace ridges. Many properties offer dramatic rice field views from their dining pavilions and pool decks.',
    guestProfile:
      'Cultural and wellness travellers, yoga retreat groups, and villa renters who want an authentic Balinese dining experience with a spectacular natural backdrop.',
    landmarks: [
      'Tegallalang Rice Terraces',
      'Jl. Raya Tegallalang',
      'Ceking Rice Terrace',
      'Campuhan ridge (nearby)',
      'Kopi Desa coffee estates',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Tegallalang is within our greater Ubud service zone. Travel time from Ubud town is 15–20 minutes — quoted per booking.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Can you cook a private dinner overlooking the Tegallalang rice terraces?',
        a: 'Yes. We work with villa properties that have terrace-view dining pavilions. We bring all equipment and ingredients and set up the full dining experience on-site.',
      },
      {
        q: 'Is Tegallalang far from Ubud for a myCHEF booking?',
        a: 'Tegallalang is about 10–15 km north of central Ubud, roughly 20–25 minutes by road. A small travel allowance applies for the extra distance and is quoted upfront.',
      },
      {
        q: 'Can myCHEF cater a small wedding or retreat dinner in Tegallalang?',
        a: 'Yes — Tegallalang rice-terrace villas host intimate weddings and retreat dinners regularly. We coordinate menus, staffing and terrace service flow; share guest count and date for a tailored quote.',
      },
      {
        q: 'How much does a private chef cost in Tegallalang?',
        a: 'Tegallalang matches the Ubud rate band: from Full-day stay chef from IDR 2,700,000++ per day, groceries at cost. Any travel allowance is quoted per villa address upfront.',
      },
],
    nearbyAreas: [
      { slug: 'ubud', name: 'Ubud' },
      { slug: 'sayan', name: 'Sayan' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'canggu', name: 'Canggu' },
    ],
    metaTitle: 'Private Chef in Tegallalang, Bali | Rice Terrace Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Tegallalang, Bali. Private dinners overlooking the famous rice terraces — Balinese cuisine, fine dining and catering for retreats. WhatsApp.',
    coordinates: { lat: -8.4320, lng: 115.2790 },
    bookingNote: 'Book 48 hours ahead for Tegallalang terrace villas. Any travel allowance is quoted per address so the total is clear before you pay the deposit.',
    published: true,
  },

  // ─── TIER 1: Denpasar ─────────────────────────────────────────────────────
  {
    slug: 'renon',
    name: 'Renon',
    regency: 'Denpasar',
    tier: 1,
    heroImage: '/generated/mychef-catering-bali-hero-bbq.webp',
    heroAlt: 'Private chef plating at a modern villa in the Renon district of Denpasar',
    intro:
      'Renon is the leafy administrative and diplomatic quarter of Denpasar — home to consulates, professional compounds, and a collection of well-equipped private villas popular with long-term residents and business travellers. myCHEF cooks here for corporate dinners, resident celebration events, and private chef sessions for expats and government guests.',
    villaDensity:
      'Renon has a mix of private homes and villa compounds used by Denpasar\'s professional and expatriate community. It is quieter than the tourist belt but hosts some of Bali\'s most important business dining.',
    guestProfile:
      'Expats and long-term residents in Denpasar, corporate guests and business delegations, government and diplomatic diners, and local professionals hosting private events.',
    landmarks: [
      'Bajra Sandhi Monument',
      'Lapangan Puputan Renon',
      'Jl. Raya Puputan',
      'Sanur corridor (nearby)',
      'Denpasar city centre',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Renon is within our core Denpasar–Sanur service zone. Corporate and long-stay resident packages available on request.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events', 'staffing'],
    faqs: [
      {
        q: 'Does myCHEF cook private chef dinners in Renon, Denpasar?',
        a: 'Yes. We cover Renon and greater Denpasar regularly, particularly for corporate dinners and expat community events. No travel surcharge within the Denpasar service area.',
      },
      {
        q: 'Can you cater a business dinner in Renon?',
        a: 'Yes. We provide full corporate catering including plated service, wait staff, and sommelier service for business dinners, product launches, and team events.',
      },
      {
        q: 'How much does a private chef cost in Renon, Denpasar?',
        a: 'Renon follows standard Denpasar pricing: from Full-day stay chef from IDR 2,700,000++ per day, groceries at cost. Corporate dinners and household meal prep packages are available with same-day quote response.',
      },
      {
        q: 'Can you issue tax invoices for corporate catering in Renon?',
        a: 'Yes — corporate and diplomatic hosting in Renon can include NPWP-ready invoices and itemised proposals. Share guest count, venue and dietary requirements for a fixed quote.',
      },
],
    nearbyAreas: [
      { slug: 'denpasar', name: 'Denpasar' },
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
      { slug: 'seminyak', name: 'Seminyak' },
    ],
    metaTitle: 'Private Chef Renon, Denpasar Bali | Corporate, Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Renon, Denpasar. Corporate dinners, expat villa dining and catering in Bali\'s diplomatic quarter. Transparent rates. WhatsApp myCHEF.',
    coordinates: { lat: -8.6720, lng: 115.2230 },
    bookingNote: 'Book 24–48 hours ahead for Renon villa dinners. Corporate catering and multi-course diplomatic hosting need 1–2 weeks’ notice.',
    published: true,
  },

  // ─── TIER 1: Tabanan ──────────────────────────────────────────────────────
  {
    slug: 'tanah-lot',
    name: 'Tanah Lot',
    regency: 'Tabanan',
    tier: 1,
    heroImage: '/generated/mychef-location-bali-water-sunset.webp',
    heroAlt: 'Private chef serving a sunset dinner at a west-coast villa near Tanah Lot temple, Bali',
    intro:
      'Tanah Lot is Bali\'s most iconic temple — perched on a sea rock at the edge of Tabanan\'s dramatic coastline. The surrounding area has a growing collection of resort-adjacent villas and luxury retreat compounds that attract visitors who want Bali\'s spiritual and natural grandeur paired with world-class private dining. myCHEF cooks sunset dinners, honeymoon experiences, and retreat catering in the Tanah Lot area.',
    villaDensity:
      'Tanah Lot\'s villa scene is resort-led, anchored by Pan Pacific and The Royal Pita Maha. Private villa rentals are fewer but spectacular, often set against rice fields and ocean views.',
    guestProfile:
      'Honeymoon and anniversary couples visiting Bali\'s spiritual heartland, cultural travellers staying at boutique retreat properties, and resort-adjacent guests who want a private in-villa meal.',
    landmarks: [
      'Tanah Lot temple',
      'Batu Bolong Temple',
      'Pan Pacific Nirwana',
      'Jl. Raya Tanah Lot',
      'Tabanan rice fields',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Tanah Lot is ~35–40 minutes from our Seminyak base. Travel allowance is quoted upfront and always transparent. Sunset dinners and multi-day retreat catering available.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Can you cook a private chef dinner near Tanah Lot?',
        a: 'Yes. We cover villas and retreat properties in the Tanah Lot corridor. Travel allowance from Seminyak is quoted clearly before booking — typically IDR 100,000–200,000.',
      },
      {
        q: 'What is the best private dining experience near Tanah Lot?',
        a: 'A sunset fine dining menu on a rice-field villa terrace, timed to catch the golden hour that Tanah Lot is famous for. We can design the full experience including décor, menu, and service style.',
      },
      {
        q: 'How far in advance should I book near Tanah Lot?',
        a: 'Book 48–72 hours ahead for Tanah Lot area dinners so we can plan west-coast logistics and sunset timing. Retreat multi-day catering should be confirmed earlier — WhatsApp us your dates for availability.',
      },
      {
        q: 'Do you cook at resort-adjacent villas near Tanah Lot temple?',
        a: 'Yes — we cover resort-adjacent villas and boutique retreats in the Tanah Lot corridor for sunset dinners, honeymoons and multi-day retreat catering.',
      },
],
    nearbyAreas: [
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'pererenan', name: 'Pererenan' },
      { slug: 'seminyak', name: 'Seminyak' },
      { slug: 'ubud', name: 'Ubud' },
    ],
    metaTitle: 'Private Chef near Tanah Lot, Bali | Sunset Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef near Tanah Lot, Bali. Sunset dinners, honeymoon fine dining and retreat catering in Tabanan\'s iconic coastal area. WhatsApp myCHEF today.',
    coordinates: { lat: -8.6210, lng: 115.0870 },
    bookingNote: 'Book 48–72 hours ahead for Tanah Lot sunset villas. Travel allowance is quoted per address before you confirm — popular for honeymoon and temple-view dinners.',
    published: true,
  },

  // ─── TIER 1: Nusa Islands ─────────────────────────────────────────────────
  {
    slug: 'nusa-lembongan',
    name: 'Nusa Lembongan',
    regency: 'Klungkung',
    tier: 1,
    heroImage: '/generated/mychef-catering-bali-hero-buffet-catering-new.webp',
    heroAlt: 'Private chef serving a fresh seafood dinner at a Nusa Lembongan villa with ocean views',
    intro:
      'Nusa Lembongan is Bali\'s most popular island escape — 30 minutes by fast boat from Sanur, with turquoise water, mangrove channels, and a relaxed village atmosphere that feels a world away from the mainland. myCHEF makes the trip here to cook for villa and bungalow guests who want a proper private dining experience — fresh Balinese seafood, sunset fine dining, and full villa catering for celebration groups.',
    villaDensity:
      'Lembongan has a mix of boutique resorts, eco-villas, and private bungalows spread along the north and east coast. The island is car-free in most areas, adding to the intimate, off-the-grid feel.',
    guestProfile:
      'Couples and honeymooners on a 2–5 night island escape, small celebration groups, villa renters who want a special private meal without having to leave the island.',
    landmarks: [
      'Devil\'s Tear cliff',
      'Mushroom Bay',
      'Dream Beach',
      'Mangrove Forest',
      'Jungut Batu village',
      'Sandy Bay',
    ],
    priceFrom: 'From IDR 2,500,000 per session',
    pricingNote:
      'Nusa Lembongan requires a fast boat from Sanur. Island transport and travel time are quoted upfront. All ingredients travel with the chef. Minimum 2-person booking.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq'],
    faqs: [
      {
        q: 'Does myCHEF travel to Nusa Lembongan for private chef bookings?',
        a: 'Yes. We take the fast boat from Sanur with all equipment and ingredients. Travel cost and time are included in the quote — always transparent before booking.',
      },
      {
        q: 'What kind of menus do you offer on Nusa Lembongan?',
        a: 'We specialise in fresh Balinese seafood and Indonesian cuisine on the island. BBQ grill feasts, tasting menus, and family-style dinners are all available.',
      },
      {
        q: 'How do logistics work for a private chef on Nusa Lembongan?',
        a: 'We travel by fast boat from Sanur with full kitchen equipment and pre-planned market runs. Island logistics are quoted transparently upfront. Book 72 hours ahead so ferry and sourcing can be locked.',
      },
      {
        q: 'How far ahead should I book a private chef on Nusa Lembongan?',
        a: 'Book 3–5 days ahead so we can confirm fast-boat logistics, ingredient transport and on-island timing. Multi-day island stays can be packaged as one quote.',
      },
],
    nearbyAreas: [
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
      { slug: 'denpasar', name: 'Denpasar' },
      { slug: 'jimbaran', name: 'Jimbaran' },
    ],
    metaTitle: 'Private Chef on Nusa Lembongan | Island Villa Dining | myCHEF Bali',
    metaDescription:
      'Book a private chef on Nusa Lembongan, Bali. Fresh seafood, sunset fine dining and villa catering on Bali\'s favourite island escape. myCHEF travels to you.',
    coordinates: { lat: -8.6840, lng: 115.4540 },
    bookingNote:
      'Book 3–5 days ahead. Fast boat logistics and ingredient transport confirmed on booking.',
    published: true,
  },
  {
    slug: 'nusa-penida',
    name: 'Nusa Penida',
    regency: 'Klungkung',
    tier: 1,
    heroImage: '/generated/mychef-catering-bali-hero-buffet-catering.webp',
    heroAlt: 'Private chef preparing a clifftop dinner at a Nusa Penida villa overlooking the ocean',
    intro:
      'Nusa Penida is Bali\'s wild and spectacular island — the largest of the three Nusa islands, famous for Kelingking Beach, Crystal Bay, and its dramatic limestone cliffs. A growing number of luxury villas have appeared on the clifftop ridges, attracting a new wave of high-end travellers who want Bali\'s most remote scenery with a world-class private dining experience to match. myCHEF travels here for clifftop fine dining, villa celebration events, and longer-stay chef packages.',
    villaDensity:
      'Nusa Penida\'s villa scene is still emerging — a handful of spectacular clifftop properties with ocean panoramas. Lower density means total privacy; these bookings are among the most exclusive myCHEF takes.',
    guestProfile:
      'Adventure-luxury travellers at clifftop villas, photographers and creatives on extended island shoots, and couples celebrating milestones at one of Bali\'s most breathtaking addresses.',
    landmarks: [
      'Kelingking Beach',
      'Crystal Bay',
      'Broken Beach',
      'Angel\'s Billabong',
      'Atuh Beach',
      'Nusa Penida town',
    ],
    priceFrom: 'From IDR 3,000,000 per session',
    pricingNote:
      'Nusa Penida requires a fast boat from Sanur plus on-island transport. All costs quoted upfront. This is a premium island experience.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq'],
    faqs: [
      {
        q: 'Does myCHEF cook on Nusa Penida?',
        a: 'Yes. We travel by fast boat from Sanur with chef, equipment, and fresh ingredients. Due to distance, Nusa Penida bookings carry a premium — quoted clearly before confirmation.',
      },
      {
        q: 'What makes a myCHEF dinner on Nusa Penida special?',
        a: 'The combination of truly remote clifftop or beachfront villa settings, fresh local seafood, and a fully managed myCHEF experience creates something very few guests anywhere in the world get to experience.',
      },
      {
        q: 'How far in advance should I book a private chef on Nusa Penida?',
        a: 'Nusa Penida needs more lead time than mainland Bali — ideally 4–5 days — so we can arrange inter-island logistics, equipment and fresh sourcing. Share your villa location and dates on WhatsApp.',
      },
      {
        q: 'What logistics should we expect for Nusa Penida chef service?',
        a: 'We travel by boat with ingredients and equipment. Booking lead time is longer than mainland Bali — confirm 5–7 days ahead so ferry and weather windows are planned.',
      },
],
    nearbyAreas: [
      { slug: 'nusa-lembongan', name: 'Nusa Lembongan' },
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'denpasar', name: 'Denpasar' },
      { slug: 'nusa-dua', name: 'Nusa Dua' },
    ],
    metaTitle: 'Private Chef on Nusa Penida | Clifftop Island Dining | myCHEF Bali',
    metaDescription:
      'Book a private chef on Nusa Penida, Bali. Clifftop villa fine dining and island catering at Kelingking, Crystal Bay, and Atuh Beach. myCHEF travels to you.',
    coordinates: { lat: -8.7280, lng: 115.5440 },
    bookingNote:
      'Book 5–7 days ahead. Fast boat, on-island transport, and ingredient logistics all confirmed on booking.',
    published: true,
  },

  // ── Phase 1 Tier 1 completion — Gianyar, Tabanan & Islands ──

  {
    slug: 'mas',
    name: 'Mas',
    regency: 'Gianyar',
    tier: 1,
    heroImage: '/generated/mychef-catering-bali-hero-buffet.webp',
    heroAlt: 'Private chef serving an intimate tasting dinner at a boutique villa in Mas, Bali',
    intro:
      'Mas sits on the Ubud–Denpasar corridor — famous for its master woodcarvers and a concentration of boutique villas tucked behind stone-walled compounds. The pace is quieter than central Ubud, the gardens are spectacular, and myCHEF cooks here for retreat groups, villa families, and couples who want full Balinese fine dining without the tourist centre hustle.',
    villaDensity:
      'Mas has a medium-to-high concentration of boutique villas and artist compounds along the woodcarving corridor south of Ubud — quieter than central Ubud, with kitchens suited to private dining.',
    guestProfile:
      'Boutique villa guests, art collectors, retreat participants and wellness travellers who want Ubud access without the town-centre crowds.',
    landmarks: ['Taman Rahasia', 'Mas artisan village', 'Ubud corridor road', 'Traditional woodcarving galleries', 'Setia Darma House of Masks', 'Wos River valley edge'],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Mas sits in the greater Ubud service area — standard Ubud pricing applies. Grocery cost at market rate from Pasar Ubud.',
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Do you cook private chef dinners in Mas, Bali?',
        a: 'Yes — myCHEF cooks throughout Mas and the greater Ubud corridor. We shop at Pasar Ubud and arrive at your villa with everything needed. Book 48 hours ahead for weekday sessions.',
      },
      {
        q: 'How much does a private chef cost in Mas?',
        a: 'Private chef service in Mas starts from Full-day stay chef from IDR 2,700,000++ per day plus groceries at cost. Fine dining tasting menus start from IDR 980,000 per person. Contact us for a personalised quote.',
      },
      {
        q: 'Is Mas far from central Ubud for a private chef?',
        a: 'Mas is about 10 minutes south of central Ubud — no surcharge applies. myCHEF serves all of the Ubud corridor including Mas, Pengosekan, and Nyuh Kuning.',
      },
      {
        q: 'Can you cater a retreat group in Mas?',
        a: 'Yes — Mas boutique villas often host small retreat groups. We handle multi-day meal plans, Balinese feasts and fine dining with grocery sourcing from Pasar Ubud.',
      },
    ],
    nearbyAreas: [
      { slug: 'ubud', name: 'Ubud' },
      { slug: 'sayan', name: 'Sayan' },
      { slug: 'tegallalang', name: 'Tegallalang' },
      { slug: 'sanur', name: 'Sanur' },
    ],
    metaTitle: 'Private Chef in Mas, Bali | Villa Dining in the Ubud Corridor | myCHEF',
    metaDescription:
      'Book a private chef in Mas, Bali. myCHEF cooks at your boutique villa — fine dining, Balinese feasts, and catering for retreat groups. Gianyar artisan village.',
    coordinates: { lat: -8.5570, lng: 115.2610 },
    bookingNote: 'Book 48 hours ahead for Mas artisan-village villas. Grocery sourcing from Pasar Ubud is included in the chef workflow and itemised with receipts.',
    published: true,
  },

  {
    slug: 'penestanan',
    name: 'Penestanan',
    regency: 'Gianyar',
    tier: 1,
    heroImage: '/generated/mychef-catering-bali-hero-corporate.webp',
    heroAlt: 'Chef preparing a refined Balinese dinner at a Penestanan villa above the rice terraces',
    intro:
      "Penestanan perches on the ridge just west of Ubud — known to longtime Bali travellers as the artists' quarter, home to rice-terrace villas, creative residencies, and some of the most photogenic valley views on the island. myCHEF cooks here for long-stay villa guests and retreat facilitators who want unhurried, ingredients-led fine dining above the gorge.",
    villaDensity:
      'Penestanan holds a medium cluster of ridge villas and garden compounds above the Campuhan — walkable to Ubud yet separated enough for privacy and terrace dining.',
    guestProfile:
      'Long-stay villa guests, creative professionals, wellness retreat participants and honeymooners who chose the ridge for views and quiet.',
    landmarks: ['Campuhan Ridge Walk', 'Penestanan rice terraces', 'Sari Organic', 'Arma Museum (nearby)', 'Tjampuhan Hotel ridge'],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Penestanan is in the Ubud service area — standard pricing applies. Fine dining tasting menus from IDR 980,000 per person.',
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Can you cook at villas in Penestanan above the Campuhan ridge?',
        a: 'Yes — myCHEF serves all of Penestanan and the Campuhan ridge area. We arrive with everything. The terrace views make for one of the best private dining settings in Bali.',
      },
      {
        q: 'How much does a private chef dinner cost in Penestanan?',
        a: 'Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost. Fine dining tasting menus start from IDR 980,000 per person for two or more guests.',
      },
      {
        q: 'How far is Penestanan from central Ubud?',
        a: 'Penestanan is 10–15 minutes from central Ubud by scooter — we treat it as part of the Ubud service area with no travel surcharge.',
      },
      {
        q: 'Do you offer multi-day chef service in Penestanan?',
        a: 'Yes — multi-day and weekly service for ridge villas above Campuhan is common. Menus can mix plant-forward lunches with fine dining dinners; no travel surcharge from Ubud.',
      },
    ],
    nearbyAreas: [
      { slug: 'ubud', name: 'Ubud' },
      { slug: 'sayan', name: 'Sayan' },
      { slug: 'mas', name: 'Mas' },
      { slug: 'tegallalang', name: 'Tegallalang' },
    ],
    metaTitle: 'Private Chef in Penestanan, Bali | Rice Terrace Villa Dining | myCHEF',
    metaDescription:
      'Hire a private chef in Penestanan, Bali. myCHEF cooks at your ridge villa above the Campuhan — fine dining, tasting menus and retreat catering. WhatsApp myCHEF.',
    coordinates: { lat: -8.5070, lng: 115.2530 },
    bookingNote: 'Book 48 hours ahead for Penestanan ridge villas. Ingredients sourced from Ubud market; no travel surcharge from the Ubud service zone.',
    published: true,
  },

  {
    slug: 'nyanyi',
    name: 'Nyanyi',
    regency: 'Tabanan',
    tier: 1,
    heroImage: '/generated/mychef-catering-bali-hero-dropoff.webp',
    heroAlt: 'Private chef dinner on the beach terrace at a Nyanyi villa, Tabanan, Bali',
    intro:
      "Nyanyi is a quiet black-sand beach village on Tabanan's coast — uncrowded, dramatic, and increasingly popular with guests who want the feel of Canggu's surfside villas without the crowds. A cluster of high-end private villas faces the Indian Ocean here, and myCHEF cooks for the guests who book them: surfers, digital nomads, and families who want the coastline to themselves.",
    villaDensity:
      'Nyanyi has a medium, still-low-key villa strip on Tabanan\'s black-sand coast — private estates with ocean aspect and far fewer rentals than Canggu.',
    guestProfile:
      'Surfers, remote workers, families on private villa stays and guests seeking an uncrowded Tabanan coastline just north of the Canggu belt.',
    landmarks: ['Nyanyi Beach', 'Tabanan black-sand coast', 'Echo Beach (nearby)', 'Seseh–Nyanyi surf break', 'Pererenan rice fields (nearby)', 'Canggu surf belt north edge'],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Nyanyi is in the Canggu–Tabanan service zone — standard pricing applies with travel factored into the session rate. Multi-day coast packages available.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Does myCHEF cook at villas in Nyanyi, Tabanan?',
        a: 'Yes — myCHEF serves Nyanyi and the Tabanan coastline. We source fresh seafood from local suppliers and cook at your villa. Book 48 hours ahead for standard sessions.',
      },
      {
        q: 'How much is a private chef in Nyanyi, Bali?',
        a: 'Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost. Seafood-focused menus and BBQ packages are available. Contact us for a quote.',
      },
      {
        q: 'Is Nyanyi near Canggu for a private chef?',
        a: 'Nyanyi is about 15–20 minutes north of Canggu along the Tabanan coast. myCHEF covers both areas — same service, same quality, just a quieter stretch of coast.',
      },
      {
        q: 'Can you source fresh seafood for a Nyanyi sunset dinner?',
        a: 'Yes — when available we prioritise local seafood for Nyanyi coast villas and time service to the west-coast sunset. Confirm preferences when you book.',
      },
    ],
    nearbyAreas: [
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'cemagi', name: 'Cemagi' },
      { slug: 'seseh', name: 'Seseh' },
      { slug: 'pererenan', name: 'Pererenan' },
    ],
    metaTitle: 'Private Chef in Nyanyi, Bali | Tabanan Beach Villa Dining | myCHEF',
    metaDescription:
      'Hire a private chef in Nyanyi, Tabanan. myCHEF cooks at your coast villa — fresh seafood, sunset fine dining, and catering for surf retreats and families.',
    coordinates: { lat: -8.5960, lng: 115.1070 },
    bookingNote: 'Book 48 hours ahead for Nyanyi coast villas. Fresh local seafood is preferred when available; same-day WhatsApp response guaranteed.',
    published: true,
  },

  {
    slug: 'cemagi',
    name: 'Cemagi',
    regency: 'Tabanan',
    tier: 1,
    heroImage: '/generated/mychef-catering-bali-hero-floating-breakfast.webp',
    heroAlt: 'Chef serving sunset dinner at an ocean-view villa in Cemagi, Tabanan, Bali',
    intro:
      "Cemagi stretches along the Tabanan coast between Canggu and Tanah Lot — a low-density strip of luxury villas with ocean-facing infinity pools and rice fields rolling to the horizon. It is the kind of place where guests book for a week, don't leave the property, and want a chef on call. myCHEF covers Cemagi for multi-day villa stays, wedding-party weekends, and private retreats.",
    villaDensity:
      'Cemagi\'s villa stock is medium density but high end — ocean-facing estates and rice-field compounds between Canggu and Tanah Lot with serious event kitchens.',
    guestProfile:
      "Luxury villa guests on extended stays, wedding parties, retreat groups and families seeking seclusion on Cemagi's quiet Tabanan coast.",
    landmarks: ['Cemagi beach', 'Tabanan rice fields', 'Tanah Lot (15 min)', 'Canggu surf coast (nearby)', 'Seseh black-sand stretch', 'West coast temple road'],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Cemagi is within the Canggu–Tabanan service zone. Standard pricing applies with no surprise travel fees. Multi-day and full-board packages available on request.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Can myCHEF cook at villas in Cemagi, Tabanan?',
        a: 'Yes — Cemagi is within our regular Tabanan service area. We handle all ingredient logistics and arrive fully equipped. Book 48 hours ahead for standard sessions.',
      },
      {
        q: 'How much does private chef catering cost in Cemagi?',
        a: 'Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost. Multi-day packages and full-board arrangements are available for longer villa stays. Contact us for a tailored quote.',
      },
      {
        q: 'Do you do events and weddings at villas in Cemagi?',
        a: 'Yes — Cemagi villas make excellent event venues. myCHEF handles catering for villa weddings, birthday parties, and retreat celebrations. We bring the full team, all equipment, and manage setup through cleanup.',
      },
      {
        q: 'How far is Cemagi from Canggu for a private chef booking?',
        a: 'Cemagi sits on the Tabanan coast between Canggu and Tanah Lot, within our regular west-coast service flow. Standard pricing applies; multi-day packages available.',
      },
    ],
    nearbyAreas: [
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'nyanyi', name: 'Nyanyi' },
      { slug: 'seseh', name: 'Seseh' },
      { slug: 'tanah-lot', name: 'Tanah Lot' },
    ],
    metaTitle: 'Private Chef Cemagi Bali | Luxury Tabanan Coast Dining | myCHEF',
    metaDescription:
      "Hire a private chef in Cemagi, Tabanan. myCHEF serves luxury villas, weddings and retreats on Bali's quiet west coast. Multi-day packages available. WhatsApp myCHEF.",
    coordinates: { lat: -8.6070, lng: 115.1000 },
    bookingNote: 'Book 48 hours ahead for Cemagi ocean-view villas. Multi-day and full-board chef packages for week-long stays are available on request.',
    published: true,
  },

  {
    slug: 'seseh',
    name: 'Seseh',
    regency: 'Tabanan',
    tier: 1,
    heroImage: '/generated/mychef-catering-bali-hero-grazing.webp',
    heroAlt: 'Private chef preparing dinner at a cliffside villa in Seseh, Tabanan, Bali',
    intro:
      "Seseh is Bali's best-kept coastal secret — a black-sand stretch where a handful of architect-designed villas look out at the open Indian Ocean with no tourist infrastructure in sight. The guests who stay here know exactly what they want: complete privacy, no noise, and exceptional food. myCHEF has been cooking here since the first luxury villas opened and knows the area intimately.",
    villaDensity:
      'Seseh is low-to-medium density: a handful of architect-designed black-sand villas with little tourist infrastructure — privacy is the product.',
    guestProfile:
      'High-end travellers seeking privacy, honeymoon couples, family villa groups and architecture enthusiasts who book Seseh on purpose.',
    landmarks: ['Seseh Beach', 'Tabanan cliffside', 'Canggu surf coast (30 min)', 'Tanah Lot (20 min)', 'Cemagi villa corridor', 'Nyanyi beach access'],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Seseh is in the Tabanan coastal service area. Standard pricing applies with no travel surcharge. Groceries billed at Tabanan market rates.',
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Does myCHEF service villas in Seseh, Tabanan?',
        a: 'Yes — Seseh is a regular destination for myCHEF. We serve all villa properties in the area. Same-day response, 48-hour booking lead time for standard sessions.',
      },
      {
        q: 'What does a private chef cost in Seseh, Bali?',
        a: 'Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost. Fine dining tasting menus start from IDR 980,000 per person. Contact us for a personalised quote.',
      },
      {
        q: 'Is Seseh far from Canggu for grocery sourcing?',
        a: 'Seseh is about 20 minutes from Canggu. myCHEF handles all ingredient logistics — we source from Tabanan and Denpasar markets and arrive fully stocked.',
      },
      {
        q: 'Can you cook a honeymoon dinner at a Seseh cliff villa?',
        a: 'Yes — Seseh is popular for private honeymoon and anniversary dinners. We handle discreet service, menu design and full cleanup at low-density black-sand villas.',
      },
    ],
    nearbyAreas: [
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'cemagi', name: 'Cemagi' },
      { slug: 'nyanyi', name: 'Nyanyi' },
      { slug: 'pererenan', name: 'Pererenan' },
    ],
    metaTitle: 'Private Chef Seseh Bali | Cliffside Tabanan Dining | myCHEF',
    metaDescription:
      "Hire a private chef in Seseh, Tabanan. myCHEF serves private coastal villas — fine dining, intimate dinners and catering on the black-sand west coast. WhatsApp.",
    coordinates: { lat: -8.5900, lng: 115.1020 },
    bookingNote: 'Book 48 hours ahead for Seseh black-sand villas. Full ingredient logistics handled; same-day WhatsApp response for date availability.',
    published: true,
  },

  {
    slug: 'nusa-ceningan',
    name: 'Nusa Ceningan',
    regency: 'Klungkung',
    tier: 1,
    heroImage: '/generated/mychef-catering-bali-hero-plated.webp',
    heroAlt: 'Chef serving a sunset dinner at a clifftop boutique villa on Nusa Ceningan, Bali',
    intro:
      "Nusa Ceningan is the smallest of Bali's three sister islands — a 3 km² lagoon-ringed gem connected to Nusa Lembongan by the famous Yellow Bridge. It hosts a handful of boutique clifftop villas, surf bungalows, and a blue lagoon that defines the island's character. myCHEF travels here for guests who want a private chef experience as wild and beautiful as the island itself.",
    villaDensity:
      'Nusa Ceningan\'s villa inventory is low — boutique clifftop and lagoon-side properties, not a high-density rental belt. Bookings are intimate and logistics-aware.',
    guestProfile:
      'Adventurous travellers, surfers, boutique villa guests and couples on romantic island escapes who want the Yellow Bridge sister-island pace.',
    landmarks: ['Yellow Bridge (Lembongan link)', 'Blue Lagoon cliff jump', 'Ceningan cliffs', 'Nusa Lembongan channel', 'Mahana Point', 'Secret Point Beach'],
    priceFrom: 'IDR 2,500,000',
    pricingNote:
      'Nusa Ceningan requires a fast boat from Sanur plus on-island transfer. Island transport quoted upfront. Minimum 2-person booking. All ingredients travel with the chef.',
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Can I book a private chef on Nusa Ceningan?',
        a: 'Yes — myCHEF travels to Nusa Ceningan. We take the fast boat from Sanur with all ingredients and equipment. Book 5–7 days ahead to allow time for logistics confirmation.',
      },
      {
        q: 'How much does a private chef cost on Nusa Ceningan?',
        a: `Sessions start from IDR 2,500,000 including island transport. ${siteFacts.groceryPolicy}. The premium covers fast boat, on-island transfer, and the extra logistical effort. Contact us for a full quote.`,
      },
      {
        q: 'Is Nusa Ceningan different from Nusa Lembongan for a chef booking?',
        a: 'They are different islands connected by the Yellow Bridge — myCHEF serves both. Ceningan is smaller and more remote; Lembongan has more villa options. Same logistics and transport apply to both.',
      },
      {
        q: 'How far ahead should I book a private chef on Nusa Ceningan?',
        a: 'Book 5–7 days ahead. Fast boat from Sanur, on-island transfer and full ingredient logistics are confirmed on booking with a fixed quote.',
      },
    ],
    nearbyAreas: [
      { slug: 'nusa-lembongan', name: 'Nusa Lembongan' },
      { slug: 'nusa-penida', name: 'Nusa Penida' },
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'denpasar', name: 'Denpasar' },
    ],
    metaTitle: 'Private Chef on Nusa Ceningan | Island Villa Dining | myCHEF Bali',
    metaDescription:
      "Book a private chef on Nusa Ceningan, Bali. myCHEF travels to the sister islands — clifftop fine dining, seafood feasts, and island catering at your villa.",
    coordinates: { lat: -8.6980, lng: 115.4520 },
    bookingNote: 'Book 5–7 days ahead for Nusa Ceningan. Fast boat from Sanur, on-island transfer and full ingredient logistics are confirmed on booking with a fixed quote.',
    published: true,
  },

  // ─── PHASE 2: TIER 2 EXPANSION ────────────────────────────────────────────

  // BADUNG — Bukit Peninsula surf/villa belt
  {
    slug: 'balangan',
    name: 'Balangan',
    regency: 'Badung',
    tier: 2,
    heroImage: '/generated/mychef-catering-bali-hero-retreat.webp',
    heroAlt: 'Private chef preparing a sunset dinner at a clifftop Balangan villa above the Indian Ocean',
    intro:
      "Balangan Beach sits on the southwestern tip of the Bukit Peninsula — a quiet clifftop enclave of boutique villas, reef surf breaks, and sweeping Indian Ocean views. myCHEF serves intimate couples' dinners and small group surf-trip feasts from the hillside properties here, with menus built around local seafood and service timed to the Balangan sunset.",
    villaDensity:
      'Balangan has a small but growing collection of clifftop and hillside villas — mostly boutique and private, with pool decks that face due west over the Indian Ocean. Far fewer villas than Uluwatu or Jimbaran, but the ones here are genuinely secluded.',
    guestProfile:
      'Surfers who want a proper meal after the break, couples seeking a quieter Bukit alternative, and villa guests who found Uluwatu too busy and Balangan just right.',
    landmarks: [
      'Balangan Beach',
      'Balangan cliff viewpoint',
      'Jl. Balangan reef break',
      'Bukit Peninsula west coast',
      'Dreamland Beach (nearby)',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      `Same pricing structure as South Bali Bukit coverage. 50% deposit confirms the booking. ${siteFacts.groceryPolicy}. Sunset and surf-trip packages quoted on request.`,
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Does myCHEF serve Balangan Beach villas?',
        a: 'Yes — myCHEF covers the full Bukit Peninsula including Balangan. The clifftop access is no issue; our chefs arrive fully equipped with all ingredients and gear.',
      },
      {
        q: 'What kind of menus work best for a Balangan villa dinner?',
        a: "Balangan sunsets call for relaxed seafood-forward menus — grilled catch of the day, Balinese flavours, and lighter multi-course dining that lets the view do the talking. We also do surf-trip recovery feasts for groups. All dietary requirements catered.",
      },
      {
        q: 'How far in advance should I book?',
        a: 'We recommend 48 hours ahead for standard sessions, 72 hours for larger groups or bespoke menus. Contact us via WhatsApp for faster turnaround.',
      },
      {
        q: 'Is there a travel fee for Balangan cliff villas?',
        a: 'Balangan is on the Bukit Peninsula within our South Bali coverage. Any travel allowance is quoted per address before you confirm — never added after booking.',
      },
    ],
    nearbyAreas: [
      { slug: 'uluwatu', name: 'Uluwatu' },
      { slug: 'bingin', name: 'Bingin' },
      { slug: 'pecatu', name: 'Pecatu' },
      { slug: 'jimbaran', name: 'Jimbaran' },
    ],
    metaTitle: 'Private Chef Balangan Bali | Clifftop Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Balangan, Bali. myCHEF serves clifftop villas on the Bukit Peninsula — seafood dinners, Balinese menus and surf-trip catering packages.',
    coordinates: { lat: -8.8255, lng: 115.0847 },
    bookingNote: 'Book 48 hours ahead for Balangan cliff dinners; 72 hours for groups or bespoke menus. Bukit access and gear are handled by our team.',
    published: true,
  },

  {
    slug: 'bingin',
    name: 'Bingin',
    regency: 'Badung',
    tier: 2,
    heroImage: '/generated/mychef-catering-bali-hero-villa.webp',
    heroAlt: 'Private chef serving a clifftop dinner at a Bingin villa above the reef break',
    intro:
      "Bingin is a clifftop surf village on the Bukit Peninsula with some of Bali's most dramatic ocean views. The boutique tiered villas built into the limestone cliffs are a spectacular setting for a private chef dinner above the break. Guests book here for sunset timing, small-group surf trips, and intimate cliff-edge tables — myCHEF arrives fully equipped and cooks to the villa kitchen, not a hotel template.",
    villaDensity:
      "Bingin's villas are small, tiered down the limestone cliff face, and deliberately low-key. Think 4–12 person boutique properties with infinity pools, exposed stone, and nothing between you and the horizon. Access requires a short cliff walk — our team knows every path.",
    guestProfile:
      'Surf travellers who have been here before and came back for the same reason, couples seeking the most dramatic sunset setting on the Bukit, and small friend groups splitting a clifftop villa.',
    landmarks: [
      'Bingin Beach',
      'Bingin cliff path',
      'The Bukit limestone cliffs',
      'Dreamland Beach (nearby)',
      'Impossibles break (nearby)',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      `All ingredients, equipment, and cliff access included. 50% deposit confirms the booking. ${siteFacts.groceryPolicy}.`,
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Can a private chef reach cliff villas in Bingin?',
        a: 'Yes — our chefs know the cliff paths and villa access in Bingin well. We carry all equipment and ingredients ourselves, so steep or narrow access is not a problem.',
      },
      {
        q: 'What menus suit a Bingin surf trip?',
        a: "We design menus around your group. Surf trips typically go for big communal dinners — fresh fish, grilled meats, Balinese sides — plenty of energy and flavour. Couples and small groups often prefer a quieter fine dining session at sunset.",
      },
      {
        q: 'Is there a minimum guest number for Bingin bookings?',
        a: 'No minimum. We cook for couples, families, and surf groups alike. Pricing is based on menu and guest count. Contact us for a quote.',
      },
      {
        q: 'How far in advance should I book a private chef in Bingin?',
        a: 'Book 48 hours ahead for standard cliff dinners; 72 hours for larger surf groups or bespoke menus. WhatsApp for last-minute availability checks.',
      },
    ],
    nearbyAreas: [
      { slug: 'uluwatu', name: 'Uluwatu' },
      { slug: 'balangan', name: 'Balangan' },
      { slug: 'pecatu', name: 'Pecatu' },
      { slug: 'ungasan', name: 'Ungasan' },
    ],
    metaTitle: 'Private Chef Bingin Bali | Clifftop Villa Dining | myCHEF',
    metaDescription:
      'Private chef in Bingin, Bali. myCHEF cooks in cliff villas above the break — sunset dinners, seafood feasts, and surf-trip catering on the Bukit Peninsula.',
    coordinates: { lat: -8.8192, lng: 115.0906 },
    bookingNote: 'Book 48 hours ahead for Bingin cliff villas. Our team knows the cliff paths and arrives fully equipped — steep access is not a problem.',
    published: true,
  },

  {
    slug: 'padang-padang',
    name: 'Padang Padang',
    regency: 'Badung',
    tier: 2,
    heroImage: '/generated/mychef-caviar-experience-bali-champagne-service.webp',
    heroAlt: 'Private chef plating a fresh seafood dinner at a Padang Padang villa with ocean views',
    intro:
      "Padang Padang is one of Bali's most photographed surf beaches — a sheltered cove beneath the Bukit Peninsula cliffs. The villas around Padang Padang attract surfers, honeymooners, and guests seeking a quieter Bali. myCHEF serves them all with market-fresh menus, sunset-timed service, and full kitchen reset after dinner so the villa stays holiday-ready.",
    villaDensity:
      'The Padang Padang area has a mix of budget guesthouses and boutique clifftop villas, with the higher-end properties commanding unobstructed westerly views. Villa density is low compared to the main Bukit strip — it is quieter and more private.',
    guestProfile:
      'Surfers returning to a favourite spot, honeymooners who researched beyond the obvious choices, and villa holidaymakers who value privacy over proximity to nightlife.',
    landmarks: [
      'Padang Padang Beach',
      'Padang Padang cave entrance',
      'The Bukit cliff road',
      'Labuan Sait (nearby)',
      'Uluwatu Temple (10 min)',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      `Standard Bukit Peninsula pricing applies. 50% deposit confirms the booking. ${siteFacts.groceryPolicy}. Surf-trip and sunset packages quoted on request.`,
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Does myCHEF serve villas near Padang Padang beach?',
        a: 'Yes — we cover the villas and properties around Padang Padang. Logistics on the Bukit are second nature to our team.',
      },
      {
        q: 'What is a typical private chef dinner at Padang Padang like?',
        a: 'Most guests opt for a relaxed sunset dinner — 3 to 4 courses, fresh local produce, and a mix of Balinese and international dishes. We set up in your villa, cook on-site, and clear up after.',
      },
      {
        q: 'Can you cater for a group surf trip near Padang Padang?',
        a: 'Absolutely. Group catering is one of our specialties — big shared meals, BBQ sessions, and day-long packages for active groups. Contact us with group size and days for a quote.',
      },
      {
        q: 'How much does a private chef cost near Padang Padang?',
        a: 'Padang Padang follows Bukit Peninsula pricing: from Full-day stay chef from IDR 2,700,000++ per day, groceries at cost. Group surf packages are quoted per guest count.',
      },
    ],
    nearbyAreas: [
      { slug: 'uluwatu', name: 'Uluwatu' },
      { slug: 'bingin', name: 'Bingin' },
      { slug: 'balangan', name: 'Balangan' },
      { slug: 'jimbaran', name: 'Jimbaran' },
    ],
    metaTitle: 'Private Chef Padang Padang Bali | Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef near Padang Padang, Bali. myCHEF serves Bukit Peninsula villas — sunset dinners, surf-trip catering, and Balinese menus by the clifftop.',
    coordinates: { lat: -8.8118, lng: 115.0879 },
    bookingNote: 'Book 48–72 hours ahead for Padang Padang villas. Logistics, cliff access and market sourcing are confirmed on booking with a fixed quote.',
    published: true,
  },

  // GIANYAR — Ubud surrounds
  {
    slug: 'sukawati',
    name: 'Sukawati',
    regency: 'Gianyar',
    tier: 2,
    heroImage: '/generated/mychef-caviar-experience-bali-hero-villa.webp',
    heroAlt: 'Private chef preparing a traditional Balinese feast at a rice-field villa in Sukawati',
    intro:
      'Sukawati is a traditional Balinese town in Gianyar regency — known for its art markets, dance performances, and deeply rooted Hindu culture. Villas here are immersed in authentic Bali, and the food should match. myCHEF brings genuine Balinese cooking to Sukawati stays — market-led rijsttafel, ceremonial-inspired feasts, and private dinners that fit village villa compounds.',
    villaDensity:
      'Sukawati and the surrounding Gianyar south have a modest but growing villa inventory — mostly mid-range family villas and cultural guesthouses in traditional compounds. Less built up than Ubud, more genuinely village-embedded.',
    guestProfile:
      'Cultural travellers who want the real Gianyar experience, families spending time at a traditional compound, and guests who prioritise authenticity over amenities.',
    landmarks: [
      'Sukawati Art Market',
      'Sukawati traditional theatre',
      'Jl. Raya Sukawati',
      'Blahbatuh Temple (nearby)',
      'Pasar Seni Sukawati',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      `Same pricing as the Ubud and Gianyar zone. 50% deposit confirms booking. ${siteFacts.groceryPolicy}. Balinese feast menus available on request.`,
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Can I book a private chef for a Balinese cooking experience in Sukawati?',
        a: "Yes — our Gianyar chefs specialise in traditional Balinese cuisine including sate lilit, lawar, and full Balinese feast spreads.",
      },
      {
        q: 'Is Sukawati in the same service zone as Ubud?',
        a: 'Yes — Sukawati falls within our Gianyar service zone. The same team that covers Ubud, Mas, and Penestanan serves Sukawati with no travel surcharge.',
      },
      {
        q: 'What styles of cuisine does myCHEF offer in Sukawati?',
        a: 'We offer traditional Balinese, modern Indonesian, Asian fusion, and international menus. Most guests here prefer a Balinese-focused experience, but we adapt to any dietary preference.',
      },
      {
        q: 'How much does a private chef cost in Sukawati?',
        a: 'Sukawati matches the Ubud–Gianyar rate band: from Full-day stay chef from IDR 2,700,000++ per day, groceries at cost with receipts. Balinese feast menus available on request.',
      },
    ],
    nearbyAreas: [
      { slug: 'ubud', name: 'Ubud' },
      { slug: 'mas', name: 'Mas' },
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'denpasar', name: 'Denpasar' },
    ],
    metaTitle: 'Private Chef Sukawati Bali | Balinese Villa Dining | myCHEF',
    metaDescription:
      'Hire a private chef in Sukawati. myCHEF serves Gianyar villas with authentic Balinese menus, traditional cooking, and private dining in rice-field settings.',
    coordinates: { lat: -8.6295, lng: 115.2869 },
    bookingNote: 'Book 48 hours ahead for Sukawati and Gianyar hinterland villas. Same logistics and rate band as the Ubud service zone apply.',
    published: true,
  },

  {
    slug: 'payangan',
    name: 'Payangan',
    regency: 'Gianyar',
    tier: 2,
    heroImage: '/generated/mychef-caviar-experience-bali-service-station.webp',
    heroAlt: 'Private chef serving a healthy retreat dinner at an eco-villa in the Payangan jungle valley',
    intro:
      'Payangan is a highland retreat north of Ubud in Gianyar regency — jungle river valleys, eco-resorts, and some of the most secluded private villas in Bali. myCHEF serves retreat properties and private villa guests here with sessions designed for the highland setting — organic produce, wellness-friendly menus, and multi-day catering for quiet jungle compounds.',
    villaDensity:
      'Payangan has a curated inventory of eco-lodges, jungle retreat villas, and organic farm stays. Properties are deliberately spaced out — this is not a dense villa corridor but a series of carefully placed sanctuaries in the valley above Ubud.',
    guestProfile:
      'Wellness retreat guests, yoga practitioners, couples on a digital detox, and long-stay travellers who discovered Payangan and extended their trip by a week.',
    landmarks: [
      'Sungai Ayung gorge',
      'Payangan organic farms',
      'Jl. Raya Payangan',
      'Buahan village',
      'Ayung River rafting (nearby)',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'No additional travel surcharge within the Gianyar zone. 50% deposit confirms booking. Wellness and multi-day retreat packages available on request.',
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Does myCHEF cater for wellness retreats in Payangan?',
        a: 'Yes — we design retreat menus that are clean, plant-forward, and flavour-led. We work with retreat organisers on multi-day menu plans, allergen protocols, and group dietary requirements.',
      },
      {
        q: 'Can myCHEF source organic and local ingredients for Payangan sessions?',
        a: 'Yes — Payangan and the upper Gianyar highlands have excellent local produce. We source organically where possible and will confirm what is in season.',
      },
      {
        q: 'Is Payangan covered by the same team as Ubud?',
        a: 'Yes — Payangan is within our Gianyar service zone. No additional travel surcharge; the same experienced team covers both areas.',
      },
      {
        q: 'How far in advance should I book for Payangan highland villas?',
        a: 'Book 48 hours ahead for standard dinners. Multi-day retreat catering needs your full meal schedule so we can quote a fixed package and source highland produce.',
      },
    ],
    nearbyAreas: [
      { slug: 'ubud', name: 'Ubud' },
      { slug: 'tegallalang', name: 'Tegallalang' },
      { slug: 'sayan', name: 'Sayan' },
      { slug: 'mas', name: 'Mas' },
    ],
    metaTitle: 'Private Chef Payangan Bali | Retreat Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Payangan, Bali. myCHEF serves highland retreats and eco-villas north of Ubud — organic menus, wellness catering, and Balinese cooking.',
    coordinates: { lat: -8.4050, lng: 115.2680 },
    bookingNote: 'Book 48 hours ahead for Payangan highland villas. Multi-day retreat catering is welcome — send the full schedule for a fixed package quote.',
    published: true,
  },

  {
    slug: 'keramas',
    name: 'Keramas',
    regency: 'Gianyar',
    tier: 2,
    heroImage: '/generated/mychef-cooking-class-bali-guests-dining.webp',
    heroAlt: 'Private chef grilling fresh seafood at a Keramas black sand beach villa in east Bali',
    intro:
      "Keramas is a black sand beach village on Bali's east Gianyar coast — a world-class surf break and home to genuinely private luxury villas. myCHEF serves Keramas villas for surfers, families, and anyone seeking a quieter corner of Bali — seafood-forward dinners, recovery brunches after dawn sessions, and multi-day chef packages with east-coast produce.",
    villaDensity:
      "Keramas has a small number of high-end private villas and surf camps along the east coast, attracting guests who actively seek distance from the tourist strip. Villa inventory is curated and relatively exclusive — it's not a walk-in destination.",
    guestProfile:
      'Experienced Bali travellers who have tried everywhere else, surfers who know the break, and couples seeking maximum privacy on the east coast.',
    landmarks: [
      'Keramas Beach',
      'Keramas World Surfari',
      'Black volcanic sand coastline',
      'East Gianyar coast road',
      'Pasar Gianyar market (nearby)',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      `East Gianyar coast coverage with travel included in the quote. 50% deposit confirms booking. ${siteFacts.groceryPolicy}. Surf-trip packages available.`,
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Does myCHEF serve Keramas beach villas?',
        a: 'Yes — Keramas is within our east Gianyar service area. We cover the villas and private properties along this stretch of coast.',
      },
      {
        q: 'What menus suit a surf stay at Keramas?',
        a: 'Surf groups usually prefer big, energising shared meals — grilled fish, Balinese sides, plenty of fresh fruit. Couples and families choose from our full menu. Everything is agreed in advance.',
      },
      {
        q: 'How remote is Keramas from your base?',
        a: 'Keramas is about 45 minutes from our main Gianyar operations — within our service zone and no extra travel charge.',
      },
      {
        q: 'Can you cater multi-day surf trips at Keramas?',
        a: 'Yes — multi-day chef packages for surf groups are popular on the east Gianyar coast. Share days, guest count and preferred meal times for a fixed quote.',
      },
    ],
    nearbyAreas: [
      { slug: 'sanur', name: 'Sanur' },
      { slug: 'ubud', name: 'Ubud' },
      { slug: 'sukawati', name: 'Sukawati' },
      { slug: 'denpasar', name: 'Denpasar' },
    ],
    metaTitle: 'Private Chef Keramas Bali | Black Sand Beach Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Keramas, Bali. myCHEF serves east Gianyar coast villas — surf-trip catering, Balinese menus and private dining near the break. WhatsApp.',
    coordinates: { lat: -8.5726, lng: 115.3370 },
    bookingNote: 'Book 48 hours ahead for Keramas black-sand villas. Our team covers the full Gianyar east coast with surf-trip and multi-day packages.',
    published: true,
  },

  // TABANAN — Highlands and rice terraces
  {
    slug: 'bedugul',
    name: 'Bedugul',
    regency: 'Tabanan',
    tier: 2,
    heroImage: '/generated/mychef-location-bali-locations-sunset.webp',
    heroAlt: 'Private chef preparing a highland dinner at a lake-view villa in Bedugul',
    intro:
      "Bedugul is a highland lake district in Tabanan regency — cooler temperatures, mist-shrouded volcanic crater lakes, and the iconic Pura Ulun Danu Beratan temple on the water. myCHEF serves retreat villas and highland properties with menus suited to the mountain setting — farm vegetables from local markets, warming dinners, and logistics planned for cooler highland kitchens.",
    villaDensity:
      'Bedugul has a modest collection of highland retreat properties, eco-lodges, and lake-view villas at around 1,200 metres. The accommodation is unpretentious and oriented toward the landscape — far from the luxury villa belt of South Bali.',
    guestProfile:
      'Guests escaping the coast heat, highland trekkers, domestic Indonesian visitors on family holidays, and travellers combining Bedugul with a Bali full-island itinerary.',
    landmarks: [
      'Lake Beratan',
      'Pura Ulun Danu Beratan',
      'Candi Kuning market',
      'Bali Botanic Garden',
      'Jl. Raya Bedugul',
      'Buyan and Tamblingan Lakes',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Highland produce sourced from Candi Kuning market. 50% deposit confirms booking. Book 72 hours ahead for cooler-kitchen logistics and market timing.',
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Can myCHEF cook at a highland villa or retreat in Bedugul?',
        a: 'Yes — our team covers Bedugul and the surrounding Tabanan highlands. We source local highland produce from Candi Kuning market and design menus suited to the cooler mountain climate.',
      },
      {
        q: 'What makes a Bedugul menu different from Bali coast cooking?',
        a: 'Highland Bali has different produce — temperate vegetables, strawberries, fresh corn, and cooler-climate ingredients. Our Bedugul menus use these for warming, flavour-led cooking that fits the mountain setting.',
      },
      {
        q: 'How far in advance should I book for Bedugul?',
        a: 'We recommend 72 hours for Bedugul due to highland market sourcing logistics. Contact us via WhatsApp and we will confirm quickly.',
      },
      {
        q: 'How much does a private chef cost in Bedugul?',
        a: 'Bedugul uses the highland rate structure with produce often sourced from Candi Kuning market. Full-day stay chef from IDR 2,700,000++ per day; travel is quoted upfront.',
      },
    ],
    nearbyAreas: [
      { slug: 'jatiluwih', name: 'Jatiluwih' },
      { slug: 'tanah-lot', name: 'Tanah Lot' },
      { slug: 'canggu', name: 'Canggu' },
      { slug: 'ubud', name: 'Ubud' },
    ],
    metaTitle: 'Private Chef Bedugul Bali | Highland Lake Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Bedugul, Bali. myCHEF serves highland villas near Lake Beratan — mountain menus with fresh local produce, retreats, and private dining.',
    coordinates: { lat: -8.2755, lng: 115.1667 },
    bookingNote: 'Book 72 hours ahead for Bedugul highland villas so we can source from Candi Kuning market and plan cooler-kitchen logistics.',
    published: true,
  },

  {
    slug: 'jatiluwih',
    name: 'Jatiluwih',
    regency: 'Tabanan',
    tier: 2,
    heroImage: '/generated/mychef-cooking-class-bali-hero-villa.webp',
    heroAlt: 'Private chef serving a Balinese feast at a villa overlooking the Jatiluwih UNESCO rice terraces',
    intro:
      "Jatiluwih means 'truly marvellous' in Balinese — and the landscape earns it. The UNESCO-listed rice terraces cascade down the Tabanan highlands in an extraordinary scene. myCHEF serves private stays and eco-retreats here with menus that honour the setting — highland vegetables, Balinese rice-based dishes, and terrace dinners timed to cooler mountain evenings.",
    villaDensity:
      'Jatiluwih has a very small villa inventory — a handful of eco-lodges and private retreat properties embedded in the terrace landscape. This is not a destination for villa holidaymakers looking for a full-service experience, but for those who found it and planned around it.',
    guestProfile:
      'UNESCO tourism visitors who extended their stay, eco-travellers seeking total immersion, and photographers or writers on working retreats in an extraordinary landscape.',
    landmarks: [
      'Jatiluwih UNESCO rice terraces',
      'Subak irrigation system',
      'Jl. Raya Jatiluwih',
      'Pura Luhur Batukaru (nearby)',
      'Tabanan highlands',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Remote highland location — small distance premium included and quoted upfront. 50% deposit confirms booking. UNESCO-terrace dinner packages available.',
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Can I book a private chef at a villa near the Jatiluwih rice terraces?',
        a: 'Yes — myCHEF serves private properties in the Jatiluwih area. We source local highland produce and design menus that reflect the extraordinary Balinese agricultural landscape.',
      },
      {
        q: 'Is there a surcharge for Jatiluwih due to its remote location?',
        a: 'The standard rate is Full-day stay chef from IDR 2,700,000++ per day; Jatiluwih carries a small distance premium, quoted upfront. Contact us with your villa details and group size for a full quote.',
      },
      {
        q: 'What kind of menus suit a Jatiluwih stay?',
        a: 'Traditional Balinese and Indonesian cooking suits the setting — rice-based feasts, slow-cooked dishes, local vegetables, and highland fruit. We also design full feast menus for groups celebrating something special here.',
      },
      {
        q: 'How far in advance should I book a chef near Jatiluwih?',
        a: 'Book 72 hours ahead for Jatiluwih rice-terrace villas. Remote highland logistics and travel are confirmed on booking with a fixed, itemised quote.',
      },
    ],
    nearbyAreas: [
      { slug: 'bedugul', name: 'Bedugul' },
      { slug: 'tabanan', name: 'Tabanan' },
      { slug: 'tanah-lot', name: 'Tanah Lot' },
      { slug: 'ubud', name: 'Ubud' },
    ],
    metaTitle: 'Private Chef Jatiluwih Bali | UNESCO Rice Terrace Dining | myCHEF',
    metaDescription:
      'Hire a private chef in Jatiluwih. myCHEF serves highland villas near the UNESCO rice terraces — Balinese menus, local produce, and private dining in Tabanan.',
    coordinates: { lat: -8.3600, lng: 115.1340 },
    bookingNote: 'Book 72 hours ahead for Jatiluwih rice-terrace villas. Remote highland logistics and travel are confirmed on booking with a fixed quote.',
    published: true,
  },

  {
    slug: 'tabanan',
    name: 'Tabanan',
    regency: 'Tabanan',
    tier: 2,
    heroImage: '/generated/mychef-cooking-class-bali-ingredients-spread.webp',
    heroAlt: 'Private chef cooking with fresh produce from Tabanan market at a villa in West Bali',
    intro:
      "Tabanan is the capital of Tabanan regency — surrounded by the most productive agricultural land in Bali. Villas and retreat properties in this area benefit from exceptional local produce and a myCHEF team that covers the full West Bali regency — farm-led menus, multi-day retreat catering, and private dinners that showcase Tabanan's rice fields and coastal villages.",
    villaDensity:
      'Tabanan town and surrounds have a modest villa inventory — rural properties, working farm stays, and family compounds. Fewer luxury villas than South Bali, more genuinely embedded in local life.',
    guestProfile:
      'Travellers combining Tabanan with Tanah Lot and Bedugul, families on cultural itineraries, domestic guests, and long-stay visitors based in West Bali.',
    landmarks: [
      'Tabanan market',
      'Pura Tanah Lot (30 min)',
      'Jl. Gatot Subroto Tabanan',
      'Tabanan regency cultural sites',
      'Subak Museum',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      `West Bali zone pricing with travel included in the quote. 50% deposit confirms booking. ${siteFacts.groceryPolicy}. Multi-day packages available.`,
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Does myCHEF serve Tabanan town and surrounds?',
        a: 'Yes — we cover Tabanan town and the surrounding regency including villages, retreat properties, and private villas.',
      },
      {
        q: 'Can you source fresh local produce from Tabanan market?',
        a: 'Absolutely — Tabanan market is one of our preferred sourcing points for the regency. The local produce quality here is exceptional: rice, vegetables, free-range chicken, and tropical fruit.',
      },
      {
        q: 'How far is Tabanan from the main tourist areas?',
        a: 'Tabanan town is about 30–45 minutes from the main Bali tourist corridors. Our team serves the full regency and adjusts logistics around your location.',
      },
      {
        q: 'Can you cater multi-day stays across Tabanan regency?',
        a: 'Yes — full West Bali regency coverage with multi-day chef packages for coast and highland villas. Travel is included in your quote; grocery receipts provided.',
      },
    ],
    nearbyAreas: [
      { slug: 'tanah-lot', name: 'Tanah Lot' },
      { slug: 'bedugul', name: 'Bedugul' },
      { slug: 'jatiluwih', name: 'Jatiluwih' },
      { slug: 'canggu', name: 'Canggu' },
    ],
    metaTitle: 'Private Chef Tabanan Bali | Villa Dining West Bali | myCHEF',
    metaDescription:
      'Book a private chef in Tabanan, Bali. myCHEF serves Tabanan regency villas — fresh local produce, Balinese menus and private dining in West Bali. WhatsApp myCHEF.',
    coordinates: { lat: -8.5350, lng: 115.1185 },
    bookingNote: 'Book 48 hours ahead for Tabanan regency villas. Full West Bali coverage with travel included in your quote; multi-day chef packages available on request.',
    published: true,
  },

  // KARANGASEM — East Bali
  {
    slug: 'amed',
    name: 'Amed',
    regency: 'Karangasem',
    tier: 2,
    heroImage: '/generated/mychef-cooking-class-balinese-ingredients-bali-landscape.webp',
    heroAlt: 'Private chef preparing fresh seafood at an Amed villa overlooking the black sand coast',
    intro:
      "Amed is a string of fishing villages on Bali's northeast coast in Karangasem regency — black sand beaches, world-class snorkelling and diving, and a relaxed pace that attracts long-stay visitors. myCHEF brings private chef sessions to Amed villas and dive resorts with boat-fresh fish, simple Balinese feasts, and flexible timing around dive schedules.",
    villaDensity:
      "Amed stretches through several villages — Jemeluk, Bunutan, Lipah, Selang — each with its own small cluster of guesthouses and villas oriented toward the water. Properties are modest by South Bali standards but extraordinarily located.",
    guestProfile:
      "Serious divers and snorkellers, long-stay budget-conscious travellers who found Amed and didn't leave, and guests on a full-island Bali circuit.",
    landmarks: [
      'Jemeluk Bay snorkel site',
      'Amed Beach',
      'Japanese shipwreck',
      'Mount Agung views',
      'Lipah fishing village',
      'East Bali coast road',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Distance premium from the South Bali base is included and quoted upfront. 50% deposit confirms booking. Book 72 hours ahead for Amed dive-coast logistics.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Can myCHEF cook at a dive resort or villa in Amed?',
        a: "Yes — we cover Amed and the surrounding Karangasem east coast. Our menus in Amed are built around the exceptional local seafood.",
      },
      {
        q: 'What seafood can a private chef prepare in Amed?',
        a: "Amed fishermen bring in fresh tuna, snapper, squid, and prawns. Our chef sources the morning's catch and builds your menu around what is freshest.",
      },
      {
        q: 'Is there a travel surcharge for Amed?',
        a: 'Amed is approximately 2 hours from South Bali. The standard rate is Full-day stay chef from IDR 2,700,000++ per day; a distance premium applies and is quoted upfront. Contact us for a full quote.',
      },
      {
        q: 'How far in advance should I book a private chef in Amed?',
        a: 'Book 72 hours ahead for Amed dive-coast villas so northeast logistics and morning seafood sourcing can be planned. Dive-day meal timing is flexible.',
      },
    ],
    nearbyAreas: [
      { slug: 'candidasa', name: 'Candidasa' },
      { slug: 'tulamben', name: 'Tulamben' },
      { slug: 'sidemen', name: 'Sidemen' },
      { slug: 'nusa-penida', name: 'Nusa Penida' },
    ],
    metaTitle: 'Private Chef Amed Bali | Seafood Villa Dining East Bali | myCHEF',
    metaDescription:
      'Book a private chef in Amed, Bali. myCHEF serves east coast villas and dive resorts — fresh local seafood, Balinese menus, and private dining in Karangasem.',
    coordinates: { lat: -8.3465, lng: 115.6520 },
    bookingNote: 'Book 72 hours ahead for Amed dive-coast villas. Remote northeast logistics are planned in advance; menus lean on morning boat catch.',
    published: true,
  },

  {
    slug: 'sidemen',
    name: 'Sidemen',
    regency: 'Karangasem',
    tier: 2,
    heroImage: '/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp',
    heroAlt: 'Private chef serving a Balinese feast at a Sidemen valley villa with Mount Agung views',
    intro:
      "Sidemen is one of Bali's most breathtaking valleys — a lush corridor of rice terraces running toward Mount Agung in Karangasem regency. The boutique guesthouses and private villas here have extraordinary views. myCHEF serves Sidemen with private chef sessions designed for this highland setting. myCHEF brings Balinese menus and highland produce to Sidemen valley terraces — private dining with Mount Agung on the horizon.",
    villaDensity:
      'Sidemen has a small, carefully curated collection of boutique guesthouses and private villas — none more than a few buildings. The valley floor and hillsides are almost entirely agricultural, with only a handful of accommodation options embedded in the landscape.',
    guestProfile:
      "Guests who found Ubud too busy, travellers on extended Bali stays who wanted a genuinely remote highland experience, and visitors making the most of Karangasem's extraordinary cultural landscape.",
    landmarks: [
      'Sidemen valley rice terraces',
      'Mount Agung backdrop',
      'Jl. Raya Sidemen',
      'Rendang village (nearby)',
      'Pura Besakih (45 min)',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Remote highland distance premium included and shown before you confirm. 50% deposit locks the date. Groceries at cost with receipts.',
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Does myCHEF serve villas and guesthouses in Sidemen?',
        a: 'Yes — Sidemen is within our Karangasem service area. We cover the valley and nearby properties with private chef sessions designed for the highland setting.',
      },
      {
        q: 'What kind of menus suit a Sidemen stay?',
        a: 'Traditional Balinese and Indonesian cooking — rice-based feasts, slow-cooked dishes, and menus built around fresh local produce. We design each session around the landscape.',
      },
      {
        q: 'How far in advance should I book for Sidemen?',
        a: 'We recommend 72 hours for Sidemen. Contact us early in your trip and we will plan logistics accordingly.',
      },
      {
        q: 'How much does a private chef cost in Sidemen?',
        a: 'Sidemen follows the remote highland structure: from Full-day stay chef from IDR 2,700,000++ per day, with distance premium shown before you confirm. Groceries at cost with receipts.',
      },
    ],
    nearbyAreas: [
      { slug: 'amed', name: 'Amed' },
      { slug: 'candidasa', name: 'Candidasa' },
      { slug: 'ubud', name: 'Ubud' },
      { slug: 'tegallalang', name: 'Tegallalang' },
    ],
    metaTitle: 'Private Chef Sidemen Bali | Rice Terrace Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Sidemen, Bali. myCHEF serves the Sidemen valley — Balinese menus, highland produce, and private dining below Mount Agung in Karangasem.',
    coordinates: { lat: -8.4741, lng: 115.4706 },
    bookingNote: 'Book 72 hours ahead for Sidemen valley villas. Remote highland logistics are planned in advance; Balinese menus suit the Mount Agung setting.',
    published: true,
  },

  {
    slug: 'candidasa',
    name: 'Candidasa',
    regency: 'Karangasem',
    tier: 2,
    heroImage: '/generated/mychef-cooking-class-group-dining-bali-landscape.webp',
    heroAlt: 'Private chef serving a fresh seafood dinner at a Candidasa beachfront villa in East Bali',
    intro:
      "Candidasa is a quiet beach town on Bali's east coast in Karangasem — the gateway to East Bali's diving, snorkelling, and cultural attractions. myCHEF serves Candidasa villas and guesthouses with private chef sessions focused on East Bali's excellent seafood and produce, plus multi-day chef packages for longer cultural and dive stays. myCHEF times Candidasa service around dive days and cultural day trips — seafood dinners, flexible breakfasts, and multi-day chef packages.",
    villaDensity:
      'Candidasa has a low-key collection of beachfront guesthouses and a small number of private villas. It is unpretentious and genuinely local — ideal for guests who value quiet over convenience.',
    guestProfile:
      'Slow travellers and cultural tourists, older guests who appreciate the quieter pace, divers exploring the East Bali reefs, and travellers on an extended Bali circuit.',
    landmarks: [
      'Candidasa Beach',
      'Lotus Lake Candidasa',
      'Tenganan traditional village (nearby)',
      'Amlapura royal palace (nearby)',
      'East Bali coast road',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'East Bali distance premium included and quoted upfront. 50% deposit confirms booking; groceries charged at cost with receipts.',
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Does myCHEF cover Candidasa beach and surrounding villas?',
        a: 'Yes — Candidasa is within our East Bali service area. We cover the beach strip and surrounding Karangasem regency properties.',
      },
      {
        q: 'What seafood is available in Candidasa?',
        a: "East Bali has excellent fresh fish — snapper, tuna, mackerel, and squid sourced from local fishing communities. Our chef builds your menu around what's freshest on the day.",
      },
      {
        q: 'Is Candidasa far from your main service area?',
        a: 'Candidasa is approximately 90 minutes from our Ubud base. A small distance component is included in the starting price.',
      },
      {
        q: 'Can you support multi-day dive or culture stays in Candidasa?',
        a: 'Yes — multi-day packages with flexible breakfasts and seafood dinners suit dive and cultural itineraries. Book 72 hours ahead so East Bali logistics are locked.',
      },
    ],
    nearbyAreas: [
      { slug: 'amed', name: 'Amed' },
      { slug: 'sidemen', name: 'Sidemen' },
      { slug: 'tulamben', name: 'Tulamben' },
      { slug: 'sanur', name: 'Sanur' },
    ],
    metaTitle: 'Private Chef Candidasa Bali | East Bali Villa Dining | myCHEF',
    metaDescription:
      'Hire a private chef in Candidasa. myCHEF serves East Bali villas and guesthouses — fresh seafood menus, Balinese cooking, and private dining in Karangasem.',
    coordinates: { lat: -8.5085, lng: 115.5610 },
    bookingNote: 'Book 72 hours ahead for Candidasa east-coast stays. Travel logistics are confirmed on booking; multi-day packages suit dive and culture trips.',
    published: true,
  },

  {
    slug: 'tulamben',
    name: 'Tulamben',
    regency: 'Karangasem',
    tier: 2,
    heroImage: '/generated/mychef-cooking-class-market-produce-bali-portrait.webp',
    heroAlt: 'Private chef preparing a post-dive meal at a Tulamben dive resort on the northeast Bali coast',
    intro:
      "Tulamben is a small diving village on Bali's northeast coast — home of the USAT Liberty shipwreck, one of the most accessible wreck dives in the world. myCHEF caters to both resort groups and private villa guests here with menus designed for the dive-centred lifestyle — early fuel breakfasts, light lunches, and seafood dinners after afternoon dives.",
    villaDensity:
      "Tulamben's accommodation is almost entirely dive-oriented — small dive resorts, bungalow operations, and a handful of private villas. The community is tight-knit and the pace is entirely structured around tides and dive schedules.",
    guestProfile:
      "Serious scuba divers, dive course students, underwater photographers, and guests making a dedicated trip to the USAT Liberty wreck on Bali's northeast coast.",
    landmarks: [
      'USAT Liberty wreck dive site',
      'Tulamben Bay',
      'Black sand beach',
      'Drop-off dive site',
      'Northeast Bali coast',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Remote northeast Bali distance premium included and quoted upfront. 50% deposit confirms booking. Dive-day menus available on request.',
    services: ['private-chef', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Does myCHEF serve dive resorts and guesthouses in Tulamben?',
        a: 'Yes — we serve Tulamben and the surrounding northeast Karangasem coast for both small group stays and private villa guests.',
      },
      {
        q: 'Can you cater for a full day of diving meals in Tulamben?',
        a: 'Yes — we design full-day catering plans including pre-dive breakfasts, post-dive lunches, and evening dinners. Contact us with your group size and dive schedule.',
      },
      {
        q: 'How remote is Tulamben and does that affect the price?',
        a: 'Tulamben is approximately 2.5 hours from South Bali. The distance premium is reflected in the starting price. Contact us for a full quote.',
      },
      {
        q: 'How far in advance should I book for Tulamben dive resorts?',
        a: 'Book 72–96 hours ahead. Remote northeast logistics need advance planning; full dive-day meal plans (pre-dive breakfast through evening dinner) are available on request.',
      },
    ],
    nearbyAreas: [
      { slug: 'amed', name: 'Amed' },
      { slug: 'candidasa', name: 'Candidasa' },
      { slug: 'sidemen', name: 'Sidemen' },
      { slug: 'lovina', name: 'Lovina' },
    ],
    metaTitle: 'Private Chef Tulamben Bali | Dive Resort Catering | myCHEF',
    metaDescription:
      'Book a private chef in Tulamben, Bali. myCHEF serves dive resorts and villas near the USAT Liberty wreck — seafood menus, group catering, and private dining.',
    coordinates: { lat: -8.2936, lng: 115.5976 },
    bookingNote: 'Book 72–96 hours ahead for Tulamben dive resorts. Remote northeast logistics need advance planning; dive-day meal plans available on request.',
    published: true,
  },

  // BULELENG — North Bali
  {
    slug: 'lovina',
    name: 'Lovina',
    regency: 'Buleleng',
    tier: 2,
    heroImage: '/generated/mychef-corporate-retreat-catering-bali-hero.webp',
    heroAlt: 'Private chef serving a relaxed seafood dinner at a Lovina beachfront villa in North Bali',
    intro:
      "Lovina is North Bali's main beach resort — a calm stretch of black sand, famous for dolphin watching at dawn and a pace far slower than the south. myCHEF serves Lovina villas and guesthouses with private chef sessions tailored to the relaxed North Bali character — early breakfasts before boat trips, seafood dinners, and multi-day chef packages for longer northern stays.",
    villaDensity:
      "Lovina's accommodation ranges from basic guesthouses to mid-range villas along the black sand beach. Villa density is low and properties are unpretentious — the draw is the calm, the dolphins, and the distance from the tourist circuit.",
    guestProfile:
      'Guests who have done South Bali and wanted something completely different, dolphin enthusiasts, nature travellers, families seeking calm water, and long-stay visitors.',
    landmarks: [
      'Lovina Beach',
      'Lovina dolphin watching point',
      'Banjar Hot Springs (nearby)',
      'Gitgit Waterfall (nearby)',
      'Jl. Raya Lovina',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'North Bali distance premium included and shown in your quote. 50% deposit confirms booking. Book 72 hours ahead for Lovina villa dinners.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Does myCHEF serve Lovina villas and resorts?',
        a: 'Yes — Lovina is in our North Bali service area. We cover the beach strip and surrounding properties in Buleleng regency.',
      },
      {
        q: 'What kind of menus suit a Lovina stay?',
        a: 'North Bali cooking is more traditional and less tourist-oriented than the south — fresh fish menus, Balinese village cooking, and relaxed communal dining. Multi-course dinners also available.',
      },
      {
        q: 'Is there a surcharge for Lovina?',
        a: 'Lovina is a long way from our South Bali base. The standard rate is Full-day stay chef from IDR 2,700,000++ per day; a distance component applies and is quoted upfront.',
      },
      {
        q: 'Can you prepare early breakfasts before dolphin trips in Lovina?',
        a: 'Yes — early breakfasts timed for dawn dolphin boats are a popular Lovina request. Book 72 hours ahead so North Bali logistics and market sourcing are confirmed.',
      },
    ],
    nearbyAreas: [
      { slug: 'pemuteran', name: 'Pemuteran' },
      { slug: 'singaraja', name: 'Singaraja' },
      { slug: 'kintamani', name: 'Kintamani' },
      { slug: 'bedugul', name: 'Bedugul' },
    ],
    metaTitle: 'Private Chef Lovina Bali | North Bali Villa Dining | myCHEF',
    metaDescription:
      'Book a private chef in Lovina, Bali. myCHEF serves North Bali villas and resorts — fresh local fish, Balinese menus, and private dining on the black sand coast.',
    coordinates: { lat: -8.1585, lng: 115.0267 },
    bookingNote: 'Book 72 hours ahead for Lovina black-sand villas. North Bali logistics are planned in advance; early breakfasts for dolphin trips are popular.',
    published: true,
  },

  {
    slug: 'singaraja',
    name: 'Singaraja',
    regency: 'Buleleng',
    tier: 2,
    heroImage: '/generated/mychef-events-bali-hero-anniversaries.webp',
    heroAlt: 'Private chef hosting a Singaraja villa event with North Bali sea views and local produce',
    intro:
      "Singaraja is the capital of Buleleng regency and the historical port city of North Bali — a layered urban landscape of Dutch colonial architecture, Chinese quarter streets, and Balinese royal heritage. myCHEF serves private stays and event catering in the Singaraja area — family villa dinners, corporate hosting, and logistics for guests based in North Bali.",
    villaDensity:
      "Singaraja is primarily an urban base rather than a villa destination — it functions as the logistics hub for North Bali tourism. Private stays tend to be guesthouses, family homes, or the occasional boutique property in the surrounding hills.",
    guestProfile:
      'Cultural researchers, domestic Indonesian travellers, conference and event attendees at Undiksha University, and guests using Singaraja as a base for North Bali exploration.',
    landmarks: [
      'Gedong Kirtya lontar library',
      'Pasar Anyar market',
      'Jl. Ngurah Rai Singaraja',
      'Dutch colonial waterfront',
      'Chinese quarter temples',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'North Bali base rate with transparent travel noted in your quote. 50% deposit confirms booking. Event and multi-day catering available.',
    services: ['private-chef', 'fine-dining', 'catering', 'events', 'staffing'],
    faqs: [
      {
        q: 'Does myCHEF operate in Singaraja?',
        a: 'Yes — we cover Singaraja and the surrounding Buleleng regency for private chef sessions, villa catering, and event support.',
      },
      {
        q: 'What is North Balinese cuisine like compared to South Bali cooking?',
        a: 'North Balinese food has stronger Chinese and Dutch colonial influences, different spice blends, and fresh seafood from the Bali Sea. Our chefs can showcase this distinct regional cuisine.',
      },
      {
        q: 'Can myCHEF support events or group catering in Singaraja?',
        a: 'Yes — we handle events including corporate retreats, villa parties, and cultural celebrations in the Singaraja area. Contact us with event details for a quote.',
      },
      {
        q: 'How far in advance should I book a private chef in Singaraja?',
        a: 'Book 72 hours ahead for Singaraja dinners and longer for events. Full North Bali villa dinners and group catering are available with travel quoted upfront.',
      },
    ],
    nearbyAreas: [
      { slug: 'lovina', name: 'Lovina' },
      { slug: 'pemuteran', name: 'Pemuteran' },
      { slug: 'bedugul', name: 'Bedugul' },
      { slug: 'kintamani', name: 'Kintamani' },
    ],
    metaTitle: 'Private Chef Singaraja Bali | North Bali Event Catering | myCHEF',
    metaDescription:
      'Book a private chef in Singaraja, Bali. myCHEF serves Buleleng regency — North Balinese cuisine, villa dining, and event catering in the historic port city.',
    coordinates: { lat: -8.1120, lng: 115.0885 },
    bookingNote: 'Book 72 hours ahead for Singaraja. Full North Bali villa dinners and event catering available; travel is always quoted upfront before you confirm.',
    published: true,
  },

  {
    slug: 'pemuteran',
    name: 'Pemuteran',
    regency: 'Buleleng',
    tier: 2,
    heroImage: '/generated/mychef-events-bali-hero-baby-showers.webp',
    heroAlt: 'Private chef preparing an eco-conscious dinner at a Pemuteran dive resort villa in northwest Bali',
    intro:
      "Pemuteran is a small eco-dive village in northwest Bali — gateway to Menjangan Island and the West Bali National Park. myCHEF serves Pemuteran's dive resorts and eco-lodges with private chef sessions designed for the conservation-minded community here — fresh seafood, plant-forward recovery meals after dive days, and low-waste kitchen practice that fits the area's eco ethos.",
    villaDensity:
      "Pemuteran has a tight cluster of dive resorts, eco-lodges, and bungalow operations around the bay. Properties are low-impact and conservation-conscious — no high-rise, no crowds, very few private villas.",
    guestProfile:
      'Serious divers and marine conservationists, eco-travellers, snorkellers visiting the biorock coral restoration project, and guests who drove all the way to the northwest corner of Bali with a purpose.',
    landmarks: [
      'Pemuteran Bay',
      'Biorock coral restoration reef',
      'Menjangan Island (30 min by boat)',
      'West Bali National Park gate',
      'Taman Sari resort area',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Remote northwest Bali distance premium included and quoted upfront. 50% deposit confirms booking. Dive-resort multi-day catering available.',
    services: ['private-chef', 'fine-dining', 'catering', 'events'],
    faqs: [
      {
        q: 'Can myCHEF cook at a dive resort or villa in Pemuteran?',
        a: 'Yes — we cover Pemuteran and the northwest Bali coast. Book early: the distance requires advance logistics planning.',
      },
      {
        q: 'What kind of food does myCHEF serve in Pemuteran?',
        a: 'Fresh local fish, organic produce, and menus tailored to the eco-conscious character of the area. We handle plant-based, allergen-free, and bespoke dietary requirements.',
      },
      {
        q: 'How far ahead should I book for Pemuteran?',
        a: 'At least 96 hours ahead. Pemuteran is among the most remote areas we serve — advance planning is essential.',
      },
      {
        q: 'Is there a distance premium for Pemuteran?',
        a: 'Yes — Pemuteran is our most remote northwest service location. The distance premium is included and quoted upfront; book 96 hours ahead for dive-resort logistics.',
      },
    ],
    nearbyAreas: [
      { slug: 'lovina', name: 'Lovina' },
      { slug: 'singaraja', name: 'Singaraja' },
      { slug: 'bedugul', name: 'Bedugul' },
    ],
    metaTitle: 'Private Chef Pemuteran Bali | Eco-Villa Diving Resort Dining | myCHEF',
    metaDescription:
      'Hire a private chef in Pemuteran. myCHEF serves Menjangan Island villas — fresh seafood, organic menus and private dining in northwest Bali. WhatsApp myCHEF.',
    coordinates: { lat: -8.1255, lng: 114.6488 },
    bookingNote: 'Book 96 hours ahead for Pemuteran eco-dive resorts — our most remote service location. Northwest logistics and Menjangan day trips need notice.',
    published: true,
  },

  // BANGLI — Volcanic Highlands
  {
    slug: 'kintamani',
    name: 'Kintamani',
    regency: 'Bangli',
    tier: 2,
    heroImage: '/generated/mychef-events-bali-hero-birthdays.webp',
    heroAlt: 'Private chef serving a highland caldera dinner at a Kintamani villa above Lake Batur',
    intro:
      "Kintamani sits on the rim of the ancient Batur caldera in Bangli regency — at 1,500 metres, with views across the volcanic lake and Mount Batur. myCHEF serves private villas and boutique properties on the caldera rim for high-altitude dining experiences unlike anywhere else in Bali. myCHEF cooks mountain dinners with volcanic views in mind — warming menus, highland produce, and logistics for cooler caldera villas.",
    villaDensity:
      'Kintamani has a sparse but growing collection of rim-view villas, boutique guesthouses, and caldera-edge restaurants. The most sought-after properties face west across the lake to the volcano — spectacular at sunrise and dramatically lit at sunset.',
    guestProfile:
      'Guests completing a full-island Bali circuit, Mt Batur trekkers celebrating a summit breakfast or dinner, couples seeking the most unusual dining backdrop in Bali, and domestic Indonesian visitors to the highland.',
    landmarks: [
      'Mount Batur volcano',
      'Lake Batur',
      'Kintamani caldera rim road',
      'Penelokan viewpoint',
      'Toya Bungkah hot springs (below)',
      'Batur Global Geopark',
    ],
    priceFrom: 'Full-day stay chef from IDR 2,700,000++ per day',
    pricingNote:
      'Highland distance premium included and quoted upfront. 50% deposit confirms booking. Sunrise and sunset caldera sessions available on request.',
    services: ['private-chef', 'fine-dining', 'catering', 'bbq', 'events'],
    faqs: [
      {
        q: 'Can myCHEF cook at a villa on the Kintamani caldera rim?',
        a: 'Yes — we serve private villas and boutique properties around the Kintamani caldera. Altitude logistics are second nature to our team.',
      },
      {
        q: 'What menus suit a highland Kintamani dinner?',
        a: 'The cool mountain air calls for warming, substantial food — slow-braised meats, rich curries, wood-fire preparations, and robust Balinese flavours. Lighter menus available on request.',
      },
      {
        q: 'Can myCHEF cater for a sunrise breakfast or dinner with caldera views?',
        a: "Absolutely — a sunrise breakfast above the caldera or a sunset dinner watching Batur glow are among our most spectacular offerings. Tell us what you're imagining and we'll design around it.",
      },
      {
        q: 'How far in advance should I book a Kintamani caldera dinner?',
        a: 'Book 72 hours ahead for Kintamani rim villas at 1,500m. Cooler kitchens year-round; sunrise and sunset sessions are available when the villa aspect allows.',
      },
    ],
    nearbyAreas: [
      { slug: 'ubud', name: 'Ubud' },
      { slug: 'bedugul', name: 'Bedugul' },
      { slug: 'tegallalang', name: 'Tegallalang' },
      { slug: 'payangan', name: 'Payangan' },
    ],
    metaTitle: 'Private Chef Kintamani Bali | Mount Batur Villa Dining | myCHEF',
    metaDescription:
      'Hire a private chef in Kintamani. myCHEF serves highland villas on the Mount Batur caldera rim — warming mountain menus, sunrise breakfasts, and private dining.',
    coordinates: { lat: -8.2403, lng: 115.3693 },
    bookingNote: 'Book 72 hours ahead for Kintamani caldera-rim villas at 1,500m. Cooler kitchens year-round; sunrise and sunset sessions available on request.',
    published: true,
  },

  // ── Phase 3 Tier 3 — luxury villa villages & emerging areas ─────────────────
  {
    slug: "kedewatan",
    name: "Kedewatan",
    regency: "Gianyar",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-city-ubud.webp",
    heroAlt: "Private chef serving a fine dinner at a luxury villa in Kedewatan above the Ayung River gorge",
    intro:
      "Kedewatan sits on the western rim of the Ayung River gorge, 4 km north-west of Ubud. This is where Aman Resorts placed its first Bali property — the canyon-edge villas here remain among the most sought-after addresses on the island. myCHEF cooks tasting menus and multi-day chef stays for gorge-view terraces, with logistics planned around Ubud traffic and hillside access.",
    villaDensity:
      "Boutique estates and cliff-edge villa compounds are strung along the gorge. Many properties are walled, owner-occupied, and rarely appear on booking platforms. Average group sizes are small (2–8 guests) and expectations are at the top of the market.",
    guestProfile:
      "Couples celebrating landmark occasions, luxury-travel writers in residence, and family groups who book directly with villa owners. Budget-consciousness is not a factor — they want the best possible private dining experience.",
    landmarks: [
      "Amandari Resort",
      "Como Shambhala Estate",
      "Alaya Resort Ubud",
      "Ayung River gorge rafting put-in",
      "Pura Gunung Lebah temple",
      "Kedewatan organic market garden",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "Kedewatan commands a 10% distance premium above our South Bali base. Market sourcing, gorge-side setup, and Michelin-standard expectations are reflected in the rate.",
    services: ["private-chef", "fine-dining", "catering", "events"],
    faqs: [
      {
        q: "Can myCHEF match the dining standard of Amandari or Como Shambhala?",
        a: "Our founder Adriano trained at Michelin-starred properties in Europe. We routinely serve guests who split stays between those resorts and private villa nights — and the feedback confirms the standard.",
      },
      {
        q: "Is gorge-side outdoor dining possible in Kedewatan?",
        a: "Yes. Most villas here have open-air pavilions or infinity terrace settings above the Ayung. We bring portable induction equipment and design menus that travel and present beautifully outdoors.",
      },
      {
        q: "What notice do you need for a Kedewatan booking?",
        a: "For Michelin-level tasting menus we prefer 72 hours. Standard private-chef sessions can often be arranged within 24 hours, subject to chef availability.",
      },
      {
        q: "How much does a private chef cost in Kedewatan?",
        a: "Kedewatan matches the Ubud premium corridor: from Full-day stay chef from IDR 2,700,000++ per day, groceries at cost. Gorge access notes are confirmed per villa address before booking.",
      },
    ],
    nearbyAreas: [
      { slug: "ubud", name: "Ubud" },
      { slug: "sayan", name: "Sayan" },
      { slug: "payangan", name: "Payangan" },
      { slug: "lodtunduh", name: "Lodtunduh" },
    ],
    metaTitle: "Private Chef Kedewatan Bali | Ayung Gorge Villa Dining | myCHEF",
    metaDescription:
      "Hire a private chef in Kedewatan. myCHEF serves Amandari-area gorge villas with specialist head chefs — tasting menus, intimate dinners and luxury catering. WhatsApp myCHEF.",
    coordinates: { lat: -8.4744, lng: 115.2397 },
    bookingNote: "Book 72 hours ahead for fine-dining menus. 24-hour notice available for standard sessions.",
    published: true,
  },
  {
    slug: "nyuh-kuning",
    name: "Nyuh Kuning",
    regency: "Gianyar",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-city-ubud.webp",
    heroAlt: "Private chef preparing fresh Balinese ingredients at a boutique villa in Nyuh Kuning",
    intro:
      "Nyuh Kuning — 'yellow coconut' village — lies immediately south of the Sacred Monkey Forest, separated from central Ubud by the forest canopy. Its narrow lanes are lined with woodcarvers' workshops and intimate villa compounds that attract guests seeking quiet but with full access to Ubud's art scene. myCHEF cooks intimate dinners and Balinese menus in Nyuh Kuning compounds steps from the Monkey Forest — quiet access, full kitchen reset included.",
    villaDensity:
      "A dense cluster of boutique villas and owner-occupied compounds sits between the monkey forest wall and the Wos River. Properties are small (2–6 rooms) with well-equipped kitchens and tropical garden dining terraces.",
    guestProfile:
      "Artistic retreaters, wellness travellers doing Ubud-based programmes, and culturally-curious couples who book boutique stays rather than large resorts.",
    landmarks: [
      "Sacred Monkey Forest south entrance",
      "Wos River walking trail",
      "Nyuh Kuning woodcarving galleries",
      "Puri Dalem temple",
      "Museum Puri Lukisan (nearby)",
      "Ubud market (10 min walk north)",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "Standard South Bali rate applies — Nyuh Kuning is within the Ubud radius with no distance surcharge. Intimate villa dinners for 2–8 guests are typical.",
    services: ["private-chef", "fine-dining", "catering", "bbq"],
    faqs: [
      {
        q: "How far is myCHEF's ingredient sourcing from Nyuh Kuning?",
        a: "Our chefs shop at Ubud central market and Pasar Seni 10 minutes away. Organic produce from nearby farm cooperatives is available on request.",
      },
      {
        q: "Are villas in Nyuh Kuning suitable for larger group dinners?",
        a: "Most properties here are intimate (2–8 guests). For larger events we can set up in the garden or partner with a nearby villa. Let us know your group size and we'll advise.",
      },
      {
        q: 'How much does a private chef cost in Nyuh Kuning?',
        a: 'Nyuh Kuning is within the Ubud radius at standard rates from Full-day stay chef from IDR 2,700,000++ per day, groceries at cost, no distance surcharge. Intimate villa dinners for 2–8 guests are the most common format.',
      },
      {
        q: "How far in advance should I book a private chef in Nyuh Kuning?",
        a: "Book 48 hours ahead for standard dinners near the Monkey Forest. Quiet boutique villas often need discreet service timing — share access notes when you enquire.",
      },
],
    nearbyAreas: [
      { slug: "ubud", name: "Ubud" },
      { slug: "mas", name: "Mas" },
      { slug: "penestanan", name: "Penestanan" },
      { slug: "lodtunduh", name: "Lodtunduh" },
    ],
    metaTitle: "Private Chef Nyuh Kuning Bali | Monkey Forest Villa Dining | myCHEF",
    metaDescription:
      "Hire a private chef in Nyuh Kuning. myCHEF serves boutique villas beside Ubud's Sacred Monkey Forest — intimate dinners, Balinese menus and villa catering. WhatsApp myCHEF.",
    coordinates: { lat: -8.5278, lng: 115.2622 },
    bookingNote: "Book 24–48 hours ahead for Nyuh Kuning. Within the Ubud service zone — no distance surcharge.",
    published: true,
  },
  {
    slug: "lodtunduh",
    name: "Lodtunduh",
    regency: "Gianyar",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-city-ubud.webp",
    heroAlt: "Private chef preparing a Balinese feast at a villa estate surrounded by rice terraces in Lodtunduh",
    intro:
      "Lodtunduh is a quiet village corridor between Ubud and Mas, framed by rice-field panoramas and the Wos River valley. The area has become a discreet address for travellers seeking large-compound villas at a fraction of central Ubud prices. myCHEF covers Lodtunduh for daily villa catering, group dinners, and Balinese feast menus without the central-Ubud travel chaos.",
    villaDensity:
      "Mid-to-large villa estates with 3–7 bedrooms dominate. Most were built for the private-rental market and feature professional kitchens, garden dining gazebos, and infinity pools overlooking terraced paddies.",
    guestProfile:
      "Group retreats, multi-family holidays, and yoga teacher-training cohorts that need a self-contained compound with catering. Also popular with photographers and artists on long-stay residencies.",
    landmarks: [
      "Wos River valley views",
      "Lodtunduh organic rice fields",
      "Mas woodcarving village (2 km south)",
      "Pura Gunung Kawi Sebatu (5 km north)",
      "Ubud central market (5 km north)",
      "Campuhan Ridge Walk (7 km)",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "Standard Ubud-zone rate. Group catering packages are available for large Lodtunduh villas hosting 10+ guests. 50% deposit confirms the date.",
    services: ["private-chef", "fine-dining", "catering", "bbq", "events"],
    faqs: [
      {
        q: "Can myCHEF handle multi-day retreat catering in Lodtunduh?",
        a: "Absolutely — retreat catering is one of our specialties. We design daily menus with your programme in mind, accommodating dietary requirements and serving up to 30 guests.",
      },
      {
        q: "Are there good local markets near Lodtunduh for fresh sourcing?",
        a: "Yes — Mas market and the Ubud central market are both within 5 km. Our chefs source daily for maximum freshness.",
      },
      {
        q: 'How much does a private chef cost in Lodtunduh?',
        a: 'Lodtunduh sits in the greater Ubud service area with standard Ubud-zone rates from Full-day stay chef from IDR 2,700,000++ per day. Multi-day retreat catering is quoted as a package — WhatsApp guest count and dates.',
      },
      {
        q: "How far in advance should I book multi-day catering in Lodtunduh?",
        a: "Book 48–72 hours ahead for multi-day retreat schedules so menus, produce and staffing can be planned across the full stay.",
      },
],
    nearbyAreas: [
      { slug: "ubud", name: "Ubud" },
      { slug: "mas", name: "Mas" },
      { slug: "nyuh-kuning", name: "Nyuh Kuning" },
      { slug: "kedewatan", name: "Kedewatan" },
    ],
    metaTitle: "Private Chef Lodtunduh Bali | Villa Estate, Retreat Catering | myCHEF",
    metaDescription:
      "Hire a private chef in Lodtunduh. myCHEF serves estates between Ubud and Mas — daily catering, group dinners and Balinese menus. WhatsApp myCHEF for a quote.",
    coordinates: { lat: -8.5389, lng: 115.2606 },
    bookingNote: "Book 24–48 hours ahead for Lodtunduh. Retreat multi-day packages available — share guest count for a fixed quote.",
    published: true,
  },
  {
    slug: "tirta-gangga",
    name: "Tirta Gangga",
    regency: "Karangasem",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-water-sunset.webp",
    heroAlt: "Private chef serving a meal at a boutique villa near the royal water gardens of Tirta Gangga",
    intro:
      "Tirta Gangga — 'water of the Ganges' — is named for the royal water palace built by the last Raja of Karangasem in 1948. Surrounded by some of Bali's most dramatic rice-terrace landscapes and framed by Mount Agung, the area attracts boutique villa travellers seeking East Bali tranquillity at its purest. myCHEF serves East Bali villas near the water palace with intimate dinners, Balinese cuisine, and logistics planned for Karangasem distances.",
    villaDensity:
      "Boutique villas and small guesthouses are scattered across terraced hillsides within a 3 km radius of the water palace. Properties are intimate, architecturally thoughtful, and typically designed for 2–6 guests.",
    guestProfile:
      "Culture-focused travellers, honeymooners escaping the Seminyak crowds, photographers, and yoga practitioners on longer stays. A growing eco-luxury segment uses the area as a secluded retreat base.",
    landmarks: [
      "Tirta Gangga Royal Water Palace",
      "Mount Agung panorama viewpoints",
      "Taman Ujung water palace (30 km south)",
      "Abang village rice terraces",
      "Tenganan traditional village (40 km)",
      "Candidasa beach (20 km south)",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "East Bali remote premium applies. 2.5–3 hour drive from South Bali — advance planning and 72-hour booking notice required.",
    services: ["private-chef", "fine-dining", "catering", "events"],
    faqs: [
      {
        q: "Will myCHEF travel to Tirta Gangga for a single dinner?",
        a: "Yes — we cover all of Bali including remote East. For Tirta Gangga we ask for 72 hours notice and a minimum 2-hour session to justify the travel. Contact us to confirm availability.",
      },
      {
        q: "What local ingredients can be sourced near Tirta Gangga?",
        a: "The region is known for organic vegetables, fresh coconut, local tubers, and the Amed coast provides excellent fresh fish. Our chefs plan menus around East Bali's unique produce.",
      },
      {
        q: 'How much does a private chef cost near Tirta Gangga?',
        a: 'Tirta Gangga bookings include East Bali logistics quoted before you confirm. Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost and travel. Intimate dinners and multi-day cultural stays are both available.',
      },
      {
        q: "How far in advance should I book near Tirta Gangga?",
        a: "Book 72 hours ahead for East Bali water-palace villas. Remote logistics and travel are quoted upfront so your total is fixed before deposit.",
      },
],
    nearbyAreas: [
      { slug: "candidasa", name: "Candidasa" },
      { slug: "amed", name: "Amed" },
      { slug: "sidemen", name: "Sidemen" },
      { slug: "tulamben", name: "Tulamben" },
    ],
    metaTitle: "Private Chef Tirta Gangga Bali | Royal Palace Villa Dining | myCHEF",
    metaDescription:
      "Hire a private chef in Tirta Gangga, East Bali. myCHEF serves villas near royal water gardens — intimate dinners, Balinese cuisine, and luxury villa catering.",
    coordinates: { lat: -8.4128, lng: 115.5714 },
    bookingNote: "Book 72 hours ahead. Remote East Bali location — distance premium applies.",
    published: true,
  },
  {
    slug: "munduk",
    name: "Munduk",
    regency: "Buleleng",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-locations-sunset.webp",
    heroAlt: "Private chef serving a warming highland dinner at a clove plantation villa in Munduk",
    intro:
      "Munduk is a cool highland village at 800 m elevation in the Buleleng foothills, surrounded by clove, coffee, and cacao plantations. Waterfalls cascade through the jungle below the village, and the air is mountain-fresh year-round — a total contrast to the coastal heat of South Bali. myCHEF plans highland menus around clove-coffee country produce, cooler evenings, and waterfall-view villa terraces.",
    villaDensity:
      "Boutique plantation lodges and eco-luxury villas occupy converted or newly-built estate buildings above terraced valleys. Properties are intimate (2–8 guests) with fireplaces, panoramic jungle views, and private gardens.",
    guestProfile:
      "Active adventurers who hike to waterfalls and cycle plantation trails by day, couples retreating from Bali's tourist noise, and wellness groups doing nature-based programmes.",
    landmarks: [
      "Munduk Waterfall",
      "Melanting Waterfall",
      "Danau Tamblingan lake (10 km east)",
      "Danau Buyan lake (15 km east)",
      "Munduk spice and coffee plantation tours",
      "Bali Handara Golf Course (20 km)",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "Highland North Bali premium applies. 2.5 hours from South Bali base. Warming mountain menus — slow-cooked dishes, local spice-based sauces, and hearty breakfasts — are our speciality here.",
    services: ["private-chef", "fine-dining", "catering", "bbq"],
    faqs: [
      {
        q: "What kind of menu works best in Munduk?",
        a: "The cooler mountain climate calls for warming dishes — slow-cooked meats, spiced soups, hearty breakfasts with local coffee and cacao. We design specifically for the altitude and ambience.",
      },
      {
        q: "Can myCHEF source local Munduk produce?",
        a: "Munduk is famous for cloves, coffee, cacao, vanilla, and fresh highland vegetables. Our chefs plan menus around local ingredients wherever possible.",
      },
      {
        q: 'How far in advance should I book a private chef in Munduk?',
        a: 'Munduk needs 72 hours lead time for highland logistics and cooler-climate market runs. Multi-day stays should be booked earlier. We confirm travel and menu scope on WhatsApp before deposit.',
      },
      {
        q: "How much does a private chef cost in Munduk?",
        a: "Munduk highland pricing starts from Full-day stay chef from IDR 2,700,000++ per day with distance logistics quoted upfront. Cooler mountain menus suit the elevation.",
      },
],
    nearbyAreas: [
      { slug: "lovina", name: "Lovina" },
      { slug: "singaraja", name: "Singaraja" },
      { slug: "bedugul", name: "Bedugul" },
      { slug: "pemuteran", name: "Pemuteran" },
    ],
    metaTitle: "Private Chef Munduk Bali | Highland Plantation Villa Dining | myCHEF",
    metaDescription:
      "Hire a private chef in Munduk. myCHEF serves Buleleng highland villas — warming mountain menus, waterfall-view dinners and highland catering. WhatsApp myCHEF.",
    coordinates: { lat: -8.2611, lng: 115.0944 },
    bookingNote: "Book 72 hours ahead. Highland North Bali — distance premium, cool weather year-round.",
    published: true,
  },
  {
    slug: "gianyar",
    name: "Gianyar",
    regency: "Gianyar",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-city-ubud.webp",
    heroAlt: "Private chef at a villa in Gianyar regency surrounded by rice fields and traditional Balinese temples",
    intro:
      "Gianyar is the cultural heartland of Bali — the regency that encompasses Ubud, the rice-terrace villages, and the island's greatest concentration of traditional art. The town of Gianyar itself is a compact royal capital 10 km east of Ubud, with a modest villa scene and easy access to the coast at Lebih Beach. myCHEF cooks in Gianyar town and surrounding compounds — babi guling feasts, Balinese menus, and villa catering near the cultural capital.",
    villaDensity:
      "Villas in and around Gianyar town are spread across suburban compounds, rice-field lanes, and the coastal strip at Siyut and Lebih. They attract guests who want a genuine local experience rather than a tourist-bubble address.",
    guestProfile:
      "Independent travellers, cultural researchers, expats on long stays, and visitors attending ceremonies or traditional performances in Gianyar's active palace.",
    landmarks: [
      "Puri Gianyar royal palace",
      "Gianyar Night Market (babi guling capital)",
      "Lebih Beach and Hindu sea-temple",
      "Bali Bird Park (Singapadu)",
      "Blahbatuh gandrung dance village",
      "Sidan Pura Dalem temple",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "Standard Ubud-zone rate. Gianyar is 10 km from our Ubud operations base, within the standard service radius. Balinese feast menus available on request.",
    services: ["private-chef", "fine-dining", "catering", "bbq", "events"],
    faqs: [
      {
        q: "Is Gianyar known for any particular local dishes?",
        a: "Yes — Gianyar is famous for some of the best babi guling (spit-roast suckling pig) in Bali. Our chefs can incorporate this and other Gianyar specialities into your menu.",
      },
      {
        q: "Can myCHEF cater events at Puri Gianyar or traditional venues?",
        a: "We have experience catering at ceremonial and heritage venues. Please share your venue details and we'll confirm logistics and any requirements.",
      },
      {
        q: 'How much does a private chef cost in Gianyar?',
        a: 'Gianyar is in our Ubud service zone with full-day stay chef from IDR 2,700,000++, groceries at cost. Babi guling feasts and multi-day catering packages are quoted per guest count.',
      },
      {
        q: "How far in advance should I book a private chef in Gianyar?",
        a: "Book 48 hours ahead for standard villa dinners; longer for events near cultural venues. Balinese feast and babi guling-style menus are available on request.",
      },
],
    nearbyAreas: [
      { slug: "ubud", name: "Ubud" },
      { slug: "sukawati", name: "Sukawati" },
      { slug: "keramas", name: "Keramas" },
      { slug: "sanur", name: "Sanur" },
    ],
    metaTitle: "Private Chef Gianyar Bali | Gianyar Villa, Event Catering | myCHEF",
    metaDescription:
      "Hire a private chef in Gianyar. myCHEF serves villas and events in Bali's cultural capital — babi guling feasts, Balinese menus and villa catering near Ubud. WhatsApp myCHEF.",
    coordinates: { lat: -8.5351, lng: 115.3314 },
    bookingNote: "Book 24–48 hours ahead for Gianyar. Located in the Ubud service zone with standard rates and no surprise fees.",
    published: true,
  },
  {
    slug: "padang-bai",
    name: "Padang Bai",
    regency: "Karangasem",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-water-sunset.webp",
    heroAlt: "Private chef preparing fresh seafood at a boutique villa in Padang Bai overlooking the ocean",
    intro:
      "Padang Bai is a natural deep-water bay on Bali's east coast, best known as the ferry port for Lombok and the Gilis. Beyond its transit reputation lies a genuinely charming fishing village with boutique villas, excellent snorkelling bays, and a laid-back character far removed from the south coast bustle. myCHEF brings private chef sessions to Padang Bai hillside villas — seafood-forward menus for divers and overland travellers between Bali and Lombok.",
    villaDensity:
      "Small boutique villas and guesthouses are tucked along the hillsides above the main bay and the quieter Blue Lagoon Beach. Many properties have direct ocean views and are popular with divers and snorkellers.",
    guestProfile:
      "Divers and snorkellers who use Padang Bai as a hub for Nusa Penida and Gili dives, overland travellers crossing to Lombok, and independent travellers seeking affordable East Bali authenticity.",
    landmarks: [
      "Padang Bai main harbour",
      "Blue Lagoon Beach",
      "Bias Tugal (White Sand) Beach",
      "Pura Silayukti sea temple",
      "Padang Bai dive sites",
      "Gili Islands ferry departure",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "East Bali remote premium applies (1.5–2 hours from South Bali base) and is quoted upfront. Advance booking of 48 hours is required for Padang Bai.",
    services: ["private-chef", "catering", "bbq", "events"],
    faqs: [
      {
        q: "Can myCHEF do a fresh seafood BBQ at a Padang Bai villa?",
        a: "Absolutely — the fresh catch landed daily at Padang Bai harbour makes this one of the best spots on the island for a seafood BBQ. We source direct and cook at your villa.",
      },
      {
        q: "How do we book a chef if we're only stopping one night?",
        a: "We can arrange short-notice sessions (18 hours) in Padang Bai when a chef is already on the east coast. WhatsApp us your date and we'll confirm availability.",
      },
      {
        q: 'How much does a private chef cost in Padang Bai?',
        a: 'Padang Bai includes an East Bali distance component quoted upfront. Half-day sessions start from our standard day rate plus transparent travel; short-notice one-night stays are possible when a chef is already eastbound.',
      },
      {
        q: "How far in advance should I book a chef for a one-night Padang Bai stop?",
        a: "Even for one-night ferry stopovers, book 48 hours ahead when possible so seafood sourcing and east-coast travel can be confirmed the same day you arrive.",
      },
],
    nearbyAreas: [
      { slug: "candidasa", name: "Candidasa" },
      { slug: "amed", name: "Amed" },
      { slug: "tirta-gangga", name: "Tirta Gangga" },
      { slug: "sanur", name: "Sanur" },
    ],
    metaTitle: "Private Chef Padang Bai Bali | Harbour Village Seafood Dining | myCHEF",
    metaDescription:
      "Book a private chef in Padang Bai, East Bali. myCHEF serves boutique villas with fresh seafood BBQs, Balinese menus, and villa catering near the ferry port.",
    coordinates: { lat: -8.5331, lng: 115.5094 },
    bookingNote: "Book 48 hours ahead for Padang Bai. East Bali distance premium is quoted upfront before you confirm.",
    published: true,
  },
  {
    slug: "baturiti",
    name: "Baturiti",
    regency: "Tabanan",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-locations-sunset.webp",
    heroAlt: "Private chef preparing a highland breakfast at a villa surrounded by strawberry fields in Baturiti",
    intro:
      "Baturiti is the gateway village to the Bedugul highlands, sitting at 1,000 m above sea level between the volcanic caldera lakes and the coastal plain. The area is famous for its strawberry farms, flower markets, and cool air — a refreshing escape that draws Balinese families and international visitors alike. myCHEF serves Baturiti highland villas with farm-fresh Bedugul produce, warming mountain dinners, and travel planned for cooler elevation kitchens.",
    villaDensity:
      "Boutique highland villas and small eco-lodges are positioned along the Bedugul–Tabanan road and on the slopes above Lake Beratan. Properties typically cater to wellness travellers and families wanting a cool highland alternative to the beach.",
    guestProfile:
      "Balinese and Indonesian domestic travellers on highland retreats, wellness groups, international families with children enjoying the cooler temperatures, and couples on romantic highland getaways.",
    landmarks: [
      "Pura Ulun Danu Beratan (lake temple)",
      "Bedugul Botanical Gardens",
      "Baturiti strawberry farms",
      "Danau Beratan lake",
      "Danau Tamblingan (15 km north)",
      "Bali Handara Golf Resort",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "Highland Tabanan premium applies (same zone as Bedugul, ~1.5 hours from South Bali). Quoted upfront; 50% deposit confirms. Farm-fresh menus available.",
    services: ["private-chef", "catering", "bbq", "events"],
    faqs: [
      {
        q: "Can myCHEF incorporate fresh local produce from Baturiti?",
        a: "Yes — Baturiti's farms produce exceptional strawberries, capsicums, tomatoes, corn, and flowers. We love designing menus around the highland harvest. Ask us for a seasonal menu.",
      },
      {
        q: "What's a good menu for a cold Baturiti evening?",
        a: "Warming dishes work beautifully here — cream soups, slow-braised meats, homemade pasta with mushroom sauces, and a cheese board. We'll design a menu perfectly suited to the mountain chill.",
      },
      {
        q: 'How far in advance should I book a private chef in Baturiti?',
        a: 'Book 72 hours ahead for Baturiti so we can plan highland market sourcing and travel from south Bali. Multi-day retreat catering should be confirmed earlier — share dates and guest count for availability.',
      },
      {
        q: "How much does a private chef cost in Baturiti?",
        a: "Baturiti highland service starts from Full-day stay chef from IDR 2,700,000++ per day. Fresh local produce and warming menus are planned for cooler evenings.",
      },
],
    nearbyAreas: [
      { slug: "bedugul", name: "Bedugul" },
      { slug: "tabanan", name: "Tabanan" },
      { slug: "jatiluwih", name: "Jatiluwih" },
      { slug: "munduk", name: "Munduk" },
    ],
    metaTitle: "Private Chef Baturiti Bali | Highland Strawberry Dining | myCHEF",
    metaDescription:
      "Hire a private chef in Baturiti. myCHEF serves Bedugul highland villas — farm-fresh menus, warming mountain dinners and highland catering. WhatsApp myCHEF.",
    coordinates: { lat: -8.2858, lng: 115.1661 },
    bookingNote: "Book 48 hours ahead. Highland Tabanan — distance premium, cool temperatures.",
    published: true,
  },
  {
    slug: "mengwi",
    name: "Mengwi",
    regency: "Badung",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-locations-sunset.webp",
    heroAlt: "Private chef at a villa in Mengwi with views toward the royal water temple Pura Taman Ayun",
    intro:
      "Mengwi is the former royal capital of the Mengwi kingdom, 18 km north of Kuta. The area is anchored by Pura Taman Ayun — one of Bali's most photographed royal temples — and surrounded by rice fields, craft villages, and a quiet villa corridor that appeals to culturally-motivated visitors. myCHEF covers Mengwi for family villa dinners, Balinese feast menus near Pura Taman Ayun, and central-Badung event catering.",
    villaDensity:
      "Villas in Mengwi are spread across the rice-field lanes north of the main road. Properties are mid-range to luxury, often chosen by guests who want a central Bali location equidistant from Ubud, Canggu, and the Tanah Lot coast.",
    guestProfile:
      "Culture-focused travellers using Mengwi as a central base, day-trippers from Seminyak and Canggu on longer stays, and families who want a quieter alternative to the south coast with good road links.",
    landmarks: [
      "Pura Taman Ayun royal temple",
      "Mengwi royal palace ruins",
      "Sangeh Monkey Forest (7 km north)",
      "Tanah Lot Temple (15 km west)",
      "Kapal Pura Sada temple",
      "Bali Safari & Marine Park (25 km east)",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "Standard Badung rate. Mengwi is 25 minutes from our South Bali base — within the standard service zone. Family villa dinners and temple-area events welcome.",
    services: ["private-chef", "fine-dining", "catering", "bbq", "events"],
    faqs: [
      {
        q: "Is Mengwi good for a family villa stay with private chef?",
        a: "Yes — the central location, quieter roads, and proximity to temple sightseeing make Mengwi excellent for families. We offer family-friendly menus including kid-adapted Balinese dishes.",
      },
      {
        q: "Can myCHEF cater for a function near Pura Taman Ayun?",
        a: "We can cater for events in the Mengwi area. Please share details of your venue and we'll confirm whether the location is suitable and advise on any permits needed.",
      },
      {
        q: 'How much does a private chef cost in Mengwi?',
        a: 'Mengwi uses our central Badung rate band from Full-day stay chef from IDR 2,700,000++ per day, groceries at cost. Family villa dinners and temple-area event catering are common — share your date for a fixed quote.',
      },
      {
        q: "How far in advance should I book a private chef in Mengwi?",
        a: "Book 48 hours ahead for family villa dinners near Taman Ayun. Mengwi sits in central Badung with reliable access from the south-Bali chef network.",
      },
],
    nearbyAreas: [
      { slug: "tanah-lot", name: "Tanah Lot" },
      { slug: "canggu", name: "Canggu" },
      { slug: "ubud", name: "Ubud" },
      { slug: "tabanan", name: "Tabanan" },
    ],
    metaTitle: "Private Chef Mengwi Bali | Royal Temple Town Villa Dining | myCHEF",
    metaDescription:
      "Hire a private chef in Mengwi. myCHEF serves villas near Pura Taman Ayun — family dinners, Balinese feast menus, and catering in the heart of Badung regency.",
    coordinates: { lat: -8.5428, lng: 115.1806 },
    bookingNote: "Book 24–48 hours ahead. Central Bali location — within standard service zone.",
    published: true,
  },
  {
    slug: "ketewel",
    name: "Ketewel",
    regency: "Gianyar",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-water-sunset.webp",
    heroAlt: "Private chef serving a beachside dinner at a villa in Ketewel on the black-sand Gianyar coast",
    intro:
      "Ketewel is a coastal village in Gianyar regency, straddling the beach road between Sanur and Keramas. The black-sand beach here is largely uncrowded, the fishing boats go out at dawn, and a growing number of luxury villas have been built to capture the ocean views without Seminyak's price tag. myCHEF serves Ketewel beachfront compounds with seafood BBQs, sunset dinners, and easy access between Sanur and Keramas.",
    villaDensity:
      "A corridor of beachfront and beach-access villas runs along the coast road. Properties range from affordable four-bedroom compounds to boutique luxury villas, all with easy beach access and ocean breezes.",
    guestProfile:
      "Surfers using the Keramas breaks (5 km east), beach-holiday families wanting a quieter alternative to Sanur, and couples booking longer stays at well-priced beachfront villas.",
    landmarks: [
      "Ketewel black-sand beach",
      "Pura Masceti sea temple",
      "Keramas surf break (5 km east)",
      "Sanur beach promenade (10 km west)",
      "Gianyar night market (15 km north)",
      "Bali Collection Nusa Dua (30 km)",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "Standard Gianyar coast rate. Ketewel sits between Sanur and Keramas — both within our standard service zone. Beachfront BBQ packages available on request.",
    services: ["private-chef", "catering", "bbq", "events"],
    faqs: [
      {
        q: "Can myCHEF do a beachside BBQ in Ketewel?",
        a: "Yes — Ketewel's quiet beach is perfect for a private sunset BBQ. We set up on your villa beach terrace or directly on the sand with full equipment. Fresh seafood from Sanur market is available.",
      },
      {
        q: "Is Ketewel close enough to Sanur for the same chef availability?",
        a: "Yes — chefs based in the Sanur zone can serve Ketewel with no additional distance premium. Same-day bookings are often possible.",
      },
      {
        q: 'How much does a private chef cost in Ketewel?',
        a: 'Ketewel follows south–east Bali pricing from Full-day stay chef from IDR 2,700,000++ per day, groceries at cost. Beachside BBQs and sunset dinners are popular here — no surprise travel fees when quoted upfront.',
      },
      {
        q: "How far in advance should I book a private chef in Ketewel?",
        a: "Book 48 hours ahead for beachfront dinners between Sanur and Keramas. Seafood BBQs and sunset menus are popular on this Gianyar stretch.",
      },
],
    nearbyAreas: [
      { slug: "sanur", name: "Sanur" },
      { slug: "keramas", name: "Keramas" },
      { slug: "gianyar", name: "Gianyar" },
      { slug: "denpasar", name: "Denpasar" },
    ],
    metaTitle: "Private Chef Ketewel Bali | Gianyar Beachfront & BBQ | myCHEF",
    metaDescription:
      "Hire a private chef in Ketewel. myCHEF serves Gianyar beachfront villas — seafood BBQs, sunset dinners and villa catering between Sanur and Keramas. WhatsApp myCHEF.",
    coordinates: { lat: -8.6097, lng: 115.2831 },
    bookingNote: "Book 24–48 hours ahead for Ketewel. Within the standard Gianyar/Sanur service zone for easy logistics.",
    published: true,
  },
  {
    slug: "abiansemal",
    name: "Abiansemal",
    regency: "Badung",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-city-ubud.webp",
    heroAlt: "Private chef preparing a fresh farm-to-table dinner at a highland villa in Abiansemal",
    intro:
      "Abiansemal is an upland district in central Badung, rising into the foothills north of Mengwi. The area sits at the crossroads between the Ubud arts corridor and the highland wine country — Hatten Wines' estate is here — and attracts villa guests seeking a countryside retreat within 40 minutes of both the south coast and Ubud. myCHEF covers Abiansemal upland villas for quiet family dinners and multi-day stays with central Badung access and highland-leaning produce.",
    villaDensity:
      "The villa landscape is sparse but high quality — large private estates with panoramic rice-field and mountain views. Properties tend to be owner-operated or for exclusive-use rental, with well-equipped kitchens and extensive gardens.",
    guestProfile:
      "Wine enthusiasts visiting Hatten Estate, wellness retreaters on private programmes, and couples or small groups who want a genuinely rural Bali experience without the travel time of North Bali.",
    landmarks: [
      "Hatten Wines Bali estate",
      "Pura Sadha Kapal temple",
      "Abiansemal waterfall",
      "Sangeh Monkey Forest (10 km east)",
      "Ubud market (25 km north-east)",
      "Seminyak beach (35 km south)",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "Standard Badung rate. Abiansemal is 30 minutes from our south Bali base and can be served by both our Ubud and Seminyak teams.",
    services: ["private-chef", "fine-dining", "catering", "events"],
    faqs: [
      {
        q: "Can myCHEF design a wine-pairing dinner at an Abiansemal villa?",
        a: "Yes — with Hatten Wines on the doorstep, an Indonesian-wine-pairing dinner is a natural fit here. We design menus around Hatten's sparkling, still, and dessert wines.",
      },
      {
        q: "How rural is Abiansemal — will grocery sourcing be a problem?",
        a: "Not at all. Our chefs source from Ubud market and Badung central market before arrival. We bring everything you need.",
      },
      {
        q: 'How much does a private chef cost in Abiansemal?',
        a: 'Abiansemal follows our central Badung rate band: from Full-day stay chef from IDR 2,700,000++ per day, groceries at cost. Travel is usually included in the standard zone — confirm your villa pin on WhatsApp for a fixed quote.',
      },
      {
        q: "How far in advance should I book a wine-pairing dinner in Abiansemal?",
        a: "Book 48–72 hours ahead for farm-to-table or wine-pairing dinners so produce and pairing notes can be confirmed with your villa kitchen layout.",
      },
],
    nearbyAreas: [
      { slug: "mengwi", name: "Mengwi" },
      { slug: "ubud", name: "Ubud" },
      { slug: "tanah-lot", name: "Tanah Lot" },
      { slug: "canggu", name: "Canggu" },
    ],
    metaTitle: "Private Chef Abiansemal Bali | Highland Wine Estate Dining | myCHEF",
    metaDescription:
      "Hire a private chef in Abiansemal. myCHEF serves central Badung estates — wine-pairing dinners, farm-to-table menus and Hatten Wines country catering. WhatsApp.",
    coordinates: { lat: -8.5117, lng: 115.2117 },
    bookingNote: "Book 24–48 hours ahead. Central Badung — 30 minutes from Seminyak base.",
    published: true,
  },
  {
    slug: "cepaka",
    name: "Cepaka",
    regency: "Tabanan",
    tier: 3,
    heroImage: "/generated/mychef-location-bali-water-sunset.webp",
    heroAlt: "Private chef serving a sunset dinner at a villa in Cepaka on the Tabanan coast near Canggu",
    intro:
      "Cepaka is a coastal village in western Tabanan, just over the Canggu district boundary. As land prices in Canggu and Berawa have risen, villa developers moved west into Cepaka — bringing with them a new generation of luxury properties at the edge of Bali's fastest-growing surf and lifestyle corridor. myCHEF covers Cepaka for sunset BBQs, multi-day villa stays, and west-coast dinners with Tabanan produce and clear logistics from the Canggu belt.",
    villaDensity:
      "A mix of high-spec new-build villas and converted rice-field compounds lines the coastal strip and back-lanes of Cepaka. The area is villa-dense and growing, with a similar character to early Pererenan but with more space and privacy.",
    guestProfile:
      "Surfers and digital nomads overflowing from Canggu, villa investors on inspection trips, and couples looking for Canggu energy at slightly less Canggu pricing.",
    landmarks: [
      "Cepaka beach (uncrowded black sand)",
      "Yeh Gangga Beach (2 km west)",
      "Echo Beach Canggu (5 km east)",
      "Tanah Lot temple (8 km north)",
      "Seminyak beach (18 km south-east)",
      "Bali Zoo (25 km north)",
    ],
    priceFrom: "Full-day stay chef from IDR 2,700,000++ per day",
    pricingNote:
      "Standard Canggu-zone rate. Cepaka is served by our Canggu/Pererenan team with no distance surcharge. Sunset BBQ and multi-day stays available on request.",
    services: ["private-chef", "fine-dining", "catering", "bbq", "events"],
    faqs: [
      {
        q: "Is Cepaka too far from Canggu for myCHEF?",
        a: "Not at all — Cepaka is within our standard Canggu service zone. We treat it the same as Pererenan or Berawa. No surcharge.",
      },
      {
        q: "Can we get a sunset BBQ on the Cepaka beachfront?",
        a: "Yes — the uncrowded Cepaka coastline is perfect for a private sunset BBQ. We set up full equipment and source fresh seafood from Jimbaran or Tabanan fish markets.",
      },
      {
        q: 'How much does a private chef cost in Cepaka?',
        a: 'Cepaka is in the Canggu–Tabanan service zone. Stay chef starts at a full day of staff from IDR 2,700,000++ plus groceries at cost. Sunset BBQ packages and multi-day villa stays are available — WhatsApp for a fixed quote.',
      },
      {
        q: "How far in advance should I book a private chef in Cepaka?",
        a: "Book 48 hours ahead for Tabanan coast villas. Sunset BBQs and multi-day stays are available; travel from the Canggu corridor is quoted clearly upfront.",
      },
],
    nearbyAreas: [
      { slug: "canggu", name: "Canggu" },
      { slug: "pererenan", name: "Pererenan" },
      { slug: "tanah-lot", name: "Tanah Lot" },
      { slug: "tabanan", name: "Tabanan" },
    ],
    metaTitle: "Private Chef Cepaka Bali | Tabanan Coast Villa Dining | myCHEF",
    metaDescription:
      "Hire a private chef in Cepaka. myCHEF serves Tabanan coast villas — sunset BBQs, villa dinners and catering in Bali's newest villa corridor. WhatsApp myCHEF.",
    coordinates: { lat: -8.6353, lng: 115.1122 },
    bookingNote: "Book 24–48 hours ahead. Served by the Canggu team — standard service zone.",
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
