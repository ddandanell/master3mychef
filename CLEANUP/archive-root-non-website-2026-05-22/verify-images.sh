#!/bin/bash

# myCHEF Image Audit Verification Script
# Run this after applying fixes to verify all images are correctly referenced

echo "🔍 myCHEF Image Audit Verification"
echo "=================================="
echo ""

ISSUES_FOUND=0
WARNINGS_FOUND=0

# Set the base directory
BASE_DIR="/Users/openclaw/Downloads/MYCHEF . MASTER/app"
cd "$BASE_DIR" || exit 1

echo "📁 Working Directory: $BASE_DIR"
echo ""

# Check 1: Verify wedding images exist in generated folder
echo "✓ Check 1: Wedding Images"
if [ -f "public/generated/mychef-events-bali-event-wedding.webp" ]; then
  echo "  ✅ mychef-events-bali-event-wedding.webp exists"
else
  echo "  ❌ mychef-events-bali-event-wedding.webp NOT FOUND"
  ISSUES_FOUND=$((ISSUES_FOUND + 1))
fi

if [ -f "public/generated/mychef-events-bali-wedding-reception.webp" ]; then
  echo "  ✅ mychef-events-bali-wedding-reception.webp exists"
else
  echo "  ❌ mychef-events-bali-wedding-reception.webp NOT FOUND"
  ISSUES_FOUND=$((ISSUES_FOUND + 1))
fi
echo ""

# Check 2: Verify no root-level wedding image references
echo "✓ Check 2: Wedding Image Paths in Code"
ROOT_WEDDING=$(grep -n '"/mychef-events-bali-event-wedding' src/pages/EventsWeddingsPage.tsx 2>/dev/null | wc -l)
ROOT_RECEPTION=$(grep -n '"/mychef-events-bali-wedding-reception' src/pages/EventsWeddingsPage.tsx 2>/dev/null | wc -l)

if [ "$ROOT_WEDDING" -eq 0 ] && [ "$ROOT_RECEPTION" -eq 0 ]; then
  echo "  ✅ No root-level wedding image references found"
else
  echo "  ❌ Found $ROOT_WEDDING + $ROOT_RECEPTION root-level references"
  echo "     Run: grep -n '\"/mychef-events-bali' src/pages/EventsWeddingsPage.tsx"
  ISSUES_FOUND=$((ISSUES_FOUND + 1))
fi
echo ""

# Check 3: Verify no Unsplash URLs
echo "✓ Check 3: External Image Dependencies"
UNSPLASH_COUNT=$(grep -rn "unsplash.com" src/pages/ServiceMixologyPage.tsx 2>/dev/null | wc -l)
if [ "$UNSPLASH_COUNT" -eq 0 ]; then
  echo "  ✅ No Unsplash dependencies found"
else
  echo "  ❌ Found $UNSPLASH_COUNT Unsplash URL(s) in ServiceMixologyPage.tsx"
  ISSUES_FOUND=$((ISSUES_FOUND + 1))
fi

# Check if local mixology image exists
if [ -f "public/generated/mychef-experience-bali-mixology-hero.webp" ]; then
  echo "  ✅ Local mixology hero image exists"
else
  echo "  ⚠️  mychef-experience-bali-mixology-hero.webp not found (needs download)"
  WARNINGS_FOUND=$((WARNINGS_FOUND + 1))
fi
echo ""

# Check 4: Corporate images
echo "✓ Check 4: Corporate Images"
CORP_ISSUES=0

# Check for short names (broken)
CORP_GALA_SHORT=$(grep -n "'/generated/corp-gala.webp'" src/pages/EventsCorporatePage.tsx src/pages/EventsMainPage.tsx 2>/dev/null | wc -l)
CORP_CONF_SHORT=$(grep -n "'/generated/corp-conference.webp'" src/pages/EventsCorporatePage.tsx 2>/dev/null | wc -l)
CORP_NET_SHORT=$(grep -n "'/generated/corp-networking.webp'" src/pages/EventsCorporatePage.tsx 2>/dev/null | wc -l)

