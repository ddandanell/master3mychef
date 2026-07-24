import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Hostess Hire in Bali -- Professional Event Host and Greeter Service',
    body: `A well-placed hostess changes the first impression of any event. From the moment guests arrive, a professional greeter sets the tone: calm, welcoming, and in control of every detail so that neither you nor your guests have to think about what comes next.

myCHEF provides professional hostess and host hire for events across Bali. Our hosts and hostesses are trained in luxury hospitality, fluent in English, and experienced across a full range of event types: corporate dinners, brand activations, villa parties, product launches, welcome receptions, and VIP gatherings.

We place host and hostess staff across Seminyak, Canggu, Uluwatu, Nusa Dua, Jimbaran, Ubud, and all major villa event venues.`,
  },
  {
    id: 'what-hostess-does',
    type: 'content',
    title: 'What a Professional Hostess Does at Your Event',
    body: `**Guest Reception and Welcome** -- Your hostess meets guests at the entrance, confirms their names against the guest list, offers a welcome drink, and directs them to the right area. The first 60 seconds of any event are the most important; a professional greeter makes them effortless for everyone.

**Event Flow Management** -- Beyond greeting, an experienced hostess monitors the room: noticing when drinks run low, flagging service issues to the event manager before guests notice, keeping the timing on track, and ensuring no guest is left without direction. This frees you to host rather than manage.

**Information and Navigation** -- At larger venues or multi-room events, guests need orientation. A hostess provides it naturally without making the event feel bureaucratic. Table seating, bathroom locations, programme timings, menu explanations -- all handled smoothly.

**VIP and Protocol Handling** -- For events with VIP guests, executive attendees, or cultural sensitivities, an experienced hostess manages the protocol: correct titles, appropriate greetings, physical guidance, and discreet communication with the event lead about VIP movements.

**Brand Representation** -- For corporate events and brand activations, your hostess is the face of your organisation for arriving guests. Presentation, language, knowledge of the brand story, and consistent messaging all require briefing and experience. Our hostesses are trained to represent your brief accurately.

**Departure and Send-Off** -- How guests leave is as important as how they arrive. A farewell hostess ensures guests receive any gifts or documentation, transport arrangements are clear, and the final impression matches the quality of the event itself.`,
  },
  {
    id: 'event-types',
    type: 'content',
    title: 'Events We Staff with Host and Hostess Service in Bali',
    body: `**Corporate Dinners and Gala Events** -- Executive dinners, award ceremonies, corporate retreats, and formal gala evenings where professional reception and protocol management is non-negotiable. We typically place 1 hostess per 30--50 guests for smooth flow.

**Brand Activations and Product Launches** -- High-energy brand events where hostesses serve as the first point of contact, brand ambassador, and information hub simultaneously. Product knowledge briefing, on-brand presentation, and the ability to work a room confidently are standard.

**Luxury Villa Parties and Celebrations** -- Private celebrations at Bali villas -- milestone birthdays, anniversary dinners, bachelorette events -- where a hostess adds a layer of professionalism without making the evening feel corporate. The tone is warm and personal rather than formal.

**Wedding Welcome Receptions** -- The pre-ceremony or cocktail-hour period where guests are still arriving, orientation is needed, and emotional energy is high. A calm, experienced welcome team makes this transition seamless for everyone, including the couple.

**Conference and Summit Registration** -- Day-long or multi-day events where registration, badge distribution, information desks, and session management all require dedicated professional staff. We staff registration teams with both hostesses and host coordinators.

**Hotel and Resort Events** -- Restaurants and hotels hosting private dining events, exclusive pop-ups, or curated experiences often need additional front-of-house staff who understand luxury hospitality standards. Our team integrates with existing venue staff seamlessly.`,
  },
  {
    id: 'our-standard',
    type: 'content',
    title: 'The myCHEF Hostess Standard',
    body: `We do not supply volume hospitality staff. Every host and hostess we place meets a specific standard:

**English Fluency** -- Clear, articulate communication with international guests is a baseline requirement. For multilingual events, we can source staff with additional languages (Mandarin, Japanese, French, German) with advance notice.

**Luxury Hospitality Training** -- All our staff have worked in luxury hotel, restaurant, or event environments. They understand pacing, discretion, when to be visible, and when to step back.

**Event-Specific Briefing** -- Before every event, hostess staff receive a full briefing: guest list, programme timeline, key contacts, venue layout, protocol notes, and brand guidelines. They arrive prepared, not guessing.

**Professional Presentation** -- We provide wardrobe guidance for each event type. A beach wedding has different presentation requirements from a corporate product launch. Our staff adapt accordingly.

**Experience With International Guests** -- Bali's event guest lists are international by nature. Navigating cultural differences in greeting, protocol, and personal space with grace is a skill developed over real hospitality careers, not a one-day training.`,
  },
  {
    id: 'how-to-book',
    type: 'content',
    title: 'How to Book Hostess Hire in Bali',
    body: `**Tell Us the Event Brief** -- Venue, date, start and end time, expected guest count, event type, and any specific requirements (VIP protocol, multilingual needs, dress code, brand guidelines).

**We Recommend a Team Size** -- Based on your guest count and event type, we suggest the number of hosts and hostesses and their roles (entry greeter, room hostess, registration coordinator, departure host).

**Briefing Call or Document** -- For corporate and brand events, we conduct a briefing call or receive your event brief in writing so staff arrive fully prepared.

**Day-of Coordination** -- Our event lead coordinates with your event manager throughout the day. Any adjustments to flow, timing, or setup are handled in real time without it reaching you as a problem.`,
  },
]

