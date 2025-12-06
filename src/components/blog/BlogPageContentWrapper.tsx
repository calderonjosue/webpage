"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { BlogPageContent } from "./BlogPageContent";

interface BlogPageContentWrapperProps {
  post: any;
}

export function BlogPageContentWrapper({ post }: BlogPageContentWrapperProps) {
  const { language } = useLanguage();

  return <BlogPageContent post={post} key={language} />;
}
