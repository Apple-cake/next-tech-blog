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
// 将来増えたらここにimport追加

export const articles: Article[] = [
  nextjsArchitecture,
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
