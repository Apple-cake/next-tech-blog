import Link from "next/link";
import { TocItem } from "@/lib/toc";

/**
 * 記事目次コンポーネント
 */
export default function TableOfContents({
  items,
}: {
  items: TocItem[];
}) {
  if (!items.length) return null;

  return (
    <div className="mt-10 border-t pt-6">
      <h2 className="text-sm font-semibold mb-4 tracking-wide text-zinc-700">
        目次
      </h2>

      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? "ml-4" : ""}
          >
            <Link
              href={`#${item.id}`}
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