import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import {
  MessageCircle, Calendar,
  Users,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20a%20corporate%20event%20proposal.%20Format%3A%20%20Date%3A%20%20Guests%3A%20%20Venue%20type%3A%20'
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const FORMATS = [
  {
    title: 'Corporate Day Event',
    price: <AllInPrice price={1200000} />,
    guestRange: '20–100 guests',
    description: 'Breakfast, two coffee breaks, lunch and afternoon snack — plus AV setup (projector, screen, sound), a day coordinator, dietary management, name badges, signage and tax invoice. Conferences, training days and one-day offsites, end to end.',
    features: ['Breakfast + 2 coffee breaks + lunch + snack', 'AV setup (projector, screen, sound)', 'Day coordinator', 'Dietary management', 'Name badges + signage', 'Tax invoice'],
  },
  {
    title: 'Multi-Day Retreat Production',
    price: <AllInPrice price={2500000} suffix="/person/day" />,
    guestRange: '10–50 guests',
    description: 'Three meals and two snacks daily with a retreat coordinator, team-building activity support and full dietary management across the programme. (For catering-only multi-day pricing, see corporate retreat catering.)',
    features: ['3 meals + 2 snacks/day', 'Retreat coordinator', 'Team-building activity support', 'Full dietary management', 'Daily fresh sourcing', 'Tax invoice'],
    highlighted: true,
  },
  {
    title: 'Product Launch / Brand Activation',
    price: 'Custom quoted',
    guestRange: '50–300 guests',
    description: 'Catering plus AV, lighting, decor, brand staging and full coordination, with live-streaming, photography and a partner venue network available. NDA-friendly for embargoed launches.',
    features: ['Catering + AV + lighting', 'Brand staging + decor', 'Event coordinator', 'Live-streaming option', 'Photography + video', 'Partner venue network'],
  },
]

const CAPACITY_OVERVIEW = [
  { type: 'Day Events', range: '20 – 100 guests', desc: 'Conferences, offsites, training days. Full AV + coordination.' },
  { type: 'Multi-Day Retreats', range: '10 – 50 guests', desc: 'Wellness, team-building, executive retreats. On-site coordinator daily.' },
  { type: 'Product Launches', range: '50 – 300 guests', desc: 'Brand activations, gala dinners, press events. Full production.' },
]

const FAQS = [
  { q: 'What does corporate event catering in Bali cost?', a: 'Day events run IDR 1,200,000++ per person including food, AV and coordination; multi-day retreat production runs IDR 2,500,000++ per person per day. Launches are custom quoted. All prices are subject to 11% government tax + 10% service charge.' },
  { q: 'What are your B2B payment terms?', a: '30% deposit at booking, 50% before the event and 20% on delivery. Net-30 invoicing is available with a credit check for repeat corporate buyers.' },
  { q: 'Can you issue a tax invoice (faktur pajak)?', a: 'Yes — we are NPWP-registered and issue faktur pajak on request at the standard 11% PPN.' },
  { q: 'Do you carry liability insurance?', a: 'Yes — public and product liability, with certificates provided on request.' },
  { q: 'How do you manage dietary restrictions for large groups?', a: 'A pre-event dietary form goes out 14 days before. Every dish is labelled, and halal, vegan, gluten-free, nut and shellfish allergies are briefed to the service team against the real guest list.' },
  { q: 'Can you work in villas, resorts and temporary builds?', a: 'Yes — villas, resort function rooms, private venues and temporary structures. The proposal states venue, kitchen, power and access assumptions explicitly so your ops team can flag issues early.' },
  { q: 'What lead times do you need?', a: 'Day events: two weeks. Multi-day retreats: four to six weeks. Product launches with custom builds: six to twelve weeks.' },
  { q: 'Can you handle confidential launches and VIPs?', a: 'Yes — NDA-friendly processes, secure guest-list handling, and VIP protocols including personalised meal service and security coordination.' },
]

export default function EventsCorporatePage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.corporate-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.corporate-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Corporate Event Catering Bali | Full-Service Production"
        description="Corporate event catering in Bali: offsites, launches, boardroom dinners with full production, NPWP-ready invoicing & executive service. WhatsApp myCHEF."
        canonical={`${SITE}/events/corporate-events`}
        ogImage={`${SITE}/generated/mychef-events-bali-hero-corporate.webp`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Corporate Event Catering & Production Bali',
            provider: {
              '@type': 'Organization',
              name: 'myCHEF.id',
              url: 'https://mychef.id',
              telephone: '+62 896-7407-2020',
              email: 'bali@mychef.id',
            },
            areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
            description: 'Full-production corporate events in Bali: offsites, conferences, product launches and gala dinners with catering, AV, staging, coordination, NPWP invoicing and liability insurance.',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              price: '1200000',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '1200000',
                priceCurrency: 'IDR',
                unitText: 'per guest, before 11% government tax + 10% service charge',
              },
              description: 'Corporate day events from IDR 1,200,000++/guest; multi-day retreat production IDR 2,500,000++/person/day; launches custom quoted',
            },
            url: `${SITE}/events/corporate-events`,
          },
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Corporate Events', `${SITE}/events/corporate-events`, 'Events', `${SITE}/events`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-events-bali-hero-corporate.webp" alt="Corporate team lunch at a modern Bali villa with professional service" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Corporate Events' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Full-Service Corporate Event Production
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Corporate Event Catering in Bali — Full Production, One Team
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            Corporate events in Bali, fully produced: menus, coffee breaks, service staff, AV coordination, staging and cleanup managed under one proposal and one invoice. For offsites, conferences, product launches and gala nights from 10 to 300 guests.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-corporate-hero" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Request Corporate Event Proposal
            </a>
            <a href="/corporate-case-studies" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> See Case Studies
            </a>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            From IDR 1,200,000++/guest · NPWP-registered invoicing · Liability insured · Villas, resorts, function rooms & temporary builds
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white corporate-content corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                One team for food, floor and production
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                One team for food, floor and production
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Corporate hosts usually need one supplier who thinks beyond the lunch menu. We cover breakfast service, coffee stations, plated or buffet lunches, networking drinks, dietary mapping, floor staff, AV, staging and the practical realities of running hospitality inside a villa, private venue or temporary conference setup. Timing is driven by agenda blocks, speakers, registration and transport windows — not by diners — and the whole operation is planned that way.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                If your brief is narrower — food and service only, no production — our <Link to="/catering/corporate-catering" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">catering-only corporate service</Link> is the right page. For a multi-day program where every meal is covered across several days, see <Link to="/corporate-retreat-catering-bali" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">multi-day corporate retreat catering</Link>.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-corporate-conference.webp" alt="Corporate conference setup with coffee break catering in a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Formats & pricing" title="Event formats & pricing" subtitle="Prices per guest, subject to 11% government tax + 10% service charge (++)." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            Day events cover the full meeting rhythm from breakfast through networking. Retreats layer meals across several days with more dietary planning and kitchen logistics. Launches and gala-style events need a custom quote because staging, guest flow, and venue production can change dramatically by brief. To see how these formats play out in practice, browse our{' '}
            <Link to="/corporate-case-studies" className="text-[#2C5F7C] underline underline-offset-2 hover:text-[#C5A028] transition-colors">corporate event case studies</Link>{' '}
            for real budgets, headcounts, and outcomes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMATS.map((format) => <EventFormatCard key={format.title} {...format} accent={ACCENT} />)}
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <GroupTotalCalculator pricePerPerson={1200000} minGuests={20} maxGuests={100} defaultGuests={40} accent={ACCENT} />
            <GroupTotalCalculator pricePerPerson={2500000} minGuests={10} maxGuests={50} defaultGuests={20} accent={ACCENT} />
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {CAPACITY_OVERVIEW.map((item) => (
              <div key={item.type} className="rounded-2xl border border-[#E8E6E3] bg-white p-5 text-center">
                <Users className="w-7 h-7 text-[#2C5F7C] mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{item.type}</h3>
                <p className="text-sm font-semibold text-[#2C5F7C] mb-2">{item.range}</p>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Production capability
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                AV, staging, coordination
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                The difference between a catered event and a produced one is everything around the food. Our production scope includes projector, screen and sound for conferences; LED wall and pro sound for launches; stage, lighting and decor for gala formats; registration flows, name badges and signage; and a named coordinator running the floor so your agenda holds. Add-ons are quoted as line items — LED wall and pro sound from IDR 25M–60M, simultaneous translation from IDR 8M (two languages), guest transport from IDR 3M–8M for 50 guests, team-building activities from IDR 1.5M per person.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-corporate-plated.webp" alt="Corporate event production setup with AV and staging in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-corporate-villa.webp" alt="Bali villa venue set up for a corporate day event" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Villa and venue logistics
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Villa and venue production logistics
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                We scope villas, resort function rooms, private venues and temporary event builds. The first proposal states the venue assumptions that matter: kitchen setup, power, service routes, weather plan B, access and loading, and house rules. A villa can absolutely host a 100-person conference — if the production plan respects the property. Need extra hands? Our <Link to="/in-villa-service" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">event staff, waiters and bartenders</Link> scale with the brief, and <Link to="/bar-services" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">bar programs for corporate events</Link> cover everything from coffee stations to cocktail receptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader eyebrow="Procurement & invoicing" title="Procurement, invoicing and insurance" subtitle="B2B-ready documentation, liability cover and payment terms your finance team can approve." dark />
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm font-semibold text-white mb-2">NPWP-registered</h3>
                  <p className="text-sm text-white/[70%] leading-relaxed">Full tax invoices; faktur pajak issued on request (standard 11% PPN).</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm font-semibold text-white mb-2">Itemised proposals</h3>
                  <p className="text-sm text-white/[70%] leading-relaxed">Food, staffing, rentals and production separated so finance teams can compare like-for-like.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm font-semibold text-white mb-2">Liability insurance</h3>
                  <p className="text-sm text-white/[70%] leading-relaxed">Public and product liability, certificate on request.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm font-semibold text-white mb-2">B2B payment schedule</h3>
                  <p className="text-sm text-white/[70%] leading-relaxed">30% deposit at booking, 50% before the event, 20% on delivery; net-30 invoicing available with credit check for repeat corporate buyers.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm font-semibold text-white mb-2">Bilingual team</h3>
                  <p className="text-sm text-white/[70%] leading-relaxed">English and Bahasa Indonesia; Mandarin available on request.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm font-semibold text-white mb-2">NDA-friendly</h3>
                  <p className="text-sm text-white/[70%] leading-relaxed">Secure guest-list handling and VIP protocols for launches and executive visits.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-corporate-executive.webp" alt="Executive corporate dinner environment at a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Track record" title="Corporate events we've produced" subtitle="180+ corporate events delivered, 98% client satisfaction." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            Recent work includes a 34-person three-day leadership offsite in Uluwatu with zero dietary incidents across nine services; a five-course partner dinner for a European venture fund that landed on budget to the rupiah; a 52-guest, five-day agency retreat with fifteen distinct menus; and a 120-delegate conference dinner served inside a 45-minute window. Full parameters in our <Link to="/corporate-case-studies" className="text-[#2C5F7C] underline underline-offset-2 hover:text-[#C5A028] transition-colors">corporate event case studies</Link>.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Corporate Gala Dinner', image: '/generated/mychef-events-bali-corporate-executive.webp' },
              { title: 'Team Lunch Service', image: '/generated/mychef-events-bali-hero-corporate.webp' },
              { title: 'Conference Catering', image: '/generated/mychef-events-bali-corporate-conference.webp' },
              { title: 'Networking Reception', image: '/generated/mychef-events-bali-corporate-networking.webp' },
            ].map((event) => (
              <div key={event.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white corporate-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Corporate events FAQ" subtitle="B2B-focused answers for procurement and event teams." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-[#C5A028] mb-3">Also available</p>
          <h2 className="text-2xl font-semibold text-[#1A1916] mb-8">Explore More myCHEF Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: '/events', label: 'All Events' },
              { to: '/catering', label: 'Villa Catering' },
              { to: '/in-villa-service', label: 'In-Villa Staff' },
              { to: '/staffing', label: 'Staffing' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 px-4 rounded border border-[#C5A028]/30 text-[#1A1916] hover:bg-[#C5A028]/10 transition text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] corporate-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Request a corporate event proposal"
            subtitle="Share your format, dates, headcount, venue type and objectives. We reply on WhatsApp within the hour and deliver a detailed, itemised proposal your approvers can sign off."
            packageOptions={['Corporate Day Event', 'Multi-Day Retreat Production', 'Product Launch / Brand Activation']}
            fields={[
              { name: 'format', label: 'Event Format', type: 'select', required: true },
              { name: 'company', label: 'Company Name', type: 'text', required: true },
              { name: 'date', label: 'Event Date(s)', type: 'text', placeholder: 'e.g. 15-17 June 2026', required: true },
              { name: 'duration', label: 'Duration / Run of Show', type: 'text', placeholder: 'e.g. 3 days, breakfast to networking dinner' },
              { name: 'guests', label: 'Headcount', type: 'number', placeholder: 'e.g. 40', required: true },
              { name: 'area', label: 'Preferred Location', type: 'text', required: true },
              { name: 'venue_type', label: 'Venue Type', type: 'text', placeholder: 'Villa, resort, function room, beach club...' },
              { name: 'agenda', label: 'Event Agenda', type: 'textarea', placeholder: 'Breakfast, sessions, lunch, networking drinks, gala dinner...' },
              { name: 'dietary', label: 'Dietary Breakdown', type: 'textarea', placeholder: 'e.g. 5 vegan, 3 gluten-free, 10 halal...' },
              { name: 'budget', label: 'Budget Range (IDR)', type: 'text' },
              {
                name: 'procurement',
                label: 'Procurement / Invoice Requirements',
                type: 'textarea',
                placeholder: 'PO, NPWP invoice, line-item proposal, payment terms, approvals...',
                rows: 4,
              },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text', required: true },
            ]}
            whatsappName="Sofia"
            accent={ACCENT}
            messageIntro="Hi Sofia, I'm planning a corporate event in Bali and need a proposal."
          />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ RELATED EVENTS ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Other Events</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Retreats', href: '/events/retreats', desc: 'Wellness and team retreats.' },
              { label: 'Weddings', href: '/events/weddings', desc: 'Villa wedding catering and planning.' },
              { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Private celebrations and mixers.' },
              { label: 'Birthdays', href: '/events/birthdays', desc: 'Milestone birthday celebrations.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
              { label: 'In-Villa Service', href: '/in-villa-service', desc: 'Waiters, bartenders, and staff.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TaxFooter />
      <StickyMobileCTA
        pageSource="events-corporate"
        serviceName="corporate event catering in Bali"
        intent="corporate event packages and pricing"
      />
    </div>
  )
}
