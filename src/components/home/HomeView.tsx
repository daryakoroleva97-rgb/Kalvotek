"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { BookNowButton } from "@/components/layout/BookNowButton";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig, tintShades } from "@/lib/site-config";

export function HomeView() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="border-b border-border bg-gradient-to-b from-surface to-background">
        <div className="container-page grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {t.home.kicker}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{t.home.title}</h1>
            <p className="mt-5 max-w-xl text-muted">{t.home.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/tint">{t.home.ctaTint}</ButtonLink>
              <BookNowButton />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-surface p-4">
              <PhotoPlaceholder label={t.home.photoLabel} variant={1} className="h-64 w-full sm:h-80" />
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted">{t.home.photoCaption}</span>
                <Link href="/tint" className="font-semibold text-accent hover:underline">
                  {t.home.openTool}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {t.home.highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{t.home.beyondKicker}</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{t.home.beyondTitle}</h2>
          </div>
          <ButtonLink href="/services" variant="secondary">
            {t.home.viewAllServices}
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service) => (
            <div key={service.slug} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-semibold text-foreground">{service.name}</h3>
              <p className="mt-2 text-sm text-muted">{service.shortDescription}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-page py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">{t.home.shadeKicker}</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{t.home.shadeTitle}</h2>
            </div>
            <ButtonLink href="/tint" variant="secondary">
              {t.home.previewShades}
            </ButtonLink>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {tintShades.map((shade) => (
              <div key={shade.vlt} className="rounded-xl border border-border bg-surface-2 p-4 text-center">
                <div
                  className="mx-auto h-10 w-16 rounded border border-white/10"
                  style={{ backgroundColor: shade.swatch }}
                />
                <p className="mt-3 text-lg font-bold">{shade.label}</p>
                <p className="text-xs text-muted">{t.home.vltLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{t.home.expectKicker}</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{t.home.expectTitle}</h2>
            <p className="mt-4 text-muted">{t.home.expectBody1}</p>
            <p className="mt-3 text-muted">{t.home.expectBody2}</p>
            <ButtonLink href="/process" variant="secondary" className="mt-6">
              {t.home.seeFullProcess}
            </ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <PhotoPlaceholder label={t.home.photoCaptions[0]} variant={2} className="h-40" />
            <PhotoPlaceholder label={t.home.photoCaptions[1]} variant={3} className="h-40 mt-6" />
            <PhotoPlaceholder label={t.home.photoCaptions[2]} variant={4} className="h-40 -mt-6" />
            <PhotoPlaceholder label={t.home.photoCaptions[3]} variant={5} className="h-40" />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{t.home.faqKicker}</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{t.home.faqTitle}</h2>
            <p className="mt-4 text-muted">{t.home.faqBody}</p>
            <ButtonLink href="/faq" variant="secondary" className="mt-6">
              {t.home.readFullFaq}
            </ButtonLink>
          </div>
          <div className="space-y-3">
            {t.faq.items.slice(0, 3).map((faq) => (
              <div key={faq.question} className="rounded-xl border border-border bg-surface-2 p-4">
                <p className="text-sm font-semibold text-foreground">{faq.question}</p>
                <p className="mt-1 text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{t.home.findUsKicker}</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{siteConfig.address.full}</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {t.location.landmarks.map((landmark) => (
                <li key={landmark.name}>
                  <span className="font-semibold text-foreground">{landmark.name}</span> —{" "}
                  {landmark.distance}, {landmark.note}
                </li>
              ))}
            </ul>
            <ButtonLink href="/location" variant="secondary" className="mt-6">
              {t.home.hoursDirections}
            </ButtonLink>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent-soft p-8 text-center">
            <h3 className="text-xl font-bold">{t.home.readyTitle}</h3>
            <p className="mt-2 text-sm text-muted">{t.home.readyBody}</p>
            <BookNowButton className="mt-5" />
          </div>
        </div>
      </section>
    </div>
  );
}
