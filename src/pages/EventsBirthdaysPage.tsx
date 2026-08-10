import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import {
  MessageCircle,
  Calendar,
  Check,
  Cake,
  Users,
  ChefHat,
  Music,
  Camera,
  Wine,
  Sparkles,
  ClipboardList,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import SeoHead, { breadcrumbSchema, faqPageSchema, postalAddressSchema } from '@/components/SeoHead'
import { siteFacts } from '@/data/siteFacts'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { ArticleContentSection, Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import BirthdayQuoteCalculator from '@/components/events/BirthdayQuoteCalculator'
import {
  ADDON_PRICES,
  FOOD_INCLUSIONS,
  FOOD_PACKAGES,
  formatIDRFull,
} from '@/lib/birthdayQuoteCalculator'
import HaccpTrustLine from '@/components/shared/HaccpTrustLine'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({
  serviceName: 'birthday catering in Bali',
  intent: 'a fixed quote for food package and add-ons',
})
const SITE = 'https://mychef.id'
const ACCENT = '#2C5F7C'

const SAMPLE_QUOTES = [
  {
    title: 'Example A — 12 guests',
    badge: 'No volume discount',
    lines: [
      'International food: 12 × 800.000 = 9.600.000',
      'DJ: 6.500.000',
      'Standard decorations: 4.500.000',
      'Open Bar: 12 × 550.000 = 6.600.000',
    ],
    total: 27_200_000,
  },
  {
    title: 'Example B — 24 guests',
    badge: '5% food discount',
    lines: [
      'Surf & Turf: 24 × 1.050.000 × 0.95 = 23.940.000',
      'DJ: 6.500.000',
      'Premium decorations: 7.500.000',
      'Open Bar: 24 × 550.000 = 13.200.000',
      'Photographer: 3.200.000',
    ],
    total: 54_340_000,
  },
  {
    title: 'Example C — 40 guests',
    badge: '10% food discount',
    lines: [
      'Indonesian: 40 × 650.000 × 0.90 = 23.400.000',
      'DJ: 6.500.000',
      'Standard decorations: 4.500.000',
      'Open Bar: 40 × 550.000 = 22.000.000',
    ],
    total: 56_400_000,
  },
]

const FAQS = [
  {
    q: 'How much does birthday catering in Bali cost with myCHEF?',
    a: 'Food packages start at <strong>IDR 650.000++ per person</strong> (Indonesian, min 10 guests). International is IDR 800.000++/person; Surf &amp; Turf / Seafood is IDR 1.050.000++/person. Volume discount on food only: 5% at 20–39 guests, 10% at 40+. Optional add-ons (DJ, decoration, open bar, photography, coordinator, cake upgrade) are priced separately. Use the calculator on this page for a live subtotal before tax &amp; service.',
  },
  {
    q: 'What is the minimum guest count for a birthday package?',
    a: 'Minimum <strong>10 guests</strong> for food packages. Smaller intimate dinners can be arranged as a private chef booking — see <a href="/private-chef-bali">private chef Bali</a> or <a href="/fine-dining">fine dining</a>.',
  },
  {
    q: 'What is included in every food package?',
    a: 'Professional chef + kitchen team, all ingredients, cooking equipment, service staff, full setup and complete cleanup, and a standard birthday cake. Add-ons are optional and never forced into the food rate.',
  },
  {
    q: 'How do volume discounts work?',
    a: 'Discounts apply <strong>only to the food package rate</strong>: 10–19 guests full price, 20–39 guests 5% off food, 40+ guests 10% off food. DJ, decoration, open bar and other add-ons are never discounted.',
  },
  {
    q: 'What does "++" mean on prices?',
    a: '"++" means 11% government tax and 10% service charge are added to the listed subtotal on your official quote. The calculator shows the clean subtotal before ++ so you can compare packages clearly.',
  },
  {
    q: 'Can you handle dietary requirements and kids menus?',
    a: 'Yes. Vegetarian, vegan, gluten-free, halal-friendly and allergy-aware menus are planned at briefing. For family birthdays, kids menus run alongside adult food — see <a href="/kids-menus">kids menus</a> and <a href="/experiences/kids-birthday-chef-party">kids birthday chef party</a>.',
  },
  {
    q: 'Do we need the villa’s permission for a birthday party?',
    a: 'For anything beyond a quiet dinner, yes — most villas require event approval, and some neighbourhoods have noise expectations or banjar notification requirements. We coordinate with your villa manager before confirming DJ, bar and guest count.',
  },
  {
    q: 'Do you provide cake and decorations?',
    a: 'A standard birthday cake is included in every food package. Custom 3-tier upgrades (IDR 2.500.000–4.000.000) and decoration tiers (Essential IDR 2.200.000 · Standard Villa IDR 4.500.000 · Premium Themed IDR 7.500.000) are optional add-ons.',
  },
  {
    q: 'What happens if it rains?',
    a: 'We plan a covered or indoor fallback for every outdoor setup — same menu, same styling, moved inside the villa or under cover. BBQ service shifts to a sheltered area; the party continues.',
  },
  {
    q: 'How do deposits and cancellation work?',
    a: 'A 50% deposit confirms your date and locks your chef team. Cancellation: 14+ days before, full refund; 7–13 days, 50% refund; under 7 days, no refund. Full terms on <a href="/cancellation">cancellation</a>. Booking lead times: typically 7–14 days depending on scale.',
  },
  {
    q: 'How do I get a fixed quote?',
    a: 'Use the calculator on this page, then tap <strong>Get Fixed Quote on WhatsApp</strong> — your selection is pre-filled. Or message date, guest count and villa area directly. We reply within the hour when the brief is complete. No payment required to enquire.',
  },
  {
    q: 'Is service available island-wide in Bali?',
    a: 'Yes across major villa regions (Canggu, Seminyak, Uluwatu, Ubud, Sanur, Nusa Dua and more). See <a href="/locations">locations</a>.',
  },
  {
    q: 'Can this combine with other services?',
    a: 'Yes — private chef, catering formats and mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/events/villa-parties">Villa parties →</a>',
  },
  {
    q: 'Who is myCHEF?',
    a: 'Bali villa hospitality company — HACCP-certified operations, chefs, catering, events and staffing since 2019. <a href="/about">About</a> · <a href="/why-mychef">Why myCHEF</a>.',
  },
]

const birthdayServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Birthday Catering Bali',
  serviceType: 'Birthday party catering and villa celebrations',
  provider: {
    '@type': 'LocalBusiness',
    name: siteFacts.businessName,
    url: 'https://mychef.id/',
    telephone: siteFacts.phoneDisplay,
    address: postalAddressSchema,
  },
  areaServed: 'Bali, Indonesia',
  description:
    'Birthday catering in Bali villas — food-first packages from IDR 650,000++ per person (min 10 guests) with optional DJ, decoration, open bar, photography and coordination. Fixed quotes. myCHEF.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Indonesian Birthday Food Package',
      price: '650000',
      priceCurrency: 'IDR',
      description:
        'Per person, min 10 guests. Classic Indonesian BBQ & buffet, chef team, ingredients, service, setup, cleanup, standard cake. ++ tax + service.',
    },
    {
      '@type': 'Offer',
      name: 'International Birthday Food Package',
      price: '800000',
      priceCurrency: 'IDR',
      description:
        'Per person, min 10 guests. Premium international BBQ (beef, lamb, salmon, prawns). ++ tax + service.',
    },
    {
      '@type': 'Offer',
      name: 'Surf & Turf / Seafood Birthday Food Package',
      price: '1050000',
      priceCurrency: 'IDR',
      description:
        'Per person, min 10 guests. Wagyu or premium steak + lobster / king prawns / premium fish. ++ tax + service.',
    },
  ],
}

