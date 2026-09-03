import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Private Chef Sanur',
    title: 'Private Chef Sanur: Villa Dining in Bali\'s Most Relaxed Beach Town',
    body: `<p>Sanur occupies a unique position in Bali's geography and character. On the calmer east coast of the island, sheltered from the Indian Ocean swell by an offshore reef, Sanur is where Bali's long-term expat community settled generations ago, where families with young children choose to stay, and where the pace of villa life is genuinely unhurried. Private chef dining in Sanur reflects this character: less about spectacle and more about quality, comfort, and a slow appreciation of good food.</p>
    <p>myCHEF provides private chef services across the full Sanur area, from the beach road villas along Jalan Danau Tamblingan to the quieter residential compounds further inland near Sindhu market. Sanur chefs are experienced with the area's dominant guest profile: families with children, couples on longer stays, expats entertaining at home, and corporate clients attending Bali's growing MICE and government function calendar.</p>`,
  },
  {
    id: 'sanur-character',
    type: 'content',
    subtitle: 'Sanur Character',
    title: 'What Makes Sanur Private Chef Dining Different',
    body: `<p>Sanur is not a destination for party tourism or Instagram-driven dining. Its guest profile — families, long-stay couples, expat residents, and business travellers — drives a different set of requests compared to Seminyak or Canggu:</p>
    <p><strong>Family-style dining with children's menus:</strong> Sanur has a higher proportion of family villa bookings than any other major Bali area. A myCHEF private chef in Sanur is frequently asked to produce a dinner that satisfies both adults (wanting a proper meal with wine) and children (needing familiar, mild, adaptable food). This requires a chef comfortable with parallel cooking — managing two different menus simultaneously with different timing requirements. See our <a href="/blog/family-kids-menu-private-chef-bali" class="text-[#7E6410] hover:underline font-medium">family dining guide</a> for details on how we approach this.</p>
    <p><strong>Regular meal service for long stays:</strong> Because Sanur attracts longer villa stays (2 weeks is common for expats and families), private chef bookings here are more often multi-session engagements rather than single events. A chef who cooks breakfast three mornings a week, plus two dinners, over a two-week stay. This format creates a genuine relationship between chef and household — the chef learns preferences, the household settles into a rhythm. See our <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">expat private chef guide</a> for this format.</p>
    <p><strong>Access to Sindhu and Kesiman markets:</strong> Sanur has excellent local market access. The Sindhu morning market on Jalan Sindhu is one of Bali's most accessible wet markets for tourists and expats — but for a private chef, it is an operational advantage. Early morning sourcing from Sindhu means fresh produce, local greens, and Balinese ingredients that cannot be replicated with supermarket shopping. A myCHEF chef serving Sanur clients frequently sources from here.</p>
    <p><strong>Corporate and government event catering:</strong> Denpasar — Bali's capital and commercial centre — is adjacent to Sanur, and Sanur hosts several of Bali's larger hotels and conference venues. Corporate groups staying in Sanur villas frequently book private chef catering for team dinners, welcome functions, and executive lunches. This is a meaningful segment of our Sanur business.</p>`,
  },
  {
    id: 'areas',
    type: 'content',
    subtitle: 'Coverage',
    title: 'Sanur Neighbourhoods and Areas We Cover',
    body: `<p>myCHEF serves the full Sanur area and its surrounding neighbourhoods:</p>
    <p><strong>Sanur Beach Road (Jalan Danau Tamblingan and Jalan Bypass Ngurah Rai):</strong> The main villa and hotel corridor running parallel to the beach. High concentration of villa compounds and boutique properties, many with beach access. The core of Sanur private chef demand.</p>
    <p><strong>Sindhu and Semawang:</strong> The southern extension of Sanur toward the Benoa port. Quieter, more residential, with some excellent boutique villa compounds. Popular with long-stay expats and repeat visitors.</p>
    <p><strong>Sanur Kaja and Sanur Kauh:</strong> The northern and inland areas of Sanur proper. More residential, some large villa estates. Lower tourist density but solid private chef demand from resident expats.</p>
    <p><strong>Serangan Island:</strong> The small island connected to Sanur's southern end by a causeway. A few boutique villa properties. Accessible and included in our standard Sanur coverage area.</p>
    <p><strong>Kesiman and Peguyangan:</strong> The immediate northern neighbours of Sanur toward Denpasar. Some villa compounds here. Within our standard service zone.</p>`,
  },
  {
    id: 'occasions',
    type: 'content',
    subtitle: 'Common Bookings',
    title: 'What Sanur Private Chef Clients Book For',
    body: `<p>The most common booking formats in Sanur reflect the area's character:</p>
    <p><strong>Multi-day family villa cooking:</strong> The most common format in Sanur. A family books a chef for several meals across a villa stay — typically 2-3 dinners plus weekend breakfasts. The chef sources fresh produce each morning and adapts menus to the family's evolving preferences over the stay. This format provides genuine value and convenience for families who don't want to eat out every night.</p>
    <p><strong>Retirement anniversary and milestone dinners:</strong> Sanur's calmer character makes it popular for milestone occasions — significant wedding anniversaries, retirement celebrations, landmark birthdays — where the goal is quality and intimacy rather than spectacle. A private chef dinner at a Sanur villa for 6-10 people is a common format for these occasions. See our <a href="/events/anniversaries" class="text-[#7E6410] hover:underline font-medium">anniversary dinner guide</a>.</p>
    <p><strong>Expat household regular meals:</strong> Sanur's established expat community creates demand for ongoing regular chef services — not a one-off dinner but a weekly cooking arrangement. A chef who visits twice a week to prepare lunches and batch-cook for the household. This is more common in Sanur than anywhere else in Bali. See our <a href="/staffing/household-staff" class="text-[#7E6410] hover:underline font-medium">household chef guide</a>.</p>
    <p><strong>Corporate team dinners:</strong> Groups staying at Sanur's villa conference properties for meetings and retreats. A private chef dinner is a preferred alternative to hotel restaurant dining for corporate groups who want a more informal, relationship-building setting. See our <a href="/blog/corporate-events-catering-bali-team-dining" class="text-[#7E6410] hover:underline font-medium">corporate catering guide</a>.</p>`,
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Pricing',
    title: 'Private Chef Sanur Pricing',
    body: `<p>Sanur pricing reflects the area's predominantly family and mid-tier luxury positioning:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Family villa dinner (4-8 guests, including children's menu):</strong> From IDR 700,000 per adult. Children's menu surcharge IDR 150,000–200,000 per child.</li>
      <li><strong>Multi-day booking (3+ sessions):</strong> 10% discount on per-session rates for confirmed multi-day bookings.</li>
      <li><strong>Weekly household arrangement:</strong> From IDR 6,000,000–10,000,000/month depending on frequency and scope. See our household chef guide for full details.</li>
      <li><strong>Corporate team dinner (10-20 guests):</strong> From IDR 700,000 per person depending on menu complexity.</li>
    </ul>
    <p style="margin-top:0.75rem;">Groceries are charged at market cost with no markup. For a full cost overview see our <a href="/blog/private-chef-cost-bali" class="text-[#7E6410] hover:underline font-medium">private chef cost guide</a>.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book Your Chef',
    title: 'Reserve a Private Chef in Sanur',
    body: 'Tell us your villa, dates, number of adults and children, and what kind of dining experience you want. We match you with the right Sanur chef.',
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

export default function PrivateChefSanurGuidePage() {
  return (
    <PremiumPage
      slug="blog/private-chef-sanur-guide"
      title="Private Chef Sanur: Family Villa Dining, Expat Meals & Corporate Events"
      description="Book a private chef in Sanur for family villa dinners, multi-day meal service, expat household cooking, and corporate team events."
      h1="Private Chef Sanur — Family Villa Dining, Expat Meals & Corporate Events"
      subtitle="The complete guide to private chef services in Sanur and its surrounding neighbourhoods"
      heroImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80"
      heroImageAlt="Private chef preparing a fresh family dinner in a Sanur villa kitchen with local market ingredients"
      ogImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80"
      keywords={['private chef sanur', 'sanur private chef', 'sanur villa chef', 'private chef bali sanur', 'family chef sanur bali']}
      highlights={['Family Menus', 'Multi-Day Stays', 'Sindhu Market Sourcing', 'From IDR 700K/person']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Private Chef Sanur', href: '/private-chef/sanur', desc: 'Book a private chef in Sanur — day rates and menus.' },
        { label: 'Mobile Cocktail Bar', href: '/in-villa-service/bartenders', desc: 'Family celebration free-flow packages.' },
        { label: 'Villa Catering', href: '/catering', desc: 'Birthday and reunion catering formats.' },
        { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'Published multi-day meal plans.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Private Chef Sanur Guide', 'https://mychef.id/blog/private-chef-sanur-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef Sanur: Family Villa Dining, Expat Meals & Corporate Events',
          description: 'Book a private chef in Sanur for family villa dinners, multi-day meal service, expat household cooking, and corporate team events.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-chef-sanur-guide' },
          url: 'https://mychef.id/blog/private-chef-sanur-guide',
        },
      ]}
      ctaText="Reserve Your Sanur Chef"
      ctaSubtext="From a single family dinner to a two-week villa cooking arrangement, we match you with the right Sanur chef."
    />
  )
}
