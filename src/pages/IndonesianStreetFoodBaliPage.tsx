import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { MapPin, BookOpen, UtensilsCrossed, Leaf } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'The Real Thing',
    title: 'The Paradox of Indonesian Food in Bali',
    body: `<p>There is an uncomfortable truth about eating Indonesian food in Bali as a visitor: most of what you encounter at tourist-facing warungs and hotel restaurants is a softened, simplified version of the real thing. The nasi goreng arrives pre-seasoned from a packet. The satay sauce is commercial peanut paste thinned with water. The rendang has been braised for forty minutes instead of four hours. The flavours are there, faintly — but the depth, the heat, the complexity that make Indonesian cuisine one of the world's great culinary traditions? That requires something different.</p>

    <p>Authentic Indonesian cooking begins with a spice paste ground by hand — shallots, garlic, galangal, turmeric, candlenut, dried chilli, shrimp paste — worked into a smooth, fragrant base using a stone mortar. It requires whole spices bloomed in coconut oil until the kitchen fills with a smell that is unlike anything from a bottle. It demands hours: rendang simmers until the braising liquid has entirely evaporated and the meat caramelises in its own rendered fat, a process that cannot be rushed without ruining the dish. Babi guling is rubbed inside and out with base wangi gede — a complex Balinese spice blend — then slow-roasted until the skin blisters into crackling. These techniques were not written down; they were absorbed over years of watching grandmothers cook.</p>

    <p>Having a trained Indonesian chef cook at your Bali villa changes the entire experience. You smell the spice paste hitting hot oil — that first bloom of lemongrass, galangal and turmeric is the smell of Indonesia. You see the whole coconut cracked open, the milk squeezed fresh. You watch satay lilit pressed onto lemongrass skewers and laid over charcoal. You can ask questions — our chefs grew up eating this food and they love explaining it. That is the authentic experience. Not a restaurant kitchen hidden behind a swing door, but a chef at your villa, cooking the food of their childhood, for you.</p>`,
  },
  {
    id: 'dishes',
    type: 'content' as const,
    subtitle: 'Signature Dishes',
    title: '8 Iconic Indonesian Dishes — With the Stories Behind Them',
    body: `<p>Indonesia spans 17,000 islands and 300 distinct ethnic groups, each with its own culinary tradition. These eight dishes represent the breadth of the archipelago — from Bali's ceremonial cooking to Javanese street food, West Sumatran slow braises to Jakarta's iconic salad.</p>

    <p><strong>Nasi Goreng — Indonesia's National Dish</strong><br/>
    Every Indonesian household has its own nasi goreng. The dish is built on cold leftover rice — fresh rice steams and clumps in the wok — tossed over extreme heat with kecap manis (sweet soy sauce) that caramelises against the hot metal and gives the rice its characteristic dark, slightly sticky coating. The wok technique matters: the rice must contact the surface at high heat, not steam in sauce. A fried egg is placed on top, the yolk just set, the white crispy at the edges. Restaurant versions rarely taste like home-cooked nasi goreng because they cannot replicate the residual heat from a family wok that has never been washed — a surface seasoned by years of cooking. Our chefs bring that instinct. Every plate is finished with kerupuk (prawn crackers), sliced cucumber and a small dish of sambal.</p>

    <p><strong>Sate Lilit — Bali's Minced Fish Satay</strong><br/>
    Unlike mainland Indonesian satay (thin strips of meat on bamboo sticks), sate lilit is a Balinese invention: minced fish — traditionally tuna or mackerel — blended with freshly grated coconut, kaffir lime leaves, lemongrass and base wangi (Bali's aromatic spice paste of shallot, garlic, galangal, turmeric and candle nut). The mixture is pressed around fat lemongrass stalks that act as both skewer and flavour conduit, then grilled over coconut-husk charcoal. The result is aromatic, slightly sweet, with a char that no gas grill can replicate. Sate lilit is traditionally served at Balinese temple ceremonies — eating it at your villa connects you to something genuinely ancient.</p>

    <p><strong>Babi Guling — Bali's Ceremonial Suckling Pig</strong><br/>
    In a country that is 87% Muslim, Bali's Hindu-majority culture means pork is central to ceremonial cooking in a way found nowhere else in Indonesia. Babi guling — literally "rolling pig" — is rubbed inside the cavity and all over the skin with base wangi gede, a complex Balinese spice paste that includes turmeric, ginger, galangal, coriander, lemongrass and white pepper. It is then slow-roasted on a spit over wood or charcoal until the skin blisters into sheets of pale crackling. The obsession with the skin (kulit) is cultural — at a proper warung babi guling, the queue forms before opening and the kulit sells out first. We serve it with lawar (spiced minced meat and vegetables), steamed rice and sambal matah.</p>

    <p><strong>Gado-Gado — Jakarta's Street Salad</strong><br/>
    Gado-gado is not a side dish — it is a complete meal of blanched vegetables (long beans, bean sprouts, cabbage, spinach), boiled egg, tofu, tempeh and compressed rice cakes, served under a peanut sauce made fresh from roasted peanuts ground with palm sugar, garlic, chilli, kaffir lime and tamarind. The difference between commercial peanut sauce and freshly made is not subtle — fresh sauce is aromatic, slightly chunky, with a complexity that no jarred version approaches. Our chefs roast and grind the peanuts to order. The dish lands at the table as a composed arrangement, the sauce poured tableside.</p>

    <p><strong>Rendang — West Sumatra's Slow-Braised Beef</strong><br/>
    Rendang is the most labour-intensive dish in Indonesian cooking and arguably the most deeply flavoured. Beef is simmered in coconut milk with a spice paste of red chilli, lemongrass, galangal, turmeric leaf and kaffir lime for three to five hours — long enough that the coconut milk first reduces to a thick sauce, then separates into oil, then evaporates entirely, leaving the meat to caramelise in the residual fat and spices. The colour shifts from pale to golden to deep mahogany. Shortcuts (less time, more liquid, pre-mixed paste) produce a stew; only the full process produces rendang. We begin our rendang the morning of your event to ensure it reaches the correct caramelisation.</p>

    <p><strong>Nasi Campur — Bali's Mixed Rice Tradition</strong><br/>
    Nasi campur ("mixed rice") is the Balinese way of eating — a mound of steamed rice surrounded by small portions of eight or more dishes: shredded spiced chicken (ayam suwir), sate lilit, a small piece of babi guling, lawar, tempe manis, fried peanuts, crispy shallots and sambal. It is democratic food — every component matters equally, and the meal is built by the eater according to their own preference. Our nasi campur is assembled to order, each component prepared separately and plated at service.</p>

    <p><strong>Mie Goreng — Wok-Fried Noodles</strong><br/>
    Indonesia's egg noodles are tossed over the same extreme wok heat as nasi goreng — the noodles must char slightly on the surface before being pulled back with a spatula. The seasoning is kecap manis, oyster sauce and a base of shallot, garlic and chilli. A fried egg is cracked directly into the wok and scrambled through the noodles at the last moment. Served with a wedge of lime, acar (quick-pickled cucumber and carrot) and sambal on the side.</p>

    <p><strong>Es Cendol — Pandan Dessert</strong><br/>
    Es cendol brings the meal to a cool, sweet close: green rice flour jellies (coloured and scented with pandan leaf) served in a bowl of thick coconut milk and palm sugar syrup over crushed ice. The pandan gives the dish a fragrance that is distinctly Southeast Asian — green, floral, slightly sweet. Palm sugar adds a caramel depth that white sugar cannot replicate. Es cendol is found throughout Indonesia and Malaysia, each region with its own variation. Ours is the Javanese-Balinese version: generous jellies, very cold, with a dark palm sugar syrup poured over at the table.</p>`,
  },
  {
    id: 'experience',
    type: 'features' as const,
    subtitle: 'The Experience',
    title: 'More Than a Meal — A Cultural Immersion',
    features: [
      {
        icon: MapPin,
        title: 'Market Visit Add-On',
        desc: 'Visit a local wet market (pasar tradisional) at dawn with the chef before cooking. Watch the daily ritual of buying from trusted vendors — fresh turmeric still caked in mud, bundles of lemongrass, whole spices, live seafood. IDR 200K/person supplement. Highly recommended — it reframes every dish you eat that evening.',
      },
      {
        icon: BookOpen,
        title: 'Cultural Context',
        desc: 'Our chefs explain the story behind each dish as they cook — the ceremony babi guling belongs to, the island sate lilit comes from, why rendang was designed to travel for weeks without refrigeration. Eating Indonesian food with context is a different experience from eating it without.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Live Cooking Station',
        desc: 'Watch satay lilit grilled over charcoal at the table. See nasi goreng wok-tossed to order, the kecap manis caramelising in real time. A live cooking station transforms dinner into theatre — the smells, the sounds, the heat of the wok all become part of the experience.',
      },
      {
        icon: Leaf,
        title: 'Spice Garden',
        desc: 'The chef arrives with fresh ingredients for guests to touch and smell before cooking begins — galangal, turmeric root, kaffir lime leaves, pandan, fresh lemongrass. Understanding the raw ingredients before tasting the finished dish is the fastest way to understand Indonesian cuisine.',
      },
    ],
  },
  {
    id: 'menus',
    type: 'content' as const,
    subtitle: 'Ready-Made Feasts',
    title: 'Three Indonesian Feast Menus',
    body: `<p>We offer three curated Indonesian feast formats, each designed to give a coherent journey through a particular dimension of the cuisine. All menus include rice, condiments, sambal bar and non-alcoholic drinks. Prices are per person; minimum 4 guests.</p>

    <p><strong>Balinese Village Feast — IDR 420K/person</strong><br/>
    The full Balinese ceremonial experience: sate lilit on lemongrass skewers over charcoal, a proper babi guling with kulit (crispy skin) and all accompaniments, nasi campur assembled with eight components, lawar (spiced minced meat salad), jamu shots (turmeric-ginger-tamarind wellness tonic) before eating, and es cendol to finish. This menu is designed around Bali's specific food culture — the dishes you would eat at a Balinese family ceremony, cooked with the same ingredients and techniques.</p>

    <p><strong>Indonesian Archipelago — IDR 380K/person</strong><br/>
    A journey through the islands: West Sumatran rendang (4-hour slow braise), Jakarta's gado-gado with freshly ground peanut sauce, nasi goreng with fried egg, tempeh goreng (crispy fried tempeh with palm sugar glaze), mie goreng wok-fried to order, and soto ayam (Javanese chicken broth with turmeric, lime and crispy shallots). This menu shows the breadth of Indonesian cooking beyond Bali — six distinct regional dishes in one feast.</p>

    <p><strong>Street Food Night — IDR 350K/person</strong><br/>
    Eight small plates served sharing-style, a live satay station grilling continuously, a sambal bar with four house sambals (matah, terasi, ijo, kecap), a wok station for nasi goreng and mie goreng cooked to order, and fresh young coconut drinks. This is the most social and interactive format — guests move between the satay station and their seats, the wok is in motion throughout, and the sambal bar encourages experimentation. Ideal for groups of 8–20.</p>`,
  },
  {
    id: 'authenticity',
    type: 'content' as const,
    subtitle: 'What Makes Us Different',
    title: 'Why myCHEF\'s Indonesian Cooking Tastes Different',
    body: `<p>The single most important decision in Indonesian cooking is where you buy your ingredients. We source exclusively from pasar tradisional — traditional wet markets where vendors sell the same ingredients their parents sold: turmeric root dug that morning, galangal cut to order, shrimp paste (terasi) from small producers in East Java, palm sugar pressed from freshly tapped coconut flowers. The supply chain from soil to kitchen is measured in hours, not weeks.</p>

    <p>We grind spice pastes fresh every morning for that day's events. This is non-negotiable for us and it is the primary reason our food tastes different from restaurant versions. A spice paste loses its volatile aromatics within hours of grinding — lemongrass in particular becomes flat and papery quickly. We do not use MSG, premixed paste sachets or commercial seasonings of any kind. Every dish starts from whole ingredients.</p>

    <p>Our Balinese chefs grew up eating this food. They learned nasi goreng at their mother's elbow, they attended the temple ceremonies where babi guling was prepared at 4am, they know what soto ayam is supposed to taste like because they drank it every week. That embodied knowledge cannot be taught in a cooking school — it is the accumulation of a lifetime of eating and watching and absorbing. When our chefs cook Indonesian food at your villa, they are not executing a recipe. They are cooking from memory.</p>

    <p>The difference you taste is real, and it is measurable: more aromatic complexity in the first moment, more depth in the mid-palate, more of the dishes' individual character surviving through the meal. Indonesian cuisine rewards this kind of attention — it is built on dozens of flavour variables that either compound beautifully or fall flat depending on every decision from market to plate.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Frequently Asked Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book Your Indonesian Feast',
    title: 'Book an Indonesian Feast',
    body: "Tell us your group size and which dishes you're excited about — we'll build your Indonesian menu.",
    primaryAction: {
      label: 'Chat on WhatsApp',
      href: "https://wa.me/62089674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20book%20an%20authentic%20Indonesian%20feast%20at%20my%20Bali%20villa.",
    },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'Is this suitable for guests who\'ve never tried Indonesian food?',
    answer: 'Absolutely — our chefs explain each dish and we adjust spice levels for international palates. Indonesian cuisine covers a huge range of flavour profiles, from mild and coconut-forward to intensely spiced. We introduce dishes in a way that builds familiarity and we always serve sambal on the side so guests can control their own heat.',
  },
  {
    question: 'Can you do a vegetarian or vegan Indonesian feast?',
    answer: 'Yes, we have a full plant-based Indonesian menu — no babi guling, tempeh-forward, with tofu satay replacing meat satay. Indonesian cuisine has deep vegetarian traditions, particularly in Javanese cooking, and many of the most celebrated dishes (gado-gado, tempeh manis, mie goreng, es cendol) are naturally plant-based or easily adapted.',
  },
  {
    question: 'Is the market visit included in the price?',
    answer: 'The market visit is an IDR 200K/person supplement on top of the feast menu price. It typically takes place at dawn (6–7am) before cooking begins. We highly recommend it — experiencing a Balinese wet market with a local chef who knows the vendors transforms your understanding of every dish you eat that evening.',
  },
  {
    question: 'How spicy are Indonesian dishes?',
    answer: 'Adjustable. We serve sambal on the side so guests control their own heat. Base dishes are cooked to medium-mild by default — present but not overwhelming. If your group enjoys heat, we can increase the chilli in the base cooking. If you have guests who cannot eat any spice, we prepare their portions separately.',
  },
  {
    question: 'Can you explain the dishes during service?',
    answer: 'Yes, this is a core part of the experience. Our chefs love talking about Indonesian food culture — the ceremonies dishes belong to, the regional origins, the techniques involved. If you would like a more structured introduction, we can do a brief tasting before the main feast with commentary on each dish.',
  },
  {
    question: 'What\'s the difference between Balinese and Indonesian cuisine?',
    answer: 'Balinese cuisine is a subset of Indonesian but uses distinctive spice blends (base wangi, base gede) and features pork heavily — unique in Muslim-majority Indonesia, where Bali\'s Hindu population makes pork-based dishes like babi guling possible. Balinese food also uses more fresh herbs and tends toward more aromatic, floral profiles. Our menus offer both: the Balinese Village Feast focuses on Bali\'s ceremonial food culture; the Indonesian Archipelago menu explores mainland and outer-island traditions.',
  },
]

const RELATED_PAGES = [
  { label: 'Bali Catering Menu', href: '/blog/bali-catering-menu', desc: 'Seasonal ingredients and full menu options for Bali villa catering.' },
  { label: 'Cooking Class Bali', href: '/blog/bali-villa-cooking-class-private-chef', desc: 'Learn to cook Indonesian food with a private chef at your Bali villa.' },
  { label: 'Private Chef Cost Bali', href: '/blog/private-chef-cost-bali', desc: 'Full pricing guide for private chef services across Bali.' },
  { label: 'Floating Breakfast', href: '/blog/floating-breakfast-bali', desc: 'The iconic Bali floating breakfast experience at your villa pool.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing for all myCHEF services and feast formats.' },
  { label: 'Private Chef Ubud', href: '/private-chef/ubud', desc: 'Private chef services in Ubud — jungle villas and rice terrace estates.' },
]

export default function IndonesianStreetFoodBaliPage() {
  return (
    <PremiumPage
      slug="blog/indonesian-street-food-private-chef-bali"
      title="Indonesian Street Food at Your Bali Villa"
      description="Experience authentic Indonesian street food classics at your Bali villa — nasi goreng, satay lilit, babi guling, gado-gado. Private chef. From IDR 350K/person."
      seoTitle="Indonesian Street Food Bali | Private Chef Authentic Indonesian Cuisine | myCHEF"
      seoDescription="Experience authentic Indonesian street food classics at your Bali villa — nasi goreng, satay lilit, babi guling, gado-gado. Private chef. From IDR 350K/person."
      canonicalUrl="https://mychef.id/blog/indonesian-street-food-private-chef-bali"
      h1="Indonesian Street Food at Your Bali Villa"
      subtitle="Authentic Nasi Goreng, Satay & Babi Guling Made by a Private Chef"
      heroImage="/generated/mychef-catering-bali-hero-babiguling.webp"
      heroImageAlt="Authentic Indonesian street food spread at a Bali villa — nasi goreng, satay, babi guling by myCHEF"
      ogImage="https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp"
      keywords={['indonesian food bali', 'authentic indonesian cuisine bali', 'nasi goreng private chef bali', 'balinese food private chef', 'indonesian street food bali villa']}
      highlights={['Signature Dishes', 'Market Experience', 'Cultural Context', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Indonesian Street Food Bali', 'https://mychef.id/blog/indonesian-street-food-private-chef-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Indonesian Street Food at Your Bali Villa',
          description: 'Experience authentic Indonesian street food classics at your Bali villa — nasi goreng, satay lilit, babi guling, gado-gado. Private chef. From IDR 350K/person.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: '2026-06-29',
          image: 'https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/indonesian-street-food-private-chef-bali' },
          url: 'https://mychef.id/blog/indonesian-street-food-private-chef-bali',
          wordCount: 1600,
          keywords: 'indonesian food bali, authentic indonesian cuisine bali, nasi goreng private chef bali, balinese food private chef, indonesian street food bali villa',
        },
      ]}
      ctaText="Book an Indonesian Feast"
      ctaSubtext="Tell us your group size and which dishes you're excited about — we'll build your Indonesian menu."
    />
  )
}
