import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Star, Flame, Sparkles, Users } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Private Chef Birthday Celebrations',
    title: 'Why a Bali Villa Birthday Is the Ultimate Celebration',
    body: `<p>There is a reason people choose Bali for milestone birthdays. The setting is unlike anywhere else — a private pool, open-air pavilion, tropical garden, the sound of gamelan drifting over villa walls at dusk. When you add a private chef who designs the entire meal around the guest of honour, you move from a dinner out to a genuinely unforgettable personal event.</p>

    <p>At myCHEF, birthdays are the most personalised events we do. Every detail — the menu, the pacing of the evening, the arrival of the birthday cake, the cocktail named after the birthday person — is designed around one individual. Unlike a restaurant, where you are given a fixed menu and a time slot, a villa birthday gives you complete creative control. You choose the food, the format, the vibe, and the flow of the evening.</p>

    <p>That flexibility matters because birthdays are not all the same. A 30th birthday dinner for twelve close friends has a completely different energy from a 50th milestone feast for three generations of family. A kids' birthday pool party requires different thinking from an intimate 40th dinner for a couple and their closest circle. myCHEF works across all of these — adapting the chef team, the menu style, the service format, and the add-ons to match the occasion.</p>

    <p>We work with groups of 6 to 50+ guests, across Seminyak, Canggu, Uluwatu, Ubud, Jimbaran, Nusa Dua, and every corner of Bali where villas have a proper kitchen. Pricing starts from IDR 380,000 per person for buffet-style group celebrations, with plated tasting experiences from IDR 750,000 per person.</p>

    <p>The process is straightforward: tell us the date, the number of guests, the birthday person's food preferences and any dietary requirements, and what kind of atmosphere you want to create. We respond within a few hours with a menu proposal tailored to them — not a generic set menu, but a menu built around what they actually love to eat.</p>`,
  },
  {
    id: 'experiences',
    type: 'features' as const,
    subtitle: 'Birthday Packages',
    title: 'Birthday Experience Packages',
    features: [
      {
        icon: Star,
        title: 'Gourmet Birthday Dinner',
        desc: '4-course plated dinner with Champagne on arrival and a birthday dessert moment. The chef designs the menu around the birthday person\'s favourite flavours — elegant, personal, and photographable. From IDR 750,000/person.'
      },
      {
        icon: Flame,
        title: 'BBQ Birthday Bash',
        desc: 'Live BBQ with sharing platters, cocktails, and a relaxed, social atmosphere. Grilled proteins, fresh salads, satay, and tropical desserts. The format encourages mingling and works beautifully for groups of 10–25 at the villa pool. From IDR 450,000/person.'
      },
      {
        icon: Sparkles,
        title: 'Luxury Celebration',
        desc: '6-course tasting menu with sommelier service and a bespoke printed menu card with the birthday person\'s name and the date. The pinnacle of what we offer — suited to milestone birthdays (40th, 50th, 60th+) where the meal is the centrepiece of the evening. From IDR 1,100,000/person.'
      },
      {
        icon: Users,
        title: 'Big Group Party',
        desc: 'Buffet or live stations for 15 or more guests. High-energy, generous, and designed for groups where variety matters and guests have mixed dietary preferences. Multiple cuisine stations, grazing boards, and live cooking elements available. From IDR 380,000/person.'
      },
    ],
  },
  {
    id: 'milestone',
    type: 'content' as const,
    subtitle: 'Milestone Birthdays',
    title: 'Milestone Birthday Ideas by Age',
    body: `<p>Every milestone birthday has its own energy — and the right catering approach changes significantly depending on the occasion.</p>

    <p><strong>30th birthday:</strong> Typically a celebration for a group of close friends in their late twenties and early thirties. The 30th is often the first "big" birthday — people want it to feel special but not stiff. A cocktail reception with grazing boards and a roaming bartender, followed by a shared dinner, works brilliantly. Casual enough to feel relaxed, elevated enough to feel like an occasion.</p>

    <p><strong>40th birthday:</strong> The 40th is often more intimate — a smaller guest list, people the birthday person genuinely loves, and a desire for a meal that actually means something. This is the milestone where a plated tasting menu shines. Five or six courses, a chef who can tell the story of each dish, and enough time to linger. Some clients combine a cocktail hour at the pool with a plated dinner under the stars.</p>

    <p><strong>50th birthday:</strong> The 50th frequently involves multiple generations — the birthday person's peers, their children, possibly elderly parents. A multigenerational approach works best here: a family-style feast with dishes that span preferences, with a separate kids' course for younger guests. The chef manages both streams simultaneously, ensuring the adults have their own experience while children are happily fed and settled.</p>

    <p><strong>60th and beyond:</strong> Comfortable, familiar, and memorable. Long tables, generous portions of dishes the birthday person has loved for decades, and service that never feels rushed. A seated dinner that allows for speeches, stories, and the kind of unhurried conversation that a restaurant environment rarely permits.</p>

    <p><strong>Kids' birthdays:</strong> Completely different from adult milestone dinners — and we do them properly. Themed fun food (pizza stations, slider bars, loaded fries, fruit skewers, ice cream sundae builds) rather than adult tasting menus. The goal is food kids actually want at a party, served at the right time in the right quantities so parents can enjoy the celebration too.</p>`,
  },
  {
    id: 'cake',
    type: 'content' as const,
    subtitle: 'Birthday Cake Service',
    title: 'How Birthday Cake Works with myCHEF',
    body: `<p>We do not make birthday cakes — that is a specialist craft, and Bali has excellent dedicated cake designers who do it far better than a private chef team would. What we do is coordinate the "cake moment" so that it lands perfectly in the flow of the evening.</p>

    <p>This coordination matters more than it sounds. A cake that arrives too early sits on the table and loses its impact. A cake that arrives too late, after guests have eaten dessert and moved to the pool, misses the moment. We work with you and the cake designer to time the arrival, set up the candles and presentation, and create a reveal that surprises the birthday person at exactly the right point in the evening.</p>

    <p>We work with several specialist Bali cake designers whose work we trust — those who produce custom cakes that match the theme of the event, hold up in Bali's humidity, and look stunning in photos. We can share recommendations based on your location and the style you are looking for. Cake is always quoted separately from catering, so you have full flexibility over the choice and budget.</p>

    <p>We also handle serving — portioning, plating, and presenting birthday cake to guests as a formal dessert moment rather than an informal slice-and-pass. If there is a dessert table in addition to the cake, we manage both.</p>`,
  },
  {
    id: 'add-ons',
    type: 'content' as const,
    subtitle: 'Birthday Add-Ons',
    title: 'Elevate the Celebration with Birthday Add-Ons',
    body: `<p>The core catering package covers the food and service. These add-ons let you build the full birthday experience around it.</p>

    <p><strong>Cocktail bartender service:</strong> A professional bartender at your villa for four hours, with a full cocktail setup. IDR 750,000 for the four-hour service, plus the cost of spirits (which we can advise on or help source). Works beautifully as a cocktail hour before dinner.</p>

    <p><strong>Birthday cocktail menu:</strong> We design a personalised cocktail menu featuring two or three signature drinks named after the birthday person or themed around them. Printed menus are presented at each guest's seat. Popular for milestone birthdays where the detail matters.</p>

    <p><strong>Grazing arrival table:</strong> A styled grazing board set up before guests arrive — artisan cheeses, charcuterie, seasonal fruit, dips, breads, and crackers. Guests graze on arrival while the birthday person is welcomed. Sets the atmosphere immediately and buys the chef time to plate the first course properly.</p>

    <p><strong>Live musician referral:</strong> We work with trusted live music contacts across Bali — acoustic guitar, traditional gamelan, jazz trio, saxophone. We make the introduction; you book directly. We time the dinner around the music so neither competes with the other.</p>

    <p><strong>Villa decoration coordination:</strong> We work alongside your decoration team or refer you to trusted Bali villa decorators. Our role is to ensure the decoration setup does not interfere with food preparation and that the kitchen is clear and ready when needed.</p>

    <p><strong>Surprise dessert reveal:</strong> For birthdays where the dessert moment should be theatrical — a showstopper plated dessert with personalised garnish, presented by the chef directly to the birthday person with a brief story. Memorable, photographable, and completely personalised.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Birthday Catering FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Plan Your Birthday',
    title: 'Plan Your Birthday Celebration',
    body: 'Tell us the date, how many guests, and what vibe you want — we handle the rest.',
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/62089674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20birthday%20at%20a%20Bali%20villa%20and%20need%20catering.' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'Do you cater kids birthday parties as well as adult ones?',
    answer: 'Yes — we do fun, themed kids menus. Pizza, pasta, sliders, loaded fries, fruit skewers — food kids actually want at a party.',
  },
  {
    question: 'Can you coordinate a birthday cake?',
    answer: 'We work with specialist Bali cake designers and coordinate the cake arrival and presentation. Cake is quoted separately.',
  },
  {
    question: 'How many guests can you cater for?',
    answer: 'From an intimate dinner for 2 to a villa party of 50+. We scale the chef team accordingly.',
  },
  {
    question: 'Can you do a themed menu for the birthday?',
    answer: 'Absolutely — Italian night, Japanese feast, BBQ blowout, tropical seafood... we design the menu around whatever the birthday person loves.',
  },
  {
    question: 'Can you keep it a surprise?',
    answer: 'Yes — many clients coordinate with us while keeping the birthday person unaware. We work discreetly.',
  },
  {
    question: 'Is there a difference in pricing for a milestone birthday vs a regular dinner?',
    answer: 'No — pricing is based on menu level, group size, and add-ons, not the occasion type.',
  },
]

const RELATED_PAGES = [
  { label: 'Bachelorette Party Catering', href: '/blog/bachelorette-party-bali-catering', desc: 'Private chef catering for bachelorette parties at Bali villas.' },
  { label: 'Bachelor Party Bali', href: '/blog/bachelor-party-bali-private-chef', desc: 'Bachelor party catering with private chef and bartender service.' },
  { label: 'Large Group Catering', href: '/blog/large-group-catering-bali', desc: 'Catering for groups of 20–100+ at Bali villas and venues.' },
  { label: 'Villa Dinner Party', href: '/blog/private-dinner-party-bali', desc: 'Private dinner party catering at Bali villas.' },
  { label: 'Kids Menu Guide', href: '/blog/family-kids-private-chef-menu-guide-bali', desc: 'Family-friendly and kids menu options for Bali villa stays.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing guide for all myCHEF services.' },
]

export default function BirthdayPartyCateringBaliPage() {
  return (
    <PremiumPage
      slug="blog/birthday-party-catering-bali"
      title="Birthday Party Catering Bali | Private Chef Birthday Villa | myCHEF"
      description="Make your Bali birthday unforgettable with private chef catering. Villa setups, themed menus, cake service, groups 6–50. From IDR 400K/person."
      seoTitle="Birthday Party Catering Bali | Private Chef Birthday Villa | myCHEF"
      seoDescription="Make your Bali birthday unforgettable with private chef catering. Villa setups, themed menus, cake service, groups 6–50. From IDR 400K/person."
      canonicalUrl="https://mychef.id/blog/birthday-party-catering-bali"
      h1="Birthday Party Catering Bali"
      subtitle="Private Chef Celebrations for Any Age at Your Bali Villa"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Birthday party catering at a Bali villa — private chef service by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['birthday catering bali', 'birthday party bali villa', 'private chef birthday bali', 'birthday catering bali villa', 'bali birthday dinner party']}
      highlights={['Experiences', 'Menu Ideas', 'Add-Ons', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Birthday Party Catering Bali', 'https://mychef.id/blog/birthday-party-catering-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Birthday Party Catering Bali — Private Chef Celebrations for Any Age at Your Bali Villa',
          description: 'Make your Bali birthday unforgettable with private chef catering. Villa setups, themed menus, cake service, groups 6–50. From IDR 400K/person.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: '2026-06-29',
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/birthday-party-catering-bali' },
          url: 'https://mychef.id/blog/birthday-party-catering-bali',
          wordCount: 1400,
          keywords: 'birthday catering bali, birthday party bali villa, private chef birthday bali, birthday catering bali villa, bali birthday dinner party',
        },
      ]}
      ctaText="Plan Your Birthday Celebration"
      ctaSubtext="Tell us the date, how many guests, and what vibe you want — we handle the rest."
    />
  )
}
