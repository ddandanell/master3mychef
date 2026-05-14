import { useEffect, useRef } from 'react'
import {
  MessageCircle, Calendar, Monitor,
  Bus, Building2, Globe, FileText, Shield,
  Users, Check,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema, serviceSchema, offerSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import EventFormatCard from '@/components/events/EventFormatCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20Sofia,%20I%20would%20like%20a%20corporate%20event%20quote.'
const SITE = 'https://mychef.id'

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
      gsap.fromTo('.corporate-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.corporate-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Corporate Events Bali | Offsites, Conferences — myCHEF"
        description="Corporate event catering in Bali. Day events from IDR 1.2M/pp, multi-day retreats from IDR 2.5M/pp/day. AV, dietary management, coordinator. Invoice-ready."
        canonical={`${SITE}/events/corporate-events`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema('Corporate Event Catering Bali', 'Corporate event catering and coordination in Bali. Day events, multi-day retreats, conferences, and product launches.', `${SITE}/events/corporate-events`, 'IDR'),
          offerSchema('Corporate Day Event', 1200000, 'IDR', `${SITE}/events/corporate-events`),
          offerSchema('Multi-Day Retreat', 2500000, 'IDR', `${SITE}/events/corporate-events`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Corporate Events', `${SITE}/events/corporate-events`, 'Events', `${SITE}/events`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Corporate Events' }]} />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/hero-corporate-events.jpg" alt="Corporate event at Bali villa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Chapter 1 — Corporate Events</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Corporate Events<br /><span className="italic">in Bali</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Day events, multi-day retreats, conferences, product launches. AV included, dietary managed, single invoice. Vetted by HR teams at international companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all">
              <Calendar className="w-4 h-4" /> Request Corporate Quote
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
          </div>
        </div>
      </section>

      <TrustStrip dark />

      {/* FORMATS */}
      <section className="py-20 md:py-28 bg-white corporate-content">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 2 — Packages" title="Corporate Packages" subtitle="Three formats for different event types and scales." />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMATS.map((f) => <EventFormatCard key={f.title} {...f} accent="#C5A028" />)}
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <GroupTotalCalculator pricePerPerson={1200000} minGuests={20} maxGuests={100} defaultGuests={30} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={2500000} minGuests={10} maxGuests={50} defaultGuests={20} accent="#C5A028" />
          </div>
        </div>
      </section>

      {/* CAPACITY OVERVIEW */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 3 — Capacity" title="Event Capacity Overview" subtitle="Flexible scale for every corporate need." />
          <div className="grid sm:grid-cols-3 gap-6">
            {CAPACITY_OVERVIEW.map((c) => (
              <div key={c.type} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 text-center hover:shadow-lg transition-all">
                <Users className="w-8 h-8 text-[#C5A028] mx-auto mb-4" />
                <h3 className="font-semibold text-[#1A1A1A] text-sm mb-1">{c.type}</h3>
                <p className="text-[#C5A028] font-semibold text-sm mb-2">{c.range}</p>
                <p className="text-[#4A4745] text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B TRUST */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 4 — B2B Trust" title="Built for Business" subtitle="The operational details that matter to procurement teams." dark />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {B2B_EXTENDED.map((t) => (
              <div key={t.title} className="bg-white/5 rounded-2xl border border-white/10 p-6 text-center">
                <t.icon className="w-8 h-8 text-[#C5A028] mx-auto mb-4" />
                <h3 className="text-white text-sm font-semibold mb-2">{t.title}</h3>
                <p className="text-white/60 text-xs">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {B2B_TRUST.map((t) => (
              <div key={t.title} className="flex items-center gap-3 text-white/80">
                <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" />
                <span className="text-xs">{t.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE AGENDAS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader eyebrow="Chapter 5 — Agendas" title="Sample Timelines" subtitle="Day event and multi-day retreat structures. Customisable to your schedule." />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Day Event</h3>
              <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden">
                {SAMPLE_AGENDA_DAY.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-4 border-t border-[#E8E6E3] first:border-t-0">
                    <span className="text-[#C5A028] font-semibold text-sm w-16 shrink-0">{item.time}</span>
                    <span className="text-[#1A1A1A] text-sm">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>3-Day Retreat</h3>
              <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden">
                {SAMPLE_AGENDA_RETREAT.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-4 border-t border-[#E8E6E3] first:border-t-0">
                    <span className="text-[#C5A028] font-semibold text-sm w-20 shrink-0">{item.day}</span>
                    <span className="text-[#1A1A1A] text-sm">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO WALL */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeader eyebrow="Chapter 6 — Clients" title="Trusted By" subtitle="Corporate clients across tech, FMCG, finance, and hospitality." />
          <div className="flex flex-wrap justify-center gap-4">
            {LOGO_WALL.map((logo) => (
              <div key={logo} className="px-6 py-4 bg-white rounded-xl border border-[#E8E6E3] text-sm font-medium text-[#4A4745] hover:border-[#C5A028]/40 transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Extras" title="Corporate Add-Ons" subtitle="Scale your event with these professional upgrades." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADDONS.map((a) => (
              <div key={a.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 flex items-start gap-4">
                <div className="bg-[#C5A028]/10 rounded-xl p-2.5 shrink-0"><a.icon className="w-5 h-5 text-[#C5A028]" /></div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{a.title}</h3>
                  <p className="text-[#C5A028] font-semibold text-sm">{a.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock title="What Corporate Clients Say" testimonials={[
        { name: 'HR Director, Tech Co.', location: 'Canggu Offsite', quote: 'myCHEF handled our 40-person offsite flawlessly. Dietary restrictions, AV, transport — all managed.', rating: 5 },
        { name: 'Event Manager, FMCG', location: 'Ubud Retreat', quote: 'The 3-day retreat catering was exceptional. Plant-forward options, on-time delivery, great team.', rating: 5 },
        { name: 'CEO, Fintech', location: 'Seminyak Product Launch', quote: 'Professional from first contact to final invoice. The branded staging and AV were spot-on.', rating: 5 },
      ]} />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Corporate FAQ" subtitle="B2B-focused answers for procurement and event teams." />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Request Corporate Quote"
            subtitle="Detailed proposal within 48 hours. Include as much detail as possible."
            packageOptions={['Day Event', 'Multi-Day Retreat', 'Product Launch']}
            fields={[
              { name: 'format', label: 'Event Format', type: 'select', required: true },
              { name: 'company', label: 'Company Name', type: 'text', required: true },
              { name: 'date', label: 'Event Date(s)', type: 'text', placeholder: 'e.g. 15-17 June 2026', required: true },
              { name: 'guests', label: 'Headcount', type: 'number', placeholder: 'e.g. 40', required: true },
              { name: 'area', label: 'Preferred Location', type: 'text', required: true },
              { name: 'dietary', label: 'Dietary Breakdown', type: 'textarea', placeholder: 'e.g. 5 vegan, 3 gluten-free, 10 halal...' },
              { name: 'budget', label: 'Budget Range (IDR)', type: 'text' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text', required: true },
            ]}
            whatsappName="Sofia"
            accent="#C5A028"
          />
        </div>
      </section>

      <PressStrip />

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Plan Your Corporate Event?</h2>
          <p className="text-white/70 text-lg mb-8">Send your dates, headcount, and objectives. We will send a detailed proposal with full cost breakdown.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#b08d23] transition-all"><Calendar className="w-4 h-4" /> Request Corporate Quote</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp Sofia</a>
          </div>
        </div>
      </section>

      <TaxFooter />
    </div>
  )
}
