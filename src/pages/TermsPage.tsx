import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Mail, MapPin, CreditCard, Calendar, AlertCircle, CheckCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, aggregateRatingSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import SectionHeader from '@/components/catering/SectionHeader'

const PAYMENT_RULES = [
  {
    icon: CreditCard,
    title: 'Deposit: 50% to Confirm',
    desc: 'A 50% deposit of the total amount is required to confirm and secure your booking. This locks your date and chef.',
  },
  {
    icon: CheckCircle,
    title: 'Full Payment on Arrival',
    desc: 'The remaining balance is paid in full when the chef arrives at your villa, before service begins. No surprises.',
  },
  {
    icon: Calendar,
    title: 'Bookings Within 24 Hours',
    desc: '100% of the total must be paid upfront for bookings within 24 hours. Proof of payment required before we lock the chef.',
  },
  {
    icon: AlertCircle,
    title: 'Payment Deadline',
    desc: 'You have 7 calendar days to pay the deposit. If payment is not received, we reserve the right to cancel or reassign.',
  },
]

const CANCELLATION_TIERS = [
  { days: '14+ days before', refund: '100%', note: 'Full refund of all payments made' },
  { days: '7–13 days before', refund: '50%', note: 'Half of total amount refunded' },
  { days: 'Less than 7 days', refund: '0%', note: 'No refund — ingredients pre-ordered' },
]

