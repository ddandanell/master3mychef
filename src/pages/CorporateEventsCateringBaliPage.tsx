import { Link } from 'react-router-dom'
import { ChevronRight, MessageCircle, CheckCircle, Users, Calendar, MapPin, Star } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import { PHONE } from '@/data/siteArchitecture'

const SITE = 'https://mychef.id'
const CANONICAL = `${SITE}/blog/corporate-events-catering-bali`

interface CaseStudy {
  id: string
  company: string
  industry: string
  location: string
  eventType: string
  guestCount: number
  duration: string
  budget: string
  challenge: string
  solution: string
  menu: string[]
  result: string
  quote: string
  quoteName: string
  rating: number
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'tech-retreat-canggu',
    company: 'European SaaS Company',
    industry: 'Technology',
    location: 'Canggu, Bali',
    eventType: 'Annual Team Retreat — 5 Days',
    guestCount: 38,
    duration: '5 days, full board',
    budget: 'IDR 187,000,000 total (~IDR 4.9M per person)',
    challenge:
      'A Berlin-based software company flew 38 employees to Bali for their annual offsite. With developers, designers, and product managers arriving from five countries, they needed a catering team that could handle varied dietary requirements (vegan, gluten-free, lactose-free, halal) across five days without the team having to think about food logistics at all. Restaurant bookings for 38 people during peak season had proven chaotic the previous year.',
    solution:
      'myCHEF assigned a dedicated retreat chef supported by a sous chef and three service staff for the full five days. We created a rotating daily menu agreed in advance, collected individual dietary information via a pre-retreat form, and managed all grocery sourcing, villa kitchen setup, and cleanup. The team ate three meals per day in the villa — breakfast from 7–9am, working lunch at 1pm sharp, and a social dinner each evening. Each dinner had a different theme (Balinese night, Mediterranean, Japanese inspired, BBQ, and a farewell feast).',
    menu: [
      'Day 1 Welcome: Satay platter, bumbu Bali grilled fish, tropical salads, rice',
      'Day 2 Mediterranean: Mezze spread, lamb kofta, roasted vegetables, hummus',
      'Day 3 Japanese-Inspired: Tuna tataki, miso-glazed salmon, edamame, mango rolls',
      'Day 4 Villa BBQ: Beef ribs, grilled prawns, corn, coleslaw, potato salad',
      'Day 5 Farewell Feast: 5-course plated dinner, wine service, dessert bar',
    ],
    result:
      'Zero food incidents. 100% of dietary requirements accommodated. The team rated catering 4.9/5 in their post-retreat survey. The company re-booked for the following year within two weeks of returning to Berlin.',
    quote:
      'We have done retreats in Portugal, Thailand, and Mexico. The myCHEF team in Bali was by far the most organised and capable we have worked with. Every meal was on time, the food was exceptional, and we never had to think about logistics. That is priceless on a working retreat.',
    quoteName: 'Head of People Operations, SaaS Company (Berlin)',
    rating: 5,
  },
  {
    id: 'bank-exec-dinner-seminyak',
    company: 'Singapore Private Bank',
    industry: 'Financial Services',
    location: 'Seminyak Villa, Bali',
    eventType: 'Client Entertainment Dinner — 1 Evening',
    guestCount: 22,
    duration: '4-hour plated dinner service',
    budget: 'IDR 66,000,000 total (~IDR 3M per person)',
    challenge:
      'A Singapore-headquartered private bank was hosting 22 high-net-worth clients for a relationship dinner during a Bali investment conference. The brief was clear: Michelin-calibre quality, discreet professional service, and a menu that would impress guests who regularly dine at the world\'s best restaurants. The venue — a private ocean-view villa in Seminyak — had a residential kitchen unsuited to full restaurant-style production. The bank\'s events team needed a caterer who could operate without any visible friction.',
    solution:
      'myCHEF assigned Executive Chef Adriano, supported by two sous chefs, four trained waiting staff, and a professional sommelier. We conducted a site visit 48 hours prior to assess the kitchen layout, set up a supplementary prep station on the villa terrace, and staged every course in advance. The 5-course menu incorporated both European fine dining techniques and Indonesian ingredients. Wine pairing was curated from an Indonesian wine list supplemented by two bottles of French Burgundy the client provided.',
    menu: [
      'Amuse-bouche: Tuna tartare, yuzu gel, crispy nori',
      'First: Burrata, heirloom tomato, basil oil, local sea salt',
      'Second: Seared scallops, butternut purée, crispy leek, truffle',
      'Main: Wagyu beef tenderloin, potato galette, mushroom jus, wilted spinach',
      'Dessert: Dark chocolate fondant, vanilla bean ice cream, gold leaf',
    ],
    result:
      'The evening ran to the minute with no visible service gaps. Three clients enquired about booking myCHEF for private villa dinners during their stay. The bank events team confirmed a repeat booking for the following year\'s conference within 10 days.',
    quote:
      'Genuinely world-class. Our clients are very demanding and the feedback was unanimous — the food and service matched or exceeded what they experience in Singapore\'s top restaurants. Chef Adriano was calm, professional, and the presentation was immaculate.',
    quoteName: 'Senior Events Manager, Singapore Private Bank',
    rating: 5,
  },
  {
    id: 'fashion-launch-uluwatu',
    company: 'European Fashion Label',
    industry: 'Luxury Retail',
    location: 'Uluwatu Clifftop Villa, Bali',
    eventType: 'Product Launch & Press Dinner — 1 Evening',
    guestCount: 74,
    duration: 'Cocktail hour (1.5h) + seated dinner (2.5h)',
    budget: 'IDR 222,000,000 total (~IDR 3M per person)',
    challenge:
      'A French fashion label was launching a new resort collection in Bali and needed a catering team to serve 74 press, buyers, and influencers across a cocktail hour and seated dinner at a spectacular clifftop location in Uluwatu. The logistical challenges were significant: the villa was 45 minutes from central Bali suppliers, the kitchen was compact, and the event required simultaneous canape pass service during cocktail hour followed by a plated four-course dinner with precise course timing tied to the brand presentation moments.',
    solution:
      'myCHEF deployed a team of 12: two chefs, three kitchen assistants, and seven front-of-house staff. We staged mise en place across two satellite prep stations set up 90 minutes before guests arrived. The cocktail canapes were designed to photograph well — part of the brief — with each item reflecting the collection\'s colour palette. The dinner service was choreographed to pause at three specific points for the brand presentation, coordinated directly between our service captain and the event producer.',
    menu: [
      'Cocktail: Coconut prawn skewers, tuna bruschetta, beetroot ricotta crostini, watermelon feta bites',
      'First: Lobster bisque, crème fraîche, micro herbs',
      'Second: Seared yellow fin tuna, mango salsa, avocado, sesame',
      'Main: Dry-aged duck breast, cherry reduction, dauphinoise potato, French beans',
      'Dessert: Mille-feuille, crème diplomat, fresh raspberries',
    ],
    result:
      'The event received coverage in Vogue Indonesia and Harper\'s Bazaar Indonesia, both of which photographed the canapes. Zero dietary incidents across 74 guests. The brand\'s global events director reached out to enquire about the following season\'s collection event in Bali.',
    quote:
      'We needed the food to be as beautiful as the setting and the collection. myCHEF delivered both. The canapes were works of art and the dinner service was perfectly timed around our presentation. Not a single complaint from 74 very discerning guests.',
    quoteName: 'Global Events Director, European Fashion Label',
    rating: 5,
  },
  {
    id: 'wellness-retreat-ubud',
    company: 'Global Wellness Platform',
    industry: 'Health & Wellness',
    location: 'Ubud Jungle Villa, Bali',
    eventType: 'Executive Wellness Retreat — 7 Days',
    guestCount: 24,
    duration: '7 days, full board, plant-based',
    budget: 'IDR 168,000,000 total (~IDR 7M per person)',
    challenge:
      'A health technology company brought 24 senior leaders to Ubud for a seven-day digital detox and leadership retreat. The brief was strict: 100% plant-based meals, no refined sugar, no alcohol, organic and locally sourced wherever possible, and meals that would genuinely energise rather than cause afternoon energy crashes. Several guests were trained nutritionists themselves — so there was no hiding low-quality ingredients behind presentation.',
    solution:
      'myCHEF assigned a specialist plant-based chef with Balinese and Indonesian cuisine expertise, supported by a nutritionist consultant who reviewed the week\'s menu plan before the retreat. We sourced directly from two organic farms in the Ubud highlands, arranged daily deliveries of fresh coconut, tropical fruits, and local vegetables, and designed a menu that rotated through different global cuisines — Balinese, Middle Eastern, Japanese, Mexican, Indian, Mediterranean — to avoid monotony over seven days. Meals were timed to support the daily schedule of yoga, meditation, and deep-work sessions.',
    menu: [
      'Breakfast (rotating): Açaí bowls, coconut porridge, tropical fruit plates, nasi goreng vegan, avocado on sourdough',
      'Lunch (rotating): Buddha bowls, Vietnamese rice paper rolls, Balinese gado-gado, mezze spread, massaman curry',
      'Dinner (rotating): Tempeh satay, jackfruit rendang, mushroom truffle pasta, miso-glazed tofu, cashew cream desserts',
      'Snacks: Fresh coconut, mixed nuts, Balinese jamu shots, raw energy balls',
    ],
    result:
      'Guest satisfaction score: 4.95/5 for food across the week. Multiple guests reported it was the best sustained plant-based eating experience of their lives. The retreat organiser hired myCHEF for two subsequent corporate wellness retreats within three months.',
    quote:
      'Our guests included doctors and nutritionists who would have immediately noticed if the food quality fell short. Not only did no one complain — several said it was the best week of eating they had experienced. The chef understood the nutritional brief as well as the culinary one.',
    quoteName: 'Chief People Officer, Global Wellness Platform',
    rating: 5,
  },
]

