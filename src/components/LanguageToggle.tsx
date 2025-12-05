"use client";

import { ToggleButton } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <ToggleButton
      selected={language === "es"}
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
    >
      {language === "en" ? "ES" : "EN"}
    </ToggleButton>
  );
}