import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Private Chef Ubud',
    title: 'Why Ubud Is the Perfect Setting for a Private Chef Experience in Bali',
    body: `<p>Ubud is Bali's cultural and artistic heartland — a world apart from the beach resorts of the south. Tiered rice terraces cascade through the valley, mist rises over jungle canopy at sunrise, and the air carries the fragrance of incense and temple flowers. It is in this extraordinary setting that a <a href="/services" class="text-[#C5A028] hover:underline font-medium">private chef dining experience</a> reaches its full potential.</p>
    <p>Dining privately in Ubud is not simply about the food — it is about the whole sensory environment. Imagine a seven-course Balinese tasting menu served on an open terrace overlooking Tegalalang rice paddies as the sun drops behind the western ridge. Or a farm-to-table breakfast of just-harvested tropical fruit, freshly baked sourdough, and soft poached eggs delivered to your jungle pool villa before the rest of the world has stirred. These are experiences that no restaurant in Ubud — however acclaimed — can replicate on your own terms.</p>
    <p>myCHEF Ubud chefs are specialists in the cuisines that Ubud calls its own: authentic Balinese cooking with heritage techniques, organic and plant-based cuisine using local market produce, and refined international fine dining that meets the expectations of Ubud's discerning global visitors. Whether your villa sits in the rice fields of Penestanan, the valley floor of Campuhan, or the lush terraces of Tegalalang, your chef will arrive fully equipped and ready to transform your kitchen into a world-class dining destination.</p>`,
  },
  {
    id: 'ubud-dining',
    type: 'content',
    subtitle: 'The Ubud Dining Culture',
    title: 'Farm-to-Table, Balinese Heritage, and Organic Cuisine in the Cultural Capital',
    body: `<p>Ubud has an extraordinary culinary identity. The town's proximity to productive farmland, highland rivers, and the island's most celebrated organic suppliers means ingredients here are genuinely exceptional — and a private chef with Ubud expertise knows exactly how to source them.</p>
    <p>The Ubud morning market is one of Bali's great culinary resources. Your chef will typically shop the market at dawn for the day's menu: seasonal vegetables, tropical fruit, fresh tempeh, ceremonial duck, river fish, and local herbs that cannot be found in any supermarket. This commitment to provenance is what elevates a private dining experience in Ubud above anything available in a restaurant.</p>
    <p>Ubud is also Bali's centre for plant-based and wellness cuisine. Many guests visiting Ubud for yoga retreats, meditation programmes, or healing holidays want menus that align with their wellness goals — vibrant vegan spreads, raw food preparations, Ayurvedic-inspired meals, and clean-eating menus built around the area's exceptional produce. myCHEF chefs are trained to meet these requirements without compromising on flavour or presentation.</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Balinese Heritage Cooking:</strong> Authentic regional dishes prepared using traditional spice pastes (<em>base genep</em>), slow-roasting techniques, and ceremonial recipes rarely found in tourist restaurants.</li>
      <li><strong>Organic & Plant-Based:</strong> Vegan, vegetarian, and raw menus built around Ubud's organic farms — vibrant, nourishing, and beautifully presented.</li>
      <li><strong>Farm-to-Table:</strong> Daily market shopping for the freshest seasonal produce, prepared on the day with minimal distance from field to plate.</li>
      <li><strong>International Fine Dining:</strong> European, Japanese, and fusion tasting menus for guests seeking a more formal dining experience in their villa.</li>
    </ul>`,
  },
  {
    id: 'experiences',
    type: 'content',
    subtitle: 'Signature Experiences',
    title: 'Ubud Private Chef Experiences: Rice Paddy Dinners, Balinese Feasts, and Wellness Menus',
    body: `<p>The physical beauty of Ubud makes it one of the world's most spectacular settings for outdoor private dining. A chef-prepared dinner on a rice terrace terrace, a candlelit villa dinner overlooking the Campuhan ridge, or a morning feast beside a jungle infinity pool — these settings transform a meal into a memory.</p>
    <p><strong>Balinese Tasting Menu:</strong> A curated progression of five to eight Balinese courses — fragrant yellow rice, slow-cooked duck betutu, sate lilit with sambal matah, jukut ares banana blossom curry, and black rice pudding with coconut cream. This is the menu guests remember long after they leave Bali.</p>
    <p><strong>Wellness & Detox Programme:</strong> A multi-day chef arrangement designed around clean eating goals. Breakfasts built on tropical superfoods, plant-based lunches using Ubud market produce, and light evening meals that support sleep and recovery. Ideal for guests attending yoga retreats or health programmes in the area.</p>
    <p><strong>Romantic Dinner for Two:</strong> An intimate fine dining experience for couples — honeymoons, anniversaries, and proposal dinners. Your chef creates a personalised menu and can coordinate with your villa to arrange floral decoration, candles, and ambient music. Learn more about <a href="/blog/romantic-dinner-bali-private-chef" class="text-[#C5A028] hover:underline font-medium">romantic private chef dinners in Bali</a>.</p>
    <p><strong>Family Villa Feast:</strong> A relaxed, generous spread for families and groups of 8–15 guests — Balinese mixed rice, fresh grilled seafood, satay stations, and colourful vegetable dishes served family-style. Perfect for villas with large covered terraces and outdoor dining areas.</p>
    <p><strong>Cooking Class with Dinner:</strong> Learn to prepare two or three Balinese dishes alongside your chef in the villa kitchen, then sit down together to eat what you made. A popular choice for curious food lovers and couples wanting an interactive experience. Explore our <a href="/blog/bali-villa-cooking-class-private-chef" class="text-[#C5A028] hover:underline font-medium">Bali villa cooking class</a> page for details.</p>`,
  },
  {
    id: 'where-to-stay',
    type: 'content',
    subtitle: 'Ubud Villa Areas',
    title: 'Where Private Chefs Serve in Ubud: Penestanan, Tegalalang, Campuhan, and Beyond',
    body: `<p>Ubud is not a single neighbourhood — it is a collection of villages, valleys, and rice field communities spread across a wide area. myCHEF private chefs serve the full Ubud region, including all of the following areas:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Central Ubud:</strong> The town centre and its immediate surroundings — Jalan Raya Ubud, Monkey Forest Road, and the Ubud Royal Palace area.</li>
      <li><strong>Penestanan & Sayan:</strong> Quiet rice field villages west of Ubud, home to many of the area's most architecturally striking luxury villas. A favourite for artists and long-stay guests.</li>
      <li><strong>Campuhan:</strong> The valley and ridge walk area, with boutique hotels and villas overlooking the confluence of the Oos and Campuhan rivers.</li>
      <li><strong>Tegalalang:</strong> North of Ubud, famous for the UNESCO-listed terraced rice paddies and a cluster of infinity pool villas with spectacular valley views.</li>
      <li><strong>Mas & Singapadu:</strong> Villages south of Ubud known for wood carving and craft, increasingly popular for villa stays with a more local, village atmosphere.</li>
      <li><strong>Payangan & Kedewatan:</strong> Elevated areas northwest of Ubud with large luxury villa compounds, valley views, and cooler temperatures.</li>
    </ul>
    <p style="margin-top:0.75rem;">If your villa is in a more remote area of the Ubud region, contact us via WhatsApp and we will confirm coverage before you book. We serve all major villa concentrations within a 25-kilometre radius of Ubud town. <a href="/private-chef/ubud" class="text-[#C5A028] hover:underline font-medium">View our Ubud private chef service page</a>.</p>`,
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Pricing',
    title: 'How Much Does a Private Chef Cost in Ubud?',
    body: `<p>Private chef pricing in Ubud follows the same structure as the wider Bali market, with rates varying by menu complexity, number of courses, group size, and chef experience level. Indicative per-person ranges (excluding beverages):</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Everyday dining (2–3 courses):</strong> IDR 550,000 – 750,000 per person. Fresh local ingredients, Balinese home cooking style, ideal for families and casual villa meals.</li>
      <li><strong>Premium dining (4–5 courses):</strong> IDR 750,000 – 1,100,000 per person. Restaurant-quality plated service, broader menu selection, suitable for celebrations and couple dinners.</li>
      <li><strong>Fine dining / tasting menus (6–8 courses):</strong> IDR 1,100,000 – 1,500,000 per person. Refined techniques, premium and imported ingredients, full mise en place service.</li>
    </ul>
    <p style="margin-top:0.75rem;">Wellness and organic menus are priced similarly to premium dining, reflecting the higher cost of certified organic and specialty produce sourced from Ubud's farms and markets. Additional costs include ingredient upgrades, optional wine pairing, and extended service add-ons such as a <a href="/services/sommelier" class="text-[#C5A028] hover:underline font-medium">sommelier</a> or <a href="/services/waiters" class="text-[#C5A028] hover:underline font-medium">dedicated waiter</a>.</p>
    <p>For a full breakdown of myCHEF pricing, visit our <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">pricing guide</a> or use the <a href="/calculator" class="text-[#C5A028] hover:underline font-medium">interactive cost calculator</a> to estimate your specific booking. You can also read our detailed <a href="/blog/private-chef-cost-bali" class="text-[#C5A028] hover:underline font-medium">Bali private chef cost guide</a>.</p>`,
  },
  {
    id: 'booking',
    type: 'content',
    subtitle: 'How to Book',
    title: 'Booking Your Ubud Private Chef — How It Works',
    body: `<p>Booking is simple and takes only a few minutes. Here is the process from enquiry to table:</p>
    <p><strong>1. Tell us about your booking.</strong> Send a WhatsApp message or fill in the contact form with your villa address (or area), dates, number of guests, and any cuisine preferences or dietary requirements. The more detail you share at this stage, the better matched your chef will be.</p>
    <p><strong>2. Receive chef recommendations.</strong> We confirm availability and suggest chefs who specialise in your preferred cuisine style — Balinese, organic, international fine dining, or a combination. <a href="/chefs" class="text-[#C5A028] hover:underline font-medium">Browse chef profiles</a> to explore our team.</p>
    <p><strong>3. Finalise the menu.</strong> Your matched chef contacts you to discuss and confirm the menu. Dietary requirements, ingredient preferences, and service format are confirmed at this stage.</p>
    <p><strong>4. Confirm and pay deposit.</strong> A 25% deposit secures your booking date and chef. The balance is settled on the day of service or as agreed.</p>
    <p><strong>5. Enjoy your experience.</strong> Your chef arrives 1.5–2 hours before dinner, handles all preparation, cooking, table service, and kitchen cleanup. You relax and savour every course.</p>
    <p style="margin-top:0.75rem;">We recommend booking 3–5 days in advance for standard requests. Fine dining experiences, wellness programmes, and large groups of 10+ guests benefit from 1–2 weeks lead time. <a href="/contact" class="text-[#C5A028] hover:underline font-medium">Contact us</a> to check availability.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book Now',
    title: 'Reserve Your Private Chef in Ubud',
    body: 'Share your villa details, dates, and preferences. We will match you with the right chef for your Ubud stay.',
    primaryAction: { label: 'View Our Chefs', href: '/chefs' },
    secondaryAction: { label: 'Get in Touch', href: '/contact' },
  },
]

const FAQS = [
  {
    question: "Do private chefs in Ubud shop at the local market, or bring their own ingredients?",
    answer: "Both are possible. Most myCHEF chefs prefer to shop Ubud's morning market for the freshest produce — this is part of what makes the experience special. They source directly from vendors they trust for quality and freshness. For specialty items (imported cheeses, premium proteins, specific organics), the chef may source from select Ubud suppliers or bring items from Canggu or Seminyak. You will receive a cost breakdown for all ingredients."
  },
  {
    question: "Can a private chef serve a full wellness or detox menu in Ubud?",
    answer: "Yes. This is one of the most popular request types in Ubud, given the area's strong wellness and yoga tourism. Our chefs can design multi-day wellness menus that are vegan, raw, Ayurvedic-inspired, or aligned with your specific programme. If you are attending a retreat, the chef can coordinate with retreat organisers on timing and dietary protocols."
  },
  {
    question: "Can a private chef cater at a villa in Tegalalang or Payangan — far from central Ubud?",
    answer: "Yes. We serve all major villa areas within and around the Ubud region, including Tegalalang, Payangan, Kedewatan, Mas, Penestanan, Sayan, and Campuhan. For very remote locations beyond 25 km from Ubud town, there may be a small travel surcharge. Contact us via WhatsApp to confirm coverage before booking."
  },
  {
    question: "What is the minimum booking for a private chef in Ubud?",
    answer: "The minimum booking is one dinner service (or one breakfast/lunch) for two guests. There is no minimum guest count — we cater for couples and intimate solo experiences as readily as we do for large groups. Multi-day arrangements are available for longer stays and are often more cost-effective per person."
  },
  {
    question: "Can I combine a cooking class with a private chef dinner in Ubud?",
    answer: "Yes. A cooking class combined with dinner is one of our most popular Ubud experiences. The session typically runs 2–3 hours: you spend the first part learning to prepare 2–3 Balinese dishes alongside your chef, then sit down to eat what you made together. It is hands-on, memorable, and personal. Request this format when enquiring — it requires a slightly longer booking window so the chef can plan the session structure."
  },
  {
    question: "How far in advance should I book a private chef in Ubud?",
    answer: "We recommend 3–5 days in advance for standard dinner requests. For fine dining tasting menus, wellness programmes, large groups, or special occasions such as proposals and anniversaries, please allow 1–2 weeks. During peak season (July–August, December–January), earlier booking is strongly advised as chef availability fills quickly."
  },
]

const jsonLd = [
  breadcrumbSchema([
    { name: 'Home', url: 'https://mychef.id/' },
    { name: 'Journal', url: 'https://mychef.id/journal' },
    { name: 'Private Chef Ubud Guide', url: 'https://mychef.id/blog/private-chef-ubud-guide' },
  ]),
  faqPageSchema(FAQS),
]

export default function PrivateChefUbudGuidePage() {
  return (
    <PremiumPage
      title="Private Chef Ubud: Farm-to-Table Dining, Balinese Feasts & Wellness Menus"
      description="Hire a private chef in Ubud for authentic Balinese cuisine, organic farm-to-table menus, and fine dining in your villa. Tegalalang, Penestanan, Campuhan and all Ubud areas covered."
      heroImage="/images/hero-ubud.jpg"
      heroAlt="Private chef preparing a Balinese feast with rice paddy views in Ubud"
      sections={SECTIONS}
      faqs={FAQS}
      jsonLd={jsonLd}
    />
  )
}
