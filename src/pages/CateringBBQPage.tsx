import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Phone, Calendar, Users,
  Flame, Wine, Beef, WheatOff, Map, Heart,
  ArrowRight, Droplets, Sun,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  cateringServiceSchema,
  offerSchema,
  faqPageSchema,
  aggregateRatingSchema,
  howToSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator, CateringDiscoverySection } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'BBQ catering in Bali', intent: 'menu options and pricing' })
const SITE = 'https://mychef.id'

/* ── DATA ── */

const BBQ_PACKAGES = [
  {
    title: 'Indonesian BBQ',
    price: 550000,
    description: 'Sate lilit, sate ayam, ikan bakar, jagung bakar, sambal matah, nasi kuning, sayur urap, gado-gado, fresh fruit dessert.',
    includes: ['Chef', '2 service staff', 'All cooking equipment', 'Ingredients', 'Setup', '2-3h service', 'Pack-up & cleanup'],
    minGuests: 'Min. 10 guests',
    image: '/generated/mychef-catering-bali-bbq-grill-satay.webp',
  },
  {
    title: 'International BBQ',
    price: 700000,
    description: 'Australian beef tenderloin, lamb chops, grilled prawns, salmon fillet, chicken thigh, gourmet salads, baked potato, garlic bread, fresh fruit.',
    includes: ['Chef', '2 service staff', 'All cooking equipment', 'Ingredients', 'Setup', '2-3h service', 'Pack-up & cleanup'],
    minGuests: 'Min. 10 guests',
    image: '/generated/mychef-finedining-bali-sol-bbq.webp',
  },
  {
    title: 'Premium Surf & Turf BBQ',
    price: 850000,
    description: 'Wagyu steak, whole lobster tail, king prawns, salmon, Mahi-mahi, premium sides, signature sauces, chocolate dessert station.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Ingredients', 'Setup', '2-3h service', 'Plated service', 'Pack-up & cleanup'],
    minGuests: 'Min. 10 guests',
    image: '/generated/mychef-catering-bali-bbq-grill-surfturf.webp',
  },
]

const BEST_EVENTS = [
  { icon: Heart, title: 'Villa Birthday BBQ', desc: 'Milestone celebrations with live grilling, cake, and custom menus by the pool.' },
  { icon: Users, title: 'Family Reunions', desc: 'Multi-generational groups who want relaxed, delicious meals without restaurant logistics.' },
  { icon: Flame, title: 'Poolside Parties', desc: 'Social grilling by the water. Casual energy, great food, zero stress.' },
  { icon: Wine, title: 'Bachelor & Bachelorette', desc: 'Pre-wedding group dinners. Fun, loud, memorable — with full service.' },
  { icon: Map, title: 'Corporate Team Events', desc: 'Team building over fire. Casual but professional. From 15 to 80 guests.' },
  { icon: Sun, title: 'Sunset BBQ Dinners', desc: 'Clifftop and beach-villa grilling as the sun goes down. Uluwatu, Canggu, Seminyak.' },
  { icon: Beef, title: 'Wedding Recovery Lunch', desc: 'Casual post-wedding meal for villa-staying guests. The morning after, sorted.' },
  { icon: Droplets, title: 'Beach-Style BBQ', desc: 'Sand-friendly setup, seafood focus, tropical cocktails. Bali beach vibes.' },
]

