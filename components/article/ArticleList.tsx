/**
 * 最新記事一覧
 */

import ArticleCard from "./ArticleCard";

const articles = [
  {
    slug: "nextjs-architecture",
    title: "Next.js App Routerで作る拡張性の高い設計",
    description:
      "App Routerを活用した、スケーラブルで保守性の高いフロントエンド設計の考え方を解説します。",
    publishedAt: "2026.02.18",
    readingTime: "5分",
    tags: [
      { name: "Next.js", slug: "nextjs" },
      { name: "設計", slug: "design" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    slug: "typescript-design",
    title: "TypeScript型設計のベストプラクティス",
    description:
      "大規模開発に耐えうるTypeScriptの型設計手法を実例付きで紹介します。",
    publishedAt: "2026.02.15",
    readingTime: "7分",
    tags: [
      { name: "TypeScript", slug: "typescript" },
      { name: "設計", slug: "design" },
      { name: "フロントエンド", slug: "frontend" },
    ],
  },
  {
    slug: "react-performance",
    title: "Reactパフォーマンス最適化戦略",
    description:
      "レンダリング最適化・メモ化・構造設計の観点からパフォーマンス改善を解説。",
    publishedAt: "2026.02.12",
    readingTime: "6分",
    tags: [
      { name: "React", slug: "react" },
      { name: "パフォーマンス", slug: "performance" },
    ],
  },
  {
    slug: "clean-architecture",
    title: "フロントエンドにおけるClean Architecture",
    description:
      "依存関係の方向を意識した責務分離設計の実践方法を具体例で説明します。",
    publishedAt: "2026.02.08",
    readingTime: "8分",
    tags: [
      { name: "設計", slug: "design" },
      { name: "アーキテクチャ", slug: "architecture" },
    ],
  },
  {
    slug: "ui-ux-thinking",
    title: "UI/UX設計で差がつく思考法",
    description:
      "ユーザー中心設計の考え方と実践的アプローチをまとめました。",
    publishedAt: "2026.02.05",
    readingTime: "4分",
    tags: [
      { name: "UI", slug: "ui" },
      { name: "UX", slug: "ux" },
      { name: "プロダクト", slug: "product" },
    ],
  },
];

export default function ArticleList() {
  return (
    <section className="max-w-4xl mx-auto">

      {/* セクションタイトル */}
      <h2 className="text-2xl font-bold mb-8">
        新着記事
      </h2>

      {/* 縦並び */}
      <div className="flex flex-col gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

    </section>
  );
}
