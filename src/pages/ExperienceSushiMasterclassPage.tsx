import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '@/components/SeoHead'
import { ChefHat, Fish, UtensilsCrossed, Clock, Users, Wine, GraduationCap, Baby, Briefcase } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20a%20private%20sushi%20masterclass%20at%20my%20Bali%20villa.%20Please%20send%20availability%20and%20pricing.'
const CANONICAL = 'https://mychef.id/experiences/sushi-masterclass'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Sushi Making Class Bali',
    title: 'A Hands-On Sushi Masterclass, Taught in Your Villa',
    image: '/generated/mychef-sushi-masterclass-chef-hands-bali-landscape.webp',
    imageAlt: 'Sushi making class Bali with a chef teaching in a private villa kitchen',
    body: `<p>Learn how to prepare sushi from the beginning under the guidance of an experienced Japanese-cuisine chef. This private sushi making class takes place in your Bali villa and covers sushi rice, ingredient preparation, Japanese knife skills, fish slicing, maki rolling, uramaki, nigiri shaping, hand rolls, plating, and correct serving techniques. Every guest participates directly — and eats the sushi prepared during the class.</p>

    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li>Private class in your villa — only your group</li>
      <li>Fully hands-on instruction, beginner to advanced</li>
      <li>Japanese-cuisine chef instructor</li>
      <li>Professional sushi tools and fresh ingredients provided</li>
      <li>Two to three hours, lunch or afternoon slots</li>
      <li>Couples, families, groups, retreats and corporate teams</li>
    </ul>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Request My Private Sushi Class — WhatsApp +62 896-7407-2020</a>. Tell us your villa, group size and date — we reply within the hour.</p>`,
  },
  {
    id: 'instructor',
    type: 'content' as const,
    subtitle: 'Your Instructor',
    title: 'Learn from an Experienced Japanese-Cuisine Chef',
    body: `<p>Your class is led by a chef with professional experience in Japanese food preparation and sushi technique — including nigiri, sashimi, maki and omakase-style service — and a track record of teaching complete beginners in private villa settings. The instructor demonstrates every process, explains why each step matters, and works directly with every participant throughout the session.</p>

    <p>Instruction is in English, and the pace adapts to your group: first-timers get foundations and close guidance, confident cooks get deeper technique and presentation detail. Food-safety practices — chilled storage, clean boards, safe raw-fish handling — are explained as part of the class, not just followed behind the scenes.</p>`,
  },
  {
    id: 'curriculum',
    type: 'content' as const,
    subtitle: 'The Curriculum',
    title: 'What You Will Learn in the Sushi Masterclass',
    image: '/generated/mychef-sushi-masterclass-ingredients-bali-portrait.webp',
    imageAlt: 'Fresh ingredients prepared for a private sushi making class in Bali',
    body: `<p><strong>1. Sushi rice preparation.</strong> Choosing the correct short-grain rice, washing and soaking, water ratios, cooking and resting, preparing sushi vinegar, folding without damaging the grains, and cooling to the right texture and temperature.</p>

    <p><strong>2. Ingredients and mise en place.</strong> Choosing suitable seafood, recognising freshness, safe chilled storage, preparing vegetables, cutting fillings evenly, preparing nori, and balancing texture, acidity, fat and seasoning.</p>

    <p><strong>3. Japanese knife skills.</strong> Safe grip and hand position, drawing rather than pressing the blade, clean fish slicing, vegetable julienne, and cutting rolls without crushing them. Knife activities are adapted to participant age and experience — advanced fish slicing is demonstrated by the chef and offered hands-on only when appropriate, and children or inexperienced guests use safer tools and prepared ingredients.</p>

    <p><strong>4. Maki and uramaki.</strong> Spreading rice evenly, nori positioning, controlling filling quantity, using the bamboo mat, sealing the roll, cutting six or eight equal pieces, and building a clean inside-out roll with sesame or toppings.</p>

    <p><strong>5. Nigiri and temaki.</strong> Portioning and shaping rice without compressing it, wasabi placement, topping position and balance — plus hand rolls formed and served immediately to preserve texture.</p>

    <p><strong>6. Plating, etiquette and ingredients knowledge.</strong> Spacing and visual balance, garnishes, serving ginger, soy and wasabi, how sushi is traditionally eaten, and which ingredients are essential, which can be substituted, and where to find them after you return home.</p>`,
  },
  {
    id: 'what-you-make',
    type: 'content' as const,
    subtitle: 'Your Class Menu',
    title: 'Sushi You Can Learn to Make',
    body: `<p>A standard beginner class typically includes salmon nigiri, tuna or another seasonal fish nigiri, cucumber maki, salmon and avocado maki, a California-style uramaki, a spicy tuna roll, a vegetarian roll, a temaki hand roll, and a chef-selected sashimi demonstration.</p>

    <p>The final selection depends on seafood availability, dietary requirements, class duration, participant skill level, and whether raw seafood is requested. Your exact class menu is confirmed before booking — a typical session covers three to five sushi styles, with every guest preparing and plating their own pieces.</p>`,
  },
  {
    id: 'levels',
    type: 'features' as const,
    subtitle: 'Class Levels',
    title: 'Choose Your Sushi Class',
    features: [
      {
        icon: GraduationCap,
        title: 'Beginner Sushi Class',
        desc: 'For first-time participants: sushi rice, basic knife safety, vegetable preparation, maki, uramaki, temaki and basic nigiri.',
      },
      {
        icon: ChefHat,
        title: 'Intermediate Masterclass',
        desc: 'For guests who already cook: advanced rice control, fish portioning, sashimi slicing, decorative rolls, sauces and refined plating.',
      },
      {
        icon: Baby,
        title: 'Family Sushi Workshop',
        desc: 'For adults and children: safe tools, cooked and vegetarian ingredients, simple maki, hand rolls, creative presentation and friendly competition.',
      },
      {
        icon: Briefcase,
        title: 'Corporate & Team Workshop',
        desc: 'For company groups, retreats and hospitality teams: mise en place, consistency, portion control, team challenges and presentation standards.',
      },
    ],
  },
  {
    id: 'experience',
    type: 'content' as const,
    subtitle: 'How the Class Works',
    title: 'From Rice to Tasting in One Session',
    body: `<p><strong>1. Setup at your villa.</strong> The chef arrives with fish, rice, nori, tools and boards, and builds a clean station at your kitchen counter or island. Nothing for you to shop or prep.</p>

    <p><strong>2. Demonstration.</strong> Rice first — washing, soaking, seasoning and fanning — then fish handling, freshness checks and knife technique, each step explained as it is shown.</p>

    <p><strong>3. Guided practice.</strong> Nigiri shaping, maki, uramaki and hand rolls, with the chef beside you correcting form in real time.</p>

    <p><strong>4. Plating.</strong> Your own selection, arranged and garnished the way a restaurant would serve it.</p>

    <p><strong>5. The tasting and cleanup.</strong> You eat everything you made — plus a few pieces finished by the chef — with sake, wine or tea if you would like it. The kitchen is left spotless.</p>`,
  },
  {
    id: 'comparison',
    type: 'content' as const,
    subtitle: 'Why Private',
    title: 'Private Villa Sushi Class vs Shared Cooking School',
    body: `<p><strong>A private in-villa masterclass</strong> means only your group, a chef who adjusts the level to you, no transport, flexible timing, a customised sushi menu, direct instructor attention for every guest, and the option to add drinks or a full dinner afterwards — all in the kitchen you already have.</p>

    <p><strong>A shared cooking class</strong> means a mixed public group, a fixed schedule, a fixed curriculum, travel to the school, and far less personalised instruction. For couples, families, retreats and corporate groups, the private format is simply a better class.</p>`,
  },
  {
    id: 'upgrades',
    type: 'content' as const,
    subtitle: 'Class & Dining Options',
    title: 'Choose Your Experience',
    body: `<p><strong>Sushi masterclass and tasting.</strong> Two to three hours of hands-on teaching with all ingredients and equipment — guests eat what they prepare, and the chef adds selected demonstration pieces.</p>

    <p><strong>Sushi masterclass and private dinner.</strong> The full masterclass followed by additional chef-prepared sushi and Japanese dishes served as a seated meal, with optional sake, wine, tea or cocktail pairing, full service and cleanup. See our <a href="/fine-dining" class="text-[#7E6410] hover:underline font-medium">private chef fine dining</a> options.</p>

    <p><strong>Omakase-style private dining.</strong> Prefer to watch and eat rather than roll and slice? Book our in-villa omakase option: a chef-led progression of nigiri, sashimi and seasonal bites served piece by piece at your counter or table, with the chef explaining each course as it arrives. Same sushi-trained team, same fresh fish, re-framed as a dining experience — intimate, typically 2–8 guests, and paced entirely around your evening. Pricing sits within our fine-dining tier and is quoted per booking. For other chef-led progressions, see our <a href="/fine-dining/tasting-menu" class="text-[#7E6410] hover:underline font-medium">private tasting menu in Bali</a>.</p>

    <p><strong>Sushi masterclass and cocktail experience.</strong> Sushi teaching paired with Japanese-inspired cocktails or sake service and an optional bartender — popular for birthdays and groups. See our <a href="/in-villa-service/mixology" class="text-[#7E6410] hover:underline font-medium">private cocktail class and bar service</a>.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What\'s Included',
    title: 'Everything You Need for a Sushi Masterclass',
    features: [
      {
        icon: ChefHat,
        title: 'Japanese-Cuisine Chef Instructor',
        desc: 'A chef with professional Japanese food experience, guiding your group from rice to plating.',
      },
      {
        icon: Fish,
        title: 'Fresh Fish & Produce',
        desc: 'All seafood, vegetables, sushi rice, nori and seasonings sourced fresh on the day.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Professional Tools',
        desc: 'Sashimi knives, bamboo mats, rice paddles, bowls and aprons brought to your villa.',
      },
      {
        icon: Clock,
        title: 'Flexible Timing',
        desc: 'Classes run two to three hours; lunch, afternoon or early-evening slots available.',
      },
      {
        icon: Users,
        title: 'Private Groups & Events',
        desc: 'Ideal for 2–6 guests; families, retreats and corporate groups arranged with additional chefs.',
      },
      {
        icon: Wine,
        title: 'Tasting & Pairing',
        desc: 'Enjoy the sushi you make with sake, wine or tea. Beverages quoted separately.',
      },
    ],
  },
  {
    id: 'take-home',
    type: 'content' as const,
    subtitle: 'Take It Home',
    title: 'Recipes and Guides to Keep',
    image: '/generated/mychef-sushi-masterclass-instruction-bali-landscape.webp',
    imageAlt: 'Private chef teaching a sushi masterclass at a Bali villa',
    body: `<p>Every participant receives a digital sushi guide after the class: sushi rice ratios, an equipment checklist, an ingredient shopping list, a step-by-step rolling guide, food-safety notes and recommended practice recipes — so the skill survives the flight home.</p>

    <p>For corporate workshops, hospitality staff and longer training sessions, a participation certificate can also be arranged on request.</p>`,
  },
  {
    id: 'who-is-it-for',
    type: 'content' as const,
    subtitle: 'Private Sushi Class Bali',
    title: 'For Couples, Families, Groups and Teams',
    image: '/generated/mychef-sushi-masterclass-guests-dining-bali-landscape.webp',
    imageAlt: 'Guests enjoying a private sushi making class at a Bali villa',
    body: `<p>Couples book it as a memorable afternoon before a private dinner. Families use it as a hands-on activity that keeps adults, teenagers and children engaged — with cooked-seafood and vegetarian ingredients where needed. Groups of friends, birthday groups and bridal parties treat it as a relaxed prelude to a villa evening.</p>

    <p>It also works as a <a href="/catering/corporate-catering" class="text-[#7E6410] hover:underline font-medium">corporate sushi team-building activity</a>, a <a href="/catering/retreat-catering" class="text-[#7E6410] hover:underline font-medium">culinary workshop inside a Bali retreat schedule</a>, or a training session for villa and hospitality teams. Want to keep cooking? See our <a href="/experiences/cooking-class" class="text-[#7E6410] hover:underline font-medium">private cooking classes in more cuisines</a>, or browse <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">all private experiences</a>.</p>`,
  },
  {
    id: 'dietary',
    type: 'content' as const,
    subtitle: 'Dietary Options',
    title: 'Vegetarian, Cooked and Gluten-Sensitive Menus',
    body: `<p>Vegetarian, vegan, cooked-seafood and pescatarian menus can be arranged, and gluten-sensitive guests can be offered tamari and suitable ingredients. Raw-fish-free, shellfish-free, pork-free and children's menus are all possible — tell us at booking.</p>

    <p>Guests with serious allergies must provide complete written information before booking. Because classes take place in third-party villa kitchens, a completely allergen-free environment cannot be guaranteed.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Sushi Masterclass Pricing',
    title: 'From IDR 700K Per Guest ++',
    body: `<p>Private in-villa sushi masterclasses start from <strong>IDR 700K per guest ++</strong>, subject to a minimum booking value. Applicable service charge and government tax are shown clearly in your quotation before you commit — nothing is hidden.</p>

    <p>The final quote depends on group size, selected seafood, class level, duration, villa location, and any drinks or dinner you add. Classes suit 2–6 guests best so everyone gets direct, hands-on guidance; larger groups are arranged with advance notice and additional chefs. Every quote is itemised.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Request My Private Sushi Class — WhatsApp +62 896-7407-2020</a></p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Sushi Making Class Bali — FAQ',
    title: 'Common Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Request Your Class',
    title: 'Ready to Learn Real Sushi in Bali?',
    body: 'Tell us your villa, group size, skill level and preferred date — we will confirm chef availability and send your itemised quote within the hour.',
    primaryAction: {
      label: 'Request My Private Sushi Class',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'Use the Detailed Enquiry Form',
      href: '/quote',
    },
  },
]

