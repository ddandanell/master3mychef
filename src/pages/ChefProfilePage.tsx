import { useParams, Link, Navigate } from 'react-router-dom'
import { MessageCircle, ChevronRight, Star, Award, Users, Flame } from 'lucide-react'
import SeoHead from '@/components/SeoHead'
import { PHONE } from '@/data/siteArchitecture'

// ── Chef data ─────────────────────────────────────────────────────────────────

interface ChefData {
  slug: string
  name: string
  role: string
  origin: string
  badge: string
  portrait: string
  portraitAlt: string
  specialty: string
  cuisine: string[]
  shortBio: string
  fullBio: string[]
  achievements: string[]
  menuStyles: { title: string; desc: string }[]
  perfectFor: string[]
  faqs: { question: string; answer: string }[]
  seoTitle: string
  seoDescription: string
  ogImage: string
}

const CHEFS_DATA: Record<string, ChefData> = {
  adriano: {
    slug: 'adriano',
    name: 'Adriano',
    role: 'Executive Chef & Founder',
    origin: 'Milan, Italy',
    badge: 'Michelin-trained in Modena · Founded myCHEF in Bali 2016',
    portrait: '/generated/mychef-finedining-bali-luna-chef-portrait.webp',
    portraitAlt: 'Adriano — Executive Chef and Founder of myCHEF Bali',
    specialty: 'Mediterranean Fine Dining',
    cuisine: ['Italian tasting menus', 'Handmade pasta', 'Seafood crudo', 'French-influenced fine dining'],
    shortBio:
      'Adriano built myCHEF after years in Michelin-level kitchens across northern Italy and a formative stretch in Tokyo. He still leads menu development, chef training, and every signature tasting experience served in Bali villas.',
    fullBio: [
      'Adriano grew up in Milan surrounded by the discipline of Italian home cooking before earning his formal training at a Michelin-starred restaurant in Modena — the same region that gave the world Massimo Bottura and the foundations of modern Italian cuisine. What he took from that experience was not just technique, but philosophy: that the best meal is always honest, seasonal, and never over-complicated.',
      'His path then took him east. A season in Tokyo introduced him to a completely different kind of culinary precision — the Japanese obsession with texture, temperature, and the small rituals that surround a meal. That contrast — Mediterranean warmth against Japanese exactness — became the engine behind what myCHEF has grown into.',
      'Adriano arrived in Bali in 2015 and saw something nobody had done well yet: private dining for villa guests that matched the quality of a fine restaurant, delivered inside someone\'s home. He founded myCHEF in 2016 and has grown the team to over 50 hospitality professionals since then.',
      'Today, Adriano still leads every signature tasting experience, manages recipe development across the full menu catalogue, and personally trains each new head chef before they run a booking on their own. If you are booking a milestone anniversary, a VIP dinner, or a romantic proposal in Bali, there is a strong chance Adriano is the one standing in your villa kitchen.',
    ],
    achievements: [
      'Michelin-trained in Modena, northern Italy',
      'Founded myCHEF in Bali in 2016',
      'Trained and mentored 50+ hospitality professionals',
      'Leads VIP dinners, proposals, and milestone occasions',
      'Developed the full myCHEF recipe and training playbook',
    ],
    menuStyles: [
      {
        title: 'Italian Tasting Menu',
        desc: 'A 5–7 course progression through Adriano\'s signature dishes — handmade pasta, aged proteins, seasonal produce — plated to fine-dining standard in your villa.',
      },
      {
        title: 'Mediterranean Set Dinner',
        desc: 'Three courses of clean, produce-forward Mediterranean cooking. Perfect for 2–8 guests who want elevated food without a formal tasting-menu pace.',
      },
      {
        title: 'Romantic Proposal Dinner',
        desc: 'Custom menu, candle setting, coordinated timing. Adriano has run dozens of proposals — the food, pacing, and reveal moment are all part of the plan.',
      },
      {
        title: 'VIP & Celebrity Villa Dinner',
        desc: 'For guests who require absolute discretion, exceptional food, and zero friction. Adriano handles high-privacy bookings across Seminyak, Canggu, and Uluwatu.',
      },
    ],
    perfectFor: [
      'Romantic dinners for 2',
      'Milestone anniversaries and proposals',
      'VIP guests and private villa stays',
      'Michelin-style tasting experiences',
      'Small, intimate groups (2–10 guests)',
    ],
    faqs: [
      {
        question: 'Can I book Adriano specifically?',
        answer:
          'Yes. Adriano takes a limited number of personal bookings each month, prioritising milestone occasions, tasting menus, and VIP stays. Message us on WhatsApp and we will confirm his availability for your dates.',
      },
      {
        question: 'What is Adriano\'s signature dish?',
        answer:
          'It changes with the season, but Adriano is known for his handmade cacio e pepe with fresh pasta, his seafood crudo with Balinese citrus, and a slow-braised protein course that closes most of his tasting menus.',
      },
      {
        question: 'Does Adriano cook for large groups?',
        answer:
          'Adriano\'s focus is intimate fine dining — typically 2–12 guests. For larger groups (15+), he will recommend one of our trained head chefs from the myCHEF team, all of whom cook to the same standards.',
      },
      {
        question: 'What dietary requirements can Adriano accommodate?',
        answer:
          'Adriano adapts every menu to guest needs — gluten-free, halal, vegetarian, vegan, and allergy-specific modifications are all part of the booking process. Just tell us upfront and the menu is designed around it.',
      },
      {
        question: 'Does Adriano travel across Bali?',
        answer:
          'Yes. Adriano and the myCHEF team serve villas across Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, and surrounding areas. Travel fees may apply for distant locations.',
      },
    ],
    seoTitle: "Adriano — Private Chef Bali | Michelin-Trained Founder | myCHEF",
    seoDescription:
      "Book Adriano, Executive Chef & Founder of myCHEF Bali. Michelin-trained in Modena, Italy. Italian tasting menus, romantic dinners, VIP villa experiences. WhatsApp to book.",
    ogImage: 'https://mychef.id/generated/mychef-finedining-bali-luna-chef-portrait.webp',
  },

  'made-surya': {
    slug: 'made-surya',
    name: 'I Made Surya',
    role: 'Head Chef — Mediterranean',
    origin: 'Ubud, Bali',
    badge: "Ubud-born · Trained through myCHEF\'s in-house program under Adriano",
    portrait: '/generated/portrait-daniel.webp',
    portraitAlt: 'I Made Surya — Head Chef Mediterranean at myCHEF Bali',
    specialty: 'Handmade Pasta & Seafood',
    cuisine: ['Handmade pasta', 'Mediterranean seafood', 'Set menus', 'Clean Italian technique'],
    shortBio:
      "Surya is the calm hand behind many of our Mediterranean set menus. He combines Adriano\'s technique with deep Balinese market knowledge, turning just-caught seafood, handmade pasta, and clean sauces into elegant villa dinners.",
    fullBio: [
      'I Made Surya was born in Ubud and grew up close to the wet markets and rice fields that define Balinese food culture from the ground up. He learned to cook traditional Balinese dishes before he ever picked up a professional knife — which means his understanding of fresh produce, spice balance, and seasonal ingredients is instinctive rather than textbook.',
      "He joined myCHEF through the company\'s in-house training program and was mentored directly by Adriano over a 12-month period. That immersion covered Italian pasta-making technique, Mediterranean plating, sauce construction, and the timing and pacing required to run a fine-dining service inside an unfamiliar villa kitchen.",
      'Today Surya leads Mediterranean villa menus and is the chef guests ask back by name. His handmade pasta is consistently one of the most requested dishes across the entire myCHEF catalogue — particularly his tagliolini with fresh seafood from the Jimbaran market, finished with local citrus and olive oil.',
      'What makes Surya exceptional is the combination: Adriano\'s European technique applied through a palate shaped by Bali. He selects his ingredients at market before dawn, adapts to what\'s freshest rather than forcing a fixed menu, and delivers food that feels considered rather than executed. For guests who want the experience of a Michelin-trained kitchen without the formality, Surya is the answer.',
    ],
    achievements: [
      'Leads Mediterranean villa menus across Bali',
      'Known for fresh handmade pasta and seafood timing',
      "Completed myCHEF\'s 12-month in-house training under Adriano",
      'Guest favourite for intimate 6–12 person villa dinners',
      'Selects produce personally from Jimbaran and Ubud markets',
    ],
    menuStyles: [
      {
        title: 'Mediterranean Villa Dinner',
        desc: '3-course set menu built around fresh seafood, handmade pasta, and clean Mediterranean technique. Designed for 2–12 guests who want elegant food with a relaxed pace.',
      },
      {
        title: 'Fresh Pasta Experience',
        desc: "Surya\'s signature: handmade pasta rolled that morning, served in 2–3 courses with seasonal sauces and fresh Bali seafood. Great for guests who want something specific and memorable.",
      },
      {
        title: 'Seafood Feast',
        desc: 'A produce-led dinner built around the best catch of the day. Grilled, cured, and finished in Italian style — light, clean, and perfectly timed for large villa tables.',
      },
      {
        title: 'Group Dinner (6–15 guests)',
        desc: "Surya\'s most natural format. He manages large villa tables with ease — food lands hot, wines pour on rhythm, and every guest gets the same quality regardless of where they\'re seated.",
      },
    ],
    perfectFor: [
      'Intimate villa dinners (2–12 guests)',
      'Mediterranean food lovers',
      'Fresh pasta and seafood experiences',
      'Repeat guests who want consistency',
      'Guests staying in Ubud or Seminyak villas',
    ],
    faqs: [
      {
        question: 'Can I request Surya specifically?',
        answer:
          'Yes. Surya is available for bookings across Bali and we can match his schedule to your villa dates. WhatsApp us and we will confirm availability within the hour.',
      },
      {
        question: 'What pasta dishes does Surya specialise in?',
        answer:
          "Surya\'s signature is tagliolini with fresh seafood, but he also makes cacio e pepe, carbonara, and seasonal filled pasta (tortellini, ravioli) depending on the menu. All pasta is handmade from scratch on the day of your dinner.",
      },
      {
        question: 'Is Surya\'s food strictly Italian?',
        answer:
          "No — Surya uses Italian and Mediterranean technique but stays connected to Bali\'s ingredients. You\'ll find Jimbaran seafood, local citrus, and Balinese spice notes blended into what is otherwise a clean European style of cooking.",
      },
      {
        question: 'How many guests can Surya cook for?',
        answer:
          'Surya regularly cooks for 2–15 guests. He is particularly strong at 6–12 person dinners where the format allows for relaxed pacing and personalised attention to each course.',
      },
      {
        question: 'Does Surya handle dietary restrictions?',
        answer:
          'Yes — gluten-free pasta alternatives, pescatarian menus, halal ingredients, and dairy-free adaptations are all handled. Let us know at booking and the menu is adjusted from the start.',
      },
    ],
    seoTitle: "I Made Surya — Private Chef Bali | Mediterranean & Pasta Specialist | myCHEF",
    seoDescription:
      "Book I Made Surya, myCHEF Bali Head Chef for Mediterranean villa dinners and handmade pasta. Ubud-born, trained under Adriano. Perfect for 2–15 guests. Book via WhatsApp.",
    ogImage: 'https://mychef.id/generated/portrait-daniel.webp',
  },

  'bayu-pranata': {
    slug: 'bayu-pranata',
    name: 'Bayu Pranata',
    role: 'Head Chef — BBQ & Grill',
    origin: 'Jimbaran, Bali',
    badge: 'Jimbaran grill specialist · Decades of live-fire cooking across Bali',
    portrait: '/generated/mychef-finedining-bali-sol-chef-portrait.webp',
    portraitAlt: 'Bayu Pranata — Head Chef BBQ and Grill at myCHEF Bali',
    specialty: 'Open-Flame & Live-Fire Cooking',
    cuisine: ['BBQ & grilling', 'Wagyu & premium cuts', 'Seafood grill', 'Indonesian satay & babi guling'],
    shortBio:
      'Bayu runs our BBQ and grill experiences with the confidence of someone who grew up cooking over live fire. From wagyu and lobster to whole fish and satay, he keeps the energy relaxed while every protein lands perfectly cooked.',
    fullBio: [
      "Bayu Pranata was born and raised in Jimbaran — the fishing village on Bali\'s southwest coast that built its entire identity around seafood grilled over coconut charcoal. Before he ever worked in a professional kitchen, Bayu spent his formative years around the beachside warungs that made Jimbaran famous, absorbing the rhythms of live-fire cooking from people who had been doing it for generations.",
      "That foundation gave Bayu something formal culinary training rarely produces: an instinct for heat. He reads fire the way most chefs read a timer — by sight, sound, and smell. A wagyu rump needs three minutes per side over indirect heat. A whole snapper needs to come off before the skin splits. A lobster tail wants a basting brush every 45 seconds. Bayu manages all of this simultaneously, across multiple grill stations, without written notes or printed checklists.",
      'He joined myCHEF to bring that skill set into villa settings — specifically the large-group poolside BBQs that became one of the most booked experience types in Bali as villa rentals grew. Bayu now leads grill events from Seminyak to Nusa Dua and regularly serves groups of 30, 50, even 80 guests for celebrations that run poolside from sunset into the night.',
      "His menus blend international grill technique with Indonesian tradition. A Bayu Pranata event might open with satay, move through wagyu striploin and grilled lobster, and land on a whole pig or babi guling as the centrepiece. It\'s the kind of cooking that works for every table — from food-obsessed guests who want the perfect char on their steak, to families who just want something generous, fragrant, and unforgettable.",
    ],
    achievements: [
      'Leads poolside BBQ and grill events across Bali',
      'Specialist in wagyu, seafood, and whole-animal cooking',
      'Experienced with celebrations from 10 to 80+ guests',
      'Born and trained in Jimbaran grill tradition',
      'Trusted for birthday BBQs, retreat dinners, and villa parties',
    ],
    menuStyles: [
      {
        title: 'Poolside BBQ Dinner',
        desc: "Bayu\'s signature setup: grill station by the pool, wagyu and seafood, satay and sides, sunset timing. Built for 10–80 guests who want the full Bali villa experience.",
      },
      {
        title: 'Wagyu & Lobster Night',
        desc: 'Premium proteins over charcoal. Wagyu striploin, lobster tail, grilled prawns, and a selection of cold and hot sides. Perfect for smaller groups (8–20) who want indulgence without formality.',
      },
      {
        title: 'Indonesian Grill Feast',
        desc: 'Whole fish, satay, babi guling, and seasonal vegetables grilled Jimbaran-style. Great for guests who want authentic Balinese flavour in a relaxed outdoor setting.',
      },
      {
        title: 'Large-Group Celebration BBQ',
        desc: 'Bayu has fed groups of 80+ at villa parties across Bali. He handles multi-station grilling, food timing for large tables, and the kind of energy that keeps a party moving from afternoon into night.',
      },
    ],
    perfectFor: [
      'Large groups (10–80+ guests)',
      'Poolside villa parties and celebrations',
      'Birthday BBQs and group dinners',
      'Guests wanting authentic Balinese grill experience',
      'Retreat dinners and corporate events',
    ],
    faqs: [
      {
        question: 'Can I book Bayu for a birthday poolside BBQ?',
        answer:
          "Yes — birthday BBQs are Bayu\'s most common booking. He handles everything from setup to cleanup, brings the grill equipment, and can customise the menu around your guest count, budget, and dietary mix.",
      },
      {
        question: 'What proteins does Bayu specialise in?',
        answer:
          'Bayu is strongest on wagyu beef cuts, whole fish and lobster, satay (chicken, pork, beef), and whole pig (babi guling) for larger celebrations. He also does excellent BBQ prawn and squid for seafood-focused events.',
      },
      {
        question: 'How large a group can Bayu handle?',
        answer:
          "Bayu regularly serves 30–80 guests at villa events. He\'s done groups above 100 with additional kitchen support. For groups over 30, we recommend messaging early to confirm staffing and equipment logistics.",
      },
      {
        question: 'Does Bayu do BBQ in Ubud or inland villas?',
        answer:
          "Yes — Bayu travels across Bali including Ubud, Canggu, Seminyak, Uluwatu, and Nusa Dua. He brings his own equipment when needed, so villa kitchen access isn\'t a limitation.",
      },
      {
        question: 'Can Bayu accommodate vegetarian or halal guests in a BBQ setting?',
        answer:
          "Yes. Bayu runs separate grill stations for vegetarian items and uses halal-certified meat suppliers when requested. A mixed group\'s dietary needs are planned into the menu from the start.",
      },
    ],
    seoTitle: "Bayu Pranata — BBQ Chef Bali | Live-Fire Grill Specialist | myCHEF",
    seoDescription:
      "Book Bayu Pranata for BBQ and grill events in Bali. Poolside BBQ dinners, wagyu nights, large group celebrations (10–80+ guests). Jimbaran-born live-fire specialist. Book via WhatsApp.",
    ogImage: 'https://mychef.id/generated/mychef-finedining-bali-sol-chef-portrait.webp',
  },

  'ni-putu-asri': {
    slug: 'ni-putu-asri',
    name: 'Ni Putu Asri',
    role: 'Head Chef — Balinese & Asian Fusion',
    origin: 'Gianyar, Bali',
    badge: 'Gianyar-born · Rooted in Balinese ceremonial cooking tradition',
    portrait: '/generated/portrait-olivia.webp',
    portraitAlt: 'Ni Putu Asri — Head Chef Balinese and Asian Fusion at myCHEF Bali',
    specialty: 'Balinese Classics & Modern Asian',
    cuisine: ['Indonesian feast menus', 'Balinese ceremonial dishes', 'Asian fusion', 'Modern Indonesian plating'],
    shortBio:
      'Asri protects the local soul of the myCHEF menu. She leads Indonesian feasts, ceremonial dishes, and Asian fusion menus with a balance of authenticity, polish, and warmth that villa guests immediately feel.',
    fullBio: [
      "Ni Putu Asri grew up in Gianyar — the cultural heartland of Bali — in a family where cooking was inseparable from ceremony. By the time she was a teenager, she had already participated in dozens of communal feasts for temple ceremonies, cremation rituals, and harvest celebrations. She learned that Balinese cooking is never just about feeding people: it\'s about creating a sensory experience that marks a moment in time.",
      'That foundation gave Asri something rare: the ability to make traditional Indonesian food feel both genuinely authentic and completely appropriate for a villa setting with international guests. She is not presenting food as a performance of culture — she is cooking the way she was raised to cook, then adapting the presentation and pacing for guests who may be encountering these flavours for the first time.',
      "Her Indonesian feast menus typically open with a selection of sambals and crackers, move through dishes like ayam betutu (slow-cooked spiced chicken), jukut urap (coconut vegetable salad), and lawar, and land on a rice centrepiece surrounded by 6–8 accompaniments. For guests who want a single memorable Balinese dinner in their villa, Asri\'s feast is the most requested experience after Adriano\'s tasting menu.",
      "Beyond traditional cooking, Asri has also developed a sharp instinct for Asian fusion — dishes that draw on Indonesian, Thai, and Japanese techniques to create menus that feel fresh and contemporary without losing their regional identity. Her miso-glazed tempeh and her tamarind prawn curry are two examples of how she navigates the space between tradition and innovation.",
      "For villa guests, booking Asri means booking someone who genuinely loves the food she\'s cooking and brings the kind of warmth to a kitchen that guests feel even before the first plate arrives.",
    ],
    achievements: [
      'Leads Indonesian feast and ceremonial menus across Bali',
      'Balances traditional Balinese cooking with modern plating',
      'Trusted for family celebrations and cultural villa dinners',
      'Raised in Gianyar — the cultural heartland of Bali',
      'Developed myCHEF Asian fusion menu alongside Adriano',
    ],
    menuStyles: [
      {
        title: 'Indonesian Feast (Rijsttafel)',
        desc: "Asri\'s signature: 6–8 dishes around a central rice, from ayam betutu and lawar to sambal and urap. Generous, communal, and unforgettable for guests discovering Balinese cuisine.",
      },
      {
        title: 'Balinese Tasting Set',
        desc: 'A plated 4-course interpretation of Balinese flavours — cleaner presentation for guests who want the authenticity of local ingredients with the structure of a sit-down fine dinner.',
      },
      {
        title: 'Asian Fusion Villa Dinner',
        desc: "A contemporary menu drawing on Indonesian, Thai, and Japanese technique. Asri\'s miso glazed tempeh, tamarind prawn curry, and green papaya salad work especially well for health-conscious villas.",
      },
      {
        title: 'Cultural Celebration Feast',
        desc: 'Designed for families, cultural immersion retreats, and guests who want to experience a Balinese ceremonial feast in their villa. Asri can explain every dish as she serves it.',
      },
    ],
    perfectFor: [
      'Guests wanting authentic Balinese cuisine',
      'Cultural immersion dinners',
      'Family celebrations and group feasts',
      'Vegetarian and health-focused groups',
      'Retreat programmes and wellness stays',
    ],
    faqs: [
      {
        question: 'Can I book Asri for an authentic Balinese dinner?',
        answer:
          "Yes — Asri\'s Indonesian feast is one of our most requested experiences and she is available for bookings across Bali. Message us on WhatsApp with your villa location and guest count and we will confirm her availability.",
      },
      {
        question: 'What is an Indonesian feast (rijsttafel)?',
        answer:
          "A rijsttafel is a communal-style meal where rice is served at the centre of the table surrounded by many smaller dishes — sambals, cooked vegetables, meat or fish, and condiments. Asri\'s version uses traditional Balinese recipes and typically includes 6–8 dishes for 4–12 guests.",
      },
      {
        question: 'Is Asri\'s food suitable for vegetarians?',
        answer:
          'Yes. Indonesian cuisine is naturally accommodating for plant-based diets — tempeh, tofu, jackfruit, and the rich vegetable traditions of Balinese cooking mean Asri can build a fully vegetarian feast without compromise.',
      },
      {
        question: 'Can Asri explain the dishes as part of the experience?',
        answer:
          'Absolutely. Asri speaks English and loves sharing the background of each dish — where the recipe comes from, the spice blend, the ceremonial context. Many guests tell us this storytelling element is their favourite part of the evening.',
      },
      {
        question: 'How many guests can Asri cook for?',
        answer:
          'Asri regularly cooks for 4–20 guests. For larger groups (20–50), she leads a small team. Indonesian feast menus actually scale particularly well to larger groups — the shared-plate format is natural for big villa tables.',
      },
    ],
    seoTitle: "Ni Putu Asri — Balinese Chef Bali | Indonesian Feast Specialist | myCHEF",
    seoDescription:
      "Book Ni Putu Asri for authentic Balinese and Indonesian feast menus in your villa. Gianyar-born, ceremonial cooking heritage, Asian fusion specialist. Book via WhatsApp.",
    ogImage: 'https://mychef.id/generated/portrait-olivia.webp',
  },
}

