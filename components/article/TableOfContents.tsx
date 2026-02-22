"use client";

/**
 * 記事目次
 */

import Link from "next/link";
import { TocItem } from "@/lib/toc";

type Props = {
  items: TocItem[];
  onItemClick?: () => void;
};

const scrollToHeading = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const isMobile = window.innerWidth < 768;

  // 見出しの位置をそのままtopにもってくると、見切れたり余白が狭かったりするため調整
  if (isMobile) {
    const offset = 70; // モバイルバー高さ
    const position =
      el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  } else {
    const offset = 20; // topに余白を設ける
    const position =
      el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }
};

export default function TableOfContents({
  items,
  onItemClick,
}: Props) {
  if (!items.length) return null;

  return (
    <div className="md:mt-10 md:border-t md:pt-6">
      <p className="text-sm font-semibold mb-4 tracking-wide text-zinc-700">
        目次
      </p>

      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? "ml-4" : ""}
          >
            <Link
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();        // デフォルトのジャンプを止める
                onItemClick?.();           // ポップアップを閉じる
                scrollToHeading(item.id);  // 自前でスクロール制御
              }}
              className="text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
