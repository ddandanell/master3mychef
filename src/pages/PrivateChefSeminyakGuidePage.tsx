import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Private Chef Seminyak',
    title: "Seminyak's Luxury Villas Deserve a Private Chef — Here's Why",
    body: `<p>Seminyak is Bali's premier luxury villa destination — a neighbourhood defined by high-end boutique hotels, designer shopping, celebrated beach clubs, and the island's most architecturally refined private villas. It is also where the expectation for quality is highest, which is exactly why private chef dining has become a defining feature of the Seminyak villa experience.</p>
    <p>Guests who choose Seminyak are not looking for a budget holiday. They want the best villa, the best service, and the best food — delivered on their terms. A <a href="/services" class="text-[#C5A028] hover:underline font-medium">private chef</a> fulfils that expectation completely: a tailored menu, a professional kitchen performance, and a dining experience that rivals the area's acclaimed restaurants — without leaving your villa or competing for a table.</p>
    <p>myCHEF private chefs in Seminyak are matched to this standard. They bring hotel-trained technique, premium ingredient sourcing, and genuine fine dining execution. Whether you are hosting an intimate sunset dinner on your villa terrace, celebrating an anniversary with a nine-course tasting menu, or feeding a group of twenty at a villa party, our Seminyak chefs deliver the level of service the neighbourhood expects.</p>`,
  },
  {
    id: 'seminyak-cuisine',
    type: 'content',
    subtitle: 'Cuisine Style',
    title: 'Fine Dining, Sunset Menus, and Balinese Luxury in Seminyak',
    body: `<p>Seminyak's culinary identity is sophisticated and cosmopolitan. The neighbourhood hosts some of Bali's most respected restaurants — and guests eating out here expect that standard. A private chef in Seminyak must meet and exceed it.</p>
    <p><strong>Sunset dinner for two:</strong> Seminyak is synonymous with Bali's legendary sunsets. A private chef-prepared dinner timed to the golden hour — on your villa terrace, with a personalised menu and optional wine pairing — is the quintessential Seminyak experience. Popular for <a href="/blog/romantic-dinner-bali-private-chef" class="text-[#C5A028] hover:underline font-medium">romantic dinners</a>, <a href="/blog/honeymoon-private-chef-bali" class="text-[#C5A028] hover:underline font-medium">honeymoon evenings</a>, and <a href="/blog/proposal-dinner-bali-private-chef" class="text-[#C5A028] hover:underline font-medium">proposal dinners</a>.</p>
    <p><strong>Balinese and Indonesian tasting menus:</strong> For guests who want to experience the full depth of Balinese cuisine, our chefs prepare heritage menus featuring slow-cooked duck betutu, suckling pig-inspired dishes, layered Javanese curries, and traditional desserts — elevated in presentation and served course by course in your villa.</p>
    <p><strong>European and international fine dining:</strong> Multi-course Western menus, Japanese-inspired omakase, Mediterranean mezze, and fusion tasting menus. Seminyak guests frequently request these formats for anniversary dinners, corporate entertainment, and special occasion evenings.</p>
    <p><strong>Luxe casual:</strong> Not every evening needs to be a formal affair. A beautifully laid outdoor table, a spread of whole grilled Jimbaran fish, charcoal-grilled meats, fresh salads, and tropical fruit desserts — served relaxed and abundant — is equally valid and enormously popular for family groups and villa gatherings.</p>`,
  },
  {
    id: 'seminyak-areas',
    type: 'content',
    subtitle: 'Coverage Area',
    title: 'Where We Serve in Seminyak — Oberoi, Petitenget, Batu Belig and Beyond',
    body: `<p>Seminyak extends across a long stretch of Bali's southwest coast and encompasses several distinct micro-neighbourhoods. myCHEF private chefs serve the full area:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Seminyak proper (Oberoi corridor):</strong> The original Seminyak strip, home to the area's most established luxury hotels, beach clubs, and high-end villa compounds. Dense concentration of premium accommodation and corresponding demand for private dining.</li>
      <li><strong>Petitenget:</strong> The northern extension of Seminyak, increasingly favoured by villa guests for its quieter streets and proximity to both Seminyak's amenities and Canggu's café scene. Many of Bali's most coveted private villa rentals are located here.</li>
      <li><strong>Batu Belig & Batu Layar:</strong> The transition zone between Seminyak and Canggu — a mix of boutique villas, rice field compounds, and beach-facing properties. Increasingly popular with guests who want Seminyak quality with a slightly more local feel.</li>
      <li><strong>Kerobokan:</strong> Inland from Seminyak, Kerobokan hosts a large number of residential and rental villas, many of which are among the most architecturally impressive on the island. Quieter and more spacious than the beach strip.</li>
    </ul>
    <p style="margin-top:0.75rem;">Visit our <a href="/private-chef/seminyak" class="text-[#C5A028] hover:underline font-medium">Seminyak private chef service page</a> and <a href="/locations/seminyak" class="text-[#C5A028] hover:underline font-medium">Seminyak location guide</a> for more area-specific information.</p>`,
  },
  {
    id: 'occasions',
    type: 'content',
    subtitle: 'Occasions',
    title: 'Private Chef for Every Seminyak Occasion',
    body: `<p>Seminyak villas attract one of the most occasion-rich guest profiles of any Bali neighbourhood. The following are the most frequent private chef bookings we fulfil here:</p>
    <p><strong>Honeymoons and anniversaries:</strong> Seminyak is one of Bali's top honeymoon destinations. Private chef dinners are the most requested honeymoon add-on — a personalised menu, villa-side setting, and chef who coordinates with your accommodation to create something truly special. See our <a href="/blog/anniversary-dinner-villa-bali" class="text-[#C5A028] hover:underline font-medium">anniversary dinner guide</a>.</p>
    <p><strong>Proposals:</strong> Bali is consistently ranked among the world's top proposal destinations, and Seminyak's villa setting provides the perfect stage. Our chefs work with guests planning surprise proposals to build a bespoke menu, coordinate timing, and liaise with villa managers on setup. See our <a href="/blog/proposal-dinner-bali-private-chef" class="text-[#C5A028] hover:underline font-medium">proposal dinner guide</a>.</p>
    <p><strong>Birthdays and celebrations:</strong> From intimate 30th birthday dinners for eight to larger villa party catering for twenty-five guests with waitstaff and cocktail service. Our chefs are experienced with celebration menus, custom cakes, and high-energy group dining. Read our <a href="/blog/birthday-party-catering-bali" class="text-[#C5A028] hover:underline font-medium">birthday party catering guide</a>.</p>
    <p><strong>Corporate entertainment:</strong> Many Seminyak guests are on corporate trips or executive retreats. A private chef dinner is a high-value corporate entertainment option that is more personal, flexible, and memorable than a restaurant. Learn more in our <a href="/blog/corporate-events-catering-bali-team-dining" class="text-[#C5A028] hover:underline font-medium">corporate catering guide</a>.</p>
    <p><strong>Long-stay villa dining:</strong> Guests staying for a week or more increasingly book recurring private chef evenings — a way to eat superbly without the logistics of restaurant reservations every night. Multi-day packages offer better per-evening value and allow the chef to plan menus across your full stay.</p>`,
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Pricing',
    title: 'Private Chef Prices in Seminyak — What to Budget',
    body: `<p>Seminyak private chef pricing reflects both the quality of service and the premium nature of the neighbourhood. Indicative per-person ranges (excluding beverages):</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Casual to mid-range dining (2–3 courses):</strong> IDR 600,000 – 850,000 per person. Fresh, well-prepared local and international dishes, ideal for families and relaxed evenings.</li>
      <li><strong>Premium dining (4–5 courses):</strong> IDR 850,000 – 1,200,000 per person. Restaurant-quality service and presentation, broader menu choices, suitable for celebrations and couple dinners.</li>
      <li><strong>Fine dining / luxury tasting menus (6–9 courses):</strong> IDR 1,200,000 – 1,800,000 per person. Michelin-trained technique, premium imported and local ingredients, bespoke menu design.</li>
    </ul>
    <p style="margin-top:0.75rem;">Optional extras include imported wine and champagne pairing, truffle and wagyu ingredient upgrades, cocktail service, and dedicated waitstaff or sommelier. For a full cost guide, visit our <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">pricing page</a> or the <a href="/calculator" class="text-[#C5A028] hover:underline font-medium">interactive cost calculator</a>. Compare with other Bali areas in our <a href="/blog/private-chef-seminyak-canggu-ubud-comparison" class="text-[#C5A028] hover:underline font-medium">Seminyak vs Canggu vs Ubud guide</a>.</p>`,
  },
  {
    id: 'booking',
    type: 'content',
    subtitle: 'How to Book',
    title: 'How to Hire a Private Chef in Seminyak',
    body: `<p>Booking a private chef for your Seminyak villa is simple. Here is how it works:</p>
    <p><strong>1. Enquire via WhatsApp or contact form.</strong> Share your villa address or neighbourhood, date, number of guests, occasion type, and any cuisine preferences. Our team responds quickly — usually within one to two hours during business hours.</p>
    <p><strong>2. Receive chef options.</strong> We match you with available chefs who fit your cuisine preference and occasion. You can <a href="/chefs" class="text-[#C5A028] hover:underline font-medium">view chef profiles</a> online or request a specific chef by name.</p>
    <p><strong>3. Finalise the menu.</strong> Your chef reaches out to design the menu with you. For fine dining bookings, this step involves a more detailed consultation to build a bespoke menu from scratch.</p>
    <p><strong>4. Secure your booking.</strong> Pay a 25% deposit to confirm. The balance is due on the day of service or per agreed terms.</p>
    <p><strong>5. Arrive to a fully set table.</strong> Your chef handles everything: grocery shopping, prep, cooking, service, and cleanup. Nothing is left for you to do but enjoy the evening.</p>
    <p style="margin-top:0.75rem;">We recommend booking 3–7 days ahead for standard bookings in Seminyak and 1–2 weeks for fine dining and special occasion experiences during peak season. <a href="/contact" class="text-[#C5A028] hover:underline font-medium">Contact our team</a> to check availability.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book Now',
    title: 'Book Your Private Chef in Seminyak',
    body: "Seminyak's finest dining experience is in your villa, not a restaurant. Let's build your perfect menu.",
    primaryAction: { label: 'Browse Our Chefs', href: '/chefs' },
    secondaryAction: { label: 'Get in Touch', href: '/contact' },
  },
]

const FAQS = [
  {
    question: "Is a private chef in Seminyak more expensive than Canggu or Ubud?",
    answer: "Broadly similar, with slight variation by chef experience and menu complexity. Seminyak guests typically opt for more formal and higher-course menus (which cost more), but the base per-person rates across Bali are comparable. The biggest price driver is menu complexity and chef seniority, not location. Compare areas in our Seminyak vs Canggu vs Ubud guide."
  },
  {
    question: "Can a private chef work with my villa's existing kitchen equipment in Seminyak?",
    answer: "Yes. Our chefs assess kitchen capability during the booking process and adapt their menu planning accordingly. Seminyak villas typically have well-equipped kitchens. If any specialist equipment is needed for a specific menu, the chef arranges this before service day."
  },
  {
    question: "Do you offer private chef services for beach club or hotel suite dining in Seminyak?",
    answer: "Private chef services are designed for villa kitchens — a dedicated cooking space is required. For hotel suites or beach club settings, the logistics are more complex and subject to venue approval. If you are in a hotel suite with a kitchenette, contact us and we will advise on feasibility. Private villa stays are the ideal setting."
  },
  {
    question: "Can I hire a chef for multiple evenings during my Seminyak stay?",
    answer: "Yes, and multi-night packages are available at better per-night rates than single bookings. Many Seminyak guests book a chef for 3–5 evenings during a week-long stay. Your chef plans a varied menu across all sessions so there is no repetition. Contact us about weekly villa dining packages."
  },
  {
    question: "Can a private chef in Seminyak also provide cocktails and wine service?",
    answer: "Yes. Our chefs can recommend wine pairings for your menu and we can arrange a professional bartender or sommelier as an add-on to any booking. Seminyak guests frequently add cocktail pre-dinner service and wine pairings for fine dining evenings. Specify this in your enquiry and we will include it in your proposal."
  },
  {
    question: "How far in advance do I need to book a private chef in Seminyak?",
    answer: "For standard bookings (casual to premium dining), 3–5 days notice is usually sufficient. For fine dining tasting menus, special occasions (proposals, anniversaries), and larger groups during peak season, allow 1–2 weeks. Seminyak is a high-demand area — during July, August, December, and January, earlier booking is strongly recommended."
  },
]

const jsonLd = [
  breadcrumbSchema([
    { name: 'Home', url: 'https://mychef.id/' },
    { name: 'Journal', url: 'https://mychef.id/journal' },
    { name: 'Private Chef Seminyak Guide', url: 'https://mychef.id/blog/private-chef-seminyak-guide' },
  ]),
  faqPageSchema(FAQS),
]

export default function PrivateChefSeminyakGuidePage() {
  return (
    <PremiumPage
      title="Private Chef Seminyak: Luxury Villa Dining, Sunset Dinners & Fine Dining"
      description="Hire a private chef in Seminyak for romantic dinners, anniversary celebrations, honeymoon evenings, and villa party catering. Petitenget, Kerobokan, and all Seminyak areas served."
      heroImage="/images/hero-seminyak.jpg"
      heroAlt="Private chef serving a luxury dinner on a Seminyak villa terrace at sunset"
      sections={SECTIONS}
      faqs={FAQS}
      jsonLd={jsonLd}
    />
  )
}
