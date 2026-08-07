import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Private Chef Seminyak',
    title: 'Private Chef Seminyak: Luxury Villa Dining, Sunset Dinners & Fine Dining',
    body: `<p>Seminyak is Bali's original luxury villa address. A private chef in Seminyak is expected to match the standards set by the area's best restaurants — precise technique, premium ingredients, beautiful plating, and professional front-of-house service.</p>
    <p>myCHEF provides private chef services across Seminyak and its adjacent luxury precincts: Oberoi, Petitenget, Kerobokan, and Batu Belig. Our Seminyak-based chefs include culinary-school graduates and former hotel kitchen professionals who bring fine dining standards to villa cooking. When you want to <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">hire a private chef in Seminyak</a>, myCHEF matches you with a vetted local chef and builds the menu around your occasion.</p>
    <p>The typical Seminyak private chef booking is for a couple, honeymoon, anniversary, or small intimate group (2-8 guests) who want a restaurant-quality dinner without leaving the villa.</p>`,
  },
  {
    id: 'seminyak-cuisine',
    type: 'content',
    subtitle: 'Cuisine Style',
    title: 'Seminyak Private Chef Cuisine: Fine Dining, Mediterranean & Premium Indonesian',
    body: `<p>The most common cuisine requests for private chef dining in Seminyak are:</p>
    <p><strong>Modern European / Mediterranean:</strong> Pasta, risotto, whole fish en papillote, duck breast, beef tenderloin. The most frequently requested cuisine style for romantic dinners in Seminyak.</p>
    <p><strong>Premium Indonesian / Balinese fine dining:</strong> Classical Balinese flavour profiles presented with modern precision. A seven-course progressive Indonesian tasting menu is one of the most unique private dining experiences available.</p>
    <p><strong>Japanese / nikkei:</strong> Raw fish, sashimi, fresh tuna and wahoo are available in Bali via premium fish suppliers. Sashimi and crudo followed by wagyu beef or grilled black cod is a popular format.</p>
    <p><strong>Sunset cocktail spread:</strong> A mixologist and a canape spread at 5pm before a full dinner at 7:30pm is a format we often arrange for villa honeymoons and anniversaries.</p>`,
  },
  {
    id: 'seminyak-areas',
    type: 'content',
    subtitle: 'Coverage Area',
    title: 'Seminyak, Oberoi, Petitenget, Kerobokan & Batu Belig — Full Coverage',
    body: `<p>myCHEF covers the full Seminyak luxury corridor:</p>
    <p><strong>Seminyak core (Jl. Laksmana / Oberoi area):</strong> The original luxury hotel and villa strip. Many of Bali's most beautiful private villas are in this zone.</p>
    <p><strong>Petitenget:</strong> The extension of Seminyak north along the beach, anchored by Potato Head Beach Club.</p>
    <p><strong>Kerobokan:</strong> Immediately north of Seminyak, home to some of Bali's best fine dining restaurants and many prominent long-term expat residents.</p>
    <p><strong>Batu Belig:</strong> A quieter beach area connecting Seminyak to Canggu, popular for honeymoons and anniversary trips.</p>`,
  },
  {
    id: 'occasions',
    type: 'content',
    subtitle: 'Occasions',
    title: 'Private Chef for Seminyak Occasions: Honeymoons, Proposals & Anniversaries',
    body: `<p>Seminyak's romantic reputation makes it the island's premier destination for milestone occasion dining:</p>
    <p><strong>Honeymoon dinners:</strong> A private chef dinner for two — candles, fresh flowers, bespoke menu, champagne. See our <a href="/honeymoon-chef" class="text-[#7E6410] hover:underline font-medium">honeymoon private chef guide</a>.</p>
    <p><strong>Proposals:</strong> A controlled private setting — no restaurant crowds, no risk of interruptions. See our <a href="/proposal-dinner" class="text-[#7E6410] hover:underline font-medium">proposal dinner guide</a>.</p>
    <p><strong>Anniversary dinners:</strong> A dinner built around the couple's specific preferences. See our <a href="/events/anniversaries" class="text-[#7E6410] hover:underline font-medium">anniversary dinner guide</a>.</p>
    <p><strong>Corporate dinners:</strong> A private villa dinner for 8-12 executives with a sommelier and professional waitstaff. See our <a href="/blog/corporate-events-catering-bali-team-dining" class="text-[#7E6410] hover:underline font-medium">corporate dining guide</a>.</p>`,
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Pricing',
    title: 'Private Chef Seminyak Pricing',
    body: `<p>Seminyak sits at the premium end of Bali private chef pricing:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Romantic dinner for 2 (4-5 courses):</strong> From IDR 1,200,000 – 1,800,000 per person.</li>
      <li><strong>Small group dinner (4-8 guests, 4 courses):</strong> IDR 800,000 – 1,200,000 per person</li>
      <li><strong>Fine dining tasting menu (6-7 courses with pairings):</strong> IDR 1,500,000 – 2,500,000 per person</li>
    </ul>
    <p style="margin-top:0.75rem;">For a full pricing breakdown see our <a href="/blog/private-chef-cost-bali" class="text-[#7E6410] hover:underline font-medium">Bali private chef cost guide</a>.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book Your Chef',
    title: 'Reserve a Private Chef in Seminyak',
    body: 'Tell us your villa, dates, occasion, and cuisine preferences. We will match you with the right Seminyak chef.',
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/6289674072020' },
    secondaryAction: { label: 'View Fine Dining', href: '/fine-dining' },
  },
]

const FAQS = [
  { question: 'How much is a private chef in Bali per day?', answer: 'Daily private chef rates are published by meal count with weekly/monthly discounts. <a href="/private-chef-bali">Private chef Bali</a>.' },
  { question: 'Are groceries included?', answer: 'Shopping work is included; food is billed at cost with receipts on daily hire.' },
  { question: 'What is Chef Rotation?', answer: 'On 7+ day bookings you can request different specialist chefs by day at no extra day-rate charge.' },
  { question: 'Can the chef cook in our villa kitchen?', answer: 'Yes — standard villa kitchens work; we bring specialised tools when needed.' },
  { question: 'Is this cheaper than restaurants for groups?', answer: 'For six+ people on two meals/day, the day rate split often beats mid-range restaurant totals plus taxis.' },
  { question: 'Can I request a specific chef?', answer: 'Yes for multi-day stays when available. Meet the team: <a href="/chefs">chefs</a>.' },
  { question: 'Fine dining vs daily chef?', answer: 'Fine dining is multi-course event pricing; daily chef is meal-count day rates. <a href="/fine-dining">Fine dining</a>.' },
  { question: 'Do you cover my area?', answer: 'Island-wide. <a href="/locations">Locations</a>.' },
  { question: 'Kids menus with daily chef?', answer: 'Yes — <a href="/kids-menus">kids menus</a> and parallel adult meals.' },
  { question: 'Live-in vs daily chef?', answer: 'Live-in is long-term placement (<a href="/staffing/live-in-chef">live-in chef</a>); daily is holiday day-rate hire.' },
  { question: 'Payment methods?', answer: 'Bank transfer and major cards; deposit then balance as quoted.' },
  { question: 'Last-minute private chef?', answer: 'Often possible outside peak — WhatsApp availability.' },
  { question: 'Do you serve this Bali area?', answer: 'Yes — private chef, catering and events operate across major villa regions. Hub: <a href="/locations">locations</a> · <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Is there a travel fee?', answer: 'Core South Bali is usually included; remote spots may add a distance fee quoted upfront.' },
  { question: 'Can you cook in Airbnb villas here?', answer: 'Yes with a workable kitchen — share the listing.' },
  { question: 'Same prices as other areas?', answer: 'Published day rates and menu starts apply; only remote logistics may differ.' },
  { question: 'Fine dining available here?', answer: 'Yes — <a href="/fine-dining">fine dining</a>.' },
  { question: 'BBQ and parties?', answer: 'Yes — <a href="/catering/bbq-catering">BBQ catering</a> · <a href="/events/villa-parties">villa parties</a>.' },
  { question: 'Daily chef for a week?', answer: 'Yes — meal plans on <a href="/private-chef-bali">private chef Bali</a>.' },
  { question: 'Staff and mobile bar?', answer: 'Waiters/butlers: contact for pricing. Mobile cocktail bar packages from IDR 500K++/guest (min 10). <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

export default function PrivateChefSeminyakGuidePage() {
  return (
    <PremiumPage
      slug="blog/private-chef-seminyak-guide"
      title="Private Chef Seminyak: Luxury Villa Dining, Sunset Dinners & Fine Dining"
      description="Book a private chef in Seminyak for honeymoon dinners, proposals, anniversaries, and fine dining tasting menus. Covers Oberoi, Petitenget, Kerobokan and Batu."
      h1="Private Chef Seminyak — Luxury Villa Dining, Sunset Dinners & Fine Dining"
      subtitle="The complete guide to private chef experiences across Seminyak and its luxury villa precincts"
      heroImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
      heroImageAlt="Private chef plating a fine dining tasting menu course at a luxury Seminyak villa"
      ogImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
      keywords={['private chef seminyak', 'seminyak private chef', 'seminyak villa chef', 'private chef bali seminyak', 'seminyak fine dining villa']}
      highlights={['Fine Dining', 'Romantic Dinners', 'Honeymoon & Proposals', 'From IDR 800K/person']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Private Chef Seminyak', href: '/private-chef/seminyak', desc: 'Book a private chef in Seminyak — day rates and menus.' },
        { label: 'Mobile Cocktail Bar', href: '/in-villa-service/bartenders', desc: 'Party bar packages from IDR 500K++ for Seminyak villas.' },
        { label: 'Villa Catering Bali', href: '/catering', desc: 'BBQ, buffet and plated for Seminyak celebrations.' },
        { label: 'Private Cocktail Party', href: '/experiences/private-cocktail-party', desc: 'Full night plan with mobile bar + food.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Private Chef Seminyak Guide', 'https://mychef.id/blog/private-chef-seminyak-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef Seminyak: Luxury Villa Dining, Sunset Dinners & Fine Dining',
          description: 'Book a private chef in Seminyak for honeymoon dinners, proposals, anniversaries, and fine dining tasting menus.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-chef-seminyak-guide' },
          url: 'https://mychef.id/blog/private-chef-seminyak-guide',
        },
      ]}
      ctaText="Reserve Your Seminyak Chef"
      ctaSubtext="We match you with the right chef for your Seminyak villa or romantic occasion."
    />
  )
}
