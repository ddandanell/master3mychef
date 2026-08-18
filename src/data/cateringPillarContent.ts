export interface CateringStyle {
  image: string
  title: string
  price: string
  description: string
  href: string
  accent: string
  details: string
}

export interface WhatIsCateringSection {
  title: string
  body: string
  link?: { text: string; href: string }
}

export interface CateringByEventType {
  title: string
  style: string
  menu: string
  staffing: string
  experience: string
  href?: string
}

export interface CateringByGuestNumber {
  range: string
  style: string
  kitchen: string
  staffing: string
  menus: string
  notes?: string
}

export interface BookingProcessStep {
  step: string
  title: string
  desc: string
}

export interface BaliLocation {
  area: string
  events: string
  villas: string
  notes: string
  href?: string
}

export interface FoodPhilosophyCard {
  title: string
  body: string
}

export interface MenuStyle {
  title: string
  desc: string
  href?: string
}

export interface OptionalService {
  title: string
  desc: string
  href?: string
}

export interface CateringFAQ {
  q: string
  a: string
}

export const CATERING_STYLES: CateringStyle[] = [
  {
    image: '/generated/mychef-catering-style-bbq.webp',
    title: 'BBQ Catering',
    price: 'From IDR 700,000/person',
    description:
      'BBQ catering is the most social, flexible format for villa dinners, birthday groups, family holidays, and relaxed celebrations in Bali. A myCHEF chef arrives at your villa three hours before service, sets up a live grill by the pool or garden, and cooks meats, seafood, satay, and vegetarian options to order while guests mingle. It works beautifully for 10 to 60 guests, needs only basic outdoor space, and creates a relaxed party atmosphere where people can eat at their own pace. We provide the grill, fuel, utensils, serving platters, napkins, and cleanup crew. Popular upgrades include Wagyu beef, lobster tails, whole fish, and live sate stations. For villa BBQ catering Bali, this is the crowd-pleasing choice that keeps the kitchen out of the house and the energy high.',
    href: '/catering/bbq-catering',
    accent: '#C5A028',
    details: `BBQ Catering Bali works best when you want your guests to relax around a live grill, choose their proteins, and eat at their own pace. Typical guest numbers range from 10 to 60, with 15 to 35 being the most popular villa party size. The dining style is casual and interactive: a myCHEF chef grills to order by the pool or garden while guests help themselves to salads, sambals, and sides. What sets it apart from buffet or plated catering is the theatre of open fire and the freedom for guests to come back for seconds. We bring the grill, fuel, serving equipment, napkins, and a cleanup crew, so the only thing you need is outdoor space and an appetite. For sunset celebrations and birthday groups, <a href="/catering/bbq-catering">BBQ catering in Bali</a> remains the most requested format.`,
  },
  {
    image: '/generated/mychef-catering-style-buffet.webp',
    title: 'Buffet Catering',
    price: 'From IDR 700,000/person',
    description:
      'Buffet catering is the practical, elegant way to feed larger groups at weddings, villa events, corporate dinners, and milestone celebrations. With a minimum of 30 guests, we set up a full buffet line at your venue, keep dishes at the correct temperature in chafing units, and serve guests through a smooth queue so the party never stops. Menus range from Indonesian classics such as nasi kuning, sate lilit, rendang, and gado-gado to international roasts, pasta stations, carved meats, and live cooking counters. Every buffet package includes a head chef, service staff, all equipment, linens, porcelain, glassware, setup, service, and full cleanup. Buffet catering Bali is ideal when you want variety, predictable portions, and a structured flow for 30 to 250 guests.',
    href: '/catering/buffet',
    accent: '#6B8E5A',
    details: `Buffet Catering Bali is designed for hosts who want variety, predictable portions, and smooth service for larger groups. It suits 30 to 250 guests and is the default choice for weddings, corporate events, and milestone birthdays where guests have different tastes. The dining style is self-service from styled chafing dishes and live stations, with service staff assisting the line and clearing plates. Unlike BBQ, the buffet keeps food warm for the full service window and can offer ten or more dishes at once. We provide the head chef, service team, chafing units, linens, porcelain, glassware, and full cleanup. Many clients combine an Indonesian buffet with an international roast station to satisfy every generation. If you are expecting more than thirty guests and want structured flow, <a href="/catering/buffet">buffet catering in Bali</a> is the reliable option.`,
  },
  {
    image: '/generated/mychef-catering-style-plated.webp',
    title: 'Plated Set Menus',
    price: 'From IDR 800,000/person',
    description:
      'Plated set menus turn your villa dinner, anniversary, engagement party, or intimate wedding into a fine-dining experience. Guests remain seated while our chef and service team deliver each course with precise timing, polished presentation, and attentive table service. Choose a 3-course, 4-course, or 5-course menu built around Mediterranean, Italian, French, Japanese, Indonesian, or seafood themes. Plated catering suits 10 to 80 guests and works best when you want a slower, more controlled pace, elegant plating, and a sense of occasion. We supply English-speaking chefs, a service manager, one waiter per ten guests, tables, linens, cutlery, porcelain, glassware, and a kitchen tent if required. For a restaurant feel in your own space, plated service is hard to beat.',
    href: '/catering/plated-catering',
    accent: '#2C5F7C',
    details: `Plated Set Menus bring restaurant-style pacing and presentation to your villa, making them ideal for anniversaries, engagement parties, intimate weddings, and executive dinners. Guest counts typically fall between 10 and 80, with 12 to 40 being the sweet spot for fine-dining pacing. Guests remain seated while our team serves a 3-, 4-, or 5-course menu with precise timing, polished plating, and attentive table service. The difference from buffet or BBQ is the sense of occasion: every course is composed, wine-friendly, and served in rhythm. We supply English-speaking chefs, a service manager, one waiter per ten guests, cutlery, glassware, and a kitchen tent if needed. Where atmosphere matters as much as flavour, explore our <a href="/catering/plated-catering">plated catering</a> options.`,
  },
  {
    image: '/generated/mychef-catering-style-dropoff.webp',
    title: 'Drop-Off Catering',
    price: 'From IDR 700,000/person',
    description:
      "Drop-off catering is designed for villa guests who want restaurant-quality food without any staff staying in the property. We prepare your menu in our commissary kitchen, pack it in recyclable containers with clear reheating instructions, and deliver it within a 90-minute window so you can serve yourself when it suits you. This option suits 4 to 16 guests for family dinners, small celebrations, honeymoon meals, or relaxed nights when the group wants privacy. Choose from family dinner drop-off, dinner party drop-off, or grazing dinner drop-off with charcuterie, cheese, hot mains, sides, and dessert. Drop-off catering Bali is also popular with guests who want to plate the food themselves and create a private, intimate atmosphere without the cost of full service.",
    href: '/catering/drop-off-catering',
    accent: '#8B5A2B',
    details: `Drop-Off Catering Bali is built around privacy and convenience. Instead of a team staying in your villa, we prepare everything in our commissary, pack it in recyclable containers with reheating instructions, and deliver within a 90-minute window. This format suits 4 to 16 guests for family dinners, small celebrations, honeymoon meals, or relaxed evenings when the group wants the space to itself. The dining style is serve-yourself: heat, plate, and eat whenever you like. What makes it different from full-service catering is the lower cost and complete absence of staff. Choose from family dinner drop-off, dinner party drop-off, or grazing dinner drop-off with charcuterie, cheese, hot mains, sides, and dessert. If you want great food without the ceremony, <a href="/catering/drop-off-catering">drop-off catering in Bali</a> is the answer.`,
  },
  {
    image: '/generated/mychef-catering-style-villa.webp',
    title: 'Villa Catering',
    price: 'From IDR 700,000/person',
    description:
      'Villa catering is our core service: a professional chef and service team come to your Bali villa to prepare and serve lunch, dinner, or a multi-day dining program. Whether you are hosting a casual poolside lunch, a formal anniversary dinner, or a week of meals for an extended family, villa catering Bali adapts to your kitchen, your schedule, and your guest count. We handle grocery shopping, menu planning, dietary restrictions, equipment, table setup, service, and cleanup, so you never have to think about where to eat. It is the perfect middle ground between restaurant dining and a full-time private chef: restaurant-quality food, but served in your own space, on your own timeline, with no transport or tipping complications.',
    href: '/catering/villa-catering',
    accent: '#2C5F7C',
    details: `Villa Catering Bali is the umbrella service that brings a chef and service team directly to your Bali villa for lunch, dinner, or a multi-day dining program. It works for groups of 4 to 100 and adapts to any occasion, from casual poolside lunches to formal anniversary dinners. The dining style is flexible: we can serve family-style shared plates, plated courses, buffet lines, or BBQ stations depending on your group and villa layout. What distinguishes villa catering from restaurant dining is the total customisation: menus follow your preferences, dietary restrictions, and schedule, and there is no transport, tipping, or closing time to manage. We handle grocery shopping, equipment, table setup, service, and cleanup. For families and groups who want restaurant quality on their own timeline, <a href="/catering/villa-catering">villa catering in Bali</a> is the natural choice.`,
  },
  {
    image: '/generated/mychef-catering-style-corporate.webp',
    title: 'Corporate Catering',
    price: 'From IDR 700,000/person',
    description:
      'Corporate catering Bali supports offsites, board dinners, conference lunches, team-building events, product launches, and seminar catering with menus, staffing, and invoicing designed for business groups. We understand that corporate events need punctuality, dietary flexibility, clear pricing, and tax documentation. Our corporate packages include breakfast spreads, working lunches, buffet dinners, plated board meals, coffee stations, and grazing setups. We can brand the service, provide uniformed staff, and coordinate with your event schedule. Whether you are hosting twenty executives in a Seminyak villa or two hundred delegates at a Ubud conference venue, corporate catering Bali from myCHEF keeps the food professional, the service discreet, and the accounting simple.',
    href: '/catering/corporate-catering',
    accent: '#2C5F7C',
    details: `Corporate Catering Bali is designed for business events where punctuality, dietary flexibility, and clean invoicing matter as much as the food. Typical events range from 10 executives at a Seminyak villa board dinner to 200 delegates at a Ubud conference venue. The dining style is usually buffet, plated board meals, or working-lunch boxes, supported by coffee stations and grazing setups. What sets corporate catering apart from social catering is the structured timeline, uniformed staff, and tax-ready documentation. We can brand the service, coordinate with AV schedules, and provide vegetarian, halal, gluten-free, and low-sugar options without last-minute confusion. For offsites, product launches, seminar lunches, and team-building dinners, <a href="/catering/corporate-catering">corporate catering in Bali</a> keeps the food professional and the accounting simple.`,
  },
  {
    image: '/generated/mychef-catering-style-babi-guling.webp',
    title: 'Babi Guling',
    price: 'From IDR 3,700,000 total',
    description:
      'Babi Guling is the iconic Balinese whole-pig roast, served with lawar, nasi kuning, sate, crackling, sambals, and fresh fruit. It is a dramatic, culturally rich centerpiece for villa parties, birthdays, anniversaries, and group celebrations of 10 to 50 guests. Our team prepares the pig in the traditional style and serves it buffet-style so guests can build their own plates. Babi Guling contains pork and is not suitable for halal groups, but we can provide halal alternatives such as Nasi Campur or Ayam Betutu upon request. If you want an authentic Balinese food experience that guests talk about for years, Babi Guling catering Bali is the unmistakable choice for traditional celebrations.',
    href: '/catering/babi-guling',
    accent: '#C5A028',
    details: `Babi Guling Catering Bali delivers one of the island's most iconic feasts: a whole roasted pig served with lawar, nasi kuning, sate, crackling, sambals, and fresh fruit. It is best suited to celebrations of 10 to 50 guests who want an authentic Balinese cultural centerpiece. The dining style is buffet, with our team carving and serving at a styled station while guests build their own plates. What makes Babi Guling unforgettable is the drama of the whole pig and the depth of traditional flavour; it is the opposite of a generic buffet. Please note that Babi Guling contains pork and is not suitable for halal groups, though we can provide halal alternatives such as Nasi Campur or Ayam Betutu. For birthdays, anniversaries, and traditional gatherings, <a href="/catering/babi-guling">Babi Guling catering in Bali</a> is the conversation starter.`,
  },
  {
    image: '/generated/mychef-catering-style-grazing.webp',
    title: 'Grazing Tables',
    price: 'From IDR 650,000',
    description:
      'Grazing tables and charcuterie platters create an instant visual focal point for weddings, welcome drinks, poolside parties, bridal showers, and villa entertaining. We arrange artisan cheeses, cured meats, marinated vegetables, dips, honeycomb, fresh and dried fruit, nuts, crackers, sourdough, and edible flowers across a styled surface so guests can graze throughout the event. Options range from a mini grazing box for two to wedding-scale spreads for fifty or more. Vegan, vegetarian, and halal-friendly versions are available. Grazing tables Bali work especially well as a pre-dinner starter, a cocktail-hour companion, or a relaxed alternative to a formal sit-down meal when you want guests to mingle freely.',
    href: '/catering/grazing-tables',
    accent: '#6B8E5A',
    details: `Grazing Tables Bali create an immediate visual focal point for welcome drinks, poolside parties, bridal showers, and weddings. They suit 2 to 50+ guests, from a mini grazing box for a couple to a wedding-scale spread. The dining style is continuous and social: guests pick at artisan cheeses, cured meats, marinated vegetables, dips, honeycomb, fruit, nuts, crackers, and sourdough whenever they like. What sets grazing apart is its styling — edible flowers, wooden boards, and height variation turn the table into decor. We offer vegetarian, vegan, and halal-friendly versions. Grazing tables work as a standalone cocktail companion or as a starter before a <a href="/catering/bbq-catering">BBQ</a> or <a href="/catering/plated-catering">plated dinner</a>. For relaxed entertaining with strong visual impact, <a href="/catering/grazing-tables">grazing tables in Bali</a> are hard to beat.`,
  },
  {
    image: '/generated/mychef-catering-style-retreat.webp',
    title: 'Retreat Catering',
    price: 'Custom quote',
    description:
      'Retreat catering Bali is built for yoga retreats, wellness centers, corporate wellness trips, and multi-day group stays where nutrition, consistency, and dietary inclusivity matter. We design plant-forward menus with abundant vegetables, whole grains, lean proteins, fermented foods, and low-sugar options, while still offering indulgent treats for guests who want them. Pricing is typically per person per day and covers breakfast, lunch, dinner, snacks, and drinks across the full retreat. Our team understands retreat rhythms: early breakfasts, light lunches, nourishing dinners, and flexibility for fasting or ayurvedic preferences. We also provide buffet, family-style, or plated service depending on your schedule and group size.',
    href: '/catering/retreat-catering',
    accent: '#6B8E5A',
    details: `Retreat Catering Bali is built for multi-day wellness, yoga, and corporate wellness programs where nutrition, consistency, and dietary inclusivity are priorities. Group sizes range from 8 to 80 guests, often staying for three to seven nights. The dining style is nourishing and flexible: plant-forward buffets, family-style shared plates, or individual bowls, with options for vegan, gluten-free, ayurvedic, and low-sugar diets. What makes retreat catering different from event catering is the rhythm — early breakfasts, light lunches, nourishing dinners, and snacks between sessions. Every retreat is quoted individually based on group size, length and menu. Our chefs understand retreat schedules and can adapt menus around fasting or silent mornings. For yoga retreats and wellness groups anywhere in Bali, <a href="/catering/retreat-catering">retreat catering</a> keeps guests energised.`,
  },
  {
    image: '/generated/mychef-catering-style-floating.webp',
    title: 'Floating Breakfast',
    price: 'From IDR 950,000/couple',
    description:
      "Floating breakfast Bali brings the island's most Instagram-famous dining experience directly to your private villa pool. We prepare a beautifully styled tray loaded with tropical fruit, eggs, pastries, granola, yogurt, Balinese coffee, fresh juice, and flowers, then set it floating in the water for couples, honeymooners, birthday celebrants, or small groups. Packages start for two people and can scale up to group brunches for four to ten guests on larger floating setups. Delivery, styling, and retrieval are all included, and we request 48 hours notice to arrange the freshest flowers and produce. It is a memorable, photo-ready way to start a special day in Bali without leaving your villa.",
    href: '/catering/floating-breakfast',
    accent: '#2C5F7C',
    details: `Floating Breakfast Bali brings the island's most photographed dining experience to your private pool. Designed for 2 to 10 guests, it is perfect for couples, honeymooners, and small celebration brunches. A styled tray loaded with tropical fruit, eggs, pastries, granola, yogurt, Balinese coffee, fresh juice, and flowers is set to float in the water for a photo-ready start to the day. What makes it different from a standard villa breakfast is the styling and setting — the pool becomes your dining table. We include delivery, setup, styling, and retrieval, and request 48 hours notice to source the freshest flowers and produce. Floating breakfasts are available as a standalone treat or as part of a broader <a href="/catering/villa-catering">villa catering</a> program. For birthdays, anniversaries, or honeymoons, <a href="/catering/floating-breakfast">floating breakfast in Bali</a> is unforgettable.`,
  },
]

