import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { MapPin, Waves, Leaf, Fish } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Bali Dining by Neighborhood',
    title: 'Location Shapes Your Private Chef Experience',
    body: `<p>Bali's neighborhoods are not interchangeable. Seminyak, Canggu, Uluwatu, Ubud, Sanur, and Jimbaran each have a distinct character — different villa styles, different guest profiles, different ingredient access, and different dining expectations. A private chef adapts to where you are.</p>
    <p>This guide profiles each area's dining character, the type of menus that work best, what to expect from ingredient sourcing, and typical per-person budget ranges — so you can make a more informed decision about both your villa location and your chef selection.</p>`,
  },
  {
    id: 'seminyak',
    type: 'content' as const,
    subtitle: 'Seminyak',
    title: 'Seminyak: Beach Sophistication & International Dining',
    body: `<p><strong>Character:</strong> Upscale, cosmopolitan beach resort — fine-dining restaurants on every corner, luxury villas with pools and ocean views, international traveler profile. Bali's most developed tourist area. See our full <a href="/locations/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak private chef guide</a>.</p>
    <p><strong>Private Chef Advantage:</strong> Escape crowded restaurants while staying in the sophisticated hub. Oceanfront or poolside dining without reservation hassles. A private chef delivers <a href="/fine-dining" class="text-[#7E6410] hover:underline font-medium">restaurant-quality fine dining</a> in a setting restaurants can't replicate.</p>
    <p><strong>Best Menu Style:</strong> Mediterranean, modern Asian fusion, fine-dining European. Emphasis on fresh seafood, premium ingredient sourcing, and Instagram-worthy plating.</p>
    <p><strong>Ingredient Sourcing:</strong> Excellent — multiple suppliers, imported options available, excellent fresh fish access. Chefs can source almost anything with 48 hours' notice.</p>
    <p><strong>Guest Profile:</strong> International travelers, affluent families, destination wedding groups. High expectations — guests compare the experience to restaurants they've visited globally.</p>
    <p><strong>Budget Expectation:</strong> IDR 1.3M–2.4M/person for quality dining. Groups expect a premium experience commensurate with villa rental cost.</p>`,
  },
  {
    id: 'canggu',
    type: 'content' as const,
    subtitle: 'Canggu',
    title: 'Canggu: Creative, Health-Conscious, Artisanal',
    body: `<p><strong>Character:</strong> Trendy, creative hub — digital nomads, yoga practitioners, surf culture, cafés with pour-over coffee, design-forward boutique villas. Younger, more health-conscious crowd than Seminyak. See our <a href="/locations/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu private chef guide</a>.</p>
    <p><strong>Private Chef Advantage:</strong> Escape the increasingly crowded health-café scene. Host curated dining experiences tailored to specific dietary trends (plant-based, keto, macro-balanced, raw). Small-group intimate dinners preferred.</p>
    <p><strong>Best Menu Style:</strong> Modern vegetable-forward, locally-sourced, organic, health-conscious. Emphasis on ingredient provenance, sustainable sourcing, and artisanal presentations. Avoid formal "fine dining" framing — Canggu guests prefer relaxed excellence.</p>
    <p><strong>Ingredient Sourcing:</strong> Strong network of organic suppliers and health-focused markets. Green markets and local farmers accessible. Specialty health ingredients (adaptogens, superfoods) more available here than elsewhere.</p>
    <p><strong>Guest Profile:</strong> International creatives, wellness travelers, digital nomads, influencers. Value-conscious but quality-obsessed. Know their ingredients.</p>
    <p><strong>Budget Expectation:</strong> IDR 700K–1.3M/person. Value-driven but won't compromise on quality or sourcing ethics.</p>`,
  },
  {
    id: 'uluwatu',
    type: 'content' as const,
    subtitle: 'Uluwatu',
    title: 'Uluwatu: Clifftop Luxury & Dramatic Dining',
    body: `<p><strong>Character:</strong> Clifftop location with dramatic Indian Ocean and sunset views. Quieter, more exclusive than beach areas. Spacious luxury villas with infinity pools and gardens. The most photogenic location in Bali for dining. See our <a href="/locations/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu private chef guide</a>.</p>
    <p><strong>Private Chef Advantage:</strong> Host world-class dinners in a natural amphitheater setting. The backdrop does half the work — a skilled chef with quality ingredients creates an experience no restaurant can match. Highly exclusive, completely private. Browse our <a href="/fine-dining" class="text-[#7E6410] hover:underline font-medium">fine dining tasting menu experiences</a> to see what's possible.</p>
    <p><strong>Best Menu Style:</strong> Fine dining with global influences, often featuring Balinese tradition elevated with modern technique. Theater matters here — tableside finishing, dramatic plating, open-concept cooking. Premium proteins, rare ingredients, wine pairing.</p>
    <p><strong>Ingredient Sourcing:</strong> More challenging — 30–45 minute drive from Denpasar suppliers. Plan 2–3 weeks ahead for specialty items. Chef may need to pre-position ingredients. Quality still achievable; just requires planning.</p>
    <p><strong>Guest Profile:</strong> High-net-worth travelers, honeymooners, corporate executives, exclusive group retreats. Highest dining expectations in Bali.</p>
    <p><strong>Budget Expectation:</strong> IDR 1.9M–3.2M+/person. Guests expect luxury experience commensurate with villa rental at this level.</p>`,
  },
  {
    id: 'ubud',
    type: 'content' as const,
    subtitle: 'Ubud',
    title: 'Ubud: Cultural Immersion & Farm-to-Table',
    body: `<p><strong>Character:</strong> Spiritual, artistic, agrarian heart of Bali. Rice paddies, traditional culture, yoga retreats, temples, healers. Villas immersed in nature — often rustic-luxury, smaller than coastal areas. The most authentically Balinese experience for guests. See our <a href="/locations/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud private chef guide</a>.</p>
    <p><strong>Private Chef Advantage:</strong> Celebrate Balinese cuisine authentically with chefs who have direct relationships with local farmers. Access to farm-fresh ingredients picked the same morning. <a href="/catering" class="text-[#7E6410] hover:underline font-medium">Retreat catering</a> with nutritional and cultural focus.</p>
    <p><strong>Best Menu Style:</strong> Balinese traditional, plant-forward, farm-to-table. Emphasis on spice balance (hot/cool, sour/sweet), ceremonial dishes like lawar, and holistic wellness principles. The most authentic expression of Balinese food culture.</p>
    <p><strong>Ingredient Sourcing:</strong> Outstanding for local produce. Direct relationships with farmers and markets. Slower-paced supply chain — better for planned menus, less ideal for last-minute requests. Organic produce most accessible here.</p>
    <p><strong>Guest Profile:</strong> Wellness-focused travelers, cultural explorers, yoga practitioners, artists, retreat participants. Authenticity-seeking, culturally curious.</p>
    <p><strong>Budget Expectation:</strong> IDR 700K–960K/person. Value-oriented but deep appreciation for quality, authenticity, and ingredient provenance.</p>`,
  },
  {
    id: 'sanur-jimbaran',
    type: 'content' as const,
    subtitle: 'Sanur & Jimbaran',
    title: 'Sanur & Jimbaran: Seafood, Beach, and Local Flavor',
    body: `<p><strong>Sanur Character:</strong> Quiet, local beach community. Fishing villages, relaxed pace, fewer tourists than Seminyak. Families and long-term residents. Villas: mid-range, casual, beach-adjacent. See our <a href="/locations/sanur" class="text-[#7E6410] hover:underline font-medium">Sanur private chef guide</a>.</p>
    <p><strong>Sanur Dining:</strong> Outstanding fresh seafood from daily morning fishing boats. Simple preparations that highlight fish quality. Balinese traditional with some international options. Best for families seeking authentic local food without the Seminyak price tag.</p>
    <p><strong>Sanur Budget:</strong> IDR 700K–1.2M/person. Seafood-focused, local ingredients, relaxed atmosphere.</p>
    <p><strong>Jimbaran Character:</strong> Beach fishing village famous for sunset seafood culture. Mix of local and tourist. Villas: mid-range, beach-adjacent, casual. See our <a href="/locations/jimbaran" class="text-[#7E6410] hover:underline font-medium">Jimbaran private chef guide</a>.</p>
    <p><strong>Jimbaran Dining:</strong> Private beachside dinners capturing Jimbaran's sunset magic without the crowded beach restaurant scene. Outstanding fresh fish and seafood from morning boats. Grilled preparations, tropical fruits, Balinese-casual with international options.</p>
    <p><strong>Jimbaran Budget:</strong> IDR 700K–1.3M/person. Casual luxury, fresh seafood focus, sunset timing premium.</p>`,
  },
  {
    id: 'location-chef-match',
    type: 'features' as const,
    subtitle: 'Matching Chef to Location',
    title: 'How to Match Your Chef to Your Neighborhood',
    features: [
      { icon: Waves, title: 'Seminyak / Uluwatu', desc: "Request chefs with international fine-dining background. Ask specifically: \"Have you worked in Seminyak/Uluwatu villas? What's your premium sourcing network?\"" },
      { icon: Leaf, title: 'Canggu / Ubud', desc: "Request plant-forward or retreat-experienced chefs. Key question: \"Do you work with organic suppliers? Can you source 80%+ locally?\"" },
      { icon: Fish, title: 'Sanur / Jimbaran', desc: "Request chefs with strong seafood expertise. Key question: \"What's your relationship with the morning fish market? How do you source daily catch?\"" },
      { icon: MapPin, title: 'Any Location', desc: 'Always ask: "Have you worked at villas in [area] before?" Local experience = knowing suppliers, traffic timing, kitchen quirks, and backup plans.' },
    ],
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Find Your Chef',
    title: 'Find a Private Chef Who Knows Your Neighborhood',
    body: 'Tell us your villa location, guest count, and cuisine preferences. We match you with a chef experienced in your specific area of Bali.',
    primaryAction: { label: 'Contact Our Team', href: '/contact' },
    secondaryAction: { label: 'Browse Chefs', href: '/chefs' },
  },
]

