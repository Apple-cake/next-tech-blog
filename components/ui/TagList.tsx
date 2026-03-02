"use client";

import TagBadge from "../article/TagBadge";
import { tags } from "@/lib/tags";

/**
 * タグ一覧コンポーネント
 *
 * - 固定高さ
 * - 将来増えても縦スクロール可能
 * - PC/SP共通
 */

type Props = {
  maxHeight?: string;
};

export default function TagList({ maxHeight = "240px" }: Props) {
  return (
    <div className="w-full mt-8 md:pt-4 md:mb-4">
      <p className="text-lg md:text-sm font-semibold mb-6 md:pb-2 md:tracking-wide md:text-zinc-500 md:border-b md:border-[var(--brand-500)]">
        Tags
      </p>

      <div
        className="
          flex flex-wrap gap-2
          overflow-y-auto
          scrollbar-thin
        "
        style={{ maxHeight }}
      >
        {tags.map((tag) => (
          <TagBadge key={tag.slug} label={tag.name} slug={tag.slug} />
        ))}
      </div>
    </div>
  );
}