"use client";

import { BookNowButton } from "@/components/layout/BookNowButton";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ServicesView() {
  const { t } = useLanguage();

  return (
    <div className="container-page py-10 md:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">{t.services.kicker}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{t.services.title}</h1>
        <p className="mt-4 text-muted">{t.services.subtitle}</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {t.services.items.map((service) => (
          <div key={service.slug} className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-semibold text-foreground">{service.name}</h2>
            <p className="mt-2 text-sm text-accent">{service.shortDescription}</p>
            <p className="mt-3 text-sm text-muted">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl rounded-2xl border border-accent/30 bg-accent-soft p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="font-semibold text-foreground">{t.services.readyTitle}</h2>
          <p className="mt-1 text-sm text-muted">{t.services.readyBody}</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <BookNowButton />
        </div>
      </div>
    </div>
  );
}
