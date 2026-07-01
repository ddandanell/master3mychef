import type { ComponentType } from 'react'
import { Link } from 'react-router-dom'
import { Clock3, MapPin, MessageCircle, PartyPopper, Users, UtensilsCrossed, Wallet } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'

interface FAQItem {
  q: string
  a: string
}

interface FAQCategory {
  id: string
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
  items: FAQItem[]
}

const SITE = 'https://mychef.id'
const WHATSAPP_URL = 'https://wa.me/628113803488'

const QUICK_FACTS = [
  { label: 'Reply time', value: 'Within 1 hour', icon: Clock3 },
  { label: 'Booking confirm', value: 'Within 24 hours', icon: MessageCircle },
  { label: 'Areas covered', value: 'All of Bali', icon: MapPin },
  { label: 'Private dining', value: 'From IDR 450K/pax', icon: Wallet },
]

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'booking-process',
    title: 'Booking & Process',
    description: 'How to book, how quickly we confirm, and how the process works from first message to service day.',
    icon: MessageCircle,
    items: [
      {
        q: 'How do I book a private chef in Bali?',
        a: 'Message us on WhatsApp at +62 811-3803-488 with your date, villa area, guest count and preferred service. We usually respond within 1 hour and confirm availability within 24 hours.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'For small villa dinners, 24 hours is often enough. For larger events or catering, 1 week is safer. For weddings, we recommend 2+ weeks so we can lock the right chefs, service team and production plan.',
      },
      {
        q: 'Do you serve all areas of Bali?',
        a: 'Yes. We serve Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran and surrounding areas across Bali.',
      },
      {
        q: 'What happens if I need to cancel?',
        a: 'Cancellation is free up to 48 hours before service. Within 48 hours, the 50% deposit is retained because ingredients, staffing and scheduling have already been committed.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    description: 'Clear starting points for private dining, what is included, and where guest minimums apply.',
    icon: Wallet,
    items: [
      {
        q: 'How much does a private chef in Bali cost?',
        a: 'Private chef dinners start from IDR 450K per person. You can see full pricing and package guidance at /pricing.',
      },
      {
        q: 'Are ingredients included in the price?',
        a: 'Yes. Our team shops, cooks and cleans, so the service is designed to be all inclusive and easy for villa guests.',
      },
      {
        q: 'Is there a minimum guest count?',
        a: 'Yes. Private dinners start from 2 guests. Catering events are usually best from 10 guests and above.',
      },
    ],
  },
  {
    id: 'chef-team',
    title: 'The Chef & Team',
    description: 'Who cooks for you, how chefs are matched to bookings, and the standards behind the team.',
    icon: Users,
    items: [
      {
        q: 'Who are your chefs?',
        a: 'myCHEF works with 50+ Indonesian culinary professionals, all trained in-house by Adriano. You can meet the team at /chefs.',
      },
      {
        q: 'Can I request a specific chef?',
        a: 'Yes, especially for recurring stays or repeat bookings. For first-time bookings, we usually match you with the best chef for your cuisine preferences, villa setup and event type.',
      },
      {
        q: 'Are your chefs background-checked?',
        a: 'Yes. Every chef is background-checked, food-safety trained and comfortable communicating in English with villa guests.',
      },
    ],
  },
  {
    id: 'menus-dietary',
    title: 'Menus & Dietary',
    description: 'Cuisine options, menu customization and how we handle allergies, vegan requests, halal and more.',
    icon: UtensilsCrossed,
    items: [
      {
        q: 'Can you accommodate dietary requirements?',
        a: 'Yes. We regularly cater for vegan, gluten-free, halal and allergy-sensitive bookings. Just tell us your requirements when you book.',
      },
      {
        q: 'Do you cook Indonesian food?',
        a: 'Yes. We offer Indonesian, Mediterranean, BBQ, Asian fusion and more. You can explore menu ideas at /menus.',
      },
      {
        q: 'Can I customize the menu?',
        a: 'Absolutely. We send you a proposed menu first, then you can approve it or ask us to adjust courses, proteins, spice level or dietary details.',
      },
    ],
  },
  {
    id: 'events-catering',
    title: 'Events & Catering',
    description: 'Support for weddings, in-villa staffing, bartenders, waiters and longer-stay chef services.',
    icon: PartyPopper,
    items: [
      {
        q: 'Do you do weddings?',
        a: 'Yes. We cater weddings for up to 200 guests and can handle food, waiters, setup and cleanup. See /events/weddings for wedding service details.',
      },
      {
        q: 'Can you provide waiters and bartenders too?',
        a: 'Yes. We can provide a full in-villa service team including waiters, bartenders and event support. See /in-villa-service.',
      },
      {
        q: 'Do you offer weekly meal prep or live-in chef?',
        a: 'Yes. We arrange weekly meal prep and live-in chef support for long-stay Bali villa guests. See /staffing for options.',
      },
      {
        q: 'Can you handle corporate retreats or team dinners?',
        a: 'Yes. We cater corporate retreats, team offsites and working group dinners with flexible meal schedules, dietary diversity and multi-day planning. See /help/corporate-guide for details.',
      },
    ],
  },
  {
    id: 'villa-logistics',
    title: 'Villa & Logistics',
    description: 'Kitchen requirements, equipment, arrival timing and how service works at your villa.',
    icon: MapPin,
    items: [
      {
        q: 'What kitchen equipment do you need?',
        a: 'Most villas have everything we need. A working stove, fridge, sink and basic cookware are sufficient. For BBQ or specialized dishes we bring additional equipment.',
      },
      {
        q: 'What time does the chef arrive?',
        a: 'For dinner service, chefs typically arrive 2-3 hours before serving time to shop, prep and cook. For events or catering, arrival timing depends on the scale and menu.',
      },
      {
        q: 'Do you clean up after service?',
        a: 'Yes. Full cleanup is included. The chef washes all dishes, cleans the kitchen and leaves it as we found it.',
      },
      {
        q: 'Can you serve at villas without kitchens?',
        a: 'For small villas with limited kitchens, we can adapt. For venues without kitchens, we offer full event catering with off-site prep and service teams.',
      },
    ],
  },
  {
    id: 'special-occasions',
    title: 'Special Occasions',
    description: 'Birthdays, anniversaries, proposals and how we make milestone moments memorable.',
    icon: PartyPopper,
    items: [
      {
        q: 'Can you help with surprise dinners or proposals?',
        a: 'Yes. We coordinate surprise timing, special table setups, champagne service and discreet chef coordination for proposals, anniversaries and milestone celebrations.',
      },
      {
        q: 'Do you provide decorations or table setup?',
        a: 'Basic table setup is included. For premium table styling, flowers or themed decorations, we can coordinate with trusted Bali event partners.',
      },
      {
        q: 'Can the chef prepare a birthday cake?',
        a: 'Yes. We can arrange custom cakes or desserts for birthdays and celebrations. Just let us know your preferences when booking.',
      },
    ],
  },
]

