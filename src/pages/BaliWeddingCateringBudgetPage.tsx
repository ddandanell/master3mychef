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
    body: `<p>The following ranges reflect food-only costs per person in IDR (Indonesian Rupiah). Beverages and alcohol are treated separately — see the note at the end of this section.</p>

    <p><strong>Budget Range: IDR 350K–500K per person</strong></p>
    <p>At this tier, you're working with a simple buffet format — shared platters, 3–4 dishes, designed for receptions of 50 or more guests where cost management is essential. What's typically included at this price: the chef, food and ingredients, basic serving staff, and disposable or hire crockery. What's not included: linen, proper glassware, a dedicated service team, equipment rental, or any table styling. This is functional catering that feeds guests adequately. It is not the catering your guests will talk about at brunch the next morning.</p>

    <p><strong>Mid-Range: IDR 700K–800K per person</strong></p>
    <p>This is the professional event catering tier and represents the core of myCHEF's wedding service. At this price point you receive: professional seated service with 4–5 courses (or a well-staffed, well-styled buffet), a dedicated head chef with culinary experience suited to the event, a service ratio of one server per 10 guests, real crockery and linen (typically included or at marginal add-on cost), and a kitchen operation that is set up to professional standards. The difference between IDR 700K and IDR 800K within this tier largely reflects menu complexity, protein quality (line-caught fish vs frozen, wagyu vs standard beef), and whether setup and breakdown staffing is included.</p>

    <p><strong>Premium: IDR 900K–1,400K per person</strong></p>
    <p>Reserved for weddings of up to 80 guests where the culinary experience is the centrepiece rather than the backdrop. At this tier: a full tasting menu of 5–7 courses with composed amuse-bouche, sommelier-guided wine service, butler-per-table service, fine crockery and crystal, and a kitchen team of sufficient depth to plate simultaneously for every guest. The chef at this tier brings genuine fine dining training — many myCHEF chefs at this price point have trained in Michelin-starred environments. This is the tier where the catering becomes a permanent memory.</p>

    <p><strong>Ultra-Luxury: IDR 1,500K+ per person</strong></p>
    <p>World-class chef team, custom menu development over multiple tasting sessions, curated wine pairings, live cooking and carving stations, a butler assigned to every table throughout the evening, and service choreographed to the minute. This tier is typically reserved for weddings of 20–40 guests maximum, where the intimacy of scale allows true luxury execution. At 80 guests, the per-head cost required to deliver genuinely luxury execution becomes difficult to achieve without an exceptionally large budget.</p>

    <p><strong>Note on beverages and alcohol:</strong> The ranges above cover food only. A beverage service package — water, soft drinks, juices, mocktails — typically adds IDR 100K–150K per person. If you want wine, spirits, cocktails, or beer included and managed by the caterer, budget IDR 200K–500K per person on top of the food cost, depending on alcohol quality and volume of service hours.</p>`,
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

    <p><strong>The cost comparison:</strong> A mid-range restaurant wedding package in Seminyak or Canggu typically runs IDR 600K–900K per person before corkage, private hire fees, and overtime. A myCHEF private chef wedding at the same quality tier runs IDR 700K–800K per person all-inclusive. Once corkage is factored (30 bottles at IDR 200K corkage = IDR 6M extra), the restaurant package typically costs more — and delivers less.</p>

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
  {
    question: 'What is a realistic wedding catering budget per head in Bali in 2026?',
    answer: 'For quality private chef catering with proper service: IDR 700K–800K/person for food. Add IDR 200K–500K/person if you want beverage service included.',
  },
  {
    question: 'Does myCHEF include a service charge in the quote?',
    answer: 'Yes — our quotes are all-inclusive with no hidden service charge added at the end.',
  },
  {
    question: 'Can you do a tasting before the wedding?',
    answer: 'Yes — pre-wedding tastings are available. The cost is IDR 750K per couple and is credited against your booking if you proceed.',
  },
  {
    question: 'How many staff do I need for 60 wedding guests?',
    answer: 'For a seated plated dinner: 1 head chef, 2 sous chefs, 6 servers. For a buffet: 1 head chef, 2 sous chefs, 4 servers. We recommend 1 server per 10 guests for seated dining.',
  },
  {
    question: 'Can we supply our own alcohol to save money?',
    answer: 'Yes — this is common and saves significantly. We provide glassware, ice, service. You supply the alcohol.',
  },
  {
    question: 'How far in advance should we book wedding catering?',
    answer: 'For peak season (July, August, December): 4–6 months. Off-peak: 6–8 weeks minimum.',
  },
]

const RELATED_PAGES = [
  { label: 'Wedding Catering Timeline', href: '/blog/bali-wedding-catering-private-chef-timeline', desc: 'Step-by-step planning timeline for your Bali wedding catering.' },
  { label: 'Weddings & Events', href: '/events/weddings', desc: 'Full details on myCHEF wedding catering services in Bali.' },
  { label: 'Large Group Catering Bali', href: '/blog/large-group-catering-bali', desc: 'Catering for 30+ guests at Bali villas — logistics and pricing.' },
  { label: 'Private Chef Cost Bali', href: '/blog/private-chef-cost-bali', desc: 'Complete 2026 pricing guide for private chef hire in Bali.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full myCHEF pricing for all events and group sizes.' },
  { label: 'Corporate Catering Case Studies', href: '/blog/corporate-catering-bali-case-studies', desc: 'Real case studies from myCHEF large event catering in Bali.' },
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
      keywords={['bali wedding catering cost', 'bali wedding catering budget', 'wedding catering price bali', 'how much does wedding catering cost bali', 'bali wedding food cost per head']}
      highlights={['Price Breakdown', 'Hidden Costs', 'How to Save', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Bali Wedding Catering Budget Guide', 'https://mychef.id/blog/bali-wedding-catering-budget-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Bali Wedding Catering Cost: The Complete Budget Guide',
          description: 'Full breakdown of Bali wedding catering costs in 2026. Price per head IDR, hidden costs, how to save without cutting quality.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: '2026-06-29',
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
