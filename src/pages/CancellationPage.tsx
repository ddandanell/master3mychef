import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Shield, AlertTriangle, CheckCircle2, XCircle, Clock, Calendar, Utensils } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
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
  { q: 'What is the myCHEF cancellation policy?', a: 'You can cancel your booking at any time. Cancellations made 14 or more days before the event receive a full refund. Cancellations between 7–13 days before receive a 50% refund. Cancellations less than 7 days before are non-refundable.' },
  { q: 'Can I get a full refund if I cancel my booking?', a: 'Yes — if you cancel 14 or more days before your scheduled booking, you receive a 100% full refund of all payments made, no questions asked.' },
  { q: 'What happens if I cancel less than 7 days before?', a: 'Unfortunately, no refund is provided for cancellations made less than 7 days before the event. By this point, all ingredients have been purchased and the chef has blocked their calendar exclusively for your booking.' },
  { q: 'Can I reschedule instead of cancelling?', a: 'Yes, you may request a reschedule instead of a cancellation. All change requests must be submitted directly to MyChef no later than 72 hours before the booking starts. Later requests may be treated as a cancellation.' },
  { q: 'What if myCHEF cancels my booking?', a: 'If MyChef or the assigned chef cancels or fails to deliver the service, you will receive a full refund of all payments made. If service begins but cannot be completed for reasons caused by MyChef, a fair refund will be issued based on time worked.' },
  { q: 'How long does a refund take?', a: 'Once your cancellation is confirmed and approved, refunds are typically processed within 5–10 business days, depending on your bank or payment provider.' },
  { q: 'Is the deposit refundable?', a: 'The deposit follows the same cancellation tiers: 100% refundable if cancelled 14+ days before, 50% refundable within 7–13 days, and non-refundable if cancelled less than 7 days before.' },
  { q: 'What if there is an emergency and I need to cancel?', a: 'We understand emergencies happen. Please contact us directly via WhatsApp as soon as possible. While our policy is firm due to perishable ingredients and chef scheduling, we review emergency requests on a case-by-case basis.' },
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
        title="Cancellation Policy | myCHEF — Private Chef Bali"
        description="Cancellation and refund policy for myCHEF private chef, Bali villa catering, and event bookings — full refund 14+ days before, 50% within 7–13 days."
        canonical="https://mychef.id/cancellation"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema('Cancellation Policy', 'https://mychef.id/cancellation'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-[#C5A028] text-sm tracking-wider uppercase mb-8 hover:text-[#D4B43A] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Legal</p>
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Cancellation Policy</h1>
          <p className="text-white/40 text-sm">Clear rules. No surprises. We respect your time — and ours.</p>
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
                <p className="text-xs text-white/40 uppercase tracking-wider mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{tier.title}</p>
                <p className="text-4xl font-light mb-3" style={{ fontFamily: "'Playfair Display', serif", color: tier.color }}>{tier.refund}</p>
                <p className="text-xs text-white/40 leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>

          {/* Additional Deductions */}
          <div className="p-6 rounded-2xl border border-white/10 mb-12" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h3 className="text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Additional Deductions</h3>
            <ul className="space-y-3">
              {DEDUCTIONS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/50">
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
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Changes to Bookings */}
          <div className="border-t border-white/10 pt-12">
            <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Changes to Bookings</h2>
            <div className="text-white/60 text-sm leading-relaxed space-y-4">
              <p>All change requests must be made directly to MyChef, and <strong className="text-white/80">no later than 72 hours</strong> before the shift or booking starts.</p>
              <div className="space-y-3 ml-2">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                  <p><strong className="text-white/80">Date, time, or location changes:</strong> Must be requested at least 72 hours in advance. Later changes cannot be guaranteed and may be treated as a cancellation.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Utensils className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                  <p><strong className="text-white/80">Menu changes:</strong> Must be requested at least 72 hours before the booking. All changes are subject to chef availability and must be confirmed in writing by MyChef.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 p-8 rounded-2xl border border-white/10 text-center">
            <p className="text-[#C5A028] text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Need to Cancel or Change?</p>
            <p className="text-white/60 text-sm mb-6">Contact us directly. We will handle your request within 24 hours.</p>
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp +62 822-3756-5997
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Cancellation FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>
    </div>
  )
}

