import { useEffect, useRef } from 'react'
import {
  MessageCircle,
  Phone,
  Calendar,
  Users,
  ChevronRight,
  Heart,
  Cake,
  Wine,
  Briefcase,
  Leaf,
  ClipboardCheck,
  ArrowRight,
  Check,
  Sparkles,
  UtensilsCrossed,
  GlassWater,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  offerSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import LocationChips from '@/components/LocationChips'
import { Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import { formatIDR, calculateAllIn } from '@/components/shared'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_NUMBER = '6282237565997'
const WA_MESSAGE =
  "Hi myCHEF, I'd like to plan an event in Bali. Could you walk me through the options?"
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

/* ─── HELPERS ─── */

function AllInPriceDisplay({
  price,
  suffix = '/person',
}: {
  price: number
  suffix?: string
}) {
  const allIn = calculateAllIn(price)
  return (
    <span className="inline-flex items-baseline gap-1.5 flex-wrap">
      <span className="text-[#4A4745]/60 line-through text-sm">
        {formatIDR(price)}++{suffix}
      </span>
      <span className="text-[#1A1A1A] font-semibold">
        {formatIDR(allIn)} all-in{suffix}
      </span>
    </span>
  )
}

/* ─── DATA ─── */

interface PricingTier {
  name: string
  guests: string
  price: number
  totalEstimate: string
  description: string
  includes: string[]
  accent: string
  icon: typeof Users
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Intimate Gathering',
    guests: '20 – 40 guests',
    price: 350_000,
    totalEstimate: 'From IDR 8.5M all-in',
    description: 'Perfect for private dinners, small celebrations, and family reunions in your villa.',
    includes: [
      'Private chef & sous chef',
      '2 service staff (1:10 ratio)',
      'Full menu customization',
      'Table setup & basic styling',
      'All equipment & glassware',
      'Setup, service & cleanup',
    ],
    accent: '#6B8E5A',
    icon: Users,
  },
  {
    name: 'Villa Celebration',
    guests: '40 – 100 guests',
    price: 550_000,
    totalEstimate: 'From IDR 26.5M all-in',
    description: 'The sweet spot for birthdays, anniversaries, and mid-size villa parties.',
    includes: [
      'Head chef + 2 kitchen staff',
      '4–6 service staff (1:10 ratio)',
      'Bartender & open bar setup',
      'Custom menu + tasting option',
      'Full tablescape & floral styling',
      'On-site event coordinator',
      'Sound system & ambient lighting',
      'Photography package (optional)',
    ],
    accent: '#C5A028',
    icon: GlassWater,
  },
  {
    name: 'Grand Event',
    guests: '100 – 200 guests',
    price: 750_000,
    totalEstimate: 'From IDR 90M all-in',
    description: 'Weddings, corporate galas, and large-scale celebrations requiring full production.',
    includes: [
      'Executive chef + full brigade',
      '8–12 service staff (1:10 ratio)',
      '2 bartenders + premium bar',
      'Multi-course or buffet service',
      'Full event design & styling',
      'Dedicated event coordinator',
      'Generator & mobile kitchen',
      'Photography & videography',
      'Live music / DJ coordination',
      'Custom cake & dessert station',
    ],
    accent: '#2C5F7C',
    icon: Sparkles,
  },
]

const EVENT_TYPES = [
  {
    slug: 'weddings',
    title: 'Weddings',
    description: 'Intimate villa ceremonies to full receptions. Coordinator, styling, and culinary production included.',
    icon: Heart,
    image: '/generated/aura-wedding.webp',
    href: '/events/weddings',
  },
  {
    slug: 'birthdays',
    title: 'Birthdays',
    description: 'Milestone dinners, villa parties, and kids celebrations. Themed setup, cake, and effortless hosting.',
    icon: Cake,
    image: '/generated/party-birthday.webp',
    href: '/events/birthdays',
  },
  {
    slug: 'anniversaries',
    title: 'Anniversaries',
    description: 'Private candlelit dinners and vow renewals. Built around your story, not a hotel package.',
    icon: Wine,
    image: '/generated/aura-toast.webp',
    href: '/events/anniversaries',
  },
  {
    slug: 'corporate',
    title: 'Corporate',
    description: 'Executive dinners, conferences, retreats, and product launches. Invoice-ready, NPWP-issued.',
    icon: Briefcase,
    image: '/generated/corporate-event.svg',
    href: '/events/corporate-events',
  },
  {
    slug: 'retreats',
    title: 'Retreats',
    description: 'Multi-day wellness and yoga retreats. Dietary-specialist meals handled at scale, on schedule.',
    icon: Leaf,
    image: '/generated/party-medi.webp',
    href: '/events/retreats',
  },
]

interface ProcessStep {
  step: string
  title: string
  body: string
  icon: typeof ClipboardCheck
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Share Your Brief',
    body: 'WhatsApp Sofia with your date, guest count, villa, and event type. She replies fast with availability, price direction, and the right format to shortlist.',
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'Receive Your Proposal',
    body: 'We turn your brief into one working document covering food, drinks, staffing, styling, timing, and all-in pricing for sign-off.',
    icon: ClipboardCheck,
  },
  {
    step: '03',
    title: 'Confirm & Deposit',
    body: '50% deposit locks your date. The balance is due the week of the event. For corporate accounts, net-30 terms are available.',
    icon: Calendar,
  },
  {
    step: '04',
    title: 'We Run the Event',
    body: 'Our team arrives, builds the setup, runs the service, and clears down after. You focus on hosting — we handle everything else.',
    icon: UtensilsCrossed,
  },
]

