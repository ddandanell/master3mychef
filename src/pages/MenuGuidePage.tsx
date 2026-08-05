import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import Breadcrumb from '@/components/shared/Breadcrumb'

const SITE = 'https://mychef.id'

const MENU_TYPES = [
  {
    name: 'Mediterranean',
    description: 'Italian, Greek, and Moroccan flavors with fresh herbs and olive oil',
    highlights: ['Pasta & risotto', 'Seafood', 'Wood-fired options'],
  },
  {
    name: 'Indonesian',
    description: 'Authentic Balinese and regional Indonesian cuisine',
    highlights: ['Satay & grilled dishes', 'Rendang & curries', 'Rice & noodle dishes'],
  },
  {
    name: 'Pan-Asian Fusion',
    description: 'Thai, Vietnamese, Japanese, and Chinese influences',
    highlights: ['Dim sum', 'Sushi & sashimi', 'Pad thai & noodles'],
  },
  {
    name: 'BBQ & Grilled',
    description: 'Wood-fired grilled meats, seafood, and vegetables',
    highlights: ['Prime cuts', 'Whole fish', 'Charred vegetables'],
  },
  {
    name: 'Fine Dining Tasting',
    description: 'Multi-course progressive menus with wine pairings',
    highlights: ['6-8 course menus', 'Michelin-style plating', 'Wine pairing'],
  },
  {
    name: 'Plant-Based',
    description: 'Creative vegetarian and vegan cuisine',
    highlights: ['Seasonal vegetables', 'Plant-based proteins', 'Innovative sides'],
  },
]

const DIETARY_NEEDS = [
  { need: 'Vegan', supported: true },
  { need: 'Vegetarian', supported: true },
  { need: 'Gluten-Free', supported: true },
  { need: 'Halal', supported: true },
  { need: 'Kosher', supported: true },
  { need: 'Paleo', supported: true },
  { need: 'Keto', supported: true },
  { need: 'Low-Sugar', supported: true },
  { need: 'Allergies (nuts, shellfish, etc.)', supported: true },
  { need: 'Religious restrictions', supported: true },
]

const FAQS = [
  { q: 'Is this guide free?', a: 'Yes — educational content to help you plan. Booking is optional.' },
  { q: 'Can myCHEF deliver what this guide describes?', a: 'Yes — start at <a href="/services">services</a> or <a href="/private-chef-bali">private chef</a>.' },
  { q: 'How do I get prices after reading?', a: 'See <a href="/pricing">pricing</a> or WhatsApp a fixed quote request.' },
  { q: 'Does advice apply across Bali?', a: 'Yes for major villa areas — confirm logistics for remote spots.' },
  { q: 'Allergies covered in real bookings?', a: 'Yes — brief us at enquiry. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide</a>.' },
  { q: 'Daily chef vs one dinner?', a: 'Multi-day stays → private chef day rates; celebration nights → fine dining or catering.' },
  { q: 'How to book after this guide?', a: 'WhatsApp date, guests, area — <a href="/book">book</a>.' },
  { q: 'Related services?', a: 'Browse <a href="/dining-styles">dining styles</a> and <a href="/events">events</a>.' },
  { q: 'Cancellation if I book?', a: 'See <a href="/cancellation">cancellation policy</a>.' },
  { q: 'Who writes the operational standards?', a: 'myCHEF operations and chef leadership in Bali.' },
  { q: 'Can villa managers share this guide?', a: 'Yes — free to share with guests.' },
  { q: 'More FAQs?', a: 'Central hub: <a href="/faq">FAQ</a>.' },
  { q: 'How do I book this with myCHEF in Bali?', a: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { q: 'Where can I see prices?', a: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { q: 'Is service available island-wide?', a: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { q: 'Can you handle dietary requirements?', a: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { q: 'What is included vs extra?', a: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { q: 'Deposit and cancellation?', a: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { q: 'How fast is a proposal?', a: 'Often within 2–24 hours of a complete brief.' },
  { q: 'Can this combine with other services?', a: 'Yes — chef, catering, staff and transport can stack in one plan.' },
]

export default function MenuGuidePage() {
  const canonical = `${SITE}/help/menu-guide`

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Menu Guide Bali | Cuisines & Dietary Options — myCHEF"
        description="Choose the right private chef menu for your Bali villa. Guidance on cuisines, dietary needs, course styles & how to shape a meal for your group."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Menu Guide', canonical, 'Help', `${SITE}/help`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <section className="relative py-24 md:py-36 overflow-hidden flex items-center min-h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-ui-bali-guide-menu.webp"
            alt="Indonesian chef discussing a menu with guests in a private Bali villa — myCHEF"
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
          <Breadcrumb items={[{ label: 'Help', href: '/help' }, { label: 'Menu Guide' }]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF Standards</p>
          <h1 className="text-4xl md:text-7xl font-playfair mb-6">Menu Selection Guide</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Explore cuisine types, dietary customization, and how our chefs craft the perfect menu for your Bali villa experience.
          </p>
        </div>
      </section>

      {/* Menu Types */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12">Cuisine Types We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {MENU_TYPES.map((menu, i) => (
            <div key={i} className="p-8 border border-[#DDD] rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{menu.name}</h3>
              <p className="text-[#666] mb-6">{menu.description}</p>
              <ul className="space-y-2">
                {menu.highlights.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-[#666]">
                    <span className="text-[#C5A028]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Dietary Support */}
      <section className="bg-white border-t border-[#DDD] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Dietary Accommodations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {DIETARY_NEEDS.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#C5A028] flex-shrink-0 mt-0.5" />
                <span className="text-[#666]">{item.need}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[#666] mt-12 text-sm">
            Not listed? Contact us — we'll find a solution for your needs.
          </p>
        </div>
      </section>

      {/* Menu Customization */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12">How to Customize Your Menu</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Start with a Style</h3>
            <p className="text-[#666]">Choose a cuisine type or mix cuisines for a multi-course event.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Tell Us Your Preferences</h3>
            <p className="text-[#666]">Spice level, proteins you love, dietary restrictions, allergies, and any "no-go" ingredients.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Chef Proposes Options</h3>
            <p className="text-[#666]">Our chef sends 2-3 menu options based on your preferences and available seasonal ingredients.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">4. Adjust & Approve</h3>
            <p className="text-[#666]">Request changes, swap courses, or ask for substitutions. Once approved, the menu is locked.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">5. Day-Of Flexibility</h3>
            <p className="text-[#666]">Minor tweaks are possible up to service time (e.g., swap a protein), but major changes after 48 hours may not be feasible.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white border-t border-[#DDD] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Menu Questions</h2>
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
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Fine-dining tasting menus in your villa.' },
              { label: 'Catering', href: '/catering', desc: 'BBQ, buffet, plated & grazing tables.' },
              { label: 'Villa Chef', href: '/private-chef-bali', desc: 'Daily chef for your villa stay.' },
              { label: 'Events', href: '/events', desc: 'Weddings, birthdays & corporate events.' },
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
          <h2 className="text-3xl font-light mb-6">Ready to plan your menu?</h2>
          <p className="text-white/70 mb-8">Message us with your preferences and we'll propose the perfect menu for your event.</p>
          <a
            href="https://wa.me/6289674072020?text=I%20want%20to%20discuss%20menus%20for%20my%20event..."
            data-source="menu-guide-cta"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A028] text-black rounded-full font-semibold hover:bg-[#D4B833] transition focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
          >
            Start Menu Discussion
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}
