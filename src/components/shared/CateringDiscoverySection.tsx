import StrategicLinksSection, { type StrategicLinkCard } from './StrategicLinksSection'

type CateringDiscoveryKey =
  | 'bbq'
  | 'buffet'
  | 'villa'
  | 'corporate'
  | 'retreat'
  | 'plated'
  | 'floatingBreakfast'
  | 'babiGuling'
  | 'dropOff'
  | 'grazing'

const CATERING_DISCOVERY_CONTENT: Record<
  CateringDiscoveryKey,
  { title: string; description: string; cards: StrategicLinkCard[] }
> = {
  bbq: {
    title: 'Plan the right Bali villa BBQ route',
    description: 'Use these links to compare where BBQ catering works best, what to book for group stays, and how to move straight into a quote.',
    cards: [
      {
        eyebrow: 'Seminyak',
        title: 'BBQ catering in Seminyak villas',
        description: 'See how myCHEF handles poolside grilling, access timing, and polished service in Seminyak.',
        href: '/locations/seminyak',
      },
      {
        eyebrow: 'Uluwatu',
        title: 'Sunset BBQ catering in Uluwatu',
        description: 'Best for clifftop villas where live-fire timing and wind-ready setup matter.',
        href: '/locations/uluwatu',
      },
      {
        eyebrow: 'Related service',
        title: 'Villa catering for multi-day stays',
        description: 'Compare BBQ night bookings with broader breakfast, lunch, and dinner villa coverage.',
        href: '/catering/villa-catering',
      },
      {
        eyebrow: 'Booking',
        title: 'Book a Bali villa BBQ quote',
        description: 'Send your guest count, villa area, and date to move from browsing into a confirmed plan.',
        href: '/book',
      },
    ],
  },
  buffet: {
    title: 'Compare buffet catering by Bali location',
    description: 'These internal links help guests jump from buffet planning into the villa areas, formal service formats, and booking page that fit the event.',
    cards: [
      {
        eyebrow: 'Seminyak',
        title: 'Buffet catering in Seminyak',
        description: 'Useful for villa welcome dinners, birthdays, and wedding weekends in high-access south Bali.',
        href: '/locations/seminyak',
      },
      {
        eyebrow: 'Ubud',
        title: 'Group buffet catering in Ubud',
        description: 'Explore buffet logistics for retreats, larger compounds, and jungle venues around Ubud.',
        href: '/locations/ubud',
      },
      {
        eyebrow: 'Related service',
        title: 'Plated catering for formal dinners',
        description: 'Compare buffet flow with seated plated service when you need a more structured event format.',
        href: '/catering/plated-catering',
      },
      {
        eyebrow: 'Contact',
        title: 'Talk to the catering team',
        description: 'Use our contact page if you want help choosing between buffet, plated, or mixed-format service.',
        href: '/contact',
      },
    ],
  },
  villa: {
    title: 'See where villa catering books fastest',
    description: 'Jump from this service page into the Bali areas and related formats guests most often compare before confirming a villa catering booking.',
    cards: [
      {
        eyebrow: 'Seminyak',
        title: 'Villa catering in Seminyak',
        description: 'Great for polished family lunches, arrival dinners, and birthday meals in compact luxury villas.',
        href: '/locations/seminyak',
      },
      {
        eyebrow: 'Canggu',
        title: 'Villa catering in Canggu',
        description: 'Useful for surf groups, longer stays, and relaxed shared menus in open-plan villas.',
        href: '/locations/canggu',
      },
      {
        eyebrow: 'Related service',
        title: 'Private chef fine dining for special nights',
        description: 'Pair your broader villa meal plan with one standout fine-dining dinner during the stay.',
        href: '/fine-dining',
      },
      {
        eyebrow: 'Booking',
        title: 'Book villa catering in Bali',
        description: 'Move straight to a quote once you know your dates, area, and preferred meal coverage.',
        href: '/book',
      },
    ],
  },
  corporate: {
    title: 'Match corporate catering to the right Bali zone',
    description: 'These routes help planners compare executive dinner locations, related service formats, and the fastest way to contact myCHEF for a proposal.',
    cards: [
      {
        eyebrow: 'Nusa Dua',
        title: 'Corporate catering in Nusa Dua',
        description: 'Best for resort villas, board dinners, and secure-estate planning with longer lead times.',
        href: '/locations/nusa-dua',
      },
      {
        eyebrow: 'Denpasar',
        title: 'Corporate dining in Denpasar',
        description: 'A strong fit for central Bali meetings, office lunches, and faster weekday deployments.',
        href: '/locations/denpasar',
      },
      {
        eyebrow: 'Related service',
        title: 'Private chef dinners for executives',
        description: 'Compare larger corporate catering with chef-led board dinners and smaller hosted evenings.',
        href: '/fine-dining',
      },
      {
        eyebrow: 'Contact',
        title: 'Request a corporate catering proposal',
        description: 'Contact the team if you need invoicing, timing help, or menu guidance before booking.',
        href: '/contact',
      },
    ],
  },
  retreat: {
    title: 'Plan retreat catering around the right Bali base',
    description: 'Use these links to compare retreat-heavy locations, supporting services, and the booking path for multi-day meal plans.',
    cards: [
      {
        eyebrow: 'Ubud',
        title: 'Retreat catering in Ubud',
        description: 'Explore how myCHEF handles jungle logistics, yoga schedules, and multi-day wellness menus.',
        href: '/locations/ubud',
      },
      {
        eyebrow: 'Canggu',
        title: 'Retreat meals for Canggu villas',
        description: 'Useful for creative offsites, surf retreats, and shared villas closer to south Bali transport routes.',
        href: '/locations/canggu',
      },
      {
        eyebrow: 'Related service',
        title: 'Villa catering for daily chef coverage',
        description: 'Compare retreat plans with flexible breakfast, lunch, and dinner coverage for villa stays.',
        href: '/catering/villa-catering',
      },
      {
        eyebrow: 'Booking',
        title: 'Book a Bali retreat catering quote',
        description: 'Share your schedule, dietary profile, and headcount to move into planning with the myCHEF team.',
        href: '/book',
      },
    ],
  },
  plated: {
    title: 'Connect plated catering to the next planning step',
    description: 'These pages help hosts compare formal dinner locations, fine-dining alternatives, and the fastest route into a quote or conversation.',
    cards: [
      {
        eyebrow: 'Seminyak',
        title: 'Plated catering in Seminyak villas',
        description: 'Ideal for elegant celebration dinners where access, pacing, and polished service all matter.',
        href: '/locations/seminyak',
      },
      {
        eyebrow: 'Jimbaran',
        title: 'Formal villa dinners in Jimbaran',
        description: 'A useful route for bayfront dinners, seafood-led service, and sunset-facing villa celebrations.',
        href: '/locations/jimbaran',
      },
      {
        eyebrow: 'Related service',
        title: 'Private chef fine dining in Bali',
        description: 'Compare plated catering with a more intimate chef-led tasting menu when guest counts are smaller.',
        href: '/fine-dining',
      },
      {
        eyebrow: 'Contact',
        title: 'Speak to myCHEF about plated service',
        description: 'Contact us if you want help choosing between plated catering, fine dining, or mixed-format hosting.',
        href: '/contact',
      },
    ],
  },
  floatingBreakfast: {
    title: 'Turn floating breakfast interest into a full villa plan',
    description: 'These links help guests move from one signature breakfast into the right Bali area page, related villa services, and booking flow.',
    cards: [
      {
        eyebrow: 'Seminyak',
        title: 'Floating breakfasts in Seminyak villas',
        description: 'See how morning chef service fits high-demand villa areas with shorter west-coast travel.',
        href: '/locations/seminyak',
      },
      {
        eyebrow: 'Ubud',
        title: 'Private chef breakfasts in Ubud',
        description: 'Useful for honeymoon stays, wellness villas, and slower morning schedules in the jungle.',
        href: '/locations/ubud',
      },
      {
        eyebrow: 'Related service',
        title: 'Villa catering for all-day stays',
        description: 'Extend one breakfast booking into lunch, dinner, or full-day chef coverage for the villa.',
        href: '/catering/villa-catering',
      },
      {
        eyebrow: 'Booking',
        title: 'Book a floating breakfast in Bali',
        description: 'Move into booking once you know your pool setup, dates, and whether you want add-ons.',
        href: '/book',
      },
    ],
  },
  babiGuling: {
    title: 'Use these routes to plan a Balinese feast properly',
    description: 'Hosts comparing babi guling usually also need the right villa area, event format, and direct contact path before they confirm.',
    cards: [
      {
        eyebrow: 'Ubud',
        title: 'Balinese feasts in Ubud villas',
        description: 'A natural fit for ceremonial meals, larger compounds, and guests who want a stronger sense of place.',
        href: '/locations/ubud',
      },
      {
        eyebrow: 'Canggu',
        title: 'Group catering in Canggu villas',
        description: 'Useful if you are planning a bigger shared feast in a west-coast villa with easier guest access.',
        href: '/locations/canggu',
      },
      {
        eyebrow: 'Related service',
        title: 'Events and celebrations in Bali villas',
        description: 'Compare babi guling with broader celebration formats for birthdays, villa parties, and wedding weekends.',
        href: '/events',
      },
      {
        eyebrow: 'Contact',
        title: 'Ask myCHEF about traditional catering',
        description: 'Contact the team if you need guidance on headcount, halal guests, or full-event planning.',
        href: '/contact',
      },
    ],
  },
  dropOff: {
    title: 'Compare drop-off catering with villa-based alternatives',
    description: 'These internal links help guests decide when delivery-only food works, when villa service adds more value, and where to book next.',
    cards: [
      {
        eyebrow: 'Seminyak',
        title: 'Drop-off catering in Seminyak',
        description: 'Good for arrival nights, compact villas, and groups who want easy food without staff staying on site.',
        href: '/locations/seminyak',
      },
      {
        eyebrow: 'Canggu',
        title: 'Delivered villa meals in Canggu',
        description: 'Useful for surf groups and long-stay villas that need reliable lunch or dinner without full service.',
        href: '/locations/canggu',
      },
      {
        eyebrow: 'Related service',
        title: 'Full villa catering with staff included',
        description: 'Compare delivery-only menus with on-site chef service when you want setup, pacing, and cleanup handled.',
        href: '/catering/villa-catering',
      },
      {
        eyebrow: 'Booking',
        title: 'Book Bali drop-off catering',
        description: 'Use the booking page when you are ready to confirm numbers, timing, and delivery area.',
        href: '/book',
      },
    ],
  },
  grazing: {
    title: 'Plan a grazing table with the right supporting pages',
    description: 'Guests exploring grazing tables often need location guidance, event context, and a direct way to book or ask questions.',
    cards: [
      {
        eyebrow: 'Seminyak',
        title: 'Grazing tables in Seminyak villas',
        description: 'Great for welcome drinks, birthdays, and short-format celebrations in south Bali villas.',
        href: '/locations/seminyak',
      },
      {
        eyebrow: 'Pererenan',
        title: 'Styled catering in Pererenan',
        description: 'A strong option for design-led villas where grazing tables need to look as polished as they taste.',
        href: '/locations/pererenan',
      },
      {
        eyebrow: 'Related service',
        title: 'Villa party catering and events',
        description: 'Compare grazing tables with fuller event formats for cocktail receptions and bigger guest flows.',
        href: '/events/villa-parties',
      },
      {
        eyebrow: 'Contact',
        title: 'Talk to myCHEF about grazing setup',
        description: 'Contact us if you need guidance on styling, timing, or pairing grazing tables with other menus.',
        href: '/contact',
      },
    ],
  },
}

export default function CateringDiscoverySection({ page }: { page: CateringDiscoveryKey }) {
  const content = CATERING_DISCOVERY_CONTENT[page]

  return (
    <StrategicLinksSection
      eyebrow="Catering internal links"
      title={content.title}
      description={content.description}
      cards={content.cards}
    />
  )
}
