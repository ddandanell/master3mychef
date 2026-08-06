import { Link } from 'react-router-dom'
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'

const WHAT_IS_INCLUDED = [
  'Executive chef + sous chef + line cooks',
  'All ingredients and grocery sourcing',
  'Full kitchen setup and sanitation',
  'Service staff (waiters, bartenders if needed)',
  'Linens, glassware, tableware, presentation',
  'Complete cleanup and restoration',
  'Dietary customization (no extra charge)',
]

const WHAT_IS_NOT_INCLUDED = [
  'Wine, spirits, or premium beverages (unless specified)',
  'Venue rental or event insurance',
  'Photographer or videographer',
  'Guest transportation',
  'Overnight accommodation for staff (unless multi-day)',
]

const PRICING_TIERS = [
  {
    name: 'Villa Dinner',
    price: 'IDR 700K–800K',
    perPerson: 'per guest',
    bestFor: '2–8 guests',
    description: 'Private chef cooking at your villa with table service',
    includes: ['1 Chef + 1 Server', 'Menu of your choice', '3–4 courses', 'Setup & cleanup'],
  },
  {
    name: 'Event Catering',
    price: 'IDR 700K–1.2M',
    perPerson: 'per guest',
    bestFor: '10–50 guests',
    description: 'Full catering team with multiple services',
    includes: ['3–5 chefs', 'Buffet or plated service', '2–3 hour event', 'Full bar support'],
  },
  {
    name: 'Wedding',
    price: 'IDR 1.5M–3M+',
    perPerson: 'per guest',
    bestFor: '30–200 guests',
    description: 'Multi-course wedding dinners with full production',
    includes: ['5–10 chefs', 'Ceremony catering', 'Cocktail hour', 'Multi-course dinner'],
  },
  {
    name: 'Retreat/Corporate',
    price: 'IDR 700K–1.5M',
    perPerson: 'per meal',
    bestFor: '15+ guests',
    description: 'Multi-day meal planning for teams',
    includes: ['Full board options', 'Menu variety', 'Flexible timing', 'Dietary support'],
  },
]

const FAQS = [
  { q: 'Where are full prices listed?', a: 'On <a href="/pricing">pricing</a> and the private chef meal-plan table at <a href="/private-chef-bali">private chef Bali</a>.' },
  { q: 'Daily chef rates?', a: 'Published day rates depend on how many meals you want cooked.' },
  { q: 'What is included vs groceries?', a: 'Daily hire: labor included, groceries at cost. Many event packages include food in the per-person price.' },
  { q: 'Weekly and monthly discounts?', a: '−10% at 7+ days, −20% at 28+ days on daily chef rates.' },
  { q: 'Deposit?', a: 'Usually 50%.' },
  { q: 'Cancellation tiers?', a: 'Full refund 14+ days, 50% at 7–13, none under 7. <a href="/cancellation">Policy</a>.' },
  { q: 'Hidden fees?', a: 'Quotes itemise travel, premium ingredients and add-ons before deposit.' },
  { q: 'Wedding price band?', a: 'Full receptions are quoted per person on the wedding catering pages.' },
  { q: 'Staff hourly rates?', a: 'Staff hourly rates are published on in-villa service pages.' },
  { q: 'How to get an exact total?', a: 'Share date, guests, area and format for a fixed quote.' },
  { q: 'Currency?', a: 'IDR pricing; international transfers accepted as invoiced.' },
  { q: 'Compare formats?', a: 'Use <a href="/dining-styles">dining styles</a> and <a href="/services">services</a>.' },
  { q: 'Is this guide free?', a: 'Yes — educational content to help you plan. Booking is optional.' },
  { q: 'Can myCHEF deliver what this guide describes?', a: 'Yes — start at <a href="/services">services</a> or <a href="/private-chef-bali">private chef</a>.' },
  { q: 'How do I get prices after reading?', a: 'See <a href="/pricing">pricing</a> or WhatsApp a fixed quote request.' },
  { q: 'Does advice apply across Bali?', a: 'Yes for major villa areas — confirm logistics for remote spots.' },
  { q: 'Allergies covered in real bookings?', a: 'Yes — brief us at enquiry. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide</a>.' },
  { q: 'Daily chef vs one dinner?', a: 'Multi-day stays → private chef day rates; celebration nights → fine dining or catering.' },
  { q: 'How to book after this guide?', a: 'WhatsApp date, guests, area — <a href="/book">book</a>.' },
  { q: 'Related services?', a: 'Browse <a href="/dining-styles">dining styles</a> and <a href="/events">events</a>.' },
]

