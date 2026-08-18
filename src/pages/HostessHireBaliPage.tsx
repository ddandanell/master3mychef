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
  { question: 'How much do waiters and bartenders cost in Bali?', answer: 'Waiters and butlers priced on request. Cocktail packages from IDR 500,000++ per guest (min 10). <a href="/in-villa-service">In-villa service</a>.' },
  { question: 'Minimum booking?', answer: 'Hourly roles usually 3-hour minimum; waiter bookings often start at two waiters.' },
  { question: 'Can we hire staff without food?', answer: 'Yes — self-catered or third-party caterer support is normal.' },
  { question: 'What do staff wear?', answer: 'Professional uniforms matched to event formality.' },
  { question: 'Alcohol included?', answer: 'No — BYO or sourced at cost; hire covers the professional.' },
  { question: 'Waiter ratio?', answer: 'About one waiter per 10 guests for formal service.' },
  { question: 'Butler service?', answer: 'Yes — <a href="/in-villa-service/butlers">butlers</a>.' },
  { question: 'Mixology and signature cocktails?', answer: 'Yes — <a href="/in-villa-service/mixology">mixology</a>.' },
  { question: 'Areas covered?', answer: 'Island-wide. <a href="/locations">Locations</a>.' },
  { question: 'Combine with private chef?', answer: 'Yes — most common luxury setup.' },
  { question: 'Vetted staff?', answer: 'Employed/supervised teams with replacement-or-refund cover.' },
  { question: 'How to book staff?', answer: 'WhatsApp date, area, headcount and roles needed.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

const relatedPages = [
  { label: 'Waiter Hire Bali', href: '/in-villa-service/waiters', desc: 'Professional service staff for events' },
  { label: 'Cocktail Packages Bali', href: '/in-villa-service/bartenders', desc: 'Complete cocktail packages and mobile bar' },
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
