import type { Metadata } from "next";
import { LocationView } from "@/components/location/LocationView";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Location & Hours",
  description: `Visit ${siteConfig.fullName} at ${siteConfig.address.full}. See our hours, directions, and nearby landmarks.`,
};

export default function LocationPage() {
  return <LocationView />;
}
