import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  Check,
  ChefHat,
  Home,
  Users,
  ShieldCheck,
  Clock,
  Star,
  ArrowRight,
  Phone,
  RefreshCw,
  FileText,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb } from '@/components/shared'
import PressStrip from '@/components/shared/PressStrip'
import BestPartnerBadge from '@/components/BestPartnerBadge'
import { Button } from '@/components/ui/button'
import { StaffingRiskReversal } from '@/components/shared'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_NUMBER = 628113803488
const WA_MARCO = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi Marco, I'm looking to hire hospitality staff for my villa/hotel in Bali. Can you help?",
)}`

// ── 1. THREE SERVICE CARDS ──────────────────────────────────────────────────
const SERVICES = [
  {
    icon: ChefHat,
    title: 'Private Chef Placement',
    slug: '/staffing/private-chef-placement',
    tag: 'Most Popular',
    price: 'From IDR 5,500,000/month',
    desc: 'Long-term chef placement for villas, residences, and family homes. Full-time, part-time, or seasonal. We source, vet, trial, and place — you get a chef who fits your kitchen and your household.',
    features: [
      'Full-time, part-time, seasonal options',
      'Cuisine-matched to your preferences',
      '30-day replacement guarantee',
      'Contract & payroll guidance included',
    ],
  },
  {
    icon: Home,
    title: 'Live-In Villa Chef',
    slug: '/staffing/live-in-chef',
    tag: 'Premium',
    price: 'From IDR 8,000,000/month',
    desc: 'Chef lives on-site. Daily market runs, full household board, dietary management, and guest catering — all without lifting a finger. The closest thing to a private restaurant in your villa.',
    features: [
      'On-site accommodation arranged',
      'Daily grocery sourcing included',
      'All meals — breakfast to dinner',
      'Event and guest catering capability',
    ],
  },
  {
    icon: Users,
    title: 'Villa & Household Staff',
    slug: '/staffing/villa-staff',
    tag: 'B2B & Bulk',
    price: 'Contact for pricing',
    desc: 'Butlers, housekeepers, villa managers, waiters, and event staff — placed as individuals or as a full team. Used by villa management companies, hotels, and private property operators across Bali.',
    features: [
      'Villa managers & household managers',
      'Butlers, waiters, housekeepers',
      'Hotel & restaurant staffing',
      'Individual or full-team placement',
    ],
  },
]

// ── 2. WHY MYCHEF TRUST POINTS ──────────────────────────────────────────────
const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: 'We Know Them Personally',
    desc: 'We have worked beside every person in our network. We know their strengths, their temperament, and which households they fit. We do not send CVs — we send people we trust.',
  },
  {
    icon: RefreshCw,
    title: 'Zero-Risk Placement',
    desc: '30-day replacement guarantee on every placement. If the match is not right for any reason, we restart the search at no charge. No questions, no delays.',
  },
  {
    icon: FileText,
    title: 'We Handle the Paperwork',
    desc: 'Standard staffing contracts, payroll guidance, and Indonesian employment compliance — all provided. Nothing falls through the cracks after the placement is made.',
  },
]

// ── 3. HOW IT WORKS (3 steps) ───────────────────────────────────────────────
const STEPS = [
  {
    number: '01',
    title: 'Brief Us',
    desc: 'Tell us the role, schedule, cuisine direction, and household size. Takes five minutes on WhatsApp or the form below. The more specific, the better the match.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'We Match',
    desc: 'Within 24 hours, we shortlist 2–3 vetted candidates from our active network. You review profiles, choose your top pick, and we arrange an in-person or video interview.',
    icon: Users,
  },
  {
    number: '03',
    title: 'We Place',
    desc: 'Contract signed, onboarding handled, first-week check-in included. We stay in contact for the first month to make sure the match is working on both sides.',
    icon: ShieldCheck,
  },
]

// ── 4. FAQ (5 questions) ────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What types of staff do you place?',
    a: 'Private chefs, live-in chefs, villa managers, butlers, housekeepers, waiters, event staff, and household managers. For hotels and restaurants we can build full-team briefs on request.',
  },
  {
    q: 'How quickly can you fill a position?',
    a: 'Most private chef placements are confirmed within 48 hours of receiving a brief. For live-in arrangements or management roles, allow 3–5 days for profiling and a trial session. Urgent requests: message Marco directly on WhatsApp.',
  },
  {
    q: 'What if the staff member is not the right fit?',
    a: 'Every placement includes a 30-day trial period. If the match is not working — for any reason — we replace at no charge. We maintain a bench of vetted backup candidates for every active placement.',
  },
  {
    q: 'Do you handle contracts and payroll?',
    a: 'Yes. We provide standard Indonesian staffing contracts and payroll guidance. For long-term or full-team placements, we can advise on employment compliance and household structure. All included in the placement fee.',
  },
  {
    q: 'What does it cost?',
    a: 'Private chef placement starts from IDR 5,500,000/month (part-time) and IDR 9,500,000/month (full-time). Our placement fee is one month\'s salary, which covers sourcing, vetting, trials, contract, and six months of ongoing support. Villa & household staff pricing is quoted per role.',
  },
]

// ── 5. STATS BAR ─────────────────────────────────────────────────────────────
const STATS = [
  { icon: Users, value: '50+', label: 'Active Staff' },
  { icon: Home, value: '560+', label: 'Villas Served' },
  { icon: Clock, value: '48h', label: 'Avg. Placement Time' },
  { icon: Star, value: '4.9 ★', label: 'Client Rating' },
]

export default function StaffingPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.staffing-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.staffing-reveal', start: 'top 87%', once: true },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={getPageMeta('staffing').title}
        description={getPageMeta('staffing').description}
        canonical={getPageMeta('staffing').canonical}
        ogImage={getPageMeta('staffing').ogImage}
        jsonLd={[
          serviceSchema(
            'Hospitality Staffing Bali',
            'Private chef, live-in chef, and villa household staff placement across Bali. Vetted network, 48h confirmation, 30-day replacement guarantee.',
            `${SITE}/staffing`,
            'IDR',
          ),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 560),
          breadcrumbSchema('Staffing', `${SITE}/staffing`),
        ]}
      />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative w-full flex items-end overflow-hidden" style={{ minHeight: '88vh' }}>
        <img
          src="/generated/mychef-staffing-bali-staffing-hero.webp"
          alt="Professional hospitality staff at a private Bali villa"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.88) 100%)' }}
        />
        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 pt-32 max-w-[1280px] mx-auto w-full text-white">
          <Breadcrumb items={[{ label: 'Staffing' }]} theme="dark" className="px-0 pt-0 pb-8" />
          <p
            className="text-[#C5A028] text-xs md:text-sm tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Staffing &amp; Placement · Bali
          </p>
          {/* ── META TITLE H1 ── */}
          <h1
            className="text-[2.4rem] md:text-6xl lg:text-7xl leading-[1.06] mb-6 max-w-[860px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hire Vetted Hospitality Staff for Your Villa, Hotel or Home.
          </h1>
          <p className="text-base md:text-xl text-white/[75%] mb-10 max-w-[620px] leading-relaxed">
            Private chefs, live-in chefs, villa staff, and household teams — placed within 48 hours. All background-checked, English-speaking, and trained. For villa managers, hotel owners, and private households across Bali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="whatsapp" size="brand" className="w-full sm:w-auto">
              <a href={WA_MARCO} target="_blank" rel="noopener noreferrer" data-source="staffing-hero">
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="brand" className="w-full sm:w-auto">
              <Link to="/staffing/private-chef-placement">
                View Chef Placement
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10">
            {[
              { icon: ShieldCheck, label: 'Background Checked' },
              { icon: Clock, label: '48h Placement' },
              { icon: RefreshCw, label: '30-Day Replacement Guarantee' },
              { icon: Star, label: '4.9 Client Rating' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-white/[55%]">
                <badge.icon className="w-4 h-4 text-[#C5A028]" strokeWidth={1.5} />
                <span className="text-xs tracking-wider uppercase">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RISK REVERSAL ───────────────────────────────────────────────── */}
      <StaffingRiskReversal />

      {/* ── STATS BAR ───────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] px-6 py-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="staffing-reveal">
              <p
                className="text-3xl md:text-4xl mb-1"
                style={{ color: '#C5A028', fontFamily: "'Playfair Display', serif" }}
              >
                {s.value}
              </p>
              <p className="text-xs tracking-widest uppercase text-white/[50%]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THREE SERVICE CARDS ─────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Chapter I — Our Services
          </p>
          <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Three Ways We Place Staff
          </h2>
          <p className="max-w-xl mx-auto text-[#4A4745]">
            From a single chef placement to a full household team — we handle every step of the process.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="staffing-reveal group relative flex flex-col rounded-2xl border border-[#E5E3E0] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(197,160,40,0.25)]"
            >
              {/* Tag */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(197,160,40,0.12)', color: '#C5A028' }}
                >
                  {svc.tag}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <svc.icon className="w-8 h-8 mb-5" style={{ color: '#C5A028' }} strokeWidth={1.5} />
                <h3 className="text-2xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {svc.title}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: '#C5A028' }}>
                  {svc.price}
                </p>
                <p className="text-sm text-[#4A4745] leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#C5A028' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={svc.slug}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-all group-hover:gap-3 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
                  style={{ color: '#C5A028' }}
                >
                  View {svc.title} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <span
                className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'linear-gradient(to right, transparent, #C5A028, transparent)' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY MYCHEF FOR STAFFING ─────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Chapter II — Why myCHEF
            </p>
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why myCHEF for Staffing
            </h2>
            <p className="max-w-xl mx-auto text-[#4A4745]">
              Agencies send CVs. We send people we know. There is a difference.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TRUST_POINTS.map((tp) => (
              <div
                key={tp.title}
                className="staffing-reveal flex flex-col items-start p-8 rounded-2xl border border-[#E5E3E0]"
                style={{ background: '#FAFAF8' }}
              >
                <tp.icon className="w-8 h-8 mb-5" style={{ color: '#C5A028' }} strokeWidth={1.5} />
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {tp.title}
                </h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Chapter III — Process
          </p>
          <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            How It Works
          </h2>
          <p className="max-w-xl mx-auto text-[#4A4745]">
            From brief to placed — three steps. Most placements confirmed within 48 hours.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {STEPS.map((step) => (
            <div key={step.number} className="staffing-reveal text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(197,160,40,0.10)', color: '#C5A028' }}
              >
                <step.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: '#C5A028', fontFamily: "'Cormorant Garamond', serif" }}
              >
                Step {step.number}
              </p>
              <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                {step.title}
              </h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRESS STRIP ─────────────────────────────────────────────────── */}
      <PressStrip />

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Chapter IV — Questions
            </p>
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Staffing FAQ
            </h2>
          </div>
          <FAQAccordion
            items={FAQS}
            defaultOpenCount={4}
          />
        </div>
      </section>

      {/* ── MARCO — FINAL CTA ────────────────────────────────────────────── */}
      <section
        className="px-6 md:px-12 py-24 md:py-32"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2C2117 100%)' }}
      >
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Chapter V — Your Staffing Director
            </p>
            <h2
              className="text-3xl md:text-5xl text-white mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Talk to Marco.
            </h2>
            <p className="text-white/[70%] text-base md:text-lg leading-relaxed mb-8">
              Marco is our staffing director. He has overseen 200+ placements across Bali's finest villas, hotels, and private households. Message him on WhatsApp and he will respond within the hour with a shortlist and honest advice — no pitch, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_MARCO}
                target="_blank"
                rel="noopener noreferrer"
                data-source="staffing-cta"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
                style={{ background: '#C5A028', color: '#1A1A1A' }}
              >
                <MessageCircle className="w-4 h-4" /> Request Staff Now — Reply in 1 Hour
              </a>
              <a
                href={`tel:+${WA_NUMBER}`}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full border border-white/25 text-white/[80%] transition-all hover:border-white/60 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
              >
                <Phone className="w-4 h-4" /> Call the Team
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#6B6B67] mt-4">
              <span>✅ Background-checked staff</span>
              <span>✅ English-speaking</span>
              <span>✅ Same-day confirmation</span>
            </div>
            <p className="text-white/[50%] text-sm mt-4">
              Free brief review · 30-day replacement guarantee · Response within 1 hour
            </p>
          </div>
          {/* Sub-service links */}
          <div className="space-y-3">
            <p
              className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Or explore a specific service
            </p>
            {[
              { label: 'Private Chef Placement', href: '/staffing/private-chef-placement' },
              { label: 'Live-In Villa Chef', href: '/staffing/live-in-chef' },
              { label: 'Villa & Household Staff', href: '/staffing/villa-staff' },
              { label: 'Household & Domestic Staff', href: '/staffing/household-staff' },
              { label: 'For Villa Managers', href: '/staffing/for-villa-managers' },
              { label: 'For Hotels & Restaurants', href: '/staffing/for-hotels-restaurants' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center justify-between px-6 py-4 rounded-xl border border-white/10 text-white/[70%] text-sm tracking-wide hover:border-[#C5A028]/50 hover:text-white transition-all group focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
              >
                {link.label}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#C5A028' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST PARTNER BADGE ──────────────────────────────────────────── */}
      <section className="bg-white px-6 py-12 border-t border-[#E5E3E0]">
        <div className="max-w-[400px] mx-auto flex justify-center">
          <BestPartnerBadge variant="dark" width={280} />
        </div>
      </section>
      <StickyMobileCTA
        pageSource="staffing-main"
        serviceType="staffing"
        label="Book Villa Staff via WhatsApp"
        message="Hi! I'd like to book villa staff (waiters/bartenders/household) in Bali. Can you help?"
      />
    </div>
  )
}
