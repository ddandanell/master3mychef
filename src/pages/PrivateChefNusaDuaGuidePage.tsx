import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Nusa Dua Private Chef',
    title: 'Why Nusa Dua Is Bali\'s Premier Destination for Private Chef Dining',
    body: `<p>Nusa Dua is unlike anywhere else in Bali. A purpose-built luxury enclave on the southern Bukit Peninsula, it hosts the island's highest concentration of five-star resort hotels, gated villa compounds, and world-class beach clubs. Guests here arrive expecting the finest — and a <a href="/services" class="text-[#7E6410] hover:underline font-medium">private chef</a> delivers exactly that, bringing restaurant-calibre cuisine directly into your villa or resort suite.</p>
    <p>The area is defined by its exclusivity. Wide boulevards, manicured grounds, and international hotel brands sit alongside private residential villas that regularly host honeymooners, corporate retreats, and multi-generational family holidays. A private chef experience fits this environment perfectly — it matches the standard of service guests already expect, while adding a level of personalisation no hotel restaurant can match.</p>
    <p>Whether you are staying in a beachfront villa, a resort-managed bungalow, or a private compound within the BTDC zone, myCHEF chefs are fully briefed on working within Nusa Dua properties and coordinating with villa managers and resort concierge teams to deliver a seamless service.</p>`,
  },
  {
    id: 'menu-style',
    type: 'content',
    subtitle: 'Menu & Cuisine',
    title: 'Fresh Seafood, Indonesian Classics, and International Fine Dining',
    body: `<p>Nusa Dua's proximity to the sea means the freshest catch is always available. Grilled jimbaran-style seafood, whole fish in aromatic Balinese spice, and chilled prawns with sambal matah are perennial guest favourites that showcase local produce at its best.</p>
    <p>Guests also frequently request Indonesian tasting menus — a curated progression through the archipelago's most celebrated dishes. From fragrant Javanese <em>opor ayam</em> to slow-braised Balinese <em>babi guling</em>-inspired pork and layered Sumatran rendang, a private chef can bring the full breadth of Indonesian cuisine to your dining table without the need to leave the villa.</p>
    <p>For guests who prefer international fine dining, myCHEF chefs are trained in European, Japanese, and fusion cuisines. A seven-course Western tasting menu with wine pairings, a Japanese omakase, or a Mediterranean mezze spread — your chef will design a menu around your preferences and dietary requirements.</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Fresh Seafood:</strong> Daily market catches — grilled, steamed, or cured — with Balinese spice rubs and sambal accompaniments.</li>
      <li><strong>Indonesian Cuisine:</strong> Authentic regional dishes from across the archipelago, prepared with traditional technique and fresh local ingredients.</li>
      <li><strong>International Fine Dining:</strong> European, Japanese, and fusion menus designed for couples, families, and corporate groups.</li>
      <li><strong>Dietary Accommodations:</strong> Vegan, vegetarian, gluten-free, halal, and allergy-aware menus available — discuss requirements at booking.</li>
    </ul>`,
  },
  {
    id: 'group-sizes',
    type: 'content',
    subtitle: 'Group Sizes',
    title: 'Private Chef Service for 2 to 20 Guests in Nusa Dua',
    body: `<p>myCHEF private chefs in Nusa Dua serve groups of all sizes — from an intimate dinner for two to a full villa feast for twenty. The service scales smoothly: a solo chef handles up to eight guests with ease, while larger groups are supported by a chef-and-kitchen-assistant team to maintain quality and timing across every plate.</p>
    <p><strong>Couples and small groups (2–4):</strong> Intimate fine dining, romantic anniversary dinners, and honeymoon experiences. The chef can create a surprise menu or work closely with guests to co-design every course.</p>
    <p><strong>Family groups (5–10):</strong> Flexible menus that accommodate multiple generations — adult tasting menus alongside kid-friendly options cooked by the same chef from the same kitchen.</p>
    <p><strong>Villa parties and corporate groups (10–20):</strong> Buffet, family-style, or plated service for larger gatherings. Staffing can be extended to include <a href="/in-villa-service/waiters" class="text-[#7E6410] hover:underline font-medium">professional waiters</a>, <a href="/in-villa-service/bartenders" class="text-[#7E6410] hover:underline font-medium">bartenders</a>, and a <a href="/in-villa-service/sommelier" class="text-[#7E6410] hover:underline font-medium">sommelier</a> for a fully staffed event.</p>
    <p>Nusa Dua villas typically feature large, well-equipped kitchens and generous outdoor dining terraces — ideal for both formal plated dinners and relaxed open-air feasts. <a href="/locations/nusa-dua" class="text-[#7E6410] hover:underline font-medium">Learn more about private chef services in Nusa Dua</a>.</p>`,
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Pricing',
    title: 'Private Chef Costs in Nusa Dua — What to Budget',
    body: `<p>Private chef pricing in Nusa Dua is based on menu complexity, the number of courses, group size, and the experience level of the chef. Indicative ranges per person (excluding beverages) are as follows:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Everyday dining (2–3 courses):</strong> IDR 700,000 – 850,000 per person. Home-cooked style, fresh local ingredients, ideal for families and casual villa dinners.</li>
      <li><strong>Premium dining (4–5 courses):</strong> IDR 850,000 – 1,200,000 per person. Restaurant-quality plated service, broader menu selection, suitable for couples and celebrations.</li>
      <li><strong>Fine dining / tasting menus (6–8 courses):</strong> IDR 1,200,000 – 1,500,000 per person. Michelin-calibre technique, premium ingredients including local seafood and imported produce, paired with wine recommendations.</li>
    </ul>
    <p style="margin-top:0.75rem;">Pricing per person decreases as group size increases — the fixed cost of the chef's time is spread across more guests. Additional costs include ingredient upgrades (truffle, wagyu, fresh lobster), wine and cocktail service, and optional staffing such as a dedicated waiter or sommelier.</p>
    <p>For a detailed breakdown, visit our <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">pricing guide</a> or use the <a href="/calculator" class="text-[#7E6410] hover:underline font-medium">cost calculator</a> to estimate your specific booking.</p>`,
  },
  {
    id: 'how-to-book',
    type: 'content',
    subtitle: 'How to Book',
    title: 'Booking a Private Chef in Nusa Dua — Step by Step',
    body: `<p>Booking a private chef in Nusa Dua through myCHEF is straightforward. Here is the typical process:</p>
    <p><strong>1. Submit your enquiry.</strong> Tell us your dates, villa address, number of guests, and any cuisine preferences or dietary requirements. You can do this via WhatsApp, the contact form, or directly through your villa concierge if they have a myCHEF partnership.</p>
    <p><strong>2. Receive chef recommendations.</strong> We match you with available chefs who specialise in your preferred cuisine style and have experience with Nusa Dua properties. <a href="/chefs" class="text-[#7E6410] hover:underline font-medium">Browse chef profiles</a> to get a sense of who is available.</p>
    <p><strong>3. Confirm the menu.</strong> Your chef will consult with you on the menu — either following a proposed plan or co-designing it from scratch. Dietary restrictions, allergies, and preferences are locked in at this stage.</p>
    <p><strong>4. Confirm booking and pay deposit.</strong> A deposit secures your booking. The remaining 50% is due the day before the event or per agreed terms.</p>
    <p><strong>5. Sit back and enjoy.</strong> Your chef arrives at the agreed time — typically 1.5–2 hours before your dinner — handles all preparation, cooking, and cleanup, and leaves your kitchen as they found it.</p>
    <p style="margin-top:0.75rem;">We recommend booking at least 3–5 days in advance for standard requests, and 1–2 weeks ahead for fine dining, large groups, or special occasions. <a href="/contact" class="text-[#7E6410] hover:underline font-medium">Contact our team</a> to check availability for your dates.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Ready to Book',
    title: 'Reserve Your Private Chef in Nusa Dua',
    body: 'Tell us your dates, villa address, and group size and we will match you with the right chef for your stay.',
    primaryAction: { label: 'Browse Our Chefs', href: '/chefs' },
    secondaryAction: { label: 'Contact Us', href: '/contact' },
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
  { question: 'Is this guide free?', answer: 'Yes — educational content to help you plan. Booking is optional.' },
  { question: 'Can myCHEF deliver what this guide describes?', answer: 'Yes — start at <a href="/services">services</a> or <a href="/private-chef-bali">private chef</a>.' },
  { question: 'How do I get prices after reading?', answer: 'See <a href="/pricing">pricing</a> or WhatsApp a fixed quote request.' },
  { question: 'Does advice apply across Bali?', answer: 'Yes for major villa areas — confirm logistics for remote spots.' },
  { question: 'Allergies covered in real bookings?', answer: 'Yes — brief us at enquiry. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide</a>.' },
  { question: 'Daily chef vs one dinner?', answer: 'Multi-day stays → private chef day rates; celebration nights → fine dining or catering.' },
  { question: 'How to book after this guide?', answer: 'WhatsApp date, guests, area — <a href="/book">book</a>.' },
  { question: 'Related services?', answer: 'Browse <a href="/dining-styles">dining styles</a> and <a href="/events">events</a>.' },
]

export default function PrivateChefNusaDuaGuidePage() {
  return (
    <PremiumPage
      slug="blog/private-chef-nusa-dua-guide"
      title="Private Chef Nusa Dua | Villa Dining at Your Resort | myCHEF"
      description="Book a private chef in Nusa Dua for your villa or resort stay. Fresh seafood, Indonesian cuisine and international fine dining. Groups 2–20."
      seoTitle="Private Chef Nusa Dua | Villa Dining at Your Resort | myCHEF"
      seoDescription="Book a private chef in Nusa Dua for your villa or resort stay. Fresh seafood, Indonesian cuisine and international fine dining. Groups 2–20."
      canonicalUrl="https://mychef.id/blog/private-chef-nusa-dua-guide"
      h1="Private Chef Nusa Dua — Villa & Resort Dining"
      subtitle="Dedicated chef service for Nusa Dua villas, beach clubs, and resort escapes"
      heroImage="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1400&q=80"
      heroImageAlt="Private chef plating a fresh seafood dish for villa guests in Nusa Dua Bali"
      ogImage="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1400&q=80"
      keywords={['private chef nusa dua', 'nusa dua villa chef', 'private chef bali nusa dua', 'nusa dua private dining']}
      highlights={['Nusa Dua Villas', 'Fresh Seafood', 'Groups 2–20', 'From IDR 700K/person']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Private Chef Nusa Dua', href: '/private-chef/nusa-dua', desc: 'Book a private chef in Nusa Dua — day rates and menus.' },
        { label: 'Mobile Cocktail Bar', href: '/in-villa-service/bartenders', desc: 'Estate reception free-flow packages.' },
        { label: 'Corporate Catering', href: '/catering/corporate-catering', desc: 'Offsite meals with NPWP-ready invoicing.' },
        { label: 'Villa Catering', href: '/catering', desc: 'Buffet and plated for estate celebrations.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Private Chef Nusa Dua Guide', 'https://mychef.id/blog/private-chef-nusa-dua-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef Nusa Dua — Villa & Resort Dining Guide',
          description: 'Book a private chef in Nusa Dua for your villa or resort stay. Fresh seafood, Indonesian cuisine, and international fine dining.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1400&q=80',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-chef-nusa-dua-guide' },
          url: 'https://mychef.id/blog/private-chef-nusa-dua-guide',
        },
      ]}
      ctaText="Reserve Your Private Chef"
      ctaSubtext="We match you with the right chef for your Nusa Dua villa or resort stay."
    />
  )
}
