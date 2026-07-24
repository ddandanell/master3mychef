import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Calendar, Check, Plane, ChefHat, PartyPopper, Users, Sparkles, ShieldCheck,
  Phone, Mail, Instagram, MapPin, Heart,
} from 'lucide-react'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'Complete Villa Experience Bali', intent: 'a tailored quotation' })
const SITE = 'https://mychef.id'

const INCLUDED = [
  { icon: Plane, title: 'Arrival, arranged', desc: 'Airport transfers coordinated through our trusted driver network: flight tracked, name board, chilled towels, the exact villa entrance briefed.' },
  { icon: Sparkles, title: 'Villa preparation', desc: 'Fridge stocked, fresh flowers, refreshments waiting, air conditioning running before you land.' },
  { icon: ChefHat, title: 'Daily private chef', desc: 'Breakfast, lunch, dinner and poolside grazing cooked fresh in your kitchen, with menus shaped around your group.' },
  { icon: Users, title: 'In-villa staffing', desc: 'Uniformed, English-speaking waiters, butlers and housekeepers across your stay, from IDR 250K/hour.' },
  { icon: PartyPopper, title: 'Events during your stay', desc: 'A birthday, anniversary or dinner party mid-week, produced end to end.' },
  { icon: Heart, title: 'Concierge extras', desc: 'Restaurant reservations, spa therapists, yoga instructors, guides and excursions arranged through our partner network.' },
  { icon: MessageCircle, title: 'On-call management', desc: 'Menu changes, extra guests, a sudden plan B: one message, handled.' },
  { icon: ShieldCheck, title: 'Cleanup & handback', desc: 'Daily housekeeping rhythm, post-event breakdown, and direct coordination with your property manager so the villa is returned intact.' },
]

const ARRIVAL_POINTS = [
  'Flight tracked and driver briefed before you land, with a name board and chilled towels at the gate.',
  'Luxury SUVs, executive sedans and minibuses through our trusted driver network.',
  'Your villa entrance, access code and arrival time shared with the team in advance.',
  'Details on our arrival transfers page — every leg coordinated as part of the stay plan.',
]

const CHEF_POINTS = [
  'Menus shaped around your preferences, dietary requirements and the rhythm of your holiday.',
  'Groceries sourced at cost with receipts; you only pay for what your chef actually uses.',
  'Poolside grazing platters, sunset canapés, multi-course tasting menus or convivial family-style feasts.',
  'A kitchen left spotless after every meal, so your villa always feels like a private retreat.',
]

const EVENT_POINTS = [
  'Milestone birthdays, anniversaries and engagement dinners transformed into fully staged villa occasions.',
  'Single occasions are quoted as villa event packages; anything else sits in our events portfolio.',
  'Every event supported by front-of-house staff, bar service and a cleanup team — you simply host.',
  'Event permission, noise expectations and banjar notification confirmed with your villa manager before scheduling.',
]

const STAFF_POINTS = [
  'Uniformed, English-speaking waiters and butlers trained to the highest standards of villa hospitality.',
  'Hostesses who greet guests, manage seating and keep the evening flowing without you lifting a finger.',
  'Daily housekeeping and HACCP-certified kitchen cleaning throughout your stay.',
  'Longer placements via our villa staffing and in-villa service teams.',
]

const CONCIERGE_POINTS = [
  'Restaurant reservations at the island’s most sought-after tables.',
  'In-villa spa therapists, yoga instructors and wellness practitioners arranged around your schedule.',
  'Cultural excursions, temple visits and private guides arranged through our partner network.',
  'Yacht charters and landing boats coordinated with trusted partners — no owned-fleet claims.',
]

const CLEANUP_POINTS = [
  'Daily villa tidying, bed refresh, laundry coordination and poolside reset — your space never feels lived in.',
  'Post-event breakdown, furniture repositioning, waste removal and deep kitchen cleaning after every celebration.',
  'Direct coordination with property managers for a seamless handback, protecting your security deposit.',
  'You depart rested and fulfilled; the team remains until every surface is returned to its original condition.',
]