export const WHAT_IS_CATERING_SECTIONS: WhatIsCateringSection[] = [
  {
    title: 'Catering vs Restaurants',
    body: `When you hire catering in Bali, the restaurant comes to you rather than the other way around. A catering team brings chefs, ingredients, equipment, and service staff to your villa, beach club, or event venue, prepares the meal on site, serves your guests, and cleans up afterwards. The biggest practical difference is control: you choose the menu, the timing, the portion sizes, and the atmosphere. You are not bound by a restaurant's fixed seating, limited menu, or closing time, and you do not have to split a large group across multiple tables or arrange transport. Catering also handles dietary requirements as a core part of the planning process rather than an afterthought. For villa holidays, birthdays, weddings, and corporate events, this matters because the venue is already part of the experience. <a href="/catering/bbq-catering">BBQ catering</a>, <a href="/catering/buffet">buffet catering</a>, and <a href="/catering/plated-catering">plated catering</a> each offer a different balance of formality, interaction, and scale.`,
    link: { text: 'Compare catering styles', href: '/catering' },
  },
  {
    title: 'Private Chef vs Catering',
    body: `A private chef and a catering team both cook in your villa, but the scope and rhythm are different. A private chef is usually assigned to one villa for multiple meals over several days, becoming familiar with your preferences, kitchen, and household routine. Catering, by contrast, is generally event-based: a larger team arrives for a single occasion such as a wedding reception, birthday BBQ, or corporate dinner, then leaves once service is complete. Private chef service is ideal when you want every meal handled during a holiday or extended stay; catering is ideal when you want a polished one-off experience for a larger group. The menus can overlap — both can produce fine-dining tasting menus or casual family meals — but the staffing model changes. Catering brings a dedicated service manager, extra waiters, and event logistics; a private chef is more embedded in the villa. Learn more about <a href="/private-chef-bali">private chef service in Bali</a>.`,
    link: { text: 'Private chef service', href: '/private-chef-bali' },
  },
  {
    title: 'Buffet vs Plated Service',
    body: `Buffet service and plated service represent two different philosophies of event dining. A buffet gives guests choice: multiple dishes are kept at temperature in chafing units, and guests serve themselves or are served by staff at the line. It is efficient for large groups, accommodates diverse tastes, and keeps the party moving. Plated service, on the other hand, is curated: every guest receives the same composed courses in sequence, with precise timing and attentive table service. It creates a more formal, restaurant-like atmosphere and is better suited to seated celebrations, wine pairings, and milestone dinners. Buffets generally work best for 30 or more guests, while plated menus shine for 10 to 80 guests where presentation and pace matter. Many clients choose a hybrid: a grazing table or canapés followed by a <a href="/catering/plated-catering">plated dinner</a>, or a <a href="/catering/buffet">buffet</a> for the main course with plated desserts.`,
    link: { text: 'Buffet catering', href: '/catering/buffet' },
  },
  {
    title: 'Drop-Off vs Full-Service',
    body: `Drop-off catering delivers prepared food to your villa without on-site staff; full-service catering sends a complete team to cook, serve, and clean. Drop-off is perfect when you want privacy, flexibility, and a lower price point for 4 to 16 guests. You reheat and plate the food on your own schedule, which suits honeymooners, small families, or relaxed nights in. Full-service villa catering includes a chef, service staff, equipment, tableware, setup, and cleanup, making it ideal for celebrations where you want to be a guest at your own party. The cost difference reflects labour, equipment transport, and real-time service. If you are happy to handle the final presentation, <a href="/catering/drop-off-catering">drop-off catering</a> is a smart choice. If you want a seamless event with no washing up, <a href="/catering/villa-catering">full-service villa catering</a> is the better fit.`,
    link: { text: 'Browse drop-off menus', href: '/catering/drop-off-catering' },
  },
]

