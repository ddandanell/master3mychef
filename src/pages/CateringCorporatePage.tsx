import { useEffect, useRef } from 'react'
import {
  MessageCircle, Check, Phone, Calendar, Users, MapPin,
  Utensils, Briefcase, ChefHat, ShieldCheck, Clock, FileText,
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

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20a%20corporate%20catering%20quote.'
const SITE = 'https://mychef.id'

const CORP_PACKAGES = [
  {
    title: 'Board Dinner',
    price: 'IDR 850,000/person',
    priceNum: 850000,
    people: '6 to 20 people',
    format: ['Canapés', '3-course plated', 'Wine pairing', 'Dedicated service', 'Full cleanup'],
    bestFor: 'Executive dinners, investor meetings, board retreats, C-suite entertaining',
  },
  {
    title: 'Team Offsite Catering',
    price: 'IDR 550,000/person',
    priceNum: 550000,
    people: '15 to 80 people',
    format: ['Buffet or plated', '2-3 menu options', 'Dietary accommodation', 'Service staff', 'Invoiced'],
    bestFor: 'Company offsites, team building, strategy retreats, department dinners',
  },
  {
    title: 'Conference Catering',
    price: 'IDR 450,000/person',
    priceNum: 450000,
    people: '30 to 200 people',
    format: ['Coffee breaks', 'Working lunch', 'Buffet dinner', 'All-day service', 'Setup & breakdown'],
    bestFor: 'Conferences, seminars, product launches, corporate events',
  },
]

const INCLUDED = [
  'Dedicated event manager',
  'Professional chef team',
  'Service staff (1 per 10 guests)',
  'Full grocery shopping at cost',
  'Menu customization',
  'Dietary accommodation',
  'Full setup & cleanup',
  'Tax invoice provided',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Event brief', desc: 'Share dates, venue, headcount, budget.', icon: FileText },
  { step: '02', title: 'Menu proposal', desc: 'Custom menu tailored to your event.', icon: Utensils },
  { step: '03', title: 'Contract & invoice', desc: 'Formal quote with payment terms.', icon: Briefcase },
  { step: '04', title: 'Pre-event prep', desc: 'We plan logistics and staffing.', icon: Clock },
  { step: '05', title: 'Event day', desc: 'Team arrives, executes, serves.', icon: ChefHat },
  { step: '06', title: 'Post-event', desc: 'Cleanup, final invoice, feedback.', icon: ShieldCheck },
]

const FAQS = [
  { q: 'Do you provide tax invoices?', a: 'Yes. We provide full tax invoices for all corporate catering. This includes detailed breakdowns of food costs, service charges, and any applicable taxes.' },
  { q: 'Can you handle large groups?', a: 'Absolutely. We regularly cater corporate events for 50-200 guests. For very large events, we bring additional chefs and service staff to maintain quality.' },
  { q: 'Do you accommodate dietary restrictions?', a: 'Yes. We handle vegetarian, vegan, gluten-free, halal, and allergy requirements. Just let us know in advance and we will plan alternative dishes.' },
  { q: 'What is the booking process?', a: 'Share your event details, we send a custom proposal within 24 hours, you approve and pay a 50% deposit, and we handle everything from there.' },
  { q: 'Can you cater at hotels and conference venues?', a: 'Yes. We work with most venues in Bali. We coordinate with venue catering managers and follow their kitchen and service protocols.' },
  { q: 'Do you provide staff uniforms?', a: 'Yes. All our service staff wear professional black uniforms. Chef coats are standard for kitchen teams.' },
  { q: 'What payment terms do you offer?', a: '50% deposit to confirm, balance due 7 days before the event. For regular corporate clients, we can arrange monthly billing.' },
  { q: 'Can you do multi-day offsite catering?', a: 'Yes. Multi-day offsites are a specialty. We assign a dedicated team that stays with your group for the duration.' },
  { q: 'Do you provide rental equipment?', a: 'We can arrange tables, chairs, linens, and AV equipment through our partners. Let us know what you need.' },
  { q: 'What areas in Bali do you cover?', a: 'All major areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur. We also cater at Nusa Lembongan and Gili Islands for multi-day events.' },
]

export default function CateringCorporatePage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.corp-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.corp-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Corporate Catering Bali | Offsites & Conferences — myCHEF"
        description="Corporate catering in Bali for offsites, board dinners, conferences and team retreats — invoiced, scalable, on time. Groups of 15 to 200."
        canonical={`${SITE}/catering/corporate-catering`}
        ogImage={`${SITE}/generated/corp-hero.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Corporate Catering Bali', 'Professional corporate catering for offsites, conferences, and board dinners in Bali. Invoiced, scalable service.', `${SITE}/catering/corporate-catering`, 'IDR'),
          offerSchema('Board Dinner', 850000, 'IDR', `${SITE}/catering/corporate-catering`),
          offerSchema('Team Offsite Catering', 550000, 'IDR', `${SITE}/catering/corporate-catering`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 89),
          breadcrumbSchema('Corporate Catering', `${SITE}/catering/corporate-catering`, 'Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Corporate Catering' }]} />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/corp-hero.webp"
            alt="Corporate dinner setup in Bali"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Corporate Catering
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Corporate Catering in Bali<br />
            <span className="italic">Professional. Invoiced. On Time.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Board dinners, team offsites, and conference catering across Bali. Dedicated event manager, professional staff, and full tax invoicing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C5F7C] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#234d66] transition-all">
              <Briefcase className="w-4 h-4" /> Request corporate quote
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
          <p className="text-white/60 text-sm">From IDR 450,000/person · Tax invoiced · Dedicated event manager</p>
        </div>
      </section>

      <TrustStrip />

      {/* PACKAGES */}
      <section className="corp-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Packages" title="Corporate Catering Packages" subtitle="Scalable solutions for every type of corporate event." />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {CORP_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="corp-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#2C5F7C] font-semibold text-lg mb-1">{pkg.price}</p>
                <p className="text-sm text-[#4A4745] mb-4">{pkg.people}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.format.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#2C5F7C] flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#4A4745]/70 mb-4">Best for: {pkg.bestFor}</p>
                <a href="/book" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#2C5F7C] text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#234d66] transition-all">
                  <Calendar className="w-4 h-4" /> Request quote
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
                <Check className="w-5 h-5 text-[#2C5F7C] flex-shrink-0" />
                <span className="text-sm text-[#1A1A1A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader eyebrow="Process" title="How Corporate Catering Works" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#2C5F7C]/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[#2C5F7C]" />
                  </div>
                  <span className="text-xs text-[#2C5F7C] font-semibold tracking-wider uppercase">Step {step.step}</span>
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
          <SectionHeader eyebrow="Book Now" title="Request Corporate Catering" />
          <BookingFormCatering
            title="Request Corporate Catering"
            subtitle="Share your event details and we will send a custom proposal within 24 hours."
            fields={[
              { name: 'package', label: 'Package', type: 'select', icon: Briefcase, required: true },
              { name: 'date', label: 'Event Date', type: 'date', icon: Calendar, required: true },
              { name: 'area', label: 'Venue Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Ubud, Nusa Dua...', required: true },
              { name: 'venue', label: 'Venue Name', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 30', required: true },
              { name: 'company', label: 'Company Name', type: 'text', icon: FileText },
              { name: 'dietary', label: 'Dietary Requirements', type: 'textarea', placeholder: 'Vegetarian, halal, allergies...' },
              { name: 'name', label: 'Contact Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text', required: true },
            ]}
            packageOptions={['Board Dinner', 'Team Offsite Catering', 'Conference Catering']}
            accent="#2C5F7C"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialBlock
        testimonials={[
          { name: 'Tech Startup Team', location: 'Canggu Offsite', quote: 'Multi-day catering for 35 people. Breakfast, lunch, and dinner for 3 days. The team was professional, food was excellent, and invoicing was seamless.', rating: 5 },
          { name: 'Investment Firm', location: 'Seminyak Board Dinner', quote: 'Board dinner for 12. The chef created a custom menu that impressed our investors. Service was discreet and professional. Will use again.', rating: 5 },
          { name: 'Conference Organizer', location: 'Nusa Dua Conference', quote: 'Catering for 120 delegates over 2 days. Coffee breaks, working lunches, and gala dinner. Everything ran on time and the food was outstanding.', rating: 5 },
        ]}
        title="What Corporate Clients Say"
        subtitle="Real reviews from corporate events across Bali."
      />

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Corporate Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/corp-gala.webp" alt="Corporate event catering" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Plan Your Corporate Event
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Share your event brief and we will respond with a custom proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C5F7C] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#234d66] transition-all">
              <Briefcase className="w-4 h-4" /> Request quote
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
