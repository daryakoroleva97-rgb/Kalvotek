"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/translations";

const options: { code: Locale; label: string }[] = [
  { code: "fi", label: "FI" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={`inline-flex items-center rounded-full border border-border bg-surface-2 p-0.5 ${className}`}>
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLocale(option.code)}
          aria-pressed={locale === option.code}
          aria-label={option.code === "fi" ? "Suomeksi" : "In English"}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            locale === option.code
              ? "bg-accent text-accent-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
