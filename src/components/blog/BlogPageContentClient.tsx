'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import { Text, Heading } from "@once-ui-system/core";
import { translations } from "@/i18n/config";

interface BlogPageContentClientProps {
  post: any;
  showRecentPosts?: boolean;
  showOnThisPage?: boolean;
}

export function BlogPageContentClient({ post, showRecentPosts, showOnThisPage }: BlogPageContentClientProps) {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  if (showRecentPosts) {
    return (
      <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
        {t.recentPosts}
      </Heading>
    );
  }

  if (showOnThisPage) {
    return <Text>{t.onThisPage}</Text>;
  }

  return <Text variant="label-strong-m">{t.blog}</Text>;
}
