/**
 * 記事詳細ページ
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getArticleBySlug,
  getAllArticles,
  getAdjacentArticles,
  getRelatedArticles,
} from "@/features/articles";
import { extractHeadings } from "@/lib/toc";
import Link from "next/link";
import ArticleCard from "@/components/article/ArticleCard";
import ArticleContent from "@/components/article/ArticleContent";
import MobileTocBar from "@/components/article/MobileTocBar";
import ShareButtons from "@/components/article/ShareButtons";
import TagBadge from "@/components/article/TagBadge";
import BackToTopButton from "@/components/common/BackToTopButton";
import Breadcrumb from "@/components/common/Breadcrumb";
import Sidebar from "@/components/layout/Sidebar";

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
  const { slug } = await params;

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
  const { slug } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const articleUrl = `${baseUrl}/articles/${slug}`;

  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 3);

  if (!article) {
    return notFound();
  }

  const { prev, next } = getAdjacentArticles(slug);

  const toc = extractHeadings(article.content);

  // 見出しに id を注入
  const contentWithIds = article.content.replace(
    /<(h2|h3)(.*?)>(.*?)<\/\1>/g,
    (match, tag, attrs, inner) => {
      const text = inner.replace(/<[^>]+>/g, "");
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-ぁ-んァ-ン一-龥]/g, "");

      return `<${tag} id="${id}"${attrs}>${inner}</${tag}>`;
    }
  );

  return (
    <>
      {/* スマホ固定バー */}
      <MobileTocBar items={toc} />
      <article className="max-w-7xl mx-auto px-6 md:pl-10 md:pr-4 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          <section>
            <div className="p-6 card-base">
              <div className="flex-1 min-w-0">
                {/* パンくず */}
                <Breadcrumb
                  items={[
                    { label: "Usagi Blog", href: "/" },
                    { label: article.title },
                  ]}
                />
                {/* タグ一覧 */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <TagBadge
                      key={tag.slug}
                      label={tag.name}
                      slug={tag.slug}
                    />
                  ))}
                </div>
                {/* 記事ヘッダー */}
                <header className="mb-8">
                  <h1 className="text-3xl font-bold">{article.title}</h1>
                  <div className="text-sm text-zinc-500 mt-2 flex gap-4">
                    <span>{article.publishedAt}</span>
                  </div>
                </header>
                {/* 本文 */}
                <div
                  className="prose prose-zinc prose-pre:overflow-x-auto prose-pre:p-4 prose-pre:rounded-lg max-w-none"
                >
                  <ArticleContent content={contentWithIds} />
                </div>
                {/* シェアボタン */}
                <ShareButtons
                  title={article.title}
                  url={articleUrl}
                />
                {/* 前後記事ナビ */}
                <hr className="my-12 border-zinc-200" />

                <nav className="grid grid-cols-2 gap-8 text-sm items-start">

                  {/* 前の記事 */}
                  <div className="text-left">
                    {prev && (
                      <Link
                        href={`/articles/${prev.slug}`}
                        className="flex flex-col gap-1 text-zinc-500 hover:text-zinc-900 transition-colors"
                      >
                        <span className="text-xs font-normal">
                          過去の投稿
                        </span>

                        <span className="font-semibold leading-snug">
                          {prev.title}
                        </span>
                      </Link>
                    )}
                  </div>

                  {/* 次の記事 */}
                  <div className="text-right">
                    {next && (
                      <Link
                        href={`/articles/${next.slug}`}
                        className="flex flex-col gap-1 text-zinc-500 hover:text-zinc-900 transition-colors"
                      >
                        <span className="text-xs font-normal">
                          次の投稿
                        </span>

                        <span className="font-semibold leading-snug">
                          {next.title}
                        </span>
                      </Link>
                    )}
                  </div>
                </nav>
              </div>
            </div>
            {/* 関連記事 */}
            {relatedArticles.length > 0 && (
              <section className="mt-16">
                <p className="text-lg font-semibold mb-6">
                  関連記事
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedArticles.map((article) => (
                    <ArticleCard
                      key={article.slug}
                      article={article}
                    />
                  ))}
                </div>
              </section>
            )}
          </section>
          {/* サイドバー */}
          <Sidebar toc={toc} />
        </div>
        <BackToTopButton />
      </article>
    </>
  );
}
