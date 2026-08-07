import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Sommelier Hire in Bali -- Wine Service and Pairing for Villa Events',
    body: `A sommelier elevates any dinner from good to exceptional. For villa weddings, plated dinner receptions, corporate galas, and private wine evenings, a certified sommelier ensures that every bottle is the right one, served at the right temperature, to the right guest -- and that the story of each wine enhances the meal.

myCHEF provides experienced sommeliers for private villa events across Bali. Our wine specialists have credentials in WSET, Court of Master Sommeliers, or equivalent programmes, and extensive experience managing wine service in high-end hospitality environments across Bali and Southeast Asia.

Whether you need a sommelier to design a wine pairing for a 7-course chef's table dinner, to manage wine service for a 60-guest wedding reception, or to present a curated wine flight to your group, we can match you with the right specialist.`,
  },
  {
    id: 'what-sommelier-does',
    type: 'content',
    title: 'What a Sommelier Does at a Bali Villa Event',
    body: `**Pre-Event Wine Consultation**
Your sommelier reviews the dinner menu and recommends wine pairings for each course. They advise on quantities, varietals, and sourcing -- pointing you toward Bali's best wine suppliers or working with what you already own.

**Wine Sourcing Assistance**
Bali's wine landscape has grown significantly. Your sommelier can advise on what's available at Duty Zero, Duty Free stores, and premium wine retailers in Seminyak, Ubud, and Canggu. For events with import budgets, they can recommend Australian, New Zealand, French, and Italian labels available in Bali.

**Pre-Service Preparation**
All bottles are checked on arrival, labelled by course, chilled or decanted as appropriate. For older wines or tannic reds, the sommelier decants well in advance of service.

**Table-Side Wine Service**
The sommelier presents each wine to the host before pouring, explains the label and vintage briefly, and manages pours throughout the meal. For formal events, they perform the full service ritual: label presentation, cork removal, aroma check, host taste, and pour.

**Wine Education Component (optional)**
For events where guests are wine-interested, the sommelier can narrate the pairing journey -- a few sentences per wine, explaining why it was chosen and what to look for in the glass. This transforms wine service into entertainment.

**Post-Dinner Digestif or Dessert Wine Service**
Port, Sauternes, dessert wines, or local Balinese arak-based digestifs. The sommelier manages this final service transition seamlessly.`,
  },
  {
    id: 'packages',
    type: 'content',
    title: 'Sommelier Hire Rates',
    body: `**Dinner Service (up to 4 hours)**
For intimate dinners of 6--20 guests. Includes pre-event wine consultation, full table-side wine service, and breakdown. From IDR 1,500,000.

**Event Reception (up to 8 hours)**
For villa weddings, corporate receptions, and large birthday dinners. Includes pre-event consultation, wine sourcing advice, and full event service. From IDR 2,500,000.

**Wine Pairing Design Package**
Pre-event only. The sommelier reviews your chef's menu and designs a full pairing with specific wine recommendations, quantities, and sourcing notes -- for clients who want the guidance but will manage service themselves. IDR 600,000 flat fee.

**Add-Ons**
- Wine education narrative (per course): IDR 200,000
- Decanting service for rare/aged bottles: IDR 300,000
- Full wine sourcing and procurement (logistics managed by sommelier): priced at cost + logistics fee
- Blind tasting event or wine flight presentation: IDR 1,800,000 (up to 12 guests, 2 hours)`,
  },
  {
    id: 'wine-in-bali',
    type: 'content',
    title: 'Navigating Wine in Bali -- What to Know',
    body: `Bali's wine market has improved dramatically but remains challenging for those unfamiliar with local distribution. Key points:

**Imported wine is significantly more expensive** than in Western countries due to Indonesia's excise taxes (approximately 150% on imported alcohol). Budget accordingly or source strategically.

**New World wines generally offer better value** in Bali than Burgundy or Barolo. Australian Shiraz, Marlborough Sauvignon Blanc, and Argentine Malbec are widely available and reasonably priced.

**Duty-free purchasing** is available for international arrivals at Ngurah Rai Airport -- a good strategy for bringing wine into Bali for a specific event. Your sommelier can brief you on what to look for.

**Indonesian wine** exists and has improved: Hatten Wines from Bali produces table wines from locally grown grapes. An interesting conversation piece at cultural events.

**Arak and local spirits** are an excellent way to incorporate Bali into your drinks programme. Bali's arak (a distilled palm spirit) has been elevated by craft producers and makes a compelling cocktail base or neat digestif.

Our sommeliers are fluent in Bali's local wine landscape and can advise exactly what's available, what represents value, and how to build the best cellar for your event within your budget.`,
  },
  {
    id: 'occasions',
    type: 'content',
    title: 'When to Hire a Sommelier for Your Bali Event',
    body: `**Villa Wedding Receptions** -- Wine service management is one of the most underestimated logistical challenges at Bali weddings. A sommelier ensures the right wines are served at the right time, quantities don't run short, and guests are never without a full glass during toasts.

**Chef's Table Dinners** -- For 5- and 7-course tasting menus, a wine pairing is the difference between a good dinner and an unforgettable one. The sommelier's narration adds an intellectual dimension that guests remember.

**Corporate Receptions and Product Launches** -- Sophisticated corporate events benefit from wine programming that reflects brand values. A sommelier adds credibility to the event catering and creates talking points for networking.

**Private Wine Dinners** -- If wine is the point of the evening, a sommelier-led tasting or vertical pairing creates a structured, educational, and enjoyable experience.

**Anniversary and Birthday Dinners** -- For guests who value wine, having a sommelier present a meaningful bottle -- with context, history, and perfect service -- becomes a component of the celebration rather than just the background.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Book a Sommelier for Your Bali Event',
    body: `Share your event date, guest count, occasion, and the chef's menu (if available). We'll match you with an available sommelier and confirm within 24 hours.`,
  },
]

const faqs = [
  { question: 'How much do waiters and bartenders cost in Bali?', answer: 'Waiters and butlers: contact us for pricing. Cocktail packages from IDR 500,000++ per guest (min 10). <a href="/in-villa-service">In-villa service</a>.' },
  { question: 'Minimum booking?', answer: 'Hourly roles usually 3-hour minimum; waiter bookings often start at two waiters.' },
  { question: 'Can we hire staff without food?', answer: 'Yes — self-catered or third-party caterer support is normal.' },
  { question: 'What do staff wear?', answer: 'Professional uniforms matched to event formality.' },
  { question: 'Alcohol included?', answer: 'No — BYO or sourced at cost; hire covers the professional.' },
  { question: 'Waiter ratio?', answer: 'About one waiter per 10 guests for formal service.' },
  { question: 'Butler service?', answer: 'Yes — <a href="/in-villa-service/butlers">butlers</a>.' },
  { question: 'Mixology and signature cocktails?', answer: 'Yes — <a href="/in-villa-service/mixology">mixology</a>.' },
  { question: 'Areas covered?', answer: 'Island-wide. <a href="/locations">Locations</a>.' },
  { question: 'Combine with private chef?', answer: 'Yes — most common luxury setup.' },
  { question: 'Vetted staff?', answer: 'Employed/supervised teams with replacement-or-refund cover.' },
  { question: 'How to book staff?', answer: 'WhatsApp date, area, headcount and roles needed.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

const relatedPages = [
  { label: 'Plated Dinner Catering', href: '/catering/plated-catering', desc: 'Formal multi-course dinner service' },
  { label: 'Mixologist Hire Bali', href: '/in-villa-service/mixology', desc: 'Craft cocktail bar for villa events' },
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'In-villa fine dining experience' },
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Intimate private dinners for couples' },
  { label: 'Event Staff Bali', href: '/in-villa-service', desc: 'Professional event crew hire' },
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'End-to-end villa event catering' },
]

export default function SommelierHireBaliPage() {
  return (
    <PremiumPage
      slug="blog/sommelier-hire-bali"
      title="Sommelier Hire Bali -- Wine Service and Pairing for Villa Events"
      seoTitle="Sommelier Hire Bali -- Wine Pairing & Table Service | myCHEF"
      description="Hire a certified sommelier in Bali for villa weddings, tasting menus, and formal dinners. Wine pairing design, table-side service and sourcing advice."
      seoDescription="Sommelier hire in Bali for villa weddings, chef's table dinners and corporate receptions. WSET-certified. Wine pairing and sourcing advice. From IDR 1.5M."
      h1="Sommelier Hire Bali -- Wine Pairing and Table Service for Villa Events"
      subtitle="Certified wine specialists for villa weddings, tasting menus, and corporate dinners -- from pairing design to tableside service."
      heroImage="/images/blog/sommelier-hire-bali.jpg"
      heroImageAlt="Professional sommelier presenting a wine bottle and pouring at an elegant Bali villa dinner event"
      ogImage="/images/blog/sommelier-hire-bali.jpg"
      canonicalUrl="https://mychef.id/blog/sommelier-hire-bali"
      keywords={[
        'sommelier hire bali',
        'sommelier bali',
        'wine service bali',
        'wine pairing bali',
        'hire sommelier bali',
        'private sommelier bali',
        'wine sommelier bali event',
        'wine pairing dinner bali',
        'sommelier villa bali',
        'wine service villa bali',
      ]}
      highlights={['WSET-Certified Specialists', 'Wine Pairing Design', 'Full Table Service', 'From IDR 1.5M']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book a Sommelier"
      ctaSubtext="Share your event date and menu -- we'll match you with an available wine specialist."
      extraJsonLd={[
        breadcrumbSchema('Sommelier Hire Bali', 'https://mychef.id/blog/sommelier-hire-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Sommelier Hire Bali -- Wine Pairing and Table Service for Villa Events',
          description:
            'Hire a certified sommelier in Bali for villa weddings and fine dining events. Wine pairing design, table-side service, and wine sourcing advice for private occasions.',
          url: 'https://mychef.id/blog/sommelier-hire-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/sommelier-hire-bali.jpg',
        },
      ]}
    />
  )
}
