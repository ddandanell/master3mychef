import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import {
  MessageCircle, Calendar, Monitor,
  Bus, Building2, Globe, FileText, Shield,
  Users,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, faqPageSchema, serviceSchema, howToSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { ArticleContentSection, Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'a corporate event in Bali', intent: 'help with catering, staff, and setup' })
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const FORMATS = [
  {
    title: 'Corporate Day Event',
    price: 'Tailored quote',
    guestRange: '20–100 guests',
    description: 'Breakfast + 2 coffee breaks + lunch + afternoon snack. AV, coordinator, dietary management included.',
    features: ['Full-day food', 'AV setup (projector, screen, sound)', 'Day coordinator', 'Dietary management', 'Name badges + signage', 'Tax invoice'],
  },
  {
    title: 'Multi-Day Retreat',
    price: 'Tailored quote',
    guestRange: '10–50 guests',
    description: '3 meals + 2 snacks daily. Retreat coordinator, team-building activities, dietary management.',
    features: ['3 meals + 2 snacks/day', 'Retreat coordinator', 'Dietary management', 'Team-building activities', 'Daily fresh sourcing', 'Tax invoice'],
    highlighted: true,
  },
  {
    title: 'Product Launch / Brand Activation',
    price: 'Tailored quote',
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

const PROPOSAL_INCLUDED = [
  'Line-item food and service budget',
  'Staffing ratios by event moment',
  'Venue, kitchen, and AV assumptions',
  'Dietary handling plan and labels',
  'Deposit, invoice, and payment schedule',
  'Named coordinator and response path',
]

const APPROVAL_CHECKS = [
  {
    title: 'Budget structure',
    desc: 'The first proposal separates food, staffing, rentals, and optional production so finance teams can compare like-for-like without guessing what is bundled.',
  },
  {
    title: 'Venue fit',
    desc: 'We call out whether the plan assumes a villa, resort function room, private venue, or temporary build so ops teams can flag access issues early.',
  },
  {
    title: 'Dietary handling',
    desc: 'The proposal states how guest dietary data is collected, labelled, and briefed to service so legal, HR, and event leads are not left inferring the process.',
  },
  {
    title: 'Contingency notes',
    desc: 'We outline the operational assumptions that matter most: weather backup, agenda drift, late arrivals, supplier timing, and what changes the cost.',
  },
]

const ADDONS = [
  { icon: Monitor, title: 'LED Wall + Pro Sound', price: 'Quoted per event' },
  { icon: Globe, title: 'Simultaneous Translation', price: 'Quoted per event' },
  { icon: Bus, title: 'Guest Transport', price: 'Quoted per event' },
  { icon: Building2, title: 'Team-Building Activity', price: 'Quoted per person' },
]

const FAQS = [
  { q: 'Can you issue a tax invoice (faktur pajak)?', a: 'Yes — we are NPWP-registered. Tax invoice issued upon 50% deposit. Standard rate 11% PPN.' },
  { q: 'What are your B2B payment terms?', a: '30% deposit at booking. 50% before event. 20% at delivery. Net-30 invoicing available with credit check for repeat corporate buyers.' },
  { q: 'Do you have liability insurance?', a: 'Yes — public liability + product liability covered. Insurance certificate provided on request.' },
  { q: 'Can you handle Bahasa + English speakers?', a: 'Yes — all coordinators bilingual. Mandarin available on request.' },
  { q: 'How do you manage dietary restrictions for large groups?', a: 'Pre-event dietary form sent 14 days before. We label every dish at the buffet / plate. Halal / vegan / GF / nut allergy / shellfish allergy all handled.' },
  { q: 'What does the first proposal include?', a: 'The first proposal covers menu structure, staffing assumptions, timing, venue/kitchen assumptions, invoice terms, and any optional rentals or AV line items so internal approval does not depend on a second explanation call.' },
  { q: 'Can you work inside resorts or function rooms, or only villas?', a: 'Yes — we can scope for villas, resorts, private venues, and temporary event builds. The important part is access, kitchen setup, service route, and venue rules, which is why we ask for venue type in the first brief.' },
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
        title="Corporate Events Bali | Offsites, Dinners & Launches — myCHEF"
        description="Corporate event catering in Bali for offsites, conferences & client dinners. Structured menus, staffing & on-site coordination. WhatsApp for a proposal."
        canonical={`${SITE}/events/corporate-events`}
        ogImage={`${SITE}/generated/mychef-events-bali-hero-corporate.webp`}
        jsonLd={[
          serviceSchema(
            'Corporate Events Bali',
            'myCHEF.id delivers corporate event catering in Bali for conferences, offsites, launches, and executive dinners. We coordinate food, staffing, setup, and service so your event runs smoothly from arrival to final cleanup.',
            `${SITE}/events/corporate-events`,
            '$$$'
          ),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Book Corporate Event Catering in Bali',
            description: 'Book professional corporate event catering for your Bali team or clients in 4 easy steps.',
            totalTime: 'PT20M',
            steps: [
              { name: 'Share your event brief', text: 'Send your event type, dates, venue, headcount, and budget via WhatsApp.' },
              { name: 'Receive custom proposal', text: 'We create a tailored menu with dietary options, service style, and staffing plan within 1 hour.' },
              { name: 'Confirm and contract', text: 'Approve the proposal, sign the agreement, and pay the 50% deposit to lock your date.' },
              { name: 'Focus on your event', text: 'We handle setup, service, and breakdown. You focus on your team and guests.' },
            ],
          }),
          breadcrumbSchema('Corporate Events Bali', `${SITE}/events/corporate-events`, 'Events', `${SITE}/events`),
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
            Chapter 1 — Corporate Events
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Corporate Events in Bali — Catering & Venue Support
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            Full F&amp;B operation for offsites, conferences, launches, and gala nights — menus, coffee breaks, staffing, AV coordination, and cleanup managed under one proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Request Corporate Quote
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-corporate-cta" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            NPWP invoicing and venue coordination available
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
                We are particularly useful when the event needs to feel polished without becoming hotel-heavy. You get a service team that understands guest movement, a proposal that can sit next to procurement requirements, and menus that can flex between healthy conference food and more celebratory evening service. If you need a narrower food-only brief, our <a href="/catering/corporate-catering" className="text-[#2C5F7C] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">catering-only corporate service</a> covers that too.
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
          <SectionHeader eyebrow="Chapter 2 — Formats" title="Event Formats" subtitle="Structured around real corporate use cases: one-day events, multi-day retreats, and higher-production launches." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            These packages give teams an operational starting point. Day events cover the full meeting rhythm from breakfast through networking. Retreats layer meals across several days with more dietary planning and kitchen logistics. Launches and gala-style events need a more custom quote because staging, guest flow, and venue production can change dramatically by brief. To see how these formats play out in practice, browse our{' '}
            <Link to="/corporate-case-studies" className="text-[#2C5F7C] underline underline-offset-2 hover:text-[#C5A028] transition-colors">corporate case studies</Link>{' '}
            for real budgets, headcounts, and outcomes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMATS.map((format) => <EventFormatCard key={format.title} {...format} accent={ACCENT} />)}
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
              <img src="/generated/mychef-events-bali-corporate-plated.webp" alt="Corporate event production setup with AV and staging in Bali" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-hero-corporate.webp" alt="Professional corporate service team at a Bali villa event" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
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
              <img src="/generated/mychef-events-bali-corporate-networking.webp" alt="Corporate networking drinks reception at a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
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
                {PROPOSAL_INCLUDED.map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/[80%]">
                    {item}
                  </span>
                ))}
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
          <SectionHeader eyebrow="Chapter 4 — Real Corporate Events" title="Recent Corporate Setups" subtitle="From gala-format evenings to working sessions and networking receptions." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            The gallery below reflects the breadth of work corporate teams typically ask us to cover in Bali: formal dinners, team lunches, day sessions, and standing receptions. The common thread is that every format needs a food plan, a staffing plan, and a realistic understanding of the venue footprint before the first guest arrives.
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
              <img src="/generated/mychef-events-bali-corporate-villa.webp" alt="Bali villa venue set up for a corporate day event" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] corporate-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Chapter 5 — Approval"
            title="What decision-makers need before they approve the deposit"
            subtitle="Instead of generic social proof, this page should help internal teams see exactly how the brief gets translated into an approvable event plan."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
            {APPROVAL_CHECKS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-6">
                <h3 className="text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
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
                className="block py-3 px-4 rounded border border-[#C5A028]/30 text-[#1A1916] hover:bg-[#C5A028]/10 transition text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-[#4A4745] text-center max-w-3xl mx-auto mt-8 leading-relaxed">
            Explore <Link to="/catering/corporate-catering" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">catering-only corporate service</Link>,{' '}
            <Link to="/corporate-retreat-catering-bali" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">multi-day corporate retreat catering</Link>,{' '}
            <Link to="/corporate-case-studies" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">corporate event case studies</Link>,{' '}
            <Link to="/in-villa-service" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">event staff, waiters and bartenders</Link>, and{' '}
            <Link to="/bar-services" className="text-[#2C5F7C] underline hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">bar programs for corporate events</Link>.
          </p>
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
      <ArticleContentSection />

      <StickyMobileCTA
        pageSource="events-corporate"
        serviceName="corporate event catering in Bali"
        intent="corporate event packages and pricing"
      />
    </div>
  )
}