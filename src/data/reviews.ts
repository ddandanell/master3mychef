// Shared review data used by ReviewsPage.tsx and the prerender meta injector.
// Keep this file free of React imports so it can be imported by Node scripts.

export interface Review {
  name: string
  location: string
  date: string
  eventType: string
  category: 'Weddings' | 'Private Dinners' | 'Catering' | 'Retreats'
  review: string
  rating: number
}

export const REVIEWS: Review[] = [
  {
    name: 'Olivia · Seminyak',
    location: 'Seminyak villa',
    date: 'February 2026',
    eventType: 'Private dinner for 8',
    category: 'Private Dinners',
    review:
      'We booked myCHEF for our first night in Bali and it set the tone for the whole trip. Chef Bayu adjusted the menu for our gluten-free guest without making it feel like a compromise. The snapper, sambal and the way they left the kitchen spotless felt unbelievably polished.',
    rating: 5,
  },
  {
    name: 'Harper · Uluwatu',
    location: 'Clifftop villa in Uluwatu',
    date: 'January 2026',
    eventType: 'Wedding dinner for 42',
    category: 'Weddings',
    review:
      'We needed a wedding team that could handle sunset timing, dietary notes and a very small villa kitchen. myCHEF made it look effortless. Dinner landed exactly on schedule, the waiters were warm and calm, and our parents are still talking about the lamb and truffle jus.',
    rating: 5,
  },
  {
    name: 'Noah · Canggu',
    location: 'Canggu birthday villa',
    date: 'March 2026',
    eventType: 'Birthday BBQ for 18',
    category: 'Catering',
    review:
      'This was supposed to be a relaxed birthday lunch and it ended up feeling like a private resort event. The grazing starters disappeared in minutes, the seafood grill was excellent and the bartender kept everything moving without ever being intrusive. Zero stress for the host.',
    rating: 5,
  },
  {
    name: 'Isla · Ubud',
    location: 'Retreat venue in Ubud',
    date: 'December 2025',
    eventType: 'Wellness retreat for 26',
    category: 'Retreats',
    review:
      'Our retreat group had vegan, high-protein and no-dairy requests all at the same table. Every meal still felt abundant and beautiful. Adriano’s team understood exactly how to keep food nourishing without making it boring, which is rare even at dedicated retreat venues.',
    rating: 5,
  },
  {
    name: 'Theo · Nusa Dua',
    location: 'Nusa Dua family villa',
    date: 'November 2025',
    eventType: 'Villa dinner for 12',
    category: 'Private Dinners',
    review:
      'We had grandparents, toddlers and two very fussy eaters, so I expected some friction. Instead the chef paced the courses perfectly, made a separate kids pasta on request and still delivered a dinner that felt elegant for the adults. It was the easiest “special occasion” we have ever hosted.',
    rating: 5,
  },
  {
    name: 'Mila · Jimbaran',
    location: 'Jimbaran garden villa',
    date: 'October 2025',
    eventType: 'Wedding welcome party for 65',
    category: 'Weddings',
    review:
      'The welcome party was where we actually got to relax because myCHEF handled everything. They coordinated service, cleared glasses quickly and kept the buffet looking fresh all night. Guests thought we had hired a full hotel team, which says everything.',
    rating: 5,
  },
  {
    name: 'Ethan · Berawa',
    location: 'Berawa corporate offsite',
    date: 'September 2025',
    eventType: 'Corporate catering for 35',
    category: 'Catering',
    review:
      'We booked breakfast, lunch and an evening canape service for our company offsite. Menus changed every day, portions were generous and the communication on timing was excellent. For Bali operations, reliability matters as much as flavor, and they delivered both.',
    rating: 5,
  },
  {
    name: 'Sofia · Tabanan',
    location: 'Tabanan retreat estate',
    date: 'August 2025',
    eventType: 'Yoga retreat closing dinner',
    category: 'Retreats',
    review:
      'The closing dinner felt like the emotional finale our retreat needed. Long table, candlelight, beautifully plated food and a service team that read the room perfectly. Guests asked for the WhatsApp number before dessert was finished.',
    rating: 5,
  },
  {
    name: 'James · Sanur',
    location: 'Sanur beachside villa',
    date: 'July 2025',
    eventType: 'Anniversary dinner for 2',
    category: 'Private Dinners',
    review:
      'My wife had no idea what was planned and I was terrified of getting it wrong. The team set up the table by the pool, built a four-course menu around her favourite flavours and had a small dessert waiting with a card. She cried in the best way. I could not have pulled this off without them.',
    rating: 5,
  },
  {
    name: 'Charlotte · Pererenan',
    location: 'Pererenan villa',
    date: 'June 2025',
    eventType: 'Baby shower for 20',
    category: 'Catering',
    review:
      'We had a mixed group of Australian and Indonesian families and I was worried about satisfying everyone. The catering team put together a menu that bridged both perfectly — Indonesian bites alongside very good mezze and fresh salads. The grazing spread looked beautiful and everything disappeared fast.',
    rating: 5,
  },
  {
    name: 'William · Ubud',
    location: 'Jungle villa, Ubud',
    date: 'May 2025',
    eventType: 'Corporate retreat for 14',
    category: 'Retreats',
    review:
      'Our leadership offsite needed meals that energised rather than slowed the group down. The chef built every meal around clean proteins, seasonal vegetables, and enough carbohydrate for a full day of workshops. No heavy afternoon crashes. The team were invisible when they needed to be and attentive when we needed refreshes.',
    rating: 5,
  },
  {
    name: 'Amelia · Canggu',
    location: 'Canggu pool villa',
    date: 'April 2025',
    eventType: 'Private dining for 6',
    category: 'Private Dinners',
    review:
      'We have stayed in Canggu multiple times and this was genuinely the best meal of any trip. The pasta was handmade, the branzino was perfectly cooked, and the chef worked around two coeliacs and a nut allergy without reducing the ambition of the menu at all. We booked again before we left.',
    rating: 5,
  },
  {
    name: 'Lucas · Seminyak',
    location: 'Seminyak private villa',
    date: 'March 2025',
    eventType: 'Villa wedding for 80',
    category: 'Weddings',
    review:
      'Our wedding had 80 guests across multiple nationalities. myCHEF handled welcome canapés, a four-course plated dinner and a late-night grazing station without a single moment of visible chaos. The floor team was polished, the kitchen stayed calm, and every single guest commented on the food. That is all I can ask for.',
    rating: 5,
  },
]

const MONTH_INDEX: Record<string, string> = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
}

export function toIsoDate(date: string): string {
  const match = date.match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (!match) return date
  const [, month, year] = match
  const monthNum = MONTH_INDEX[month]
  return monthNum ? `${year}-${monthNum}-01` : date
}
