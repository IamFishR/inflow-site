# inflow-db.json schema (skill reference)

Documented from the InFlow Android vault. Schema version on disk is migrated by the app (examples seen: 11–13). **Do not bump `schemaVersion` in a patch.**

## Top level

```json
{
  "schemaVersion": 13,
  "updatedAt": 0,
  "user": {},
  "folders": [],
  "views": [],
  "tabs": [],
  "entries": [],
  "tags": [],
  "entryTypes": [],
  "customFields": []
}
```

`tabs` is a legacy dual-write of `views`. Prefer `views` as source of truth; if you add a view, also keep `tabs` in sync with a simplified row so older builds do not drop organization.

`updatedAt` is epoch millis. Set it to now if you emit a full file the user will import.

## Folders (workspaces)

| Field | Notes |
| --- | --- |
| `id` | integer |
| `name`, `description`, `iconName` | display |
| `isSystem` / `systemKey` | Inbox is `systemKey: "inbox"` and sorts first |
| `sortOrder` | user workspaces; Inbox ignores this |
| `allowedTypeIds` | null/empty = all types |
| `deletedAt` | epoch millis or null |

## Views

| Field | Notes |
| --- | --- |
| `id`, `folderId` | view belongs to a workspace |
| `mode` | `MANUAL` or `RULE` |
| `layout` | `LIST` or `GRID` |
| `filterGroupMode` | `ALL` (AND) or `ANY` (OR) |
| `filterRules` | `{ id, field, operator, value }` |
| `sortField` / `sortAscending` | `CREATED_AT`, `TITLE`, `DUE_DATE`, `PRIORITY` |
| `visibleFields` | card field keys; empty = app defaults |

Entry membership: `tabId` (primary/legacy) + `viewIds` (full list). One entry, many views — do not copy the entry.

## Entries

Common keys: `id`, `folderId`, `title`, `content`, `contentFormat` (`plain` \| `markdown`), `type`, `typeId`, `tags`, `timestamp`, `deletedAt`, `relatedEntryIds`, `viewIds`, `tabId`, `listItems`, `attachments`, `comments`, `priority`, `isFavorite`, `isPinned`.

Second-brain fields:

- `readingStatus`: `UNREAD` \| `READING` \| `DONE` \| `REFERENCE`
- `reminderAt`, `dueDate`
- `reminderMode`: `OFF` \| `ONCE` \| `DAILY` \| `WEEKLY` \| `MONTHLY`
- URL enrichment: `sourceTitle`, `sourceDescription`, `sourceSiteName`, `sourceImageUrl`, `enrichedAt`
- Media metadata (not bytes): `mediaType`, `mediaUri`, `mediaFileId`, `mediaMimeType`, `mediaDurationMs`
- `attachments[]`: `id`, `mediaType`, `fileName`, `fileSize`, `mediaUri`, `mediaFileId`, `mediaMimeType`, `mediaDurationMs`, `transcript`, `localPath`, `uploadPending`. First item is mirrored into the legacy single-media fields.

**Reserved, leave empty:** `aiSummary`, `aiEntities`, `embeddingId`, `lastAiRunAt`. Never put embedding vectors in this file.

Storage type keys: `NOTE`, `ARTICLE`, `TASK`, `WISHLIST`, `TRADE` (or `TYPE_{id}` for custom types).

## Tags

`folderId` null = global; otherwise workspace-scoped. Prefer existing names. Same display name: folder-scoped wins over global.

## Entry types & custom fields

Starter types: Note, Article, Task, Wishlist, Trade plan. Capabilities are app ids (`task_completion`, `checklist`, `reading_progress`, `reminder`, `due_date`, `url_preview`, `media`, `relationships`). Disabling a capability must not erase stored values.

Custom field kinds: `TEXT`, `NUMBER`, `DATE`, `CHECKBOX`, `SINGLE_CHOICE`, `MULTI_CHOICE`, `URL`, `RATING`. Values live on the entry as `customFieldValues`.

## Soft delete

Every vault entity may carry `deletedAt`. Null/missing = active. **Never hard-delete** JSON rows or Drive attachments in a skill patch.

## Attachments vs JSON

Photo / voice / video bytes are **not** in `inflow-db.json`. If the user only attached the JSON, you cannot watch the video. Say so.
