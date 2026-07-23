// PressStrip previously rendered an "As Featured In" list of publications.
// That list was not linked to verified coverage, so the section is removed
// to avoid unverifiable E-E-A-T claims. Component kept as a no-op so all
// 70+ call sites stay intact without a visual regression in layout structure.
export default function PressStrip() {
  return null
}