const GUESTS = [
  { title: 'Multi-Generational Families', desc: 'Child-friendly menus, flexible mealtimes and staff who anticipate every need.' },
  { title: 'Celebration Weeks', desc: 'A milestone or reunion with events threaded through the stay.' },
  { title: 'Wedding Parties', desc: 'Rehearsal dinner, ceremony-day hospitality and recovery brunch across multiple villas.' },
  { title: 'Executive Retreats', desc: 'Structured dining, presentation support and transport under one plan.' },
  { title: 'HNW Travellers', desc: 'Absolute discretion and a team that adapts instantly.' },
]

const FAQS = [
  { q: 'What does the Complete Villa Experience actually include?', a: 'A fully managed stay: arranged airport transfers, villa preparation, daily private chef, in-villa staffing, event production during your stay, concierge extras, on-call management, and full cleanup and handback — all on one thread.' },
  { q: 'Can I book just part of it?', a: 'Yes. Individual services — chef days, staff, a single event — can be scoped separately, though the integrated stay is where the value compounds. For a single occasion, see villa event packages.' },
  { q: 'How much does a fully managed villa stay cost?', a: 'Quoted individually from published anchors: chef sessions from IDR 1.35M, weekly meal prep from IDR 4.5M (2–4 people), group dining from IDR 700K/person, staff from IDR 250K/hour. Every proposal is itemised per day.' },
  { q: 'Which areas of Bali do you cover?', a: 'Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Berawa, Pererenan and beyond. Remote estates and inter-island stays — message us and we will confirm logistics.' },
  { q: 'How do you handle dietary needs across a whole week?', a: 'A full dietary intake at booking — allergies, preferences, kids menus, wellness-focused eating — then menus rotate daily around it. Vegan, gluten-free and halal-friendly service is standard.' },
  { q: 'Can we host an event at the villa during our stay?', a: 'Usually, yes — we confirm event permission, noise expectations and banjar (community) notification with your villa manager before scheduling, and produce the event as part of the stay plan.' },
  { q: 'What is the plan B if something goes wrong?', a: 'If a chef cannot make it, a replacement of equivalent calibre is dispatched within two hours or you receive a 100% refund. Outdoor plans always carry a covered fallback. Your stay manager is on call throughout.' },
  { q: 'How do deposits, lead time and cancellation work?', a: 'A 50% deposit confirms your dates and locks the team. For peak season and full takeovers, book 4–6 weeks ahead; shorter stays often need only 1–2 weeks. Cancellations 14+ days before receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable (see /cancellation policy).' },
]

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Complete Villa Experience Bali',
  serviceType: 'End-to-end multi-day villa hospitality and concierge',
  provider: {
    '@type': 'LocalBusiness',
    name: 'myCHEF.id',
    url: 'https://mychef.id/',
    telephone: '+62 896-7407-2020',
    address: { '@type': 'PostalAddress', streetAddress: 'Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan', addressLocality: 'Denpasar', addressRegion: 'Bali', postalCode: '80226', addressCountry: 'ID' },
  },
  areaServed: 'Bali, Indonesia',
  description: 'Full-service villa hospitality for whole Bali stays: arranged airport transfers, villa preparation, daily private chef, in-villa staffing, events during the stay, concierge extras, on-call management and cleanup/handback on one WhatsApp thread.',
  offers: [
    { '@type': 'Offer', name: 'Daily Private Chef Session', price: '1350000', priceCurrency: 'IDR', description: 'From IDR 1.35M per session (Seminyak, Canggu, Sanur, Jimbaran, Nusa Dua); groceries at cost.' },
    { '@type': 'Offer', name: 'Weekly Meal Prep', price: '4500000', priceCurrency: 'IDR', description: 'From IDR 4.5M per week for 2–4 people.' },
    { '@type': 'Offer', name: 'In-Villa Service Staff', price: '250000', priceCurrency: 'IDR', description: 'From IDR 250K per hour per staff member.' },
  ],
}

