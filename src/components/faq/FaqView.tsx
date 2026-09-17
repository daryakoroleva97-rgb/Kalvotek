"use client";

import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { BookNowButton } from "@/components/layout/BookNowButton";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function FaqView() {
  const { t } = useLanguage();

  return (
    <div className="container-page py-10 md:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">{t.faq.kicker}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{t.faq.title}</h1>
        <p className="mt-4 text-muted">{t.faq.subtitle}</p>
      </div>

      <div className="mt-10 max-w-3xl">
        <FaqAccordion />
      </div>

      <div className="mt-12 max-w-3xl rounded-2xl border border-accent/30 bg-accent-soft p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="font-semibold text-foreground">{t.faq.stillTitle}</h2>
          <p className="mt-1 text-sm text-muted">{t.faq.stillBody}</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <BookNowButton />
        </div>
      </div>
    </div>
  );
}
