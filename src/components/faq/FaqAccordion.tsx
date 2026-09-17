"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function FaqAccordion() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
      {t.faq.items.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-foreground">{faq.question}</span>
              <svg
                aria-hidden
                viewBox="0 0 20 20"
                fill="none"
                className={`h-5 w-5 flex-none text-accent transition-transform ${open ? "rotate-45" : ""}`}
              >
                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            {open && <p className="px-5 pb-5 text-sm text-muted">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
