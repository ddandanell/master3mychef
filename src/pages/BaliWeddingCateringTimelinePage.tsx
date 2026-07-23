import { Link } from 'react-router-dom'
import { ChevronRight, MessageCircle, CheckCircle, Clock, Calendar, Users, Star } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import { PHONE } from '@/data/siteArchitecture'

const CANONICAL = 'https://mychef.id/blog/bali-wedding-catering-private-chef-timeline'
const WA_MSG = encodeURIComponent('Hi myCHEF! We are planning a wedding in Bali and would like to discuss catering and private chef options.')
const WA_URL = `https://wa.me/${PHONE}?text=${WA_MSG}`

const localBizWithRating = {
  ...localBusinessSchema,
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bali Wedding Catering with a Private Chef: Complete Timeline & Planning Guide',
  description:
    'The complete planning timeline for hiring a private chef for your Bali wedding — from 6 months out to the day itself. Menu design, tastings, staffing, and what to confirm at each stage.',
  datePublished: '2026-06-26',
  dateModified: '2026-06-26',
  author: { '@type': 'Organization', name: 'myCHEF Team' },
  publisher: localBizWithRating,
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  url: CANONICAL,
}

const breadcrumbs = breadcrumbSchema(
  'Bali Wedding Catering Private Chef Timeline',
  CANONICAL,
  'Blog',
  'https://mychef.id/journal'
)

const faqs = [
  {
    q: 'How far in advance should I book a private chef for a Bali wedding?',
    a: 'For weddings of 20+ guests, book 3–6 months in advance to secure your preferred chef, lock in the menu, and allow time for a tasting. Peak Bali wedding season (July–September and December) books out the fastest. For smaller intimate weddings of under 20 guests, 4–8 weeks can be sufficient, but earlier is always safer.',
  },
  {
    q: 'Can a private chef handle a full wedding reception with 60+ guests?',
    a: 'Yes. myCHEF scales events to any size. For larger weddings we assign a lead chef plus commis support, a dedicated service team including waiters and bartenders, and a logistics coordinator. All food is freshly prepared on-site at the villa kitchen or a temporary kitchen setup if the venue requires it.',
  },
  {
    q: 'What does Bali wedding catering cost with a private chef?',
    a: 'Wedding catering costs depend on guest count, menu complexity, service hours, and staffing. Every wedding is quoted individually — you receive a detailed, itemised proposal before any deposit. Message us on WhatsApp with your date and guest count for a tailored quote.',
  },
  {
    q: 'Can we have a menu tasting before the wedding?',
    a: 'Yes, and we strongly recommend it. A tasting session is scheduled 4–8 weeks before the wedding date. The chef prepares representative dishes from the proposed menu for 2–4 people. This is your opportunity to adjust seasoning, swap courses, and finalise presentation. Tasting sessions are charged separately from the wedding package.',
  },
  {
    q: 'Can you accommodate dietary requirements and allergies across a mixed wedding guest list?',
    a: 'Yes. We collect dietary information from the couple for all guests — allergies, intolerances, vegan, halal, gluten-free, and other requirements — at the time of menu finalisation. The chef plans separate preparations for allergy-critical guests and designs a menu with a shared base adapted for each dietary category. No guest goes without.',
  },
  {
    q: 'Do you provide bar service and alcohol for weddings?',
    a: "Yes. myCHEF can supply bartenders, mixologists, and a full bar setup including spirits, wine, champagne, beer, and signature cocktails. We source alcohol at cost or you can supply your own and we'll serve it. Alcohol procurement in Bali requires lead time, so confirm bar requirements at least 3 weeks before the event.",
  },
  {
    q: 'What is included in the wedding catering package?',
    a: 'A standard myCHEF wedding package includes: custom menu design and consultation, a pre-event tasting (optional), all ingredient sourcing and shopping, full on-site kitchen preparation, plated or buffet service, uniformed service staff, crockery and cutlery (if required), kitchen cleanup, and waste removal. A dedicated event coordinator manages timing on the day.',
  },
  {
    q: 'Can you handle a wedding at a villa that has a small kitchen?',
    a: 'Yes. Our chefs are experienced working in residential villa kitchens of all sizes. For larger guest counts where the villa kitchen is a limiting factor, we bring additional portable cooking equipment. We do a kitchen assessment as part of the planning process — no surprises on the day.',
  },
]

const faqSchema = faqPageSchema(faqs.map(({ q, a }) => ({ question: q, answer: a })))

