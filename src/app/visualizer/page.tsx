import type { Metadata } from "next";
import { VisualizerApp } from "@/components/visualizer/VisualizerApp";

export const metadata: Metadata = {
  title: "3D Tint Visualizer",
  description:
    "Preview window tint shades from 5% to 50% on a 3D car model. Pick a body style and paint color, then see how each tint looks before you book.",
};

export default function VisualizerPage() {
  return (
    <div className="container-page py-10 md:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">3D Visualizer</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          See your tint before it&apos;s on the glass
        </h1>
        <p className="mt-4 text-muted">
          Pick a body style close to yours, match your paint color, then try every shade we offer —
          5%, 10%, 15%, 25%, 35%, and 50% — to get a feel for how dark you want to go.
        </p>
      </div>

      <div className="mt-10">
        <VisualizerApp />
      </div>

      <p className="mt-6 max-w-2xl text-xs text-muted">
        This tool is a styling preview, not a photo-accurate render — actual film appearance can vary
        with glass curvature, factory tint, and lighting. Legal VLT limits vary by state/province; we&apos;ll
        confirm your options when you book.
      </p>
    </div>
  );
}