export const CATERING_BY_EVENT_TYPES: CateringByEventType[] = [
  {
    title: 'Birthdays',
    style: 'BBQ or buffet with grazing starter',
    menu: 'Live grill station, Indonesian and international salads, satay, dessert table',
    staffing: 'Chef, 2–4 waiters, cleanup crew',
    experience: `Birthday catering Bali is all about energy and flexibility. A <a href="/catering/bbq-catering">villa BBQ</a> keeps the group social while the chef grills to order, and a grazing table gives early arrivals something beautiful to pick at. We can theme the menu to the guest of honour, add a custom cake, and adjust spice levels for children. Most birthday groups fall between 10 and 40 guests, and the format scales easily from a small family dinner to a lively pool party. Whether you want a casual afternoon by the pool or a seated dinner with friends, our team handles setup, service, and cleanup so the host can enjoy the celebration.`,
    href: '/catering/bbq-catering',
  },
  {
    title: 'Weddings',
    style: 'Buffet or plated reception',
    menu: 'Canapés, 3-course plated or international buffet, wedding cake, late-night snacks',
    staffing: 'Head chef, service manager, waiters 1:10, bar staff optional',
    experience: `Wedding catering Bali needs to feel effortless even when the guest list is large. We handle welcome drinks, reception canapés, the main meal, and late-night snacks, with service timelines matched to speeches and dancing. Whether you choose a seated plated menu or a flowing buffet, the team stays discreet and professional so the couple can enjoy the evening. From rehearsal dinners to post-wedding brunches, we work with villas and planners across Bali to deliver food that matches the tone of your day.`,
    href: '/events/weddings',
  },
  {
    title: 'Corporate Events',
    style: 'International buffet or plated board dinner',
    menu: 'Working lunch boxes, coffee station, buffet dinner, dietary options',
    staffing: 'Chef, uniformed waiters, event coordinator',
    experience: `Corporate event catering Bali is built around schedules and dietary diversity. We provide branded buffet lines, plated board dinners, coffee stations, and tax-ready invoices. The service is punctual, the staff are uniformed, and the menus include vegetarian, halal, and gluten-free options so every delegate is covered. Whether you are feeding a seminar room or hosting an executive dinner, we align the food service with your agenda.`,
    href: '/events/corporate-events',
  },
  {
    title: 'Retreats',
    style: 'Plant-forward buffet or family-style',
    menu: 'Healthy breakfast, light lunch, nourishing dinner, snacks, smoothies',
    staffing: 'Retreat chef, service team, dietary specialist',
    experience: `Retreat catering Bali is designed for multi-day wellness programs where food supports the schedule. Menus are plant-forward, low-sugar, and rich in fresh vegetables, with flexibility for vegan, gluten-free, and ayurvedic preferences. Every retreat is quoted individually based on group size, length and menu. Our chefs understand retreat rhythms and can adapt menus around fasting or silent mornings, making us a trusted partner for yoga and wellness retreats.`,
    href: '/catering/retreat-catering',
  },
  {
    title: 'Luxury Villa Holidays',
    style: 'Daily villa chef or villa catering',
    menu: 'Multi-day rotating menus: breakfast, lunch, dinner, BBQ night',
    staffing: 'Private chef, host, waiters as needed',
    experience: `Luxury villa catering Bali turns a holiday rental into a private restaurant. A dedicated chef handles grocery shopping, menu planning, and cleanup across your stay, so you never have to decide where to eat. We can mix family-style lunches, plated dinners, and a poolside BBQ night for variety. This is the most relaxed way to experience Bali — restaurant-quality food served in your own space, on your own timeline, with no transport or tipping complications.`,
    href: '/catering/villa-catering',
  },
  {
    title: 'Family Gatherings',
    style: 'Family-style villa catering or BBQ',
    menu: 'Shared salads, grilled proteins, kid-friendly options, fresh fruit',
    staffing: 'Chef, 1–2 waiters, cleanup',
    experience: `Family gathering catering Bali needs to satisfy grandparents, teenagers, and picky eaters at the same table. We serve generous shared platters, mild options for children, and more adventurous dishes for adults. The atmosphere is relaxed, the portions are plentiful, and the team handles all the washing up. From reunion lunches to multi-generational holiday dinners, villa catering keeps everyone comfortable.`,
    href: '/catering/villa-catering',
  },
  {
    title: 'Christmas',
    style: 'Festive buffet or plated dinner',
    menu: 'Roast turkey or beef, glazed ham, seasonal sides, mince pies, dessert',
    staffing: 'Head chef, carver, waiters, cleanup',
    experience: `Christmas catering Bali gives families the traditional flavours of home without anyone spending the day in the kitchen. We roast turkey or beef, prepare glazed ham, seasonal vegetables, and festive desserts, and serve them buffet or plated depending on your group size. The team arrives early, sets the table, and cleans up so you can open presents by the pool. It is a popular choice for villa holidays when the whole family wants to relax together.`,
    href: '/catering/buffet',
  },
  {
    title: "New Year's Eve",
    style: 'Grazing tables and live stations',
    menu: 'Canapés, seafood bar, BBQ, countdown dessert, champagne service',
    staffing: 'Chef team, bartenders, waiters, event host',
    experience: `New Year's Eve catering Bali is designed to keep energy high until midnight. Grazing tables, live BBQ stations, and a seafood bar give guests variety, while bartenders handle champagne service for the countdown. We plan service around music, speeches, and fireworks so food never interrupts the party. From intimate villa gatherings to large celebrations, the format is flexible and celebratory.`,
    href: '/catering/grazing-tables',
  },
  {
    title: 'Baby Showers',
    style: 'Brunch buffet or high tea',
    menu: 'Finger sandwiches, salads, quiche, scones, fruit, mocktails',
    staffing: 'Chef, 1–2 waiters, styling assistant',
    experience: `Baby shower catering Bali is light, pretty, and easy to eat while mingling. We create brunch buffets or high-tea setups with finger sandwiches, salads, scones, and colourful mocktails. The styling is photo-ready, and the menu can be kept pregnancy-friendly with gentle spices and fresh ingredients. Small groups of 10 to 30 guests work best for this format.`,
    href: '/catering/buffet',
  },
  {
    title: 'Bridal Showers',
    style: 'Grazing table and prosecco brunch',
    menu: 'Charcuterie, cheeses, fresh fruit, pastries, sparkling wine cocktails',
    staffing: 'Chef, waiter, bartender',
    experience: `Bridal shower catering Bali calls for elegance and shareability. A styled grazing table loaded with cheeses, cured meats, fresh fruit, and pastries becomes both centrepiece and menu. Add a bartender for prosecco or signature mocktails, and the afternoon feels effortlessly celebratory. This format suits 10 to 40 guests and works indoors or by the pool.`,
    href: '/catering/grazing-tables',
  },
  {
    title: 'Anniversaries',
    style: 'Plated fine-dining menu',
    menu: 'Amuse-bouche, starter, fish, meat, dessert, wine pairing',
    staffing: 'Private chef, sommelier, waiter',
    experience: `Anniversary catering Bali is about intimacy and occasion. A plated multi-course menu served by a private chef and waiter lets you focus on each other while we handle every detail. Wine pairings, candlelight, and personalised desserts turn a villa dinner into a milestone celebration. It is perfect for couples celebrating at a private villa away from restaurant crowds.`,
    href: '/catering/plated-catering',
  },
  {
    title: 'Engagement Parties',
    style: 'BBQ or cocktail catering with canapés',
    menu: 'Grilled seafood, satay, sliders, canapés, dessert',
    staffing: 'Chef, waiters, bartender',
    experience: `Engagement party catering Bali balances celebration with conversation. A live BBQ or canapé reception keeps guests moving and mingling, while the menu mixes Indonesian satay with international bites. We can scale from 15 friends on a terrace to 60 guests around the pool. The atmosphere is social, the food is generous, and the setup is designed for photographs.`,
    href: '/catering/bbq-catering',
  },
  {
    title: 'Networking Events',
    style: 'Standing cocktail menu with grazing stations',
    menu: 'Canapés, grazing table, wine and beer, barista coffee',
    staffing: 'Chef, waiters, bartenders',
    experience: `Networking event catering Bali needs food that can be eaten while standing and talking. Grazing stations, circulating canapés, and a coffee bar keep the conversation flowing. We time refills so the stations always look abundant, and the staff remain discreet during presentations. This format is ideal for 20 to 80 guests in a villa or coworking venue.`,
    href: '/catering/corporate-catering',
  },
  {
    title: 'Product Launches',
    style: 'Branded buffet or live station',
    menu: 'Themed stations, signature bites, branded dessert, bar',
    staffing: 'Head chef, station chefs, waiters, bar team',
    experience: `Product launch catering Bali should feel as polished as the brand being launched. We design themed stations, signature bites, and branded desserts that reinforce your message. Service is timed around speeches and demos, and the team is briefed to represent your company professionally. From tech launches to fashion previews, the food becomes part of the story.`,
    href: '/catering/corporate-catering',
  },
  {
    title: 'Seminars',
    style: 'Working lunch buffet or boxed lunches',
    menu: 'Sandwich platters, salads, hot mains, coffee break, fruit',
    staffing: 'Chef, service team, coffee station attendant',
    experience: `Seminar catering Bali keeps delegates fed without slowing the program. Working lunch buffets or boxed meals are served quickly during breaks, and a coffee station runs throughout the day. Menus avoid heavy dishes that cause afternoon slumps and include vegetarian and gluten-free options. This practical approach suits corporate training, association meetings, and educational retreats.`,
    href: '/catering/corporate-catering',
  },
  {
    title: 'Training Events',
    style: 'Energising buffet or BBQ lunch',
    menu: 'Balanced proteins, salads, carbs, hydration station, snacks',
    staffing: 'Chef, waiters, setup crew',
    experience: `Training event catering Bali focuses on sustained energy. We serve balanced proteins, fresh salads, and complex carbohydrates, plus a hydration station with infused water and fresh juice. A casual BBQ lunch can also break up an intensive day and give teams a chance to bond outdoors. The menu is designed to prevent the post-lunch crash that ruins afternoon sessions.`,
    href: '/catering/corporate-catering',
  },
]