const BBQ_MENU = [
  { category: 'Grilled Seafood', items: 'Whole fish, prawns, squid, lobster tail, Mahi-mahi, salmon fillet' },
  { category: 'Meats & Poultry', items: 'Wagyu steak, beef tenderloin, lamb chops, chicken thigh, pork ribs, sausages' },
  { category: 'Indonesian Specialties', items: 'Sate lilit, sate ayam, ikan bakar, ayam bakar, bebek bakar' },
  { category: 'Vegetables & Sides', items: 'Grilled corn, asparagus, capsicum, zucchini, eggplant, portobello mushrooms' },
  { category: 'Salads & Cold Dishes', items: 'Gado-gado, sayur urap, tropical fruit salad, coleslaw, potato salad' },
  { category: 'Sauces & Sambals', items: 'Sambal matah, sambal terasi, chimichurri, garlic butter, teriyaki, BBQ glaze' },
  { category: 'Starches', items: 'Nasi kuning, garlic bread, baked potato, coconut rice, flatbread' },
  { category: 'Desserts', items: 'Grilled pineapple, fresh fruit platter, chocolate fondue, coconut pudding' },
]

const SETUP_EQUIPMENT = [
  { title: 'Portable Grills', desc: 'Charcoal and gas grills brought to your villa. Suitable for garden, poolside, or terrace.' },
  { title: 'Cooking Tools', desc: 'Chef knives, tongs, brushes, thermometers, and all grilling equipment.' },
  { title: 'Chafing Dishes', desc: 'Hot-holding equipment for buffet-style service. Food stays warm throughout.' },
  { title: 'Serving Platters', desc: 'Stylish serving ware for table presentation. Rustic wood and ceramic options.' },
  { title: 'Prep Stations', desc: 'Portable prep tables, cutting boards, and mise en place setup.' },
  { title: 'Cleanup Supplies', desc: 'Bins, bags, cleaning products, and surface protectors. We leave nothing behind.' },
]

const ADDONS = [
  { title: 'Bartender + 3h open bar', price: 'IDR 4,000,000 flat', desc: 'Professional mixologist with cocktail setup and signature drinks.' },
  { title: 'Wagyu upgrade', price: '+ IDR 250,000/person', desc: 'Premium Wagyu beef replaces standard beef in any package.' },
  { title: 'Gluten-free upgrade', price: '+ IDR 50,000/adult', desc: 'Full gluten-free menu adaptation. IDR 25,000/child.' },
  { title: 'Plated service', price: '+ IDR 50,000/person', desc: 'Upgrade from self-serve buffet to full table service.' },
  { title: 'Out-of-area travel', price: 'IDR 250K – 700K', desc: 'Travel fee for areas outside Seminyak/Canggu. Depends on distance.' },
]

const AREA_MINIMUMS = [
  { area: 'Seminyak / Canggu', min: '10 guests', fee: 'No travel fee' },
  { area: 'Berawa / Pererenan', min: '10 guests', fee: 'No travel fee' },
  { area: 'Ubud', min: '10 guests', fee: 'IDR 350,000' },
  { area: 'Uluwatu', min: '20 guests', fee: 'IDR 500,000' },
  { area: 'Nusa Dua', min: 'Quote required', fee: 'Quote required' },
  { area: 'Sanur', min: 'Quote required', fee: 'Quote required' },
  { area: 'Jimbaran', min: 'Quote required', fee: 'Quote required' },
  { area: 'Tanah Lot', min: 'Quote required', fee: 'Travel fee applies' },
]

const GROUP_SIZE_GUIDE = [
  { guests: 10, indonesian: 'IDR 6.66M', international: 'IDR 8.47M', premium: 'IDR 10.29M' },
  { guests: 20, indonesian: 'IDR 13.31M', international: 'IDR 16.94M', premium: 'IDR 20.57M' },
  { guests: 30, indonesian: 'IDR 19.97M', international: 'IDR 25.41M', premium: 'IDR 30.86M' },
  { guests: 40, indonesian: 'IDR 26.62M', international: 'IDR 33.88M', premium: 'IDR 41.14M' },
]

