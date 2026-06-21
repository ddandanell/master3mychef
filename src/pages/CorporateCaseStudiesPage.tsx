import { Link } from 'react-router-dom'
import { Building2, Users, Star, MessageCircle, CheckCircle2, Quote } from 'lucide-react'
import SeoHead, {
  breadcrumbSchema,
  detailedServiceSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'

const SITE = 'https://mychef.id'
const WHATSAPP_URL = 'https://wa.me/491635080236'

interface CaseStudy {
  client: string
  industry: string
  location: string
  guests: string
  format: string
  challenge: string
  solution: string
  outcome: string
  metrics: { label: string; value: string }[]
  quote: string
  attribution: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    client: 'Singapore SaaS scale-up',
    industry: 'Technology',
    location: 'Uluwatu clifftop villa',
    guests: '34 guests',
    format: 'Three-day leadership offsite',
    challenge:
      'A fast-growing software company booked a clifftop villa for a leadership offsite and needed all meals handled on-site so the team never had to break focus for restaurant logistics or transfers. Several attendees had strict dietary needs — two vegan, one coeliac, one shellfish allergy.',
    solution:
      'We assigned a dedicated chef plus two service staff for the full three days: working breakfasts, light strategy-session lunches, and a different dinner concept each night. Every menu was built around the dietary matrix so no attendee was ever served a separate "special plate" that singled them out.',
    outcome:
      'Zero dietary incidents across nine services. The client kept their entire agenda on the villa property and rebooked us for their next two regional offsites.',
    metrics: [
      { label: 'Services delivered', value: '9' },
      { label: 'Dietary incidents', value: '0' },
      { label: 'Repeat bookings', value: '2' },
    ],
    quote:
      'We stopped thinking about food after the first hour. That is exactly what a good offsite needs — one less thing for the organisers to manage.',
    attribution: 'Head of People, Singapore',
  },
  {
    client: 'European venture fund',
    industry: 'Finance',
    location: 'Seminyak private villa',
    guests: '18 guests',
    format: 'Executive partner dinner',
    challenge:
      'A venture fund hosting limited partners wanted a single formal dinner that matched the standard of a fine-dining restaurant, but in a private setting where confidential conversations could happen freely. They needed a proper invoice for accounting and a firm budget per head.',
    solution:
      'A five-course plated tasting menu with wine pairing, served by uniformed staff with restaurant-grade pacing. We provided a fixed per-person quote upfront and an NPWP-compliant invoice for their finance team, with no surprise line items.',
    outcome:
      'The dinner came in on budget to the rupiah. The fund now uses myCHEF as their default for investor dinners in Bali.',
    metrics: [
      { label: 'Courses', value: '5' },
      { label: 'Budget variance', value: '0%' },
      { label: 'Guest rating', value: '5.0★' },
    ],
    quote:
      'It felt like a private restaurant that only existed for our table. The invoicing was clean, which matters more than people think.',
    attribution: 'Operating Partner, Europe',
  },
  {
    client: 'Australian agency retreat',
    industry: 'Creative & Marketing',
    location: 'Canggu villa compound',
    guests: '52 guests',
    format: 'Five-day team retreat',
    challenge:
      'A creative agency brought its whole team to Bali for a week and wanted varied, health-conscious food that would not leave people sluggish through afternoon workshops — across breakfast, lunch and dinner for five straight days without menu repetition.',
    solution:
      'We ran a rolling menu of vegetable-forward, locally sourced dishes with clearly labelled options, plus two larger celebration dinners (a BBQ night and a long-table Indonesian feast). Staffing scaled up only for the big nights to keep the daily cost efficient.',
    outcome:
      'Fifteen distinct menus over five days, delivered within the agreed daily per-head budget, with the BBQ night becoming the trip highlight in the post-retreat survey.',
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
    client: 'Regional conference organiser',
    industry: 'Events & Hospitality',
    location: 'Nusa Dua resort villa',
    guests: '120 guests',
    format: 'Conference networking dinner',
    challenge:
      'An organiser running a regional conference needed a high-volume networking dinner for 120 delegates that still felt premium, with a feeding window tight enough to fit between the closing session and the evening programme.',
    solution:
      'Multiple live food stations and a grazing concept that let delegates eat and network simultaneously, supported by a ten-person catering crew. We mapped the flow so 120 people could be served comfortably inside a 45-minute window.',
    outcome:
      'The full delegation was served within the window with no queues, and the organiser added us to their preferred-vendor list for future Bali events.',
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
  { label: 'Average client rating', value: '4.9★' },
  { label: 'NPWP-compliant invoicing', value: '100%' },
  { label: 'Repeat & referred clients', value: '85%' },
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
    a: 'Yes. We issue NPWP-compliant invoices with a clear per-head breakdown and no surprise line items, so your finance team can process the expense cleanly.',
  },
  {
    q: 'How far in advance should we book a corporate event in Bali?',
    a: 'For single dinners, two to three weeks is usually enough. For multi-day offsites and retreats, or events during peak season and Indonesian holidays, we recommend booking one to three months ahead to secure your dates and staffing.',
  },
  {
    q: 'Can you handle large dietary matrices across a whole team?',
    a: 'Yes. We collect every dietary requirement in advance and build menus so vegan, gluten-free, allergy and religious needs are integrated into the main service rather than served as separate "special" plates.',
  },
  {
    q: 'What group sizes do you cater for?',
    a: 'From intimate executive dinners of eight up to conference catering for 200 or more. Staffing and service style scale to match the headcount and the formality of the event.',
  },
  {
    q: 'Do you travel to our villa or resort anywhere in Bali?',
    a: 'Yes. We operate across Bali — Seminyak, Canggu, Uluwatu, Ubud, Nusa Dua, Jimbaran and beyond — as well as Jakarta. We handle ingredient sourcing and logistics for remote locations as part of the planning.',
  },
]

