import { Link } from 'react-router-dom'
import { ArrowRight, Heart } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import Breadcrumb from '@/components/shared/Breadcrumb'

const SITE = 'https://mychef.id'

const WEDDING_SERVICES = [
  {
    name: 'Pre-Wedding Dinners',
    description: 'Intimate welcome dinners for rehearsal or welcome events',
    bestFor: '20–50 guests',
  },
  {
    name: 'Wedding Reception Dinner',
    description: 'Full multi-course wedding dinner with waiters and bar service',
    bestFor: '30–200 guests',
  },
  {
    name: 'Destination Wedding Package',
    description: 'Multiple events over a weekend (welcome, rehearsal, main reception)',
    bestFor: 'Multi-day events',
  },
  {
    name: 'Post-Wedding Brunch',
    description: 'Casual brunch or day-after gathering',
    bestFor: '20–100 guests',
  },
]

const PLANNING_TIMELINE = [
  { when: '3+ months before', what: 'Initial consultation & venue check', context: 'Discuss vision, guest count, date, and venue. Chef visits villa for kitchen assessment.' },
  { when: '2-3 months', what: 'Proposal & menu planning', context: 'Detailed quote, team size, menu options, timeline, and service setup.' },
  { when: '6 weeks before', what: 'Deposit & team lock', context: '50% deposit secures the date and chef team. Final guest count confirmed.' },
  { when: '2-3 weeks', what: 'Menu final approval', context: 'All dishes locked. Wines or specialty items ordered. Service timeline finalized.' },
  { when: '1 week before', what: 'Final walk-through', context: 'Kitchen setup, serving area, table layout, timing, and any last-minute changes.' },
  { when: 'Wedding day', what: 'Full service execution', context: 'Chef team arrives 4-5 hours early. Setup, cooking, service, and cleanup.' },
]

const INCLUSIONS = [
  'Executive chef + sous chef + line cooks',
  'All ingredients (locally sourced where possible — see our catering options)',
  'Full kitchen setup and sanitation',
  'Service team (waiters, bartenders)',
  'Linens, glassware, tableware, presentation',
  'Complete cleanup and restoration',
  'Dietary customization and allergies handled',
  'Menu adjustments during consultation',
]

const NOT_INCLUDED = [
  'Premium beverages (wine, spirits) — we recommend local suppliers',
  'Venue rental (if using external location)',
  'Wedding cake or dessert from external baker',
  'Photographer or videographer',
  'Guest accommodation',
  'Transportation for guests or staff',
]

const FAQS = [
  { q: 'How much does wedding catering in Bali cost?', a: 'Wedding reception catering is quoted per guest based on menu and guest count. See <a href="/events/weddings">wedding catering</a>, <a href="/bali-wedding-catering-packages">packages</a> and <a href="/pricing">pricing</a> for published guidance.' },
  { q: 'Do you offer menu tastings for weddings?', a: 'Yes — tastings are part of wedding planning for full receptions, scheduled before the day.' },
  { q: 'Can you handle banjar fees and villa permissions?', a: 'We coordinate with villa managers on access, noise and banjar requirements and list third-party fees in the proposal.' },
  { q: 'Can guests bring their own alcohol?', a: 'Yes — BYO with service staff, or full bar packages. <a href="/in-villa-service/bartenders">Bartenders</a>.' },
  { q: 'What is the rain plan for outdoor receptions?', a: 'Every outdoor wedding has a covered fallback (marquee/indoor) confirmed before the day.' },
  { q: 'Do you cater rehearsal and welcome dinners?', a: 'Yes — BBQ, family-style or plated formats via <a href="/events">events</a> and <a href="/catering">catering</a>.' },
  { q: 'What staffing ratio do you use?', a: 'About one waiter per 8–10 seated guests, plus kitchen lead; cocktail hours add tray staff.' },
  { q: 'Can you work with our wedding planner?', a: 'Yes — daily collaboration with planners and villa managers.' },
  { q: 'Do you offer halal-friendly wedding menus?', a: 'Yes — pork-free and halal-sensitive lines when specified at planning.' },
  { q: 'How is this different from a private chef dinner?', a: 'Weddings are multi-guest production. Couples dinners: <a href="/fine-dining/romantic-dinner">romantic dinner</a>.' },
  { q: 'Which areas host most villa weddings?', a: 'Uluwatu, Canggu, Seminyak, Ubud, Nusa Dua and Jimbaran are common — we cover island-wide.' },
  { q: 'Can kids and elderly dietary needs be managed?', a: 'Yes — labelled plates and briefed service for mixed multi-gen guest lists.' },
  { q: 'Is this guide free?', a: 'Yes — educational content to help you plan. Booking is optional.' },
  { q: 'Can myCHEF deliver what this guide describes?', a: 'Yes — start at <a href="/services">services</a> or <a href="/private-chef-bali">private chef</a>.' },
  { q: 'How do I get prices after reading?', a: 'See <a href="/pricing">pricing</a> or WhatsApp a fixed quote request.' },
  { q: 'Does advice apply across Bali?', a: 'Yes for major villa areas — confirm logistics for remote spots.' },
  { q: 'Allergies covered in real bookings?', a: 'Yes — brief us at enquiry. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide</a>.' },
  { q: 'Daily chef vs one dinner?', a: 'Multi-day stays → private chef day rates; celebration nights → fine dining or catering.' },
  { q: 'How to book after this guide?', a: 'WhatsApp date, guests, area — <a href="/book">book</a>.' },
  { q: 'Related services?', a: 'Browse <a href="/dining-styles">dining styles</a> and <a href="/events">events</a>.' },
]

