import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Private Chef Denpasar',
    title: 'Private Chef Denpasar: Corporate Events, Executive Dining & City Villa Cooking',
    body: `<p>Denpasar is Bali's capital city and its commercial, administrative, and cultural centre — a very different proposition from the resort and villa tourism of Seminyak, Ubud, or Uluwatu. Private chef demand in Denpasar comes primarily from the city's significant business community: corporate teams, government functions, executive residences, and embassies that require professional catering in a city setting rather than a resort setting.</p>
    <p>myCHEF provides private chef and catering services across the full Denpasar area, including Renon (the government and embassy district), Sanglah, Dalung, and the residential compounds of Denpasar Selatan and Denpasar Barat. Denpasar is also the gateway to Bali's best wholesale and specialty food markets — our chefs operating anywhere on the island source from here — and a Denpasar booking benefits directly from this proximity.</p>`,
  },
  {
    id: 'demand',
    type: 'content',
    subtitle: 'Who Books in Denpasar',
    title: 'Corporate and Executive Private Chef Demand in Denpasar',
    body: `<p>Denpasar private chef bookings follow a different pattern from resort areas:</p>
    <p><strong>Corporate team dinners and executive functions:</strong> Denpasar's commercial district hosts a significant number of large Indonesian and multinational companies with offices in Renon and the surrounding areas. Corporate team dinners, executive lunches, quarterly functions, and client entertainment events are common. A private chef dinner in an executive's residence or a corporate villa is often preferred over restaurant booking for privacy and flexibility. See our <a href="/blog/corporate-events-catering-bali-team-dining" class="text-[#7E6410] hover:underline font-medium">corporate catering guide</a>.</p>
    <p><strong>Embassy and government official entertaining:</strong> Denpasar's Renon district is home to numerous consulates and government offices. Official entertainment functions — receptions, working dinners, cultural events — represent a regular segment of Denpasar catering demand. myCHEF provides certified, professionally trained chefs with HACCP food safety credentials appropriate for official functions.</p>
    <p><strong>Executive residence regular meal service:</strong> Senior executives, government officials, and business owners resident in Denpasar's better residential areas (Renon, Gatot Subroto, the area around Inna Grand Bali Beach) increasingly use private chef services for regular household meal preparation. This is the household chef format: a chef who visits the residence regularly, sources fresh ingredients, and cooks meals on a pre-agreed schedule. See our <a href="/blog/household-chef-bali-hiring-guide" class="text-[#7E6410] hover:underline font-medium">household chef guide</a>.</p>
    <p><strong>Celebration events at city venues:</strong> Birthday celebrations, graduation dinners, wedding anniversary events in private city villas, and similar personal celebrations. Denpasar residents who want a high-quality private dining experience at home rather than at a restaurant.</p>`,
  },
  {
    id: 'market-advantage',
    type: 'content',
    subtitle: 'Market Access',
    title: 'Denpasar\'s Market Advantage: The Best Ingredient Access in Bali',
    body: `<p>Denpasar's greatest advantage as a cooking base is its direct access to Bali's best wholesale and specialty food markets — markets that supply every restaurant and hotel on the island:</p>
    <p><strong>Pasar Badung:</strong> Bali's largest and most important fresh market, at the heart of Denpasar. Wholesale and retail fresh produce, spices, herbs, and Balinese ingredients unavailable anywhere else in comparable quality and variety. A myCHEF chef based in Denpasar can reach Pasar Badung in minutes for morning sourcing — the standard for any serious kitchen in Bali.</p>
    <p><strong>Pasar Kumbasari:</strong> The arts, crafts, and specialty goods market across the river from Badung. Also carries specialty food items, Balinese ceremonial ingredients, and hard-to-find spices.</p>
    <p><strong>Wholesale protein and seafood markets:</strong> Several wholesale fish, meat, and poultry suppliers operate from the Denpasar industrial and port area. For large corporate events requiring significant quantities of specific proteins, direct wholesale access matters for both price and quality.</p>
    <p><strong>Jakarta import suppliers:</strong> Denpasar's status as a commercial hub means it has the best selection of imported and specialty food items on the island — European cheeses, Japanese ingredients, specialty wines, and premium imports are all available via Denpasar-based distributors that our chefs have established relationships with.</p>`,
  },
  {
    id: 'coverage',
    type: 'content',
    subtitle: 'Coverage',
    title: 'Denpasar Areas and Neighbourhoods We Serve',
    body: `<p>myCHEF covers the full Denpasar area:</p>
    <p><strong>Renon and Sanglah:</strong> The government, embassy, and hospital district. Executive residences, consulates, and corporate offices. Primary demand area for official catering and executive dining.</p>
    <p><strong>Denpasar Selatan (South Denpasar):</strong> The southern residential and commercial zone, merging toward Sanur. Mix of villa compounds and urban residential. Good access to Pasar Badung and the city market network.</p>
    <p><strong>Denpasar Barat (West Denpasar):</strong> The western commercial zone toward Kuta and the airport. Business hotel belt and commercial offices. Corporate catering demand from meeting venues and business hotels.</p>
    <p><strong>Pemecutan and Sesetan:</strong> Older residential neighbourhoods in central Denpasar. Some established expat and business community residences. Regular household chef demand.</p>
    <p><strong>Dalung and Kerobokan border:</strong> The northwestern edge of the greater Denpasar urban area, merging into Kerobokan. Some excellent villa stock here used for corporate retreats and private events.</p>`,
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Pricing',
    title: 'Private Chef Denpasar Pricing',
    body: `<p>Denpasar pricing reflects the city's business-oriented demand profile:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Corporate team dinner (8-20 guests):</strong> From IDR 500,000 – 800,000 per person. Full service including waitstaff available.</li>
      <li><strong>Executive private dinner (2-8 guests):</strong> From IDR 600,000 – 1,000,000 per person. Includes plated service and full kitchen-to-table management.</li>
      <li><strong>Official reception catering (20-60 guests, standing/canape):</strong> From IDR 300,000 – 500,000 per person. Includes full setup, service, and cleanup.</li>
      <li><strong>Household regular meal service:</strong> From IDR 7,000,000–12,000,000/month depending on frequency. See household chef guide for scope details.</li>
    </ul>
    <p style="margin-top:0.75rem;">All pricing includes ingredient sourcing at cost. Full pricing overview at our <a href="/blog/private-chef-cost-bali" class="text-[#7E6410] hover:underline font-medium">Bali private chef cost guide</a>.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book Your Chef',
    title: 'Reserve a Private Chef in Denpasar',
    body: 'Corporate team dinner, official reception, executive household, or private celebration — tell us your venue, date, and guest count. We match you with the right Denpasar chef.',
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/62089674072020' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: "Does myCHEF provide catering for corporate events and official functions in Denpasar?",
    answer: "Yes. Corporate team dinners, official reception catering, executive private dinners, and government function catering in Denpasar are a regular part of our operations. We provide HACCP-certified chefs with formal training appropriate for official functions, and can supply full waitstaff for events requiring front-of-house service.",
  },
  {
    question: "Can a myCHEF chef source from Pasar Badung in Denpasar?",
    answer: "Yes. For Denpasar bookings, our chefs source directly from Pasar Badung — Bali's largest and most important fresh market. The proximity to Badung gives Denpasar clients access to the freshest produce and widest range of Balinese ingredients on the island, sourced on the morning of service.",
  },
  {
    question: "Do you provide household chef services for executive residences in Denpasar?",
    answer: "Yes. We provide ongoing household chef arrangements for executive residents, embassy personnel, and business owners in Denpasar. A chef who visits your residence regularly (daily, or several times per week) to prepare meals. Contact us with your location, household size, and frequency requirements.",
  },
  {
    question: "Can myCHEF cater a large reception or official function for 40-60 guests in Denpasar?",
    answer: "Yes. We handle large receptions and official functions with full canapé and standing service, seated dinner formats, and full-service setups. For 40-60 guests we supply a head chef, kitchen crew, and dedicated front-of-house service team. Advance booking of at least 1 week is required for events of this size.",
  },
  {
    question: "What is the difference between booking a private chef in Denpasar vs Seminyak?",
    answer: "The main difference is context. Seminyak bookings are predominantly holiday villa experiences — romantic dinners, group holidays, fine dining. Denpasar bookings are predominantly corporate, executive, and household — professional catering with a business or residential context. Our chefs in both areas are equally trained, but the typical formats differ.",
  },
]

export default function PrivateChefDenpasarGuidePage() {
  return (
    <PremiumPage
      slug="blog/private-chef-denpasar-guide"
      title="Private Chef Denpasar: Corporate Events, Executive Dining & Household Chefs"
      description="Book a private chef in Denpasar for corporate team dinners, official receptions, executive household cooking, and private celebrations. Covers Renon, Sanglah, and all Denpasar areas."
      h1="Private Chef Denpasar — Corporate Events, Executive Dining & Household Chefs"
      subtitle="The complete guide to private chef and catering services in Denpasar, Bali's capital city"
      heroImage="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1400&q=80"
      heroImageAlt="Professional private chef preparing a formal corporate dinner in a Denpasar executive villa"
      ogImage="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1400&q=80"
      keywords={['private chef denpasar', 'denpasar private chef', 'chef denpasar bali', 'catering denpasar', 'corporate chef denpasar']}
      highlights={['Corporate Events', 'Executive Dining', 'Pasar Badung Sourcing', 'From IDR 300K/person']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Private Chef Sanur Guide', href: '/blog/private-chef-sanur-guide', desc: 'Private chef services in Sanur, Denpasar\'s beach suburb.' },
        { label: 'Corporate Catering Bali', href: '/blog/corporate-events-catering-bali-team-dining', desc: 'Corporate team dinners and event catering across Bali.' },
        { label: 'Household Chef Guide', href: '/blog/household-chef-bali-hiring-guide', desc: 'Hiring a live-in or long-term household chef in Bali.' },
        { label: 'Event Staff Bali', href: '/blog/event-staff-bali', desc: 'Hiring waiters, bartenders and kitchen crew for Bali events.' },
        { label: 'Pricing Guide', href: '/pricing', desc: 'Full breakdown of private chef costs across Bali.' },
        { label: 'Book a Chef', href: '/contact', desc: 'Check availability for your Denpasar event.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Private Chef Denpasar Guide', 'https://mychef.id/blog/private-chef-denpasar-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef Denpasar: Corporate Events, Executive Dining & Household Chefs',
          description: 'Book a private chef in Denpasar for corporate team dinners, official receptions, executive household cooking, and private celebrations.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-chef-denpasar-guide' },
          url: 'https://mychef.id/blog/private-chef-denpasar-guide',
        },
      ]}
      ctaText="Book a Denpasar Private Chef or Caterer"
      ctaSubtext="Corporate team dinner, official reception, or executive household meal service — we have the right chef for every Denpasar occasion."
    />
  )
}
