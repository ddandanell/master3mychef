import type { ComponentType } from 'react'
import { Link } from 'react-router-dom'
import { Clock3, MapPin, MessageCircle, PartyPopper, UtensilsCrossed, Wallet } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { ArticleContentSection } from '@/components/shared'

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
const WHATSAPP_URL = 'https://wa.me/6289674072020'

const QUICK_FACTS = [
  { label: 'Replies', value: 'Within 2 hours', icon: Clock3 },
  { label: 'Confirmation', value: 'Within 24 hours', icon: MessageCircle },
  { label: 'Dinners', value: 'From IDR 700K/pax ++', icon: Wallet },
  { label: 'Deposit', value: '50% to confirm', icon: Wallet },
  { label: 'WhatsApp', value: '+62 896-7407-2020', icon: MessageCircle },
]

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'pricing-payment',
    title: 'Pricing & Payment',
    description: 'Starting prices, ++, what is included, deposits and cancellation tiers.',
    icon: Wallet,
    items: [
      {
        q: 'How much does a private chef in Bali cost?',
        a: 'Villa dinners start from IDR 700K per person and fine-dining tasting menus from IDR 950K–980K per person, ++ (11% government tax + 10% service charge). Your fixed quote depends on menu, group size and staffing. <a href="/pricing">full price tables</a>',
      },
      {
        q: 'What does "++" mean?',
        a: 'It means 11% government tax and 10% service charge are added to the listed price — so IDR 700,000++ comes to roughly IDR 847,000 all-in. We always state which format applies to your quote.',
      },
      {
        q: 'Are groceries included?',
        a: 'For fine dining, catering and events, yes. For daily villa chef service, groceries are billed at cost with receipts — never marked up.',
      },
      {
        q: 'What deposit do you require?',
        a: 'A 50% deposit confirms your booking and locks your chef and date. The remaining 50% is due the day before the event, by bank transfer or credit card.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Full refund 14 or more days before your event, 50% refund at 7–13 days, and no refund inside 7 days — the deposit follows the same tiers. <a href="/cancellation">full cancellation policy</a>',
      },
    ],
  },
  {
    id: 'booking-process',
    title: 'Booking & Process',
    description: 'How to book, how quickly we confirm, and how the process works from first message to service day.',
    icon: MessageCircle,
    items: [
      {
        q: 'How do I book?',
        a: 'Message us on WhatsApp with your date, villa area, guest count and the service you have in mind. We reply within 2 hours and send a menu proposal within 24 hours. <a href="/">How our private chef service works →</a>',
      },
      {
        q: 'How far in advance should I book?',
        a: 'A few days is ideal for dinners and one to two weeks for larger events; weddings deserve more. Same-day and next-day requests are often possible — just ask.',
      },
      {
        q: 'Can I request a specific chef?',
        a: 'Yes, especially for repeat bookings and longer stays. Otherwise we match you with the best chef for your cuisine, villa setup and occasion from our team of eight. <a href="/chefs">Meet the chefs →</a>',
      },
      {
        q: 'Which areas do you serve?',
        a: "All of Bali's main villa areas — Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Berawa, Pererenan and the Bukit. Remote areas may add a small travel allowance, always quoted upfront.",
      },
    ],
  },
  {
    id: 'menus-dietary',
    title: 'Menus & Dietary',
    description: 'Cuisine options, menu customization and how we handle allergies, vegan, halal and more.',
    icon: UtensilsCrossed,
    items: [
      {
        q: 'Do you cater dietary requirements?',
        a: 'Yes — vegan, vegetarian, gluten-free, halal, nut allergies and pregnancy-friendly menus are routine, at no extra charge. Tell us when you enquire.',
      },
      {
        q: 'Can I customise the menu?',
        a: 'Absolutely. We propose a menu, you approve or adjust courses, proteins and spice levels before anything is locked.',
      },
      {
        q: 'Do you cook Indonesian food?',
        a: 'Yes — alongside Italian, French, Mediterranean, Japanese and BBQ. Chef Ni Putu Asri leads our Balinese and Indonesian feast menus. <a href="/services">all services</a>',
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
        q: 'What does my kitchen need?',
        a: "A working stove, fridge, sink and basic cookware covers most services. For BBQs and special formats we bring the extra equipment — tell us about your kitchen when booking and we'll plan around it.",
      },
      {
        q: 'When does the chef arrive, and do you clean up?',
        a: 'Typically 2–3 hours before dinner service. Full cleanup is included — dishes washed, kitchen left as we found it.',
      },
      {
        q: 'Can you add waiters or a bartender?',
        a: 'Yes — waiters, butlers and sommeliers from IDR 250K/hour, with bartenders from IDR 350K/hour (3-hour minimum), at a standard ratio of one waiter per 10 guests.',
      },
    ],
  },
  {
    id: 'events-staff-longer-stays',
    title: 'Events, Staff & Longer Stays',
    description: 'Weddings, in-villa staffing, bartenders, waiters and longer-stay chef services.',
    icon: PartyPopper,
    items: [
      {
        q: 'Do you cater weddings?',
        a: 'Yes — up to 200 guests, with full staffing, from IDR 1.5M–3M+ per person depending on menu and production. <a href="/events/weddings">Wedding catering →</a>',
      },
      {
        q: 'Do you offer weekly or monthly chef service?',
        a: 'Yes — weekly meal prep from IDR 4.5M/week for two people, recurring chef days, and monthly arrangements for long stays. <a href="/hire-private-chef-bali-monthly">monthly arrangements</a> · <a href="/staffing/live-in-chef">live-in chef</a>',
      },
      {
        q: "What if my chef can't make it?",
        a: 'We send a verified replacement within 2 hours or refund 100%. Your evening is protected. <a href="/why-mychef">Why villas trust us →</a>',
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
        title="Private Chef Bali FAQ | Booking, Pricing & Menus | myCHEF"
        description="Answers to every private chef Bali question: pricing, menus, dietary needs, staffing, weddings & booking flow. Get clarity before you confirm your date."
        ogImage="/og-image.webp"
        canonical={canonical}
        jsonLd={[
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
              Everything guests ask before booking a private chef, catering or event service with myCHEF in Bali. Short answers here — each one links to the full detail.
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
              <p className="text-sm text-white/[75%] leading-relaxed">WhatsApp +62 896-7407-2020 and our team will usually reply within 2 hours.</p>
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
              <h2 className="text-3xl md:text-5xl font-playfair leading-tight">Ask Us Directly</h2>
              <p className="mt-4 text-white/[75%] leading-relaxed">
                Send your date, area and guest count — we'll tell you what's possible, what it costs and how fast we can confirm.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-source="faq-cta"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Message Us on WhatsApp — +62 896-7407-2020
              </a>
              <a href="mailto:bali@mychef.id" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
                Email bali@mychef.id
              </a>
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
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
