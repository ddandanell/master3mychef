import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Users, Star, ShieldCheck, Award } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
  aggregateRatingSchema,
  howToSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_LINK = buildWhatsAppUrl({ serviceName: 'professional waiters in Bali', intent: 'availability and pricing' })

const PRICING_TIERS = [
  {
    title: 'Waiter Service',
    price: 'IDR 250,000',
    unit: '/hour',
    features: ['Minimum 3 hours', 'Uniformed, English-speaking', 'Table setting & course service', 'Wine & drink service', 'Setup & cleanup'],
    bestFor: 'Villa dinners, weddings, and events of any size',
  },
]

const WHAT_INCLUDED = [
  'Professional, uniformed waiters',
  'English-speaking team',
  'Table setting and styling',
  'Full course service',
  'Wine and beverage service',
  'Real-time kitchen coordination',
  'Dietary requirement handling',
  'Complete breakdown and cleanup',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Share your event', desc: 'Date, guest count, villa location, and service style.', icon: Calendar },
  { step: '02', title: 'Team assignment', desc: 'We match waiters to your event type and guest profile.', icon: Users },
  { step: '03', title: 'Briefing', desc: 'Menu walkthrough, timeline, dietary notes, villa layout.', icon: ShieldCheck },
  { step: '04', title: 'Service', desc: 'Arrive early, set tables, serve courses, clear, clean.', icon: Award },
  { step: '05', title: 'Follow-up', desc: 'We check in after service. Feedback shapes future teams.', icon: Star },
]

const FAQS = [
  { q: 'How many waiters do I need?', a: 'One waiter per 8–10 guests for plated service, or one per 15 guests for buffet. We recommend adding a head waiter for events over 20 guests.' },
  { q: 'What do the waiters wear?', a: 'Standard uniform is black trousers, white shirt, black apron. Premium service includes white-glove service. Custom uniforms available on request.' },
  { q: 'Can waiters handle dietary restrictions?', a: 'Absolutely. Every waiter is briefed on dietary requirements, allergies, and preferences before service begins.' },
  { q: 'How far in advance should I book?', a: '3–7 days for standard service. 2–4 weeks for premium events during peak season (July–August, December).' },
  { q: 'Do you provide wine service?', a: 'Yes. Premium and head waiter tiers include wine service — pouring, timing, and basic pairing guidance.' },
  { q: 'What areas do you cover?', a: 'All Bali areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding regions.' },
  { q: 'Is there a minimum booking?', a: 'Minimum 2 waiters per booking, 3-hour minimum per waiter.' },
  { q: 'Can I request the same waiters again?', a: 'Yes. We keep records of your preferred team and do our best to reassign them for future events.' },
]