const FAQS = [
  {
    q: 'How far in advance do we need to book?',
    a: 'Weddings and large retreats: 3–6 months for high season (July–August, December–January). Smaller events and corporate: 4–6 weeks is comfortable. Last-minute is possible — we have run a 30-guest dinner with 72 hours notice. WhatsApp Sofia and we will tell you what is still open.',
  },
  {
    q: 'Is the price per person all-in or does tax come on top?',
    a: 'Listed prices are ++ (before 10% government service charge and 11% VAT). We always show the all-in number in the proposal so you know the total — no surprises. Groceries are billed at cost with no markup.',
  },
  {
    q: 'Do you handle dietary requirements at scale?',
    a: 'Yes — this is one of the things we do best. Vegan, halal, gluten-free, raw, kosher-style, nut allergy, shellfish allergy, kids portions. We label every dish, run separate prep lines for allergies, and have done full halal weddings and dietary-led retreats for hundreds.',
  },
  {
    q: 'Can you work at any villa in Bali?',
    a: 'Yes. We are mobile hospitality — full kitchen, glassware, linens, generator, cold chain, the lot. We have worked at over 200 villas across Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Pererenan, Berawa, and the Bukit peninsula. If your villa is in Bali, we can run an event there.',
  },
  {
    q: 'Do we pay a deposit, and what happens if we cancel?',
    a: '50% deposit to confirm the date, balance due the week of the event. Cancellation policy is in your proposal — full refund up to 30 days out, 50% inside 30 days, no refund inside 14 days. Force-majeure clauses are standard.',
  },
]

const EVENTS_TESTIMONIALS = [
  {
    name: 'Priya & Raj',
    location: 'Uluwatu Villa Wedding',
    quote:
      'We compared three hotels and a wedding planner. myCHEF was half the price and twice the warmth. Sofia ran the day like a Swiss watch.',
    rating: 5,
  },
  {
    name: 'The Larsen Family',
    location: 'Canggu — 3-day reunion',
    quote:
      'Twelve adults, six kids, three days, three meal services a day. Different dietary needs every meal. The team made it look easy.',
    rating: 5,
  },
  {
    name: 'David — Series A Off-site',
    location: 'Berawa Villa Conference',
    quote:
      'Two-day off-site for forty engineers. Coffee station never empty, lunch on time every time, gala dinner that landed. Invoice came with NPWP.',
    rating: 5,
  },
]

/* ─── COMPONENT ─── */

