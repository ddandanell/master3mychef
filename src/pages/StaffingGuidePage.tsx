import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SITE = 'https://mychef.id'

const STAFFING_ROLES = [
  {
    role: 'Waiters & Table Service',
    description: 'Professional table service, drink refills, plate management',
    training: 'Food & beverage service, guest interaction, formal dining protocols',
    bestFor: 'Dinners, events, formal occasions',
    priceEstimate: 'Tailored quote — contact us for current rates',
  },
  {
    role: 'Bartenders',
    description: 'Cocktail creation, bar management, drinks service',
    training: 'Mixology, speed, presentation, guest engagement',
    bestFor: 'Dinners, cocktail hours, events',
    priceEstimate: 'Tailored quote — contact us for current rates',
  },
  {
    role: 'Sommeliers',
    description: 'Wine selection, pairings, education, service expertise',
    training: 'Wine knowledge, pairing expertise, service excellence',
    bestFor: 'Fine dining events, wine-focused dinners',
    priceEstimate: 'Tailored quote — contact us for current rates',
  },
  {
    role: 'Butler Service',
    description: 'High-end household management, guest services, discretion',
    training: 'Formal protocols, household management, anticipatory service',
    bestFor: 'Extended stays, private villas, high-end service',
    priceEstimate: 'Tailored quote — contact us for current rates',
  },
  {
    role: 'Live-In Chef',
    description: 'Full-time chef for multi-day stays or meal prep',
    training: 'Culinary expertise, menu planning, dietary management',
    bestFor: 'Extended stays, multiple meals per day',
    priceEstimate: 'Tailored quote — contact us for current rates',
  },
  {
    role: 'Household Assistants',
    description: 'Kitchen support, setup, cleanup, general assistance',
    training: 'Food safety, professional standards, teamwork',
    bestFor: 'Large events, multi-day services',
    priceEstimate: 'Tailored quote — contact us for current rates',
  },
]

const STAFFING_PROCESS = [
  {
    step: 'Tell Us Your Needs',
    description: 'Event type, date, guest count, and specific service roles needed. Any special requirements or preferences?',
  },
  {
    step: 'We Propose Team',
    description: 'We match trained professionals to your event. You review profiles and approve the team.',
  },
  {
    step: 'Confirm & Schedule',
    description: 'Lock the dates and deposit. We handle all scheduling, coordination, and professional standards.',
  },
  {
    step: 'Pre-Event Briefing',
    description: 'The team visits your villa, reviews the space, confirms timing, and aligns on expectations.',
  },
  {
    step: 'Service Execution',
    description: 'Professional, discreet, and polished service tailored to your event and guests.',
  },
]

const STAFF_STANDARDS = [
  { standard: 'Background-checked and vetted', checked: true },
  { standard: 'Food-safety certified', checked: true },
  { standard: 'Professional appearance and dress code', checked: true },
  { standard: 'Fluent English communication', checked: true },
  { standard: 'Trained in guest interaction', checked: true },
  { standard: 'Discreet and professional demeanor', checked: true },
  { standard: 'Experienced in villa and event service', checked: true },
]

const FAQS = [
  {
    q: 'Can I hire service staff without a chef?',
    a: 'Absolutely. You can book waiters, bartenders, or household assistants separately. Many guests hire external catering and use our service team.',
  },
  {
    q: 'Do service staff wear uniforms?',
    a: 'Yes. We provide smart uniforms suited to your event style. Formal attire, business casual, or branded uniforms can be arranged.',
  },
  {
    q: 'What language do staff speak?',
    a: 'All staff are fluent in English. Many also speak additional languages. Let us know if you need specific language support.',
  },
  {
    q: 'Can I request the same staff for multiple events?',
    a: 'Yes. If you book repeat services during your stay, we\'ll try to send the same team for consistency and familiarity.',
  },
  {
    q: 'What if I\'m not happy with the service team?',
    a: 'Let us know immediately. We can adjust the team for future services. Your satisfaction is paramount.',
  },
  {
    q: 'How is payment handled?',
    a: 'Staff costs are invoiced separately from chef services. 50% deposit upfront, balance due within 48 hours of service.',
  },
]

export default function StaffingGuidePage() {
  const canonical = `${SITE}/help/staffing-guide`

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Villa Staffing Guide Bali | Waiters, Butlers & More — myCHEF"
        description="Find the right villa staff in Bali for dinners, parties & extended stays. Waiters, bartenders, butlers & household staff explained clearly."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Staffing Guide', canonical, 'Help', `${SITE}/help`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/help" className="text-[#C5A028] flex items-center gap-2 mb-6 hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
            ← Back to Help
          </Link>
          <h1 className="text-5xl font-light mb-6">In-Villa Staffing & Service</h1>
          <p className="text-xl text-white/70">Professional waiters, bartenders, chefs, and household staff for your villa events and extended stays.</p>
        </div>
      </section>

      {/* Staffing Roles */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12">Available Roles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {STAFFING_ROLES.map((role, i) => (
            <div key={i} className="p-8 border border-[#DDD] rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{role.role}</h3>
              <p className="text-[#666] mb-4">{role.description}</p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-[#999] font-semibold">Training</p>
                  <p className="text-[#666]">{role.training}</p>
                </div>
                <div>
                  <p className="text-[#999] font-semibold">Best for</p>
                  <p className="text-[#666]">{role.bestFor}</p>
                </div>
                <div className="pt-2 border-t border-[#EEE]">
                  <p className="text-[#C5A028] font-semibold">{role.priceEstimate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Staff Standards */}
      <section className="bg-white border-t border-[#DDD] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Our Staffing Standards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {STAFF_STANDARDS.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#C5A028] flex-shrink-0 mt-0.5" />
                <span className="text-[#666]">{item.standard}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[#666] mt-12 text-sm">
            Every staff member is professionally trained and vetted to ensure excellent service at your villa.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12">How It Works</h2>
        <div className="space-y-6">
          {STAFFING_PROCESS.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#C5A028] text-black font-bold flex items-center justify-center text-lg">
                  {i + 1}
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-semibold mb-1">{item.step}</h3>
                <p className="text-[#666]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="bg-[#FEF9E7] border-y border-[#C5A028]/20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-[#666]">
            <strong>Pricing Note:</strong> All staff costs are separate from chef services. Staff pricing varies based on experience level, event type, and duration. Request a custom quote for your specific needs.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Staffing Questions</h2>
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

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'In-Villa Service', href: '/in-villa-service', desc: 'Waiters, bartenders, butlers & sommelier.' },
              { label: 'Events', href: '/events', desc: 'Weddings, birthdays & corporate events.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
              { label: 'Staffing', href: '/staffing', desc: 'Long-term chef and villa staff placement.' },
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

      {/* CTA */}
      <section className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-light mb-6">Hire professional villa staff</h2>
          <p className="text-white/70 mb-8">Tell us your event, dates, and staffing needs. We'll match you with experienced professionals.</p>
          <a
            href="https://wa.me/6289674072020?text=I%20need%20professional%20staff%20for%20my%20villa%20event..."
            data-source="staffing-guide-cta"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A028] text-black rounded-full font-semibold hover:bg-[#D4B833] transition focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
          >
            Request Staff
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}
