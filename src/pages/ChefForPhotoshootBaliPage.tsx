import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Chef for Food Photoshoot and Content Creation in Bali',
    body: `Bali sits at the intersection of outstanding food culture and one of the world's most active content creation economies. Hotels, resorts, food brands, travel publications, Instagram creators, and marketing agencies all produce food content here. Getting that content right requires more than a photographer with good light; it requires a chef who understands how food behaves in front of a camera.

myCHEF provides specialist chef hire for food photoshoots, video production, brand content days, and culinary content creation across Bali. Our chefs are experienced in both the cooking and the plating discipline required for photography: understanding hero shots, prop interaction, how sauces behave under studio lighting, and the difference between food that tastes good and food that photographs beautifully.

We work with professional photographers, production companies, hotel marketing teams, and individual content creators.`,
  },
  {
    id: 'what-chef-does',
    type: 'content',
    title: 'What a Food Photoshoot Chef Does',
    body: `**Hero Dish Preparation** -- The hero dish for a shoot is not the same as a restaurant dish. It may be plated, re-plated, and re-plated again until the shot is right. A photoshoot chef understands this and prepares with the buffer of duplicate portions, pre-cooked components held separately, and the ability to rebuild a plate from scratch quickly.

**Food Styling Collaboration** -- A chef who has worked on set knows how to work alongside a food stylist or to perform the styling role directly when a dedicated stylist is not in the budget. This includes understanding depth, height, negative space, colour theory on a plate, and how to use garnishes and sauces for visual impact rather than just flavour.

**Multiple Dish Volumes** -- Most content shoots require more dishes than a single portion: hero shots, detail shots, context shots, process shots, and overhead flat-lays all require either multiple portions or carefully timed service of fresh plates. Our chefs plan production schedules to meet these needs without the shoot waiting on the kitchen.

**Ingredient Sourcing for Shoot Day** -- The best photographic ingredients are not necessarily the cheapest available. Our chefs source market-fresh produce on the morning of the shoot, selecting specimens specifically for visual quality: the most symmetrical tomato, the most vibrant herbs, the most intact spices. This detail matters enormously in the final image.

**Process and Behind-the-Scenes Content** -- Many content briefs now require both the finished dish and the cooking process. A chef who can work elegantly in front of a camera, explain what they are doing, and repeat a technique multiple times cleanly is a different skill set from one focused purely on output. Our photoshoot chefs are comfortable being on camera.`,
  },
  {
    id: 'use-cases',
    type: 'content',
    title: 'Projects We Support in Bali',
    body: `**Hotel and Resort Food Photography** -- Bali's luxury hotel sector produces a continuous demand for menu photography, lifestyle content, and seasonal campaign imagery. We provide chefs who produce and style dishes to the creative director's brief, working within set call times and multiple-dish shoot schedules.

**Food Brand Content** -- Local and international food brands producing content in Bali: sauce companies, premium ingredient suppliers, food tech brands, and culinary equipment brands. Our chefs can demonstrate product use authentically in a professional culinary context.

**Travel and Lifestyle Publications** -- Magazine and digital editorial shoots that require authentic Balinese cooking, market scenes, or villa dining settings. We source authentic local ingredients and provide chefs who can produce traditional Balinese dishes for editorial use.

**Social Media Content Creators** -- Food bloggers, travel influencers, and lifestyle creators who need a chef to produce hero food content for Instagram, TikTok, or YouTube. We work flexibly on smaller-scale content days with a single chef and a manageable dish count.

**Restaurant and Cafe Menu Photography** -- Established Bali restaurants and new openings photographing menus for digital and print. We work alongside your existing kitchen team or independently to produce the dishes to your standard, consistently, across a full menu photography day.

**Cookbook and Recipe Development** -- Recipe testing and photoshoot assistance for cookbook authors and culinary content platforms. A dedicated chef to test, refine, and then produce recipes for photography under studio conditions.`,
  },
  {
    id: 'balinese-food-content',
    type: 'content',
    title: 'Balinese and Indonesian Food for Content',
    body: `Balinese cuisine is visually extraordinary. The colours, the layering of spice pastes, the banana leaf presentation, the ceremony around the meal -- all of it translates into content that performs well across visual platforms.

Our chefs who specialise in Balinese cuisine for content work understand the specific visual elements that make Indonesian and Balinese food compelling:

**Colour contrast** -- The deep red of sambal, the golden turmeric of nasi kuning, the vivid green of pandan and fresh herbs against dark platters or natural wooden surfaces.

**Texture variety** -- Crispy tempeh against soft tofu, grilled protein alongside fresh sambal, the sheen of coconut-based sauces.

**Authenticity** -- Content that uses genuinely local ingredients and preparation methods reads as authentic to audiences who know the cuisine. Our Balinese-specialist chefs produce the real thing.

**Prop alignment** -- Banana leaves, rattan mats, traditional Balinese ceramics, local market baskets, and woven trays all serve as natural props that require no styling budget. Our chefs know how to work with these materials properly.`,
  },
  {
    id: 'logistics',
    type: 'content',
    title: 'Shoot Day Logistics',
    body: `**Kitchen Requirements** -- We can work in a professional kitchen, a villa kitchen, an on-location outdoor setting, or a purpose-built set. For complex shoots, we recommend a prep kitchen separate from the photography area so dishes arrive on set ready rather than being finished in front of the camera.

**Call Sheet Integration** -- Our chefs work from your call sheet and are briefed on shot order, dish timing, and set-up windows. We integrate with your production team rather than operating independently.

**Day Rate** -- Food photoshoot chefs are billed on a day rate rather than per dish. Full day (8 hours) and half day (4 hours) rates available. Ingredient cost is billed at actual market price, receipted.

**Advance Briefing** -- A pre-shoot briefing call or detailed brief is standard for any shoot with more than 5 dishes. This covers dish list, styling references, any brand restrictions, allergen considerations for on-camera talent, and ingredient sourcing priorities.`,
  },
]

