/**
 * 全記事一覧ページ
 */

import { getAllArticles } from "@/features/articles";
import ArticleArchive from "@/components/article/ArticleArchive";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="max-w-7xl mx-auto px-6 md:pl-10 md:pr-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <ArticleArchive
          title="すべての記事"
          articles={articles}
        />
      </div>
    </main>
  );
}