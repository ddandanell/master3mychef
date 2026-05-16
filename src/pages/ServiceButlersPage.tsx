import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Users, Star, ShieldCheck, Gem } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  detailedServiceSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_NUMBER = '6282237565997'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi myCHEF, I'd like to hire a butler for my villa in Bali.",
)}`

const PRICING_TIERS = [
  {
    title: 'Day Butler',
    price: 'IDR 1,200,000',
    unit: '/day',
    features: ['8-hour service', 'Arrival greeting', 'Table service', 'Beverage service', 'Luggage assistance', 'Guest orientation'],
    bestFor: 'Villa stays, family holidays, small groups',
  },
  {
    title: 'Residence Butler',
    price: 'IDR 2,500,000',
    unit: '/day',
    features: ['12-hour service', 'Full household management', 'Meal coordination', 'Vendor liaison', 'Inventory management', 'Event support'],
    bestFor: 'Extended stays, luxury villas, high-net-worth guests',
    highlight: true,
  },
  {
    title: 'Event Butler',
    price: 'IDR 1,800,000',
    unit: '/event',
    features: ['6-hour service', 'Guest reception', 'Coat check', 'Cigar service', 'Personal attendant', 'VIP support'],
    bestFor: 'Weddings, corporate events, gala dinners',
  },
]

const WHAT_INCLUDED = [
  'Discreet, professional butler service',
  'English-speaking, culturally aware',
  'Full uniform and presentation',
  'Guest preference anticipation',
  'Table and beverage service',
  'Household coordination',
  'Vendor and supplier liaison',
  'Complete discretion and privacy',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Consultation', desc: 'We discuss your household needs, guest profile, and service expectations.', icon: Calendar },
  { step: '02', title: 'Matching', desc: 'We select a butler whose experience aligns with your villa and guest type.', icon: Users },
  { step: '03', title: 'Briefing', desc: 'Detailed walkthrough of preferences, schedules, and special requirements.', icon: ShieldCheck },
  { step: '04', title: 'Service', desc: 'Your butler arrives prepared. Anticipates needs before they are voiced.', icon: Gem },
  { step: '05', title: 'Review', desc: 'We follow up to ensure every expectation was exceeded.', icon: Star },
]

const FAQS = [
  { q: 'What does a villa butler actually do?', a: 'A villa butler manages the guest experience — greeting arrivals, coordinating meals, managing household staff, handling requests, and ensuring every detail of the stay is flawless. They are the single point of contact for all guest needs.' },
  { q: 'Is a butler different from a waiter?', a: 'Yes. A waiter serves meals. A butler manages the entire guest experience — from arrival to departure — including service coordination, preference management, and household oversight.' },
  { q: 'How long should I book a butler for?', a: 'Day butlers are ideal for single events or short stays. Residence butlers are recommended for stays of 3+ days where consistent service and relationship-building matter.' },
  { q: 'Can the butler manage other staff?', a: 'Yes. Our residence butlers are experienced in coordinating chefs, housekeepers, drivers, and gardeners to ensure seamless villa operations.' },
  { q: 'What areas do you cover?', a: 'All Bali areas including Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding regions.' },
  { q: 'How far in advance should I book?', a: '1–2 weeks for day butlers. 3–4 weeks for residence butlers during peak season.' },
  { q: 'Is the butler live-in?', a: 'Day and event butlers are per-shift. Residence butlers can be arranged as live-in for extended stays — please enquire for availability.' },
  { q: 'What languages do butlers speak?', a: 'All butlers speak fluent English. Many speak additional languages including Mandarin, French, and Japanese.' },
]

export default function ServiceButlersPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.butler-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.butler-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Butler Service Bali | Villa Butlers Per Shift — myCHEF"
        description="Hire a butler in Bali for in-villa hosting, arrival service, guest experience and discreet anticipation. From IDR 1,200,000 per day."
        canonical={`${SITE}/in-villa-service/butlers`}
        ogImage={`${SITE}/generated/hub-villa.webp`}
        jsonLd={[
          localBusinessSchema,
          detailedServiceSchema(
            'Butler Service Bali',
            'myCHEF.id provides private butler service in Bali for villa stays, events, and luxury guest hosting. Our team manages service flow, guest requests, and discreet household coordination throughout the booking.',
            `${SITE}/in-villa-service/butlers`,
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 67),
          breadcrumbSchema('Butler Service Bali', `${SITE}/in-villa-service/butlers`, 'In-Villa Service', `${SITE}/in-villa-service`),
        ]}
      />

      <Breadcrumb items={[
        { label: 'In-Villa Service', href: '/in-villa-service' },
        { label: 'Butlers' },
      ]} />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/hub-villa.webp" alt="Professional butler at luxury Bali villa" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-28 max-w-[1280px] mx-auto w-full">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-Villa Service</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Butler Service in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Discreet, professional villa butlers for arrival service, guest experience, 
            and household coordination. From IDR 1,200,000 per day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-butlers-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors">
              <Calendar className="w-4 h-4" /> Book a Butler
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Pricing" title="Butler Service Tiers" subtitle="Choose the level of service that matches your stay or event." />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.title} className={`rounded-2xl p-8 ${tier.highlight ? 'bg-[#1A1A1A] text-white' : 'bg-white border border-[#E8E6E3]'}`}>
                <h3 className="font-playfair text-2xl mb-2">{tier.title}</h3>
                <p className={`text-3xl font-semibold mb-1 ${tier.highlight ? 'text-[#C5A028]' : 'text-[#1A1A1A]'}`}>{tier.price}</p>
                <p className={`text-sm mb-6 ${tier.highlight ? 'text-white/[60%]' : 'text-[#4A4745]'}`}>{tier.unit}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-[#C5A028]' : 'text-[#6B8E5A]'}`} />
                      <span className={tier.highlight ? 'text-white/[80%]' : 'text-[#4A4745]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs ${tier.highlight ? 'text-white/[50%]' : 'text-[#8A8785]'}`}>Best for: {tier.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Every butler booking includes comprehensive service standards." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {WHAT_INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-xl bg-[#FAFAF8] border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#6B8E5A] mt-0.5 flex-shrink-0" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Process" title="How It Works" subtitle="From consultation to service — five refined steps." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <p className="font-cormorant text-[#C5A028] text-sm mb-2">{step.step}</p>
                <h4 className="font-medium mb-2">{step.title}</h4>
                <p className="text-sm text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        testimonials={[
          { name: 'The Harrison Family', location: 'New York', quote: 'Our butler made the two-week stay effortless. He anticipated everything — from breakfast preferences to excursion planning. Worth every rupiah.', rating: 5 },
          { name: 'James & Victoria', location: 'London', quote: 'We hired a butler for our anniversary week. Discreet, warm, and impossibly efficient. The villa felt like a five-star hotel.', rating: 5 },
          { name: 'Corporate Retreat Group', location: 'Singapore', quote: 'The butler managed our 12-person retreat flawlessly. Coordinated meals, staff, and transport. We did not lift a finger.', rating: 5 },
        ]}
        title="What Clients Say"
        subtitle="Real reviews from villa stays across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Butler Service FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ═══════ INTERNAL LINKS ═══════ */}
      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-6 font-semibold">Explore More Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/in-villa-service/bartenders" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Bartender Hire</h4>
              <p className="text-xs text-[#4A4745]">Professional bartenders for your villa event.</p>
            </Link>
            <Link to="/in-villa-service/sommelier" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Sommelier Service</h4>
              <p className="text-xs text-[#4A4745]">Curated wine pairings for your villa dinner.</p>
            </Link>
            <Link to="/events/corporate-events" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Corporate Events</h4>
              <p className="text-xs text-[#4A4745]">Professional catering for offsites, conferences, and launches.</p>
            </Link>
            <Link to="/catering/villa-catering" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Villa Catering</h4>
              <p className="text-xs text-[#4A4745]">Full-service catering for your Bali villa stay.</p>
            </Link>
          </div>
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/staffing-hero.webp" alt="Luxury villa butler service Bali" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Book Your Butler</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your villa details and we will match you with the perfect butler.
            Reply within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-butlers-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6282237565997" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
