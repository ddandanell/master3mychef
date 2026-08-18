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
  { label: 'Daily chef', value: 'From IDR 1M++/day', icon: Wallet },
  { label: 'Deposit', value: '50% to confirm', icon: Wallet },
  { label: 'WhatsApp', value: '+62 896-7407-2020', icon: MessageCircle },
]

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'pricing-payment',
    title: 'Pricing & Payment',
    description: 'Day rates, per-person packages, ++, groceries, deposits and refunds.',
    icon: Wallet,
    items: [
      {
        q: 'How much does a private chef in Bali cost?',
        a: 'Daily villa chef hire starts at <strong>IDR 1,000,000++ per day</strong> for one meal (chef + assistant). Two meals: IDR 1,800,000++/day. Three meals: IDR 2,700,000++/day. Weekly −10%, monthly −20%. Event catering dinners typically from IDR 700K/person ++; fine dining tasting menus are quoted per person with ingredients included. <a href="/private-chef-bali">Private chef prices →</a> · <a href="/pricing">full price tables →</a>',
      },
      {
        q: 'What does "++" mean on myCHEF prices?',
        a: '"++" means 11% government tax and 10% service charge are added to the listed price (×1.21 all-in). Every written quote states the full total before you confirm — no surprise line items after service.',
      },
      {
        q: 'Are groceries included with a private chef in Bali?',
        a: 'For <a href="/private-chef-bali">daily villa chef</a> service: shopping work is included; food is billed at cost with receipts — never marked up. For fine dining, most catering packages and events: ingredients are included in the per-person or package price. Always check your quote line items.',
      },
      {
        q: 'What deposit do you require?',
        a: 'A 50% deposit confirms your booking and locks your chef and date. The remaining 50% is due the day before the event, by bank transfer or credit card.',
      },
      {
        q: 'What is the cancellation and refund policy?',
        a: 'Full refund 14 or more days before your event, 50% refund at 7–13 days, and no refund inside 7 days — the deposit follows the same tiers. <a href="/cancellation">Full cancellation policy →</a>',
      },
      {
        q: 'What payment methods do you accept in Bali?',
        a: 'IDR bank transfer and major credit cards. International transfers are welcome; we send invoice details with the deposit request. Corporate clients can receive NPWP-ready paperwork on request.',
      },
      {
        q: 'Is a private chef cheaper than restaurants for a villa group?',
        a: 'For six or more people on two meals a day, the chef day rate split per person is often less than one mid-range Seminyak dinner — plus no taxis or table waits. Couples booking one special dinner are choosing luxury and convenience more than pure savings. <a href="/blog/private-chef-cost-bali">Cost guide →</a>',
      },
      {
        q: 'How much does a private chef cost per day, per month or per hour?',
        a: '<strong>Per day:</strong> IDR 1M++ / 1.8M++ / 2.7M++ for 1 / 2 / 3 meals (chef + assistant; groceries at cost). <strong>Per month:</strong> same day rates with −20% from 28+ days, or a live-in proposal. <strong>Per hour:</strong> we do not sell a bare chef hourly rate — day rates and per-person event menus keep shopping, cooking and cleanup in one package. <a href="/private-chef-bali">Day rates →</a> · <a href="/pricing">All pricing →</a>',
      },
      {
        q: 'Is a private chef worth it in Bali?',
        a: 'For villa groups who want restaurant-level food without leaving home, yes — especially multi-meal days. Prices are published so you can compare before deposit. <a href="/blog/private-chef-cost-bali">Cost guide →</a>',
      },
      {
        q: 'Do I tip a private chef in Bali?',
        a: 'Optional and appreciated for exceptional service, never required. “++” on quotes already adds government tax and service charge when stated. Your proposal lists what is included.',
      },
    ],
  },
  {
    id: 'booking-process',
    title: 'Booking & Process',
    description: 'How to book, lead times, last-minute requests and chef matching.',
    icon: MessageCircle,
    items: [
      {
        q: 'How do I book a private chef or catering in Bali?',
        a: 'Message WhatsApp with date, villa area, guest count and the service you want. We reply within 2 hours and send a menu proposal within 24 hours. Confirm with a 50% deposit. <a href="/book">Book →</a> · <a href="/quote">Request a quote →</a> · <a href="/help/managing-booking">managing or changing your booking</a>',
      },
      {
        q: 'How far in advance should I book?',
        a: 'A few days for dinners and daily chef days; one to two weeks for larger events; weddings deserve more. Peak season (July–August, Christmas, New Year) often needs 2–4 weeks. Same-day and next-day requests are often possible — just ask.',
      },
      {
        q: 'Can I book a last-minute private chef in Bali?',
        a: 'Often yes for one meal or a small dinner if a chef is free near your villa. Large productions and peak dates need more notice. <a href="/catering/drop-off-catering">Drop-off catering</a> can be a fast backup for food without full service.',
      },
      {
        q: 'Can I request a specific chef?',
        a: 'Yes — especially for multi-day stays and repeat guests. Otherwise we match a head chef by cuisine, villa setup and occasion. <a href="/chefs">Meet the chefs →</a>',
      },
      {
        q: 'Which areas of Bali do you serve?',
        a: 'Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Berawa, Pererenan, Bukit, Denpasar and more. Remote areas may add a travel allowance, always quoted upfront. <a href="/locations">All locations →</a>',
      },
      {
        q: 'Do you work in Airbnb and rental villas?',
        a: 'Yes. Most guests are renting. We only need a working kitchen and villa access instructions. Share your Airbnb or villa manager contact when you book so arrival is smooth.',
      },
      {
        q: 'Can I hire a private chef in Bali — and how do I book?',
        a: 'Yes. WhatsApp date, villa area, guest count and meal type (one dinner vs multi-meal days). We reply within about two hours and send a written proposal. <a href="/book">Book →</a> · <a href="/quote">Quote form →</a>',
      },
      {
        q: 'Does a private chef live with you?',
        a: 'For typical holiday villa bookings: no. The team works your meal windows and leaves after cleanup. Live-in chef is a separate long-term staffing product. <a href="/staffing/live-in-chef">Live-in chef →</a>',
      },
    ],
  },
  {
    id: 'menus-dietary',
    title: 'Menus & Dietary',
    description: 'Cuisines, custom menus, allergies, kids, halal, vegan and BBQ.',
    icon: UtensilsCrossed,
    items: [
      {
        q: 'Can you accommodate food allergies and special diets?',
        a: 'Yes — vegan, vegetarian, gluten-free, dairy-free, nut-free, shellfish allergy, pregnancy-safe and halal-sensitive menus at no extra charge. Tell us at enquiry so we plan safe prep. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide →</a>',
      },
      {
        q: 'Can I customise the menu?',
        a: 'Absolutely. We propose a menu; you approve or adjust courses, proteins, spice levels and kids’ plates before anything is locked. Changes during multi-day stays are normal.',
      },
      {
        q: 'Do you cook Indonesian and Balinese food?',
        a: 'Yes — alongside Italian, Mediterranean, Japanese, French-inspired and BBQ. Chef Ni Putu Asri leads ceremonial Balinese and Indonesian feast menus. Browse <a href="/services">services</a> and <a href="/dining-styles">dining styles</a>.',
      },
      {
        q: 'Do you cook for children?',
        a: 'Yes. Milder spice, familiar dishes, early kids’ seating and adult menus in parallel. Ages and preferences go in the brief. <a href="/kids-menus">Kids menus →</a>',
      },
      {
        q: 'Can you run a BBQ at our villa?',
        a: 'Yes — poolside and garden open-flame menus with seafood, mixed grill or Indonesian flame dishes. For parties see <a href="/catering/bbq-catering">BBQ catering</a>; for menu collections see <a href="/bbq-grill">BBQ grill</a>.',
      },
      {
        q: 'Is alcohol included?',
        a: 'No. Bring your own wine and spirits (we serve) or ask us to source at cost. Add <a href="/in-villa-service/bartenders">cocktail packages</a> for full bar service.',
      },
      {
        q: 'What is a private chef (jasa private chef)?',
        a: 'A private chef cooks only for your group — usually in a villa — planning the menu, shopping, cooking and cleaning. “Jasa private chef” is the Indonesian phrase for that service. myCHEF provides it island-wide in Bali. <a href="/private-chef-bali">Private chef Bali →</a>',
      },
      {
        q: 'What is the difference between a personal chef and a private chef?',
        a: 'Both mean a chef for your group, not a restaurant. We use private chef for occasion and short-stay bookings, and daily/personal chef language for multi-meal stays on published day rates. Both are available.',
      },
    ],
  },
  {
    id: 'villa-logistics',
    title: 'Villa & Logistics',
    description: 'Kitchen requirements, arrival timing, cleanup, equipment and staff add-ons.',
    icon: MapPin,
    items: [
      {
        q: 'What does my villa kitchen need for a private chef?',
        a: 'A working stove, fridge, sink and basic cookware cover most services. For BBQ, fine-dining brigades or large events we bring extra equipment. Send your villa link when booking.',
      },
      {
        q: 'When does the chef arrive, and do you clean up?',
        a: 'Typically 2–3 hours before dinner service. Full cleanup is included — dishes washed, counters wiped, kitchen left as we found it. Multi-meal days follow your schedule.',
      },
      {
        q: 'Can you add waiters, butlers or a bartender?',
        a: 'Yes. Waiters, hosts and butlers priced on request; cocktail packages from IDR 500,000++ per guest. Sommelier quoted per event. Standard ratio: one waiter per 10 guests. <a href="/in-villa-service">In-villa service →</a>',
      },
      {
        q: 'What if it rains during outdoor service?',
        a: 'We plan covered kitchen space, bring a kitchen tent for outdoor setups, or move service indoors if the villa allows. Weather is part of the plan — not an emergency surcharge.',
      },
      {
        q: 'Do you bring tableware and glassware?',
        a: 'For catering and fine-dining formats, yes — serviceware is part of the package. For daily private chef, we typically use the villa’s tableware unless you request rentals. Confirm on your quote.',
      },
    ],
  },
  {
    id: 'events-staff-longer-stays',
    title: 'Events, Staff & Longer Stays',
    description: 'Weddings, corporate events, staffing, live-in chef and multi-day hire.',
    icon: PartyPopper,
    items: [
      {
        q: 'Do you cater weddings in Bali?',
        a: 'Yes — typically up to 200 guests with full kitchen and service teams, from roughly IDR 1.5M–3M+ per person depending on menu and production. <a href="/events/weddings">Wedding catering →</a> · <a href="/bali-wedding-catering-packages">Packages →</a>',
      },
      {
        q: 'Do you offer weekly or monthly private chef service?',
        a: 'Yes — from IDR 1,000,000++/day with 10% off at 7+ days and 20% off at 28+ days. Chef + assistant; groceries at cost. Weekly stays include Chef Rotation. <a href="/private-chef-bali">Daily private chef →</a> · <a href="/staffing/live-in-chef">Live-in chef →</a>',
      },
      {
        q: "What if my chef can't make it?",
        a: 'We send a verified replacement within 2 hours or refund 100% for that service. Your evening is protected. <a href="/why-mychef">Why villas trust us →</a>',
      },
      {
        q: 'What is the difference between private chef, catering and fine dining?',
        a: '<a href="/private-chef-bali">Private chef</a> = day rate for multi-meal villa stays. <a href="/catering">Catering</a> = one-off event packages (BBQ, buffet, plated, drop-off). <a href="/fine-dining">Fine dining</a> = multi-course tasting experiences with a larger brigade. We help you choose on WhatsApp.',
      },
      {
        q: 'Can you staff a villa long-term in Bali?',
        a: 'Yes — private chefs, live-in chefs, villa managers, butlers and household teams via our staffing agency model, with replacement guarantees. <a href="/staffing">Staffing →</a>',
      },
      {
        q: 'Do you cater corporate retreats and team dinners?',
        a: 'Yes — offsites, gala dinners and multi-day retreat catering with NPWP-ready invoicing where needed. <a href="/events/corporate-events">Corporate events →</a> · <a href="/catering/corporate-catering">Corporate catering →</a>',
      },
      {
        q: 'How much does catering in Bali cost per person?',
        a: 'Most food packages start around <strong>IDR 700,000++ per person</strong> (BBQ, buffet, drop-off). Plated from ~IDR 800K++. Wedding receptions often IDR 1.5M–3M++ with full production. <a href="/catering">Catering Bali →</a> · <a href="/pricing">Pricing →</a>',
      },
      {
        q: 'Do you offer Bali bar catering and cocktail packages?',
        a: 'Yes — a <strong>mobile cocktail bar</strong> for villa parties: packages from <strong>IDR 500,000++ per guest</strong> (BYO, min 10), free-flow and premium free-flow with spirits included. Not hourly bartender-only hire. <a href="/in-villa-service/bartenders">Mobile bar packages →</a> · <a href="/experiences/private-cocktail-party">Private cocktail party →</a>',
      },
      {
        q: 'Can I stack private chef, catering and a mobile bar?',
        a: 'Yes — that is the full villa F&amp;B stack. Daily chef for the stay, catering for the party night, mobile bar for drinks. One WhatsApp thread. <a href="/private-chef-bali">Private chef →</a> · <a href="/catering">Catering →</a> · <a href="/in-villa-service/bartenders">Mobile bar →</a>',
      },
      {
        q: 'Catering vs private chef — which do I need?',
        a: '<a href="/private-chef-bali">Private chef</a> day rates for multi-meal villa stays. <a href="/catering">Catering</a> for one celebration night (BBQ, buffet, plated, wedding). Many guests book both. WhatsApp us if you are unsure.',
      },
      {
        q: 'Is food in Bali halal — can you cater pork-free?',
        a: 'Yes. We run pork-free and Muslim-friendly menus on request. Babi guling contains pork and is not for halal groups. Tell us at enquiry. <a href="/catering">Catering options →</a>',
      },
      {
        q: 'How do I order catering or book a catering service in Bali?',
        a: 'WhatsApp date, villa area, guest count and format — or use <a href="/quote">quote</a> / <a href="/book">book</a>. We send a menu proposal and fixed price. That is how food catering is ordered with myCHEF (no anonymous cart). <a href="/catering">Catering Bali →</a>',
      },
      {
        q: 'Do you offer wedding catering, party catering and BBQ catering?',
        a: 'Yes. <a href="/events/weddings">Wedding catering</a> · <a href="/events/villa-parties">party catering</a> · <a href="/catering/bbq-catering">BBQ catering</a> · <a href="/catering/buffet">buffet catering</a>. Full formats on <a href="/catering">catering</a>.',
      },
      {
        q: 'What does catering include with myCHEF?',
        a: 'Serviced packages include chef, service staff, menu ingredients, equipment, setup, service and cleanup. Bar packages and waiters/butlers are add-ons when listed. Details: <a href="/catering">catering FAQ on the catering page</a>.',
      },
    ],
  },
]

