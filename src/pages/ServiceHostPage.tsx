import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Users, Star, ShieldCheck, HandHeart } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { howToSchema, faqPageSchema } from '@/components/SeoHead'
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

const WA_LINK = buildWhatsAppUrl({ serviceName: 'host & hostess service in Bali', intent: 'availability and pricing' })

const HOST_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Host & Hostess Hire Bali',
      serviceType: 'Event host and hostess hire',
      provider: {
        '@type': 'Organization',
        name: 'myCHEF',
        url: 'https://mychef.id',
        telephone: '+62 896-7407-2020',
        email: 'bali@mychef.id',
      },
      areaServed: ['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Bali'],
      description: 'Professional event hosts and hostesses in Bali for guest reception, registration, seating coordination and event flow at weddings, corporate functions and villa events — from IDR 300,000 per hour.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'IDR',
        price: '300000',
        unitText: 'per hour',
        description: 'Event host/hostess, 3-hour minimum. Subject to 11% tax + 10% service charge.',
      },
      url: 'https://mychef.id/in-villa-service/host-hostess',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does it cost to hire event hosts or hostesses in Bali?', acceptedAnswer: { '@type': 'Answer', text: 'IDR 300,000 per hour per host with a 3-hour minimum, subject to 11% tax + 10% service charge. Scale by adding hosts at the same rate.' } },
        { '@type': 'Question', name: 'What is the difference between a hostess and a waiter?', acceptedAnswer: { '@type': 'Answer', text: 'Hosts manage guest experience and event flow — arrivals, registration, seating, timing and VIP care. Waiters manage food and beverage service at the table.' } },
        { '@type': 'Question', name: 'How many hosts do I need?', acceptedAnswer: { '@type': 'Answer', text: 'One per 25 seated guests, one per 40 standing, plus a senior host above 50 guests.' } },
        { '@type': 'Question', name: 'Can hosts handle registration and check-in?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — guest lists, badges, gift tables and arrival dietary confirmations are standard inclusions.' } },
        { '@type': 'Question', name: 'What do hosts wear?', acceptedAnswer: { '@type': 'Answer', text: 'Professional attire — black suit or elegant dress depending on formality; custom branded uniforms available for corporate events.' } },
        { '@type': 'Question', name: 'Do your hosts speak multiple languages?', acceptedAnswer: { '@type': 'Answer', text: 'All hosts speak fluent English; many speak Mandarin, Japanese, French or Arabic.' } },
        { '@type': 'Question', name: 'Can hosts manage VIP guests?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Senior hosts handle discreet VIP arrivals, dedicated seating, special requests and privacy protection.' } },
        { '@type': 'Question', name: 'How far in advance should I book, and where do you operate?', acceptedAnswer: { '@type': 'Answer', text: '3–7 days standard; 2–4 weeks for large peak-season events. All of Bali covered — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and beyond.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id' },
        { '@type': 'ListItem', position: 2, name: 'In-Villa Service', item: 'https://mychef.id/in-villa-service' },
        { '@type': 'ListItem', position: 3, name: 'Host & Hostess', item: 'https://mychef.id/in-villa-service/host-hostess' },
      ],
    },
  ],
}

