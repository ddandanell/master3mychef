import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Users, Star, ShieldCheck, Gem } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { faqPageSchema } from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { ArticleContentSection, Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'butler service in Bali', intent: 'availability and pricing' })

const serviceJsonLd: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private Butler Hire Bali',
  serviceType: 'Butler hire',
  provider: {
    '@type': 'Organization',
    name: 'myCHEF',
    url: 'https://mychef.id',
    telephone: '+62 896-7407-2020',
    email: 'bali@mychef.id',
  },
  areaServed: ['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Bali'],
  description: 'Hire a professional private butler in Bali by the day, event or residence stay. Arrival service, household coordination and anticipatory guest care from IDR 1,200,000 per day.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'IDR',
    lowPrice: '1200000',
    highPrice: '2500000',
    offerCount: '3',
    description: 'Day Butler IDR 1,200,000/day; Event Butler IDR 1,800,000/event; Residence Butler IDR 2,500,000/day. Subject to 11% tax + 10% service charge.',
  },
  url: 'https://mychef.id/in-villa-service/butlers',
}

const faqJsonLd = faqPageSchema([
  { question: 'How much does it cost to hire a butler in Bali?', answer: 'From IDR 1,200,000 per day for an 8-hour Day Butler; Event Butler IDR 1,800,000 per event (6 hours); Residence Butler IDR 2,500,000 per day (12 hours). Multi-day discounts apply. Rates are subject to 11% tax + 10% service charge.' },
  { question: 'Is the butler live-in?', answer: 'Day and Event Butlers are per-shift. Residence Butlers can be arranged as live-in for extended stays on request.' },
  { question: 'Can the butler manage other villa staff?', answer: 'Yes. Residence Butlers coordinate chefs, housekeepers, drivers and gardeners for seamless villa operations.' },
  { question: 'What languages do your butlers speak?', answer: 'All butlers speak fluent English; many also speak Mandarin, French or Japanese.' },
  { question: 'How long should I book a butler for?', answer: 'A Day Butler suits single events or short stays; for stays of 3+ days a Residence Butler delivers consistent, relationship-based service.' },
  { question: 'How far in advance should I book?', answer: '1–2 weeks for Day Butlers; 3–4 weeks for Residence Butlers in peak season. Shorter notice is often possible via WhatsApp.' },
  { question: 'What areas do you cover?', answer: 'All of Bali — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and surrounding regions.' },
  { question: 'What is the difference between hiring a butler and booking a villa with butler service?', answer: 'Villas advertising butler service typically include a shared staff member during fixed hours. A hired myCHEF butler is dedicated to your group alone, briefed to your preferences, and booked for exactly the days and hours you choose.' },
])

