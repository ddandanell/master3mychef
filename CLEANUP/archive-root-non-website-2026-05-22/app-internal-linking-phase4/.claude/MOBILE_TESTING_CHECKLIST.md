# Mobile Testing Checklist

## Device Testing Requirements

Test on real mobile devices (not browser automation) at these breakpoints:
- iPhone SE (375px)
- iPhone 12/13/14 (390px)
- Android standard (360px)
- iPad (768px)

## Navbar Testing (All Pages)

### Desktop (>= 1024px)
- [ ] Horizontal menu items visible: FINE DINING, CATERING, EVENTS, IN-VILLA, STAFFING, LOCATIONS
- [ ] BOOK NOW button visible
- [ ] Hover effects on menu items work
- [ ] Dropdown submenus appear on hover
- [ ] Hamburger menu hidden

### Tablet (768px - 1023px)
- [ ] Desktop menu still visible (lg:flex applies at 1024px)
- [ ] BOOK NOW button visible
- [ ] Hamburger menu should be hidden or visible depending on exact width

### Mobile (<= 767px)
- [ ] Hamburger menu visible (3-line icon)
- [ ] Desktop menu hidden completely
- [ ] BOOK NOW button hidden (md:hidden at 768px)
- [ ] Clicking hamburger opens mobile menu overlay
- [ ] Mobile menu has white background
- [ ] Mobile menu items are accordion-style
- [ ] Clicking category (e.g., "Fine Dining") expands subpages
- [ ] Only one category can be expanded at a time
- [ ] Chevron icon rotates when expanded
- [ ] Clicking subpage closes menu and navigates
- [ ] Close button (X) works

## Page Content Testing

### Homepage (/)
- [ ] Hero image loads and displays correctly at all breakpoints
- [ ] Hero text is readable (not overlapping images)
- [ ] CTA buttons are touchable (min 44px height)
- [ ] Text sizes are appropriate for mobile
- [ ] Images don't overflow viewport
- [ ] All images have alt text or are decorative

### Fine Dining (/fine-dining)
- [ ] Service cards stack vertically on mobile
- [ ] Product images display correctly (not stretched)
- [ ] Pricing visible and readable
- [ ] Call-to-action button is touchable

### Catering (/catering)
- [ ] Package cards stack vertically
- [ ] Add-on options visible
- [ ] Form fields are accessible
- [ ] No horizontal scroll

### Events (/events)
- [ ] Event type cards display properly
- [ ] Images load without horizontal overflow
- [ ] Event details readable

### In-Villa Service (/in-villa-service)
- [ ] Staff cards display correctly
- [ ] Service descriptions readable
- [ ] Images properly scaled

### Staffing (/staffing)
- [ ] Staffing options clear
- [ ] Booking interface mobile-friendly
- [ ] Form fields large enough for touch

### Locations (/locations)
- [ ] Location list scrollable
- [ ] Map or location info displays
- [ ] Details readable

## Image Quality Testing

- [ ] All images load (no 404s)
- [ ] Images don't cause layout shift (CLS < 0.1)
- [ ] Images are appropriately sized for device
- [ ] No unnecessary large images on slow connections
- [ ] WebP/modern formats load correctly
- [ ] Fallback formats work

## Performance Testing

- [ ] Page loads within 3 seconds on 4G
- [ ] Smooth scrolling (60fps)
- [ ] Tap responses are instant (<100ms)
- [ ] No janky animations

## Accessibility Testing

- [ ] Touch targets are 44px minimum
- [ ] Text is readable (good contrast)
- [ ] Font sizes are appropriate
- [ ] Form inputs are properly labeled
- [ ] Focus states are visible

## Critical Issues to Fix

Priority 1 (Before Launch):
- [ ] Responsive classes are actually working
- [ ] Mobile menu opens and closes properly
- [ ] Accordion expands/collapses correctly
- [ ] No horizontal scrolling on any page
- [ ] All CTA buttons are touchable

Priority 2 (Before Production):
- [ ] Image alt text complete (53 missing)
- [ ] Image naming convention compliance (84 non-compliant)
- [ ] Performance optimizations
- [ ] SEO meta tags on all pages

## Testing Notes

- Use Chrome DevTools device emulation or real devices
- Test on both iOS and Android
- Test on various network speeds (4G, LTE)
- Test in both portrait and landscape
- Test with screen reader enabled (VoiceOver/TalkBack)

## Sign-off

- [ ] Navbar responsive at all breakpoints
- [ ] All pages mobile-friendly
- [ ] Images display correctly
- [ ] No horizontal overflow
- [ ] Performance acceptable
- [ ] Accessibility standards met