const faqs = [
  {
    question: 'How many hostesses do I need for my event?',
    answer:
      'As a general guide: 1 hostess per 30--50 guests for a reception or party; 1 per 20--25 for registration-heavy events like conferences; 2--3 for a formal gala of 100+ with multiple entry points. We will make a specific recommendation based on your venue layout and programme.',
  },
  {
    question: 'Can hostesses speak languages other than English?',
    answer:
      'Yes, with advance notice. We have staff who speak Mandarin, Japanese, French, German, Korean, and of course Bahasa Indonesia. Multilingual requests need at least 1 week notice to confirm availability.',
  },
  {
    question: 'What is the dress code for your hostesses?',
    answer:
      'We adapt to your event. Standard presentation is smart business casual or elegant formal depending on event type. For branded events, we can wear your provided uniforms or follow a specific colour palette. For traditional or cultural events, we can discuss appropriate dress. Let us know your requirements at booking.',
  },
  {
    question: 'Can I hire a hostess for a small private dinner party?',
    answer:
      'Yes. A single hostess for an intimate dinner of 8--15 people at a villa adds a professional welcome touch without overwhelming the occasion. She can also assist with light front-of-house duties during the meal if needed.',
  },
  {
    question: 'How far in advance should I book hostess staff in Bali?',
    answer:
      'For small events, 3--5 days is usually sufficient. For large corporate events, galas, or events requiring multilingual staff or specific briefing, 1--2 weeks is better. During Bali peak season (July--August, Christmas--New Year), book as early as possible.',
  },
  {
    question: 'Do you provide male hosts as well as female hostesses?',
    answer:
      'Yes. We can provide both male hosts and female hostesses depending on your preference and event type. Mixed-gender front-of-house teams work well for large events and corporate settings.',
  },
]

const relatedPages = [
  { label: 'Waiter Hire Bali', href: '/in-villa-service/waiters', desc: 'Professional service staff for events' },
  { label: 'Bartender Hire Bali', href: '/in-villa-service/bartenders', desc: 'Event bartenders and mobile bar' },
  { label: 'Event Staff Bali', href: '/in-villa-service', desc: 'Full event staffing solutions' },
  { label: 'Villa Butler Bali', href: '/in-villa-service/butlers', desc: 'Personal butler service for villas' },
  { label: 'Corporate Events Catering', href: '/blog/corporate-events-catering-bali-team-dining', desc: 'Corporate dining and events in Bali' },
  { label: 'Event Planning Bali', href: '/events', desc: 'Full event management in Bali' },
]

export default function HostessHireBaliPage() {
  return (
    <PremiumPage
      slug="blog/hostess-hire-bali"
      title="Hostess Hire Bali -- Professional Event Host and Greeter Service | myCHEF"
      seoTitle="Hostess Hire Bali -- Event Hostess & Greeter Service | myCHEF"
      description="Professional hostess and host hire for events in Bali. Corporate dinners, brand activations, villa parties, and VIP gatherings."
      seoDescription="Hire a professional hostess in Bali for corporate events, villa parties, brand activations and VIP gatherings. English-fluent, luxury-trained."
      h1="Event Hostess Hire in Bali — A Practical Guide"
      subtitle="The first impression of any event is shaped by who guests meet at the door."
      heroImage="/images/blog/hostess-hire-bali.jpg"
      heroImageAlt="Professional Indonesian event hostess welcoming guests at a luxury villa event in Bali"
      ogImage="/images/blog/hostess-hire-bali.jpg"
      canonicalUrl="https://mychef.id/blog/hostess-hire-bali"
      keywords={[
        'hostess hire bali',
        'event hostess bali',
        'greeter hire bali',
        'event host bali',
        'welcome staff bali',
        'vip host bali',
        'professional hostess bali',
        'event staff bali',
        'corporate hostess bali',
        'hospitality staff bali',
      ]}
      highlights={['English-Fluent Staff', 'Luxury Hospitality Trained', 'Event Briefing Included', 'All Event Types']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book Hostess Staff"
      ctaSubtext="Tell us your event date, venue, guest count, and any specific requirements -- we will confirm staff availability and a brief."
      extraJsonLd={[
        breadcrumbSchema('Hostess Hire Bali', 'https://mychef.id/blog/hostess-hire-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Hostess Hire in Bali -- Professional Event Host and Greeter Service',
          description: 'Professional hostess and host hire for events in Bali. Corporate dinners, brand activations, villa parties, and VIP gatherings.',
          url: 'https://mychef.id/blog/hostess-hire-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/hostess-hire-bali.jpg',
        },
      ]}
    />
  )
}
