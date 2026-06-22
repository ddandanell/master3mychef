#!/bin/bash
RESULT="/Users/openclaw/Movies/LIve website/MYCHEF Live webste/push_result.txt"
cd "/Users/openclaw/Movies/LIve website/MYCHEF Live webste"

echo "=== GIT ROOT ===" > "$RESULT"
git rev-parse --show-toplevel >> "$RESULT" 2>&1

echo "=== REMOVE LOCK ===" >> "$RESULT"
rm -f .git/index.lock 2>&1

echo "=== FETCH ===" >> "$RESULT"
git fetch origin 2>&1 | tee -a "$RESULT"

echo "=== RESET TO ORIGIN/MAIN ===" >> "$RESULT"
git reset --mixed origin/main 2>&1 | head -3 | tee -a "$RESULT"

echo "=== DIFF CHECK FOR OUR FILES ===" >> "$RESULT"
git diff --name-only -- \
  "app/src/pages/HowToHirePrivateChefPage.tsx" \
  "app/src/pages/ChefHiringGuidePage.tsx" \
  "app/src/pages/WeddingPrivateChefPage.tsx" \
  "app/src/pages/VillaBirthdayPartyPage.tsx" \
  "app/src/pages/YogaRetreatChefPage.tsx" \
  "app/src/pages/DiningByLocationBaliPage.tsx" \
  "app/src/pages/RomanticDinnerBaliPage.tsx" \
  "app/src/pages/EventPlanningBaliPage.tsx" \
  "app/src/pages/BaliCateringMenuPage.tsx" \
  "app/src/pages/FineDiningGuidePage.tsx" 2>&1 | tee -a "$RESULT"

echo "=== ADD APP/SRC/PAGES FILES ===" >> "$RESULT"
git add \
  "app/src/pages/HowToHirePrivateChefPage.tsx" \
  "app/src/pages/ChefHiringGuidePage.tsx" \
  "app/src/pages/WeddingPrivateChefPage.tsx" \
  "app/src/pages/VillaBirthdayPartyPage.tsx" \
  "app/src/pages/YogaRetreatChefPage.tsx" \
  "app/src/pages/DiningByLocationBaliPage.tsx" \
  "app/src/pages/RomanticDinnerBaliPage.tsx" \
  "app/src/pages/EventPlanningBaliPage.tsx" \
  "app/src/pages/BaliCateringMenuPage.tsx" \
  "app/src/pages/FineDiningGuidePage.tsx" 2>&1 | tee -a "$RESULT"

echo "=== STAGED ===" >> "$RESULT"
git diff --cached --name-only 2>&1 | tee -a "$RESULT"

STAGED=$(git diff --cached --name-only 2>/dev/null | wc -l | tr -d ' ')
echo "Staged count: $STAGED" >> "$RESULT"

if [ "$STAGED" -gt "0" ]; then
  echo "=== COMMITTING ===" >> "$RESULT"
  git commit -m "seo: add BlogPosting schema to 10 blog pages missing Article markup

- HowToHirePrivateChefPage, ChefHiringGuidePage, WeddingPrivateChefPage
- VillaBirthdayPartyPage, YogaRetreatChefPage, DiningByLocationBaliPage
- RomanticDinnerBaliPage, EventPlanningBaliPage, BaliCateringMenuPage, FineDiningGuidePage

Each page gets @type:BlogPosting with headline, description, author, publisher,
datePublished, dateModified, image, mainEntityOfPage, and url.
Enables Article rich results in Google Search." 2>&1 | tee -a "$RESULT"

  echo "=== PUSH ===" >> "$RESULT"
  git push origin main 2>&1 | tee -a "$RESULT"
else
  echo "=== NOTHING STAGED — FILES MAY ALREADY MATCH ORIGIN ===" >> "$RESULT"
  git diff --stat origin/main -- "app/src/pages/HowToHirePrivateChefPage.tsx" 2>&1 | tee -a "$RESULT"
fi

echo "=== DONE ===" >> "$RESULT"