export default function PricingGuide() {
  const canonical = `${SITE}/help/pricing`

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Bali Pricing Guide | What It Really Costs — myCHEF"
        description="Understand private chef Bali pricing: what each format includes, how guest count & menu style affect cost, and how to read your myCHEF quote."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Pricing Guide', canonical, 'Help', `${SITE}/help`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/help" className="text-[#C5A028] flex items-center gap-2 mb-6 hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
            ← Back to Help
          </Link>
          <h1 className="text-5xl font-light mb-6">Pricing Breakdown</h1>
          <p className="text-xl text-white/70">Transparent pricing, what's included, and how to budget for your event.</p>
        </div>
      </section>

      {/* Quick Guide */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle size={24} className="text-[#C5A028]" />
              What's Included
            </h2>
            <ul className="space-y-3">
              {WHAT_IS_INCLUDED.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#666]">
                  <span className="text-[#C5A028] font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertCircle size={24} className="text-[#999]" />
              What's NOT Included
            </h2>
            <ul className="space-y-3">
              {WHAT_IS_NOT_INCLUDED.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#666]">
                  <span className="text-[#999] font-bold mt-0.5">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-white border-t border-[#DDD] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Service Types & Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PRICING_TIERS.map((tier, i) => (
              <div key={i} className="p-8 border border-[#DDD] rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-[#666] mb-4">{tier.description}</p>

                <div className="mb-6 pb-6 border-b border-[#EEE]">
                  <p className="text-3xl font-bold text-[#C5A028]">{tier.price}</p>
                  <p className="text-sm text-[#999]">{tier.perPerson}</p>
                  <p className="text-sm text-[#666] mt-2">Best for: <strong>{tier.bestFor}</strong></p>
                </div>

                <ul className="space-y-2">
                  {tier.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-[#666]">
                      <span className="text-[#C5A028]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-[#666] mt-12 text-sm">
            Note: All prices are base rates. Final cost includes guest count, menu selection, complexity, and logistics.{' '}
            For a full cost breakdown with real booking examples,{' '}
            <Link to="/blog/private-chef-cost-bali" className="text-[#C5A028] hover:underline">
              see our 2026 Private Chef Cost Guide →
            </Link>
          </p>
        </div>
      </section>

      {/* Budget Tips */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12">Budgeting Tips</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">For Dinners (2–8 guests)</h3>
            <p className="text-[#666]">Budget IDR 700K–1M per guest for a full chef team, menu, and service. This is all-inclusive.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">For Events (10–50 guests)</h3>
            <p className="text-[#666]">Budget IDR 750K–1.5M per guest for catering with multiple services, setup, and cleanup.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">For Weddings (30–200 guests)</h3>
            <p className="text-[#666]">Budget IDR 1.5M–3M+ per guest depending on menu complexity, ceremony catering, and service hours.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Hidden Costs to Consider</h3>
            <ul className="text-[#666] space-y-1 ml-4">
              <li>• Premium beverages (wine, spirits) are NOT included</li>
              <li>• Photographer or videographer (separate vendors)</li>
              <li>• Venue rental (if using external location)</li>
              <li>• Guest transportation (if arranged by myCHEF, additional cost)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white border-t border-[#DDD] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Pricing Questions</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-light mb-6">Get a custom quote</h2>
          <p className="text-white/70 mb-8">Message us with your event details and we'll send you a detailed proposal within 24 hours.</p>
          <a
            href="https://wa.me/6289674072020?text=I%20need%20a%20pricing%20quote%20for..."
            data-source="pricing-guide-cta"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A028] text-black rounded-full font-semibold hover:bg-[#D4B833] transition focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
          >
            Request a Quote
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}
