"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newLang = language === "en" ? "es" : "en";
    console.log("Changing language from", language, "to", newLang);
    setLanguage(newLang);
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={(e) => e.preventDefault()}
      style={{
        padding: "8px 12px",
        border: "1px solid currentColor",
        borderRadius: "4px",
        background: "transparent",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
      }}
      type="button"
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  );
}
