import type { Menu } from './types';

export const VEGETARIAN_MENUS: Menu[] = [
  {
    code: 'V-A1',
    name: 'Mediterranean Vegetarian',
    family: 'vegetarian',
    theme: 'Mediterranean',
    tier: 'A',
    priceIdr: 1350000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      'A sun-drenched Mediterranean feast of olive oil, herbs and flame-kissed vegetables — colourful sharing platters straight from a Greek island taverna.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Mezze Sharing Platter',
            description:
              "Hummus, baba ganoush, and tzatziki arranged around warm za'atar flatbread triangles. Finished with kalamata olives, cucumber ribbons, and a drizzle of Bali-sourced extra virgin olive oil. Sambal matah served on the side for a Balinese twist. Guests tear and share.",
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Grilled Halloumi & Watermelon Salad',
            description:
              'Thick slabs of halloumi seared on the villa BBQ until golden. Paired with chilled watermelon wedges, fresh mint, and toasted pine nuts. Dressed with lime juice and local organic honey. Sweet, salty, and impossible to stop eating.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Wood-Fired Mediterranean Vegetable & Feta Bake',
            description:
              'Layers of roasted aubergine, zucchini, red capsicum, and vine tomatoes baked with garlic, oregano, and extra virgin olive oil. Topped with crumbled Greek feta and fresh parsley. Served in the baking dish for rustic appeal. Vegetables are sourced from Bedugul organic farms.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Lemon & Herb Roasted Potatoes',
            description:
              'Kipfler potatoes roasted until golden and crispy. Tossed with fresh lemon juice, dried oregano, and sea salt. Cooked in the same oven as the main for efficiency.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Chargrilled Asparagus & Green Beans',
            description:
              'Local organic green beans and imported asparagus charred on the BBQ. Dressed simply with lemon zest, olive oil, and flaky sea salt.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Baklava Cups with Coconut Yoghurt',
            description:
              'Crisp filo pastry layered with crushed walnuts, local Bali honey, and cinnamon. Baked in muffin tins for individual portions. Served with a dollop of coconut yoghurt and a drizzle of honey. Warm, sticky, and deeply satisfying.',
          },
        ],
      },
    ],
    dietaryTags: ['Vegetarian', 'Vegan adaptable', 'GF adaptable', 'Halal', 'Dairy-free adaptable'],
    addOns: [
      {
        name: 'Truffle & Parmesan Arancini Balls',
        priceIdr: 140000,
        perGuest: true,
        note: '3 pieces per guest',
      },
      {
        name: 'Extra Sambal Matah & Warm Flatbread',
        priceIdr: 65000,
        perGuest: true,
      },
    ],
    image: '/generated/mychef-events-bali-party-medi.webp',
    imageAlt: 'Mediterranean Vegetarian menu — colourful sharing platters of grilled vegetables, dips and flatbread',
  },
  {
    code: 'V-A2',
    name: 'Indonesian Vegetarian',
    family: 'vegetarian',
    theme: 'Indonesian',
    tier: 'A',
    priceIdr: 1250000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      "A vibrant celebration of Indonesia's meat-free classics — fragrant rendang, sizzling sambals and golden fritters from the spice islands.",
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Gorengan Platter with Sambal Trio',
            description:
              "Golden tempeh fritters, sweet potato croquettes, and vegetable spring rolls arranged on a banana leaf-lined platter. Served with three dipping sambals: classic sambal matah (minced shallot, lemongrass, chilli, coconut oil), roasted tomato sambal, and sweet soy with sliced bird's eye chilli. Crispy, spicy, and utterly addictive.",
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Gado-Gado Sharing Bowl',
            description:
              'Blanched local vegetables (long beans, cabbage, bean sprouts, spinach) and fried tofu cubes drenched in warm house-made peanut sauce. Topped with prawn crackers (omit for vegan), fried shallots, and a halved boiled egg. Served in a large ceramic bowl with serving spoons. The peanut sauce is made fresh from roasted Balinese peanuts.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Vegetable Rendang with Nasi Kuning',
            description:
              'A rich, slow-cooked rendang sauce made with coconut cream, galangal, turmeric, kaffir lime leaves, and lemongrass. Simmered with chunks of jackfruit, king oyster mushrooms, and local firm tofu until deeply caramelised. Served with fragrant nasi kuning (turmeric coconut rice) pressed into a dome shape and garnished with crispy fried shallots. This is the hero dish. Guests help themselves from a central clay pot.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Sayur Urab',
            description:
              'Steamed local greens and bean sprouts tossed with spiced grated coconut, shallots, and a squeeze of lime. A classic Balinese vegetable dish that adds freshness and crunch.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Sambal Goreng Kentang',
            description:
              'Fried baby potatoes and tempeh cubes in a rich, sweet-spicy red chilli paste with kaffir lime leaves. Cooked until glossy and deeply flavoured.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Kolak Pisang',
            description:
              'Warm Indonesian dessert soup of coconut milk, palm sugar, and vanilla-scented banana. Topped with crushed ice for contrast. Served in glass cups to show the caramel-coconut layers. Comforting and not overly sweet.',
          },
        ],
      },
    ],
    dietaryTags: ['Vegetarian', 'Vegan adaptable', 'GF adaptable', 'Halal', 'Dairy-free adaptable'],
    addOns: [
      {
        name: 'Extra Nasi Kuning & Sambal Matah',
        priceIdr: 80000,
        perGuest: true,
      },
      {
        name: 'Tropical Fruit Platter with Coconut Cream',
        priceIdr: 110000,
        perGuest: true,
      },
    ],
    image: '/generated/balinese-spread.webp',
    imageAlt: 'Indonesian Vegetarian menu — traditional Balinese spread of rendang, nasi kuning and sambals',
  },
  {
    code: 'V-B1',
    name: 'Italian Vegetarian',
    family: 'vegetarian',
    theme: 'Italian',
    tier: 'B',
    priceIdr: 2100000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      'A rustic Italian feast of handmade pasta, aged cheeses and slow-simmered sauces, served on oversized platters in the spirit of a Sunday lunch.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Burrata & Heirloom Tomato Crostini Platter',
            description:
              'Creamy Puglian burrata torn open over charred sourdough slices. Topped with sliced local heirloom tomatoes, fresh basil, extra virgin olive oil, and aged balsamic vinegar. Finished with flaky Maldon sea salt. Sambal matah served as a bold condiment on the side. Guests assemble their own.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Hand-Rolled Ricotta & Spinach Tortellini in Sage Butter',
            description:
              'Delicate pasta parcels filled with fresh ricotta, organic spinach, and nutmeg. Dressed in nutty brown butter with crispy fried sage leaves and a shower of aged Parmigiano-Reggiano. Served in a large pasta bowl with a serving spoon. Made fresh on-site with a pasta machine.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Truffle Mushroom Risotto',
            description:
              'Creamy Arborio rice slow-stirred with white wine, shallots, and vegetable stock. Finished with a generous amount of Parmigiano-Reggiano, cold butter, and a drizzle of truffle oil. Topped with sauteed wild mushrooms (oyster, shiitake, and king trumpet) and micro herbs. Served in a large shallow bowl with a wooden spoon. This is the showstopper. The stirring rhythm is meditative. The result is pure comfort.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Wood-Fired Rosemary Focaccia',
            description:
              'Hand-stretched focaccia dimpled with fingertips, drizzled with olive oil, and scattered with fresh rosemary and sea salt. Baked in the villa oven until golden and pillowy. Tear and share.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Grilled Zucchini & Capsicum Antipasti',
            description:
              'Slices of zucchini, red capsicum, and red onion charred on the BBQ. Dressed with red wine vinegar, garlic, and oregano. Served at room temperature for a true Italian feel.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Tiramisu Sharing Bowl',
            description:
              'Classic Italian tiramisu built in a large glass trifle bowl to show the layers. Espresso-soaked ladyfingers, mascarpone cream, and a dusting of Valrhona cocoa powder. Made 24 hours ahead for perfect flavour marriage. Served with long spoons for communal scooping.',
          },
        ],
      },
    ],
    dietaryTags: ['Vegetarian', 'Vegan adaptable', 'GF adaptable', 'Halal', 'Dairy-free adaptable'],
    addOns: [
      {
        name: 'Fresh Black Truffle Shaving',
        priceIdr: 510000,
        perGuest: true,
        note: 'Shaved tableside for drama',
      },
      {
        name: 'Aged Parmigiano-Reggiano Flight',
        priceIdr: 180000,
        perGuest: true,
        note: '3 ages with local honeycomb',
      },
    ],
    image: '/generated/pkg-italian.webp',
    imageAlt: 'Italian Vegetarian menu — rustic handmade pasta and sharing platters with aged cheeses',
  },
  {
    code: 'V-B2',
    name: 'French Vegetarian',
    family: 'vegetarian',
    theme: 'French',
    tier: 'B',
    priceIdr: 2250000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      'An elegant French farmhouse feast of golden gratins, herb-laden tarts and a dramatic cheese course — rustic yet refined provincial cooking.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Gougeres & Marinated Olive Platter',
            description:
              'Warm cheese choux puffs (gougeres) made with Gruyere and black pepper. Served alongside a selection of marinated olives, cornichons, and dried figs. Finished with a dish of Balinese sambal matah spiked with Dijon mustard. The perfect French-Indonesian marriage to start the evening.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Caramelised Onion & Goat Cheese Tart',
            description:
              'Buttery puff pastry tart with slow-cooked sweet onions, fresh goat cheese, and thyme. Baked until the edges are puffed and golden. Dressed with local organic rocket and a drizzle of honey. Cut into thick wedges and served on a wooden board.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Vegetable Ratatouille Gratin with Truffle Crust',
            description:
              'Layered ratatouille of zucchini, aubergine, capsicum, and vine tomatoes baked in a rich tomato-herb sauce. Topped with a golden crust of breadcrumbs, Gruyere, and a whisper of truffle oil. Served bubbling from the oven in a cast-iron dish. This is the hero. The layering takes time but creates stunning presentation. Guests scoop generous portions onto their plates.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Creamy Dauphinoise Potatoes',
            description:
              'Thinly sliced potatoes baked in garlic-infused cream with Gruyere and nutmeg until soft and golden on top. Cooked in the same oven as the tart for efficiency. Pure indulgence.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Buttered French Beans with Shallots',
            description:
              'Blanched local green beans tossed in browned butter with crispy fried shallots and fresh parsley. Simple, classic, and essential.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Vanilla Creme Brulee with Tropical Fruit',
            description:
              'Rich vanilla bean custard with a shattering caramelised sugar top. Garnished with fresh local mango, passion fruit, and dragon fruit. The crack of the caramel spoon is the soundtrack to this dessert. Made in individual ramekins for that essential Instagram moment.',
          },
        ],
      },
    ],
    dietaryTags: ['Vegetarian', 'Vegan adaptable', 'GF adaptable', 'Halal', 'Dairy-free adaptable'],
    addOns: [
      {
        name: 'French Cheese Board',
        priceIdr: 255000,
        perGuest: true,
        note: 'Brie, Comte, Roquefort with walnut bread',
      },
      {
        name: 'Truffle Honey Drizzle on Cheese',
        priceIdr: 140000,
        perGuest: true,
      },
    ],
    image: '/generated/luna-detail.webp',
    imageAlt: 'French Vegetarian menu — elegant farmhouse dishes and fine-dining plating detail',
  },
  {
    code: 'V-C1',
    name: 'Japanese Fusion Vegetarian',
    family: 'vegetarian',
    theme: 'Japanese Fusion',
    tier: 'C',
    priceIdr: 3400000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      'Japanese precision meets Balinese ingredients — handmade gyoza, yuzu kosho and truffle-miso king oyster mushroom with clean, architectural presentation.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Edamame & Miso Caramelised Eggplant Platter',
            description:
              'Two-bite offerings: warm edamame pods tossed with togarashi and sea salt, and glazed miso eggplant (nasu dengaku) on ceramic spoons. The eggplant is roasted with white miso, mirin, and sake until glossy and melting. Garnished with toasted sesame seeds and micro shiso. Served on a dark slate for contrast.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Handmade Vegetable Gyoza with Yuzu Dipping Sauce',
            description:
              'Delicate dumplings filled with finely chopped organic cabbage, shiitake mushrooms, glass noodles, and ginger. Pan-fried until crispy on one side and steamed on the other. Served with yuzu kosho dipping sauce and sambal matah as a Balinese fusion condiment. Made entirely by hand on-site. 5 pieces per guest arranged on a long sharing plate.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Truffle Miso-Glazed King Oyster Mushroom with Sushi Rice',
            description:
              'Thick slices of king oyster mushroom scored and roasted with a white miso, sake, and truffle glaze until caramelised and meaty. Served on a bed of perfectly seasoned sushi rice with pickled ginger, wasabi, and nori strips. Accompanied by a bowl of hot miso soup with silken tofu and wakame. The mushroom is the star. It has the texture of scallops. The truffle-miso glaze is unforgettable.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Wakame & Cucumber Sunomono',
            description:
              'Refreshing Japanese cucumber salad with rehydrated wakame seaweed, rice vinegar, and sesame. Served chilled in small bowls for passing around.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Tempura Seasonal Vegetables',
            description:
              'Light, crispy tempura batter on sweet potato, pumpkin, shiso leaves, and okra. Served with tentsuyu dipping sauce (dash, mirin, soy). Fried to order for maximum crispness.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Matcha Mousse with White Chocolate & Sesame Crumb',
            description:
              'Silky matcha green tea mousse layered with white chocolate ganache in glass verrines. Topped with a black sesame crumb and a single gold leaf. Made the day before for perfect set and flavour development. Elegant and deeply flavourful.',
          },
        ],
      },
    ],
    dietaryTags: ['Vegetarian', 'Vegan adaptable', 'GF adaptable', 'Halal', 'Dairy-free adaptable'],
    addOns: [
      {
        name: 'Fresh Wasabi Root Grating',
        priceIdr: 400000,
        perGuest: true,
        note: 'Real wasabi, not paste',
      },
      {
        name: 'Sake Pairing',
        priceIdr: 655000,
        perGuest: true,
        note: '3 premium sakes',
      },
    ],
    image: '/generated/fine-dining-plating.webp',
    imageAlt: 'Japanese Fusion Vegetarian menu — refined plating with handmade gyoza and miso-glazed mushroom',
  },
  {
    code: 'V-C2',
    name: 'Healthy Breakfasts Vegetarian',
    family: 'vegetarian',
    theme: 'Healthy Breakfasts',
    tier: 'C',
    priceIdr: 2950000,
    minGuests: 5,
    guestNoun: 'guest',
    description:
      'A luxurious poolside brunch for health-conscious guests — vibrant breakfast boards, cloud-like ricotta hotcakes and golden turmeric nasi goreng.',
    courses: [
      {
        label: 'Canapé / Entrée',
        dishes: [
          {
            name: 'Wellness Breakfast Board',
            description:
              'A stunning grazing board featuring homemade granola clusters, fresh tropical fruits (dragon fruit, papaya, mango, passion fruit), coconut yoghurt, raw honeycomb, and chia seed pudding pots. Arranged on a large wooden board with small ceramic bowls. Guests help themselves while enjoying the morning sun. Edible flowers add colour.',
          },
        ],
      },
      {
        label: 'Starter',
        dishes: [
          {
            name: 'Smashed Avocado & Poached Eggs on Sourdough',
            description:
              'Thick slices of toasted sourdough topped with lemon-zested smashed avocado, perfectly poached organic eggs, and chilli flakes. Garnished with microgreens and local cherry tomatoes. Served on a large platter for guests to take their portion. A breakfast classic executed flawlessly.',
          },
        ],
      },
      {
        label: 'Main Course',
        dishes: [
          {
            name: 'Turmeric & Coconut Nasi Goreng with Tempeh',
            description:
              'Fragrant Indonesian fried rice cooked with coconut oil, turmeric, lemongrass, and kaffir lime. Loaded with crispy tempeh cubes, organic vegetables, and topped with a sunny-side-up fried egg. Served with sambal matah, pickled cucumber, and a wedge of lime. This is the savoury anchor of the brunch. The turmeric gives it a golden hue. The tempeh adds satisfying protein.',
          },
        ],
      },
      {
        label: 'Side One',
        dishes: [
          {
            name: 'Grilled Halloumi & Roasted Tomato Skewers',
            description:
              'Cubes of halloumi and vine tomatoes threaded onto lemongrass stalks and grilled until charred. Drizzled with local honey and black pepper. Fun, interactive, and delicious.',
          },
        ],
      },
      {
        label: 'Side Two',
        dishes: [
          {
            name: 'Green Goddess Smoothie Shots',
            description:
              'Small glasses of vibrant green smoothie made with local spinach, mango, banana, ginger, and coconut water. Refreshing and nutrient-dense. Served as a palate cleanser between courses.',
          },
        ],
      },
      {
        label: 'Dessert',
        dishes: [
          {
            name: 'Ricotta Hotcakes with Coconut Caramel',
            description:
              'Fluffy ricotta hotcakes cooked until golden and pillowy. Stacked and drizzled with homemade coconut caramel sauce (gula jawa and coconut cream). Topped with toasted coconut flakes and fresh seasonal berries. The centrepiece of the brunch. Guests photograph before eating.',
          },
        ],
      },
    ],
    dietaryTags: ['Vegetarian', 'Vegan adaptable', 'GF adaptable', 'Halal', 'Dairy-free adaptable'],
    addOns: [
      {
        name: 'Freshly Squeezed Tropical Juice Flight',
        priceIdr: 180000,
        perGuest: true,
        note: '3 juices: watermelon-mint, orange-carrot-ginger, dragon fruit-lime',
      },
      {
        name: 'Artisan Coffee Service',
        priceIdr: 140000,
        perGuest: true,
        note: 'Single-origin Balinese coffee, French press',
      },
    ],
    image: '/generated/mychef-catering-bali-floating-breakfast.webp',
    imageAlt: 'Healthy Breakfasts Vegetarian menu — vibrant floating breakfast and poolside brunch spread',
  },
];
