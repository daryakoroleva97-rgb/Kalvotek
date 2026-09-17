import type { Metadata } from "next";
import { ProcessView } from "@/components/process/ProcessView";

export const metadata: Metadata = {
  title: "The Tint Process",
  description:
    "What happens during a window tint install, how long it takes (about 2 hours), and the key nuances — curing time, legal limits, and warranty care.",
};

export default function ProcessPage() {
  return <ProcessView />;
}
