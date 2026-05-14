import { useEffect, useRef } from 'react'
// Link used in JSX
import {
  MessageCircle, Check, Phone, Calendar, Users, MapPin,
  Utensils, Flame, Wine, Beef, WheatOff, Map, Heart,
  MessageSquare,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  offerSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import CateringPackageCard from '@/components/catering/CateringPackageCard'
import CateringAddOnCard from '@/components/catering/CateringAddOnCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
// TrustRow imported but not used in this version
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20to%20book%20BBQ%20catering.'
const SITE = 'https://mychef.id'

const BBQ_PACKAGES = [
  {
    image: '/generated/pkg-bbq.webp',
    title: 'Indonesian BBQ',
    price: 'IDR 450,000/person',
    priceNum: 450000,
    description: 'Sate lilit, sate ayam, ikan bakar, jagung bakar, sambal matah, nasi kuning, sayur urap, gado-gado, fresh fruit dessert.',
    includes: ['Chef', '2 service staff', 'All cooking equipment', 'Ingredients', 'Setup', '2-3h service', 'Pack-up & cleanup'],
    minGuests: 'Min. 6 guests',
  },
  {
    image: '/generated/sol-bbq.webp',
    title: 'International BBQ',
    price: 'IDR 600,000/person',
    priceNum: 600000,
    description: 'Australian beef tenderloin, lamb chops, grilled prawns, salmon fillet, chicken thigh, gourmet salads, baked potato, garlic bread, fresh fruit.',
    includes: ['Chef', '2 service staff', 'All cooking equipment', 'Ingredients', 'Setup', '2-3h service', 'Pack-up & cleanup'],
    minGuests: 'Min. 6 guests',
  },
  {
    image: '/generated/pkg-seafood.webp',
    title: 'Premium Surf & Turf BBQ',
    price: 'IDR 850,000/person',
    priceNum: 850000,
    description: 'Wagyu steak, whole lobster tail, king prawns, salmon, Mahi-mahi, premium sides, signature sauces, chocolate dessert station.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Ingredients', 'Setup', '2-3h service', 'Plated service', 'Pack-up & cleanup'],
    minGuests: 'Min. 6 guests',
  },
]

const ADDONS = [
  { title: 'Bartender + 3h open bar', price: 'IDR 4,000,000 flat', description: 'Professional bartender with cocktail setup' },
  { title: 'Wagyu upgrade', price: '+ IDR 250,000/person', description: 'Premium Wagyu beef upgrade' },
  { title: 'Gluten-free upgrade', price: '+ IDR 50,000/adult', description: 'IDR 25,000/child. Full gluten-free menu.' },
  { title: 'Plated service', price: '+ IDR 50,000/person', description: 'Upgrade from self-serve to plated' },
  { title: 'Out-of-area travel', price: 'IDR 250K – 700K', description: 'Depends on area and event size' },
]

const INCLUDED = [
  'Private chef', '2 service staff', 'Fresh ingredients', 'All BBQ equipment',
  'Cooking tools', 'Setup', '2 to 3 hours of service', 'Pack-up', 'Cleanup',
]

const BEST_FOR = [
  { icon: Heart, title: 'Villa birthday BBQ', desc: 'Celebrate with live grilling' },
  { icon: Users, title: 'Family holiday dinner', desc: 'Relaxed group meals' },
  { icon: Flame, title: 'Canggu villa party', desc: 'Social poolside grilling' },
  { icon: Wine, title: 'Seminyak private dinner', desc: 'Intimate villa dining' },
  { icon: Map, title: 'Uluwatu sunset BBQ', desc: 'Clifftop grilling experience' },
  { icon: Utensils, title: 'Company event lunch', desc: 'Team building over food' },
  { icon: Beef, title: 'Poolside seafood BBQ', desc: 'Fresh catch by the pool' },
  { icon: Heart, title: 'Wedding recovery lunch', desc: 'Casual post-wedding meal' },
]

