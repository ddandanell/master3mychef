import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Shield, AlertTriangle, CheckCircle2, XCircle, Clock, Calendar, Utensils } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import SectionHeader from '@/components/catering/SectionHeader'

const CLIENT_POLICY = [
  {
    icon: CheckCircle2,
    title: '14+ Days Before',
    refund: '100%',
    desc: 'Full refund of all payments made. No questions asked.',
    color: '#C5A028',
  },
  {
    icon: Clock,
    title: '7–13 Days Before',
    refund: '50%',
    desc: 'Half of the total amount refunded. Ingredients may already be ordered.',
    color: '#8B7355',
  },
  {
    icon: XCircle,
    title: 'Less Than 7 Days',
    refund: '0%',
    desc: 'No refund. By this point, all ingredients are purchased and the chef has blocked their calendar.',
    color: '#8B0000',
  },
]

const CHEF_POLICY = [
  {
    icon: Shield,
    title: 'MyChef Cancels',
    desc: 'If MyChef or the assigned chef cancels or fails to deliver the service, you receive a full refund of all payments made.',
  },
  {
    icon: AlertTriangle,
    title: 'Service Interrupted',
    desc: 'If service begins but cannot be completed for reasons caused by MyChef or the chef, a fair refund will be issued based on time worked and service delivered.',
  },
]

const FAQS = [
  { q: 'What is the myCHEF cancellation policy?', a: 'Cancellations made 14 or more days before the event receive a full refund. Cancellations between 7–13 days before receive a 50% refund. Cancellations less than 7 days before are non-refundable.' },
  { q: 'Can I get a full refund if I cancel my booking?', a: 'Yes — if you cancel 14 or more days before your scheduled booking, you receive a 100% full refund of all payments made, no questions asked.' },
  { q: 'What happens if I cancel 7 to 13 days before?', a: 'You receive a 50% refund of the total amount. By this window ingredients may already be ordered and chef time blocked.' },
  { q: 'What if I cancel less than 7 days before?', a: 'No refund. Ingredients are purchased and the chef calendar is locked.' },
  { q: 'Is the deposit refundable?', a: 'The deposit follows the same tiers: 100% refundable at 14+ days, 50% at 7–13 days, and non-refundable under 7 days.' },
  { q: 'What if there is an emergency and I need to cancel?', a: 'Contact WhatsApp immediately. Policy is firm due to perishable ingredients and scheduling; emergencies are reviewed case-by-case.' },
  { q: 'How do I cancel a booking?', a: 'Message WhatsApp or email bali@mychef.id with your booking reference and date. Written confirmation closes the loop.' },
  { q: 'Does the policy apply to weddings and large events?', a: 'Standard tiers apply unless a custom event contract states otherwise — always check your proposal.' },
  { q: 'What about date changes instead of cancellation?', a: 'Date changes are treated as a modification when capacity allows; if not possible, cancellation tiers apply. We re-confirm in writing.' },
  { q: 'Do weather issues get special treatment?', a: 'Outdoor plans include rain backups for service. Full cancellations still follow the published tiers unless we cannot deliver an agreed plan B.' },
  { q: 'What if myCHEF cancels?', a: 'If we cannot fulfil, you receive a full refund or free reschedule — guest protection is covered under our service guarantee. <a href="/why-mychef">Why myCHEF →</a>' },
  { q: 'Does ++ tax get refunded too?', a: 'Refunds apply to amounts paid, including tax/service portions already collected, per the tier.' },
  { q: 'Can I cancel only part of a multi-day chef booking?', a: 'Partial day reductions are re-quoted; cancelled days follow the same time-based tiers from each service date.' },
  { q: 'How does this work with weekly or monthly chef hire?', a: 'Same tiers relative to each confirmed service block unless your written agreement says otherwise.' },
  { q: 'Where is the policy published?', a: 'This page is the source of truth, mirrored in <a href="/faq">FAQ</a> and quotes.' },
  { q: 'What if guest count drops close to the event?', a: 'Headcount reductions near the date may not fully reduce the total if food is already purchased — we confirm adjustments in writing.' },
  { q: 'Are force majeure events covered?', a: 'Genuine force majeure is reviewed case-by-case; document the situation ASAP on WhatsApp.' },
  { q: 'How fast are refunds paid?', a: 'Approved refunds are processed after written confirmation; bank timing varies by method.' },
  { q: 'Can I buy cancellation insurance?', a: 'We do not sell insurance; some travel insurers cover private dining — check your policy.' },
  { q: 'Who do I contact about a refund status?', a: 'WhatsApp +62 896-7407-2020 or bali@mychef.id with your booking details.' },
]

