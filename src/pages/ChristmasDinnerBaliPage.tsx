import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Sparkles, Star, Users, Heart } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Christmas in Bali',
    title: 'Why Bali Is the World\'s Most Popular Non-Traditional Christmas Destination',
    body: `<p>Every December, hundreds of thousands of travellers choose Bali over the cold. They come for the same reasons you did: warmth, a villa with a pool, the quiet luxury of your own private space, and an escape from the predictable. Christmas in Bali has become something genuinely its own — not a pale imitation of a northern-hemisphere holiday, but a new tradition built around sun, ceremony, and good food.</p>

    <p>What you won't get in Bali: an overpriced restaurant package where you're sitting elbow-to-elbow with strangers at a prix-fixe table, ordering the same buffet as 400 other guests. What you will get — if you plan it right — is something far better. Your own villa. Your own pool. Your family or closest friends. And a private chef who spends the day making Christmas dinner exactly the way you want it.</p>

    <p><strong>How a private chef transforms Christmas at your Bali villa:</strong> The chef arrives in the afternoon while you're relaxing or exploring. Champagne and canapés appear poolside at 5pm — a golden hour in Bali that feels nothing like December anywhere else in the world. By the time the sun sets behind the rice fields or the ocean, you're seated at a festively dressed table, your favourite holiday dishes reimagined with the freshest tropical ingredients available anywhere on earth.</p>

    <p>Your family's traditions don't disappear — they travel with you. Turkey, roasted potatoes, Christmas pudding: all achievable here, sourced in advance, prepared with care. But there's also the option to lean into where you are. Whole lobster with lemongrass butter instead of prawn cocktail. Tropical pavlova with passionfruit instead of Christmas cake. A menu that celebrates Bali as much as it celebrates the season.</p>

    <p>myCHEF has been running private Christmas dinners at Bali villas for years. We understand the logistics, the expectations, and the small details that make the difference between a good dinner and an unforgettable one. This page covers everything you need to know to book and plan yours.</p>`,
  },
  {
    id: 'packages',
    type: 'features' as const,
    subtitle: 'Christmas Packages',
    title: 'Choose Your Christmas Dinner Package',
    features: [
      {
        icon: Sparkles,
        title: 'Tropical Christmas Feast',
        desc: '4-course menu with Indonesian festive twists, Champagne on arrival, tropical dessert. Designed to blend Christmas tradition with the Bali setting. IDR 850,000 per person.'
      },
      {
        icon: Star,
        title: 'Traditional Roast',
        desc: 'Turkey or beef roast with all the trimmings — roasted potatoes, honey-glazed carrots, Brussels sprouts, gravy, and a classic Christmas dessert. Requires advance ordering. IDR 950,000 per person.'
      },
      {
        icon: Users,
        title: 'Family Feast',
        desc: 'Large family-style sharing feast for 8+ guests. Five generous sharing platters at the table — ideal for multi-generational groups who want abundance and variety. IDR 700,000 per person.'
      },
      {
        icon: Heart,
        title: 'Intimate Christmas for Two',
        desc: '5-course dinner for two, with candles, festive table decor, and Champagne. The most romantic Christmas dinner in Bali. IDR 2,200,000 total.'
      },
    ],
  },
  {
    id: 'menus',
    type: 'content' as const,
    subtitle: 'Menu Options',
    title: 'Christmas Menus: Traditional and Tropical',
    body: `<p>We offer two distinct menu approaches for Christmas dinner, and a fully bespoke option for those who want something entirely their own.</p>

    <p><strong>Traditional Christmas Menu</strong><br/>
    For guests who want the full northern-hemisphere Christmas experience on a Bali terrace. The centrepiece is a roast turkey or beef tenderloin, properly rested and carved at the table. Sides include roasted potatoes (crisp outside, fluffy inside), honey-glazed carrots, Brussels sprouts finished with pancetta, and a rich Christmas gravy made from the roasting juices. Dessert is a proper Christmas pudding, flamed with brandy, served with brandy cream or custard. Pre-order is essential for turkey — we source locally raised birds and quantities are limited.</p>

    <p><strong>Tropical Bali Christmas Menu</strong><br/>
    For those who want to celebrate where they are rather than recreate where they came from. This menu starts with a fresh prawn cocktail or a mango and avocado salad with chilli-lime dressing. The main course is a whole roasted lobster with lemongrass and kaffir lime butter, or a spiced duck breast with tamarind glaze and fragrant jasmine rice. Dessert is a tropical pavlova — cloud-light meringue, fresh passionfruit curd, and seasonal Bali fruits. Festive, beautiful, and unmistakably local.</p>

    <p><strong>Fully Bespoke Christmas Menu</strong><br/>
    Bring your own traditions. We have executed lamb roasts, Christmas ham glazed with palm sugar and cloves, seafood platters on ice, multi-course tasting menus with wine pairings, and vegan Christmas feasts. Every booking includes a WhatsApp consultation with your chef to design the menu around your preferences, dietary requirements, and what makes Christmas feel like Christmas to your family. If there's a dish your grandmother always made, tell us. We'll try to make it.</p>`,
  },
  {
    id: 'book-early',
    type: 'content' as const,
    subtitle: 'Book Early',
    title: 'Christmas Eve and Christmas Day Fill by October',
    body: `<p>Of the 365 days in a year, three are fully booked before most people start thinking about them: New Year's Eve, Christmas Eve, and Christmas Day. For myCHEF, these dates are identical in demand — the only difference is that Christmas bookings tend to arrive slightly earlier because families are planning around flights, school holidays, and villa availability.</p>

    <p>Our top-rated chefs are fully committed for December 24 and 25 by September most years. Leaving a Christmas booking until November or December means accepting a limited choice of available chefs, a compressed window for menu design, and the risk of your preferred date simply not being available at all.</p>

    <p><strong>What happens when you book late:</strong> You may still get a chef — we have a strong team — but you'll be choosing from whoever remains available rather than selecting the best match for your event. Menu customisation requires time: sourcing turkey, selecting premium ingredients, designing bespoke courses. A last-minute booking compresses all of this, and the result is inevitably less refined than a booking made two to three months in advance.</p>

    <p><strong>The myCHEF booking process:</strong> Start with a WhatsApp consultation — tell us your date, villa location, guest count, and dietary requirements. We match you with an available chef and send a menu proposal within 24 hours. Once you approve the menu, a confirmation deposit secures your date. The chef manages all ingredient sourcing from that point. On the day, the chef arrives, sets up, and executes your Christmas dinner exactly as planned.</p>`,
  },
  {
    id: 'logistics',
    type: 'content' as const,
    subtitle: 'Day-Of Logistics',
    title: 'How Your Christmas Day Runs',
    body: `<p>A standard Christmas Day dinner service runs as follows: your chef arrives at approximately 3pm to begin preparation. This includes unloading ingredients, setting up the kitchen, and beginning the slow-cook elements (roasting, braising, stock reductions) that underpin the meal. At 5pm, canapés and Champagne are served — the ideal start to a Bali Christmas evening. Main course is served at 7pm, dessert at approximately 9pm. The chef departs by 11pm, leaving the kitchen clean and the evening yours.</p>

    <p><strong>What myCHEF provides:</strong> All cooking equipment (pots, pans, knives, temperature probes), serving ware (platters, bowls, serving spoons), and linens for the table if required. Your villa kitchen does not need to be equipped beyond basics — we bring what we need. For very large groups (20+) served in a villa without a full commercial kitchen, we discuss logistics in advance.</p>

    <p><strong>What is not included:</strong> Alcohol is client-supplied. Wine, Champagne, spirits, and mixers are the responsibility of the guest. We are happy to recommend local Bali wine importers and can advise on quantities and pairings for your menu.</p>

    <p><strong>Festive surcharge:</strong> A 25% surcharge applies on December 24, 25, and 26. This reflects the exceptional demand for these dates and the preparation time required by your chef. The surcharge is quoted upfront as part of your package price — there are no surprises on the invoice.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Christmas Dinner Bali: Frequently Asked Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book Your Christmas Chef',
    title: 'Secure Your Christmas Date Before It\'s Gone',
    body: 'December fills early. Message us now to secure your preferred Christmas date.',
    primaryAction: {
      label: 'Book Your Christmas Chef',
      href: 'https://wa.me/4915234561712?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20book%20a%20private%20chef%20for%20Christmas%20at%20my%20Bali%20villa.',
    },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'When should I book for Christmas?',
    answer: 'By October at the latest. Christmas Eve and Christmas Day are our most in-demand dates and chefs are fully booked early.',
  },
  {
    question: 'Can you do a traditional Christmas roast (turkey, etc.) in Bali?',
    answer: 'Yes — we source turkey and all traditional trimmings. It requires advance ordering so booking early is essential.',
  },
  {
    question: 'Is there a Christmas surcharge?',
    answer: 'Yes, a 25% festive surcharge applies on December 24, 25, and 26. This is quoted upfront and included in your package price.',
  },
  {
    question: 'Can you do Christmas for a large family (15+ people)?',
    answer: 'Yes — we cater Christmas for groups from 2 to 30+ guests. Multi-chef teams are arranged for larger groups.',
  },
  {
    question: 'Do you provide Christmas decorations?',
    answer: "We provide tasteful table decor (candles, florals, festive touches). Villa decorations are the guest's responsibility or we can refer you to a Bali event stylist.",
  },
  {
    question: 'Can we have a Christmas brunch instead of dinner?',
    answer: 'Absolutely — Christmas brunch is a popular option. Bottomless brunch style with festive touches, eggs, pastries, tropical fruits, Mimosas.',
  },
]

const RELATED_PAGES = [
  { label: 'New Year\'s Eve Bali', href: '/blog/new-years-eve-bali-private-chef', desc: 'Private chef for New Year\'s Eve at your Bali villa.' },
  { label: 'Proposal Dinner Bali', href: '/blog/proposal-dinner-bali-private-chef', desc: 'Plan a perfect proposal dinner at a Bali villa.' },
  { label: 'Fine Dining Bali', href: '/fine-dining/private-chef-bali', desc: 'Fine dining private chef experiences in Bali.' },
  { label: 'Anniversary Dinner', href: '/blog/anniversary-dinner-villa-bali', desc: 'Private chef anniversary dinner at your Bali villa.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing for all myCHEF packages and group sizes.' },
  { label: 'Festive Menu Bali', href: '/blog/festive-season-menu-bali', desc: 'Festive season menus and catering for Bali villas.' },
]

export default function ChristmasDinnerBaliPage() {
  return (
    <PremiumPage
      slug="blog/christmas-dinner-bali-villa"
      title="Christmas Dinner Bali: Private Chef at Your Villa"
      description="Book a private chef for Christmas dinner at your Bali villa. Festive tasting menus, tropical Christmas setups, groups 2–30. Book now — December dates fill fast."
      seoTitle="Christmas Dinner Bali | Private Chef Villa Christmas | myCHEF"
      seoDescription="Book a private chef for Christmas dinner at your Bali villa. Festive tasting menus, tropical Christmas setups, groups 2–30. Book now — December dates fill fast."
      canonicalUrl="https://mychef.id/blog/christmas-dinner-bali-villa"
      h1="Christmas Dinner Bali: Private Chef at Your Villa"
      subtitle="Celebrate Christmas with a Private Chef at Your Bali Villa"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Festive Christmas dinner at a Bali villa — private chef service by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['christmas dinner bali', 'christmas bali villa', 'christmas private chef bali', 'christmas in bali', 'christmas day dinner bali']}
      highlights={['Packages', 'Menus', 'Planning', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Christmas Dinner Bali', 'https://mychef.id/blog/christmas-dinner-bali-villa', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Christmas Dinner Bali: Private Chef at Your Villa',
          description: 'Book a private chef for Christmas dinner at your Bali villa. Festive tasting menus, tropical Christmas setups, groups 2–30.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/christmas-dinner-bali-villa' },
          url: 'https://mychef.id/blog/christmas-dinner-bali-villa',
          wordCount: 1400,
          keywords: 'christmas dinner bali, christmas bali villa, christmas private chef bali, christmas in bali, christmas day dinner bali',
        },
      ]}
      ctaText="Book Your Christmas Chef"
      ctaSubtext="December fills early. Message us now to secure your preferred Christmas date."
    />
  )
}
