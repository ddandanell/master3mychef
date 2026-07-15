import type { Menu } from './types';

/**
 * Seafood — Classic Set (6 menus, min 6 guests, family-style sharing).
 * All seafood sourced fresh morning-of from Jimbaran fish market.
 * Prices are the approved premium price list (July 2026) — do not
 * "correct" them against the older research prices.
 */
export const SEAFOOD_MENUS: Menu[] = [
  {
    code: 'S-A1',
    name: 'Mediterranean Seafood',
    family: 'seafood',
    theme: 'Mediterranean',
    tier: 'A',
    priceIdr: 1350000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'Charcoal-grilled whole snapper with lemon, capers and herbs, plump prawn skewers and honey baklava — the Mediterranean on a shared platter.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Grilled Prawn Skewers with Lemon, Garlic & Oregano',
            description:
              'Six plump prawns per guest, marinated in olive oil and oregano. Grilled over charcoal. Served on a shared platter with lemon wedges.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Mediterranean Seafood Salad',
            description:
              'Poached local snapper and tender squid. Tossed with cherry tomatoes, cucumber, red onion and Kalamata olives. Dressed with extra virgin olive oil and lemon.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Whole Grilled Snapper with Lemon, Capers & Herbs',
            description:
              'Two whole snapper (2.5kg total) grilled over charcoal. Stuffed with lemon slices and fresh herbs. Finished with capers and a drizzle of premium olive oil. Served as a stunning centrepiece. Sambal matah on the side.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Greek-Style Roasted Potatoes with Lemon & Oregano',
            description: 'Crispy golden potatoes roasted with lemon juice and dried oregano.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Grilled Mediterranean Vegetables with Feta',
            description:
              'Zucchini, eggplant and red peppers charred on the grill. Topped with crumbled feta and fresh mint.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Honey & Walnut Baklava',
            description:
              'Filo pastry layered with chopped walnuts and spices. Soaked in fragrant honey syrup. Served with a dollop of thick yoghurt.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'GF adaptable', 'Dairy-free adaptable', 'Halal'],
    addOns: [
      {
        name: 'Extra prawn skewers (6 per guest)',
        priceIdr: 175000,
        perGuest: true,
      },
      {
        name: 'Grilled squid with garlic & parsley',
        priceIdr: 125000,
        perGuest: true,
      },
    ],
    image: '/generated/pkg-seafood.webp',
    imageAlt: 'Mediterranean Seafood menu — whole grilled snapper and prawn skewers served family-style',
  },
  {
    code: 'S-A2',
    name: 'Indonesian Seafood',
    family: 'seafood',
    theme: 'Indonesian',
    tier: 'A',
    priceIdr: 1350000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'Jimbaran-market seafood grilled Balinese style — sate lilit, a hero snapper and king prawn platter with sambal matah, and pisang goreng to finish.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Sate Lilit Ikan',
            description:
              'Minced fresh snapper and mackerel wrapped around lemongrass stalks. Grilled over charcoal until golden. Served with sambal matah for dipping.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Jimbaran-Style Seafood Soup (Sup Ikan)',
            description:
              'Fragrant fish broth simmered with snapper head and bones. Loaded with prawns and squid. Spiced with ginger, turmeric, tamarind and lemongrass.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Balinese Grilled Seafood Platter',
            description:
              'Whole grilled snapper (2kg), king prawns (1.2kg) and squid (600g) charred over charcoal. Basted with garlic-turmeric butter. Served on banana leaves with sambal matah and sambal kecap. This is the hero sharing platter.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Nasi Goreng Seafood',
            description:
              'Fragrant fried rice with prawns, squid and egg. Seasoned with kecap manis and shrimp paste. Topped with crispy shallots.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Lawar-Style Young Coconut & Green Bean Salad',
            description:
              'Shredded young coconut and blanched green beans. Tossed with fried shallots, kaffir lime and a touch of chilli.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Pisang Goreng with Coconut Ice Cream & Palm Sugar',
            description:
              'Crispy battered bananas fried to order. Served with house-made coconut ice cream and warm gula melaka sauce.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'GF adaptable', 'Dairy-free adaptable', 'Halal'],
    addOns: [
      {
        name: 'Extra sate lilit (4 skewers per guest)',
        priceIdr: 140000,
        perGuest: true,
      },
      {
        name: 'Grilled corn with sambal butter',
        priceIdr: 80000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-catering-bali-bbq-grill-satay.webp',
    imageAlt: 'Indonesian Seafood menu — sate lilit and Balinese grilled seafood over charcoal',
  },
  {
    code: 'S-B1',
    name: 'Italian Seafood',
    family: 'seafood',
    theme: 'Italian',
    tier: 'B',
    priceIdr: 2300000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'Lobster grilled with garlic butter, silky risotto ai frutti di mare and tiramisu al limoncello — la dolce vita, served family-style.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Tuna & Salmon Tartare with Avocado & Salmon Roe',
            description:
              'Fresh diced tuna and premium Norwegian salmon. Tossed with shallots, capers and extra virgin olive oil. Served on crostini with avocado cream and salmon roe.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Seafood Risotto — Risotto ai Frutti di Mare',
            description:
              'Creamy Arborio rice cooked with fish stock and white wine. Loaded with prawns, mussels and tender squid. Finished with parmesan and fresh parsley.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Grilled Lobster with Garlic Butter & Seared Salmon',
            description:
              'Whole lobster (2kg, half per person) grilled with lemon and herb garlic butter. Accompanied by pan-seared salmon fillets (800g) with crispy skin. Served with lemon wedges and drawn butter.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Rosemary & Garlic Roasted Potatoes',
            description: 'Golden potatoes roasted with fresh rosemary, garlic and olive oil.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Insalata di Rucola with Parmesan & Lemon',
            description: 'Peppery rocket leaves dressed with lemon juice and olive oil. Shaved parmesan on top.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Tiramisu al Limoncello',
            description:
              'Individual glasses layered with mascarpone cream, limoncello-soaked ladyfingers and lemon curd. Dusted with cocoa and lemon zest.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'GF adaptable', 'Dairy-free adaptable', 'Halal'],
    addOns: [
      {
        name: 'Burrata with grilled tiger prawns',
        priceIdr: 220000,
        perGuest: true,
      },
      {
        name: 'Grilled octopus with paprika potatoes',
        priceIdr: 255000,
        perGuest: true,
      },
    ],
    image: '/generated/pkg-italian.webp',
    imageAlt: 'Italian Seafood menu — grilled lobster, seafood risotto and tiramisu al limoncello',
  },
  {
    code: 'S-B2',
    name: 'French Seafood',
    family: 'seafood',
    theme: 'French',
    tier: 'B',
    priceIdr: 2300000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'A fruits de mer tower, saffron bouillabaisse and lobster Thermidor with truffle butter, finished with classic vanilla crème brûlée.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Grand Fruits de Mer Tower — Oysters, Prawns & Tuna Tartare',
            description:
              'Fresh local oysters (18 pieces) on crushed ice. Accompanied by poached prawns with cocktail sauce and tuna tartare with shallots and capers. Served as a stunning tiered platter.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Bouillabaisse with Rouille & Gruyère Croutons',
            description:
              'Traditional Provençal fish stew. Simmered with snapper, gurnard, prawns and mussels. Enriched with saffron and fennel. Served with rouille sauce and gruyère-topped croutons.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Lobster Thermidor (Half per Guest) with Truffle Butter',
            description:
              'Whole lobster (2kg) split and grilled. Finished with a rich Thermidor sauce of cream, mustard and gruyère. Accompanied by seared salmon fillets with lemon beurre blanc.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Gratin Dauphinois',
            description: 'Thinly sliced potatoes baked in cream and garlic. Topped with bubbling gruyère.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Haricots Verts with Shallots & Toasted Almonds',
            description: 'French green beans blanched and sautéed with butter, shallots and toasted almonds.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Crème Brûlée with Vanilla Bean & Raspberry Coulis',
            description:
              'Rich vanilla custard with a caramelised sugar crust. Served with a sharp raspberry coulis for balance.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'GF adaptable', 'Dairy-free adaptable', 'Halal'],
    addOns: [
      {
        name: 'Seared foie gras with fig compote',
        priceIdr: 365000,
        perGuest: true,
      },
      {
        name: 'Whole baked sea bass in salt crust',
        priceIdr: 510000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-finedining-bali-luna-plating.webp',
    imageAlt: 'French Seafood menu — lobster Thermidor and fine-dining plating by a private chef',
  },
  {
    code: 'S-C1',
    name: 'Japanese Fusion Seafood',
    family: 'seafood',
    theme: 'Japanese Fusion',
    tier: 'C',
    priceIdr: 3200000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'Sashimi sliced to order, miso-glazed black cod and a teppanyaki tower of lobster, prawns and scallops, with matcha lava cake to finish.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Premium Sashimi Platter — Tuna, Salmon, Scallop & Salmon Roe',
            description:
              'Sashimi-grade tuna akami, Norwegian salmon and hand-dived scallops. Sliced to order and arranged on a bed of crushed ice. Garnished with salmon roe, shiso leaves and fresh wasabi. Served with premium soy sauce.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Miso-Glazed Black Cod with Edamame & Pickled Ginger',
            description:
              'Buttery black cod marinated for 48 hours in sweet white miso, mirin and sake. Grilled until caramelised and glossy. Served with edamame beans and house-pickled ginger.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Teppanyaki Seafood Tower — Lobster, Prawns, Scallops & Salmon',
            description:
              'Whole lobster (2kg) halved and grilled with garlic butter. Tiger prawns (1.2kg) seared with yuzu kosho. Hand-dived scallops (800g) pan-seared to golden. Salmon (800g) torched with teriyaki glaze. Served on a tiered stand with four dipping sauces.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Truffle Yaki-Onigiri',
            description:
              'Grilled rice triangles glazed with soy and sesame. Finished with black truffle oil and nori strips.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Wakame & Cucumber Sunomono',
            description: 'Delicate seaweed salad with rice vinegar, sesame and julienne cucumber. Light and refreshing.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Matcha Lava Cake with Yuzu Sorbet & Red Bean',
            description:
              'Warm matcha chocolate cake with a molten centre. Served with sharp yuzu sorbet and sweet red bean paste.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'GF adaptable', 'Dairy-free adaptable', 'Halal'],
    addOns: [
      {
        name: 'Wagyu beef tataki with ponzu',
        priceIdr: 510000,
        perGuest: true,
      },
      {
        name: 'Whole king crab leg with miso butter',
        priceIdr: 800000,
        perGuest: true,
      },
    ],
    image: '/generated/luna-flame.webp',
    imageAlt: 'Japanese Fusion Seafood menu — teppanyaki seafood tower grilled over open flame',
  },
  {
    code: 'S-C2',
    name: 'Surf & Turf Seafood',
    family: 'seafood',
    theme: 'Surf & Turf (Seafood Focus)',
    tier: 'C',
    priceIdr: 3600000,
    minGuests: 6,
    guestNoun: 'guest',
    description:
      'A grand seafood tower, caviar-topped scallops and charcoal lobster with wagyu striploin — the ultimate surf and turf centrepiece.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Grand Seafood Tower — Oysters, Sashimi, Scallops & Prawns',
            description:
              'Tiered tower presentation for maximum impact. Fresh local oysters (24 pieces), tuna and salmon sashimi, seared scallops with yuzu, and poached king prawns. Served with cocktail sauce, soy-wasabi and lemon.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Seared Scallops with Caviar & Crème Fraîche',
            description:
              'Hand-dived scallops (1kg) seared to golden perfection. Topped with premium caviar (60g) and a quenelle of crème fraîche. Garnished with chives and lemon zest.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Whole Grilled Lobster with Wagyu Surf & Turf',
            description:
              'Whole lobster (2.5kg) halved and grilled over charcoal. Basted with truffle garlic butter. Accompanied by seared wagyu beef striploin (800g, 120g per guest). Served with drawn butter and red wine jus. This is the ultimate sharing centrepiece.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Black Truffle Mashed Potatoes',
            description: 'Creamy mashed potatoes folded with butter and black truffle oil. Finished with shaved truffle.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Charred Broccolini with Garlic & Lemon',
            description: 'Broccolini charred on the grill. Tossed with garlic, lemon zest and chilli flakes.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'White Chocolate & Yuzu Mousse with Passionfruit Coulis',
            description:
              'Silky white chocolate mousse brightened with yuzu. Topped with tart passionfruit coulis and edible flowers.',
          },
        ],
      },
    ],
    dietaryTags: ['Pescatarian', 'GF adaptable', 'Dairy-free adaptable', 'Halal'],
    addOns: [
      {
        name: 'Extra wagyu striploin 100g',
        priceIdr: 510000,
        perGuest: true,
      },
      {
        name: 'Whole lobster tail with miso butter',
        priceIdr: 655000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-catering-bali-bbq-grill-surfturf.webp',
    imageAlt: 'Surf & Turf Seafood menu — grilled lobster and wagyu beef on the barbecue',
  },
];