const PRICING_TIERS = [
  {
    title: 'Event Host Service',
    price: 'IDR 300,000',
    unit: '/hour',
    features: ['Minimum 3 hours', 'Guest greeting & registration', 'Guest direction & flow', 'Timeline coordination', 'Professional, English-speaking'],
    bestFor: 'Villa parties, weddings, and corporate events',
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
  { q: 'How much does it cost to hire event hosts or hostesses in Bali?', a: 'IDR 300,000 per hour per host, with a 3-hour minimum. Rates are ++ (11% tax + 10% service charge). Scale simply by adding hosts at the same rate.' },
  { q: 'What is the difference between a hostess and a waiter?', a: 'Hosts manage the guest experience and the event\'s flow — arrivals, registration, seating, timing and VIP care. Waiters manage food and beverage service at the table. Larger events typically need <a href="/in-villa-service/waiters">both a host team and waiter teams</a>.' },
  { q: 'How many hosts do I need?', a: 'One per 25 seated guests, one per 40 standing. Add a senior host above 50 guests to lead the team.' },
  { q: 'Can hosts handle registration and check-in?', a: 'Yes — guest lists, badges, gift tables and arrival dietary confirmations are standard inclusions.' },
  { q: 'What do hosts wear?', a: 'Professional attire — black suit or elegant dress depending on formality. Custom branded uniforms are available for corporate events.' },
  { q: 'Do your hosts speak multiple languages?', a: 'All hosts speak fluent English; many speak Mandarin, Japanese, French or Arabic. Share your guest demographics and we will match accordingly.' },
  { q: 'Can hosts manage VIP guests?', a: 'Yes. Senior hosts are experienced in discreet VIP handling — private arrivals, dedicated seating, special requests and privacy protection.' },
  { q: 'How far in advance should I book, and where do you operate?', a: '3–7 days for standard events; 2–4 weeks for large events in peak season. We cover all of Bali — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and surrounding regions.' },
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
        title={getPageMeta('in-villa-service-host-hostess').title}
        description={getPageMeta('in-villa-service-host-hostess').description}
        canonical={getPageMeta('in-villa-service-host-hostess').canonical}
        ogImage={getPageMeta('in-villa-service-host-hostess').ogImage}
        jsonLd={[
          HOST_JSON_LD,
          howToSchema({
            name: 'How to Hire a Host or Hostess in Bali',
            description: 'Book professional hosts and hostesses for your Bali villa event in 4 easy steps.',
            totalTime: 'PT15M',
            steps: [
              { name: 'Choose your host service', text: 'Select from guest welcome, event direction, or front-of-house management.' },
              { name: 'Share event details', text: 'Send your date, villa location, guest count, and event type via WhatsApp.' },
              { name: 'Confirm staffing plan', text: 'We match you with experienced hosts and brief them on your event flow within 1 hour.' },
              { name: 'Welcome your guests', text: 'Hosts arrive early in professional attire, greet guests, and manage the flow throughout your event.' },
            ],
          }),
        ]}
      />
{/* Hero */}
<section className="relative min-h-[85vh] flex items-center overflow-hidden">
  <div className="absolute inset-0">
    <img src="/generated/mychef-staffing-bali-staffing-hero.webp" alt="Villa host and hostess hire Bali greeting guests at a private villa event" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
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
      { label: 'Villa Hosts' },
    ]} theme="dark" className="px-0 pt-0 pb-8" />
    <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-Villa Service</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Host & Hostess Hire in Bali — Professional Event Reception
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Professional hosts and hostesses for weddings, corporate functions and villa events across Bali. 
            Guest welcome, registration, seating coordination and event flow — the first and last impression of your event. 
            From IDR 300,000 per hour, 3-hour minimum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-host-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
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
          <SectionHeader eyebrow="Pricing" title="Host Service Pricing" subtitle="One simple net hourly rate, with a 3-hour minimum." />
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

      {/* Photo gallery */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Gallery" title="Hosting done right" subtitle="Warm welcomes at Bali villa events." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { src: '/generated/mychef-host-1.webp', alt: 'Villa hostess in Bali welcoming guests at a private villa event' },
              { src: '/generated/mychef-host-2.webp', alt: 'Villa host in Bali coordinating a private villa dinner party' },
              { src: '/generated/mychef-host-3.webp', alt: 'Villa hostess in Bali guiding guests at a private villa celebration' },
              { src: '/generated/mychef-host-4.webp', alt: 'Villa hosts in Bali greeting arriving guests at a private villa entrance' },
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
          { name: 'Wedding Couple', location: 'Melbourne', quote: 'Our host team of 4 managed 120 guests flawlessly. Registration, seating, timeline — everything ran like clockwork. We did not worry about a thing.', rating: 5 },
          { name: 'Corporate Event Manager', location: 'Singapore', quote: 'Hired 6 hosts for our annual dinner. Bilingual team, professional, and incredibly organised. Guest feedback was outstanding.', rating: 5 },
          { name: 'Private Party Host', location: 'Canggu', quote: 'Two hosts for our 50th birthday. They greeted every guest by name, managed the flow, and kept the evening on track. Essential service.', rating: 5 },
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

      {/* Content depth section: Why Host Hire in Bali */}
      <section className="py-12 bg-[#FAFAF8] border-t border-[#E8E6E3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mb-6">Why Hire a Professional Host for Your Bali Event?</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            At a private villa event in Bali, the first person a guest encounters sets the tone for everything that follows. A professional event host or hostess manages that critical first impression — greeting guests with warmth and precision, managing registration and seating, directing traffic across the venue, and coordinating quietly with the catering and service teams to keep the event running on schedule.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Unlike a hotel ballroom where staff are embedded in the venue, a private villa event in Bali needs its hospitality team built from scratch. Our Indonesian hosts are selected for both their presentation and their ability to manage the unexpected — a late arrival, a vendor running behind, a seating conflict — with grace and calm that guests never see. They work bilingual by default, and can be matched to your guest demographics including Mandarin, Japanese, or Arabic speaking needs.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            For weddings, corporate dinners, and milestone celebrations across Seminyak, Canggu, Ubud, and Uluwatu, a dedicated host team is what separates a good event from one guests remember years later.
          </p>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">What's Included in Your Host Service Experience</h2>
          <ul className="space-y-3 text-[#4A4745]">
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Guest greeting and welcome:</strong> Hosts stationed at arrival points to greet every guest by name, offer a warm welcome, and ensure the entry experience matches the calibre of your event.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Registration management:</strong> Check-in lists, name tags, gift table coordination, and dietary confirmation handled on arrival without delays or confusion.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Venue direction and wayfinding:</strong> Guests directed to tables, bars, ceremony areas, and facilities confidently — no wandering, no uncertainty.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Timeline and vendor coordination:</strong> Hosts communicate with chefs, photographers, DJs, and florists to keep the event running to schedule — including calling cues for speeches, entrances, and course changes.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>VIP management:</strong> Senior hosts experienced in discreet management of high-profile guests — private arrivals, dedicated seating, special requests handled with complete discretion.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Problem resolution:</strong> Last-minute seating changes, late vendors, or unexpected guest requirements — the host team absorbs every issue before it reaches the host or the guests.</span></li>
          </ul>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">Host and Hostess Hire Pricing in Bali</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Event host hire in Bali is priced at one simple net hourly rate: <strong className="text-[#1A1A1A]">IDR 300,000 per hour, with a 3-hour minimum</strong>. This covers guest greeting, registration, venue direction, and timeline coordination — whether you are hosting an intimate villa dinner, a small corporate function, or a relaxed celebration.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            For larger weddings, corporate galas, and conferences, simply add more hosts at the same <strong className="text-[#1A1A1A]">IDR 300,000 per hour, 3-hour minimum</strong> rate to scale coverage — VIP management, multi-station reception, and bilingual support included. One host per 25 seated guests, or one per 40 standing guests, is a good starting point.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            All hosts arrive briefed on your event, wearing professional attire matched to your formality level. Custom branded uniforms are available for corporate events. Contact us via WhatsApp to discuss your event and receive a same-day quote.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-3 font-semibold">Explore More Services</p>
          <h3 className="font-playfair text-3xl text-[#1A1A1A] mb-6">You might also need</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/in-villa-service" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">in-villa service hub</h4>
              <p className="text-xs text-[#4A4745]">Browse the full staffing hub for guest-facing support across your event.</p>
            </Link>
            <Link to="/in-villa-service/waiters" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">waiter teams for table service</h4>
              <p className="text-xs text-[#4A4745]">Add polished table service for seated dinners, receptions, and events.</p>
            </Link>
            <Link to="/in-villa-service/bartenders" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">bar team for your event</h4>
              <p className="text-xs text-[#4A4745]">Keep drinks flowing with a professional bar team and full setup.</p>
            </Link>
            <Link to="/events/weddings" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">wedding planning & catering</h4>
              <p className="text-xs text-[#4A4745]">Plan weddings, receptions, and celebrations with myCHEF.</p>
            </Link>
            <Link to="/events/corporate-events" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">corporate event production</h4>
              <p className="text-xs text-[#4A4745]">Professional event management for conferences, dinners, and brand events.</p>
            </Link>
            <Link to="/blog/hostess-hire-bali" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">guide: what event hostesses do</h4>
              <p className="text-xs text-[#4A4745]">Read the guide to host and hostess roles at villa events.</p>
            </Link>
          </div>
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-staffing-bali-staffing-hero.webp" alt="Professional villa hosts in Bali managing a private villa event" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Book Your Host Team</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your event details and we will assemble the perfect host team.
            Reply within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-host-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
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
              { label: 'Waiters', href: '/in-villa-service/waiters', desc: 'Professional table service.' },
              { label: 'Bartenders', href: '/in-villa-service/bartenders', desc: 'Cocktail and bar service.' },
              { label: 'Butlers', href: '/in-villa-service/butlers', desc: 'Discreet villa hosting.' },
              { label: 'Sommelier', href: '/in-villa-service/sommelier', desc: 'Wine pairing and service.' },
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
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="in-villa-host"
        serviceName="host and hostess in Bali"
        intent="host service and pricing"
      />
    </div>
  )
}