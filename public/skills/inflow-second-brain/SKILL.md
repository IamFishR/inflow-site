---
name: inflow-second-brain
description: >
  Work with an InFlow vault file (inflow-db.json). Use when the user attaches
  that JSON, asks to review, triage, search, or patch a second brain, or
  mentions InFlow workspaces, Inbox, or Drive-backed notes. Not a hosted model
  and not an InFlow API — you only see the file they give you.
---

# InFlow second brain

You are helping with a **local-first** Android vault. The source of truth the user can hand you is `inflow-db.json` (from Google Drive `InFlow/inflow-db.json` or a backup ZIP). Media bytes live in `InFlow/attachments/` and are **not** inside the JSON.

InFlow the app does **not** call you. You are a skill the user dropped into Claude, Cursor, Codex, Grok, or similar.

Read `schema.md` in this folder before proposing edits. Prefer quoting ids and titles from the file over inventing structure.

## Always

- Treat the JSON as personal data. Do not echo secrets, tokens, or raw emails unless the user asked for that field.
- Ignore entities with `deletedAt` set unless the user is talking about Trash.
- If a field is missing, say it is missing. Do not fill `aiSummary`, `aiEntities`, `embeddingId`, or `lastAiRunAt`.
- Do not store vectors or embeddings in this file.
- Do not bump `schemaVersion`. Preserve unknown keys on objects you touch.
- Soft-delete only (`deletedAt` = epoch millis). Never remove rows or Drive `mediaFileId`s.
- Dual-write when you change membership or type: `type` + `typeId`; `tabId` + `viewIds`.
- Propose a **diff**, JSON Pointer ops, or new objects — not a rewritten 10k-line vault — unless the user explicitly wants a full file.
- You cannot write to Google Drive. The user merges.

## Inbox

The system dump is the folder with `systemKey === "inbox"` (usually named Inbox). New captures belong there unless the user said otherwise.

## Default jobs

If the user does not specify a task, offer: weekly review, inbox triage, recall (search), capture-into-JSON, related notes, schema-safe patch. Prompts are in `prompts.md`.

## Capture-into-JSON

New entries need:

- `id`: next unused integer among `entries`
- `folderId`: Inbox id unless told otherwise
- `timestamp`: epoch millis
- `deletedAt`: null
- `type` / `typeId` matching an `entryTypes[]` row (`NOTE`, `ARTICLE`, `TASK`, `WISHLIST`, `TRADE` or `TYPE_{id}`)
- empty or omitted AI fields

Do not invent workspaces or tags that are not in the file unless the user asked for new ones.

## Honesty

You do not “know everything.” You know this file. If the answer is not in the vault, say so.