export const CATERING_BY_GUEST_NUMBERS: CateringByGuestNumber[] = [
  {
    range: '2–4',
    style: 'Private chef dinner or drop-off',
    kitchen: 'Basic villa kitchen or commissary prep',
    staffing: 'One chef, optional waiter',
    menus: '3-course tasting, family dinner drop-off, grazing box',
    notes: `For 2 to 4 guests, intimacy is the priority. A <a href="/catering/drop-off-catering">drop-off dinner</a> lets you plate and eat privately, while a private chef dinner turns the evening into a fine-dining experience with table service. Both options work in almost any villa kitchen.`,
  },
  {
    range: '5–10',
    style: 'BBQ or plated set menu',
    kitchen: 'Outdoor grill plus villa kitchen',
    staffing: 'Chef + 1–2 waiters',
    menus: 'Indonesian BBQ, 3-course plated, family-style shared plates',
    notes: `Five to ten guests is the sweet spot for a <a href="/catering/bbq-catering">villa BBQ</a> or a seated plated menu. The group is small enough for conversation but large enough to justify live cooking. We bring the grill and serving equipment, and one waiter is usually enough.`,
  },
  {
    range: '10–20',
    style: 'BBQ, plated, or grazing starter + BBQ',
    kitchen: 'Grill and prep tables in garden',
    staffing: 'Chef, 2 waiters, cleanup',
    menus: 'International BBQ, 4-course plated, grazing table',
    notes: `Ten to twenty guests gives you the full range of formats. A grazing table on arrival followed by a BBQ creates a party atmosphere, while a plated menu keeps things refined. We add a second waiter to maintain smooth service.`,
  },
  {
    range: '20–50',
    style: 'BBQ, buffet, or plated dinner',
    kitchen: 'Mobile kitchen tent and grill',
    staffing: 'Chef, 3–5 waiters, service manager',
    menus: 'Live-station buffet, surf & turf BBQ, family-style',
    notes: `Twenty to fifty guests is where buffet and live-station formats start to shine. We set up a mobile kitchen in your garden, manage guest flow, and bring enough staff so no one waits long for food. This range suits birthdays, weddings, and corporate groups.`,
  },
  {
    range: '50–100',
    style: 'Buffet or live-station catering',
    kitchen: 'Full mobile kitchen with multiple chafing units',
    staffing: 'Head chef, sous chef, 6–10 waiters, event coordinator',
    menus: 'International buffet, Indonesian buffet, carving station',
    notes: `Fifty to one hundred guests requires structured service and a dedicated event coordinator. Multiple buffet lines or live stations prevent queues, and a larger front-of-house team keeps tables cleared and drinks topped up.`,
  },
  {
    range: '100–250',
    style: 'Large-format buffet with live stations',
    kitchen: 'Full event kitchen and prep area',
    staffing: 'Head chef, station chefs, 12–20 service staff, bar team',
    menus: 'Multi-station buffet, themed cuisines, dessert bar',
    notes: `One hundred to two hundred and fifty guests is large-event territory. We design multiple food stations, assign a brigade of chefs, and coordinate timing with your run sheet. Advance planning and a site visit ensure the kitchen can handle the volume.`,
  },
  {
    range: '250+',
    style: 'Bespoke large-event catering',
    kitchen: 'Build kitchen on site or use venue facilities',
    staffing: 'Executive chef, large brigade, full front-of-house team',
    menus: 'Custom menu design, multiple cuisines, dietary stations',
    notes: `Two hundred and fifty plus guests requires a fully bespoke plan. We build a temporary kitchen or partner with the venue, design custom menus, and deploy a full brigade and service team. These events are quoted individually after a detailed consultation.`,
  },
]

export const COMPLETE_BOOKING_PROCESS: BookingProcessStep[] = [
  {
    step: '01',
    title: 'Initial Enquiry',
    desc: 'Contact us via WhatsApp or the quote form with your date, location, guest count, and event type. We reply within two hours with availability and initial guidance.',
  },
  {
    step: '02',
    title: 'Consultation',
    desc: 'We schedule a quick call or chat to understand your preferences, dietary needs, villa layout, and service style. This shapes every recommendation that follows.',
  },
  {
    step: '03',
    title: 'Menu Planning',
    desc: 'Our chef proposes a tailored menu covering starters, mains, sides, desserts, and drinks. You can request revisions until it matches your vision and budget.',
  },
  {
    step: '04',
    title: 'Kitchen Assessment',
    desc: 'We evaluate your villa kitchen, power, water, and outdoor space. If needed, we arrange a mobile kitchen tent, extra burners, or generators.',
  },
  {
    step: '05',
    title: 'Proposal & Quote',
    desc: 'You receive a detailed proposal with menu, staffing, equipment, travel fees, and total cost. The quote is valid and includes 21% tax.',
  },
  {
    step: '06',
    title: 'Deposit',
    desc: 'A 50% deposit locks your date and triggers our internal booking sheet. The balance is due on or before the event day.',
  },
  {
    step: '07',
    title: 'Sourcing',
    desc: 'We purchase fresh produce, proteins, and specialty ingredients the day before or morning of your event. Everything is prepped to order.',
  },
  {
    step: '08',
    title: 'Arrival & Setup',
    desc: 'The team arrives 2–4 hours early, sets up tables, linens, cooking equipment, and glassware, and briefs villa staff on the run sheet.',
  },
  {
    step: '09',
    title: 'Preparation',
    desc: 'Chefs prep sauces, marinades, and garnishes on site. Service staff arrange buffet lines or place settings according to the agreed layout.',
  },
  {
    step: '10',
    title: 'Service',
    desc: 'Food is served at the scheduled time. For BBQ, buffet, or plated service, the team manages guest flow, timing, and dietary requests in real time.',
  },
  {
    step: '11',
    title: 'Cleanup',
    desc: 'We clear plates, pack leftovers safely, breakdown equipment, wipe surfaces, and leave the kitchen and service area as we found it.',
  },
  {
    step: '12',
    title: 'Follow-Up',
    desc: 'We send a thank-you message and request feedback. For corporate clients, we provide a tax invoice and any reimbursement documentation needed.',
  },
]