const faqs = [
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
  { question: 'Do you clean up?', answer: 'Yes on serviced formats.' },
  { question: 'Kids welcome?', answer: 'Yes with adapted menus when needed. <a href="/kids-menus">Kids menus</a>.' },
  { question: 'Who is myCHEF?', answer: 'Bali villa hospitality company — chefs, catering, events and staffing. <a href="/about">About</a> · <a href="/why-mychef">Why myCHEF</a>.' },
  { question: 'More questions?', answer: 'See the central <a href="/faq">FAQ</a>.' },
  { question: 'What deposit do you require?', answer: 'A 50% deposit confirms your booking and locks the date. The balance is typically due the day before service. Full terms: <a href="/cancellation">cancellation policy</a>.' },
  { question: 'What does "++" mean on prices?', answer: '"++" means 11% government tax and 10% service charge are added to the listed price. Written quotes show the all-in total before you pay.' },
  { question: 'Which areas of Bali do you cover?', answer: 'Island-wide villa coverage including Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Berawa and Pererenan. Browse <a href="/locations">locations</a>.' },
  { question: 'How far in advance should I book?', answer: 'A few days for most dinners; one to two weeks for larger events; longer for peak season and weddings. Last-minute is often possible — ask on WhatsApp.' },
  { question: 'Can you accommodate allergies and special diets?', answer: 'Yes — vegan, vegetarian, gluten-free, nut-free, shellfish allergy, pregnancy-safe and halal-sensitive menus when briefed in advance, at no extra charge. Guide: <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">food allergies</a>.' },
  { question: 'Do you clean up after service?', answer: 'Yes on serviced chef, catering and fine-dining formats — kitchen and service areas restored before we leave.' },
  { question: 'How do I get a quote?', answer: 'WhatsApp date, guest count, villa area and what you want. Or use <a href="/quote">quote</a> / <a href="/book">book</a> / <a href="/faq">FAQ</a>.' },
  { question: 'What if a chef or staff member cannot make it?', answer: 'We send a verified replacement of equivalent role or refund that service. Details: <a href="/why-mychef">why myCHEF</a>.' },
]

const relatedPages = [
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'In-villa private chef service' },
  { label: 'Cooking Class Bali', href: '/fine-dining', desc: 'Private chef-led cooking classes' },
  { label: 'Fine Dining Bali', href: '/fine-dining', desc: 'Luxury private dining experiences' },
  { label: 'Tasting Menu Bali', href: '/blog/tasting-menu-bali', desc: 'Multi-course private tasting menus' },
  { label: 'Indonesian Street Food Guide', href: '/blog/indonesian-street-food-private-chef-bali', desc: 'Authentic Indonesian street food by private chef' },
  { label: 'Chef Placement Bali', href: '/staffing/private-chef-placement', desc: 'Permanent chef hire and placement' },
]

export default function ChefForPhotoshootBaliPage() {
  return (
    <PremiumPage
      slug="blog/chef-for-photoshoot-bali"
      title="Chef for Food Photoshoot in Bali -- Content Creation and Brand Photography | myCHEF"
      seoTitle="Chef for Food Photoshoot Bali -- Content Creation & Video | myCHEF"
      description="Specialist chef hire for food photoshoots, content creation, and brand photography in Bali. Hotels, brands, creators, and editorial publications."
      seoDescription="Hire a chef for food photoshoots and content creation in Bali. Hotels, brands, influencers and publications. Market-fresh sourcing, food styling, Balinese."
      h1="Chef for Food Photoshoot and Content Creation in Bali"
      subtitle="Bali is where the world makes food content. We provide the chef who makes it right."
      heroImage="/images/blog/chef-photoshoot-bali.jpg"
      heroImageAlt="Indonesian private chef plating a beautifully styled dish for a food photography shoot in a Bali villa kitchen"
      ogImage="/images/blog/chef-photoshoot-bali.jpg"
      canonicalUrl="https://mychef.id/blog/chef-for-photoshoot-bali"
      keywords={[
        'chef for photoshoot bali',
        'food photography chef bali',
        'food stylist chef bali',
        'content creation chef bali',
        'brand photography chef bali',
        'food shoot bali',
        'culinary content creator bali',
        'food photography bali',
        'instagram food content bali',
        'hotel food photography bali',
      ]}
      highlights={['Photoshoot Experienced', 'Balinese Food Specialist', 'Market-Fresh Sourcing', 'On-Camera Capable']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Brief Your Photoshoot Chef"
      ctaSubtext="Send us your shoot brief, dish count, location, and timeline -- we will confirm the right chef and a day rate for your project."
      extraJsonLd={[
        breadcrumbSchema('Chef for Photoshoot Bali', 'https://mychef.id/blog/chef-for-photoshoot-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Chef for Food Photoshoot and Content Creation in Bali',
          description: 'Specialist chef hire for food photoshoots and brand content in Bali.',
          url: 'https://mychef.id/blog/chef-for-photoshoot-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/chef-photoshoot-bali.jpg',
        },
      ]}
    />
  )
}
