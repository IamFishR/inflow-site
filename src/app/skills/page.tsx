import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";
import { CopyButton } from "@/components/CopyButton";
import { Cta } from "@/components/Cta";
import { PROMPTS, SKILL_FILES } from "@/lib/skills";

export const metadata: Metadata = {
  title: "AI skill pack",
  description:
    "Public AI skills and prompts for working with InFlow’s inflow-db.json — weekly review, inbox triage, recall. Not a hosted model.",
};

export default function SkillsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-16 sm:pt-24">
      <p className="mb-4 text-sm font-medium tracking-wide text-sunset">
        Skill pack
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        AI skills for the second brain
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
        Shareable prompts and a{" "}
        <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
          SKILL.md
        </code>{" "}
        that teach an agent how to read{" "}
        <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
          inflow-db.json
        </code>
        . You attach the file. You pick the model. InFlow does not host one.
      </p>

      <section className="mt-14 space-y-6 border-t border-zinc-800/80 pt-14">
        <h2 className="text-base font-medium text-zinc-100">Download</h2>
        <ul className="space-y-6">
          {SKILL_FILES.map((file) => (
            <li key={file.href} className="space-y-1">
              <a
                href={file.href}
                download={file.href.endsWith(".zip") || file.href.endsWith(".md")}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-100 hover:text-white"
              >
                <ArrowDownToLine
                  className="h-3.5 w-3.5 text-sunset"
                  strokeWidth={1.75}
                  aria-hidden
                />
                {file.title}
              </a>
              <p className="text-sm leading-relaxed text-zinc-400">
                {file.summary}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-sm text-zinc-500">
          How to wire it into a chat:{" "}
          <Link href="/docs/skills" className="text-zinc-300 hover:underline">
            skill pack guide
          </Link>
          . Vault shape:{" "}
          <Link href="/docs/drive" className="text-zinc-300 hover:underline">
            Drive & the vault
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 space-y-3 border-t border-zinc-800/80 pt-14">
        <h2 className="text-base font-medium text-zinc-100">What this is not</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Not a magic brain. Not InFlow calling an API on your behalf. Not
          embeddings stored in the vault. If a prompt asks the model to invent
          memories, that is a bad prompt — these ones tell it to quote the
          file or stop.
        </p>
      </section>

      <section className="mt-14 space-y-12 border-t border-zinc-800/80 pt-14">
        <h2 className="text-base font-medium text-zinc-100">Prompts</h2>
        {PROMPTS.map((prompt) => (
          <div key={prompt.id} id={prompt.id} className="scroll-mt-24 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-medium text-zinc-100">{prompt.title}</h3>
              <CopyButton text={prompt.text} />
            </div>
            <p className="text-sm leading-relaxed text-zinc-500">{prompt.use}</p>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-300">
              {prompt.text}
            </pre>
          </div>
        ))}
      </section>

      <div className="mt-16">
        <Cta secondary={{ href: "/docs/skills", label: "Skill pack guide" }} />
      </div>
    </article>
  );
}
