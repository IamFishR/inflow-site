# InFlow prompts

Copy into any chat that can attach `inflow-db.json`. Replace `{{…}}` placeholders. Pair with `SKILL.md`.

## Weekly review

```
You are using the InFlow second-brain skill. I am attaching my vault file inflow-db.json.

Do a weekly review. Do not invent entries, workspaces, or AI summaries.

1. Inbox: list active entries still in the system Inbox (folders with systemKey "inbox"). Title, type, and a one-line reason they still sit there.
2. Overdue / due soon: tasks with dueDate or reminderAt in the past 7 days or next 7 days.
3. Reading: articles with readingStatus UNREAD or READING.
4. Stale: entries with no recent timestamp that look abandoned (say why).
5. Suggested moves: workspace or tag suggestions only — do not patch the JSON unless I ask.

Ignore items with deletedAt set. Quote titles from the file. If a field is missing, say so.
```

## Inbox triage

```
You are using the InFlow second-brain skill. I am attaching inflow-db.json.

Triage only the active Inbox entries (folder with systemKey "inbox", deletedAt empty).

For each entry, propose:
- keep in Inbox / move to an existing workspace (use folder names from the file) / trash
- 0–2 existing tags from the vault (do not create new tag names unless none fit)
- type if the stored type looks wrong (NOTE, ARTICLE, TASK, WISHLIST, TRADE)

Output a table. Do not write JSON until I say "apply". Never hard-delete. Never add embeddings or aiSummary.
```

## Recall / search

```
You are using the InFlow second-brain skill. I am attaching inflow-db.json.

Question: {{what am I looking for?}}

Search titles, content, tags, urls, and sourceTitle. Return the matching active entries (id, title, workspace name, type, why it matched). If nothing matches, say so — do not guess from general knowledge.

Related: if relatedEntryIds exist on a hit, list those titles too.
```

## Capture into JSON

```
You are using the InFlow second-brain skill. I may attach my current inflow-db.json so you can reuse existing workspace and tag ids.

Turn the notes below into proposed new entries for Inbox. Follow the vault schema:

- id: next unused integer among entries
- folderId: the Inbox folder id from the file (systemKey "inbox")
- type / typeId: NOTE, ARTICLE, TASK, or WISHLIST as appropriate
- timestamp: now in epoch millis
- deletedAt: null
- Do not set aiSummary, aiEntities, embeddingId, or lastAiRunAt
- Do not invent workspaces or tags that are not in the file unless I explicitly want new ones

Notes:
{{paste the dump}}

Return only the new entry objects as JSON in a fenced block, plus a one-line warning that I must merge them myself — you are not writing to Drive.
```

## Find related notes

```
You are using the InFlow second-brain skill. I am attaching inflow-db.json.

Focus entry id or title: {{id or title}}

Find other active entries that belong next to it (same tags, overlapping content, existing relatedEntryIds, same workspace). Propose relatedEntryIds to add. Do not merge entries. Do not copy content between them.

If the focus entry is missing, stop.
```

## Schema-safe patch

```
You are using the InFlow second-brain skill. I am attaching inflow-db.json.

Apply only these edits: {{describe the edits}}

Rules:
- Preserve schemaVersion. Do not bump it.
- Preserve unknown keys on objects you touch.
- Soft-delete with deletedAt (epoch millis), never remove rows or Drive attachment ids.
- Do not add vector embeddings to this file.
- Dual-write type and typeId; tabId and viewIds if you change view membership.
- Return a unified diff or a list of JSON Pointer operations, not a rewritten 10k-line file.
- If an edit would be lossy or schema-illegal, refuse that part and say why.
```