export default function ServiceWaitersPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.waiter-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.waiter-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Villa Waiters Bali | Professional Hourly Service — myCHEF"
        description="Hire villa waiters in Bali for dinners, weddings & events. Uniformed, English-speaking, trained in plated service. From IDR 250K/hour. WhatsApp us."
        canonical={`${SITE}/in-villa-service/waiters`}
        ogImage={`${SITE}/generated/aura-bartender.webp`}
        jsonLd={[
          serviceSchema(
            'Waiter Hire Bali',
            'Professional per-shift waiters for villa events in Bali. Uniformed, English-speaking, trained in plated and buffet service.',
            `${SITE}/in-villa-service/waiters`,
            'IDR',
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 89),
          breadcrumbSchema('Waiters', `${SITE}/in-villa-service/waiters`, 'In-Villa Service', `${SITE}/in-villa-service`),
          howToSchema({
            name: 'How to Hire Villa Waiters in Bali',
            description: 'Book professional waiters for your Bali villa dinner or event in 5 easy steps.',
            totalTime: 'PT10M',
            steps: [
              { name: 'Share your event details', text: 'Send your date, guest count, villa location, and service style via WhatsApp.' },
              { name: 'Team assignment', text: 'We match uniformed, English-speaking waiters to your event type and guest profile.' },
              { name: 'Pre-event briefing', text: 'Menu walkthrough, timeline, dietary notes, and villa layout shared with the team.' },
              { name: 'Service day', text: 'Waiters arrive early, set tables, serve courses, clear, and clean — all included.' },
              { name: 'Follow-up', text: 'We check in after service. Feedback shapes future team assignments.' },
            ],
          }),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-experience-bali-aura-bartender.webp" alt="Professional waiter serving at Bali villa dinner" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
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
            { label: 'Waiters' },
          ]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-Villa Service</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Waiter Hire in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Professional, uniformed waiters for your villa dinner, wedding, or event.
            English-speaking, trained in fine service. From IDR 250,000 per hour, minimum 3 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-waiters-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> Hire Waiters via WhatsApp
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <Calendar className="w-4 h-4" /> Book Waiters
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Pricing Tiers */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Pricing" title="Simple Hourly Rate" subtitle="One transparent net rate — IDR 250,000 per hour, minimum 3 hours." />
          <div className="grid gap-6 mt-12 max-w-md mx-auto">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.title} className="rounded-2xl p-8 bg-[#1A1A1A] text-white">
                <h3 className="font-playfair text-2xl mb-2">{tier.title}</h3>
                <p className="text-3xl font-semibold mb-1 text-[#C5A028]">{tier.price}</p>
                <p className="text-sm mb-6 text-white/[60%]">{tier.unit}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C5A028]" />
                      <span className="text-white/[80%]">{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-white/[50%]">Best for: {tier.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Every waiter booking includes the full service package." />
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

      {/* How It Works */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Process" title="How It Works" subtitle="From enquiry to service — five simple steps." />
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

      {/* Coverage */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <SectionHeader eyebrow="Coverage" title="All Bali Areas" subtitle="We serve villas and venues across the entire island." />
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Berawa', 'Pererenan'].map((area) => (
              <span key={area} className="px-4 py-2 bg-[#FAFAF8] border border-[#E8E6E3] rounded-full text-sm text-[#4A4745]">{area}</span>
            ))}
          </div>
          <p className="text-sm text-[#8A8785] mt-6">Remote areas may incur a modest travel fee.</p>
        </div>
      </section>

      {/* Testimonials */}
      {/* Photo gallery */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Gallery" title="At your service" subtitle="Polished villa service across Bali." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { src: '/generated/mychef-waiters-1.webp', alt: 'Balinese waiter serving a plated dish to guests at a Bali villa dinner' },
              { src: '/generated/mychef-waiters-2.webp', alt: 'Balinese waiters carrying drinks to guests by a Bali villa pool' },
              { src: '/generated/mychef-waiters-3.webp', alt: 'Balinese waiter pouring wine at a candlelit Bali villa dinner' },
              { src: '/generated/mychef-waiters-4.webp', alt: 'Balinese waiter setting an elegant table on a Bali villa terrace' },
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
          { name: 'Sarah & James', location: 'London', quote: 'The waiters were impeccable. Discreet, professional, and anticipated every need. Our villa dinner felt like a Michelin restaurant.', rating: 5 },
          { name: 'The Chen Family', location: 'Singapore', quote: 'We hired 4 waiters for our parents\' anniversary. The team was warm, attentive, and made the evening effortless. Highly recommend.', rating: 5 },
          { name: 'Emma R.', location: 'Sydney', quote: 'Booked waiters for a 30-person birthday party. They arrived early, set beautiful tables, and service was flawless all night.', rating: 5 },
        ]}
        title="What Clients Say"
        subtitle="Real reviews from villa events across Bali."
      />

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Waiter Hire FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* Content depth section: Why Waiter Hire in Bali */}
      <section className="py-12 bg-[#FAFAF8] border-t border-[#E8E6E3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mb-6">Why Hire Professional Waiters for Your Bali Villa Event?</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            The difference between a memorable villa dinner and a stressful one often comes down to service. When guests are managing their own drinks, waiting for courses, or navigating a buffet without guidance, the host is perpetually in motion rather than present with their guests. A professional waiter team removes all of that — plates arrive at the right moment, glasses are always topped, and the host simply enjoys the evening.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Our Indonesian waiters are trained in international service standards — French service, family-style plating, passed appetizers, multi-course sequencing. They arrive early to set the table precisely, coordinate with your private chef on course timing, and read the room throughout the night to ensure service enhances rather than interrupts the atmosphere. In a villa setting where there is no restaurant floor manager, a skilled waiter team becomes your invisible event infrastructure.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            Whether you need a single waiter for an intimate dinner of six or a full service team for a 100-person reception across Canggu, Seminyak, Ubud, or Uluwatu, myCHEF matches you with the right professionals for your event size and service style — all priced transparently in IDR.
          </p>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">What's Included in Your Waiter Hire Experience</h2>
          <ul className="space-y-3 text-[#4A4745]">
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Table setup and mise en place:</strong> Waiters arrive 60–90 minutes before guests to lay the table, set glassware, arrange napkins, and prepare service stations — ensuring the venue looks perfect before anyone arrives.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Course timing and kitchen coordination:</strong> Waiters communicate directly with your private chef on course readiness, ensuring each plate is served at the right temperature and in the correct sequence for your menu format.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Beverage service:</strong> Water, wine, and drinks poured and managed throughout the meal — guests never wait, and never pour for themselves unless they choose to.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Dietary and allergen management:</strong> Waiters are briefed on dietary requirements per guest and serve appropriate dishes without confusion or public announcement — a critical detail for large group dinners with mixed needs.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Post-dinner table clearance:</strong> Full clearance of the dining area, washing of service items, and return of the villa to a clean, orderly state — so the host ends the evening in their own home, not a kitchen.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Professional presentation:</strong> All waiters arrive in formal service attire and maintain personal grooming standards consistent with luxury villa hospitality.</span></li>
          </ul>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">Waiter Hire Pricing in Bali</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Waiter hire in Bali is priced simply: <strong className="text-[#1A1A1A]">IDR 250,000 per hour</strong>, with a <strong className="text-[#1A1A1A]">3-hour minimum</strong> per waiter. The same net rate covers everything — table setup, plated course service, wine and beverage pouring, course sequencing, and post-dinner clearance — whether you book a single waiter for an intimate dinner or a full team for a wedding.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            For larger events — weddings, corporate receptions, milestone dinners with 30 or more guests — simply add more waiters at the same <strong className="text-[#1A1A1A]">IDR 250,000 per hour</strong> rate. A team of four delivers multi-station service, high-volume course management, and dedicated beverage service across the full event floor.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            As a rule of thumb: one waiter per 8–10 guests for plated dinners, one per 15 guests for buffet or family-style events. All prices are net in IDR. WhatsApp us with your guest count, event date, and service style for a precise same-day quote.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-3 font-semibold">Explore More Services</p>
          <h3 className="font-playfair text-3xl text-[#1A1A1A] mb-6">You might also need</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/in-villa-service/bartenders" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Bartender Hire</h4>
              <p className="text-xs text-[#4A4745]">Add a polished bar team for cocktails, wine, and event flow.</p>
            </Link>
            <Link to="/in-villa-service/host-hostess" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Host &amp; Hostess</h4>
              <p className="text-xs text-[#4A4745]">Welcome guests, manage arrivals, and keep the event moving smoothly.</p>
            </Link>
            <Link to="/in-villa-service" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">In-Villa Service</h4>
              <p className="text-xs text-[#4A4745]">Browse the full staffing hub for dinners, parties, and private events.</p>
            </Link>
            <Link to="/catering" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Catering</h4>
              <p className="text-xs text-[#4A4745]">Pair service staff with menus and food planning for your group.</p>
            </Link>
          </div>
        </div>
      </section>

      <PressStrip />

      {/* Final CTA */}
      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-staffing-bali-staffing-hero.webp" alt="Professional service team at Bali villa" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Book Your Waiter Team</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your event details and we will match you with the perfect waiter team.
            Reply within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-waiters-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+628113803488" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
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
              { label: 'Bartenders', href: '/in-villa-service/bartenders', desc: 'Cocktail and bar service.' },
              { label: 'Butlers', href: '/in-villa-service/butlers', desc: 'Discreet villa hosting.' },
              { label: 'Sommelier', href: '/in-villa-service/sommelier', desc: 'Wine pairing and service.' },
              { label: 'Mixology', href: '/in-villa-service/mixology', desc: 'Signature cocktail programs.' },
              { label: 'Events', href: '/events', desc: 'Full-service event production.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
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
      <StickyMobileCTA
        pageSource="in-villa-waiters"
        serviceName="villa waiters in Bali"
        intent="waiter service and pricing"
      />
    </div>
  )
}