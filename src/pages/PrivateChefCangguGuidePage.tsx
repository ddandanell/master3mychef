import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Private Chef Canggu',
    title: "Why Canggu's Villa Scene Makes It the Best Place for a Private Chef in Bali",
    body: `<p>Canggu is Bali's most dynamic neighbourhood — a loose constellation of surf beaches, rice field lanes, and design-forward villa developments that has become the island's leading destination for long-stay travellers, digital nomads, and villa holidaymakers. It is also, by a significant margin, myCHEF's most requested location for private chef services.</p>
    <p>The reason is straightforward: Canggu's villa stock is exceptional. Architect-designed homes with open-plan kitchens, plunge pools, and shaded outdoor dining areas have been built to a higher specification here than almost anywhere else on the island. These spaces are made for entertaining — and a <a href="/services" class="text-[#C5A028] hover:underline font-medium">private chef</a> is the natural complement to a villa this good.</p>
    <p>Beyond the physical environment, Canggu guests tend to have strong food preferences. The neighbourhood's café culture, internationally sourced ingredients, and health-conscious community have shaped a dining scene that expects quality, variety, and authenticity. myCHEF chefs in Canggu reflect this — they are skilled across Indonesian, Western, and fusion cuisines, source from the area's best suppliers, and bring the kind of execution you expect from a high-end restaurant, right to your villa table.</p>`,
  },
  {
    id: 'canggu-cuisine',
    type: 'content',
    subtitle: 'Canggu Cuisine',
    title: 'Surf-Inspired Menus, Indonesian Street Food, and International Dining in Your Villa',
    body: `<p>Canggu's food culture is defined by contrast: world-class smoothie bowls sit alongside late-night nasi campur; Michelin-trained chefs cook next to warung aunties. A private chef in Canggu can draw on this full spectrum — the question is simply what kind of dining experience you want.</p>
    <p><strong>Casual surf culture:</strong> Relaxed, generous spreads of fresh fish tacos, grilled whole barramundi, poke bowls loaded with local tuna, and tropical fruit platters. This style suits villa lunch parties, post-surf dinners, and big group gatherings where the vibe matters as much as the food.</p>
    <p><strong>Indonesian street food elevated:</strong> myCHEF chefs are specialists in bringing Bali's street food classics — babi guling, sate lilit, nasi campur, mie goreng, jimbaran-style grilled seafood — to a private villa setting with the hygiene, quality, and presentation that street vendors cannot offer. Pair this with our <a href="/blog/indonesian-street-food-private-chef-bali" class="text-[#C5A028] hover:underline font-medium">Indonesian street food guide</a> to build your ideal menu.</p>
    <p><strong>Clean eating and plant-based:</strong> Canggu's wellness community has made organic and plant-based dining the norm. Vibrant vegan spreads, acai and superfood breakfasts, raw desserts, and dairy-free adaptations of classic dishes are all within scope for a myCHEF chef.</p>
    <p><strong>International fine dining:</strong> For more formal evenings — anniversaries, proposals, corporate dinners — our chefs deliver European tasting menus, Japanese-inspired omakase, and Mediterranean feasts with the plating and technique of a fine dining kitchen.</p>`,
  },
  {
    id: 'villa-areas',
    type: 'content',
    subtitle: 'Canggu Villa Areas',
    title: 'Berawa, Pererenan, Batu Bolong, Echo Beach: Where We Serve in Canggu',
    body: `<p>Canggu covers a large area of Bali's southwest coast, and the villa market spans several distinct sub-villages with different characters. myCHEF private chefs serve all of them:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Batu Bolong:</strong> The heart of Canggu — dense with cafés, surf breaks, and the famous Batu Bolong beach. Villas here range from mid-market to high-end, many with rooftop terraces and plunge pools. Excellent for villa dinner parties.</li>
      <li><strong>Berawa:</strong> Quieter and slightly more upscale than Batu Bolong, with rice field villas and beach-adjacent compounds. Popular with families and longer-stay guests. Strong demand for multi-day chef arrangements.</li>
      <li><strong>Pererenan:</strong> The quietest and most verdant corner of Canggu, increasingly favoured by design-conscious travellers seeking boutique villa experiences away from the Canggu crowds. Many new high-spec villa builds here.</li>
      <li><strong>Echo Beach & Seseh:</strong> Further north along the coast, with black sand beaches and a more local, raw feel. Villas here tend to be larger and more spread out. Popular for weddings and group events.</li>
      <li><strong>Tibubeneng & Umalas:</strong> Inland from the beach strip, with rice field villas and a local village atmosphere. Increasingly popular as central Canggu becomes more crowded.</li>
    </ul>
    <p style="margin-top:0.75rem;">For more details on private chef services across this area, visit our <a href="/private-chef/canggu" class="text-[#C5A028] hover:underline font-medium">Canggu private chef page</a> and <a href="/locations/canggu" class="text-[#C5A028] hover:underline font-medium">Canggu location guide</a>.</p>`,
  },
  {
    id: 'group-occasions',
    type: 'content',
    subtitle: 'Occasions',
    title: 'Private Chef for Every Canggu Occasion — From Surf Dinners to Villa Weddings',
    body: `<p>Canggu villas host an enormous range of occasions, and myCHEF private chefs are equipped for all of them. Here are the most common booking types we fulfil in this area:</p>
    <p><strong>Everyday villa dining:</strong> Many guests book a chef for multiple nights during their stay — a way to eat well every evening without the effort of restaurant reservations or the noise and crowds of Canggu's main dining strip. This is particularly popular for families with young children and guests on extended stays.</p>
    <p><strong>Bachelor and bachelorette parties:</strong> Canggu is one of Bali's top hen and stag party destinations. A private chef transforms villa party catering from pizza delivery to a proper celebration feast — fire grills, cocktail-paired menus, and service staff to match. See our <a href="/blog/bachelor-party-bali-private-chef" class="text-[#C5A028] hover:underline font-medium">bachelor party chef guide</a> and <a href="/blog/bachelorette-party-bali-catering" class="text-[#C5A028] hover:underline font-medium">bachelorette catering guide</a>.</p>
    <p><strong>Birthday dinners and villa parties:</strong> From intimate birthday dinners for six to villa parties for twenty-five, our chefs handle the full range. We can also provide <a href="/services/waiters" class="text-[#C5A028] hover:underline font-medium">waitstaff</a> and <a href="/services/bartenders" class="text-[#C5A028] hover:underline font-medium">bartenders</a> for fully staffed events.</p>
    <p><strong>Romantic and couple dining:</strong> Honeymoon dinners, anniversary celebrations, and surprise proposal setups. Our chefs can coordinate candles, flowers, and personalised menus for couples-only experiences. Visit our <a href="/blog/romantic-dinner-bali-private-chef" class="text-[#C5A028] hover:underline font-medium">romantic dinner guide</a> for inspiration.</p>
    <p><strong>Corporate and wellness groups:</strong> Digital nomad teams, brand retreat groups, and wellness company offsites frequently base themselves in Canggu and want a higher level of catering than local restaurants provide. We offer corporate packages with dedicated chef and staffing teams. See our <a href="/blog/corporate-events-catering-bali-team-dining" class="text-[#C5A028] hover:underline font-medium">corporate catering guide</a>.</p>`,
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Pricing',
    title: 'Private Chef Costs in Canggu — What to Expect',
    body: `<p>Private chef pricing in Canggu is consistent with the wider Bali market. Rates are determined by menu complexity, number of courses, group size, and the experience level of the chef assigned. Indicative per-person ranges (excluding beverages):</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Casual dining (2–3 courses):</strong> IDR 550,000 – 750,000 per person. Relaxed villa cooking, fresh local and imported ingredients, ideal for groups and everyday villa meals.</li>
      <li><strong>Premium dining (4–5 courses):</strong> IDR 750,000 – 1,100,000 per person. Restaurant-quality plating and service, broader menu options, excellent for celebrations.</li>
      <li><strong>Fine dining / tasting menus (6–8 courses):</strong> IDR 1,100,000 – 1,500,000 per person. Full mise en place service, premium ingredients, refined technique.</li>
    </ul>
    <p style="margin-top:0.75rem;">Canggu villas with well-equipped kitchens and good equipment rarely incur additional kitchen fees. Optional extras include wine pairing, cocktail service, and dedicated staffing. Read our full <a href="/blog/private-chef-cost-bali" class="text-[#C5A028] hover:underline font-medium">Bali private chef cost guide</a> for a detailed breakdown, or try the <a href="/calculator" class="text-[#C5A028] hover:underline font-medium">pricing calculator</a> to estimate your booking.</p>`,
  },
  {
    id: 'booking',
    type: 'content',
    subtitle: 'How to Book',
    title: 'How to Book a Private Chef in Canggu',
    body: `<p>Booking a private chef in Canggu through myCHEF is quick and straightforward:</p>
    <p><strong>1. Send an enquiry.</strong> WhatsApp us or use the contact form. Share your villa address or Canggu neighbourhood, date, number of guests, and any food preferences or restrictions. Last-minute enquiries are welcome — we often have availability with 24–48 hours notice.</p>
    <p><strong>2. Get matched with a chef.</strong> We confirm a chef who fits your cuisine style and is available for your date. You can also <a href="/chefs" class="text-[#C5A028] hover:underline font-medium">browse chef profiles</a> and request a specific chef.</p>
    <p><strong>3. Confirm the menu.</strong> Your chef reaches out to finalise the menu — either from a proposed plan or built entirely from your preferences. All dietary requirements are confirmed here.</p>
    <p><strong>4. Pay deposit and confirm.</strong> A 25% deposit secures your booking. The balance is settled on the day of service or per agreed terms.</p>
    <p><strong>5. Chef arrives and cooks.</strong> Your chef arrives 1.5–2 hours before service time, handles all shopping, preparation, cooking, service, and cleanup. You do nothing except enjoy it.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book Now',
    title: 'Hire a Private Chef in Canggu',
    body: "Canggu's best villa dining starts with the right chef. Tell us your details and we'll get you matched fast.",
    primaryAction: { label: 'View Our Chefs', href: '/chefs' },
    secondaryAction: { label: 'Get in Touch', href: '/contact' },
  },
]

const FAQS = [
  {
    question: "Can a private chef come to my Canggu villa on short notice?",
    answer: "Yes. Canggu is our highest-traffic area and we often have chef availability with 24–48 hours notice, sometimes same-day for simple menus. For fine dining, large groups, or specific chef requests, booking 3–5 days ahead is recommended. During peak season (July–August, December–January) and over major holidays, lead times extend — book earlier to avoid disappointment."
  },
  {
    question: "Can a private chef cater for a big villa party in Canggu with 20+ guests?",
    answer: "Yes. We regularly cater villa parties and events for groups of 20 to 50+ guests in Canggu. For larger groups we provide a chef-and-kitchen-assistant team, and can extend service to include professional waitstaff and a bartender. Mention your group size in your enquiry and we will propose the right team and menu format — buffet, BBQ, family-style, or plated."
  },
  {
    question: "Do private chefs in Canggu source organic or vegan ingredients?",
    answer: "Yes. Canggu has excellent access to organic produce, vegan specialty items, plant-based proteins, and health-focused ingredients through local suppliers and the organic market. Our chefs in this area are experienced with plant-based and clean-eating menus. Please specify your preferences when booking and your chef will plan accordingly."
  },
  {
    question: "Which areas of Canggu do you serve?",
    answer: "We serve all Canggu sub-villages including Batu Bolong, Berawa, Pererenan, Echo Beach, Seseh, Tibubeneng, Umalas, and surrounding areas. We also serve the extended Canggu corridor towards Seminyak and Batu Layar. If your villa is in a less central location, send us the address and we will confirm coverage."
  },
  {
    question: "Is a private chef more expensive than eating out in Canggu?",
    answer: "Per-person, a private chef is comparable to dining at a mid-range to upscale Canggu restaurant — but the value is different. You get a personalised menu, service at your villa, no travel or restaurant queuing, and the chef handles everything including cleanup. For groups of 4+ guests, the experience is often better value than equivalent-quality restaurant dining, factoring in transport, drinks minimums, and tipping."
  },
  {
    question: "Can a private chef also serve breakfast or lunch at my Canggu villa?",
    answer: "Yes. We offer breakfast, brunch, lunch, and dinner services. Canggu breakfast bookings are popular — a private chef preparing eggs benedict, fresh açaí bowls, Indonesian breakfast spreads, or a full brunch beside your pool is one of the highlights of a Bali villa stay. Lunch and all-day catering packages are also available for multi-day villa stays."
  },
]

const jsonLd = [
  breadcrumbSchema([
    { name: 'Home', url: 'https://mychef.id/' },
    { name: 'Journal', url: 'https://mychef.id/journal' },
    { name: 'Private Chef Canggu Guide', url: 'https://mychef.id/blog/private-chef-canggu-guide' },
  ]),
  faqPageSchema(FAQS),
]

export default function PrivateChefCangguGuidePage() {
  return (
    <PremiumPage
      title="Private Chef Canggu: Villa Dining, Surf Dinners & Party Catering"
      description="Hire a private chef in Canggu for villa dinners, bachelor parties, romantic evenings, and everyday meals. Berawa, Batu Bolong, Pererenan and all Canggu areas covered."
      heroImage="/images/hero-canggu.jpg"
      heroAlt="Private chef cooking at a designer villa in Canggu Bali"
      sections={SECTIONS}
      faqs={FAQS}
      jsonLd={jsonLd}
    />
  )
}
