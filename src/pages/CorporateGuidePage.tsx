import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'

const CORPORATE_OPTIONS = [
  {
    name: 'Team Retreat Catering',
    description: 'Multi-day meal planning for team breaks, offsites, and immersions',
    details: ['Full board options (breakfast, lunch, dinner)', 'Flexible timing for activities', 'Dietary accommodations for group'],
    bestFor: '15+ people, 2-7 days',
    price: 'IDR 700K–1.5M per person per meal',
  },
  {
    name: 'Corporate Dinners',
    description: 'Team dinners, client entertainment, partner appreciation dinners',
    details: ['Multi-course plated service', 'Full bar and sommelier support', 'Professional waitstaff'],
    bestFor: '20–100 guests',
    price: 'IDR 1.2M–2.5M++',
  },
  {
    name: 'Meeting Catering',
    description: 'Light breakfasts, working lunches, and coffee breaks during meetings',
    details: ['Flexible timing', 'Fresh and healthy options', 'Professional setup and cleanup'],
    bestFor: 'Any group size',
    price: 'IDR 700K–800K per person per meal',
  },
  {
    name: 'Live-In Chef Support',
    description: 'On-site chef for a full retreat duration',
    details: ['All meals included', 'Menu planning flexibility', 'Dedicated to group needs'],
    bestFor: 'Extended retreats',
    price: 'Custom quote',
  },
]

const RETREAT_SAMPLES = [
  {
    day: 'Day 1 – Arrival',
    meals: ['Welcome Breakfast', 'Working Lunch', 'Team Dinner (Mediterranean)'],
    notes: 'Light meals to ease travel fatigue',
  },
  {
    day: 'Day 2 – Work Day',
    meals: ['Energizing Breakfast', 'Healthy Lunch', 'Evening Social Dinner'],
    notes: 'Nutritious options to support productivity',
  },
  {
    day: 'Day 3 – Exploration',
    meals: ['Light Breakfast', 'Casual Lunch', 'Special Dinner (Indonesian tasting)'],
    notes: 'Flexible timing around activities',
  },
]

const FAQS = [
  { q: 'Corporate catering price range?', a: 'Corporate dinners and multi-day programmes are custom-quoted. <a href="/events/corporate">Corporate events</a>.' },
  { q: 'NPWP invoices?', a: 'Yes on request.' },
  { q: 'Multi-day retreats?', a: 'Yes — <a href="/catering/retreat-catering">retreat catering</a>.' },
  { q: 'Guest counts?', a: 'From leadership dinners to 100–200+ programmes.' },
  { q: 'Dietary for mixed teams?', a: 'Yes when headcount by diet is shared.' },
  { q: 'Villa and venue work?', a: 'Yes — share access rules.' },
  { q: 'Bartenders and waiters?', a: 'Yes — <a href="/in-villa-service">in-villa service</a>.' },
  { q: 'Case studies?', a: 'Yes — <a href="/corporate-case-studies">case studies</a>.' },
  { q: 'Book from overseas?', a: 'Yes — WhatsApp/email planning before arrival.' },
  { q: 'Headcount changes?', a: 'Re-quoted in writing with notice.' },
  { q: 'Alcohol?', a: 'BYO or sourced at cost.' },
  { q: 'How to start?', a: 'Share dates, headcount, venues, meal map — <a href="/quote">quote</a>.' },
  { q: 'Is this guide free?', a: 'Yes — educational content to help you plan. Booking is optional.' },
  { q: 'Can myCHEF deliver what this guide describes?', a: 'Yes — start at <a href="/services">services</a> or <a href="/private-chef-bali">private chef</a>.' },
  { q: 'How do I get prices after reading?', a: 'See <a href="/pricing">pricing</a> or WhatsApp a fixed quote request.' },
  { q: 'Does advice apply across Bali?', a: 'Yes for major villa areas — confirm logistics for remote spots.' },
  { q: 'Allergies covered in real bookings?', a: 'Yes — brief us at enquiry. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide</a>.' },
  { q: 'Daily chef vs one dinner?', a: 'Multi-day stays → private chef day rates; celebration nights → fine dining or catering.' },
  { q: 'How to book after this guide?', a: 'WhatsApp date, guests, area — <a href="/book">book</a>.' },
  { q: 'Related services?', a: 'Browse <a href="/dining-styles">dining styles</a> and <a href="/events">events</a>.' },
]