export const BALI_LOCATIONS: BaliLocation[] = [
  {
    area: 'Seminyak',
    events: 'Villa dinners, birthday BBQs, corporate board meals',
    villas: 'Beachfront estates and designer villas',
    notes: 'Seminyak is one of Bali\'s busiest villa districts, so our teams know the area\'s kitchen layouts and access routes well. Travel fees are not charged for events here.',
    href: '/locations/seminyak',
  },
  {
    area: 'Canggu',
    events: 'Poolside BBQs, family feasts, retreat brunches',
    villas: 'Surf villas, rice-paddy retreats, group estates',
    notes: 'Canggu\'s villa density and social atmosphere make it ideal for <a href="/catering/bbq-catering">BBQ catering</a> and relaxed group dining.',
    href: '/locations/canggu',
  },
  {
    area: 'Berawa',
    events: 'Intimate villa dinners, birthday gatherings',
    villas: 'Modern designer villas and family homes',
    notes: 'Berawa sits just north of Canggu and is served as part of the greater Canggu catering zone. Events here receive the same fast response and fresh sourcing.',
  },
  {
    area: 'Pererenan',
    events: 'Private dinners, small weddings, wellness retreats',
    villas: 'Design-led villas and quiet rice-field retreats',
    notes: 'Pererenan\'s slower pace suits refined <a href="/catering/plated-catering">plated catering</a> and intimate family-style meals.',
    href: '/locations/pererenan',
  },
  {
    area: 'Ubud',
    events: 'Retreats, weddings, cultural celebrations',
    villas: 'Jungle retreats, wellness resorts, riverside villas',
    notes: 'Ubud demands plant-forward menus and flexibility for dietary programs. Our <a href="/catering/retreat-catering">retreat catering</a> is especially popular here.',
    href: '/locations/ubud',
  },
  {
    area: 'Sanur',
    events: 'Family celebrations, long-stay villa dinners',
    villas: 'Calm beachside villas and residential estates',
    notes: 'Sanur\'s family-friendly vibe suits relaxed buffet and family-style catering with mild options for children and older guests.',
    href: '/locations/sanur',
  },
  {
    area: 'Nusa Dua',
    events: 'Corporate retreats, gala dinners, weddings',
    villas: 'Gated resort estates and luxury cliffside villas',
    notes: 'Nusa Dua events often require polished, hotel-standard service. We provide uniformed staff, structured timelines, and full tax invoicing.',
    href: '/locations/nusa-dua',
  },
  {
    area: 'Jimbaran',
    events: 'Seafood feasts, family dinners, villa parties',
    villas: 'Bay-view villas and hillside estates',
    notes: 'Jimbaran\'s proximity to Bali\'s main seafood market lets us build outstanding seafood BBQ and grilled fish menus.',
    href: '/locations/jimbaran',
  },
  {
    area: 'Uluwatu',
    events: 'Clifftop weddings, sunset celebrations, VIP dinners',
    villas: 'Luxury clifftop villas and surf estates',
    notes: 'Uluwatu\'s dramatic terraces call for elegant presentation and careful wind and access planning. We often serve <a href="/catering/plated-catering">plated dinners</a> here.',
    href: '/locations/uluwatu',
  },
  {
    area: 'Ungasan',
    events: 'High-end villa parties, milestone dinners',
    villas: 'Premier clifftop estates in the Bukit',
    notes: 'Ungasan is covered under the Bukit Peninsula catering zone. Events here benefit from the same clifftop logistics expertise as Uluwatu.',
  },
  {
    area: 'Kerobokan',
    events: 'Family villa dinners, residential celebrations',
    villas: 'Residential villas and expat homes',
    notes: 'Kerobokan is a convenient base for families and long-stay guests who want consistent private dining without the tourist crowds.',
  },
  {
    area: 'Sidemen',
    events: 'Retreats, intimate weddings, cultural dinners',
    villas: 'Rice-terrace villas and boutique retreats',
    notes: 'Sidemen\'s rural setting calls for early planning and mobile kitchen setups. The reward is dining with some of Bali\'s most beautiful valley views.',
  },
  {
    area: 'Munduk',
    events: 'Small retreats, nature escapes, family dinners',
    villas: 'Mountain lodges and jungle villas',
    notes: 'Munduk\'s cooler climate and remote location require advance logistics. We design warming menus and hearty comfort food for mountain evenings.',
  },
  {
    area: 'North Bali',
    events: 'Villa holidays, family reunions, quiet celebrations',
    villas: 'Coastal and lakeside villas away from the crowds',
    notes: 'North Bali rewards patience with tranquillity. We plan multi-course dinners and BBQs for guests who want to escape the southern bustle.',
  },
  {
    area: 'Bukit Peninsula',
    events: 'Clifftop weddings, surf-group feasts, VIP events',
    villas: 'Bingin, Pecatu, Padang Padang, and Ungasan estates',
    notes: 'The Bukit Peninsula covers Bali\'s dramatic southern coastline. We plan around wind, lift access, and terrace layouts so every event feels intentional.',
    href: '/locations/bukit',
  },
]

export const FOOD_PHILOSOPHY_CARDS: FoodPhilosophyCard[] = [
  {
    title: 'Fresh Ingredients & Seasonal Sourcing',
    body: `Every myCHEF menu starts at the market. We buy produce, seafood, and meats the day before or the morning of your event, which means vegetables arrive crisp, fish smells like the ocean, and herbs still carry their fragrance. Seasonality matters in Bali: mangoes, rambutan, and dragon fruit peak at different times, while tuna, mahi-mahi, and prawns vary by catch. Our chefs design menus around what is best right now rather than forcing imported ingredients into every dish. This approach supports local farmers and fishers, reduces transport time, and gives guests a genuine taste of the island. Whether you choose <a href="/catering/bbq-catering">BBQ catering</a>, <a href="/catering/buffet">buffet catering</a>, or <a href="/catering/plated-catering">plated service</a>, freshness is the constant.`,
  },
  {
    title: 'Local Produce Meets Imported Specialties',
    body: `Bali provides exceptional tropical fruit, vegetables, seafood, and spices, but some occasions call for ingredients that simply do not grow here. We source Wagyu beef, French butter, Italian pasta, Japanese soy sauce, and artisan cheeses through trusted importers so quality never feels compromised. The goal is balance: a grilled local fish with French beurre blanc, or Indonesian sate lilit with imported Dijon mustard. This local-plus-imported approach keeps menus grounded in Bali while offering the luxury touches guests expect from private catering. It also lets us honour dietary requirements — gluten-free pasta, halal proteins, and dairy alternatives are all available without sacrificing flavour.`,
  },
  {
    title: 'Presentation & Food Safety',
    body: `Food must look as good as it tastes, especially at villa events where guests photograph every course. Our chefs plate with colour, height, and texture in mind, while service staff keep buffet lines full and plated courses timed. Behind the scenes, food safety is non-negotiable. Every chef is trained in safe holding temperatures, cross-contamination prevention, and allergen separation. We use colour-coded boards for raw proteins, maintain cold chains during transport, and discard any perishable food that has sat out too long. These habits are why we have maintained a strong safety record across hundreds of events. Presentation brings the wow; safety lets everyone relax.`,
  },
  {
    title: 'Menu Customisation & Dietary Flexibility',
    body: `No two groups eat exactly the same way, so customisation is built into every proposal. We design menus around your preferred cuisines, spice levels, religious requirements, and medical allergies. Vegetarian, vegan, halal, gluten-free, dairy-free, nut-free, and shellfish-free options are standard, not afterthoughts. For retreats and wellness groups, we can build low-sugar, ayurvedic, or fasting-friendly plans. For weddings and corporate events, we create clearly labelled stations so guests with restrictions can eat with confidence. Dietary flexibility is not an extra charge — it is part of how good catering should work. Tell us your needs during consultation and we will build them into the menu from day one.`,
  },
]

export const MENU_STYLES: MenuStyle[] = [
  {
    title: 'Mediterranean',
    desc: `Mediterranean catering Bali highlights olive oil, fresh seafood, grilled vegetables, herbs, and citrus. It suits <a href="/catering/plated-catering">plated dinners</a> and family-style sharing alike.`,
    href: '/catering/villa-catering',
  },
  {
    title: 'Italian',
    desc: `Italian menus range from rustic pasta stations to refined tasting courses. Our chefs use imported pasta, San Marzano tomatoes, and fresh local basil for authentic flavour.`,
    href: '/fine-dining',
  },
  {
    title: 'French',
    desc: `French catering brings classical technique to your villa: delicate sauces, precise cooking, and elegant plating. Ideal for anniversaries and luxury dinners.`,
    href: '/fine-dining',
  },
  {
    title: 'Japanese',
    desc: `Japanese catering focuses on pristine sashimi, tempura, robata grilling, and clean presentation. Best served as a <a href="/catering/plated-catering">plated menu</a> for smaller groups.`,
    href: '/catering/plated-catering',
  },
  {
    title: 'Indonesian',
    desc: `Indonesian catering celebrates the island's own flavours: satay, rendang, nasi kuning, lawar, and sambals. It works beautifully as a <a href="/catering/buffet">buffet</a> or <a href="/catering/babi-guling">Babi Guling</a> feast.`,
    href: '/catering/buffet',
  },
  {
    title: 'Seafood',
    desc: `Seafood catering highlights Bali's daily catch — mahi-mahi, snapper, prawns, and lobster. Grilled over charcoal or served as ceviche, it is a natural fit for coastal villas.`,
    href: '/catering/bbq-catering',
  },
  {
    title: 'BBQ',
    desc: `BBQ menus combine live fire with bold marinades and fresh sides. From Indonesian satay to Wagyu steaks, <a href="/catering/bbq-catering">BBQ catering Bali</a> is the ultimate social format.`,
    href: '/catering/bbq-catering',
  },
  {
    title: 'Healthy',
    desc: `Healthy catering features lean proteins, whole grains, fermented foods, and abundant vegetables. It is the foundation of our <a href="/catering/retreat-catering">retreat catering</a> programs.`,
    href: '/catering/retreat-catering',
  },
  {
    title: 'Vegetarian',
    desc: `Vegetarian catering Bali proves plant-based food can be the main event. Expect grilled halloumi, roasted vegetable tajines, Indonesian gado-gado, and creative grain salads.`,
    href: '/catering/villa-catering',
  },
  {
    title: 'Vegan',
    desc: `Vegan menus use coconut-based sauces, tofu, tempeh, pulses, and dairy alternatives. Every dish is clearly labelled so vegan guests can eat with confidence.`,
    href: '/catering/retreat-catering',
  },
  {
    title: 'Buffet',
    desc: `Buffet catering offers variety and efficient service for groups of 30 or more. Choose Indonesian, international, or live-station formats to match your event.`,
    href: '/catering/buffet',
  },
  {
    title: 'Fine Dining',
    desc: `Fine-dining catering brings multi-course tasting menus, wine pairings, and meticulous plating to your villa. Best for intimate celebrations and executive dinners.`,
    href: '/fine-dining',
  },
  {
    title: 'Family Style',
    desc: `Family-style service places generous shared platters on the table for guests to pass around. It encourages conversation and suits multi-generational gatherings.`,
    href: '/catering/villa-catering',
  },
]

