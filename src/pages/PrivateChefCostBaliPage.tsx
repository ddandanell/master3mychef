import { Link } from 'react-router-dom'
import { ChevronRight, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { PHONE } from '@/data/siteArchitecture'

const SITE = 'https://mychef.id'
const CANONICAL = `${SITE}/blog/private-chef-cost-bali`

const PRICING_TABLE = [
  {
    service: 'Intimate Villa Dinner',
    guests: '2–6 guests',
    pricePerPerson: 'IDR 450K – 800K',
    totalRange: 'IDR 900K – 5M',
    includes: 'Chef + server, 3–4 courses, setup & cleanup',
  },
  {
    service: 'Private Group Dinner',
    guests: '6–15 guests',
    pricePerPerson: 'IDR 400K – 700K',
    totalRange: 'IDR 2.5M – 10.5M',
    includes: 'Chef + 2 servers, 4 courses, full table service',
  },
  {
    service: 'Event Catering',
    guests: '15–50 guests',
    pricePerPerson: 'IDR 600K – 1.2M',
    totalRange: 'IDR 9M – 60M',
    includes: '3–5 chefs, buffet or plated, bar support',
  },
  {
    service: 'Wedding Catering',
    guests: '30–200 guests',
    pricePerPerson: 'IDR 1.5M – 3M+',
    totalRange: 'IDR 45M – 600M+',
    includes: '5–10 chefs, multi-course dinner, cocktail hour',
  },
  {
    service: 'Retreat / Corporate',
    guests: '15–50 guests',
    pricePerPerson: 'IDR 700K – 1.5M / meal',
    totalRange: 'IDR 10.5M – 75M / day',
    includes: 'Full board, menu variety, dietary support',
  },
]

const WHAT_AFFECTS_PRICE = [
  {
    factor: 'Guest Count',
    impact: 'More guests = more kitchen staff needed. Per-person cost often decreases slightly as groups get larger (economies of scale on ingredients).',
  },
  {
    factor: 'Menu Complexity',
    impact: 'A 3-course set menu costs significantly less than a 7-course tasting menu with wine pairings and tableside preparation.',
  },
  {
    factor: 'Ingredients',
    impact: 'Premium seafood (lobster, king crab), A5 wagyu, or imported cheeses add IDR 100K–500K+ per person depending on portion. Local Balinese ingredients are far more affordable.',
  },
  {
    factor: 'Location',
    impact: 'Villas in Seminyak and Canggu have good market access. Uluwatu and Ubud may involve extra travel time and logistics costs.',
  },
  {
    factor: 'Duration',
    impact: 'A 2-hour dinner service versus a full-day retreat with breakfast, lunch, and dinner are priced very differently. Multi-day bookings often get a reduced daily rate.',
  },
  {
    factor: 'Event Date',
    impact: 'Peak season (July–August, December) may have premium pricing due to high demand from the tourism calendar.',
  },
]

const FAQS = [
  {
    q: 'How much does a private chef cost in Bali?',
    a: 'A private chef in Bali typically costs IDR 450,000–800,000 per person for a villa dinner (2–8 guests), IDR 600,000–1,200,000 per person for event catering (15–50 guests), and IDR 1,500,000–3,000,000+ per person for weddings. All prices are before 11% government tax and 10% service charge.',
  },
  {
    q: 'What is included in the private chef price?',
    a: 'myCHEF prices include the chef and kitchen team, all ingredients and grocery sourcing, kitchen equipment and setup, service staff, tableware and presentation, and full cleanup after the event. Alcohol and beverages are typically not included unless specified.',
  },
  {
    q: 'Is there a minimum booking for a private chef in Bali?',
    a: 'myCHEF typically requires a minimum of 2 guests. For larger event catering, minimums may apply based on the service type and required staff. Contact us to discuss your specific situation.',
  },
  {
    q: 'How much notice do I need to book a private chef in Bali?',
    a: 'We recommend booking at least 48 hours in advance for villa dinners, and 1–2 weeks for events over 20 guests. For weddings and large corporate retreats, 4–8 weeks notice is ideal to ensure availability and custom menu planning.',
  },
  {
    q: 'Can I get a private chef for one night only?',
    a: 'Yes, one-night villa dinners are one of our most popular services. We can accommodate a single evening with as little as 48 hours notice, subject to chef availability.',
  },
  {
    q: 'Do private chefs in Bali provide their own equipment?',
    a: 'Yes. myCHEF brings all necessary kitchen equipment, tools, serving ware, and presentation items. We only require a functional kitchen space (standard villa kitchen is sufficient). We assess kitchen facilities when you book.',
  },
  {
    q: 'What does "++" mean in Bali restaurant and catering pricing?',
    a: '"++" means government tax (11%) and service charge (10%) are added on top of the quoted price. For example, IDR 2,200,000++ becomes approximately IDR 2,640,000 total. myCHEF quotes always specify whether pricing is "nett" (all-inclusive) or "++".',
  },
  {
    q: 'Are tips expected for private chefs in Bali?',
    a: 'Tipping is not mandatory and not included in our pricing, but it is appreciated. If the team delivered an exceptional experience, a tip of IDR 100,000–300,000 per staff member is a kind gesture.',
  },
  {
    q: 'How does myCHEF compare to hiring a private chef directly?',
    a: 'myCHEF provides a full-service team including sous chefs, servers, and kitchen staff — not just a single chef. We also handle all logistics, insurance, ingredient sourcing, and quality control. A solo freelance chef is typically cheaper but offers a much more limited experience with no team support.',
  },
]

const WA_MSG = encodeURIComponent('Hi myCHEF! I\'d like to know the cost for a private chef in Bali. Can you send me a quote?')

export default function PrivateChefCostBaliPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does a Private Chef Cost in Bali? (2025 Price Guide)',
    description: 'Real private chef prices in Bali: villa dinners IDR 450K–800K/person, event catering IDR 600K–1.2M/person, weddings IDR 1.5M–3M/person. What\'s included, what affects cost, and how to book.',
    author: {
      '@type': 'Organization',
      name: 'myCHEF.id',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'myCHEF.id',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/og-image.webp`,
      },
    },
    datePublished: '2025-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': CANONICAL,
    },
    url: CANONICAL,
  }

  return (
    <main className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Cost Bali 2025 | Real Prices & What's Included — myCHEF"
        description="How much does a private chef in Bali cost? Villa dinners from IDR 450K/person, events from IDR 600K, weddings from IDR 1.5M. Full breakdown of what's included."
        canonical={CANONICAL}
        ogType="article"
        ogImage="/og-image.webp"
        jsonLd={[
          articleSchema,
          breadcrumbSchema('Private Chef Cost Bali', CANONICAL, 'Blog', `${SITE}/blog`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#C5A028] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-[#C5A028] transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-white/60">Private Chef Cost Bali</span>
          </nav>

          <div className="mb-4">
            <span className="text-[#C5A028] text-xs uppercase tracking-[2px] font-semibold">Pricing Guide · Updated 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            How Much Does a Private Chef Cost in Bali?
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Real pricing from IDR 450K per person for intimate villa dinners to IDR 3M+ per person for luxury weddings — plus what's included, what affects the cost, and how to get your quote.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-white font-semibold px-6 py-3 rounded hover:bg-[#B08F20] transition-colors text-sm uppercase tracking-wider"
            >
              <MessageCircle size={16} />
              Get Your Custom Quote
            </a>
            <Link
              to="/help/pricing"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded hover:border-[#C5A028] hover:text-[#C5A028] transition-colors text-sm uppercase tracking-wider"
            >
              Detailed Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="bg-[#C5A028] text-white py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-4">Quick Answer: What Does a Private Chef Cost in Bali?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded p-4">
              <div className="text-2xl font-bold">IDR 450K–800K</div>
              <div className="text-white/80 text-sm mt-1">per person · Villa dinner (2–8 guests)</div>
            </div>
            <div className="bg-white/10 rounded p-4">
              <div className="text-2xl font-bold">IDR 600K–1.2M</div>
              <div className="text-white/80 text-sm mt-1">per person · Event catering (15–50 guests)</div>
            </div>
            <div className="bg-white/10 rounded p-4">
              <div className="text-2xl font-bold">IDR 1.5M–3M+</div>
              <div className="text-white/80 text-sm mt-1">per person · Wedding catering</div>
            </div>
          </div>
          <p className="text-white/70 text-xs mt-4">All prices are estimated before 11% government tax + 10% service charge (++). Actual quotes depend on guest count, menu, and date.</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">

        {/* Section 1: Full Price Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-2">Private Chef Prices in Bali by Service Type</h2>
          <p className="text-[#666] mb-8">The table below covers the five main ways you can hire a private chef or catering team in Bali. All price ranges reflect typical myCHEF bookings in 2025.</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="text-left p-4 font-semibold">Service</th>
                  <th className="text-left p-4 font-semibold">Guests</th>
                  <th className="text-left p-4 font-semibold">Price / Person</th>
                  <th className="text-left p-4 font-semibold">Estimated Total</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">What's Included</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TABLE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F0]'}>
                    <td className="p-4 font-medium">{row.service}</td>
                    <td className="p-4 text-[#666]">{row.guests}</td>
                    <td className="p-4 text-[#C5A028] font-semibold">{row.pricePerPerson}</td>
                    <td className="p-4 text-[#666]">{row.totalRange}</td>
                    <td className="p-4 text-[#666] hidden md:table-cell">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#999] text-xs mt-3">Prices shown in Indonesian Rupiah (IDR). ++ tax and service apply. Contact us for exact pricing for your event.</p>
        </section>

        {/* Section 2: What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-2">What's Included in the Price</h2>
          <p className="text-[#666] mb-8">When you book a private chef through myCHEF, pricing is all-inclusive — no surprise extra charges on the day.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle size={20} className="text-[#C5A028]" />
                Always Included
              </h3>
              <ul className="space-y-3">
                {[
                  'Executive chef + sous chef + kitchen team',
                  'All ingredients, groceries, and sourcing',
                  'Full kitchen setup and professional sanitation',
                  'Service staff (waiters, bartenders if applicable)',
                  'Tableware, glassware, linens, and presentation',
                  'Full cleanup and kitchen restoration after service',
                  'Dietary customisation at no extra charge',
                  'Menu consultation and custom design',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#555]">
                    <span className="text-[#C5A028] font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-[#999]" />
                Typically NOT Included
              </h3>
              <ul className="space-y-3">
                {[
                  'Wine, spirits, and premium beverages (can be arranged separately)',
                  'Venue rental or event insurance',
                  'Photographer or videographer',
                  'Guest transportation',
                  'Accommodation for chef team on multi-day retreats',
                  'Themed decorations (florals, lighting)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#555]">
                    <span className="text-[#999] font-bold mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: What Affects Price */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-2">What Affects the Price of a Private Chef in Bali?</h2>
          <p className="text-[#666] mb-8">Six factors have the biggest impact on your final quote. Understanding them helps you plan your budget accurately.</p>

          <div className="space-y-4">
            {WHAT_AFFECTS_PRICE.map((item, i) => (
              <div key={i} className="border border-[#E8E8E0] rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2 text-[#1A1A1A]">{item.factor}</h3>
                <p className="text-[#666] leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Real Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-2">Real Booking Examples: What Does It Cost?</h2>
          <p className="text-[#666] mb-8">Below are representative booking scenarios based on real myCHEF events in Bali. Names are anonymised but the pricing reflects actual invoices.</p>

          <div className="space-y-6">
            <div className="bg-white border border-[#E8E8E0] rounded-lg p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-semibold text-lg">Honeymoon Dinner for 2 — Seminyak Villa</h3>
                <span className="bg-[#C5A028]/10 text-[#C5A028] text-sm font-semibold px-3 py-1 rounded whitespace-nowrap">IDR 2.1M nett</span>
              </div>
              <p className="text-[#666]">5-course tasting menu with locally sourced seafood, sommelier wine pairing, dedicated chef and butler. Served on a private terrace at sunset. Duration: 3 hours.</p>
            </div>

            <div className="bg-white border border-[#E8E8E0] rounded-lg p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-semibold text-lg">Family Reunion Dinner — 12 Guests, Canggu</h3>
                <span className="bg-[#C5A028]/10 text-[#C5A028] text-sm font-semibold px-3 py-1 rounded whitespace-nowrap">IDR 7.8M nett</span>
              </div>
              <p className="text-[#666]">4-course Indonesian-European fusion dinner, chef + 2 servers, shared feasting style with a whole-roasted fish centrepiece. Full setup and cleanup included. Duration: 4 hours.</p>
            </div>

            <div className="bg-white border border-[#E8E8E0] rounded-lg p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-semibold text-lg">Corporate Team Retreat — 25 Guests, Ubud</h3>
                <span className="bg-[#C5A028]/10 text-[#C5A028] text-sm font-semibold px-3 py-1 rounded whitespace-nowrap">IDR 18.5M / day</span>
              </div>
              <p className="text-[#666]">3 days, full board: breakfast, working lunch, gala dinner. 4 chefs + 3 servers rotating. Custom dietary plans, daily menu variation, Balinese welcome ceremony dinner on day 1.</p>
            </div>

            <div className="bg-white border border-[#E8E8E0] rounded-lg p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-semibold text-lg">Beach Wedding — 80 Guests, Uluwatu</h3>
                <span className="bg-[#C5A028]/10 text-[#C5A028] text-sm font-semibold px-3 py-1 rounded whitespace-nowrap">IDR 195M nett</span>
              </div>
              <p className="text-[#666]">5-hour evening event: cocktail hour canapes, 5-course plated dinner, live cooking station, wedding cake. 8 chefs + 10 servers. Custom menu design with 3 consultation sessions.</p>
            </div>
          </div>
        </section>

        {/* Section 5: How to Budget */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-2">How to Budget for a Private Chef in Bali</h2>
          <p className="text-[#666] mb-6">Follow these steps to set a realistic budget before requesting quotes:</p>

          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Know Your Guest Count',
                body: 'Guest count is the single biggest driver of price. Even an approximate number (e.g. "10–15 guests") is enough to get a realistic estimate. Per-person rates slightly decrease as groups get larger.',
              },
              {
                step: '2',
                title: 'Decide on the Menu Style',
                body: 'A casual Balinese-inspired set menu costs half as much as a 7-course contemporary tasting menu. Tell your chef what experience you want (relaxed family sharing vs. fine dining) before asking for pricing.',
              },
              {
                step: '3',
                title: 'Clarify Beverage Needs',
                body: 'Beverages are often not included. If you want the chef team to source and serve wine, cocktails, or mocktails, factor in an additional IDR 100K–500K+ per person depending on what you choose.',
              },
              {
                step: '4',
                title: 'Factor In Tax and Service',
                body: 'If your quote is listed "++" (as many Indonesian hospitality quotes are), add approximately 21% to the base price to get your total: 11% government tax + 10% service charge.',
              },
              {
                step: '5',
                title: 'Account for the Deposit',
                body: 'myCHEF requires a 25% deposit to confirm your booking date and team. The remaining 75% is due 48 hours before the event. Plan your payment timing accordingly.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C5A028] text-white flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-[#666] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-2">Private Chef vs. Restaurant: Is It Worth It?</h2>
          <p className="text-[#666] mb-8">Many guests ask whether a private chef is really better value than a top Bali restaurant. Here's an honest comparison:</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="text-left p-4 font-semibold">Factor</th>
                  <th className="text-left p-4 font-semibold">Private Chef (myCHEF)</th>
                  <th className="text-left p-4 font-semibold">Top Bali Restaurant</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Privacy', 'Your villa, no other guests', 'Shared dining room'],
                  ['Menu', 'Fully custom to your preferences', 'Fixed restaurant menu'],
                  ['Dietary needs', 'Accommodated at no extra cost', 'Limited, may charge extra'],
                  ['Timing', 'Your schedule, flexible service', 'Restaurant hours only'],
                  ['Ambiance', 'Your villa/location, your setup', 'Restaurant\'s atmosphere'],
                  ['Cost (4 guests)', 'IDR 1.8M–3.2M total', 'IDR 600K–3M+ per person'],
                  ['Service', 'Dedicated team for you only', 'Shared between all tables'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F0]'}>
                    <td className="p-4 font-medium">{row[0]}</td>
                    <td className="p-4 text-[#555]">{row[1]}</td>
                    <td className="p-4 text-[#555]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#666] mt-4 leading-relaxed">For groups of 4 or more, a private chef often costs the same or less than a premium restaurant dinner — while delivering a completely personalised experience at your villa.</p>
        </section>

        {/* CTA Mid-Article */}
        <section className="mb-16 bg-[#1A1A1A] text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-light mb-3">Ready to Get a Quote?</h2>
          <p className="text-white/60 mb-6">Tell us your date, guest count, and preferred menu style. We'll send you a personalised quote via WhatsApp within 2 hours.</p>
          <a
            href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-white font-semibold px-8 py-3 rounded hover:bg-[#B08F20] transition-colors text-sm uppercase tracking-wider"
          >
            <MessageCircle size={16} />
            Get My Free Quote
          </a>
        </section>

        {/* Section 7: Location guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-2">Does Location in Bali Affect Private Chef Pricing?</h2>
          <p className="text-[#666] mb-6 leading-relaxed">
            Yes — though not dramatically. Areas closer to central Bali markets (Seminyak, Canggu, Kuta, Sanur) tend to have the most efficient logistics, which can slightly reduce ingredient costs. More remote areas may incur a small travel or logistics surcharge.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { area: 'Seminyak', note: 'Prime area — no surcharge, best ingredient access' },
              { area: 'Canggu', note: 'Popular surf area — no surcharge' },
              { area: 'Uluwatu', note: 'Clifftop peninsula — small logistics premium may apply' },
              { area: 'Ubud', note: 'Inland cultural centre — minimal logistics premium' },
              { area: 'Jimbaran', note: 'Airport area — no surcharge' },
              { area: 'Nusa Dua', note: 'Resort zone — no surcharge' },
              { area: 'Sanur', note: 'East coast — no surcharge' },
              { area: 'Denpasar', note: 'City centre — full access, no surcharge' },
            ].map((loc) => (
              <Link
                key={loc.area}
                to={`/private-chef-bali/${loc.area.toLowerCase()}`}
                className="flex items-center gap-3 border border-[#E8E8E0] rounded-lg p-4 hover:border-[#C5A028] transition-colors group"
              >
                <ChevronRight size={16} className="text-[#C5A028] flex-shrink-0" />
                <div>
                  <div className="font-medium group-hover:text-[#C5A028] transition-colors">Private Chef {loc.area}</div>
                  <div className="text-[#888] text-sm">{loc.note}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 8: Booking Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-2">How to Book a Private Chef in Bali with myCHEF</h2>
          <p className="text-[#666] mb-8 leading-relaxed">The booking process is straightforward and designed to minimise back-and-forth.</p>

          <div className="space-y-6">
            {[
              {
                step: '1. Send a WhatsApp message',
                detail: 'Contact us via WhatsApp with your event date, location, guest count, and budget range. Our team responds within 2 hours during business hours (07:00–22:00 WITA).',
              },
              {
                step: '2. Receive your custom proposal',
                detail: 'Within 24 hours, we send a detailed proposal with menu options, staffing plan, pricing breakdown (all-inclusive or ++ clearly marked), and availability confirmation.',
              },
              {
                step: '3. Confirm with 25% deposit',
                detail: 'Once you approve the proposal, a 25% deposit secures your chef team and date. We accept bank transfer, credit card, and most major payment methods.',
              },
              {
                step: '4. Menu refinement',
                detail: 'In the week before your event, we schedule a final call to confirm dietary requirements, exact guest count, and any last-minute preferences.',
              },
              {
                step: '5. Final payment + event',
                detail: 'Remaining balance (75%) is due 48 hours before service. On the day, your chef team arrives 2 hours early to set up. You enjoy the experience — we handle everything else.',
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#C5A028] text-[#C5A028] flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{step.step}</h3>
                  <p className="text-[#666] leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="border border-[#E8E8E0] rounded-lg overflow-hidden group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-[#1A1A1A] hover:bg-[#F9F9F6] transition-colors list-none">
                  {faq.q}
                  <ChevronRight size={18} className="flex-shrink-0 text-[#C5A028] group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-[#666] leading-relaxed border-t border-[#E8E8E0] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6">Related: Explore Our Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Private Chef Bali', path: '/fine-dining/private-chef-bali', desc: 'Our flagship private chef service' },
              { label: 'Event Catering Bali', path: '/catering', desc: 'Catering for events of all sizes' },
              { label: 'Pricing Guide', path: '/help/pricing', desc: 'Full breakdown of all pricing' },
              { label: 'Wedding Catering', path: '/events/weddings', desc: 'Luxury wedding catering in Bali' },
              { label: 'Corporate Retreats', path: '/events/retreats', desc: 'Full-board retreat catering' },
              { label: 'Book a Chef', path: '/quote', desc: 'Get your custom quote in 24h' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="border border-[#E8E8E0] rounded-lg p-4 hover:border-[#C5A028] transition-colors group"
              >
                <div className="font-medium group-hover:text-[#C5A028] transition-colors mb-1">{link.label}</div>
                <div className="text-[#888] text-sm">{link.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-[#C5A028] to-[#B08F20] text-white rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Ready to Book Your Private Chef?</h2>
              <p className="text-white/80">25% deposit secures your date. Free menu consultation. Responds in 2 hours.</p>
            </div>
            <a
              href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#C5A028] font-bold px-8 py-3 rounded hover:bg-[#F5F5F0] transition-colors text-sm uppercase tracking-wider"
            >
              <MessageCircle size={16} />
              WhatsApp Us Now
            </a>
          </div>
        </section>

      </article>
    </main>
  )
}
