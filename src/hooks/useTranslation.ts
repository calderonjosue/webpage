'use client';
import { useLocale } from 'next-intl';
import { translations, Locale } from '@/i18n/config';

export function useTranslation() {
  const locale = useLocale() as Locale;
  return translations[locale] || translations.en;
}
