import { ArrowRight, Heart } from 'lucide-react'
import SeoHead, { breadcrumbSchema } from '@/components/SeoHead'
import Breadcrumb from '@/components/shared/Breadcrumb'

const SITE = 'https://mychef.id'

const WEDDING_SERVICES = [
  {
    name: 'Pre-Wedding Dinners',
    description: 'Intimate welcome dinners for rehearsal or welcome events',
    bestFor: '20–50 guests',
    price: 'IDR 1.2M–2M++',
  },
  {
    name: 'Wedding Reception Dinner',
    description: 'Full multi-course wedding dinner with waiters and bar service',
    bestFor: '30–200 guests',
    price: 'IDR 1.5M–3M++',
  },
  {
    name: 'Destination Wedding Package',
    description: 'Multiple events over a weekend (welcome, rehearsal, main reception)',
    bestFor: 'Multi-day events',
    price: 'Custom quote',
  },
  {
    name: 'Post-Wedding Brunch',
    description: 'Casual brunch or day-after gathering',
    bestFor: '20–100 guests',
    price: 'IDR 800K–1.5M++',
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
  'All ingredients (locally sourced where possible)',
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
  {
    q: 'How far in advance should I book?',
    a: 'Weddings should be booked 2-3 months in advance. This gives us time to lock the best chefs, plan the full service, and coordinate with your other vendors.',
  },
  {
    q: 'Can you handle dietary restrictions for many guests?',
    a: 'Yes. We regularly handle mixed dietary tables (vegan, gluten-free, halal, allergies). The chef will have a detailed breakdown and prep accordingly.',
  },
  {
    q: 'Do you provide a wedding cake?',
    a: 'We can cook savoury desserts, but for traditional wedding cakes, we recommend local pastry chefs. We\'ll coordinate timing and serving.',
  },
  {
    q: 'What if the guest count changes?',
    a: 'Notify us as soon as possible. We can usually adjust team size and quantities. Changes within 48 hours may incur ingredient overages.',
  },
  {
    q: 'Can we have a rehearsal dinner too?',
    a: 'Yes. Many couples book a separate rehearsal or welcome dinner 1-2 days before the wedding. We\'ll coordinate both events at a package rate.',
  },
  {
    q: 'What about cocktail hour or pre-dinner drinks?',
    a: 'We can provide a full bar with bartender and appetizers during cocktail hour. This is coordinated as part of the overall service plan.',
  },
]

export default function WeddingGuidePage() {
  const canonical = `${SITE}/help/wedding-guide`

  return (
    <main className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Wedding Catering Guide | myCHEF Bali Villa Weddings"
        description="Complete guide to planning a wedding at your Bali villa. Team sizes, pricing, multi-day packages, and full service coordination."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Wedding Guide', canonical, 'Help', `${SITE}/help`),
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
            Everything you need to know about hosting your wedding at a Bali villa with full catering, logistics, and service.
          </p>
        </div>
      </section>

      {/* Wedding Services */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12">Wedding Service Options</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {WEDDING_SERVICES.map((service, i) => (
            <div key={i} className="p-8 border border-[#DDD] rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
              <p className="text-[#666] mb-6">{service.description}</p>
              <div className="space-y-2">
                <p className="text-sm text-[#666]"><strong>Best for:</strong> {service.bestFor}</p>
                <p className="text-lg font-semibold text-[#C5A028]">{service.price}</p>
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
          <p className="text-white/70 mb-8">Message us with your wedding date and venue details. We'll send a full proposal within 24 hours.</p>
          <a
            href="https://wa.me/6282237565997?text=I%20want%20to%20plan%20a%20wedding%20at%20my%20villa..."
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A028] text-black rounded-full font-semibold hover:bg-[#D4B833] transition focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
          >
            Start Planning
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  )
}