export default function WeddingGuidePage() {
  const canonical = `${SITE}/help/wedding-guide`

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Wedding Catering Guide Bali | Plan Your Villa Wedding — myCHEF"
        description="Plan Bali wedding catering step by step: guest counts, service styles, tastings, staffing & multi-day villa celebrations. Everything you need to know."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Wedding Guide', canonical, 'Help', `${SITE}/help`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <section className="relative py-24 md:py-36 overflow-hidden flex items-center min-h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-ui-bali-guide-wedding.webp"
            alt="Elegant Bali villa wedding reception at sunset — myCHEF"
            className="w-full h-full object-cover"
            width={1344}
            height={768}
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-left text-white">
          <Breadcrumb items={[{ label: 'Help', href: '/help' }, { label: 'Wedding Guide' }]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Celebrations with myCHEF</p>
          <h1 className="text-4xl md:text-7xl font-playfair mb-6">Planning a Villa Wedding</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Everything you need to know about hosting your wedding at a Bali villa with full <a href="/catering" className="text-[#C5A028] hover:underline font-medium">catering</a>, logistics, and service.
          </p>
        </div>
      </section>

      {/* Wedding Services */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12">Wedding Service Options — <Link to="/chefs" className="text-[#C5A028] hover:underline text-2xl font-normal">meet our chefs</Link></h2>
        <div className="grid md:grid-cols-2 gap-6">
          {WEDDING_SERVICES.map((service, i) => (
            <div key={i} className="p-8 border border-[#DDD] rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
              <p className="text-[#666] mb-6">{service.description}</p>
              <div className="space-y-2">
                <p className="text-sm text-[#666]"><strong>Best for:</strong> {service.bestFor}</p>
                <p className="text-sm text-[#666]">Quoted individually in your proposal</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planning Timeline */}
      <section className="bg-white border-t border-[#DDD] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Planning Timeline</h2>
          <div className="space-y-6">
            {PLANNING_TIMELINE.map((item, i) => (
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

      {/* What's Included */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Heart size={24} className="text-[#C5A028]" />
              What's Included
            </h2>
            <ul className="space-y-3">
              {INCLUSIONS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#666]">
                  <span className="text-[#C5A028] font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Heart size={24} className="text-[#999]" />
              What's NOT Included
            </h2>
            <ul className="space-y-3">
              {NOT_INCLUDED.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#666]">
                  <span className="text-[#999] font-bold mt-0.5">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white border-t border-[#DDD] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Wedding Questions</h2>
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
          <h2 className="text-3xl font-light mb-6">Let's plan your wedding</h2>
          <p className="text-white/70 mb-8">Message us with your wedding date and venue details. We'll send a full proposal within 24 hours. Or <Link to="/pricing" className="text-[#C5A028] hover:underline">view our pricing</Link> first.</p>
          <a
            href="https://wa.me/6289674072020?text=I%20want%20to%20plan%20a%20wedding%20at%20my%20villa..."
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A028] text-black rounded-full font-semibold hover:bg-[#D4B833] transition focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5" aria-label="Start planning your wedding"
          >
            Start Planning
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}
