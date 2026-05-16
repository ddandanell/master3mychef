import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Calendar, Monitor,
  Bus, Building2, Globe, FileText, Shield,
  Users,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema, detailedServiceSchema, offerSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20a%20corporate%20event%20quote.'
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const FORMATS = [
  {
    title: 'Corporate Day Event',
    price: <AllInPrice price={1200000} />,
    guestRange: '20–100 guests',
    description: 'Breakfast + 2 coffee breaks + lunch + afternoon snack. AV, coordinator, dietary management included.',
    features: ['Full-day food', 'AV setup (projector, screen, sound)', 'Day coordinator', 'Dietary management', 'Name badges + signage', 'Tax invoice'],
  },
  {
    title: 'Multi-Day Retreat',
    price: <AllInPrice price={2500000} suffix="/person/day" />,
    guestRange: '10–50 guests',
    description: '3 meals + 2 snacks daily. Retreat coordinator, team-building activities, dietary management.',
    features: ['3 meals + 2 snacks/day', 'Retreat coordinator', 'Dietary management', 'Team-building activities', 'Daily fresh sourcing', 'Tax invoice'],
    highlighted: true,
  },
  {
    title: 'Product Launch / Brand Activation',
    price: 'Quote on request',
    guestRange: '50–300 guests',
    description: 'Catering + AV + lighting + decor + brand staging + full coordination. Partner venues available.',
    features: ['Catering + AV + lighting', 'Brand staging + decor', 'Event coordinator', 'Live-streaming option', 'Photography + video', 'Partner venue network'],
  },
]

const CAPACITY_OVERVIEW = [
  { type: 'Day Events', range: '20 – 100 guests', desc: 'Conferences, offsites, training days. Full AV + coordination.' },
  { type: 'Multi-Day Retreats', range: '10 – 50 guests', desc: 'Wellness, team-building, executive retreats. On-site chef daily.' },
  { type: 'Product Launches', range: '50 – 300 guests', desc: 'Brand activations, gala dinners, press events. Full production.' },
]

const B2B_TRUST = [
  { icon: FileText, title: 'Tax Invoice', desc: 'NPWP-registered. Faktur pajak issued on request.' },
  { icon: Shield, title: 'Liability Insurance', desc: 'Public + product liability coverage. Certificate on request.' },
  { icon: Globe, title: 'Bilingual Team', desc: 'English + Bahasa. Mandarin available on request.' },
  { icon: Building2, title: 'Net-30 Terms', desc: 'Available with credit check for repeat corporate buyers.' },
]

const B2B_EXTENDED = [
  { icon: FileText, title: 'Invoicing & NPWP', desc: 'Full tax invoices with NPWP. Faktur pajak on request. Standard 11% PPN.' },
  { icon: Shield, title: 'Contracts & Insurance', desc: 'Standard event contract included. Public liability + product liability certificates provided.' },
  { icon: Users, title: 'Security & Privacy', desc: 'NDA-friendly for product launches. Secure guest list handling. VIP protocols available.' },
]

const SAMPLE_AGENDA_DAY = [
  { time: '08:00', activity: 'Breakfast + Registration' },
  { time: '09:00', activity: 'Opening Session' },
  { time: '10:30', activity: 'Coffee Break' },
  { time: '12:00', activity: 'Lunch' },
  { time: '14:00', activity: 'Workshops' },
  { time: '15:30', activity: 'Afternoon Snack' },
  { time: '17:00', activity: 'Closing + Networking' },
]

const SAMPLE_AGENDA_RETREAT = [
  { day: 'Day 1', activity: 'Arrival lunch · Welcome dinner · Ice-breaker' },
  { day: 'Day 2', activity: 'Breakfast · Morning session · Lunch · Team-building · Sunset dinner' },
  { day: 'Day 3', activity: 'Breakfast · Closing session · Farewell lunch · Departure' },
]

const LOGO_WALL = [
  'Tech Co.', 'FMCG Global', 'Fintech Startup', 'Consulting Firm', 'Health Brand', 'Travel Platform',
]

