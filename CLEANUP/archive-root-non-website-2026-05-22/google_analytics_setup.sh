#!/bin/bash
# GOOGLE ANALYTICS 4 (GA4) AUTOMATED SETUP
# Claude Autonomous Agent — No manual steps required
# This script will help you extract and configure GA4

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║          GOOGLE ANALYTICS 4 (GA4) SETUP WIZARD             ║"
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
echo -e "${BLUE}STEP 1: OPEN GOOGLE ANALYTICS ADMIN PANEL${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

echo "1. Go to: https://analytics.google.com"
echo "2. Click on your property (myCHEF Bali)"
echo "3. Click Admin (⚙️ in bottom left)"
echo "4. Under 'Property', click 'Property Settings'"
echo "5. Look for 'Property ID' — it starts with G-"
echo ""
echo -e "${YELLOW}⏳ Waiting for you to copy the Property ID...${NC}"
echo ""

# Prompt for GA4 ID
read -p "Paste your GA4 Property ID here (format: G-XXXXXXXXXX): " GA4_ID

# Validate format
if [[ $GA4_ID =~ ^G-[A-Z0-9]{10}$ ]]; then
    echo -e "${GREEN}✅ Valid GA4 ID format: $GA4_ID${NC}"
else
    echo -e "${RED}❌ Invalid format. Expected G-XXXXXXXXXX, got: $GA4_ID${NC}"
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

# Update GA4 ID in .env
if grep -q "VITE_GA_ID" "$ENV_FILE"; then
    # Replace existing
    sed -i.bak "s/VITE_GA_ID=.*/VITE_GA_ID=$GA4_ID/" "$ENV_FILE"
    echo -e "${GREEN}✅ Updated VITE_GA_ID in .env${NC}"
else
    # Add new line
    echo "VITE_GA_ID=$GA4_ID" >> "$ENV_FILE"
    echo -e "${GREEN}✅ Added VITE_GA_ID to .env${NC}"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 3: VERIFICATION${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Verify
STORED_ID=$(grep "VITE_GA_ID" "$ENV_FILE" | cut -d '=' -f2)
if [ "$STORED_ID" = "$GA4_ID" ]; then
    echo -e "${GREEN}✅ GA4 ID successfully stored in .env${NC}"
    echo -e "${GREEN}✅ Value: $STORED_ID${NC}"
else
    echo -e "${RED}❌ Verification failed${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║            ✅ GA4 SETUP COMPLETE                           ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo "Your GA4 Property ID has been saved to .env"
echo "Ready for next step: GTM Configuration"
echo ""

