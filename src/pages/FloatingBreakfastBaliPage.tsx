import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { UtensilsCrossed, Heart, Users, Leaf } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'The Bali Floating Breakfast',
    title: 'What Is a Floating Breakfast — and Why Bali Does It Best',
    body: `<p>A floating breakfast is exactly what it sounds like: a beautifully arranged tray of food and drink set afloat in a private pool, waiting for you as you wade in on a warm Bali morning. It is one of those experiences that photographs instantly recognisable — rose petals scattered across the water, tropical fruit fanned in vivid colour, freshly squeezed juice catching the light — and yet, lived in person, it is even more beautiful than any image conveys.</p>

    <p>Bali has become the global home of this experience for good reason. The combination of year-round warmth, world-class private villa culture (most Bali villas include a private pool as standard), and an Indonesian hospitality tradition that treats breakfast as a ceremony rather than a refuelling stop — all of this makes the island the natural setting for floating breakfasts. What you get at a resort, however, is rarely the full experience: a fixed tray, generic fruit, and a photo taken for Instagram then cleared away. myCHEF does something different.</p>

    <p>When you add a floating breakfast to a myCHEF private chef booking, a private Balinese chef arrives at your villa two hours before you're needed anywhere near the pool. The chef handles everything: the tray setup, the flower petals, the props, the Instax details. More importantly, the chef <em>cooks</em>. Your eggs are made to order — soft scrambled, poached, or a nasi goreng if you want it. Your smoothie bowl is blended fresh. Your Balinese coffee is brewed properly. This is a private chef experience, not a room-service drop-off.</p>

    <p>The result is a breakfast that takes 20 minutes of your time to arrange (one WhatsApp message) and creates memories that outlast the trip. Guests who book the myCHEF floating breakfast consistently describe it as the single most special morning of their Bali stay — whether that's a honeymoon couple on their first morning, a family marking a birthday at sunrise, or solo travellers who decided they deserved something extraordinary.</p>

    <p>We operate across all major Bali villa areas: Canggu, Seminyak, Uluwatu, Ubud, Nusa Dua, and Jimbaran. Pricing starts at <strong>IDR 700,000 per person</strong> for the Classic package and scales with the level of curation you want. Every booking includes full pool setup, fresh flowers, and a personally served breakfast — no self-assembly, no compromise.</p>`,
  },
  {
    id: 'what-included',
    type: 'content' as const,
    subtitle: 'Full Setup Included',
    title: 'What Is Included in Every myCHEF Floating Breakfast',
    body: `<p>Every floating breakfast booking — regardless of package — includes a complete pool setup handled entirely by the chef team before you arrive poolside. Here is exactly what comes with each experience:</p>

    <p><strong>Pool Setup &amp; Styling:</strong> Floating tray (or trays for multiple guests) positioned and secured. Fresh rose petals and tropical flower heads scattered across the pool surface. Candles or tea lights arranged around the pool ledge for early-morning bookings. Optional props — polaroid frames, "do not disturb" signs, floating candles — included on request.</p>

    <p><strong>Breakfast Menu (all prepared fresh on-site):</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;">
      <li>Seasonal tropical fruit selection — dragon fruit, mango, papaya, rambutan, pineapple, watermelon — fanned and styled on the tray</li>
      <li>Eggs your way: soft scrambled, poached, sunny-side up, or Balinese nasi goreng</li>
      <li>Freshly baked croissants or sourdough toast with house-made Balinese sambal and butter</li>
      <li>Smoothie bowl (acai, dragon fruit, or green) with granola, coconut flakes, and fresh toppings</li>
      <li>Fresh-pressed juice — orange, watermelon, or pineapple-ginger</li>
      <li>Balinese single-origin coffee (brewed V60 or French press) or Bali tea</li>
    </ul>

    <p><strong>Service:</strong> The chef remains on-site throughout the breakfast to refill, replenish, and serve any additional items. Cleanup is handled completely before the chef leaves — you return to a spotless pool and kitchen. All dietary requirements (vegan, gluten-free, dairy-free) are accommodated with advance notice at no extra charge.</p>`,
  },
  {
    id: 'packages',
    type: 'features' as const,
    subtitle: 'Package Options',
    title: 'Choose Your Floating Breakfast Package',
    features: [
      {
        icon: UtensilsCrossed,
        title: 'Classic Bali — IDR 700,000/person',
        desc: 'The signature experience: full tropical fruit selection, eggs your way, fresh juice, Balinese coffee, croissant or toast, rose petal pool setup, and service. Perfect for couples and small groups who want the complete floating breakfast without additional add-ons. Minimum 2 guests.',
      },
      {
        icon: Heart,
        title: 'Honeymoon Edition — IDR 700,000/person',
        desc: 'Elevated for couples celebrating a honeymoon or anniversary. Adds a chilled bottle of sparkling wine or Bali rosé on the tray, champagne flutes, a custom "Just Married" floating sign, additional rose petals, and a 3-course breakfast sequence (fruit → savoury → pastry and dessert). Photography-optimised setup.',
      },
      {
        icon: Users,
        title: 'Family Edition — IDR 700,000/person',
        desc: 'Designed for families with children. Uses a pool-ledge setup (trays positioned at the pool edge, not free-floating) for safety with young children. Includes a dedicated kids\' smoothie bowl, banana pancakes with honey, and a simplified fruit plate alongside the full adult menu. Up to 6 guests across both trays.',
      },
      {
        icon: Leaf,
        title: 'Wellness Bowl Edition — IDR 700,000/person',
        desc: 'Plant-forward and nutrient-dense: two smoothie bowls (choice of acai or dragon fruit base), raw granola, seasonal tropical fruit, cold-pressed juice, herbal Bali tea, chia pudding, and avocado toast on gluten-free sourdough. Fully vegan and gluten-free by default. Ideal for wellness retreat guests and health-conscious travellers.',
      },
    ],
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Bali-Wide Coverage',
    title: 'Floating Breakfast by Bali Location',
    body: `<p>myCHEF provides floating breakfast services across all major Bali villa areas. While the experience is consistent wherever you are, each area has its own character worth knowing before you book.</p>

    <p><strong>Canggu:</strong> Bali's most popular villa area for younger couples and digital nomads. Canggu villas typically feature sleek, modern pools with rice-field backdrops or rooftop terraces. The floating breakfast at a Canggu villa benefits from the area's effortless cool-aesthetic — the kind of morning you'd see on a travel influencer's feed. <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">Private chef services in Canggu →</a></p>

    <p><strong>Seminyak:</strong> Bali's original luxury villa district. Seminyak villas tend toward lavish pool designs — wide, deep, surrounded by lush tropical gardens. The floating breakfast setup here photographs exceptionally well with the mature garden backdrop. <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">Private chef services in Seminyak →</a></p>

    <p><strong>Uluwatu:</strong> Clifftop villas with ocean or jungle views. The morning light in Uluwatu — particularly in the dry season (May–October) — is extraordinary. A floating breakfast at an Uluwatu infinity pool with the Indian Ocean in the background is one of the most photographed experiences on the island.</p>

    <p><strong>Ubud:</strong> The cultural heart of Bali, surrounded by rice terraces and jungle. Ubud villa pools often overlook ravines or terraced paddies. The atmosphere is quieter and more meditative than the coastal areas — ideal for the Wellness Bowl package or a mindful, unhurried morning.</p>

    <p><strong>Nusa Dua &amp; Jimbaran:</strong> Bali's established resort peninsula, with large beachfront villa compounds and exceptionally calm sea mornings. Nusa Dua is perfect for family floating breakfasts; Jimbaran's fishing-village character adds a local, unhurried feel to the experience.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'Step by Step',
    title: 'How Your Floating Breakfast Is Organised',
    body: `<p>Booking and receiving a myCHEF floating breakfast is designed to be effortless. Here is the exact sequence from first contact to final bite:</p>

    <p><strong>Step 1 — Book via WhatsApp (5 minutes):</strong> Send us a message with your villa address, preferred date and time, number of guests, and any dietary requirements. We confirm availability and the chef assignment within the hour. A 50% deposit secures the booking.</p>

    <p><strong>Step 2 — Chef arrives at your villa (2 hours before your breakfast time):</strong> If your floating breakfast is set for 8:00am, the chef arrives by 6:00am. The chef brings all ingredients, props, and equipment — you do not need to prepare or purchase anything.</p>

    <p><strong>Step 3 — Pool setup (30–45 minutes):</strong> While you sleep or start your morning, the chef prepares the pool: floating trays positioned, rose petals scattered, candles placed, props arranged. The pool is ready before the chef begins cooking.</p>

    <p><strong>Step 4 — Breakfast is prepared fresh (45–60 minutes):</strong> All food is cooked to order in your villa kitchen. Smoothie bowls are blended, eggs are cooked, coffee is brewed, juice is pressed. Everything arrives at the pool simultaneously, perfectly timed.</p>

    <p><strong>Step 5 — You arrive to find it ready:</strong> The chef walks you to the pool, helps you into position, and the tray is floated to you. Photographs are taken at your leisure — the chef is there to assist and to ensure the food is served at the right temperature.</p>

    <p><strong>Step 6 — Breakfast is served and cleared:</strong> The chef serves each course, refills drinks, and answers any questions about the food. When you are finished, the chef handles all cleanup. You return to a spotless kitchen, cleared pool, and composted waste — leaving only the memory.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Questions',
    title: 'Floating Breakfast FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Ready to Book?',
    title: 'Add a Floating Breakfast to Your Chef Booking',
    body: 'Floating breakfast is booked as an add-on to a myCHEF private chef or catering service. Tell us your main service, villa location and preferred date — we\'ll confirm availability and send the setup details within the hour.',
    primaryAction: {
      label: 'Add to My Booking on WhatsApp',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20add%20a%20floating%20breakfast%20to%20my%20chef%20booking.',
      external: true,
    },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  { question: 'How much does catering in Bali cost?', answer: 'Many villa formats start around IDR 700K++ per person. See <a href="/catering">catering</a> and <a href="/pricing">pricing</a>.' },
  { question: 'What formats do you offer?', answer: 'BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate — all under <a href="/catering">catering</a>.' },
  { question: 'Is catering the same as private chef hire?', answer: 'No. Catering is usually one event; multi-day stays use <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Do prices include staff and cleanup?', answer: 'Serviced packages include chef/staff and cleanup; drop-off does not keep staff on site.' },
  { question: 'Can you cook in an Airbnb villa?', answer: 'Yes with a workable kitchen — share the listing when booking.' },
  { question: 'Minimum guest counts?', answer: 'Vary by format (drop-off lower, buffet higher). We route you correctly.' },
  { question: 'Can menus be customised?', answer: 'Yes — proteins, spice, diets locked before shopping.' },
  { question: 'Travel fees?', answer: 'Remote areas may add a fee quoted upfront.' },
  { question: 'Can we add a mobile cocktail bar?', answer: 'Yes — complete packages from IDR 500,000++ per guest (min 10), not hourly hire. Stack with chef or catering. <a href="/in-villa-service/bartenders">Mobile bar packages →</a> · <a href="/experiences/private-cocktail-party">Cocktail party →</a>' },
  { question: 'Kids and allergies?', answer: 'Yes — <a href="/kids-menus">kids menus</a> and allergy protocols.' },
  { question: 'How do I book catering?', answer: 'WhatsApp date, guests, area and format — or <a href="/quote">quote</a>.' },
  { question: 'Rain plan?', answer: 'Covered setups and indoor pivots planned ahead.' },
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
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Private chef romantic dinner at your Bali villa — candles, flowers, a tailored menu.' },
  { label: 'Private Chef Canggu', href: '/private-chef/canggu', desc: 'Private chef services across Canggu — daily cooking, events, and experiences.' },
  { label: 'Private Chef Seminyak', href: '/private-chef/seminyak', desc: 'Seminyak villa private chef hire — all occasions, all group sizes.' },
  { label: 'Honeymoon Private Chef Bali', href: '/honeymoon-chef', desc: 'Complete guide to planning a private chef honeymoon experience in Bali.' },
  { label: 'Proposal Dinner Bali', href: '/proposal-dinner', desc: 'Private chef proposal dinner planning guide — rings, menus, locations.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing for all myCHEF services in Bali.' },
]