const ADDONS = [
  { icon: Monitor, title: 'LED Wall + Pro Sound', price: '+IDR 25M – 60M' },
  { icon: Globe, title: 'Simultaneous Translation', price: '+IDR 8M (2 languages)' },
  { icon: Bus, title: 'Guest Transport', price: '+IDR 3M – 8M (50 guests)' },
  { icon: Building2, title: 'Team-Building Activity', price: '+IDR 1.5M/pp' },
]

const FAQS = [
  { q: 'Can you issue a tax invoice (faktur pajak)?', a: 'Yes — we are NPWP-registered. Tax invoice issued upon 50% deposit. Standard rate 11% PPN.' },
  { q: 'What are your B2B payment terms?', a: '30% deposit at booking. 50% before event. 20% at delivery. Net-30 invoicing available with credit check for repeat corporate buyers.' },
  { q: 'Do you have liability insurance?', a: 'Yes — public liability + product liability covered. Insurance certificate provided on request.' },
  { q: 'Can you handle Bahasa + English speakers?', a: 'Yes — all coordinators bilingual. Mandarin available on request.' },
  { q: 'How do you manage dietary restrictions for large groups?', a: 'Pre-event dietary form sent 14 days before. We label every dish at the buffet / plate. Halal / vegan / GF / nut allergy / shellfish allergy all handled.' },
  { q: 'Can you organize the whole offsite?', a: 'Yes — through our villa management + activity partners. We become your single coordinator.' },
  { q: 'Lead time for corporate events?', a: 'Day events: 2 weeks. Multi-day retreats: 4–6 weeks. Product launches with custom build: 6–12 weeks.' },
  { q: 'Can you handle global executives?', a: 'Yes — VIP handling is standard. Private dietary preferences, security coordination, and personalised meal service all available.' },
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
        title="Corporate Events Bali — Catering & Conference Food | myCHEF"
        description="Corporate event catering in Bali for offsites, conferences, launches, and retreat dinners. Food, staffing, setup, and cleanup handled under one contract."
        canonical={`${SITE}/events/corporate-events`}
        ogImage={`${SITE}/generated/events/corporate-team.webp`}
        jsonLd={[
          localBusinessSchema,
          detailedServiceSchema('Corporate Events Bali', 'myCHEF.id delivers corporate event catering in Bali for conferences, offsites, launches, and executive dinners. We coordinate food, staffing, setup, and service so your event runs smoothly from arrival to final cleanup.', `${SITE}/events/corporate-events`),
          offerSchema('Corporate Day Event', 1200000, 'IDR', `${SITE}/events/corporate-events`),
          offerSchema('Multi-Day Retreat', 2500000, 'IDR', `${SITE}/events/corporate-events`),
          {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Corporate Event Catering in Bali',
            description: 'Corporate catering at Bali villas and venues — private chef menus, service staff, team dinners, and offsite events.',
            location: { '@type': 'Place', name: 'Bali, Indonesia' },
            organizer: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          },
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Corporate Events Bali', `${SITE}/events/corporate-events`, 'Events', `${SITE}/events`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Corporate Events' }]} />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/events/corporate-team.webp" alt="Corporate team lunch setup at a Bali villa" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.10) 100%)' }}
          />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <p className="text-[#2C5F7C] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Corporate Events
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Corporate Events in Bali — Catering & Venue Support
          </h1>
          <p className="text-lg md:text-xl text-white/[80%] mb-8 max-w-xl">
            Full F&amp;B operation for offsites, conferences, launches, and gala nights — menus, coffee breaks, staffing, AV coordination, and cleanup managed under one proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C5F7C] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#244e66] transition-all">
              <Calendar className="w-4 h-4" /> Request Corporate Quote
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-corporate-cta" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
          <p className="text-sm md:text-base text-white/[70%] uppercase tracking-[0.2em] text-left">
            From IDR 1.2M++/guest · NPWP invoicing and venue coordination available
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white corporate-content corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Corporate Catering, Operationally Built
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                myCHEF handles the food operation and the venue reality at the same time
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Corporate hosts usually need one supplier who can think beyond a lunch menu. We cover breakfast service, coffee stations, plated or buffet lunches, networking drinks, dietary mapping, floor staff, and the practical realities of running hospitality inside a villa, private venue, or temporary conference setup. That matters because timing is not driven by diners — it is driven by agenda blocks, speakers, registration, workshops, and transport windows.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                We are particularly useful when the event needs to feel polished without becoming hotel-heavy. You get a service team that understands guest movement, a proposal that can sit next to procurement requirements, and menus that can flex between healthy conference food and more celebratory evening service. If you need a narrower food-only brief, our <a href="/catering/corporate-catering" className="text-[#2C5F7C] underline underline-offset-4">corporate catering page</a> covers that too.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/corp-conference.webp" alt="Corporate conference setup with catered service in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Event Formats" subtitle="Structured around real corporate use cases: one-day events, multi-day retreats, and higher-production launches." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            These packages give teams an operational starting point. Day events cover the full meeting rhythm from breakfast through networking. Retreats layer meals across several days with more dietary planning and kitchen logistics. Launches and gala-style events need a more custom quote because staging, guest flow, and venue production can change dramatically by brief.
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
                Corporate Menu Standards
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Menus designed for long working days, international guests, and labelled dietary confidence
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Corporate food needs to do more than taste good. It has to support attention span, avoid heavy mid-day crashes, and still feel generous enough that guests do not disappear off-site looking for a better meal. We usually recommend lighter breakfast spreads, well-paced coffee breaks, and lunches that feel substantial without killing the room for the next session. For evening events, we can shift into more celebratory buffets, plated service, or passed canapés depending on the brief.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                Halal-friendly menus, vegetarian lines, vegan dishes, gluten-free plates, allergy protocols, and labelled buffet cards are standard rather than exceptional. We brief the entire kitchen against the dietary map and make sure service staff know what each guest can and cannot be served, which matters far more than putting labels on the table five minutes before lunch starts.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/corp-plated.webp" alt="Plated corporate dinner service by myCHEF in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/events/corporate-team.webp" alt="Professional corporate service team at a Bali venue" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Staffing & Service
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Professional staff, clear uniforms, and one service manager holding the floor
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Corporate guests notice service more than they comment on it. Coffee never running dry, registration snacks arriving on time, plates cleared before the next speaker, and the evening drinks setup appearing without chaos — that is the level we plan for. We assign a service manager to the floor, brief staff on the agenda, and coordinate with venue management or villa teams so the hospitality side stays in step with the wider programme.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {B2B_TRUST.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-4">
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Full-Day Operations
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                We feed people all day without breaking the rhythm of the programme
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                A strong corporate food plan is mostly about timing discipline. Breakfast must be ready before arrivals. Coffee breaks need to reset fast enough that nobody misses the next session. Lunch has to land with enough substance to satisfy guests, but without making the afternoon impossible. When the programme includes networking drinks, we reposition the service from work mode to hospitality mode without the event feeling like it is starting over.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] overflow-hidden">
                  <div className="px-5 py-4 border-b border-[#E8E6E3] text-sm font-semibold text-[#1A1A1A]">Single-Day Conference Flow</div>
                  {SAMPLE_AGENDA_DAY.map((item) => (
                    <div key={`${item.time}-${item.activity}`} className="flex items-center gap-4 px-5 py-4 border-t border-[#E8E6E3] first:border-t-0">
                      <span className="text-sm font-semibold text-[#2C5F7C] w-16 shrink-0">{item.time}</span>
                      <span className="text-sm text-[#4A4745]">{item.activity}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] overflow-hidden">
                  <div className="px-5 py-4 border-b border-[#E8E6E3] text-sm font-semibold text-[#1A1A1A]">Multi-Day Retreat Rhythm</div>
                  {SAMPLE_AGENDA_RETREAT.map((item) => (
                    <div key={`${item.day}-${item.activity}`} className="flex items-start gap-4 px-5 py-4 border-t border-[#E8E6E3] first:border-t-0">
                      <span className="text-sm font-semibold text-[#2C5F7C] w-16 shrink-0">{item.day}</span>
                      <span className="text-sm text-[#4A4745] leading-relaxed">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/corp-networking.webp" alt="Corporate networking drinks setup in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader eyebrow="Chapter 3 — Built for Business" title="Procurement-friendly from proposal to invoice" subtitle="We understand the practical requirements around sign-off, compliance, and executive expectations." dark />
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {B2B_EXTENDED.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                    <item.icon className="w-6 h-6 text-[#2C5F7C] mx-auto mb-3" />
                    <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/[70%] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {LOGO_WALL.map((logo) => (
                  <span key={logo} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/[80%]">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/corp-executive.webp" alt="Executive corporate dinner environment in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 4 — Real Corporate Events" title="Recent Corporate Setups" subtitle="From gala-format evenings to working sessions and networking receptions." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            The gallery below reflects the breadth of work corporate teams typically ask us to cover in Bali: formal dinners, team lunches, day sessions, and standing receptions. The common thread is that every format needs a food plan, a staffing plan, and a realistic understanding of the venue footprint before the first guest arrives.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Corporate Gala Dinner', image: '/generated/corp-gala.webp' },
              { title: 'Team Lunch Service', image: '/generated/events/corporate-team.webp' },
              { title: 'Conference Catering', image: '/generated/corp-conference.webp' },
              { title: 'Networking Reception', image: '/generated/corp-networking.webp' },
            ].map((event) => (
              <div key={event.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#2C5F7C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Add-Ons
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Scale the production once the hospitality core is locked
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                Corporate events get expensive fastest when production is added before the service flow is solved. We prefer to lock food timing, staffing, and venue logistics first, then add LED walls, translation, transport, or activities according to what the programme genuinely needs. That keeps budgets defendable and reduces expensive last-minute changes once stakeholders start asking for extras.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {ADDONS.map((addon) => (
                  <div key={addon.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-5 flex items-start gap-4">
                    <div className="rounded-xl bg-[#2C5F7C]/10 p-2.5 shrink-0"><addon.icon className="w-5 h-5 text-[#2C5F7C]" /></div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1A1A1A]">{addon.title}</h3>
                      <p className="text-sm font-semibold text-[#2C5F7C]">{addon.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sticky top-24">
              <img src="/generated/corp-villa.webp" alt="Corporate villa venue setup in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <TestimonialBlock
        title="What Corporate Clients Say"
        subtitle="Operationally sharp, calm on the day, and easy for internal teams to manage."
        testimonials={[
          { name: 'HR Director, Tech Co.', location: 'Canggu Offsite (40 people)', quote: '3-day retreat, mixed dietary needs. myCHEF delivered breakfast on time daily, managed gluten-free + vegan labels cleanly, and kept the agenda running. One contact point, zero stress.', rating: 5 },
          { name: 'Event Manager, FMCG', location: 'Ubud Retreat (28 people)', quote: 'Coffee breaks are when things break. myCHEF hit every 10:30 and 15:00 time block exactly. Service manager stayed invisible but ran the whole floor. That matters for a packed 2-day agenda.', rating: 5 },
          { name: 'CEO, Fintech', location: 'Seminyak Product Launch (85 people)', quote: 'We flew in executives from 4 countries. Proposal was clear on what was included. Invoice was itemized. The team understood "corporate" meant no drama, just execution. They nailed it.', rating: 5 },
        ]}
      />

      <section className="py-20 md:py-28 bg-white corporate-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Corporate FAQ" subtitle="B2B-focused answers for procurement and event teams." />
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
                className="block py-3 px-4 rounded border border-[#C5A028]/30 text-[#1A1916] hover:bg-[#C5A028]/10 transition text-sm font-medium"
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
            title="Request Corporate Quote"
            subtitle="Share your dates, headcount, and event objectives. We will reply with a format recommendation and detailed proposal."
            packageOptions={['Corporate Day Event', 'Multi-Day Retreat', 'Product Launch / Brand Activation']}
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
      <TaxFooter />
    </div>
  )
}