const BBQ_VS_OTHERS = [
  { aspect: 'Energy', bbq: 'Relaxed, social, live-fire atmosphere', buffet: 'Self-serve, efficient for large groups', plated: 'Formal, precise, restaurant-style' },
  { aspect: 'Best for', bbq: 'Villa parties, birthdays, poolside, casual events', buffet: 'Weddings, large groups, mixed dietary needs', plated: 'Anniversaries, corporate dinners, fine dining' },
  { aspect: 'Group size', bbq: '10–40 guests ideal', buffet: '30–200 guests', plated: '10–60 guests' },
  { aspect: 'Service style', bbq: 'Chef grills live, staff serves', buffet: 'Guests self-serve from stations', plated: 'Individual courses to each guest' },
  { aspect: 'Setup', bbq: 'Grill, prep station, serving table', buffet: 'Chafing dishes, multiple stations', plated: 'Full table setting, course pacing' },
  { aspect: 'Price range', bbq: 'IDR 550K–850K/pp', buffet: 'IDR 450K–950K/pp', plated: 'IDR 800K–1.3M/pp' },
]

const FAQS = [
  { q: 'Do you bring the BBQ grill and equipment?', a: 'Yes. We bring portable grills (charcoal and gas), all cooking tools, chafing dishes for hot holding, serving platters, prep stations, and cleanup supplies. You do not need to provide anything.' },
  { q: 'Can you cook seafood at the BBQ?', a: 'Absolutely. Our International and Premium packages include prawns, lobster tail, salmon, Mahi-mahi, and whole fish. We can also customize any package to be seafood-focused.' },
  { q: 'Can we choose the meat quality?', a: 'Yes. Our standard packages use high-quality local and imported meats. The Wagyu upgrade (+IDR 250K/pp) replaces standard beef with premium Wagyu. We also offer halal and pork-free options.' },
  { q: 'Do you serve drinks and cocktails?', a: 'Drinks are not included in the base package, but you can add a bartender with 3-hour open bar for IDR 4,000,000 flat. We also offer wine pairing and soft drink packages.' },
  { q: 'What happens if it rains?', a: 'We monitor weather and can set up under covered terraces, verandas, or indoor kitchens. For uncovered outdoor setups, we bring pop-up tents. We always have a backup plan.' },
  { q: 'How many guests do I need?', a: 'Minimum 10 guests in Seminyak/Canggu and Ubud, and 20 in Uluwatu. For other areas, contact us for a custom quote.' },
  { q: 'Do you clean up after the BBQ?', a: 'Full cleanup is included. We pack up all equipment, dispose of waste, clean the grill area, and leave your villa as we found it.' },
  { q: 'Can you do vegetarian or vegan BBQ?', a: 'Yes. We offer full vegetarian and vegan BBQ menus with grilled vegetables, plant-based proteins, salads, and sides. No compromise on flavor.' },
  { q: 'How far in advance should I book?', a: 'For Seminyak/Canggu, 3–7 days is ideal. For other areas, 1–2 weeks. Last-minute bookings possible depending on chef availability.' },
  { q: 'Can I customize the menu?', a: 'Every menu is customized for your group. Choose your protein focus, spice level, dietary needs, and add-ons. Nothing is off-the-shelf.' },
]

