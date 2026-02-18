/**
 * TagBadge.tsx
 *
 * 記事のタグ表示用コンポーネント
 * 再利用可能な最小UI単位
 *
 * 使用例:
 * <TagBadge tag="Next.js" />
 */

type Props = {
  tag: string;
};

export default function TagBadge({ tag }: Props) {
  return (
    <span
      className="
        inline-block
        rounded-full
        bg-zinc-100
        px-3
        py-1
        text-xs
        font-medium
        text-zinc-700
        hover:bg-zinc-200
        transition
      "
    >
      {tag}
    </span>
  );
}
