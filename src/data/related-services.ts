export interface RelatedService {
  title: string
  description: string
  path: string
  category: string
}

export const FINE_DINING_RELATED: RelatedService[] = [
  {
    title: 'Private Chef Bali',
    description: 'Hire a dedicated private chef for your villa stay. Daily meals, personalized menus, and premium service.',
    path: '/',
    category: 'Fine Dining'
  },
  {
    title: 'Romantic Dinner',
    description: 'Intimate multi-course dinner for two. Candlelit setup, wine pairing, and exceptional service.',
    path: '/fine-dining/romantic-dinner',
    category: 'Fine Dining'
  },
  {
    title: "Chef's Table",
    description: 'Interactive dining experience with the chef. Watch preparation, learn techniques, taste as you go.',
    path: '/fine-dining/chefs-table',
    category: 'Fine Dining'
  },
  {
    title: 'Tasting Menu',
    description: '7-9 course progression showcasing seasonal ingredients and culinary creativity.',
    path: '/fine-dining/tasting-menu',
    category: 'Fine Dining'
  }
]

export const CATERING_RELATED: RelatedService[] = [
  {
    title: 'BBQ Catering',
    description: 'Live BBQ station with premium meats, seafood, and sides. Perfect for poolside gatherings.',
    path: '/catering/bbq-catering',
    category: 'Catering'
  },
  {
    title: 'Buffet Catering',
    description: 'Full buffet setup with hot dishes, salads, and desserts. Ideal for groups of 15+.',
    path: '/catering/buffet',
    category: 'Catering'
  },
  {
    title: 'Villa Catering',
    description: 'Comprehensive catering for villa stays. Breakfast, lunch, dinner, and special occasions.',
    path: '/catering/villa-catering',
    category: 'Catering'
  },
  {
    title: 'Corporate Catering',
    description: 'Professional catering for business retreats, team offsites, and corporate events.',
    path: '/catering/corporate-catering',
    category: 'Catering'
  }
]

export const EVENTS_RELATED: RelatedService[] = [
  {
    title: 'Villa Parties',
    description: 'Full-service villa party catering with optional mobile cocktail bar. BBQ, free-flow drinks, and cleanup.',
    path: '/events/villa-parties',
    category: 'Events'
  },
  {
    title: 'Weddings',
    description: 'End-to-end wedding catering and coordination. From intimate ceremonies to 100+ guest receptions.',
    path: '/events/weddings',
    category: 'Events'
  },
  {
    title: 'Corporate Events',
    description: 'Professional event management for conferences, team buildings, and business celebrations.',
    path: '/events/corporate-events',
    category: 'Events'
  },
  {
    title: 'Retreats',
    description: 'Wellness and yoga retreat catering. Healthy menus, dietary accommodations, and mindful service.',
    path: '/events/retreats',
    category: 'Events'
  }
]

export const IN_VILLA_SERVICE_RELATED: RelatedService[] = [
  {
    title: 'Waiter hire — contact us for pricing',
    description: 'Professional waiters for your villa dinner or event. English-speaking, uniformed, and experienced.',
    path: '/in-villa-service/waiters',
    category: 'In-Villa Service'
  },
  {
    title: 'Butler hire by the day',
    description: 'Discreet butler service for villa stays and special occasions. Full household coordination.',
    path: '/in-villa-service/butlers',
    category: 'In-Villa Service'
  },
  {
    title: 'Mobile cocktail bar for villa parties',
    description: 'Complete mobile bar packages from IDR 500K++ per guest — team, four cocktails, glassware, ice, setup and cleanup. Stack with catering or private chef.',
    path: '/in-villa-service/bartenders',
    category: 'In-Villa Service'
  },
  {
    title: 'Mixology & custom cocktail programs',
    description: 'Signature cocktail creation and bespoke bar experiences for your villa gathering.',
    path: '/in-villa-service/mixology',
    category: 'In-Villa Service'
  },
  {
    title: 'Private sommelier service',
    description: 'Wine pairing, selection and tableside service for fine dining experiences.',
    path: '/in-villa-service/sommelier',
    category: 'In-Villa Service'
  },
  {
    title: 'Event hosts & hostesses',
    description: 'Guest reception, seating coordination and event flow management.',
    path: '/in-villa-service/host-hostess',
    category: 'In-Villa Service'
  }
]

export const STAFFING_RELATED: RelatedService[] = [
  {
    title: 'Private Chef Placement',
    description: 'Find and hire a full-time private chef for your villa or residence. Background-checked candidates.',
    path: '/staffing/private-chef-placement',
    category: 'Staffing'
  },
  {
    title: 'Live-In Chef',
    description: 'Hire a dedicated live-in chef for your Bali villa. Daily meals, menu planning, and kitchen management.',
    path: '/staffing/live-in-chef',
    category: 'Staffing'
  },
  {
    title: 'Villa Staff',
    description: 'Complete villa staff solutions including chefs, butlers, and house managers.',
    path: '/staffing/villa-staff',
    category: 'Staffing'
  },
  {
    title: 'Household Staff',
    description: 'Professional household staff for residences in Bali. Cooks, cleaners, and estate management.',
    path: '/staffing/household-staff',
    category: 'Staffing'
  }
]

export const LOCATION_RELATED: RelatedService[] = [
  {
    title: 'Fine Dining in Bali',
    description: 'Multi-course private chef experiences in your villa across all of Bali.',
    path: '/fine-dining',
    category: 'Fine Dining'
  },
  {
    title: 'Catering in Bali',
    description: 'BBQ, buffet, and plated catering for groups of all sizes across Bali.',
    path: '/catering',
    category: 'Catering'
  },
  {
    title: 'Events in Bali',
    description: 'Full-service event catering for weddings, parties, and corporate gatherings.',
    path: '/events',
    category: 'Events'
  },
  {
    title: 'Cooking Class Bali',
    description: 'Private Balinese and Indonesian cooking lessons in your villa kitchen — contact for a quote.',
    path: '/experiences/cooking-class',
    category: 'Experiences'
  }
]

/** Hands-on villa experiences (not daily chef hire or event catering). */
export const EXPERIENCES_RELATED: RelatedService[] = [
  {
    title: 'Cooking Class Bali',
    description: 'Balinese, Indonesian and multi-cuisine villa lessons. Chef comes to you — contact for a written proposal.',
    path: '/experiences/cooking-class',
    category: 'Experiences'
  },
  {
    title: 'Sushi Masterclass',
    description: 'Private sushi making class at your villa — rice, knife skills, maki, nigiri and tasting.',
    path: '/experiences/sushi-masterclass',
    category: 'Experiences'
  },
  {
    title: 'Private Cocktail Party',
    description: 'Mobile bar timeline, signature cocktails and canapés for a villa party night.',
    path: '/experiences/private-cocktail-party',
    category: 'Experiences'
  },
  {
    title: 'Kids Birthday Chef Party',
    description: 'Fully hosted kids cooking party at the villa with chef, activities and cleanup.',
    path: '/experiences/kids-birthday-chef-party',
    category: 'Experiences'
  },
  {
    title: 'Champagne & Oyster Experience',
    description: 'Private oyster bar and champagne reception at your villa or event.',
    path: '/experiences/champagne-oyster-experience',
    category: 'Experiences'
  },
  {
    title: 'Romantic Proposal Dinner',
    description: 'Confidential proposal dinner planning with private chef and setup.',
    path: '/experiences/romantic-proposal-dinner',
    category: 'Experiences'
  }
]
