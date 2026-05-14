import { useEffect, useRef } from 'react'
import {
  Check, Phone, Calendar, Users, MapPin,
  Utensils, Sparkles, ChefHat, Wine,
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
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20a%20plated%20catering%20quote.'
const SITE = 'https://mychef.id'

const PLATED_PACKAGES = [
  {
    image: '/generated/catering/plated-menus.webp',
    title: '3-Course Plated',
    price: 'IDR 800,000/person',
    priceNum: 800000,
    description: 'Starter + Main + Dessert. Minimum IDR 5,000,000 total.',
    includes: ['English-speaking chef', 'Service manager', '1 waiter per 10 guests', 'Tables, linens, cutlery, porcelain, glassware'],
    minGuests: 'Min. IDR 5M',
  },
  {
    image: '/generated/menu-wagyu.webp',
    title: '4-Course Plated',
    price: 'IDR 1,000,000/person',
    priceNum: 1000000,
    description: 'Amuse + Starter + Main + Dessert. Minimum IDR 5,000,000 total.',
    includes: ['English-speaking chef', 'Service manager', '1 waiter per 10 guests', 'Tables, linens, cutlery, porcelain, glassware'],
    minGuests: 'Min. IDR 5M',
  },
  {
    image: '/generated/luna-plating.webp',
    title: '5-Course Premium',
    price: 'IDR 1,300,000/person',
    priceNum: 1300000,
    description: 'Amuse + Starter + Palate Cleanser + Main + Dessert + Petits Fours. Minimum IDR 5,000,000 total.',
    includes: ['English-speaking chef', 'Service manager', '1 waiter per 10 guests', 'Tables, linens, cutlery, porcelain, glassware', 'Kitchen tent if needed'],
    minGuests: 'Min. IDR 5M',
  },
]

const SAMPLE_MENUS = [
  {
    tier: '3-Course',
    courses: ['Tuna Tartare or Soup', 'Wagyu or Fish', 'Chocolate Fondant'],
  },
  {
    tier: '4-Course',
    courses: ['Amuse-bouche', 'Starter', 'Main', 'Dessert'],
  },
  {
    tier: '5-Course Premium',
    courses: ['Amuse', 'Starter', 'Palate Cleanser', 'Main', 'Dessert', 'Petits Fours'],
  },
]

const INCLUDED = [
  'English-speaking chef',
  'Service manager',
  '1 waiter per 10 guests',
  'Tables, linens, cutlery, porcelain, glassware',
  'Kitchen tent if needed',
  'Pre-event tasting at 40+',
  'Welcome refresher',
  'Bottled water',
  'Full setup + cleanup',
]


const GROUP_TOTALS = [
  { guests: 10, course3: 'IDR 9.68M', course4: 'IDR 12.1M', course5: 'IDR 15.73M' },
  { guests: 20, course3: 'IDR 19.36M', course4: 'IDR 24.2M', course5: 'IDR 31.46M' },
  { guests: 30, course3: 'IDR 29.04M', course4: 'IDR 36.3M', course5: 'IDR 47.19M' },
]

const PLATED_GALLERY = [
  '/generated/pkg-italian.webp',
  '/generated/corp-plated.webp',
  '/generated/hub-fine-dining.webp',
  '/generated/aura-toast.webp',
  '/generated/aura-tablescape.webp',
  '/generated/hub-catering.webp',
]

const WHY_PLATED_VS_BUFFET = [
  { title: 'Formality', plated: 'Individual service, white-glove pacing', buffet: 'Self-serve, casual flow' },
  { title: 'Group size', plated: 'Ideal for 10–60 guests', buffet: 'Better for 30–200 guests' },
  { title: 'Presentation', plated: 'Restaurant-quality plating per guest', buffet: 'Chafing dishes, bulk display' },
]

const FAQS = [
  { q: 'When is plated better than buffet?', a: 'Plated is ideal for formal events, smaller groups, and when you want a restaurant-quality experience with individual service.' },
  { q: 'How long is plated service?', a: 'Typically 2.5–3 hours from the amuse-bouche to coffee.' },
  { q: 'Can the menu be customised?', a: 'Yes. We create custom menus for every booking based on your preferences and dietary requirements.' },
  { q: "What's the minimum spend?", a: 'IDR 5,000,000 per event.' },
  { q: 'Do you handle wine?', a: 'Wine pairing is available as an add-on. See the Wine Pairing section for details.' },
  { q: 'Will the food be hot?', a: 'Yes. We use portable hot-holding equipment to ensure every course arrives at the right temperature.' },
  { q: 'Is the chef on-site?', a: 'Yes. Your chef is in your kitchen all evening, plating and finishing every dish.' },
  { q: 'Can I take leftovers?', a: 'Yes. Any leftovers are packaged for you with reheating instructions.' },
]

export default function CateringPlatedPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.plated-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.plated-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Plated Set Menu Catering Bali | Villa Dinners — myCHEF"
        description="Three- to five-course plated dinners at your Bali villa. English-speaking chef, service team, full setup. From IDR 800K/person. Min. IDR 5M."
        canonical={`${SITE}/catering/plated-catering`}
        ogImage={`${SITE}/generated/catering/plated-menus.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Plated Set Menu Catering Bali', 'Three-, four-, or five-course plated dinners served restaurant-style at your Bali villa.', `${SITE}/catering/plated-catering`, 'IDR'),
          offerSchema('3-Course Plated', 800000, 'IDR', `${SITE}/catering/plated-catering`),
          offerSchema('4-Course Plated', 1000000, 'IDR', `${SITE}/catering/plated-catering`),
          offerSchema('5-Course Premium', 1300000, 'IDR', `${SITE}/catering/plated-catering`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Plated Catering', `${SITE}/catering/plated-catering`, 'Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Plated Catering' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/catering/plated-menus.webp"
            alt="Elegant plated dinner course served at a Bali villa"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Plated Catering
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Plated Set Menu Catering — Bali Villas
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Three-, four-, or five-course plated dinners served restaurant-style at your villa. Minimum IDR 5,000,000 per event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              <Calendar className="w-4 h-4" /> Request Plated Quote
            </a>
            <a
              href="#menus"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <Utensils className="w-4 h-4" /> View Sample Menus
            </a>
          </div>
          <p className="text-white/60 text-sm">From IDR 800,000/person · Min. IDR 5,000,000 · Chef & staff included</p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ PACKAGES ═══════ */}
      <section className="plated-content py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 1 — THE INQUIRY"
            title="Choose Your Plated Experience"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {PLATED_PACKAGES.map((pkg) => (
              <CateringPackageCard key={pkg.title} {...pkg} accent="#6B8E5A" />
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-[#4A4745]/70">
              All-in prices include 21% service charge and tax:{' '}
              <AllInPrice price={800000} className="inline" /> ·{' '}
              <AllInPrice price={1000000} className="inline" /> ·{' '}
              <AllInPrice price={1300000} className="inline" />
            </p>
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={800000} minGuests={7} maxGuests={60} defaultGuests={10} accent="#6B8E5A" />
            <GroupTotalCalculator pricePerPerson={1000000} minGuests={5} maxGuests={60} defaultGuests={10} accent="#6B8E5A" />
            <GroupTotalCalculator pricePerPerson={1300000} minGuests={4} maxGuests={60} defaultGuests={10} accent="#6B8E5A" />
          </div>
        </div>
      </section>

      {/* ═══════ SAMPLE MENUS ═══════ */}
      <section id="menus" className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 2 — THE MENU"
            title="Sample Menus by Tier"
            subtitle="Example dishes for each course tier. Every menu is customised to your preferences."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {SAMPLE_MENUS.map((menu) => (
              <div key={menu.tier} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{menu.tier}</h3>
                <div className="space-y-3">
                  {menu.courses.map((course, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#6B8E5A]/10 text-[#6B8E5A] text-xs font-semibold flex items-center justify-center">{i + 1}</span>
                      <span className="text-[#4A4745] text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHAT'S INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 3 — THE SERVICE"
            title="What's Included"
            subtitle="Every plated dinner includes the team, equipment, and service required for a restaurant-quality experience at your villa."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#6B8E5A]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY PLATED VS BUFFET ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 4 — THE COMPARISON"
            title="Why Plated vs Buffet"
            subtitle="Plated service is the right choice when you want formality, precision, and an intimate dining experience."
          />
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Factor</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Plated</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Buffet</th>
                </tr>
              </thead>
              <tbody>
                {WHY_PLATED_VS_BUFFET.map((row) => (
                  <tr key={row.title} className="border-b border-[#E8E6E3]">
                    <td className="py-4 font-medium">{row.title}</td>
                    <td className="py-4 text-[#6B8E5A] font-semibold">{row.plated}</td>
                    <td className="py-4 text-[#4A4745]">{row.buffet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4">
            {WHY_PLATED_VS_BUFFET.map((row) => (
              <div key={row.title} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <p className="font-medium mb-2">{row.title}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-[#4A4745]">Plated</span><span className="text-[#6B8E5A] font-semibold">{row.plated}</span></div>
                  <div className="flex justify-between"><span className="text-[#4A4745]">Buffet</span><span className="text-[#4A4745]">{row.buffet}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WINE PAIRING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 5 — THE PAIRING"
            title="Wine Pairing Add-On"
            subtitle="Enhance your plated dinner with curated wine pairings and welcome champagne."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-5 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
              <Wine className="w-5 h-5 text-[#6B8E5A]" />
              <div>
                <p className="font-medium text-sm">4-Course Wine Pairing</p>
                <p className="text-[#6B8E5A] font-semibold text-sm">IDR 700,000/person</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
              <Wine className="w-5 h-5 text-[#6B8E5A]" />
              <div>
                <p className="font-medium text-sm">5-Course Wine Pairing</p>
                <p className="text-[#6B8E5A] font-semibold text-sm">IDR 900,000/person</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] sm:col-span-2">
              <Sparkles className="w-5 h-5 text-[#6B8E5A]" />
              <div>
                <p className="font-medium text-sm">Welcome Champagne</p>
                <p className="text-[#6B8E5A] font-semibold text-sm">IDR 200,000/person</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PHOTO GALLERY ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 6 — THE SETUP"
            title="Plated Dinner Gallery"
            subtitle="Real plated course presentations from villa dinners across Bali."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PLATED_GALLERY.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={src} alt={`Plated dinner setup ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ GROUP SIZE GUIDE + MINIMUM SPEND ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 7 — THE INVESTMENT"
            title="Group Size Guide & Minimum Spend"
            subtitle="All-in prices include service charge and tax (×1.21). Final quote confirmed before deposit."
          />
          <div className="max-w-3xl mx-auto mb-10">
            <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-[#6B8E5A]" />
                <h3 className="font-medium text-[#1A1A1A]">Minimum spend: IDR 5,000,000 per event</h3>
              </div>
              <p className="text-sm text-[#4A4745] mb-4">
                The IDR 5M minimum covers chef travel, prep time, equipment, and base staffing. Even for smaller groups, the all-in total will meet or exceed this threshold. Here are examples:
              </p>
              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-white rounded-xl border border-[#E8E6E3] p-4 text-center">
                  <p className="text-[#4A4745] mb-1">6 guests × 3-Course</p>
                  <p className="text-[#6B8E5A] font-semibold">IDR 5.81M</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E8E6E3] p-4 text-center">
                  <p className="text-[#4A4745] mb-1">5 guests × 4-Course</p>
                  <p className="text-[#6B8E5A] font-semibold">IDR 6.05M</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E8E6E3] p-4 text-center">
                  <p className="text-[#4A4745] mb-1">4 guests × 5-Course</p>
                  <p className="text-[#6B8E5A] font-semibold">IDR 6.29M</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Guests</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">3-Course</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">4-Course</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">5-Course Premium</th>
                </tr>
              </thead>
              <tbody>
                {GROUP_TOTALS.map((row) => (
                  <tr key={row.guests} className="border-b border-[#E8E6E3]">
                    <td className="py-4 font-medium">{row.guests} guests</td>
                    <td className="py-4 text-[#6B8E5A] font-semibold">{row.course3}</td>
                    <td className="py-4 text-[#6B8E5A] font-semibold">{row.course4}</td>
                    <td className="py-4 text-[#6B8E5A] font-semibold">{row.course5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4">
            {GROUP_TOTALS.map((row) => (
              <div key={row.guests} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <p className="font-medium mb-3">{row.guests} guests</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-[#4A4745]">3-Course</span><span className="text-[#6B8E5A] font-semibold">{row.course3}</span></div>
                  <div className="flex justify-between"><span className="text-[#4A4745]">4-Course</span><span className="text-[#6B8E5A] font-semibold">{row.course4}</span></div>
                  <div className="flex justify-between"><span className="text-[#4A4745]">5-Course</span><span className="text-[#6B8E5A] font-semibold">{row.course5}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Olivia & Mark', location: 'Seminyak Villa', quote: 'The 5-course plated dinner was the highlight of our anniversary. Every course was perfectly timed and the wine pairing was exceptional.', rating: 5 },
          { name: 'The Tan Family', location: 'Canggu Villa', quote: 'We chose the 4-course plated menu for a family celebration. The chef was professional, the food was outstanding, and the service was flawless.', rating: 5 },
          { name: 'James R.', location: 'Uluwatu Villa', quote: 'Plated catering for 25 guests at our villa. Felt like a private restaurant. The Wagyu main was cooked to perfection.', rating: 5 },
        ]}
        title="What Plated Dinner Guests Say"
        subtitle="Real reviews from villa plated dinners across Bali."
      />

      {/* ═══════ FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Plated Catering FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ═══════ BOOKING FORM ═══════ */}
      <section id="book" className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Book Now"
            title="Request Plated Catering"
          />
          <BookingFormCatering
            title="Request Plated Catering"
            subtitle="We will confirm availability, menu direction, and pricing within the hour."
            fields={[
              { name: 'package', label: 'Plated Package', type: 'select', icon: Utensils, required: true },
              { name: 'date', label: 'Event Date', type: 'date', icon: Calendar, required: true },
              { name: 'time', label: 'Event Time', type: 'text', icon: ChefHat, placeholder: 'e.g. 7:00 PM' },
              { name: 'area', label: 'Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'villa', label: 'Villa Name', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 25', required: true },
              { name: 'dietary', label: 'Dietary Notes', type: 'textarea', placeholder: 'Allergies, restrictions, preferences...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['3-Course Plated', '4-Course Plated', '5-Course Premium']}
            accent="#6B8E5A"
          />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/luna-plating.webp"
            alt="Plated dinner course ready to serve"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for a Restaurant-Style Dinner at Your Villa?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Send your date, villa, guest count, and preferred course tier. We will confirm availability and pricing by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              <Calendar className="w-4 h-4" /> Request Plated Quote
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