const FAQS = [
  { question: 'Is the sushi class fully hands-on?', answer: 'Yes. Every guest prepares, rolls, shapes and plates their own sushi. The chef demonstrates each process first, then works beside you correcting form in real time.' },
  { question: 'What sushi will we make?', answer: 'A typical beginner session covers three to five styles — for example salmon and tuna nigiri, cucumber and salmon-avocado maki, a California-style uramaki, a spicy tuna roll, a vegetarian roll and a temaki hand roll, plus a chef sashimi demonstration. The exact menu is confirmed before booking.' },
  { question: 'Will we learn Japanese knife techniques?', answer: 'Yes — safe grip, drawing cuts, fish slicing, vegetable julienne and clean roll cutting are all taught. Knife work is adapted to age and experience: advanced slicing is demonstrated by the chef and offered hands-on only when appropriate, and children use safer tools with prepared ingredients.' },
  { question: 'Do we learn to prepare sashimi?', answer: 'Sashimi slicing is demonstrated in every class with full food-safety explanation. Hands-on sashimi practice is included in intermediate classes where the chef judges it appropriate.' },
  { question: 'Is the instructor trained in Japanese cuisine?', answer: 'Yes. Your class is led by a chef with professional experience in Japanese food preparation and sushi technique — nigiri, sashimi, maki and omakase-style service — plus experience teaching beginners in private villa settings.' },
  { question: 'Can beginners join?', answer: 'Absolutely — beginners are the norm. The class is designed for first-timers, and the chef adjusts pace and depth to your group.' },
  { question: 'Can experienced cooks request an advanced class?', answer: 'Yes. The intermediate masterclass covers advanced rice control, fish portioning, sashimi slicing, decorative rolls, sauces and refined plating.' },
  { question: 'Is the class suitable for children?', answer: 'Yes. The family workshop uses safe tools, cooked and vegetarian ingredients, simple maki and hand rolls. Teenagers can usually join the standard beginner class.' },
  { question: 'Can we book it for corporate team building or a retreat?', answer: 'Yes. Corporate and team workshops focus on mise en place, consistency, portion control and team challenges, and the class can be slotted into a retreat schedule as a structured culinary session. Larger groups are arranged with additional chefs.' },
  { question: 'Can we avoid raw fish?', answer: 'Yes. Raw-fish-free, cooked-seafood, shellfish-free and vegetarian or vegan menus can all be arranged — tell us when you enquire.' },
  { question: 'Do you provide all knives and bamboo mats?', answer: 'Yes. Sashimi knives, bamboo mats, rice paddles, bowls, boards and aprons are all brought to your villa.' },
  { question: 'Do we need a professional kitchen?', answer: 'No. A kitchen counter or island to work at is enough — we bring everything else.' },
  { question: 'How much does a private sushi class in Bali cost?', answer: 'Classes start from IDR 700K per guest ++, subject to a minimum booking value. The final quote depends on group size, seafood selection, class level, duration and any drinks or dinner added — always itemised upfront.' },
  { question: 'How many guests can participate?', answer: 'Two to six guests is ideal for hands-on guidance. Larger private groups, retreats and corporate teams are possible with advance notice and additional chefs.' },
  { question: 'Can we add a full sushi dinner or drinks?', answer: 'Yes. The masterclass can continue into a chef-prepared sushi and Japanese dinner with optional sake, wine, tea or a Japanese-inspired cocktail service.' },
  { question: 'Will we receive recipes after the class?', answer: 'Yes. Every participant receives a digital guide with rice ratios, an equipment checklist, a shopping list, a step-by-step rolling guide, food-safety notes and practice recipes.' },
  { question: 'Is cleanup included?', answer: 'Yes. Full kitchen clean-down is included in every class.' },
  { question: 'How far in advance should I book?', answer: 'At least a week is recommended, more in July–August and December. Last-minute requests are sometimes possible — ask.' },
]