const DEDUCTIONS = [
  'Pre-purchased groceries or special items: If ingredients have already been purchased, those costs (with receipts) may be deducted from any refund.',
  'Payment processing or bank fees: Non-refundable if already incurred.',
  'If the final payment is not received by the deadline, the booking may be treated as a client cancellation.',
]

export default function CancellationPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505', color: '#F5F3EF' }}>
      <SeoHead
        title="Cancellation Policy | myCHEF.id"
        description="myCHEF.id cancellation policy: refund timelines & rules for private chef, catering & event bookings. Full refund available 14+ days before your date."
        ogImage="/og-image.webp"
        canonical="https://mychef.id/cancellation"
        jsonLd={[
          breadcrumbSchema('Cancellation Policy', 'https://mychef.id/cancellation'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-[#C5A028] text-sm tracking-wider uppercase mb-8 hover:text-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Legal</p>
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Cancellation Policy</h1>
          <p className="text-white/[40%] text-sm">Clear rules. No surprises. We respect your time — and ours.</p>
        </div>
      </section>

      {/* Client Cancellation Tiers */}
      <section className="pb-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-xl md:text-2xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Client Cancellations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {CLIENT_POLICY.map((tier) => (
              <div
                key={tier.title}
                className="p-6 rounded-2xl border text-center transition-all duration-500 hover:border-opacity-50"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: tier.color === '#C5A028' ? 'rgba(212,175,55,0.2)' : tier.color === '#8B7355' ? 'rgba(255,255,255,0.1)' : 'rgba(139,0,0,0.2)',
                }}
              >
                <tier.icon className="w-8 h-8 mx-auto mb-4" style={{ color: tier.color }} strokeWidth={1.5} />
                <p className="text-xs text-white/[40%] uppercase tracking-wider mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{tier.title}</p>
                <p className="text-4xl font-light mb-3" style={{ fontFamily: "'Playfair Display', serif", color: tier.color }}>{tier.refund}</p>
                <p className="text-xs text-white/[40%] leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>

          {/* Additional Deductions */}
          <div className="p-6 rounded-2xl border border-white/10 mb-12" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h3 className="text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Additional Deductions</h3>
            <ul className="space-y-3">
              {DEDUCTIONS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/[50%]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A028]/40 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Chef / MyChef Cancellations */}
          <h2 className="text-xl md:text-2xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>MyChef Cancellations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {CHEF_POLICY.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <item.icon className="w-6 h-6 text-[#C5A028] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-white/[50%] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Changes to Bookings */}
          <div className="border-t border-white/10 pt-12">
            <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Changes to Bookings</h2>
            <div className="text-white/[60%] text-sm leading-relaxed space-y-4">
              <p>All change requests must be made directly to MyChef, and <strong className="text-white/[80%]">no later than 72 hours</strong> before the shift or booking starts.</p>
              <div className="space-y-3 ml-2">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                  <p><strong className="text-white/[80%]">Date, time, or location changes:</strong> Must be requested at least 72 hours in advance. Later changes cannot be guaranteed and may be treated as a cancellation.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Utensils className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                  <p><strong className="text-white/[80%]">Menu changes:</strong> Must be requested at least 72 hours before the booking. All changes are subject to chef availability and must be confirmed in writing by MyChef.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 p-8 rounded-2xl border border-white/10 text-center">
            <p className="text-[#C5A028] text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Need to Cancel or Change?</p>
            <p className="text-white/[60%] text-sm mb-6">Contact us directly. We will handle your request within 24 hours.</p>
            <a href="https://wa.me/6289674072020" target="_blank" rel="noopener noreferrer" data-source="cancellation-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> WhatsApp +62 896-7407-2020
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Cancellation FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all services.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Fine-dining tasting menus.' },
              { label: 'Catering', href: '/catering', desc: 'BBQ, buffet, plated & grazing.' },
              { label: 'Events', href: '/events', desc: 'Weddings, birthdays & corporate.' },
              { label: 'FAQ', href: '/faq', desc: 'Common questions answered.' },
              { label: 'Get a Quote', href: '/quote', desc: 'Detailed proposal within 24 hours.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-[#FAFAF8] border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
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

