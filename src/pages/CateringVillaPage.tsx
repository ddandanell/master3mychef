import { useEffect, useRef } from 'react'
import {
  MessageCircle, Check, Phone, Calendar, Users, MapPin,
  Utensils, Home, ChefHat, ShieldCheck, Clock, Sparkles,
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

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20a%20villa%20catering%20quote.'
const SITE = 'https://mychef.id'

const VILLA_PACKAGES = [
  {
    title: 'Villa Lunch',
    price: 'IDR 450,000/person',
    priceNum: 450000,
    people: '8 to 40 people',
    format: ['2 starters', '2 mains', '2 sides', 'Dessert', 'Soft drinks'],
    bestFor: 'Family lunches, poolside dining, relaxed villa days',
  },
  {
    title: 'Villa Dinner',
    price: 'IDR 650,000/person',
    priceNum: 650000,
    people: '8 to 60 people',
    format: ['3 starters', '2 mains', '3 sides', 'Dessert', 'Coffee & tea'],
    bestFor: 'Birthdays, reunions, special occasions, group dinners',
  },
  {
    title: 'Multi-Day Villa Catering',
    price: 'IDR 550,000/person/day',
    priceNum: 550000,
    people: '8 to 200 people',
    format: ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Full service team'],
    bestFor: 'Wedding groups, retreats, extended family stays, corporate offsites',
  },
]

const INCLUDED = [
  'Private chef on-site',
  'Full service team (waiters)',
  'Grocery shopping at cost',
  'Full kitchen setup',
  'Table setting & styling',
  'Full cleanup after service',
  'Menu customization',
  'Dietary accommodation',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Share villa details', desc: 'Location, kitchen, guest count.', icon: Home },
  { step: '02', title: 'Choose meals', desc: 'Lunch, dinner, or multi-day.', icon: Utensils },
  { step: '03', title: 'Confirm menu', desc: 'Customize to your group.', icon: ChefHat },
  { step: '04', title: 'Chef arrives', desc: 'With groceries and team.', icon: Clock },
  { step: '05', title: 'We cook & serve', desc: 'Everything handled.', icon: Sparkles },
  { step: '06', title: 'Full cleanup', desc: 'Kitchen left spotless.', icon: ShieldCheck },
]

const FAQS = [
  { q: 'What is villa catering?', a: 'Villa catering means our chef and service team come to your villa, cook in your kitchen, and serve meals to your group. We handle everything from groceries to cleanup.' },
  { q: 'How many guests can you cater for?', a: 'We cater villa groups from 8 to 200 guests. For groups over 60, we bring additional chefs and service staff.' },
  { q: 'Do you need a full kitchen?', a: 'A working kitchen helps, but we can work with basic setups. Let us know your villa kitchen situation and we will plan accordingly.' },
  { q: 'Can you do multi-day catering?', a: 'Yes. Multi-day villa catering is one of our specialties. We assign a dedicated chef who learns your preferences and handles all meals during your stay.' },
  { q: 'Is grocery shopping included?', a: 'Yes. We shop for fresh ingredients and bill groceries at cost — no markup. You see every receipt.' },
  { q: 'Do you handle dietary restrictions?', a: 'Absolutely. Vegetarian, vegan, gluten-free, halal, allergies — we accommodate all dietary needs at no extra charge.' },
  { q: 'What areas in Bali do you serve?', a: 'All major areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding regions.' },
  { q: 'How far in advance should I book?', a: 'For villa dinners, 3-7 days is ideal. For multi-day catering, 2-4 weeks helps us assign the best chef for your stay.' },
  { q: 'Do you provide tableware?', a: 'We bring service equipment. For tableware, most villas have settings. We can arrange rentals if needed.' },
  { q: 'What happens after the meal?', a: 'Our team does full cleanup — kitchen, dishes, surfaces. You relax. We leave the villa as we found it.' },
]

export default function CateringVillaPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.villa-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.villa-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Villa Catering Bali | Group Catering at Your Villa — myCHEF"
        description="Hire villa catering in Bali for groups of 8–200. Lunches, dinners, multi-day catering, plated or buffet. Chef and team come to your villa. Groceries at cost."
        canonical={`${SITE}/catering/villa-catering`}
        ogImage={`${SITE}/generated/hub-catering.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Villa Catering Bali', 'Private chef and service team catering at your Bali villa. Groups of 8-200. Multi-day available.', `${SITE}/catering/villa-catering`, 'IDR'),
          offerSchema('Villa Lunch', 450000, 'IDR', `${SITE}/catering/villa-catering`),
          offerSchema('Villa Dinner', 650000, 'IDR', `${SITE}/catering/villa-catering`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 312),
          breadcrumbSchema('Villa Catering', `${SITE}/catering/villa-catering`, 'Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Villa Catering' }]} />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/hub-catering.webp"
            alt="Private chef preparing a villa dinner in Bali"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#6B8E5A] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Villa Catering
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Villa Catering in Bali<br />
            <span className="italic">Chef & Team at Your Villa</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Private chef and service team come to your villa. We shop, cook, serve, and clean up. For groups of 8 to 200 — lunch, dinner, or multi-day stays.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all">
              <ChefHat className="w-4 h-4" /> Book villa catering
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp quote
            </a>
          </div>
          <p className="text-white/60 text-sm">From IDR 450,000/person · Chef + team included · Groceries at cost</p>
        </div>
      </section>

      <TrustStrip />

      {/* PACKAGES */}
      <section className="villa-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Packages" title="Villa Catering Packages" subtitle="Choose the format that fits your group and occasion." />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {VILLA_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="villa-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 flex flex-col">
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
          <SectionHeader eyebrow="Process" title="How Villa Catering Works" />
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
          <SectionHeader eyebrow="Book Now" title="Book Villa Catering" />
          <BookingFormCatering
            title="Book Villa Catering"
            subtitle="Tell us about your villa, group, and preferred meals. We will confirm availability and chef assignment by WhatsApp."
            fields={[
              { name: 'package', label: 'Package', type: 'select', icon: Utensils, required: true },
              { name: 'date', label: 'Event Date', type: 'date', icon: Calendar, required: true },
              { name: 'area', label: 'Villa Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'villa', label: 'Villa Name', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 12', required: true },
              { name: 'meals', label: 'Meals Needed', type: 'text', icon: ChefHat, placeholder: 'e.g. Lunch + Dinner' },
              { name: 'dietary', label: 'Dietary Notes', type: 'textarea', placeholder: 'Allergies, restrictions...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['Villa Lunch', 'Villa Dinner', 'Multi-Day Villa Catering']}
            accent="#6B8E5A"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialBlock
        testimonials={[
          { name: 'The Richardson Family', location: 'Canggu Villa', quote: 'We had the multi-day villa catering for 15 people over 4 days. The chef was incredible — every meal was different and delicious. The team left the kitchen spotless each night.', rating: 5 },
          { name: 'Mark & Lisa', location: 'Uluwatu Villa', quote: 'Villa dinner for 20 guests. The chef handled everything — from shopping to cleanup. We just sat by the pool and enjoyed. Best decision of our trip.', rating: 5 },
          { name: 'Corporate Group', location: 'Seminyak Villa', quote: 'Multi-day catering for our company offsite. Breakfast, lunch, and dinner for 25 people. Professional, punctual, and the food was outstanding.', rating: 5 },
        ]}
        title="What Villa Catering Guests Say"
        subtitle="Real reviews from villa groups across Bali."
      />

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Villa Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/hub-catering.webp" alt="Villa catering setup" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for Villa Catering?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us your villa, group size, and dates. We will confirm chef availability and send a custom quote within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all">
              <ChefHat className="w-4 h-4" /> Book villa catering
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
