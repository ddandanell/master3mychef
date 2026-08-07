import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { TrendingDown, Users, Calendar, ChefHat } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'The Reality of Bali Wedding Catering Costs',
    title: 'Why Catering Is Your Biggest Wedding Budget Line Item',
    body: `<p>Catering is typically the single largest line item in a Bali wedding budget — accounting for 30–40% of total spend at most villa weddings. Yet it's also the element guests remember most viscerally. They may forget the exact floral arrangement, but they will never forget a dish that moved them, or a service team that made them feel like the evening was designed entirely for them.</p>

    <p>Despite this, catering remains the most opaque category in wedding planning. Most couples arrive in Bali with no reliable sense of what "catering for 40 guests" actually costs. They get quotes that vary by 300% with no clear explanation. They sign contracts that look affordable until the service charge, equipment rental, overtime, and late-night snack items arrive as line items on the final invoice.</p>

    <p>This guide cuts through that opacity with real 2026 numbers sourced from our own pricing and from comparable private chef caterers operating in Bali. It covers every cost tier from budget buffet to ultra-luxury tasting menus, explains every component that goes into the per-person figure, identifies the hidden extras that routinely inflate budgets by 20–30%, and shows where you can save without diminishing the experience that matters most to your guests.</p>

    <p>Whether you're planning an intimate villa ceremony for 20 or a full celebration for 80, the goal of this guide is to make you a confident, well-informed buyer — so the catering budget conversation with your wedding planner and chef team is grounded in reality, not guesswork.</p>`,
  },
  {
    id: 'price-breakdown',
    type: 'content' as const,
    subtitle: '2026 Price Ranges',
    title: 'Bali Wedding Catering Cost Per Head: Full Breakdown',
    body: `<p>The following ranges reflect food-only costs per person in IDR (Indonesian Rupiah). Beverages and alcohol are treated separately — see the note at the end of this section. <strong>++ means tax + service</strong> on myCHEF proposals.</p>

    <p><strong>Market budget caterers (third-party market, not myCHEF): IDR 350K–500K per person</strong></p>
    <p>This band describes <em>other</em> budget-oriented caterers you may encounter in Bali — not myCHEF packages. At this market tier you're typically looking at a simple buffet format — shared platters, 3–4 dishes, designed for larger receptions where cost management is the priority. What's often included: a cook team, food and ingredients, basic serving staff, and disposable or hire crockery. What's usually not: linen, proper glassware, a dedicated service brigade, equipment rental, or table styling. Useful context for comparisons; it is not the catering myCHEF delivers for villa weddings.</p>

    <p><strong>myCHEF intimate / professional villa formats: from ~IDR 700K++ per person</strong></p>
    <p>myCHEF wedding catering floors start around <strong>IDR 700K++ per person</strong> for intimate villa dinners and professional villa food formats (plated courses or well-staffed buffet, dedicated head chef, service ratio about one server per 8–10 guests, real crockery/linen either included or as a clear add-on). Many villa food formats land in a planning band of roughly <strong>IDR 700K–1.5M++ per person</strong> depending on menu complexity, proteins, headcount and whether setup/breakdown staffing is bundled. This is the entry professional band for micro-weddings and smaller seated celebrations — not a claim that every full reception is only IDR 700–800K.</p>

    <p><strong>myCHEF full reception production: often IDR 1.5M–3M++ per person</strong></p>
    <p>Full wedding receptions — larger guest lists, kitchen brigade, synchronised plated or multi-station service, tasting-led menus, butler-level floor coverage — commonly land around <strong>IDR 1.5M–3M++ per person</strong>. At this level you get production depth: composed multi-course or station service, simultaneous plating capacity, fine serviceware where specified, and a team sized for the run-of-show. Premium protein, wine-service support and multi-station layouts push toward the upper end of the band. Written proposals are authoritative for your guest count.</p>

    <p><strong>Ultra-luxury / destination showpiece: IDR 3M++ per person and above</strong></p>
    <p>World-class chef teams, multi-session menu development, curated pairings, live stations, butlers at every table, and minute-by-minute service choreography. Typically best for tighter guest lists (often 20–40) where intimacy of scale allows true luxury execution. Larger receptions can reach this band only with an exceptionally large F&amp;B budget.</p>

    <p><strong>Note on beverages and alcohol:</strong> The ranges above cover food only. Soft beverage packages typically add IDR 100K–150K per person. myCHEF cocktail / free-flow packages start from <strong>IDR 500K++ per guest (minimum 10)</strong>. If you want wine, spirits or cocktails managed by the caterer more broadly, budget roughly IDR 200K–500K+ per person on top of food depending on quality and service hours — confirm on the written proposal.</p>`,
  },
  {
    id: 'hidden-costs',
    type: 'content' as const,
    subtitle: 'Budget Protection',
    title: 'Hidden Costs Most Couples Don\'t Budget For',
    body: `<p>The per-person food price is rarely the final number. These are the items that routinely appear as surprises on wedding catering invoices — budget for them from the start and you won't be blindsided.</p>

    <p><strong>Service charge (10–15% of total):</strong> Many caterers in Bali add a service charge on top of the quoted per-person price. On a 60-person wedding at IDR 700K/person (total IDR 42M), a 15% service charge adds IDR 6.3M. myCHEF includes service charge in our quoted prices — what we quote is what you pay.</p>

    <p><strong>Overtime charges:</strong> Most catering contracts specify a service period — typically 4–6 hours from setup to breakdown. If dinner runs late, speeches overrun, or the dancing extends the evening, hourly chef and staff overtime applies. Rates vary but budget IDR 500K–1M per hour per chef, plus staff overtime. The fix: build a buffer into your timeline and confirm the overtime rate before signing.</p>

    <p><strong>Equipment rental:</strong> Chafing dishes, serving stands, linen, charger plates, lighting for food stations, ice bins, glassware racks. Some caterers include this in their package pricing; many do not. Confirm explicitly what is and isn't included and get a written list of equipment provided vs. equipment you need to rent separately.</p>

    <p><strong>Temporary kitchen hire:</strong> If your villa has no kitchen — or a kitchen too small to service a 50+ guest wedding — the caterer needs to bring in temporary kitchen infrastructure. A proper temporary kitchen setup (burners, prep tables, refrigeration, water supply) can cost IDR 3M–8M depending on complexity and duration.</p>

    <p><strong>Pre-wedding tasting sessions:</strong> Tastings are strongly recommended — and are standard practice for weddings above IDR 30M total catering spend. A tasting session costs IDR 500K–1,500K per session depending on the caterer and the number of dishes. myCHEF offers pre-wedding tastings at IDR 750K per couple, credited against your booking if you proceed. Budget for at least one tasting session, potentially two if you want to test menu revisions.</p>

    <p><strong>Late-night snack service:</strong> This is the hidden cost couples most frequently forget. Your ceremony is at 5pm, dinner is at 7pm, and by 10:30pm guests have been dancing for two hours and are hungry again. A late-night snack service — sliders, satay, noodles, shared plates — costs IDR 100K–150K per person and is one of the highest-impact additions to your wedding food budget in terms of guest experience. Budget for it upfront.</p>

    <p><strong>Cake cutting fee:</strong> If your wedding cake is supplied by an external bakery (which it almost always is), many caterers charge a cake-cutting fee of IDR 50K–100K per person to portion, plate, and serve it. This is a legitimate cost covering the extra service time. Confirm this with your caterer before finalising the cake arrangement.</p>`,
  },
  {
    id: 'how-to-save',
    type: 'features' as const,
    subtitle: 'Smart Savings',
    title: 'Where to Save Without Cutting Quality',
    features: [
      {
        icon: TrendingDown,
        title: 'Choose Buffet Over Plated',
        desc: 'A well-executed buffet requires 40% fewer service staff than plated service for the same guest count. This saves IDR 100K–200K per person without reducing food quality. The key: invest the savings in a more generous food spread rather than pocketing the difference. More variety, higher-quality proteins, and better presentation on the buffet table will impress guests more than the format does.'
      },
      {
        icon: Users,
        title: 'Invite Fewer to the Seated Dinner',
        desc: 'A two-tier format saves significantly: cocktail reception for all 80 guests (canapés, drinks, casual mingling), followed by an intimate plated dinner for 30 closest guests. The remaining 50 guests transition to a dessert and dancing reception. Total catering spend often equals a full dinner for 80 but the quality of the seated dinner tier rises dramatically.'
      },
      {
        icon: Calendar,
        title: 'Book Off-Peak Dates',
        desc: 'July, August, and December are peak wedding months in Bali. Caterers are at full demand, chef teams are fully booked, and pricing reflects scarcity. April, May, and October are equally beautiful months — and catering costs run 15–20% lower. If your dates are flexible, off-peak booking is the single largest structural saving available in wedding catering.'
      },
      {
        icon: ChefHat,
        title: 'Simplify the Menu',
        desc: 'Four outstanding courses — one amuse-bouche, one entrée, one main, one dessert — beats seven mediocre courses every time. A simplified menu reduces ingredient cost, reduces kitchen complexity, reduces service time, and reduces chef labor. The savings compound. And the guest experience is almost universally better: generous portions of exceptional food rather than tiny portions of underfunded dishes.'
      },
    ],
  },
  {
    id: 'vs-restaurant',
    type: 'content' as const,
    subtitle: 'Private Chef vs Restaurant',
    title: 'Private Chef Catering vs Restaurant Wedding Package: The Real Cost Comparison',
    body: `<p>A persistent misconception in Bali wedding planning is that hiring a restaurant for your wedding dinner is the safe, cost-effective choice compared to private chef catering. The reality is almost always the opposite — once you account for all the fees restaurants attach to wedding packages.</p>

    <p><strong>What restaurant wedding packages typically include:</strong> A fixed menu at a fixed price per person, held in a fixed venue space that may be shared with other diners, a corkage fee of IDR 150K–300K per bottle on alcohol you bring in, a minimum spend threshold that applies regardless of how many guests attend, and a service team whose attention is divided across the restaurant's other tables and obligations that evening.</p>

    <p><strong>What private chef catering at your villa gives you:</strong> A menu designed entirely around your preferences and dietary requirements, exclusive chef and service team attention for the full duration of your event, no corkage (you supply your own alcohol and the chef team serves it), no minimum spend beyond the agreed package, and an intimate setting that you have complete control over — your music, your lighting, your timeline.</p>

    <p><strong>The cost comparison:</strong> A mid-range restaurant wedding package in Seminyak or Canggu typically runs IDR 600K–900K per person before corkage, private hire fees, and overtime. A myCHEF intimate villa wedding food format starts from about <strong>IDR 700K++ per person</strong>; full reception production often lands <strong>IDR 1.5M–3M++</strong> with staff and kitchen included in scope. Once restaurant corkage is factored (e.g. 30 bottles at IDR 200K corkage = IDR 6M extra), the restaurant path often costs more for less control — and villa private chef catering keeps the experience exclusive to your party.</p>

    <p>The exception: if your villa has no kitchen and you cannot install a temporary kitchen, a restaurant venue solves the infrastructure problem. But for villas with any kitchen capability, private chef catering is almost always the better value and the better experience.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Wedding Catering Budget: Frequently Asked Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Get a Detailed Quote',
    title: 'Get Your Wedding Catering Quote',
    body: 'Share your guest count, date, and vision — we send a detailed proposal within 24 hours.',
    primaryAction: { label: 'Request a Quote on WhatsApp', href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20wedding%20in%20Bali%20and%20would%20like%20a%20catering%20quote.' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  { question: 'How much does wedding catering in Bali cost?', answer: 'Full receptions often land around IDR 1.5M–3M++ per person; intimate villa formats from about IDR 700K++. ++ is tax + service. See <a href="/events/weddings">wedding catering</a>, <a href="/bali-wedding-catering-packages">packages</a> and this budget guide for line items foreigners usually miss.' },
  { question: 'How much does a wedding in Bali cost overall vs catering only?', answer: 'Total wedding spend (villa, planner, photo, legal, flights) is separate. This guide and myCHEF quotes cover <strong>food, kitchen, service staff and bar</strong> only — the F&B slice of a destination wedding budget.' },
  { question: 'What is a typical Bali wedding cost per person for food?', answer: 'Planning bands: IDR 700K–1.5M++ per person for many villa food formats; IDR 1.5M–3M++ when you want full reception production (brigade, synchronised service, stations). Bar packages are extra. Your written proposal is authoritative.' },
  { question: 'How should we budget catering for 50 guests in Bali?', answer: 'Example food-only floor math: 50 × IDR 1.5M++ ≈ IDR 75M++ before bar, cake and last-minute headcount. Add cocktail packages from IDR 500K++ per guest (min 10) if you want free-flow drinks. <a href="/bali-wedding-catering-packages">Packages →</a>' },
  { question: 'Do you offer menu tastings for weddings?', answer: 'Yes — tastings are part of wedding planning for full receptions, scheduled before the day.' },
  { question: 'Can you handle banjar fees and villa permissions?', answer: 'We coordinate with villa managers on access, noise and banjar requirements and list third-party fees in the proposal.' },
  { question: 'Can guests bring their own alcohol?', answer: 'Yes — BYO with service staff, or full bar packages. <a href="/in-villa-service/bartenders">Bartenders</a>.' },
  { question: 'What is the rain plan for outdoor receptions?', answer: 'Every outdoor wedding has a covered fallback (marquee/indoor) confirmed before the day.' },
  { question: 'Do you cater rehearsal and welcome dinners?', answer: 'Yes — BBQ, family-style or plated formats via <a href="/events">events</a> and <a href="/catering">catering</a>.' },
  { question: 'What staffing ratio do you use?', answer: 'About one waiter per 8–10 seated guests, plus kitchen lead; cocktail hours add tray staff.' },
  { question: 'Can you work with our wedding planner?', answer: 'Yes — daily collaboration with planners and villa managers.' },
  { question: 'Do you offer halal-friendly wedding menus?', answer: 'Yes — pork-free and halal-sensitive lines when specified at planning.' },
  { question: 'How is this different from a private chef dinner?', answer: 'Weddings are multi-guest production. Couples dinners: <a href="/fine-dining/romantic-dinner">romantic dinner</a>.' },
  { question: 'Which areas host most villa weddings?', answer: 'Uluwatu, Canggu, Seminyak, Ubud, Nusa Dua and Jimbaran are common — we cover island-wide.' },
  { question: 'Can kids and elderly dietary needs be managed?', answer: 'Yes — labelled plates and briefed service for mixed multi-gen guest lists.' },
  { question: 'How much does catering in Bali cost?', answer: 'Many villa formats start around published rates per person. See <a href="/catering">catering</a> and <a href="/pricing">pricing</a>.' },
  { question: 'What formats do you offer?', answer: 'BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate — all under <a href="/catering">catering</a>.' },
  { question: 'Is catering the same as private chef hire?', answer: 'No. Catering is usually one event; multi-day stays use <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Do prices include staff and cleanup?', answer: 'Serviced packages include chef/staff and cleanup; drop-off does not keep staff on site.' },
  { question: 'Can you cook in an Airbnb villa?', answer: 'Yes with a workable kitchen — share the listing when booking.' },
  { question: 'Minimum guest counts?', answer: 'Vary by format (drop-off lower, buffet higher). We route you correctly.' },
  { question: 'Can menus be customised?', answer: 'Yes — proteins, spice, diets locked before shopping.' },
  { question: 'Travel fees?', answer: 'Remote areas may add a fee quoted upfront.' },
]

const RELATED_PAGES = [
  { label: 'Wedding Catering Packages', href: '/bali-wedding-catering-packages', desc: 'Per-person package bands and inclusions for Bali villa weddings.' },
  { label: 'Weddings & Events', href: '/events/weddings', desc: 'Full details on myCHEF wedding catering services in Bali.' },
  { label: 'Wedding Catering Timeline', href: '/blog/bali-wedding-catering-private-chef-timeline', desc: 'Step-by-step planning timeline for your Bali wedding catering.' },
  { label: 'Large Group Catering Bali', href: '/group-villa-dinner-packages-bali', desc: 'Catering for 30+ guests at Bali villas — logistics and pricing.' },
  { label: 'Private Chef Cost Bali', href: '/blog/private-chef-cost-bali', desc: 'Complete 2026 pricing guide for private chef hire in Bali.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full myCHEF pricing for all events and group sizes.' },
]

export default function BaliWeddingCateringBudgetPage() {
  return (
    <PremiumPage
      slug="blog/bali-wedding-catering-budget-guide"
      title="Bali Wedding Catering Cost: The Complete Budget Guide"
      description="Full breakdown of Bali wedding catering costs in 2026. Price per head, hidden costs, how to save without cutting quality."
      seoTitle="Bali Wedding Catering Cost | Budget Guide 2026 | myCHEF"
      seoDescription="Full breakdown of Bali wedding catering costs in 2026. Price per head, hidden costs, how to save without cutting quality."
      canonicalUrl="https://mychef.id/blog/bali-wedding-catering-budget-guide"
      h1="Bali Wedding Catering Cost: The Complete Budget Guide"
      subtitle="What Does Wedding Catering Actually Cost in Bali? A Transparent Breakdown"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Elegant wedding catering spread at a Bali villa — myCHEF wedding service"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={[
        'bali wedding catering cost',
        'bali wedding catering budget',
        'wedding catering price bali',
        'how much does a wedding in bali cost',
        'bali wedding cost per person',
        'destination wedding bali cost',
        'bali wedding food cost per head',
        'wedding budget bali catering',
      ]}
      highlights={['Price Breakdown', 'Hidden Costs', 'How to Save', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Bali Wedding Catering Budget Guide', 'https://mychef.id/blog/bali-wedding-catering-budget-guide', 'Journal', 'https://mychef.id/journal'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Bali Wedding Catering Cost: The Complete Budget Guide',
          description: 'Full breakdown of Bali wedding catering costs in 2026. Price per head IDR, hidden costs, how to save without cutting quality.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: '2026-08-07',
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/bali-wedding-catering-budget-guide' },
          url: 'https://mychef.id/blog/bali-wedding-catering-budget-guide',
          wordCount: 1500,
          keywords: 'bali wedding catering cost, bali wedding catering budget, wedding catering price bali',
        },
      ]}
      ctaText="Get Your Wedding Catering Quote"
      ctaSubtext="Share your guest count, date, and vision — we send a detailed proposal within 24 hours."
    />
  )
}
