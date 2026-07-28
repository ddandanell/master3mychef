import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  Check, Phone, Calendar, Users, MapPin,
  Utensils, Sparkles, ChefHat, Wine,
  MessageSquare, Clock, Heart, Briefcase, Gem,
  Flower2, GlassWater, Star,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import SeoHead, {
  cateringBreadcrumbSchema,
  serviceWithAggregateOfferSchema,
  faqPageSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import CateringPackageCard from '@/components/catering/CateringPackageCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
import { ArticleContentSection, Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator, CateringDiscoverySection } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'plated dinner catering in Bali', intent: 'menu options and pricing' })
const SITE = 'https://mychef.id'
const ACCENT = '#C5A028'

const PLATED_PACKAGES = [
  {
    image: '/generated/mychef-catering-bali-plated-3course-table.webp',
    title: '3-Course Plated',
    price: 'IDR 800,000++/person',
    priceNum: 800000,
    description: 'Starter, main, dessert. Elegant and efficient — ideal for celebration dinners that want formality without a late night.',
    includes: ['English-speaking chef', 'Service manager', '1 waiter per 10 guests', 'Tables, linens, cutlery, porcelain, glassware'],
    minGuests: 'Min. IDR 5M',
  },
  {
    image: '/generated/mychef-catering-bali-plated-4course-table.webp',
    title: '4-Course Plated',
    price: 'IDR 1,000,000++/person',
    priceNum: 1000000,
    description: 'Amuse-bouche, starter, main, dessert. The most-booked format for anniversaries and executive dinners.',
    includes: ['English-speaking chef', 'Service manager', '1 waiter per 10 guests', 'Tables, linens, cutlery, porcelain, glassware'],
    minGuests: 'Min. IDR 5M',
  },
  {
    image: '/generated/mychef-catering-bali-plated-5course-premium-table.webp',
    title: '5-Course Premium',
    price: 'IDR 1,300,000++/person',
    priceNum: 1300000,
    description: 'Amuse, starter, palate cleanser, main, dessert, petits fours. Full fine-dining pacing for milestone evenings.',
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
  { guests: 10, course3: 'IDR 8M++', course4: 'IDR 10M++', course5: 'IDR 13M++' },
  { guests: 20, course3: 'IDR 16M++', course4: 'IDR 20M++', course5: 'IDR 26M++' },
  { guests: 30, course3: 'IDR 24M++', course4: 'IDR 30M++', course5: 'IDR 39M++' },
]

const PLATED_GALLERY = [
  '/generated/mychef-catering-bali-corporate-gallery-plated.webp',
  '/generated/mychef-events-bali-corp-plated.webp',
  '/generated/mychef-misc-bali-hub-fine-dining.webp',
  '/generated/mychef-experience-bali-aura-toast.webp',
  '/generated/mychef-experience-bali-aura-tablescape.webp',
  '/generated/mychef-catering-bali-hub-catering.webp',
]

const WHY_PLATED_VS_BUFFET = [
  { title: 'Feel', plated: 'Formal, choreographed, intimate', buffet: 'Social, flexible, self-paced' },
  { title: 'Best group size', plated: '10–60 guests', buffet: '30–200+ guests' },
  { title: 'Pacing', plated: 'Controlled by the kitchen', buffet: 'Guest-driven' },
  { title: 'Presentation', plated: 'Individually plated courses', buffet: 'Styled stations' },
  { title: 'From price', plated: 'IDR 800K++/person', buffet: 'IDR 475K++/person' },
]

const OCCASIONS = [
  { icon: Heart, label: 'Anniversaries', desc: 'Romantic multi-course dinners for two or small groups' },
  { icon: Sparkles, label: 'Birthdays', desc: 'Celebration menus with personal touches and cake service' },
  { icon: Gem, label: 'Engagement Dinners', desc: 'Intimate proposals and post-proposal celebration dining' },
  { icon: Briefcase, label: 'Executive Dinners', desc: 'Professional, discreet service for business gatherings' },
  { icon: Wine, label: 'Wedding Rehearsal Dinners', desc: 'Elegant pre-wedding family dining at your villa' },
  { icon: Heart, label: 'Romantic Dinners', desc: 'Private chef dinner for couples seeking an unforgettable evening' },
  { icon: Star, label: 'Luxury Villa Stays', desc: 'Fine dining catering that matches your villa experience' },
]

const CUISINE_DIRECTIONS = [
  { name: 'Italian', desc: 'Handmade pasta, risotto, osso buco, tiramisu' },
  { name: 'Mediterranean', desc: 'Olive oil, fresh seafood, grilled vegetables, herbs' },
  { name: 'Indonesian Fine Dining', desc: 'Refined local flavors with modern technique' },
  { name: 'Seafood', desc: 'Catch-of-the-day, shellfish, ceviche, grilled fish' },
  { name: 'Steak', desc: 'Wagyu, ribeye, tenderloin with premium sides' },
  { name: 'Vegetarian Tasting', desc: 'Plant-based multi-course with seasonal produce' },
  { name: 'Asian Fusion', desc: 'East-meets-West flavors with creative presentation' },
  { name: 'Custom Chef Menu', desc: 'Custom menu designed around your preferences' },
]

const TABLE_STYLING = [
  { icon: Sparkles, label: 'Candles & Ambient Lighting', desc: 'Soft candlelight and villa lighting for atmosphere' },
  { icon: Flower2, label: 'Fresh Flowers', desc: 'Seasonal arrangements matching your color palette' },
  { icon: Utensils, label: 'Premium Linen & Chargers', desc: 'Crisp tablecloths, napkins, and decorative chargers' },
  { icon: GlassWater, label: 'Glassware & Stemware', desc: 'Wine glasses, water goblets, and champagne flutes' },
  { icon: ChefHat, label: 'Printed Menus', desc: 'Personalized menu cards at each place setting' },
  { icon: Star, label: 'Villa Lighting Design', desc: 'Fairy lights, lanterns, and poolside illumination' },
]

const WINE_PAIRINGS = [
  { label: '4-Course Wine Pairing', price: 'IDR 700,000/person', icon: Wine },
  { label: '5-Course Wine Pairing', price: 'IDR 900,000/person', icon: Wine },
  { label: 'Welcome Champagne', price: 'IDR 200,000/person', icon: Sparkles },
  { label: 'Mocktail Pairing', price: 'IDR 350,000/person', icon: GlassWater },
]

const FAQS = [
  { q: 'How much does a plated dinner in Bali cost?', a: 'From IDR 800,000++ per person for three courses, up to IDR 1,300,000++ for the five-course premium, with a minimum of 5 guests. Every quote states the full total including tax and service before you confirm.' },
  { q: 'Is there a minimum number of guests?', a: 'No fixed guest minimum — the IDR 5M minimum spend covers the team, so even a six-person dinner works. The format suits up to about 60 guests.' },
  { q: 'How many staff will be at our villa?', a: 'A chef, a service manager, and one waiter per ten guests as standard. Additional waiters are available from IDR 250,000/hour.' },
  { q: 'Can every guest have a different dietary menu?', a: 'Yes — that\'s the strength of plated service. Vegan, gluten-free, halal, and allergy-specific courses are designed per guest and plated separately.' },
  { q: 'Do you bring tableware and styling?', a: 'Everything: tables if needed, linens, chargers, porcelain, glassware, candles, and printed menus. A kitchen tent can be arranged if your villa kitchen is compact.' },
  { q: 'Can we taste the menu beforehand?', a: 'Pre-event tastings are available for bookings of 40+ guests; for smaller dinners we refine the menu with you over WhatsApp until it\'s right.' },
  { q: 'How far ahead should I book?', a: 'One to two weeks is ideal, more in peak season. A 50% deposit confirms your date; cancellations 14+ days before receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable (see /cancellation policy).' },
  { q: 'Is this right for a rehearsal dinner or small wedding?', a: 'Very much so — it\'s our most-booked format for rehearsal dinners. For full wedding reception catering, see <a href="/events/weddings">wedding catering</a>.' },
]

const BASE_PLATED_SERVICE_SCHEMA = serviceWithAggregateOfferSchema({
  name: 'Plated Dinner Catering Bali',
  description: 'Formal plated dinner catering at Bali villas: 3–5 course menus with chef, service manager, waiters, full table styling and cleanup.',
  url: `${SITE}/catering/plated-catering`,
  lowPrice: '800000',
  highPrice: '1300000',
})

const PLATED_SERVICE_SCHEMA = {
  ...BASE_PLATED_SERVICE_SCHEMA,
  provider: {
    '@type': 'Organization',
    name: 'myCHEF',
    url: 'https://mychef.id',
    telephone: '+62 896-7407-2020',
  },
  serviceType: 'Plated dinner catering',
  offers: {
    ...(BASE_PLATED_SERVICE_SCHEMA.offers as Record<string, unknown>),
    offerCount: '3',
    description: 'Per person ++ (11% government tax + 10% service charge); minimum 5 guests',
  },
}

const SERVICE_FLOW = [
  { step: '1', title: 'Arrival & Setup', desc: 'Team arrives 3–4 hours before service with all equipment and ingredients.' },
  { step: '2', title: 'Kitchen Prep', desc: 'Chef preps mise en place, stocks, and sauces in your villa kitchen.' },
  { step: '3', title: 'Table Styling', desc: 'Staff dresses tables with linen, chargers, glassware, candles, and printed menus.' },
  { step: '4', title: 'Amuse-Bouche', desc: 'Guests are greeted with a small bite while seating is finalized.' },
  { step: '5', title: 'Course Timing', desc: 'Each course is served at a measured pace, typically 20–30 minutes apart.' },
  { step: '6', title: 'Plating & Service', desc: 'Chef plates every dish; waiters serve individually with white-glove attention.' },
  { step: '7', title: 'Clearing & Reset', desc: 'Tables are cleared and reset between courses for a clean, elegant flow.' },
  { step: '8', title: 'Cleanup & Departure', desc: 'Full kitchen and dining area cleanup. Leftovers packaged with reheating instructions.' },
]

export default function CateringPlatedPage() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      document.querySelectorAll('.plated-reveal').forEach(el => {
        (el as HTMLElement).style.opacity = '1'
      })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo('.plated-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.plated-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Plated Catering Bali | Formal Villa Dinner Service | myCHEF"
        description="Plated dinner catering in Bali: formal 3–5 course table service at your villa, from IDR 800K++/person with chef, waiters & full styling. WhatsApp myCHEF."
        canonical={`${SITE}/catering/plated-catering`}
        ogImage={`${SITE}/generated/mychef-events-bali-anniversaries-plated.webp`}
        jsonLd={[
          PLATED_SERVICE_SCHEMA,
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          cateringBreadcrumbSchema('Plated Catering Bali', `${SITE}/catering/plated-catering`),
        ]}
      />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-events-bali-anniversaries-plated.webp"
            alt="Elegant plated dinner course served at a Bali villa for private fine dining"
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
          <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Plated Dinner Bali' }]} theme="dark" className="justify-center mb-8" />
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: ACCENT }}>
            Private Chef Fine Dining
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Plated Dinner Catering Bali — Formal Multi-Course Service at Your Villa
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-2xl mx-auto">
            Guests seated. Candles lit. Each course arriving individually plated, precisely timed, and served by waiters who know the menu. A plated dinner turns a villa evening into a private restaurant — with none of the restaurant.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
              style={{ background: ACCENT }}
            >
              <Calendar className="w-4 h-4" /> Plan My Plated Dinner
            </a>
            <a
              href="#menus"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Utensils className="w-4 h-4" /> View Sample Menus
            </a>
          </div>
          <p className="text-white/[60%] text-sm">From IDR 800,000++/person · Min. spend IDR 5,000,000 · 10–60 guests</p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ SECTION 1: PLATED DINNER IN BALI ═══════ */}
      <section className="plated-content py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="The Experience"
            title="Plated Dinner in Bali"
            subtitle="A plated dinner offers formality, control, and a premium experience that buffet service cannot match."
          />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-[#4A4745] leading-relaxed">
                <strong>Plated catering Bali</strong> is the gold standard for private villa events. Unlike buffet service, where guests serve themselves from heated trays, a plated dinner is a choreographed experience: each course is individually prepared, artfully plated, and served to guests at the table by professional waitstaff.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                This format gives you complete control over pacing, presentation, and atmosphere. Your private chef designs a multi-course menu tailored to your preferences, dietary needs, and the occasion. Whether it is a romantic dinner for two or a celebration for sixty, plated service elevates the evening into something memorable.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Individual restaurant-quality plating',
                  'Controlled course timing',
                  'White-glove waiter service',
                  'Intimate, focused atmosphere',
                  'Custom menu per guest',
                  'Elegant table styling included',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
                    <span className="text-sm text-[#4A4745]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/generated/mychef-misc-bali-hub-fine-dining.webp"
                alt="Private plated dinner setup at a Bali villa with elegant table styling"
                width={1920}
                height={1080}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2: BEST OCCASIONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Celebrate"
            title="Best Occasions for a Plated Dinner"
            subtitle="From intimate anniversaries to executive gatherings, plated service suits the moments that matter most."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OCCASIONS.map((occ) => (
              <div key={occ.label} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${ACCENT}15` }}>
                  <occ.icon className="w-6 h-6" style={{ color: ACCENT }} />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{occ.label}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{occ.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[#4A4745] leading-relaxed max-w-2xl mx-auto">
            Planning a wedding or rehearsal dinner? See our <Link to="/events/weddings">wedding catering</Link> options for full reception service.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 3: MENU STRUCTURE ═══════ */}
      <section id="menus" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="The Menu"
            title="Menu Structure & Course Options"
            subtitle="Choose your course count. Every menu is customized with wine pairing, amuse-bouche, and dietary alternatives."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {SAMPLE_MENUS.map((menu) => (
              <div key={menu.tier} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{menu.tier}</h3>
                <div className="space-y-3">
                  {menu.courses.map((course, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold text-white" style={{ background: ACCENT }}>{i + 1}</span>
                      <span className="text-[#4A4745] text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
              <h3 className="text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Add-Ons & Enhancements</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Wine Pairing', desc: 'Matched wine per course' },
                  { label: 'Amuse-Bouche', desc: 'Complimentary with 4+ courses' },
                  { label: 'Dessert Upgrade', desc: 'Petits fours, cheese course' },
                  { label: 'Custom Dietary', desc: 'Vegan, gluten-free, halal, kosher' },
                ].map((add) => (
                  <div key={add.label} className="flex items-center gap-3">
                    <Star className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                    <div>
                      <p className="text-sm font-medium text-[#1A1A1A]">{add.label}</p>
                      <p className="text-xs text-[#4A4745]">{add.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: SERVICE FLOW ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="The Evening"
            title="What a Plated Evening Looks Like"
            subtitle="From arrival to departure, every step is choreographed for a seamless villa dining experience."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_FLOW.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl border border-[#E8E6E3] p-5 md:p-6">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white mb-3" style={{ background: ACCENT }}>{step.step}</span>
                <h4 className="font-semibold text-[#1A1A1A] mb-1 text-sm">{step.title}</h4>
                <p className="text-xs text-[#4A4745] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: WHY PLATED BEATS BUFFET ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="The Comparison"
            title="Plated vs Buffet — Which Fits Your Event?"
            subtitle="Better pacing, better presentation, less guest movement, stronger atmosphere, and more controlled kitchen output."
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
                    <td className="py-4 font-semibold" style={{ color: ACCENT }}>{row.plated}</td>
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
                  <div className="flex justify-between"><span className="text-[#4A4745]">Plated</span><span className="font-semibold" style={{ color: ACCENT }}>{row.plated}</span></div>
                  <div className="flex justify-between"><span className="text-[#4A4745]">Buffet</span><span className="text-[#4A4745]">{row.buffet}</span></div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#4A4745] leading-relaxed text-center max-w-2xl mx-auto">
            Rule of thumb: if the evening is the point, go plated. If the mingling is the point, go <Link to="/catering/buffet">buffet catering</Link>. Unsure? Send your occasion and headcount — we'll recommend. See all <Link to="/catering">catering services</Link>.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 6: CUISINE DIRECTIONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="The Kitchen"
            title="Cuisine Directions"
            subtitle="Italian, Mediterranean, Indonesian fine dining, seafood, steak, vegetarian tasting, Asian fusion, or a fully custom chef menu."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CUISINE_DIRECTIONS.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl border border-[#E8E6E3] p-5 md:p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-[#1A1A1A] mb-1 text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{c.name}</h4>
                <p className="text-xs text-[#4A4745] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: TABLE STYLING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="The Setting"
            title="Table Styling & Villa Setup"
            subtitle="Candles, linen, printed menus, flowers, chargers, glassware, and villa lighting — every detail considered."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TABLE_STYLING.map((item) => (
              <div key={item.label} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-5 md:p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${ACCENT}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] text-sm mb-1">{item.label}</h4>
                  <p className="text-xs text-[#4A4745] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8: WINE AND COCKTAIL PAIRING ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="The Pairing"
            title="Menu Directions & Wine Pairing"
            subtitle="Pair each course with wine, cocktails, mocktails, or non-alcoholic pairing selected by our team."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {WINE_PAIRINGS.map((wp) => (
              <div key={wp.label} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[#E8E6E3]">
                <wp.icon className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <p className="font-medium text-sm text-[#1A1A1A]">{wp.label}</p>
                  <p className="font-semibold text-sm" style={{ color: ACCENT }}>{wp.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-5 md:p-6">
            <p className="text-sm text-[#4A4745] leading-relaxed">
              For a deeper fine-dining format, explore <Link to="/fine-dining">private fine dining</Link> and our <Link to="/fine-dining/tasting-menu">tasting menus</Link>. Start the evening with a <Link to="/catering/grazing-tables">grazing table welcome</Link> for arrival drinks.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ PACKAGES + PRICING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Packages"
            title="Plated Dinner Packages & Prices"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {PLATED_PACKAGES.map((pkg) => (
              <CateringPackageCard key={pkg.title} {...pkg} accent={ACCENT} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-[#4A4745]/80">
              Prices shown ++ (11% government tax + 10% service charge added):{' '}
              <AllInPrice price={800000} className="inline" /> ·{' '}
              <AllInPrice price={1000000} className="inline" /> ·{' '}
              <AllInPrice price={1300000} className="inline" />
            </p>
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={800000} minGuests={7} maxGuests={60} defaultGuests={10} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={1000000} minGuests={5} maxGuests={60} defaultGuests={10} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={1300000} minGuests={4} maxGuests={60} defaultGuests={10} accent={ACCENT} />
          </div>
        </div>
      </section>

      {/* ═══════ WHAT'S INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Inclusions"
            title="What's Included"
            subtitle="Every plated dinner includes the team, equipment, and service required for a restaurant-quality experience at your villa."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ GROUP SIZE GUIDE + MINIMUM SPEND ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Investment"
            title="Group Size Guide & Minimum Spend"
            subtitle="Prices shown ++ before 11% government tax + 10% service charge. Final quote confirmed before deposit."
          />
          <div className="max-w-3xl mx-auto mb-10">
            <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
                <h3 className="font-medium text-[#1A1A1A]">Minimum booking: 5 guests</h3>
              </div>
              <p className="text-sm text-[#4A4745] mb-4">
                Plated service starts at five guests — there is no minimum spend. Your price is simply the per-person menu rate multiplied by your group size, which covers chef travel, prep time, equipment and base staffing. Here are worked examples (subtotals before tax and service):
              </p>
              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-white rounded-xl border border-[#E8E6E3] p-4 text-center">
                  <p className="text-[#4A4745] mb-1">6 guests × 3-Course</p>
                  <p className="font-semibold" style={{ color: ACCENT }}>IDR 4.8M++</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E8E6E3] p-4 text-center">
                  <p className="text-[#4A4745] mb-1">5 guests × 4-Course</p>
                  <p className="font-semibold" style={{ color: ACCENT }}>IDR 5M++</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E8E6E3] p-4 text-center">
                  <p className="text-[#4A4745] mb-1">4 guests × 5-Course</p>
                  <p className="font-semibold" style={{ color: ACCENT }}>IDR 5.2M++</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block overflow-x-auto bg-white rounded-2xl border border-[#E8E6E3] p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">Guests</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">3-Course</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">4-Course</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">5-Course Premium</th>
                </tr>
              </thead>
              <tbody>
                {GROUP_TOTALS.map((row) => (
                  <tr key={row.guests} className="border-b border-[#E8E6E3] even:bg-[#FAFAF8] last:border-b-0">
                    <td className="py-5 font-semibold tabular-nums">{row.guests}</td>
                    <td className="py-5 font-semibold tabular-nums" style={{ color: ACCENT }}>{row.course3}</td>
                    <td className="py-5 font-semibold tabular-nums" style={{ color: ACCENT }}>{row.course4}</td>
                    <td className="py-5 font-semibold tabular-nums" style={{ color: ACCENT }}>{row.course5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4">
            {GROUP_TOTALS.map((row) => (
              <div key={row.guests} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <p className="font-semibold text-base mb-3 tabular-nums">{row.guests} guests</p>
                <div className="divide-y divide-[#E8E6E3]">
                  <div className="flex justify-between py-2 text-sm"><span className="text-[#4A4745] text-xs uppercase tracking-wide">3-Course</span><span className="font-semibold tabular-nums" style={{ color: ACCENT }}>{row.course3}</span></div>
                  <div className="flex justify-between py-2 text-sm"><span className="text-[#4A4745] text-xs uppercase tracking-wide">4-Course</span><span className="font-semibold tabular-nums" style={{ color: ACCENT }}>{row.course4}</span></div>
                  <div className="flex justify-between py-2 text-sm"><span className="text-[#4A4745] text-xs uppercase tracking-wide">5-Course</span><span className="font-semibold tabular-nums" style={{ color: ACCENT }}>{row.course5}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PHOTO GALLERY ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Gallery"
            title="Plated Dinner Gallery"
            subtitle="Real plated course presentations from villa dinners across Bali."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PLATED_GALLERY.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <OptimizedImage src={src} alt={`Plated dinner setup ${i + 1} at Bali villa`} className="w-full h-full object-cover" loading="lazy" />
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

      {/* ═══════ SECTION 9: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Plated Catering Bali FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={3} />
        </div>
      </section>

      {/* ═══════ SECTION 10: CTA + BOOKING FORM ═══════ */}
      <section id="book" className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Book Now"
            title="Plan Your Plated Dinner"
            subtitle="Plan your private plated dinner with date, guest count, cuisine, dietary needs, and villa location."
          />
          <BookingFormCatering
            title="Plan My Plated Dinner"
            subtitle="We will confirm availability, menu direction, and pricing within the hour."
            fields={[
              { name: 'package', label: 'Plated Package', type: 'select', icon: Utensils, required: true },
              { name: 'date', label: 'Event Date', type: 'date', icon: Calendar, required: true },
              { name: 'time', label: 'Event Time', type: 'text', icon: Clock, placeholder: 'e.g. 7:00 PM' },
              { name: 'area', label: 'Villa Location', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'villa', label: 'Villa Name', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 25', required: true },
              { name: 'cuisine', label: 'Preferred Cuisine', type: 'text', icon: ChefHat, placeholder: 'Italian, seafood, vegetarian...' },
              { name: 'dietary', label: 'Dietary Needs', type: 'textarea', placeholder: 'Allergies, restrictions, preferences...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['3-Course Plated', '4-Course Plated', '5-Course Premium']}
            accent={ACCENT}
          />
        </div>
      </section>

      <PressStrip />

      <StaffingInfo />
      <BookingProcess />

      <CateringDiscoverySection page="plated" />

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-finedining-bali-luna-plating.webp"
            alt="Plated dinner course ready to serve at Bali villa"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for a Private Plated Dinner in Bali?
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Send your date, villa, guest count, and preferred course tier. We will confirm availability and pricing by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
              style={{ background: ACCENT }}
            >
              <Calendar className="w-4 h-4" /> Plan My Plated Dinner
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-plated-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Phone className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'BBQ Catering', href: '/catering/bbq-catering', desc: 'Live-fire grilling at your villa.' },
              { label: 'buffet catering', href: '/catering/buffet', desc: 'Large-group buffet service.' },
              { label: 'grazing table welcome', href: '/catering/grazing-tables', desc: 'Styled spreads for events.' },
              { label: 'Drop-Off Catering', href: '/catering/drop-off-catering', desc: 'Fresh food delivered to your villa.' },
              { label: 'Villa Chef', href: '/villa-chef', desc: 'Daily chef for your villa stay.' },
              { label: 'private fine dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus.' },
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
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="catering-plated"
        serviceName="plated dinner catering in Bali"
        intent="plated dinner packages and pricing"
      />
    </div>
  )
}