const TIMELINE_STEPS = [
  {
    phase: '6 Months Before',
    timing: '6 months out',
    title: 'Initial inquiry and concept lock',
    icon: <Calendar className="w-5 h-5 text-[#C5A028]" />,
    tasks: [
      'Contact myCHEF via WhatsApp with your wedding date, villa location, and approximate guest count',
      'Discuss cuisine direction — Western fine dining, modern Indonesian, fusion, or a multi-course tasting menu',
      'Receive an initial quote and service overview',
      'Secure the date with a 25% deposit to hold the chef and team',
    ],
    note: 'Peak season (July–September, December) books 4–6 months in advance. Earlier contact means more flexibility.',
  },
  {
    phase: '3–4 Months Before',
    timing: '3–4 months out',
    title: 'Menu design and dietary collection',
    icon: <Users className="w-5 h-5 text-[#C5A028]" />,
    tasks: [
      'Receive a proposed wedding menu with 3–4 course options for feedback',
      'Collect dietary requirements and allergies from your guest list',
      'Confirm whether the reception is plated service, family-style, or buffet',
      'Discuss bar requirements: bartenders, mixologists, alcohol sourcing, or BYO service',
      'Confirm service staff numbers — waiters, runners, and a bar team if needed',
    ],
    note: 'The more complete your dietary list at this stage, the smoother the tasting and the day itself will be.',
  },
  {
    phase: '4–8 Weeks Before',
    timing: '4–8 weeks out',
    title: 'Tasting session',
    icon: <Star className="w-5 h-5 text-[#C5A028]" />,
    tasks: [
      'Attend a private tasting at the villa or a designated location in Bali',
      'Chef presents 3–6 representative dishes from the proposed wedding menu',
      'Adjust seasoning, swap courses, or confirm presentation style',
      'Finalise the complete menu — no further changes after this point',
      'Confirm any last dietary additions or updates',
    ],
    note: 'Tastings are for 2–4 people and are billed separately. Budget 2–3 hours for a relaxed session.',
  },
  {
    phase: '2–3 Weeks Before',
    timing: '2–3 weeks out',
    title: 'Logistics and staffing confirmation',
    icon: <CheckCircle className="w-5 h-5 text-[#C5A028]" />,
    tasks: [
      'Confirm final guest count — this locks ingredient quantities and staffing ratios',
      'Share the wedding day schedule: ceremony timing, cocktail hour, dinner start, speeches, dessert',
      'Confirm crockery, glassware, and linen requirements — supply or hire',
      'Review the kitchen setup at the villa; identify any equipment to bring',
      'Pay the second installment (typically 50% at this stage)',
    ],
    note: 'Changes to guest count after this point may affect pricing — large reductions are non-refundable against food costs already ordered.',
  },
  {
    phase: '3–5 Days Before',
    timing: '3–5 days out',
    title: 'Final brief and ingredient sourcing',
    icon: <CheckCircle className="w-5 h-5 text-[#C5A028]" />,
    tasks: [
      'Chef and coordinator receive the final day-of brief with timings, contact numbers, and villa access',
      'Dry goods, wines, and non-perishables are sourced and staged',
      'Service team is briefed on the menu, guest dietary requirements, and event flow',
      'Any last-minute guest changes or requests are accommodated where possible',
    ],
    note: 'Your coordinator is your single point of contact from this point. All communication routes through them.',
  },
  {
    phase: 'Day Before',
    timing: 'Day before',
    title: 'Prep cook and setup',
    icon: <Clock className="w-5 h-5 text-[#C5A028]" />,
    tasks: [
      'Chef arrives at the villa for partial prep: stocks, sauces, brines, and any slow-cook elements',
      'Fresh produce is sourced at the morning market',
      'Kitchen is organised and mise en place is set for the following day',
      'Bar setup is installed and tested if the team is providing bar service',
      'All allergy-critical ingredients are segregated in labelled containers',
    ],
    note: 'Complex menus of 5+ courses often require partial prep the day before. This is included in the event fee.',
  },
  {
    phase: 'Wedding Day: Setup',
    timing: 'Morning of',
    title: 'Arrival, final prep, and table setup',
    icon: <Clock className="w-5 h-5 text-[#C5A028]" />,
    tasks: [
      'Chef and service team arrive 4–5 hours before dinner service',
      'Final ingredient pickup for day-fresh items (seafood, bread, soft herbs)',
      'Service team sets the dining table: linen, crockery, cutlery, glassware, florals if requested',
      'Amuse-bouche and canapé prep completed for cocktail hour',
      'Coordinator confirms event timing with the couple or wedding planner',
    ],
    note: 'Guest count, flow, and dietary requirements are confirmed one final time in the morning brief.',
  },
  {
    phase: 'Wedding Day: Service',
    timing: 'During reception',
    title: 'Cocktail hour, dinner, and dessert',
    icon: <Star className="w-5 h-5 text-[#C5A028]" />,
    tasks: [
      'Canapés and welcome drinks served during cocktail hour',
      'Guests are seated; service team handles placement and water service',
      "Kitchen fires courses to the event coordinator's timing cue — speeches, toasts, and first dances are built into the schedule",
      'Dietary alternatives are served simultaneously — no one waits, no one is singled out',
      'Dessert, wedding cake service, and digestif round out the evening',
    ],
    note: 'A good private chef wedding runs like a restaurant, not a buffet. Courses arrive warm, on time, and presented.',
  },
  {
    phase: 'After the Reception',
    timing: 'Post-event',
    title: 'Cleanup and final balance',
    icon: <CheckCircle className="w-5 h-5 text-[#C5A028]" />,
    tasks: [
      'Kitchen is fully cleaned — dishes washed, surfaces sanitised, equipment packed',
      'All waste is removed from the villa',
      'Leftover food (if any) is packaged for the couple or guests',
      'Final invoice issued; remaining balance settled within 48 hours post-event',
      'A post-event debrief is available on request — useful if you plan future events',
    ],
    note: 'The villa is left in the same condition it was found. No additional cleaning fee is charged to the property.',
  },
]

