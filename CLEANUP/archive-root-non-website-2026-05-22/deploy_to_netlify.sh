#!/bin/bash
# MYCHEF NETLIFY DEPLOYMENT AUTOMATION
# Claude Autonomous Agent — Full deployment automation

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║         MYCHEF NETLIFY DEPLOYMENT AUTOMATION               ║"
echo "║              Claude Autonomous Agent v1.0                  ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m'

# Logs
DEPLOY_LOG="/tmp/mychef_deploy_$(date +%s).log"
exec 1> >(tee -a "$DEPLOY_LOG")
exec 2>&1

echo -e "${CYAN}📋 Deployment Log: $DEPLOY_LOG${NC}"
echo ""

# ========================================
# STEP 1: VERIFY PREREQUISITES
# ========================================

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 1: VERIFY PREREQUISITES${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found. Install from https://nodejs.org${NC}"
    exit 1
fi
NODE_VERSION=$(node --version)
echo -e "${GREEN}✅ Node.js: $NODE_VERSION${NC}"

# Check pnpm
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}⚠️  pnpm not found. Installing...${NC}"
    npm install -g pnpm
fi
PNPM_VERSION=$(pnpm --version)
echo -e "${GREEN}✅ pnpm: $PNPM_VERSION${NC}"

# Check git
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git not found${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Git found${NC}"

# Check netlify-cli
if ! command -v netlify &> /dev/null; then
    echo -e "${YELLOW}⚠️  netlify-cli not found. Installing...${NC}"
    npm install -g netlify-cli
fi
echo -e "${GREEN}✅ Netlify CLI found${NC}"

echo ""

# ========================================
# STEP 2: BUILD PROJECT
# ========================================

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 2: BUILD PROJECT${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Find app directory
APP_DIR="$(dirname "$0")/app"
if [ ! -d "$APP_DIR" ]; then
    echo -e "${RED}❌ app directory not found at $APP_DIR${NC}"
    exit 1
fi

cd "$APP_DIR"
echo "📁 Working directory: $(pwd)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Build
echo "🔨 Building project..."
pnpm build
BUILD_SIZE=$(du -sh dist | cut -f1)
echo -e "${GREEN}✅ Build successful (Size: $BUILD_SIZE)${NC}"
echo ""

# ========================================
# STEP 3: VERIFY BUILD
# ========================================

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 3: VERIFY BUILD ARTIFACTS${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ dist folder not found${NC}"
    exit 1
fi

if [ ! -f "dist/index.html" ]; then
    echo -e "${RED}❌ index.html not found in dist${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build artifacts verified${NC}"
echo -e "${GREEN}✅ dist/index.html present${NC}"

# Check for environment variables in build
if grep -q "VITE_GA_ID" .env 2>/dev/null; then
    echo -e "${GREEN}✅ VITE_GA_ID configured${NC}"
else
    echo -e "${YELLOW}⚠️  VITE_GA_ID not found in .env${NC}"
fi

if grep -q "VITE_GTM_ID" .env 2>/dev/null; then
    echo -e "${GREEN}✅ VITE_GTM_ID configured${NC}"
else
    echo -e "${YELLOW}⚠️  VITE_GTM_ID not found in .env${NC}"
fi

echo ""

# ========================================
# STEP 4: GITHUB STATUS CHECK
# ========================================

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 4: GITHUB STATUS CHECK${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

GIT_STATUS=$(git status --short)
if [ -z "$GIT_STATUS" ]; then
    echo -e "${GREEN}✅ Git working tree clean${NC}"
else
    echo -e "${YELLOW}⚠️  Uncommitted changes detected:${NC}"
    echo "$GIT_STATUS"
    echo ""
    echo -e "${YELLOW}Committing changes...${NC}"
    git add .
    git commit -m "chore: pre-deployment updates ($(date '+%Y-%m-%d %H:%M:%S UTC'))"
    echo -e "${GREEN}✅ Changes committed${NC}"
fi

echo ""

# ========================================
# STEP 5: DEPLOYMENT READY
# ========================================

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 5: DEPLOYMENT READY${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

echo -e "${CYAN}🚀 AUTOMATED DEPLOYMENT OPTIONS:${NC}"
echo ""
echo "1. Deploy via Netlify CLI (Automatic):"
echo "   $ netlify deploy --prod --dir=dist"
echo ""
echo "2. Deploy via GitHub (if Actions configured):"
echo "   $ git push origin auto-improve/core-web-vitals-phase4"
echo ""
echo "3. Manual Netlify Dashboard:"
echo "   → app.netlify.com → Add New Site → Connect GitHub"
echo ""

echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║       ✅ BUILD & DEPLOYMENT READY                         ║${NC}"
echo -e "${GREEN}║          Ready to deploy to production                     ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

echo "Log saved to: $DEPLOY_LOG"
echo ""
echo "Next steps:"
echo "  1. Push to GitHub: git push origin auto-improve/core-web-vitals-phase4"
echo "  2. Deploy to Netlify (see options above)"
echo "  3. Verify at: https://mychef.id"
echo ""

