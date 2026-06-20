# myCHEF Peter System — Implementation Roadmap for Herms

**Status**: Ready to build  
**Created**: 2026-06-08  
**Owner**: Herms (developer)  
**Reference**: See SYSTEM_SETUP_REQUIREMENTS.md and OPEN_QUESTIONS.md

---

## Overview

This roadmap breaks the system into buildable phases. Each phase is self-contained and can be tested independently.

**Total estimated effort**: 3-4 weeks for Phase 1+2, another 2 weeks for Phase 3

---

## Phase 1: Foundation & Manual Testing (Weeks 1-2)

**Goal**: Get the system working with manual conversations so you can test Peter's quality before building the UI.

**Deliverable**: Conversation logs stored in database, basic Judge scoring, Hermes learning loop running

### 1.1: Set Up Development Environment

**Tasks**:
- [ ] Set up Node.js + Express server (or Python FastAPI)
- [ ] Install PostgreSQL locally (or connect to managed service)
- [ ] Create database schema (see SYSTEM_SETUP_REQUIREMENTS.md section "Database Schema")
- [ ] Set up environment variables (.env file)
- [ ] Initialize git repo with .gitignore (no .env, no API keys)

**Time**: 2-3 hours  
**Checklist**:
```bash
npm init
npm install express dotenv pg cors
createdb mychef_peter
psql mychef_peter < schema.sql
```

---

### 1.2: Build Core Data Layer

**Tasks**:
- [ ] Create database queries module:
  - `createConversation()`
  - `addMessage(session_id, role, text)`
  - `getConversation(session_id)`
  - `saveScore(session_id, score, breakdown)`
  - `getCustomer(email)` or `createCustomer()`

**Time**: 3-4 hours  
**Code structure**:
```javascript
// db/queries.js
const pool = new Pool();

async function createConversation(customerData) {
  const query = `
    INSERT INTO conversations 
    (session_id, customer_name, customer_email, channel)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  return pool.query(query, [sessionId, name, email, channel]);
}
```

---

### 1.3: Integrate Peter Agent (DeepSeek)

**Tasks**:
- [ ] Get DeepSeek API key from [https://platform.deepseek.com](https://platform.deepseek.com)
- [ ] Create `agents/peter.js` module:
  - Build system prompt (use peter_persona.md + knowledge base)
  - Call DeepSeek API
  - Extract Peter's requests ("I don't know X")
  - Return response + confidence score

**Time**: 4-5 hours  
**Pseudocode**:
```javascript
// agents/peter.js
async function generateResponse(customerMessage, context) {
  const systemPrompt = buildSystemPrompt(context.knowledge, context.patterns);
  
  const response = await deepseekAPI.chat({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: customerMessage }
    ]
  });
  
  const peterRequest = extractRequest(response.text);
  
  return {
    text: response.text,
    confidence: calculateConfidence(response.text, context),
    request: peterRequest
  };
}
```

**Decisions needed before building**:
- Q7: Which LLM provider? (confirm DeepSeek)
- Q18: Should Peter ask for help when uncertain?

---

### 1.4: Integrate Judge Agent

**Tasks**:
- [ ] Create `agents/judge.js` module
- [ ] Implement scoring rubric (from SYSTEM_SETUP_REQUIREMENTS.md)
- [ ] Build Judge prompt for Claude/GPT (Judge can be a different model)
- [ ] Call Judge API
- [ ] Store scores in database

**Time**: 3-4 hours  
**Scoring dimensions**:
```javascript
const rubric = {
  accuracy: { max: 25, checks: [...] },
  needs_discovery: { max: 15, checks: [...] },
  recommendation_fit: { max: 15, checks: [...] },
  objection_handling: { max: 20, checks: [...] },
  conversion_drive: { max: 15, checks: [...] },
  tone_and_policy: { max: 10, checks: [...] }
};
```

---

### 1.5: Manual Test Mode (CLI)

**Tasks**:
- [ ] Create a CLI script for manual testing
- [ ] You (as the developer testing this) can:
  - Run: `npm run test:conversation`
  - Input: customer name, message
  - See Peter's response
  - See Judge's score
  - See what Peter requests

**Time**: 2-3 hours  
**Example CLI**:
```bash
$ npm run test:conversation

Enter customer name: Maria
Enter message: How much for a chef for 4 people in Seminyak?

PETER'S RESPONSE:
"Lovely — Seminyak is right in our core area. For a private dinner, 
our Romantic/Family dinners start from IDR 2,200,000++ per person..."

PETER'S CONFIDENCE: 92%
PETER'S REQUESTS: family_pricing_guidance

