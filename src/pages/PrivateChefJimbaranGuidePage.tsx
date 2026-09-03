import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Private Chef Jimbaran',
    title: 'Private Chef Jimbaran: Seafood Dinners, Beach BBQ & Cliff Dining',
    body: `<p>Jimbaran is Bali's seafood capital — a crescent bay on the southwest coast where the island's freshest catch arrives daily at the fish market, and where the tradition of open-air grilled seafood dining was born. Hiring a private chef in Jimbaran means access to that seafood heritage in a private villa setting: whole grilled snapper, tiger prawns, Jimbaran-style sambal, and fresh squid, prepared at your villa rather than at a crowded beach warung.</p>
    <p>myCHEF provides private chef services across the Jimbaran area and its immediate neighbours: Kedonganan to the north, the Bukit Peninsula villas to the south, and the Uluwatu clifftop properties that overlook the Indian Ocean from above. Whether you are staying in a Jimbaran Bay villa, a Pecatu clifftop retreat, or a private compound in Ungasan, we can build a chef experience around the unique character of your location.</p>
    <p>Jimbaran guests tend to be split between two profiles: couples on romantic beach holidays who want a private seafood dinner at sunset, and larger family or group bookings at the Bukit peninsula's generous villa compounds who want a full BBQ spread. Our chefs in this area are experienced with both.</p>`,
  },
  {
    id: 'jimbaran-food',
    type: 'content',
    subtitle: 'Jimbaran Cuisine',
    title: 'Jimbaran Seafood Culture: What a Private Chef Does Differently',
    body: `<p>Jimbaran's culinary identity is built on seafood — specifically, the tradition of grilling whole fish and shellfish over coconut husks on the sand, served with Jimbaran-style sambal matah (raw shallot, lemongrass, and chilli), plecing (blanched water spinach with spicy tomato sauce), and rice. A private chef in Jimbaran takes this tradition off the beach and into your villa:</p>
    <p><strong>Same-day market sourcing:</strong> The Kedonganan fish market — just north of Jimbaran Bay — is one of Bali's most important fish landing points. Local fishing boats unload at night and early morning. A myCHEF chef heading to this market at 6am for your evening dinner brings you the same quality that the bay's best restaurants source, before the afternoon retail markup.</p>
    <p><strong>Jimbaran seafood spread:</strong> The classic Jimbaran private dinner format is a seafood spread — whole grilled fish (typically snapper, barramundi, or grouper), tiger prawns, squid, clams, and corn, served sharing-style with three or four sambals, steamed rice, and fresh vegetables. This is the most requested format for Jimbaran villa dinners and it works for groups from 2 to 20.</p>
    <p><strong>Cliff dinner experience:</strong> Uluwatu and Pecatu villas above the Bukit cliff offer some of the most dramatic sunset dining vantage points in Asia. A private chef dinner served on an ocean-view terrace at 6pm — with cocktails at sunset followed by a 7-course tasting menu — is among the defining private dining experiences we offer. The combination of location and cuisine is impossible to replicate at any restaurant.</p>
    <p><strong>Sustainable seafood:</strong> myCHEF chefs source from responsible suppliers who avoid endangered species. We can advise on seasonal availability and suggest appropriate substitutes if a specific fish is out of season or in limited supply.</p>`,
  },
  {
    id: 'coverage',
    type: 'content',
    subtitle: 'Coverage Area',
    title: 'Jimbaran and Bukit Peninsula Areas We Cover',
    body: `<p>myCHEF private chef services cover the full Jimbaran and Bukit Peninsula area:</p>
    <p><strong>Jimbaran Bay:</strong> The bay itself and the villa compounds along Jalan Yoga Perkanthi and the beach road. Home to several large luxury hotels and villa complexes. A relaxed, family-friendly area popular with couples and multi-generational groups.</p>
    <p><strong>Kedonganan:</strong> The northern extension of the Jimbaran area, known for the fish market and a dense collection of seafood restaurants. Some villa compounds here offer direct bay access.</p>
    <p><strong>Pecatu and Ungasan:</strong> The clifftop areas above Jimbaran Bay on the Bukit Peninsula, home to some of Bali's most spectacular luxury villas. Many properties here are large (6-12 bedrooms) with infinity pools that appear to merge with the ocean horizon. The prime venue for high-end private chef tasting menus.</p>
    <p><strong>Uluwatu:</strong> The far southern tip of the Bukit, famous for the sea temple and world-class surf breaks. An increasingly popular villa area for couples and surf groups. We also cover this area with a dedicated <a href="/locations/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu location page</a>.</p>
    <p><strong>Balangan and Dreamland:</strong> The surf beaches on the western Bukit cliff face, accessible from Jimbaran and popular with villa guests seeking a quieter, more secluded setting.</p>`,
  },
  {
    id: 'occasions',
    type: 'content',
    subtitle: 'Occasions',
    title: 'What Jimbaran Private Chef Clients Book For',
    body: `<p>The most common occasions for private chef bookings in the Jimbaran and Bukit area:</p>
    <p><strong>Romantic seafood dinner for two:</strong> A private seafood spread at sunset for a couple on a Jimbaran Bay villa terrace. Candles, fresh flowers, champagne, and a chef who handles everything from sourcing to cleanup. One of the most natural and beautiful private dining experiences in Bali. See our <a href="/fine-dining/romantic-dinner" class="text-[#7E6410] hover:underline font-medium">romantic dinner guide</a>.</p>
    <p><strong>Cliff sunset tasting menu:</strong> A fine dining tasting menu served on an Uluwatu or Pecatu clifftop terrace at sunset. 6 to 8 courses, matched wines, full waitstaff, and the Indian Ocean as backdrop. The premium version of Jimbaran/Bukit private chef dining.</p>
    <p><strong>Family or group seafood BBQ:</strong> For groups of 8-20 staying at a Bukit villa compound, a live-fire seafood BBQ on the villa deck is the ideal format. The chef sets up the grill, handles all sourcing and preparation, and creates the atmosphere of a Jimbaran beach warung in your private villa space. See our <a href="/catering/bbq-catering" class="text-[#7E6410] hover:underline font-medium">BBQ catering guide</a>.</p>
    <p><strong>Honeymoon experience:</strong> Jimbaran and the Bukit Peninsula are among Bali's most popular honeymoon destinations. We provide tailored private chef honeymoon experiences including floating breakfasts, sunset cocktail spreads, and romantic dinners. See our <a href="/honeymoon-chef" class="text-[#7E6410] hover:underline font-medium">honeymoon chef guide</a>.</p>`,
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Pricing',
    title: 'Private Chef Jimbaran Pricing',
    body: `<p>Jimbaran private chef pricing reflects the area's premium coastal positioning and the quality of fresh seafood sourcing:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Seafood spread dinner (2-6 guests):</strong> From IDR 700,000 – 950,000 per person. Includes market sourcing, full preparation, service, and cleanup.</li>
      <li><strong>Group seafood BBQ (8-20 guests):</strong> From IDR 700,000 – 800,000 per person at scale.</li>
      <li><strong>Cliff tasting menu (2-6 guests, 6-7 courses):</strong> IDR 1,200,000 – 2,000,000 per person. Includes premium seafood, matched wine service, and full setup.</li>
      <li><strong>Romantic dinner for 2 (4-5 courses):</strong> IDR 1,000,000 – 1,600,000 per person. Includes full table setup, flowers, and personalized service.</li>
    </ul>
    <p style="margin-top:0.75rem;">Premium fresh seafood (whole lobster, large tiger prawns, live crab) are priced at market rate and itemised transparently. For a full pricing overview see our <a href="/blog/private-chef-cost-bali" class="text-[#7E6410] hover:underline font-medium">Bali private chef cost guide</a>.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book Your Chef',
    title: 'Reserve a Private Chef in Jimbaran',
    body: 'Tell us your villa, dates, group size, and whether you want a seafood spread, BBQ, or tasting menu. We match you with the right Jimbaran chef.',
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/6289674072020' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  { question: 'How much is a private chef in Bali per day?', answer: 'Stay chef is a full day of staff at IDR 2,700,000++ (IDR 3,267,000 all-in). Three flexible meals. One meal is catering. <a href="/private-chef-bali">Private chef Bali</a>.' },
  { question: 'Are groceries included?', answer: 'Shopping work is included; food is billed at cost with receipts on daily hire.' },
  { question: 'What is Chef Rotation?', answer: 'On 7+ day bookings you can request different specialist chefs by day at no extra day-rate charge.' },
  { question: 'Can the chef cook in our villa kitchen?', answer: 'Yes — standard villa kitchens work; we bring specialised tools when needed.' },
  { question: 'Is this cheaper than restaurants for groups?', answer: 'For six+ people on two meals/day, the day rate split often beats mid-range restaurant totals plus taxis.' },
  { question: 'Can I request a specific chef?', answer: 'Yes for multi-day stays when available. Meet the team: <a href="/chefs">chefs</a>.' },
  { question: 'Fine dining vs daily chef?', answer: 'Fine dining is multi-course event pricing; daily chef is a full-day staff stay rate. One meal is catering. <a href="/fine-dining">Fine dining</a>.' },
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

export default function PrivateChefJimbaranGuidePage() {
  return (
    <PremiumPage
      slug="blog/private-chef-jimbaran-guide"
      title="Private Chef Jimbaran: Seafood Dinners, Beach BBQ & Cliff Dining"
      description="Book a private chef in Jimbaran for fresh seafood spreads, sunset BBQs, cliff tasting menus, and romantic villa dinners."
      h1="Private Chef Jimbaran — Seafood Dinners, Beach BBQ & Cliff Dining"
      subtitle="The complete guide to private chef experiences in Jimbaran and the Bukit Peninsula"
      heroImage="https://images.unsplash.com/photo-1559847844-5315695dadae?w=1400&q=80"
      heroImageAlt="Private chef grilling fresh seafood at a Jimbaran villa with ocean views"
      ogImage="https://images.unsplash.com/photo-1559847844-5315695dadae?w=1400&q=80"
      keywords={['private chef jimbaran', 'jimbaran private chef', 'jimbaran villa chef', 'private chef bali jimbaran', 'jimbaran seafood dinner']}
      highlights={['Fresh Market Seafood', 'Cliff Sunset Dining', 'Beach BBQ', 'From IDR 700K/person']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Private Chef Jimbaran', href: '/private-chef/jimbaran', desc: 'Book a private chef in Jimbaran — day rates and menus.' },
        { label: 'Mobile Cocktail Bar', href: '/in-villa-service/bartenders', desc: 'Sunset free-flow packages for Jimbaran villas.' },
        { label: 'Seafood BBQ Catering', href: '/catering/bbq-catering', desc: 'Bayfront BBQ — stack with mobile bar for drinks.' },
        { label: 'Villa Catering', href: '/catering', desc: 'Event catering formats for Jimbaran celebrations.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Private Chef Jimbaran Guide', 'https://mychef.id/blog/private-chef-jimbaran-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef Jimbaran: Seafood Dinners, Beach BBQ & Cliff Dining',
          description: 'Book a private chef in Jimbaran for fresh seafood spreads, sunset BBQs, cliff tasting menus, and romantic villa dinners.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-chef-jimbaran-guide' },
          url: 'https://mychef.id/blog/private-chef-jimbaran-guide',
        },
      ]}
      ctaText="Reserve Your Jimbaran Chef"
      ctaSubtext="We match you with the right chef for your Jimbaran villa or Bukit Peninsula property."
    />
  )
}
