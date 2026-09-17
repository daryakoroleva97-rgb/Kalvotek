"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BookNowButton } from "@/components/layout/BookNowButton";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/layout/Logo";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/tint", label: t.nav.tint },
    { href: "/process", label: t.nav.process },
    { href: "/faq", label: t.nav.faq },
    { href: "/location", label: t.nav.location },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-surface-2 text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <BookNowButton />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-surface-2 text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <BookNowButton className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