const INCLUDED_ITEMS = [
  { label: 'Custom menu design', detail: 'Concept, course structure, dietary adaptation, and final menu document' },
  { label: 'Pre-event tasting', detail: 'Representative dishes for 2–4 people, 4–8 weeks before the wedding' },
  { label: 'Ingredient sourcing', detail: 'All shopping at Bali markets and suppliers; produce at cost price' },
  { label: 'On-site preparation', detail: 'Full kitchen team on-site; no off-site catering or reheated food' },
  { label: 'Plated or buffet service', detail: 'Either format supported; hybrid (starter buffet, plated mains) available' },
  { label: 'Uniformed service staff', detail: 'Waiters, runners, and a sommelier or bartender as required' },
  { label: 'Event coordination', detail: 'A dedicated coordinator manages kitchen timing, service cues, and guest liaison' },
  { label: 'Kitchen cleanup', detail: 'Full kitchen clean and waste removal post-event; villa left spotless' },
]

export default function BaliWeddingCateringTimelinePage() {
  return (
    <>
      <SeoHead
        title="Bali Wedding Catering Timeline: Complete Guide | myCHEF"
        description="The full timeline for hiring a private chef for your Bali wedding — from 6 months out to the day itself. Menu tastings, staffing and dietary planning."
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
            <span className="text-[#C5A028]">Bali Wedding Catering Timeline</span>
          </nav>

          <p className="text-[#C5A028] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            WEDDING PLANNING GUIDE · CATERING
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Bali Wedding Catering with a Private Chef: Complete Timeline & Planning Guide
          </h1>
          <p className="text-lg text-[#CCC] max-w-2xl mb-8">
            From your first inquiry to post-reception cleanup — a step-by-step timeline for planning Bali wedding catering with a private chef. What happens when, what to decide, and what to ask.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black px-6 py-3 font-semibold text-sm hover:bg-[#D4AF37] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Start Planning Your Wedding
            </a>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 border border-[#444] text-white px-6 py-3 font-semibold text-sm hover:border-[#C5A028] transition-colors"
            >
              View Wedding Catering
            </Link>
          </div>
        </div>
      </section>

      {/* Short Answer */}
      <section className="bg-[#F9F6EF] px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-l-4 border-[#C5A028] p-6 rounded-r-lg shadow-sm">
            <p className="text-xs font-semibold text-[#C5A028] tracking-widest uppercase mb-2">Quick Answer</p>
            <p className="text-[#1A1A1A] text-base leading-relaxed">
              For a Bali wedding with a private chef, the planning timeline runs from 6 months out (date hold and concept) through a tasting at 4–8 weeks, final logistics at 2–3 weeks, prep-cook the day before, and full on-site service on the wedding day. The key milestones are: deposit to hold the date, menu finalisation after the tasting, and final guest count 2–3 weeks out. Every wedding is scoped and quoted individually, with an itemised proposal confirmed before any deposit.
            </p>
          </div>
        </div>
      </section>

      {/* Why Private Chef for Weddings */}
      <section className="bg-white px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
            Why Couples Choose a Private Chef for Their Bali Wedding
          </h2>
          <div className="prose prose-lg max-w-none text-[#444] space-y-4">
            <p>
              Most couples who choose a villa wedding in Bali specifically want to avoid the constraints of a hotel banquet or restaurant buyout. A private chef keeps everything on your terms: your villa, your menu, your schedule, your guests eating together rather than queuing at a hotel buffet.
            </p>
            <p>
              The food becomes part of the experience — not a line item to manage. A skilled private chef designs a menu that fits the setting. An open-flame grill in a garden villa calls for different food than an elevated terrace overlooking rice fields at dusk. That context-aware cooking is what makes a private chef wedding memorable in a way that catered hotel food rarely is.
            </p>
            <p>
              There is also a practical advantage: with a private chef, dietary requirements are handled individually rather than through a hotel's one-size allergy protocol. Every guest eats well — including the vegan, the halal, the nut-allergic child, and the elderly relative who cannot manage spice.
            </p>
          </div>
        </div>
      </section>

      {/* Full Timeline */}
      <section className="bg-[#F9F6EF] px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
            The Complete Bali Wedding Catering Timeline
          </h2>
          <p className="text-[#666] mb-10 text-base">
            Nine stages from first contact to post-event cleanup. Each stage has a clear set of decisions and actions — no guesswork on what should happen when.
          </p>

          <div className="space-y-8">
            {TIMELINE_STEPS.map((step, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-[#0A0A0A] px-6 py-4 flex items-center gap-3">
                  {step.icon}
                  <div>
                    <p className="text-[#C5A028] text-xs font-semibold tracking-widest uppercase">{step.phase}</p>
                    <h3 className="text-white font-bold text-lg">{step.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-4">
                    {step.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                        <span className="text-[#444] text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[#FDF8EE] border border-[#E8DDB5] rounded px-4 py-3">
                    <p className="text-xs text-[#8A6F20] font-medium">💡 {step.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#0A0A0A] text-white px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#C5A028] text-xs font-semibold tracking-widest uppercase mb-3">Ready to Start?</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Send us your wedding date and we'll map out the plan
          </h2>
          <p className="text-[#CCC] mb-6 text-sm">
            Share your date, villa, and approximate guest count — we'll respond within a few hours with availability, a concept overview, and an initial quote.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-black px-8 py-3 font-semibold hover:bg-[#D4AF37] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Message myCHEF on WhatsApp
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
            What's Included in a myCHEF Wedding Package
          </h2>
          <p className="text-[#666] mb-8 text-base">
            Everything from menu concept to post-event cleanup. No third-party caterers, no reheated food, no handoff between providers.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {INCLUDED_ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-[#F9F6EF] rounded-lg">
                <CheckCircle className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A1A1A] text-sm">{item.label}</p>
                  <p className="text-[#666] text-xs mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Context */}
      <section className="bg-[#F9F6EF] px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
            What Shapes Your Wedding Quote
          </h2>
          <div className="prose prose-lg max-w-none text-[#444] space-y-4 mb-8">
            <p>
              Bali wedding catering is not one-size-fits-all — every celebration is quoted individually, and you always receive a transparent, itemised proposal before any deposit. Three things shape the quote:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                label: 'Guest Count & Event Days',
                guests: 'Scale of service',
                detail: 'A single reception dinner for 20 is a very different operation from a three-day wedding weekend with rehearsal dinner, welcome lunch, and recovery brunch.',
              },
              {
                label: 'Menu Complexity & Sourcing',
                guests: 'What is on the plate',
                detail: 'Course count, premium ingredients such as Wagyu or imported seafood, and the number of separate dietary preparations all shape the kitchen plan.',
              },
              {
                label: 'Staffing, Bar & Equipment',
                guests: 'The service around the food',
                detail: 'Waiter ratios, bartenders and sommeliers, plus any portable kitchen equipment, marquees, or furniture the villa cannot provide.',
              },
            ].map((tier, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-[#E8E4DC]">
                <p className="text-[#C5A028] text-xs font-semibold tracking-widest uppercase mb-1">{tier.label}</p>
                <p className="text-sm text-[#666] mb-2">{tier.guests}</p>
                <p className="text-xs text-[#666]">{tier.detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#FDF8EE] border border-[#E8DDB5] rounded-lg px-6 py-4">
            <p className="text-sm text-[#8A6F20]">
              <strong>Note:</strong> Your proposal covers food preparation, chef and kitchen team fees, and service staff. Alcohol and beverages are billed at market rate separately. Equipment hire (marquee, additional furniture, portable kitchen) is quoted case-by-case.{' '}
              <Link to="/blog/private-chef-cost-bali" className="underline hover:text-[#C5A028]">
                See the full private chef cost guide for Bali →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Menu Ideas */}
      <section className="bg-white px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
            Popular Wedding Menu Styles in Bali
          </h2>
          <p className="text-[#666] mb-8 text-base">
            Most Bali wedding couples choose one of four menu directions. Each suits a different setting and guest mix.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                style: 'Italian Fine Dining',
                desc: 'Multi-course Italian tasting menu: crudo, hand-made pasta, flame-grilled protein, tiramisu. Works beautifully in an open-sided villa. myCHEF\'s most-requested wedding format.',
                examples: ['Burrata with heirloom tomato', 'Hand-rolled pappardelle', 'Dry-aged beef tenderloin', 'Deconstructed tiramisu'],
              },
              {
                style: 'Modern Balinese-Indonesian',
                desc: 'Elevated Indonesian flavours: satay, rendang, fragrant rice dishes, and tropical desserts. A natural fit for couples who want Bali on the plate as well as the view.',
                examples: ['Prawn satay with peanut sauce', 'Duck leg slow-cooked in Balinese spices', 'Saffron coconut rice', 'Pandan coconut cake'],
              },
              {
                style: 'Western Contemporary',
                desc: 'French-technique cooking with Asian produce: seared scallops, confit duck, beef Wellington. Suits couples wanting a familiar fine-dining style with a tropical twist.',
                examples: ['Seared scallop with cauliflower purée', 'Beef Wellington for sharing', 'Chocolate fondant', 'Champagne sorbet'],
              },
              {
                style: 'Shared Feasting',
                desc: 'Family-style sharing tables: whole roasted proteins, large salads, bread, and mezze-style spreads. More relaxed than plated service; works well for ceremonies that carry into the dinner naturally.',
                examples: ['Whole roasted lamb', 'Grilled seafood platter', 'Seasonal mezze spread', 'Build-your-own dessert table'],
              },
            ].map((menu, i) => (
              <div key={i} className="border border-[#E8E4DC] rounded-lg p-6">
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{menu.style}</h3>
                <p className="text-[#666] text-sm mb-4">{menu.desc}</p>
                <ul className="space-y-1">
                  {menu.examples.map((ex, j) => (
                    <li key={j} className="text-xs text-[#888] flex items-center gap-2">
                      <span className="text-[#C5A028]">·</span> {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F9F6EF] px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8">
            Bali Wedding Catering: Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <details key={i} className="bg-white rounded-lg shadow-sm group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-[#1A1A1A] text-sm flex justify-between items-center gap-3 list-none">
                  {q}
                  <ChevronRight className="w-4 h-4 text-[#C5A028] flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-[#555] text-sm leading-relaxed">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-white px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Continue Reading</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                to: '/blog/private-chef-cost-bali',
                label: 'Private Chef Cost in Bali',
                desc: 'Full pricing guide: villa dinners, events, daily hire, and staffing.',
              },
              {
                to: '/blog/food-allergies-dietary-requirements-private-chef-bali',
                label: 'Food Allergies & Dietary Requirements',
                desc: 'How myCHEF handles allergies, intolerances, halal, vegan, and gluten-free.',
              },
              {
                to: '/events',
                label: 'Wedding & Event Catering',
                desc: 'Full overview of myCHEF event services for weddings, parties, and corporate events.',
              },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="block p-5 border border-[#E8E4DC] rounded-lg hover:border-[#C5A028] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-[#1A1A1A] text-sm mb-2">{link.label}</p>
                <p className="text-[#666] text-xs">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0A0A0A] text-white px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C5A028] text-[#C5A028]" />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Plan your Bali wedding catering with myCHEF
          </h2>
          <p className="text-[#CCC] mb-3 text-sm">
            500+ events catered · Guest-loved service · HACCP-certified chefs · Same-day WhatsApp response
          </p>
          <p className="text-[#999] mb-8 text-sm">
            Tell us your date, villa, and guest count — we'll confirm availability and send a concept overview within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black px-8 py-3 font-semibold hover:bg-[#D4AF37] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Start on WhatsApp
            </a>
            <Link
              to="/events"
              className="inline-flex items-center justify-center gap-2 border border-[#444] text-white px-8 py-3 font-semibold hover:border-[#C5A028] transition-colors"
            >
              View Event Catering
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
