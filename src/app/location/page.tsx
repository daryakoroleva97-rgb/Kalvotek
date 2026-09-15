import type { Metadata } from "next";
import { BookNowButton } from "@/components/layout/BookNowButton";
import { nearbyLandmarks, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Location & Hours",
  description: `Visit ${siteConfig.fullName} at ${siteConfig.address.full}. See our hours, directions, and nearby landmarks.`,
};

export default function LocationPage() {
  const mapSrc = `https://www.google.com/maps?q=${siteConfig.address.mapsQuery}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.address.mapsQuery}`;

  return (
    <div className="container-page py-10 md:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Visit Us</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Location &amp; opening hours</h1>
        <p className="mt-4 text-muted">
          Easy to find, easy to reach on foot for errands while we work on your car.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="relative h-72 w-full bg-gradient-to-br from-surface-2 to-background sm:h-96">
            <iframe
              title={`Map showing ${siteConfig.fullName} location`}
              src={mapSrc}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 p-5">
            <div>
              <p className="font-semibold text-foreground">{siteConfig.address.full}</p>
              <a href={siteConfig.phoneHref} className="text-sm text-muted hover:text-accent">
                {siteConfig.phone}
              </a>
            </div>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface-2 px-5 py-2.5 text-sm font-semibold hover:border-accent/60 hover:text-accent"
            >
              Get directions
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-semibold text-foreground">Opening hours</h2>
            <dl className="mt-4 space-y-2 text-sm">
              {siteConfig.hours.map((entry) => (
                <div key={entry.day} className="flex items-center justify-between">
                  <dt className="text-muted">{entry.day}</dt>
                  <dd className="font-medium text-foreground">{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-semibold text-foreground">Getting here</h2>
            <p className="mt-2 text-sm text-muted">
              We&apos;re easy to spot and even easier to kill time near while your car is in the bay:
            </p>
            <ul className="mt-4 space-y-4">
              {nearbyLandmarks.map((landmark) => (
                <li key={landmark.name} className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent-soft text-accent">
                    <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                      <path
                        d="M10 18s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {landmark.name} <span className="font-normal text-muted">· {landmark.distance}</span>
                    </p>
                    <p className="text-sm text-muted">{landmark.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-accent/30 bg-accent-soft p-6 text-center">
            <p className="font-semibold text-foreground">Ready to book?</p>
            <BookNowButton className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
