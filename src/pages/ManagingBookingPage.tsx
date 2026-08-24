import { Link } from 'react-router-dom'
import { MessageSquare, AlertCircle, CheckCircle, Phone, FileText } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'

const SITE = 'https://mychef.id'

const COMMUNICATION_CHANNELS = [
  {
    channel: 'WhatsApp',
    description: 'Real-time messages, photos, and quick updates',
    bestFor: 'Day-of changes, photos, quick questions',
    response: 'Within 15 minutes',
    icon: MessageSquare,
  },
  {
    channel: 'Email',
    description: 'Detailed briefs, contracts, and formal requests',
    bestFor: 'Contract clauses, detailed specifications, records',
    response: 'Within 2 hours',
    icon: FileText,
  },
  {
    channel: 'Phone/Call',
    description: 'Direct conversation for complex planning',
    bestFor: 'Complex changes, emergencies, detailed planning',
    response: 'Available during business hours',
    icon: Phone,
  },
]

const PREPARATION_STEPS = [
  {
    step: 'Confirm Kitchen Access',
    description: 'Ensure the chef can access your villa kitchen. Provide codes, keys, or arrange for staff to be present 15 minutes before arrival.',
    details: [
      'Gate access codes (if applicable)',
      'Kitchen key or door access',
      'Parking arrangements',
      'Where to park equipment/vehicles',
    ],
  },
  {
    step: 'Check Kitchen Equipment',
    description: 'Confirm your villa has essential appliances. Our team brings what\'s missing, but it helps to know in advance.',
    details: [
      'Working oven and stovetop',
      'Refrigerator and freezer space',
      'Large pots, pans, and utensils',
      'Cutting boards and knives',
      'Serving dishes and platters',
    ],
  },
  {
    step: 'Arrange Guest Space',
    description: 'Prepare the dining area, ensure chairs/tables are in place, and coordinate with staff.',
    details: [
      'Table setup and layout',
      'Seating for all guests + chefs',
      'Lighting (outdoor events especially)',
      'Ambient music or audio setup',
      'Storage for guest belongings (bags, shoes)',
    ],
  },
  {
    step: 'Finalize Guest Details',
    description: 'Confirm exact guest count, dietary restrictions, and any new additions or cancellations.',
    details: [
      'Final headcount (at least 48 hours before)',
      'Any last-minute dietary changes',
      'Guest arrivals/timing (if multi-course)',
      'Allergies or food intolerances',
      'Celebration details (birthdays, anniversaries, etc.)',
    ],
  },
  {
    step: 'Plan Logistics',
    description: 'Coordinate arrival time, parking, access, and any special requests.',
    details: [
      'Team arrival time (usually 3-4 hours before service)',
      'Where chefs can park',
      'Gate codes and security procedures',
      'Staff liaison or contact person',
      'Emergency contact number',
    ],
  },
]

const FAQS = [
  { q: 'How do I book this with myCHEF in Bali?', a: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { q: 'Where can I see prices?', a: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { q: 'Is service available island-wide?', a: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { q: 'Can you handle dietary requirements?', a: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { q: 'What is included vs extra?', a: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { q: 'Deposit and cancellation?', a: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { q: 'How fast is a proposal?', a: 'Often within 2–24 hours of a complete brief.' },
  { q: 'Can this combine with other services?', a: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
  { q: 'Do you clean up?', a: 'Yes on serviced formats.' },
  { q: 'Kids welcome?', a: 'Yes with adapted menus when needed. <a href="/kids-menus">Kids menus</a>.' },
  { q: 'Who is myCHEF?', a: 'Bali villa hospitality company — chefs, catering, events and staffing. <a href="/chefs">About</a> · <a href="/why-mychef">Why myCHEF</a>.' },
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

export default function ManagingBookingPage() {
  const canonical = `${SITE}/help/managing-booking`

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Manage Your Chef Booking Bali | After You Confirm — myCHEF"
        description="Everything that happens after booking your myCHEF private chef in Bali: menu sign-off, villa setup, chef arrival, changes & day-of coordination."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Managing Your Booking', canonical, 'Help', `${SITE}/help`),
          faqPageSchema(FAQS.map(({ q, a }) => ({ question: q, answer: a }))),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <Link to="/help" className="text-[#C5A028] flex items-center gap-2 mb-6 hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              ← Back to Help
            </Link>
            <h1 className="text-5xl font-light mb-6">Managing Your Booking</h1>
            <p className="text-xl text-white/70">Everything you need to know after you book—from communication to villa prep to day-of coordination.</p>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <img
              src="/generated/mychef-misc-bali-contact-concierge.webp"
              alt="myCHEF concierge coordinating a booking for a Bali villa"
              width={1200}
              height={1044}
              className="h-full min-h-[280px] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Communication Channels */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12">How to Stay in Touch</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {COMMUNICATION_CHANNELS.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="p-8 border border-[#DDD] rounded-lg hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <Icon size={28} className="text-[#C5A028]" />
                  <span className="text-xs font-semibold text-[#999] uppercase">{item.response}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.channel}</h3>
                <p className="text-[#666] mb-4">{item.description}</p>
                <div className="pt-4 border-t border-[#EEE]">
                  <p className="text-sm text-[#999] font-semibold">Best for</p>
                  <p className="text-[#666]">{item.bestFor}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Preparation Checklist */}
      <section className="bg-white border-t border-[#DDD] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Preparing Your Villa</h2>
          <div className="space-y-8">
            {PREPARATION_STEPS.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#C5A028] text-black font-bold flex items-center justify-center text-lg">
                    {i + 1}
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold mb-3">{item.step}</h3>
                  <p className="text-[#666] mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#666]">
                        <CheckCircle size={18} className="text-[#C5A028] flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-[#FEF9E7] border-y border-[#C5A028]/20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-4">
            <AlertCircle size={24} className="text-[#C5A028] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Important Reminders</h3>
              <ul className="space-y-2 text-[#666]">
                <li>• Always confirm the final guest count at least 48 hours before service</li>
                <li>• Notify us immediately of any dietary restrictions or allergies</li>
                <li>• Ensure kitchen access is available at least 15 minutes before the chef arrives</li>
                <li>• Keep emergency contact details with you during the service</li>
                <li>• Last-minute changes (within 24 hours) may incur additional costs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Booking Management Questions</h2>
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'FAQ', href: '/faq', desc: 'Common questions about booking and service.' },
              { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all services.' },
              { label: 'Cancellation Policy', href: '/cancellation', desc: 'Refund and change terms.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Fine-dining tasting menus.' },
              { label: 'Catering', href: '/catering', desc: 'BBQ, buffet, plated & grazing.' },
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
          <h2 className="text-3xl font-light mb-6">Questions about your booking?</h2>
          <p className="text-white/70 mb-8">Message us on WhatsApp with any questions or changes needed. We respond within 15 minutes.</p>
          <a
            href="https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%20have%20a%20question%20about%20my%20booking..."
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A028] text-black rounded-full font-semibold hover:bg-[#D4B833] transition focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
          >
            Message on WhatsApp
            <MessageSquare size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}
