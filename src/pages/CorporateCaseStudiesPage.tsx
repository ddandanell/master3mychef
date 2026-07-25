import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Building2, Users, Star, MessageCircle, CheckCircle2, Quote } from 'lucide-react'
import SeoHead, {
  breadcrumbSchema,
  faqPageSchema,
} from '@/components/SeoHead'
import { ArticleContentSection } from '@/components/shared'

const SITE = 'https://mychef.id'
const WHATSAPP_URL = 'https://wa.me/6289674072020'

interface CaseStudy {
  number: number
  client: string
  industry: string
  location: string
  guests: string
  format: string
  brief: ReactNode
  solution: ReactNode
  outcome: ReactNode
  metrics: { label: string; value: string }[]
  quote: string
  attribution: string
  note?: ReactNode
}

const CASE_STUDIES: CaseStudy[] = [
  {
    number: 1,
    client: 'Singapore SaaS scale-up',
    industry: 'Technology',
    location: 'Uluwatu clifftop villa',
    guests: '34 guests',
    format: 'Three-Day Leadership Offsite',
    brief:
      'Keep a leadership team fed on-site for three days so nobody broke focus for restaurant runs or transfers — with a strict dietary matrix: two vegan, one coeliac, one shellfish allergy.',
    solution:
      'A dedicated chef plus two service staff for the full three days: working breakfasts, light strategy-session lunches and a different dinner concept each night. Every menu was built around the dietary matrix, so no attendee ever received a separate "special plate" that singled them out.',
    outcome:
      'Nine services, zero dietary incidents. The entire agenda stayed on the property — and the client rebooked us for their next two regional offsites.',
    metrics: [
      { label: 'Services delivered', value: '9' },
      { label: 'Dietary incidents', value: '0' },
      { label: 'Repeat bookings', value: '2' },
    ],
    quote:
      'We stopped thinking about food after the first hour. That is exactly what a good offsite needs — one less thing for the organisers to manage.',
    attribution: 'Head of People, Singapore',
    note: (
      <>
        Multi-day offsite programs are quoted per person per day.{' '}
        <Link
          to="/corporate-retreat-catering-bali"
          className="font-semibold text-[#1A1A1A] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
        >
          See retreat catering programs →
        </Link>
        . Budget for this event: 
      </>
    ),
  },
  {
    number: 2,
    client: 'European venture fund',
    industry: 'Finance',
    location: 'Seminyak private villa',
    guests: '18 guests',
    format: 'Executive Partner Dinner',
    brief:
      'One formal dinner at fine-dining standard, in a private setting where confidential conversations could happen freely — with a firm per-head budget and a proper invoice for accounting.',
    solution:
      'A five-course plated tasting menu with wine pairing, served by uniformed staff with restaurant-grade pacing. Fixed per-person quote upfront; NPWP-compliant invoice after; no surprise line items.',
    outcome:
      'On budget to the rupiah, 5.0★ guest rating — and the fund now uses myCHEF as its default for investor dinners in Bali.',
    metrics: [
      { label: 'Courses', value: '5' },
      { label: 'Budget variance', value: '0%' },
      { label: 'Guest rating', value: '5.0★' },
    ],
    quote:
      'It felt like a private restaurant that only existed for our table. The invoicing was clean, which matters more than people think.',
    attribution: 'Operating Partner, Europe',
    note: (
      <>
        Executive dinners typically run from IDR 700K–800K per person ++ for corporate formats.{' '}
        <Link
          to="/events/corporate-events"
          className="font-semibold text-[#1A1A1A] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
        >
          See corporate event services →
        </Link>
      </>
    ),
  },
  {
    number: 3,
    client: 'Australian agency',
    industry: 'Creative & marketing',
    location: 'Canggu villa compound',
    guests: '52 guests',
    format: 'Five-Day Team Retreat',
    brief:
      'Varied, health-conscious food across breakfast, lunch and dinner for five straight days — no menu repetition, nothing that left people sluggish through afternoon workshops.',
    solution:
      'A rolling menu of vegetable-forward, locally sourced dishes with clearly labelled options, plus two larger celebration dinners — a BBQ night and a long-table Indonesian feast. Staffing scaled up only for the big nights to keep the daily cost efficient.',
    outcome:
      'Fifteen distinct menus in five days, inside the agreed daily per-head budget. The BBQ night was the trip highlight in the post-retreat survey.',
    metrics: [
      { label: 'Days catered', value: '5' },
      { label: 'Distinct menus', value: '15' },
      { label: 'Guests served', value: '52' },
    ],
    quote:
      'Nobody hit the 3pm crash, and the food never got boring. For a week-long retreat that is genuinely hard to pull off.',
    attribution: 'Managing Director, Australia',
  },
  {
    number: 4,
    client: 'Regional conference organiser',
    industry: 'Events & hospitality',
    location: 'Nusa Dua resort villa',
    guests: '120 guests',
    format: 'Conference Networking Dinner',
    brief:
      'A high-volume networking dinner for 120 delegates that still felt premium — inside a 45-minute feeding window between the closing session and the evening programme.',
    solution: (
      <>
        Multiple live food stations and a{' '}
        <Link
          to="/catering/grazing-tables"
          className="font-semibold text-[#1A1A1A] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
        >
          grazing concept
        </Link>{' '}
        so delegates could eat and network at the same time, backed by a ten-person catering crew. We mapped the flow so all 120 could be served comfortably inside the window.
      </>
    ),
    outcome:
      'Full delegation served in 45 minutes, no queues. The organiser added us to their preferred-vendor list for future Bali events.',
    metrics: [
      { label: 'Delegates served', value: '120' },
      { label: 'Service window', value: '45 min' },
      { label: 'Crew on site', value: '10' },
    ],
    quote:
      'High volume usually means a compromise on quality. This was the rare time it did not.',
    attribution: 'Conference Director, Asia-Pacific',
  },
]

