/**
 * 全記事一覧ページ
 */

import { getAllArticles } from "@/features/articles";
import ArticleArchive from "@/components/article/ArticleArchive";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ArticlesPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Number(page ?? "1");
  const { articles, totalPages } = getAllArticles(currentPage, 2);

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