export const OPTIONAL_SERVICES: OptionalService[] = [
  {
    title: 'Private Chefs',
    desc: `Hire a <a href="/private-chef-bali">private chef in Bali</a> for the full duration of your stay. They handle grocery shopping, every meal, and kitchen cleanup.`,
    href: '/private-chef-bali',
  },
  {
    title: 'Bartenders',
    desc: `Professional bartenders mix classics, local twists, and signature cocktails. Essential for weddings, birthdays, and corporate receptions.`,
    href: '/in-villa-service/bartenders',
  },
  {
    title: 'Mixologists',
    desc: `Mixologists design custom cocktail programs and premium pours. They bring creativity and theatre to high-end events.`,
    href: '/in-villa-service/mixology',
  },
  {
    title: 'Waiters',
    desc: `Uniformed <a href="/in-villa-service/waiters">waiters in Bali</a> provide polished table service for plated dinners, buffets, and canapé receptions.`,
    href: '/in-villa-service/waiters',
  },
  {
    title: 'Butlers',
    desc: `Trained butlers manage formal dinners, wine service, and guest flow. They add a layer of discretion and sophistication to VIP events.`,
    href: '/in-villa-service/butlers',
  },
  {
    title: 'Coffee Stations',
    desc: `Barista coffee stations keep delegates and retreat guests fuelled with espresso, cold brew, and fresh juices throughout the day.`,
    href: '/catering/corporate-catering',
  },
  {
    title: 'Dessert Tables',
    desc: `Styled dessert tables and grazing-style sweet spreads add a memorable finale to birthdays, weddings, and celebrations.`,
    href: '/catering/grazing-tables',
  },
  {
    title: 'Furniture Rental',
    desc: `We coordinate tables, chairs, lounges, and linens to match your event design, saving you from juggling multiple vendors.`,
    href: '/events',
  },
  {
    title: 'Glassware',
    desc: `Premium glassware for wine, champagne, cocktails, and water is supplied as part of bar packages or as a standalone rental.`,
    href: '/in-villa-service/bartenders',
  },
  {
    title: 'Decoration',
    desc: `From table styling to themed installations, decoration transforms your villa into a polished event space that photographs beautifully.`,
    href: '/events',
  },
  {
    title: 'Flowers',
    desc: `Tropical floral arrangements, garlands, and edible flowers bring colour and fragrance to grazing tables, buffets, and dining settings.`,
    href: '/events',
  },
  {
    title: 'Entertainment',
    desc: `We can connect you with DJs, acoustic musicians, fire dancers, and cultural performers to match the mood of your celebration.`,
    href: '/events',
  },
  {
    title: 'Photography',
    desc: `Professional event photographers capture the food, decor, and candid moments so you can relive the evening long after it ends.`,
    href: '/events',
  },
  {
    title: 'Event Planning',
    desc: `For complex celebrations we coordinate timeline, vendors, furniture, flowers, and staff so nothing is left to chance.`,
    href: '/events',
  },
  {
    title: 'Event Staffing',
    desc: `Beyond waiters and bartenders, we provide hosts, coordinators, and kitchen porters through our <a href="/staffing">hospitality staffing</a> network.`,
    href: '/staffing',
  },
  {
    title: 'Waiter Service',
    desc: `Add dedicated <a href="/in-villa-service/waiters">waiter service</a> to any buffet or plated event. We typically allocate one waiter per ten guests.`,
    href: '/in-villa-service/waiters',
  },
  {
    title: 'Butler Service',
    desc: `Upgrade formal dinners with <a href="/in-villa-service/butlers">butler service</a> for wine presentation, guest assistance, and seamless hosting.`,
    href: '/in-villa-service/butlers',
  },
]

