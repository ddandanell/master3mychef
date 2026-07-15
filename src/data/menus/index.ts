import { WHATSAPP_NUMBER } from '../../lib/whatsapp';
import type { Menu, MenuFamily, MenuTier } from './types';
import { VEGETARIAN_MENUS } from './vegetarian';
import { SEAFOOD_MENUS } from './seafood';
import { MIXED_MEATS_MENUS } from './mixedMeats';
import { SINGLE_MEAT_MENUS } from './singleMeat';
import { THREE_COURSE_MENUS } from './threeCourse';
import { KIDS_MENUS } from './kids';
import { BBQ_MIXED_MENUS } from './bbqMixed';
import { BBQ_SEAFOOD_MENUS } from './bbqSeafood';
import { BBQ_SPECIALTY_MENUS } from './bbqSpecialty';

export * from './types';
export {
  VEGETARIAN_MENUS,
  SEAFOOD_MENUS,
  MIXED_MEATS_MENUS,
  SINGLE_MEAT_MENUS,
  THREE_COURSE_MENUS,
  KIDS_MENUS,
  BBQ_MIXED_MENUS,
  BBQ_SEAFOOD_MENUS,
  BBQ_SPECIALTY_MENUS,
};

/** The 24 Classic Set Menus (fine dining). */
export const CLASSIC_MENUS: Menu[] = [
  ...VEGETARIAN_MENUS,
  ...SEAFOOD_MENUS,
  ...MIXED_MEATS_MENUS,
  ...SINGLE_MEAT_MENUS,
];

/** The 12 BBQ Grill menus. */
export const BBQ_MENUS: Menu[] = [
  ...BBQ_MIXED_MENUS,
  ...BBQ_SEAFOOD_MENUS,
  ...BBQ_SPECIALTY_MENUS,
];

/** All 50 menus in the catalogue. */
export const ALL_MENUS: Menu[] = [
  ...CLASSIC_MENUS,
  ...THREE_COURSE_MENUS,
  ...KIDS_MENUS,
  ...BBQ_MENUS,
];

export const FAMILY_LABEL: Record<MenuFamily, string> = {
  vegetarian: 'Vegetarian',
  seafood: 'Seafood',
  'mixed-meats': 'Mixed Meats',
  'single-meat': 'Single-Meat',
  'three-course': 'Three-Course',
  kids: "Kids'",
  'bbq-mixed': 'Mixed & Meat Grills',
  'bbq-seafood': 'Seafood Grills',
  'bbq-specialty': 'Specialty Grills',
};

export const TIER_LABEL: Record<MenuTier, string> = {
  A: 'Best-Value',
  B: 'Premium',
  C: 'Luxury',
};

/** IDR 1,350,000 formatting. */
export function formatIdr(amount: number): string {
  return `IDR ${amount.toLocaleString('en-US')}`;
}

export function getMenusByFamily(family: MenuFamily): Menu[] {
  return ALL_MENUS.filter((menu) => menu.family === family);
}

export function getMenuByCode(code: string): Menu | undefined {
  return ALL_MENUS.find((menu) => menu.code === code);
}

/**
 * Quote CTA link for a menu card (client-specified template).
 * "Hi myCHEF, I'm interested in the <Name> menu for <min>+ guests. Can you send me a quote?"
 */
export function buildMenuQuoteUrl(menu: Menu): string {
  const noun = menu.guestNoun === 'child' ? 'children' : 'guests';
  const text = `Hi myCHEF, I'm interested in the ${menu.name} menu for ${menu.minGuests}+ ${noun}. Can you send me a quote?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
