import { Article } from "../index";

export const cssPositionBasics: Article = {
  slug: "css-position-basics",
  title: "【CSS】positionの使い方なんとなくからの卒業",
  description:
    "CSSのpositionプロパティの基本を初学者向けに解説します。relative・absolute・fixed・stickyの違いを整理し、レイアウト崩れを防ぐ考え方までまとめました。",
  publishedAt: "2026.02.27",
  tags: [
    { name: "CSS", slug: "css" },
    { name: "UI", slug: "ui" },
  ],
  content: `
    <p>
      CSSの<code>position</code>、なんとなく使っていませんか？
    </p>

    <p>
      「absoluteにしたら動いたからOK」みたいな使い方をしていると、
      いつかレイアウトが崩壊します。
    </p>

    <p>
      この記事では、positionの基本を整理します。
      ちゃんと理解すると、UI設計が一段レベルアップします。
    </p>

    <h2>positionで指定できる主な値</h2>

    <ul>
      <li>static（初期値）</li>
      <li>relative</li>
      <li>absolute</li>
      <li>fixed</li>
      <li>sticky</li>
    </ul>

    <h2>static（初期値）</h2>

    <p>
      何も指定していない状態です。
      上下に自然に積み重なります。
    </p>

    <p>
      topやleftは効きません。
    </p>

    <h2>relative</h2>

    <p>
      「元の位置を基準に少しズラす」ための指定です。
    </p>

    <pre><code>.box {
  position: relative;
  top: 10px;
}</code></pre>

    <p>
      重要なのは、
      <strong>要素はその場に存在し続ける</strong>という点です。
    </p>

    <p>
      relativeは「基準を作る」ためにもよく使われます。
    </p>

    <h2>absolute</h2>

    <p>
      もっとも事故が多いのがこれです。
    </p>

    <p>
      absoluteは
      <strong>一番近いposition指定された親要素を基準に配置</strong>されます。
    </p>

    <pre><code>.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}</code></pre>

    <p>
      親にrelativeを付け忘れると、
      画面全体を基準にしてしまいます。
    </p>

    <p>
      「あれ、どっか行った…」の正体は大体これです。
    </p>

    <h2>fixed</h2>

    <p>
      画面（ビューポート）を基準に固定されます。
    </p>

    <p>
      ヘッダー固定や、右下のボタンなどに使います。
    </p>

    <p>
      スクロールしても位置は動きません。
    </p>

    <h2>sticky</h2>

    <p>
      普段は通常配置、
      一定位置までスクロールすると固定されます。
    </p>

    <pre><code>.header {
  position: sticky;
  top: 0;
}</code></pre>

    <p>
      ただし、
      親要素のoverflow指定によっては効かないことがあります。
    </p>

    <h2>positionで差がつくポイント</h2>

    <p>
      初学者は「動かすため」に使います。
      中級者は「設計するため」に使います。
    </p>

    <p>
      absoluteを使う前に、
      本当に通常フローで解決できないか考える。
    </p>

    <p>
      これだけでレイアウトの安定感が変わります。
    </p>

    <h2>まとめ</h2>

    <p>
      positionはレイアウトの土台です。
    </p>

    <p>
      なんとなく使うと崩れます。
      理解して使うと武器になります。
    </p>

    <p>
      relativeで基準を作る。
      absoluteは親を意識する。
      fixedとstickyは用途を明確に。
    </p>

    <p>
      この意識だけでも、かなり変わります。
    </p>
  `,
};