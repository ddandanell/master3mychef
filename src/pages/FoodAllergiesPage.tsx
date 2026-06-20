import { Link } from 'react-router-dom'
import { ChevronRight, MessageCircle, CheckCircle, Shield, AlertTriangle, Leaf } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import { PHONE } from '@/data/siteArchitecture'

const CANONICAL = 'https://mychef.id/blog/food-allergies-dietary-requirements-private-chef-bali'
const WA_MSG = encodeURIComponent('Hi myCHEF! We have dietary requirements and allergies in our group visiting Bali. Can we discuss a custom menu?')
const WA_URL = `https://wa.me/${PHONE}?text=${WA_MSG}`

const localBizWithRating = {
  ...localBusinessSchema,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '560',
    bestRating: '5',
    worstRating: '1',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Food Allergies & Dietary Requirements with a Private Chef in Bali: The Complete Safety Guide',
  description:
    'How myCHEF handles food allergies, intolerances, and special diets — HACCP protocols, cross-contamination controls, and custom menus for vegan, gluten-free, halal, keto, nut-free, and dairy-free guests.',
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
  author: { '@type': 'Organization', name: 'myCHEF Team' },
  publisher: localBizWithRating,
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  url: CANONICAL,
}

const breadcrumbs = breadcrumbSchema(
  'Food Allergies & Dietary Requirements',
  CANONICAL,
  'Blog',
  'https://mychef.id/journal'
)

const faqs = [
  {
    q: 'Can your chefs cook for guests with a severe nut allergy?',
    a: 'Yes. When a nut allergy is disclosed at booking, the chef uses completely separate equipment — cutting boards, knives, pans, and utensils — that have never contacted nuts. No nut-containing ingredients enter the kitchen that day. We recommend disclosing severity (anaphylactic vs. intolerance) so we can calibrate the level of isolation.',
  },
  {
    q: 'Do you accommodate halal dietary requirements?',
    a: 'Yes. myCHEF chefs source halal-certified meat and poultry for bookings requiring halal meals. Pork and alcohol are excluded from the entire menu. Guests can confirm halal requirements at booking; no premium applies.',
  },
  {
    q: 'Can the chef cook a fully gluten-free menu?',
    a: 'Yes. Our chefs are trained to identify hidden gluten sources — soy sauce, marinades, stock cubes, and flour-dusted proteins. For coeliac-severity gluten intolerance, the chef uses clean, dedicated cookware and avoids cross-contact throughout prep and service.',
  },
  {
    q: 'What if my group has multiple conflicting dietary requirements?',
    a: 'Mixed dietary groups are the norm, not the exception. The typical booking includes omnivores, one or two vegetarians, and a child with a preference or intolerance. The chef plans a menu with a shared base where possible and modifies individual components. No extra charge for standard dietary variations.',
  },
  {
    q: 'How do I communicate my dietary requirements to the chef?',
    a: "At booking via WhatsApp, tell us: every allergy (severity included), every intolerance, every hard exclusion, every dietary category (vegan, halal, keto, etc.), and any personal dislikes. The chef receives this before shopping. You'll review and approve the proposed menu before the booking is confirmed.",
  },
  {
    q: 'Are your chefs HACCP certified?',
    a: 'Yes. All myCHEF chefs hold HACCP (Hazard Analysis Critical Control Points) certification. This covers temperature control, cross-contamination prevention, allergen separation, and food handling hygiene — the same standard used in commercial food production.',
  },
]

const faqSchema = faqPageSchema(faqs.map(({ q, a }) => ({ question: q, answer: a })))

