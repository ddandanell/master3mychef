import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, CheckCircle, ArrowRight, ChefHat } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SITE = 'https://mychef.id'
const WA_NUMBER = '628113803488'
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
  {
    q: 'How do I request a private chef in Bali?',
    a: 'The fastest way is to message us on WhatsApp with your date, villa area, guest count, and cuisine preferences. We reply within 1 hour and send a full proposal within 24 hours. You can also fill in the quote form on our website if you prefer.',
  },
  {
    q: 'How much notice do I need to give?',
    a: 'For small dinners (2–6 guests), 48 hours is often fine. For larger catering or events, 1 week gives us time to source specialty ingredients and lock your preferred chef. Weddings and events over 30 guests should be booked 2+ weeks out.',
  },
  {
    q: 'What information do I need to provide when booking?',
    a: 'We need your villa name or area, your event date and time, guest count, any dietary requirements or allergies, and a general idea of the cuisine style or occasion. The more context you share, the better we can tailor the proposal.',
  },
  {
    q: 'Can I request a specific chef?',
    a: 'Yes. Visit the chefs page to browse our lead profiles, then mention your preference when you message us. We will confirm availability and let you know if that chef is a good match for your event style and size.',
  },
  {
    q: 'What if I have guests with dietary requirements?',
    a: 'All dietary needs are handled as standard — vegan, gluten-free, nut allergies, halal, and more. Share the requirements when you enquire and the chef will design a menu that works for every guest at the table.',
  },
  {
    q: 'Is there a minimum booking?',
    a: 'We work with groups from 2 upward. For intimate dinners, our private chef experience starts with a 3-course set menu. For very large events or wedding catering, get in touch and we will scope it properly.',
  },
  {
    q: 'How is payment handled?',
    a: 'We take a 50% deposit to confirm your booking and lock the chef and team. The balance is settled before or on the day of service. We accept bank transfer and most major payment methods.',
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
          <div className="space-y-8">
            {FAQS.map((item, i) => (
              <div key={i} className="pb-8 border-b border-[#EEE] last:border-0">
                <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                <p className="text-[#666] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
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
