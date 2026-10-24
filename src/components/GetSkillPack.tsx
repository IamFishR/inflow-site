import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";

type Variant = "primary" | "compact" | "secondary";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex min-h-11 items-center gap-2 rounded-full bg-sunset px-5 py-2.5 text-sm font-medium text-jet transition-colors hover:bg-dawn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dawn",
  compact:
    "inline-flex min-h-11 items-center gap-1.5 rounded-full bg-sunset px-3.5 py-1.5 text-sm font-medium text-jet transition-colors hover:bg-dawn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dawn",
  secondary:
    "inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dawn",
};

export function GetSkillPack({ variant = "primary" }: { variant?: Variant }) {
  return (
    <Link href="/skills" className={styles[variant]}>
      Skill pack
      {variant !== "compact" ? (
        <ArrowDownToLine className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
      ) : null}
    </Link>
  );
}
