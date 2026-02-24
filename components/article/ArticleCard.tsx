"use client";

/**
 * 記事カード
 */

import Image from "next/image";
import { useRouter } from "next/navigation";
import TagBadge from "./TagBadge";

// タグ型
export type Tag = {
  name: string; // 表示用
  slug: string; // URL用
};

// 記事型
export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: Tag[];
  image?: string;
};

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const router = useRouter();
  const imageSrc = article.image ?? "/default-eyecatch.svg";
  return (
    <article
      onClick={() => router.push(`/articles/${article.slug}`)}
      className="
        card-base
        card-base-hover
        overflow-hidden
        p-4 md:p-5
      "
    >
      <div className="flex flex-col flex-row gap-4 md:gap-5">
        {/* 画像エリア */}
        <div
          className="
            relative
            h-20 md:h-30
            w-20 md:w-30
            aspect-square
            shrink-0
            overflow-hidden
            self-center
          "
        >
          <Image
            src={imageSrc}
            alt={article.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 160px"
            priority={false}
          />
        </div>

        {/* テキストエリア */}
        <div>
          {/* タグ */}
          <div className="mb-1 md:mb-2 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <TagBadge key={tag.slug} label={tag.name} slug={tag.slug} />
            ))}
          </div>

          {/* タイトル */}
          <div className="mb-1 md:mb-2 md:text-xl font-semibold text-zinc-900">
            {article.title}
          </div>

          {/* メタ */}
          <div className="text-xs text-zinc-500">
            {article.publishedAt}
          </div>
        </div>
      </div>
    </article>
  );
}
