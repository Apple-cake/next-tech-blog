/**
 * 記事カード
 */

import TagBadge from "./TagBadge";
import Link from "next/link";

/**
 * タグ型
 */
export type Tag = {
  name: string; // 表示用
  slug: string; // URL用
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  tags: Tag[];
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
      {/* タグ */}
      <div className="mb-3 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <TagBadge key={tag.slug} label={tag.name} slug={tag.slug} />
        ))}
      </div>

      {/* タイトル */}
      <h3 className="mb-2 text-xl font-semibold text-zinc-900">
        {article.title}
      </h3>

      {/* 説明 */}
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
