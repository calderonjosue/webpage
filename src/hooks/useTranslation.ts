'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/i18n/config';

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language as keyof typeof translations] || translations.en;
}
