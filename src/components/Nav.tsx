"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GetSkillPack } from "./GetSkillPack";
import { LogoMark } from "./LogoMark";

const links = [
  { href: "/features", label: "Features" },
  { href: "/docs", label: "Docs" },
  { href: "/skills", label: "Skills" },
  { href: "/faq", label: "FAQ" },
];

function isActive(pathname: string, href: string) {
  if (href === "/docs") {
    return pathname === "/docs" || pathname.startsWith("/docs/");
  }
  return pathname === href;
}

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-800/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-zinc-100 hover:text-white"
          >
            <LogoMark />
            InFlow
          </Link>
          <div className="sm:hidden">
            <GetSkillPack variant="compact" />
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-sm text-zinc-100"
                    : "text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                }
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <span className="hidden sm:inline-flex">
            <GetSkillPack variant="compact" />
          </span>
        </nav>
      </div>
    </header>
  );
}
