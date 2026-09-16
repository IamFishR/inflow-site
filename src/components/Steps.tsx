import type { ReactNode } from "react";

export function Steps({ items }: { items: ReactNode[] }) {
  return (
    <ol className="space-y-4 text-sm leading-relaxed text-zinc-400">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="font-medium text-[#2EE6D6]">{i + 1}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
