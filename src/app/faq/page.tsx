import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { PLAY_TESTING_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "InFlow FAQ — local-first Android vault, optional Drive, inflow-db.json, no hosted AI, skill pack, open testing, and where your data lives.",
};

const faqs: { id: string; q: string; a: ReactNode }[] = [
  {
    id: "local",
    q: "Is InFlow local-first? Do I need an account?",
    a: (
      <>
        <p>
          Local-first. There is no InFlow account. Continue without Drive on
          first launch and the vault lives on this device. Google sign-in is
          only for optional Drive backup — it is not an InFlow login.
        </p>
      </>
    ),
  },
  {
    id: "data",
    q: "Where does my data live?",
    a: (
      <>
        <p>
          On the device: <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">inflow-vault-cache.json</code>{" "}
          and local media. If you connect Drive, a copy goes to{" "}
          <em>your</em> Google account under{" "}
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            InFlow/inflow-db.json
          </code>{" "}
          and{" "}
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            InFlow/attachments/
          </code>
          . The developer does not host a copy.{" "}
          <Link href="/privacy" className="text-zinc-200 hover:underline">
            Privacy policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "drive",
    q: "What does Google Drive access?",
    a: (
      <>
        <p>
          Scope{" "}
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            drive.file
          </code>{" "}
          — only files InFlow creates. It cannot browse the rest of your Drive.
          A vault you uploaded with another app identity will not show up in
          discovery; restore a backup ZIP instead.{" "}
          <Link href="/docs/drive" className="text-zinc-200 hover:underline">
            Drive guide
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "ai",
    q: "Does InFlow include AI that knows my life?",
    a: (
      <>
        <p>
          No. There is no in-app chatbot and no hosted model. The{" "}
          <Link href="/skills" className="text-zinc-200 hover:underline">
            skill pack
          </Link>{" "}
          is prompts and a <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">SKILL.md</code> you
          run in the AI tool you already use, with a copy of{" "}
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            inflow-db.json
          </code>{" "}
          you attach. Reserved schema fields for a future partner layer stay
          empty. Do not store vectors in the vault JSON.
        </p>
      </>
    ),
  },
  {
    id: "json",
    q: "What is inflow-db.json?",
    a: (
      <>
        <p>
          The vault document: workspaces, views, entries, tags, types. Media
          bytes are not inside it — only metadata and Drive file ids. You can
          copy it from Drive or from a{" "}
          <Link href="/docs/backup" className="text-zinc-200 hover:underline">
            backup ZIP
          </Link>
          . That is the file the skill pack reads.
        </p>
      </>
    ),
  },
  {
    id: "play",
    q: "Where do I get the Android app?",
    a: (
      <>
        <p>
          Package <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">com.inflow.vault</code>. Open
          testing opt-in:{" "}
          <a
            href={PLAY_TESTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 hover:underline"
          >
            play.google.com/apps/testing/com.inflow.vault
          </a>
          . That track has been in Play review; it is not a production store
          listing yet. This site does not ship an APK.
        </p>
      </>
    ),
  },
  {
    id: "cloud",
    q: "Is there a cloud, team plan, or paid tier?",
    a: (
      <>
        <p>
          No InFlow cloud workspace, no seats, no billing page. Drive is your
          Google account. The skill pack is free files on this site.
        </p>
      </>
    ),
  },
  {
    id: "telemetry",
    q: "Do you collect telemetry or analytics?",
    a: (
      <>
        <p>
          The Android app does not include advertising, analytics, or crash
          SDKs. This marketing site is static. If a network request happens in
          the app, it is Drive, a link-preview fetch you triggered by saving a
          URL, or a site you opened.
        </p>
      </>
    ),
  },
  {
    id: "offline",
    q: "Does it work offline?",
    a: (
      <>
        <p>
          Yes. The local cache opens immediately. Drive reconnects in the
          background when you have a network. Link previews and Drive upload
          wait until you are online. Reminders fire on the device.
        </p>
      </>
    ),
  },
  {
    id: "delete",
    q: "How do I delete my data?",
    a: (
      <>
        <p>
          In the app: Trash (soft delete). On the device: uninstall or clear
          app storage. On Drive: delete the <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">InFlow</code> folder
          and revoke InFlow under Google Account → Security → Third-party
          access. The developer holds no copy. Email{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-zinc-200 hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          if you need the steps walked through.{" "}
          <Link href="/privacy" className="text-zinc-200 hover:underline">
            Privacy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "vs",
    q: "How is this different from Notion, Apple Notes, or a chatbot?",
    a: (
      <>
        <p>
          Those tools either own the data shape in their cloud, or they are a
          chat that does not keep a structured vault you can export as one
          JSON file. InFlow is the capture surface and the file. An AI skill
          is something you point at that file — optional, swap-able, not the
          product core.
        </p>
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-16 sm:pt-24">
      <p className="mb-4 text-sm font-medium tracking-wide text-[#2EE6D6]">
        FAQ
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Questions
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
        Short answers for a local-first Android vault. If something still
        looks wrong,{" "}
        <Link href="/support" className="text-zinc-200 hover:underline">
          support
        </Link>{" "}
        is email — not a ticket portal.
      </p>

      <ul className="mt-14 space-y-12 border-t border-zinc-800/80 pt-14">
        {faqs.map((item) => (
          <li key={item.id} id={item.id} className="scroll-mt-24 space-y-3">
            <h2 className="text-base font-medium text-zinc-100">{item.q}</h2>
            <div className="space-y-3 text-sm leading-relaxed text-zinc-400">
              {item.a}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-16 text-sm text-zinc-500">
        Still stuck? Email{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="text-[#2EE6D6] hover:underline"
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </p>

      <div className="mt-16">
        <Cta secondary={{ href: "/docs", label: "Read the guides" }} />
      </div>
    </article>
  );
}
