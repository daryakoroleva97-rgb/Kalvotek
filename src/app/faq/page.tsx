import type { Metadata } from "next";
import { FaqView } from "@/components/faq/FaqView";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common window tinting questions: legal shades, install time, curing, warranty, and booking.",
};

export default function FaqPage() {
  return <FaqView />;
}