const POPULAR_FOOD: Partial<Record<keyof typeof FOOD_PACKAGES, true>> = {
  international: true,
}

export default function EventsBirthdaysPage() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      document.querySelectorAll('.birthday-reveal').forEach((el) => {
        ;(el as HTMLElement).style.opacity = '1'
      })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.birthday-reveal',
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.birthday-content', start: 'top 80%', once: true },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <div ref={ref} className="min-h-screen pb-28 md:pb-0" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Birthday Catering Bali | Food-First Villa Parties from IDR 650K | myCHEF"
        description="Birthday catering Bali: choose Indonesian, International or Surf & Turf food (from IDR 650K++/person, min 10), then add DJ, decor, bar & photo. Live calculator. WhatsApp fixed quote."
        canonical={`${SITE}/events/birthdays`}
        ogImage={`${SITE}/generated/mychef-events-bali-hero-birthdays.webp`}
        jsonLd={[
          birthdayServiceSchema,
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Birthdays', `${SITE}/events/birthdays`, 'Events', `${SITE}/events`),
        ]}
      />

      {/* ── Hero (mobile-first) ── */}
      <section className="relative min-h-[85svh] sm:min-h-[90vh] flex items-end sm:items-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/generated/mychef-events-bali-hero-birthdays.webp"
            alt="Sunset birthday pool party setup at a premium Bali villa"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/25 md:hidden" />
        </div>
        <div className="relative z-10 w-full px-5 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 max-w-3xl mx-auto md:mx-0 md:ml-8 lg:ml-16">
          <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Birthdays' }]} theme="dark" className="mb-5 sm:mb-8" />
          <p
            className="text-[#C5A028] text-xs sm:text-sm tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Birthday Catering Bali
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-white mb-4 sm:mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Birthday Catering in Bali — Choose Your Food, Build Your Night
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 max-w-xl leading-relaxed">
            Clear packages. Live pricing. Food first — then freely add DJ, decoration, open bar and photography. Fixed quote within the hour.
          </p>
          <p className="text-sm sm:text-base text-white/75 mb-6 max-w-xl leading-relaxed">
            From <strong className="text-white">IDR 650.000++ per person</strong> (Indonesian, min 10 guests). International IDR 800.000++ · Surf &amp; Turf IDR 1.050.000++. Volume discounts on food for 20+ and 40+ guests.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mb-5">
            <a
              href="#birthday-calculator"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Users className="w-4 h-4" /> Build Your Birthday Quote
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="events-birthdays-hero"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 border border-white/35 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
          <p className="text-xs sm:text-sm text-white/70">
            560+ events since 2019 · HACCP-certified kitchen operations · No payment to enquire
          </p>
        </div>
      </section>

      <TrustStrip dark />
      <div className="bg-[#FAFAF8] px-5 py-3 border-b border-[#E8E6E3]">
        <div className="max-w-7xl mx-auto">
          <HaccpTrustLine />
        </div>
      </div>

      {/* ── Food packages ── */}
      <section className="py-14 sm:py-20 md:py-28 bg-[#FAFAF8] birthday-content birthday-reveal">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <SectionHeader
            eyebrow="Food first"
            title="Three Birthday Food Packages"
            subtitle="Pick the quality of the meal you want. Everything that makes the night complete — DJ, decor, bar, photography — is optional and clearly priced."
          />
          <p className="text-[#4A4745] text-center max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
            Every package includes chef team, ingredients, equipment, service staff, full setup &amp; cleanup, and a standard birthday cake. Minimum 10 guests. Perfect for villa birthdays, milestone 30th / 40th / 50th parties, and group celebrations across Bali.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {(Object.keys(FOOD_PACKAGES) as Array<keyof typeof FOOD_PACKAGES>).map((id) => {
              const pkg = FOOD_PACKAGES[id]
              const popular = Boolean(POPULAR_FOOD[id])
              return (
                <article
                  key={id}
                  className={`rounded-2xl border bg-white p-5 sm:p-6 flex flex-col ${
                    popular ? 'border-[#C5A028] shadow-md' : 'border-[#E8E6E3]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {pkg.name}
                    </h3>
                    {popular && (
                      <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider bg-[#C5A028] text-[#1A1A1A] px-2.5 py-1 rounded-full">
                        Most popular
                      </span>
                    )}
                  </div>
                  <p className="text-lg font-semibold mt-1" style={{ color: ACCENT }}>
                    {formatIDRFull(pkg.baseRate)}++ <span className="text-sm font-medium text-[#4A4745]">/ person</span>
                  </p>
                  <p className="text-sm text-[#4A4745] mt-3 leading-relaxed flex-1">{pkg.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[#4A4745]">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#birthday-calculator"
                    className="mt-5 inline-flex items-center justify-center rounded-full border border-[#C5A028] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#C5A028]/15 transition"
                  >
                    Select in calculator
                  </a>
                </article>
              )
            })}
          </div>

          <div className="mt-8 sm:mt-10 rounded-2xl border border-[#E8E6E3] bg-white p-5 sm:p-6 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-[#1A1A1A] mb-3 flex items-center gap-2">
              <ChefHat className="w-4 h-4" style={{ color: ACCENT }} /> Included in every food package
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {FOOD_INCLUSIONS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#4A4745]/80 mt-4 leading-relaxed">
              Volume discount (food only): 20–39 guests → 5% off · 40+ guests → 10% off. No further volume discounts.
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="py-10 sm:py-16 md:py-20 bg-white birthday-reveal">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <BirthdayQuoteCalculator accent={ACCENT} />
        </div>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              '560+ events since 2019',
              'Fixed price before you commit',
              'No payment to enquire',
              'Reply within the hour',
            ].map((t) => (
              <div key={t} className="rounded-xl border border-[#E8E6E3] bg-[#FAFAF8] px-3 py-3">
                <p className="text-xs sm:text-sm font-medium text-[#1A1A1A] leading-snug">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-on showcase with images ── */}
      <section className="py-14 sm:py-20 md:py-28 bg-[#FAFAF8] birthday-reveal">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <SectionHeader
            eyebrow="Optional upgrades"
            title="Add-Ons — Priced Clearly, Never Hidden"
            subtitle="Build the night around the food. Each upgrade stands on its own so you only pay for what you want."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Music,
                title: 'DJ Package (4 hours)',
                price: formatIDRFull(ADDON_PRICES.dj),
                detail: 'Professional DJ + proper PA (speakers + sub). Most common choice.',
                img: '/generated/birthday-dj-package-villa-pool-party-bali.webp',
                alt: 'Professional DJ booth and PA system at a Bali villa pool birthday party',
              },
              {
                icon: Sparkles,
                title: 'Decoration packages',
                price: `${formatIDRFull(ADDON_PRICES.decorEssential)} – ${formatIDRFull(ADDON_PRICES.decorPremium)}`,
                detail: 'Essential · Standard Villa · Premium Themed. Only one level active.',
                img: '/generated/birthday-decoration-standard-villa-bali.webp',
                alt: 'Champagne balloon arch, photo backdrop and cake table at a Bali villa birthday',
              },
              {
                icon: Wine,
                title: 'Open Bar – 3 hours',
                price: `${formatIDRFull(ADDON_PRICES.openBarPerPerson)} / person`,
                detail: 'Bartender + spirits, mixers, glassware, ice, setup & cleanup (min 10).',
                img: '/generated/birthday-open-bar-villa-party-bali.webp',
                alt: 'Bartender pouring cocktails at an open bar for a Bali villa birthday',
              },
              {
                icon: Camera,
                title: 'Photographer – 2 hours',
                price: formatIDRFull(ADDON_PRICES.photographer),
                detail: 'Professional coverage of the celebration and cake moment.',
                img: '/generated/mychef-events-bali-birthdays-poolside.webp',
                alt: 'Poolside birthday setup ready for photography at a Bali villa',
              },
              {
                icon: ClipboardList,
                title: 'Day-of Coordinator',
                price: formatIDRFull(ADDON_PRICES.coordinator),
                detail: 'Timeline, cues, cake moment and staff orchestration.',
                img: '/generated/mychef-events-bali-birthdays-festival.webp',
                alt: 'Themed milestone birthday styling coordinated at a Bali villa garden',
              },
              {
                icon: Cake,
                title: 'Custom 3-Tier Cake Upgrade',
                price: 'IDR 2.500.000 – 4.000.000',
                detail: 'Replaces the standard cake included with every food package.',
                img: '/generated/mychef-events-bali-birthdays-brunch.webp',
                alt: 'Styled birthday cake and dessert table at a Bali villa celebration',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white overflow-hidden flex flex-col">
                <div className="aspect-[3/2]">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={1248}
                    height={832}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-4 h-4" style={{ color: ACCENT }} />
                    <h3 className="text-base font-semibold text-[#1A1A1A]">{item.title}</h3>
                  </div>
                  <p className="text-sm font-semibold" style={{ color: ACCENT }}>
                    {item.price}
                  </p>
                  <p className="text-sm text-[#4A4745] mt-2 leading-relaxed">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample quotes ── */}
      <section className="py-14 sm:py-20 bg-white birthday-reveal">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <SectionHeader
            eyebrow="Sample totals"
            title="What Real Groups Spend"
            subtitle="Subtotals before tax & service — use the calculator to match your exact guest count."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {SAMPLE_QUOTES.map((ex) => (
              <div key={ex.title} className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {ex.title}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 whitespace-nowrap">
                    {ex.badge}
                  </span>
                </div>
                <ul className="space-y-1.5 text-sm text-[#4A4745] mb-4">
                  {ex.lines.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
                <p className="text-lg font-semibold" style={{ color: ACCENT, fontFamily: "'Playfair Display', serif" }}>
                  Subtotal: {formatIDRFull(ex.total)}
                </p>
                <p className="text-xs text-[#4A4745]/70 mt-1">Before ++ tax &amp; service</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#4A4745] mt-8 max-w-2xl mx-auto leading-relaxed">
            Most groups of 20–30 choose <strong>International + DJ + Standard decorations + Open Bar</strong>. That is why the calculator pre-selects those upgrades when you pick a food package — you can remove any of them.
          </p>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-14 sm:py-20 md:py-28 bg-[#FAFAF8] birthday-reveal">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: ACCENT, fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                How it works
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                From WhatsApp to Cake Moment
              </h2>
              <ol className="space-y-4">
                {[
                  'Send date, guest count and villa area (or use the calculator + WhatsApp button).',
                  'We confirm food package, add-ons and a fixed subtotal before ++.',
                  '50% deposit locks the date, chef team and suppliers.',
                  'On the day: setup, cooking, service, cake moment, full cleanup — you host as a guest.',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white"
                      style={{ background: ACCENT }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm sm:text-base text-[#4A4745] leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
              <p className="text-sm text-[#4A4745] mt-6 leading-relaxed">
                For BBQ-led formats see{' '}
                <Link to="/villa-bbq-catering-bali" className="text-[#2C5F7C] hover:underline font-medium">
                  villa BBQ catering
                </Link>
                ; for cocktail-forward nights see{' '}
                <Link to="/events/villa-parties" className="text-[#2C5F7C] hover:underline font-medium">
                  villa party formats
                </Link>
                .
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/generated/mychef-events-bali-birthdays-bbq.webp"
                alt="Live BBQ station at a Bali villa birthday party"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Staffing & practicalities ── */}
      <section className="py-14 sm:py-20 bg-white birthday-reveal">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Staffing, Setup & Cleanup
            </h2>
            <p className="text-sm sm:text-base text-[#4A4745] leading-relaxed mb-4">
              Enough people, on time, with a plan: that is what separates a relaxed birthday from a stressful one. Service staff scale with guest count; pool parties add bar and floor coverage; cleanup is always part of the plan.
            </p>
            <ul className="space-y-2.5">
              {[
                'Service staff sized to your guest count so plates and glasses stay ahead of the room.',
                'Setup crew arrives hours before guests so the villa is ready, not mid-build.',
                'Optional day-of coordinator cues DJ, speeches and cake without stopping food service.',
                'Glassware, rubbish, buffet breakdown and kitchen reset before we leave.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Villa Rules & Practicalities
            </h2>
            <p className="text-sm sm:text-base text-[#4A4745] leading-relaxed">
              Before we confirm a format, we check what your villa can support: house rules, event permission, noise expectations and neighbourhood considerations. Some villas and local banjar require advance notice or an event fee for larger parties — we flag this during planning. If limits are strict, we recommend a quieter plated or buffet format instead of a full DJ set.
            </p>
            <div className="mt-6 rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/generated/mychef-events-bali-birthdays-poolside.webp"
                alt="Poolside birthday setup with decor and staff at a Bali villa"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 sm:py-20 md:py-28 bg-[#FAFAF8] birthday-reveal">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <SectionHeader
            eyebrow="Questions"
            title="Birthday Catering Bali — FAQ"
            subtitle="Pricing, minimums, volume discounts, cake, rain plans and booking."
          />
          <FAQAccordion items={FAQS} defaultOpenCount={4} showToc ctaEvery={5} />
        </div>
      </section>

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <EmailCaptureBar />
        </div>
      </section>

      {/* ── Booking form ── */}
      <section className="py-14 sm:py-20 md:py-28 bg-white birthday-reveal">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <BookingFormCatering
            title="Book Your Birthday"
            subtitle="Share date, guest count, villa area and preferred food package — we return a fixed quote with tax & service itemised. Or skip the form and use the calculator WhatsApp button above."
            packageOptions={['Indonesian', 'International', 'Surf & Turf / Seafood', 'Custom / not sure']}
            fields={[
              { name: 'format', label: 'Food package', type: 'select', required: true },
              { name: 'date', label: 'Date', type: 'date', required: true },
              { name: 'guests', label: 'Guests (min 10)', type: 'number', placeholder: 'e.g. 24', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', required: true },
              { name: 'age', label: 'Birthday Age / Occasion', type: 'text', placeholder: 'e.g. 30th birthday, 40th' },
              { name: 'addons', label: 'Add-ons of interest', type: 'textarea', placeholder: 'DJ, Standard decor, Open bar, Photographer...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            whatsappName="Sofia"
            accent={ACCENT}
          />
          <p className="text-[#4A4745] text-center mt-8 text-sm">
            Celebrating a 30th, 40th or 50th at full production level? See our{' '}
            <Link to="/luxury-birthday-party-bali" className="text-[#2C5F7C] hover:underline">
              milestone and luxury birthday production
            </Link>{' '}
            page.
          </p>
          <p className="text-[#4A4745] text-center mt-3 text-sm">
            Kids-focused parties:{' '}
            <Link to="/experiences/kids-birthday-chef-party" className="text-[#2C5F7C] hover:underline">
              kids birthday chef party
            </Link>{' '}
            ·{' '}
            <Link to="/kids-menus" className="text-[#2C5F7C] hover:underline">
              kids menus
            </Link>
            .
          </p>
        </div>
      </section>

      <PressStrip />

      <section className="py-14 bg-[#F5F3EE]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-[#C5A028] mb-3">Also available</p>
          <h2 className="text-2xl font-semibold text-[#1A1916] mb-6">Related Services</h2>
          <p className="text-[#4A4745] leading-relaxed text-sm sm:text-base">
            Milestone production:{' '}
            <Link to="/luxury-birthday-party-bali" className="text-[#2C5F7C] underline underline-offset-4">
              luxury birthday Bali
            </Link>
            . Kids:{' '}
            <Link to="/experiences/kids-birthday-chef-party" className="text-[#2C5F7C] underline underline-offset-4">
              kids birthday chef party
            </Link>
            . BBQ:{' '}
            <Link to="/villa-bbq-catering-bali" className="text-[#2C5F7C] underline underline-offset-4">
              villa BBQ catering
            </Link>
            . Bar:{' '}
            <Link to="/in-villa-service/bartenders" className="text-[#2C5F7C] underline underline-offset-4">
              cocktail packages
            </Link>
            . Villa parties:{' '}
            <Link to="/events/villa-parties" className="text-[#2C5F7C] underline underline-offset-4">
              villa party formats
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-14 px-5 sm:px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p
            className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Explore More
          </p>
          <h2 className="text-2xl md:text-3xl text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Other Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { label: 'Weddings', href: '/events/weddings', desc: 'Villa wedding catering and planning.' },
              { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Cocktail receptions and celebrations.' },
              { label: 'Corporate Events', href: '/events/corporate-events', desc: 'Business retreats and offsites.' },
              { label: 'Anniversaries', href: '/events/anniversaries', desc: 'Romantic milestone dinners.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Fine-dining tasting menus.' },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TaxFooter />
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="events-birthdays"
        serviceName="birthday catering in Bali"
        intent="food package and birthday quote"
      />

      {/* Final mid-page CTA strip for desktop */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href="#birthday-calculator"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#C5A028] text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider shadow-lg hover:bg-[#D4B43A] transition"
        >
          <Calendar className="w-3.5 h-3.5" /> Build quote
        </a>
      </div>
    </div>
  )
}