const DIETARY_CATEGORIES = [
  {
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    label: 'Vegan',
    badge: 'Plant-Based',
    desc: 'Zero animal products. Our chefs build complete-protein menus using tempeh, tofu, legumes, and whole grains — not just a plate of vegetables. Indonesian cuisine offers a natural vegan repertoire that most restaurant menus underutilise.',
    examples: ['Tempeh rendang', 'Jackfruit nasi goreng', 'Coconut milk laksa', 'Grilled tofu satay'],
  },
  {
    icon: <Shield className="w-6 h-6 text-amber-600" />,
    label: 'Gluten-Free',
    badge: 'Coeliac-Safe',
    desc: 'The chef identifies and replaces every gluten source — kecap manis (contains wheat), standard soy sauce, marinades, stock, and flour-thickened sauces. Rice-based Indonesian cuisine adapts naturally. Coeliac-severity guests get dedicated cookware.',
    examples: ['Balinese fish in banana leaf', 'Lamb shoulder with turmeric', 'Gado-gado (GF tamari)', 'Coconut pandan rice pudding'],
  },
  {
    icon: <Shield className="w-6 h-6 text-teal-600" />,
    label: 'Halal',
    badge: 'Certified Sourcing',
    desc: 'Halal-certified meat and poultry sourced for every halal booking. Pork excluded from the entire shopping list and kitchen. Alcohol-free cooking throughout. No premium for halal requests.',
    examples: ['Beef rendang', 'Lamb kofta', 'Grilled chicken sate', 'Whole red snapper'],
  },
  {
    icon: <Leaf className="w-6 h-6 text-orange-600" />,
    label: 'Keto / Low-Carb',
    badge: 'High-Fat, Low-Carb',
    desc: 'Grains, sugars, and starchy vegetables replaced with fats and non-starchy produce. Balinese cuisine is protein- and coconut fat-rich by nature — keto adapts well here. Sauces are thickened with coconut cream or egg yolk instead of flour or cornstarch.',
    examples: ['Coconut-braised short rib', 'Grilled barramundi with herb butter', 'Cauliflower nasi goreng', 'Avocado & prawn salad'],
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    label: 'Nut-Free',
    badge: 'Anaphylaxis Protocol',
    desc: 'Peanuts and tree nuts are common in Indonesian cooking — satay sauce, gado-gado, and many sambals contain them. For nut-allergic guests, these are replaced entirely. Severe allergy protocol: dedicated clean equipment, no nut ingredients enter the kitchen.',
    examples: ['Satay with sunflower seed sauce', 'Gado-gado with tahini-free dressing', 'Mango-lime fish ceviche', 'Herb-crusted lamb rack'],
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    label: 'Dairy-Free',
    badge: 'Lactose & Casein',
    desc: "Butter, cream, milk, and cheese replaced with coconut alternatives in every dish. Indonesian cuisine is naturally low-dairy — most richness comes from coconut milk, which is inherently dairy-free. Desserts are adapted using coconut cream.",
    examples: ['Coconut laksa (no cream)', 'Grilled fish with herb oil', 'Mango sorbet', 'Black rice pudding with coconut milk'],
  },
]

const HACCP_STEPS = [
  {
    title: 'Pre-booking allergy declaration',
    desc: 'Every allergy and intolerance is documented before the chef shops. Shopping lists are built to exclude allergens at source — the chef does not buy it, so it cannot contaminate.',
  },
  {
    title: 'Dedicated equipment protocol',
    desc: 'For severe allergies (nut, shellfish, gluten/coeliac), the chef uses clean, dedicated cutting boards, knives, pans, and utensils that have never contacted the allergen.',
  },
  {
    title: 'Ingredient sourcing verification',
    desc: 'The chef checks every label — sauces, condiments, marinades — for hidden allergens before purchase. Substitutions are made at the market, not improvised in the kitchen.',
  },
  {
    title: 'Preparation order control',
    desc: "Allergen-free dishes are prepared before any dishes containing allergens. Surfaces are cleaned between preparation stages. The guest's safe food is never placed adjacent to allergen-containing food.",
  },
  {
    title: 'Temperature and storage control',
    desc: 'HACCP temperature protocols govern every stage from market to table. Cold chain is maintained. Proteins reach safe core temperatures. Food is not held in the danger zone.',
  },
  {
    title: 'Service separation',
    desc: "Allergen-safe dishes are plated first, covered, and kept physically separate from other dishes. Service utensils are not shared between safe and non-safe items. The chef verbally confirms each dish to the guest.",
  },
]

