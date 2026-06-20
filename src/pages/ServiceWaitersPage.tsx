import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Users, Star, ShieldCheck, Award } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
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

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_NUMBER = 491635080236
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi myCHEF, I'd like to hire waiters for my villa event in Bali.",
)}`

const PRICING_TIERS = [
  {
    title: 'Standard Service',
    price: 'IDR 350,000',
    unit: '/waiter/shift',
    features: ['4-hour shift', 'Uniformed service', 'Table setting', 'Course service', 'Basic cleanup'],
    bestFor: 'Intimate dinners, family meals, small gatherings',
  },
  {
    title: 'Premium Service',
    price: 'IDR 500,000',
    unit: '/waiter/shift',
    features: ['6-hour shift', 'White-glove service', 'Wine service', 'Full table management', 'Kitchen coordination', 'Guest interaction'],
    bestFor: 'Weddings, corporate events, fine dining',
    highlight: true,
  },
  {
    title: 'Head Waiter',
    price: 'IDR 750,000',
    unit: '/shift',
    features: ['Full event oversight', 'Team coordination', 'Menu briefing', 'Timeline management', 'Guest relations', 'Problem resolution'],
    bestFor: 'Large events, multi-course dinners, VIP service',
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
  { q: 'Is there a minimum booking?', a: 'Minimum 2 waiters per booking, 4-hour shift minimum.' },
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
        title="Villa Waiters Bali | Professional Per-Shift Service — myCHEF"
        description="Hire villa waiters in Bali for dinners, weddings & events. Uniformed, English-speaking, trained in plated service. From IDR 350K/shift. WhatsApp us."
        canonical={`${SITE}/in-villa-service/waiters`}
        ogImage={`${SITE}/generated/aura-bartender.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema(
            'Waiter Hire Bali',
            'Professional per-shift waiters for villa events in Bali. Uniformed, English-speaking, trained in plated and buffet service.',
            `${SITE}/in-villa-service/waiters`,
            'IDR',
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 89),
          breadcrumbSchema('Waiters', `${SITE}/in-villa-service/waiters`, 'In-Villa Service', `${SITE}/in-villa-service`),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-experience-bali-aura-bartender.webp" alt="Professional waiter serving at Bali villa dinner" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" />
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
            English-speaking, trained in fine service. From IDR 350,000 per shift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-waiters-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
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
          <SectionHeader eyebrow="Pricing" title="Service Tiers" subtitle="Choose the level of service that matches your event." />
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
            <a href="tel:+491635080236" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
