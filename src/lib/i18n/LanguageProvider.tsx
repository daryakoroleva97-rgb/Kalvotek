"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, translations, type Locale } from "./translations";

const STORAGE_KEY = "kalvotek-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "fi" || stored === "en") {
        // Reading a persisted preference after mount (to avoid an SSR/client
        // hydration mismatch) is exactly what this effect is for.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(stored);
      }
    } catch {
      // localStorage unavailable (private mode, etc.) — stay on default.
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
