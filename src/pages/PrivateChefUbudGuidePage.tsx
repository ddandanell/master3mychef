import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Private Chef Ubud',
    title: 'Private Chef Ubud: Farm-to-Table Dining, Balinese Feasts & Wellness Menus',
    body: `<p>Ubud is Bali\'s culinary and cultural heartland — a place where food is inseparable from ceremony, season, and the surrounding landscape. Hiring a private chef in Ubud means tapping into that context: a chef who sources from the rice paddies and organic farms that surround your villa, who understands Balinese ceremonial cuisine, and who can translate the region\'s wellness culture into menus that are as nourishing as they are extraordinary.</p>
    <p>myCHEF provides private chef services across the Ubud area — from the rice terrace villas of Penestanan and Tegalalang to the jungle retreats of Payangan and the artist villages of Mas and Campuhan. Whether you are staying for a long weekend or three months, we can build a chef arrangement that fits your schedule, your dietary preferences, and the unique character of your Ubud experience.</p>
    <p>Ubud guests tend to have more specific and considered food preferences than elsewhere in Bali. Wellness diets, plant-based menus, organic-only sourcing, and authentic Balinese ceremony food are all common requests here. Our chefs are selected for their knowledge of the region\'s food culture as well as their technical skills.</p>`,
  },
  {
    id: 'ubud-dining',
    type: 'content',
    subtitle: 'Ubud Food Culture',
    title: 'What Makes Ubud Private Chef Dining Different',
    body: `<p>Cooking in Ubud is not just about technique — it is about place. The best Ubud private chef experiences draw on:</p>
    <p><strong>Farm-to-table sourcing:</strong> Ubud\'s surrounding villages produce extraordinary organic vegetables, herbs, and tropical fruits. A myCHEF chef in Ubud will source from Subak-irrigated rice farms, organic veggie suppliers in Petulu and Pejeng, and the morning pasar (market) at Ubud\'s central market.</p>
    <p><strong>Authentic Balinese ceremony cuisine:</strong> Ubud is the centre of Balinese Hindu culture. Dishes like babi guling (suckling pig), bebek betutu (slow-roasted duck), lawar, and sate lilit originate here and are prepared here with more authentic technique than anywhere else.</p>
    <p><strong>Wellness and plant-based menus:</strong> Ubud has the highest concentration of yoga studios, wellness retreats, and raw food practitioners of any place in Bali. myCHEF chefs who work in Ubud are experienced with vegan, raw, Ayurvedic, and elimination-diet menus.</p>
    <p><strong>Rice paddy dining experiences:</strong> Many Ubud villas overlook rice terraces. A private chef dinner served on an open terrace above the paddies at sunset — with candles, local flowers, and a multi-course tasting menu — is one of the most memorable dining experiences available anywhere in Southeast Asia.</p>`,
  },
  {
    id: 'experiences',
    type: 'content',
    subtitle: 'Chef Experiences',
    title: 'Private Chef Experiences Available in Ubud',
    body: `<p>myCHEF offers the following chef experiences for Ubud villas and retreats:</p>
    <p><strong>Single dinner service:</strong> A private chef for one evening — ideal for a birthday dinner, anniversary, family reunion, or special occasion. From a simple 3-course Balinese feast to a 7-course tasting menu with wine pairings. Minimum 2 guests.</p>
    <p><strong>Retreat catering:</strong> Ubud hosts many yoga retreats, healing retreats, and wellness programmes. myCHEF provides full daily meal service for retreat groups — breakfast, lunch, dinner, and snacks — with menus designed around the retreat\'s dietary philosophy. From 8 to 40 guests.</p>
    <p><strong>Cooking class experience:</strong> A private chef-led Balinese cooking class, visiting the morning market to source ingredients, then cooking traditional dishes together in your villa kitchen. Suitable for couples, families, and small groups up to 8 people. See our <a href="/blog/bali-villa-cooking-class-private-chef" class="text-[#C5A028] hover:underline font-medium">cooking class guide</a>.</p>
    <p><strong>Weekly household chef arrangement:</strong> For long-stay guests and expats in Ubud, a recurring private chef who cooks 3-5 days per week. See the <a href="/blog/household-chef-bali-hiring-guide" class="text-[#C5A028] hover:underline font-medium">household chef guide</a>.</p>
    <p><strong>Floating breakfast:</strong> A floating breakfast in the villa pool. See our <a href="/blog/floating-breakfast-bali" class="text-[#C5A028] hover:underline font-medium">floating breakfast guide</a>.</p>`,
  },
  {
    id: 'where-to-stay',
    type: 'content',
    subtitle: 'Coverage Area',
    title: 'Ubud Areas We Cover: Penestanan, Tegalalang, Campuhan, Payangan & More',
    body: `<p>myCHEF private chef services cover the full Ubud region. Our chefs travel to all of the following villa areas:</p>
    <p><strong>Central Ubud:</strong> The core town area including Monkey Forest Road, Jalan Hanoman, and the central market district.</p>
    <p><strong>Penestanan:</strong> The artist quarter west of central Ubud, known for its traditional Balinese paintings and villa compounds.</p>
    <p><strong>Campuhan Ridge:</strong> Villas along the famous walking ridge above the river confluence. Spectacular views, quieter setting than central Ubud.</p>
    <p><strong>Tegalalang:</strong> Home to the famous rice terrace vistas. Villas here include both large group retreats and intimate couples properties overlooking the paddies.</p>
    <p><strong>Payangan:</strong> North of Ubud, known for its large jungle villa compounds, healing springs, and a quieter, more spiritual atmosphere.</p>
    <p><strong>Mas, Batuan, Kedewatan:</strong> The woodcarving and silversmith villages south of Ubud, and the luxury resort territory along the Ayung River.</p>`,
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Pricing',
    title: 'Private Chef Ubud Pricing: What to Expect',
    body: `<p>Private chef pricing in Ubud:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Standard dinner (3 courses, 2-6 guests):</strong> From IDR 550,000 – 750,000 per person.</li>
      <li><strong>Premium/tasting menu (5-7 courses, 2-8 guests):</strong> IDR 850,000 – 1,200,000 per person.</li>
      <li><strong>Wellness/retreat menus (plant-based, organic):</strong> IDR 600,000 – 1,000,000 per person per day.</li>
      <li><strong>Cooking class experience:</strong> IDR 800,000 – 1,200,000 per person including market tour.</li>
    </ul>
    <p style="margin-top:0.75rem;">For a detailed cost breakdown, see our <a href="/blog/private-chef-cost-bali" class="text-[#C5A028] hover:underline font-medium">Bali private chef cost guide</a>.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book Your Chef',
    title: 'Reserve a Private Chef in Ubud',
    body: 'Tell us your dates, villa area, and dining preferences. We will match you with an available Ubud chef and share a menu proposal.',
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/6289674072020' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: "Do myCHEF chefs in Ubud specialise in Balinese cuisine?",
    answer: "Yes. Our Ubud-based chefs are selected for their knowledge of authentic Balinese cuisine including ceremonial dishes like babi guling, bebek betutu, lawar, and sate lilit, as well as their ability to cook with locally sourced organic ingredients.",
  },
  {
    question: "Can a private chef cook for my yoga retreat group in Ubud?",
    answer: "Yes. myCHEF provides full meal service for retreat groups in Ubud from small 8-person wellness weekends to 40-person residential programmes.",
  },
  {
    question: "Is organic sourcing available for private chef meals in Ubud?",
    answer: "Yes. Ubud has the best access to certified organic produce in Bali. Our Ubud chefs source from organic farms and suppliers on request. Organic sourcing adds approximately 15-25% to ingredient costs.",
  },
  {
    question: "Do you cover villas in Tegalalang, Payangan, and other outer Ubud areas?",
    answer: "Yes. myCHEF covers the full Ubud region including central Ubud, Penestanan, Campuhan, Tegalalang, Payangan, Mas, Batuan, and Kedewatan.",
  },
  {
    question: "What is the minimum booking for a private chef in Ubud?",
    answer: "The minimum booking is one dinner service for 2 guests.",
  },
]

export default function PrivateChefUbudGuidePage() {
  return (
    <PremiumPage
      slug="blog/private-chef-ubud-guide"
      title="Private Chef Ubud: Farm-to-Table Dining, Balinese Feasts & Wellness Menus"
      description="Book a private chef in Ubud for villa dinners, yoga retreat catering, cooking classes, and farm-to-table menus. Covers Penestanan, Tegalalang, Payangan, Campuhan and all Ubud areas."
      h1="Private Chef Ubud — Farm-to-Table Dining, Balinese Feasts & Wellness Menus"
      subtitle="The complete guide to private chef experiences in Ubud and the surrounding village areas"
      heroImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80"
      heroImageAlt="Private chef preparing a farm-to-table Balinese feast in an Ubud villa kitchen"
      ogImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80"
      keywords={['private chef ubud', 'ubud private chef', 'private chef bali ubud', 'ubud villa chef', 'ubud retreat catering']}
      highlights={['Farm-to-Table', 'Balinese Cuisine', 'Wellness Menus', 'From IDR 550K/person']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Private Chef Canggu Guide', href: '/blog/private-chef-canggu-guide', desc: 'Surf culture dining, villa parties, and casual chef experiences in Canggu.' },
        { label: 'Private Chef Seminyak Guide', href: '/blog/private-chef-seminyak-guide', desc: 'Luxury villa dining and fine dining experiences in Seminyak.' },
        { label: 'Bali Villa Cooking Class', href: '/blog/bali-villa-cooking-class-private-chef', desc: 'Learn to cook Balinese dishes with a private chef in your villa.' },
        { label: 'Pricing Guide', href: '/pricing', desc: 'Full breakdown of private chef costs across all Bali areas.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Private Chef Ubud Guide', 'https://mychef.id/blog/private-chef-ubud-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef Ubud: Farm-to-Table Dining, Balinese Feasts & Wellness Menus',
          description: 'Book a private chef in Ubud for villa dinners, yoga retreat catering, cooking classes, and farm-to-table menus.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-chef-ubud-guide' },
          url: 'https://mychef.id/blog/private-chef-ubud-guide',
        },
      ]}
      ctaText="Reserve Your Ubud Chef"
      ctaSubtext="We match you with the right chef for your Ubud villa or retreat."
    />
  )
}
