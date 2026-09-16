import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Brain,
  FolderOpen,
  HardDrive,
  Search,
  Shield,
  Sparkles,
} from "lucide-react";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Capture, workspaces and views, search, local-first Drive vault, and a shareable AI skill pack for inflow-db.json — InFlow is an Android second brain, not a cloud SaaS.",
};

const sections: {
  id: string;
  title: string;
  icon: LucideIcon;
  guide?: { href: string; label: string };
  body: ReactNode;
}[] = [
  {
    id: "capture",
    title: "Capture",
    icon: Brain,
    guide: { href: "/docs/capture", label: "Capture guide" },
    body: (
      <>
        <p>
          Home is for getting the thing in. Paste a link, type a thought, take
          a photo, record voice, or attach several files. Caption and workspace
          if you want; Send saves one note with all attachments.
        </p>
        <p>
          Android Share works too — text, links, or media from Chrome, YouTube,
          and other apps. Bare URLs become clips. When you are online, InFlow
          can fetch public title, site, and description for the page. Preview
          images stay as remote URLs; they are not copied into Drive.
        </p>
        <p>
          Everything lands in <strong className="font-medium text-zinc-200">Inbox</strong>{" "}
          by default. That is the system dump, not a failure state.
        </p>
      </>
    ),
  },
  {
    id: "organize",
    title: "Organize",
    icon: FolderOpen,
    guide: { href: "/docs/organize", label: "Organize guide" },
    body: (
      <>
        <p>
          Workspaces are life areas you name. Inbox stays first. A personal
          starter can seed Browser tabs, Posts, Reading, Watch later, Notes,
          and Lists — editable, disposable examples, never a cage. Blank
          (Inbox only) is first-class.
        </p>
        <p>
          Views present entries without copying them. Manual views are
          hand-picked sets. Rule views filter by type, tags, status. List or
          grid. One entry can appear in many views.
        </p>
        <p>
          Starter types: Note, Article, Task, Wishlist, Trade plan. Tasks and
          wishlists share a checklist canvas. Reading states: Unread, Reading,
          Done, Reference. Reminders fire on the device — once, daily, weekly,
          monthly — with snooze and reboot reschedule.
        </p>
      </>
    ),
  },
  {
    id: "search",
    title: "Search & recall",
    icon: Search,
    guide: { href: "/docs/search", label: "Search guide" },
    body: (
      <>
        <p>
          Search is in the app. Tags can be global or workspace-scoped.
          Related entries are a picker, not comma-separated ids. Soft-deleted
          items sit in Trash until you restore them.
        </p>
        <p>
          For an AI pass, you export or copy{" "}
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            inflow-db.json
          </code>{" "}
          and run the{" "}
          <Link href="/skills" className="text-zinc-200 hover:underline">
            skill pack
          </Link>{" "}
          in Claude, ChatGPT, Cursor, or Grok. InFlow does not call a model
          for you.
        </p>
      </>
    ),
  },
  {
    id: "vault",
    title: "Local vault + optional Drive",
    icon: HardDrive,
    guide: { href: "/docs/drive", label: "Drive guide" },
    body: (
      <>
        <p>
          Continue without Drive on first launch. The vault cache lives in
          app-private storage. Media waits on device until Drive is connected.
        </p>
        <p>
          If you connect Google Drive, InFlow uses{" "}
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            drive.file
          </code>{" "}
          — only files it creates — under{" "}
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            InFlow/inflow-db.json
          </code>{" "}
          and{" "}
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            InFlow/attachments/
          </code>
          . The developer does not host a copy.
        </p>
        <p>
          If this device and Drive both changed since last sync, the app asks
          which copy to keep. It does not silently overwrite.{" "}
          <Link href="/docs/backup" className="text-zinc-200 hover:underline">
            Backup & restore
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "skills",
    title: "AI skill pack",
    icon: Sparkles,
    guide: { href: "/skills", label: "Skill pack" },
    body: (
      <>
        <p>
          A public pack of prompts and a{" "}
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            SKILL.md
          </code>{" "}
          that teaches an agent how to read your vault: weekly review, inbox
          triage, recall, capture-into-JSON, related notes, schema-safe
          patches.
        </p>
        <p>
          You attach the file. You run the model. InFlow does not send vault
          contents to an AI service. Reserved fields (
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            aiSummary
          </code>
          , embeddings) stay empty in this release. Vectors must not be stored
          in the vault JSON.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy / yours",
    icon: Shield,
    guide: { href: "/privacy", label: "Privacy policy" },
    body: (
      <>
        <p>
          No InFlow account. No ads, analytics, or crash SDK. Android backup
          of app data is off. Camera, microphone, and notifications are
          requested only when a feature needs them.
        </p>
        <p>
          Data leaves the device when you connect Drive, when you save a URL
          and the app fetches public preview metadata, or when you export a
          backup you chose to save.{" "}
          <Link href="/faq#local" className="text-zinc-200 hover:underline">
            FAQ: local-first
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-16 sm:pt-24">
      <p className="mb-4 text-sm font-medium tracking-wide text-[#2EE6D6]">
        Android app
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Features
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
        A private vault for personal and professional life. Capture first.
        Organize later. Own the file.
      </p>

      <ul className="mt-14 space-y-16 border-t border-zinc-800/80 pt-14">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <li key={section.id} id={section.id} className="scroll-mt-24">
              <div className="space-y-4">
                <h2 className="flex items-center gap-2.5 text-base font-medium text-zinc-100">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-[#2EE6D6]">
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  {section.title}
                </h2>
                <div className="space-y-3 text-sm leading-relaxed text-zinc-400">
                  {section.body}
                </div>
                {section.guide ? (
                  <p>
                    <Link
                      href={section.guide.href}
                      className="text-sm text-zinc-300 hover:text-white hover:underline"
                    >
                      {section.guide.label} →
                    </Link>
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>

      <section className="mt-16 space-y-3 border-t border-zinc-800/80 pt-14">
        <h2 className="text-base font-medium text-zinc-100">What this is not</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Not a Notion/Evernote clone in the cloud. Not a hosted chatbot that
          indexes your life. Not a team wiki with seats. Not an InFlow
          account. Those are different products. InFlow is the Android app:
          capture, file, search, optional Drive, export — on files you
          control.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Honest limits: Drive discovery cannot see a vault another app
          uploaded (
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            drive.file
          </code>{" "}
          scope). There is no in-app AI chat in this release. Open testing on
          Play is not a production listing.{" "}
          <Link href="/faq" className="text-zinc-200 hover:underline">
            FAQ
          </Link>
          .
        </p>
      </section>

      <div className="mt-16">
        <Cta />
      </div>
    </article>
  );
}
