import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { BookNowButton } from "@/components/layout/BookNowButton";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import {
  faqs,
  nearbyLandmarks,
  services,
  siteConfig,
  tintShades,
  totalProcessDuration,
} from "@/lib/site-config";

const highlights = [
  {
    title: "6 precision shades",
    body: "From a subtle 50% to a limo-dark 5%, preview and choose exactly how dark you want to go.",
  },
  {
    title: `~2 hour install`,
    body: "A standard full-car install takes about two hours, start to finish, while you wait or run errands nearby.",
  },
  {
    title: "Lifetime warranty",
    body: "Every install is covered against bubbling, peeling, and color shift for as long as you own the car.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="border-b border-border bg-gradient-to-b from-surface to-background">
        <div className="container-page grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {siteConfig.address.city}&apos;s window tint specialists
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              A cooler, sharper, more private ride — in about 2 hours.
            </h1>
            <p className="mt-5 max-w-xl text-muted">
              {siteConfig.fullName} installs precision-cut window film in six shades, from a light
              factory-style 50% down to a limo-dark 5%. Preview every shade on a 3D car before you
              commit, then book your install online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/visualizer">Try the 3D Visualizer</ButtonLink>
              <BookNowButton />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-surface p-4">
              <PhotoPlaceholder
                label="3D tint visualizer preview"
                variant={1}
                className="h-64 w-full sm:h-80"
              />
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted">Pick a model, color & shade</span>
                <Link href="/visualizer" className="font-semibold text-accent hover:underline">
                  Open tool →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
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
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">What we do</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Beyond window tint</h2>
          </div>
          <ButtonLink href="/services" variant="secondary">
            View all services
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
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
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">Shade lineup</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Six shades, one visualizer
              </h2>
            </div>
            <ButtonLink href="/visualizer" variant="secondary">
              Compare shades
            </ButtonLink>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {tintShades.map((shade) => (
              <div
                key={shade.vlt}
                className="rounded-xl border border-border bg-surface-2 p-4 text-center"
              >
                <div
                  className="mx-auto h-10 w-16 rounded border border-white/10"
                  style={{ backgroundColor: shade.swatch }}
                />
                <p className="mt-3 text-lg font-bold">{shade.label}</p>
                <p className="text-xs text-muted">VLT</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              What to expect
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              The install process, start to finish
            </h2>
            <p className="mt-4 text-muted">{totalProcessDuration}</p>
            <p className="mt-3 text-muted">
              From wash and inspection to the final quality check under bright light, we walk you
              through every step — plus the curing rules that keep your warranty valid.
            </p>
            <ButtonLink href="/process" variant="secondary" className="mt-6">
              See the full process
            </ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <PhotoPlaceholder label="Precision film cutting" variant={2} className="h-40" />
            <PhotoPlaceholder label="Squeegee application" variant={3} className="h-40 mt-6" />
            <PhotoPlaceholder label="Finished side window" variant={4} className="h-40 -mt-6" />
            <PhotoPlaceholder label="Quality check under light" variant={5} className="h-40" />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">FAQ</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Common questions</h2>
            <p className="mt-4 text-muted">
              Legal limits, curing time, warranty details — get quick answers before you book.
            </p>
            <ButtonLink href="/faq" variant="secondary" className="mt-6">
              Read the full FAQ
            </ButtonLink>
          </div>
          <div className="space-y-3">
            {faqs.slice(0, 3).map((faq) => (
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
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Find us</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {siteConfig.address.full}
            </h2>
            <ul className="mt-4 space-y-2 text-muted">
              {nearbyLandmarks.map((landmark) => (
                <li key={landmark.name}>
                  <span className="font-semibold text-foreground">{landmark.name}</span> —{" "}
                  {landmark.distance}, {landmark.note}
                </li>
              ))}
            </ul>
            <ButtonLink href="/location" variant="secondary" className="mt-6">
              Hours & directions
            </ButtonLink>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent-soft p-8 text-center">
            <h3 className="text-xl font-bold">Ready to book?</h3>
            <p className="mt-2 text-sm text-muted">
              Reserve your slot online — most full-car installs take about 2 hours.
            </p>
            <BookNowButton className="mt-5" />
          </div>
        </div>
      </section>
    </div>
  );
}
