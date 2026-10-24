import { PLAY_STORE_URL } from "@/lib/site";

type Variant = "primary" | "compact";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex min-h-11 items-center gap-2 rounded-full bg-sunset px-5 py-2.5 text-sm font-medium text-jet transition-colors hover:bg-dawn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dawn",
  compact:
    "inline-flex min-h-11 items-center gap-1.5 rounded-full bg-sunset px-3.5 py-1.5 text-sm font-medium text-jet transition-colors hover:bg-dawn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dawn",
};

export function InstallCta({ variant = "primary" }: { variant?: Variant }) {
  const label =
    variant === "compact" ? "Install" : "Install on Google Play";

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles[variant]}
    >
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