const SCHEMAS = [
  detailedServiceSchema(
    'Corporate Event Catering Bali',
    'myCHEF.id delivers corporate event catering across Bali — executive dinners, leadership offsites, team retreats and conference catering — with private chefs, uniformed service staff and NPWP-compliant invoicing.',
    `${SITE}/corporate-case-studies`,
  ),
  breadcrumbSchema('Corporate Case Studies', `${SITE}/corporate-case-studies`, 'Events', `${SITE}/events`),
  aggregateRatingSchema(4.9, 180),
  faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
]

export default function CorporateCaseStudiesPage() {
  const canonical = `${SITE}/corporate-case-studies`

  return (
    <main className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Corporate Catering Case Studies Bali | myCHEF"
        description="Real corporate event case studies in Bali — executive dinners, leadership offsites, team retreats and conference catering. Outcomes, metrics and client results from myCHEF."
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
            How companies run flawless corporate events in Bali
          </h1>
          <p className="text-lg md:text-xl text-[#4A4745] max-w-3xl leading-relaxed">
            Executive dinners, leadership offsites, team retreats and conference catering — delivered on budget,
            on time, and to a fine-dining standard. Here is exactly what we did for four clients and what it
            produced.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-source="corporate-case-studies-hero"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              <MessageCircle className="h-4 w-4" />
              Plan your corporate event
            </a>
            <Link
              to="/events/corporate-events"
              className="text-sm font-semibold text-[#1A1A1A] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              See corporate event services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-12 md:pb-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
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
      </section>

      {/* Case studies */}
      <section className="px-6 pb-8 md:pb-12">
        <div className="max-w-[1200px] mx-auto space-y-10">
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
              </div>

              <h2 className="mt-3 font-playfair text-2xl md:text-3xl">{cs.client}</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A028]">
                {cs.format}
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8A7A47] mb-2">The challenge</p>
                  <p className="text-[#4A4745] leading-relaxed">{cs.challenge}</p>
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
          <h2 className="font-playfair text-3xl md:text-5xl mb-8">Corporate services we deliver</h2>
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-8">Corporate catering FAQ</h2>
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
          <div className="mb-4 flex items-center justify-center gap-1" aria-label="4.9 star rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-[#C5A028] text-[#C5A028]" />
            ))}
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Planning a corporate event in Bali?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-[#C9C4BD] leading-relaxed">
            Tell us your dates, headcount and format. We will send a fixed per-head quote and an NPWP-compliant
            proposal, usually the same day.
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
              Get a quote on WhatsApp
            </a>
            <Link
              to="/catering/corporate-catering"
              className="text-sm font-semibold text-[#FAFAF8] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
            >
              Corporate catering details
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
