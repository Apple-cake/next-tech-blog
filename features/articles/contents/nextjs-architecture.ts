import type { Article } from "../index";

export const nextjsArchitecture: Article = {
  slug: "nextjs-architecture",
  title: "Next.js App Routerで作る拡張性の高い設計",
  description:
    "App Routerを活用した実務レベルの設計戦略を体系的に解説します。",
  publishedAt: "2026.02.18",
  tags: [
    { name: "Next.js", slug: "nextjs" },
    { name: "TypeScript", slug: "typescript" },
  ],
  content: `
    <h2>App Routerとは何か</h2>
    <p>
    Next.js 13以降で導入されたApp Routerは、従来のPages Routerとは異なる新しいルーティングモデルです。
    React Server Componentsを前提に設計されており、サーバーとクライアントの責務分離がより明確になりました。
    </p>

    <h3>Pages Routerとの違い</h3>
    <p>
    Pages Routerではページ単位での設計が中心でしたが、App Routerではレイアウト単位での設計が可能です。
    これにより、UIの再利用性と拡張性が大きく向上します。
    </p>

    <h3>React Server Componentsの活用</h3>
    <p>
    App RouterではデフォルトがServer Componentになります。
    データ取得をサーバー側で行えるため、パフォーマンスやSEO面でも有利です。
    </p>

    <h2>拡張性の高いディレクトリ設計</h2>
    <p>
    長期運用を前提とする場合、ディレクトリ設計は非常に重要です。
    責務を分離し、機能ごとに整理することが拡張性を高める鍵になります。
    </p>

    <h3>features単位での分割</h3>
    <p>
    ドメインごとにfeaturesディレクトリを作成し、ロジックを集約します。
    UIとビジネスロジックを分離することで、再利用性が向上します。
    </p>

    <h3>componentsの役割分離</h3>
    <p>
    共通UIはcomponentsへ。
    ドメイン依存ロジックはfeaturesへ。
    この線引きを徹底することで構造が崩れにくくなります。
    </p>

    <h2>レイアウト戦略</h2>
    <p>
    App Routerの最大の特徴はネスト可能なレイアウトです。
    これを正しく設計することで、UIの一貫性を維持できます。
    </p>

    <h3>RootLayoutの責務</h3>
    <p>
    全体共通のヘッダー、フッター、メタデータ管理を担います。
    デザインの基盤となる部分です。
    </p>

    <h3>セクション別レイアウト</h3>
    <p>
    /articles や /tags など、セクション単位でレイアウトを持つことで、
    将来的な機能拡張にも柔軟に対応できます。
    </p>

    <h2>パフォーマンス最適化の考え方</h2>
    <p>
    設計段階でパフォーマンスを考慮することが重要です。
    後付けの最適化はコストが高くなります。
    </p>

    <h3>静的生成の活用</h3>
    <p>
    generateStaticParamsやgenerateMetadataを活用することで、
    ビルド時にページを生成し、高速な表示を実現できます。
    </p>

    <h3>クライアントコンポーネントの最小化</h3>
    <p>
    必要な箇所だけ"use client"を付ける。
    これによりバンドルサイズを抑えられます。
    </p>

    <h2>まとめ</h2>
    <p>
    App Routerは単なるルーティング機構ではなく、
    アーキテクチャ全体を再設計する思想です。
    拡張性を意識した設計を行うことで、
    長期的に保守しやすいプロダクトへと進化します。
    </p>
  `,
};
