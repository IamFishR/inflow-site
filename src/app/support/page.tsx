import type { Metadata } from "next";
import Link from "next/link";
import { CircleHelp, Mail } from "lucide-react";
import { PLAY_TESTING_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with InFlow — FAQ, Drive, skill pack, and email.",
};

const faqs = [
  {
    q: "The app asks for Google Drive. Do I have to?",
    a: "No. Continue without Drive. Capture and the local vault work on this device. Connect Drive later from Profile if you want backup.",
  },
  {
    q: "I connected Drive but it cannot find my vault.",
    a: "InFlow uses drive.file — only files it created. A JSON you uploaded by hand is invisible to that scope. Restore a backup ZIP, or create a new Drive vault and import.",
  },
  {
    q: "Does the skill pack upload my notes?",
    a: "No. The pack is files on this site. You attach inflow-db.json to the AI tool you choose. InFlow does not send that copy anywhere.",
  },
  {
    q: "Where is the Play listing?",
    a: "Open testing opt-in is play.google.com/apps/testing/com.inflow.vault. It is not a production store page until Play publishes one. This site does not host an APK.",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-28 pt-16 sm:pt-24">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Support
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
        Need help with InFlow? Start with the questions below, read the{" "}
        <Link href="/faq" className="text-zinc-200 hover:underline">
          full FAQ
        </Link>
        , or email us directly.
      </p>

      <section className="mt-14 space-y-8 border-t border-zinc-800/80 pt-14">
        <h2 className="flex items-center gap-2 text-sm font-medium tracking-wide text-zinc-500">
          <CircleHelp
            className="h-4 w-4 text-[#2EE6D6]"
            strokeWidth={1.75}
            aria-hidden
          />
          FAQ
        </h2>
        <ul className="space-y-10">
          {faqs.map((item) => (
            <li key={item.q} className="space-y-2">
              <h3 className="text-sm font-medium text-zinc-100">{item.q}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{item.a}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm text-zinc-500">
          Open testing:{" "}
          <a
            href={PLAY_TESTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:underline"
          >
            Google Play opt-in
          </a>
          .
        </p>
      </section>

      <section className="mt-14 space-y-3 border-t border-zinc-800/80 pt-14">
        <h2 className="flex items-center gap-2 text-sm font-medium tracking-wide text-zinc-500">
          <Mail
            className="h-4 w-4 text-[#2EE6D6]"
            strokeWidth={1.75}
            aria-hidden
          />
          Contact
        </h2>
        <p className="text-sm text-zinc-400">
          Email{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-[#2EE6D6] hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p className="text-sm text-zinc-500">
          Product questions:{" "}
          <Link href="/faq" className="text-zinc-300 hover:underline">
            FAQ
          </Link>
          . Privacy:{" "}
          <Link href="/privacy" className="text-zinc-300 hover:underline">
            privacy policy
          </Link>
          . Guides:{" "}
          <Link href="/docs" className="text-zinc-300 hover:underline">
            docs
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
