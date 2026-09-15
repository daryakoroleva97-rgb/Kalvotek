import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { BookNowButton } from "@/components/layout/BookNowButton";
import { faqs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common window tinting questions: legal shades, install time, curing, warranty, and booking.",
};

export default function FaqPage() {
  return (
    <div className="container-page py-10 md:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">FAQ</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h1>
        <p className="mt-4 text-muted">
          Can&apos;t find what you&apos;re looking for? Give us a call — we&apos;re happy to walk through your
          specific vehicle and local tint laws.
        </p>
      </div>

      <div className="mt-10 max-w-3xl">
        <FaqAccordion faqs={faqs} />
      </div>

      <div className="mt-12 max-w-3xl rounded-2xl border border-accent/30 bg-accent-soft p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="font-semibold text-foreground">Still have questions?</h2>
          <p className="mt-1 text-sm text-muted">Book a slot and ask us in person, or preview shades first.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <BookNowButton />
        </div>
      </div>
    </div>
  );
}
