export function LogoMark({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M4.5 16.5c3.5-9 11.5-9 15 0"
        stroke="#2EE6D6"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M7 18c2.4-5.5 7.6-5.5 10 0"
        stroke="#2EE6D6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="9.5" r="1.85" fill="#2EE6D6" />
    </svg>
  );
}