JUDGE'S SCORE: 76/100
Breakdown:
  Accuracy: 22/25 (good but no family option mentioned)
  Needs discovery: 14/15
  Recommendation fit: 13/15
  Objection handling: 12/20 (didn't address budget concern)
  Conversion drive: 10/15 (no clear next step)
  Tone and policy: 5/10 (bit robotic)

RESULT: abandoned
OBJECTIONS DETECTED: price
```

---

### 1.6: Basic Nightly Learning Loop (Hermes)

**Tasks**:
- [ ] Create `agents/hermes.js` module
- [ ] Implement nightly job:
  1. Query conversations from yesterday
  2. Analyze high-scoring (>75) and low-scoring (<45)
  3. Extract patterns
  4. Generate daily report (text file for now, not email yet)

**Time**: 4-5 hours  
**Example output**:
```markdown
# DAILY LEARNING REPORT — 2026-06-08

Conversations: 12
Bookings: 3 (25%)
Abandoned: 9

🔴 URGENT — Peter Needs:
- Family pricing (asked 4x)
- Custom menu policy (asked 3x)

✅ What Worked:
- Warm greeting + story telling → 67% conversion
- Mentioning "we have options" → 50% conversion
```

**How to test**: 
```bash
npm run hermes:daily
# This should generate /learning/report_20260608.md
```

---

### 1.7: End of Phase 1 Checklist

Before moving to Phase 2:
- [ ] You've run 20-30 test conversations (using CLI)
- [ ] Judge is scoring fairly (you agree with 80% of scores)
- [ ] Peter is warm and not robot-sounding
- [ ] Daily report is useful (you see patterns emerging)
- [ ] All data is storing correctly in database
- [ ] You can give feedback on test conversations

---

## Phase 2: CRM Dashboard & Website Integration (Weeks 2-3)

**Goal**: Real customers can chat with Peter on your website, you see conversations in a dashboard, you can give feedback.

### 2.1: Build CRM Dashboard Frontend

**Tasks**:
- [ ] Set up React/Next.js frontend project
- [ ] Build Conversation Timeline page (see SYSTEM_SETUP_REQUIREMENTS.md Screen 1)
- [ ] Build Feedback Form page (see SYSTEM_SETUP_REQUIREMENTS.md Screen 2)
- [ ] Build Peter's Requests page
- [ ] Connect to backend API

**Time**: 4-6 hours  
**Key components**:
```jsx
// pages/dashboard.jsx
<ConversationTimeline 
  conversations={conversations}
  onSelectConversation={handleSelect}
/>

// pages/feedback.jsx
<FeedbackForm 
  sessionId={selectedSession}
  onSubmit={handleFeedbackSubmit}
/>
```

---

### 2.2: Build Website Chat Widget

**Tasks**:
- [ ] Create chat widget component (JavaScript + CSS)
- [ ] Can be a small popup in bottom-right of mychef.id website
- [ ] Collects: customer name, email, message
- [ ] Sends to: `POST /api/message`
- [ ] Receives Peter's response
- [ ] Shows as chat bubbles

**Time**: 3-4 hours  
**Integration point on website**:
```html
<!-- In mychef.id HTML footer -->
<script src="https://yourvps.com/chat-widget.js"></script>
<div id="peter-chat-widget"></div>
```

---

### 2.3: Build Backend API Endpoints

**Tasks**:
- [ ] `POST /api/message` — Receives customer message, returns Peter's response
- [ ] `POST /api/feedback` — Receives your feedback, stores it
- [ ] `GET /api/conversations` — Returns all conversations (for dashboard)
- [ ] `GET /api/peter-requests` — Returns open requests
- [ ] `GET /api/daily-report` — Returns today's learning report

**Time**: 3-4 hours  
**Example endpoints**:
```javascript
// POST /api/message
{
  "customer_name": "Maria",
  "customer_email": "maria@example.com",
  "channel": "website_chat",
  "message": "How much for..."
}
→ Returns: { peter_response, session_id, confidence }

// POST /api/feedback
{
  "session_id": "20260608_001",
  "what_worked": "Good greeting",
  "what_missed": "No family pricing",
  "peter_needs": "Family pricing IDR 1.2M - 1.8M",
  "customer_segment": "family"
}
→ Returns: { success: true, feedback_id: 123 }
```

---

### 2.4: Integrate Google Analytics

**Tasks**:
- [ ] Get GA4 property ID
- [ ] Add GA4 event logging to Peter's response:
  - Event: `customer_inquiry`
  - Properties: channel, score, result, objections
- [ ] Log to GA whenever a conversation ends (booked/abandoned)

**Time**: 1-2 hours  
**Example code**:
```javascript
// After Peter responds
gtag('event', 'customer_inquiry', {
  channel: 'website_chat',
  customer_segment: 'family',
  score: 76,
  result: 'abandoned',
  objections: 'price'
});
```

---

### 2.5: Update Nightly Loop to Store Reports

**Tasks**:
- [ ] Instead of just text file, generate daily report as structured data
- [ ] Store in database table or JSON file
- [ ] Show in CRM dashboard widget
- [ ] Later: Send as email (Phase 3)

**Time**: 1-2 hours

---

### 2.6: End of Phase 2 Checklist

Before Phase 3:
- [ ] Website chat is live (real customers can message)
- [ ] You can see all conversations in dashboard
- [ ] You can give feedback in CRM
- [ ] Daily report shows what Peter's learning
- [ ] Conversations store correctly
- [ ] Judge scores are showing up
- [ ] 50+ real conversations collected from real customers

---

## Phase 3: Multi-Channel & Automation (Weeks 3-4)

**Goal**: Add WhatsApp, automate email reports, close the learning loop completely.

### 3.1: WhatsApp Integration

**Tasks**:
- [ ] Set up Twilio (or Meta Cloud API) account
- [ ] Get WhatsApp Business number
- [ ] Create webhook: `POST /api/webhook/whatsapp`
- [ ] Receive WhatsApp messages → send to Peter → send response back
- [ ] All messages stored with `channel: 'whatsapp'`

**Time**: 3-4 hours  
**Twilio flow**:
```javascript
// POST /api/webhook/whatsapp
const from = req.body.From; // +62812xxxxx
const message = req.body.Body; // "How much for..."

// 1. Extract customer name from phone (or create "Customer")
// 2. Call Peter
// 3. Send response back via Twilio

twilio.messages.create({
  from: 'whatsapp:+1234567890',
  to: from,
  body: peterResponse
});
```

---

### 3.2: Email Daily Reports

**Tasks**:
- [ ] Set up SendGrid (or similar)
- [ ] Create email template with daily report
- [ ] Send every day at 23:30 UTC to your email
- [ ] Include: bookings, objections, Peter requests, emerging patterns

**Time**: 1-2 hours  
**Cron job**:
```javascript
// Schedule every night at 23:30
cron.schedule('30 23 * * *', async () => {
  const report = await generateDailyReport();
  await sendEmailReport(report);
});
```

---

### 3.3: Feedback Integration Loop

**Tasks**:
- [ ] When you submit feedback, automatically update:
  - `/knowledge/` files (pricing, FAQ, policies)
  - `/learning/` files (patterns, objections)
  - Peter's next system prompt
- [ ] Next conversation Peter has, he uses the updated knowledge

**Time**: 2-3 hours  
**Flow**:
```
You give feedback
  ↓
System stores in customer_feedback table
  ↓
Hermes reads feedback (nightly or immediate)
  ↓
Auto-generate knowledge update
  ↓
Store update in knowledge_updates table
  ↓
When Peter loads next conversation, include new knowledge
```

---

### 3.4: Customer Profile Recognition

**Tasks**:
- [ ] When repeat customer emails in, Peter recognizes them
- [ ] Shows: past booking status, past objections, past requests
- [ ] Peter can personalize: "Welcome back, Maria!"
- [ ] Track follow-up calendar (when to contact)

**Time**: 2-3 hours

---

### 3.5: Add Vector Search

**Tasks**:
- [ ] Set up Weaviate or Pinecone
- [ ] Embed all sessions + all knowledge
- [ ] When new customer comes in, vector search for similar customers
- [ ] Peter uses top 3-5 similar patterns (instead of loading all)

**Time**: 3-4 hours  
**Why**: Speeds up Peter, reduces costs, more relevant responses

---

### 3.6: End of Phase 3 Checklist

System is complete:
- [ ] Website chat ✅
- [ ] WhatsApp integration ✅
- [ ] Daily email reports ✅
- [ ] Feedback loop complete ✅
- [ ] Peter recognizes repeat customers ✅
- [ ] Vector search working ✅
- [ ] Running 100+ conversations/week ✅
- [ ] Conversion rate trending toward 80% ✅

---

## What to Build First (Prioritized List)

**If you have only 1 week**, build in this order:

1. **Phase 1.1-1.2**: Database + data layer (2 hours)
2. **Phase 1.3**: Peter agent (4 hours)
3. **Phase 1.4**: Judge agent (3 hours)
4. **Phase 1.5**: Manual CLI testing (2 hours)

**Result**: You can run test conversations manually and iterate on Peter's prompts.

---

**If you have 2 weeks**, add:

5. **Phase 2.1**: CRM dashboard (5 hours)
6. **Phase 2.2**: Website chat widget (3 hours)
7. **Phase 2.3**: Backend API (3 hours)

**Result**: Real customers can chat, you see conversations, you give feedback.

---

**If you have 3-4 weeks**, add:

8. **Phase 3.1-3.2**: WhatsApp + email (4 hours)
9. **Phase 3.3-3.5**: Feedback integration + vector search (6 hours)

**Result**: Full system running, learning, improving daily.

---

## Testing Checklist for Each Phase

### Phase 1 Testing
```bash
# 1. Test database
psql mychef_peter
SELECT * FROM conversations;

# 2. Test Peter
npm run test:conversation
(Have conversation, check response quality)

# 3. Test Judge
(Review scores—do they match your expectation?)

# 4. Test Hermes
npm run hermes:daily
(Check /learning/ folder for reports)
```

### Phase 2 Testing
```bash
# 1. Start server
npm start

# 2. Open dashboard
http://localhost:3000/dashboard

# 3. Try website chat widget
(Message from widget, see it appear in dashboard)

# 4. Give feedback
(Click "Give Feedback", fill form, save)

# 5. Check database
(Verify feedback stored correctly)
```

### Phase 3 Testing
```bash
# 1. Send WhatsApp test message
(From your phone to myCHEF WhatsApp number)
(Should appear in dashboard)

# 2. Check email
(Should receive daily report at 23:30)

# 3. Check vector search
(Should find similar patterns for new customers)

# 4. Test feedback loop
(Give feedback → check knowledge updated → next customer uses it)
```

---

## Critical Decisions for Herms (Before Starting)

Ask [Owner] to confirm these or reference OPEN_QUESTIONS.md:

- [ ] **Q1**: What's the definition of "success" for conversion rate?
- [ ] **Q3**: What's the biggest objection that kills deals?
- [ ] **Q7**: Confirmed LLM provider (DeepSeek)?
- [ ] **Q8**: Database: self-hosted or managed?
- [ ] **Q10**: WhatsApp integration ready?
- [ ] **Q25**: Timeline (when should Phase 2 be live?)

---

## Build Tips for Herms

### Tip 1: Start with Small Scope
Don't build vector search or WhatsApp on day 1. Build: database → Peter → Judge → CLI. Test it. Then add more.

### Tip 2: Use Existing Libraries
- **Chat widget**: Don't build from scratch, use Chatwoot or similar open-source
- **Email**: Use SendGrid SDK (2 lines of code)
- **Vector search**: Use LangChain JS which abstracts Weaviate/Pinecone

### Tip 3: Log Everything
```javascript
// Every API call, log what happened
console.log({
  timestamp: new Date(),
  endpoint: '/api/message',
  customerEmail: email,
  peterResponse: truncate(response, 50),
  score: score,
  duration_ms: Date.now() - start
});
```

### Tip 4: Error Handling
What happens if DeepSeek API is down? Peter should have a fallback:
```javascript
try {
  response = await deepseekAPI.chat(...);
} catch (err) {
  response = "Let me connect with my team and get back to you shortly!";
  logError({ error: err, fallback: true });
}
```

### Tip 5: Performance
Cache knowledge base and patterns in memory. Don't hit the database for every message:
```javascript
let cachedKnowledge = null;
let cachedPatterns = null;

// Load once per hour
setInterval(async () => {
  cachedKnowledge = await db.getKnowledge();
  cachedPatterns = await db.getPatterns();
}, 60 * 60 * 1000);

// Use cached in message handling
async function handleMessage(msg) {
  return peter(msg, cachedKnowledge, cachedPatterns);
}
```

---

## Estimated Costs (After Launch)

Per month (assuming 500 conversations/month):

| Component | Cost |
|-----------|------|
| DeepSeek API (Peter) | $25-50 |
| Judge API (Claude/GPT) | $20-30 |
| Database (managed) | $20 |
| Vector DB (Pinecone) | $15-20 |
| Email (SendGrid) | $5 |
| VPS + storage | $30-50 |
| Analytics + monitoring | $0-20 |
| **TOTAL** | **$115-185** |

**Optimization**: Use local vector search + cheaper LLM for Judge = $60-100/month

---

## Success Metrics to Track

After Phase 2 launch, track:

1. **Conversion rate by channel**
   - Website chat: ___% (target: 75%+)
   - WhatsApp: ___% (target: 80%+)
   
2. **Response time**
   - Peter's average response: ___ms (target: <2s)
   
3. **Customer feedback sentiment**
   - % of customers who rebook: ___% (target: 40%+)
   
4. **System health**
   - API uptime: ___% (target: 99%+)
   - DeepSeek API failures: ___ (target: <1%)
   - Database errors: ___ (target: <0.1%)

---

**Final Note**: Print this roadmap and check off each box as you build. This is a marathon, not a sprint. Build incrementally, test constantly, iterate based on results.

Good luck, Herms! 🚀

