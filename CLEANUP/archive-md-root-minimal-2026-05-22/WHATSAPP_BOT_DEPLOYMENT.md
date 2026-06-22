# WhatsApp Bot Deployment Guide
## myCHEF Concierge (Putu) - Production Launch

**Bot Name**: myCHEF Concierge (Putu)  
**Location**: `/Users/openclaw/knightbot-fresh/`  
**Purpose**: Lead capture and qualification via WhatsApp  
**Target Number**: +62 822-3756-5997

---

## PRE-DEPLOYMENT CHECKLIST

- [ ] Website deployed and live at https://mychef.id
- [ ] WhatsApp Business API account configured
- [ ] Phone number (+62 822-3756-5997) verified
- [ ] .env file configured with credentials
- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install` already complete)

---

## DEPLOYMENT STEPS

### 1. Navigate to Bot Directory
```bash
cd /Users/openclaw/knightbot-fresh
```

### 2. Verify Configuration
```bash
cat .env
# Should contain:
# - SESSION_ID
# - OWNER_NUMBER
# - BOT_NAME
# - Any API keys if needed
```

### 3. Start the Bot
```bash
# Option A: Standard start
node main.js

# Option B: Optimized start (recommended for production)
npm run start:optimized

# Option C: Clean start (if issues)
npm run start:clean
```

### 4. First-Time Setup
When starting for the first time:
1. **QR Code will appear** in terminal
2. **Scan with WhatsApp** on the business phone
3. **Wait for "Connected" message**
4. **Session saved** to `./session/` directory

### 5. Verify Bot is Running
Test by sending a message to +62 822-3756-5997:
```
Test message: "Hello"
Expected response: myCHEF Concierge greeting
```

---

## PRODUCTION MONITORING

### Check Bot Status
```bash
# In the terminal where bot is running:
# Look for: "WhatsApp Bot Ready"
# Look for: "Connected to WhatsApp"
```

### Keep Bot Running (Background Process)
```bash
# Option A: Using nohup
nohup node main.js > bot.log 2>&1 &

# Option B: Using pm2 (if installed)
pm2 start main.js --name "mychef-bot"
pm2 save
pm2 startup

# Option C: Using screen
screen -S mychef-bot
node main.js
# Press Ctrl+A then D to detach
```

### View Logs
```bash
# If using nohup:
tail -f bot.log

# If using pm2:
pm2 logs mychef-bot

# If using screen:
screen -r mychef-bot
```

---

## POST-DEPLOYMENT VERIFICATION

### Test Lead Capture Flow
1. **Send test inquiry** to +62 822-3756-5997
2. **Verify bot responds** with myCHEF branding
3. **Check lead qualification** questions trigger
4. **Confirm data capture** (date, guest count, location)
5. **Verify owner notification** (if configured)

### Monitor First 24 Hours
- Response time (should be < 1 second)
- Message delivery rate (should be 100%)
- Error logs (should be minimal)
- Session stability (should not disconnect)

---

## TROUBLESHOOTING

### Bot Won't Connect
```bash
# Remove old session and restart
rm -rf ./session/*
node main.js
# Scan QR code again
```

### Bot Disconnects Frequently
```bash
# Use optimized start with memory limits
npm run start:optimized
```

### Commands Not Working
```bash
# Check command files
ls -la commands/
# Ensure all .js files are present
```

### High Memory Usage
```bash
# Use cleanup script
npm run cleanup
npm run start:optimized
```

---

## SECURITY NOTES

✅ `.env` file contains sensitive credentials (never commit to git)  
✅ Prompt injection detection enabled in `concierge.js`  
✅ Session files auto-generated (backed up in `./session/`)  
✅ Owner-only commands protected by phone number verification

---

## COMMANDS AVAILABLE

### User Commands (Customers)
- `menu` - View available services
- `price` - Get pricing information
- `book` - Start booking process
- `help` - Get assistance

### Owner Commands (Admin only)
- `status` - Bot status and stats
- `leads` - View captured leads
- `broadcast` - Send message to all customers
- `restart` - Restart bot (if needed)

---

## INTEGRATION WITH WEBSITE

The bot number (+62 822-3756-5997) is embedded in:
- All "WhatsApp Us" buttons across site
- Service page CTAs
- Contact page
- Floating action button
- Hero sections

Format: `https://wa.me/6282237565997?text=Hello%2C%20I%27m%20interested%20in%20myCHEF%20services`

---

## MAINTENANCE

### Daily
- [ ] Check bot is running (`ps aux | grep node`)
- [ ] Review error logs
- [ ] Test one message to verify responsiveness

### Weekly
- [ ] Review captured leads
- [ ] Update response templates if needed
- [ ] Check session file size (should stay < 50MB)

### Monthly
- [ ] Update dependencies (`npm update`)
- [ ] Review and optimize command performance
- [ ] Backup session files
- [ ] Review conversation analytics

---

## ROLLBACK PROCEDURE

If bot malfunctions:
1. **Stop the bot**: `kill [PID]` or `pm2 stop mychef-bot`
2. **Backup session**: `cp -r ./session/ ./session-backup-$(date +%Y%m%d)/`
3. **Clean start**: `npm run start:fresh`
4. **If still failing**: Use previous working session from backup

---

## SUPPORT CONTACTS

**Technical Issues**: Repository maintainer  
**WhatsApp API Issues**: WhatsApp Business support  
**Bot Logic Issues**: Check `main.js` and `commands/concierge.js`

---

**Deployment Status**: Ready  
**Dependencies**: ✅ Installed (418 packages)  
**Configuration**: ✅ Complete  
**Awaiting**: Website launch to production (deploy after site is live)

🤖 **Bot ready to serve customers!**
