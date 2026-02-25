/**
 * 全記事データ
 */

export type Tag = {
  name: string;
  slug: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: Tag[];
};

export const articles: Article[] = [
  {
    slug: "nextjs-architecture",
    title: "Next.js App Routerで作る拡張性の高い設計",
    description:
      "App Routerを活用した、スケーラブルで保守性の高いフロントエンド設計の考え方を解説します。",
    publishedAt: "2026.02.18",
    tags: [
      { name: "Next.js", slug: "nextjs" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    slug: "typescript-design",
    title: "TypeScript型設計のベストプラクティス",
    description:
      "大規模開発に耐えうるTypeScriptの型設計手法を実例付きで紹介します。",
    publishedAt: "2026.02.15",
    tags: [
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    slug: "react-performance",
    title: "Reactパフォーマンス最適化戦略",
    description:
      "レンダリング最適化・メモ化・構造設計の観点からパフォーマンス改善を解説。",
    publishedAt: "2026.02.12",
    tags: [
      { name: "React", slug: "react" },
      { name: "パフォーマンス", slug: "performance" },
    ],
  },
  {
    slug: "javascript-scroll-change-css",
    title: "JavaScriptでスクロール位置に応じてCSSを変更する方法",
    description:
      "scrollイベントとIntersectionObserverを使って、スクロール位置に応じてスタイルを変更する実装方法を解説。",
    publishedAt: "2026.02.23",
    tags: [
      { name: "JavaScript", slug: "javascript" },
      { name: "CSS", slug: "css" },
    ],
  },
  {
    slug: "git-stash-usage",
    title: "【Git】一時退避コマンド\"git stash\"の使い方",
    description:
      "ブランチ作業中に現在の変更を一時退避するgit stashの基本的な使い方を解説します。",
    publishedAt: "2026.02.23",
    tags: [
      { name: "Git", slug: "git" },
    ],
  },
  {
    slug: "clean-architecture",
    title: "フロントエンドにおけるClean Architecture",
    description:
      "依存関係の方向を意識した責務分離設計の実践方法を具体例で説明します。",
    publishedAt: "2026.02.08",
    tags: [
      { name: "アーキテクチャ", slug: "architecture" },
    ],
  },
  {
    slug: "ui-ux-thinking",
    title: "UI/UX設計で差がつく思考法",
    description:
      "ユーザー中心設計の考え方と実践的アプローチをまとめました。",
    publishedAt: "2026.02.05",
    tags: [
      { name: "UI/UX", slug: "ui-ux" },
    ],
  },
];