const STATS = [
  { label: 'Corporate events delivered', value: '180+' },
  { label: 'Client satisfaction', value: '98%' },
  { label: 'NPWP-compliant invoicing', value: '100%' },
  { label: 'Repeat and referred clients', value: '85%' },
]

const SERVICES = [
  'Executive and partner dinners (8–25 guests)',
  'Multi-day leadership offsites and team retreats',
  'Conference and workshop catering (50–200+ guests)',
  'Plated fine dining, buffets, BBQ nights and grazing stations',
  'Uniformed service staff, bartenders and event coordination',
  'Fixed per-head quotes and NPWP-compliant invoices',
]

const FAQS = [
  {
    q: 'Do you provide proper invoices for corporate accounting?',
    a: 'Yes — NPWP-compliant invoices with a clear per-head breakdown and no surprise line items, so your finance team can process the expense cleanly.',
  },
  {
    q: 'How far in advance should we book a corporate event in Bali?',
    a: 'Two to three weeks is usually enough for a single dinner. For multi-day offsites, retreats, or dates in peak season and Indonesian holidays, book one to three months ahead.',
  },
  {
    q: 'Can you handle a large dietary matrix across a whole team?',
    a: 'Yes. We collect every requirement in advance and build menus so vegan, gluten-free, allergy and religious needs are integrated into the main service — never separate "special" plates.',
  },
  {
    q: 'What group sizes do you cater for?',
    a: 'From executive dinners of eight up to conference catering for 200 or more. Staffing and service style scale with headcount and formality.',
  },
  {
    q: 'What budget should we expect for corporate catering in Bali?',
    a: 'Corporate and event formats in Bali typically start from IDR 700K per person ++ (11% government tax + 10% service charge), with the final figure depending on menu, staffing and production. Every quote is fixed and itemised before you commit.',
  },
  {
    q: 'Do you travel to our villa or resort anywhere in Bali?',
    a: 'Yes — Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua, Jimbaran and beyond. We handle ingredient sourcing and logistics for remote locations as part of planning.',
  },
]

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Corporate Catering Case Studies Bali — Real Events & Outcomes',
  description:
    'Real corporate event case studies in Bali — leadership offsites, executive dinners, team retreats and conference catering with guest counts, formats and outcomes.',
  url: `${SITE}/corporate-case-studies`,
  isPartOf: { '@type': 'WebSite', name: 'myCHEF', url: SITE },
  about: {
    '@type': 'Service',
    name: 'Corporate event catering Bali',
    provider: { '@type': 'Organization', name: 'myCHEF', url: SITE },
    areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
  },
}

const SCHEMAS = [
  webPageSchema,
  breadcrumbSchema('Corporate Case Studies', `${SITE}/corporate-case-studies`),
  faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
]

