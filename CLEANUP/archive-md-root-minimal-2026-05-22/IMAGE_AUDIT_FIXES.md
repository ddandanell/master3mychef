# myCHEF Image Audit - Fix Checklist

## 🔴 CRITICAL FIXES (Must Fix Before Deployment)

### Fix #1: EventsWeddingsPage.tsx - Broken Image Paths
**File:** `src/pages/EventsWeddingsPage.tsx`

**Changes Required:**

**Line 60:**
```typescript
// BEFORE
{ names: 'Emma & James', date: 'March 2026', villa: 'Villa Aria, Uluwatu', image: '/mychef-events-bali-event-wedding.webp' },

// AFTER
{ names: 'Emma & James', date: 'March 2026', villa: 'Villa Aria, Uluwatu', image: '/generated/mychef-events-bali-event-wedding.webp' },
```

**Line 61:**
```typescript
// BEFORE
{ names: 'Anya & Mark', date: 'January 2026', villa: 'Villa Soma, Canggu', image: '/mychef-events-bali-wedding-reception.webp' },

// AFTER
{ names: 'Anya & Mark', date: 'January 2026', villa: 'Villa Soma, Canggu', image: '/generated/mychef-events-bali-wedding-reception.webp' },
```

**Line 152:**
```typescript
// BEFORE
ogImage={`${SITE}/mychef-events-bali-event-wedding.webp`}

// AFTER
ogImage={`${SITE}/generated/mychef-events-bali-event-wedding.webp`}
```

**Line 176:**
```typescript
// BEFORE
<img
  src="/mychef-events-bali-event-wedding.webp"
  alt="Bali villa wedding ceremony at a tropical altar"

// AFTER
<img
  src="/generated/mychef-events-bali-event-wedding.webp"
  alt="Bali villa wedding ceremony at a tropical altar"
```

**Line 237:**
```typescript
// BEFORE
<img src="/mychef-events-bali-event-wedding.webp" alt="Luxury Bali villa wedding ceremony setup by myCHEF"

// AFTER
<img src="/generated/mychef-events-bali-event-wedding.webp" alt="Luxury Bali villa wedding ceremony setup by myCHEF"
```

**Line 368:**
```typescript
// BEFORE
<img src="/mychef-events-bali-wedding-reception.webp" alt="Wedding reception table with candles and plated dinner service"

// AFTER
<img src="/generated/mychef-events-bali-wedding-reception.webp" alt="Wedding reception table with candles and plated dinner service"
```

---

### Fix #2: ServiceMixologyPage.tsx - External Image Dependency
**File:** `src/pages/ServiceMixologyPage.tsx`

**Action Required:** Download Unsplash image and host locally

**Step 1: Download Image**
```bash
wget "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1600&q=80" \
  -O public/generated/mychef-experience-bali-mixology-hero.webp
```

**Step 2: Update Line 104:**
```typescript
// BEFORE
ogImage="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1600&q=80"

// AFTER
ogImage={`${SITE}/generated/mychef-experience-bali-mixology-hero.webp`}
```

**Step 3: Update Line 121:**
```typescript
// BEFORE
<img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1600&q=80" alt="Cocktail-focused mixology experience at a Bali villa"

// AFTER
<img src="/generated/mychef-experience-bali-mixology-hero.webp" alt="Cocktail-focused mixology experience at a Bali villa"
```

---

### Fix #3: EventsCorporatePage.tsx - Missing Image Files
**File:** `src/pages/EventsCorporatePage.tsx`

**Option A: Rename Existing Files (Recommended)**
```bash
cd public/generated

# Keep originals and create symlinks
ln -s mychef-events-bali-corp-conference.webp corp-conference.webp
ln -s mychef-events-bali-corp-networking.webp corp-networking.webp
```

**Option B: Update Code References**

**Line 396:**
```typescript
// BEFORE
{ title: 'Corporate Gala Dinner', image: '/generated/corp-gala.webp' },

// AFTER
{ title: 'Corporate Gala Dinner', image: '/generated/mychef-events-bali-corporate-events.webp' },
// OR create new corp-gala.webp image
```

**Line 398:**
```typescript
// BEFORE
{ title: 'Conference Catering', image: '/generated/corp-conference.webp' },

// AFTER
{ title: 'Conference Catering', image: '/generated/mychef-events-bali-corp-conference.webp' },
```

**Line 399:**
```typescript
// BEFORE
{ title: 'Networking Reception', image: '/generated/corp-networking.webp' },

// AFTER
{ title: 'Networking Reception', image: '/generated/mychef-events-bali-corp-networking.webp' },
```

---

### Fix #4: EventsMainPage.tsx - Missing Corporate Gala Image
**File:** `src/pages/EventsMainPage.tsx`

**Line 91:**
```typescript
// BEFORE
image: '/generated/corp-gala.webp',

// AFTER (Option 1 - Use existing corporate image)
image: '/generated/mychef-events-bali-corporate-events.webp',

// OR (Option 2 - Use villa party image as temporary)
image: '/generated/mychef-events-bali-party-white.webp',

// OR (Option 3 - Create new corp-gala.webp)
```

---

### Fix #5: FineDiningChefsPage.tsx - Missing Chef Images
**File:** `src/pages/FineDiningChefsPage.tsx`

**Option A: Rename Existing File**
```bash
cd public/generated

# Check if file exists and rename
mv mychef-finedining-bali-chef-signature.jpg fd-chef-signature.jpg
```

**Option B: Update Code References**

**Line 62:**
```typescript
// BEFORE
image: '/generated/fd-team-service.jpg',

// AFTER (temporary fix - use staffing image)
image: '/generated/mychef-staffing-bali-staffing-hero.webp',
// TODO: Create proper fd-team-service.jpg image showing fine dining team
```

