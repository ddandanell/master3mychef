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
    <p><strong>Executive residence regular meal service:</strong> Senior executives, government officials, and business owners resident in Denpasar's better residential areas (Renon, Gatot Subroto, the area around Inna Grand Bali Beach) increasingly use private chef services for regular household meal preparation. This is the household chef format: a chef who visits the residence regularly, sources fresh ingredients, and cooks meals on a pre-agreed schedule. See our <a href="/staffing/household-staff" class="text-[#7E6410] hover:underline font-medium">household chef guide</a>.</p>
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
    <p><strong>Import suppliers:</strong> Denpasar's status as a commercial hub means it has the best selection of imported and specialty food items on the island — European cheeses, Japanese ingredients, specialty wines, and premium imports are all available via Denpasar-based distributors that our chefs have established relationships with.</p>`,
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
      <li><strong>Corporate team dinner (8-20 guests):</strong> From IDR 700,000 – 800,000 per person. Full service including waitstaff available.</li>
      <li><strong>Executive private dinner (2-8 guests):</strong> From IDR 700,000 – 1,000,000 per person. Includes plated service and full kitchen-to-table management.</li>
      <li><strong>Official reception catering (20-60 guests, standing/canape):</strong> From IDR 700,000 per person. Includes full setup, service, and cleanup.</li>
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
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/6289674072020' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  { question: 'How much is a private chef in Bali per day?', answer: 'From IDR 1,000,000++/day for one meal (chef + assistant). Two meals IDR 1.8M++, three IDR 2.7M++. Weekly −10%, monthly −20%. <a href="/private-chef-bali">Private chef Bali</a>.' },
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
  { question: 'Staff and bartenders?', answer: 'Yes — <a href="/in-villa-service">in-villa service</a>.' },
]

export default function PrivateChefDenpasarGuidePage() {
  return (
    <PremiumPage
      slug="blog/private-chef-denpasar-guide"
      title="Private Chef Denpasar: Corporate Events, Executive Dining & Household Chefs"
      description="Book a private chef in Denpasar for corporate team dinners, official receptions, executive household cooking, and private celebrations."
      h1="Private Chef Denpasar — Corporate Events, Executive Dining & Household Chefs"
      subtitle="The complete guide to private chef and catering services in Denpasar, Bali's capital city"
      heroImage="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1400&q=80"
      heroImageAlt="Professional private chef preparing a formal corporate dinner in a Denpasar executive villa"
      ogImage="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1400&q=80"
      keywords={['private chef denpasar', 'denpasar private chef', 'chef denpasar bali', 'catering denpasar', 'corporate chef denpasar']}
      highlights={['Corporate Events', 'Executive Dining', 'Pasar Badung Sourcing', 'From IDR 700K/person']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Private Chef Sanur Guide', href: '/private-chef/sanur', desc: 'Private chef services in Sanur, Denpasar\'s beach suburb.' },
        { label: 'Corporate Catering Bali', href: '/blog/corporate-events-catering-bali-team-dining', desc: 'Corporate team dinners and event catering across Bali.' },
        { label: 'Household Chef Guide', href: '/staffing/household-staff', desc: 'Hiring a live-in or long-term household chef in Bali.' },
        { label: 'Event Staff Bali', href: '/in-villa-service', desc: 'Hiring waiters, bartenders and kitchen crew for Bali events.' },
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
