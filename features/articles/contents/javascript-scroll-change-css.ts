import { Article } from "../index";

export const javascriptScrollChangeCss: Article = {
  slug: "javascript-scroll-change-css",
  title: "JavaScriptでスクロール位置に応じてCSSを変更する方法",
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
      スクロール位置に応じてヘッダーや背景色を変更したいケースはよくあります。
      この記事ではscrollイベントを使う方法と、よりモダンなIntersectionObserverを使う方法を解説します。
    </p>

    <h2>scrollイベントを使う基本実装</h2>
    <p>
      まずはwindowのscrollイベントを使ってスクロール量を取得します。
    </p>

    <pre><code>
      const header = document.getElementById("header");

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

    <h2>classを切り替える実装（推奨）</h2>
    <p>
      styleを直接変更するのではなく、classを切り替える方が保守性が高くおすすめです。
    </p>

    <pre><code>
      window.addEventListener("scroll", () => {
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

    <pre><code>
      #header {
        transition: background-color 0.3s;
      }

      .scrolled-200 {
        background-color: green;
      }

      .scrolled-500 {
        background-color: red;
      }
    </code></pre>

    <h2>パフォーマンスを意識した実装</h2>
    <p>
      scrollイベントは頻繁に発火するため、requestAnimationFrameを利用して最適化できます。
    </p>

    <pre><code>
      let ticking = false;

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

    <h2>IntersectionObserverを使う方法（モダン実装）</h2>
    <p>
      IntersectionObserverを使えば、scrollイベントを書かずに要素の表示状態を監視できます。
    </p>

    <pre><code>
      const sections = document.querySelectorAll("section");

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

    <h2>まとめ</h2>
    <p>
      スクロールに応じたスタイル変更は、class切り替えで実装するのが基本です。
      よりパフォーマンスを意識する場合はIntersectionObserverの利用も検討すると良いでしょう。
    </p>
  `,
};