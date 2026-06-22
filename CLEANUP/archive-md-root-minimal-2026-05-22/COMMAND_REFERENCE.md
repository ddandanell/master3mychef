# MYCHEF COMMAND REFERENCE
## All Executable Scripts — Copy & Paste Ready

**Effective**: 17 May 2026  
**Authority**: Claude (Autonomous Execution Agent)  
**Mode**: Execute immediately — no questions  

---

## 📋 QUICK START (Right Now)

### Step 1: Extract GA4 ID (3 min)
```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER"
bash google_analytics_setup.sh
```
**Expected**: Prompts for GA4 ID → Updates .env → Verification success

### Step 2: Extract GTM ID (3 min)
```bash
bash google_tag_manager_setup.sh
```
**Expected**: Prompts for GTM ID → Updates .env → Verification success

### Step 3: Build & Prepare Deployment (5 min)
```bash
bash deploy_to_netlify.sh
```
**Expected**: Builds dist/ → Verifies artifacts → Shows next steps

### Step 4: Launch WhatsApp Bot (2 min)
```bash
bash launch_whatsapp_bot.sh
```
**Expected**: Bot starts → Listens on WhatsApp → Logs all messages

---

## 🎯 CRITICAL PATH COMMANDS

### TIER 1: LAUNCH COMMANDS (Execute in Order)

#### Command 1: Google Analytics Setup
```bash
bash "/Users/openclaw/Downloads/MYCHEF . MASTER/google_analytics_setup.sh"
```
- **Input Required**: GA4 Property ID from Google Analytics
- **Output**: VITE_GA_ID added to .env
- **Time**: 3 minutes
- **Next**: Command 2

#### Command 2: Google Tag Manager Setup
```bash
bash "/Users/openclaw/Downloads/MYCHEF . MASTER/google_tag_manager_setup.sh"
```
- **Input Required**: GTM Container ID from Google Tag Manager
- **Output**: VITE_GTM_ID added to .env
- **Time**: 3 minutes
- **Next**: Command 3

#### Command 3: Build & Deploy Preparation
```bash
bash "/Users/openclaw/Downloads/MYCHEF . MASTER/deploy_to_netlify.sh"
```
- **Input Required**: None
- **Output**: dist/ folder ready + deployment instructions
- **Time**: 5-10 minutes
- **Next**: Netlify UI deployment (manual)

#### Command 4: Deploy to Netlify (Manual in UI)
```
Visit: https://app.netlify.com
1. Click "Add new site" → "Import existing project"
2. Select GitHub repo: ddandanell/master3mychef
3. Select branch: auto-improve/core-web-vitals-phase4
4. Build command: pnpm build
5. Publish dir: dist
6. Advanced → Add env vars:
   - VITE_GA_ID=[your ID]
   - VITE_GTM_ID=[your ID]
7. Click "Deploy site"
Wait ~10 minutes for build...
```
- **Time**: 15 minutes (setup) + 10 minutes (build)
- **Next**: Command 5

#### Command 5: Verify Site Live
```bash
# Test site is accessible
curl -I https://mychef.id

# Expected output:
# HTTP/2 200
```
- **Input Required**: None
- **Output**: Verification that site is live
- **Time**: 1 minute
- **Next**: Command 6

#### Command 6: Launch WhatsApp Bot
```bash
bash "/Users/openclaw/Downloads/MYCHEF . MASTER/launch_whatsapp_bot.sh"
```
- **Input Required**: None
- **Output**: WhatsApp bot running + monitoring
- **Time**: 2 minutes
- **Next**: Day 1 monitoring

---

### TIER 2: MONITORING COMMANDS

#### Daily Standup Report
```bash
bash "/Users/openclaw/Downloads/MYCHEF . MASTER/generate_daily_standup.sh"
```
- **Frequency**: Every morning or before standups
- **Output**: Status report + action items
- **Time**: 2 minutes

#### Check GA4 Traffic
```bash
# Open in browser
https://analytics.google.com → Select myCHEF property → Real-time
```
- **Frequency**: Hourly on Day 1, daily after
- **Expected**: Sessions > 0 (after public announcement)

#### Check GTM Firing
```bash
# Install GTM Assistant extension in Chrome
# Go to https://mychef.id
# Check extension icon → should show GTM firing
```
- **Frequency**: Hourly on Day 1
- **Expected**: GTM container active

#### Monitor Bot Logs
```bash
tail -f /tmp/whatsapp_bot_*.log
```
- **Frequency**: Continuous
- **Output**: Real-time WhatsApp message logs

---

### TIER 3: DECISION COMMANDS (David)

#### Call Alessandro
```
Phone: [Alessandro's number]
Agenda:
1. Menus finalized? (Scope: 3 signature menus)
2. Photographer booked? (Timeline: ASAP)
3. When can you deliver 30+ photos? (Target: 28 May)
4. Any blockers?

Document response and send to slack: #mychef-execution
```

#### Call Paco
```
Phone: [Paco's number]
Agenda:
1. Service flow timeline? (T-7 to T+4 hours with times)
2. Deposit structure? (%, when due, cancellation)
3. Payment methods? (Stripe, bank, cash, WhatsApp)
4. Can you document by 21 May?

Document response and send to slack: #mychef-execution
```

