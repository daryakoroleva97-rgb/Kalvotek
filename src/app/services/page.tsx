import type { Metadata } from "next";
import { BookNowButton } from "@/components/layout/BookNowButton";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Car window tinting, property window film, headlight restoration, paint protection film, chrome delete, and headlight tinting.",
};

export default function ServicesPage() {
  return (
    <div className="container-page py-10 md:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Services</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Everything we offer</h1>
        <p className="mt-4 text-muted">
          From window tint to full paint protection, here&apos;s the full lineup.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.slug} className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-semibold text-foreground">{service.name}</h2>
            <p className="mt-2 text-sm text-accent">{service.shortDescription}</p>
            <p className="mt-3 text-sm text-muted">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl rounded-2xl border border-accent/30 bg-accent-soft p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="font-semibold text-foreground">Ready to book?</h2>
          <p className="mt-1 text-sm text-muted">Reserve a slot online for any of the services above.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <BookNowButton />
        </div>
      </div>
    </div>
  );
}