const AREA_MINIMUMS = [
  { area: 'Seminyak / Canggu', min: '6 guests', fee: 'No travel fee' },
  { area: 'Berawa / Pererenan', min: '6 guests', fee: 'No travel fee' },
  { area: 'Ubud', min: '10 guests', fee: 'IDR 350,000' },
  { area: 'Uluwatu', min: '20 guests', fee: 'IDR 500,000' },
  { area: 'Nusa Dua', min: 'Quote required', fee: 'Quote required' },
  { area: 'Tanah Lot', min: 'Quote required', fee: 'Travel fee applies' },
  { area: 'Sanur', min: 'Quote required', fee: 'Quote required' },
  { area: 'Jimbaran', min: 'Quote required', fee: 'Quote required' },
]

const HOW_IT_WORKS_STEPS = [
  { step: '01', title: 'Message Sofia', desc: 'WhatsApp your date, area, and guest count.', icon: MessageSquare },
  { step: '02', title: 'Choose format', desc: 'Indonesian, International, or Premium Surf & Turf.', icon: Utensils },
  { step: '03', title: 'We arrive & set up', desc: 'Chef, staff, equipment, and ingredients.', icon: Flame },
  { step: '04', title: 'You enjoy, we clean up', desc: 'Full service and pack-up included.', icon: Check },
]

const BBQ_GALLERY = [
  '/generated/pkg-bbq.webp',
  '/generated/sol-bbq.webp',
  '/generated/pkg-seafood.webp',
  '/generated/hub-catering.webp',
  '/generated/pkg-roast.webp',
  '/generated/aura-buffet.webp',
]

const GROUP_SIZE_GUIDE = [
  { guests: 6, indonesian: 'IDR 3.27M', international: 'IDR 4.36M', premium: 'IDR 6.17M' },
  { guests: 10, indonesian: 'IDR 5.45M', international: 'IDR 7.26M', premium: 'IDR 10.29M' },
  { guests: 20, indonesian: 'IDR 10.89M', international: 'IDR 14.52M', premium: 'IDR 20.57M' },
  { guests: 30, indonesian: 'IDR 16.34M', international: 'IDR 21.78M', premium: 'IDR 30.86M' },
  { guests: 40, indonesian: 'IDR 21.78M', international: 'IDR 29.04M', premium: 'IDR 41.14M' },
]