export const CATERING_FAQS: CateringFAQ[] = [
  {
    q: 'Do your prices include chef and staff?',
    a: `Yes. All <a href="/catering/bbq-catering">BBQ</a>, <a href="/catering/buffet">buffet</a>, and <a href="/catering/plated-catering">plated</a> packages include a private chef and service staff. <a href="/catering/drop-off-catering">Drop-off catering</a> does not include on-site staff — that is the point.`,
  },
  {
    q: 'Do you provide catering at villas?',
    a: `Yes. We specialise in <a href="/catering/villa-catering">villa catering across Bali</a>. We bring all equipment, set up in your villa garden or pool area, and clean up after.`,
  },
  {
    q: 'Can I book only drop-off food?',
    a: `Absolutely. Our <a href="/catering/drop-off-catering">drop-off catering</a> is designed for guests who want great food without staff staying in the villa.`,
  },
  {
    q: 'What is the minimum guest count?',
    a: `BBQ: 10 guests (Seminyak/Canggu & Ubud), 20 (Uluwatu). Buffet: 30 guests. Plated: 10 guests. Drop-off: 4 guests. Babi Guling: 10 guests.`,
  },
  {
    q: 'Do you offer halal or pork-free menus?',
    a: `Yes. We offer fully halal and pork-free BBQ, buffet, and plated menus. <a href="/catering/babi-guling">Babi Guling</a> contains pork and is not halal.`,
  },
  {
    q: 'Does Babi Guling contain pork?',
    a: `Yes. <a href="/catering/babi-guling">Babi Guling</a> is a traditional Balinese whole-pig roast and contains pork. It is not suitable for halal groups.`,
  },
  {
    q: 'Can you handle gluten-free or allergies?',
    a: `Yes. We accommodate gluten-free, nut-free, dairy-free, shellfish-free, and other allergies. Please tell us when booking so we can plan safe prep and plating.`,
  },
  {
    q: 'Do you bring equipment?',
    a: `Yes. We bring grills, chafing dishes, tables, linens, cutlery, glassware, napkins, and everything needed for serviced packages.`,
  },
  {
    q: 'Do you clean up after the event?',
    a: `Yes. Full cleanup is included in all serviced packages (BBQ, buffet, plated). Drop-off does not include cleanup because there is no on-site team.`,
  },
  {
    q: 'Do you charge travel fees?',
    a: `Travel fees apply for areas outside Seminyak/Canggu, typically IDR 250,000 to 700,000 depending on distance and event size.`,
  },
  {
    q: 'How much deposit is required?',
    a: `A 50% deposit is required to confirm your booking. The balance is due on or before the day of the event.`,
  },
  {
    q: 'How far in advance should I book?',
    a: `We recommend 3–7 days for BBQ and buffet, 2+ weeks for weddings and large events. Drop-off can often be arranged next-day if ordered by 4pm.`,
  },
  {
    q: 'Is this a real chef or just delivered food?',
    a: `A real chef grills, plates, and serves at your villa. This is not pre-cooked delivery. For <a href="/catering/bbq-catering">BBQ catering</a>, the chef arrives three hours early and cooks live.`,
  },
  {
    q: 'How do I know the food is safe?',
    a: `All chefs are food-safety certified. We use separate prep for allergies, purchase fresh ingredients daily, and have served 500+ villa events with a strong safety record.`,
  },
  {
    q: 'What if it rains?',
    a: `We bring a kitchen tent for outdoor setups or move indoors if your villa has covered space. Bali weather is part of the planning, not an extra charge.`,
  },
  {
    q: 'Can I see a menu before booking?',
    a: `Yes. We send a full menu proposal with exact pricing before you pay anything. No commitment is required to review, and most quotes are sent within two hours.`,
  },
  {
    q: 'What if my guest count changes?',
    a: `Final headcount is due 48 hours before your event. We adjust portions and staffing. Small changes incur no penalty; large increases may affect minimums.`,
  },
  {
    q: 'Why myCHEF and not another caterer?',
    a: `We own the full stack — chefs, equipment, logistics, and staff training. No middlemen means faster quotes, consistent delivery, and immediate issue resolution.`,
  },
  {
    q: 'What is the difference between one-time catering and daily chef service?',
    a: `One-time catering is for a single event such as a BBQ or wedding buffet. <a href="/private-chef-bali">Daily chef service</a> provides the same chef every day during your stay for all meals.`,
  },
  {
    q: 'Which service is right for me?',
    a: `For one special occasion, choose one-time catering. For every meal across a multi-day stay, choose daily chef service. Message us on WhatsApp and we will guide you.`,
  },
  {
    q: 'How much does catering in Bali cost?',
    a: `Most packages start around IDR 700,000 per person for BBQ, buffet, and drop-off. Plated menus start at IDR 800,000, live-station buffets around IDR 950,000. Get a tailored <a href="/quote">catering quote</a>.`,
  },
  {
    q: 'Is the 21% tax included in your published prices?',
    a: `No — published prices are shown "++", meaning 11% government tax and 10% service charge are added on top. Your written quote states the full amount payable before you commit, and nothing is added after that unless you add guests or upgrades.`,
  },
  {
    q: 'Can I get a quote without committing?',
    a: `Yes. We send menu proposals and quotes with no obligation. You can review, request changes, or decline without pressure. Request a <a href="/quote">quote here</a>.`,
  },
  {
    q: 'Do you cater for children?',
    a: `Yes. We prepare milder spice levels, smaller portions, familiar dishes such as pasta or chicken, and early meal times for children. Let us know ages and preferences.`,
  },
  {
    q: 'Do you offer vegetarian catering?',
    a: `Yes. We offer fully vegetarian BBQ, buffet, plated, and grazing menus designed as complete meals, not just side salads.`,
  },
  {
    q: 'Do you offer vegan catering?',
    a: `Yes. Our <a href="/catering/retreat-catering">vegan menus</a> use plant proteins, coconut-based sauces, dairy alternatives, and creative vegetables, with clear labelling.`,
  },
  {
    q: 'Can you provide halal-friendly catering?',
    a: `Yes. We offer halal and pork-free menus. For halal groups we suggest Indonesian BBQ, Nasi Campur, or Ayam Betutu instead of <a href="/catering/babi-guling">Babi Guling</a>.`,
  },
  {
    q: 'Can we bring our own alcohol?',
    a: `Yes. You can supply your own alcohol. We can also arrange <a href="/in-villa-service/bartenders">bartenders</a>, mixologists, glassware, and ice as add-ons.`,
  },
  {
    q: 'Do you provide bar service and cocktails?',
    a: `Yes. We offer bartender packages, mixology services, open-bar setups, and signature cocktail design through our <a href="/in-villa-service/bartenders">Bartender Service</a> page.`,
  },
  {
    q: 'What kitchen facilities does my villa need?',
    a: `For <a href="/catering/drop-off-catering">drop-off catering</a>, a basic kitchen is enough. For BBQ, buffet, and plated service, we bring grills, burners, chafing dishes, and prep tables; we just need water, power, and space.`,
  },
  {
    q: 'Can you cater on the beach or at a venue without a kitchen?',
    a: `Yes. We can build a mobile kitchen at beach clubs, gardens, and event spaces. Larger off-site events may require a generator and advance planning.`,
  },
  {
    q: 'Do you cater weddings in Bali?',
    a: `Yes. We cater rehearsal dinners, welcome drinks, wedding receptions, and post-wedding brunches across Bali. See our <a href="/events/weddings">Wedding Catering</a> options.`,
  },
  {
    q: 'Do you cater corporate retreats and offsites?',
    a: `Yes. We provide multi-day retreat catering, corporate dinners, conference lunches, and team-building BBQs with tax invoicing. See <a href="/events/corporate-events">corporate events</a>.`,
  },
  {
    q: 'Can you cater a small dinner for 4 to 6 guests?',
    a: `Yes. For very small groups we recommend <a href="/catering/drop-off-catering">drop-off catering</a>, a private chef dinner, or a romantic dining experience. Plated menus also work.`,
  },
  {
    q: 'What is the largest event you can cater?',
    a: `We regularly cater events for 100 to 250 guests and can scale beyond that for large weddings, conferences, and celebrations with sufficient lead time.`,
  },
  {
    q: 'Do I need to provide plates, cutlery, and glassware?',
    a: `No. We bring all necessary plates, cutlery, glassware, napkins, and serving equipment as part of serviced packages.`,
  },
  {
    q: 'What happens to leftovers?',
    a: `We pack safe leftovers in containers for you to keep. Perishable items that have been sitting out too long are discarded for food safety reasons.`,
  },
  {
    q: 'How long does setup and cleanup take?',
    a: `Setup usually takes 2 to 3 hours before service. Cleanup takes 1 to 2 hours after the last guest finishes. Large events may require earlier arrival.`,
  },
  {
    q: 'Can I change the menu after booking?',
    a: `Yes, within reason. Final menus are confirmed several days before the event. Small adjustments are usually free; major ingredient changes may affect pricing.`,
  },
  {
    q: 'Do you offer tastings before a wedding or large event?',
    a: `Yes. Complimentary tastings are available for events over 40 guests. Smaller tastings can be arranged for a fee credited against your booking.`,
  },
  {
    q: 'What payment methods do you accept?',
    a: `We accept bank transfer, credit card, and Wise. Deposits confirm your date; balances are settled on or before the event day.`,
  },
  {
    q: 'Can I book last-minute catering?',
    a: `Drop-off can often be arranged next-day if ordered by 4pm. BBQ and buffet require 3 to 7 days notice. Weddings and large events should be booked 2+ weeks ahead.`,
  },
  {
    q: 'Do you cater outside Bali?',
    a: `Our primary service area is Bali, from Seminyak and Canggu to Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, and North Bali. We focus exclusively on Bali catering so we can guarantee fresh sourcing, reliable logistics, and consistent service standards across the island.`,
  },
  {
    q: 'What if a guest has a severe allergy?',
    a: `Tell us when booking. We prepare allergy-safe meals separately, use clean utensils, and label dishes. For severe allergies we may confirm an emergency plan.`,
  },
  {
    q: 'Do you provide waiting staff?',
    a: `Yes. <a href="/in-villa-service/waiters">Waiters</a> are included or available for buffet, plated, and canapé service, typically one waiter per ten guests.`,
  },
  {
    q: 'Can you arrange a butler for a formal dinner?',
    a: `Yes. We can provide trained <a href="/in-villa-service/butlers">butlers</a> for formal villa dinners, wine service, and VIP events.`,
  },
  {
    q: 'Do you do floating breakfast outside villas?',
    a: `<a href="/catering/floating-breakfast">Floating breakfast</a> is designed for private villa pools. We can also create styled brunch setups for garden or terrace locations.`,
  },
  {
    q: 'Can you create a themed menu?',
    a: `Yes. We can design menus around Italian, French, Japanese, Indonesian, Mexican, Middle Eastern, or fully customised themes. See our <a href="/catering/buffet">buffet</a> and plated options.`,
  },
  {
    q: 'How do I confirm my booking?',
    a: `Confirm by paying the 50% deposit. We then send a booking summary with date, menu, guest count, location, and balance due.`,
  },
  {
    q: 'What information do you need for a quote?',
    a: `Date, location, number of guests, event type, preferred cuisine, dietary needs, and whether you want full service or drop-off. Request a <a href="/quote">quote here</a>.`,
  },
  // AnswerSocrates guest catering + bar intents (Bali villa/events only — not US chains, equipment retail, or jobs)
  {
    q: 'Is myCHEF a Bali catering company?',
    a: `Yes. myCHEF is a chef-led <strong>Bali catering company</strong> focused on villas and private events island-wide — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Kuta corridor and beyond. We employ our own chefs and service team (not last-minute freelancers). <a href="/catering">Catering Bali →</a> · <a href="/chefs">About →</a>`,
  },
  {
    q: 'What is on a Bali catering menu?',
    a: `Menus match the format: Indonesian or international BBQ, multi-dish buffet, plated courses, drop-off trays, grazing boards, babi guling feasts, or multi-day retreat plans. Sample dishes and price bands sit on this page and on each format page. We send a full written menu proposal before deposit. Browse <a href="/blog/bali-catering-menu">Bali catering menu ideas</a> or request a custom menu on WhatsApp.`,
  },
  {
    q: 'How much does catering cost per person in Bali?',
    a: `Published floors: BBQ, buffet and drop-off from about <strong>IDR 700,000++ per person</strong>; plated from about IDR 800,000++; live-station buffets around IDR 950,000++. Wedding receptions often land higher with production. “++” is 11% tax + 10% service. See the price table on this page and <a href="/pricing">full pricing</a>.`,
  },
  {
    q: 'How much should catering cost for 20, 30, 50 or 100 people?',
    a: `Rough guide using published per-person floors (food service only, ++ extra): <strong>20 guests</strong> BBQ ≈ IDR 14M++; <strong>30 guests</strong> BBQ/buffet ≈ IDR 21M–28.5M++; <strong>50 guests</strong> buffet ≈ IDR 35M–47.5M++; <strong>100 guests</strong> buffet ≈ IDR 70M–95M++. Exact totals depend on menu tier, area travel, bar packages and staffing. <a href="/quote">Get a fixed quote →</a>`,
  },
  {
    q: 'How much does Bali drinks catering or bar catering cost?',
    a: `<strong>Bali drinks / bar catering</strong> is sold as complete cocktail packages — not bare hourly bartender hire. From <strong>IDR 500,000++ per guest</strong> (BYO, min 10 guests); free-flow IDR 1,300,000++ and premium free-flow IDR 1,700,000++ per guest. You can also BYO alcohol with service only. Details: <a href="/in-villa-service/bartenders">luxury cocktail packages</a> · <a href="/experiences/private-cocktail-party">private cocktail party</a>.`,
  },
  {
    q: 'Do you offer bar catering, alcohol catering and Bali bar service?',
    a: `Yes for private villas and events. We run mobile bar setups, four-cocktail menus, free-flow windows, zero-proof options, ice, glassware and cleanup. Pair bar service with any food catering package. Waiters/butlers: contact for pricing. <a href="/in-villa-service/bartenders">Bar & cocktail packages →</a> · B2B venues use <a href="/bar-services/">bar services</a>.`,
  },
  {
    q: 'What do people eat and drink in Bali — and can catering match that?',
    a: `Local favourites guests often request: sate, ikan bakar, nasi campur, lawar, babi guling (pork), fresh seafood, tropical fruit and Indonesian BBQ. Drinks range from fresh juices and coconut water to arak-based cocktails, beer and wine (you may BYO). We build menus around your group’s preferences — Indonesian, international or mixed. <a href="/catering/bbq-catering">BBQ</a> · <a href="/catering/babi-guling">Babi guling</a> · <a href="/in-villa-service/bartenders">Cocktails</a>.`,
  },
  {
    q: 'Is food in Bali halal — and do you offer catering di Bali halal?',
    a: `Bali has both pork-forward Balinese dishes and widely available pork-free / Muslim-friendly options. For <strong>halal-friendly catering</strong> we run pork-free BBQ, buffet and plated menus (e.g. Indonesian BBQ, nasi campur, ayam betutu). Babi guling contains pork and is not suitable for halal groups. Tell us at enquiry so sourcing and prep stay clean. <a href="/catering">Catering options →</a>`,
  },
  {
    q: 'Do you cater in Seminyak, Canggu, Ubud, Nusa Dua and Kuta?',
    a: `Yes. <strong>Catering Bali Seminyak / Canggu</strong> is our core zone (often no travel fee). We also regularly serve Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Kuta/Legian corridor and further — travel fees quoted upfront. Area guides: <a href="/private-chef/seminyak">Seminyak</a> · <a href="/private-chef/canggu">Canggu</a> · <a href="/locations">all locations</a>.`,
  },
  {
    q: 'Catering vs private chef in Bali — which should I book?',
    a: `Choose <a href="/catering">catering</a> for one celebration (BBQ, buffet, plated party, wedding reception) with a full production team. Choose <a href="/private-chef-bali">private chef</a> day rates when you want the same chef for meals across a multi-day villa stay. Many groups do both: daily chef mid-week + one big catering night.`,
  },
  {
    q: 'What does catering include — and is catering worth it?',
    a: `Serviced packages typically include chef, service staff, menu ingredients, equipment, setup, service and cleanup. Alcohol and decorative rentals are usually add-ons unless listed. For groups of 10+, villa catering is often simpler and more private than restaurants once taxis, split tables and timing are counted — published prices let you decide before deposit.`,
  },
  {
    q: 'Should I tip catering staff in Bali?',
    a: `Tips are optional and appreciated for exceptional service, never required. When prices show “++”, government tax and service charge are already modelled into the all-in total on your written quote. Follow whatever feels right for your group.`,
  },
  {
    q: 'When should I book catering for a wedding or large party?',
    a: `Weddings and 50+ guest events: as early as villa dates are fixed — ideally 3–10 months in peak season. BBQ and buffet villa parties: 3–7+ days. Drop-off can often be next-day if ordered by 4pm. <a href="/events/weddings">Wedding catering →</a> · <a href="/bali-wedding-catering-packages">Wedding packages →</a>`,
  },
  {
    q: 'Do you offer snack catering, nasi Bali catering or kids party catering?',
    a: `Yes. We can design snack stations, canapé/grazing formats, Indonesian rice-based menus (nasi campur style), and milder kids plates alongside adult food. Birthdays: <a href="/events/birthdays">birthday catering</a>. Grazing: <a href="/catering/grazing-tables">grazing tables</a>. Kids: <a href="/kids-menus">kids menus</a>.`,
  },
  {
    q: 'Apa rekomendasi catering di Bali untuk villa?',
    a: `Untuk villa di Bali, pilih format yang cocok: BBQ untuk 10–60 tamu, buffet untuk 30+ (wedding/corporate), plated untuk dinner formal, atau drop-off jika tanpa staf di villa. myCHEF melayani Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua dan area lain dengan harga transparan per orang. <a href="/quote">Minta penawaran →</a>`,
  },
  {
    q: 'Can I combine food catering with cocktails and F&B for one event?',
    a: `Yes — one plan for food & beverage: catering menu + cocktail package (or BYO bar service) + waiters on request. Common stacks: grazing + welcome cocktails, BBQ + free-flow bar, plated wedding dinner after cocktail hour. <a href="/events/villa-parties">Villa parties →</a> · <a href="/in-villa-service/bartenders">Drinks catering packages →</a>`,
  },
  // Long-tail catering keywords (output (2).xlsx) — guest intent only, Bali villa business model
  {
    q: 'What does catering mean — and what is a catering service?',
    a: `<strong>Food catering</strong> means a professional team plans the menu, shops, cooks, serves and cleans so you host without kitchen work. A myCHEF <strong>catering service</strong> in Bali is chef-led villa or event production — not a restaurant takeaway tray alone. Formats: <a href="/catering/bbq-catering">BBQ</a>, <a href="/catering/buffet">buffet</a>, <a href="/catering/plated-catering">plated</a>, <a href="/catering/drop-off-catering">drop-off</a> and specialties on this page.`,
  },
  {
    q: 'How do I order catering or book catering online in Bali?',
    a: `Message WhatsApp with date, villa area, guest count and format (or use <a href="/quote">quote</a> / <a href="/book">book</a>). We reply with a menu proposal and fixed price — that is how you “order catering” with myCHEF. There is no anonymous cart checkout; every villa event needs headcount, access and dietary notes. 50% deposit confirms the date.`,
  },
  {
    q: 'Do you offer wedding catering and catering for a wedding in Bali?',
    a: `Yes — welcome dinners, ceremony canapés, reception buffets or plated service, and post-wedding brunch. Full receptions often land about IDR 1.5M–3M++ per person with production; intimate formats can start near food floors from ~IDR 700K++. Packages: <a href="/bali-wedding-catering-packages">Bali wedding catering packages</a> · hub: <a href="/events/weddings">wedding catering Bali</a>.`,
  },
  {
    q: 'How much is catering for a wedding — and average catering cost per person?',
    a: `For Bali villa weddings, plan food from roughly <strong>IDR 700K–1.5M++ per person</strong> for many formats and <strong>IDR 1.5M–3M++</strong> for full reception production. “Average catering cost per person” online is often a global figure — your written myCHEF quote is the real number for guest count, menu and bar. <a href="/pricing">Pricing →</a> · <a href="/events/weddings">Weddings →</a>`,
  },
  {
    q: 'Do you do BBQ catering, buffet catering and grazing table catering?',
    a: `Yes. <a href="/catering/bbq-catering">BBQ catering</a> is the villa crowd-pleaser (from ~IDR 700K++/person, min ~10). <a href="/catering/buffet">Buffet catering</a> (prasmanan-style variety) suits 30+ guests. <a href="/catering/grazing-tables">Grazing table catering</a> works for welcome drinks and cocktail hours. All are food catering packages with chef and cleanup on serviced formats.`,
  },
  {
    q: 'Do you offer party catering, event catering and birthday catering?',
    a: `Yes — villa <strong>party catering</strong> and <strong>event catering</strong> for birthdays, pool parties, corporate nights and celebrations. Birthdays: <a href="/events/birthdays">birthday catering</a> · social formats: <a href="/events/villa-parties">villa parties</a> · full events hub: <a href="/events">events</a>. Stack a <a href="/in-villa-service/bartenders">mobile cocktail bar</a> when drinks matter.`,
  },
  {
    q: 'What is finger food catering — and can you do canapés?',
    a: `Finger food / canapé catering is tray-pass or station bites for standing guests — ideal for cocktail hours and pool parties. We design canapé menus or pair grazing boards with free-flow bar packages. See <a href="/catering/grazing-tables">grazing tables</a> and <a href="/events/villa-parties">villa parties</a>.`,
  },
  {
    q: 'What are Bali catering packages and the catering price list?',
    a: `Published package floors live on this page and each format page (BBQ, buffet, plated, drop-off, specialties). That is our transparent <strong>catering price list</strong> for Bali villas — not a supermarket tray menu. Final written quotes add travel, bar packages and any upgrades before deposit. <a href="/pricing">Full pricing overview →</a>`,
  },
  {
    q: 'Catering Bali murah, harian, or prasmanan — what can myCHEF do?',
    a: `<strong>Prasmanan</strong> (buffet) is available via <a href="/catering/buffet">buffet catering</a>. <strong>Harian</strong> (daily) multi-meal stays are usually <a href="/private-chef-bali">private chef day rates</a>, not one-night catering. “Murah” depends on guest count and menu tier — we publish honest floors from ~IDR 700K++ per person rather than bait prices. WhatsApp for a fixed quote.`,
  },
  {
    q: 'Catering vs buffet — is buffet the same as full catering?',
    a: `Buffet is one <strong>service style</strong> inside catering. Full catering can also mean BBQ, plated dinner, drop-off or grazing. Choose buffet when you want variety and self-serve flow for larger groups; choose BBQ or plated for other atmospheres. Compare on <a href="/catering/buffet">buffet</a> and the formats above.`,
  },
  {
    q: 'How much does catering cost for 10 or 15 people?',
    a: `Small groups often use BBQ or plated (min ~10) or drop-off (from ~4). Example food-only floors: <strong>10 guests</strong> BBQ ≈ IDR 7M++; <strong>15 guests</strong> ≈ IDR 10.5M++ before ++ tax/service, travel and bar. For under ~8 guests, daily private chef or drop-off may fit better. <a href="/quote">Quote →</a>`,
  },
  {
    q: 'When should I order catering — and when does catering arrive for a wedding?',
    a: `Order as soon as dates are firm. BBQ/buffet villa parties: often 3–7+ days. Weddings: weeks to months. Kitchen teams typically arrive 2–3 hours before guest service for setup; ceremony canapés may start earlier on the run sheet. We lock arrival time on your booking summary. <a href="/events/weddings">Wedding catering →</a>`,
  },
]
