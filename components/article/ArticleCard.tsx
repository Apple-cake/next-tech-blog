"use client";

/**
 * 記事カード
 */

import TagBadge from "./TagBadge";
import { useRouter } from "next/navigation";

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
  tags: Tag[];
};

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const router = useRouter();
  return (
    <article
      onClick={() => router.push(`/articles/${article.slug}`)}
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
        cursor-pointer
      "
    >
      {/* タグ */}
      <span className="mb-3 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <TagBadge key={tag.slug} label={tag.name} slug={tag.slug} />
        ))}
      </span>

      {/* タイトル */}
      <p className="mb-2 text-xl font-semibold text-zinc-900">
        {article.title}
      </p>

      {/* 説明 */}
      <p className="mb-4 text-sm text-zinc-600 line-clamp-3">
        {article.description}
      </p>

      {/* Meta info */}
      <div className="flex justify-between text-xs text-zinc-500">
        <span>{article.publishedAt}</span>
      </div>
    </article>
  );
}
