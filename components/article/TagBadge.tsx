/**
 * TagBadge.tsx
 *
 * 記事のタグ表示用コンポーネント
 */

import Link from "next/link";

type Props = {
  label: string;
  href?: string;
};

export default function TagBadge({ label, href }: Props) {
  const className = `
    inline-block
    rounded-full
    bg-zinc-100
    px-3
    py-1
    text-xs
    font-medium
    text-zinc-700
    transition-colors
    hover:bg-zinc-200
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={`${className} hover:text-zinc-900`}
      >
        {label}
      </Link>
    );
  }

  return (
    <span className={className}>
      {label}
    </span>
  );
}
