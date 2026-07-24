import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'
import { Wine, ChefHat, UtensilsCrossed, PartyPopper, Shell, Heart } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20a%20private%20experience%20in%20Bali.%20Please%20help%20me%20choose%20the%20right%20one.'
const CANONICAL = 'https://mychef.id/experiences'

const EXPERIENCES = [
  {
    slug: 'private-cocktail-party',
    title: 'Private Cocktail Party',
    keyword: 'bartender hire Bali',
    desc: 'Hire a professional bartender and complete mobile cocktail bar for your Bali villa, wedding, birthday or private event. Bar setup, staff, mixers and a custom cocktail menu included.',
    icon: Wine,
    href: '/experiences/private-cocktail-party',
    image: '/generated/mychef-cocktail-party-bartender-pour-bali-landscape.webp',
    imageAlt: 'Bartender hire Bali service with mobile cocktail bar at a private villa party',
  },
  {
    slug: 'sushi-masterclass',
    title: 'Sushi Masterclass',
    keyword: 'sushi making class Bali',
    desc: 'Book a private sushi making class Bali experience at your villa. Learn maki, nigiri and hand rolls with a sushi chef, then enjoy the meal you created together.',
    icon: UtensilsCrossed,
    href: '/experiences/sushi-masterclass',
    image: '/generated/mychef-sushi-masterclass-chef-hands-bali-landscape.webp',
    imageAlt: 'Sushi making class Bali with a chef teaching in a private villa kitchen',
  },
  {
    slug: 'private-cooking-class',
    title: 'Private Cooking Class',
    keyword: 'private cooking class Bali',
    desc: 'Choose your cuisine and learn from a private chef in your own villa. Italian, Indonesian, Japanese, French, healthy or kids’ cooking classes with ingredients included.',
    icon: ChefHat,
    href: '/experiences/private-cooking-class',
    image: '/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp',
    imageAlt: 'Private cooking class Bali at a villa with a chef teaching fresh recipes',
  },
  {
    slug: 'kids-birthday-chef-party',
    title: 'Kids Birthday Chef Party',
    keyword: 'kids birthday party Bali',
    desc: 'Turn your villa into a fully hosted children’s cooking party. Pizza making, cupcake decorating, kids’ sushi, mocktails, chef hats and cleanup handled by our team.',
    icon: PartyPopper,
    href: '/experiences/kids-birthday-chef-party',
    image: '/generated/mychef-kids-party-children-cooking-bali-landscape.webp',
    imageAlt: 'Kids birthday party Bali chef party with pizza making and cupcake decorating',
  },
  {
    slug: 'champagne-oyster-experience',
    title: 'Champagne & Oyster Experience',
    keyword: 'oyster bar Bali',
    desc: 'Book a private oyster bar Bali experience and champagne reception at your villa, wedding or event. Fresh oysters on ice, live shucking, premium glassware and professional service.',
    icon: Shell,
    href: '/experiences/champagne-oyster-experience',
    image: '/generated/mychef-oyster-champagne-station-pour-bali-landscape.webp',
    imageAlt: 'Oyster bar Bali with champagne service at an elegant private villa',
  },
  {
    slug: 'romantic-proposal-dinner',
    title: 'Romantic Proposal Dinner',
    keyword: 'proposal package Bali',
    desc: 'Plan a complete proposal package Bali experience with dinner, flowers, candles, styling, photographer and confidential coordination through one dedicated team.',
    icon: Heart,
    href: '/experiences/romantic-proposal-dinner',
    image: '/generated/mychef-proposal-dinner-table-setting-bali-landscape.webp',
    imageAlt: 'Proposal package Bali romantic dinner setup at a private villa',
  },
]

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Private Experiences Bali',
    title: 'Private Experiences in Bali — The Villa Is the Venue',
    image: '/generated/mychef-experiences-hub-hero-bali-landscape.webp',
    imageAlt: 'Private experiences Bali collection at a luxury villa by myCHEF',
    body: `<p>Some moments deserve more than a restaurant reservation. The myCHEF <strong>private experiences Bali</strong> collection brings chefs, bartenders, teachers and event specialists directly to your villa, turning a normal evening into something your guests will remember long after the holiday ends.</p>

    <p>Every experience is designed around the setting you already have: your villa, your pool, your kitchen, your view. You choose the occasion and the mood, and we build the rest — ingredients, equipment, service staff, styling and cleanup. The result feels personal, seamless and unmistakably Bali.</p>

    <p>Whether you want a hands-on sushi class with friends, a floating cocktail bar by the pool, a stress-free kids’ cooking party, or a confidential proposal dinner planned down to the last candle, these experiences are built for guests who expect privacy, quality and attention to detail.</p>`,
  },
  {
    id: 'collection',
    type: 'custom' as const,
    subtitle: 'Explore the Collection',
    title: 'Private Experiences in Bali by myCHEF',
    render: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {EXPERIENCES.map((e) => {
          const Icon = e.icon
          return (
            <a
              key={e.slug}
              href={e.href}
              className="group block rounded-xl overflow-hidden border border-stone-800 bg-[#0a0a0a] hover:border-[#C5A028]/50 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C5A028]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#F5F1E8] group-hover:text-[#C5A028] transition-colors">{e.title}</h3>
                </div>
                <p className="text-sm text-stone-400 leading-relaxed mb-4">{e.desc}</p>
                <span className="inline-flex items-center text-sm font-medium text-[#C5A028] group-hover:underline">
                  Explore {e.title}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </a>
          )
        })}
      </div>
    ),
  },
  {
    id: 'why-private',
    type: 'content' as const,
    subtitle: 'Why Book a Private Experience',
    title: 'The Difference Between a Reservation and an Experience',
    body: `<p>Private experiences solve the problems that come with group travel and special occasions. There is no need to coordinate transport, no shared restaurant space, no fixed menu that does not suit everyone, and no pressure to leave when the evening is just getting started.</p>

    <p>When the experience comes to your villa, the schedule is yours. A proposal can be timed to sunset. A kids’ party can start after nap time. A cocktail class can flow into dinner. A sushi lesson can become the meal. Everything adapts to your group rather than the other way around.</p>

    <p>Our team handles the logistics that would normally fall to you: sourcing fresh ingredients, bringing equipment that villa kitchens may not have, setting up stations, managing dietary requirements, serving drinks and restoring the space afterwards. You are the host, but you are never the event manager.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: 'From Idea to Experience in Four Steps',
    body: `<p><strong>1. Choose your experience.</strong> Browse the <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">private experiences Bali</a> collection and pick the activity or occasion that matches your group. Each page explains what is included, typical duration, group size and how it fits with other myCHEF services.</p>

    <p><strong>2. Send a brief.</strong> A short WhatsApp message is enough to begin. Include your preferred date, villa location, number of guests and any dietary requests or special occasion details.</p>

    <p><strong>3. Receive a tailored plan.</strong> We confirm availability, design the menu or activity, and send a written proposal with all inclusions, staffing and investment summary. Nothing is hidden.</p>

    <p><strong>4. Enjoy the experience.</strong> Our team arrives ahead of time with everything needed, runs the experience from start to finish, and leaves the villa tidy. You simply turn up.</p>`,
  },
  {
    id: 'who-for',
    type: 'content' as const,
    subtitle: 'Who Private Experiences Are For',
    title: 'Villa Holidays, Celebrations & Corporate Groups',
    body: `<p><strong>Families and friends on villa holidays</strong> use private experiences to turn a regular dinner into an event. A sushi class entertains teenagers. A cocktail party celebrates a birthday. A cooking class becomes the highlight of a reunion.</p>

    <p><strong>Couples</strong> book the proposal dinner and champagne experiences for moments that need to feel private and perfect. These are not add-ons; they are the memory itself.</p>

    <p><strong>Corporate groups and retreats</strong> use team-building cooking classes, cocktail competitions and oyster receptions to create shared experiences without leaving the villa.</p>

    <p><strong>Parents</strong> book kids’ chef parties because they want a structured, safe, fully hosted activity that leaves the villa clean and the children happy.</p>`,
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Bali-Wide Service',
    title: 'Where We Host Private Experiences',
    body: `<p>We host private experiences across all major Bali villa regions. Most bookings take place in <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak</a>, <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu</a>, <a href="/private-chef/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu</a>, <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud</a>, <a href="/private-chef/sanur" class="text-[#7E6410] hover:underline font-medium">Sanur</a>, <a href="/private-chef/nusa-dua" class="text-[#7E6410] hover:underline font-medium">Nusa Dua</a> and <a href="/private-chef/jimbaran" class="text-[#7E6410] hover:underline font-medium">Jimbaran</a>. If your villa has a suitable kitchen or pool area, we can usually make it work.</p>

    <p>For larger equipment such as mobile bars, oyster stations or proposal styling, we confirm logistics during the planning stage. Travel beyond the main villa areas may incur a transport fee, which we disclose upfront in the proposal.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Private Experiences FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Planning',
    title: 'Which Experience Are You Planning?',
    body: 'Tell us the experience, date, villa location and guest count — we will reply within the hour with availability and a tailored plan.',
    primaryAction: {
      label: 'Message Us on WhatsApp',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'View All Services',
      href: '/services',
    },
  },
]

