export const SKILL_FILES = [
  {
    href: "/skills/inflow-second-brain/SKILL.md",
    title: "SKILL.md",
    summary:
      "Drop into Claude, Cursor, Codex, or Grok skills. Teaches the agent how to read and patch inflow-db.json.",
  },
  {
    href: "/skills/inflow-second-brain/schema.md",
    title: "schema.md",
    summary:
      "Vault collections, entry fields, types, and what must never be invented or stored in the JSON.",
  },
  {
    href: "/skills/inflow-second-brain/prompts.md",
    title: "prompts.md",
    summary: "Copy-paste prompts for weekly review, triage, recall, and capture.",
  },
  {
    href: "/skills/inflow-second-brain.zip",
    title: "inflow-second-brain.zip",
    summary: "The three files above, zipped, for sharing or installing as a pack.",
  },
] as const;

export const PROMPTS: {
  id: string;
  title: string;
  use: string;
  text: string;
}[] = [
  {
    id: "weekly-review",
    title: "Weekly review",
    use: "Attach or paste inflow-db.json. Ask for a review, not a rewrite.",
    text: `You are using the InFlow second-brain skill. I am attaching my vault file inflow-db.json.

Do a weekly review. Do not invent entries, workspaces, or AI summaries.

1. Inbox: list active entries still in the system Inbox (folders with systemKey "inbox"). Title, type, and a one-line reason they still sit there.
2. Overdue / due soon: tasks with dueDate or reminderAt in the past 7 days or next 7 days.
3. Reading: articles with readingStatus UNREAD or READING.
4. Stale: entries with no recent timestamp that look abandoned (say why).
5. Suggested moves: workspace or tag suggestions only — do not patch the JSON unless I ask.

Ignore items with deletedAt set. Quote titles from the file. If a field is missing, say so.`,
  },
  {
    id: "triage",
    title: "Inbox triage",
    use: "When Inbox is a pile and you want filing suggestions.",
    text: `You are using the InFlow second-brain skill. I am attaching inflow-db.json.

Triage only the active Inbox entries (folder with systemKey "inbox", deletedAt empty).

For each entry, propose:
- keep in Inbox / move to an existing workspace (use folder names from the file) / trash
- 0–2 existing tags from the vault (do not create new tag names unless none fit)
- type if the stored type looks wrong (NOTE, ARTICLE, TASK, WISHLIST, TRADE)

Output a table. Do not write JSON until I say "apply". Never hard-delete. Never add embeddings or aiSummary.`,
  },
  {
    id: "recall",
    title: "Recall / search",
    use: "Ask a question against the vault you already have.",
    text: `You are using the InFlow second-brain skill. I am attaching inflow-db.json.

Question: {{what am I looking for?}}

Search titles, content, tags, urls, and sourceTitle. Return the matching active entries (id, title, workspace name, type, why it matched). If nothing matches, say so — do not guess from general knowledge.

Related: if relatedEntryIds exist on a hit, list those titles too.`,
  },
  {
    id: "capture",
    title: "Capture into JSON",
    use: "Turn a dump of thoughts into proposed Inbox entries. You paste them back only if you want.",
    text: `You are using the InFlow second-brain skill. I may attach my current inflow-db.json so you can reuse existing workspace and tag ids.

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

Return only the new entry objects as JSON in a fenced block, plus a one-line warning that I must merge them myself — you are not writing to Drive.`,
  },
  {
    id: "related",
    title: "Find related notes",
    use: "Pick an entry and ask what else in the vault belongs next to it.",
    text: `You are using the InFlow second-brain skill. I am attaching inflow-db.json.

Focus entry id or title: {{id or title}}

Find other active entries that belong next to it (same tags, overlapping content, existing relatedEntryIds, same workspace). Propose relatedEntryIds to add. Do not merge entries. Do not copy content between them.

If the focus entry is missing, stop.`,
  },
  {
    id: "patch",
    title: "Schema-safe patch",
    use: "When you already agreed on edits and want a patch, not a full rewrite.",
    text: `You are using the InFlow second-brain skill. I am attaching inflow-db.json.

Apply only these edits: {{describe the edits}}

Rules:
- Preserve schemaVersion. Do not bump it.
- Preserve unknown keys on objects you touch.
- Soft-delete with deletedAt (epoch millis), never remove rows or Drive attachment ids.
- Do not add vector embeddings to this file.
- Dual-write type and typeId; tabId and viewIds if you change view membership.
- Return a unified diff or a list of JSON Pointer operations, not a rewritten 10k-line file.
- If an edit would be lossy or schema-illegal, refuse that part and say why.`,
  },
];
