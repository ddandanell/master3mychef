import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema } from '@/components/SeoHead'

const SITE = 'https://mychef.id'

const STEPS = [
  {
    number: '01',
    title: 'Message us on WhatsApp',
    description: 'Send a message with your date, villa area, guest count, and what you\'re looking for. We reply within 1 hour.',
    details: [
      'Include your preferred date(s)',
      'Tell us your villa location (Seminyak, Ubud, etc.)',
      'Let us know how many guests',
      'Share any menu preferences or dietary needs',
    ],
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'We propose options',
    description: 'We send you a proposal with suggested chefs, menus, pricing, and what\'s included. No obligation to accept.',
    details: [
      'Chef bios and experience',
      'Proposed menu options',
      'Team size and service setup',
      'Total cost and what\'s included',
      'What to prepare at your villa',
    ],
    icon: Calendar,
  },
  {
    number: '03',
    title: 'Confirm & prepare',
    description: 'You approve the proposal, we lock the team and send pre-arrival checklists. You confirm your villa kitchen setup.',
    details: [
      'Kitchen layout check',
      'Equipment we provide',
      'What your villa should have',
      'Pre-arrival shopping list',
      'Guest count finalisation',
    ],
    icon: Clock,
  },
  {
    number: '04',
    title: 'Service day',
    description: 'The chef team arrives 2–3 hours before service, sets up everything, cooks, serves, and cleans.',
    details: [
      'Team arrives and preps',
      'Guests dine at scheduled time',
      'Full service & table management',
      'Kitchen left spotless after',
      'Optional: team stays for after-dinner drinks',
    ],
    icon: CheckCircle,
  },
]

const TIMELINE = [
  { when: 'Within 1 hour', what: 'Initial WhatsApp reply', context: 'We acknowledge your message and ask clarifying questions' },
  { when: 'Within 24 hours', what: 'Proposal sent', context: 'Full breakdown: chef, menu, team, price, and logistics' },
  { when: 'After approval', what: 'Deposit taken', context: 'Usually 30% to lock the team and ingredients' },
  { when: '1–3 days before', what: 'Final confirmation', context: 'Guest count, menu review, and villa setup walk-through' },
  { when: 'Service day', what: 'Team arrives', context: 'Usually 2–3 hours before your scheduled dinner time' },
]

const FAQS = [
  {
    q: 'How far in advance do I need to book?',
    a: 'For small dinners (2–6 guests), 48 hours is often fine. For larger catering or events, 1 week gives us time to source specialty ingredients and lock your preferred chef. Weddings should be booked 2+ weeks out.',
  },
  {
    q: 'What if I\'m not sure exactly when I need the service?',
    a: 'You don\'t need to commit to a specific date. Tell us your rough window (e.g., "mid-July") and we\'ll confirm availability once you decide.',
  },
  {
    q: 'Can I change the menu after I book?',
    a: 'Yes. You can request changes up to 48 hours before service. The chef will work with you to adjust courses, proteins, spice level, or ingredients.',
  },
  {
    q: 'What if there\'s a problem during the service?',
    a: 'The chef team handles it in the moment. If something isn\'t right, we address it immediately and offer alternatives. We also follow up the next day to ensure you were happy.',
  },
  {
    q: 'Do I need to have anything ready at my villa?',
    a: 'No. We bring everything except a working kitchen and basic equipment (cutting boards, pots, pans). We provide aprons, service gear, and specialty equipment if needed.',
  },
]

export default function GettingStartedPage() {
  const canonical = `${SITE}/help/getting-started`

  return (
    <main className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Getting Started: Book Your First Private Chef in Bali"
        description="Step-by-step guide to booking your first private chef or catering service at your Bali villa with myCHEF."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Getting Started', canonical, 'Help', `${SITE}/help`),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/help" className="text-[#C5A028] flex items-center gap-2 mb-6 hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
            ← Back to Help
          </Link>
          <h1 className="text-5xl font-light mb-6">Getting Started</h1>
          <p className="text-xl text-white/70">Everything you need to know for your first booking, from message to service day.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-16">The 4-Step Booking Flow</h2>

          <div className="space-y-12">
            {STEPS.map((step, i) => {
              const isLast = i === STEPS.length - 1
              return (
                <div key={i}>
                  <div className="flex gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#C5A028] text-black font-bold text-xl flex items-center justify-center flex-shrink-0">
                        {step.number}
                      </div>
                      {!isLast && <div className="w-1 h-20 bg-[#DDD] mt-4 ml-7" />}
                    </div>
                    <div className="pt-2 pb-8 flex-1">
                      <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-lg text-[#666] mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-3 text-[#666]">
                            <CheckCircle size={20} className="text-[#C5A028] flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white border-t border-[#DDD] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Timeline Expectations</h2>
          <div className="space-y-6">
            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-6 pb-6 border-b border-[#EEE] last:border-0">
                <div className="min-w-[140px]">
                  <p className="font-semibold text-[#C5A028]">{item.when}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.what}</h4>
                  <p className="text-[#666]">{item.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Common Questions</h2>
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
          <h2 className="text-3xl font-light mb-6">Ready to book?</h2>
          <p className="text-white/70 mb-8">Message us on WhatsApp with your dates and preferences. We reply within 1 hour.</p>
          <a
            href="https://wa.me/491635080236?text=Hi%20myCHEF%2C%20I%20want%20to%20book..."
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A028] text-black rounded-full font-semibold hover:bg-[#D4B833] transition focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
          >
            Start Your Booking
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  )
}