export default function FloatingBreakfastBaliPage() {
  return (
    <PremiumPage
      slug="blog/floating-breakfast-bali"
      title="Floating Breakfast Bali — Private Chef In-Villa Experience"
      description="Book a private chef floating breakfast in Bali. Rose-petal pool setup, tropical fruits, eggs your way. From IDR 700,000/person. Seminyak, Canggu, Uluwatu, Ubud."
      seoTitle="Floating Breakfast Bali | Private Chef In-Villa Experience | myCHEF"
      seoDescription="Book a private chef floating breakfast in Bali. Rose-petal pool setup, tropical fruits, eggs your way. From IDR 700,000/person. Seminyak, Canggu, Uluwatu, Ubud."
      canonicalUrl="https://mychef.id/blog/floating-breakfast-bali"
      h1="Floating Breakfast Bali"
      subtitle="The Ultimate Private Chef Floating Breakfast Experience"
      heroImage="/generated/mychef-catering-bali-hero-floating-breakfast.webp"
      heroImageAlt="Floating breakfast tray in a Bali villa pool with tropical fruit and fresh pastries"
      ogImage="https://mychef.id/generated/mychef-catering-bali-hero-floating-breakfast.webp"
      keywords={['floating breakfast bali', 'bali floating breakfast', 'private chef floating breakfast', 'villa floating breakfast bali', 'floating breakfast pool bali']}
      highlights={['Packages', 'Locations', 'How It Works', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Floating Breakfast Bali', 'https://mychef.id/blog/floating-breakfast-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Floating Breakfast Bali — The Ultimate Private Chef In-Villa Experience',
          description: 'Book a private chef floating breakfast in Bali. Rose-petal pool setup, tropical fruits, eggs your way. From IDR 700,000/person.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-catering-bali-hero-floating-breakfast.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/floating-breakfast-bali' },
          url: 'https://mychef.id/blog/floating-breakfast-bali',
          wordCount: 1300,
          keywords: 'floating breakfast bali, bali floating breakfast, private chef floating breakfast',
        },
      ]}
      ctaText="Add a Floating Breakfast to Your Booking"
      ctaSubtext="Floating breakfast is an add-on to a myCHEF private chef or catering booking — tell us your main service, villa and preferred date, and we'll confirm within the hour."
    />
  )
}
