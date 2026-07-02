import { Link } from 'react-router-dom'
import {
  Check,
  X,
  MessageCircle,
  Award,
  Gauge,
  FileText,
  Wallet,
  Sparkles,
  Building2,
  Shield,
  Star,
  TrendingUp,
} from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import BestPartnerBadge from '@/components/BestPartnerBadge'
import FAQAccordion from '@/components/catering/FAQAccordion'

import OptimizedImage from '@/components/OptimizedImage'
const WA = 62089674072020
const SITE = 'https://mychef.id'

// /partner-platform — the deep "why partner with us" page for villa groups,
// hospitality operators, and boutique brands. Storytelling structure
// with a pricing-card comparison for Co-Branded vs White-Label.
//
// Hero + mid-page band images generated via BFL FLUX (see public/generated/).

const WHAT_WE_PROVIDE = [
  'Private chefs', 'Fine dining menus', 'Service staff', 'Sommeliers',
  'Event execution', 'Ingredient sourcing', 'Setup and styling',
  'Operational logistics', 'Guest communication', 'Food safety systems',
  'Equipment management', 'White-label execution',
]

const WHAT_PARTNER_DOESNT_NEED = [
  'A restaurant kitchen', 'Internal chef recruitment', 'Kitchen management',
  'Culinary operations', 'Menu development', 'Food purchasing',
  'Staff scheduling', 'Wine sourcing', 'Service training',
]

const GUEST_JOURNEY = [
  { step: '01', title: 'Guest books the villa', desc: 'The villa introduces dining before arrival, at check-in, on WhatsApp, in-villa, or via the guest app.' },
  { step: '02', title: 'Guest receives the menu', desc: 'Browse menus, request a custom evening, book the private chef, add wine pairing, plan events, request tasting menus.' },
  { step: '03', title: 'myCHEF handles operations', desc: 'Chef team assigned. Ingredients sourced. Logistics prepared. Preferences and allergies reviewed. Villa kitchen checked.' },
  { step: '04', title: 'The dinner takes place', desc: 'We arrive professionally dressed and fully briefed. Cook, serve, pace, present, clean. The villa returns to normal afterwards.' },
]

const DASHBOARD_BLOCKS = [
  {
    icon: Gauge,
    title: 'Live Orders',
    desc: 'Upcoming dinners, guest count, villa location, order status, event details — all in one view.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Tracking',
    desc: 'Revenue generated, commission earned, pending payouts, historical earnings, monthly performance.',
  },
  {
    icon: FileText,
    title: 'Invoice Transparency',
    desc: 'Every order shows invoice copy, guest payment visibility, order value, commission calculation. No hidden numbers.',
  },
  {
    icon: Wallet,
    title: 'Settlement System',
    desc: 'Monthly payouts. Full settlement report, revenue breakdown, completed order overview, transfer confirmation. Paid on the 5th.',
  },
]

const AUDIENCE = [
  { name: 'Luxury villas', desc: 'Independent high-end villas competing on guest experience.' },
  { name: 'Villa management companies', desc: 'Multi-property operators adding a premium hospitality layer.' },
  { name: 'Boutique resorts', desc: 'Small boutique resorts wanting private dining programs without an in-house F&B build.' },
  { name: 'Hospitality groups', desc: 'Portfolios scaling premium service across multiple properties.' },
  { name: 'Concierge operators', desc: 'Independent concierges adding fine dining to their offering.' },
  { name: 'Luxury travel agencies', desc: 'High-touch agents planning end-to-end Bali itineraries.' },
  { name: 'Premium Airbnb operators', desc: 'Top-tier short-term rental hosts differentiating with hospitality.' },
]