#### Call Antonio
```
Phone: [Antonio's number]
Agenda:
1. Available 20-22 May for test dinner?
2. Menu approach? (Your own or myCHEF template?)
3. Location? (Villa or professional kitchen?)
4. Evaluators: David, Paco, Alessandro

Document response and send to slack: #mychef-execution
```

---

## 🔍 VERIFICATION COMMANDS

### Check Build
```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
pnpm build
ls -lah dist/
```
**Expected**: dist/ folder exists, 175 KB size

### Check Git Status
```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
git status
git log --oneline -5
```
**Expected**: Clean working tree, commits visible

### Check Environment Variables
```bash
grep "VITE_GA_ID\|VITE_GTM_ID" "/Users/openclaw/Downloads/MYCHEF . MASTER/app/.env"
```
**Expected**: Both IDs present with values

### Check Netlify Deployment
```bash
# In browser, visit deployment URL
curl -I https://mychef.id
curl -I https://mychef.id/fine-dining
curl -I https://mychef.id/pricing
```
**Expected**: All return HTTP 200

### Check Analytics Firing
```
1. Open https://mychef.id in Chrome
2. DevTools → Network tab
3. Filter: "analytics"
4. Should see request to: collect?v=2&tid=G-XXXXXXXXXX
```
**Expected**: GA4 request visible

### Check GTM Firing
```
1. Install "Google Tag Manager Assistant" extension
2. Open https://mychef.id
3. Click extension icon
4. Should show: "GTM-XXXXXXX"
```
**Expected**: GTM container active

---

## 🚨 EMERGENCY COMMANDS (If Issues)

### Stop WhatsApp Bot
```bash
kill $(cat /Users/openclaw/knightbot-fresh/.bot_pid)
```

### View WhatsApp Bot Logs
```bash
tail -f /tmp/whatsapp_bot_*.log
```

### Rollback Netlify Deploy
```
Visit: https://app.netlify.com/sites/[site-name]/deploys
Click on previous deployment → "Publish deploy"
```

### Clear .env Backup
```bash
rm "/Users/openclaw/Downloads/MYCHEF . MASTER/app/.env.bak"
```

### Rebuild Project
```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
rm -rf dist node_modules
pnpm install
pnpm build
```

---

## 📊 SCRIPT LOCATIONS (All in One Place)

```
/Users/openclaw/Downloads/MYCHEF . MASTER/

├── google_analytics_setup.sh          ← Extract GA4 ID
├── google_tag_manager_setup.sh        ← Extract GTM ID
├── deploy_to_netlify.sh               ← Build & prepare
├── launch_whatsapp_bot.sh             ← Start bot
├── EXECUTION_STATUS_LIVE.md           ← Status dashboard
├── CRITICAL_PATH_TASK_TRACKER.md      ← Progress tracker
├── WEEKLY_STANDUP_TEMPLATE.md         ← Governance
└── ... (other docs)
```

---

## ✅ EXECUTION ORDER (Step-by-Step)

**Right Now** (Parallel tracks):

**Track 1 (Michael - Technical)**:
```
1. bash google_analytics_setup.sh              (3 min)
2. bash google_tag_manager_setup.sh            (3 min)
3. bash deploy_to_netlify.sh                   (5 min)
4. Go to app.netlify.com → Deploy (manual)     (25 min)
5. Verify: curl -I https://mychef.id           (1 min)
6. bash launch_whatsapp_bot.sh                 (2 min)
Total Time: ~40 minutes
```

**Track 2 (David - Calls)**:
```
1. Call Alessandro                             (5 min)
2. Call Paco                                   (5 min)
3. Call Antonio                                (5 min)
4. Document decisions in #mychef-execution    (5 min)
Total Time: ~20 minutes
```

**Parallel Execution Time**: ~40 minutes (both tracks run simultaneously)

---

## 🎯 SUCCESS CRITERIA

### After 40 Minutes
- ✅ Site live at https://mychef.id (HTTP 200)
- ✅ GA4 connected + firing
- ✅ GTM connected + firing
- ✅ WhatsApp bot listening
- ✅ Alessandro call completed
- ✅ Paco call completed
- ✅ Antonio called

### After 24 Hours (Day 1 Monitoring)
- ✅ GA4 showing traffic
- ✅ GTM recording events
- ✅ Core Web Vitals stable
- ✅ Zero critical errors
- ✅ WhatsApp bot capturing leads

---

## 📞 SUPPORT CONTACTS

**If script fails**:
1. Copy the error message
2. Paste in chat with tag [ERROR]
3. Claude will provide fix immediately

**If manual step unclear**:
1. Ask in chat with tag [QUESTION]
2. Claude will provide exact steps

**If blocker found**:
1. Report in chat with tag [BLOCKER]
2. Claude will escalate immediately

---

**Status**: 🟢 ALL COMMANDS READY  
**Awaiting**: Manual execution  
**Time to Launch**: ~40 minutes (from now)  

🚀 **Copy any command above and run it.**

