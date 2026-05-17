import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Users, Star, ShieldCheck, HandHeart } from 'lucide-react'
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

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_NUMBER = '6282237565997'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi myCHEF, I'd like to hire hosts for my event in Bali.",
)}`

const PRICING_TIERS = [
  {
    title: 'Event Host',
    price: 'IDR 400,000',
    unit: '/shift',
    features: ['4-hour shift', 'Guest greeting', 'Registration', 'Direction', 'Basic coordination', 'Up to 50 guests'],
    bestFor: 'Small events, dinners, corporate functions',
  },
  {
    title: 'Senior Host',
    price: 'IDR 600,000',
    unit: '/shift',
    features: ['6-hour shift', 'VIP management', 'Timeline coordination', 'Vendor liaison', 'Problem resolution', 'Up to 100 guests'],
    bestFor: 'Weddings, large parties, corporate events',
    highlight: true,
  },
  {
    title: 'Host Team (4 pax)',
    price: 'IDR 2,000,000',
    unit: '/shift',
    features: ['6-hour shift', '4 hosts', 'Full reception', 'Multi-station coverage', 'Bilingual team', 'Unlimited guests'],
    bestFor: 'Large weddings, galas, conferences',
  },
]

const WHAT_INCLUDED = [
  'Professional, presentable hosts',
  'English-speaking team',
  'Guest greeting and registration',
  'Direction and wayfinding',
  'Timeline coordination',
  'Vendor liaison',
  'Problem resolution',
  'Discreet, warm service',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Event brief', desc: 'Guest count, format, timeline, and special requirements.', icon: Calendar },
  { step: '02', title: 'Team selection', desc: 'Hosts matched to your event style and guest profile.', icon: Users },
  { step: '03', title: 'Briefing', desc: 'Venue walkthrough, timeline review, role assignments.', icon: ShieldCheck },
  { step: '04', title: 'Reception', desc: 'Greet, guide, coordinate. The first and last impression.', icon: HandHeart },
  { step: '05', title: 'Handover', desc: 'Post-event debrief and feedback collection.', icon: Star },
]

const FAQS = [
  { q: 'What do hosts and hostesses do at an event?', a: 'They are the face of your event — greeting guests, managing registration, directing traffic, coordinating with vendors, and ensuring the timeline runs smoothly. They solve problems before guests notice them.' },
  { q: 'How many hosts do I need?', a: 'One host per 25 guests for seated events, or one per 40 guests for standing receptions. We recommend a senior host for events over 50 guests to manage the team.' },
  { q: 'Can hosts speak multiple languages?', a: 'Yes. All hosts speak fluent English. Many speak Mandarin, Japanese, French, or Arabic. Let us know your guest demographics and we will match accordingly.' },
  { q: 'What do hosts wear?', a: 'Professional attire: black suit or elegant dress, depending on event formality. Custom uniforms available for branded events.' },
  { q: 'Can hosts manage VIP guests?', a: 'Absolutely. Our senior hosts are experienced in VIP management — discreet arrivals, private areas, special requests, and privacy protection.' },
  { q: 'What areas do you cover?', a: 'All Bali areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding regions.' },
  { q: 'How far in advance should I book?', a: '3–7 days for standard events. 2–4 weeks for large events during peak season.' },
  { q: 'Can hosts also do registration and check-in?', a: 'Yes. Registration, guest list management, badge printing, and check-in are standard services included in every booking.' },
]

export default function ServiceHostPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.host-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.host-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Host & Hostess Hire Bali | Event Reception — myCHEF"
        description="Hosts and hostesses for villa events, weddings and corporate functions in Bali. Welcome service, guest direction. From IDR 400,000 per shift."
        canonical={`${SITE}/in-villa-service/host-hostess`}
        ogImage={`${SITE}/generated/misc-trust-hosts-lg.webp`}
        jsonLd={[
          localBusinessSchema,
          detailedServiceSchema(
            'Host & Hostess Hire Bali',
            'myCHEF.id provides hosts and hostesses in Bali for villa events, weddings, and brand activations. We manage guest welcome, direction, and front-of-house flow with polished professional service.',
            `${SITE}/in-villa-service/host-hostess`,
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 78),
          breadcrumbSchema('Host & Hostess Hire Bali', `${SITE}/in-villa-service/host-hostess`, 'In-Villa Service', `${SITE}/in-villa-service`),
        ]}
      />
{/* Hero */}
<section className="relative min-h-[85vh] flex items-center overflow-hidden">
  <div className="absolute inset-0">
    <img src="/generated/hub-staffing.webp" alt="Professional villa host greeting guests in Bali" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" />
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
      }}
    />
    <div className="absolute inset-0 bg-black/20 md:hidden" />
  </div>
  <div className="relative z-10 px-6 md:px-12 py-12 md:py-20 max-w-[1280px] mx-auto w-full text-white">
    <Breadcrumb items={[
      { label: 'In-Villa Service', href: '/in-villa-service' },
      { label: 'Villa Hosts' },
    ]} theme="dark" className="px-0 pt-0 pb-8" />
    <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-Villa Service</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Host & Hostess Hire in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Professional hosts and hostesses for your villa event, wedding, or corporate function. 
            Welcome service, guest direction, event coordination. From IDR 400,000 per shift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-host-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <Calendar className="w-4 h-4" /> Book Hosts
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Pricing" title="Host Service Tiers" subtitle="Choose the team size that matches your event." />
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
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Every host booking includes full reception service." />
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
          <SectionHeader eyebrow="Process" title="How It Works" subtitle="From brief to reception — five seamless steps." />
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
          { name: 'Wedding Couple', location: 'Melbourne', quote: 'Our host team of 4 managed 120 guests flawlessly. Registration, seating, timeline — everything ran like clockwork. We did not worry about a thing.', rating: 5 },
          { name: 'Corporate Event Manager', location: 'Singapore', quote: 'Hired 6 hosts for our annual dinner. Bilingual team, professional, and incredibly organised. Guest feedback was outstanding.', rating: 5 },
          { name: 'Private Party Host', location: 'Jakarta', quote: 'Two hosts for our 50th birthday. They greeted every guest by name, managed the flow, and kept the evening on track. Essential service.', rating: 5 },
        ]}
        title="What Clients Say"
        subtitle="Real reviews from events across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Host & Hostess FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-3 font-semibold">Explore More Services</p>
          <h3 className="font-playfair text-3xl text-[#1A1A1A] mb-6">You might also need</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/in-villa-service/waiters" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Waiter Hire</h4>
              <p className="text-xs text-[#4A4745]">Add polished table service for seated dinners, receptions, and events.</p>
            </Link>
            <Link to="/in-villa-service/bartenders" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Bartender Hire</h4>
              <p className="text-xs text-[#4A4745]">Keep drinks flowing with a professional bar team and full setup.</p>
            </Link>
            <Link to="/in-villa-service" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">In-Villa Service</h4>
              <p className="text-xs text-[#4A4745]">Browse the full staffing hub for guest-facing support across your event.</p>
            </Link>
            <Link to="/events" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Events</h4>
              <p className="text-xs text-[#4A4745]">Plan weddings, corporate functions, and celebrations with myCHEF.</p>
            </Link>
          </div>
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-staffing-bali-staffing-hero.webp" alt="Professional hosts at Bali villa event" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Book Your Host Team</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your event details and we will assemble the perfect host team.
            Reply within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-host-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6282237565997" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
