import type { Menu } from './types';

/**
 * Single-Meat collection — one hero protein per menu, 6 set menus.
 * Source: client catalogue research (menus-single-meat.md), July 2026.
 * Prices are the approved premium price list; add-ons are research
 * prices × 1.45, rounded to the nearest IDR 5,000 (half up).
 */
export const SINGLE_MEAT_MENUS: Menu[] = [
  {
    code: 'SM-A1',
    name: 'French Duck',
    family: 'single-meat',
    theme: 'French',
    tier: 'A',
    priceIdr: 1450000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      'A love letter to French bistro cooking: duck rillettes, crystal consommé and golden confit leg with cherry gastrique, finished with crème brûlée.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Duck Rillettes Crostini',
            description:
              'Slow-poached duck leg shredded through its own rendered fat. Spread thick on toasted baguette rounds. Topped with cornichon and micro parsley. Served on a shared slate platter.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Duck Consommé with Julienne Vegetables',
            description:
              'Crystal-clear duck broth simmered for six hours. Shredded duck breast, fine carrot and celery batons, fresh chervil. Poured tableside from a porcelain jug.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Confit Duck Leg with Cherry Gastrique',
            description:
              'Two whole local ducks yield twelve confit legs (six guests). Salt-cured overnight, slow-cooked in rendered duck fat until melting. Finished in a hot oven for golden, crackling skin. Served on a shared platter with warm cherry gastrique and duck jus.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Pommes Dauphinoise',
            description:
              'Thinly sliced local potato baked in cream and garlic. Gratinéed until bubbling and golden. Cut into squares for family-style sharing.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Haricots Verts with Shallots and Almonds',
            description:
              'Blanched French beans tossed in butter with crispy shallots and toasted almond flakes.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Classic Crème Brûlée',
            description:
              'Rich vanilla custard with a caramelised sugar crust. Cracked at the table. Served in shared ramekins with two spoons each.',
          },
        ],
      },
    ],
    dietaryTags: ['GF adaptable'],
    addOns: [
      {
        name: 'Artisan Cheese Selection (triple-cream brie, aged comté, walnut bread, fig jam)',
        priceIdr: 270000,
        perGuest: true,
      },
      {
        name: 'Wine Pairing (3 glasses: sparkling, red burgundy, dessert wine)',
        priceIdr: 510000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-finedining-bali-luna-plating.webp',
    imageAlt: 'French Duck single-meat menu — confit duck leg with cherry gastrique, French fine dining plating',
  },
  {
    code: 'SM-A2',
    name: 'Healthy Breakfasts Chicken',
    family: 'single-meat',
    theme: 'Healthy Breakfasts',
    tier: 'A',
    priceIdr: 1400000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      'A lighter, brighter table: smoked chicken and avocado salad, herb-roasted free-range chicken carved at the table, and Greek yoghurt panna cotta.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Chicken Liver Crostini with Caramelised Onion',
            description:
              'Free-range chicken livers pan-seared with thyme and brandy. Blended smooth with butter. Piped onto toasted sourdough with sweet onion jam. Shared wooden platter.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Smoked Chicken and Avocado Salad',
            description:
              'Breast meat lightly smoked over hickory chips in a standard pan. Sliced and arranged with ripe avocado, toasted pumpkin seeds, ruby grapefruit segments, and a lime vinaigrette. Shared bowl.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Whole Herb-Roasted Free-Range Chicken with Pan Jus',
            description:
              'Two whole ayam kampung (≈1.4 kg each) stuffed with lemon, garlic, and fresh thyme. Roasted until golden and rested. Carved at the table into thick slices. Natural pan jus deglazed with white wine and rosemary. Family-style platter.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Quinoa and Roasted Vegetable Salad',
            description:
              'Tri-colour quinoa tossed with roasted pumpkin, zucchini, red onion, and fresh herbs. Dressed with lemon and extra virgin olive oil. Warm or room temperature.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Grilled Asparagus with Lemon Zest',
            description:
              'Thick asparagus spears charred on the BBQ grill. Finished with lemon zest, flaky salt, and a drizzle of olive oil.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Greek Yoghurt Panna Cotta with Mixed Berries',
            description:
              'Lighter take on the Italian classic. Set with gelatine, unmoulded onto plates. Topped with macerated local strawberries, blueberries, and a berry coulis.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable'],
    addOns: [
      {
        name: 'Free-Range Eggs Benedict (poached eggs, hollandaise, smoked chicken)',
        priceIdr: 210000,
        perGuest: true,
      },
      {
        name: 'Freshly Squeezed Juice Flight (orange, watermelon, green detox)',
        priceIdr: 125000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-catering-bali-floating-breakfast.webp',
    imageAlt: 'Healthy Breakfasts Chicken single-meat menu — herb-roasted free-range chicken breakfast spread',
  },
  {
    code: 'SM-B1',
    name: 'Japanese Fusion Beef',
    family: 'single-meat',
    theme: 'Japanese Fusion',
    tier: 'B',
    priceIdr: 2100000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      'Beef tataki, miso soup with gyoza and 24-hour miso-marinated Angus sirloin from the grill — Japanese finesse, finished with matcha crème brûlée.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Beef Tataki on Crispy Rice Cracker',
            description:
              'Angus beef sirloin seared 30 seconds per side, iced, and sliced paper-thin. Dressed with ponzu, grated daikon, micro shiso, and crispy garlic. Arranged on a shared platter.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Miso Soup with Beef-Filled Gyoza',
            description:
              'Dashi-based miso soup with silken tofu and wakame. Two house-made gyoza per guest filled with minced Angus beef, ginger, and spring onion. Seared and floated in the broth.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Miso-Marinated Angus Beef Sirloin with Teriyaki Glaze',
            description:
              '1.2 kg centre-cut Angus sirloin marinated 24 hours in white miso, mirin, and sake. Seared hard on the BBQ grill. Finished in the oven to medium-rare. Sliced thick and fanned on a shared platter. Brushed with house teriyaki glaze. Garnished with sesame seeds and sliced spring onion.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Smoked Miso Eggplant (Nasu Dengaku)',
            description:
              'Local eggplant halved and scored. Baked until custardy. Glazed with sweet miso and torched for caramelisation.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Japanese Cucumber Sunomono',
            description:
              'Thinly sliced cucumber pickled in rice vinegar, soy, and ginger. Topped with toasted sesame seeds. Refreshing palate cleanser.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Matcha Crème Brûlée',
            description:
              'Classic custard infused with premium Uji matcha. Caramelised sugar crust. Served with a single mochi ball.',
          },
        ],
      },
    ],
    dietaryTags: ['GF adaptable'],
    addOns: [
      {
        name: 'Sashimi-Grade Tuna Tataki',
        priceIdr: 415000,
        perGuest: true,
        note: 'adds second protein; only offered as supplementary',
      },
      {
        name: 'Premium Sake Pairing (3 varieties: junmai, ginjo, daiginjo)',
        priceIdr: 615000,
        perGuest: true,
      },
    ],
    image: '/generated/fine-dining-plating.webp',
    imageAlt: 'Japanese Fusion Beef single-meat menu — miso-marinated Angus sirloin, Japanese fine dining plating',
  },
  {
    code: 'SM-B2',
    name: 'Western Classics Pork',
    family: 'single-meat',
    theme: 'Western Classics',
    tier: 'B',
    priceIdr: 1950000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      'Pure indulgence: crispy pork belly bites, prosciutto-wrapped tenderloin with truffle jus, and a warm chocolate fondant to finish.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Crispy Pork Belly Bites with Apple Purée',
            description:
              'Cubes of slow-braised pork belly pressed and chilled. Deep-fried to order until shatteringly crisp. Dipped in smooth apple and cider purée. Served on a shared slate with micro herbs.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Pork and Foie Gras Terrine with Toasted Sourdough',
            description:
              'Coarse-ground pork shoulder and foie gras pressed into a loaf. Sliced thick and served with cornichons, grain mustard, and warm sourdough batons. Shared board.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Prosciutto-Wrapped Pork Tenderloin with Truffle Jus',
            description:
              '1.5 kg premium pork tenderloin trimmed and wrapped in Italian prosciutto. Seared and roasted to medium. Rested and sliced into thick medallions. Finished with a black truffle and red wine jus. Arranged on a shared platter with fresh rosemary.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Truffle and Parmesan Mashed Potato',
            description:
              'Butter-heavy mash folded through with shaved parmesan and truffle oil. Piped into a shared bowl. Extra parmesan grated at the table.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Honey-Glazed Heirloom Carrots with Thyme',
            description:
              'Rainbow carrots roasted with butter, thyme, and a drizzle of local honey. Garnished with toasted hazelnuts.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Warm Chocolate Fondant with Vanilla Bean Ice Cream',
            description:
              'Individual molten-centre chocolate puddings. Baked to order. Served with a quenelle of vanilla ice cream and a dusting of cocoa powder.',
          },
        ],
      },
    ],
    dietaryTags: ['GF adaptable'],
    addOns: [
      {
        name: 'Charcuterie Board Upgrade (add prosciutto, salami, duck rillettes, cheese)',
        priceIdr: 385000,
        perGuest: true,
      },
      {
        name: 'Red Wine Pairing (3 glasses: pinot noir, cabernet, port)',
        priceIdr: 560000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-catering-bali-pkg-roast.webp',
    imageAlt: 'Western Classics Pork single-meat menu — prosciutto-wrapped pork tenderloin roast, Western cuisine',
  },
  {
    code: 'SM-C1',
    name: 'BBQ Evenings Lamb',
    family: 'single-meat',
    theme: 'BBQ Evenings',
    tier: 'C',
    priceIdr: 3000000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      'Herb-crusted Australian lamb rack carved tableside, black garlic and truffle throughout, ending with a dark chocolate sphere melted before your eyes.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Lamb Tartare with Quail Egg and Truffle Oil',
            description:
              'Hand-diced lamb loin from the rack trim. Seasoned with Dijon mustard, capers, cornichon, and shallot. Topped with a raw quail egg yolk and a drizzle of black truffle oil. Served on chilled plates with crostini.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Seared Lamb Loin with Black Garlic and Micro Herbs',
            description:
              'Mini lamb loin chops from the rack, seared on the BBQ grill. Brushed with black garlic purée. Garnished with micro coriander and chilli threads. Shared platter.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Herb-Crusted Australian Lamb Rack, Carved Tableside',
            description:
              'Three full frenched lamb racks (≈2.4 kg total) for six guests. Herb crust: Dijon mustard, fresh rosemary, thyme, panko, and parmesan. Seared on the BBQ grill. Finished in the oven to medium-rare. Carved at the table into double-cut chops. Served with a double jus: red wine reduction and rosemary lamb jus. Family-style presentation on a heated platter.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Truffle and Parmesan Potato Purée',
            description:
              'Silky potato purée mounted with butter and cream. Folded through with aged parmesan and white truffle oil. Piped into a shared bowl.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Charred Broccolini with Garlic and Lemon',
            description:
              'Broccolini blistered on the BBQ grill. Dressed with roasted garlic, lemon zest, chilli flakes, and olive oil.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Dark Chocolate Sphere with Salted Caramel Core',
            description:
              'Individual chocolate domes filled with liquid salted caramel. Warm chocolate sauce poured tableside to melt the sphere. Revealing vanilla ice cream and caramel centre.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable'],
    addOns: [
      {
        name: 'Whole Roasted Cauliflower with Tahini and Pomegranate (show-stopping vegetarian centrepiece)',
        priceIdr: 285000,
        perGuest: true,
      },
      {
        name: 'Premium Wine Pairing (3 glasses: aged Bordeaux, Barossa shiraz, tawny port)',
        priceIdr: 945000,
        perGuest: true,
      },
    ],
    image: '/generated/pkg-bbq.webp',
    imageAlt: 'BBQ Evenings Lamb single-meat menu — herb-crusted Australian lamb rack from the BBQ grill',
  },
  {
    code: 'SM-C2',
    name: 'Indonesian Wagyu Beef',
    family: 'single-meat',
    theme: 'Indonesian',
    tier: 'C',
    priceIdr: 3200000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      'Wagyu satay with sambal matah, rendang spring rolls and bumbu Bali ribeye on banana leaf — Indonesian flavours at their most luxurious.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Wagyu Beef Satay with Sambal Matah',
            description:
              'Cubes of Wagyu sirloin skewered and grilled over charcoal on the BBQ grill. Basted with kecap manis and coconut oil. Served on a shared platter with raw sambal matah (shallot, lemongrass, chilli, lime, coconut oil) and compressed rice cakes (lontong).',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Wagyu Beef Rendang Spring Rolls',
            description:
              'Premium Wagyu beef cheek slow-braised in rendang spices until tender. Shredded and wrapped in spring roll pastry. Deep-fried until golden. Served with a turmeric and coconut dipping sauce. Shared platter, three pieces per guest.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Wagyu Beef Ribeye with Bumbu Bali and Sambal Kecap',
            description:
              '1.5 kg Wagyu ribeye (MB 5-7) rubbed with Bumbu Bali spice paste (shallot, garlic, ginger, turmeric, galangal, candlenut). Seared on the BBQ grill. Finished in the oven to medium-rare. Sliced thick and arranged on a banana leaf-lined platter. Drizzled with sambal kecap (sweet soy with chilli and lime). Garnished with crispy shallots and fried curry leaves.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Truffle Nasi Goreng',
            description:
              'Indonesian fried rice with kecap manis, shallots, and garlic. Finished with shaved black truffle and a fried quail egg on top. Shared in a heated clay pot.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Lawar-Style Vegetables with Toasted Coconut',
            description:
              'Fine-shredded green beans, cabbage, and young jackfruit. Tossed with roasted grated coconut, kaffir lime, and Balinese spices. Warm or at room temperature.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Pandan Crème Brûlée with Coconut and Palm Sugar',
            description:
              'Classic custard infused with fresh pandan. Set and caramelised. Served with a palm sugar syrup and toasted coconut flakes on the side.',
          },
        ],
      },
    ],
    dietaryTags: ['Halal adaptable', 'GF adaptable'],
    addOns: [
      {
        name: 'Whole Snapper in Banana Leaf (Ikan Pepes — adds fish protein as supplementary)',
        priceIdr: 430000,
        perGuest: true,
      },
      {
        name: 'Indonesian Spice Cocktail Flight (3 cocktails: arak-based, turmeric gin, pandan mule)',
        priceIdr: 690000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-catering-bali-bbq-grill-satay.webp',
    imageAlt: 'Indonesian Wagyu Beef single-meat menu — Wagyu satay and bumbu Bali ribeye, Indonesian cuisine',
  },
];
