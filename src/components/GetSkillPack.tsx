import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";

type Variant = "primary" | "compact";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-2 rounded-full bg-sunset px-5 py-2.5 text-sm font-medium text-jet transition-colors hover:bg-dawn",
  compact:
    "inline-flex items-center gap-1.5 rounded-full bg-sunset px-3.5 py-1.5 text-sm font-medium text-jet transition-colors hover:bg-dawn",
};

export function GetSkillPack({ variant = "primary" }: { variant?: Variant }) {
  return (
    <Link href="/skills" className={styles[variant]}>
      Skill pack
      {variant === "primary" ? (
        <ArrowDownToLine className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
      ) : null}
    </Link>
  );
}
