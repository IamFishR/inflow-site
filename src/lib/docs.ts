export const GUIDES = [
  {
    slug: "capture",
    href: "/docs/capture",
    title: "Capture",
    summary:
      "Dump a thought, link, photo, voice note, or file into Inbox. Structure comes later.",
  },
  {
    slug: "organize",
    href: "/docs/organize",
    title: "Organize",
    summary:
      "Workspaces, views, tags, and types — one entry, many surfaces. Inbox stays the dump.",
  },
  {
    slug: "search",
    href: "/docs/search",
    title: "Search & recall",
    summary:
      "Find it again with search, filters, reading states, related entries, and saved views.",
  },
  {
    slug: "drive",
    href: "/docs/drive",
    title: "Drive & the vault",
    summary:
      "Local-first on this device. Optional Google Drive backup as InFlow/inflow-db.json.",
  },
  {
    slug: "backup",
    href: "/docs/backup",
    title: "Backup & restore",
    summary:
      "Export a ZIP of the vault plus attachments you have on this device. Import on another.",
  },
  {
    slug: "skills",
    href: "/docs/skills",
    title: "AI skill pack",
    summary:
      "Prompts and a SKILL.md for working with inflow-db.json in the AI tool you already use.",
  },
] as const;

export type GuideSlug = (typeof GUIDES)[number]["slug"];

export const DOC_NAV = [
  { slug: "index", href: "/docs", title: "Overview" },
  ...GUIDES.map(({ slug, href, title }) => ({ slug, href, title })),
] as const;
