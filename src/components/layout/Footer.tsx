"use client";

import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: "/services", label: t.nav.services },
    { href: "/tint", label: t.nav.tint },
    { href: "/process", label: t.nav.process },
    { href: "/faq", label: t.nav.faq },
    { href: "/location", label: t.nav.location },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Logo className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted">{t.footer.tagline}</p>
          <div className="mt-6 space-y-1 text-sm text-muted">
            <p>{siteConfig.address.full}</p>
            <p>
              <a href={siteConfig.phoneHref} className="hover:text-accent">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </p>
            <p className="text-xs text-muted/80">
              {t.footer.businessId} {siteConfig.businessId}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t.footer.explore}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="container-page text-xs text-muted">
          {t.footer.rightsReserved(new Date().getFullYear(), siteConfig.fullName)}
        </p>
      </div>
    </footer>
  );
}