const PRICING_TIERS = [
  {
    title: 'Day Butler',
    price: 'IDR 1,200,000',
    unit: '/day',
    features: ['8-hour service', 'Arrival greeting', 'Table service', 'Beverage service', 'Luggage assistance', 'Guest orientation'],
    bestFor: 'Villa stays, family holidays, small groups',
  },
  {
    title: 'Event Butler',
    price: 'IDR 1,800,000',
    unit: '/event',
    features: ['6-hour service', 'Guest reception', 'Coat check', 'Cigar service', 'Personal attendant', 'VIP support'],
    bestFor: 'Weddings, corporate events, gala dinners',
  },
  {
    title: 'Residence Butler',
    price: 'IDR 2,500,000',
    unit: '/day',
    features: ['12-hour service', 'Full household management', 'Meal coordination', 'Vendor liaison', 'Inventory management', 'Event support'],
    bestFor: 'Extended stays, private villas, high-net-worth guests',
    highlight: true,
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
  { q: 'How much does it cost to hire a butler in Bali?', a: 'From IDR 1,200,000 per day for an 8-hour Day Butler. Event Butlers start at IDR 1,800,000 per event (6 hours), and Residence Butlers at IDR 2,500,000 per day (12 hours, full household management). Multi-day bookings receive discounted daily rates. All rates ++ (11% tax + 10% service).' },
  { q: 'Is the butler live-in?', a: 'Day and Event Butlers are per-shift. Residence Butlers can be arranged as live-in for extended stays — please enquire for availability.' },
  { q: 'Can the butler manage other villa staff?', a: 'Yes. Residence Butlers are experienced in coordinating chefs, housekeepers, drivers and gardeners so the villa operates seamlessly.' },
  { q: 'What languages do your butlers speak?', a: 'All butlers speak fluent English; many also speak Mandarin, French or Japanese. Tell us your guest profile and we will match accordingly.' },
  { q: 'How long should I book a butler for?', a: 'A Day Butler suits single events or short stays. For stays of 3+ days, a Residence Butler delivers the consistency and relationship that make a long stay effortless.' },
  { q: 'How far in advance should I book?', a: '1–2 weeks for Day Butlers; 3–4 weeks for Residence Butlers in peak season (July–August, December–New Year). Shorter notice is often possible — ask on WhatsApp.' },
  { q: 'What areas do you cover?', a: 'All of Bali — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and surrounding regions.' },
  { q: 'What is the difference between hiring a butler and booking a villa with butler service?', a: 'Villas advertising "butler service" typically include a shared staff member during fixed hours. A hired myCHEF butler is dedicated to your group alone, briefed to your preferences, and booked for exactly the days and hours you choose.' },
  { q: 'How much do waiters and bartenders cost in Bali?', a: 'Waiters from about IDR 250K/hour; bartenders from IDR 350K/hour (3-hour minimums). <a href="/in-villa-service">In-villa service</a>.' },
  { q: 'Minimum booking?', a: 'Hourly roles usually 3-hour minimum; waiter bookings often start at two waiters.' },
  { q: 'Can we hire staff without food?', a: 'Yes — self-catered or third-party caterer support is normal.' },
  { q: 'What do staff wear?', a: 'Professional uniforms matched to event formality.' },
  { q: 'Alcohol included?', a: 'No — BYO or sourced at cost; hire covers the professional.' },
  { q: 'Waiter ratio?', a: 'About one waiter per 10 guests for formal service.' },
  { q: 'Butler service?', a: 'Yes — <a href="/in-villa-service/butlers">butlers</a>.' },
  { q: 'Mixology and signature cocktails?', a: 'Yes — <a href="/in-villa-service/mixology">mixology</a>.' },
  { q: 'Areas covered?', a: 'Island-wide. <a href="/locations">Locations</a>.' },
  { q: 'Combine with private chef?', a: 'Yes — most common luxury setup.' },
  { q: 'Vetted staff?', a: 'Employed/supervised teams with replacement-or-refund cover.' },
  { q: 'How to book staff?', a: 'WhatsApp date, area, headcount and roles needed.' },
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
        title={getPageMeta('in-villa-service-butlers').title}
        description={getPageMeta('in-villa-service-butlers').description}
        canonical={getPageMeta('in-villa-service-butlers').canonical}
        ogImage={getPageMeta('in-villa-service-butlers').ogImage}
        jsonLd={[serviceJsonLd, faqJsonLd]}
      />
{/* Hero */}
<section className="relative min-h-[85vh] flex items-center overflow-hidden">
  <div className="absolute inset-0">
    <img src="/generated/mychef-service-bali-hero-butlers.webp" alt="Private villa butler Bali welcoming guests at a luxury villa entrance" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
      }}
    />
    <div className="absolute inset-0 bg-black/20 md:hidden" />
  </div>
  <div className="relative z-10 px-6 md:px-12 py-12 md:py-20 max-w-[1280px] mx-auto w-full text-white">
    <Breadcrumb items={[
      { label: 'In-Villa Service', href: '/in-villa-service' },
      { label: 'Butlers' },
    ]} theme="dark" className="px-0 pt-0 pb-8" />
    <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-Villa Service</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Butler Service Bali — Hire a Private Villa Butler
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Butler service Bali for villa stays, celebrations and events — hired by the day, not bundled into a hotel room. Discreet arrival service, household coordination and anticipatory guest care, from IDR 1,200,000 per day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-butlers-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> Hire a Villa Butler
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <Calendar className="w-4 h-4" /> Book a Butler
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Pricing" title="Butler Hire Rates" subtitle="Three tiers, matched to how you actually use your villa. Multi-day bookings receive discounted daily rates." />
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

      {/* Photo gallery */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Gallery" title="The butler's touch" subtitle="Seamless villa hospitality across Bali." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { src: '/generated/mychef-service-bali-butlers-gallery-1.webp', alt: 'Villa butler in Bali serving breakfast on a private villa terrace' },
              { src: '/generated/mychef-service-bali-butlers-gallery-2.webp', alt: 'Private butler in Bali welcoming guests at the entrance of a luxury villa' },
              { src: '/generated/mychef-service-bali-butlers-gallery-3.webp', alt: 'Villa butler in Bali attending to guests by a private pool' },
              { src: '/generated/mychef-service-bali-butlers-gallery-4.webp', alt: 'Villa butler in Bali arranging an elegant welcome amenity inside a private villa' },
            ].map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-xl">
                <OptimizedImage src={g.src} alt={g.alt} className="w-full h-full object-cover" loading="lazy" />
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
          <FAQAccordion items={FAQS} defaultOpenCount={4} showToc ctaEvery={5} />
        </div>
      </section>

      {/* Content depth section: Why Butler Service in Bali */}
      <section className="py-12 bg-[#FAFAF8] border-t border-[#E8E6E3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mb-6">Why Hire a Private Butler for Your Bali Villa?</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            A private butler in Bali is not a luxury reserved for five-star hotels. Many of Bali's finest private villas come without on-site staff, or with minimal housekeeping only. A dedicated butler fills the gap — managing your household, anticipating your needs, and coordinating with vendors, drivers, and local suppliers so your group never has to think about logistics.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            The difference between a good Bali villa stay and an extraordinary one is almost always the quality of the service around you. A myCHEF butler arrives briefed on your group's preferences — dietary needs, wake-up times, excursion plans, wine preferences — and runs the villa like a silent, professional machine in the background. Our Indonesian butlers are trained to international hospitality standards and understand both the warmth of Balinese service culture and the discretion required by high-net-worth guests.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            Whether you're staying for a weekend celebration or a two-week private retreat, a butler transforms your villa from beautiful accommodation into a fully managed private residence experience.
          </p>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">What's Included in Your Butler Service Experience</h2>
          <ul className="space-y-3 text-[#4A4745]">
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Arrival greeting and orientation:</strong> Your butler welcomes guests, handles luggage, gives a villa tour, and briefs the group on facilities, house rules, and local recommendations.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Daily household management:</strong> Morning setup, mid-day checks, and evening preparation. The villa is always ready — towels, amenities, pool area, and common spaces maintained throughout the day.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Meal coordination:</strong> Butler works alongside your private chef or organises food delivery, restaurant reservations, and market runs based on group preferences.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Vendor and driver liaison:</strong> Transport, activity bookings, spa treatments, equipment rentals — the butler handles coordination so guests experience Bali without the admin.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Beverage and snack service:</strong> Refreshments prepared and served throughout the day. Pool-side drinks, afternoon fruit platters, evening cocktail setup.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Event support:</strong> For villa celebrations — birthday dinners, anniversary evenings, or group gatherings — the butler manages setup, guest arrival, and coordination with the catering team.</span></li>
          </ul>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">Butler Service Pricing in Bali</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Butler hire in Bali is priced per day, with rates reflecting the hours covered and scope of household responsibility. A Day Butler — covering 8 hours of active service — starts at <strong className="text-[#1A1A1A]">IDR 1,200,000 per day</strong>, suitable for villa stays, family holidays, and smaller groups needing dependable daily support.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            A Residence Butler — available for 12 hours per day and covering full household management including vendor coordination, inventory, and event support — is priced from <strong className="text-[#1A1A1A]">IDR 2,500,000 per day</strong>. This tier is recommended for extended stays, high-net-worth guests, and private villa weeks where quality of life depends on everything running invisibly well.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            For weddings and corporate events requiring a dedicated event butler, rates start at <strong className="text-[#1A1A1A]">IDR 1,800,000 per event</strong>. Multi-day bookings receive discounted daily rates. All prices are subject to 11% tax + 10% service charge (++). Contact us via WhatsApp for a same-day custom quote.
          </p>
        </div>
      </section>

      {/* ═══════ INTERNAL LINKS ═══════ */}
      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-6 font-semibold">Explore More Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/butler-service-bali-daily-rate" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1">full butler daily-rate breakdown</h4>
              <p className="text-xs text-[#4A4745]">Full line-by-line butler pricing.</p>
            </Link>
            <Link to="/in-villa-service" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1">all in-villa service staff</h4>
              <p className="text-xs text-[#4A4745]">All in-villa service staff.</p>
            </Link>
            <Link to="/in-villa-service/waiters" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1">waiters for table service</h4>
              <p className="text-xs text-[#4A4745]">Professional villa waiters.</p>
            </Link>
            <Link to="/in-villa-service/sommelier" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1">sommelier for wine-led dinners</h4>
              <p className="text-xs text-[#4A4745]">Tailored wine pairings for your villa dinner.</p>
            </Link>
            <Link to="/in-villa-service/host-hostess" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1">event hosts for larger functions</h4>
              <p className="text-xs text-[#4A4745]">Reception and event-flow hosts.</p>
            </Link>
            <Link to="/catering" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1">villa catering to match</h4>
              <p className="text-xs text-[#4A4745]">Full-service catering to match your butler.</p>
            </Link>
            <Link to="/staffing/household-staff" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1">household staff placement service</h4>
              <p className="text-xs text-[#4A4745]">Permanent household staffing.</p>
            </Link>
          </div>
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-service-bali-butlers-cta.webp" alt="Private villa butler Bali in a beautifully appointed villa living area" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Book Your Butler</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your villa details and we will match you with the perfect butler.
            Reply within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-butlers-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="https://wa.me/6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <Phone className="w-4 h-4" /> Call Sofia
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
              { label: 'Bartender hire Bali', href: '/in-villa-service/bartenders', desc: 'Cocktail and bar service.' },
              { label: 'Fine dining Bali villa', href: '/fine-dining', desc: 'In-villa tasting menus.' },
              { label: 'Sommelier', href: '/in-villa-service/sommelier', desc: 'Wine pairing and service.' },
              { label: 'Mixology', href: '/in-villa-service/mixology', desc: 'Signature cocktail programs.' },
              { label: 'Private dining', href: '/private-dining-indonesia', desc: 'At-home fine dining island-wide.' },
              { label: 'Catering Bali', href: '/catering', desc: 'Full-service catering for any event.' },
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
        pageSource="in-villa-butlers"
        serviceName="villa butler in Bali"
        intent="butler service and pricing"
      />
    </div>
  )
}