import type { Metadata } from "next";
import { BookNowButton } from "@/components/layout/BookNowButton";
import { TintPreview } from "@/components/tint-tool/TintPreview";

export const metadata: Metadata = {
  title: "Tint Preview",
  description: "The original kalvotek.com tint visualizer, choose a car color and glass tint to preview.",
};

export default function TintPage() {
  return (
    <div className="container-page py-10 md:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Tint Preview</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Choose tinting options</h1>
        <p className="mt-4 text-muted">
          The original kalvotek.com tint preview tool, carried over as-is: pick a car color, then a
          side and rear glass tint to see them layered on the photo.
        </p>
      </div>

      <div className="mt-10">
        <TintPreview />
      </div>

      <div className="mt-12 max-w-3xl rounded-2xl border border-accent/30 bg-accent-soft p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="font-semibold text-foreground">Like what you see?</h2>
          <p className="mt-1 text-sm text-muted">Book your install and we&apos;ll match this exact shade.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <BookNowButton />
        </div>
      </div>
    </div>
  );
}
