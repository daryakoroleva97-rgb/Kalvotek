import type { Metadata } from "next";
import { TintView } from "@/components/tint-tool/TintView";

export const metadata: Metadata = {
  title: "Tint Preview",
  description: "The original kalvotek.com tint visualizer, choose a car color and glass tint to preview.",
};

export default function TintPage() {
  return <TintView />;
}