const PRICING_TABLE = [
  {
    type: 'Working Lunches & Coffee Breaks',
    guests: '10–50 guests',
    perPerson: 'from IDR 700K',
    includes: 'Chef, light menu, setup & cleanup',
  },
  {
    type: 'Executive Dinner (plated)',
    guests: '8–30 guests',
    perPerson: 'IDR 1.5M – 3.5M',
    includes: 'Head chef + sous chef, 4–5 courses, service staff, sommelier',
  },
  {
    type: 'Team Retreat (full board, per day)',
    guests: '15–60 guests',
    perPerson: 'IDR 900K – 2M / day',
    includes: '3 meals, dedicated chef team, all logistics',
  },
  {
    type: 'Product Launch / Brand Event',
    guests: '40–120 guests',
    perPerson: 'IDR 1.8M – 4M',
    includes: 'Cocktail canapes + seated dinner, full team, event coordination',
  },
  {
    type: 'Conference Catering (buffet)',
    guests: '50–200 guests',
    perPerson: 'IDR 700K – 900K',
    includes: 'Buffet stations, chefs, service crew, setup',
  },
]

const FAQS = [
  {
    q: 'How much does corporate event catering cost in Bali?',
    a: 'Corporate catering in Bali costs from IDR 700,000 per person for working lunches, IDR 900,000–2,000,000 per person per day for full-board retreats, and IDR 1,500,000–3,500,000+ per person for executive plated dinners. All prices vary by guest count, menu complexity, and event duration. We provide detailed quotes within 4 hours of your enquiry.',
  },
  {
    q: 'Can myCHEF handle large corporate events in Bali?',
    a: 'Yes. We regularly cater events from 10 to 200+ guests. For large events we deploy teams of 5–15 staff including head chefs, sous chefs, kitchen assistants, and trained front-of-house. We have catered product launches, conferences, and multi-day retreats across Bali simultaneously.',
  },
  {
    q: 'Do you provide NPWP-ready invoices for corporate clients?',
    a: 'Yes. myCHEF issues formal tax invoices compatible with Indonesian NPWP requirements. We can also structure pricing as nett or ++ depending on your company\'s procurement requirements. Contact us in advance to set up the correct billing format.',
  },
  {
    q: 'How far in advance should we book corporate catering in Bali?',
    a: 'For executive dinners and single-event catering, 1–2 weeks notice is sufficient for most dates. For multi-day retreats and large events (50+ guests), we recommend 4–8 weeks in advance, particularly during peak season (July–August and December). This allows time for menu planning, dietary collection, and supplier coordination.',
  },
  {
    q: 'Can you accommodate complex dietary requirements for corporate groups?',
    a: 'Yes. We handle vegan, vegetarian, gluten-free, dairy-free, halal, kosher, and medically restricted diets simultaneously. For corporate retreats we send guests a pre-event dietary form and build individual accommodations into the menu at no extra cost. Our chefs are trained to avoid cross-contamination for allergy-critical requirements.',
  },
  {
    q: 'Do you handle venue setup, AV coordination, and event logistics?',
    a: 'myCHEF handles all food and beverage logistics including kitchen setup, equipment, tableware, service, and cleanup. For larger events we coordinate timing with your AV or event production team. We do not provide AV equipment or venue decoration, but we work closely with your event team to ensure timing is seamless.',
  },
  {
    q: 'Can you provide a dedicated chef team for a multi-week company offsite?',
    a: 'Yes. For extended offsites (2+ weeks) we provide live-in or daily-visit chef arrangements with full meal planning support. This is particularly popular for tech companies running sprint retreats and wellness companies running leadership programmes.',
  },
  {
    q: 'What locations in Bali do you serve for corporate events?',
    a: 'We serve all major Bali locations including Seminyak, Canggu, Uluwatu, Ubud, Jimbaran, Sanur, Nusa Dua, Pererenan, and the Bukit Peninsula. For remote locations we coordinate ingredient logistics in advance and may apply a travel supplement depending on distance.',
  },
]

