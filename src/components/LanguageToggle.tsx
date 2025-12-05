"use client";

import { ToggleButton } from "@once-ui-system/core";
import { useLocale, useRouter } from "next-intl";
import { usePathname } from "next/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "es" : "en";
    router.push(pathname, { locale: newLocale });
  };

  return (
    <ToggleButton
      selected={locale === "es"}
      onClick={handleLanguageChange}
    >
      {locale === "en" ? "ES" : "EN"}
    </ToggleButton>
  );
}
