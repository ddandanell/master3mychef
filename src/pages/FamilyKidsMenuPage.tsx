import { Link } from 'react-router-dom'
import { ChevronRight, MessageCircle, CheckCircle, Users, Shield, Clock } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import { PHONE } from '@/data/siteArchitecture'

const SITE = 'https://mychef.id'
const CANONICAL = `${SITE}/blog/family-kids-menu-private-chef-bali`

const FAQS = [
  {
    q: 'Can a private chef in Bali cook for young children?',
    a: 'Yes — myCHEF chefs are experienced cooking for all ages. We build a separate kids\' menu into the family meal plan covering age-appropriate portions, mild flavours, and familiar dishes. You tell us the children\'s ages and preferences; the chef handles the rest.',
  },
  {
    q: 'What does a typical family villa dinner look like in Bali?',
    a: 'The chef arrives 1.5–2 hours before serving time, sets up in your villa kitchen, and serves adults and children at the same table. Kids\' plates can come out earlier if needed. After the meal, the chef cleans up completely. The whole evening runs on the family\'s timeline — no rush, no transfers, no restaurant stress.',
  },
  {
    q: 'How do I communicate my children\'s dietary needs to the chef?',
    a: 'When you message us on WhatsApp, include a brief note: children\'s ages, any dislikes or allergies, whether they eat spice, and any preferred foods. We pass this to the chef and build it into the menu proposal before you approve anything.',
  },
  {
    q: 'Is a private chef more expensive than a family restaurant dinner in Bali?',
    a: 'Not necessarily. A family of 4–6 eating at a decent Seminyak or Canggu restaurant easily spends IDR 4M–6M when you include food, drinks, service charge, and two-way transfers. A myCHEF villa dinner for the same group runs IDR 3M–5M all-inclusive — and the kids eat something they actually want, at home, without anyone melting down in a restaurant.',
  },
  {
    q: 'What ages do your kids\' menus cover?',
    a: 'We tailor the kids\' menu to the ages in your group. Toddlers (1–3) get simple finger foods, soft textures, and mild flavours. Kids (4–8) get familiar dishes — pasta, grilled chicken, steamed vegetables — adapted to local ingredients. Older children (9+) typically eat from a slightly modified version of the adult menu.',
  },
  {
    q: 'How much notice do I need to give for a family dinner?',
    a: 'Most families book 24–48 hours in advance. We can sometimes accommodate same-day requests depending on date and location. Send us a WhatsApp message with your date, villa location, number of adults and children with ages, and any dietary notes — and we will come back with a menu proposal within two hours.',
  },
]

const WA_MSG = encodeURIComponent(
  'Hi myCHEF! We are a family with children visiting Bali and would like to book a private chef for our villa. Can you help?'
)
const WA_URL = `https://wa.me/${PHONE}?text=${WA_MSG}`

const SAMPLE_DAY = [
  {
    meal: 'Breakfast',
    adults: 'Shakshuka, fresh fruit platter, sourdough toast, freshly squeezed juice',
    kids: 'Fluffy pancakes with honey, scrambled eggs, sliced banana and melon',
  },
  {
    meal: 'Lunch',
    adults: 'Nasi goreng with prawn crackers, mixed satay, cucumber salad',
    kids: 'Mild fried rice (no chilli), grilled chicken skewers, steamed corn',
  },
  {
    meal: 'Dinner',
    adults: '3-course: burrata starter → grilled barramundi with coconut sambal → chocolate fondant',
    kids: 'Pasta with butter and parmesan, grilled fish fillet, ice cream',
  },
]

