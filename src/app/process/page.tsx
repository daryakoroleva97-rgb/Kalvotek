import type { Metadata } from "next";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { BookNowButton } from "@/components/layout/BookNowButton";
import { ButtonLink } from "@/components/ui/Button";
import { nuances, processSteps, totalProcessDuration } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The Tint Process",
  description:
    "What happens during a window tint install, how long it takes (about 2 hours), and the key nuances — curing time, legal limits, and warranty care.",
};

export default function ProcessPage() {
  return (
    <div className="container-page py-10 md:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">The Process</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          What actually happens during a tint install
        </h1>
        <p className="mt-4 text-muted">{totalProcessDuration}</p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <PhotoPlaceholder label="Vehicle wash & inspection" variant={1} className="h-36" />
        <PhotoPlaceholder label="Computer-plotted film cut" variant={2} className="h-36" />
        <PhotoPlaceholder label="Squeegee & heat shaping" variant={3} className="h-36" />
        <PhotoPlaceholder label="Final quality check" variant={4} className="h-36" />
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight">Step by step</h2>
        <ol className="mt-6 space-y-6">
          {processSteps.map((step, index) => (
            <li key={step.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
              <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                {index + 1}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <span className="text-xs font-medium text-accent">{step.duration}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Nuances worth knowing</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Tint looks finished the moment you drive off, but a few details make the difference between
          a clean, long-lasting install and one that fails early.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {nuances.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-accent/30 bg-accent-soft p-8 text-center">
        <h2 className="text-xl font-bold">Curious how a shade will look first?</h2>
        <p className="mt-2 text-sm text-muted">
          Try our 3D visualizer, then book your ~2 hour install online.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/visualizer" variant="secondary">
            Open visualizer
          </ButtonLink>
          <BookNowButton />
        </div>
      </div>
    </div>
  );
}
