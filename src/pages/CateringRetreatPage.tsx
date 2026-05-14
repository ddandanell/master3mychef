import { useEffect, useRef } from 'react'
import {
  MessageCircle, Check, Phone, Calendar, Users, MapPin,
  Leaf, ChefHat, ShieldCheck, Clock, Sun, Sparkles,
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
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20a%20retreat%20catering%20quote.'
const SITE = 'https://mychef.id'

const RETREAT_PACKAGES = [
  {
    title: 'Yoga Retreat Catering',
    price: 'IDR 400,000/person/day',
    priceNum: 400000,
    people: '10 to 40 people',
    format: ['Plant-forward meals', 'Ayurvedic options', 'Gluten-free', 'No refined sugar', 'Herbal teas'],
    bestFor: 'Yoga retreats, wellness centers, meditation groups, holistic retreats',
  },
  {
    title: 'Wellness Retreat Catering',
    price: 'IDR 450,000/person/day',
    priceNum: 450000,
    people: '10 to 60 people',
    format: ['Balanced macros', 'Anti-inflammatory', 'Organic where possible', 'Cold-pressed juices', 'Superfood options'],
    bestFor: 'Detox retreats, spa resorts, health-focused groups, fitness retreats',
  },
  {
    title: 'Corporate Retreat Catering',
    price: 'IDR 500,000/person/day',
    priceNum: 500000,
    people: '15 to 100 people',
    format: ['Full board (3 meals)', 'Coffee breaks', 'Working lunch', 'BBQ night', 'Flexible timing'],
    bestFor: 'Team offsites, leadership retreats, company getaways, strategy sessions',
  },
]

const INCLUDED = [
  'Full board (breakfast, lunch, dinner)',
  'Plant-forward & wellness menus',
  'Gluten-free & allergy accommodation',
  'Organic ingredients where possible',
  'Herbal teas & infusions',
  'Flexible meal timing',
  'Dedicated retreat chef',
  'Full kitchen cleanup',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Retreat details', desc: 'Dates, venue, group size, program.', icon: Sun },
  { step: '02', title: 'Menu design', desc: 'Wellness-focused, dietary-aware.', icon: Leaf },
  { step: '03', title: 'Chef assignment', desc: 'Dedicated chef for your retreat.', icon: ChefHat },
  { step: '04', title: 'Daily service', desc: 'All meals, snacks, beverages.', icon: Clock },
  { step: '05', title: 'Flexibility', desc: 'Timing adapts to your schedule.', icon: Sparkles },
  { step: '06', title: 'Full cleanup', desc: 'Kitchen left spotless daily.', icon: ShieldCheck },
]

const FAQS = [
  { q: 'What is retreat catering?', a: 'Retreat catering provides full-board meals for multi-day retreats. We assign a dedicated chef who understands wellness-focused cuisine and adapts to your retreat schedule.' },
  { q: 'Can you accommodate strict dietary requirements?', a: 'Yes. We specialize in plant-forward, gluten-free, dairy-free, and allergy-aware menus. Our chefs are trained in wellness cuisine.' },
  { q: 'Do you provide breakfast, lunch, and dinner?', a: 'Yes. Full board includes all three meals plus snacks and herbal teas. We can also add cold-pressed juices and superfood options.' },
  { q: 'Can you work with retreat schedules?', a: 'Absolutely. We adapt meal times to your yoga schedule, meditation sessions, and workshop timings. Early breakfast and late dinner are no problem.' },
  { q: 'Do you use organic ingredients?', a: 'We use organic ingredients wherever possible and source from local Balinese farmers. All produce is fresh and seasonal.' },
  { q: 'How far in advance should we book?', a: 'For retreat catering, 2-4 weeks is ideal. This allows us to assign the right chef and plan menus that align with your retreat theme.' },
  { q: 'Can you cater at remote retreat centers?', a: 'Yes. We cater at retreat centers across Bali including Ubud, Sidemen, and Munduk. Remote locations may have a modest travel fee.' },
  { q: 'Do you provide juices and smoothies?', a: 'Yes. Cold-pressed juices, smoothies, and herbal tonics can be added to any retreat package.' },
  { q: 'What about coffee?', a: 'We provide herbal teas as standard. Specialty coffee can be arranged if your group prefers it.' },
  { q: 'Can you do silent retreat catering?', a: 'Yes. Our team is trained to work quietly and respectfully in silent retreat environments. Service is discreet and unobtrusive.' },
]

export default function CateringRetreatPage() {
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
        title="Retreat Catering Bali | Multi-Day Group Meals — myCHEF"
        description="Multi-day retreat catering in Bali — breakfast, lunch, dinner. Plant-forward, gluten-free, allergy-aware. Yoga retreats, wellness centers, corporate offsites."
        canonical={`${SITE}/catering/retreat-catering`}
        ogImage={`${SITE}/generated/hub-catering.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Retreat Catering Bali', 'Multi-day wellness-focused catering for yoga and corporate retreats in Bali. Plant-forward, dietary accommodation.', `${SITE}/catering/retreat-catering`, 'IDR'),
          offerSchema('Yoga Retreat Catering', 400000, 'IDR', `${SITE}/catering/retreat-catering`),
          offerSchema('Wellness Retreat Catering', 450000, 'IDR', `${SITE}/catering/retreat-catering`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 156),
          breadcrumbSchema('Retreat Catering', `${SITE}/catering/retreat-catering`, 'Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Retreat Catering' }]} />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/hub-catering.webp"
            alt="Healthy retreat catering in Bali"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Retreat Catering
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Retreat Catering in Bali<br />
            <span className="italic">Nourishment for Body & Mind</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Multi-day catering for yoga retreats, wellness centers, and corporate offsites. Plant-forward menus, dietary accommodation, and flexible timing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all">
              <Leaf className="w-4 h-4" /> Book retreat catering
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp quote
            </a>
          </div>
          <p className="text-white/60 text-sm">From IDR 400,000/person/day · Plant-forward · Full board</p>
        </div>
      </section>

      <TrustStrip />

      {/* PACKAGES */}
      <section className="retreat-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Packages" title="Retreat Catering Packages" subtitle="Wellness-focused catering designed for multi-day retreats." />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {RETREAT_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="retreat-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold text-lg mb-1">{pkg.price}</p>
                <p className="text-sm text-[#4A4745] mb-4">{pkg.people}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.format.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#6B8E5A] flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#4A4745]/70 mb-4">Best for: {pkg.bestFor}</p>
                <a href="/book" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#6B8E5A] text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#5a7a4d] transition-all">
                  <Calendar className="w-4 h-4" /> Book this package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Inclusions" title="What's Included" />
          <div className="grid sm:grid-cols-2 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-[#FAFAF8] rounded-xl">
                <Check className="w-5 h-5 text-[#6B8E5A] flex-shrink-0" />
                <span className="text-sm text-[#1A1A1A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader eyebrow="Process" title="How Retreat Catering Works" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[#6B8E5A]" />
                  </div>
                  <span className="text-xs text-[#6B8E5A] font-semibold tracking-wider uppercase">Step {step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                <p className="text-sm text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Book Now" title="Book Retreat Catering" />
          <BookingFormCatering
            title="Book Retreat Catering"
            subtitle="Tell us about your retreat, group, and dietary needs. We will design a custom menu and confirm chef availability."
            fields={[
              { name: 'package', label: 'Package', type: 'select', icon: Leaf, required: true },
              { name: 'start_date', label: 'Retreat Start Date', type: 'date', icon: Calendar, required: true },
              { name: 'end_date', label: 'Retreat End Date', type: 'date', icon: Calendar, required: true },
              { name: 'area', label: 'Retreat Venue Area', type: 'text', icon: MapPin, placeholder: 'Ubud, Sidemen, Canggu...', required: true },
              { name: 'venue', label: 'Venue Name', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 20', required: true },
              { name: 'dietary', label: 'Dietary Requirements', type: 'textarea', placeholder: 'Plant-based, gluten-free, allergies...' },
              { name: 'name', label: 'Organizer Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text', required: true },
            ]}
            packageOptions={['Yoga Retreat Catering', 'Wellness Retreat Catering', 'Corporate Retreat Catering']}
            accent="#6B8E5A"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialBlock
        testimonials={[
          { name: 'Yoga Retreat Center', location: 'Ubud', quote: 'We have worked with myCHEF for 3 years. Their retreat catering is exceptional — plant-based, delicious, and always on time. Our guests rave about the food.', rating: 5 },
          { name: 'Wellness Resort', location: 'Sidemen', quote: 'Multi-day wellness retreat for 25 guests. The chef created beautiful Ayurvedic meals that aligned perfectly with our program. Highly professional team.', rating: 5 },
          { name: 'Corporate Offsite', location: 'Canggu', quote: '5-day team offsite with 40 people. Breakfast, lunch, dinner, and snacks. The team adapted to our changing schedule without complaint. Food was outstanding.', rating: 5 },
        ]}
        title="What Retreat Organizers Say"
        subtitle="Real reviews from retreat centers and wellness resorts across Bali."
      />

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Retreat Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/sol-produce.webp" alt="Retreat catering in Bali" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nourish Your Retreat
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Share your retreat details and we will design a custom wellness menu and confirm chef availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all">
              <Leaf className="w-4 h-4" /> Book retreat catering
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
