import { useParams, Link, Navigate } from 'react-router-dom'
import { MessageCircle, ChevronRight, Star, Award, Users, Flame } from 'lucide-react'
import SeoHead, { localBusinessSchema, personSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { PHONE } from '@/data/siteArchitecture'
import { siteFacts } from '@/data/siteFacts'

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
  signatureDishes: string[]
  guestQuote: string
  guestName: string
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
    badge: `Milan-trained in ${siteFacts.founderTrainingCity} · Founded myCHEF in Bali ${siteFacts.foundingYear}`,
    portrait: '/generated/chef-adriano-portrait.webp',
    portraitAlt: 'Adriano — Executive Chef and Founder of myCHEF Bali',
    specialty: 'Mediterranean Fine Dining',
    cuisine: ['Italian tasting menus', 'Handmade pasta', 'Seafood crudo', 'French-influenced fine dining'],
    shortBio:
      'Adriano built myCHEF after years in Michelin-level kitchens across northern Italy and a formative stretch in Tokyo. He still leads menu development, chef training, and every signature tasting experience served in Bali villas.',
    fullBio: [
      'Adriano grew up in Milan surrounded by the discipline of Italian home cooking before earning his formal training at a Michelin-starred restaurant in the city — one of Italy\'s most demanding culinary environments. What he took from that experience was not just technique, but philosophy: that the best meal is always honest, seasonal, and never over-complicated.',
      'His path then took him east. A season in Tokyo introduced him to a completely different kind of culinary precision — the Japanese obsession with texture, temperature, and the small rituals that surround a meal. That contrast — Mediterranean warmth against Japanese exactness — became the engine behind what myCHEF has grown into.',
      `Adriano arrived in Bali in 2015 and saw something nobody had done well yet: private dining for villa guests that matched the quality of a fine restaurant, delivered inside someone's home. He founded myCHEF in ${siteFacts.foundingYear} and has grown the team to over 50 hospitality professionals since then.`,
      'Today, Adriano still leads every signature tasting experience, manages recipe development across the full menu catalogue, and personally trains each new head chef before they run a booking on their own. If you are booking a milestone anniversary, a VIP dinner, or a romantic proposal in Bali, there is a strong chance Adriano is the one standing in your villa kitchen.',
    ],
    achievements: [
      `Milan-trained in ${siteFacts.founderTrainingCity}, northern Italy`,
      `Founded myCHEF in Bali in ${siteFacts.foundingYear}`,
      'Trained and mentored 50+ hospitality professionals',
      'Leads VIP dinners, proposals, and milestone occasions',
      'Developed the full myCHEF recipe and training playbook',
    ],
    signatureDishes: [
      'Hand-rolled tagliatelle al tartufo',
      'Grilled branzino with salsa verde',
      'Tiramisu with espresso-soaked ladyfingers',
    ],
    guestQuote: 'Adriano cooked for our anniversary and it was genuinely the best meal we had in Bali — better than any restaurant. The pasta alone was worth flying here for.',
    guestName: 'Sophie R., Sydney',
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
      {
        question: 'How far in advance should I book Adriano?',
        answer:
          'For peak season, anniversaries and proposals, book 2–4 weeks ahead. Off-peak dates can often be confirmed within a few days. <a href="/book">Book online</a> or WhatsApp your dates.',
      },
      {
        question: 'What is included when Adriano cooks at my villa?',
        answer:
          'Menu planning, grocery shopping, full cook service, plating and kitchen cleanup are included. Alcohol, speciality ingredients and extra service staff are quoted separately when needed. See <a href="/pricing">pricing</a>.',
      },
      {
        question: 'Can Adriano design a custom tasting menu for my occasion?',
        answer:
          'Yes — Adriano builds menus around your guests, dietary needs and occasion. Share preferences on WhatsApp and you receive a written proposal before confirming.',
      },
      {
        question: 'Does Adriano cook Italian only?',
        answer:
          'Italian and Mediterranean fine dining are his signature, but he adapts courses for mixed groups and can collaborate with other myCHEF chefs for multi-cuisine evenings. Browse <a href="/fine-dining/menus">fine dining menus</a>.',
      },
      {
        question: 'Can Adriano handle a proposal or anniversary setup?',
        answer:
          'Yes — timing, menu pacing and discretion are part of the brief. Coordinate flowers or photography separately; food and service run on a precise schedule. See <a href="/experiences/romantic-proposal-dinner">proposal dinners</a>.',
      },
      {
        question: 'What areas of Bali does Adriano cover most often?',
        answer:
          'Seminyak, Canggu, Uluwatu, Nusa Dua, Jimbaran and Ubud are regular. Remote villas may include a travel fee quoted upfront. <a href="/locations">Locations</a>.',
      },
      {
        question: 'How do payments and deposits work for Adriano bookings?',
        answer:
          'Typically 50% deposit to confirm, balance before service. Refund tiers follow our <a href="/cancellation">cancellation policy</a> unless otherwise agreed in writing.',
      },
      {
        question: 'Can I combine Adriano with butler or bartender service?',
        answer:
          'Yes — pair with <a href="/in-villa-service">in-villa service</a> or <a href="/in-villa-service/bartenders">bartenders</a> for a full private dining team.',
      },
      {
        question: 'Is grocery shopping included?',
        answer:
          'Yes for standard menus. Premium wine, rare ingredients or client-supplied alcohol are itemised. You approve the plan before shopping day.',
      },
      {
        question: 'What if Adriano is unavailable on my dates?',
        answer:
          'We propose another senior myCHEF chef trained to the same standards, or alternate dates. You always confirm the named chef before deposit.',
      }

    ],
    seoTitle: "Adriano — Private Chef Bali | Michelin-Trained Founder | myCHEF",
    seoDescription:
      `Book Adriano, Executive Chef & Founder of myCHEF Bali. Milan-trained in ${siteFacts.founderTrainingCity}. Italian tasting menus, romantic dinners, VIP villa experiences. WhatsApp.`,
    ogImage: 'https://mychef.id/generated/chef-adriano-portrait.webp',
  },

  'made-surya': {
    slug: 'made-surya',
    name: 'I Made Surya',
    role: 'Head Chef — Mediterranean',
    origin: 'Ubud, Bali',
    badge: "Ubud-born · Trained through myCHEF's in-house program under Adriano",
    portrait: '/generated/chef-made-surya-portrait.webp',
    portraitAlt: 'I Made Surya — Head Chef Mediterranean at myCHEF Bali',
    specialty: 'Handmade Pasta & Seafood',
    cuisine: ['Handmade pasta', 'Mediterranean seafood', 'Set menus', 'Clean Italian technique'],
    shortBio:
      "Surya is the calm hand behind many of our Mediterranean set menus. He combines Adriano's technique with deep Balinese market knowledge, turning just-caught seafood, handmade pasta, and clean sauces into elegant villa dinners.",
    fullBio: [
      'I Made Surya was born in Ubud and grew up close to the wet markets and rice fields that define Balinese food culture from the ground up. He learned to cook traditional Balinese dishes before he ever picked up a professional knife — which means his understanding of fresh produce, spice balance, and seasonal ingredients is instinctive rather than textbook.',
      "He joined myCHEF through the company's in-house training program and was mentored directly by Adriano over a 12-month period. That immersion covered Italian pasta-making technique, Mediterranean plating, sauce construction, and the timing and pacing required to run a fine-dining service inside an unfamiliar villa kitchen.",
      'Today Surya leads Mediterranean villa menus and is the chef guests ask back by name. His handmade pasta is consistently one of the most requested dishes across the entire myCHEF catalogue — particularly his tagliolini with fresh seafood from the Jimbaran market, finished with local citrus and olive oil.',
      'What makes Surya exceptional is the combination: Adriano\'s European technique applied through a palate shaped by Bali. He selects his ingredients at market before dawn, adapts to what\'s freshest rather than forcing a fixed menu, and delivers food that feels considered rather than executed. For guests who want the experience of a fine-dining kitchen without the formality, Surya is the answer.',
    ],
    achievements: [
      'Leads Mediterranean villa menus across Bali',
      'Known for fresh handmade pasta and seafood timing',
      "Completed myCHEF's 12-month in-house training under Adriano",
      'Guest favourite for intimate 6–12 person villa dinners',
      'Selects produce personally from Jimbaran and Ubud markets',
    ],
    signatureDishes: [
      'Prawn linguine with chilli and white wine',
      'Pan-seared sea bass with caponata',
      'Panna cotta with passion fruit',
    ],
    guestQuote: 'Surya cooked for our group of eight and every single person at the table was blown away. The pasta he made from scratch that evening is something we still talk about.',
    guestName: 'James T., London',
    menuStyles: [
      {
        title: 'Mediterranean Villa Dinner',
        desc: '3-course set menu built around fresh seafood, handmade pasta, and clean Mediterranean technique. Designed for 2–12 guests who want elegant food with a relaxed pace.',
      },
      {
        title: 'Fresh Pasta Experience',
        desc: "Surya's signature: handmade pasta rolled that morning, served in 2–3 courses with seasonal sauces and fresh Bali seafood. Great for guests who want something specific and memorable.",
      },
      {
        title: 'Seafood Feast',
        desc: 'A produce-led dinner built around the best catch of the day. Grilled, cured, and finished in Italian style — light, clean, and perfectly timed for large villa tables.',
      },
      {
        title: 'Group Dinner (6–15 guests)',
        desc: "Surya's most natural format. He manages large villa tables with ease — food lands hot, wines pour on rhythm, and every guest gets the same quality regardless of where they're seated.",
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
          "Surya's signature is tagliolini with fresh seafood, but he also makes cacio e pepe, carbonara, and seasonal filled pasta (tortellini, ravioli) depending on the menu. All pasta is handmade from scratch on the day of your dinner.",
      },
      {
        question: 'Is Surya\'s food strictly Italian?',
        answer:
          "No — Surya uses Italian and Mediterranean technique but stays connected to Bali's ingredients. You'll find Jimbaran seafood, local citrus, and Balinese spice notes blended into what is otherwise a clean European style of cooking.",
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
      {
        question: 'How do I request Surya specifically?',
        answer:
          'Message WhatsApp with “request Surya” plus dates, guest count and villa area. We confirm availability and send a menu proposal.',
      },
      {
        question: 'What cuisines does Surya cook best?',
        answer:
          'Mediterranean and Italian — handmade pasta, grilled proteins, seafood and villa-friendly set dinners. See <a href="/fine-dining">fine dining</a> formats.',
      },
      {
        question: 'Can Surya cook for multi-day villa stays?',
        answer:
          'Yes — daily chef service and weekly meal plans are available. Start from day rates on <a href="/private-chef-bali">private chef Bali</a>.',
      },
      {
        question: 'Does Surya handle kids menus?',
        answer:
          'Yes — parallel kids plates are common. Tell us ages and preferences at booking. <a href="/kids-menus">Kids menus</a>.',
      },
      {
        question: 'What group size suits Surya best?',
        answer:
          'Typically 2–16 guests for villa dinners. Larger parties may add kitchen support — we scope that in the quote.',
      },
      {
        question: 'Where does Surya usually cook in Bali?',
        answer:
          'Canggu, Seminyak, Pererenan, Ubud and South Bali villas. Travel outside core zones is quoted if needed.',
      },
      {
        question: 'Can Surya do a pasta-focused workshop or interactive dinner?',
        answer:
          'Yes for small groups — interactive pasta nights pair well with villa stays. For formal classes see <a href="/experiences/private-cooking-class">private cooking class</a>.',
      },
      {
        question: 'How are dietary needs handled?',
        answer:
          'Gluten-free, vegetarian, vegan and common allergies are designed into the menu when briefed early — no surprise substitutions on the night.',
      },
      {
        question: 'What is included in Surya’s service?',
        answer:
          'Shopping, cooking, plating and cleanup. Service staff and bar are optional add-ons via <a href="/in-villa-service">in-villa service</a>.',
      },
      {
        question: 'How do I see pricing before I book?',
        answer:
          'Published starts are on <a href="/pricing">pricing</a>; your WhatsApp proposal is fixed for the agreed menu and headcount.',
      }

    ],
    seoTitle: "I Made Surya — Private Chef Bali | Mediterranean & Pasta | myCHEF",
    seoDescription:
      "Book I Made Surya, myCHEF Head Chef for Mediterranean villa dinners and handmade pasta. Ubud-born, trained under Adriano. Perfect for 2–15 guests. WhatsApp.",
    ogImage: 'https://mychef.id/generated/chef-made-surya-portrait.webp',
  },

  'bayu-pranata': {
    slug: 'bayu-pranata',
    name: 'Bayu Pranata',
    role: 'Head Chef — BBQ & Grill',
    origin: 'Jimbaran, Bali',
    badge: 'Jimbaran grill specialist · Decades of live-fire cooking across Bali',
    portrait: '/generated/chef-bayu-pranata-portrait.webp',
    portraitAlt: 'Bayu Pranata — Head Chef BBQ and Grill at myCHEF Bali',
    specialty: 'Open-Flame & Live-Fire Cooking',
    cuisine: ['BBQ & grilling', 'Wagyu & premium cuts', 'Seafood grill', 'Indonesian satay & babi guling'],
    shortBio:
      'Bayu runs our BBQ and grill experiences with the confidence of someone who grew up cooking over live fire. From wagyu and lobster to whole fish and satay, he keeps the energy relaxed while every protein lands perfectly cooked.',
    fullBio: [
      "Bayu Pranata was born and raised in Jimbaran — the fishing village on Bali's southwest coast that built its entire identity around seafood grilled over coconut charcoal. Before he ever worked in a professional kitchen, Bayu spent his formative years around the beachside warungs that made Jimbaran famous, absorbing the rhythms of live-fire cooking from people who had been doing it for generations.",
      "That foundation gave Bayu something formal culinary training rarely produces: an instinct for heat. He reads fire the way most chefs read a timer — by sight, sound, and smell. A wagyu rump needs three minutes per side over indirect heat. A whole snapper needs to come off before the skin splits. A lobster tail wants a basting brush every 45 seconds. Bayu manages all of this simultaneously, across multiple grill stations, without written notes or printed checklists.",
      'He joined myCHEF to bring that skill set into villa settings — specifically the large-group poolside BBQs that became one of the most booked experience types in Bali as villa rentals grew. Bayu now leads grill events from Seminyak to Nusa Dua and regularly serves groups of 30, 50, even 80 guests for celebrations that run poolside from sunset into the night.',
      "His menus blend international grill technique with Indonesian tradition. A Bayu Pranata event might open with satay, move through wagyu striploin and grilled lobster, and land on a whole pig or babi guling as the centrepiece. It's the kind of cooking that works for every table — from food-obsessed guests who want the perfect char on their steak, to families who just want something generous, fragrant, and unforgettable.",
    ],
    achievements: [
      'Leads poolside BBQ and grill events across Bali',
      'Specialist in wagyu, seafood, and whole-animal cooking',
      'Experienced with celebrations from 10 to 80+ guests',
      'Born and trained in Jimbaran grill tradition',
      'Trusted for birthday BBQs, retreat dinners, and villa parties',
    ],
    signatureDishes: [
      'Wagyu beef brisket with chimichurri',
      'Jimbaran-style grilled whole fish',
      'Smoky lamb ribs with sambal matah',
    ],
    guestQuote: 'Bayu turned our villa into a proper grill restaurant for the night. The wagyu was perfectly cooked and the whole fish was stunning — our group of 25 was raving all week.',
    guestName: 'Mark L., Melbourne',
    menuStyles: [
      {
        title: 'Poolside BBQ Dinner',
        desc: "Bayu's signature setup: grill station by the pool, wagyu and seafood, satay and sides, sunset timing. Built for 10–80 guests who want the full Bali villa experience.",
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
          "Yes — birthday BBQs are Bayu's most common booking. He handles everything from setup to cleanup, brings the grill equipment, and can customise the menu around your guest count, budget, and dietary mix.",
      },
      {
        question: 'What proteins does Bayu specialise in?',
        answer:
          'Bayu is strongest on wagyu beef cuts, whole fish and lobster, satay (chicken, pork, beef), and whole pig (babi guling) for larger celebrations. He also does excellent BBQ prawn and squid for seafood-focused events.',
      },
      {
        question: 'How large a group can Bayu handle?',
        answer:
          "Bayu regularly serves 30–80 guests at villa events. He's done groups above 100 with additional kitchen support. For groups over 30, we recommend messaging early to confirm staffing and equipment logistics.",
      },
      {
        question: 'Does Bayu do BBQ in Ubud or inland villas?',
        answer:
          "Yes — Bayu travels across Bali including Ubud, Canggu, Seminyak, Uluwatu, and Nusa Dua. He brings his own equipment when needed, so villa kitchen access isn't a limitation.",
      },
      {
        question: 'Can Bayu accommodate vegetarian or halal guests in a BBQ setting?',
        answer:
          "Yes. Bayu runs separate grill stations for vegetarian items and uses halal-certified meat suppliers when requested. A mixed group's dietary needs are planned into the menu from the start.",
      },
      {
        question: 'Can Bayu run a poolside BBQ for a villa party?',
        answer:
          'Yes — poolside and garden BBQs are his specialty for birthdays and group stays. See <a href="/catering/bbq-catering">BBQ catering</a>.',
      },
      {
        question: 'What proteins and styles does Bayu offer?',
        answer:
          'Satay, grilled seafood, premium steaks, chicken and vegetable grills with Indonesian and international marinades.',
      },
      {
        question: 'How large a BBQ can Bayu handle?',
        answer:
          'Typically 10–40 guests with standard setup; larger events add crew. Share guest count early for equipment planning.',
      },
      {
        question: 'Does Bayu work inland or only coastal villas?',
        answer:
          'He covers coastal South Bali and can cook inland (including Ubud) with logistics quoted upfront.',
      },
      {
        question: 'Can Bayu include vegetarian or halal BBQ options?',
        answer:
          'Yes — separate grills and prep when required. Flag requirements at booking.',
      },
      {
        question: 'Can we add a bartender to Bayu’s BBQ?',
        answer:
          'Yes — combine with <a href="/in-villa-service/bartenders">bartender hire</a> or a <a href="/experiences/private-cocktail-party">cocktail party</a> add-on.',
      },
      {
        question: 'Is equipment provided for outdoor BBQ?',
        answer:
          'Core grilling equipment and service tools are planned in the quote. Villa built-in BBQs can be used when suitable.',
      },
      {
        question: 'How far ahead to book Bayu for peak weekends?',
        answer:
          '1–2 weeks is ideal for high season Saturdays; midweek is often faster.',
      },
      {
        question: 'Does Bayu also do plated dinners?',
        answer:
          'His strength is live-fire and BBQ formats; for tasting menus we match you with Adriano or another fine-dining chef.',
      },
      {
        question: 'What is included vs groceries?',
        answer:
          'Chef labour, setup and cleanup included; groceries and premium proteins at cost as listed in your proposal. <a href="/pricing">Pricing guide</a>.',
      }

    ],
    seoTitle: "Bayu Pranata — BBQ Chef Bali | Live-Fire Grill Specialist | myCHEF",
    seoDescription:
      "Book Bayu Pranata for BBQ and grill events in Bali. Poolside BBQ dinners, wagyu nights, large groups (10–80+). Jimbaran live-fire specialist. WhatsApp.",
    ogImage: 'https://mychef.id/generated/chef-bayu-pranata-portrait.webp',
  },

  'ni-putu-asri': {
    slug: 'ni-putu-asri',
    name: 'Ni Putu Asri',
    role: 'Head Chef — Balinese & Asian Fusion',
    origin: 'Gianyar, Bali',
    badge: 'Gianyar-born · Rooted in Balinese ceremonial cooking tradition',
    portrait: '/generated/chef-ni-putu-asri-portrait.webp',
    portraitAlt: 'Ni Putu Asri — Head Chef Balinese and Asian Fusion at myCHEF Bali',
    specialty: 'Balinese Classics & Modern Asian',
    cuisine: ['Indonesian feast menus', 'Balinese ceremonial dishes', 'Asian fusion', 'Modern Indonesian plating'],
    shortBio:
      'Asri protects the local soul of the myCHEF menu. She leads Indonesian feasts, ceremonial dishes, and Asian fusion menus with a balance of authenticity, polish, and warmth that villa guests immediately feel.',
    fullBio: [
      "Ni Putu Asri grew up in Gianyar — the cultural heartland of Bali — in a family where cooking was inseparable from ceremony. By the time she was a teenager, she had already participated in dozens of communal feasts for temple ceremonies, cremation rituals, and harvest celebrations. She learned that Balinese cooking is never just about feeding people: it's about creating a sensory experience that marks a moment in time.",
      'That foundation gave Asri something rare: the ability to make traditional Indonesian food feel both genuinely authentic and completely appropriate for a villa setting with international guests. She is not presenting food as a performance of culture — she is cooking the way she was raised to cook, then adapting the presentation and pacing for guests who may be encountering these flavours for the first time.',
      "Her Indonesian feast menus typically open with a selection of sambals and crackers, move through dishes like ayam betutu (slow-cooked spiced chicken), jukut urap (coconut vegetable salad), and lawar, and land on a rice centrepiece surrounded by 6–8 accompaniments. For guests who want a single memorable Balinese dinner in their villa, Asri's feast is the most requested experience after Adriano's tasting menu.",
      "Beyond traditional cooking, Asri has also developed a sharp instinct for Asian fusion — dishes that draw on Indonesian, Thai, and Japanese techniques to create menus that feel fresh and contemporary without losing their regional identity. Her miso-glazed tempeh and her tamarind prawn curry are two examples of how she navigates the space between tradition and innovation.",
      "For villa guests, booking Asri means booking someone who genuinely loves the food she's cooking and brings the kind of warmth to a kitchen that guests feel even before the first plate arrives.",
    ],
    achievements: [
      'Leads Indonesian feast and ceremonial menus across Bali',
      'Balances traditional Balinese cooking with modern plating',
      'Trusted for family celebrations and cultural villa dinners',
      'Raised in Gianyar — the cultural heartland of Bali',
      'Developed myCHEF Asian fusion menu alongside Adriano',
    ],
    signatureDishes: [
      'Bebek betutu (slow-cooked Balinese duck)',
      'Nasi goreng kampung with market herbs',
      'Balinese lawar with pork and coconut',
    ],
    guestQuote: 'Asri cooked an Indonesian feast for our family of twelve and it was extraordinary. She explained every dish as she served it — it felt like a true cultural experience, not just dinner.',
    guestName: 'Priya N., Singapore',
    menuStyles: [
      {
        title: 'Indonesian Feast (Rijsttafel)',
        desc: "Asri's signature: 6–8 dishes around a central rice, from ayam betutu and lawar to sambal and urap. Generous, communal, and unforgettable for guests discovering Balinese cuisine.",
      },
      {
        title: 'Balinese Tasting Set',
        desc: 'A plated 4-course interpretation of Balinese flavours — cleaner presentation for guests who want the authenticity of local ingredients with the structure of a sit-down fine dinner.',
      },
      {
        title: 'Asian Fusion Villa Dinner',
        desc: "A contemporary menu drawing on Indonesian, Thai, and Japanese technique. Asri's miso glazed tempeh, tamarind prawn curry, and green papaya salad work especially well for health-conscious villas.",
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
          "Yes — Asri's Indonesian feast is one of our most requested experiences and she is available for bookings across Bali. Message us on WhatsApp with your villa location and guest count and we will confirm her availability.",
      },
      {
        question: 'What is an Indonesian feast (rijsttafel)?',
        answer:
          "A rijsttafel is a communal-style meal where rice is served at the centre of the table surrounded by many smaller dishes — sambals, cooked vegetables, meat or fish, and condiments. Asri's version uses traditional Balinese recipes and typically includes 6–8 dishes for 4–12 guests.",
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
      {
        question: 'Can Asri cook a full Balinese or Indonesian feast?',
        answer:
          'Yes — authentic Balinese and Indonesian menus including rijsttafel-style spreads. Ideal for cultural villa dinners.',
      },
      {
        question: 'What is a rijsttafel experience with Asri?',
        answer:
          'A multi-dish Indonesian rice table — many small plates for sharing. Guest count shapes the spread size.',
      },
      {
        question: 'Is Asri’s food good for vegetarians?',
        answer:
          'Yes — many Indonesian classics adapt beautifully. Vegan options available when briefed.',
      },
      {
        question: 'Can Asri explain dishes during service?',
        answer:
          'Yes — she often shares stories and ingredients for guests who want a cultural dining experience.',
      },
      {
        question: 'Does Asri cover Ubud and South Bali?',
        answer:
          'Yes — Ubud is a natural fit, and South Bali villas are regularly covered. <a href="/locations/ubud">Ubud dining</a>.',
      },
      {
        question: 'Can Asri cater a temple-style or ceremonial menu for guests?',
        answer:
          'She can design respectful cultural menus for villa guests. Religious ceremony catering is scoped case by case.',
      },
      {
        question: 'How do spice levels work?',
        answer:
          'Menus are calibrated to your group — mild for visitors, authentic heat on request.',
      },
      {
        question: 'Can Asri combine with a cooking class?',
        answer:
          'Yes for small groups — hands-on Indonesian cooking. See <a href="/experiences/private-cooking-class">private cooking class</a>.',
      },
      {
        question: 'How do I book Asri?',
        answer:
          'WhatsApp dates, villa pin and guest count — request Asri by name. Or use <a href="/book">book</a>.',
      }

    ],
    seoTitle: "Ni Putu Asri — Balinese Chef Bali | Indonesian Feast | myCHEF",
    seoDescription:
      "Book Ni Putu Asri for authentic Balinese and Indonesian feast menus. Gianyar-born, ceremonial cooking heritage, Asian fusion specialist. WhatsApp.",
    ogImage: 'https://mychef.id/generated/chef-ni-putu-asri-portrait.webp',
  },

  'wayan-suarjana': {
    slug: 'wayan-suarjana',
    name: 'Wayan Suarjana',
    role: 'Head Pastry Chef',
    origin: 'Seminyak, Bali',
    badge: 'Bali-trained · Luxury hotel pastry kitchens in Seminyak',
    portrait: '/generated/chef-wayan-suarjana-portrait.webp',
    portraitAlt: 'Wayan Suarjana — Head Pastry Chef at myCHEF Bali',
    specialty: 'Pastry, Desserts & Petit Fours',
    cuisine: ['Plated desserts', 'Chocolate work', 'Celebration cakes', 'Tropical fruit pastry'],
    shortBio:
      'Wayan brings precision and patience to every dessert course. Trained in Seminyak hotel pastry kitchens before joining myCHEF, he leads all our dessert menus from chocolate tasting plates to tropical fruit pavlovas and Balinese rice pudding variations.',
    fullBio: [
      'Wayan Suarjana began his culinary journey not in a restaurant but in the pastry kitchen of a five-star resort in Seminyak — an environment where precision is non-negotiable and every plate must tell a story. He spent six years working his way from apprentice to lead pastry chef, mastering the techniques behind plated desserts, chocolate work, choux pastry, and the delicate art of sugar sculpture.',
      'What sets Wayan apart is his ability to bring Balinese flavour into European pastry forms without losing the integrity of either. His pandan creme brulee, his coconut and lemongrass panna cotta, and his dark chocolate tart with Balinese palm sugar have become some of the most consistently praised desserts across the myCHEF menu catalogue.',
      'When he joined myCHEF, Wayan took over all dessert menu development and has since expanded the pastry offering to cover everything from elegant petit fours for tasting menus to full custom celebration cakes for villa birthday parties. He also mentors the junior kitchen staff on pastry fundamentals — extending his influence beyond his own bookings.',
      'For villa guests who want a dessert course that feels worthy of everything that came before it, Wayan is the reason that last plate lands with the same intention as the first.',
    ],
    achievements: [
      'Leads all pastry and dessert menus across myCHEF',
      'Creates custom celebration cakes for villa events',
      'Specialist in chocolate work and plated fine-dining desserts',
      'Six years in luxury five-star hotel pastry kitchens',
      'Developed the full myCHEF dessert menu catalogue',
    ],
    signatureDishes: [
      'Chocolate lava cake with Balinese vanilla',
      'Tropical fruit pavlova with lychee cream',
      'Coconut pandan layer cake',
    ],
    guestQuote: 'The dessert course Wayan prepared was honestly the highlight of our entire stay. The chocolate cake was perfect, and the pandan layer cake looked like art.',
    guestName: 'Clara M., Amsterdam',
    menuStyles: [
      {
        title: 'Dessert Tasting Plate',
        desc: 'A curated selection of three plated desserts — ideal for closing a tasting menu or as a standalone dessert experience for guests who want something special after their main course.',
      },
      {
        title: 'Celebration Cake & Petit Fours',
        desc: 'Custom cakes built around your occasion — birthday, anniversary, proposal, or farewell dinner. Wayan designs and bakes to brief, delivered and plated at your villa.',
      },
      {
        title: 'Tropical Fruit Pastry Course',
        desc: 'A lighter dessert progression built around Bali\'s exceptional seasonal fruits — papaya, mango, passionfruit, lychee, and rambutan shaped into pavlovas, sorbets, and tarts.',
      },
      {
        title: 'Chocolate & Caramel Experience',
        desc: 'For guests who want pure indulgence — a chocolate-forward dessert course covering dark chocolate fondant, salted caramel bonbons, and Balinese palm sugar ice cream.',
      },
    ],
    perfectFor: [
      'Tasting menu dessert courses',
      'Villa birthday celebrations',
      'Anniversary and proposal dinners',
      'Guests wanting Michelin-level pastry in a villa setting',
      'Events needing a custom celebration cake',
    ],
    faqs: [
      {
        question: 'Can Wayan bake a custom birthday cake for a villa party?',
        answer:
          'Yes — custom celebration cakes are one of Wayan\'s most requested services. Message us with the date, flavour preferences, and any decoration brief and he will design something around your occasion.',
      },
      {
        question: 'What is Wayan\'s signature dessert?',
        answer:
          'Wayan\'s most requested dish is his chocolate lava cake with Balinese vanilla cream, but his coconut pandan layer cake and tropical fruit pavlova are equally loved. All desserts are made from scratch on the day.',
      },
      {
        question: 'Can Wayan handle dietary requirements in his desserts?',
        answer:
          'Yes — Wayan regularly creates gluten-free, dairy-free, and vegan dessert courses. Let us know your guests\' requirements at booking and the dessert menu is adapted from the start.',
      },
      {
        question: 'Does Wayan work alongside other chefs or independently?',
        answer:
          'Both. Wayan often works as the pastry component of a full myCHEF dinner service, collaborating with a main chef. For purely dessert-focused experiences or celebration cakes, he is also available independently.',
      },
      {
        question: 'What areas of Bali does Wayan cover?',
        answer:
          'Wayan serves villas across Seminyak, Canggu, Ubud, Uluwatu, and Nusa Dua. For villa locations outside central Bali, please message us and we will confirm logistics and any travel requirements.',
      },
      {
        question: 'Can Wayan bake a custom celebration cake?',
        answer:
          'Yes — birthday and villa celebration cakes are a signature. Share theme, servings and dietary needs early.',
      },
      {
        question: 'What desserts is Wayan known for?',
        answer:
          'Plated fine-dining desserts, tropical fruit compositions and celebration cakes designed for villa service.',
      },
      {
        question: 'Can Wayan work with another myCHEF savoury chef?',
        answer:
          'Yes — dessert-only or full sweet course support alongside a head chef is common for multi-course dinners.',
      },
      {
        question: 'Does Wayan handle gluten-free or vegan desserts?',
        answer:
          'Yes when briefed at booking — separate prep for allergens when required.',
      },
      {
        question: 'What areas does Wayan cover?',
        answer:
          'Major villa regions across South Bali and Ubud. Travel fees for remote sites quoted upfront.',
      },
      {
        question: 'Can Wayan do a dessert tasting for a small group?',
        answer:
          'Yes for intimate villa evenings — multi-course sweet menus or dessert bars for parties.',
      },
      {
        question: 'Is Wayan available for wedding dessert tables?',
        answer:
          'Yes as part of wedding catering coordination. See <a href="/events/weddings">wedding catering</a>.',
      },
      {
        question: 'How far ahead for custom cakes?',
        answer:
          '5–10 days is ideal for custom designs; simple cakes can be faster depending on schedule.',
      },
      {
        question: 'What is included in dessert-only bookings?',
        answer:
          'Dessert planning, shopping for pastry ingredients, prep, plating and cleanup for the sweet service.',
      },
      {
        question: 'How do I request Wayan?',
        answer:
          'WhatsApp “request Wayan” with date, guest count and dessert brief. Pair with <a href="/fine-dining">fine dining</a> if you need a full menu.',
      }

    ],
    seoTitle: "Wayan Suarjana — Pastry Chef Bali | Cakes & Desserts | myCHEF",
    seoDescription:
      "Book Wayan Suarjana, myCHEF Head Pastry Chef in Bali. Custom cakes, plated desserts, chocolate tasting courses. Hotel-trained pastry specialist. WhatsApp.",
    ogImage: 'https://mychef.id/generated/chef-wayan-suarjana-portrait.webp',
  },

  'ketut-mahardika': {
    slug: 'ketut-mahardika',
    name: 'Ketut Mahardika',
    role: 'Head Chef — Seafood & Japanese',
    origin: 'Jimbaran, Bali',
    badge: 'Jimbaran-born · Japanese knife technique · Direct market sourcing',
    portrait: '/generated/chef-ketut-mahardika-portrait.webp',
    portraitAlt: 'Ketut Mahardika — Head Chef Seafood and Japanese at myCHEF Bali',
    specialty: 'Japanese Technique & Fresh Seafood',
    cuisine: ['Sashimi & crudo', 'Japanese-spiced seafood', 'Tempura & gyoza', 'Tuna and prawn tartare'],
    shortBio:
      'Ketut specialises in Japanese-influenced preparations and Bali seafood. He sources directly from Jimbaran each morning and builds menus around what arrived. His sashimi boards, grilled fish with yuzu, and local prawn tempura are consistently the most requested dishes across our Japanese-leaning bookings.',
    fullBio: [
      'Ketut Mahardika grew up metres from the Jimbaran fish market — the morning auction that supplies some of the freshest seafood in Southeast Asia. From childhood he understood what a good fish looked like, smelled like, and how quickly quality deteriorates in the tropics. That foundation gave him an almost instinctive relationship with raw seafood that no culinary school can replicate.',
      'He trained his knife skills under a Japanese-trained chef he met through the Bali hospitality circuit, spending two intensive years learning classical Japanese fish butchery: the honboshi cut, the sakudori fillet, the kasumi-style thin slice. That technical grounding allowed him to work with sashimi-grade fish in a way that most Balinese chefs had never approached.',
      'Ketut joined myCHEF to build out the Japanese and seafood arm of the menu catalogue — a gap he saw clearly in Bali\'s villa dining scene, where guests often wanted Japanese-quality fish work outside of a restaurant setting. He now handles all sourcing for large seafood events, negotiates directly with Jimbaran boat captains for specific catches, and can build a sashimi board from species that most Bali diners have never encountered.',
      'For villa guests who love Japanese food or simply want the freshest possible seafood prepared with real technical skill, Ketut is the most natural choice on the myCHEF team.',
    ],
    achievements: [
      'Trained in Japanese knife technique and fish butchery',
      'Sashimi, crudo, and raw seafood specialist',
      'Sources direct from Jimbaran fish market every morning',
      'Manages seafood sourcing for large myCHEF events',
      'Leads all Japanese-influenced menu bookings',
    ],
    signatureDishes: [
      'Otoro sashimi with ponzu',
      'Grilled king prawns with yuzu butter',
      'Japanese-spiced yellowfin tuna tataki',
    ],
    guestQuote: 'Ketut prepared a sashimi and grilled seafood dinner that rivalled anything we have eaten in Tokyo. The fish was extraordinary — you could tell it was sourced that morning.',
    guestName: 'Hiroshi K., Osaka',
    menuStyles: [
      {
        title: 'Sashimi & Crudo Board',
        desc: 'Ketut\'s signature: a curated board of market-fresh sashimi, tuna tataki, and local prawn crudo — plated with Japanese precision and Bali citrus. Perfect as a standalone starter or tasting course.',
      },
      {
        title: 'Japanese Seafood Dinner',
        desc: 'A 3–5 course progression through Japanese technique: miso-glazed grilled fish, tempura, sashimi, and a prawn or scallop main. Built entirely around what arrived at Jimbaran that morning.',
      },
      {
        title: 'Omakase Villa Experience',
        desc: 'Trust the chef. Ketut selects the day\'s best fish and builds a multi-course tasting menu around it — no fixed menu, total freshness. For adventurous guests who want the truest seafood experience in Bali.',
      },
      {
        title: 'Seafood Feast (Large Groups)',
        desc: 'Ketut scales the Japanese seafood experience to larger groups — whole grilled fish, king prawn platters, sashimi sharing boards, and tempura stations for 10–30 guests at villa events.',
      },
    ],
    perfectFor: [
      'Japanese food lovers and sashimi enthusiasts',
      'Intimate seafood-focused dinners (2–10 guests)',
      'Guests wanting the freshest possible Bali seafood',
      'Omakase-style chef\'s menu experiences',
      'Large-group villa seafood feasts',
    ],
    faqs: [
      {
        question: 'Can I book Ketut for a sashimi dinner at my villa?',
        answer:
          'Yes — sashimi and Japanese seafood menus are Ketut\'s most requested format. Message us your villa location, guest count, and any dietary restrictions and we will confirm availability within the hour.',
      },
      {
        question: 'How fresh is the seafood Ketut uses?',
        answer:
          'Ketut sources directly from Jimbaran fish market each morning and builds the day\'s menu around what arrived on the boats. The fish used for sashimi-grade preparations is handled same-day.',
      },
      {
        question: 'Does Ketut work with non-seafood dietary guests in a mixed group?',
        answer:
          'Yes. Ketut regularly runs seafood-forward menus with parallel dishes for guests who do not eat fish — Japanese-style tofu, vegetable tempura, and mushroom broths are common additions to a mixed booking.',
      },
      {
        question: 'What is an omakase experience with Ketut?',
        answer:
          'Omakase means "I\'ll leave it to you" in Japanese — Ketut selects the day\'s best fish and designs a multi-course tasting menu on the spot. No fixed menu, just what is freshest and most interesting at market that morning.',
      },
      {
        question: 'Can Ketut prepare a large sashimi spread for a villa party?',
        answer:
          'Absolutely. Ketut regularly prepares sashimi sharing boards and raw seafood spreads for groups of 15–30 guests at villa parties. He coordinates volume and variety directly with Jimbaran suppliers.',
      },
      {
        question: 'Can Ketut run a sashimi or seafood-focused villa dinner?',
        answer:
          'Yes — fresh seafood and sashimi-forward menus are his specialty when supply is excellent that day.',
      },
      {
        question: 'How fresh is the seafood?',
        answer:
          'Sourced the same day when possible from trusted suppliers; weather and catch can change the menu — flexibility is part of the craft.',
      },
      {
        question: 'Can Ketut cook for mixed groups with non-seafood guests?',
        answer:
          'Yes — parallel land-protein or vegetarian courses are planned into the menu when briefed.',
      },
      {
        question: 'What is an omakase-style evening with Ketut?',
        answer:
          'A chef-led multi-course seafood progression based on the best available product that day — guest count usually stays intimate.',
      },
      {
        question: 'How large a sashimi spread can Ketut prepare?',
        answer:
          'From romantic dinners for 2 to villa parties — larger spreads need earlier notice for sourcing and prep space.',
      },
      {
        question: 'Does Ketut cook beyond Japanese-inspired seafood?',
        answer:
          'Seafood technique is core; grilled and modern Asian preparations also fit villa service.',
      },
      {
        question: 'Where does Ketut usually work?',
        answer:
          'Coastal South Bali (Jimbaran, Nusa Dua, Seminyak, Canggu, Uluwatu) is ideal for seafood logistics. <a href="/locations/jimbaran">Jimbaran</a>.',
      },
      {
        question: 'Can we add wine or sake pairing guidance?',
        answer:
          'Beverage pairing notes can be suggested; alcohol supply is usually client-provided or sourced at cost.',
      },
      {
        question: 'How do I book Ketut for a seafood night?',
        answer:
          'WhatsApp date, guest count, villa kitchen notes and any allergies. Request Ketut by name.',
      },
      {
        question: 'Is sushi-making class available?',
        answer:
          'Interactive sushi sessions for small groups can be arranged — see also <a href="/experiences/sushi-masterclass">sushi masterclass</a>.',
      }

    ],
    seoTitle: "Ketut Mahardika — Seafood & Japanese Chef Bali | Sashimi | myCHEF",
    seoDescription:
      "Book Ketut Mahardika for Japanese seafood and sashimi in your Bali villa. Jimbaran-born, knife-trained, daily market sourcing. Omakase & feast menus. WhatsApp.",
    ogImage: 'https://mychef.id/generated/chef-ketut-mahardika-portrait.webp',
  },

  'sari-dewi-kusuma': {
    slug: 'sari-dewi-kusuma',
    name: 'Sari Dewi Kusuma',
    role: 'Wellness & Retreat Chef',
    origin: 'Ubud, Bali',
    badge: 'Ubud wellness community favourite · Yoga retreat and detox specialist',
    portrait: '/generated/chef-sari-dewi-portrait.webp',
    portraitAlt: 'Sari Dewi Kusuma — Wellness and Retreat Chef at myCHEF Bali',
    specialty: 'Plant-Based, Ayurvedic & Raw Cuisine',
    cuisine: ['Raw vegan cuisine', 'Ayurvedic meal planning', 'Balinese whole food', 'Detox and cleanse menus'],
    shortBio:
      'Sari leads our wellness kitchen — retreat catering, detox programmes, and the kind of Balinese whole-food cooking that leaves guests feeling genuinely restored. She understands the rhythms of yoga retreat schedules, works around complex dietary combinations, and turns healthy eating into something guests actually look forward to.',
    fullBio: [
      'Sari Dewi Kusuma grew up in the hills above Ubud, in a family that grew most of its own food and cooked according to the principles of Balinese herbalism and seasonal eating. Long before wellness became an industry, her household was already living what most Ubud retreat centres now sell: whole food, fermentation, jamu tonics, and a relationship with ingredients that starts at the soil.',
      'Her professional path took her through several of Ubud\'s most respected wellness retreats, where she developed the specific skill set that sets her apart: the ability to cook for people with complex, overlapping dietary requirements — vegan, raw, gluten-free, Ayurvedic, low-FODMAP — simultaneously, across three meals a day, for groups of 15–40 guests, without losing flavour, presentation, or variety.',
      'Sari joined myCHEF to lead all wellness-adjacent bookings — yoga retreat catering, detox programmes, silent retreat meal service, and the growing number of villa guests who simply want healthy, vibrant food that does not feel like a compromise. Her jamu golden turmeric bowl and her raw zucchini pad thai have become two of the most shared dishes in myCHEF\'s social history.',
      'What Sari brings to every booking is not just skill but genuine conviction. She believes that the best wellness food should be the most delicious food — that nourishment and pleasure are not opposites. Guests who book Sari do not feel like they are eating health food. They feel like they are eating something extraordinary.',
    ],
    achievements: [
      'Leads all retreat and wellness bookings across Ubud and Bali',
      'Specialist in raw, vegan, and Ayurvedic menu construction',
      'Trusted by yoga retreat operators across Bali for multi-day catering',
      'Raised in Ubud with deep knowledge of Balinese herbalism',
      'Developed the myCHEF wellness and detox menu catalogue',
    ],
    signatureDishes: [
      'Raw zucchini pad thai with cashew sauce',
      'Jamu golden turmeric bowl',
      'Balinese banana blossom curry',
    ],
    guestQuote: 'Sari fed our yoga retreat group for seven days and every single meal was incredible. People who normally struggle to eat healthy were going back for seconds. She is truly gifted.',
    guestName: 'Rachel B., Los Angeles',
    menuStyles: [
      {
        title: 'Yoga Retreat Catering',
        desc: 'Full-day meal service for retreat groups — breakfast, lunch, and dinner built around plant-based Balinese whole food, with full accommodation for dietary overlaps (raw, vegan, GF, Ayurvedic).',
      },
      {
        title: 'Detox & Cleanse Programme',
        desc: 'Structured multi-day menus designed around cleansing — jamu tonics, enzyme-rich raw food, light cooked meals, and hydration-focused snack plates. Designed in consultation with retreat operators.',
      },
      {
        title: 'Villa Wellness Dinner',
        desc: 'A single-evening plant-based dinner for villa guests who want vibrant, health-focused food without sacrificing elegance. Sari\'s wellness dinners feel like a fine-dining experience, not a salad bar.',
      },
      {
        title: 'Balinese Whole Food Experience',
        desc: 'A menu rooted in traditional Balinese food culture — jamu drinks, fermented condiments, rice-based mains, and tropical fruit desserts. Educational, nourishing, and deeply grounded in place.',
      },
    ],
    perfectFor: [
      'Yoga and wellness retreat groups',
      'Detox and cleanse programmes',
      'Vegan, raw, and Ayurvedic dietary guests',
      'Health-conscious villa stays in Ubud',
      'Guests wanting vibrant plant-based cooking',
    ],
    faqs: [
      {
        question: 'Can Sari cater for a multi-day yoga retreat?',
        answer:
          'Yes — multi-day retreat catering is Sari\'s core specialty. She works with retreat operators to build a full meal plan across the programme, accommodates complex dietary combinations, and manages all sourcing.',
      },
      {
        question: 'What dietary requirements does Sari specialise in?',
        answer:
          'Sari regularly cooks for raw vegan, whole-food plant-based, Ayurvedic, gluten-free, and low-FODMAP guests. She is one of the few chefs in Bali who can handle multiple overlapping requirements simultaneously at scale.',
      },
      {
        question: 'What is a jamu tonic and does Sari include it in her menus?',
        answer:
          'Jamu is a traditional Balinese and Javanese herbal tonic — typically made from turmeric, ginger, lemongrass, and tamarind. Sari includes jamu in most of her wellness menus as a morning or pre-meal ritual drink.',
      },
      {
        question: 'Is Sari\'s food suitable for non-vegan guests in a mixed group?',
        answer:
          'Absolutely. Sari\'s plant-based food is designed to be enjoyed by everyone at the table, not just dietary guests. Most non-vegan guests who eat her food are surprised by how satisfying and flavour-forward it is.',
      },
      {
        question: 'Can Sari cook for villa guests who simply want healthy food, not a retreat?',
        answer:
          'Yes. Many of Sari\'s bookings are simply villa guests who want vibrant, health-focused food during their stay — not a formal retreat programme. She adapts her menus to any setting or occasion.',
      },
      {
        question: 'Can Sari cater multi-day yoga or wellness retreats?',
        answer:
          'Yes — multi-day plant-forward meal plans are her core specialty. See <a href="/catering/retreat-catering">retreat catering</a>.',
      },
      {
        question: 'Which diets does Sari specialise in?',
        answer:
          'Vegan, raw-leaning, gluten-free, Ayurvedic-inspired and low-inflammatory menus — multiple requirements at once when briefed.',
      },
      {
        question: 'Will non-vegan guests enjoy Sari’s food?',
        answer:
          'Yes — menus are built for flavour and satisfaction for mixed tables, not only dietary guests.',
      },
      {
        question: 'Can Sari cook healthy food for a normal villa stay (not a retreat)?',
        answer:
          'Yes — many bookings are simply health-focused villa dining for a week or long stay.',
      },
      {
        question: 'Does Sari work in Ubud and South Bali?',
        answer:
          'Ubud and wellness-focused villas are frequent; South Bali is covered too. <a href="/locations/ubud">Ubud guide</a>.',
      },
      {
        question: 'Can Sari include jamu or wellness drinks?',
        answer:
          'Yes — traditional herbal tonics and fresh juices can be part of the meal plan.',
      },
      {
        question: 'How do grocery and supplement ingredients work?',
        answer:
          'Core groceries are shopped for the menu; specialty powders or guest-supplied supplements can be integrated when discussed.',
      },
      {
        question: 'What group sizes suit Sari best?',
        answer:
          'From couples to full retreat houses — larger retreats add kitchen support as needed.',
      },
      {
        question: 'Can Sari coordinate with a retreat facilitator?',
        answer:
          'Yes — meal timing aligned to practice schedules is standard for retreat programmes.',
      },
      {
        question: 'How do I request Sari?',
        answer:
          'WhatsApp dates, headcount, dietary matrix and villa location. Or start via <a href="/quote">quote</a>.',
      }

    ],
    seoTitle: "Sari Dewi Kusuma — Wellness Chef Bali | Vegan Retreats | myCHEF",
    seoDescription:
      "Book Sari Dewi Kusuma for wellness and retreat catering in Bali. Vegan, raw, Ayurvedic menus. Yoga retreat specialist. Detox & wellness dinners. WhatsApp.",
    ogImage: 'https://mychef.id/generated/chef-sari-dewi-portrait.webp',
  },

  'komang-artha': {
    slug: 'komang-artha',
    name: 'Komang Artha',
    role: 'Senior Event Chef',
    origin: 'Klungkung, Bali',
    badge: '15 years running events from 20 to 200 guests across Bali',
    portrait: '/generated/chef-komang-artha-portrait.webp',
    portraitAlt: 'Komang Artha — Senior Event Chef at myCHEF Bali',
    specialty: 'Large-Scale Villa Events & Buffets',
    cuisine: ['Indonesian rijsttafel', 'Large-format buffets', 'Wedding catering', 'Corporate event menus'],
    shortBio:
      'Komang has the calmness of someone who has cooked through everything — power outages, rain-cancelled outdoor setups, last-minute dietary changes at 150-person weddings. He leads our larger events and catering programmes with a team coordination skill that keeps the kitchen and front-of-house moving in sync regardless of what changes.',
    fullBio: [
      'Komang Artha grew up in Klungkung, one of Bali\'s nine regencies, in a family with a long tradition of cooking for large communal gatherings. Temple festivals, cremation ceremonies, harvest feasts — events where feeding 80 or 120 people was simply what the community did. That upbringing gave Komang a capacity for scale that most chefs never develop: the ability to stay calm, coordinated, and creative when the numbers are high and the margin for error is low.',
      'He entered the professional hospitality industry at 22 and spent a decade working through hotel and resort catering in Bali before joining myCHEF to lead the events division. That hotel background gave him the systems discipline — HACCP compliance, ordering logistics, kitchen brigade management, front-of-house timing — that separates an event that feels effortless from one that feels chaotic.',
      'At myCHEF, Komang manages all bookings above 30 guests and all formal catering events. His domain covers weddings, corporate retreats, large-group villa parties, and the multi-day catering programmes that some luxury villa estates commission for month-long residencies. He has cooked for groups of 200 at Uluwatu clifftop weddings and for 20 at intimate anniversary feasts in Ubud — the range is part of what makes him the most versatile chef on the team.',
      'For event hosts who need absolute reliability — where the stakes are high and a catering failure is not an option — Komang is the person myCHEF sends first. He does not get flustered, does not cut corners under pressure, and has a quiet confidence in his kitchen that the entire service team responds to.',
    ],
    achievements: [
      'Leads events from 20 to 200+ guests across Bali',
      'Specialist in wedding and corporate catering logistics',
      'Mentors junior kitchen staff across myCHEF',
      'Decade of hotel and resort catering experience in Bali',
      '15 years of large-scale event execution across Bali villa estates',
    ],
    signatureDishes: [
      'Indonesian rijsttafel (rice table feast)',
      'Spit-roasted suckling pig buffet',
      'Satay platter with six sauces',
    ],
    guestQuote: 'Komang and his team catered our 120-person villa wedding and everything was seamless. The food was outstanding and not a single thing went wrong — he is a true professional.',
    guestName: 'Emma & Tom W., Edinburgh',
    menuStyles: [
      {
        title: 'Large-Group Villa Dinner',
        desc: 'Komang\'s core format: a plated or family-style dinner for 30–100 guests. He manages multi-station kitchen setups, coordinates front-of-house timing, and ensures every table receives the same quality.',
      },
      {
        title: 'Indonesian Rijsttafel Feast',
        desc: 'A 10–14 dish Indonesian rice table spread — the most generous expression of Balinese and Indonesian food culture. Ideal for large groups who want a communal, immersive culinary experience.',
      },
      {
        title: 'Villa Wedding Catering',
        desc: 'Komang leads all wedding catering for myCHEF — ceremony canapes, cocktail hour, plated dinner or buffet, and dessert. He coordinates with the villa and event planner to align food timing with the full day schedule.',
      },
      {
        title: 'Corporate Retreat Catering',
        desc: 'Multi-day catering for corporate groups — breakfast, working lunches, and evening dinners. Komang builds menus around productivity, dietary diversity, and the kind of food that sustains focus across a long retreat.',
      },
    ],
    perfectFor: [
      'Large villa events (30–200 guests)',
      'Villa weddings and receptions',
      'Corporate retreats and team dinners',
      'Multi-day villa catering programmes',
      'Hosts who need guaranteed reliability at scale',
    ],
    faqs: [
      {
        question: 'Can Komang cater for a villa wedding in Bali?',
        answer:
          'Yes — villa weddings are one of Komang\'s most common bookings. He coordinates with event planners, manages the full catering timeline, and can handle everything from ceremony canapes to a plated wedding dinner for 100+ guests.',
      },
      {
        question: 'What is the largest group Komang has cooked for?',
        answer:
          'Komang has led catering for events above 200 guests with additional kitchen support. For groups above 80, we recommend early outreach so Komang can confirm staffing, equipment, and supplier logistics in advance.',
      },
      {
        question: 'Does Komang handle multi-day catering for retreat programmes?',
        answer:
          'Yes. Komang regularly manages multi-day catering for corporate and wellness retreats — full breakfast, lunch, and dinner service for groups staying at Bali villas over 3–7 days. He builds the full meal plan and manages all sourcing.',
      },
      {
        question: 'How does Komang manage dietary requirements at large events?',
        answer:
          'Dietary requirements are collected at booking and built into the event menu plan from the start. Komang runs separate preparation and service for allergen-restricted guests and labels all dishes clearly during buffet service.',
      },
      {
        question: 'Does Komang include Indonesian dishes or is he flexible across cuisines?',
        answer:
          'Komang specialises in Indonesian and Balinese cuisine but has the experience to execute international formats — Mediterranean buffets, BBQ feasts, and mixed-cuisine corporate menus are all within his range. Tell us your brief and we will design around it.',
      },
      {
        question: 'Can Komang lead villa wedding catering?',
        answer:
          'Yes — ceremonies, canapés, receptions and large plated or buffet dinners. See <a href="/events/weddings">weddings</a>.',
      },
      {
        question: 'What is the largest event size Komang handles?',
        answer:
          'Regularly 30–100+ guests; 200-guest events with expanded crew when planned early.',
      },
      {
        question: 'Does Komang run multi-day corporate or retreat catering?',
        answer:
          'Yes — breakfast through dinner programmes for corporate and large villa groups. <a href="/catering/corporate-catering">Corporate catering</a>.',
      },
      {
        question: 'How are dietary requirements handled at scale?',
        answer:
          'Collected at booking, built into prep plans, labelled on buffets, with separate allergen handling when required.',
      },
      {
        question: 'Does Komang only cook Indonesian food?',
        answer:
          'Indonesian and large-format buffets are strengths; international corporate and wedding menus are also in range.',
      },
      {
        question: 'Can Komang coordinate with planners and villa managers?',
        answer:
          'Yes — timeline lock-ins with planners and estate managers are standard for high-stakes events.',
      },
      {
        question: 'What staffing does a 80-guest villa dinner need?',
        answer:
          'Head chef plus kitchen and FOH support sized to format (plated vs buffet). Your proposal lists the team.',
      },
      {
        question: 'How far ahead should large events book?',
        answer:
          '4–8 weeks ideal for weddings and peak dates; complex multi-day programmes earlier. <a href="/book">Book</a>.',
      },
      {
        question: 'Is equipment and rental handled?',
        answer:
          'Core service equipment is planned; specialty rentals can be coordinated and itemised.',
      },
      {
        question: 'How do deposits work for large events?',
        answer:
          'Written proposal, typically 50% to confirm, balance on agreed schedule. See <a href="/cancellation">cancellation</a>.',
      }

    ],
    seoTitle: "Komang Artha — Event Chef Bali | Villa Events & Weddings | myCHEF",
    seoDescription:
      "Book Komang Artha for villa events, weddings & corporate catering in Bali. 15 years exp, groups 30–200+. Indonesian feast & buffet specialist. WhatsApp.",
    ogImage: 'https://mychef.id/generated/chef-komang-artha-portrait.webp',
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
      data-source="chef-profile-cta"
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

  const chefPersonSchema = personSchema({
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
  })

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

  const localBizWithRating = {
    ...localBusinessSchema,
  }

  const waMessage = `Hi, I'd like to book ${chef.name} (${chef.specialty}) for a villa dinner in Bali.`

  return (
    <>
      <SeoHead
        title={chef.seoTitle}
        description={chef.seoDescription}
        canonical={`https://mychef.id/chefs/${chef.slug}`}
        ogImage={chef.ogImage}
        ogType="article"
        jsonLd={[localBizWithRating, chefPersonSchema, faqSchema, breadcrumbSchema]}
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
                decoding="async"
                fetchPriority="high"
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

      {/* ── Signature Dishes ── */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-3 text-center">
            {chef.name.split(' ')[0]}'s Signature Dishes
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
            Dishes that define {chef.name.split(' ')[0]}'s cooking — prepared fresh at your villa from market-sourced ingredients.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {chef.signatureDishes.map((dish, i) => (
              <div key={i} className="p-5 rounded-2xl border border-[#C5A028]/30 bg-[#111] text-center">
                <div className="w-8 h-8 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#C5A028] text-sm font-semibold">{i + 1}</span>
                </div>
                <p className="text-white text-sm font-medium leading-snug">{dish}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guest Reviews ── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-10 text-center">
            What Guests Say About {chef.name.split(' ')[0]}
          </h2>
          <div className="rounded-2xl border border-white/10 bg-[#111] p-8">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-[#C5A028] text-[#C5A028]" />
              ))}
            </div>
            <blockquote className="text-gray-200 text-lg leading-relaxed italic mb-4">
              "{chef.guestQuote}"
            </blockquote>
            <p className="text-[#C5A028] text-sm font-medium">— {chef.guestName}</p>
          </div>
          <p className="text-gray-500 text-sm text-center mt-6">
            myCHEF has served 560+ events and 500+ villa bookings in Bali.
          </p>
        </div>
      </section>

      {/* ── Book for Your Villa CTA ── */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Users className="w-5 h-5 text-[#C5A028]" />
            <span className="text-[#C5A028] text-sm font-medium uppercase tracking-widest">Book {chef.name}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            Book {chef.name.split(' ')[0]} for Your Villa
          </h2>
          <p className="text-gray-400 mb-8">
            Tell us your villa, dates, guest count, and the kind of experience you want. We will confirm{' '}
            {chef.name.split(' ')[0]}'s availability and send a menu proposal within a few hours.
          </p>
          <WhatsAppButton label={`Book ${chef.name.split(' ')[0]} via WhatsApp`} message={waMessage} />
          <p className="text-gray-500 text-sm mt-4">Typical response time: under 1 hour</p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-10 text-center">
            Questions About Booking {chef.name.split(' ')[0]}
          </h2>
          <FAQAccordion
            items={chef.faqs.map((f) => ({ q: f.question, a: f.answer }))}
            defaultOpenCount={2}
            showToc
            ctaEvery={5}
            dark
          />
        </div>
      </section>

      {/* ── Related pages ── */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-lg font-medium text-white mb-6">Explore More</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Meet All Chefs', href: '/chefs', desc: 'See the full myCHEF culinary team.' },
              { label: 'View Menus', href: '/fine-dining/menus', desc: 'Browse menu styles for every occasion.' },
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
