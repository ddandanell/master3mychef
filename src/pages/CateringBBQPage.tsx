import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Calendar, Users, Flame, Wine, Beef, WheatOff, Map, Heart, ArrowRight, Droplets, Sun, ChefHat, UserPlus } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  serviceWithAggregateOfferSchema,
  faqPageSchema,
  howToSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingProcess from '@/components/catering/BookingProcess'
import { ArticleContentSection, Breadcrumb, PressStrip, CateringDiscoverySection } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'BBQ catering in Bali', intent: 'menu options and a quote' })
const SITE = 'https://mychef.id'

/* ── DATA ── */

const BBQ_PACKAGES = [
  {
    title: 'Indonesian BBQ',
    price: 'IDR 700,000/person',
    description: 'Sate lilit, sate ayam, ikan bakar, jagung bakar, sambal matah, nasi kuning, sayur urap, gado-gado, fresh fruit dessert. The authentic Balinese grill — our most requested menu.',
    includes: ['Chef', '1 service assistant', 'All cooking equipment', 'Ingredients', 'Setup', '2-3h service', 'Pack-up & cleanup'],
    minGuests: 'Min. 10 guests',
    image: '/generated/mychef-catering-bali-bbq-package-indonesian.webp',
  },
  {
    title: 'International BBQ',
    price: 'IDR 850,000/person',
    description: 'Australian beef tenderloin, lamb chops, grilled prawns, salmon fillet, chicken thigh, gourmet salads, baked potato, garlic bread, fresh fruit. Familiar crowd-pleasers for mixed international groups.',
    includes: ['Chef', '1 service assistant', 'All cooking equipment', 'Ingredients', 'Setup', '2-3h service', 'Pack-up & cleanup'],
    minGuests: 'Min. 10 guests',
    image: '/generated/mychef-catering-bali-bbq-package-international.webp',
  },
  {
    title: 'Premium Surf & Turf',
    price: 'IDR 950,000/person',
    description: 'Wagyu steak, whole lobster tail, king prawns, salmon, Mahi-mahi, premium sides, signature sauces, chocolate dessert station, plated service. The celebration-tier grill.',
    includes: ['Chef', '1 service assistant', 'All equipment', 'Ingredients', 'Setup', '2-3h service', 'Plated service', 'Pack-up & cleanup'],
    minGuests: 'Min. 10 guests',
    image: '/generated/mychef-catering-bali-bbq-package-surfturf.webp',
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
  { title: 'Live grill + service team', desc: 'Private chef grilling live with 1 service assistant managing plating and drinks — 2 assistants for groups over 11 guests.' },
  { title: 'Portable grills & tools', desc: 'Charcoal and gas grills, cooking tools, chafing dishes, serving platters, and prep stations.' },
  { title: 'Fuel, transport & waste', desc: 'Propane, charcoal, equipment transport, and waste disposal — all handled by us.' },
  { title: 'Setup, service & cleanup', desc: 'Setup, 2–3 hours of service, and complete cleanup — we leave the villa spotless.' },
  { title: 'Dietary coverage', desc: 'Seafood-free, pork-free, vegetarian grill, vegan sides, gluten-free sauces, halal-sensitive prep, nut-free, child-friendly.' },
]

const ADDONS = [
  { title: 'Cocktail packages', desc: 'Complete cocktail service from IDR 500,000++ per guest (min 10) — not hourly hire.' },
  { title: 'Wagyu upgrade', desc: 'Premium Wagyu beef replaces standard beef in any package.' },
  { title: 'Gluten-free upgrade', desc: 'Full gluten-free menu adaptation for adults and children.' },
  { title: 'Plated service', desc: 'Upgrade from self-serve buffet to full table service.' },
  { title: 'Out-of-area travel', desc: 'Available for areas outside Seminyak/Canggu. Scoped in your quote.' },
]

const AREA_COVERAGE = [
  { area: 'Seminyak / Canggu', fee: 'No travel fee' },
  { area: 'Berawa / Pererenan', fee: 'No travel fee' },
  { area: 'Ubud', fee: 'Travel fee applies' },
  { area: 'Uluwatu / Bukit', fee: 'Travel fee applies' },
  { area: 'Nusa Dua / Sanur / Jimbaran / Tanah Lot', fee: 'Travel fee quoted per booking' },
]

const BBQ_VS_OTHERS = [
  { aspect: 'Energy', bbq: 'Relaxed, social, live-fire atmosphere', buffet: 'Self-serve, efficient for large groups', plated: 'Formal, precise, restaurant-style' },
  { aspect: 'Best for', bbq: 'Villa parties, birthdays, poolside, casual events', buffet: 'Weddings, large groups, mixed dietary needs', plated: 'Anniversaries, corporate dinners, fine dining' },
  { aspect: 'Group size', bbq: '6–40 guests ideal', buffet: '30–200 guests', plated: '10–60 guests' },
  { aspect: 'Service style', bbq: 'Chef grills live, staff serves', buffet: 'Guests self-serve from stations', plated: 'Individual courses to each guest' },
  { aspect: 'Setup', bbq: 'Grill, prep station, serving table', buffet: 'Chafing dishes, multiple stations', plated: 'Full table setting, course pacing' },
]

const FAQS = [
  { q: 'How much does BBQ catering in Bali cost?', a: 'From <strong>IDR 700,000++ per person</strong> for Indonesian BBQ, IDR 850,000 for International BBQ, and IDR 950,000 for Premium Surf &amp; Turf — chef, service assistant, equipment, ingredients and cleanup included. ++ is 11% tax + 10% service. Menu collection also on <a href="/bbq-grill">BBQ grill</a>.' },
  { q: "What's the minimum number of guests for BBQ catering?", a: 'Typically ten guests island-wide. Farther areas may add a travel fee — always itemised upfront. Smaller intimate grills can use <a href="/bbq-grill">BBQ grill menus</a> or <a href="/private-chef-bali">private chef</a>.' },
  { q: 'Do you bring the grill and equipment?', a: 'Yes — grills, fuel, tools, chafing dishes, platters, prep stations and cleanup supplies. You do not need to own a grill.' },
  { q: 'Can you do a seafood-focused or vegetarian BBQ?', a: 'Yes — seafood-heavy packages and full vegetarian/vegan grills. Dedicated product: <a href="/seafood-bbq-catering-bali">seafood BBQ catering</a> and <a href="/villa-bbq-catering-bali">villa BBQ packages</a>.' },
  { q: 'Are drinks included in BBQ catering?', a: 'Not in the base package. Add a <a href="/in-villa-service/bartenders">bartender</a> or open-bar options as line items on the quote.' },
  { q: 'What if it rains on BBQ day?', a: 'Covered terraces, verandas or tents — plan B is free of charge and confirmed before the day.' },
  { q: 'How far ahead should I book BBQ catering in Bali?', a: '3–7 days for Seminyak/Canggu; 1–2 weeks farther out. Last-minute is often possible. 50% deposit locks the date. <a href="/cancellation">Cancellation policy →</a>' },
  { q: 'Can I customise the BBQ menu?', a: 'Yes — protein mix, spice, diets and kids portions are designed for your group, not off-the-shelf only.' },
  { q: 'Is BBQ catering different from the BBQ grill dining style?', a: 'This page is full-service party BBQ with staff. <a href="/bbq-grill">BBQ grill</a> is the menu collection format; both use live fire at the villa.' },
  { q: 'Do you clean up after the BBQ?', a: 'Yes — grill station, service areas and kitchen restored on serviced packages.' },
  { q: 'Can kids eat at a BBQ catering event?', a: 'Yes — milder items or parallel <a href="/kids-menus">kids menus</a>.' },
  { q: 'Which areas of Bali do you cover?', a: 'Island-wide villa BBQ. <a href="/locations">Locations →</a>' },
  { q: 'Can we combine BBQ with a wedding or birthday?', a: 'Yes — welcome BBQs and casual receptions are common. <a href="/events/weddings">Weddings</a> · <a href="/events/birthdays">Birthdays</a> · <a href="/events/villa-parties">Villa parties</a>. See also <a href="/blog/bachelor-party-bali-private-chef">BBQ and chef packages for a Bali bachelor party</a>.' },
  { q: 'Is pork available / can you run pork-free BBQ?', a: 'Both. Pork-free and halal-friendly grills are available. Traditional <a href="/catering/babi-guling">babi guling</a> is a separate pork feast.' },
  { q: 'What does "++" mean?', a: '11% government tax + 10% service charge. Quotes show all-in totals before deposit.' },
  { q: 'How many staff come with BBQ catering?', a: 'Chef plus service support scaled to headcount. Extra waiters/bartenders available via <a href="/in-villa-service">in-villa service</a>.' },
  { q: 'Can the BBQ run poolside?', a: 'Yes — pool decks and gardens are standard, with heat and smoke placement planned for guest comfort.' },
  { q: 'What if guest count changes?', a: 'Final numbers usually due ~48 hours before. We adjust food and staff; large jumps may affect minimums.' },
  { q: 'How do I book BBQ catering with myCHEF?', a: 'WhatsApp date, guests, villa area and package preference. <a href="/quote">Quote →</a> · <a href="/catering">all catering →</a>' },
  { q: 'What if the team cannot make it?', a: 'Verified replacement or refund — supervised teams. <a href="/why-mychef">Why myCHEF →</a>' },
  // Long-tail: BBQ catering / food catering / party catering
  { q: 'Is BBQ catering the same as food catering or party catering?', a: 'BBQ is one food-catering format — live grill for villa parties, birthdays and casual wedding welcome nights. Other formats (buffet, plated, drop-off) live on <a href="/catering">catering Bali</a>. For full party production see <a href="/events/villa-parties">villa parties</a>.' },
  { q: 'Can we order BBQ catering online for a Bali villa?', a: 'Yes via WhatsApp or <a href="/quote">quote</a> — share date, guest count and area. We send a fixed package proposal (no supermarket tray cart). Stack a <a href="/in-villa-service/bartenders">mobile cocktail bar</a> when drinks matter.' },
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
        title="BBQ Catering Bali | Villa BBQ & Live Chef Grill | myCHEF"
        description="Bali BBQ catering for villas, parties & events: fresh seafood, Wagyu, satay and sides grilled live at your villa. From IDR 700K/person. WhatsApp myCHEF."
        canonical={`${SITE}/catering/bbq-catering`}
        ogImage={`${SITE}/generated/mychef-catering-bali-hero-bbq.webp`}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'BBQ Catering Bali',
            description: 'Chef-led BBQ catering for Bali villas, parties and events. Live grilling, service staff, equipment and cleanup included. Indonesian, International and Premium Surf & Turf packages.',
            url: `${SITE}/catering/bbq-catering`,
            lowPrice: '700000',
            highPrice: '950000',
          }),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Book BBQ Catering in Bali',
            description: 'Book live-fire BBQ catering for your Bali villa in 4 easy steps.',
            totalTime: 'PT15M',
            steps: [
              { name: 'Choose your BBQ package', text: 'Pick Indonesian BBQ, International BBQ, or Premium Surf & Turf based on your group size and preferences.' },
              { name: 'Send event details', text: 'Share your date, villa area, guest count, and any dietary needs via WhatsApp.' },
              { name: 'Confirm your quote', text: 'We send a final itemised quote including any add-ons within 1 hour.' },
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
            src="/generated/mychef-catering-bali-hero-bbq.webp"
            alt="Private chef grilling seafood and meat at a Bali villa BBQ by the pool"
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
        <div className="relative z-10 px-6 max-w-3xl w-full mx-auto pt-20">
          <div className="text-center rounded-3xl border border-white/10 bg-black/35 backdrop-blur-md px-6 py-10 md:px-12 md:py-12 shadow-2xl">
            <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              BBQ Catering Bali
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              BBQ Catering Bali for Villas, Parties & Events
            </h1>
            <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-2xl mx-auto">
              A private chef grilling live at your villa — satay, seafood, Wagyu, and Balinese sides cooked over real fire while your guests relax. We bring the grills, the team, and the cleanup. You bring the appetite.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C5A028]/15 border border-[#C5A028]/40 text-[#E8C95A] text-xs sm:text-sm font-semibold tracking-wide">
                <Flame className="w-3.5 h-3.5" /> From IDR 700,000/person
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs sm:text-sm tracking-wide">
                <Users className="w-3.5 h-3.5 text-[#C5A028]" /> Min. 10 guests
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs sm:text-sm tracking-wide">
                <ChefHat className="w-3.5 h-3.5 text-[#C5A028]" /> Chef + 1 assistant
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs sm:text-sm tracking-wide">
                <UserPlus className="w-3.5 h-3.5 text-[#C5A028]" /> 2 assistants over 11 guests
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-bbq-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <MessageCircle className="w-4 h-4" /> Build My BBQ Menu
              </a>
              <a href="#packages" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
                See Package Prices
              </a>
            </div>
            <p className="text-white/[55%] text-xs mb-6">
              Itemised quote on WhatsApp within the hour. 50% deposit confirms your date.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-5 border-t border-white/10 text-white/[50%] text-xs">
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Same-day WhatsApp reply</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Grill + equipment included</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Full cleanup after</span>
            </div>
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
                Every package includes a private chef who grills live, one service assistant who manages plating and drinks — two assistants for groups over 11 guests — and full cleanup afterward. We handle propane, charcoal, equipment transport, and waste disposal.
              </p>
              <p className="text-[#4A4745]">
                See <Link to="/catering" className="text-[#C5A028] hover:underline">all catering options</Link> to compare BBQ with buffet, plated, and grazing formats.
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
          <p className="text-center text-sm text-[#4A4745] mt-8">
            Planning a dedicated party night at your villa? Our <Link to="/villa-bbq-catering-bali" className="text-[#C5A028] hover:underline">villa BBQ party packages</Link> are built for exactly that. Want the grill focused on the catch of the day? See our <Link to="/seafood-bbq-catering-bali" className="text-[#C5A028] hover:underline">seafood BBQ catering</Link>.
          </p>
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
            Browse our <Link to="/bbq-grill" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              full BBQ menus <ArrowRight className="w-4 h-4" />
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
                title="Why Live-Fire Beats Pre-Cooked Catering"
                subtitle="Most 'BBQ catering' in Bali is cooked off-site and reheated in trays. Ours isn't."
              />
              <div className="space-y-4 mt-6">
                <p className="text-[#4A4745]">
                  Our chefs arrive with raw ingredients, prep on-site, and grill everything live — the smoke, the sizzle, and the chef working the fire become part of the evening.
                </p>
                <ul className="space-y-2">
                  {[
                    'Grilled to order, never reheated — food comes off the fire in waves, hot and timed to your group',
                    'Sourced the morning of your event — fresh seafood, meats, and produce, not freezer stock',
                    'A natural gathering point — guests drift to the grill, chat with the chef, and the ice breaks itself',
                    'Any villa layout works — gardens, pool decks, terraces, rooftops, covered patios; gas or charcoal depending on your villa\'s open-flame rules',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[#4A4745] pt-2">
                  Looking for the full menu list? Browse our <Link to="/bbq-grill" className="text-[#C5A028] hover:underline">full BBQ menus</Link>.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/mychef-catering-bali-bbq-package-international.webp"
                alt="International BBQ platter with grilled meats, prawns and salads at a Bali villa"
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
            title="What's Included in Every BBQ Booking"
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
            <p className="text-sm text-[#4A4745] mb-3">
              Just a flat outdoor area and water access. If your villa restricts open flames, we bring gas grills or covered electric setups.
            </p>
            <p className="text-sm text-[#4A4745]">
              <strong>Optional add-ons:</strong> cocktail packages from IDR 500,000++ per guest (min 10), Wagyu upgrade, gluten-free menu adaptation, plated table service, additional waiters (contact us for pricing).
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: PACKAGES ═══════ */}
      <section id="packages" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 7 — Packages"
            title="BBQ Catering Packages & Prices"
            subtitle="Every package includes your chef and 1 service assistant — 2 assistants for groups over 11 guests — plus all grilling equipment, ingredients, setup, 2–3 hours of service, and full cleanup. Prices are per person, ++ (11% government tax + 10% service charge)."
          />
          <p className="text-sm text-[#4A4745]/80 text-center max-w-3xl mx-auto mt-6">
            Price-model note: these are service packages (from IDR 700K/person, min. 6). Our <Link to="/bbq-grill" className="text-[#C5A028] hover:underline">full BBQ menus</Link> list named signature menus priced per guest (from IDR 950K/guest, min. 8) — a different product, so the entry floors differ.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10 items-stretch">
            {BBQ_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bbq-reveal bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <OptimizedImage src={pkg.image} alt={`${pkg.title} catering setup at a Bali villa`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                  <p className="text-[#C5A028] font-semibold text-sm mb-1">{pkg.price}</p>
                  <p className="text-xs text-[#4A4745]/80 mb-4">{pkg.minGuests}</p>
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
        </div>
      </section>

      {/* ═══════ SECTION 8: ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 8 — Add-Ons"
            title="BBQ Add-Ons"
            subtitle="Elevate your villa BBQ with bartenders, premium meats, plated service, and more. Every add-on is scoped and priced inside your itemised quote."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {ADDONS.map((addon) => (
              <div key={addon.title} className="bbq-reveal bg-white rounded-xl border border-[#E8E6E3] p-5">
                <h3 className="font-semibold text-sm mb-1">{addon.title}</h3>
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

      {/* ═══════ SECTION 9: BBQ VS BUFFET VS PLATED ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 9 — Compare"
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
              <div key={row.aspect} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-4">
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
            Explore <Link to="/catering/buffet" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              buffet catering <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-4 text-[#E8E6E3]">|</span>
            Explore <Link to="/catering/plated-catering" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              plated dinners <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 10: AREA COVERAGE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 10 — Coverage"
            title="BBQ Catering Across Bali"
            subtitle="BBQ catering across all major Bali villa areas. The minimum is the same everywhere — farther areas simply add a travel fee, quoted per booking."
          />
          <p className="text-sm text-[#1A1A1A] font-semibold text-center mt-10 mb-6">
            Minimum 10 guests in every area — the same island-wide. Only the travel fee changes with distance.
          </p>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Area</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Travel</th>
                </tr>
              </thead>
              <tbody>
                {AREA_COVERAGE.map((row) => (
                  <tr key={row.area} className="border-b border-[#E8E6E3]">
                    <td className="py-4 font-medium">{row.area}</td>
                    <td className="py-4 text-[#4A4745]">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-3">
            {AREA_COVERAGE.map((row) => (
              <div key={row.area} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium">{row.area}</span>
                  <span className="text-sm text-[#C5A028] font-semibold text-right">{row.fee}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#4A4745] mt-8 max-w-3xl mx-auto text-center">
            Out-of-area travel typically runs IDR 250K–700K depending on distance and team size — always itemised in your quote, never added later. We coordinate access, parking, and house rules directly with your villa manager; for larger parties, check outside-vendor permission and any banjar function fee with your villa — we'll flag it in the quote.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 11: DIETARY ═══════ */}
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

      {/* ═══════ SECTION 12: TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Mark & Lisa', location: 'Canggu Villa', quote: 'The Indonesian BBQ was incredible. The sate lilit was the best we have had in Bali. Chef and team were professional and cleaned everything.', rating: 5 },
          { name: 'The Johnson Family', location: 'Seminyak Villa', quote: 'We booked the International BBQ for 14 guests. The Wagyu upgrade was worth it. Kids loved the grilled corn.', rating: 5 },
          { name: 'David K.', location: 'Uluwatu Villa', quote: 'Premium Surf & Turf for my birthday. The lobster and Wagyu combo was outstanding. Felt like a private restaurant in our villa.', rating: 5 },
        ]}
        title="What BBQ Guests Say"
        subtitle="Real reviews from villa BBQ events across Bali."
      />

      {/* ═══════ SECTION 13: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Chapter 11 — FAQ" title="BBQ Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 14: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-catering-bali-bbq-package-surfturf.webp" alt="Premium surf and turf BBQ spread with Wagyu and lobster at a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
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
            Book Your BBQ
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Book Your BBQ
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Send your date, villa area, guest count, and preferred package. We confirm availability and send your itemised quote by WhatsApp within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-bbq-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <MessageCircle className="w-4 h-4" /> Build My BBQ Menu
            </a>
            <a href="https://wa.me/6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp +62 896-7407-2020
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Same-day reply</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 50% deposit only</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> No hidden fees</span>
          </div>
        </div>
      </section>

      {/* ═══════ BBQ STAFFING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Team"
            title="Who's On Site at Your BBQ"
            subtitle="Staffing is always included in your BBQ package — never an add-on. The rule is simple and the same for every booking."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
            <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
              <ChefHat className="w-8 h-8 text-[#C5A028] mb-4" />
              <h3 className="font-medium text-lg mb-2">Your Chef</h3>
              <p className="text-sm text-[#4A4745]">
                <strong>Every BBQ booking includes a private chef.</strong> Your chef grills live from the first satay to the last dessert and runs the whole fire station — prepping, grilling, and timing every wave of food.
              </p>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
              <UserPlus className="w-8 h-8 text-[#C5A028] mb-4" />
              <h3 className="font-medium text-lg mb-2">Service Assistants</h3>
              <p className="text-sm text-[#4A4745]">
                <strong>1 assistant is always included — groups over 11 guests get 2 assistants.</strong> Assistants manage plating, drinks, and clearing so service never slows down and your villa is left spotless.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingProcess />

      <CateringDiscoverySection page="bbq" />

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'buffet catering', href: '/catering/buffet', desc: 'Large-group buffet service.' },
              { label: 'plated dinners', href: '/catering/plated-catering', desc: 'Formal course service.' },
              { label: 'Grazing Tables', href: '/catering/grazing-tables', desc: 'Styled spreads for events.' },
              { label: 'catering pricing', href: '/pricing', desc: 'Transparent catering and service pricing.' },
              { label: 'Villa Chef', href: '/private-chef-bali', desc: 'Daily chef for your villa stay.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Fine-dining tasting menus.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ArticleContentSection downgradeFirstH1 />


      <StickyMobileCTA
        pageSource="catering-bbq"
        serviceName="BBQ catering in Bali"
        intent="BBQ packages and a quote"
      />
    </div>
  )
}