const FAQS = [
  { q: 'What does it cost to become a partner?', a: 'Nothing upfront. The platform is free to join — partners earn a commission on every order generated through their villas. No setup fees, no monthly software costs.' },
  { q: 'Does our villa need a professional kitchen?', a: 'No. A functional villa kitchen is enough. We bring specialised equipment when a menu requires it.' },
  { q: 'How long does onboarding take?', a: 'Typically one to two weeks. We run a discovery call, a villa walkthrough (or virtual tour), a kitchen check, and an optional showcase tasting for the partner team.' },
  { q: 'Can we keep our existing villa brand?', a: 'Yes. The White-Label model is built exactly for this — neutral uniforms, unmarked equipment, the experience appears fully owned by the villa.' },
  { q: 'How are guests introduced to the dining option?', a: 'Through whatever channels the villa already uses: pre-arrival emails, the guest app, in-villa welcome books, WhatsApp, the concierge, or our shared booking link.' },
  { q: 'How fast is settlement?', a: 'Monthly. Full settlement is paid out on the 5th of each month with a detailed report covering every completed order.' },
]

export default function PartnerPlatformPage() {
  const waApply = `https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like to apply for the Partner Platform — interested in becoming a villa dining partner.')}`
  const waShowcase = `https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like to request a partner showcase dinner for my villa group.')}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Villa Dining Partner Platform',
    name: 'myCHEF Partner Platform',
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE}/#business`,
      name: 'myCHEF Indonesia',
      url: SITE,
    },
    areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
    description: 'A villa dining partner platform that turns private Bali villas into Michelin-level private dining destinations — co-branded or fully white-label, with monthly commission and a transparent operational dashboard.',
    url: `${SITE}/partner-platform`,
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Villa Management Catering Bali | Partner Platform — myCHEF"
        description="Co-branded private chef & catering for Bali villa managers. Live booking visibility, commission sharing & white-label dining offers for your guests."
        canonical={`${SITE}/partner-platform`}
        ogImage={`${SITE}/generated/mychef-misc-bali-partner-platform-hero.webp`}
        jsonLd={[aggregateRatingSchema(4.9, 560), breadcrumbSchema('Partner Platform', `${SITE}/partner-platform`), jsonLd, faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a })))]}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[88vh] flex items-end overflow-hidden">
        <img
          src="/generated/mychef-misc-bali-partner-platform-hero.webp"
          alt="Private Bali villa private dining setup at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          decoding="async" fetchPriority="high" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.92))', backdropFilter: 'blur(2px)' }}
        />
        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-28 pt-28 md:pt-36 max-w-[1280px] mx-auto w-full text-white">
          <p className="text-[#C5A028] text-xs md:text-sm tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            myCHEF Partner Platform
          </p>
          <h1 className="text-[2.5rem] md:text-7xl lg:text-8xl leading-[1.05] mb-7 max-w-[1000px]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Michelin-Level Private Dining for Bali Villas
          </h1>
          <p className="text-base md:text-xl text-white/[80%] mb-10 max-w-[720px] leading-relaxed">
            A villa dining partner platform built for private villas, villa management companies, boutique hospitality brands, and premium operators across Bali.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={waApply}
              target="_blank"
              rel="noopener noreferrer" data-source="partner-platform-apply"
              className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#050505] font-semibold text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
            >
              Apply for Partnership
            </a>
            <a
              href={waShowcase}
              target="_blank"
              rel="noopener noreferrer" data-source="partner-platform-showcase"
              className="inline-flex items-center justify-center px-10 py-4 border border-[#C5A028]/60 text-[#C5A028] font-semibold text-xs uppercase tracking-[0.25em] rounded-full hover:bg-[#C5A028]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
            >
              Request Showcase Dinner
            </a>
          </div>
        </div>
      </section>

      {/* ── THE OPPORTUNITY ──────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1100px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-6">01 — The opportunity</p>
        <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-8 max-w-[820px]">
          Most villas compete on view, pool, bedrooms, interior, location.
          <span className="block text-[#C5A028] italic mt-2">Very few compete on what guests remember.</span>
        </h2>
        <p className="text-[#4A4745] text-lg leading-relaxed max-w-[680px]">
          myCHEF lets a villa become known for something guests talk about after they leave. Not simply a villa — an experience.
          Villa partners offer a complete Michelin-level private dining experience inside their property without building their own restaurant operation.
          We handle the chefs, operations, sourcing, service, logistics, guest experience, and execution. Partners earn on every dinner while strengthening their brand, guest experience, and market positioning.
        </p>
      </section>

      {/* ── WHY VILLA PARTNERS JOIN ──────────────────────────────────── */}
      <section className="bg-white px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">02 — Why partners join</p>
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">An overcrowded market needs more than architecture.</h2>
            <p className="text-[#4A4745] text-lg leading-relaxed mb-5">
              Thousands of Bali villas offer near-identical amenities. Even high-end villas struggle to differentiate beyond architecture and photography.
            </p>
            <p className="text-[#4A4745] text-lg leading-relaxed">
              Guests today are looking for experiences, personalisation, refined service, storytelling, convenience, and exclusivity — and private dining inside the villa solves all of it at once.
            </p>
          </div>
          <ul className="space-y-3 bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-7">
            {[
              'Guests do not need restaurant reservations',
              'Guests avoid transportation',
              'Families stay together',
              'Events become easier',
              'Celebrations become memorable',
              'Villas gain premium positioning',
              'Villa becomes a complete hospitality experience',
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-[#1A1A1A]">
                <Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE / WHAT PARTNER DOESN'T NEED ──────────────── */}
      <section className="bg-[#0A0A0A] text-white px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14 max-w-[760px] mx-auto">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.35em] mb-4">03 — What we actually provide</p>
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight">A Michelin-level hospitality layer on top of private villas.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-14">
            <div>
              <p className="text-[#C5A028] text-xs uppercase tracking-[0.3em] mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>We provide</p>
              <ul className="space-y-2.5">
                {WHAT_WE_PROVIDE.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-white/[85%]">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> {it}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/[55%] text-xs uppercase tracking-[0.3em] mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>You don't need</p>
              <ul className="space-y-2.5">
                {WHAT_PARTNER_DOESNT_NEED.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-white/[50%]">
                    <X className="w-4 h-4 text-white/[30%] mt-1 flex-shrink-0" /> <span className="line-through decoration-white/15">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUEST JOURNEY ────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">04 — The guest journey</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-4">From villa booking to plated dinner.</h2>
          <p className="text-[#4A4745] text-lg mb-14 max-w-[640px]">
            Four steps. The partner introduces the offer, we run operations, the dinner takes place, the villa returns to normal operation.
          </p>
          <ol className="space-y-7">
            {GUEST_JOURNEY.map((s) => (
              <li key={s.step} className="grid grid-cols-[60px_1fr] gap-5 md:gap-8 items-baseline border-b border-[#E5E3E0] pb-7 last:border-0">
                <span className="font-playfair text-3xl text-[#C5A028]">{s.step}</span>
                <div>
                  <h3 className="font-playfair text-2xl mb-1.5">{s.title}</h3>
                  <p className="text-[#4A4745]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── KITCHEN BAND IMAGE ───────────────────────────────────────── */}
      <section className="relative w-full h-[40vh] min-h-[340px] overflow-hidden">
        <OptimizedImage
          src="/generated/mychef-misc-bali-partner-platform-dashboard.webp"
          alt="Chef plating a Michelin-level course on a black marble countertop in a Bali villa"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.55))' }} />
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center text-white">
          <p className="font-playfair text-2xl md:text-4xl max-w-[820px] leading-tight">
            "The villa returns to normal. The memory stays with the guest."
          </p>
        </div>
      </section>

      {/* ── PARTNERSHIP MODELS — PRICING-CARD COMPARISON ─────────────── */}
      <section className="bg-[#FAFAF8] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14 max-w-[760px] mx-auto">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">05 — Partnership models</p>
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-4">Two ways to partner.</h2>
            <p className="text-[#4A4745] text-lg">Choose the visibility model that matches your brand strategy.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Co-Branded */}
            <div className="relative bg-white border border-[#C5A028]/60 rounded-2xl p-8 md:p-10 flex flex-col">
              <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 bg-[#C5A028] text-[#050505] text-[10px] uppercase tracking-[0.25em] font-semibold px-3 py-1.5 rounded-full">
                <Sparkles className="w-3 h-3" /> Most Visibility
              </span>
              <p className="font-cormorant text-[#2C5F7C] text-xs uppercase tracking-[0.3em] mb-3">Option A</p>
              <h3 className="font-playfair text-3xl mb-3">Co-Branded Partnership</h3>
              <p className="text-[#4A4745] mb-6">myCHEF is visible as the culinary partner. We may feature the villa in marketing, create content together, and mention it in campaigns. The villa benefits from association with the myCHEF brand.</p>
              <div className="mb-6">
                <p className="text-5xl font-playfair text-[#C5A028]">12<span className="text-2xl">%</span></p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A8785] mt-1">Commission per order</p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8A8785] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Best for</p>
              <ul className="space-y-2 mb-8 flex-grow">
                {['Villas wanting visibility', 'Luxury brands', 'Marketing-focused villas', 'Hospitality groups wanting exposure'].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[#4A4745]"><Check className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" /> {b}</li>
                ))}
              </ul>
              <a href={waApply} target="_blank" rel="noopener noreferrer" data-source="partner-platform-apply" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#050505] font-semibold text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                Apply Co-Branded
              </a>
            </div>

            {/* White-Label */}
            <div className="bg-[#0A0A0A] text-white border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col">
              <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[0.3em] mb-3">Option B</p>
              <h3 className="font-playfair text-3xl mb-3">White-Label Partnership</h3>
              <p className="text-white/[65%] mb-6">myCHEF operates invisibly. Neutral uniforms, no visible branding, unmarked equipment. The experience appears fully owned by the villa. Sell it as your own, use the photos freely.</p>
              <div className="mb-6">
                <p className="text-5xl font-playfair text-[#C5A028]">7<span className="text-2xl">%</span></p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/[45%] mt-1">Commission per order</p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/[45%] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Best for</p>
              <ul className="space-y-2 mb-8 flex-grow">
                {['Luxury villa brands', 'Hospitality groups', 'Villas protecting brand identity', 'Ultra-private clients'].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/[75%]"><Check className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" /> {b}</li>
                ))}
              </ul>
              <a href={waApply} target="_blank" rel="noopener noreferrer" data-source="partner-platform-apply" className="inline-flex items-center justify-center gap-2 border border-[#C5A028]/60 text-[#C5A028] font-semibold text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-full hover:bg-[#C5A028]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                Apply White-Label
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVENUE MODEL ───────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">06 — How partners make money</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-6 max-w-[820px]">Commission on every order. No setup. No risk.</h2>
          <p className="text-[#4A4745] text-lg mb-12 max-w-[680px]">
            Revenue scales across fine dining menus, wine pairing, events, private chef bookings, catering, celebrations, weddings, birthdays, corporate events, family gatherings, and holiday packages.
          </p>

          <div className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-7 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A8785] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Example revenue model</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <Stat label="Guests" value="8" />
              <Stat label="Avg per guest" value="IDR 2.5M" />
              <Stat label="Dinner total" value="IDR 20.0M" />
              <Stat label="Co-branded earns" value="IDR 2.4M" accent />
            </div>

            <div className="grid md:grid-cols-2 gap-5 pt-7 border-t border-[#E5E3E0]">
              <div className="flex items-baseline gap-3">
                <p className="font-playfair text-2xl text-[#C5A028]">12%</p>
                <p className="text-sm text-[#4A4745]">Co-Branded partner earns <span className="font-medium text-[#1A1A1A]">IDR 2,400,000</span> on this dinner.</p>
              </div>
              <div className="flex items-baseline gap-3">
                <p className="font-playfair text-2xl text-[#C5A028]">7%</p>
                <p className="text-sm text-[#4A4745]">White-Label partner earns <span className="font-medium text-[#1A1A1A]">IDR 1,400,000</span> on this dinner.</p>
              </div>
            </div>

            <p className="text-sm text-[#8A8785] mt-7">
              Scaled across a 20-villa portfolio with strong occupancy and active guest promotion, this becomes a meaningful monthly revenue stream — with no added operational complexity.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARTNER DASHBOARD ───────────────────────────────────────── */}
      <section className="bg-[#FAFAF8] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-end mb-12">
            <div>
              <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">07 — The partner dashboard</p>
              <h2 className="font-playfair text-4xl md:text-5xl leading-tight">The operational center of the partnership.</h2>
            </div>
            <p className="text-[#4A4745] text-lg">
              Every partner gets access. Real-time visibility on orders, revenue, invoices, and monthly settlement — no hidden numbers, no chasing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DASHBOARD_BLOCKS.map((b) => (
              <div key={b.title} className="bg-white border border-[#E5E3E0] rounded-2xl p-6">
                <b.icon className="w-6 h-6 text-[#C5A028] mb-4" />
                <h3 className="font-playfair text-xl mb-2">{b.title}</h3>
                <p className="text-sm text-[#4A4745]">{b.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#8A8785] mt-6 italic">Standard payout date: 5th of each month.</p>
        </div>
      </section>

      {/* ── CERTIFICATION + BADGE ────────────────────────────────── */}
      <section className="bg-white px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">08 — Certified Partner Program</p>
            <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">Verified for Michelin-level execution.</h2>
            <p className="text-[#4A4745] text-lg leading-relaxed mb-6">
              Certified partners receive an official myCHEF certification, a public verification page, a digital and printable badge, marketing assets, in-villa display assets, and a QR verification code. Display it on your website, booking pages, presentation decks, reception, and concierge material.
            </p>
            <p className="text-[#4A4745] leading-relaxed mb-6">
              Every certified partner has a public page at <span className="font-medium text-[#1A1A1A]">mychef.id/certified/your-villa-name</span> — verifying partner status, certification validity, villa information, and authenticity. Guests and direct-booking platforms can verify in one click.
            </p>
            <ul className="space-y-2 text-[#4A4745]">
              {['Guest trust', 'Premium positioning', 'Direct-booking credibility'].map((b) => (
                <li key={b} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> {b}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <BestPartnerBadge variant="dark" width={360} />
          </div>
        </div>
      </section>

      {/* ── PARTNER SCORE + FEEDBACK ─────────────────────────────────── */}
      <section className="bg-[#FAFAF8] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">09 — Quality system</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-12 max-w-[820px]">Partner Score + guest feedback keep the experience consistent.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#E5E3E0] rounded-2xl p-7">
              <Award className="w-6 h-6 text-[#C5A028] mb-4" />
              <h3 className="font-playfair text-2xl mb-3">Partner Score</h3>
              <p className="text-sm text-[#4A4745] mb-5">Scored on kitchen readiness, operational communication, guest feedback, booking cooperation, villa standards, event execution, and reliability.</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8A8785] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Higher-scoring partners receive</p>
              <ul className="space-y-1.5 text-sm text-[#4A4745]">
                {['Priority referrals', 'More visibility', 'Better collaboration', 'Preferred partner status', 'Marketing priority'].map((b) => (
                  <li key={b} className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#C5A028] mt-1 flex-shrink-0" /> {b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#E5E3E0] rounded-2xl p-7">
              <Star className="w-6 h-6 text-[#C5A028] mb-4" />
              <h3 className="font-playfair text-2xl mb-3">Guest Feedback System</h3>
              <p className="text-sm text-[#4A4745] mb-5">After every dinner, guests leave structured feedback. Partners see satisfaction scores in real time. We track food, service, experience, villa integration, and overall satisfaction — creating operational accountability across the platform.</p>
              <ul className="space-y-1.5 text-sm text-[#4A4745]">
                {['Food quality', 'Service quality', 'Experience quality', 'Villa integration', 'Overall satisfaction'].map((b) => (
                  <li key={b} className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#C5A028] mt-1 flex-shrink-0" /> {b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHITE-LABEL STANDARDS ──────────────────────────────────── */}
      <section className="bg-white px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-[900px] mx-auto text-center">
          <Shield className="w-7 h-7 text-[#C5A028] mx-auto mb-5" />
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-3">10 — White-label standards</p>
          <h2 className="font-playfair text-3xl md:text-4xl leading-tight mb-5">The villa remains the hero.</h2>
          <p className="text-[#4A4745] text-lg">
            Neutral presentation. Discreet arrival. No visible branding. Non-commercial execution. Controlled photography permissions. White-label execution is operationally separated from co-branded execution — the partner controls visibility, not us.
          </p>
        </div>
      </section>

      {/* ── WHO THIS WORKS BEST FOR ──────────────────────────────────── */}
      <section className="bg-[#FAFAF8] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">11 — Who it works for</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-12 max-w-[820px]">Built for premium hospitality operators across Bali.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUDIENCE.map((a) => (
              <div key={a.name} className="bg-white border border-[#E5E3E0] rounded-2xl p-6">
                <Building2 className="w-5 h-5 text-[#C5A028] mb-3" />
                <h3 className="font-playfair text-xl mb-2">{a.name}</h3>
                <p className="text-sm text-[#4A4745]">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white border border-[#E5E3E0] rounded-2xl p-7 md:p-10 max-w-[900px]">
            <p className="font-cormorant text-[#2C5F7C] text-xs uppercase tracking-[0.3em] mb-3">Beyond dinners</p>
            <h3 className="font-playfair text-2xl md:text-3xl mb-5">Partners can also offer events at scale.</h3>
            <div className="flex flex-wrap gap-2">
              {['Weddings', 'Corporate events', 'Family gatherings', 'Retreat dining', 'Birthday events', 'Yacht catering', 'Full villa events', 'Multi-day chef services'].map((e) => (
                <span key={e} className="text-xs uppercase tracking-[0.18em] border border-[#E5E3E0] rounded-full px-4 py-2 text-[#4A4745]">{e}</span>
              ))}
            </div>
            <p className="text-sm text-[#4A4745] mt-6">myCHEF scales staffing and operations based on the event size — partners earn commission on every event the same way.</p>
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS ──────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-[900px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4 text-center">12 — Operational requirements</p>
          <h2 className="font-playfair text-3xl md:text-4xl leading-tight mb-8 text-center">What you actually need.</h2>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-[640px] mx-auto">
            {['Functional villa kitchen', 'Kitchen access', 'Basic communication', 'Guest introduction support'].map((r) => (
              <li key={r} className="flex items-center gap-3 bg-[#FAFAF8] border border-[#E5E3E0] rounded-xl px-4 py-3.5 text-[#1A1A1A]">
                <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" /> {r}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#8A8785] text-center mt-6 italic">We handle the rest.</p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-[#FAFAF8] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[800px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[0.35em] mb-4">13 — Frequently asked</p>
          <h2 className="font-playfair text-4xl md:text-5xl leading-tight mb-12">Partner program FAQ</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] text-white px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.35em] mb-5">The next step</p>
          <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-5">The experience speaks better than the presentation ever can.</h2>
          <p className="text-white/[65%] text-lg mb-12 max-w-[640px] mx-auto">
            Large villa groups can request a private tasting, an investor dinner, or an owner showcase evening. Smaller partners can join the monthly showcase dinners and invitation-only events.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waApply}
              target="_blank"
              rel="noopener noreferrer" data-source="partner-platform-apply"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#C5A028] text-[#050505] font-semibold text-xs uppercase tracking-[0.25em] rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
            >
              Apply for Partnership
            </a>
            <a
              href={waShowcase}
              target="_blank"
              rel="noopener noreferrer" data-source="partner-platform-showcase"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/30 text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              <MessageCircle className="w-4 h-4" /> Request Showcase Dinner
            </a>
          </div>
          <p className="text-xs text-white/[45%] mt-10 italic">
            myCHEF Partner Platform — controlled premium hospitality, the leading private villa dining network in Bali.
          </p>
          <p className="text-xs text-white/[60%] mt-6">
            Already a guest looking to book? <Link to="/quote" className="text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">Get a quote</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}

function Stat({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p className={`font-playfair text-2xl md:text-3xl ${accent ? 'text-[#B08D22]' : 'text-[#1A1A1A]'}`}>{value}</p>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A8785] mt-1.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{label}</p>
    </div>
  )
}

