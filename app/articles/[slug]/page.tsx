/**
 * 記事詳細ページ
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getArticleBySlug,
  getAllArticles,
} from "../../../features/articles";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * 静的生成対象のパスを指定
 */
export async function generateStaticParams() {
  const articles = getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/**
 * 各記事ごとのメタデータ生成（SEO強化）
 */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params; // ← ★ ここ重要

  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "記事が見つかりません",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

/**
 * 記事ページ本体
 */
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params; // ← ★ ここ重要

  const article = getArticleBySlug(slug);

  if (!article) {
    return notFound();
  }

  return (
    <article className="prose prose-zinc px-6 py-6 mx-auto">
      {/* パンくず */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 text-sm text-zinc-500 flex items-center gap-2"
      >
        <Link
          href="/"
          className="hover:underline"
        >
          Usagi Blog
        </Link>

        <span>&gt;</span>

        <span className="text-zinc-700">
          {article.title}
        </span>
      </nav>
      {/* 記事ヘッダー */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{article.title}</h1>
        <div className="text-sm text-zinc-500 mt-2 flex gap-4">
          <span>{article.publishedAt}</span>
          <span>{article.readingTime}</span>
        </div>
      </header>
      {/* 本文 */}
      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}