const WA_MSG = encodeURIComponent(
  'Hi myCHEF! I\'d like to enquire about corporate event catering in Bali. Can you send me a quote?'
)

export default function CorporateEventsCateringBaliPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Corporate Event Catering in Bali: 4 Real Case Studies (2025)',
    description:
      'How myCHEF handled a 38-person tech retreat, a Singapore bank client dinner, a fashion label product launch, and a 7-day wellness retreat in Bali. Real costs, menus, and outcomes.',
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
    datePublished: '2025-03-01',
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
        title="Corporate Event Catering Bali 2026 | Case Studies | myCHEF"
        description="Real corporate catering case studies from Bali: tech retreat (38, 5 days), bank exec dinner (22), fashion launch (74), wellness retreat (24, 7 days)."
        canonical={CANONICAL}
        ogType="article"
        ogImage="/og-image.webp"
        jsonLd={[
          localBizWithRating,
          articleSchema,
          breadcrumbSchema('Corporate Events Catering Bali', CANONICAL, 'Blog', `${SITE}/blog`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-white/55 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#C5A028] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-[#C5A028] transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-white/60">Corporate Events Catering Bali</span>
          </nav>

          <div className="mb-4">
            <span className="text-[#C5A028] text-xs uppercase tracking-[2px] font-semibold">
              Corporate Catering · Case Studies 2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Corporate Event Catering in Bali:<br className="hidden md:block" /> 4 Real Case Studies
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            From a 38-person tech retreat in Canggu to a 74-guest fashion launch in Uluwatu — how myCHEF
            handles corporate events in Bali from IDR 700K to 4M per person.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              data-source="corporate-events-cta"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold px-6 py-3 rounded hover:bg-[#B08F20] transition-colors text-sm uppercase tracking-wider"
            >
              <MessageCircle size={16} />
              Request a Corporate Quote
            </a>
            <Link
              to="/events/corporate-events"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded hover:border-white/40 transition-colors text-sm uppercase tracking-wider"
            >
              View Corporate Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Corporate Events', value: '120+' },
              { label: 'Average Rating', value: '4.9★' },
              { label: 'Max Group Size', value: '200+' },
              { label: 'Countries Served', value: '30+' },
            ].map((s) => (
              <div key={s.label} className="border-t border-white/10 pt-4">
                <div className="text-2xl font-light text-[#C5A028]">{s.value}</div>
                <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-light mb-4">Real Corporate Events We Have Catered</h2>
        <p className="text-[#555] leading-relaxed mb-12 max-w-2xl">
          Every corporate event is different. Below are four real engagements — anonymised at client
          request — showing how we adapt to different industries, group sizes, and expectations.
        </p>

        <div className="space-y-16">
          {CASE_STUDIES.map((cs, i) => (
            <article key={cs.id} className="border border-[#E0DDD6] rounded-xl overflow-hidden">
              {/* Case study header */}
              <div className="bg-[#0D0D0D] text-white px-8 py-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-[#C5A028] text-xs uppercase tracking-[2px] font-semibold">
                      Case Study #{i + 1}
                    </span>
                    <h3 className="text-2xl font-light mt-2">{cs.eventType}</h3>
                    <p className="text-white/50 mt-1">{cs.company} · {cs.industry}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#C5A028]">
                    {Array.from({ length: cs.rating }).map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/50">
                  <span className="flex items-center gap-1.5"><MapPin size={13} />{cs.location}</span>
                  <span className="flex items-center gap-1.5"><Users size={13} />{cs.guestCount} guests</span>
                  <span className="flex items-center gap-1.5"><Calendar size={13} />{cs.duration}</span>
                </div>
              </div>

              <div className="px-8 py-8 space-y-8">
                {/* Budget callout */}
                <div className="bg-[#F5F2EA] rounded-lg px-6 py-4">
                  <span className="text-xs uppercase tracking-wider text-[#888] font-semibold">Total Investment</span>
                  <p className="text-xl font-light mt-1 text-[#1A1A1A]">{cs.budget}</p>
                </div>

                {/* Challenge */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#888] font-semibold mb-3">The Challenge</h4>
                  <p className="text-[#444] leading-relaxed">{cs.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#888] font-semibold mb-3">Our Approach</h4>
                  <p className="text-[#444] leading-relaxed">{cs.solution}</p>
                </div>

                {/* Menu */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#888] font-semibold mb-3">Menu Highlights</h4>
                  <ul className="space-y-2">
                    {cs.menu.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#444]">
                        <CheckCircle size={15} className="text-[#C5A028] mt-0.5 shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#888] font-semibold mb-3">Outcome</h4>
                  <p className="text-[#444] leading-relaxed">{cs.result}</p>
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-[#C5A028] pl-6">
                  <p className="text-[#333] italic leading-relaxed">"{cs.quote}"</p>
                  <footer className="mt-3 text-sm text-[#888]">— {cs.quoteName}</footer>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#0D0D0D] text-white py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-light">Planning a corporate event in Bali?</h2>
            <p className="text-white/50 mt-1">We respond to corporate enquiries within 4 hours, 7 days a week.</p>
          </div>
          <a
            href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold px-6 py-3 rounded hover:bg-[#B08F20] transition-colors text-sm uppercase tracking-wider"
          >
            <MessageCircle size={16} />
            Get a Quote
          </a>
        </div>
      </section>

      {/* Pricing table */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-light mb-4">Corporate Catering Prices in Bali (2026)</h2>
        <p className="text-[#555] leading-relaxed mb-8 max-w-2xl">
          All prices are per person and exclude 11% government tax and 10% service charge unless stated.
          Multi-day bookings and repeat clients receive preferential pricing.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[#E0DDD6]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0D0D0D] text-white">
                <th className="text-left px-6 py-4 font-medium text-xs uppercase tracking-wider">Event Type</th>
                <th className="text-left px-6 py-4 font-medium text-xs uppercase tracking-wider">Group Size</th>
                <th className="text-left px-6 py-4 font-medium text-xs uppercase tracking-wider">Per Person</th>
                <th className="text-left px-6 py-4 font-medium text-xs uppercase tracking-wider hidden md:table-cell">What's Included</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_TABLE.map((row, i) => (
                <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F3]'}>
                  <td className="px-6 py-4 font-medium text-[#1A1A1A]">{row.type}</td>
                  <td className="px-6 py-4 text-[#555]">{row.guests}</td>
                  <td className="px-6 py-4 text-[#C5A028] font-semibold">{row.perPerson}</td>
                  <td className="px-6 py-4 text-[#555] hidden md:table-cell">{row.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#999] mt-4">
          * Prices are guidelines based on typical engagements. Actual quotes vary by location, menu, and staffing requirements.{' '}
          <a
            href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A028] underline"
          >
            Contact us for a detailed proposal.
          </a>
        </p>
      </section>

      {/* Why myCHEF for Corporate */}
      <section className="bg-[#0D0D0D] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-10">Why Companies Choose myCHEF for Bali Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Dedicated Event Coordinators',
                desc: 'Every corporate booking has a named coordinator who manages communication from first enquiry through to post-event feedback. No handoffs, no lost context.',
              },
              {
                title: 'NPWP-Compliant Invoicing',
                desc: 'We issue formal tax invoices compatible with Indonesian and international accounting requirements. Nett or ++ pricing available depending on your procurement setup.',
              },
              {
                title: 'Dietary Complexity at Scale',
                desc: 'We handle vegan, gluten-free, halal, kosher, and medically restricted diets simultaneously across large groups. Our pre-event dietary form system ensures zero incidents.',
              },
              {
                title: 'Chef Teams, Not Single Chefs',
                desc: 'Every event is staffed with a full kitchen team — head chef, sous chefs, kitchen assistants. You get restaurant-quality production regardless of group size.',
              },
              {
                title: 'Timing Choreography',
                desc: 'We coordinate course timing with your event schedule, AV team, and speakers. Meals land on time without interrupting presentations or disrupting flow.',
              },
              {
                title: 'Fully Insured Operations',
                desc: 'myCHEF carries full commercial liability insurance. We can provide certificates of insurance on request for corporate procurement requirements.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle size={20} className="text-[#C5A028] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-light mb-10">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {FAQS.map((faq) => (
            <div key={faq.q} className="border-b border-[#E0DDD6] pb-8 last:border-0 last:pb-0">
              <h3 className="font-semibold text-[#1A1A1A] mb-3">{faq.q}</h3>
              <p className="text-[#555] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related pages */}
      <section className="bg-[#F5F2EA] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Corporate Case Studies', href: '/corporate-case-studies', desc: 'Real budgets, headcounts & outcomes' },
              { label: 'Corporate Events', href: '/events/corporate-events', desc: 'Full corporate event service' },
              { label: 'Events Retreats', href: '/events/retreats', desc: 'Multi-day retreat catering' },
              { label: 'Private Chef Cost', href: '/blog/private-chef-cost-bali', desc: 'Pricing guide for all events' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="bg-white border border-[#E0DDD6] rounded-lg p-5 hover:border-[#C5A028] transition-colors group"
              >
                <div className="font-semibold text-[#1A1A1A] group-hover:text-[#C5A028] transition-colors">
                  {link.label}
                </div>
                <div className="text-sm text-[#888] mt-1">{link.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0D0D0D] text-white py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-4">Ready to Plan Your Corporate Event?</h2>
          <p className="text-white/50 leading-relaxed mb-8">
            Send us your event brief — group size, dates, location, and objectives — and we will respond
            with a detailed proposal within 4 hours. No commitment required.
          </p>
          <a
            href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold px-8 py-4 rounded hover:bg-[#B08F20] transition-colors uppercase tracking-wider"
          >
            <MessageCircle size={18} />
            Send Your Corporate Brief
          </a>
          <p className="text-white/55 text-sm mt-4">Responds within 4 hours · Available 7 days a week</p>
        </div>
      </section>
    </div>
  )
}
