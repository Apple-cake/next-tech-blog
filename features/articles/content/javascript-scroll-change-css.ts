import { Article } from "../index";

export const javascriptScrollChangeCss: Article = {
  slug: "javascript-scroll-change-css",
  title: "スクロールでCSSを切り替える方法をちゃんと理解する",
  description:
    "scrollイベントとIntersectionObserverを使って、スクロール位置に応じてスタイルを変更する実装方法を解説。",
  publishedAt: "2026.02.23",
  tags: [
    { name: "JavaScript", slug: "javascript" },
    { name: "CSS", slug: "css" },
  ],
  content: `
    <h2>スクロール位置でCSSを変更する方法</h2>
    <p>
      スクロール位置に応じてヘッダーや背景色を変更したいケースはよくあります。<br />
      たとえば「ある位置を超えたらヘッダーを固定する」「セクションごとに背景色を変える」といったUIは、よく見る実装ですよね。
    </p>
    <p>
      この記事ではscrollイベントを使う方法と、よりモダンなIntersectionObserverを使う方法をそれぞれのメリット・デメリットも含めて解説します。
    </p>

    <h2>scrollイベントを使う基本実装</h2>
    <p>
      まずはwindowのscrollイベントを使ってスクロール量を取得します。<br />
      scrollイベントは「スクロールするたびに発火するイベント」で、現在のスクロール位置はwindow.scrollYで取得できます。
    </p>

<pre><code>const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 500) {
    header.style.backgroundColor = "red";
  } else if (scrollPosition > 200) {
    header.style.backgroundColor = "green";
  } else {
    header.style.backgroundColor = "blue";
  }
});
</code></pre>

    <p>
      このように数値で条件分岐すれば、スクロール量に応じてスタイルを変更できます。<br />
      ただしこの方法は「JavaScriptが見た目を直接変更している」という点に注意が必要です。
    </p>

    <h2>classを切り替える実装（推奨）</h2>
    <p>
      styleを直接変更するのではなく、classを切り替える方が保守性が高くおすすめです。<br />
      なぜなら「見た目の管理はCSS」「状態の管理はJavaScript」と責務を分離できるからです。
    </p>

<pre><code>window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  header.classList.remove("scrolled-200", "scrolled-500");

  if (scrollPosition > 500) {
    header.classList.add("scrolled-500");
  } else if (scrollPosition > 200) {
    header.classList.add("scrolled-200");
  }
});
</code></pre>

    <h3>対応するCSS</h3>

<pre><code>#header {
  transition: background-color 0.3s;
}

.scrolled-200 {
  background-color: green;
}

.scrolled-500 {
  background-color: red;
}
</code></pre>

    <p>
      この方法なら、デザイン変更があった場合もCSS側だけ修正すればOKです。<br />
      実務ではこちらの「class切り替え方式」が基本になると覚えておきましょう。
    </p>

    <h2>パフォーマンスを意識した実装</h2>
    <p>
      scrollイベントは非常に高頻度で発火します。<br />
      そのため重い処理を書くとパフォーマンス低下の原因になります。
    </p>
    <p>
      そこで使えるのがrequestAnimationFrameです。<br />
      ブラウザの描画タイミングに合わせて処理を実行できるため、無駄な再計算を防げます。
    </p>

<pre><code>let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateHeader();
      ticking = false;
    });
    ticking = true;
  }
});

function updateHeader() {
  const scrollPosition = window.scrollY;
}
</code></pre>

    <p>
      スクロールイベント最適化は、特にモバイル環境で効果が出やすいです。<br />
      パフォーマンスを意識するなら、この書き方はぜひ覚えておきたいところです。
    </p>

    <h2>IntersectionObserverを使う方法（モダン実装）</h2>
    <p>
      IntersectionObserverを使えば、scrollイベントを書かずに要素の表示状態を監視できます。<br />
      「ある要素が画面に入ったかどうか」を検知できるAPIです。
    </p>
    <p>
      なぜこれが便利かというと、ブラウザ側が最適化された形で監視してくれるからです。<br />
      自前でスクロール位置を計算するよりも効率的に動作します。
    </p>

<pre><code>const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor =
        entry.target.dataset.color;
    }
  });
});

sections.forEach((section) => observer.observe(section));
</code></pre>

    <p>
      セクション単位で背景色を変えたいようなケースでは非常に相性が良いです。<br />
      スクロール量ではなく「要素の可視状態」で制御したい場合はこちらを選びましょう。
    </p>

    <h2>まとめ</h2>
    <p>
      スクロールに応じたスタイル変更は、基本はclass切り替えで実装するのがおすすめです。<br />
      よりパフォーマンスを意識するならrequestAnimationFrameやIntersectionObserverも積極的に活用していきましょう。
    </p>
  `,
};