/**
 * 全記事一覧ページ
 */

import { notFound } from "next/navigation";
import { getAllArticles, getAllArticleCount } from "@/features/articles";
import ArticleArchive from "@/components/article/ArticleArchive";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ArticlesPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const PER_PAGE = 3;
  const currentPage = Number(page ?? "1");
  if (!Number.isInteger(currentPage) || currentPage < 1) notFound();
  const totalCount = getAllArticleCount();
  const totalPages = Math.max(
    1,
    Math.ceil(totalCount / PER_PAGE)
  );
  if (currentPage > totalPages) notFound();
  const articles = getAllArticles(currentPage, PER_PAGE);

  return (
    <main className="max-w-7xl mx-auto px-6 md:pl-10 md:pr-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <ArticleArchive
          title="すべての記事"
          articles={articles}
          totalPages={totalPages}
          currentPage={currentPage}
          basePath={`/articles`}
        />
      </div>
    </main>
  );
}