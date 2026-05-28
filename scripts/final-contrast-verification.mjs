#!/usr/bin/env node

/**
 * Final Contrast Verification - All Fixes
 * Tests all 16+ critical color combinations after remediation
 */

const colors = {
  // Brand colors
  black: '#050505',
  white: '#F5F3EF',
  gold: '#7A5C13',
  goldLight: '#D4B43A',
  whatsapp: '#25D366',

  // Hub (default)
  hubBg: '#F5F3EF',
  hubText: '#1A1A1A',
  hubTextMuted: '#6B5B4E',
  hubAccent: '#7A5C13',

  // Luna (fine dining)
  lunaBg: '#050505',
  lunaText: '#F5F3EF',
  lunaTextMuted: '#9A9590',
  lunaAccent: '#C5A028',
  lunaAccentDark: '#7A5C13',

  // Sol (villa chef)
  solBg: '#F5F0E8',
  solText: '#2C2419',
  solTextMuted: '#6B5F52',
  solAccent: '#557147',

  // Aura (events)
  auraBg: '#FFFFFF',
  auraText: '#1A1A1A',
  auraTextMuted: '#4A4745',
  auraAccent: '#2C5F7C',
}

// Calculate relative luminance (WCAG formula)
function getLuminance(hex) {
  const rgb = parseInt(hex.slice(1), 16)
  const r = (rgb >> 16) & 255
  const g = (rgb >> 8) & 255
  const b = rgb & 255

  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  })

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

// Calculate contrast ratio
function getContrast(bgHex, textHex) {
  const l1 = getLuminance(bgHex)
  const l2 = getLuminance(textHex)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2)
}

const tests = [
  // Primary text (should all be AAA 7:1+)
  { name: 'Hub: Black text on white bg', bg: colors.hubBg, text: colors.hubText, min: 7, level: 'AAA' },
  { name: 'Luna: White text on black bg', bg: colors.lunaBg, text: colors.lunaText, min: 7, level: 'AAA' },
  { name: 'Sol: Dark text on cream bg', bg: colors.solBg, text: colors.solText, min: 7, level: 'AAA' },
  { name: 'Aura: Black text on white bg', bg: colors.auraBg, text: colors.auraText, min: 7, level: 'AAA' },

  // Muted text (should all be AA 4.5:1+)
  { name: 'Hub: Muted text on white bg', bg: colors.hubBg, text: colors.hubTextMuted, min: 4.5, level: 'AA' },
  { name: 'Luna: Muted text on black bg', bg: colors.lunaBg, text: colors.lunaTextMuted, min: 4.5, level: 'AA' },
  { name: 'Sol: Muted text on cream bg', bg: colors.solBg, text: colors.solTextMuted, min: 4.5, level: 'AA' },
  { name: 'Aura: Muted text on white bg', bg: colors.auraBg, text: colors.auraTextMuted, min: 4.5, level: 'AA' },

  // Accent colors as text (should all be AA 4.5:1+)
  { name: 'Hub: Accent text on white bg', bg: colors.hubBg, text: colors.hubAccent, min: 4.5, level: 'AA' },
  { name: 'Luna: Accent text on black bg', bg: colors.lunaBg, text: colors.lunaAccent, min: 4.5, level: 'AA' },
  { name: 'Sol: Accent text on cream bg', bg: colors.solBg, text: colors.solAccent, min: 4.5, level: 'AA' },
  { name: 'Aura: Accent text on white bg', bg: colors.auraBg, text: colors.auraAccent, min: 4.5, level: 'AA' },

  // Button combinations (white text on colored backgrounds - should all be AA 4.5:1+)
  { name: 'Hub: White text on accent bg', bg: colors.hubAccent, text: colors.white, min: 4.5, level: 'AA' },
  { name: 'Luna: White text on dark accent bg (FIXED)', bg: colors.lunaAccentDark, text: colors.white, min: 4.5, level: 'AA' },
  { name: 'Sol: White text on accent bg', bg: colors.solAccent, text: colors.white, min: 4.5, level: 'AA' },
  { name: 'Aura: White text on accent bg', bg: colors.auraAccent, text: colors.white, min: 4.5, level: 'AA' },

  // Focus rings (should be 3:1+)
  { name: 'Focus ring contrast on white', bg: colors.hubBg, text: colors.hubAccent, min: 3, level: 'Focus' },
  { name: 'Focus ring contrast on dark', bg: colors.lunaBg, text: colors.lunaAccent, min: 3, level: 'Focus' },
]

console.log('\n🎨 Final Contrast Verification Report\n')
console.log('═'.repeat(80))

let passed = 0
let failed = 0

tests.forEach(({ name, bg, text, min, level }) => {
  const ratio = parseFloat(getContrast(bg, text))
  const status = ratio >= min ? '✓' : '✗'
  const result = ratio >= min ? 'PASS' : 'FAIL'

  if (ratio >= min) {
    passed++
  } else {
    failed++
  }

  const barLength = 40
  const filledLength = Math.max(0, Math.min(barLength, Math.round((ratio / 8) * barLength)))
  const bar = '█'.repeat(filledLength) + '░'.repeat(Math.max(0, barLength - filledLength))

  console.log(`\n${status} ${name}`)
  console.log(`   Ratio: ${ratio}:1 | Min: ${min}:1 (${level}) | ${result}`)
  console.log(`   [${bar}]`)
})

console.log('\n' + '═'.repeat(80))
console.log(`\n✅ Results: ${passed} PASS, ${failed} FAIL`)

if (failed === 0) {
  console.log('\n🎉 ALL TESTS PASSED! Color contrast remediation complete.\n')
  process.exit(0)
} else {
  console.log(`\n⚠️  ${failed} test(s) failed. Review above.\n`)
  process.exit(1)
}
