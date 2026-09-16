import Link from "next/link";
import { GetSkillPack } from "./GetSkillPack";

export function Cta({
  secondary = { href: "/docs", label: "Read the guides" },
}: {
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="border-t border-zinc-800/80 pt-14">
      <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
        InFlow is a local-first Android vault. The skill pack is prompts and a{" "}
        <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
          SKILL.md
        </code>{" "}
        — not a hosted model. No InFlow account.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <GetSkillPack />
        <Link
          href={secondary.href}
          className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
        >
          {secondary.label}
        </Link>
      </div>
    </section>
  );
}