export default function CompleteVillaExperiencePage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cve-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.cve-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Complete Villa Experience Bali | End-to-End Hospitality"
        description="Full-service villa hospitality in Bali: airport transfers, daily private chef, events, staff, concierge & cleanup — one team, arrival to departure."
        canonical={`${SITE}/complete-villa-experience`}
        ogImage={`${SITE}/generated/mychef-complete-villa-chef-kitchen-bali-landscape.webp`}
        jsonLd={[
          SERVICE_SCHEMA,
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Complete Villa Experience', `${SITE}/complete-villa-experience`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-complete-villa-chef-kitchen-bali-landscape.webp"
            alt="Private chef preparing food in a warm, modern Bali villa kitchen for a complete villa hospitality experience"
            width={1440}
            height={800}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'Complete Villa Experience' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Arrival to Departure
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Complete Villa Experience Bali — Your Whole Stay, One Team
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            A Bali villa should feel like a private sanctuary, not a logistics puzzle run from your phone. From the moment your flight is confirmed to the moment the villa is handed back, one team manages your transport, your chef, your staff, your events and your concierge — on a single WhatsApp thread, for the entire length of your stay.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="complete-villa-experience-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Plan Your Complete Stay
            </a>
            <Link to="/villa-event-packages" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> One-Event Version
            </Link>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            Send your dates, villa and group size — itemised proposal, no obligation
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white cve-content cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                The Problem This Solves
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                A Bali Villa Should Feel Like a Sanctuary, Not a Logistics Puzzle
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Too many Bali stays start the same way: an empty fridge on arrival, a driver who does not answer, a chef booked through one contact, a babysitter through another, a birthday dinner through a third — and you, coordinating it all from halfway around the world. The Complete Villa Experience exists to remove every one of those friction points. You arrive to a stocked villa and a planned week; while you are here, we stay on call; when you leave, the villa is restored and handed back flawlessly.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-villa-interior-pool-living-bali-landscape.webp" alt="Open-plan living and pool area of a luxury Bali villa prepared for guests" width={1024} height={576} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="One Stay, Every Detail"
            title="What Your Stay Includes"
            subtitle="Eight services, scoped around your villa, your group and the length of your stay — delivered by one integrated team."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDED.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-6 md:p-8">
                <item.icon className="w-6 h-6 text-[#C5A028] mb-4" />
                <h3 className="text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-[#4A4745] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 1 — Arrival
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Arrival, Arranged — From Terminal to Villa Without Friction
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Your experience begins before customs. We track your flight, dispatch a vehicle and brief your driver on the exact villa entrance. Whether you choose a premium SUV for two or a minibus for a group, every arrival is handled by our <Link to="/vip-transport-bali" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">arrival transfers</Link> team.
              </p>
              <div className="space-y-3">
                {ARRIVAL_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-vip-transport-chauffeur-vehicle-bali-landscape.webp" alt="Uniformed myCHEF chauffeur beside a luxury VIP vehicle at a Bali villa entrance" width={1024} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-complete-villa-chef-kitchen-bali-landscape.webp" alt="myCHEF private chef preparing fresh ingredients in a Bali villa kitchen" width={1440} height={800} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 2 — Daily Living
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Villa Preparation & Daily Private Chef Service
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Imagine arriving to a villa that already feels like home — beds dressed, fridges stocked, flowers arranged, and your first refreshments waiting. Then, each morning, a <Link to="/villa-chef" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">private villa chef</Link> arrives to prepare breakfast while the housekeeping team quietly resets the space.
              </p>
              <div className="space-y-3">
                {CHEF_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 3 — Celebrations
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Events During Your Stay
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                A private villa is the most extraordinary venue Bali offers — if the event is planned with precision. Our team transforms your residence into a celebration space, coordinating every supplier and timeline so you can simply arrive and enjoy. Explore dedicated options through our <Link to="/events" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">events</Link> hub or learn about bundled <Link to="/villa-event-packages" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">villa event packages</Link>.
              </p>
              <div className="space-y-3">
                {EVENT_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-complete-villa-wedding-reception-bali-landscape.webp" alt="Elegant villa wedding reception table set beneath tropical greenery in Bali" width={1536} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-villa-staff-waiters-service-bali-landscape.webp" alt="Uniformed myCHEF waiters providing polished in-villa service at a Bali villa" width={1536} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 4 — Your Team
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                In-Villa Staffing — Waiters, Butlers & Cleaners
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                The difference between a rented villa and a true private residence is the quality of the people who run it. Our <Link to="/in-villa-service" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">in-villa service</Link> team provides uniformed, English-speaking professionals who make hospitality feel effortless. Longer placements are handled by our <Link to="/staffing" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">villa staffing</Link> team.
              </p>
              <div className="space-y-3">
                {STAFF_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 5 — Beyond the Villa
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Concierge Extras — Restaurants, Spa & Excursions
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                The Complete Villa Experience extends well beyond your front gate. Our concierge team arranges experiences through trusted partners, turning a beautiful stay into an unforgettable journey. Simply share your mood, and we handle the reservations, timing and transport.
              </p>
              <div className="space-y-3">
                {CONCIERGE_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-villa-pool-infinity-pool-bali-landscape.webp" alt="Infinity pool overlooking the Bali coast at sunset, illustrating luxury villa living" width={1440} height={800} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-villa-tablescape-reset-table-bali-landscape.webp" alt="Immaculately reset dining tablescape at a Bali villa after an event" width={1024} height={1024} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Chapter 6 — Departure
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Cleanup, Handback & a Graceful Departure
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                One of the greatest luxuries of a fully managed stay is that it ends as smoothly as it begins. While you enjoy your final morning, our team manages the entire reset — so you leave rested, fulfilled and free from logistics.
              </p>
              <div className="space-y-3">
                {CLEANUP_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                How a Managed Week Actually Looks
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Seven Days, One Rhythm
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                <strong>Day 1:</strong> Land to a name board and a stocked villa; a relaxed welcome dinner by your chef. <strong>Day 2:</strong> Slow breakfast, pool day, family-style dinner. <strong>Day 3:</strong> Excursion arranged — timing, transport and a late supper on return. <strong>Day 4:</strong> The celebration: a staffed event evening with bar, decor and a photographer — you host, we run it. <strong>Day 5:</strong> Recovery brunch, in-villa massages, quiet dinner. <strong>Day 6:</strong> Free day; chef on standby, fridge managed. <strong>Day 7:</strong> Farewell dinner; while you pack, we reset the villa. <strong>Departure:</strong> handback coordinated with the villa manager. You leave rested — the thread closes when you are home.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-villa-interior-pool-living-bali-landscape.webp" alt="Luxury Bali villa living area prepared for a multi-day stay" width={1024} height={576} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] cve-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            How Pricing Works for a Full Stay
          </p>
          <h2 className="text-3xl md:text-4xl mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Published Anchors, Itemised Proposals
          </h2>
          <p className="text-[#4A4745] leading-relaxed mb-6 text-center">
            Complete stays are quoted individually — but the building blocks are published, so your proposal never contains mysteries:
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
              <p className="text-[#4A4745] leading-relaxed"><strong>Chef sessions</strong> from IDR 1,350,000 per session in Seminyak, Canggu, Sanur, Jimbaran and Nusa Dua (from IDR 1,500,000 in Ubud and Uluwatu, travel included) — groceries billed at cost with receipts.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
              <p className="text-[#4A4745] leading-relaxed"><strong>Weekly meal prep</strong> from IDR 4,500,000 per week for 2–4 people — a lighter-touch option for simpler stays.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
              <p className="text-[#4A4745] leading-relaxed"><strong>Group dinners and events</strong> from IDR 700K/person; staffed celebration evenings from IDR 850K++/guest.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
              <p className="text-[#4A4745] leading-relaxed"><strong>Service staff</strong> from IDR 250K/hour per staff member.</p>
            </div>
          </div>
          <p className="text-[#4A4745] leading-relaxed text-center">
            "++" adds 11% government tax + 10% service charge. Your proposal itemises every day and every service line before you commit — the quote you accept is the price you pay.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-complete-villa-chef-kitchen-bali-landscape.webp" alt="myCHEF team preparing a private villa experience in Bali" width={1440} height={800} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                One Thread, On Call
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                One WhatsApp Thread, From Booking to Departure
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                From booking to departure, everything runs through a single WhatsApp thread with your stay manager. Menus adjust when plans change; a chef who falls ill is replaced within two hours or the booking is refunded in full; weather forces a dinner indoors without drama. High-profile guests are covered by our discretion guarantee — silent professionals, no posts, no exceptions. After 8+ years, 560+ villas and 12,000+ guests, the system is the luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] cve-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Designed For"
            title="Who Books the Complete Villa Experience"
            subtitle="Every group is different, but the desire is the same — a flawless stay where every detail is handled."
            dark
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUESTS.map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h3 className="text-lg text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                <p className="text-white/[70%] leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white cve-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Complete Villa Experience — FAQ" subtitle="Everything you need to know about our end-to-end villa hospitality service in Bali." />
          <FAQAccordion items={FAQS} defaultOpenCount={2} />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] cve-reveal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Plan Your Stay
          </p>
          <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tell Us Your Dates, Villa and Group Size
          </h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Tell us your dates, your villa and your group. We will reply within the hour and follow with a detailed, day-by-day proposal — every service itemised, no obligation.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-8">
            One team. One thread. Arrival to departure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="complete-villa-experience-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <MessageCircle className="w-4 h-4" /> Plan Your Complete Stay
            </a>
            <Link to="/villa-event-packages" className="inline-flex items-center gap-2 px-8 py-4 border border-[#1A1A1A]/30 text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1A1A1A]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <Calendar className="w-4 h-4" /> One-Event Version
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      {/* ═══════ EXPLORE MORE ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Complete the Experience</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'VIP Transport', href: '/vip-transport-bali', desc: 'Arrival transfers, arranged.' },
              { label: 'In-Villa Service', href: '/in-villa-service', desc: 'Waiters, butlers & housekeepers.' },
              { label: 'Villa Staffing', href: '/staffing', desc: 'Longer-term staff placement.' },
              { label: 'Villa Chef', href: '/villa-chef', desc: 'Private villa chef service.' },
              { label: 'Events', href: '/events', desc: 'Events during your stay.' },
              { label: 'Villa Event Packages', href: '/villa-event-packages', desc: 'One-event version.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PressStrip />

      {/* ═══════ FINAL CTA / CONTACT ═══════ */}
      <section id="enquire" className="py-20 md:py-28 bg-[#0A0A0A] cve-reveal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Enquire About Your Complete Stay
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Plan your complete stay
          </h2>
          <p className="text-white/[70%] leading-relaxed mb-4 max-w-2xl mx-auto">
            Every villa, every group and every occasion is unique. The Complete Villa Experience is offered as a bespoke service, with tailored quotations designed around your specific requirements.
          </p>
          <p className="text-white/[70%] leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us your dates, villa location and group size. We will reply with a detailed proposal — every service itemised, every question answered, no obligation required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="complete-villa-experience-final-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp +62 896 7407 2020
            </a>
            <a href="mailto:bali@mychef.id" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Mail className="w-4 h-4" /> bali@mychef.id
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Phone className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Telephone</p>
              <a href="tel:+6289674072020" className="text-white/[65%] text-sm hover:text-white transition-colors">+62 896 7407 2020</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Mail className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Email</p>
              <a href="mailto:bali@mychef.id" className="text-white/[65%] text-sm hover:text-white transition-colors">bali@mychef.id</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Instagram className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Instagram</p>
              <a href="https://www.instagram.com/mychef.id" target="_blank" rel="noopener noreferrer" className="text-white/[65%] text-sm hover:text-white transition-colors">@mychef.id</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <MapPin className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Address</p>
              <p className="text-white/[65%] text-sm leading-relaxed">Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan, Bali 80226</p>
            </div>
          </div>
          <p className="text-white/40 text-xs tracking-wide uppercase">
            HACCP Food Safety Certified · Michelin-trained culinary leadership · Serving Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Berawa, Pererenan, Sanur and villas across Bali
          </p>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="complete-villa-experience"
        serviceType="complete-villa-experience"
        label="Plan Your Complete Stay via WhatsApp"
        serviceName="Complete Villa Experience Bali"
        intent="a tailored quotation"
      />
    </div>
  )
}
