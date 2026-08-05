import { Link } from 'react-router-dom'
import { ChevronRight, MessageCircle, CheckCircle, XCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import { PHONE } from '@/data/siteArchitecture'

const SITE = 'https://mychef.id'
const CANONICAL = `${SITE}/blog/private-chef-vs-restaurant-bali`

const COMPARISON_ROWS = [
  {
    factor: 'Cost (8+ guests)',
    privateChef: 'from IDR 700K/person++',
    restaurant: 'IDR 300K–700K + 21% tax + transfers + drinks',
    winner: 'chef' as const,
  },
  {
    factor: 'Menu Control',
    privateChef: 'Fully custom around your group',
    restaurant: 'Fixed menu, limited substitutions',
    winner: 'chef' as const,
  },
  {
    factor: 'Dietary Restrictions',
    privateChef: 'Built into the menu from the start',
    restaurant: 'Per-dish accommodation, often imperfect',
    winner: 'chef' as const,
  },
  {
    factor: 'Booking Lead Time',
    privateChef: '24–48 hours',
    restaurant: '1–2 weeks for large tables',
    winner: 'chef' as const,
  },
  {
    factor: 'Logistics (8+ guests)',
    privateChef: 'Chef comes to you — zero transport',
    restaurant: '2+ vehicles, coordination overhead',
    winner: 'chef' as const,
  },
  {
    factor: 'Drinks Cost',
    privateChef: 'Your own drinks at retail price',
    restaurant: '3–5× markup on wine list',
    winner: 'chef' as const,
  },
  {
    factor: 'Atmosphere',
    privateChef: 'Your villa, your playlist, your pace',
    restaurant: 'Social scene, buzz, other guests',
    winner: 'tie' as const,
  },
  {
    factor: 'Casual couple dinner',
    privateChef: 'Slightly higher overhead for 2 people',
    restaurant: 'Easier and more economical for 2',
    winner: 'restaurant' as const,
  },
]

const FAQS = [
  { q: 'How much is a private chef in Bali per day?', a: 'Daily private chef rates are published by meal count with weekly/monthly discounts. <a href="/private-chef-bali">Private chef Bali</a>.' },
  { q: 'Are groceries included?', a: 'Shopping work is included; food is billed at cost with receipts on daily hire.' },
  { q: 'What is Chef Rotation?', a: 'On 7+ day bookings you can request different specialist chefs by day at no extra day-rate charge.' },
  { q: 'Can the chef cook in our villa kitchen?', a: 'Yes — standard villa kitchens work; we bring specialised tools when needed.' },
  { q: 'Is this cheaper than restaurants for groups?', a: 'For six+ people on two meals/day, the day rate split often beats mid-range restaurant totals plus taxis.' },
  { q: 'Can I request a specific chef?', a: 'Yes for multi-day stays when available. Meet the team: <a href="/chefs">chefs</a>.' },
  { q: 'Fine dining vs daily chef?', a: 'Fine dining is multi-course event pricing; daily chef is meal-count day rates. <a href="/fine-dining">Fine dining</a>.' },
  { q: 'Do you cover my area?', a: 'Island-wide. <a href="/locations">Locations</a>.' },
  { q: 'Kids menus with daily chef?', a: 'Yes — <a href="/kids-menus">kids menus</a> and parallel adult meals.' },
  { q: 'Live-in vs daily chef?', a: 'Live-in is long-term placement (<a href="/staffing/live-in-chef">live-in chef</a>); daily is holiday day-rate hire.' },
  { q: 'Payment methods?', a: 'Bank transfer and major cards; deposit then balance as quoted.' },
  { q: 'Last-minute private chef?', a: 'Often possible outside peak — WhatsApp availability.' },
  { q: 'How do I book this with myCHEF in Bali?', a: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { q: 'Where can I see prices?', a: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { q: 'Is service available island-wide?', a: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { q: 'Can you handle dietary requirements?', a: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { q: 'What is included vs extra?', a: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { q: 'Deposit and cancellation?', a: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { q: 'How fast is a proposal?', a: 'Often within 2–24 hours of a complete brief.' },
  { q: 'Can this combine with other services?', a: 'Yes — chef, catering, staff and transport can stack in one plan.' },
]

const WA_MSG = encodeURIComponent('Hi myCHEF! I\'d like to get a quote for a private chef in Bali. Can you help?')

export default function PrivateChefVsRestaurantPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Private Chef vs Restaurant Bali: Which Is Actually Better for Groups?',
    description: 'Private chef or restaurant in Bali? Full cost comparison, menu control, and comfort breakdown for groups, families, and villa stays.',
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
    datePublished: '2026-03-05',
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
        title="Private Chef vs Restaurant Bali: Which Is Better for Groups? — myCHEF"
        description="Private chef or restaurant in Bali? Full cost comparison, menu control, and comfort breakdown for groups, families, and villa stays. Find out which wins."
        canonical={CANONICAL}
        ogType="article"
        ogImage="/generated/mychef-location-bali-hub-hero.webp"
        jsonLd={[
          localBizWithRating,
          articleSchema,
          breadcrumbSchema('Private Chef vs Restaurant Bali', CANONICAL, 'Blog', `${SITE}/blog`),
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
            <span className="text-white/60">Private Chef vs Restaurant Bali</span>
          </nav>

          <div className="mb-4">
            <span className="text-[#C5A028] text-xs uppercase tracking-[2px] font-semibold">Comparison Guide · Groups & Villa Stays</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Private Chef vs Restaurant Bali: Which Is Actually Better for Groups?
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            You have the villa. You have the guests. Now you have a decision. We compare both options on cost, menu control, logistics, and experience — honestly.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold px-6 py-3 rounded hover:bg-[#B08F20] transition-colors text-sm uppercase tracking-wider"
            >
              <MessageCircle size={16} />
              Get a Chef Quote in 2 Hours
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded hover:border-[#C5A028] hover:text-[#C5A028] transition-colors text-sm uppercase tracking-wider"
            >
              See Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer Banner */}
      <section className="bg-[#C5A028] text-[#1A1A1A] py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg font-medium">
            <strong>Short answer:</strong> For groups of 6+, private chef wins on cost, logistics, and experience. For 2–3 people wanting a casual night out, the restaurant wins. For families with children, private chef — every time.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        <p className="text-lg leading-relaxed text-[#444] mb-8">
          You have the villa. You have the guests. Now you have a decision: do you book a restaurant, or do you hire a private chef? For short stays in Bali this question usually resolves itself. But for groups of six or more, for families with young children, for anyone staying more than three nights, or for anyone who booked the villa <em>specifically</em> because they wanted to stay in it — the honest answer is almost always the private chef.
        </p>

        <p className="text-base leading-relaxed text-[#444] mb-10">
          This article compares both options on the factors that actually matter: total cost, menu control, logistics, comfort, and the actual experience at the table. We run a private chef service, so we are not neutral — but the comparison will be fair, because overconfident claims lose clients and honest ones keep them.
        </p>

        {/* Comparison Table */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-[#E8E4DC]">
            <table className="w-full text-sm">
              <thead className="bg-[#1A1A1A] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Factor</th>
                  <th className="text-left px-4 py-3 font-medium">Private Chef</th>
                  <th className="text-left px-4 py-3 font-medium">Restaurant</th>
                  <th className="text-center px-4 py-3 font-medium">Winner</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F3EE]'}>
                    <td className="px-4 py-3 font-medium text-[#1A1A1A]">{row.factor}</td>
                    <td className="px-4 py-3 text-[#444]">{row.privateChef}</td>
                    <td className="px-4 py-3 text-[#444]">{row.restaurant}</td>
                    <td className="px-4 py-3 text-center">
                      {row.winner === 'chef' && <span className="text-[#C5A028] font-semibold text-xs uppercase tracking-wider">Chef ✓</span>}
                      {row.winner === 'restaurant' && <span className="text-[#666] font-semibold text-xs uppercase tracking-wider">Restaurant ✓</span>}
                      {row.winner === 'tie' && <span className="text-[#888] text-xs">Tie</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1: Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">The Cost Question: Private Chef Is Not Always More Expensive</h2>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            The biggest misconception about private chef dining in Bali is that it is dramatically more expensive than going to a restaurant. For two people eating at a mid-range restaurant, that might be true. For a group of eight or more eating at a quality restaurant, the numbers are much closer than people expect — and the private chef often wins on value.
          </p>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            Here is why. Restaurant pricing in Bali at any establishment worth booking for a special evening runs IDR 300K–700K per person for food, before service charge and tax. Once you add 21% combined service and tax, drinks, transfers to and from the villa, and any surprises (corking fees, minimum spends, table charges for large groups), a dinner for ten at a well-regarded Seminyak or Ubud restaurant easily reaches IDR 8M–12M total.
          </p>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            A private chef dinner for ten through <Link to="/pricing" className="text-[#C5A028] hover:underline font-medium">myCHEF's pricing structure</Link> runs from IDR 700K per person for food, which includes the chef, a dedicated server, all ingredients, setup, and full cleanup. The same group pays IDR 7M total — with a chef cooking specifically for them, in their own villa, with no restaurant noise, no table restrictions, and no minimum spend.
          </p>
          <div className="bg-[#F5F3EE] rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-[#1A1A1A] mb-3">The calculation shifts further toward private chef when you add:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-[#C5A028] mt-0.5 shrink-0" />
                <div><strong>Transfer costs:</strong> Getting 8–12 people to and from a restaurant requires 2 vehicles. Add IDR 150K–300K per transfer, twice, and the logistical cost alone is IDR 300K–600K before anyone orders a drink.</div>
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-[#C5A028] mt-0.5 shrink-0" />
                <div><strong>Children and dietary restrictions:</strong> Restaurant menus are fixed. Substitutions are often refused or handled poorly. A private chef rebuilds the menu around your group — no extra charge.</div>
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-[#C5A028] mt-0.5 shrink-0" />
                <div><strong>Drinks margin:</strong> A bottle of wine that costs IDR 150K at a local merchant goes for IDR 450K–700K on a restaurant list. At your villa, drinks stay at retail cost.</div>
              </li>
            </ul>
          </div>
          <p className="text-base leading-relaxed text-[#444]">
            For groups of four or fewer having a casual dinner, a restaurant often makes more sense. For groups of six and above where the dinner is an occasion — the private chef wins on value in the vast majority of cases.
          </p>
        </section>

        {/* Section 2: Menu Control */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Menu Control: The Clearest Advantage of a Private Chef</h2>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            Restaurants offer a menu. A private chef offers <em>your</em> menu. That sentence understates the difference dramatically.
          </p>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            When you work with a private chef in Bali, you discuss what you want to eat, what you do not want, what dietary restrictions exist in the group, what the children will accept, whether anyone keeps halal, and whether there are strong preferences toward Indonesian cuisine, European cuisine, seafood, or meat. The chef then builds a menu around those inputs. It arrives as a proposal, you adjust it, and you approve it before anyone picks up a knife.
          </p>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            Contrast this with a restaurant. Even the best restaurants in Bali offer a fixed menu where the kitchen makes the decisions. Substitutions are possible but often begrudging. For groups with complex dietary needs — and most groups of eight or more have at least one — the restaurant experience becomes a negotiation, and usually a losing one.
          </p>
          <p className="text-base leading-relaxed text-[#444]">
            For villa stays longer than two nights, menu control compounds. A private chef can plan the full stay as a culinary arc: a relaxed Indonesian welcome dinner, a long multi-course evening on night three, a breakfast-and-brunch focus on the rest day, a celebratory final night. No restaurant can do this for you.
          </p>
        </section>

        {/* Section 3: Comfort */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Comfort and Atmosphere: Home Court Advantage</h2>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            Most people who rent a villa in Bali do so specifically because they want the villa experience. They want the pool, the terrace, the open-air dining space, the quiet. Every time you leave for a restaurant, you are temporarily defeating the purpose of the villa.
          </p>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            Private chef dining keeps the group at home. The chef arrives, sets up invisibly, cooks, and serves. Guests sit at their own table, in their own space, at whatever time suits them. Children can leave the table when they need to. Music is your playlist. Conversations are private. The meal ends when you decide it does, not when the restaurant needs to turn the table.
          </p>
          <div className="bg-[#F5F3EE] rounded-xl p-6">
            <h3 className="font-semibold text-[#1A1A1A] mb-3">This matters particularly for:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-[#C5A028] mt-0.5 shrink-0" />
                <div><strong>Families with young children:</strong> Restaurant logistics with children are complicated. Private chef dining at the villa removes the travel, the waiting, the noise stress, and the rush to leave.</div>
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-[#C5A028] mt-0.5 shrink-0" />
                <div><strong>Celebration dinners:</strong> Anniversaries, birthdays, and proposals are diminished in a crowded restaurant. At the villa, the entire team is focused on you.</div>
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-[#C5A028] mt-0.5 shrink-0" />
                <div><strong>Multi-day retreats and corporate groups:</strong> Three villa meals a day with a private chef is dramatically more efficient than three restaurant bookings with transfer coordination.</div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: When Restaurants Win */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">The Cases Where a Restaurant Is the Right Choice</h2>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            Honest comparison requires acknowledging where restaurants are the better option.
          </p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <XCircle size={18} className="text-[#888] mt-1 shrink-0" />
              <div>
                <strong className="text-[#1A1A1A]">Two people, one night, casual meal:</strong>
                <p className="text-[#444] text-sm mt-1">If you are a couple wanting a relaxed evening out, a good Canggu or Seminyak restaurant offers something a private chef cannot replicate — the atmosphere, the other guests, the buzz. Sometimes you want to go out.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <XCircle size={18} className="text-[#888] mt-1 shrink-0" />
              <div>
                <strong className="text-[#1A1A1A]">Wanting to experience a specific chef or cuisine:</strong>
                <p className="text-[#444] text-sm mt-1">Bali has world-class restaurants. If you specifically want to eat at a particular establishment because of its reputation, a private chef cannot substitute for that experience.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <XCircle size={18} className="text-[#888] mt-1 shrink-0" />
              <div>
                <strong className="text-[#1A1A1A]">Large group wanting a party atmosphere:</strong>
                <p className="text-[#444] text-sm mt-1">If the purpose of the evening is social and you want to be around other people, a lively restaurant or beach club serves a function a private villa dinner does not.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <XCircle size={18} className="text-[#888] mt-1 shrink-0" />
              <div>
                <strong className="text-[#1A1A1A]">Very short stays (one night only):</strong>
                <p className="text-[#444] text-sm mt-1">For a single overnight, the logistical advantage of a private chef diminishes. For one meal, go out and enjoy it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Logistics */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">The Logistics Question</h2>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            Booking a good restaurant for eight or more people in Bali is not always straightforward. Popular establishments in Seminyak, Canggu, and Ubud are heavily booked — lead times of one to two weeks are common for larger tables. Arrival-day reservations for groups of twelve are frequently unavailable at anywhere worth going.
          </p>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            Private chef booking through myCHEF operates on a 24–48 hour lead time for most dates and group sizes. You message us on WhatsApp with your date, villa, guest count, and preferences. We respond with a menu proposal within two hours. You review, adjust, approve, and the chef arrives at your villa with everything needed. No reservation management, no confirmation chase, no group transfer coordination.
          </p>
          <p className="text-base leading-relaxed text-[#444]">
            For groups arriving jet-lagged after long flights, the first-night dinner is the hardest to organize. A private chef handles the first night cleanly, lets everyone decompress at the villa, and sets a tone of ease for the rest of the stay.
          </p>
        </section>

        {/* Section 6: Quality */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Quality at the Table</h2>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            A restaurant delivers its standard. The best restaurants in Bali deliver impressive food in well-designed spaces. But they are operating at volume — multiple tables, complex service, a kitchen running thirty dishes simultaneously. Your table gets its share of attention, but it is one of many.
          </p>
          <p className="text-base leading-relaxed text-[#444] mb-4">
            A private chef dinner at a villa delivers singular attention. One chef for your group. One server. A menu designed around your preferences. An arrival timed to your rhythm. Our chefs are Indonesian professionals trained to international standards who understand how to read a table — when to be present, when to step back, when to explain a dish and when to let the food speak for itself.
          </p>
          <p className="text-base leading-relaxed text-[#444]">
            The consistent feedback from guests who have done both on the same trip is that the private chef dinner becomes the meal they remember. The restaurant becomes "that place we went one night." Both have their role. But when the dinner is meant to be an occasion, private chef wins on experience consistently.
          </p>
        </section>

        {/* Decision Framework */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Our Recommendation: How to Decide</h2>
          <div className="space-y-3">
            {[
              { group: 'Group of 2–3, casual meal, one night', rec: 'Restaurant is probably right.' },
              { group: 'Group of 4–6, occasion dinner, villa stay', rec: 'Private chef is competitive on cost and superior on experience.' },
              { group: 'Group of 7+, any meal, any purpose', rec: 'Private chef almost always wins on cost, logistics, and experience combined.' },
              { group: 'Families with children', rec: 'Private chef wins regardless of group size. The logistics comparison is not close.' },
              { group: 'Multi-night stays', rec: 'Private chef at least 2–3 nights. Mix in one restaurant visit for variety.' },
              { group: 'Celebrations (anniversary, birthday, proposal)', rec: 'Private chef. Every time.' },
            ].map((row, i) => (
              <div key={i} className="flex gap-4 p-4 bg-white rounded-lg border border-[#E8E4DC]">
                <div className="w-2 h-2 rounded-full bg-[#C5A028] mt-2 shrink-0" />
                <div>
                  <div className="font-medium text-[#1A1A1A] text-sm">{row.group}</div>
                  <div className="text-[#444] text-sm mt-0.5">{row.rec}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-light mb-3">Still Undecided? Get a Quote First</h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Send us your date, villa location, guest count, and what you are thinking of eating. We will send you a menu proposal and a price within two hours — compare it against what booking a comparable restaurant would cost.
          </p>
          <a
            href={`https://wa.me/${PHONE.digits}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold px-8 py-4 rounded hover:bg-[#B08F20] transition-colors text-sm uppercase tracking-wider"
          >
            <MessageCircle size={18} />
            WhatsApp Us — Quote in 2 Hours
          </a>
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-[#E8E4DC] pb-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{faq.q}</h3>
                <p className="text-[#444] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-[#E8E4DC] pt-10">
          <h3 className="font-semibold text-[#1A1A1A] mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/blog/private-chef-cost-bali" className="p-4 bg-white rounded-lg border border-[#E8E4DC] hover:border-[#C5A028] transition-colors">
              <div className="text-xs text-[#C5A028] uppercase tracking-wider mb-1">Pricing</div>
              <div className="font-medium text-[#1A1A1A]">How Much Does a Private Chef Cost in Bali?</div>
            </Link>
            <Link to="/pricing" className="p-4 bg-white rounded-lg border border-[#E8E4DC] hover:border-[#C5A028] transition-colors">
              <div className="text-xs text-[#C5A028] uppercase tracking-wider mb-1">Guide</div>
              <div className="font-medium text-[#1A1A1A]">Full myCHEF Pricing Guide</div>
            </Link>
            <Link to="/chefs" className="p-4 bg-white rounded-lg border border-[#E8E4DC] hover:border-[#C5A028] transition-colors">
              <div className="text-xs text-[#C5A028] uppercase tracking-wider mb-1">Our Team</div>
              <div className="font-medium text-[#1A1A1A]">Meet Our Indonesian Chef Team</div>
            </Link>
            <Link to="/locations/seminyak" className="p-4 bg-white rounded-lg border border-[#E8E4DC] hover:border-[#C5A028] transition-colors">
              <div className="text-xs text-[#C5A028] uppercase tracking-wider mb-1">Location</div>
              <div className="font-medium text-[#1A1A1A]">Private Chef Seminyak</div>
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
