import { Link } from 'react-router-dom'
import { MessageSquare, AlertCircle, CheckCircle, Phone, FileText } from 'lucide-react'
import SeoHead, { breadcrumbSchema } from '@/components/SeoHead'

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
  {
    q: 'Can I change the menu after I\'ve booked?',
    a: 'Yes. You can request menu changes up to 48 hours before the service. The chef will work with you to swap dishes, adjust spice levels, or substitute proteins. Last-minute changes (within 24 hours) may incur small ingredient overages.',
  },
  {
    q: 'What if the guest count changes?',
    a: 'Notify us as soon as possible. If guest count increases or decreases by more than 10%, we can adjust team size and ingredient quantities. Changes within 48 hours may incur small adjustments to your invoice.',
  },
  {
    q: 'Can I request different dietary options for different guests?',
    a: 'Absolutely. We accommodate mixed dietary tables regularly—vegan, gluten-free, halal, paleo, allergies, and more. Just provide a detailed breakdown (e.g., "4 vegan, 2 gluten-free, 8 standard") at least 1 week before the event.',
  },
  {
    q: 'What if there\'s a problem during the service?',
    a: 'The chef team handles most situations on the spot—if a dish isn\'t right, they offer alternatives immediately. We also call beforehand to confirm final details and check in after service to ensure you were happy.',
  },
  {
    q: 'Can I adjust the timing of courses on the day?',
    a: 'Yes, but communicate early. If you want a longer break between courses or faster pacing, let the chef know once they arrive. They\'re flexible and will adapt to your flow.',
  },
  {
    q: 'What if someone has a severe allergy I just learned about?',
    a: 'Call or WhatsApp immediately. If the allergy is to something already planned, we can substitute ingredients or modify the menu. The chef takes allergies very seriously and will work around them.',
  },
  {
    q: 'Do I need to provide plates, glasses, and cutlery?',
    a: 'We can provide linens, glassware, and basic service items, or you can use your villa\'s own. We typically include these in the quote. If you\'d prefer your own tableware, let us know when you book.',
  },
  {
    q: 'What if my villa kitchen is very small?',
    a: 'We work with kitchens of all sizes. We\'ll bring portable equipment, use your outdoor areas if needed, and set up efficiently. Just let us know the kitchen layout in advance so we can plan.',
  },
]

export default function ManagingBookingPage() {
  const canonical = `${SITE}/help/managing-booking`

  return (
    <main className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Manage Your Chef Booking Bali | After You Confirm — myCHEF"
        description="Everything that happens after booking your myCHEF private chef in Bali: menu sign-off, villa setup, chef arrival, changes & day-of coordination."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Managing Your Booking', canonical, 'Help', `${SITE}/help`),
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
              { label: 'FAQ', href: '/faq', desc: 'Common questions about booking and service.' },
              { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all services.' },
              { label: 'Cancellation Policy', href: '/cancellation-policy', desc: 'Refund and change terms.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus.' },
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
            href="https://wa.me/628113803488?text=Hi%20myCHEF%2C%20I%20have%20a%20question%20about%20my%20booking..."
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A028] text-black rounded-full font-semibold hover:bg-[#D4B833] transition focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
          >
            Message on WhatsApp
            <MessageSquare size={20} />
          </a>
        </div>
      </section>
    </main>
  )
}