export default function FAQPage() {
  const canonical = `${SITE}/faq`
  const faqSchemaItems = FAQ_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({ question: item.q, answer: item.a })),
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
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#E2DDD2] bg-white px-4 py-2.5 text-sm font-semibold text-[#4A4745] transition-colors hover:border-[#C5A028] sm:px-5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
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
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-24 grid gap-6 rounded-[32px] border border-[#E8E2CF] bg-white p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8"
              >
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
                  <FAQAccordion
                    items={category.items}
                    defaultOpenCount={1}
                    showToc={category.items.length >= 5}
                    ctaEvery={category.items.length >= 6 ? 5 : 0}
                  />
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
                Send your date, area and guest count — we&apos;ll tell you what&apos;s possible, what it costs and how fast we can confirm.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-source="faq-cta"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <MessageCircle className="h-4 w-4" />
                Message Us on WhatsApp — +62 896-7407-2020
              </a>
              <a
                href="mailto:bali@mychef.id"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Email bali@mychef.id
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p
            className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Explore More
          </p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Related Services
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Pricing', href: '/pricing', desc: 'Transparent rates for all services.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Fine-dining tasting menus.' },
              { label: 'Catering', href: '/catering', desc: 'BBQ, buffet, plated & grazing.' },
              { label: 'Events', href: '/events', desc: 'Weddings, birthdays & corporate.' },
              { label: 'Villa Chef', href: '/private-chef-bali', desc: 'Daily chef for your villa stay.' },
              { label: 'Get a Quote', href: '/quote', desc: 'Detailed proposal within 24 hours.' },
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
      <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
