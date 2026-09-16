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
import { GetSkillPack } from "@/components/GetSkillPack";
import { LogoMark } from "@/components/LogoMark";
import { Steps } from "@/components/Steps";
import { PLAY_TESTING_URL } from "@/lib/site";

const features: {
  title: string;
  href: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Capture",
    href: "/features#capture",
    body: "Paste a thought, share a link, attach photo, voice, or files from Home. Send lands it in Inbox. You did not fail at organization — you succeeded at capture.",
    icon: Brain,
  },
  {
    title: "Organize",
    href: "/features#organize",
    body: "Workspaces are life areas. Views are manual collections or rule filters. One entry, many surfaces — no duplicate piles of the same idea.",
    icon: FolderOpen,
  },
  {
    title: "Search & recall",
    href: "/features#search",
    body: "Search, tags, reading states, related entries. When you want an AI pass, you hand it inflow-db.json — the file is yours.",
    icon: Search,
  },
  {
    title: "Your vault",
    href: "/features#vault",
    body: "Always on this device. Optional Google Drive backup under InFlow/inflow-db.json, drive.file scope only. No InFlow server.",
    icon: HardDrive,
  },
  {
    title: "Skill pack",
    href: "/skills",
    body: "Shareable prompts and a SKILL.md for weekly review, triage, and recall against your vault JSON. Not a hosted model. Not magic.",
    icon: Sparkles,
  },
  {
    title: "Privacy",
    href: "/features#privacy",
    body: "No InFlow account. No ads or analytics SDK. Continue without Drive works. You export, you delete, you revoke.",
    icon: Shield,
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-20 pt-24 sm:pt-32">
        <LogoMark className="mb-8 h-16 w-16 rounded-2xl" size={64} />
        <p className="mb-4 text-sm font-medium tracking-wide text-sunset">
          Android app
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          InFlow
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
          A private second brain. Capture anything — notes, links, photos,
          voice, tasks — then file it when you are ready. The vault lives on
          your device. Google Drive is optional backup, not our cloud.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <GetSkillPack />
          <Link
            href="/docs"
            className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            Docs
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center rounded-full border border-transparent px-5 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Features →
          </Link>
        </div>
        <p className="mt-4 text-xs text-zinc-600">
          Android, local-first. Open testing on{" "}
          <a
            href={PLAY_TESTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 underline-offset-2 hover:text-zinc-200 hover:underline"
          >
            Google Play
          </a>{" "}
          while the listing is in review — not a production store page yet.
        </p>
      </section>

      <section className="border-t border-zinc-800/80 pb-24 pt-16">
        <h2 className="text-sm font-medium tracking-wide text-zinc-500">
          How to use
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300">
          Open Home → dump the thought → file when you have a minute. Search
          when you need it back. Optionally connect Drive so the same vault
          can follow you.
        </p>
        <div className="mt-8 max-w-xl">
          <Steps
            items={[
              "Capture on Home or share from another app. It lands in Inbox.",
              "Triage later: move into a workspace, add a tag, leave the rest.",
              "Find it with search, views, and reading states — or hand inflow-db.json to an AI skill you run yourself.",
            ]}
          />
        </div>
        <p className="mt-8">
          <Link
            href="/docs"
            className="text-sm text-zinc-300 hover:text-white hover:underline"
          >
            Full guides →
          </Link>
        </p>
      </section>

      <section className="border-t border-zinc-800/80 pb-24 pt-16">
        <h2 className="text-sm font-medium tracking-wide text-zinc-500">
          What it does
        </h2>
        <ul className="mt-10 space-y-10">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <li
                key={f.title}
                className="grid gap-3 sm:grid-cols-[168px_1fr] sm:items-start"
              >
                <Link
                  href={f.href}
                  className="flex items-center gap-2.5 text-sm font-medium text-zinc-100 hover:text-white"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-sunset">
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  {f.title}
                </Link>
                <p className="text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-t border-zinc-800/80 pb-28 pt-16">
        <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
          InFlow does not host your notes. There is no InFlow account and no
          InFlow cloud AI that “knows everything.” Schema fields for a future
          partner layer exist; this release does not fill them. The skill pack
          is files you give to the model you already use.{" "}
          <Link href="/faq" className="text-zinc-400 hover:text-zinc-200 hover:underline">
            FAQ
          </Link>
          {" · "}
          <Link href="/privacy" className="text-zinc-400 hover:text-zinc-200 hover:underline">
            Privacy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
