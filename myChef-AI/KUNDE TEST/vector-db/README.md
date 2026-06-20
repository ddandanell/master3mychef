# vector-db

Embeddings index for **searchable history** — every session in `training/sessions/` plus
the `knowledge/` and `learning/` files get embedded here so agents can retrieve the most
relevant past conversations, objections, and winning replies at query time.

## Suggested contents (generated, not hand-written)
- `index.faiss` / `index.sqlite` — the vector store (gitignored if large).
- `chunks.jsonl` — one row per embedded chunk: `{id, source, text, metadata}`.
- `manifest.json` — what's indexed, embedding model, dimensions, last build time.

## What to embed
| Source | Metadata to keep |
|--------|------------------|
| sessions/*.json | persona, score, result, objections |
| knowledge/*.md | service, price tier |
| learning/*.md | pattern #, booking rate, objection tag |

## Build cadence
Re-embed nightly after Hermes writes new sessions, so retrieval always reflects the latest
lessons. Use the same embedding model end-to-end; record it in `manifest.json`.

> Empty until the indexer runs. This README is a placeholder so the folder is tracked.
