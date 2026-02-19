/**
 * ArticleCard.tsx
 *
 * 記事カードコンポーネント
 * 記事1件分のUI表示を担当
 *
 * 使用例:
 * <ArticleCard article={article} />
 */

import TagBadge from "./TagBadge";
import Link from "next/link";

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
};

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="
        block
        rounded-xl
        border
        border-zinc-200
        bg-white
        p-6
        shadow-sm
        hover:shadow-md
        hover:-translate-y-1
        transition-all
        duration-200
      "
    >
      {/* Tags */}
      <div className="mb-3 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-semibold text-zinc-900">
        {article.title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm text-zinc-600 line-clamp-3">
        {article.description}
      </p>

      {/* Meta info */}
      <div className="flex justify-between text-xs text-zinc-500">
        <span>{article.publishedAt}</span>
        <span>{article.readingTime}</span>
      </div>
    </Link>
  );
}
