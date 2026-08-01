/**
 * /group-villa-dinner-packages-bali
 *
 * Luxury SEO landing page + editorial guide for group villa dinner packages.
 * Replaces the generic LandingPage HTML article for this slug.
 *
 * Pricing rule: package floors stay aligned with existing published copy
 * (from IDR 700,000++/person). Do not invent lower rates here.
 */

import { Link } from 'react-router-dom'
import {
  Building2,
  Cake,
  CalendarDays,
  Check,
  ChefHat,
  Clock3,
  Flame,
  Flower2,
  Heart,
  MapPin,
  MessageCircle,
  PartyPopper,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Users,
  Utensils,
  Wine,
} from 'lucide-react'
import SeoHead, {
  breadcrumbSchema,
  faqPageSchema,
  localBusinessSchema,
  organizationSchema,
  serviceWithAggregateOfferSchema,
} from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import OptimizedImage from '@/components/OptimizedImage'
import { Breadcrumb, TrustStrip } from '@/components/shared'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import { siteFacts } from '@/data/siteFacts'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const SITE = 'https://mychef.id'
const PATH = '/group-villa-dinner-packages-bali'
const CANONICAL = `${SITE}${PATH}`
const HERO = '/generated/mychef-catering-bali-plated-5course-premium-table.webp'
const OG = `${SITE}${HERO}`

const WA_QUOTE = buildWhatsAppUrl({
  serviceName: 'group villa dinner packages in Bali',
  intent: 'a free quote within 2 hours',
})
const WA_MENUS = buildWhatsAppUrl({
  serviceName: 'group villa dinner menus in Bali',
  intent: 'menu options for my group size',
})

const WHY_POINTS = [
  {
    title: 'No restaurant reservations',
    desc: 'Skip the multi-table scramble. Your whole group dines together in one private space, on your schedule.',
  },
  {
    title: 'No transport logistics',
    desc: 'Guests stay where they are. Children, grandparents and late arrivals never miss a course.',
  },
  {
    title: 'Complete privacy',
    desc: 'Conversations, toasts and celebrations stay inside your villa — not a crowded dining room.',
  },
  {
    title: 'Restaurant-quality cooking',
    desc: 'Professional chefs, hotel-grade technique and plating designed for villa kitchens at scale.',
  },
  {
    title: 'Menus built around you',
    desc: 'Italian, Mediterranean, Balinese, premium BBQ or fine dining — shaped to tastes, diets and the occasion.',
  },
  {
    title: 'A stress-free host experience',
    desc: 'Shopping, cooking, service and cleanup are handled. You host. We run the evening.',
  },
] as const