export default function CorporateCaseStudiesPage() {
  const canonical = `${SITE}/corporate-case-studies`

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Corporate Catering Case Studies Bali | Real Events & Costs"
        description="Real corporate event case studies in Bali — executive dinners, offsites, retreats & conference catering with outcomes and budgets."
        canonical={canonical}
        jsonLd={SCHEMAS}
      />

      {/* Hero */}
      <section className="px-5 pt-14 pb-12 sm:px-6 md:pt-24 md:pb-16">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028] font-semibold mb-4">
            Corporate case studies
          </p>
          <h1 className="mb-5 font-playfair text-3xl leading-tight sm:text-4xl md:text-6xl max-w-4xl">
            How Companies Run Flawless Corporate Events in Bali
          </h1>
          <p className="text-lg md:text-xl text-[#4A4745] max-w-3xl leading-relaxed">
            Executive dinners, leadership offsites, team retreats and conference catering — delivered on budget,
            on time and to a fine-dining standard. Here is what we actually did for four corporate clients, and what
            it produced.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/events/corporate-events"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              Plan your corporate event →
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-source="corporate-case-studies-hero"
              className="text-sm font-semibold text-[#1A1A1A] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              Get a fixed per-head quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-12 md:pb-16">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028] font-semibold mb-3">
            Track record
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-8">Numbers that matter</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#E8E2CF] bg-white px-5 py-6 text-center shadow-sm"
              >
                <p className="text-3xl font-playfair text-[#1A1A1A] mb-1">{stat.value}</p>
                <p className="text-sm text-[#4A4745]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="px-6 pb-8 md:pb-12">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="max-w-[1200px]">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028] font-semibold mb-3">
              Case studies
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl">Real corporate events in Bali</h2>
          </div>
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.client}
              className="rounded-[28px] border border-[#E8E2CF] bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.05)] md:p-10"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-[#8A7A47]">
                <span className="inline-flex items-center gap-2 font-semibold">
                  <Building2 className="h-4 w-4 text-[#C5A028]" />
                  {cs.industry}
                </span>
                <span aria-hidden>•</span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#C5A028]" />
                  {cs.guests}
                </span>
                <span aria-hidden>•</span>
                <span>{cs.location}</span>
                <span aria-hidden>•</span>
                <span>{cs.client}</span>
              </div>

              <h3 className="mt-3 font-playfair text-2xl md:text-3xl">
                Case Study {cs.number} — {cs.format}
              </h3>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8A7A47] mb-2">The brief</p>
                  <p className="text-[#4A4745] leading-relaxed">{cs.brief}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8A7A47] mb-2">What we did</p>
                  <p className="text-[#4A4745] leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8A7A47] mb-2">The outcome</p>
                  <p className="text-[#4A4745] leading-relaxed">{cs.outcome}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {cs.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl bg-[#FAFAF8] border border-[#EFE7D1] px-4 py-4 text-center"
                  >
                    <p className="text-2xl font-playfair text-[#1A1A1A]">{m.value}</p>
                    <p className="text-xs text-[#4A4745] mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-6 rounded-2xl bg-[#1A1A1A] px-6 py-5 text-[#FAFAF8]">
                <Quote className="h-5 w-5 text-[#C5A028] mb-2" />
                <p className="text-lg leading-relaxed italic">{cs.quote}</p>
                <footer className="mt-3 text-sm text-[#C5A028] not-italic">— {cs.attribution}</footer>
              </blockquote>

              {cs.note && (
                <p className="mt-4 text-sm text-[#4A4745] leading-relaxed">{cs.note}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* What we cover */}
      <section className="px-6 py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028] font-semibold mb-3">
            What we cover
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl mb-8">What We Cover</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {SERVICES.map((s) => (
              <div
                key={s}
                className="flex items-start gap-3 rounded-2xl border border-[#E8E2CF] bg-white px-5 py-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C5A028]" />
                <span className="text-[#4A4745]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl mb-8">Corporate Catering FAQ</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl border border-[#E8E2CF] bg-white p-6 shadow-sm">
                <p className="font-semibold text-[#1A1A1A] mb-2">{f.q}</p>
                <p className="text-[#4A4745] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-[1000px] mx-auto rounded-[32px] bg-[#1A1A1A] px-8 py-12 text-center text-[#FAFAF8] md:px-16 md:py-16">
          <div className="mb-4 flex items-center justify-center gap-1" aria-label="5 star guest satisfaction">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-[#C5A028] text-[#C5A028]" />
            ))}
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Planning a Corporate Event in Bali?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-[#C9C4BD] leading-relaxed">
            Tell us your dates, headcount and format. We'll send a fixed per-head quote and an NPWP-compliant
            proposal — usually the same day. Client references available on request.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-source="corporate-case-studies-footer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#C5A028] px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              <MessageCircle className="h-4 w-4" />
              Get a Quote on WhatsApp — +62 896-7407-2020
            </a>
            <Link
              to="/events/corporate-events"
              className="text-sm font-semibold text-[#FAFAF8] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              Corporate event services →
            </Link>
            <Link
              to="/catering/corporate-catering"
              className="text-sm font-semibold text-[#FAFAF8] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              Corporate catering →
            </Link>
          </div>
        </div>
      </section>
    <ArticleContentSection />
    </div>
  )
}
