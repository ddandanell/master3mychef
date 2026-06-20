# myCHEF Peter System — Complete Setup Requirements

**Status**: Ready for Herms to build  
**Created**: 2026-06-08  
**Owner**: [You] / Herms  
**Goal**: Deploy a lead qualification and customer learning system that achieves 80% conversion rate

---

## Table of Contents
1. [System Architecture](#system-architecture)
2. [Technology Stack](#technology-stack)
3. [Database Schema](#database-schema)
4. [Core Components to Build](#core-components-to-build)
5. [Integration Points](#integration-points)
6. [Data Flows](#data-flows)
7. [File Structure](#file-structure)

---

## System Architecture

### High-Level Overview

```
CUSTOMER TOUCHPOINTS          PETER AGENT              DATA & LEARNING
├─ Website Chat              ├─ DeepSeek LLM         ├─ PostgreSQL
├─ WhatsApp                  ├─ Knowledge Base        ├─ Vector DB
└─ Telegram                  ├─ Prompt System        ├─ CRM Dashboard
                             └─ Feedback Handler     └─ Google Analytics
                                                      
                                    ↓
                            JUDGE AGENT
                         (Scores 0-100)
                                    ↓
                            LEARNING LOOP
                         (Every night)
                                    ↓
                            KNOWLEDGE UPDATES
                         + EMAIL REPORT TO YOU
```

---

## Technology Stack

### Backend Requirements
- **API Server**: Node.js (Express) or Python (FastAPI)
- **LLM Provider**: DeepSeek API (for Peter responses)
- **Database**: PostgreSQL (conversations, feedback, patterns)
- **Vector Database**: Weaviate or Pinecone (embeddings for sessions + knowledge)
- **Message Queue**: Optional (Redis) for background tasks
- **Scheduling**: node-cron or similar (nightly learning loop)

### Frontend Requirements
- **CRM Dashboard**: React/Next.js or Vue (show conversations, feedback form)
- **Deployment**: Your VPS (Ubuntu/Linux)

### External Services
- **WhatsApp**: Twilio API or Meta Cloud API
- **Analytics**: Google Analytics 4 (event tracking)
- **Email**: SendGrid or similar (daily reports)

---

## Database Schema

### Core Tables

```sql
-- CONVERSATIONS TABLE
CREATE TABLE conversations (
  session_id VARCHAR(255) PRIMARY KEY,
  timestamp TIMESTAMP DEFAULT NOW(),
  customer_name VARCHAR(255),
  customer_email VARCHAR(255),
  customer_phone VARCHAR(20),
  channel VARCHAR(50), -- 'website_chat', 'whatsapp', 'telegram'
  messages JSONB, -- Array of {role, text, timestamp}
  score INTEGER, -- 0-100 from Judge
  result VARCHAR(50), -- 'booked', 'abandoned', 'pending', 'follow_up'
  tags JSONB, -- Array of tags: ['price', 'family', 'seminyak', etc]
  objections JSONB, -- Array of objections detected
  follow_up_date DATE, -- When to contact customer again
  feedback_received BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- CUSTOMER_FEEDBACK TABLE
CREATE TABLE customer_feedback (
  feedback_id SERIAL PRIMARY KEY,
  session_id VARCHAR(255) REFERENCES conversations(session_id),
  feedback_type VARCHAR(50), -- 'price', 'question', 'pattern', 'objection', 'other'
  your_notes TEXT,
  what_peter_did_well TEXT,
  what_peter_missed TEXT,
  suggested_knowledge_update TEXT,
  customer_segment VARCHAR(100), -- 'family', 'corporate', 'couple', etc
  knowledge_category VARCHAR(100), -- 'pricing', 'faq', 'policy', 'pattern'
  knowledge_file_updated VARCHAR(255), -- '/knowledge/pricing.md'
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- PATTERNS_LEARNED TABLE
CREATE TABLE patterns_learned (
  pattern_id SERIAL PRIMARY KEY,
  customer_question TEXT, -- Exact question from customer
  winning_response TEXT, -- Best response to use
  losing_response TEXT, -- What NOT to say
  booking_rate DECIMAL(3,2), -- 0.87 = 87%
  times_seen INTEGER DEFAULT 1,
  relevant_for_segments JSONB, -- ['family', 'budget'] or null for all
  evidence_sessions JSONB, -- Array of session_ids
  confidence_level VARCHAR(20), -- 'low', 'medium', 'high'
  last_updated TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- KNOWLEDGE_UPDATES TABLE
CREATE TABLE knowledge_updates (
  update_id SERIAL PRIMARY KEY,
  update_type VARCHAR(50), -- 'pricing', 'faq', 'policy', 'pattern'
  content TEXT, -- The new data
  file_path VARCHAR(255), -- '/knowledge/pricing.md'
  source_session VARCHAR(255), -- Which conversation triggered this
  source_feedback INTEGER REFERENCES customer_feedback(feedback_id),
  applied BOOLEAN DEFAULT FALSE,
  applied_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- PETER_REQUESTS TABLE (Peter's "I need info" messages)
CREATE TABLE peter_requests (
  request_id SERIAL PRIMARY KEY,
  session_id VARCHAR(255) REFERENCES conversations(session_id),
  request_text TEXT, -- "I don't know pricing for casual family dinners"
  request_type VARCHAR(50), -- 'pricing', 'policy', 'faq', 'workflow'
  status VARCHAR(50), -- 'open', 'answered', 'in_progress'
  answer_provided TEXT,
  answered_by VARCHAR(255), -- 'you' or 'system'
  answered_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- CUSTOMER_PROFILES TABLE
CREATE TABLE customer_profiles (
  customer_id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  name VARCHAR(255),
  phone VARCHAR(20),
  first_contact TIMESTAMP,
  last_contact TIMESTAMP,
  segment VARCHAR(100), -- 'family', 'corporate', 'couple', 'event', 'retreat'
  total_conversations INTEGER DEFAULT 0,
  booking_status VARCHAR(50), -- 'hot', 'waiting', 'later', 'no_budget', 'booked'
  booking_date DATE,
  visit_planned_date DATE, -- When they're coming to Bali
  tags JSONB, -- Custom tags from you
  notes TEXT -- Your personal notes
);
```

### Rationale
- **Separate feedback table**: Tracks what you tell Peter to learn
- **Patterns table**: Stores winning responses with booking rates
- **Peter requests table**: Captures what data Peter is missing (very important!)
- **Customer profiles**: Enables repeat-customer recognition and follow-up tracking

### Added tables (2026-06-08) — Control Panel + Calendar

> These extend the schema for the central `CONTROL_PANEL.md` and the follow-up calendar.
> See `setup/DATABASE_AND_CRM_CONNECTIONS.md` for how they're used.

```sql
-- SETTINGS TABLE (mirrors CONTROL_PANEL.md; the running app reads editable values from here)
CREATE TABLE settings (
  key VARCHAR(100) PRIMARY KEY,   -- e.g. 'agent_name_customer', 'deposit_pct', 'nightly_loop_utc'
  value TEXT,                     -- e.g. 'Peter', '25', '23:00'
  category VARCHAR(50),           -- 'identity','pricing','contact','rules','channels','ops','llm'
  updated_by VARCHAR(255),        -- 'david' | 'hermes'
  updated_at TIMESTAMP DEFAULT NOW()
);

-- CALENDAR_EVENTS TABLE (who to talk to / who not / what's coming in the next 3 months)
CREATE TABLE calendar_events (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customer_profiles(customer_id),
  type VARCHAR(50),               -- 'follow_up' | 'booking' | 'hold' | 'call'
  due_date DATE,
  status VARCHAR(20) DEFAULT 'open', -- 'open' | 'done' | 'dismissed'
  note TEXT,
  created_by VARCHAR(255),        -- 'peter' | 'david' | 'hermes'
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Note on channels:** the `channel` columns/events should also allow `'messenger'` and
`'telegram_operator'` (David's private operator line), in addition to the existing
`'website_chat'`, `'whatsapp'`, `'telegram'`. See `FEEDBACK_APP_SPEC.md`.

---

## Core Components to Build

### 1. Message Handler (API Endpoint)
**Purpose**: Receives messages from WhatsApp/website chat, stores them, calls Peter

**Endpoint**: `POST /api/message`

**Input**:
```json
{
  "customer_name": "Maria",
  "customer_email": "maria@example.com",
  "channel": "website_chat",
  "message": "How much for a chef for 4 people in Seminyak?"
}
```

**Logic**:
1. Store message in conversations table
2. Check if customer_email exists in customer_profiles (repeat customer?)
3. If repeat: Load their past conversation history
4. Call Peter with: message + context + relevant patterns + knowledge base
5. Store Peter's response in conversations table
6. Return response to frontend/chat UI
7. Log event to Google Analytics

**Output**:
```json
{
  "session_id": "20260608_001",
  "peter_response": "Lovely — Seminyak is right in our area...",
  "confidence": 0.92,
  "tags_applied": ["price_inquiry", "family", "seminyak"],
  "peter_requested_info": null or "family_pricing_guidance"
}
```

---

### 2. Peter Agent (LLM Integration)
**Purpose**: Generates warm, human-feeling responses

**System Prompt Structure**:
```
You are Peter, myCHEF's booking concierge...

[Core persona from prompts/peter_persona.md]

TODAY'S KNOWLEDGE BASE:
[Insert relevant pricing, FAQ, policies]

TODAY'S WINNING PATTERNS:
Pattern #42: Can I talk to the chef?
Response: "To keep quality and planning consistent..."
Booking rate: 87%

[Insert top 3-5 most relevant patterns from vector search]

CUSTOMER HISTORY (if repeat):
[Load past conversations with this customer]

CURRENT CUSTOMER TYPE:
[Based on their questions, what segment? Use this to personalize]

CURRENT INSTRUCTION:
[What should you focus on in this reply?]
- If budget question: Lead with options, not just premium
- If objection: Address it, then offer alternative
- If new question: Answer if certain, else say "let me check and get back"
```

**Request Format to DeepSeek**:
```json
{
  "messages": [
    {
      "role": "system",
      "content": "[Full system prompt above]"
    },
    {
      "role": "user",
      "content": "Customer message: How much for a chef for 4 people?"
    }
  ],
  "model": "deepseek-chat",
  "temperature": 0.7,
  "max_tokens": 300
}
```

**Post-Processing**:
- Check response for hallucinations (prices match knowledge base?)
- Extract any Peter requests ("I don't know X")
- Generate confidence score
- Tag with detected topics

---

### 3. Judge Agent (Scoring)
**Purpose**: Scores conversation 0-100, labels outcome, identifies improvements

**Scoring Rubric** (Total: 100 points):
```
Accuracy (25 pts):
- Prices match knowledge base (+10)
- No invented numbers (+8)
- "++" tax explanation clear (+4)
- Facts accurate (+3)

Needs Discovery (15 pts):
- Captured occasion (+5)
- Captured headcount (+3)
- Captured budget/price sensitivity (+4)
- Captured area/location (+3)

Recommendation Fit (15 pts):
- Right service type (+8)
- Concrete package offered (+4)
- Alternatives given if needed (+3)

Objection Handling (20 pts):
- Price objection addressed (+6)
- Deposit objection addressed (+4)
- Menu/customization objection (+5)
- Timing objection (+5)

Conversion Drive (15 pts):
- Clear next step offered (+8)
- Customer commitment toward booking (+4)
- No vague endings (+3)

Tone & Policy (10 pts):
- Warm, human tone (+5)
- No robot language (+3)
- On-policy (no chef-direct, no over-promise) (+2)
```

**Judge Output**:
```json
{
  "session_id": "20260608_001",
  "score": 76,
  "breakdown": {
    "accuracy": 22,
    "needs_discovery": 14,
    "recommendation_fit": 13,
    "objection_handling": 12,
    "conversion_drive": 10,
    "tone_and_policy": 5
  },
  "result": "abandoned",
  "detected_objections": ["price", "chef_contact"],
  "judge_assessment": "Good conversation, but Peter quoted high for this segment. Should have offered family-friendly alternative first.",
  "judge_suggestions": [
    "Was family pricing missing from knowledge base?",
    "Should Peter say 'let me check options' instead of committing to one price?"
  ],
  "confidence_in_score": 0.88
}
```

---

### 4. Nightly Learning Loop (Hermes)
**Purpose**: Extract patterns, update knowledge, send you a daily report

**Runs at**: 23:00 UTC (or your preferred time)

**Process**:

**Step 1: Extract Conversations from Yesterday**
```sql
SELECT * FROM conversations 
WHERE DATE(created_at) = DATE(NOW() - INTERVAL '1 day')
ORDER BY score DESC
```

**Step 2: Analyze High-Scoring Conversations** (>75)
```
Extract:
- What objections were handled well?
- What questions were answered?
- What tone worked?
→ Add to patterns_learned (if not already there)
```

**Step 3: Analyze Low-Scoring Conversations** (<45)
```
Extract:
- What objections killed the deal?
- What info was missing?
- What Peter struggled with?
→ Identify gaps in knowledge base
```

**Step 4: Read Your Feedback**
```sql
SELECT * FROM customer_feedback 
WHERE created_at > NOW() - INTERVAL '1 day'
ORDER BY created_at DESC
```

**Step 5: Identify Peter's Requests**
```sql
SELECT * FROM peter_requests 
WHERE status = 'open'
ORDER BY created_at DESC
```

**Step 6: Generate Daily Report**

Send you an email with:
```
📊 DAILY LEARNING REPORT — 2026-06-08

Conversations: 12
Bookings: 3 (25% conversion rate)
Abandoned: 9

🔴 URGENT — Peter Still Needs:
1. Family dinner pricing (asked 4x, not answered yet)
2. Customizable menu policy (asked 3x)
3. Chef direct contact policy (asked 2x)

✅ What Worked Today:
- Warm greeting + "Tell me about your occasion"
  → Appeared in 6 conversations, 4 booked
- Offering "we have options from IDR X"
  → Appeared in 8 conversations, 3 booked

📈 Emerging Patterns:
Pattern #51: Budget-conscious customers
Question: "That's expensive, do you have cheaper options?"
Winning response: "We do—let me ask you a quick question..."
Evidence: Sessions 0008, 0009, 0012
Booking rate: 75% (3 of 4)

Pattern #52: Families with kids
Question: "How do I know the chef is good with kids?"
Winning response: "Every chef in our network has family experience..."
Evidence: Session 0006
Booking rate: 100% (1 of 1)

👉 YOUR NEXT STEPS:
1. Answer Peter's request for family pricing (4 pending)
2. Update /knowledge/pricing.md with family options
3. Clarify chef-contact policy (can high-value clients meet chef before booking?)
4. Review emerging patterns—do they match your experience?

📈 Customer Segments Today:
- Families: 4 conversations, 50% booking rate
- Couples: 3 conversations, 33% booking rate
- Corporate: 2 conversations, 50% booking rate
- Retreats: 2 conversations, 0% booking rate
- Expats: 1 conversation, 100% booking rate

💡 This is the "growing brain" — after 50-100 conversations,
   you'll see clear patterns for each segment. Right now,
   sample sizes are small, so patterns are emerging signals, not yet rules.
```

**Step 7: Update Files**

Update these based on today's learning:
- `/knowledge/faq.md` (new questions)
- `/knowledge/pricing.md` (new pricing discovered)
- `/learning/customer_patterns.md` (new winning patterns)
- `/learning/objections.md` (what kills deals)
- `/learning/customer_patterns_by_segment.md` (family vs corporate vs...)

---

### 5. CRM Dashboard (Web Interface)

**Purpose**: Show you all conversations, let you give feedback, see alerts

**Key Screens**:

**Screen 1: Conversation Timeline**
```
┌─────────────────────────────────────────────────┐
│ myCHEF Peter — Conversation Timeline             │
├─────────────────────────────────────────────────┤
│ Filter: [All] [Waiting] [Hot] [Later] [Booked]  │
│ Search: _________________ [Channel: All]        │
├─────────────────────────────────────────────────┤
│
│ Maria (Australian family)          [Score: 76]
│ Website chat • 2026-06-08 14:32
│ ✅ Feedback given   📍 Status: [Dropdown]
│ Objections: price, customization
│ Peter requests: family_pricing
│ [View chat] [Give feedback] [Archive] [Snooze 1 week]
│
│ David (Corporate event)            [Score: 92]
│ WhatsApp • 2026-06-08 12:15
│ ❌ No feedback      📍 Status: [Booked ✓]
│ Objections: none
│ [View chat] [Give feedback] [Archive] [Invoice]
│
│ Sophia (Retreat organizer)         [Score: 34]
│ Website chat • 2026-06-08 09:44
│ ❌ No feedback      📍 Status: [Waiting >3 days]
│ Objections: price, timeline
│ Peter requests: retreat_pricing, early_booking_discount
│ [View chat] [Give feedback] [Archive] [Follow-up]
│
└─────────────────────────────────────────────────┘
```

**Screen 2: Give Feedback Form**
```
┌─────────────────────────────────────────────────┐
│ Feedback for Maria — Australian Family           │
├─────────────────────────────────────────────────┤
│ Conversation score: 76/100
│ Result: Abandoned (customer went quiet)
│
│ WHAT PETER DID WELL:
│ [Text field] "He was warm and got details fast"
│
│ WHAT PETER MISSED:
│ [Text field] "He didn't mention family menus"
│
│ PETER'S REQUESTS THIS CHAT:
│ ☑ Family-friendly pricing
│
│ DO YOU HAVE ANSWERS FOR PETER?
│ Pricing: [Text] "IDR 1.2M - 1.8M per family (4)"
│ Menu options: [Text] "Simple, kid-friendly 3-course"
│
│ CUSTOMER SEGMENT:
│ [Dropdown: Family / Corporate / Couple / Retreat / Other]
│
│ NEXT STEPS WITH THIS CUSTOMER:
│ ☐ Hot lead—follow up this week
│ ☑ Maybe later—contact June 8
│ ☐ Not serious—archive
│ ☐ Waiting on their decision
│
│ NEW INSIGHTS ABOUT THIS SEGMENT:
│ [Text] "Expat families ask about casual dining first,
│         not Michelin. Also want to know about kids' food."
│
│ KNOWLEDGE TO ADD:
│ [Link] Knowledge category: [Pricing / FAQ / Policy]
│ [Link] Which file: /knowledge/pricing.md
│
│ [SAVE FEEDBACK]
│
└─────────────────────────────────────────────────┘
```

**Screen 3: Peter's Requests**
```
┌─────────────────────────────────────────────────┐
│ Peter's Open Requests                           │
├─────────────────────────────────────────────────┤
│ Priority: [URGENT] 4 unanswered requests
│
│ ⚠️ URGENT (Asked 4+ times, no answer)
│
│ Family-friendly dinner pricing
│ Asked: 4 times (Maria, John, Sarah, Lisa)
│ Sessions: 0003, 0006, 0008, 0011
│ Status: ❌ OPEN
│ [View requests] [Provide answer]
│
│ 🟡 HIGH (Asked 2-3 times)
│
│ Can customers customize menu before booking?
│ Asked: 3 times
│ Status: ❌ OPEN
│
│ 🟢 MEDIUM (Asked once)
│
│ What's your chef-contact policy for high-value clients?
│ Asked: 1 time
│ Status: ❌ OPEN
│
└─────────────────────────────────────────────────┘
```

**Screen 4: Daily Learning Report (Widget)**
```
┌─────────────────────────────────────────────────┐
│ Today's Learning — 2026-06-08                   │
├─────────────────────────────────────────────────┤
│ Conversations: 12  Bookings: 3 (25%)
│
│ ⚠️ Peter still needs:
│ • Family pricing (4 times)
│ • Custom menu info (3 times)
│ • Chef-contact policy (2 times)
│
│ ✅ What worked:
│ • Warm greeting: 6 conversations, 4 booked
│ • "We have options from..." 8 conversations, 3 booked
│
│ 📈 Emerging patterns:
│ • Pattern #51: Budget objection → 75% booking
│ • Pattern #52: Family with kids → 100% booking
│
│ [View full report] [Download CSV]
│
└─────────────────────────────────────────────────┘
```

---

## Integration Points

### 1. Website Chat Integration
- **Where**: Your myCHEF website homepage
- **How**: WebSocket or long-poll to `/api/message` endpoint
- **Example Widget**: Chat bubble in bottom right
- **Data collected**: customer_name, email, message, timestamp

### 2. WhatsApp Integration
- **Provider**: Twilio or Meta Cloud API
- **How**: Webhook receives incoming messages
- **Endpoint**: `POST /api/webhook/whatsapp`
- **Data collected**: customer_phone, message, timestamp, customer_name (from profile)

### 3. Google Analytics
- **Event**: `customer_inquiry`
- **Properties**:
  - `channel`: website_chat / whatsapp / telegram
  - `customer_segment`: family / corporate / etc
  - `conversation_score`: 0-100
  - `result`: booked / abandoned / pending
  - `objections`: price, menu, timeline, etc
  - `conversion`: true / false
  - `response_time`: milliseconds

### 4. Email Reports
- **Provider**: SendGrid or similar
- **Recipient**: You
- **Frequency**: Daily at 23:30 UTC
- **Content**: Daily Learning Report (see Nightly Loop section)

### 5. Database Backups
- **Frequency**: Daily at 02:00 UTC
- **Location**: Encrypted backup to S3 or your VPS backup drive
- **Retention**: 30 days rolling

---

## Data Flows

### Flow 1: Customer Message → Peter Response → Store

```
1. Customer sends message (website/WhatsApp)
   ↓
2. API receives at /api/message
   ↓
3. Store in conversations table (raw message)
   ↓
4. Check if customer exists in customer_profiles
   ↓
5. IF exists: Load past conversation history
   ↓
6. Vector search: Find most relevant knowledge + patterns
   ↓
7. Build Peter's system prompt with:
   - Persona (peter_persona.md)
   - Relevant knowledge (from /knowledge/)
   - Top 3-5 matching patterns (from patterns_learned table)
   - Customer history (if repeat)
   - Customer segment (if detected)
   ↓
8. Call DeepSeek API with system prompt + user message
   ↓
9. Check response for:
   - Hallucinations (prices real?)
   - Requests from Peter (I don't know X)
   - Confidence score
   ↓
10. Store response in conversations table
    ↓
11. Log event to Google Analytics
    ↓
12. Return response to frontend/chat UI
    ↓
13. If Peter made a request, store in peter_requests table
```

### Flow 2: Conversation Ends → Judge Scores → Store

```
1. Customer goes quiet or books
   ↓
2. Mark conversation as 'abandoned' or 'booked' (manual or auto-detect)
   ↓
3. Call Judge Agent
   ↓
4. Judge reads full conversation with scoring rubric
   ↓
5. Judge generates:
   - Score (0-100)
   - Breakdown by dimension
   - Result (booked / abandoned / pending)
   - Detected objections
   - Suggestions for improvement
   ↓
6. Store in conversations table + judge_scores table
   ↓
7. Flag if score is uncertain (45-55 range → review by human)
```

### Flow 3: You Give Feedback → System Learns → Peter Improves

```
1. You see conversation in CRM dashboard
   ↓
2. Click "Give Feedback"
   ↓
3. Fill out feedback form (2 min)
   ↓
4. System stores in customer_feedback table
   ↓
5. System extracts:
   - New knowledge (add to /knowledge/)
   - New patterns (add to patterns_learned)
   - Peter's requests answered (mark as 'answered' in peter_requests)
   - Customer segment insights
   ↓
6. If you provided pricing, system:
   - Adds to /knowledge/pricing.md
   - Tags for next customers in this segment
   - Calculates vector embedding for similarity search
   ↓
7. Next time similar customer comes in:
   - Peter has new knowledge
   - Peter uses new pattern if relevant
   - Peter knows this worked before
```

### Flow 4: Nightly Learning Loop

```
1. Cron job triggers at 23:00 UTC
   ↓
2. Query conversations from yesterday
   ↓
3. Analyze high-scoring conversations (>75)
   → Extract successful patterns
   ↓
4. Analyze low-scoring conversations (<45)
   → Identify missing knowledge
   ↓
5. Query all feedback you gave yesterday
   ↓
6. Query all Peter requests (answered and unanswered)
   ↓
7. Generate insights:
   - What objections are most common?
   - Which patterns have highest booking rate?
   - What does Peter still need?
   - What are emerging customer behaviors?
   ↓
8. Generate daily report email
   ↓
9. Update /learning/ folder:
   - /learning/customer_patterns.md
   - /learning/objections.md
   - /learning/customer_patterns_by_segment.md
   - /learning/best_replies.md
   ↓
10. Generate "suggested knowledge updates":
   - New FAQ questions to add
   - New pricing to add
   - New policies to clarify
   ↓
11. Send daily report to you + set flags for urgent
```

---

## File Structure

Current structure (what exists):
```
myChef-AI/
├── prompts/
│   ├── peter_persona.txt
│   └── hermes_guardrail.txt
├── knowledge/
│   ├── company_knowledge.md
│   ├── source_notes.md
│   ├── staffing_price_knowledge.md
│   └── staffing_pages_index.md
└── KUNDE TEST/
    ├── prompts/
    ├── knowledge/
    ├── training/
    ├── analytics/
    ├── vector-db/
    └── learning/
```

**New structure to build**:
```
myChef-AI/
├── SYSTEM_SETUP_REQUIREMENTS.md (THIS FILE)
├── OPEN_QUESTIONS.md
├── IMPLEMENTATION_ROADMAP.md
├── CONFIG.md (API keys, database credentials, model settings)
│
├── backend/
│   ├── api/
│   │   ├── message.js (POST /api/message)
│   │   ├── feedback.js (POST /api/feedback)
│   │   └── peter_requests.js (GET /api/peter-requests)
│   ├── agents/
│   │   ├── peter.js (LLM integration)
│   │   ├── judge.js (Scoring)
│   │   └── hermes.js (Nightly loop)
│   ├── db/
│   │   ├── schema.sql
│   │   └── seeds.sql
│   ├── utils/
│   │   ├── analytics.js (Google Analytics)
│   │   ├── vector_search.js (Find relevant knowledge)
│   │   └── prompt_builder.js (Build system prompts)
│   └── server.js
│
├── frontend/
│   ├── pages/
│   │   ├── dashboard.jsx (Conversation timeline)
│   │   ├── feedback.jsx (Feedback form)
│   │   └── peter_requests.jsx (Requests list)
│   ├── components/
│   │   ├── ConversationTimeline.jsx
│   │   ├── FeedbackForm.jsx
│   │   └── DailyReportWidget.jsx
│   └── App.jsx
│
├── prompts/
│   ├── peter_persona.md (full, updated)
│   ├── hermes_guardrail.md (full, updated)
│   ├── judge_agent.md (full, updated)
│   └── optimizer_agent.md (full, updated)
│
├── knowledge/
│   ├── company_knowledge.md (company identity, positioning)
│   ├── pricing.md (ALL pricing: premium, family, corporate, retreat)
│   ├── services.md (what we offer)
│   ├── faq.md (frequently asked questions)
│   ├── policies.md (chef contact, customization, etc)
│   └── PRICE_AUDIT.md (source data, when updated)
│
├── learning/
│   ├── customer_patterns.md (all winning patterns with booking rates)
│   ├── customer_patterns_by_segment.md (segmented: family, corporate, etc)
│   ├── objections.md (objections that kill deals + winning responses)
│   ├── best_replies.md (top 10 successful response templates)
│   ├── pricing_feedback.md (pricing insights from customer feedback)
│   └── new_faqs.md (questions Peter asked or customers asked)
│
├── training/
│   ├── sessions/ (all conversation JSONs)
│   │   ├── session_0001.json
│   │   ├── session_0002.json
│   │   └── ...
│   ├── good_conversations/ (high-scoring sessions)
│   ├── bad_conversations/ (low-scoring sessions)
│   └── golden_examples/ (hand-picked reference conversations)
│
├── analytics/
│   ├── scores.csv (session_id, score, result, date)
│   ├── successful_bookings.csv
│   ├── failed_bookings.csv
│   ├── common_questions.csv
│   ├── objections_by_segment.csv
│   └── conversion_by_channel.csv
│
├── vector-db/
│   ├── README.md (how vector search works)
│   ├── embeddings/ (indexed sessions + knowledge)
│   └── search_log.json (what was searched when)
│
└── KUNDE TEST/ (legacy test folder, keep as reference)
```

---

## Environment Variables Required

```bash
# .env file (never commit this)

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/mychef_peter"

# LLM
DEEPSEEK_API_KEY="sk-..."
DEEPSEEK_MODEL="deepseek-chat"

# Vector DB
WEAVIATE_URL="http://localhost:8080" # or Pinecone endpoint
WEAVIATE_API_KEY="..."

# WhatsApp (if using)
TWILIO_ACCOUNT_SID="..."
TWILIO_AUTH_TOKEN="..."
TWILIO_WHATSAPP_NUMBER="+1..."

# Google Analytics
GA4_PROPERTY_ID="G-..."
GA4_API_KEY="..."

# Email (Daily reports)
SENDGRID_API_KEY="SG...."
REPORT_EMAIL_TO="your@email.com"

# Your VPS
API_PORT=3000
NODE_ENV="production"
```

---

**End of Document**

Herms: This document defines everything that needs to be built. See OPEN_QUESTIONS.md for decisions that need to be made before building.