const OCCASIONS = [
  {
    id: 'family',
    title: 'Family Gatherings',
    eyebrow: 'Multi-generational tables',
    image: '/generated/mychef-misc-bali-family-villa-dinner-cutout.webp',
    alt: 'Three generations enjoying a luxury family villa dinner in Bali',
    body: 'Family villa dinners in Bali work best when the table can stretch. Grandparents, toddlers and cousins rarely want the same dish at the same pace. Our family-style and hybrid formats let everyone share generously while we pace kids’ plates early and keep adult courses elegant. Dietary notes are collected in advance so no one feels like an afterthought.',
    links: [
      { label: 'Kids menus', href: '/kids-menus' },
      { label: 'Villa catering', href: '/catering/villa-catering' },
    ],
  },
  {
    id: 'birthday',
    title: 'Birthday Celebrations',
    eyebrow: 'Milestone evenings',
    image: '/generated/mychef-events-bali-birthdays-table.webp',
    alt: 'Luxury birthday dinner table styling with candles and champagne in a Bali villa',
    body: 'A birthday dinner at the villa should feel like a private party, not a catering drop-off. We design the flow around the cake moment, champagne pours, speeches and photo timing. From intimate 12-guest tables to 60-person celebrations, the kitchen, waitstaff and table styling stay invisible until the room needs them.',
    links: [
      { label: 'Birthday catering', href: '/events/birthdays' },
      { label: 'Luxury birthday parties', href: '/luxury-birthday-party-bali' },
    ],
  },
  {
    id: 'wedding',
    title: 'Wedding Welcome Dinners',
    eyebrow: 'Pre-wedding hospitality',
    image: '/generated/mychef-events-bali-weddings-reception.webp',
    alt: 'Elegant wedding welcome dinner table with flowers, candles and sunset villa setting in Bali',
    body: 'The welcome dinner sets the tone for the wedding weekend. Long tables, soft florals, candlelight and a menu that works across cultures are essential when guests have just landed. We coordinate with planners and villa managers so service timing, dietary lists and setup windows are locked before the first guest arrives.',
    links: [
      { label: 'Wedding catering', href: '/events/weddings' },
      { label: 'Wedding packages', href: '/bali-wedding-catering-packages' },
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Retreats',
    eyebrow: 'Leadership & offsites',
    image: '/generated/mychef-catering-bali-corporate-gallery-networking.webp',
    alt: 'Professionals networking over a private corporate villa dinner in Bali',
    body: 'Corporate villa dinners need more than good food. They need punctual service windows around presentations, quiet staff who understand confidentiality, and menus that keep energy high without heaviness. We can structure canapés into dinner, or move from working lunch into an evening feast under one production plan.',
    links: [
      { label: 'Corporate events', href: '/events/corporate-events' },
      { label: 'Retreat catering', href: '/corporate-retreat-catering-bali' },
    ],
  },
  {
    id: 'friends',
    title: 'Friends’ Holiday Dinners',
    eyebrow: 'Holiday tables & BBQs',
    image: '/generated/mychef-events-bali-villa-parties-bbq.webp',
    alt: 'Luxury villa BBQ with cocktails and sharing dishes for friends holiday dinner in Bali',
    body: 'Friends’ trips are where group villa dinner packages shine: one night everyone cooks for each other becomes a chef-led feast with cocktails, sharing platters and zero cleanup. Premium BBQ, Mediterranean grazing and live stations keep the energy social while the team handles charcoal, plating and the last glass.',
    links: [
      { label: 'Villa BBQ catering', href: '/villa-bbq-catering-bali' },
      { label: 'Villa parties', href: '/events/villa-parties' },
    ],
  },
] as const

const MENUS = [
  {
    title: 'Italian',
    image: '/generated/mychef-experience-bali-luna-table.webp',
    alt: 'Italian private chef table with handmade pasta and fine dining plating in Bali villa',
    desc: 'Handmade pasta, whole grilled fish, antipasti and slow-cooked sauces. Ideal for family-style long tables and intimate plated dinners.',
  },
  {
    title: 'Mediterranean',
    image: '/generated/mychef-catering-bali-plated-4course-table.webp',
    alt: 'Mediterranean villa dinner plating with fresh produce and elegant tableware',
    desc: 'Olive oil–led cooking, grilled seafood, mezze, bright salads and sharing boards that scale beautifully for mixed groups.',
  },
  {
    title: 'Premium BBQ',
    image: '/generated/mychef-finedining-bali-sol-bbq.webp',
    alt: 'Premium BBQ private chef grilling surf and turf at a Bali villa',
    desc: 'Live charcoal, wagyu, lobster, whole fish and satay theatre. Perfect for poolside evenings and friends’ holiday dinners.',
  },
  {
    title: 'Balinese Feast',
    image: '/generated/mychef-catering-bali-bbq-package-indonesian.webp',
    alt: 'Balinese feast dishes prepared for a private villa dinner in Bali',
    desc: 'Ceremonial spice pastes, lawar, bebek, sambal and generous rice-table formats that honour local flavour without hotel shortcuts.',
  },
  {
    title: 'Fine Dining Tasting',
    image: '/generated/mychef-catering-bali-plated-5course-premium-table.webp',
    alt: 'Fine dining tasting menu courses plated for a luxury Bali villa dinner',
    desc: 'Multi-course tasting with Michelin-influenced technique, wine-friendly pacing and silent service for milestone nights.',
  },
] as const

const INCLUDED = [
  { icon: ShoppingBasket, title: 'Grocery shopping', desc: 'Markets, specialty produce and proteins sourced to the menu before service.' },
  { icon: Utensils, title: 'Ingredients & prep', desc: 'Full mise en place planned for your guest count, diets and service format.' },
  { icon: ChefHat, title: 'Professional chefs', desc: 'Brigade sized to headcount — not a single cook stretched beyond capacity.' },
  { icon: Users, title: 'Serving staff', desc: 'Waitstaff ratios that keep food hot, glasses full and timing calm.' },
  { icon: Sparkles, title: 'Table styling', desc: 'Linen, candles, place settings and premium presentation where requested.' },
  { icon: ShieldCheck, title: 'Equipment', desc: 'We bring what villa kitchens lack: serviceware, heat, carving and backup gear.' },
  { icon: Flame, title: 'Cooking & plating', desc: 'Live stations, family-style or plated courses executed restaurant-clean.' },
  { icon: Check, title: 'Full cleanup', desc: 'Kitchen and dining areas returned spotless before the team leaves.' },
] as const

const TIMELINE = [
  {
    step: '01',
    title: 'Arrival',
    desc: 'The team arrives early, assesses the kitchen and dining flow, and stages equipment without disrupting your day.',
  },
  {
    step: '02',
    title: 'Preparation',
    desc: 'Produce is washed, proteins rest, sauces finish, and the table is dressed while guests settle or swim.',
  },
  {
    step: '03',
    title: 'Cooking',
    desc: 'Service cooking begins on schedule — live grill, pasta finish, or plated passes timed to the first toast.',
  },
  {
    step: '04',
    title: 'Serving',
    desc: 'Courses or stations move in sequence. Dietary plates are labelled, kids can eat early, adults linger.',
  },
  {
    step: '05',
    title: 'Dessert',
    desc: 'Celebration cakes, plated desserts or fruit and petit fours close the meal with a calm final course.',
  },
  {
    step: '06',
    title: 'Cleanup',
    desc: 'Dishes, kitchen surfaces and service areas are reset. You stay with your guests; we leave the villa pristine.',
  },
] as const

const TRUST_STATS = [
  { label: siteFacts.eventsServed, detail: 'Villa dinners, celebrations and private events delivered across Bali.' },
  { label: siteFacts.guestsServed, detail: 'From intimate tables of ten to villa events approaching 150 guests.' },
  { label: siteFacts.villaBookings, detail: 'Repeated villa partnerships and hosts who book every return trip.' },
  { label: `${siteFacts.depositPercent}% deposit`, detail: 'Date locked with clear balance timing and written scope.' },
] as const

const AREAS = [
  {
    name: 'Seminyak',
    href: '/locations/seminyak',
    image: '/generated/mychef-location-bali-city-seminyak.webp',
    desc: 'Walkable luxury villas, long party tables and easy access for large-group logistics.',
  },
  {
    name: 'Canggu',
    href: '/locations/canggu',
    image: '/generated/mychef-location-bali-city-canggu.webp',
    desc: 'Pool villas and friends’ trips that lean BBQ, Mediterranean grazing and sunset service.',
  },
  {
    name: 'Ubud',
    href: '/locations/ubud',
    image: '/generated/mychef-location-bali-city-ubud.webp',
    desc: 'Jungle estates and retreat groups who want quieter pacing and plant-forward options.',
  },
  {
    name: 'Uluwatu',
    href: '/locations/uluwatu',
    image: '/generated/mychef-location-bali-city-uluwatu.webp',
    desc: 'Cliffside villas for wedding welcome dinners and golden-hour fine dining.',
  },
  {
    name: 'Sanur',
    href: '/locations/sanur',
    image: '/generated/mychef-location-bali-city-sanur.webp',
    desc: 'Family-friendly beachside villas with multi-generational menus and early kids’ service.',
  },
  {
    name: 'Nusa Dua',
    href: '/locations/nusa-dua',
    image: '/generated/mychef-location-bali-city-nusa-dua.webp',
    desc: 'Resort-adjacent estates for corporate dinners and polished plated hospitality.',
  },
] as const

const GALLERY = [
  { src: '/generated/mychef-experience-bali-aura-tablescape.webp', alt: 'Luxury villa table styling with linen, glassware and florals' },
  { src: '/generated/mychef-finedining-bali-chefs-hero.webp', alt: 'Professional private chefs preparing dishes in a Bali villa kitchen' },
  { src: '/generated/mychef-catering-bali-hero-bbq.webp', alt: 'Premium BBQ private chef experience at a Bali villa' },
  { src: '/generated/luna-dessert.webp', alt: 'Michelin-level dessert plating for villa fine dining' },
  { src: '/generated/mychef-location-bali-locations-sunset.webp', alt: 'Sunset villa dinner atmosphere in Bali' },
  { src: '/generated/mychef-experience-bali-home-hero-ivory-villa.webp', alt: 'Luxury Bali villa interior ready for private dining' },
  { src: '/generated/mychef-events-bali-anniversaries-toast.webp', alt: 'Guests toasting at a private villa celebration dinner' },
  { src: '/generated/mychef-catering-bali-plated-3course-table.webp', alt: 'Elegant three-course villa dinner table setup' },
] as const

const FAQS = [
  {
    q: 'How many guests can you serve for a group villa dinner in Bali?',
    a: 'Comfortably from 10 to 150 guests. Packages for 10–60 are quoted per person from IDR 700,000++. Above 60 we scale the brigade, equipment and prep plan; above 30 we typically add a second chef so service stays hot and simultaneous.',
  },
  {
    q: 'What is included in group villa dinner packages?',
    a: 'Menu design for your headcount, professional chefs, service staff scaled to the group, grocery sourcing for the meal, cooking, plating or buffet/station service, equipment, table setup where requested, and full kitchen cleanup. Alcohol, premium upgrades and villa function fees are quoted separately when needed.',
  },
  {
    q: 'How much do group villa dinner packages cost in Bali?',
    a: 'Packages start from IDR 700,000++ per person for groups of 10–60, subject to 11% government tax + 10% service charge. Larger events (61–150) are custom quoted based on format, staffing and villa logistics. Your quote is fixed before you commit.',
  },
  {
    q: 'Can you accommodate dietary restrictions across a large group?',
    a: 'Yes. We collect vegetarian, vegan, halal-sensitive, gluten-free, allergy and children’s requirements in advance, design the main spread so most needs are covered elegantly, and label dishes at service. Complex medical allergies are briefed to the whole team before cooking begins.',
  },
  {
    q: 'Is cleanup included?',
    a: 'Yes. Cleanup of the kitchen and dining service areas is included in every package. The villa should feel ready for morning coffee, not like a catering site.',
  },
  {
    q: 'Can I customise the menu?',
    a: 'Absolutely. Choose a direction — Italian, Mediterranean, premium BBQ, Balinese feast or fine dining tasting — then refine proteins, spice levels, courses and kids’ options. Custom celebration cakes and cultural dishes can be planned with enough notice.',
  },
  {
    q: 'Can you decorate or style the table?',
    a: 'Yes. Table styling can include linen, candles, place settings, simple florals and premium glassware presentation. Full floral design and large scenic installs are coordinated as add-ons with your planner or our events team.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'A few days to a week is often enough off-peak. For peak season, weekend dates, weddings and groups above 30, book as early as you can — two to six weeks is ideal. Last-minute requests are still welcome; we confirm availability quickly on WhatsApp.',
  },
  {
    q: 'Can children join the dinner?',
    a: 'Yes. Dedicated kids’ menus are available and can be served earlier so younger guests eat happily while adults continue a longer evening. Portioning and timing are planned with the organiser in advance.',
  },
  {
    q: 'Can I bring my own wine or alcohol?',
    a: 'Yes. Many hosts provide their own wine and spirits. We can also source beverages at cost, and add bartenders or a sommelier through our bar and in-villa service teams when you want full drinks service.',
  },
  {
    q: 'Which villas and areas of Bali do you serve?',
    a: 'We serve private villas across Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Pererenan and wider Bali. Share the villa name or pin and we confirm access, kitchen capacity and any travel fee before booking.',
  },
  {
    q: 'Do you provide waitstaff?',
    a: 'Yes. Waitstaff are part of group packages and scale with headcount — roughly one server per ten guests as a planning baseline, adjusted for plated vs buffet vs live-station formats.',
  },
  {
    q: 'Is the villa kitchen big enough for 20+ guests?',
    a: 'Almost always, with the right plan. We assess burners, power, refrigeration and serving space in advance and bring missing equipment. Larger groups may use off-site prep plus on-site finishing so the villa kitchen never becomes the bottleneck.',
  },
  {
    q: 'Do villas charge extra for large gatherings?',
    a: 'Some villas charge function or event fees when guest counts exceed sleeping capacity, and some areas require community (banjar) coordination for large events. We flag this early and coordinate with your villa manager so there are no night-of surprises.',
  },
  {
    q: 'What deposit is required?',
    a: `A ${siteFacts.depositPercent}% deposit confirms your date and team. ${siteFacts.balanceTiming.charAt(0).toUpperCase()}${siteFacts.balanceTiming.slice(1)}.`,
  },
  {
    q: 'Can you run multi-night group packages?',
    a: 'Yes. Many groups book an arrival dinner, a mid-stay BBQ and a farewell feast under one plan with rotating menus. For full daily coverage between big nights, pair packages with villa catering or private chef day service.',
  },
  {
    q: 'What service formats work best for large groups?',
    a: 'Family-style feasts suit reunions; buffets and live stations excel above 20–30 guests; plated dinners deliver formality for weddings and milestones; premium BBQ is ideal for social holiday nights. We recommend the format that fits your villa layout and guest mix.',
  },
  {
    q: 'How quickly can I get a quote?',
    a: 'Send villa area, date, guest count and occasion on WhatsApp. We aim to reply with a clear per-person proposal and format recommendation within two hours during operating hours.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Theo',
    location: 'Nusa Dua family villa',
    eventType: 'Villa dinner for 12',
    date: 'November 2025',
    quote:
      'We had grandparents, toddlers and two very fussy eaters. The chef paced courses perfectly, made a separate kids pasta, and still delivered a dinner that felt elegant for the adults.',
    rating: 5,
  },
  {
    name: 'Harper',
    location: 'Clifftop villa, Uluwatu',
    eventType: 'Wedding dinner for 42',
    date: 'January 2026',
    quote:
      'Sunset timing, dietary notes and a small villa kitchen — myCHEF made it look effortless. Dinner landed on schedule and our parents are still talking about the lamb.',
    rating: 5,
  },
  {
    name: 'Noah',
    location: 'Canggu',
    eventType: 'Birthday BBQ for 18',
    date: 'March 2026',
    quote:
      'It was supposed to be a relaxed birthday lunch and felt like a private resort event. The seafood grill was excellent and the team kept everything moving without ever being intrusive.',
    rating: 5,
  },
]

const PACKAGE_TIERS = [
  {
    title: '10–15 guests',
    price: 'From IDR 700,000++/person',
    detail: 'Intimate-but-big dinners: plated courses or family-style sharing with a focused chef team and dedicated service.',
  },
  {
    title: '16–30 guests',
    price: 'From IDR 700,000++/person',
    detail: 'Our most-booked band. Buffet, feast or BBQ with waitstaff roughly at one per ten guests and full table setup.',
  },
  {
    title: '31–60 guests',
    price: 'From IDR 700,000++/person',
    detail: 'Expanded buffet or live stations, additional chef capacity, and a service plan so the whole group eats hot together.',
  },
  {
    title: '61–150 guests',
    price: 'Custom quoted',
    detail: 'Villa-scale event service with a fuller brigade, temporary prep support and an event-minded production plan.',
  },
] as const

export default function GroupVillaDinnerPackagesBaliPage() {
  const serviceSchema = serviceWithAggregateOfferSchema({
    name: 'Group Villa Dinner Packages Bali',
    description:
      'All-inclusive luxury group villa dinner packages in Bali for families, celebrations, weddings, corporate retreats and friends’ holidays. Menu, chefs, service staff, equipment and cleanup from IDR 700,000++ per person for groups of 10–150.',
    url: CANONICAL,
    lowPrice: '700000',
    highPrice: '1500000',
    unitText: 'per person ++ (11% government tax + 10% service charge); groups of 10–150; larger events custom quoted',
  })

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <SeoHead
        title="Group Villa Dinner Packages Bali | Private Chef & Luxury Dining | myCHEF"
        description="Luxury group villa dinner packages in Bali for 10–150 guests. Private chef, villa catering, BBQ, fine dining and all-inclusive service for families, weddings and celebrations."
        canonical={CANONICAL}
        ogImage={OG}
        jsonLd={[
          serviceSchema,
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Group Villa Dinner Packages Bali', CANONICAL, 'Catering', `${SITE}/catering`),
          localBusinessSchema,
          organizationSchema(`${SITE}/mychef-logo-512.png`, [siteFacts.googleBusinessProfileUrl]),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end md:items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO}
            alt="Luxury Bali villa dinner table at golden hour with elegant styling, candles and private chef plating"
            width={1600}
            height={900}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.55) 42%, rgba(10,8,6,0.28) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <Breadcrumb
              items={[{ label: 'Catering', href: '/catering' }, { label: 'Group Villa Dinner Packages' }]}
              theme="dark"
              className="mb-8"
            />
            <p
              className="mb-5 text-sm uppercase tracking-[0.32em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Private chef · Villa catering · Bali-wide
            </p>
            <h1
              className="mb-6 max-w-4xl text-4xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Group Villa Dinner Packages in Bali
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              Luxury private dining experiences for families, celebrations, weddings, retreats, and unforgettable evenings in your private villa.
            </p>
            <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row">
              <a
                href={WA_QUOTE}
                target="_blank"
                rel="noopener noreferrer"
                data-source="group-villa-dinner-hero-quote"
                className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#1A1A1A] transition-all hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Get a Free Quote
              </a>
              <a
                href="#menus"
                data-source="group-villa-dinner-hero-menus"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Utensils className="h-4 w-4" aria-hidden="true" />
                View Menus
              </a>
            </div>
            <p className="text-sm uppercase tracking-[0.22em] text-white/60">
              From IDR 700,000++/person · Groups of 10–150 · {siteFacts.reviewFraming}
            </p>
          </div>
        </div>
      </section>

      <TrustStrip dark />

      {/* Introduction */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <p
              className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Private dining at the villa
            </p>
            <h2 className="mb-6 text-3xl leading-tight md:text-4xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Bali’s most memorable dinners no longer happen in restaurants
            </h2>
            <div className="space-y-4 text-[#4A4745] leading-relaxed">
              <p>
                Hiring a <strong>private chef in Bali</strong> for a villa dinner has become one of the island’s defining luxury experiences — not because it is novel, but because it solves the real problems of group travel. Restaurant bookings fracture large parties across rooms. Transfers eat the golden hour. Children and grandparents move on different clocks. A group villa dinner package brings restaurant-level cooking, service and pacing into the one place everyone already shares: your villa.
              </p>
              <p>
                For hosts planning a <strong>family villa dinner Bali</strong> night, a wedding welcome table, a corporate offsite or a friends’ holiday feast, the difference is immediate. One organiser. One fixed per-person price. One team that shops, cooks, serves and cleans. Guests remember the conversation and the light on the pool — not the scramble for taxis or the wait for a table.
              </p>
              <p>
                myCHEF designs <strong>group villa dinner packages Bali</strong> hosts can trust at scale: intimate tables of ten, milestone dinners of thirty, and villa events approaching 150 guests. The culinary standard stays high. The logistics stay invisible. The evening feels exclusive because it is.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-sm">
            <OptimizedImage
              src="/generated/mychef-complete-villa-chef-kitchen-bali-landscape.webp"
              alt="Private chef preparing food in a luxury Bali villa kitchen for group dining"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              width={900}
              height={1100}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-[#C5A028]">In-villa dining Bali</p>
              <p className="mt-1 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                Professional kitchens, villa kitchens — same standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why private chef */}
      <section className="bg-[#F4F0E8] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Section 01
            </p>
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why choose a private chef for your villa?
            </h2>
            <p className="text-lg text-[#4A4745]">
              A private chef for large groups in Bali is not a novelty add-on. It is the simplest way to deliver privacy, quality and calm when headcount rises.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_POINTS.map((item) => (
              <article key={item.title} className="rounded-sm border border-[#E6DFD2] bg-white p-7 shadow-[0_1px_0_rgba(26,26,26,0.03)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-[#C5A028]">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-[#4A4745] leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 overflow-hidden rounded-sm">
            <OptimizedImage
              src="/generated/mychef-catering-bali-dropoff-family.webp"
              alt="Large family enjoying a private villa dinner experience in Bali"
              className="aspect-[21/9] w-full object-cover"
              width={1600}
              height={680}
            />
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="bg-white py-20 md:py-28" id="occasions">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Section 02
            </p>
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Perfect for every occasion
            </h2>
            <p className="text-lg text-[#4A4745] leading-relaxed">
              The same operational standard adapts to the emotion of the night — whether you are hosting three generations, a wedding welcome dinner, a corporate retreat or a friends’ holiday BBQ under the palms.
            </p>
          </div>

          <div className="space-y-20">
            {OCCASIONS.map((item, index) => (
              <article
                key={item.id}
                id={item.id}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
              >
                <div className="overflow-hidden rounded-sm">
                  <OptimizedImage
                    src={item.image}
                    alt={item.alt}
                    className="aspect-[4/3] w-full object-cover"
                    width={1100}
                    height={825}
                  />
                </div>
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#8A7A47]">{item.eyebrow}</p>
                  <h3 className="mb-4 text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p className="mb-6 text-[#4A4745] leading-relaxed">{item.body}</p>
                  <div className="flex flex-wrap gap-3">
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="rounded-full border border-[#1A1A1A]/15 px-4 py-2 text-sm text-[#1A1A1A] transition-colors hover:border-[#C5A028] hover:text-[#7E6410] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Menus */}
      <section id="menus" className="bg-[#1A1A1A] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Section 03 · Menu options
            </p>
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Restaurant-quality menus, designed for villa service
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Every menu direction can be plated, family-style, buffet or live-station. Presentation stays magazine-clean; logistics stay practical for real villa kitchens.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {MENUS.map((menu) => (
              <article key={menu.title} className="group overflow-hidden rounded-sm border border-white/10 bg-white/[0.03]">
                <div className="overflow-hidden">
                  <OptimizedImage
                    src={menu.image}
                    alt={menu.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    width={900}
                    height={675}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {menu.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{menu.desc}</p>
                </div>
              </article>
            ))}
            <article className="flex flex-col justify-between rounded-sm border border-[#C5A028]/35 bg-gradient-to-br from-[#2A2418] to-[#1A1A1A] p-8">
              <div>
                <Wine className="mb-6 h-8 w-8 text-[#C5A028]" aria-hidden="true" />
                <h3 className="mb-3 text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Not sure which menu fits?
                </h3>
                <p className="mb-8 text-white/70 leading-relaxed">
                  Tell us guest count, diets and the mood of the night. We recommend a format and send sample menus with a fixed per-person quote.
                </p>
              </div>
              <a
                href={WA_MENUS}
                target="_blank"
                rel="noopener noreferrer"
                data-source="group-villa-dinner-menus-cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#1A1A1A] transition-colors hover:bg-[#D4B43A]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Request sample menus
              </a>
            </article>
          </div>
          <p className="mt-10 text-sm text-white/50">
            Explore related menus:{' '}
            <Link to="/bbq-grill" className="text-[#C5A028] hover:underline">
              BBQ grill
            </Link>
            ,{' '}
            <Link to="/fine-dining/menus" className="text-[#C5A028] hover:underline">
              fine dining menus
            </Link>
            ,{' '}
            <Link to="/catering/buffet" className="text-[#C5A028] hover:underline">
              buffet catering
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Included */}
      <section className="bg-[#FAFAF8] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Section 04 · What’s included
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                One dinner. One team. One complete package.
              </h2>
            </div>
            <p className="text-lg text-[#4A4745] leading-relaxed">
              Group packages are designed as all-inclusive culinary hospitality — not a chef-only booking you still have to staff and equip yourself.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="rounded-sm border border-[#E8E2D6] bg-white p-6">
                  <Icon className="mb-4 h-6 w-6 text-[#C5A028]" aria-hidden="true" />
                  <h3 className="mb-2 text-lg font-medium text-[#1A1A1A]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4A4745]">{item.desc}</p>
                </article>
              )
            })}
          </div>
          <div className="mt-12 overflow-hidden rounded-sm">
            <OptimizedImage
              src="/generated/mychef-events-bali-corp-plated.webp"
              alt="Chef serving guests at a luxury private villa dinner in Bali"
              className="aspect-[21/9] w-full object-cover"
              width={1600}
              height={680}
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Section 05 · How the evening works
            </p>
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              A calm timeline from arrival to cleanup
            </h2>
            <p className="text-lg text-[#4A4745] leading-relaxed">
              Luxury is pacing. Every group villa dinner follows a clear sequence so hosts never have to manage the kitchen while guests are present.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <ol className="space-y-4">
              {TIMELINE.map((item) => (
                <li key={item.step} className="flex gap-5 rounded-sm border border-[#EDE7DB] bg-[#FAFAF8] p-5">
                  <span className="text-sm font-semibold tracking-[0.2em] text-[#C5A028]">{item.step}</span>
                  <div>
                    <h3 className="mb-1 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#4A4745] leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="overflow-hidden rounded-sm">
              <OptimizedImage
                src="/generated/misc-luna-plating-md.webp"
                alt="Private chef plating dishes for a fine dining villa dinner in Bali"
                className="h-full min-h-[420px] w-full object-cover"
                width={1000}
                height={1200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="bg-[#F4F0E8] py-20 md:py-28" id="packages">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Transparent package floors
            </p>
            <h2 className="mb-4 text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Group dinner packages by guest count
            </h2>
            <p className="text-lg text-[#4A4745] leading-relaxed">
              All packages are priced per person and subject to 11% government tax + 10% service charge (++). Your quote is fixed before you commit.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PACKAGE_TIERS.map((tier) => (
              <article key={tier.title} className="flex h-full flex-col rounded-sm border border-[#E0D8C8] bg-white p-6">
                <h3 className="mb-2 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {tier.title}
                </h3>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#7E6410]">{tier.price}</p>
                <p className="text-sm leading-relaxed text-[#4A4745]">{tier.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={WA_QUOTE}
              target="_blank"
              rel="noopener noreferrer"
              data-source="group-villa-dinner-packages-cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-black"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Get a Free Quote
            </a>
            <Link to="/pricing" className="text-sm text-[#4A4745] underline-offset-4 hover:text-[#7E6410] hover:underline">
              Compare broader private chef pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why myCHEF */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Section 06 · Why myCHEF
              </p>
              <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Credibility you can feel in the room
              </h2>
              <div className="space-y-4 text-[#4A4745] leading-relaxed">
                <p>
                  myCHEF is built for villa hospitality at a standard guests associate with luxury resorts — without asking hosts to leave home. Leadership draws on formal training in {siteFacts.founderTrainingCity}, operational systems refined since {siteFacts.foundingYear}, and brigade discipline that keeps large tables calm.
                </p>
                <p>
                  Transparent pricing, HACCP-minded food safety, replacement cover when needed, and written scope before deposit: these are not marketing lines. They are how group dinners stay consistent when guest counts climb and villa kitchens vary.
                </p>
                <p>
                  Whether you need a <strong>villa chef service Bali</strong> hosts can trust for one signature night, or a multi-evening plan that includes BBQ and fine dining, you work with one team accountable for the whole experience.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-sm">
              <OptimizedImage
                src="/generated/luna-team.webp"
                alt="myCHEF professional chef team ready for luxury villa dining service in Bali"
                className="aspect-[4/3] w-full object-cover"
                width={1100}
                height={825}
              />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {TRUST_STATS.map((stat) => (
              <article key={stat.label} className="rounded-sm border border-[#EDE7DB] bg-[#FAFAF8] p-6">
                <p className="mb-2 text-2xl text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.label}
                </p>
                <p className="text-sm leading-relaxed text-[#4A4745]">{stat.detail}</p>
              </article>
            ))}
          </div>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {[
              'Experienced professional chefs matched to cuisine and group size',
              'Hundreds of villa events with consistent quality standards',
              'Thousands of guests served across family, wedding and corporate tables',
              'Transparent per-person pricing and clear inclusions before deposit',
              'Replacement cover and operational backup for peace of mind',
              'Coordination with villa managers on access, power and function rules',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-[#4A4745]">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A028]" aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-[#F4F0E8] py-20 md:py-28" id="areas">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Section 07 · Best areas in Bali
            </p>
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Private dining wherever your villa is
            </h2>
            <p className="text-lg text-[#4A4745] leading-relaxed">
              From Seminyak party villas to Ubud jungle estates, we bring the same group dinner standard island-wide — with logistics planned for each area’s access and kitchen realities.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {AREAS.map((area) => (
              <Link
                key={area.name}
                to={area.href}
                className="group overflow-hidden rounded-sm bg-white shadow-[0_1px_0_rgba(26,26,26,0.04)] transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <OptimizedImage
                  src={area.image}
                  alt={`Luxury villa dining setting in ${area.name}, Bali`}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  width={900}
                  height={560}
                />
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2 text-[#C5A028]">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-[0.2em]">{area.name}</span>
                  </div>
                  <h3 className="mb-2 text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {area.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4A4745]">{area.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#4A4745]">
            Also serving Jimbaran, Pererenan and wider Bali. See all areas on our{' '}
            <Link to="/locations" className="font-medium text-[#7E6410] hover:underline">
              locations hub
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialBlock
        testimonials={TESTIMONIALS}
        title="Evenings guests still talk about"
        subtitle="Real hosts. Real villa dinners. The standard we protect every night."
      />

      {/* Gallery */}
      <section className="bg-[#1A1A1A] py-20 text-white md:py-28" id="gallery">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Section 09 · Gallery
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Table styling, chefs, sunsets and guest moments
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {GALLERY.map((image, index) => (
              <div
                key={image.src}
                className={`overflow-hidden rounded-sm ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover ${index === 0 || index === 5 ? 'aspect-square md:h-full' : 'aspect-square'}`}
                  width={800}
                  height={800}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep editorial SEO body */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Planning guide
          </p>
          <h2 className="mb-6 text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            How to plan a luxury group villa dinner in Bali
          </h2>
          <div className="prose-like space-y-5 text-[#4A4745] leading-relaxed">
            <p>
              The best <strong>Bali private dining experience</strong> starts with four decisions: guest count, villa layout, service format and emotional purpose. A 14-person multi-family holiday table wants different pacing from a 45-person wedding welcome dinner. A corporate villa dinner may need a quiet window for speeches. A birthday dinner Bali host may care most about the cake reveal and champagne timing. Share those constraints early and the menu becomes easier, not harder.
            </p>
            <p>
              For <strong>private chef for large groups Bali</strong> bookings, treat the villa as a venue. Confirm power, kitchen access, parking for the team, and whether a function fee applies when non-staying guests arrive. Good operators raise these points before deposit. That is part of professional villa catering Bali service — not an awkward surprise on the day.
            </p>
            <p>
              If you want a more formal <strong>fine dining Bali villa</strong> evening, choose plated or tasting formats and protect setup time. If you want social energy, premium BBQ private chef Bali nights and live stations keep people moving and talking. Family villa dinner Bali hosts often combine both: early kids’ plates, then adult courses or a long shared feast.
            </p>
            <p>
              Internal planning tip: lock the headcount band before micro-editing dishes. Moving from 18 to 40 guests changes staffing and equipment more than swapping one dessert. Once the band is fixed, customise cuisine — Italian, Mediterranean, Balinese feast or fine dining — with confidence.
            </p>
            <p>
              Hosts comparing options can also review our{' '}
              <Link to="/private-chef-bali" className="font-medium text-[#7E6410] hover:underline">
                private chef Bali
              </Link>{' '}
              day service for multi-day stays,{' '}
              <Link to="/complete-villa-experience" className="font-medium text-[#7E6410] hover:underline">
                complete villa experience
              </Link>{' '}
              packages for full-stay hospitality, and{' '}
              <Link to="/villa-event-packages" className="font-medium text-[#7E6410] hover:underline">
                villa event packages
              </Link>{' '}
              when dinner is only one chapter of a larger celebration.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { icon: CalendarDays, title: 'Date & headcount first', desc: 'Availability and brigade size depend on these more than flavour preferences.' },
              { icon: Building2, title: 'Villa details next', desc: 'Area, kitchen photos and guest access determine equipment and setup windows.' },
              { icon: Heart, title: 'Occasion defines pacing', desc: 'Weddings, birthdays and corporate nights need different speech and photo timing.' },
              { icon: PartyPopper, title: 'Then celebrate', desc: 'Once scope is fixed, styling, cake and drinks upgrades become simple choices.' },
            ].map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="rounded-sm border border-[#EDE7DB] bg-[#FAFAF8] p-5">
                  <Icon className="mb-3 h-5 w-5 text-[#C5A028]" aria-hidden="true" />
                  <h3 className="mb-1 font-medium text-[#1A1A1A]">{card.title}</h3>
                  <p className="text-sm text-[#4A4745]">{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAFAF8] py-20 md:py-28" id="faq">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Section 10 · FAQ
            </p>
            <h2 className="mb-4 text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Frequently asked questions
            </h2>
            <p className="text-lg text-[#4A4745]">
              Practical answers for hosts planning group villa dinner packages across Bali.
            </p>
          </div>
          <FAQAccordion items={FAQS} defaultOpenCount={2} />
          <p className="mt-8 text-center text-sm text-[#4A4745]">
            Still deciding? Read guest stories on our{' '}
            <Link to="/reviews" className="font-medium text-[#7E6410] hover:underline">
              reviews page
            </Link>{' '}
            or message the team on WhatsApp.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-plated-4course-table.webp"
            alt="Beautifully finished luxury villa dinner table with happy guests, candles and sunset light in Bali"
            className="h-full w-full object-cover"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Your villa. Our kitchen.
          </p>
          <h2 className="mb-6 text-3xl leading-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            An evening your guests will never forget
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 leading-relaxed">
            Create unforgettable moments with a private chef experience tailored to your group, your villa, and your celebration.
          </p>
          <a
            href={WA_QUOTE}
            target="_blank"
            rel="noopener noreferrer"
            data-source="group-villa-dinner-final-cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-10 py-4 text-sm font-semibold uppercase tracking-widest text-[#1A1A1A] transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Get Your Quote Within 2 Hours
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/55">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" aria-hidden="true" /> Fast WhatsApp response
            </span>
            <span className="inline-flex items-center gap-2">
              <Flower2 className="h-4 w-4" aria-hidden="true" /> Styling on request
            </span>
            <span className="inline-flex items-center gap-2">
              <Cake className="h-4 w-4" aria-hidden="true" /> Celebrations welcome
            </span>
          </div>
        </div>
      </section>

      <StickyMobileCTA
        label="Get a Free Quote"
        serviceName="group villa dinner packages in Bali"
        intent="a free quote within 2 hours"
        pageSource="group-villa-dinner-packages-bali"
        serviceType="group_villa_dinner"
      />
    </div>
  )
}
