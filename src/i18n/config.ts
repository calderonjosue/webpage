import en from './en.json';
import es from './es.json';

export const translations = { en, es };
export type Locale = keyof typeof translations;
export const locales: Locale[] = ['en', 'es'];
export const defaultLocale: Locale = 'en';