export default function FAQPage() {
  const canonical = `${SITE}/faq`
  const faqSchemaItems = FAQ_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({ question: item.q, answer: item.a }))
  )

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Bali FAQ | Booking, Pricing & Menus — myCHEF"
        description="Answers to every private chef Bali question: pricing, menus, dietary needs, staffing, weddings & booking flow. Get clarity before you confirm your date."
        ogImage="/og-image.webp"
        canonical={canonical}
        jsonLd={[
          aggregateRatingSchema(4.9, 560),
          breadcrumbSchema('FAQ', canonical),
          faqPageSchema(faqSchemaItems),
        ]}
      />
      <section className="px-5 pt-14 pb-12 sm:px-6 md:pt-24 md:pb-16">
        <div className="max-w-[1180px] mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028] font-semibold mb-4">FAQ</p>
            <h1 className="mb-5 font-playfair text-3xl leading-tight sm:text-4xl md:text-6xl">Frequently Asked Questions</h1>
            <p className="max-w-3xl text-lg md:text-xl text-[#4A4745] leading-relaxed">
              Everything you need to know about booking a private chef, catering, or event service with myCHEF in Bali.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {FAQ_CATEGORIES.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#E2DDD2] bg-white px-4 py-2.5 text-sm font-semibold text-[#4A4745] transition-colors hover:border-[#C5A028] sm:px-5 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#E8E2CF] bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#8A7A47] mb-5">Quick answers</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-[#EFE7D1] bg-[#FAFAF8] p-5">
                  <fact.icon className="h-5 w-5 text-[#C5A028] mb-3" />
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7A746A] mb-1">{fact.label}</p>
                  <p className="text-lg font-semibold text-[#1A1A1A]">{fact.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[#1A1A1A] p-5 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-2">Need a fast answer?</p>
              <p className="text-sm text-white/[75%] leading-relaxed">WhatsApp +62 811-3803-488 and our team will usually reply within 1 hour.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="max-w-[1180px] mx-auto space-y-8">
          {FAQ_CATEGORIES.map((category) => {
            const Icon = category.icon

            return (
              <section key={category.id} id={category.id} className="scroll-mt-24 grid gap-6 rounded-[32px] border border-[#E8E2CF] bg-white p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8">
                <div className="md:pr-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FAF2D4]">
                    <Icon className="h-5 w-5 text-[#8A6F15]" />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#C5A028] font-semibold">Category</p>
                  <h2 className="mt-3 text-3xl font-playfair leading-tight">{category.title}</h2>
                  <p className="mt-4 text-[#4A4745] leading-relaxed">{category.description}</p>
                  <p className="mt-5 text-sm font-semibold text-[#1A1A1A]">{category.items.length} questions answered</p>
                </div>

                <div>
                  <FAQAccordion items={category.items} defaultOpenCount={1} />
                </div>
              </section>
            )
          })}
        </div>
      </section>

      <section className="px-6 py-20 md:py-24 bg-white border-y border-[#ECE5D5]">
        <div className="mx-auto max-w-[1100px] rounded-[32px] bg-[#1A1A1A] px-6 py-12 text-white sm:px-8 md:px-12 md:py-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028] font-semibold mb-4">Still unsure?</p>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-playfair leading-tight">Ask us directly on WhatsApp</h2>
              <p className="mt-4 text-white/[75%] leading-relaxed">
                Send your dates, area in Bali and guest count. We will tell you what is possible, how much it costs and how quickly we can confirm.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-source="faq-cta" 
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Message +62 811-3803-488
              </a>
              <Link to="/pricing" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Pricing', href: '/pricing', desc: 'Transparent rates for all services.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus.' },
              { label: 'Catering', href: '/catering', desc: 'BBQ, buffet, plated & grazing.' },
              { label: 'Events', href: '/events', desc: 'Weddings, birthdays & corporate.' },
              { label: 'Villa Chef', href: '/villa-chef', desc: 'Daily chef for your villa stay.' },
              { label: 'Get a Quote', href: '/quote', desc: 'Detailed proposal within 24 hours.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
