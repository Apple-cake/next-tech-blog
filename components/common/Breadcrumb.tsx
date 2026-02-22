/**
 * 汎用パンくず
 */

import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string; // 最後はhrefなし
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="hidden md:flex mb-6 text-sm text-zinc-500 items-center gap-2"
    >
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-zinc-700">{item.label}</span>
          )}

          {index < items.length - 1 && <span>&gt;</span>}
        </span>
      ))}
    </nav>
  );
}