const RELATED_PAGES = [
  { label: 'Cooking Class Bali', href: '/experiences/cooking-class', desc: 'Balinese, Indonesian and multi-cuisine cooking classes at your villa.' },
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'Add multi-day villa chef meals around your sushi class.' },
  { label: 'Fine Dining Bali', href: '/fine-dining', desc: 'Private Japanese-inspired fine dining after the workshop.' },
  { label: 'Retreat Catering', href: '/catering/retreat-catering', desc: 'A sushi workshop as a culinary activity for retreat groups.' },
  { label: 'Corporate Catering', href: '/catering/corporate-catering', desc: 'Corporate sushi team-building and company group workshops.' },
  { label: 'Mixology Service', href: '/in-villa-service/mixology', desc: 'Japanese-inspired cocktail and sake pairing for the evening.' },
]

export default function ExperienceSushiMasterclassPage() {
  return (
    <PremiumPage
      slug="experiences/sushi-masterclass"
      title="Sushi Making Class Bali | Private In-Villa Sushi Masterclass"
      description="Private sushi making class in your Bali villa with a Japanese-cuisine chef. Hands-on masterclass: rice, knife skills, maki, nigiri & tasting included."
      seoTitle="Sushi Making Class Bali | Private In-Villa Sushi Masterclass"
      seoDescription="Private sushi making class in your Bali villa with a Japanese-cuisine chef. Hands-on masterclass: rice, knife skills, maki, nigiri & tasting included."
      canonicalUrl={CANONICAL}
      h1="Private Sushi Making Class in Bali with a Japanese-Cuisine Chef"
      subtitle="A Hands-On, In-Villa Sushi Masterclass — Rice, Knife Skills, Rolling, Shaping and Plating, Taught Step by Step"
      heroImage="/generated/mychef-sushi-masterclass-chef-hands-bali-landscape.webp"
      heroImageAlt="Sushi making class Bali chef preparing fresh sushi in a private villa kitchen"
      ogImage="https://mychef.id/generated/mychef-sushi-masterclass-chef-hands-bali-landscape.webp"
      keywords={[
        'sushi making class bali',
        'sushi masterclass bali',
        'private sushi class bali',
        'sushi cooking class bali',
        'japanese cooking class bali',
        'sushi workshop bali',
        'in-villa sushi class bali',
        'team-building sushi class bali',
      ]}
      highlights={['Private Villa Class', 'Fully Hands-On Instruction', 'Japanese-Cuisine Chef', 'Beginner to Advanced']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Sushi Making Class Bali', CANONICAL, 'Experiences', 'https://mychef.id/experiences'),
        faqPageSchema(FAQS),
        serviceSchema(
          'Private Sushi Making Class Bali',
          'A private, hands-on sushi making class at your Bali villa led by a Japanese-cuisine chef: sushi rice, knife skills, maki, uramaki, nigiri, hand rolls, plating and etiquette. Classes from IDR 700K per guest ++ subject to a minimum booking value, 2–3 hours, ideal for 2–6 guests with larger groups arranged.',
          CANONICAL
        ),
      ]}
      ctaText="Request Your Sushi Masterclass"
      ctaSubtext="Tell us your group size, skill level and villa — we will reply within the hour with a bespoke quote."
    />
  )
}
