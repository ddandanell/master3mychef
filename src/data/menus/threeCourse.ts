import type { Menu } from './types';

/**
 * Three-Course Collection — starter, main and dessert at a lighter price point.
 * Prices are the approved premium price list (July 2026), not the research prices.
 */
export const THREE_COURSE_MENUS: Menu[] = [
  {
    code: '3C-A2',
    name: 'Indonesian Three-Course',
    family: 'three-course',
    theme: 'Indonesian',
    tier: 'A',
    priceIdr: 850000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      "Bali's favourite gado-gado, charcoal-grilled chicken satay with nasi goreng and coconut palm-sugar crepes.",
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Gado-Gado',
            description:
              "Blanched vegetables with hard-boiled egg and tempeh. Warm peanut sauce on the side. Bali's favourite salad.",
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Chicken Satay with Nasi Goreng',
            description:
              'Skewered free-range chicken, grilled over charcoal. Fragrant nasi goreng with kecap manis and shallots.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Dadar Gulung',
            description:
              'Green coconut crepes filled with palm sugar and grated coconut. Freshly rolled. Individual serve.',
          },
        ],
      },
    ],
    dietaryTags: ['Vegetarian', 'Vegan adaptable', 'GF adaptable', 'Halal'],
    addOns: [
      { name: 'Extra satay skewers (4 pcs)', priceIdr: 75000, perGuest: true },
      { name: 'Sambal trio sampler', priceIdr: 45000, perGuest: true },
    ],
    image: '/generated/balinese-spread.webp',
    imageAlt:
      'Indonesian Three-Course menu by myCHEF.id — gado-gado, chicken satay with nasi goreng and dadar gulung',
  },
  {
    code: '3C-A1',
    name: 'Mediterranean Three-Course',
    family: 'three-course',
    theme: 'Mediterranean',
    tier: 'A',
    priceIdr: 895000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'Charred halloumi salad, herb-crusted free-range chicken and a zesty lemon tart — a sun-drenched Mediterranean trio.',
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Grilled Halloumi Salad',
            description:
              'Charred halloumi over organic greens with cherry tomatoes, cucumber, and lemon-oregano dressing. Shared platter for the table.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Herb-Crusted Chicken',
            description:
              'Free-range chicken breast with rosemary-thyme crust. Roasted until golden. Served with roasted Mediterranean vegetables.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Lemon Tart',
            description:
              'Classic tart with zesty lemon curd and buttery pastry. Individual portions.',
          },
        ],
      },
    ],
    dietaryTags: ['Vegetarian', 'Vegan adaptable', 'GF adaptable', 'Halal'],
    addOns: [
      { name: 'Garlic bread basket', priceIdr: 50000, perGuest: true },
      { name: 'Extra halloumi portion', priceIdr: 65000, perGuest: true },
    ],
    image: '/generated/mychef-events-bali-party-medi.webp',
    imageAlt:
      'Mediterranean Three-Course menu by myCHEF.id — grilled halloumi salad and herb-crusted chicken served family-style',
  },
  {
    code: '3C-B2',
    name: 'Seafood Three-Course',
    family: 'three-course',
    theme: 'Seafood',
    tier: 'B',
    priceIdr: 1250000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'Chilled snapper ceviche, whole chargrilled Jimbaran snapper with sambal matah and silky coconut panna cotta.',
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Ceviche',
            description:
              'Fresh local snapper cured in lime with red onion, coriander, and chilli. Served chilled in small glasses.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Grilled Whole Snapper',
            description:
              'Whole local snapper stuffed with lemongrass and ginger. Chargrilled until crispy. Sambal matah on top.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Coconut Panna Cotta',
            description:
              'Silky coconut panna cotta with tropical fruit compote. Light and refreshing. Individual pots.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'GF adaptable', 'Halal'],
    addOns: [
      { name: 'Tiger prawn upgrade', priceIdr: 260000, perGuest: true },
      { name: 'Extra sambal matah', priceIdr: 35000, perGuest: true },
    ],
    image: '/generated/pkg-seafood.webp',
    imageAlt:
      'Seafood Three-Course menu by myCHEF.id — snapper ceviche, grilled whole snapper and coconut panna cotta',
  },
  {
    code: '3C-B1',
    name: 'Italian Three-Course',
    family: 'three-course',
    theme: 'Italian',
    tier: 'B',
    priceIdr: 1300000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'Creamy burrata caprese, slow-braised Angus short rib in red wine and a classic espresso tiramisu — la dolce vita, villa-style.',
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Burrata Caprese',
            description:
              'Creamy burrata with heirloom tomatoes, fresh basil, and extra virgin olive oil. Served family-style on a platter.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Slow-Braised Beef Short Rib',
            description:
              'Angus beef short rib braised 4 hours in red wine and herbs. Falling-off-the-bone tender. Rich jus.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Tiramisu',
            description:
              'Classic layered tiramisu with espresso-soaked savoiardi and mascarpone cream. Made fresh that morning.',
          },
        ],
      },
    ],
    dietaryTags: ['Vegetarian'],
    addOns: [
      { name: 'Truffle shaved on short rib', priceIdr: 175000, perGuest: true },
      { name: 'Artisan bread basket', priceIdr: 50000, perGuest: true },
    ],
    image: '/generated/pkg-italian.webp',
    imageAlt:
      'Italian Three-Course menu by myCHEF.id — burrata caprese, slow-braised beef short rib and tiramisu',
  },
  {
    code: '3C-B3',
    name: 'Western Three-Course',
    family: 'three-course',
    theme: 'Western',
    tier: 'B',
    priceIdr: 1350000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'Crisp Caesar salad, grain-fed Angus sirloin grilled to order and a warm chocolate fondant with vanilla ice cream.',
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Caesar Salad',
            description:
              'Crisp romaine with parmesan, croutons, and house Caesar dressing. Anchovy optional. Shared bowl.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Grilled Angus Sirloin',
            description:
              '200g grain-fed Angus sirloin, grilled to order. Resting jus. Simple and satisfying. Tourists love this.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Chocolate Fondant',
            description:
              'Warm chocolate fondant with molten centre. Vanilla ice cream on the side. Individual ramekins.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal'],
    addOns: [
      { name: 'Wagyu upgrade MB5-7', priceIdr: 510000, perGuest: true },
      { name: 'Peppercorn sauce', priceIdr: 45000, perGuest: true },
    ],
    image: '/generated/mychef-catering-bali-plated-3course-table.webp',
    imageAlt:
      'Western Three-Course menu by myCHEF.id — Caesar salad, grilled Angus sirloin and chocolate fondant, plated table setting',
  },
  {
    code: '3C-C3',
    name: 'BBQ Three-Course',
    family: 'three-course',
    theme: 'BBQ',
    tier: 'C',
    priceIdr: 1600000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'Smoky BBQ prawn skewers, low-and-slow smoked pork ribs and caramelised grilled pineapple with vanilla ice cream.',
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'BBQ Prawn Skewers',
            description:
              'Tiger prawns marinated in smoky BBQ glaze. Grilled on skewers. Lime squeeze at the table.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Smoked BBQ Ribs',
            description:
              'Pork ribs smoked low and slow for 4 hours. House BBQ sauce. Finger-licking good. Shared platter.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Grilled Pineapple with Ice Cream',
            description:
              'Caramelised pineapple rings from the grill. Vanilla ice cream melting on top. Simple tropical finish.',
          },
        ],
      },
    ],
    dietaryTags: [],
    addOns: [
      { name: 'Extra ribs', priceIdr: 175000, perGuest: true },
      { name: 'Lobster tail upgrade on skewers', priceIdr: 365000, perGuest: true },
    ],
    image: '/generated/mychef-catering-bali-bbq-grill-surfturf.webp',
    imageAlt:
      'BBQ Three-Course menu by myCHEF.id — BBQ prawn skewers, smoked ribs and grilled pineapple from the grill',
  },
  {
    code: '3C-C2',
    name: 'French Three-Course',
    family: 'three-course',
    theme: 'French',
    tier: 'C',
    priceIdr: 1650000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'Caramelised French onion soup with melted gruyere, crispy duck leg confit and vanilla bean creme brulee — classic comfort.',
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'French Onion Soup',
            description:
              'Caramelised onions in rich beef stock. Topped with toasted baguette and melted gruyere. Individual bowls.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Duck Confit',
            description:
              'Local duck leg confit, slow-cooked in its own fat. Crispy skin. Tender meat. Classic French comfort.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Creme Brulee',
            description:
              'Vanilla bean custard with caramelised sugar top. Crack the surface. Smooth underneath. Individual ramekins.',
          },
        ],
      },
    ],
    dietaryTags: [],
    addOns: [
      { name: 'Truffle oil drizzle on confit', priceIdr: 145000, perGuest: true },
      { name: 'Extra gruyere on soup', priceIdr: 65000, perGuest: true },
    ],
    image: '/generated/mychef-finedining-bali-luna-plating.webp',
    imageAlt:
      'French Three-Course menu by myCHEF.id — French onion soup, duck confit and creme brulee, fine-dining plating',
  },
  {
    code: '3C-C1',
    name: 'Japanese Three-Course',
    family: 'three-course',
    theme: 'Japanese',
    tier: 'C',
    priceIdr: 1750000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'Dashi miso soup and edamame, caramelised teriyaki salmon and a light matcha cheesecake — elegant simplicity throughout.',
    courses: [
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Miso Soup and Edamame',
            description:
              'Dashi-based miso soup with tofu and wakame. Warm edamame with sea salt. Elegant simplicity.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Teriyaki Salmon',
            description:
              'Norwegian salmon fillet glazed with house-made teriyaki. Grilled until caramelised. Sesame and spring onion garnish.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Matcha Cheesecake',
            description:
              'Creamy matcha cheesecake with biscuit base. Light and not too sweet. Individual slices.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'GF adaptable', 'Halal'],
    addOns: [
      { name: 'Sashimi starter upgrade', priceIdr: 290000, perGuest: true },
      { name: 'Extra salmon fillet', priceIdr: 220000, perGuest: true },
    ],
    image: '/generated/fine-dining-plating.webp',
    imageAlt:
      'Japanese Three-Course menu by myCHEF.id — miso soup and edamame, teriyaki salmon and matcha cheesecake, fine-dining plating',
  },
];
