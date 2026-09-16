import type { Metadata } from "next";
import Link from "next/link";
import { DocPage, DocSection } from "@/components/DocPage";
import { Cta } from "@/components/Cta";
import { Steps } from "@/components/Steps";
import { GUIDES } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "How to use InFlow as a second brain — capture, organize, search, Drive-backed inflow-db.json, backup, and the AI skill pack. Local-first Android app.",
};

export default function DocsIndexPage() {
  return (
    <DocPage
      slug="index"
      title="Guides"
      lead="InFlow is a local-first Android vault. Capture first, file when ready, search when you need it back. Drive is optional. There is no InFlow cloud account."
    >
      <DocSection title="Quick start">
        <p>
          Open the app → dump the thought on Home → it lands in Inbox. Connect
          Drive later if you want the same vault on another device.
        </p>
        <Steps
          items={[
            "Install InFlow on Android. Continue without Drive to start immediately, or connect Google Drive for backup.",
            "On Home, paste a link, type a note, or attach photo / voice / files. Send.",
            "When you have a minute, move Inbox items into a workspace. Add a tag if search will need it.",
            "To use an AI tool against the vault, export or copy inflow-db.json and load the skill pack.",
          ]}
        />
      </DocSection>

      <DocSection title="How to think about it">
        <p>
          Prefer{" "}
          <strong className="font-medium text-zinc-200">capture over structure</strong>
          . Inbox is the system dump — not a mess you failed to prevent.
          Workspaces are life areas. Views are how you look, not copies of the
          entry. The file{" "}
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            inflow-db.json
          </code>{" "}
          is the vault; attachments live beside it.
        </p>
      </DocSection>

      <DocSection title="Guides">
        <ul className="space-y-6">
          {GUIDES.map((guide) => (
            <li key={guide.href}>
              <Link href={guide.href} className="group block space-y-1">
                <span className="text-sm font-medium text-zinc-100 group-hover:text-white">
                  {guide.title}
                </span>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {guide.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection title="What stays yours">
        <p>
          Notes, media, and profile fields you type stay on the device. If you
          connect Drive, they go to <em>your</em> Google account under{" "}
          <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
            InFlow/
          </code>
          . The developer does not run an InFlow server and does not receive
          the vault. The skill pack does not phone home — you attach the file
          to the model you already pay for.
        </p>
      </DocSection>

      <DocSection title="Not in this release">
        <p>
          No in-app AI chat, no hosted embeddings, no InFlow account, no team
          workspace, no production Play listing yet (open testing / review).
          Schema hooks for a future partner layer exist; they are empty on
          purpose.
        </p>
      </DocSection>

      <Cta secondary={{ href: "/features", label: "See features" }} />
    </DocPage>
  );
}
