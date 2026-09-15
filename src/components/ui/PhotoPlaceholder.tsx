type PhotoPlaceholderProps = {
  label: string;
  className?: string;
  variant?: 1 | 2 | 3 | 4 | 5;
};

const gradients: Record<number, string> = {
  1: "from-[#2a2f38] via-[#1a1d22] to-[#0e0f12]",
  2: "from-[#3a2f22] via-[#221c15] to-[#100e0a]",
  3: "from-[#22303a] via-[#171f26] to-[#0d1114]",
  4: "from-[#2f2a3a] via-[#1c1926] to-[#0f0d14]",
  5: "from-[#3a2a2a] via-[#221818] to-[#120e0e]",
};

export function PhotoPlaceholder({ label, className = "", variant = 1 }: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-end overflow-hidden rounded-xl border border-border bg-gradient-to-br ${gradients[variant]} ${className}`}
    >
      <svg
        aria-hidden
        className="pointer-events-none absolute right-3 top-3 h-8 w-8 text-white/10"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 7h2l1.5-2h9L18 7h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className="relative z-10 p-3 text-xs font-medium text-white/70">{label}</span>
    </div>
  );
}