const FAQS = [
  { question: 'What private experiences do you offer in Bali?', answer: 'We offer six curated experiences: Private Cocktail Party, Sushi Masterclass, Private Cooking Class, Kids Birthday Chef Party, Champagne & Oyster Experience, and Romantic Proposal Dinner.' },
  { question: 'Can experiences be combined or customised?', answer: 'Yes. Many clients combine a cocktail party with canapés, a sushi class followed by dinner, or a proposal dinner with champagne and oysters. We design the flow around your occasion.' },
  { question: 'Do you bring all ingredients and equipment?', answer: 'Yes. Every experience includes the ingredients, tools and equipment needed. For cooking classes and sushi masterclasses we bring aprons, knives, boards and everything your group needs.' },
  { question: 'How many guests can join a private experience?', answer: 'It depends on the experience. Couples’ experiences work from two guests. Cooking classes and cocktail parties scale comfortably to 20 or more. Kids’ parties are tailored to the age group and villa space.' },
  { question: 'Can dietary requirements be accommodated?', answer: 'Yes. We plan menus around allergies, vegetarian, vegan, gluten-free, halal-friendly and religious requirements. Mention them when you enquire so we build them into the experience from the start.' },
  { question: 'How far in advance should I book?', answer: 'We recommend 2–4 weeks ahead for most experiences. Proposal dinners, peak-season dates and larger groups benefit from earlier planning. Last-minute bookings may be possible depending on availability.' },
  { question: 'Do you handle setup and cleanup?', answer: 'Yes. Our team sets up the experience, runs it from start to finish, and restores the villa afterwards. You should not need to manage logistics.' },
  { question: 'Can you host experiences at hotels or event venues?', answer: 'Most experiences are designed for private villas, but we can adapt to hotels, retreat centres and event venues with suitable facilities. Venue permission and logistics are confirmed during planning.' },
  { question: 'Are your experiences only available in Bali?', answer: 'Yes. Our private experiences are designed for Bali villas and estates across all major regions of the island.' },
  { question: 'How do I get a quote for a private experience?', answer: 'Send us a WhatsApp message with your preferred experience, date, villa location and guest count. We reply within the hour with availability and a tailored quote.' },
]

