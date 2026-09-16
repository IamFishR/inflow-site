import type { Metadata } from "next";
import Link from "next/link";
import { Code, DocPage, DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Organize",
  description:
    "Workspaces, views, tags, and entry types in InFlow. One entry, many surfaces. Inbox stays the system dump.",
};

export default function OrganizeGuidePage() {
  return (
    <DocPage
      slug="organize"
      title="Organize"
      lead="File when you are ready. Workspaces are life areas. Views are how you look. Types are starters, not cages. One entry — never duplicate piles of the same idea."
    >
      <DocSection title="Inbox triage">
        <p>
          Short sessions. Move items into workspaces. Add a tag if{" "}
          <Link href="/docs/search" className="text-zinc-200 hover:underline">
            search
          </Link>{" "}
          will need it. Leave the rest. Inbox is a system folder (
          <Code>systemKey = inbox</Code>) and always sorts first.
        </p>
      </DocSection>

      <DocSection title="Workspaces">
        <p>
          You name them. Rename, reorder, duplicate structure. First launch can
          start blank (Inbox only) or from a personal starter:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Browser tabs — parked URLs</li>
          <li>Posts — social saves</li>
          <li>Reading — longer articles</li>
          <li>Watch later — videos</li>
          <li>Notes — thoughts and markdown</li>
          <li>Lists — shopping, packing, wishlists</li>
        </ul>
        <p>
          Starter examples are marked so you can trash them from Profile. They
          are starting points, not a required system.
        </p>
      </DocSection>

      <DocSection title="Views">
        <p>
          A view presents entries without copying them.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-zinc-200">Manual</strong> —
            you pick membership
          </li>
          <li>
            <strong className="font-medium text-zinc-200">Rule</strong> —
            filters on type, tags, status
          </li>
        </ul>
        <p>
          Layout is list or grid. Sort by created time, title, due date, or
          priority. Removing a membership does not delete the entry.
        </p>
      </DocSection>

      <DocSection title="Types">
        <p>
          App-defined starters: Note, Article, Task, Wishlist, Trade plan.
          Capabilities (checklist, reading progress, reminder, due date, URL
          preview, media, relationships) are what the type turns on — not
          separate databases.
        </p>
        <p>
          Trade plan is a structured options journal when that is your craft.
          Skip it if it is not. Tasks and wishlists share checklist items.
        </p>
      </DocSection>

      <DocSection title="Tags, related, reminders">
        <p>
          Tags may be global or workspace-scoped. Related entries are a search
          picker stored as <Code>relatedEntryIds</Code>. Reminders: off, once,
          daily, weekly, monthly — device notifications, snooze, reboot
          reschedule. Due date on a task is independent of the reminder.
        </p>
      </DocSection>

      <DocSection title="What organize is not">
        <p>
          Not a required taxonomy before you are allowed to save. Not folders
          that copy the note. Not a team workspace. If you want an AI to
          suggest filing, use the{" "}
          <Link href="/docs/skills" className="text-zinc-200 hover:underline">
            skill pack
          </Link>{" "}
          on a copy of <Code>inflow-db.json</Code> — then apply the moves
          yourself.
        </p>
      </DocSection>
    </DocPage>
  );
}
