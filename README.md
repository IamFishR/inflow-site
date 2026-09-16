# InFlow site

Marketing site for **InFlow** — a local-first Android second brain. Vault on this device; optional Google Drive backup as `InFlow/inflow-db.json`. Public AI skill pack for that file (prompts + `SKILL.md`, not a hosted model).

Support: [thisisganesh353@gmail.com](mailto:thisisganesh353@gmail.com)

## Stack

Next.js 15 (App Router, static `output: "export"`), React 19, Tailwind 4.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build   # writes ./out
```

## Pages

| Path | |
| --- | --- |
| `/` | Homepage |
| `/features` | Capture, organize, search, vault, skill pack, privacy |
| `/docs` | Guides (capture, organize, search, Drive, backup, skills) |
| `/skills` | Downloadable skill pack + copy-paste prompts |
| `/faq` | FAQ |
| `/privacy` | Privacy policy |
| `/support` | Support |

Skill pack files: `public/skills/inflow-second-brain/`.

## Honest product notes

- No InFlow account or InFlow-hosted AI.
- Android open testing: https://play.google.com/apps/testing/com.inflow.vault (not a production Play listing until Play publishes one).
- Accent on this site is teal (`#2EE6D6`), distinct from QA Studio Pro.
