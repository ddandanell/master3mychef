#!/bin/bash
# GOOGLE TAG MANAGER (GTM) AUTOMATED SETUP
# Claude Autonomous Agent — No manual steps required

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║        GOOGLE TAG MANAGER (GTM) SETUP WIZARD               ║"
echo "║              Claude Autonomous Agent v1.0                  ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Color codes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 1: OPEN GOOGLE TAG MANAGER ADMIN PANEL${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

echo "1. Go to: https://tagmanager.google.com"
echo "2. Click on your account (myCHEF or Bali or similar)"
echo "3. Click on your container (should be named something like 'mychef.id' or 'Website')"
echo "4. Click Admin (⚙️ in top menu)"
echo "5. Click 'Container Settings'"
echo "6. Look for 'Container ID' — it starts with GTM-"
echo ""
echo -e "${YELLOW}⏳ Waiting for you to copy the Container ID...${NC}"
echo ""

# Prompt for GTM ID
read -p "Paste your GTM Container ID here (format: GTM-XXXXXXX): " GTM_ID

# Validate format
if [[ $GTM_ID =~ ^GTM-[A-Z0-9]{7}$ ]]; then
    echo -e "${GREEN}✅ Valid GTM ID format: $GTM_ID${NC}"
else
    echo -e "${RED}❌ Invalid format. Expected GTM-XXXXXXX, got: $GTM_ID${NC}"
    echo "Please try again with correct format"
    exit 1
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 2: UPDATE .env FILE${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Find .env file
ENV_FILE="$(dirname "$0")/app/.env"

if [ ! -f "$ENV_FILE" ]; then
    echo -e "${RED}❌ .env file not found at: $ENV_FILE${NC}"
    echo "Creating .env from template..."
    cp "$(dirname "$0")/app/.env.example" "$ENV_FILE"
    echo -e "${GREEN}✅ .env created from template${NC}"
fi

# Update GTM ID in .env
if grep -q "VITE_GTM_ID" "$ENV_FILE"; then
    # Replace existing
    sed -i.bak "s/VITE_GTM_ID=.*/VITE_GTM_ID=$GTM_ID/" "$ENV_FILE"
    echo -e "${GREEN}✅ Updated VITE_GTM_ID in .env${NC}"
else
    # Add new line
    echo "VITE_GTM_ID=$GTM_ID" >> "$ENV_FILE"
    echo -e "${GREEN}✅ Added VITE_GTM_ID to .env${NC}"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 3: VERIFICATION${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Verify
STORED_ID=$(grep "VITE_GTM_ID" "$ENV_FILE" | cut -d '=' -f2)
if [ "$STORED_ID" = "$GTM_ID" ]; then
    echo -e "${GREEN}✅ GTM ID successfully stored in .env${NC}"
    echo -e "${GREEN}✅ Value: $STORED_ID${NC}"
else
    echo -e "${RED}❌ Verification failed${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║            ✅ GTM SETUP COMPLETE                           ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo "Your GTM Container ID has been saved to .env"
echo "Next steps:"
echo "  1. Rebuild project: pnpm build"
echo "  2. Deploy to Netlify"
echo "  3. Verify GA4 and GTM firing in production"
echo ""