const FAQS = [
  { question: 'Do you serve this Bali area?', answer: 'Yes — private chef, catering and events operate across major villa regions. Hub: <a href="/locations">locations</a> · <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Is there a travel fee?', answer: 'Core South Bali is usually included; remote spots may add a distance fee quoted upfront.' },
  { question: 'Can you cook in Airbnb villas here?', answer: 'Yes with a workable kitchen — share the listing.' },
  { question: 'Same prices as other areas?', answer: 'Published day rates and menu starts apply; only remote logistics may differ.' },
  { question: 'Fine dining available here?', answer: 'Yes — <a href="/fine-dining">fine dining</a>.' },
  { question: 'BBQ and parties?', answer: 'Yes — <a href="/catering/bbq-catering">BBQ catering</a> · <a href="/events/villa-parties">villa parties</a>.' },
  { question: 'Daily chef for a week?', answer: 'Yes — meal plans on <a href="/private-chef-bali">private chef Bali</a>.' },
  { question: 'Staff and mobile bar?', answer: 'Waiters/butlers: contact for pricing. Mobile cocktail bar packages from IDR 500K++/guest (min 10). <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
  { question: 'How far ahead to book here?', answer: 'A few days typical; peak season longer.' },
  { question: 'Last-minute possible?', answer: 'Often yes — WhatsApp the area and date.' },
  { question: 'Kids-friendly service?', answer: 'Yes — <a href="/kids-menus">kids menus</a>.' },
  { question: 'How to book for this area?', answer: 'WhatsApp villa pin, dates and guests — <a href="/book">book</a>.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Filter by cuisine style and location experience.' },
  { label: 'Private Chef Cost', href: '/blog/private-chef-cost-bali', desc: 'Full pricing breakdown by service type.' },
  { label: 'Yoga Retreat Catering', href: '/journal/yoga-retreat-meal-planning-bali', desc: 'Wellness retreat meal planning in Ubud and beyond.' },
  { label: 'Event Planning', href: '/blog/event-planning-bali', desc: 'Full event logistics for any Bali location.' },
  { label: 'Contact Us', href: '/contact', desc: 'Tell us your location and we find the right chef.' },
]

export default function DiningByLocationBaliPage() {
  return (
    <PremiumPage
      slug="blog/dining-by-location-bali-neighborhood-guide"
      title="Dining by Location in Bali: Private Chef Guide by Neighborhood"
      description="How location shapes your private dining experience in Bali. Seminyak, Canggu, Uluwatu, Ubud, Sanur, and Jimbaran — budget, menus, and chef matching."
      seoTitle="Private Chef by Location in Bali | Neighborhood Dining Guide"
      seoDescription="How location shapes your private dining experience in Bali. Seminyak, Canggu, Uluwatu, Ubud, Sanur, and Jimbaran — budget, menus, and chef matching."
      canonicalUrl="https://mychef.id/blog/dining-by-location-bali-neighborhood-guide"
      h1="Dining by Location in Bali"
      subtitle="Private Chef Neighborhood Guide: Seminyak to Ubud"
      heroImage="/generated/mychef-blog-dining-by-location.webp"
      heroImageAlt="Private chef serving elegant dinner on clifftop terrace overlooking Indian Ocean in Uluwatu Bali"
      ogImage="https://mychef.id/generated/mychef-blog-dining-by-location.webp"
      keywords={['private chef bali location', 'dining bali neighborhood', 'private chef seminyak ubud canggu']}
      highlights={['Seminyak', 'Canggu', 'Uluwatu', 'Ubud', 'Sanur & Jimbaran']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Dining by Location Bali', 'https://mychef.id/blog/dining-by-location-bali-neighborhood-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Dining by Location in Bali: Private Chef Guide by Neighborhood',
          description: 'How location shapes your private dining experience in Bali. Seminyak, Canggu, Uluwatu, Ubud, Sanur, and Jimbaran.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2025-09-01',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-blog-dining-by-location.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/dining-by-location-bali-neighborhood-guide' },
          url: 'https://mychef.id/blog/dining-by-location-bali-neighborhood-guide',
        },
      ]}
      ctaText="Find a Chef in Your Area"
      ctaSubtext="Tell us your villa location and we match you with an experienced local chef."
    />
  )
}