const RELATED_PAGES = [
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Full overview of private chef and dining experiences across Bali.' },
  { label: 'Villa Catering', href: '/catering/villa-catering', desc: 'Full-service catering for villa celebrations and group dining.' },
  { label: 'Event Catering', href: '/events', desc: 'Weddings, birthdays, corporate events and villa parties handled end-to-end.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF packages and event types.' },
]

export default function ExperiencesHubPage() {
  return (
    <PremiumPage
      slug="experiences"
      title="Private Experiences Bali | Culinary & Celebration Experiences | myCHEF"
      description="Discover private culinary and celebration experiences in Bali. Cocktail parties, sushi classes, cooking classes, kids’ parties, oyster bars and proposal dinners at your villa."
      seoTitle="Private Experiences Bali | Culinary & Celebration Experiences | myCHEF"
      seoDescription="Discover private culinary and celebration experiences in Bali. Cocktail parties, sushi classes, cooking classes, kids’ parties, oyster bars and proposal dinners at your villa."
      canonicalUrl={CANONICAL}
      h1="Private Experiences in Bali"
      subtitle="Curated Culinary & Celebration Experiences at Your Villa"
      heroImage="/generated/mychef-experiences-hub-hero-bali-landscape.webp"
      heroImageAlt="Private experiences Bali collection at a luxury villa by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experiences-hub-hero-bali-landscape.webp"
      keywords={[
        'private experiences Bali',
        'villa experiences Bali',
        'food experiences Bali',
        'private dining experiences Bali',
        'Bali culinary experiences',
        'things to do at your villa Bali',
        'private group activities Bali',
        'luxury experiences Bali',
        'Bali celebration experiences',
      ]}
      highlights={['At Your Villa', 'Chef-Led', 'All Equipment Included', 'Bali-Wide']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Private Experiences in Bali',
          CANONICAL
        ),
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Private Experiences in Bali by myCHEF',
          itemListElement: EXPERIENCES.map((e, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: e.title,
            url: `https://mychef.id${e.href}`,
          })),
        },
      ]}
      ctaText="Plan Your Experience"
      ctaSubtext="Tell us which experience, your date and villa — we will reply within the hour."
    />
  )
}
