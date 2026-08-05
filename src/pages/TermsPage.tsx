import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Mail, MapPin, CreditCard, Calendar, AlertCircle, CheckCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import SectionHeader from '@/components/catering/SectionHeader'
import { siteFacts } from '@/data/siteFacts'

const PAYMENT_RULES = [
  {
    icon: CreditCard,
    title: `Deposit: ${siteFacts.depositPercent}% to Confirm`,
    desc: `A ${siteFacts.depositPercent}% deposit of the total amount is required to confirm and secure your booking. This locks your date and chef.`,
  },
  {
    icon: CheckCircle,
    title: 'Full Payment on Arrival',
    desc: `The remaining balance is paid in full ${siteFacts.balanceTiming}. No surprises.`,
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

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505', color: '#F5F3EF' }}>
      <SeoHead
        title="Terms of Service | myCHEF.id"
        description="myCHEF.id terms of service: payment terms, deposits, booking rules & service conditions for private chef & catering bookings in Bali."
        ogImage="/og-image.webp"
        canonical="https://mychef.id/terms"
        jsonLd={[
          breadcrumbSchema('Terms & Payment', 'https://mychef.id/terms'),
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
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{"Terms of Service"}</h1>
          <p className="text-white/[60%] text-sm">Effective: June 2026 &nbsp;|&nbsp; Last updated: June 2026 &nbsp;|&nbsp; Company: MyChef &nbsp;|&nbsp; NPWP: 1000000005064323</p>
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
                    <span className="text-[#C5A028] text-sm font-bold">{siteFacts.depositPercent}%</span>
                  </div>
                  <div>
                    <p className="text-white/[80%] font-medium mb-1">Deposit to Confirm</p>
                    <p className="text-white/[50%]">Paid at booking to lock your date and chef.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white/[60%] text-sm font-bold">{100 - siteFacts.depositPercent}%</span>
                  </div>
                  <div>
                    <p className="text-white/[80%] font-medium mb-1">Balance on Arrival</p>
                    <p className="text-white/[50%]">The remaining balance is paid {siteFacts.balanceTiming}.</p>
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

            {/* 7. Guest Responsibilities, Kitchen & Safety */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>7. Guest Responsibilities, Kitchen &amp; Safety</h2>
              <div className="text-white/[60%] text-sm leading-relaxed space-y-3">
                <p>You confirm you are authorised to host the event at the stated location and that the venue or owner permits catered service.</p>
                <p>You will provide reasonable, safe access to a functional kitchen or cooking space, clean water, power, and adequate workspace at the agreed time.</p>
                <p>The final guest count must be confirmed in advance; service and pricing are based on the confirmed count.</p>
                <p>You are responsible for the conduct of your guests and for any damage to MyChef or chef equipment caused by you or your guests.</p>
              </div>
            </div>

            {/* 8. Allergies, Dietary Requirements & Food Safety */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>8. Allergies, Dietary Requirements &amp; Food Safety</h2>
              <div className="text-white/[60%] text-sm leading-relaxed space-y-3">
                <p>You must disclose <strong className="text-white/[80%]">all allergies, intolerances, and dietary restrictions in writing before the event</strong>. We will take reasonable care to accommodate disclosed requirements.</p>
                <p>Our food is prepared in environments that may handle nuts, shellfish, dairy, gluten, eggs, soy, and other allergens, and we cannot guarantee a fully allergen-free preparation. Guests with severe allergies accept this risk.</p>
                <p>MyChef is not liable for reactions arising from allergies or restrictions that were not disclosed in writing, or from food stored or reheated after service outside our control.</p>
              </div>
            </div>

            {/* 9. Liability */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>9. Liability</h2>
              <div className="text-white/[60%] text-sm leading-relaxed space-y-3">
                <p>MyChef is not liable for indirect, incidental, or consequential damages arising from the services.</p>
                <p>Except where liability cannot be limited under Indonesian law, MyChef&rsquo;s total liability for any claim is limited to the amount paid for the specific booking in question. Nothing in these terms excludes liability that cannot lawfully be excluded.</p>
              </div>
            </div>

            {/* 10. Force Majeure */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>10. Force Majeure</h2>
              <div className="text-white/[60%] text-sm leading-relaxed space-y-3">
                <p>Neither party is liable for failure or delay caused by events beyond reasonable control &mdash; including natural disaster, severe weather, fire, flood, power or water failure, illness, government action, or civil disruption.</p>
                <p>Where such an event prevents service, the parties will work in good faith to reschedule. If rescheduling is not possible, refunds are handled fairly, with deduction only for unrecoverable costs already incurred (for example, perishable groceries already purchased).</p>
              </div>
            </div>

            {/* 11. Legal */}
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>11. Legal Terms</h2>
              <div className="text-white/[60%] text-sm leading-relaxed space-y-3">
                <p>These terms are governed by the laws of the Republic of Indonesia. We encourage you to contact us directly to resolve any issue first. Disputes that cannot be resolved amicably are subject to the competent courts of Denpasar, Bali, unless otherwise required by applicable consumer-protection law. A Bahasa Indonesia version is available upon request, and both versions are equal in meaning.</p>
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
              <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>12. Contact</h2>
              <div className="text-white/[60%] text-sm leading-relaxed mb-8">
                <p className="mb-4">All confirmations, payments, or booking changes must be sent directly to:</p>
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#C5A028]" />
                    <div>
                      <p className="text-white/[80%] text-sm">WhatsApp</p>
                      <p className="text-white/[50%] text-sm">+62 896-7407-2020</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#C5A028]" />
                    <div>
                      <p className="text-white/[80%] text-sm">Email</p>
                      <p className="text-white/[50%] text-sm">bali@mychef.id</p>
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
          <FAQAccordion items={FAQS} defaultOpenCount={3} showToc ctaEvery={5} />
        </div>
      </section>
    </div>
  )
}
