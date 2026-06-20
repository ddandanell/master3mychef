# setup/VECTOR_DB_SETUP.md — Searchable Memory

**What it's for:** so Peter can instantly find the *most relevant* past conversation, pattern, or
knowledge snippet for the customer in front of him — even out of thousands. That's a **vector
database**: it stores text as numbers ("embeddings") so the system can search by *meaning*, not just
exact words. ("kids dinner" finds "family-friendly meal" even though no words match.)

## Recommendation: pgvector (reuse the same Postgres)
You already need PostgreSQL for everything else. **pgvector** is a free extension that adds vector
search *inside* that same database — no extra service, no extra bill, one place to back up.
*Recommended for you.*

- Alternative (managed, if you outgrow it): **Pinecone** (~$15–20/mo) — easy but a separate service.
- The original docs mention Weaviate/Pinecone; pgvector is the simpler starting choice and the docs
  stay compatible.

## What gets embedded (stored for search)
- Every conversation in `training/sessions/`
- Each `learning/` pattern and best reply
- Each `knowledge/` chunk (pricing, faq, policies, services)

## Setup steps (Hermes does this)
1. Enable the extension: `CREATE EXTENSION IF NOT EXISTS vector;`
2. Add an `embedding vector(N)` column to a `knowledge_chunks` / `patterns_learned` table (N = the
   embedding model's dimension).
3. Pick an **embedding model** and store its key in `.env`:
   ```
   EMBEDDING_PROVIDER="openai"        # or "voyage" / a local model
   EMBEDDING_API_KEY="..."
   EMBEDDING_DIM=1536
   ```
   > Note: DeepSeek (Peter's chat model) does **not** provide embeddings — use a dedicated embedding
   > model (OpenAI `text-embedding-3-small`, Voyage, or a local one). This is a known gotcha.
4. On each new pattern/knowledge update, compute its embedding and store it.
5. At chat time: embed the customer's message → `ORDER BY embedding <-> query LIMIT 5` → inject the
   top 3–5 results into Peter's prompt (this is the "TODAY'S WINNING PATTERNS" block in
   `SYSTEM_SETUP_REQUIREMENTS.md`).

## How to verify
- Seed a few patterns, search with a paraphrased question, confirm the right pattern ranks #1.

## Decision needed
- **Q-009 in OPEN_QUESTIONS.md:** which vector DB. Default recommendation: **pgvector**.

---
### Plain-English version
It's Peter's "memory search." Instead of forgetting old chats, he can pull up the closest match by
*meaning* and reuse what worked. We build it inside your existing database so there's nothing extra to
run or pay for. (One catch: DeepSeek can't do the memory part, so we use a small separate model just
for the search index.)