export default function FamilyKidsMenuPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Family Dining with a Private Chef in Bali: A Complete Guide for Parents',
    description:
      'How to plan family villa dining in Bali with a private chef — kids\' menus, picky eater strategies, food safety protocols, and sample one-day family meal plans.',
    author: {
      '@type': 'Organization',
      name: 'myCHEF.id',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'myCHEF.id',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/og-image.webp`,
      },
    },
    datePublished: '2026-04-10',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': CANONICAL,
    },
    url: CANONICAL,
  }

  const localBizWithRating = {
    ...localBusinessSchema,
  }

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Family Private Chef Bali: Kids' Menus & Villa Dining | myCHEF"
        description="Planning villa dining for a family in Bali? Our private chefs build kids' menus around ages and preferences. No restaurant stress. Book in 24 hours."
        canonical={CANONICAL}
        ogType="article"
        ogImage="/generated/mychef-location-bali-hub-hero.webp"
        jsonLd={[
          localBizWithRating,
          articleSchema,
          breadcrumbSchema('Family Private Chef Bali', CANONICAL, 'Blog', `${SITE}/blog`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-white/55 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#C5A028] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/journal" className="hover:text-[#C5A028] transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-white/60">Family Private Chef Bali</span>
          </nav>

          <div className="mb-4">
            <span className="text-[#C5A028] text-xs uppercase tracking-[2px] font-semibold">Family Guide · Villa Dining with Children</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Family Dining with a Private Chef in Bali: A Complete Guide for Parents
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
            Our chefs build kids' menus around your children's ages and preferences — picky eaters included.
            No restaurant transfers, no waiting, no meltdowns. Just dinner at the villa, on your timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] hover:bg-[#D4AC2A] text-black font-semibold px-6 py-3 transition-colors"
            >
              <MessageCircle size={18} />
              Plan Your Family's Bali Dining
            </a>
            <Link
              to="/catering"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-6 py-3 transition-colors"
            >
              See Villa Catering Options
            </Link>
          </div>
        </div>
      </section>

      {/* Short answer callout */}
      <section className="bg-[#F5F0E8] border-b border-[#E8E0CC] py-6">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#1A1A1A] text-base">
            <strong>Short answer:</strong> A private chef is almost always the right choice for families with young children in Bali.
            The logistics comparison alone — no transfers, no waiting, food adapted for every age — makes villa dining the clear winner.
            Here is everything you need to plan it well.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        {/* Why families */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#1A1A1A]">Why Families Choose a Private Chef in Bali</h2>
          <p className="text-base text-[#444] leading-relaxed mb-4">
            Travelling to Bali with children is already a significant logistical undertaking. Getting everyone fed three
            times a day — in a country where the food is unfamiliar, restaurants are not always near the villa, and
            children's menus are often afterthoughts — adds unnecessary friction to what should be a holiday.
          </p>
          <p className="text-base text-[#444] leading-relaxed mb-4">
            A private chef removes that friction entirely. The chef comes to your villa, sources fresh ingredients that morning,
            and cooks a meal designed specifically for the ages and preferences in your group. Adults get the quality
            they came for. Children get food they will actually eat. No one sits in a taxi for forty minutes with a tired
            six-year-old.
          </p>
          <p className="text-base text-[#444] leading-relaxed mb-6">
            The most consistent piece of feedback from families who use myCHEF is that the first evening — when everyone
            is jet-lagged, the children are overwhelmed, and no one has the energy to navigate a restaurant — is when
            the private chef pays for itself immediately.
          </p>

          {/* Benefit cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <Clock size={22} className="text-[#C5A028]" />,
                title: 'Your timeline',
                desc: 'Dinner at 6pm for the kids, main course at 7:30 for adults. The chef works around your schedule.',
              },
              {
                icon: <Users size={22} className="text-[#C5A028]" />,
                title: 'Every age covered',
                desc: 'Toddler finger foods through adult fine dining — all served from the same kitchen at the same meal.',
              },
              {
                icon: <Shield size={22} className="text-[#C5A028]" />,
                title: 'HACCP-certified safety',
                desc: 'All myCHEF chefs hold food safety certification. Allergen protocols are built into every booking.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#E8E0CC] p-5">
                <div className="mb-3">{icon}</div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kid-friendly menu options */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#1A1A1A]">Kid-Friendly Menu Options by Age</h2>
          <p className="text-base text-[#444] leading-relaxed mb-4">
            Our chefs do not have a fixed children's menu. They build one around the specific children in your group,
            starting with ages and any notes you provide at booking. This is how the approach typically breaks down:
          </p>

          <div className="space-y-5 mb-6">
            {[
              {
                age: 'Toddlers (1–3 years)',
                items: [
                  'Soft textures: steamed vegetables, mashed sweet potato, soft-cooked rice',
                  'Finger foods: small pasta shapes, banana pieces, soft fruit',
                  'No chilli, minimal salt, no whole nuts',
                  'Served earlier than the main adult course if needed',
                ],
              },
              {
                age: 'Young children (4–8 years)',
                items: [
                  'Familiar formats: pasta with butter or mild sauce, grilled chicken, fried rice without spice',
                  'Indonesian-inspired options when children are curious: mild satay, steamed corn, gado-gado with peanut sauce on the side',
                  'Smaller portions, child-height presentation',
                  'Desserts: fresh fruit, ice cream, simple cakes',
                ],
              },
              {
                age: 'Older children (9–13 years)',
                items: [
                  'Typically eat a modified version of the adult menu',
                  'Spice level adjusted individually',
                  'Often enjoy trying Indonesian cuisine when introduced gently',
                  'Can request a "restaurant favourite" — pizza, burgers, pasta — alongside the adult course',
                ],
              },
              {
                age: 'Teenagers (14+)',
                items: [
                  'Usually eat from the full adult menu with minor adjustments',
                  'We note preferences (vegetarian, no fish, etc.) at the booking stage',
                  'Can request specific dishes alongside the planned menu',
                ],
              },
            ].map(({ age, items }) => (
              <div key={age} className="bg-white border border-[#E8E0CC] p-5">
                <h3 className="font-semibold text-[#C5A028] text-sm uppercase tracking-wide mb-3">{age}</h3>
                <ul className="space-y-1">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#444]">
                      <CheckCircle size={15} className="text-[#C5A028] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sample day */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#1A1A1A]">Sample Family Meal Plan: One Day at the Villa</h2>
          <p className="text-base text-[#444] leading-relaxed mb-6">
            This is what a typical full-day family chef booking looks like — adults and children eating together,
            with parallel menus tailored to both. Exact dishes are adapted based on your preferences and seasonal
            availability.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="text-left p-3 font-medium w-24">Meal</th>
                  <th className="text-left p-3 font-medium">Adults</th>
                  <th className="text-left p-3 font-medium">Children</th>
                </tr>
              </thead>
              <tbody>
                {SAMPLE_DAY.map((row, i) => (
                  <tr key={row.meal} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E8]'}>
                    <td className="p-3 font-semibold text-[#C5A028] align-top">{row.meal}</td>
                    <td className="p-3 text-[#444] align-top">{row.adults}</td>
                    <td className="p-3 text-[#444] align-top">{row.kids}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#999] mt-3">
            Sample only. Your chef will propose a menu based on your specific group — share any preferences or restrictions when booking.
          </p>
        </section>

        {/* Picky eaters */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#1A1A1A]">Handling Picky Eaters</h2>
          <p className="text-base text-[#444] leading-relaxed mb-4">
            Picky eating is not a problem for a private chef — it is normal information that goes into the menu planning.
            The approach is simple: when you book, tell us specifically what the child will and will not eat. Not a vague
            "he's a bit fussy" — concrete details: will eat pasta but not if it has sauce, likes chicken but not fish,
            eats most fruit. The chef designs the kids' menu around these constraints.
          </p>
          <p className="text-base text-[#444] leading-relaxed mb-4">
            This is something restaurants structurally cannot do. A restaurant kitchen has its menu. A private chef has your menu.
          </p>
          <p className="text-base text-[#444] leading-relaxed mb-4">
            For very selective eaters, we typically recommend including one or two "anchor" dishes the child reliably eats —
            plain pasta, plain rice, buttered toast — alongside a smaller "try it" portion of whatever the adults are having.
            This gives the child something certain while leaving room to explore. Many children who eat almost nothing at
            restaurants will try new things in the relaxed atmosphere of a villa dinner, especially if parents are not stressed
            about the logistics.
          </p>
          <p className="text-base text-[#444] leading-relaxed mb-0">
            For children with medical dietary restrictions (coeliac disease, severe allergies, ARFID), see the food safety
            section below or go directly to our{' '}
            <Link to="/blog/food-allergies-dietary-requirements-private-chef-bali" className="text-[#C5A028] hover:underline font-medium">
              food allergies and dietary requirements guide
            </Link>{' '}
            for full protocol details.
          </p>
        </section>

        {/* Food safety */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#1A1A1A]">Food Safety for Children: Our Protocols</h2>
          <p className="text-base text-[#444] leading-relaxed mb-4">
            Children's immune systems are more sensitive than adults', and this matters particularly when travelling.
            All myCHEF chefs are HACCP-certified, meaning they are trained and tested in food safety protocols including
            temperature management, cross-contamination prevention, and allergen handling.
          </p>
          <p className="text-base text-[#444] leading-relaxed mb-6">
            For family bookings specifically:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Ingredients are sourced fresh the morning of your booking from vetted suppliers — no pre-cooked, reheated, or multi-day prep',
              'Allergens are documented before cooking begins — the chef reviews the full group\'s dietary notes before any prep starts',
              'Children\'s food is cooked to appropriate temperatures and served in separate, clean serving dishes to prevent cross-contact with adult dishes containing allergens',
              'The chef\'s equipment (knives, boards, pans) is cleaned between prep for different dietary groups when allergies are involved',
              'For severe allergies (anaphylaxis risk), we ask that you inform us explicitly at booking so we can confirm the chef has the specific training and equipment for that allergy',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-[#444] text-sm">
                <Shield size={16} className="text-[#C5A028] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-[#444] leading-relaxed">
            We have served thousands of family bookings across Bali. Our safety record is clean. If you have specific
            concerns, WhatsApp us before booking and we will walk you through the protocol for your group's specific needs.
          </p>
        </section>

        {/* Booking logistics for families */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#1A1A1A]">How Booking Works for Families</h2>
          <p className="text-base text-[#444] leading-relaxed mb-6">
            The booking process is deliberately simple. Everything happens on WhatsApp — no forms, no reservation systems,
            no back-and-forth emails that take three days.
          </p>
          <div className="space-y-4">
            {[
              {
                step: '01',
                title: 'Send us the essentials',
                desc: 'Date, villa location, number of adults and children with ages, any dietary restrictions or allergies, what kind of meal you are imagining (casual, celebration, multiple days).',
              },
              {
                step: '02',
                title: 'Receive a menu proposal',
                desc: 'Within two hours, we send a proposed menu covering all ages in your group — adult menu and kids\' menu side by side. You review, adjust, and approve.',
              },
              {
                step: '03',
                title: 'Chef arrives at your villa',
                desc: 'The chef arrives 1.5–2 hours before the meal. They bring everything — ingredients, equipment, serving ware. You do not need to prepare anything.',
              },
              {
                step: '04',
                title: 'Dinner, then complete cleanup',
                desc: 'The chef cooks, serves, and after the meal cleans the kitchen completely. You end the evening with a clean kitchen and well-fed family.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-white border border-[#E8E0CC] p-5">
                <div className="text-2xl font-light text-[#C5A028] w-10 flex-shrink-0">{step}</div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">{title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost comparison */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#1A1A1A]">Cost: Private Chef vs Restaurant for Families</h2>
          <p className="text-base text-[#444] leading-relaxed mb-4">
            Many families assume a private chef will cost significantly more than going to a restaurant. For families
            with children, this is usually not true once you count the actual costs.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="text-left p-3 font-medium">Cost item</th>
                  <th className="text-left p-3 font-medium">Restaurant</th>
                  <th className="text-left p-3 font-medium">Private chef</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Food (adults)', 'IDR 300K–700K/person + 21% tax', 'from IDR 700K/person, all-in'],
                  ['Food (children)', 'Half-portion pricing, limited menu', 'Built into the adult booking, free or small fee'],
                  ['Transfers (2 trips)', 'IDR 300K–600K for a family', 'Zero — chef comes to you'],
                  ['Drinks', '3–5× retail markup', 'Your own drinks at retail price'],
                  ['Waiting time', '30–60 min with hungry children', 'None — dinner at your chosen time'],
                  ['Cleanup', 'n/a', 'Full kitchen cleanup included'],
                ].map(([item, restaurant, chef], i) => (
                  <tr key={item} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E8]'}>
                    <td className="p-3 text-[#444] font-medium">{item}</td>
                    <td className="p-3 text-[#444]">{restaurant}</td>
                    <td className="p-3 text-[#444]">{chef}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-base text-[#444] leading-relaxed">
            For a family of 2 adults and 2–3 children, the total cost of a restaurant dinner and a villa chef dinner
            are often within IDR 300K–500K of each other — before accounting for transfers and the different value of
            each experience. See the full{' '}
            <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">
              myCHEF pricing guide
            </Link>{' '}
            for current rates, or our{' '}
            <Link to="/blog/private-chef-vs-restaurant-bali" className="text-[#C5A028] hover:underline font-medium">
              private chef vs restaurant comparison
            </Link>{' '}
            for a deeper breakdown across group sizes.
          </p>
        </section>

        {/* Multi-day stays */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#1A1A1A]">Planning Multiple Meals for Longer Stays</h2>
          <p className="text-base text-[#444] leading-relaxed mb-4">
            For families staying 3+ nights in Bali, the private chef option works particularly well as a recurring
            arrangement. Many families book the chef for all breakfasts, all dinners, and selected lunches across their
            stay — treating it as a villa package rather than individual bookings.
          </p>
          <p className="text-base text-[#444] leading-relaxed mb-4">
            For multi-day bookings, the chef and your family develop a rhythm. By day two, the chef knows which child
            eats what, at what pace, and what surprises went down well at last night's dinner. Menu planning for the
            full stay happens upfront — you review a multi-day proposal and adjust before the first meal.
          </p>
          <p className="text-base text-[#444] leading-relaxed">
            This also provides cost predictability for the whole trip. Rather than navigating restaurant choices daily —
            with children who are increasingly tired and specific about what they want — the food question is answered
            before you arrive.
          </p>
        </section>

        {/* FAQ section */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-[#1A1A1A]">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="border-b border-[#E8E0CC] pb-5 last:border-0">
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{q}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="mb-14">
          <h2 className="text-xl font-light mb-5 text-[#1A1A1A]">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                href: '/blog/private-chef-vs-restaurant-bali',
                title: 'Private Chef vs Restaurant Bali',
                desc: 'Full cost and experience comparison for groups of all sizes.',
              },
              {
                href: '/blog/private-chef-cost-bali',
                title: 'Private Chef Cost in Bali',
                desc: 'Real pricing for villa dinners, events, and multi-day stays.',
              },
              {
                href: '/catering',
                title: 'Villa Catering',
                desc: 'Daily chef service for families — breakfast, lunch, dinner.',
              },
              {
                href: '/locations/canggu',
                title: 'Family-friendly Canggu',
                desc: "Private chef options in Bali's most popular family destination.",
              },
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
        </section>

        {/* Final CTA */}
        <section className="bg-[#1A1A1A] text-white p-8 md:p-10">
          <h2 className="text-2xl font-light mb-4">Plan Your Family's Bali Dining</h2>
          <p className="text-white/70 mb-6 max-w-lg leading-relaxed">
            Tell us your dates, villa, and how many adults and children — we will send a full menu
            proposal for your family within two hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] hover:bg-[#D4AC2A] text-black font-semibold px-6 py-3 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us to Book
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-6 py-3 transition-colors"
            >
              See Full Pricing
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
