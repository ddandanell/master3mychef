import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, CheckCircle, ArrowRight, ChefHat } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'
const WA_NUMBER = '6289674072020'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi myCHEF, I want to get started booking a private chef in Bali.')}`

const QUICK_STEPS = [
  {
    number: 1,
    title: 'Tell us the details',
    description: 'Share your villa, date, guest count, and cuisine preferences via WhatsApp or our quote form. The more detail you give, the faster we can match you.',
  },
  {
    number: 2,
    title: 'Receive your proposal',
    description: 'We match you with the right chef and send a personalised menu proposal within 24 hours. Chef bio, menu options, team size, and full pricing — no obligation.',
  },
  {
    number: 3,
    title: 'Relax and enjoy',
    description: 'Your chef arrives at your villa, sets up, cooks, serves, and cleans up completely. You and your guests enjoy a restaurant-quality experience without leaving the villa.',
  },
]

const CHEF_BRINGS = [
  'Professional cooking equipment and specialty tools',
  'Fresh ingredients sourced from local markets that morning',
  'Serving platters, garnishes, and presentation tools',
  'Complete cleanup — your villa kitchen is left spotless',
]

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
  { when: 'After approval', what: 'Deposit taken', context: '50% to lock the team and ingredients'},
  { when: '1–3 days before', what: 'Final confirmation', context: 'Guest count, menu review, and villa setup walk-through' },
  { when: 'Service day', what: 'Team arrives', context: 'Usually 2–3 hours before your scheduled dinner time' },
]

const FAQS = [
  { q: 'How do I book this with myCHEF in Bali?', a: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { q: 'Where can I see prices?', a: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { q: 'Is service available island-wide?', a: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { q: 'Can you handle dietary requirements?', a: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { q: 'What is included vs extra?', a: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { q: 'Deposit and cancellation?', a: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { q: 'How fast is a proposal?', a: 'Often within 2–24 hours of a complete brief.' },
  { q: 'Can this combine with other services?', a: 'Yes — chef, catering, staff and transport can stack in one plan.' },
  { q: 'Do you clean up?', a: 'Yes on serviced formats.' },
  { q: 'Kids welcome?', a: 'Yes with adapted menus when needed. <a href="/kids-menus">Kids menus</a>.' },
  { q: 'Who is myCHEF?', a: 'Bali villa hospitality company — chefs, catering, events and staffing. <a href="/about">About</a> · <a href="/why-mychef">Why myCHEF</a>.' },
  { q: 'More questions?', a: 'See the central <a href="/faq">FAQ</a>.' },
  { q: 'What deposit do you require?', a: 'A 50% deposit confirms your booking and locks the date. The balance is typically due the day before service. Full terms: <a href="/cancellation">cancellation policy</a>.' },
  { q: 'What does "++" mean on prices?', a: '"++" means 11% government tax and 10% service charge are added to the listed price. Written quotes show the all-in total before you pay.' },
  { q: 'Which areas of Bali do you cover?', a: 'Island-wide villa coverage including Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Berawa and Pererenan. Browse <a href="/locations">locations</a>.' },
  { q: 'How far in advance should I book?', a: 'A few days for most dinners; one to two weeks for larger events; longer for peak season and weddings. Last-minute is often possible — ask on WhatsApp.' },
  { q: 'Can you accommodate allergies and special diets?', a: 'Yes — vegan, vegetarian, gluten-free, nut-free, shellfish allergy, pregnancy-safe and halal-sensitive menus when briefed in advance, at no extra charge. Guide: <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">food allergies</a>.' },
  { q: 'Do you clean up after service?', a: 'Yes on serviced chef, catering and fine-dining formats — kitchen and service areas restored before we leave.' },
  { q: 'How do I get a quote?', a: 'WhatsApp date, guest count, villa area and what you want. Or use <a href="/quote">quote</a> / <a href="/book">book</a> / <a href="/faq">FAQ</a>.' },
  { q: 'What if a chef or staff member cannot make it?', a: 'We send a verified replacement of equivalent role or refund that service. Details: <a href="/why-mychef">why myCHEF</a>.' },
]

export default function GettingStartedPage() {
  const canonical = `${SITE}/help/getting-started`

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="How to Book a Private Chef Bali | Getting Started — myCHEF"
        description="Step-by-step guide to booking your first private chef in Bali. What to send, how quotes work & what happens after you confirm with myCHEF."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Getting Started', canonical, 'Help', `${SITE}/help`),
          faqPageSchema(FAQS.map(({ q, a }) => ({ question: q, answer: a }))),
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

      {/* 3 Steps to Book */}
      <section className="py-20 border-b border-[#DDD]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-4">3 Steps to Book Your Private Chef</h2>
          <p className="text-[#666] mb-12 text-lg">From first message to dinner on the table — here is how it works.</p>
          <div className="grid gap-8 md:grid-cols-3">
            {QUICK_STEPS.map((step) => (
              <div key={step.number} className="bg-white border border-[#DDD] rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-[#C5A028] text-black font-bold text-lg flex items-center justify-center mb-5">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#666] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#1ebe59] transition focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            >
              <MessageCircle size={20} />
              Chat with Us on WhatsApp to Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Everything Your Chef Brings */}
      <section className="bg-white py-20 border-b border-[#DDD]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <ChefHat size={32} className="text-[#C5A028]" />
            <h2 className="text-3xl font-light">Everything Your Chef Brings</h2>
          </div>
          <p className="text-[#666] mb-10 text-lg">You do not need to prepare a thing. Your chef and team handle it all.</p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {CHEF_BRINGS.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-[#FAFAF8] border border-[#EEE] rounded-xl px-6 py-5">
                <CheckCircle size={22} className="text-[#C5A028] flex-shrink-0 mt-0.5" />
                <span className="text-[#333] font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Full 4-Step Booking Flow */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-16">The Full Booking Flow</h2>

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
      <section className="py-20 bg-white border-t border-[#DDD]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-4">Frequently Asked Questions</h2>
          <p className="text-[#666] mb-12 text-lg">Everything you need to know before booking your first private chef in Bali.</p>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-[#FAFAF8] border-t border-[#DDD]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Explore Our Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { to: '/fine-dining', label: 'Fine Dining Experiences' },
              { to: '/catering', label: 'Villa Catering' },
              { to: '/events', label: 'Events & Celebrations' },
              { to: '/chefs', label: 'Meet the Chefs' },
              { to: '/blog/private-chef-cost-bali', label: 'Private Chef Cost Guide' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 px-5 py-4 bg-white border border-[#DDD] rounded-xl font-medium text-[#1A1A1A] hover:border-[#C5A028] hover:text-[#C5A028] transition focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <ArrowRight size={16} className="flex-shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-light mb-4">Ready to book your private chef?</h2>
          <p className="text-white/70 mb-10 text-lg">Tell us your villa, date, and guest count. We reply within 1 hour and send a full proposal within 24 hours.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white rounded-full font-semibold text-lg hover:bg-[#1ebe59] transition focus:outline-none focus:ring-2 focus:ring-[#25D366]"
          >
            <MessageCircle size={22} />
            Chat with Us on WhatsApp to Get Started
          </a>
          <p className="mt-6 text-white/50 text-sm">No commitment. We respond in under 1 hour.</p>
        </div>
      </section>
    </div>
  )
}
