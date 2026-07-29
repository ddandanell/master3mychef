import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'
import { ChefHat, Sparkles, PartyPopper, Music, Waves, Baby, Star } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20kids%20birthday%20party%20in%20Bali.%20Please%20send%20a%20complete%20party%20proposal%20with%20catering%2C%20entertainment%20and%20setup%20options.'
const CANONICAL = 'https://mychef.id/experiences/kids-birthday-chef-party'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Kids Birthday Party Bali',
    title: 'Complete Kids Birthday Party Planning and Catering in Bali',
    image: '/generated/mychef-kids-party-family-table-bali-landscape.webp',
    imageAlt: 'Family gathered around a birthday table at a kids birthday party in a Bali villa',
    body: `<p>Plan an unforgettable children's birthday party at your Bali villa, private venue, garden, beach club, or event space. myCHEF can coordinate the food, chefs, waiters, birthday cake, decorations, entertainment, bouncy castles, foam parties, games, music, photographers, children's activities, adult catering, champagne, cocktails, setup, service, and final cleanup — one team, one contact, one itemised proposal.</p>

    <p>The interactive kids chef party remains one of our most-loved formats, but it is only the beginning. From a small villa celebration for six children to a fully produced event with themed decoration, inflatables, a DJ and a separate champagne and cocktail setup for the adults, we plan children's birthday parties of every size, for toddlers through to teens. For larger formats, see our <a href="/events/villa-parties" class="text-[#7E6410] hover:underline font-medium">complete villa party planning</a> and <a href="/events/birthdays" class="text-[#7E6410] hover:underline font-medium">adult and family birthday events</a>.</p>

    <ul class="list-disc pl-6 space-y-1">
      <li>Small and large children's birthday parties</li>
      <li>Private villas and event venues across Bali</li>
      <li>Kids' catering and interactive chef activities</li>
      <li>Adult menus, champagne, cocktails and free-flow bar options</li>
      <li>Themed decoration and custom cakes</li>
      <li>Bouncy castles and inflatable play areas</li>
      <li>Foam parties and pool activities</li>
      <li>DJs, music, hosts, magicians and entertainers</li>
      <li>Face painting, games, workshops and craft activities</li>
      <li>Full event coordination from setup to cleanup</li>
    </ul>`,
  },
  {
    id: 'formats',
    type: 'features' as const,
    subtitle: 'Party Formats',
    title: 'Choose Your Kids Birthday Party Format',
    features: [
      {
        icon: ChefHat,
        title: 'Interactive Chef Party',
        desc: 'Children make pizzas, build burgers, decorate cupcakes, prepare pasta, roll simple sushi or build ice cream sundaes — guided by a private chef. Best for small and medium groups.',
      },
      {
        icon: PartyPopper,
        title: 'Complete Villa Birthday Party',
        desc: 'One team coordinates the kids menu, adult menu, birthday cake, themed decoration, entertainment, party host, sound system, photographer, service staff, setup and cleanup.',
      },
      {
        icon: Waves,
        title: 'Kids Pool Party',
        desc: 'Pool games, inflatable toys, a snack station, ice cream, a mocktail bar for the children and a cocktail bar or BBQ for the adults — with supervision planned in.',
      },
      {
        icon: Sparkles,
        title: 'Foam Party',
        desc: 'A foam machine, music and DJ, party host and games in a foam-safe event zone — with non-slip planning, towels and cleanup coordination.',
      },
      {
        icon: Star,
        title: 'Bouncy Castle & Inflatables',
        desc: 'Standard and large bouncy castles, water slides, inflatable obstacle courses, soft play and ball pits for toddlers, and themed inflatable setups.',
      },
      {
        icon: Music,
        title: 'Teen Parties',
        desc: 'A DJ, mocktail bar, pool party, BBQ, pizza station, karaoke, photo booth, dessert bar or cinema setup — designed for older kids who have outgrown the clown.',
      },
    ],
  },
  {
    id: 'ages',
    type: 'features' as const,
    subtitle: 'Every Age',
    title: 'From First Birthdays to Teen Parties',
    features: [
      {
        icon: Baby,
        title: 'Ages 1–3',
        desc: 'Soft play, a ball pit, bubble entertainment, small inflatables, toddler-safe snacks, parent seating and a short, gentle program.',
      },
      {
        icon: Sparkles,
        title: 'Ages 4–7',
        desc: 'A magician, face painting, a mini chef activity, games, a bouncy castle, mascots and a supervised foam party.',
      },
      {
        icon: ChefHat,
        title: 'Ages 8–12',
        desc: 'Cooking challenges, pool games, a DJ, a science show, crafts, karaoke, a treasure hunt and larger inflatables.',
      },
      {
        icon: Music,
        title: 'Teen Parties',
        desc: 'A DJ, mocktail bar, pool party, BBQ, pizza station, karaoke, photo booth, gaming station, dessert bar and cinema setup.',
      },
    ],
  },
  {
    id: 'sizes',
    type: 'content' as const,
    subtitle: 'Every Scale',
    title: 'Kids Birthday Parties of Every Size',
    body: `<p><strong>Small villa party — around 6 to 12 children.</strong> An interactive chef activity, a kids' meal, the birthday cake, simple décor and an optional adult menu. Intimate, easy to host and fully cleaned up afterwards.</p>

    <p><strong>Medium birthday party — around 12 to 30 children.</strong> Full catering, entertainment, themed decoration, a bouncy castle, a party host, and food and drinks for the adults.</p>

    <p><strong>Large kids event — 30 or more children.</strong> Full production: multiple food stations, a foam party, inflatables, DJ and sound, a dedicated children's team, an adult bar, an event manager and a complete breakdown afterwards.</p>

    <p>We do not publish rigid guest limits — staffing and venue capacity determine what is possible, and we will tell you honestly what your villa can support.</p>`,
  },
  {
    id: 'kids-food',
    type: 'content' as const,
    subtitle: 'Kids Party Food',
    title: 'Kids Party Food and Chef-Led Activities',
    image: '/generated/mychef-kids-party-kids-hands-cooking-bali-landscape.webp',
    imageAlt: 'Children enjoying a hands-on chef activity at a kids birthday party in Bali',
    body: `<p><strong>Interactive food stations.</strong> Pizza making, burger building, a pasta station, tacos, simple sushi rolling, cupcake and cookie decorating, an ice cream sundae station, pancakes and fruit-skewer activities — the food <em>is</em> the entertainment.</p>

    <p><strong>Children's buffet.</strong> Mini pizzas, chicken tenders, sliders, pasta, nasi goreng, satay, fries or wedges, fruit, vegetable sticks, cupcakes and brownies.</p>

    <p><strong>Healthy kids options.</strong> Grilled chicken, rice bowls, fruit platters, smoothies, yoghurt, wraps, vegetable pasta, baked fish and lower-sugar desserts.</p>

    <p><strong>Teen party food.</strong> Pizza, burgers, BBQ, sushi, tacos, pasta, mocktails, a dessert bar and late-night snacks.</p>

    <p>For full ingredient detail, explore our <a href="/kids-menus" class="text-[#7E6410] hover:underline font-medium">interactive kids' menus</a> and children's catering options.</p>`,
  },
  {
    id: 'entertainment',
    type: 'content' as const,
    subtitle: 'Entertainment & Activities',
    title: 'Kids Party Entertainment and Activities',
    body: `<p>A professional party host, magician, bubble show, puppet show, mascot characters, princess or superhero characters, face painting, a balloon artist, temporary or glitter tattoos, nail art, arts and crafts, a science show, a treasure hunt, mini disco, DJ, karaoke, a dance instructor, kids' games, a piñata, a photo booth, a cinema screen, a gaming station, circus performers, pool competitions and foam parties.</p>

    <p>Entertainment can be coordinated through our event partners and included in the final proposal — tell us the ages and the party style and we will recommend what actually works.</p>`,
  },
  {
    id: 'themes',
    type: 'content' as const,
    subtitle: 'Themes & Decoration',
    title: 'Birthday Themes and Decoration',
    body: `<p>Popular themes include princess, superhero, mermaid, pirate, dinosaur, jungle, safari, unicorn, Barbie-inspired, racing, football, Minecraft-inspired, space, under the sea, tropical Bali, beach party, pool party, candy land, mini chef, neon disco and teen lounge. Character themes are styled as "inspired" decorations rather than official character partnerships.</p>

    <p>Decoration can include balloon arches, themed backdrops, welcome signs, a styled cake table and dessert table, children's tables and chairs, tableware, name cards, party bags, custom menus, floral elements, lighting, photo areas and signage.</p>`,
  },
  {
    id: 'adults',
    type: 'content' as const,
    subtitle: 'Adult Food & Drinks',
    title: 'Adult Catering, Champagne and Bar Service',
    body: `<p>The adult hospitality is a primary part of the offer, not an add-on. While the children celebrate, the adults can enjoy <a href="/catering/grazing-tables" class="text-[#7E6410] hover:underline font-medium">a grazing table for adult guests</a>, a champagne reception, canapés, a brunch, <a href="/catering/bbq-catering" class="text-[#7E6410] hover:underline font-medium">a villa BBQ for adults and children</a>, or <a href="/catering/buffet" class="text-[#7E6410] hover:underline font-medium">buffet catering for large groups</a>.</p>

    <p>On the drinks side we can add <a href="/in-villa-service/bartenders" class="text-[#7E6410] hover:underline font-medium">professional bartenders for the party</a>, a full cocktail bar or free-flow bar, or even <a href="/experiences/private-cocktail-party" class="text-[#7E6410] hover:underline font-medium">cocktails while the children celebrate</a> as a separate premium bar experience. For something truly special, a <a href="/experiences/champagne-oyster-experience" class="text-[#7E6410] hover:underline font-medium">champagne and oyster bar for adults</a> or a <a href="/fine-dining/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef menu for parents</a> turns the party into two events in one. Free-flow bars can be packaged with bartenders, mixers, glassware, ice, garnishes, soft drinks and service staff.</p>`,
  },
  {
    id: 'dual-event',
    type: 'content' as const,
    subtitle: 'Two Parties in One',
    title: 'One Celebration for the Children and the Adults',
    body: `<p>A children's birthday party does not mean the adults must stand around drinking water and eating from the kids' table. We can design two coordinated experiences at the same villa: a fully managed children's party and a separate food and beverage setup for parents and adult guests.</p>

    <p><strong>For the children:</strong> a chef activity, birthday food, the cake, games, a foam party, a bouncy castle, entertainment, face painting, music, pool activities, crafts and prizes.</p>

    <p><strong>For the adults:</strong> champagne, cocktails, a free-flow bar, a grazing table, brunch, BBQ, canapés, a premium buffet, waiters, bartenders, a lounge setup and a separate music area.</p>`,
  },
  {
    id: 'safety',
    type: 'content' as const,
    subtitle: 'Safety, Dietary Needs & Venue Planning',
    title: 'Safety, Venue and Event Planning',
    body: `<p>Larger parties with pools, foam, inflatables and music need real planning. Before we confirm, we review: villa permission for events, maximum guest capacity, noise restrictions, parking and supplier access, pool supervision, foam-party surface assessment and non-slip planning, electrical supply and generator requirements, rain backup and covered areas, inflatable placement, adult supervision and child-to-staff ratios, a glass-free pool area, alcohol kept separate from children, setup and breakdown times, and a waste and cleanup plan.</p>

    <p><strong>Allergies and dietary requirements.</strong> Dietary requirements are reviewed in advance and suitable alternatives can usually be prepared. Guests with serious allergies must provide full written information before confirmation. Although reasonable precautions are taken, a completely allergen-free environment cannot be guaranteed in third-party villas or event venues.</p>`,
  },
  {
    id: 'process',
    type: 'content' as const,
    subtitle: 'The Planning Process',
    title: 'How We Plan Your Kids Birthday Party',
    body: `<p><strong>1. Share the party details.</strong> The child's age, date, villa, area, number of children, number of adults and preferred style.</p>

    <p><strong>2. Confirm the venue.</strong> We review access, kitchen, pool, power, event rules, space, weather backup and entertainment requirements.</p>

    <p><strong>3. Build the event concept.</strong> Theme, food, activities, entertainment, adult hospitality and schedule.</p>

    <p><strong>4. Receive an itemised proposal.</strong> Every element is shown separately — catering, bar, entertainment, decoration, equipment, cake, staff and transport.</p>

    <p><strong>5. Confirm suppliers and team.</strong> Chefs, waiters, bartenders, entertainers, decorators, photographers and equipment are scheduled.</p>

    <p><strong>6. Finalise the timeline.</strong> Arrival, games, food, cake, foam party, adult service, entertainment and cleanup are coordinated.</p>

    <p><strong>7. Event-day management.</strong> One contact person manages the suppliers and the timeline.</p>

    <p><strong>8. Breakdown and cleanup.</strong> Equipment is collected and the agreed areas are reset.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Pricing',
    title: 'How Kids Birthday Party Pricing Works',
    body: `<p>Every children's birthday party is quoted individually according to the number and ages of the children, adult guest count, food, drinks, entertainment, decorations, equipment, venue, staffing, event duration, and setup requirements. Small chef-led parties and complete large-scale birthday events are both available — parties can be arranged from six children, with custom proposals for larger or fully produced events. Minimum booking requirements apply.</p>

    <p>Your final proposal is itemised line by line: children's catering, adult catering, champagne and alcohol, bartenders, entertainment, decorations, equipment, the cake, staff, transport, setup and cleanup — so you can see exactly what each element costs and adjust the plan to your budget.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Request a Complete Kids Party Proposal — WhatsApp +62 896-7407-2020</a></p>`,
  },
  {
    id: 'international',
    type: 'content' as const,
    subtitle: 'International Families',
    title: 'Birthday Parties for International Families in Bali',
    body: `<p>We work with families visiting or living in Bali and can coordinate celebrations for international and multilingual groups. Menus, music, schedules, adult hospitality and entertainment can be adapted to the family's preferences and cultural expectations.</p>

    <p>Coordination is available in English, and Russian-speaking coordination or a bilingual host can often be arranged — please confirm availability when you enquire. We regularly prepare international children's menus covering Western, Russian-inspired, Asian and Indonesian food preferences, can source champagne and premium alcohol, and can run formal or relaxed adult service with music selected by you.</p>`,
  },
  {
    id: 'areas',
    type: 'related' as const,
    title: 'Available Across Bali',
    links: [
      { label: 'Kids Birthday Party Seminyak', href: '/locations/seminyak', desc: 'Villa parties in the heart of Seminyak — easy supplier access and beachside venues.' },
      { label: 'Kids Party Canggu', href: '/locations/canggu', desc: 'Family villas and event-friendly gardens across Canggu, Berawa and Batu Bolong.' },
      { label: 'Kids Party Ubud', href: '/locations/ubud', desc: 'Jungle villas and retreat venues — rain backup planning included as standard.' },
      { label: 'Villa Birthday Party Uluwatu', href: '/locations/uluwatu', desc: 'Clifftop villas on the Bukit with space for inflatables and outdoor setups.' },
      { label: 'Kids Birthday Catering Nusa Dua', href: '/locations/nusa-dua', desc: 'Resort-area villas and residences with calm beaches for family celebrations.' },
      { label: 'Children’s Party Sanur', href: '/locations/sanur', desc: 'Relaxed beachside family parties with easy access and gentle pacing for toddlers.' },
      { label: 'Birthday Event Jimbaran', href: '/locations/jimbaran', desc: 'Spacious villas and bay-side venues, ideal for BBQ-style family birthdays.' },
    ],
  },
  {
    id: 'enquiry',
    type: 'cta' as const,
    subtitle: 'Plan the Party',
    title: 'Request a Complete Kids Party Proposal',
    body: 'Tell us the date, your villa or area, the number of children and adults, the ages, and the party style you have in mind — chef party, pool party, foam party, themed birthday or a full villa event. We reply within the hour with a plan and an itemised proposal.',
    primaryAction: {
      label: 'Request a Complete Kids Party Proposal',
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
  { question: 'Can you organize the entire kids birthday party?', answer: 'Yes. Food, chefs, waiters, the birthday cake, decorations, entertainment, bouncy castles, foam parties, music, photography, adult catering, bar service, setup, coordination and cleanup can all be arranged as one event with a single contact person.' },
  { question: 'Can you handle large children’s parties?', answer: 'Yes. We plan everything from small villa parties of six children to fully produced events for 30 or more, with multiple food stations, inflatables, a DJ, a dedicated children’s team and an event manager. What is possible depends on the venue and staffing — we will advise honestly.' },
  { question: 'Can you arrange a foam party?', answer: 'Yes, where the venue surface allows. A foam party includes the foam machine, a foam-safe event zone, music and a DJ, a party host, games, towels, non-slip planning and cleanup coordination.' },
  { question: 'Can you provide a bouncy castle?', answer: 'Yes. Standard and large bouncy castles, water slides, inflatable obstacle courses, soft play and ball pits for toddlers can be coordinated through our event partners and included in your proposal.' },
  { question: 'Can you provide magicians, mascots or other entertainers?', answer: 'Yes. Party hosts, magicians, bubble shows, puppet shows, mascots, princess or superhero characters, face painters, balloon artists and more are coordinated through our event partners and itemised in the final proposal.' },
  { question: 'Can you provide food for adults?', answer: 'Yes. Adult catering is a primary part of the offer — brunch, BBQ, grazing tables, buffets, canapés or a full private chef menu can run alongside the children’s party.' },
  { question: 'Can you arrange champagne and cocktails for parents?', answer: 'Yes. Professional bartenders, a cocktail bar, free-flow bar packages, champagne receptions and even a champagne and oyster station can be set up for the adults while the children celebrate.' },
  { question: 'Can children and adults have separate menus?', answer: 'Yes — that is exactly how we recommend running it. Two coordinated experiences at the same venue: a fully managed children’s party and a separate food and beverage setup for the adults.' },
  { question: 'What ages do you cater for?', answer: 'First birthdays through to teen parties. We design differently for ages 1–3 (soft play, bubbles, toddler-safe snacks), 4–7 (magicians, face painting, mini chef activities), 8–12 (cooking challenges, pool games, DJs) and teens (DJ, mocktail bar, BBQ, photo booth).' },
  { question: 'Can you work in rented villas? Do we need permission?', answer: 'Yes, we regularly work in rented villas and event venues. The villa’s permission for an event is normally required, and we review access, power, noise restrictions, pool safety and space with you before confirming.' },
  { question: 'What happens if it rains?', answer: 'Rain backup is part of the planning: covered areas, indoor alternatives and adjusted timelines are agreed in advance so the party can continue whatever the weather does.' },
  { question: 'How much does a kids birthday party in Bali cost?', answer: 'Every party is quoted individually based on guest numbers, ages, food, drinks, entertainment, decoration, equipment, staffing and venue. Parties can be arranged from six children; minimum booking requirements apply. You receive an itemised proposal before anything is confirmed.' },
  { question: 'How early should we book?', answer: 'At least two to three weeks for a small party, and four weeks or more for larger events with entertainment, decoration and custom cakes. Last-minute requests are sometimes possible — ask.' },
  { question: 'Is cleanup included?', answer: 'Yes. Breakdown, equipment collection and cleanup of the agreed areas are included in every proposal.' },
]

const RELATED_PAGES = [
  { label: "Kids' Menus", href: '/kids-menus', desc: 'Interactive kids menus and children’s catering options with full ingredient detail.' },
  { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Full-service villa celebrations for kids and adults, planned end to end.' },
  { label: 'Birthday Events', href: '/events/birthdays', desc: 'Birthday catering for mixed-age groups and adult celebrations.' },
  { label: 'Champagne & Oyster Experience', href: '/experiences/champagne-oyster-experience', desc: 'A luxury champagne reception and oyster bar for the adults.' },
]

export default function ExperienceKidsBirthdayChefPartyPage() {
  return (
    <PremiumPage
      slug="experiences/kids-birthday-chef-party"
      title="Kids Birthday Party Bali | Catering, Entertainment & Villa Parties"
      description="Complete kids birthday party planning in Bali: villa catering, interactive chef parties, entertainment, foam parties, decorations & adult bar service."
      seoTitle="Kids Birthday Party Bali | Catering, Entertainment & Villa Parties"
      seoDescription="Complete kids birthday party planning in Bali: villa catering, interactive chef parties, entertainment, foam parties, decorations & adult bar service."
      canonicalUrl={CANONICAL}
      h1="Kids Birthday Parties in Bali with Catering, Entertainment and Complete Setup"
      subtitle="Complete Party Planning, Catering and Entertainment for Children of Every Age — at Your Villa or Venue"
      heroImage="/generated/mychef-kids-party-children-cooking-bali-landscape.webp"
      heroImageAlt="Children enjoying a kids birthday party in Bali with catering and entertainment at a villa"
      ogImage="https://mychef.id/generated/mychef-kids-party-children-cooking-bali-landscape.webp"
      keywords={[
        'kids birthday party bali',
        'kids party bali',
        'childrens birthday party bali',
        'kids party planner bali',
        'villa kids party bali',
        'kids birthday catering bali',
      ]}
      highlights={['From Six Children to Full Villa Events', 'Chef Parties, Foam Parties & Bouncy Castles', 'Adult Catering, Champagne & Bar Service', 'Setup, Coordination & Cleanup Included']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Kids Birthday Party Bali',
          CANONICAL,
          'Experiences',
          'https://mychef.id/experiences'
        ),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Kids Birthday Party Planning Bali',
          provider: {
            '@type': 'LocalBusiness',
            name: 'myCHEF',
            url: 'https://mychef.id',
            telephone: '+62 896-7407-2020',
            areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
          },
          serviceType: 'Kids birthday party planning, catering and entertainment',
          description: 'Complete kids birthday parties in Bali: villa catering, interactive chef parties, themed decoration, entertainment, foam parties, bouncy castles, adult menus, champagne and cocktail service, full event coordination and cleanup.',
          url: CANONICAL,
        },
      ]}
      ctaText="Request a Complete Kids Party Proposal"
      ctaSubtext="Tell us the date, villa, number of children and adults — we reply within the hour with a complete kids party proposal."
    />
  )
}
