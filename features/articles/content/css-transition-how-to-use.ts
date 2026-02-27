import { Article } from "../index";

export const cssTransitionHowToUse: Article = {
  slug: "css-transition-how-to-use",
  title: "【CSS】UIをかっこよくするtransitionの使い方",
  description:
    "CSSのtransitionプロパティの基本的な使い方を解説します。hoverと組み合わせたアニメーションの基本から、自然な動きを作るコツまで初学者向けにまとめました。",
  publishedAt: "2026.02.27",
  tags: [
    { name: "CSS", slug: "css" },
    { name: "UI", slug: "ui" },
  ],
  content: `
    <p>
      CSSの<code>transition</code>は、
      <strong>変化をなめらかにするためのプロパティ</strong>です。
    </p>

    <p>
      これを使わないと、
      hoverした瞬間に「パッ」と色が変わります。
      使うと「スッ」と変わります。
    </p>

    <p>
      たったそれだけ？と思うかもしれませんが、
      体験の質はガチで変わります。
    </p>

    <h2>transitionの基本</h2>

    <p>
      基本形はこちらです。
    </p>

    <pre><code>.button {
  background: #3b82f6;
  transition: 0.3s;
}

.button:hover {
  background: #2563eb;
}</code></pre>

    <p>
      <code>transition: 0.3s;</code>を指定することで、
      0.3秒かけてなめらかに変化します。
    </p>

    <p>
      これだけでUIの印象が一段上がります。
    </p>

    <h2>よく使う書き方</h2>

    <p>
      実務では、どのプロパティを変化させるか明示することが多いです。
    </p>

    <pre><code>.card {
  transition: background-color 0.3s ease;
}</code></pre>

    <ul>
      <li>background-color → 何を変化させるか</li>
      <li>0.3s → 変化にかける時間</li>
      <li>ease → 変化のスピードカーブ</li>
    </ul>

    <p>
      特に<code>ease</code>は自然な動きになるのでよく使われます。
    </p>

    <h2>ありがちなミス</h2>

    <p>
      hover側にtransitionを書いてしまうパターン。
    </p>

    <pre><code>.button:hover {
  transition: 0.3s;
}</code></pre>

    <p>
      これだと「hoverに入る時」しか効きません。
      元に戻るときが一瞬になります。
    </p>

    <p>
      transitionは<strong>元の要素側に書く</strong>。
      これ、地味に超重要です。
    </p>

    <h2>UIは“動き”で差がつく</h2>

    <p>
      最近のWebサイトが洗練されて見える理由の一つは、
      ほぼ確実にtransitionが入っているからです。
    </p>

    <p>
      動きがあると、
      「反応してくれている感」が生まれます。
    </p>

    <p>
      これがユーザー体験の質を底上げします。
    </p>

    <h2>まとめ</h2>

    <p>
      transitionは派手なアニメーションではありません。
      でも、UIの完成度を確実に引き上げます。
    </p>

    <p>
      hoverを使うなら、
      とりあえずtransitionもセットで入れておく。
      それくらいの感覚でOKです。
    </p>

    <p>
      地味だけど、差がつく。
      こういう積み重ねが強いUIを作ります。
    </p>
  `,
};