const FAQS = [
  { q: 'How many guests do I need for BBQ catering?', a: 'Minimum 6 guests in Seminyak/Canggu, 10 in Ubud, and 20 in Uluwatu. For other areas, contact us for a quote.' },
  { q: 'Do you bring the grill and cooking equipment?', a: 'Yes. We bring everything — grills, tools, fuel, serving equipment, and cleanup supplies.' },
  { q: 'Is chef and staff included?', a: 'Yes. Every BBQ package includes a private chef and 2 service staff.' },
  { q: 'Can you do BBQ at a villa?', a: 'Absolutely. We specialize in villa BBQ catering across Bali. We set up in your garden, pool area, or terrace.' },
  { q: 'Can I choose seafood only?', a: 'Yes. We can customize any package to be seafood-focused. Let us know your preferences when booking.' },
  { q: 'Can I add Wagyu?', a: 'Yes. Our Wagyu upgrade adds IDR 250,000 per person and replaces standard beef with premium Wagyu.' },
  { q: 'Do you clean up after the BBQ?', a: 'Yes. Full cleanup is included in all BBQ packages. We leave your villa as we found it.' },
  { q: 'Can you do gluten-free BBQ?', a: 'Yes. Our gluten-free upgrade is IDR 50,000 per adult and IDR 25,000 per child.' },
  { q: 'Do you charge travel fees?', a: 'Travel fees apply outside Seminyak/Canggu: IDR 250,000 to 700,000 depending on area and event size.' },
  { q: 'Can I book BBQ tomorrow?', a: 'Usually yes for Seminyak/Canggu with 24h notice. For other areas, 2-3 days is recommended.' },
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
        title="BBQ Catering Bali | Villa BBQ, Private Chef & Grill — myCHEF"
        description="Live BBQ catering in Bali for villas. Indonesian, International, Premium Surf & Turf. Chef, staff, equipment included. From IDR 450K/pp."
        canonical={`${SITE}/catering/bbq-catering`}
        ogImage={`${SITE}/generated/pkg-bbq.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('BBQ Catering Bali', 'Live BBQ catering with chef, service staff, ingredients, equipment, setup, service, pack-up, and cleanup.', `${SITE}/catering/bbq-catering`, 'IDR'),
          offerSchema('Indonesian BBQ', 450000, 'IDR', `${SITE}/catering/bbq-catering`),
          offerSchema('International BBQ', 600000, 'IDR', `${SITE}/catering/bbq-catering`),
          offerSchema('Premium Surf & Turf BBQ', 850000, 'IDR', `${SITE}/catering/bbq-catering`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('BBQ Catering', `${SITE}/catering/bbq-catering`, 'Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'BBQ Catering' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/pkg-bbq.webp"
            alt="Chef grilling seafood and meat at a Bali villa BBQ"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            BBQ Catering
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            BBQ Catering in Bali<br />
            <span className="italic">for Villas, Birthdays & Private Events</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Live BBQ catering with chef, service staff, ingredients, equipment, setup, service, pack-up, and cleanup. Choose Indonesian BBQ, International BBQ, or Premium Surf & Turf.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <Flame className="w-4 h-4" /> Book BBQ catering
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp for availability
            </a>
          </div>
          <p className="text-white/60 text-sm">From IDR 450,000/person · Chef & staff included · Bali-wide</p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ WHY BBQ WORKS ═══════ */}
      <section className="bbq-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="CHAPTER 1 — THE INQUIRY"
                title="Why BBQ Is the Easiest Villa Catering Format"
                subtitle="BBQ works because it is live, flexible, social, and easy to scale. Guests can relax while the chef handles the grill, staff handles service, and the team cleans up after."
              />
              <div className="space-y-4">
                {[
                  'Works for small and medium groups',
                  'Good for villa birthdays and family holidays',
                  'Easy to add seafood, Wagyu, or cocktails',
                  'Chef and staff included',
                  'Full setup and cleanup available',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0" />
                    <span className="text-[#4A4745]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/sol-bbq.webp"
                alt="Relaxed villa BBQ table with guests"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 2 — THE PROCESS"
            title="How BBQ Catering Works"
            subtitle="Four simple steps from first message to finished dinner."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <span className="text-[#C5A028] text-xs font-bold tracking-wider">{s.step}</span>
                <h4 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{s.title}</h4>
                <p className="text-xs text-[#4A4745]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PACKAGES ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 3 — THE MENU"
            title="Choose Your BBQ Package"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {BBQ_PACKAGES.map((pkg) => (
              <CateringPackageCard key={pkg.title} {...pkg} accent="#C5A028" />
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-[#4A4745]/70">
              All-in prices include 21% service charge and tax:{' '}
              <AllInPrice price={450000} className="inline" /> ·{' '}
              <AllInPrice price={600000} className="inline" /> ·{' '}
              <AllInPrice price={850000} className="inline" />
            </p>
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={450000} minGuests={6} maxGuests={40} defaultGuests={10} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={600000} minGuests={6} maxGuests={40} defaultGuests={10} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={850000} minGuests={6} maxGuests={40} defaultGuests={10} accent="#C5A028" />
          </div>
        </div>
      </section>

      {/* ═══════ PHOTO GALLERY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 4 — THE SETUP"
            title="BBQ Photo Gallery"
            subtitle="Real setups from villa BBQ events across Bali."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {BBQ_GALLERY.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={src} alt={`BBQ catering setup ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHAT'S INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 5 — THE SERVICE"
            title="What Every BBQ Package Includes"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#C5A028]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ GROUP SIZE GUIDE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 6 — THE INVESTMENT"
            title="Group Size Guide"
            subtitle="All-in totals include 21% service charge and tax (×1.21). Final quote confirmed before deposit."
          />
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Guests</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Indonesian (450K)</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">International (600K)</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Premium Surf & Turf (850K)</th>
                </tr>
              </thead>
              <tbody>
                {GROUP_SIZE_GUIDE.map((row) => (
                  <tr key={row.guests} className="border-b border-[#E8E6E3]">
                    <td className="py-4 font-medium">{row.guests} guests</td>
                    <td className="py-4 text-[#C5A028] font-semibold">{row.indonesian}</td>
                    <td className="py-4 text-[#C5A028] font-semibold">{row.international}</td>
                    <td className="py-4 text-[#C5A028] font-semibold">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4">
            {GROUP_SIZE_GUIDE.map((row) => (
              <div key={row.guests} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <p className="font-medium mb-3">{row.guests} guests</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-[#4A4745]">Indonesian</span><span className="text-[#C5A028] font-semibold">{row.indonesian}</span></div>
                  <div className="flex justify-between"><span className="text-[#4A4745]">International</span><span className="text-[#C5A028] font-semibold">{row.international}</span></div>
                  <div className="flex justify-between"><span className="text-[#4A4745]">Premium</span><span className="text-[#C5A028] font-semibold">{row.premium}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Extras"
            title="BBQ Add-Ons"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map((addon) => (
              <CateringAddOnCard key={addon.title} {...addon} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BEST FOR ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Occasions"
            title="Best For These Events"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BEST_FOR.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AREA MINIMUMS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Logistics"
            title="Minimum Guests and Bali Travel Fees"
            subtitle="Minimums depend on area because staffing, travel time, equipment transport, and setup time change across Bali."
          />
          <div className="hidden md:block overflow-x-auto">
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
          <div className="md:hidden space-y-3">
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

      {/* ═══════ DIETARY ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <WheatOff className="w-10 h-10 text-[#6B8E5A] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Dietary Requests</h2>
          <p className="text-[#4A4745] mb-6">
            Tell us before confirmation if your group needs vegetarian, vegan, gluten-free, pork-free, seafood-free, nut-free, or child-friendly options.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Vegetarian', 'Vegan', 'Gluten-free', 'Pork-free', 'Seafood-free', 'Nut-free', 'Child-friendly'].map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOOKING FORM ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Book Now"
            title="Book BBQ Catering"
          />
          <BookingFormCatering
            title="Book Your Villa BBQ"
            subtitle="We will confirm availability and pricing within the hour."
            fields={[
              { name: 'package', label: 'BBQ Package', type: 'select', icon: Utensils, required: true },
              { name: 'date', label: 'Date', type: 'date', icon: Calendar, required: true },
              { name: 'time', label: 'Time', type: 'text', icon: Flame, placeholder: 'e.g. 6:00 PM' },
              { name: 'area', label: 'Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'villa', label: 'Villa Name / Address', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 12', required: true },
              { name: 'adults', label: 'Adults', type: 'number', placeholder: 'e.g. 10' },
              { name: 'children', label: 'Children', type: 'number', placeholder: 'e.g. 2' },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Bartender, Wagyu upgrade, etc.' },
              { name: 'dietary', label: 'Dietary Notes', type: 'textarea', placeholder: 'Allergies, restrictions...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
            ]}
            packageOptions={['Indonesian BBQ', 'International BBQ', 'Premium Surf & Turf']}
            accent="#C5A028"
          />
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Mark & Lisa', location: 'Canggu Villa', quote: 'The Indonesian BBQ was incredible. The sate lilit was the best we have had in Bali. Chef and team were professional and cleaned everything.', rating: 5 },
          { name: 'The Johnson Family', location: 'Seminyak Villa', quote: 'We booked the International BBQ for 14 guests. The Wagyu upgrade was worth every penny. Kids loved the grilled corn.', rating: 5 },
          { name: 'David K.', location: 'Uluwatu Villa', quote: 'Premium Surf & Turf for my birthday. The lobster and Wagyu combo was outstanding. Felt like a private restaurant in our villa.', rating: 5 },
        ]}
        title="What BBQ Guests Say"
        subtitle="Real reviews from villa BBQ events across Bali."
      />

      {/* ═══════ FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="BBQ FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/pkg-bbq.webp"
            alt="Finished BBQ table with grilled food"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Book Your Villa BBQ?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Send your date, area, guest count, and preferred BBQ package. We will confirm availability and final price by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <Flame className="w-4 h-4" /> Book BBQ catering
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
