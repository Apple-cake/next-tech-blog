import type { Article } from "../index";

export const nextjsArchitecture: Article = {
  slug: "nextjs-architecture",
  title: "App Routerで詰まったので設計を本気で整理した",
  description:
    "App Routerを活用した実務レベルの設計戦略を体系的に解説します。",
  publishedAt: "2026.02.18",
  tags: [
    { name: "Next.js", slug: "nextjs" },
    { name: "TypeScript", slug: "typescript" },
  ],
  content: `
<h2>App Routerってそもそも何？</h2>
<p>
Next.js 13から導入された新しいルーティングの仕組みです。
それまで使われていた「Pages Router」とは設計思想が大きく異なります。
</p>

<p>
一番の違いは、<strong>React Server Components前提で設計されている</strong>こと。
つまり「サーバーでやること」と「ブラウザでやること」を最初から分けて考える構造になっています。
</p>

<h3>なぜServer Componentがデフォルトなの？</h3>
<p>
理由はシンプルで、パフォーマンスとSEOを良くするためです。
</p>

<ul>
  <li>不要なJavaScriptをブラウザに送らなくて済む</li>
  <li>データ取得をサーバー側で完結できる</li>
  <li>初期表示が速くなる</li>
</ul>

<p>
つまり「できるだけサーバーで処理しよう」という思想です。
これがApp Routerの基本思想になります。
</p>

<h2>Pages Routerとの違いをざっくり理解する</h2>
<p>
Pages Routerは「ページ単位」の設計でした。
一方、App Routerは「レイアウト単位」で設計できます。
</p>

<p>
これがなぜ重要かというと、
<strong>UIを使い回しやすくなるから</strong>です。
</p>

<p>
例えば、ヘッダーやサイドバー。
Pages Routerだと毎回importしていましたが、
App Routerではレイアウトとして自然にネストできます。
</p>

<h2>拡張性の高いディレクトリ設計とは？</h2>
<p>
長く運用するプロジェクトほど、
「あとから機能が増える」前提で設計する必要があります。
</p>

<p>
ここで重要なのが<strong>責務の分離</strong>です。
</p>

<h3>features単位で分ける理由</h3>
<p>
機能（ドメイン）ごとにディレクトリを分けます。
</p>

<pre><code>features/
  articles/
  users/
  auth/
</code></pre>

<p>
なぜこれが良いのか？
</p>

<ul>
  <li>機能追加時に迷わない</li>
  <li>修正範囲が限定される</li>
  <li>チーム開発で衝突しにくい</li>
</ul>

<p>
「機能ごとに小さなアプリを作る」イメージです。
</p>

<h3>componentsとfeaturesの違い</h3>
<p>
ここは初心者が一番混乱しがちなポイントです。
</p>

<ul>
  <li>components → 汎用UI（ボタン・モーダルなど）</li>
  <li>features → 特定機能専用ロジック</li>
</ul>

<p>
この線引きを曖昧にすると、
数ヶ月後に「どこに何があるのか分からない地獄」が始まります。
</p>

<h2>レイアウト設計がApp Routerの本質</h2>
<p>
App Router最大の武器は「ネスト可能なレイアウト」です。
</p>

<h3>RootLayoutの役割</h3>
<p>
全ページ共通の基盤です。
</p>

<ul>
  <li>ヘッダー</li>
  <li>フッター</li>
  <li>グローバルCSS</li>
  <li>メタデータ</li>
</ul>

<p>
アプリ全体の土台になります。
</p>

<h3>セクション別レイアウトを作る理由</h3>
<p>
例えば /articles 配下だけ専用レイアウトを持たせる。
</p>

<p>
なぜわざわざ分けるのか？
</p>

<p>
将来「記事だけデザイン変更したい」となった時、
変更範囲を最小化できるからです。
</p>

<p>
これは「将来の自分への保険」です。
</p>

<h2>パフォーマンスは設計段階で決まる</h2>
<p>
後から最適化するのはコストが高いです。
最初から意識するほうが圧倒的に楽です。
</p>

<h3>静的生成を使う理由</h3>
<p>
generateStaticParamsを使えば、
ビルド時にページを作れます。
</p>

<p>
つまり、アクセス時にサーバー計算が不要。
だから速い。
</p>

<h3>"use client"は最小限に</h3>
<p>
何でもかんでもクライアントにすると、
JavaScriptが肥大化します。
</p>

<p>
「本当にブラウザで動く必要ある？」と自問する癖をつけると、
設計レベルが一段上がります。
</p>

<h2>まとめ</h2>
<p>
App Routerは単なるルーティングではありません。
設計思想そのものです。
</p>

<p>
・サーバー中心に考える  
・責務を分離する  
・レイアウトで拡張性を担保する  
</p>

<p>
これを意識するだけで、
「なんとなく動く構成」から
「長期運用できる設計」に変わります。
</p>
  `,
};
