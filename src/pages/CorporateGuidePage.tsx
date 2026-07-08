import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SeoHead, { breadcrumbSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import Breadcrumb from '@/components/shared/Breadcrumb'

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
    price: 'IDR 300K–800K per person per meal',
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
  {
    q: 'What makes a good corporate retreat menu?',
    a: 'Mix nutritious breakfasts and lunches with memorable dinners. Include dietary options (vegan, gluten-free, low-sugar) and avoid heavy meals during work time. Our chefs coordinate timing with your schedule.',
  },
  {
    q: 'Can we do team dinners without a full retreat?',
    a: 'Absolutely. We do one-off team dinners, client entertaining dinners, and partner appreciation events. Just arrange a venue and let us handle the food and service.',
  },
  {
    q: 'How do payment plans work for long stays?',
    a: 'For multi-day retreats, we typically invoice per day or per meal. Discuss your budget and timing during the proposal — we can structure payments to match your finance needs.',
  },
  {
    q: 'What if dietary needs vary widely?',
    a: 'We create a dietary breakdown of all attendees and plan menus that naturally accommodate multiple preferences. For example, grilled proteins with various sauces and sides.',
  },
  {
    q: 'Can we have flexibility in meal times?',
    a: 'Yes. If your schedule changes, notify us as soon as possible. We can shift meal times, adjust portions, or swap courses to fit your day.',
  },
  {
    q: 'What about alcohol-free events?',
    a: 'No problem. We offer elegant non-alcoholic beverages, mocktails, and creative drinks. Inform us during booking if the event is dry.',
  },
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
    <main className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Corporate Catering Guide Bali | Offsites & Team Retreats — myCHEF"
        description="Plan corporate catering in Bali: menu options, staffing, timing & multi-day meal flow for teams and offsites. Everything your team needs, handled."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Corporate Guide', canonical, 'Help', `${SITE}/help`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 89),
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
          <div className="space-y-8">
            {FAQS.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                <p className="text-[#666] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
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
    </main>
  )
}
