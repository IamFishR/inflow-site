import type { Metadata } from "next";
import Link from "next/link";
import { Code, DocPage, DocSection } from "@/components/DocPage";
import { Steps } from "@/components/Steps";

export const metadata: Metadata = {
  title: "Backup & restore",
  description:
    "Export and import an InFlow vault ZIP (inflow-db.json plus attachments on this device). Local-first — no InFlow cloud backup.",
};

export default function BackupGuidePage() {
  return (
    <DocPage
      slug="backup"
      title="Backup & restore"
      lead="A full backup is a ZIP you save: inflow-db.json plus the attachment files currently on this device. Import restores locally first. Drive sync is a separate choice."
    >
      <DocSection title="What is in the ZIP">
        <pre className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-300">
{`inflow-db.json
attachments/
  {mediaFileId or fileName}`}
        </pre>
        <p>
          Nested layouts such as <Code>InFlow/inflow-db.json</Code> are also
          accepted. A standalone JSON (no attachments) still imports vault
          data only.
        </p>
      </DocSection>

      <DocSection title="Export">
        <p>
          Profile → export writes the vault JSON plus every attachment that is
          available on the device (durable local path or media cache). Media
          that exists only on Drive and is not cached is omitted from that
          ZIP. If you need those files, open the entries so they cache, or
          copy them from Drive.
        </p>
      </DocSection>

      <DocSection title="Import">
        <Steps
          items={[
            "Pick the ZIP (or a standalone inflow-db.json).",
            "InFlow validates required collections (folders, views or legacy tabs, entries, tags) and migrates the schema.",
            "Nothing is written until you confirm. Import always saves locally first.",
            "Drive sync — new vault or existing — is a separate step. Matched attachments are re-uploaded so this app owns new file ids under drive.file.",
          ]}
        />
        <p>
          A failed Drive upload leaves the local restore recoverable.
        </p>
      </DocSection>

      <DocSection title="Trash is not backup">
        <p>
          Soft delete hides entries, workspaces, and views (
          <Code>deletedAt</Code>). Restore from Profile → Trash. There is no
          permanent purge button in this version. Uninstalling the app or
          clearing storage removes the local cache. Drive copies stay until
          you delete the folder.
        </p>
      </DocSection>

      <DocSection title="Using a backup with the skill pack">
        <p>
          You can attach <Code>inflow-db.json</Code> from a backup to an AI
          tool with the{" "}
          <Link href="/docs/skills" className="text-zinc-200 hover:underline">
            skill pack
          </Link>
          . That is a copy you chose to share with that model. Merge any
          proposed JSON back yourself — the skill does not write to Drive.
        </p>
      </DocSection>
    </DocPage>
  );
}