export default function FoodAllergiesPage() {
  return (
    <>
      <SeoHead
        title="Food Allergies & Dietary Requirements with a Private Chef Bali | myCHEF"
        description="How myCHEF handles food allergies and special diets in Bali: HACCP protocols, cross-contamination controls, and custom menus for vegan, gluten-free, halal, keto, nut-free & dairy-free guests."
        canonical={CANONICAL}
        ogType="article"
        jsonLd={[localBizWithRating, articleSchema, breadcrumbs, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-[#0A0A0A] text-white pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#999] mb-6">
            <Link to="/" className="hover:text-[#C5A028] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/journal" className="hover:text-[#C5A028] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#C5A028]">Food Allergies & Dietary Requirements</span>
          </nav>

          <p className="text-[#C5A028] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            SAFETY GUIDE · DIETARY REQUIREMENTS
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Food Allergies & Dietary Requirements with a Private Chef in Bali: The Complete Safety Guide
          </h1>
          <p className="text-lg text-[#CCC] max-w-2xl mb-8">
            Every allergy documented. Every dish adapted. HACCP-certified chefs handling vegan, gluten-free, halal, keto, nut-free, and dairy-free requirements — all at your villa.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black px-6 py-3 font-semibold text-sm hover:bg-[#D4AF37] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Discuss Your Dietary Requirements
            </a>
            <Link
              to="/catering"
              className="inline-flex items-center gap-2 border border-[#444] text-white px-6 py-3 font-semibold text-sm hover:border-[#C5A028] transition-colors"
            >
              See Catering Options
            </Link>
          </div>
        </div>
      </section>

      {/* Short Answer */}
      <section className="bg-[#F9F6EF] px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-base text-[#1A1A1A] leading-relaxed">
            <strong className="text-[#C5A028]">Short answer:</strong> A private chef is one of the safest dining options available for guests with food allergies or strict dietary requirements. You communicate your needs directly, the chef builds the menu around them, shops accordingly, and cooks in a controlled environment with no cross-kitchen contamination from other tables' orders. Here is exactly how we handle it.
          </p>
        </div>
      </section>

      {/* 6 Dietary Categories */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">
            Dietary Categories We Handle
          </h2>
          <p className="text-[#666] mb-10 max-w-2xl">
            These are the most common dietary requirements across our bookings. All can be combined — for example, a guest who is both vegan and gluten-free, or halal and nut-free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIETARY_CATEGORIES.map((cat) => (
              <div key={cat.label} className="border border-[#E8E0CC] p-6">
                <div className="flex items-center gap-3 mb-3">
                  {cat.icon}
                  <div>
                    <span className="font-bold text-[#1A1A1A]">{cat.label}</span>
                    <span className="ml-2 text-xs bg-[#F9F6EF] text-[#C5A028] border border-[#E8E0CC] px-2 py-0.5 font-medium">
                      {cat.badge}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#555] leading-relaxed mb-4">{cat.desc}</p>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-[#999] uppercase tracking-wider mb-2">Sample dishes</p>
                  {cat.examples.map((ex) => (
                    <div key={ex} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C5A028] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-[#555]">{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HACCP Protocol */}
      <section className="bg-[#0A0A0A] text-white px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-[#C5A028]" />
            <h2 className="text-2xl md:text-3xl font-bold">Our HACCP Allergen Safety Protocol</h2>
          </div>
          <p className="text-[#CCC] mb-10 max-w-2xl">
            HACCP (Hazard Analysis Critical Control Points) is the food safety standard used in commercial food production. All myCHEF chefs are certified. This is how allergen safety works across a full booking.
          </p>

          <div className="space-y-0">
            {HACCP_STEPS.map((step, i) => (
              <div key={step.title} className="flex gap-4 border-b border-[#222] py-5 last:border-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C5A028] text-black text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-[#CCC] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Contamination */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
            Cross-Contamination: What "Safe" Actually Means
          </h2>
          <div className="prose prose-sm max-w-none text-[#555] space-y-4">
            <p>
              "Cross-contamination" means an allergen from one food transfers to another — through shared equipment, shared surfaces, or airborne particles from frying. For guests with anaphylactic-level allergies, any trace exposure can trigger a reaction. Restaurant kitchens struggle with this because multiple dishes are prepared simultaneously on shared equipment.
            </p>
            <p>
              A private chef at your villa cooks only your food. There are no other orders running in parallel. When an allergen is declared, the chef brings dedicated clean equipment and does not introduce the allergen into the kitchen at all. The allergen is not "avoided" — it is absent.
            </p>
            <p>
              For example: a guest with a peanut allergy at a restaurant in Bali faces satay sauce being made on the same grill, peanut oil possibly used in the wok, and staff who may not verify ingredients on every dish. At your villa, the chef's shopping list has no peanuts. No peanuts enter the kitchen. No peanut risk exists in preparation, service, or storage.
            </p>
            <p>
              For gluten/coeliac, soy sauce (which contains wheat) is one of the most common hidden sources in Indonesian cooking. The chef replaces it with tamari or coconut aminos throughout, and checks every sauce and marinade label before purchase. This is not possible at a restaurant where sauces are pre-made in bulk.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#0A0A0A] text-white">
                  <th className="text-left p-3 font-semibold">Safety Factor</th>
                  <th className="text-center p-3 font-semibold">Private Chef (myCHEF)</th>
                  <th className="text-center p-3 font-semibold">Restaurant</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Allergen communicated directly to chef', '✓ Always', '✗ Via waiter relay'],
                  ['Dedicated allergen-free equipment', '✓ On request', '✗ Rarely available'],
                  ['Shopping list built around allergy', '✓ Yes', '✗ No'],
                  ['Parallel dishes with allergens avoided', '✓ No other orders', '✗ Kitchen runs multiple orders'],
                  ['Chef verifies every sauce & condiment label', '✓ Yes', '✗ Pre-made sauces'],
                  ['Menu approved by guest before cooking', '✓ Always', '✗ Fixed menu'],
                ].map(([factor, chef, rest], i) => (
                  <tr key={factor} className={i % 2 === 0 ? 'bg-[#F9F6EF]' : 'bg-white'}>
                    <td className="p-3 text-[#1A1A1A] font-medium">{factor}</td>
                    <td className="p-3 text-center text-green-700 font-medium">{chef}</td>
                    <td className="p-3 text-center text-red-600 font-medium">{rest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sample allergy-friendly menu */}
      <section className="bg-[#F9F6EF] px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">
            Sample Allergy-Friendly Full-Day Menu
          </h2>
          <p className="text-[#666] mb-8 max-w-2xl text-sm">
            A real menu for a group with one vegan, one gluten-free guest, and one guest with a nut allergy. All three eat together from the same kitchen session.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="text-left p-3 font-semibold w-24">Meal</th>
                  <th className="text-left p-3 font-semibold">Omnivores</th>
                  <th className="text-left p-3 font-semibold">Vegan</th>
                  <th className="text-left p-3 font-semibold">GF + Nut-Free</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Breakfast',
                    'Shakshuka with sourdough',
                    'Acai bowl, chia pudding, tropical fruit',
                    'Shakshuka on GF bread, no shared surface',
                  ],
                  [
                    'Lunch',
                    'Chicken satay, peanut sauce, nasi goreng',
                    'Tempeh satay, sunflower sauce, nasi goreng (vegan)',
                    'Grilled chicken skewers, sunflower sauce, fried rice (tamari)',
                  ],
                  [
                    'Dinner',
                    'Beef rendang, jasmine rice, green bean urap',
                    'Jackfruit rendang, coconut rice, urap (vegan sambal)',
                    'Lamb fillet, roast sweet potato, herb oil — nut-free, GF throughout',
                  ],
                  [
                    'Dessert',
                    'Coconut pandan cake',
                    'Black sticky rice with coconut cream',
                    'Mango sorbet (naturally GF, nut-free)',
                  ],
                ].map(([meal, omni, vegan, gfnut], i) => (
                  <tr key={meal} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F6EF]'}>
                    <td className="p-3 font-semibold text-[#1A1A1A]">{meal}</td>
                    <td className="p-3 text-[#555]">{omni}</td>
                    <td className="p-3 text-[#555]">{vegan}</td>
                    <td className="p-3 text-[#555]">{gfnut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[#999]">
            All dishes prepared with dedicated equipment per dietary category. Menu is illustrative — your chef builds one specific to your group.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#C5A028] px-4 py-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-black text-lg">Have complex dietary requirements?</p>
            <p className="text-black/80 text-sm">Tell us everything. We build the menu around your group's exact needs.</p>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-semibold text-sm hover:bg-[#1A1A1A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us Now
          </a>
        </div>
      </section>

      {/* How to declare */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
            How to Declare Dietary Requirements at Booking
          </h2>
          <p className="text-[#666] mb-8 max-w-2xl text-sm">
            The more information you provide upfront, the better the menu. When you contact us via WhatsApp, include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Every allergy', detail: 'Name the allergen and severity (trace reaction, intolerance, or anaphylactic). If EpiPen is carried, tell us.' },
              { label: 'Dietary categories', detail: 'Vegan, vegetarian, pescatarian, halal, kosher, keto, low-FODMAP — name every label that applies.' },
              { label: 'Hard exclusions', detail: 'Ingredients the guest simply will not eat regardless of allergy — these go on the menu planning sheet too.' },
              { label: 'Preferred cuisines', detail: 'Indonesian, Mediterranean, Asian fusion, Western — this shapes which base recipes the chef adapts.' },
              { label: "Children's specific needs", detail: 'For kids, list what they will and will not eat. Picky eating is handled as a requirement, not a preference.' },
              { label: 'Preferred meal times', detail: 'Breakfast at 8:00, lunch at 13:00, dinner at 19:00 — the chef plans shopping and prep around your schedule.' },
            ].map(({ label, detail }) => (
              <div key={label} className="border border-[#E8E0CC] p-5">
                <h3 className="font-semibold text-[#1A1A1A] mb-1 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C5A028]" />
                  {label}
                </h3>
                <p className="text-sm text-[#666] pl-6">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F9F6EF] px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-[#E8E0CC] pb-6 last:border-0">
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{q}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/family-kids-menu-private-chef-bali', title: "Family & Kids' Menus", desc: 'Age-segmented kids menus, picky eater strategies, and HACCP food safety for children.' },
              { href: '/blog/private-chef-vs-restaurant-bali', title: 'Private Chef vs Restaurant', desc: 'Why villa dining outperforms restaurants for groups with complex needs.' },
              { href: '/pricing', title: 'Pricing Guide', desc: 'Full pricing for dietary-specific bookings and multi-meal packages.' },
              { href: '/catering', title: 'Catering Services', desc: 'Buffet, BBQ, and plated catering — all adapted to your dietary requirements.' },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                to={href}
                className="bg-white border border-[#E8E0CC] p-4 hover:border-[#C5A028] transition-colors group"
              >
                <span className="font-semibold text-sm text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors block mb-1">
                  {title}
                </span>
                <span className="text-xs text-[#999]">{desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0A0A0A] text-white px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book a Chef Who Handles Your Dietary Requirements
          </h2>
          <p className="text-[#CCC] mb-8 max-w-xl mx-auto">
            Tell us your allergies and requirements. We confirm availability and propose a custom menu within 2 hours. No hidden charges for dietary adaptations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black px-8 py-4 font-semibold text-sm hover:bg-[#D4AF37] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Discuss Your Requirements on WhatsApp
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-[#444] text-white px-8 py-4 font-semibold text-sm hover:border-[#C5A028] transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-6 text-[#666] text-xs">
            All myCHEF chefs are HACCP-certified · Responses within 2 hours · No dietary surcharges
          </p>
        </div>
      </section>
    </>
  )
}