const PLANNING_STEPS = [
  {
    step: '1. Brief Us',
    description: 'Tell us the group size, dates, retreat theme, and any dietary needs. Share your budget and meal preferences.',
  },
  {
    step: '2. Menu Proposal',
    description: 'We propose a sample daily menu structure. You review and request adjustments. We confirm dietary breakdowns.',
  },
  {
    step: '3. Confirm & Deposit',
    description: 'Lock the date and menu. Provide final headcount. Deposit secures the team and ingredients.',
  },
  {
    step: '4. Pre-Retreat Prep',
    description: 'Final dietary confirmation, any special equipment needs, kitchen access, and timeline walkthrough.',
  },
  {
    step: '5. Execution',
    description: 'Chef arrives and manages all meals. Flexible adjustments during the retreat. Full cleanup after.',
  },
]

export default function CorporateGuidePage() {
  const canonical = `${SITE}/help/corporate-guide`

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Corporate Catering Guide Bali | Offsites & Team Retreats — myCHEF"
        description="Plan corporate catering in Bali: menu options, staffing, timing & multi-day meal flow for teams and offsites. Everything your team needs, handled."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Corporate Guide', canonical, 'Help', `${SITE}/help`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumb items={[{ label: 'Help', href: '/help' }, { label: 'Corporate Guide' }]} theme="dark" className="px-0 pt-0 pb-8" />
          <h1 className="text-5xl font-light mb-6">Corporate & Retreat Catering</h1>
          <p className="text-xl text-white/70">Plan your team retreat, corporate dinner, or multi-day offsite with full catering and flexible service.</p>
        </div>
      </section>

      {/* Options */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12">Service Options</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {CORPORATE_OPTIONS.map((option, i) => (
            <div key={i} className="p-8 border border-[#DDD] rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{option.name}</h3>
              <p className="text-[#666] mb-6">{option.description}</p>
              <ul className="space-y-2 mb-6">
                {option.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-2 text-[#666] text-sm">
                    <CheckCircle size={16} className="text-[#C5A028] flex-shrink-0 mt-0.5" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-[#EEE]">
                <p className="text-xs text-[#999] mb-1">Best for: {option.bestFor}</p>
                <p className="text-[#C5A028] font-semibold">{option.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Retreat */}
      <section className="bg-white border-t border-[#DDD] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Sample 3-Day Retreat</h2>
          <div className="space-y-6">
            {RETREAT_SAMPLES.map((day, i) => (
              <div key={i} className="p-6 border border-[#DDD] rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{day.day}</h3>
                <div className="space-y-2 mb-4">
                  {day.meals.map((meal, j) => (
                    <p key={j} className="text-[#666] flex items-center gap-2">
                      <span className="text-[#C5A028]">•</span>
                      {meal}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-[#999]"><em>{day.notes}</em></p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#666] mt-12 text-sm">
            Every retreat is customized — this is just one example.
          </p>
        </div>
      </section>

      {/* Planning Steps */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12">How to Plan</h2>
        <div className="space-y-6">
          {PLANNING_STEPS.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#C5A028] text-black font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                <p className="text-[#666]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white border-t border-[#DDD] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Corporate Questions</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-light mb-6">Plan your team retreat</h2>
          <p className="text-white/70 mb-8">Message us with your dates, group size, and retreat goals. We'll propose a catering plan within 24 hours.</p>
          <a
            href="https://wa.me/6289674072020?text=I%20want%20to%20plan%20a%20corporate%20retreat%20or%20team%20dinner..."
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A028] text-black rounded-full font-semibold hover:bg-[#D4B833] transition focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
          >
            Get a Quote
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Events', href: '/events/corporate-events', desc: 'Corporate retreats and team dinners.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
              { label: 'Retreat Catering', href: '/catering/retreat-catering', desc: 'Multi-day wellness and team catering.' },
              { label: 'In-Villa Service', href: '/in-villa-service', desc: 'Waiters, bartenders, and staff.' },
              { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all services.' },
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
