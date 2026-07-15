/**
 * BBQ Seafood collection — live charcoal grill experiences, min 8 guests.
 * Prices are the approved premium price list (July 2026); add-on prices are
 * uplifted from research (×1.45, rounded to the nearest IDR 5,000).
 * Source: research/menus-bbq-seafood.md
 */

import type { Menu } from './types';

export const BBQ_SEAFOOD_MENUS: Menu[] = [
  {
    code: 'BBQ-S1',
    name: 'Jimbaran-Style Seafood Grill',
    family: 'bbq-seafood',
    theme: 'Balinese Beach BBQ',
    tier: 'A',
    priceIdr: 1150000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      'The classic Balinese beach BBQ at your villa — whole snapper, jumbo prawns and tuna charred over white charcoal, with sambal matah and lime.',
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Grilled Calamari with Lime',
            description:
              'Tender squid scored and charred fast over high heat. Finished with fresh lime juice and crispy shallots. Serves as a passing starter while the grill heats.',
          },
          {
            name: 'Corn on the Cob with Garlic Butter',
            description:
              'Sweet Balinese corn blistered directly on the grill grate. Brushed with garlic-herb butter and sprinkled with sea salt.',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: 'Whole Grilled Snapper',
            description:
              'One whole snapper per guest, scaled and cleaned. Scored, rubbed with turmeric and garlic, wrapped in banana leaf. Grilled slowly over charcoal. Served head-on with sambal matah spooned over at the table.',
          },
          {
            name: 'Jumbo Prawn Skewers',
            description:
              'Four tiger prawns per guest, shell-on for flavour. Threaded onto lemongrass stalks. Grilled until shells char and meat turns opaque. Brushed with garlic-lime butter off the heat.',
          },
          {
            name: 'Grilled Squid with Sweet Soy',
            description:
              'Whole squid tubes stuffed with tomato and shallot. Charred whole then sliced into rings. Glazed with sweet soy kecap manis in the final minute.',
          },
          {
            name: 'BBQ Tuna Steak',
            description:
              'Thick-cut yellowfin tuna, 150 g per portion. Seared hard on the outside, rare centre. Brushed with sambal matah butter as it comes off the flames.',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Nasi Goreng (Grilled)',
            description:
              'Fried rice cooked on the flat grill section with shrimp paste, kecap manis, and scrambled egg. Topped with crispy fried shallots.',
          },
          {
            name: 'Sambal Matah Slaw',
            description:
              'Raw shallot, lemongrass, and chilli sambal folded with shredded cabbage and coconut. Serves as a cooling counter to the charred fish.',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Sambal Matah',
            description:
              'Raw Balinese shallot and lemongrass salsa with coconut oil and lime. Made fresh on site.',
          },
          {
            name: 'Garlic-Lime Butter',
            description:
              'Softened unsalted Balinese butter whipped with roasted garlic, lime zest, and cracked black pepper.',
          },
          {
            name: 'Sweet Soy Glaze',
            description:
              'Kecap manis reduced with a touch of tamarind for brushing over grilled proteins.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Grilled Banana with Palm Sugar and Coconut',
            description:
              'Whole pisang raja bananas grilled in their skins until caramelised. Split open, drizzled with melted gula jawa and toasted grated coconut.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'GF adaptable', 'Halal', 'Contains shellfish'],
    addOns: [
      {
        name: 'Live lobster upgrade',
        priceIdr: 510000,
        perGuest: true,
        note: 'Add half lobster per guest',
      },
      {
        name: 'Extra prawn skewers',
        priceIdr: 125000,
        perGuest: true,
        note: 'Two additional tiger prawn skewers',
      },
    ],
    image: '/generated/mychef-catering-bali-bbq-grill-surfturf.webp',
    imageAlt:
      'Jimbaran-Style Seafood Grill — Balinese beach BBQ with whole snapper and prawns over charcoal',
  },
  {
    code: 'BBQ-S2',
    name: 'Premium Seafood Grill with Oysters',
    family: 'bbq-seafood',
    theme: 'Luxury Shellfish Grill',
    tier: 'B',
    priceIdr: 2100000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      'A live oyster bar opens the celebration, then the grill fires up lobster, Norwegian salmon and hand-dived scallops. Villa dining at its finest.',
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Fresh Oyster Bar',
            description:
              'Three live oysters per guest, shucked at the station. Served on crushed ice with classic mignonette (shallot, red wine vinegar, cracked pepper), fresh lemon wedges, and Balinese sambal dabu-dabu.',
          },
          {
            name: 'Grilled Prawn Cocktail',
            description:
              'Two king prawns per guest, grilled in shell, chilled, and served with house-made cocktail sauce (tomato, horseradish, lemon) in stemmed glasses.',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: 'Char-Grilled Half Lobster',
            description:
              'Half lobster per guest, split and brushed with lemon-garlic butter. Grilled flesh-side down over charcoal until the edges caramelise. Finished with fresh parsley and a squeeze of lemon.',
          },
          {
            name: 'Grilled Salmon Fillet',
            description:
              '120 g Norwegian salmon fillet per guest, skin-on. Crisped on the grill skin-side down. Finished with a brush of dill butter and flaky sea salt.',
          },
          {
            name: 'King Prawn Skewers',
            description:
              'Two king prawns per guest, deveined and marinated in olive oil, garlic, and lemon zest. Grilled quickly over high heat. Served with a wedge of charred lemon.',
          },
          {
            name: 'Scallops in the Half Shell',
            description:
              'One to two hand-dived scallops per guest, kept in the shell with their roe. Topped with a knob of compound butter (garlic, parsley, lemon). Grilled until the butter foams and the scallop just firms.',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Charred Asparagus',
            description:
              'Thick spears of green asparagus, tossed in olive oil and salt. Grilled until tips char and stalks bend slightly. Finished with lemon zest.',
          },
          {
            name: 'Garlic Bread from the Grill',
            description:
              'Sliced sourdough rubbed with raw garlic and grilled crisp. Brushed with herb butter while still hot.',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Lemon Butter',
            description:
              'Classic French beurre blanc base with fresh lemon juice and zest. Served warm for dipping lobster and scallops.',
          },
          {
            name: 'Chilli-Garlic Oil',
            description:
              'Warmed olive oil infused with sliced red chilli, garlic, and thyme. Drizzle over prawns and salmon.',
          },
          {
            name: 'Bearnaise',
            description:
              'Traditional French emulsion with tarragon and shallot reduction. Made fresh over a portable double boiler at the station.',
          },
          {
            name: 'Salsa Verde',
            description:
              'Fresh Italian-style herb sauce with parsley, capers, anchovy, and olive oil. Brightens grilled seafood.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Coconut Panna Cotta with Passion Fruit',
            description:
              'Silky coconut cream panna cotta set in individual moulds. Topped with fresh Balinese passion fruit pulp and a mint leaf. Prepared ahead, plated at the station.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'GF adaptable', 'Halal', 'Contains shellfish'],
    addOns: [
      {
        name: 'Fine de Claire oyster upgrade',
        priceIdr: 510000,
        perGuest: true,
        note: 'Upgrade to five imported Fine de Claire oysters per guest',
      },
      {
        name: 'Whole lobster per guest',
        priceIdr: 655000,
        perGuest: true,
        note: 'Upgrade from half to whole lobster',
      },
    ],
    image: '/generated/pkg-seafood.webp',
    imageAlt:
      'Premium Seafood Grill with Oysters — luxury shellfish grill with lobster, salmon and scallops',
    oysters: 'included',
  },
  {
    code: 'BBQ-S3',
    name: 'Seafood Tower Grill',
    family: 'bbq-seafood',
    theme: 'Ultimate Shellfish & Flambé',
    tier: 'C',
    priceIdr: 3500000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      'The ultimate seafood tower: whole lobster, king crab and scallops off the charcoal, finished with tiger prawns flambéed in cognac at your table.',
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Fresh Oysters on the Half Shell',
            description:
              'Three live local oysters per guest, shucked fresh. Presented on a tiered seafood tower with mignonette, lemon, and yuzu kosho.',
          },
          {
            name: 'Tuna Tartare on Wonton Crisp',
            description:
              'Diced fresh yellowfin tuna mixed with sesame oil, soy, and spring onion. Spooned onto crispy fried wonton skins. Garnished with micro shiso and tobiko.',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: 'Whole Lobster per Guest',
            description:
              'One whole lobster (approximately 400 g) per guest, split lengthwise. Brushed with champagne butter and grilled over charcoal. The shell turns bright red. The meat is sweet and tender. Served with extra champagne butter on the side.',
          },
          {
            name: 'Grilled King Crab Legs',
            description:
              'Imported king crab legs, pre-cracked. Warmed through on the grill and basted with garlic butter. The heat intensifies the sweetness of the meat. Served with lemon and drawn butter.',
          },
          {
            name: 'Grilled Scallops',
            description:
              'Three hand-dived scallops per guest, seared hard on one side only. Topped with saffron aioli and a pinch of smoked paprika. Served on a bed of rock salt for presentation.',
          },
          {
            name: 'Mini Salmon Wellington',
            description:
              'Individual salmon wellington, 120 g salmon fillet wrapped in puff pastry with spinach and duxelles. Baked until golden, then finished over the grill for a hint of smoke. Sliced to reveal layers.',
          },
          {
            name: 'Tiger Prawns Flambeed with Cognac',
            description:
              'Three large tiger prawns per guest, shelled and deveined. Sauteed in butter, then flambeed tableside with cognac. The blue flame caramelises the natural sugars. Finished with cream and tarragon.',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Truffle Mashed Potato with Grilled Garlic',
            description:
              'Creamy mashed potato folded with white truffle oil. Topped with whole garlic cloves roasted on the grill until soft and sweet.',
          },
          {
            name: 'Charred Broccolini',
            description:
              'Tender broccolini stalks tossed in olive oil and grilled until tips char and stalks are tender-crisp. Finished with flaky sea salt and lemon.',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Champagne Butter',
            description:
              'French butter whipped with reduced champagne, shallots, and tarragon. For lobster and crab.',
          },
          {
            name: 'Yuzu Kosho',
            description:
              'Japanese citrus-chilli paste. Adds bright heat to oysters and scallops.',
          },
          {
            name: 'Saffron Aioli',
            description:
              'House-made garlic mayonnaise infused with saffron threads. For scallops and prawns.',
          },
          {
            name: 'Classic Bearnaise',
            description:
              'Traditional emulsion with tarragon, chervil, and shallot reduction. For salmon wellington and lobster.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Vanilla Creme Brulee with Berries',
            description:
              'Rich vanilla bean custard in individual ramekins. Caramelised sugar crust torched to order at the station. Topped with fresh local strawberries and blueberries.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'Halal', 'Contains shellfish'],
    addOns: [
      {
        name: 'Caviar service',
        priceIdr: 1740000,
        perGuest: true,
        note: '30 g Oscietra caviar per guest with blinis and creme fraiche',
      },
      {
        name: 'Fine de Claire oysters',
        priceIdr: 290000,
        perGuest: true,
        note: 'Upgrade to imported Fine de Claire oysters',
      },
      {
        name: 'Wagyu surf & turf',
        priceIdr: 800000,
        perGuest: true,
        note: 'Add 100 g grilled wagyu steak',
      },
    ],
    image: '/generated/mychef-finedining-bali-sol-bbq.webp',
    imageAlt:
      'Seafood Tower Grill — premium shellfish BBQ tower with lobster, king crab and tableside flambé',
    oysters: 'included',
  },
  {
    code: 'BBQ-S4',
    name: 'Mediterranean Seafood BBQ',
    family: 'bbq-seafood',
    theme: 'Mediterranean Coastal',
    tier: 'A',
    priceIdr: 1450000,
    minGuests: 8,
    guestNoun: 'guest',
    description:
      'Olive oil, lemon and fresh herbs — whole sea bass, lemon-oregano prawns and charred octopus grilled the Mediterranean way.',
    courses: [
      {
        label: 'BBQ Starters',
        dishes: [
          {
            name: 'Grilled Octopus Salad',
            description:
              'Octopus tenderised, charred on the grill, and sliced thin. Tossed with extra virgin olive oil, lemon juice, oregano, and kalamata olives. Served warm with peppery rocket.',
          },
          {
            name: 'Garlic Prawns in Olive Oil',
            description:
              'Sizzling prawns cooked in a cast-iron dish directly on the grill. Olive oil, sliced garlic, and dried chilli bubble around the prawns. Finished with fresh parsley and crusty bread for dipping.',
          },
        ],
      },
      {
        label: 'Grill Station — Main Proteins',
        dishes: [
          {
            name: 'Whole Grilled Sea Bass',
            description:
              'One whole barramundi per guest, scaled and scored. Stuffed with lemon slices, garlic, and fresh oregano. Grilled in a fish basket over charcoal. The skin chars and crisps. The flesh stays moist. Served whole with a drizzle of herb oil.',
          },
          {
            name: 'Prawn Skewers (Lemon-Oregano)',
            description:
              'Four prawns per guest, marinated in lemon juice, dried oregano, garlic, and olive oil. Grilled on skewers until pink and slightly charred. Served with charred lemon halves.',
          },
          {
            name: 'Grilled Calamari',
            description:
              'Whole squid tubes scored in a crosshatch. Marinated in olive oil, lemon, and garlic. Grilled quickly over high heat until tender and marked. Sliced and drizzled with herb oil.',
          },
          {
            name: 'Grilled Salmon',
            description:
              '120 g Norwegian salmon fillet per guest. Simply seasoned with sea salt, black pepper, and a brush of olive oil. Grilled skin-side down for crispy skin. Finished with fresh dill and lemon.',
          },
        ],
      },
      {
        label: 'Sides from the Grill',
        dishes: [
          {
            name: 'Grilled Vegetable Ratatouille',
            description:
              'Sliced courgette, aubergine, red pepper, and onion grilled individually. Layered in a terrine with tomato and fresh basil. Served warm or at room temperature.',
          },
          {
            name: 'Greek Salad',
            description:
              'Chunky cucumber, tomato, red onion, and kalamata olives. Dressed with extra virgin olive oil and red wine vinegar. Topped with a slab of grilled feta cheese.',
          },
        ],
      },
      {
        label: 'Sauces & Condiments',
        dishes: [
          {
            name: 'Tzatziki',
            description:
              'Greek yoghurt with grated cucumber, garlic, dill, and lemon. Cool and refreshing against charred seafood.',
          },
          {
            name: 'Skordalia',
            description:
              'Greek garlic and potato dip. Pungent, creamy, and addictive. Spread on grilled bread with fish.',
          },
          {
            name: 'Herb Oil',
            description:
              'Extra virgin olive oil blended with fresh parsley, basil, and oregano. Drizzle over everything.',
          },
          {
            name: 'Harissa',
            description:
              'North African chilli paste with cumin, coriander, and caraway. Adds fire for those who want it.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Grilled Peaches with Honey and Mascarpone',
            description:
              'Ripe peach halves grilled cut-side down until caramelised. Served warm with a dollop of mascarpone cream. Drizzled with Balinese wild honey and scattered with toasted almonds.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'GF adaptable', 'Halal', 'Contains shellfish'],
    addOns: [
      {
        name: 'Whole lobster to share',
        priceIdr: 405000,
        perGuest: true,
        note: 'One whole lobster grilled Mediterranean style (herb butter, lemon) for every two guests',
      },
      {
        name: 'Oyster starter',
        priceIdr: 140000,
        perGuest: true,
        note: 'Add three fresh local oysters as an additional starter',
      },
    ],
    image: '/generated/mychef-events-bali-party-medi.webp',
    imageAlt:
      'Mediterranean Seafood BBQ — coastal-style grill with whole sea bass, prawns and octopus',
    oysters: 'optional',
  },
];
