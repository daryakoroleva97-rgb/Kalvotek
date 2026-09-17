type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 240 64"
      className={className}
      role="img"
      aria-label="Kalvotek"
    >
      <defs>
        <linearGradient id="kalvotek-swoosh" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b3272d" />
          <stop offset="55%" stopColor="#c9973f" />
          <stop offset="100%" stopColor="#e7c27a" />
        </linearGradient>
      </defs>
      <path
        d="M6 32c8-9 20-16 34-18 13-2 26 1 37 8 8 5 17 8 26 7 6-1 12-3 17-7"
        stroke="url(#kalvotek-swoosh)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="4"
        y="58"
        fontFamily="var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="0.5"
        fill="#f3f4f6"
      >
        KALVOTEK
      </text>
    </svg>
  );
}
