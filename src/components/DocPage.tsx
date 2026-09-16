import type { ReactNode } from "react";
import Link from "next/link";
import { DOC_NAV, type GuideSlug } from "@/lib/docs";

export function DocPage({
  slug,
  title,
  lead,
  children,
}: {
  slug: "index" | GuideSlug;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-16 sm:pt-24">
      <p className="mb-4 text-sm font-medium tracking-wide text-sunset">
        Docs
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
        {lead}
      </p>
      <DocsNav current={slug} />
      <div className="mt-14 space-y-12 border-t border-zinc-800/80 pt-14 text-sm leading-relaxed text-zinc-400">
        {children}
      </div>
      <GuidePager slug={slug} />
    </article>
  );
}

function DocsNav({ current }: { current: "index" | GuideSlug }) {
  return (
    <nav aria-label="Docs" className="mt-10 flex flex-wrap gap-x-4 gap-y-2">
      {DOC_NAV.map((item) => {
        const active = item.slug === current;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              active
                ? "text-sm font-medium text-sunset"
                : "text-sm text-zinc-500 transition-colors hover:text-zinc-200"
            }
            aria-current={active ? "page" : undefined}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}

function GuidePager({ slug }: { slug: "index" | GuideSlug }) {
  const i = DOC_NAV.findIndex((g) => g.slug === slug);
  const prev = i > 0 ? DOC_NAV[i - 1] : null;
  const next = i >= 0 && i < DOC_NAV.length - 1 ? DOC_NAV[i + 1] : null;

  return (
    <nav className="mt-16 flex items-center justify-between gap-4 border-t border-zinc-800/80 pt-8 text-sm">
      {prev ? (
        <Link
          href={prev.href}
          className="text-zinc-400 transition-colors hover:text-zinc-100"
        >
          ← {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="ml-auto text-zinc-400 transition-colors hover:text-zinc-100"
        >
          {next.title} →
        </Link>
      ) : null}
    </nav>
  );
}

export function DocSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-medium text-zinc-100">{title}</h2>
      {children}
    </section>
  );
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
      {children}
    </code>
  );
}