const FAQS = [
  {
    q: 'What are myCHEF terms of service?',
    a: 'Our terms cover booking deposits, payment schedules, cancellation and refund policies, changes to bookings, and legal terms governed by Indonesian law. A 50% deposit is required to confirm your booking, with the balance paid on arrival. Bookings within 24 hours require 100% payment upfront.',
  },
  {
    q: 'What happens if I break the terms?',
    a: 'If payment is not received within the stated timeframe, MyChef reserves the right to cancel or reassign the chef without further notice. Late changes to bookings may be treated as cancellations and are subject to our refund policy.',
  },
  {
    q: 'Can I use myCHEF content for commercial purposes?',
    a: 'All content on the myCHEF website, including images, text, and branding, is the property of MyChef and may not be used for commercial purposes without prior written consent.',
  },
  {
    q: 'How are disputes resolved?',
    a: 'Any disputes arising from our services are governed by Indonesian law. We encourage customers to contact us directly to resolve any issues before pursuing formal dispute resolution.',
  },
  {
    q: 'Does myCHEF have liability limits?',
    a: 'MyChef is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the total amount paid for the specific booking in question.',
  },
  {
    q: 'Can the terms change without notice?',
    a: 'We may update our terms from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. The terms in effect at the time of your booking will apply to that booking.',
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505', color: '#F5F3EF' }}>
      <SeoHead
        title="Terms of Service | myCHEF.id"
        description="myCHEF.id terms of service: payment terms, deposits, booking rules & service conditions for private chef & catering bookings in Bali."
        ogImage="/og-image.webp"
        canonical="https://mychef.id/terms-of-service"
        jsonLd={[
          breadcrumbSchema('Terms & Payment', 'https://mychef.id/terms-of-service'),
          aggregateRatingSchema(4.9, 560),
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
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Payment & Booking Terms</h1>
          <p className="text-white/[60%] text-sm">Effective: January 2025 &nbsp;|&nbsp; Company: MyChef &nbsp;|&nbsp; NPWP: 1000000005064323</p>
        </div>
      </section>

      {/* Payment Rules Summary */}
      <section className="pb-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {PAYMENT_RULES.map((rule) => (
              <div key={rule.title} className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <rule.icon className="w-6 h-6 text-[#C5A028] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{rule.title}</h3>
                <p className="text-white/[50%] text-sm leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>

          {/* Detailed Terms */}
          <div className="space-y-12">
            {/* 1. Bookings and Deposits */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>1. Bookings and Deposits</h2>
              <div className="text-white/[60%] text-sm leading-relaxed space-y-4">
                <p>When you receive an offer from MyChef, the following rules apply:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>You have <strong className="text-white/[80%]">7 calendar days</strong> to pay the deposit in order to confirm and secure your booking.</li>
                  <li>If your booking is within <strong className="text-white/[80%]">24 hours</strong>, 100% of the total must be paid upfront, and proof of payment must be sent to us before we lock the chef to your booking.</li>
                  <li>If payment is not received within the stated time, MyChef reserves the right to cancel or reassign the chef without further notice.</li>
                </ul>
              </div>
            </div>

            {/* 2. Payment Schedule */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>2. Payment Schedule</h2>
              <div className="text-white/[60%] text-sm leading-relaxed space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-[#C5A028]/20" style={{ background: 'rgba(212,175,55,0.05)' }}>
                  <div className="w-10 h-10 rounded-full bg-[#C5A028]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C5A028] text-sm font-bold">50%</span>
                  </div>
                  <div>
                    <p className="text-white/[80%] font-medium mb-1">Deposit to Confirm</p>
                    <p className="text-white/[50%]">Paid at booking to lock your date and chef.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white/[60%] text-sm font-bold">50%</span>
                  </div>
                  <div>
                    <p className="text-white/[80%] font-medium mb-1">Balance on Arrival</p>
                    <p className="text-white/[50%]">The remaining balance is paid when the chef arrives at your villa, before service begins.</p>
                  </div>
                </div>
                <p className="text-white/[60%] text-xs italic mt-4">Payment is considered valid only once MyChef confirms receipt.</p>
              </div>
            </div>

            {/* 3. Payment Methods */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>3. Payment Methods</h2>
              <div className="text-white/[60%] text-sm leading-relaxed">
                <p className="mb-4">Payments can be made through:</p>
                <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
                  <li>Online payment link (sent directly by MyChef)</li>
                  <li>Bank transfer</li>
                  <li>Credit/Debit cards (Visa, MasterCard, and all major cards)</li>
                </ul>
                <p className="text-white/[60%] italic">Proof of payment (transfer slip or screenshot) must be sent directly to our WhatsApp or email contact.</p>
              </div>
            </div>

            {/* 4. Changes to Bookings */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>4. Changes to Bookings</h2>
              <div className="text-white/[60%] text-sm leading-relaxed space-y-4">
                <p>All change requests must be made directly to MyChef, and <strong className="text-white/[80%]">no later than 72 hours</strong> before the shift or booking starts.</p>
                <div className="space-y-3 ml-2">
                  <p><strong className="text-white/[80%]">Changing date, time, or location:</strong> Must be requested at least 72 hours in advance. Later changes cannot be guaranteed and may be treated as a cancellation.</p>
                  <p><strong className="text-white/[80%]">Changing the menu:</strong> If MyChef is creating the menu for you, changes must be requested at least 72 hours in advance. If you already agreed on a specific menu with the chef, any changes must be requested at least 72 hours before the booking.</p>
                </div>
                <p className="text-white/[60%] italic">All changes are subject to chef availability and must be confirmed in writing by MyChef.</p>
              </div>
            </div>

            {/* 5. Cancellations and Refunds */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>5. Cancellations and Refunds</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {CANCELLATION_TIERS.map((tier) => (
                  <div key={tier.days} className={`p-6 rounded-2xl border text-center ${tier.refund === '100%' ? 'border-[#C5A028]/30' : tier.refund === '50%' ? 'border-white/10' : 'border-red-900/30'}`} style={{ background: tier.refund === '100%' ? 'rgba(212,175,55,0.05)' : 'rgba(255,255,255,0.02)' }}>
                    <p className="text-xs text-white/[60%] uppercase tracking-wider mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{tier.days}</p>
                    <p className={`text-3xl font-light mb-2 ${tier.refund === '100%' ? 'text-[#C5A028]' : tier.refund === '50%' ? 'text-white/[60%]' : 'text-red-400/60'}`} style={{ fontFamily: "'Playfair Display', serif" }}>{tier.refund}</p>
                    <p className="text-xs text-white/[60%]">{tier.note}</p>
                  </div>
                ))}
              </div>
              <div className="text-white/[60%] text-sm leading-relaxed space-y-3">
                <p><strong className="text-white/[80%]">Additional Deductions:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Pre-purchased groceries or special items: If ingredients have already been purchased, those costs (with receipts) may be deducted from any refund.</li>
                  <li>Payment processing or bank fees: Non-refundable if already incurred.</li>
                </ul>
                <p className="text-white/[60%] italic mt-4">If MyChef or the assigned chef cancels, you receive a full refund of all payments made.</p>
              </div>
            </div>

            {/* 6. Pricing */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>6. Pricing</h2>
              <div className="text-white/[60%] text-sm leading-relaxed space-y-3">
                <p>All prices are stated in your offer and include everything listed in the service description (chef service hours, preparation, cooking, and cleaning).</p>
                <p>Groceries, rentals, or special requests are only included if clearly stated in writing.</p>
                <p>All prices are final and include applicable Indonesian taxes.</p>
              </div>
            </div>

            {/* 7. Legal */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>7. Legal Terms</h2>
              <div className="text-white/[60%] text-sm leading-relaxed space-y-3">
                <p>These terms are governed by Indonesian law. A Bahasa Indonesia version is available upon request, and both versions are equal in meaning.</p>
                <div className="p-4 rounded-xl border border-white/10 mt-4">
                  <p className="text-white/[80%] font-medium mb-1">Company Details</p>
                  <p className="text-white/[50%]">MyChef</p>
                  <p className="text-white/[50%]">NPWP: 1000000005064323</p>
                  <p className="text-white/[50%]">Registered and operating in Indonesia</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>8. Contact</h2>
              <div className="text-white/[60%] text-sm leading-relaxed mb-8">
                <p className="mb-4">All confirmations, payments, or booking changes must be sent directly to:</p>
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#C5A028]" />
                    <div>
                      <p className="text-white/[80%] text-sm">WhatsApp</p>
                      <p className="text-white/[50%] text-sm">+49 163 5080236</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#C5A028]" />
                    <div>
                      <p className="text-white/[80%] text-sm">Email</p>
                      <p className="text-white/[50%] text-sm">indonesia@mychef.id</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#C5A028]" />
                    <div>
                      <p className="text-white/[80%] text-sm">Business Hours</p>
                      <p className="text-white/[50%] text-sm">09:00 – 22:00 WIB (Mon–Sun)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Terms FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={3} />
        </div>
      </section>
    </div>
  )
}
