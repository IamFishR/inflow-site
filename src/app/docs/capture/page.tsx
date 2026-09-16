import type { Metadata } from "next";
import Link from "next/link";
import { Code, DocPage, DocSection } from "@/components/DocPage";
import { Steps } from "@/components/Steps";

export const metadata: Metadata = {
  title: "Capture",
  description:
    "How to capture notes, links, photos, voice, and files into InFlow. Everything lands in Inbox. Local-first Android second brain.",
};

export default function CaptureGuidePage() {
  return (
    <DocPage
      slug="capture"
      title="Capture"
      lead="Open Home and dump the thought. Paste, type, share, shoot, or speak. Save. It is in Inbox. You can file it later."
    >
      <DocSection title="How to capture">
        <Steps
          items={[
            "Open InFlow. Home is the capture surface — you do not need a workspace first.",
            "Paste a link, type a note, or attach photo, video, voice, or files on the same draft.",
            "Add a caption or pick a workspace if you already know where it belongs. Otherwise leave it.",
            "Send. One entry, all attachments. It is in the vault on this device.",
          ]}
        />
      </DocSection>

      <DocSection title="What can enter">
        <ul className="list-disc space-y-2 pl-5">
          <li>Thoughts and markdown</li>
          <li>Links — paste, share, or a URL-heavy note</li>
          <li>Tasks and wishlists (checklist points, due dates, reminders)</li>
          <li>Photo, video, voice from camera, library, or in-app record</li>
          <li>Files from the system picker</li>
          <li>Share sheet from other Android apps</li>
        </ul>
      </DocSection>

      <DocSection title="Inbox is the dump">
        <p>
          New captures land in the system Inbox unless you picked another
          workspace. Inbox is not a backlog you failed — it is the designed
          holding space.{" "}
          <Link href="/docs/organize" className="text-zinc-200 hover:underline">
            Organize
          </Link>{" "}
          when you have a minute.
        </p>
      </DocSection>

      <DocSection title="Links become clips">
        <p>
          Bare URLs are treated as articles/clips. When the device is online,
          InFlow may fetch public Open Graph / Twitter title, description, site
          name, and image URL from that page. The request is a normal HTTPS GET
          from the device to that website. Preview images stay as remote URLs;
          they are not copied into Drive.
        </p>
      </DocSection>

      <DocSection title="Media">
        <p>
          Send saves media under app-private storage first (
          <Code>files/media-local/</Code>
          ). If Drive is connected, InFlow uploads to{" "}
          <Code>InFlow/attachments/</Code> and keeps a local cache. Pending
          items show as on this device, waiting to back up. Soft-delete keeps
          media so restore still has the files.
        </p>
      </DocSection>

      <DocSection title="Honest limits">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            There is no live speech-to-text pipeline in this release. Voice is
            an audio attachment; <Code>transcript</Code> is optional typed notes.
          </li>
          <li>
            Link enrichment needs a network. Offline, the URL is stored; title
            fills later when you are online.
          </li>
          <li>
            Camera and microphone are optional hardware. The app still installs
            without them.
          </li>
        </ul>
      </DocSection>
    </DocPage>
  );
}
