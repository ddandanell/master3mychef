#!/bin/bash
# MYCHEF Critical Path Automation Script
# Run this to execute all launch-day tasks automatically
# Usage: bash launch_automation.sh

set -e  # Exit on error

echo "======================================"
echo "MYCHEF LAUNCH AUTOMATION - STARTING"
echo "======================================"
echo "Date: $(date)"
echo ""

# COLOR OUTPUT
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# TASK COUNTER
COMPLETED=0
TOTAL=0

# ========================================
# STEP 1: VERIFY ENVIRONMENT
# ========================================

echo -e "${YELLOW}[STEP 1] Verifying environment...${NC}"

if ! command -v pnpm &> /dev/null; then
    echo -e "${RED}❌ pnpm not found. Install with: npm install -g pnpm${NC}"
    exit 1
fi
echo -e "${GREEN}✅ pnpm found${NC}"

if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ git not found${NC}"
    exit 1
fi
echo -e "${GREEN}✅ git found${NC}"

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo -e "${RED}❌ .env file not found${NC}"
    echo "Create .env with template: cp .env.example .env"
    exit 1
fi
echo -e "${GREEN}✅ .env file found${NC}"

echo ""

# ========================================
# STEP 2: BUILD & VERIFY
# ========================================

echo -e "${YELLOW}[STEP 2] Building project...${NC}"
TOTAL=$((TOTAL + 1))

if pnpm build; then
    echo -e "${GREEN}✅ Build successful${NC}"
    COMPLETED=$((COMPLETED + 1))
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

echo ""

# ========================================
# STEP 3: VERIFY BUILD ARTIFACTS
# ========================================

echo -e "${YELLOW}[STEP 3] Verifying build artifacts...${NC}"
TOTAL=$((TOTAL + 1))

if [ -d "dist" ]; then
    BUNDLE_SIZE=$(du -sh dist | cut -f1)
    echo -e "${GREEN}✅ dist/ folder exists (Size: $BUNDLE_SIZE)${NC}"
    COMPLETED=$((COMPLETED + 1))
else
    echo -e "${RED}❌ dist/ folder not found${NC}"
    exit 1
fi

echo ""

# ========================================
# STEP 4: CHECK GA4/GTM ENV VARS
# ========================================

echo -e "${YELLOW}[STEP 4] Checking Google Analytics & GTM configuration...${NC}"
TOTAL=$((TOTAL + 1))

if grep -q "VITE_GA_ID" ".env"; then
    GA_ID=$(grep "VITE_GA_ID" ".env" | cut -d '=' -f2)
    if [ -z "$GA_ID" ]; then
        echo -e "${YELLOW}⚠️  VITE_GA_ID is empty. Add value: G-XXXXXXXXXX${NC}"
    else
        echo -e "${GREEN}✅ VITE_GA_ID configured: ${GA_ID:0:5}...${NC}"
        COMPLETED=$((COMPLETED + 1))
    fi
else
    echo -e "${YELLOW}⚠️  VITE_GA_ID not found in .env${NC}"
    echo "   Add to .env: VITE_GA_ID=G-XXXXXXXXXX"
fi

if grep -q "VITE_GTM_ID" ".env"; then
    GTM_ID=$(grep "VITE_GTM_ID" ".env" | cut -d '=' -f2)
    if [ -z "$GTM_ID" ]; then
        echo -e "${YELLOW}⚠️  VITE_GTM_ID is empty. Add value: GTM-XXXXXXX${NC}"
    else
        echo -e "${GREEN}✅ VITE_GTM_ID configured: ${GTM_ID:0:5}...${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  VITE_GTM_ID not found in .env${NC}"
    echo "   Add to .env: VITE_GTM_ID=GTM-XXXXXXX"
fi

echo ""

# ========================================
# STEP 5: GIT STATUS CHECK
# ========================================

echo -e "${YELLOW}[STEP 5] Checking Git status...${NC}"
TOTAL=$((TOTAL + 1))

if git status --short | grep -q .; then
    echo -e "${YELLOW}⚠️  Uncommitted changes detected:${NC}"
    git status --short
    echo "   Run: git add . && git commit -m 'Launch prep'"
else
    echo -e "${GREEN}✅ Git working tree clean${NC}"
    COMPLETED=$((COMPLETED + 1))
fi

echo ""

# ========================================
# STEP 6: VERIFY NETLIFY CONFIG
# ========================================

echo -e "${YELLOW}[STEP 6] Verifying Netlify configuration...${NC}"
TOTAL=$((TOTAL + 1))

if [ -f "netlify.toml" ]; then
    echo -e "${GREEN}✅ netlify.toml found${NC}"
    COMPLETED=$((COMPLETED + 1))
else
    echo -e "${RED}❌ netlify.toml not found${NC}"
fi

echo ""

# ========================================
# STEP 7: VERIFY SITEMAP
# ========================================

echo -e "${YELLOW}[STEP 7] Checking SEO files...${NC}"
TOTAL=$((TOTAL + 1))

if [ -f "public/sitemap.xml" ]; then
    SITEMAP_URLS=$(grep -c "<loc>" "public/sitemap.xml" || echo "0")
    echo -e "${GREEN}✅ sitemap.xml found ($SITEMAP_URLS URLs)${NC}"
    COMPLETED=$((COMPLETED + 1))
else
    echo -e "${YELLOW}⚠️  sitemap.xml not found in public/${NC}"
fi

if [ -f "public/robots.txt" ]; then
    echo -e "${GREEN}✅ robots.txt found${NC}"
else
    echo -e "${YELLOW}⚠️  robots.txt not found${NC}"
fi

echo ""

# ========================================
# SUMMARY
# ========================================

echo "======================================"
echo "LAUNCH AUTOMATION SUMMARY"
echo "======================================"
echo -e "Tasks Completed: ${GREEN}$COMPLETED/$TOTAL${NC}"
echo ""

if [ $COMPLETED -eq $TOTAL ]; then
    echo -e "${GREEN}🚀 ALL CHECKS PASSED - READY FOR DEPLOYMENT${NC}"
    echo ""
    echo "Next Steps:"
    echo "1. Ensure VITE_GA_ID and VITE_GTM_ID are in .env"
    echo "2. Push to GitHub: git push origin auto-improve/core-web-vitals-phase4"
    echo "3. Connect to Netlify: https://app.netlify.com/start"
    echo "4. Use DEPLOYMENT_QUICK_REFERENCE.md for manual Netlify setup"
    echo ""
    exit 0
else
    echo -e "${YELLOW}⚠️  Some checks need attention${NC}"
    echo "Review errors above and retry"
    echo ""
    exit 1
fi

