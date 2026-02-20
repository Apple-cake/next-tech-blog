import type { Article } from "../index";

/**
 * Next.js App Routerで作る拡張性の高い設計
 */
export const nextjsArchitecture: Article = {
  slug: "nextjs-architecture",
  title: "Next.js App Routerで作る拡張性の高い設計",
  description:
    "App Routerを活用した実務レベルの設計戦略を体系的に解説します。",
  publishedAt: "2026.02.18",
  readingTime: "5分",
  tags: ["Next.js", "設計", "TypeScript"],
  content: `
## なぜ設計が重要なのか？

プロダクト開発において最もコストが高いのは「変更」です。

---

## レイヤーを明確に分離する

app / components / features / lib / types
  `,
};
