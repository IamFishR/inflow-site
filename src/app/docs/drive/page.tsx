import type { Metadata } from "next";
import Link from "next/link";
import { Code, DocPage, DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Drive & the vault",
  description:
    "InFlow is local-first. Optional Google Drive backup uses drive.file scope and writes InFlow/inflow-db.json in your account — not an InFlow server.",
};

export default function DriveGuidePage() {
  return (
    <DocPage
      slug="drive"
      title="Drive & the vault"
      lead="The vault always exists on this device. Google Drive is optional backup and multi-device sync for files InFlow creates in your account."
    >
      <DocSection title="Two layers">
        <pre className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-300">
{`This device (always)
├── files/inflow-vault-cache.json
└── files/media-local/   (before / without Drive)

Google Drive (optional)
└── InFlow/
    ├── inflow-db.json
    └── attachments/`}
        </pre>
        <p>
          Continue without Drive seeds a local vault immediately. Capture
          still works. Pending media waits on the device until Drive is
          available.
        </p>
      </DocSection>

      <DocSection title="What inflow-db.json is">
        <p>
          A JSON document of your vault: user profile fields, workspaces
          (folders), views, entries, tags, entry types, custom fields. Media
          bytes are not in this file — only metadata and Drive file ids.
          Schema version is migrated in the app. Current documented shape is
          in the{" "}
          <Link href="/skills" className="text-zinc-200 hover:underline">
            skill pack schema
          </Link>
          .
        </p>
      </DocSection>

      <DocSection title="OAuth scope">
        <p>
          InFlow requests{" "}
          <Code>https://www.googleapis.com/auth/drive.file</Code> — only files
          it creates. It cannot list a vault you uploaded by hand or that
          another app identity created. If discovery finds nothing readable,
          restore a backup ZIP or create a new Drive vault.
        </p>
      </DocSection>

      <DocSection title="Connect and conflicts">
        <p>
          After Google authorization, the app lists accessible{" "}
          <Code>InFlow/inflow-db.json</Code> files before creating anything. A
          new Drive vault is created only after you confirm. One valid vault
          is offered as Continue with Drive vault; several are listed as
          choices. Blank or malformed files never replace the local cache.
        </p>
        <p>
          If this device and Drive both changed since last sync, you get a
          conflict sheet: keep device or keep Drive. No silent overwrite.
        </p>
      </DocSection>

      <DocSection title="What Drive is not">
        <p>
          Not an InFlow-hosted database. Not a team Drive we operate. Files in
          Drive are covered by{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 hover:underline"
          >
            Google&apos;s privacy policy
          </a>{" "}
          and your Google Account settings. Disconnecting does not delete the
          folder — you delete <Code>InFlow/</Code> in Drive and revoke access
          under Google Account → Security → Third-party access. See{" "}
          <Link href="/privacy" className="text-zinc-200 hover:underline">
            privacy
          </Link>{" "}
          and{" "}
          <Link href="/docs/backup" className="text-zinc-200 hover:underline">
            backup
          </Link>
          .
        </p>
      </DocSection>
    </DocPage>
  );
}
