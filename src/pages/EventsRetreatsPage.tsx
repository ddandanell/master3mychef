import { useEffect, useRef } from 'react'
import {
  MessageCircle, Calendar, Leaf, Heart, Sun,
  Coffee,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema, serviceSchema, offerSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20Sofia,%20I%20would%20like%20a%20retreat%20catering%20quote.'
const SITE = 'https://mychef.id'

const FORMATS = [
  {
    title: 'Wellness Retreat',
    price: <AllInPrice price={1500000} suffix="/person/day" />,
    guestRange: '10–30 guests',
    description: 'Plant-forward, anti-inflammatory, detox-focused. 3 meals + 2 snacks daily. On-site chef.',
    features: ['3 plant-forward meals', '2 healthy snacks', 'Anti-inflammatory focus', 'On-site chef', 'Daily fresh sourcing', 'Welcome ceremony'],
  },
  {
    title: 'Yoga Retreat',
    price: <AllInPrice price={1500000} suffix="/person/day" />,
    guestRange: '10–30 guests',
    description: 'Fully vegan, sattvic meals. 3 meals + 2 snacks + mid-morning and evening tea ritual.',
    features: ['3 sattvic vegan meals', '2 snacks + tea ritual', 'Fully vegan', 'On-site chef', 'Welcome water blessing', 'Recipe book option'],
    highlighted: true,
  },
  {
    title: 'Corporate-Style Retreat',
    price: <AllInPrice price={2500000} suffix="/person/day" />,
    guestRange: '10–50 guests',
    description: 'Mixed dietary management, team-building activities, retreat coordinator included.',
    features: ['3 meals + 2 snacks/day', 'Mixed dietary management', 'Team-building included', 'Retreat coordinator', 'Tax invoice', 'AV support'],
  },
]

const DAILY_SCHEDULE = [
  { time: '07:00', meal: 'Morning Tea + Light Snack', type: 'Pre-yoga' },
  { time: '08:30', meal: 'Breakfast', type: 'Plant-forward / Vegan' },
  { time: '11:00', meal: 'Mid-Morning Snack', type: 'Smoothie + Fruit' },
  { time: '13:00', meal: 'Lunch', type: 'Balanced / Sattvic' },
  { time: '16:00', meal: 'Afternoon Snack', type: 'Nuts + Herbal Tea' },
  { time: '19:00', meal: 'Dinner', type: 'Light / Digestive' },
]

const DIETARY = ['Plant-Forward', 'Anti-Inflammatory', 'Vegan', 'Sattvic', 'Paleo', 'Keto', 'Gluten-Free', 'Dairy-Free']

const ADDONS = [
  { icon: Coffee, title: 'Cooking Class', price: '+IDR 1.5M – 2.5M/pp' },
  { icon: Leaf, title: 'Foraging Walk', price: '+IDR 1M/pp' },
  { icon: Heart, title: 'Dietary Consultation', price: '+IDR 1.5M/session' },
  { icon: Sun, title: 'Recipe Book', price: '+IDR 250K/participant' },
]

const FAQS = [
  { q: 'Are you a plant-based operator?', a: 'We are not 100% vegan but we have a dedicated plant-forward menu line. All yoga retreat tiers are fully vegan by default.' },
  { q: 'Do you handle multiple dietary types simultaneously?', a: 'Yes — common at corporate retreats. We pre-intake dietary needs 14 days before, design parallel menus, label every dish.' },
  { q: 'Can you cook on-site at the retreat villa?', a: 'Yes — daily on-site chef. We work in your villa kitchen or bring a satellite kitchen if needed.' },
  { q: 'What about food safety for multi-day events?', a: 'Hygiene-certified team. Daily fresh sourcing (no leftover day-2). HACCP-compliant cold chain.' },
  { q: 'Can the chef join the retreat ceremony?', a: 'Yes — our chefs are often part of the experience. Many retreat hosts include the chef in the welcome ceremony.' },
  { q: 'Can you cater off-island?', a: 'Currently not — refer to specialist outer-island operators. Bali island-wide only.' },
  { q: 'Pricing for kids / accompanying family?', a: 'Kids 3–12 charged at 60% of adult rate. Under 3 free.' },
  { q: 'Cancellation for multi-day events?', a: '30+ days before: 50% refund. 14–30 days: 25%. Under 14 days: no refund but credit toward future retreat.' },
]

export default function EventsRetreatsPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.retreat-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.retreat-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Wellness & Yoga Retreat Catering Bali | myCHEF"
        description="Multi-day retreat catering for yoga, surf, wellness, and corporate retreats in Bali. From IDR 1.5M/pp/day. Plant-forward, GF, anti-inflammatory specialists."
        canonical={`${SITE}/events/retreats`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Retreat Catering Bali', 'Multi-day retreat catering for yoga, wellness, and corporate retreats in Bali. Plant-forward, vegan, and dietary-specialist menus.', `${SITE}/events/retreats`, 'IDR'),
          offerSchema('Wellness Retreat', 1500000, 'IDR', `${SITE}/events/retreats`),
          offerSchema('Yoga Retreat', 1500000, 'IDR', `${SITE}/events/retreats`),
          offerSchema('Corporate-Style Retreat', 2500000, 'IDR', `${SITE}/events/retreats`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Retreats', `${SITE}/events/retreats`, 'Events', `${SITE}/events`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Retreats' }]} />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/aura-corporate.webp" alt="Wellness retreat meal in Bali" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Retreat Catering</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Retreat Catering<br /><span className="italic">Wellness, Yoga, Surf</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Multi-day catering for retreats. Plant-forward, anti-inflammatory, gluten-free, vegan specialists. From IDR 1.5M/pp/day — 3 meals + 2 snacks daily.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all">
              <Calendar className="w-4 h-4" /> Request Retreat Quote
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
        </div>
      </section>

      <TrustStrip dark />

      {/* FORMATS */}
      <section className="py-20 md:py-28 bg-white retreat-content">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Packages" title="Retreat Packages" subtitle="Three tiers for different retreat styles and dietary philosophies." />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMATS.map((f) => <EventFormatCard key={f.title} {...f} accent="#C5A028" />)}
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <GroupTotalCalculator pricePerPerson={1500000} minGuests={10} maxGuests={30} defaultGuests={15} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={2500000} minGuests={10} maxGuests={50} defaultGuests={20} accent="#C5A028" />
          </div>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Schedule" title="Daily Meal Schedule" subtitle="A typical retreat day — 3 meals + 2 snacks + tea rituals." />
          <div className="bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden">
            {DAILY_SCHEDULE.map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 border-t border-[#E8E6E3] first:border-t-0">
                <span className="text-[#C5A028] font-semibold text-sm w-16 shrink-0">{item.time}</span>
                <span className="text-[#1A1A1A] text-sm font-medium">{item.meal}</span>
                <span className="text-[#4A4745] text-xs ml-auto">{item.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIETARY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeader eyebrow="Dietary" title="Specialist Diets" subtitle="We design menus for every dietary philosophy and restriction." />
          <div className="flex flex-wrap justify-center gap-3">
            {DIETARY.map((d) => (
              <span key={d} className="px-5 py-3 bg-[#FAFAF8] border border-[#E8E6E3] rounded-full text-sm font-medium text-[#1A1A1A]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Extras" title="Retreat Add-Ons" subtitle="Enhance the retreat experience with these activities." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADDONS.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 flex items-start gap-4">
                <div className="bg-[#C5A028]/10 rounded-xl p-2.5 shrink-0"><a.icon className="w-5 h-5 text-[#C5A028]" /></div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{a.title}</h3>
                  <p className="text-[#C5A028] font-semibold text-sm">{a.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock title="What Retreat Hosts Say" testimonials={[
        { name: 'Yoga Teacher Sarah', location: 'Ubud Yoga Retreat', quote: 'The sattvic meals were beautiful — our guests said it was the best retreat food they have ever had.', rating: 5 },
        { name: 'Wellness Coach Mia', location: 'Canggu Wellness Retreat', quote: 'Plant-forward, anti-inflammatory, and absolutely delicious. The chef understood our philosophy perfectly.', rating: 5 },
        { name: 'Corporate Wellness Lead', location: 'Seminyak Corporate Retreat', quote: 'Handled 30 people with 5 different diets. Labeled, delicious, on-time. Professional throughout.', rating: 5 },
      ]} />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Retreat FAQ" subtitle="Operations-focused answers for retreat organisers." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Request Retreat Quote"
            subtitle="Tell us about your retreat and we will design a custom catering plan."
            packageOptions={['Wellness Retreat', 'Yoga Retreat', 'Corporate-Style Retreat']}
            fields={[
              { name: 'package', label: 'Retreat Type', type: 'select', required: true },
              { name: 'dates', label: 'Retreat Dates', type: 'text', placeholder: 'e.g. 10-15 June 2026', required: true },
              { name: 'guests', label: 'Participants', type: 'number', placeholder: 'e.g. 20', required: true },
              { name: 'area', label: 'Retreat Location', type: 'text', required: true },
              { name: 'dietary', label: 'Dietary Breakdown', type: 'textarea', placeholder: 'e.g. 80% vegan, 5 gluten-free, 3 nut allergy...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text', required: true },
            ]}
            whatsappName="Sofia"
            accent="#C5A028"
          />
        </div>
      </section>

      <PressStrip />

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Fuel Your Retreat?</h2>
          <p className="text-white/70 text-lg mb-8">Send your dates, headcount, and dietary needs. We will design a custom menu plan.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all"><Calendar className="w-4 h-4" /> Request Retreat Quote</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp Sofia</a>
          </div>
        </div>
      </section>

      <TaxFooter />
    </div>
  )
}
