"use client";

import { ExternalButton } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site-config";

export function BookNowButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <ExternalButton href={siteConfig.reservationUrl} className={className}>
      {t.bookNow}
    </ExternalButton>
  );
}
