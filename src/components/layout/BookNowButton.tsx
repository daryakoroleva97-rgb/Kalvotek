import { ExternalButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function BookNowButton({ className = "" }: { className?: string }) {
  return (
    <ExternalButton href={siteConfig.reservationUrl} className={className}>
      Book Now
    </ExternalButton>
  );
}
