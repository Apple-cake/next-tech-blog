import { Article } from "../index";

export const typescriptDesign: Article = {
  slug: "typescript-design",
  title: "TypeScript型設計のベストプラクティス",
  description:
    "大規模開発に耐えうるTypeScriptの型設計手法を実例付きで紹介します。",
  publishedAt: "2026.02.15",
  readingTime: "7分",
  tags: ["TypeScript", "設計", "フロントエンド"],
  content: `
    <h2>なぜ型設計が重要なのか</h2>
    <p>
      TypeScriptにおける型設計は、保守性・拡張性・安全性を左右する重要な要素です。
    </p>

    <h2>Union型とDiscriminated Union</h2>
    <p>
      複数の状態を扱う場合は、タグ付きUnionを活用することで安全な分岐が可能になります。
    </p>

    <pre><code>
type Result =
  | { status: "success"; data: string }
  | { status: "error"; message: string };
    </code></pre>

    <h2>型をドメイン単位で分割する</h2>
    <p>
      UI単位ではなく、ビジネスドメイン単位で型を設計することで再利用性が向上します。
    </p>
  `,
};
