import Link from "next/link";

const links = [
  { href: "/features", label: "Features" },
  { href: "/docs", label: "Docs" },
  { href: "/skills", label: "Skills" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} InFlow</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-zinc-300">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
