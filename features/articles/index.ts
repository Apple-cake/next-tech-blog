/**
 * 記事型定義
 */
export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  content: string;
};

import { nextjsArchitecture } from "./contents/nextjs-architecture";
import { typescriptDesign } from "./contents/typescript-design";
import { reactPerformance } from "./contents/react-performance";
// 記事が増えたらここにimport追加

export const articles: Article[] = [
  nextjsArchitecture,
  typescriptDesign,
  reactPerformance,
];

/**
 * slugから記事取得
 */
export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

/**
 * 全記事取得（SSG用）
 */
export function getAllArticles() {
  return articles;
}

/**
 * 前後記事を取得
 */
export function getAdjacentArticles(slug: string) {
  const index = articles.findIndex((a) => a.slug === slug);

  if (index === -1) return { prev: null, next: null };

  return {
    prev: articles[index + 1] ?? null, // 古い記事
    next: articles[index - 1] ?? null, // 新しい記事
  };
}