export default function CateringBBQPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bbq-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.bbq-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="BBQ Catering Bali | Live-Fire Villa BBQ for Groups — myCHEF"
        description="BBQ catering in Bali: chef grills live at your villa. Seafood, Wagyu & Indonesian menus for birthdays, parties & groups. WhatsApp for instant quote."
        canonical={`${SITE}/catering/bbq-catering`}
        ogImage={`${SITE}/bbq-poolside.webp`}
        jsonLd={[
          cateringServiceSchema('BBQ Catering Bali', 'Live-fire BBQ catering for Bali villas, birthdays, weddings, and relaxed private events with chefs grilling on site. myCHEF.id handles ingredients, setup, service, and cleanup across Bali.', `${SITE}/catering/bbq-catering`),
          offerSchema('Indonesian BBQ', 550000, 'IDR', `${SITE}/catering/bbq-catering`),
          offerSchema('International BBQ', 700000, 'IDR', `${SITE}/catering/bbq-catering`),
          offerSchema('Premium Surf & Turf BBQ', 850000, 'IDR', `${SITE}/catering/bbq-catering`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          howToSchema({
            name: 'How to Book BBQ Catering in Bali',
            description: 'Book live-fire BBQ catering for your Bali villa in 4 easy steps.',
            totalTime: 'PT15M',
            steps: [
              { name: 'Choose your BBQ package', text: 'Pick Indonesian BBQ, International BBQ, or Premium Surf & Turf based on your group size and preferences.' },
              { name: 'Send event details', text: 'Share your date, villa area, guest count, and any dietary needs via WhatsApp.' },
              { name: 'Confirm your quote', text: 'We send a final all-in quote including travel fees and any add-ons within 1 hour.' },
              { name: 'Pay deposit and relax', text: '50% deposit locks your date. The chef arrives with all equipment, grills live, and cleans up.' },
            ],
          }),
          cateringBreadcrumbSchema('BBQ Catering Bali', `${SITE}/catering/bbq-catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'BBQ Catering Bali' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-hero-buffet-catering.webp"
            alt="Chef grilling seafood and meat at a Bali villa BBQ by the pool"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — BBQ Catering Bali
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            BBQ Catering Bali<br />
            <span className="italic">for Villas, Parties, and Events</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto">
            Fresh grills, chef-led cooking, villa-ready setup, and relaxed poolside service for groups who want a proper BBQ without managing anything.
          </p>
          <p className="text-white/[60%] text-sm mb-10">
            From IDR 550,000/person · Chef + staff + equipment included · Bali-wide
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-bbq-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <MessageCircle className="w-4 h-4" /> Build My BBQ Menu
            </a>
            <a href="#packages" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              View BBQ Packages
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Same-day WhatsApp reply</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Grill + equipment included</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Full cleanup after</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ═══════ SECTION 2: BBQ CATERING IN BALI ═══════ */}
      <section className="bbq-content py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 2 — The Experience"
            title="BBQ Catering in Bali"
            subtitle="BBQ is the most relaxed catering format — and the most memorable. The smell of the grill, the sound of sizzling seafood, the chef working live while guests mingle by the pool. We bring the entire setup to your villa: grills, tools, ingredients, staff, and cleanup. You just bring the appetite."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-4">
              <p className="text-[#4A4745]">
                Our BBQ catering works across all villa types — from Canggu pool villas to Uluwatu clifftop estates. We set up in gardens, terraces, pool decks, and covered patios. The grill becomes the centerpiece of the evening.
              </p>
              <p className="text-[#4A4745]">
                Every package includes a private chef who grills live, two service staff who manage plating and drinks, and full cleanup afterward. We handle propane, charcoal, equipment transport, and waste disposal.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Villa gardens', 'Poolside decks', 'Terraces', 'Beach setups', 'Rooftops', 'Covered patios'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white rounded-full text-xs text-[#4A4745] border border-[#E8E6E3]">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E6E3]">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>What Makes Our BBQ Different</h3>
              <div className="space-y-3">
                {[
                  'Chef grills live — not pre-cooked and reheated',
                  'Fresh ingredients sourced morning of',
                  'Full service staff — not just a cook',
                  'Equipment transport included — grills, tools, chafing dishes',
                  'Cleanup included — we leave your villa spotless',
                  'Customizable menus — every group is different',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: BEST EVENTS FOR BBQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 3 — Occasions"
            title="Best Events for BBQ Catering"
            subtitle="BBQ works for almost any villa gathering. The live-fire energy creates atmosphere that other formats cannot match."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {BEST_EVENTS.map((event) => (
              <div key={event.title} className="bbq-reveal bg-[#FAFAF8] rounded-xl p-5">
                <event.icon className="w-5 h-5 text-[#C5A028] mb-2" />
                <h3 className="font-semibold text-sm mb-1">{event.title}</h3>
                <p className="text-sm text-[#4A4745]">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: BBQ MENU OPTIONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 4 — The Menu"
            title="BBQ Menu Options"
            subtitle="Three packages, endless combinations. Indonesian classics, international favorites, or premium surf and turf. Every menu is customized for your group."
          />
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {BBQ_MENU.map((cat) => (
              <div key={cat.category} className="bbq-reveal bg-white rounded-xl border border-[#E8E6E3] p-5">
                <h3 className="font-semibold text-sm mb-2 text-[#C5A028]">{cat.category}</h3>
                <p className="text-sm text-[#4A4745]">{cat.items}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/catering/villa-catering" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Explore Villa Catering <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: LIVE GRILL EXPERIENCE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Chapter 5 — The Grill"
                title="The Live Grill Experience"
                subtitle="A chef at the grill is theater. Guests gather around, smell the smoke, watch the flames, and know their food is being cooked fresh. This is why BBQ catering creates the best memories."
              />
              <div className="space-y-4 mt-6">
                <p className="text-[#4A4745]">
                  Our chefs do not pre-cook and reheat. They arrive with raw ingredients, prep on-site, and grill everything live. The sizzle, the smoke, the chef's interaction with guests — it turns dinner into an event.
                </p>
                <p className="text-[#4A4745]">
                  For villa parties, the grill station becomes a natural gathering point. Guests mingle, take photos, and chat with the chef while food is prepared. It breaks the ice and creates energy that a plated dinner cannot replicate.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Live-fire cooking', 'Chef-guest interaction', 'Fresh aroma', 'Photo moments', 'Natural icebreaker'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-[#FAFAF8] rounded-full text-xs text-[#4A4745] border border-[#E8E6E3]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/mychef-finedining-bali-sol-bbq.webp"
                alt="Chef grilling at live BBQ station by Bali villa pool with guests watching"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6: VILLA SETUP & EQUIPMENT ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 6 — Setup"
            title="Villa Setup and Equipment"
            subtitle="We bring everything. You do not need to own a grill, find propane, or buy serving platters. Our team arrives fully equipped."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {SETUP_EQUIPMENT.map((item) => (
              <div key={item.title} className="bbq-reveal bg-white rounded-xl border border-[#E8E6E3] p-5">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E6E3]">
            <h3 className="font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What You Need to Provide</h3>
            <p className="text-sm text-[#4A4745]">
              Just a flat outdoor area (garden, terrace, pool deck) and access to water. We handle grills, fuel, tools, serving ware, and cleanup. If your villa has restrictions on open flames, we use gas grills or covered electric setups.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: PACKAGES + PRICING ═══════ */}
      <section id="packages" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 7 — Packages"
            title="BBQ Catering Packages"
            subtitle="Clear pricing per person. Chef, staff, equipment, setup, and cleanup included. Groceries billed at cost."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {BBQ_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bbq-reveal bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <OptimizedImage src={pkg.image} alt={`${pkg.title} setup at Bali villa`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                  <div className="mb-1">
                    <AllInPrice price={pkg.price} />
                  </div>
                  <p className="text-xs text-[#4A4745]/70 mb-4">{pkg.minGuests}</p>
                  <p className="text-sm text-[#4A4745] mb-4">{pkg.description}</p>
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                        <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-bbq-cta" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#C5A028] text-black text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                    <Calendar className="w-4 h-4" /> Book This BBQ
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={550000} minGuests={10} maxGuests={40} defaultGuests={10} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={700000} minGuests={10} maxGuests={40} defaultGuests={10} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={850000} minGuests={10} maxGuests={40} defaultGuests={10} accent="#C5A028" />
          </div>
          <TaxFooter className="mt-6" />
        </div>
      </section>

      {/* ═══════ SECTION 8: GROUP SIZE GUIDE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 8 — Investment"
            title="Group Size Guide"
            subtitle="All-in totals include 21% service charge and tax. Final quote confirmed before deposit."
          />
          <div className="hidden md:block overflow-x-auto mt-10 bg-white rounded-2xl border border-[#E8E6E3] p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">Guests</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">Indonesian <span className="text-xs font-normal opacity-70">(550K)</span></th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">International <span className="text-xs font-normal opacity-70">(700K)</span></th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">Surf & Turf <span className="text-xs font-normal opacity-70">(850K)</span></th>
                </tr>
              </thead>
              <tbody>
                {GROUP_SIZE_GUIDE.map((row) => (
                  <tr key={row.guests} className="border-b border-[#E8E6E3] even:bg-[#FAFAF8] last:border-b-0">
                    <td className="py-5 font-semibold tabular-nums">{row.guests}</td>
                    <td className="py-5 text-[#C5A028] font-medium tabular-nums">{row.indonesian}</td>
                    <td className="py-5 text-[#C5A028] font-medium tabular-nums">{row.international}</td>
                    <td className="py-5 text-[#C5A028] font-medium tabular-nums">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4 mt-10">
            {GROUP_SIZE_GUIDE.map((row) => (
              <div key={row.guests} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <p className="font-semibold text-base mb-3 tabular-nums">{row.guests} guests</p>
                <div className="divide-y divide-[#E8E6E3]">
                  <div className="flex justify-between py-2 text-sm"><span className="text-[#4A4745] text-xs uppercase tracking-wide">Indonesian</span><span className="text-[#C5A028] font-semibold tabular-nums">{row.indonesian}</span></div>
                  <div className="flex justify-between py-2 text-sm"><span className="text-[#4A4745] text-xs uppercase tracking-wide">International</span><span className="text-[#C5A028] font-semibold tabular-nums">{row.international}</span></div>
                  <div className="flex justify-between py-2 text-sm"><span className="text-[#4A4745] text-xs uppercase tracking-wide">Premium</span><span className="text-[#C5A028] font-semibold tabular-nums">{row.premium}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 9: ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 9 — Add-Ons"
            title="BBQ Add-Ons"
            subtitle="Elevate your villa BBQ with bartenders, premium meats, plated service, and more."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {ADDONS.map((addon) => (
              <div key={addon.title} className="bbq-reveal bg-[#FAFAF8] rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-1">{addon.title}</h3>
                <p className="text-sm text-[#C5A028] font-semibold mb-1">{addon.price}</p>
                <p className="text-sm text-[#4A4745]">{addon.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/in-villa-service/bartenders" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Hire Bartenders <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-4 text-[#E8E6E3]">|</span>
            <Link to="/in-villa-service/waiters" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Hire Waiters <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 10: BBQ VS BUFFET VS PLATED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 10 — Compare"
            title="BBQ vs Buffet vs Plated"
            subtitle="Not sure which format is right for your event? Here is how they compare."
          />
          <div className="hidden md:block overflow-x-auto mt-10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Aspect</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider text-[#C5A028]">BBQ</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Buffet</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Plated</th>
                </tr>
              </thead>
              <tbody>
                {BBQ_VS_OTHERS.map((row) => (
                  <tr key={row.aspect} className="border-b border-[#E8E6E3]">
                    <td className="py-4 font-medium">{row.aspect}</td>
                    <td className="py-4 text-[#C5A028] font-semibold">{row.bbq}</td>
                    <td className="py-4 text-[#4A4745]">{row.buffet}</td>
                    <td className="py-4 text-[#4A4745]">{row.plated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4 mt-10">
            {BBQ_VS_OTHERS.map((row) => (
              <div key={row.aspect} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <p className="font-medium mb-3">{row.aspect}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-[#C5A028] font-semibold">BBQ</span><span className="text-[#4A4745]">{row.bbq}</span></div>
                  <div className="flex justify-between"><span className="text-[#4A4745] font-semibold">Buffet</span><span className="text-[#4A4745]">{row.buffet}</span></div>
                  <div className="flex justify-between"><span className="text-[#4A4745] font-semibold">Plated</span><span className="text-[#4A4745]">{row.plated}</span></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/catering/buffet" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Explore Buffet Catering <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-4 text-[#E8E6E3]">|</span>
            <Link to="/catering/plated-catering" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Explore Plated Dinners <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 11: AREA MINIMUMS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 11 — Coverage"
            title="Minimum Guests and Bali Travel Fees"
            subtitle="BBQ catering across all major Bali villa areas. Minimums depend on travel time and staffing logistics."
          />
          <div className="hidden md:block overflow-x-auto mt-10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Area</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Minimum Guests</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Travel Fee</th>
                </tr>
              </thead>
              <tbody>
                {AREA_MINIMUMS.map((row) => (
                  <tr key={row.area} className="border-b border-[#E8E6E3]">
                    <td className="py-4 font-medium">{row.area}</td>
                    <td className="py-4">{row.min}</td>
                    <td className="py-4 text-[#4A4745]">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-3 mt-10">
            {AREA_MINIMUMS.map((row) => (
              <div key={row.area} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{row.area}</span>
                  <span className="text-sm text-[#C5A028] font-semibold">{row.min}</span>
                </div>
                <p className="text-xs text-[#4A4745]">{row.fee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 12: DIETARY ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <WheatOff className="w-10 h-10 text-[#6B8E5A] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Dietary Options</h2>
          <p className="text-[#4A4745] mb-6">
            Mixed international groups are the norm in Bali villas. We handle every dietary need without fuss — just tell us when you book.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Seafood-free', 'Pork-free', 'Vegetarian grill', 'Vegan sides', 'Gluten-free sauces', 'Halal-sensitive', 'Nut-free', 'Child-friendly'].map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 13: TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Mark & Lisa', location: 'Canggu Villa', quote: 'The Indonesian BBQ was incredible. The sate lilit was the best we have had in Bali. Chef and team were professional and cleaned everything.', rating: 5 },
          { name: 'The Johnson Family', location: 'Seminyak Villa', quote: 'We booked the International BBQ for 14 guests. The Wagyu upgrade was worth every penny. Kids loved the grilled corn.', rating: 5 },
          { name: 'David K.', location: 'Uluwatu Villa', quote: 'Premium Surf & Turf for my birthday. The lobster and Wagyu combo was outstanding. Felt like a private restaurant in our villa.', rating: 5 },
        ]}
        title="What BBQ Guests Say"
        subtitle="Real reviews from villa BBQ events across Bali."
      />

      {/* ═══════ SECTION 14: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Chapter 12 — FAQ" title="BBQ Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 15: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-finedining-bali-sol-bbq.webp" alt="Finished BBQ table with grilled food at Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Book BBQ Catering Bali
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Grill at Your Villa?
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Send your date, area, guest count, and preferred BBQ package. We will confirm availability and final price by WhatsApp within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-bbq-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <MessageCircle className="w-4 h-4" /> Build My BBQ Menu
            </a>
            <a href="tel:+628113803488" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Phone className="w-4 h-4" /> Call +62 811-3803-488
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Same-day reply</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 50% deposit only</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> No hidden fees</span>
          </div>
        </div>
      </section>

      <CateringDiscoverySection page="bbq" />

      <TaxFooter className="py-6" />

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Buffet Catering', href: '/catering/buffet', desc: 'Large-group buffet service.' },
              { label: 'Plated Dinners', href: '/catering/plated-catering', desc: 'Formal course service.' },
              { label: 'Grazing Tables', href: '/catering/grazing-tables', desc: 'Styled spreads for events.' },
              { label: 'Drop-Off Catering', href: '/catering/drop-off-catering', desc: 'Fresh food delivered to your villa.' },
              { label: 'Villa Chef', href: '/villa-chef', desc: 'Daily chef for your villa stay.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