if [ "$CORP_GALA_SHORT" -gt 0 ]; then
  echo "  ❌ Found corp-gala.webp short name reference"
  CORP_ISSUES=$((CORP_ISSUES + 1))
fi

if [ "$CORP_CONF_SHORT" -gt 0 ]; then
  echo "  ❌ Found corp-conference.webp short name reference"
  CORP_ISSUES=$((CORP_ISSUES + 1))
fi

if [ "$CORP_NET_SHORT" -gt 0 ]; then
  echo "  ❌ Found corp-networking.webp short name reference"
  CORP_ISSUES=$((CORP_ISSUES + 1))
fi

if [ "$CORP_ISSUES" -eq 0 ]; then
  echo "  ✅ No short corporate image names found"
else
  ISSUES_FOUND=$((ISSUES_FOUND + CORP_ISSUES))
fi

# Check if full names exist
if [ -f "public/generated/mychef-events-bali-corp-conference.webp" ]; then
  echo "  ✅ mychef-events-bali-corp-conference.webp exists"
else
  echo "  ❌ mychef-events-bali-corp-conference.webp NOT FOUND"
  ISSUES_FOUND=$((ISSUES_FOUND + 1))
fi

if [ -f "public/generated/mychef-events-bali-corp-networking.webp" ]; then
  echo "  ✅ mychef-events-bali-corp-networking.webp exists"
else
  echo "  ❌ mychef-events-bali-corp-networking.webp NOT FOUND"
  ISSUES_FOUND=$((ISSUES_FOUND + 1))
fi
echo ""

# Check 5: Fine dining images
echo "✓ Check 5: Fine Dining Images"
FD_ISSUES=0

# Check for short names (broken)
FD_TEAM=$(grep -n "'/generated/fd-team-service.jpg'" src/pages/FineDiningChefsPage.tsx 2>/dev/null | wc -l)
FD_CANDLE=$(grep -n "'/generated/fd-villa-candle-dinner.jpg'" src/pages/FineDiningChefsPage.tsx 2>/dev/null | wc -l)
FD_SIG_SHORT=$(grep -n '"/generated/fd-chef-signature.jpg"' src/pages/FineDiningChefsPage.tsx 2>/dev/null | wc -l)

if [ "$FD_TEAM" -gt 0 ]; then
  echo "  ⚠️  fd-team-service.jpg still referenced (needs replacement or file creation)"
  WARNINGS_FOUND=$((WARNINGS_FOUND + 1))
fi

if [ "$FD_CANDLE" -gt 0 ]; then
  echo "  ⚠️  fd-villa-candle-dinner.jpg still referenced (needs replacement or file creation)"
  WARNINGS_FOUND=$((WARNINGS_FOUND + 1))
fi

if [ "$FD_SIG_SHORT" -gt 0 ]; then
  echo "  ❌ Found fd-chef-signature.jpg short name reference"
  FD_ISSUES=$((FD_ISSUES + 1))
fi

if [ "$FD_ISSUES" -eq 0 ] && [ "$FD_TEAM" -eq 0 ] && [ "$FD_CANDLE" -eq 0 ]; then
  echo "  ✅ No fine dining image issues found"
else
  ISSUES_FOUND=$((ISSUES_FOUND + FD_ISSUES))
fi

# Check if full name exists
if [ -f "public/generated/mychef-finedining-bali-chef-signature.jpg" ]; then
  echo "  ✅ mychef-finedining-bali-chef-signature.jpg exists"
else
  echo "  ❌ mychef-finedining-bali-chef-signature.jpg NOT FOUND"
  ISSUES_FOUND=$((ISSUES_FOUND + 1))
fi
echo ""

