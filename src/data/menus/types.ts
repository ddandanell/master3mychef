/**
 * Shared types for the myCHEF.id menu catalogue (50 menus, 6 collections).
 * Source data: client catalogue research files (July 2026).
 * Prices are the approved premium price list — do NOT "correct" them
 * against the older research/PDF prices.
 */

export type MenuFamily =
  | 'vegetarian'
  | 'seafood'
  | 'mixed-meats'
  | 'single-meat'
  | 'three-course'
  | 'kids'
  | 'bbq-mixed'
  | 'bbq-seafood'
  | 'bbq-specialty';

export type MenuTier = 'A' | 'B' | 'C';

export interface MenuDish {
  name: string;
  description?: string;
}

/** One labelled course section on a menu card, e.g. "Starter" or "Grill Station — Main Proteins". */
export interface MenuCourse {
  label: string;
  dishes: MenuDish[];
}

export interface MenuAddOn {
  name: string;
  priceIdr: number;
  /** true = price is per guest/child, false = flat rate */
  perGuest: boolean;
  note?: string;
}

export interface Menu {
  /** Unique code, e.g. 'V-A1', '3C-B2', 'K4', 'BBQ-SP3'. Never derive keys from name. */
  code: string;
  name: string;
  family: MenuFamily;
  /** Cuisine theme, e.g. 'Mediterranean', 'Japanese Fusion'. Not unique across families. */
  theme: string;
  tier?: MenuTier;
  priceIdr: number;
  minGuests: number;
  /** 'guest' for adults, 'child' for kids' menus */
  guestNoun: 'guest' | 'child';
  /** Short appetite-led teaser, 1–2 lines, British English. */
  description: string;
  courses: MenuCourse[];
  /** Normalised dietary labels, e.g. 'Vegetarian', 'Halal adaptable', 'GF adaptable', 'Nut-free'. */
  dietaryTags: string[];
  addOns: MenuAddOn[];
  /** Root-absolute path to an existing asset in /public, e.g. '/generated/pkg-italian.webp'. */
  image: string;
  imageAlt: string;
  /** Kids' menus: build-your-own / interactive experience. */
  interactive?: boolean;
  /** BBQ seafood menus: oysters included or available as add-on. */
  oysters?: 'included' | 'optional';
  /** Kids' menus: structured allergen lines (contains / allergens / notes). */
  allergenInfo?: string[];
  /** BBQ specialty menus: theatre / interaction selling points. */
  specialFeatures?: string[];
}
