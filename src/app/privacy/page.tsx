import type { Metadata } from "next";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "InFlow privacy policy — local-first Android vault, optional Google Drive, no InFlow server, no ads or analytics SDK.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-16 sm:pt-24">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-zinc-500">Last updated: August 22, 2026</p>
      <p className="mt-2 text-sm text-zinc-500">
        App package <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">com.inflow.vault</code>.
        Play / OAuth copy also lives at{" "}
        <a
          href="https://inflow-privacy.vercel.app"
          className="text-zinc-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          inflow-privacy.vercel.app
        </a>
        .
      </p>

      <div className="mt-12 space-y-12 text-sm leading-relaxed text-zinc-400">
        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">Overview</h2>
          <p>
            InFlow is a notes and capture app that stores your vault on this
            device. Google Drive backup is optional. If you connect Drive,
            files go into <em>your</em> Google account under{" "}
            <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
              InFlow/
            </code>
            , using the <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">drive.file</code> scope
            (only files InFlow creates). The developer does not run an InFlow
            server, does not sell data, and does not use ads or analytics SDKs.
          </p>
          <p>You can use the app without signing in (Continue without Drive).</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">This website</h2>
          <p>
            This marketing site is a static Next.js export. It does not create
            accounts, does not include an analytics SDK in the source we ship,
            and does not receive your vault. Downloadable skill-pack files are
            public documents, not a telemetry channel.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">
            Information the app handles
          </h2>
          <p>
            <strong className="font-medium text-zinc-200">Content you create</strong>{" "}
            — notes, links, tasks, lists, media. Without Drive this stays in
            app-private storage. With Drive it is uploaded to your{" "}
            <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
              InFlow/
            </code>{" "}
            folder.
          </p>
          <p>
            <strong className="font-medium text-zinc-200">Profile fields</strong>{" "}
            you enter (display name, email, avatar choice) are stored in the
            local vault JSON and included in{" "}
            <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
              inflow-db.json
            </code>{" "}
            if Drive is connected.
          </p>
          <p>
            <strong className="font-medium text-zinc-200">Google account details</strong>{" "}
            (only if you connect Drive) — display name, email, profile photo
            URL from Drive <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">about.get</code>, used to
            show who is connected. Not sent to an InFlow backend (there is none).
          </p>
          <p>
            <strong className="font-medium text-zinc-200">Link previews</strong>{" "}
            — if you save a web URL and the device is online, InFlow may GET
            that page for public Open Graph / Twitter metadata. Preview images
            stay as remote URLs; they are not copied into Drive.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">
            Device permissions
          </h2>
          <p>Requested only when a feature needs them:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Internet / network state — Drive sync, link previews, optional Wi-Fi-only upload</li>
            <li>Camera — photo or video for an entry</li>
            <li>Microphone — voice note (foreground service with a visible notification if the screen turns off)</li>
            <li>Notifications — reminders and the voice-recording notification</li>
            <li>Exact alarms / boot completed — fire and reschedule reminders you set</li>
          </ul>
          <p>
            InFlow does not request location, contacts, SMS, call log, all-files
            access, or the advertising ID. Photo and file attach uses the system
            picker or camera.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">
            What we do not collect
          </h2>
          <p>
            No advertising, analytics, crash-reporting, or third-party tracking
            SDKs. Android backup of app data is disabled (
            <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
              allowBackup=&quot;false&quot;
            </code>
            ). The developer does not receive your notes, media, or Google token
            on a developer-operated server.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">
            Where data is stored
          </h2>
          <pre className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-300">
{`This device
  files/inflow-vault-cache.json
  files/media-local/
  files/media-cache/

Your Google Drive (optional)
  InFlow/inflow-db.json
  InFlow/attachments/`}
          </pre>
          <p>
            Sync uses HTTPS to Google APIs. Files in Drive are covered by{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-zinc-200 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s privacy policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">
            Skill pack and AI tools
          </h2>
          <p>
            The public skill pack is documentation. If you attach{" "}
            <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
              inflow-db.json
            </code>{" "}
            to Claude, ChatGPT, or another model, that transfer is between you
            and that provider. InFlow does not perform it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">Sharing</h2>
          <p>
            InFlow does not sell personal information and does not share vault
            content with advertisers. Data leaves the device when you connect
            Drive, when you save a URL and the app fetches public preview
            metadata, or when you export a backup you chose to save.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">
            Retention and deletion
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              In the app: soft delete (Trash). Restoring keeps media. No
              permanent purge button in this version.
            </li>
            <li>
              On the device: uninstalling InFlow, or clearing the app&apos;s
              storage, removes the local vault cache and media cache.
            </li>
            <li>
              On Drive: InFlow does not delete your folder when you stop using
              the app. Delete <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">InFlow</code> in
              Drive and revoke access under Google Account → Security →
              Third-party access.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">Children</h2>
          <p>
            InFlow is not directed at children under 13. Do not use it to
            collect information from children. Play listing targets 18+.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">Contact</h2>
          <p>
            Privacy questions:{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-[#2EE6D6] hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
            . See also{" "}
            <Link href="/faq" className="text-zinc-200 hover:underline">
              FAQ
            </Link>{" "}
            and{" "}
            <Link href="/support" className="text-zinc-200 hover:underline">
              Support
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