# Check 6: Alt text verification
echo "✓ Check 6: Alt Text Coverage"
MISSING_ALT=$(grep -rn '<img' src/pages/*.tsx src/components/*.tsx 2>/dev/null | grep -v 'alt=' | wc -l)
if [ "$MISSING_ALT" -eq 0 ]; then
  echo "  ✅ All <img> tags have alt attributes"
else
  echo "  ❌ Found $MISSING_ALT <img> tags without alt attributes"
  ISSUES_FOUND=$((ISSUES_FOUND + 1))
fi
echo ""

# Check 7: Loading attributes
echo "✓ Check 7: Image Loading Strategy"
EAGER_COUNT=$(grep -rn 'loading="eager"' src/pages/*.tsx 2>/dev/null | wc -l)
LAZY_COUNT=$(grep -rn 'loading="lazy"' src/pages/*.tsx 2>/dev/null | wc -l)
echo "  ℹ️  Found $EAGER_COUNT images with loading='eager'"
echo "  ℹ️  Found $LAZY_COUNT images with loading='lazy'"

if [ "$EAGER_COUNT" -gt 0 ] && [ "$LAZY_COUNT" -gt 0 ]; then
  echo "  ✅ Loading strategy appears properly configured"
else
  echo "  ⚠️  Check loading strategy implementation"
  WARNINGS_FOUND=$((WARNINGS_FOUND + 1))
fi
echo ""

# Check 8: Location hero diversity
echo "✓ Check 8: Location Hero Image Diversity"
LOCATION_SAME=$(grep -n "heroImage: '/generated/mychef-location-bali-locations-sunset.webp'" src/data/locationLandingPages.ts 2>/dev/null | wc -l)
if [ "$LOCATION_SAME" -gt 3 ]; then
  echo "  ⚠️  All $LOCATION_SAME location pages use the same hero image"
  echo "     Consider creating location-specific images (non-critical)"
  WARNINGS_FOUND=$((WARNINGS_FOUND + 1))
else
  echo "  ✅ Location pages use diverse hero images"
fi
echo ""

# Check 9: Image file count
echo "✓ Check 9: Image Inventory"
GENERATED_COUNT=$(find public/generated -type f \( -name "*.webp" -o -name "*.jpg" -o -name "*.png" \) 2>/dev/null | wc -l)
echo "  ℹ️  Found $GENERATED_COUNT image files in public/generated/"

if [ "$GENERATED_COUNT" -gt 100 ]; then
  echo "  ✅ Healthy image inventory"
elif [ "$GENERATED_COUNT" -gt 50 ]; then
  echo "  ⚠️  Lower than expected image count"
  WARNINGS_FOUND=$((WARNINGS_FOUND + 1))
else
  echo "  ❌ Very low image count - check directory"
  ISSUES_FOUND=$((ISSUES_FOUND + 1))
fi
echo ""

# Final Report
echo "=================================="
echo "📊 VERIFICATION SUMMARY"
echo "=================================="
echo ""

if [ "$ISSUES_FOUND" -eq 0 ] && [ "$WARNINGS_FOUND" -eq 0 ]; then
  echo "🎉 ALL CHECKS PASSED!"
  echo ""
  echo "✅ No critical issues found"
  echo "✅ No warnings"
  echo ""
  echo "Your image infrastructure is clean and ready for production."
  exit 0
elif [ "$ISSUES_FOUND" -eq 0 ]; then
  echo "✅ NO CRITICAL ISSUES"
  echo "⚠️  $WARNINGS_FOUND warning(s) found"
  echo ""
  echo "No blocking issues, but review warnings for potential improvements."
  exit 0
else
  echo "❌ $ISSUES_FOUND CRITICAL ISSUE(S) FOUND"
  echo "⚠️  $WARNINGS_FOUND warning(s) found"
  echo ""
  echo "🔧 NEXT STEPS:"
  echo "1. Review IMAGE_AUDIT_FIXES.md for detailed fix instructions"
  echo "2. Apply the recommended fixes"
  echo "3. Run this script again to verify"
  echo ""
  echo "For details, see:"
  echo "  - IMAGE_AUDIT_REPORT.md"
  echo "  - IMAGE_AUDIT_FIXES.md"
  echo "  - IMAGE_AUDIT_SUMMARY.md"
  exit 1
fi
