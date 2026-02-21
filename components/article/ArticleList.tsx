/**
 * 最新記事一覧
 */

import ArticleCard from "./ArticleCard";
import { Article } from "@/lib/articles";

type Props = {
  articles: Article[];
  title?: string;
};

export default function ArticleList({ articles, title }: Props) {
  return (
    <section className="max-w-4xl mx-auto">

      {/* セクションタイトル */}
      <h2 className="text-2xl font-bold mb-8">
        {title}
      </h2>

      {/* 縦並び */}
      <div className="flex flex-col gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

    </section>
  );
}