export default function EventsPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-fade',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.tier-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.pricing-grid', start: 'top 80%', once: true },
        }
      )
      gsap.fromTo(
        '.event-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.events-grid', start: 'top 80%', once: true },
        }
      )
      gsap.fromTo(
        '.process-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.process-grid', start: 'top 80%', once: true },
        }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Bali Event Catering — From IDR 350K/person | Weddings, Birthdays, Corporate | myCHEF"
        description="Bali villa event catering with transparent pricing. Intimate gatherings from IDR 350K/person, villa celebrations from IDR 550K/person, grand events from IDR 750K/person. Weddings, birthdays, anniversaries, corporate events & retreats."
        canonical={`${SITE}/events`}
        ogImage={`${SITE}/generated/hub-events.webp`}
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema('Events', `${SITE}/events`),
          serviceSchema(
            'Bali Event Catering & Coordination',
            'Villa weddings, birthdays, anniversaries, corporate events, and retreats in Bali. Transparent pricing from IDR 350K per person. One team, one bill.',
            `${SITE}/events`,
            'IDR'
          ),
          offerSchema('Intimate Gathering', 350_000, 'IDR', `${SITE}/events`),
          offerSchema('Villa Celebration', 550_000, 'IDR', `${SITE}/events`),
          offerSchema('Grand Event', 750_000, 'IDR', `${SITE}/events`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Bali Event Services by myCHEF',
            itemListElement: EVENT_TYPES.map((e, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE}${e.href}`,
              name: e.title,
            })),
          },
        ]}
      />

      <Breadcrumb items={[{ label: 'Events' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-[#0A0A0A] text-white">
        <img
          src="/generated/hero-corporate-events.webp"
          alt="Luxury villa event in Bali with styled dining and celebration setup"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-20 md:pb-28 w-full">
          <p
            className="hero-fade text-[#C5A028] text-sm tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Bali Event Catering
          </p>
          <h1
            className="hero-fade text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Event Catering Bali
            <br />
            <span
              className="italic text-white/85"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              From Intimate Dinners to Villa Celebrations
            </span>
          </h1>
          <p className="hero-fade text-base md:text-xl max-w-2xl leading-relaxed text-white/80 mb-8">
            Transparent pricing for weddings, birthdays, anniversaries, corporate events, and
            retreats. One team handles food, drinks, staff, styling, and coordination — anywhere in
            Bali.
          </p>
          <div className="hero-fade flex flex-wrap items-center gap-4 mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Starting from</p>
                <p className="text-2xl md:text-3xl font-semibold text-[#C5A028]">
                  IDR 350K{' '}
                  <span className="text-base font-normal text-white/70">per person</span>
                </p>
                <p className="text-white/50 text-xs mt-0.5">
                  ≈ {formatIDR(calculateAllIn(350_000))} all-in · 21% tax & service included
                </p>
              </div>
            </div>
          </div>
          <div className="hero-fade flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#C5A028] text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <Phone className="w-4 h-4" /> Plan My Event
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-all"
            >
              View Pricing <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <p className="hero-fade mt-6 text-white/55 text-xs tracking-wider">
            Same-day WhatsApp reply · 50% deposit only · Real NPWP invoice on request
          </p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip dark />

      {/* ═══════ PRICING TIERS ═══════ */}
      <section id="pricing" className="py-24 md:py-32 px-6 bg-white scroll-mt-24">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Transparent Pricing"
            title="Three tiers. Clear inclusions. No surprises."
            subtitle="Every tier shows the ++ price and the all-in total. Groceries are billed at cost — no markup."
          />
          <div className="pricing-grid grid md:grid-cols-3 gap-6 md:gap-8">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="tier-reveal group bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-xl hover:border-[#C5A028]/40 transition-all duration-300 flex flex-col"
              >
                <div className="p-7 md:p-8 flex-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${tier.accent}15` }}
                  >
                    <tier.icon className="w-5 h-5" style={{ color: tier.accent }} />
                  </div>
                  <p
                    className="text-xs tracking-[0.3em] uppercase mb-2"
                    style={{ color: tier.accent, fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                  >
                    {tier.guests}
                  </p>
                  <h3
                    className="text-2xl text-[#1A1A1A] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <AllInPriceDisplay price={tier.price} />
                  </div>
                  <p className="text-sm text-[#4A4745] leading-relaxed mb-6">{tier.description}</p>
                  <div className="space-y-2.5">
                    {tier.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-sm text-[#4A4745]">
                        <Check
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: tier.accent }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-7 md:px-8 pb-7 md:pb-8">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
                    style={{ background: tier.accent }}
                  >
                    <MessageCircle className="w-4 h-4" /> Get a Quote
                  </a>
                  <p className="text-center text-[11px] text-[#4A4745]/60 mt-2.5">
                    {tier.totalEstimate} · 21% tax & service included
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-[#4A4745]/70 max-w-2xl mx-auto">
            All prices are ++ (before 10% government service charge and 11% VAT). The all-in total
            shown includes both. Final pricing depends on menu selection, event duration, location,
            and add-ons. Groceries billed at cost with no markup.
          </p>
        </div>
      </section>

      {/* ═══════ EVENT TYPES ═══════ */}
      <section className="events-grid py-24 md:py-32 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="What We Cover"
            title="Every kind of celebration, one team"
            subtitle="Weddings, birthdays, anniversaries, corporate events, and retreats — each handled with the same operational discipline."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {EVENT_TYPES.map((event) => (
              <a
                key={event.slug}
                href={event.href}
                className="event-reveal group bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden hover:shadow-xl hover:border-[#C5A028] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={`${event.title} in Bali by myCHEF`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
                    <event.icon className="w-3.5 h-3.5 text-[#C5A028]" />
                    <span
                      className="text-[10px] tracking-[0.3em] uppercase text-white/90"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                    >
                      {event.title}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h3
                    className="text-2xl text-[#1A1A1A] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {event.title}
                  </h3>
                  <p className="text-[#4A4745] text-sm leading-relaxed mb-5">
                    {event.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PROCESS ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-[#0F0F0F] text-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#C5A028] text-sm tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              How It Works
            </p>
            <h2
              className="text-3xl md:text-5xl leading-[1.05]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Four clear steps from first message to event day.
            </h2>
          </div>
          <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((s) => (
              <div
                key={s.step}
                className="process-reveal p-7 rounded-2xl border border-white/10"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <p
                  className="text-[#C5A028] text-xs tracking-[0.4em] uppercase mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {s.step}
                </p>
                <s.icon className="w-6 h-6 text-[#C5A028] mb-4" />
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={EVENTS_TESTIMONIALS}
        title="What event hosts say"
        subtitle="Real weddings, retreats, off-sites, and parties — from real villas across Bali."
      />

      {/* ═══════ FAQ ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Common Questions"
            title="The five questions every host asks"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={2} />
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#0A0A0A] text-white">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/generated/aura-tablescape.webp"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Sparkles className="w-7 h-7 text-[#C5A028] mx-auto mb-5" />
          <h2
            className="text-4xl md:text-6xl leading-[1.05] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to plan your event?
          </h2>
          <p className="max-w-xl mx-auto text-base md:text-lg text-white/75 mb-10">
            WhatsApp Sofia with your date, guest count, and event type. She replies within the hour
            with availability, pricing direction, and next steps.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#C5A028] text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Sofia
            </a>
            <a
              href="tel:+6282237565997"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> Call +62 822 3756 5997
            </a>
          </div>
          <p className="mt-8 text-white/40 text-xs">
            Pre-filled message: &ldquo;Hi myCHEF, I&rsquo;d like to plan an event in Bali. Could you
            walk me through the options?&rdquo;
          </p>
        </div>
      </section>

      <PressStrip />

      <LocationChips
        title="Events Across Bali"
        subtitle="Weddings in Uluwatu. Corporate retreats in Ubud. Birthday parties in Canggu. We know every venue, every vendor, every regulation."
        dark
      />
    </div>
  )
}
