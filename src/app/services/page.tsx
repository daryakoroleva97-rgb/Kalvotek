import type { Metadata } from "next";
import { ServicesView } from "@/components/services/ServicesView";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Car window tinting, property window film, headlight restoration, paint protection film, chrome delete, and headlight tinting.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