**Line 84:**
```typescript
// BEFORE
image: '/generated/fd-villa-candle-dinner.jpg',

// AFTER (temporary fix - use luna image)
image: '/generated/mychef-experience-bali-luna-table.webp',
// TODO: Create proper fd-villa-candle-dinner.jpg image
```

**Line 260:**
```typescript
// BEFORE
src="/generated/fd-chef-signature.jpg"

// AFTER
src="/generated/mychef-finedining-bali-chef-signature.jpg"
```

---

## ⚠️ MEDIUM PRIORITY FIXES

### Fix #6: Create Location-Specific Hero Images

**File:** `src/data/locationLandingPages.ts`

**Current State:** All locations use same image:
```typescript
heroImage: '/generated/mychef-location-bali-locations-sunset.webp',
```

**Recommended New Images:**

1. **Seminyak** (Line 55)
   - Create: `mychef-location-bali-seminyak-hero.webp`
   - Content: Beachfront villa at Petitenget

2. **Canggu** (Line 112)
   - Create: `mychef-location-bali-canggu-hero.webp`
   - Content: Modern pool villa with rice field view

3. **Ubud** (Line 169)
   - Create: `mychef-location-bali-ubud-hero.webp`
   - Content: Jungle valley villa terrace

4. **Uluwatu** (Line 226)
   - Create: `mychef-location-bali-uluwatu-hero.webp`
   - Content: Clifftop ocean view villa

5. **Sanur** (Line 283)
   - Create: `mychef-location-bali-sanur-hero.webp`
   - Content: Sunrise beach villa

6-10. **Other locations** (Nusa Dua, Jimbaran, Denpasar, Bukit, Pererenan)
   - Similar location-specific treatment

**Implementation:**
```typescript
// Update each location config:
seminyak: {
  // ...
  heroImage: '/generated/mychef-location-bali-seminyak-hero.webp',
  // ...
},
```

---

## 📋 VERIFICATION CHECKLIST

After making fixes, verify:

### Image Path Tests
```bash
# Check all images exist
cd public/generated

# Wedding images
ls -lh mychef-events-bali-event-wedding.webp
ls -lh mychef-events-bali-wedding-reception.webp

# Corporate images
ls -lh corp-gala.webp corp-conference.webp corp-networking.webp
# OR
ls -lh mychef-events-bali-corp-*.webp

# Fine dining images
ls -lh fd-*.jpg
# OR
ls -lh mychef-finedining-bali-*.jpg

# Mixology image (after download)
ls -lh mychef-experience-bali-mixology-hero.webp
```

### Code Reference Tests
```bash
cd /Users/openclaw/Downloads/MYCHEF\ .\ MASTER/app

# Search for remaining broken paths
grep -rn '="/[^g].*\.webp"' src/pages/EventsWeddingsPage.tsx
grep -rn 'unsplash.com' src/pages/ServiceMixologyPage.tsx
grep -rn 'corp-gala\.webp\|corp-conference\.webp\|corp-networking\.webp' src/pages/
grep -rn 'fd-.*\.jpg' src/pages/FineDiningChefsPage.tsx
```

### Browser Tests
1. Navigate to: `/events/weddings-bali`
   - Verify hero image loads
   - Verify wedding gallery images load

2. Navigate to: `/in-villa-service/mixology`
   - Verify hero image loads (not from Unsplash)

3. Navigate to: `/events/corporate`
   - Verify corporate image gallery loads

4. Navigate to: `/fine-dining/chefs`
   - Verify chef feature images load

---

## 🎯 QUICK FIX SCRIPT

Create this file as `fix-image-paths.sh`:

```bash
#!/bin/bash

# Fix EventsWeddingsPage.tsx
sed -i.bak 's|/mychef-events-bali-event-wedding\.webp|/generated/mychef-events-bali-event-wedding.webp|g' src/pages/EventsWeddingsPage.tsx
sed -i.bak 's|/mychef-events-bali-wedding-reception\.webp|/generated/mychef-events-bali-wedding-reception.webp|g' src/pages/EventsWeddingsPage.tsx

# Fix EventsCorporatePage.tsx
sed -i.bak "s|'/generated/corp-conference.webp'|'/generated/mychef-events-bali-corp-conference.webp'|g" src/pages/EventsCorporatePage.tsx
sed -i.bak "s|'/generated/corp-networking.webp'|'/generated/mychef-events-bali-corp-networking.webp'|g" src/pages/EventsCorporatePage.tsx

# Fix EventsMainPage.tsx
sed -i.bak "s|'/generated/corp-gala.webp'|'/generated/mychef-events-bali-corporate-events.webp'|g" src/pages/EventsMainPage.tsx

# Fix FineDiningChefsPage.tsx
sed -i.bak "s|'/generated/fd-chef-signature.jpg'|'/generated/mychef-finedining-bali-chef-signature.jpg'|g" src/pages/FineDiningChefsPage.tsx

echo "✅ Image paths fixed! Check .bak files for originals."
```

Run with:
```bash
chmod +x fix-image-paths.sh
./fix-image-paths.sh
```

---

## 📊 ESTIMATED TIME

- **Critical Fixes (1-5):** 1-2 hours
- **Location Hero Images (Fix 6):** 3-4 hours (image sourcing/creation)
- **Total:** 4-6 hours

---

## 🔗 RELATED FILES

- Main Report: `IMAGE_AUDIT_REPORT.md`
- Images Directory: `/Users/openclaw/Downloads/MYCHEF . MASTER/app/public/generated/`