// ── Helper components ─────────────────────────────────────────────────────────

function WhatsAppButton({ label, message }: { label: string; message: string }) {
  const encoded = encodeURIComponent(message)
  return (
    <a
      href={`https://wa.me/${PHONE.digits}?text=${encoded}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#d4af3a] transition-colors"
    >
      <MessageCircle className="w-4 h-4" />
      {label}
    </a>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function ChefProfilePage() {
  const { slug } = useParams<{ slug: string }>()
  const chef = slug ? CHEFS_DATA[slug] : null

  if (!chef) {
    return <Navigate to="/chefs" replace />
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: chef.name,
    jobTitle: chef.role,
    description: chef.shortBio,
    image: `https://mychef.id${chef.portrait}`,
    url: `https://mychef.id/chefs/${chef.slug}`,
    birthPlace: chef.origin,
    knowsAbout: [chef.specialty, ...chef.cuisine],
    worksFor: {
      '@type': 'LocalBusiness',
      '@id': 'https://mychef.id/#business',
      name: 'myCHEF.id',
      url: 'https://mychef.id',
    },
    sameAs: ['https://mychef.id/chefs'],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: chef.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id' },
      { '@type': 'ListItem', position: 2, name: 'Our Chefs', item: 'https://mychef.id/chefs' },
      { '@type': 'ListItem', position: 3, name: chef.name, item: `https://mychef.id/chefs/${chef.slug}` },
    ],
  }

  const waMessage = `Hi, I\'d like to book ${chef.name} (${chef.specialty}) for a villa dinner in Bali.`

  return (
    <>
      <SeoHead
        title={chef.seoTitle}
        description={chef.seoDescription}
        canonical={`https://mychef.id/chefs/${chef.slug}`}
        ogImage={chef.ogImage}
        ogType="article"
        jsonLd={[personSchema, faqSchema, breadcrumbSchema]}
      />

      {/* ── Breadcrumb ── */}
      <nav className="max-w-4xl mx-auto px-6 pt-8 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm text-gray-400">
          <li><Link to="/" className="hover:text-[#C5A028] transition-colors">Home</Link></li>
          <li><ChevronRight className="w-3 h-3" /></li>
          <li><Link to="/chefs" className="hover:text-[#C5A028] transition-colors">Our Chefs</Link></li>
          <li><ChevronRight className="w-3 h-3" /></li>
          <li className="text-white">{chef.name}</li>
        </ol>
      </nav>

      {/* ── Hero / Portrait section ── */}
      <section className="max-w-5xl mx-auto px-6 pt-8 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#111]">
              <img
                src={chef.portrait}
                alt={chef.portraitAlt}
                className="w-full h-full object-cover object-center"
                width={600}
                height={800}
              />
            </div>
            {/* Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm border border-[#C5A028]/30 rounded-xl p-3">
              <p className="text-[#C5A028] text-xs font-medium leading-snug">{chef.badge}</p>
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-[#C5A028] text-sm font-medium uppercase tracking-widest mb-2">{chef.role}</p>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-3">{chef.name}</h1>
            <p className="text-gray-400 text-sm mb-5">{chef.origin} · {chef.specialty}</p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">{chef.shortBio}</p>

            {/* Cuisine tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {chef.cuisine.map((c) => (
                <span key={c} className="text-xs px-3 py-1 rounded-full border border-[#C5A028]/40 text-[#C5A028]">
                  {c}
                </span>
              ))}
            </div>

            <WhatsAppButton label={`Book ${chef.name}`} message={waMessage} />
          </div>
        </div>
      </section>

      {/* ── Full Bio ── */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-8">About {chef.name}</h2>
          <div className="space-y-5">
            {chef.fullBio.map((para, i) => (
              <p key={i} className="text-gray-300 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-10 text-center">
            {chef.name}'s Track Record
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {chef.achievements.map((a, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#111] border border-white/5">
                <Award className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Menu Styles ── */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-3 text-center">
            What {chef.name} Can Cook for Your Villa
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
            Choose a menu style or tell us what you have in mind — we adapt every menu to your guests, occasion, and dietary needs.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {chef.menuStyles.map((m) => (
              <div key={m.title} className="p-6 rounded-2xl border border-white/10 bg-[#111] hover:border-[#C5A028]/40 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Flame className="w-4 h-4 text-[#C5A028]" />
                  <h3 className="text-white font-medium">{m.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perfect For ── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-8 text-center">
            Perfect for
          </h2>
          <ul className="space-y-3">
            {chef.perfectFor.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <Star className="w-4 h-4 text-[#C5A028] flex-shrink-0" />
                <span className="text-gray-300">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Users className="w-5 h-5 text-[#C5A028]" />
            <span className="text-[#C5A028] text-sm font-medium uppercase tracking-widest">Book {chef.name}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            Ready to Book {chef.name} for Your Villa?
          </h2>
          <p className="text-gray-400 mb-8">
            Tell us your villa, dates, guest count, and the kind of experience you want. We will confirm{' '}
            {chef.name.split(' ')[0]}'s availability and send a menu proposal within a few hours.
          </p>
          <WhatsAppButton label={`Message Us — Book ${chef.name.split(' ')[0]}`} message={waMessage} />
          <p className="text-gray-500 text-sm mt-4">Typical response time: under 1 hour</p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-10 text-center">
            Questions About Booking {chef.name.split(' ')[0]}
          </h2>
          <div className="space-y-4">
            {chef.faqs.map((f, i) => (
              <details key={i} className="group border border-white/10 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer text-white font-medium list-none hover:bg-white/5 transition-colors">
                  {f.question}
                  <ChevronRight className="w-4 h-4 text-[#C5A028] flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-gray-400 leading-relaxed text-sm">
                  {f.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related pages ── */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-lg font-medium text-white mb-6">Explore More</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Meet All Chefs', href: '/chefs', desc: 'See the full myCHEF culinary team.' },
              { label: 'View Menus', href: '/menus', desc: 'Browse menu styles for every occasion.' },
              { label: 'Pricing Guide', href: '/help/pricing', desc: 'Understand what a private chef costs in Bali.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Tasting menus and Michelin-style villa experiences.' },
              { label: 'Catering', href: '/catering', desc: 'Group events, BBQs, and buffet catering in Bali.' },
              { label: 'Book Now', href: '/book', desc: 'Reserve your villa dinner today.' },
            ].map((p) => (
              <Link
                key={p.href}
                to={p.href}
                className="p-4 rounded-xl border border-white/10 hover:border-[#C5A028]/40 transition-colors group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-sm font-medium group-hover:text-[#C5A028] transition-colors">
                    {p.label}
                  </span>
                  <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-[#C5A028] transition-colors" />
                </div>
                <p className="text-gray-500 text-xs">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            Book {chef.name.split(' ')[0]} for Your Bali Villa Dinner
          </h2>
          <p className="text-gray-400 mb-8">
            Share your dates and we will confirm availability, send a menu proposal, and handle everything from
            shopping to cleanup.
          </p>
          <WhatsAppButton label="WhatsApp Us Now" message={waMessage} />
        </div>
      </section>
    </>
  )
}
