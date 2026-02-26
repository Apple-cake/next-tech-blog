import { Article } from "../index";

export const cssAnimationMethods: Article = {
  slug: "css-animation-methods",
  title:
    "【保存版】CSSアニメーションの作り方完全ガイド｜@keyframes・animationの使い方と実用サンプル集",
  description:
    "CSSアニメーションの作り方を初心者向けに解説。@keyframesの基本からanimationプロパティの使い方、よく使うサンプルコードまでわかりやすく紹介します。",
  publishedAt: "2026.02.26",
  tags: [{ name: "CSS", slug: "css" }],
  content: `
    <p>CSSでアニメーションを作る方法は<code>transition</code>と<code>animation</code>の2種類があります。</p>
    <p>より複雑な動きを表現したい場合は<code>animation</code>の使用がおすすめです。</p>
    <p>この記事では、<strong>CSSアニメーションの基本的な作り方から実践的なサンプルコード</strong>まで詳しく解説します。</p>

    <h2>CSSアニメーションの基本構造</h2>

    <p>CSSアニメーションを作るには、次の3つが必要です。</p>

    <ul>
      <li>@keyframes</li>
      <li>animation-name</li>
      <li>animation-duration</li>
    </ul>

    <h3>@keyframesの書き方</h3>

<pre><code class="language-css">
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</code></pre>

    <p>上記はフェードインのアニメーションです。</p>

    <h3>animationを要素に適用する</h3>

<pre><code class="language-css">
.box {
  animation-name: fadeIn;
  animation-duration: 2s;
}
</code></pre>

    <p>これで2秒かけてフェードインします。</p>

    <h2>よく使うCSSアニメーションサンプル</h2>

    <h3>① フェードイン</h3>

<pre><code class="language-css">
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade {
  animation: fadeIn 1.5s ease forwards;
}
</code></pre>

    <h3>② スライドイン（下から）</h3>

<pre><code class="language-css">
@keyframes slideUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide {
  animation: slideUp 0.8s ease-out forwards;
}
</code></pre>

    <h3>③ ループアニメーション（ふわふわ）</h3>

<pre><code class="language-css">
@keyframes floating {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.float {
  animation: floating 3s ease-in-out infinite;
}
</code></pre>

    <h2>アニメーションを細かく制御するプロパティ</h2>

    <h3>animation-delay（開始タイミング）</h3>

<pre><code class="language-css">
.box {
  animation: fadeIn 1s ease;
  animation-delay: 2s;
}
</code></pre>

    <p>2秒後に再生されます。</p>

    <h3>animation-iteration-count（繰り返し回数）</h3>

<pre><code class="language-css">
.box {
  animation: fadeIn 1s ease infinite;
}
</code></pre>

    <h3>animation-direction（往復再生）</h3>

<pre><code class="language-css">
.box {
  animation: floating 2s ease-in-out infinite alternate;
}
</code></pre>

    <h3>animation-timing-function（速度変化）</h3>

<pre><code class="language-css">
.box {
  animation: fadeIn 1s ease-in-out;
}
</code></pre>

    <table>
      <thead>
        <tr>
          <th>値</th>
          <th>動きの特徴</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ease</td>
          <td>開始と終了がゆっくり</td>
        </tr>
        <tr>
          <td>linear</td>
          <td>一定速度</td>
        </tr>
        <tr>
          <td>ease-in</td>
          <td>徐々に加速</td>
        </tr>
        <tr>
          <td>ease-out</td>
          <td>徐々に減速</td>
        </tr>
        <tr>
          <td>ease-in-out</td>
          <td>加速→減速</td>
        </tr>
      </tbody>
    </table>

    <h3>複数アニメーションの指定</h3>

<pre><code class="language-css">
.box {
  animation: fadeIn 1s ease,
  floating 3s ease-in-out infinite;
}
</code></pre>

    <h2>まとめ</h2>

    <p>CSSアニメーションは一見難しそうに見えますが、基本は以下の3つだけです。</p>

    <ul>
      <li>@keyframes</li>
      <li>animation-name</li>
      <li>animation-duration</li>
    </ul>

    <p>まずはフェードインやスライドなどの基本アニメーションから試してみましょう。</p>
    <p>慣れてくると、UIの質が一段階上がります。</p>
  `,
};