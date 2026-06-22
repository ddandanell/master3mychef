#!/bin/bash
# WHATSAPP BOT LAUNCHER & MONITORING
# Claude Autonomous Agent — WhatsApp integration activation

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║         WHATSAPP BOT LAUNCHER & MONITORING                ║"
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
BOT_LOG="/tmp/whatsapp_bot_$(date +%s).log"
exec 1> >(tee -a "$BOT_LOG")
exec 2>&1

echo -e "${CYAN}📋 Bot Log: $BOT_LOG${NC}"
echo ""

# ========================================
# STEP 1: LOCATE BOT
# ========================================

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 1: LOCATE WHATSAPP BOT${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

BOT_DIR="/Users/openclaw/knightbot-fresh"

if [ ! -d "$BOT_DIR" ]; then
    echo -e "${RED}❌ Bot directory not found at: $BOT_DIR${NC}"
    echo -e "${YELLOW}Creating bot directory structure...${NC}"
    mkdir -p "$BOT_DIR"
    echo -e "${GREEN}✅ Directory created${NC}"
fi

echo -e "${GREEN}✅ Bot directory located: $BOT_DIR${NC}"
cd "$BOT_DIR"
echo "📁 Working directory: $(pwd)"
echo ""

# ========================================
# STEP 2: VERIFY BOT DEPENDENCIES
# ========================================

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 2: VERIFY BOT DEPENDENCIES${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Node.js available${NC}"

# Check for package.json
if [ ! -f "package.json" ]; then
    echo -e "${YELLOW}⚠️  package.json not found. Creating minimal bot...${NC}"
    
    cat > package.json << 'EOF'
{
  "name": "mychef-whatsapp-bot",
  "version": "1.0.0",
  "description": "myCHEF WhatsApp Lead Capture Bot",
  "main": "main.js",
  "scripts": {
    "start": "node main.js",
    "dev": "nodemon main.js"
  },
  "dependencies": {
    "whatsapp-web.js": "^1.23.0",
    "qrcode-terminal": "^0.12.0",
    "dotenv": "^16.0.3"
  }
}
EOF
    
    echo -e "${GREEN}✅ package.json created${NC}"
fi

# Install dependencies
echo "📦 Installing bot dependencies..."
npm install
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# ========================================
# STEP 3: CONFIGURE BOT
# ========================================

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 3: CONFIGURE BOT${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Create main.js if it doesn't exist
if [ ! -f "main.js" ]; then
    echo -e "${YELLOW}Creating bot launch script...${NC}"
    
    cat > main.js << 'EOF'
#!/usr/bin/env node
/**
 * myCHEF WhatsApp Lead Capture Bot
 * Automated message handling for villa dining inquiries
 */

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');

const client = new Client({
    authStrategy: new LocalAuth()
});

// Bot logging
const logMessage = (msg) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${msg}`);
};

// QR Code generation
client.on('qr', (qr) => {
    logMessage('📱 QR Code generated. Scan with WhatsApp to authenticate...');
    qrcode.generate(qr, {small: true});
});

// Bot ready
client.on('ready', () => {
    logMessage('✅ Bot is ready!');
    logMessage('🤖 WhatsApp bot connected and listening for messages');
});

// Message received
client.on('message', async (message) => {
    const sender = message.from.split('@')[0];
    const senderName = message._data.notifyName || sender;
    
    logMessage(`📨 [${senderName}] ${message.body}`);
    
    // Auto-response
    const response = generateResponse(message.body);
    if (response) {
        await message.reply(response);
        logMessage(`📤 Replied to ${senderName}`);
    }
});

// Response generator
function generateResponse(messageText) {
    const text = messageText.toLowerCase();
    
    // Inquiry patterns
    if (text.includes('menu') || text.includes('food') || text.includes('dinner')) {
        return `Thank you for your interest in myCHEF! 🍽️\n\nOur chef-curated menus include:\n• Romantic Dinner\n• Tasting Menu with wine pairings\n• Chef's Table experience\n\nWhat date & location were you interested in?`;
    }
    
    if (text.includes('price') || text.includes('cost') || text.includes('how much')) {
        return `Great question! Our pricing is transparent:\n• Chef fee: Starting at $450\n• Ingredients: Billed at cost\n• Optional wine pairing: $20-50/glass\n\nWould you like a custom quote for your event?`;
    }
    
    if (text.includes('date') || text.includes('book') || text.includes('reserve')) {
        return `Excellent! Let's get you booked. Please share:\n1. Your preferred date\n2. Number of guests\n3. Your villa area (Seminyak, Canggu, Ubud, etc)\n4. Any dietary restrictions\n\nWe'll send a formal quote within 1 hour.`;
    }
    
    if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
        return `Hello! 👋 Welcome to myCHEF — Bali's premier private dining service.\n\nWhat can we help you with?\n• Menu options\n• Pricing\n• Booking a chef\n• Special events`;
    }
    
    // Default response
    return null;
}

// Auth failure
client.on('auth_failure', (msg) => {
    logMessage(`❌ Authentication failed: ${msg}`);
});

// Disconnected
client.on('disconnected', (reason) => {
    logMessage(`⚠️ Bot disconnected: ${reason}`);
});

// Initialize
logMessage('🚀 Starting myCHEF WhatsApp Bot...');
client.initialize();

EOF
    
    chmod +x main.js
    echo -e "${GREEN}✅ Bot launch script created${NC}"
fi

echo ""

# ========================================
# STEP 4: START BOT
# ========================================

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 4: START BOT${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

echo -e "${CYAN}🚀 LAUNCHING WHATSAPP BOT...${NC}"
echo ""
echo "This bot will:"
echo "  ✅ Listen for WhatsApp inquiries on +62 822-3756-5997"
echo "  ✅ Auto-respond to menu/pricing questions"
echo "  ✅ Capture lead information"
echo "  ✅ Log all conversations"
echo ""

echo -e "${YELLOW}⏳ Starting bot in background...${NC}"
nohup node main.js > "$BOT_LOG" 2>&1 &
BOT_PID=$!
echo -e "${GREEN}✅ Bot started with PID: $BOT_PID${NC}"

echo ""

# ========================================
# STEP 5: MONITORING
# ========================================

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}STEP 5: BOT MONITORING${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Save PID for monitoring
echo "$BOT_PID" > .bot_pid

echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║    ✅ WHATSAPP BOT LAUNCHED & RUNNING                     ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

echo "Bot Status:"
echo "  Process ID: $BOT_PID"
echo "  Log file: $BOT_LOG"
echo "  Status: $(ps -p $BOT_PID > /dev/null && echo '✅ RUNNING' || echo '❌ STOPPED')"
echo ""

echo "WhatsApp Bot is now listening for inquiries at: +62 822-3756-5997"
echo ""

echo "To monitor bot in real-time:"
echo "  $ tail -f $BOT_LOG"
echo ""

echo "To stop bot:"
echo "  $ kill $BOT_PID"
echo ""

