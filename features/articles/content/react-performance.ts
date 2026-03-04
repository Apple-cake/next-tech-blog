import { Article } from "../index";

export const reactPerformance: Article = {
  slug: "react-performance",
  title: "Reactの再レンダリングを理解して、パフォーマンスを改善する",
  description:
    "Reactアプリが重くなる原因の多くは不要な再レンダリングです。memo・useCallback・useMemoの使いどころと、設計レベルでの改善方法を具体例付きで解説します。",
  publishedAt: "2026.02.12",
  tags: [
    { name: "React", slug: "react" },
    { name: "パフォーマンス", slug: "performance" },
  ],
  content: `
<p>
  Reactアプリを作っていると、ある時点から「なんか動きが重くなってきた」と感じることがあります。<br />
  そういったとき、原因のほとんどは<strong>不要な再レンダリング</strong>です。
</p>
<p>
  最適化というと難しそうに聞こえますが、仕組みを理解すれば対処法はシンプルです。<br />
  今回はReactの再レンダリングがどういう仕組みで起きるのか、どう抑えるかを整理します。
</p>

<h2>再レンダリングはいつ起きるのか</h2>
<p>
  Reactのコンポーネントは、次のいずれかが変化したときに再レンダリングされます。
</p>
<ul>
  <li><strong>stateが変わった</strong></li>
  <li><strong>propsが変わった</strong></li>
  <li><strong>親コンポーネントが再レンダリングされた</strong></li>
</ul>
<p>
  最後の「親が再レンダリングされると子も再レンダリングされる」という挙動が、パフォーマンス問題の温床になりやすいです。<br />
  子コンポーネントのpropsが何も変わっていなくても、親が更新されるだけで子も再描画されます。
</p>

<pre><code class="language-tsx">function Parent() {
  const [count, setCount] = useState(0);

  return (
    &lt;&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;+1&lt;/button&gt;
      {/* countが変わるたびに Child も再レンダリングされる */}
      &lt;Child /&gt;
    &lt;/&gt;
  );
}
</code></pre>

<p>
  この例では <code>Child</code> はcountを使っていないのに、ボタンを押すたびに再描画されます。<br />
  コンポーネントツリーが深くなると、この連鎖が積み重なって重さの原因になります。
</p>

<h2>React.memo — propsが変わらなければ再描画しない</h2>
<p>
  <code>React.memo</code> でコンポーネントをラップすると、<strong>propsが前回と同じ値であればレンダリングをスキップ</strong>します。
</p>

<pre><code class="language-tsx">const Child = React.memo(function Child({ label }: { label: string }) {
  console.log("Child レンダリング");
  return &lt;div&gt;{label}&lt;/div&gt;;
});
</code></pre>

<p>
  ただし、propsにオブジェクトや関数を渡している場合は注意が必要です。<br />
  JavaScriptでは <code>{}</code> や <code>() => {}</code> は毎回「新しい参照」として扱われるため、
  値が同じでも <code>React.memo</code> の比較をすり抜けてしまいます。
</p>

<pre><code class="language-tsx">// これは毎回新しいオブジェクトが生成されるため、memoが効かない
&lt;Child style={{ color: "red" }} /&gt;
</code></pre>

<h2>useCallback — 関数の参照を安定させる</h2>
<p>
  関数をpropsで子コンポーネントに渡す場合、<code>useCallback</code> で関数をメモ化すると参照が安定します。
</p>

<pre><code class="language-tsx">// useCallbackなし → 親が再レンダリングするたびに新しい関数が生成される
const handleClick = () => {
  console.log("clicked");
};

// useCallbackあり → 依存配列が変わらない限り同じ参照を使い回す
const handleClick = useCallback(() => {
  console.log("clicked");
}, []); // 空配列 = マウント時に1度だけ生成
</code></pre>

<p>
  <code>React.memo</code> と <code>useCallback</code> はセットで使うことではじめて効果を発揮します。<br />
  どちらか片方だけでは、関数propsの安定化はできません。
</p>

<h2>useMemo — 重い計算結果をキャッシュする</h2>
<p>
  毎レンダリングで実行するには重い計算処理がある場合、<code>useMemo</code> で結果をキャッシュできます。
</p>

<pre><code class="language-tsx">// filteredItems は data が変わった時だけ再計算される
const filteredItems = useMemo(() => {
  return items.filter((item) => item.active);
}, [items]);
</code></pre>

<p>
  ただし、軽い処理に <code>useMemo</code> を使っても効果はほぼありません。<br />
  むしろメモ化のコスト（比較処理）が余計にかかることもあるので、<strong>計算が明らかに重い場合に限定して使う</strong>のが基本です。
</p>

<h2>実は一番効くのは「設計」</h2>
<p>
  memo系のAPIはあくまで対症療法です。根本的なパフォーマンス改善には、コンポーネントの設計を見直す方が効果的なことが多いです。
</p>

<h3>状態をできるだけ下に置く</h3>
<p>
  stateはそれを使うコンポーネントの近くに置くのが基本です。<br />
  上位に置くほど、更新のたびに多くの子コンポーネントが巻き込まれます。
</p>

<pre><code class="language-tsx">// ❌ 上位に置くと全体が再レンダリングされる
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return &lt;Modal isOpen={isOpen} setIsOpen={setIsOpen} /&gt;;
}

// ✅ 状態をModalの中に閉じ込める
function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return ...;
}
</code></pre>

<h3>Contextの使いすぎに注意</h3>
<p>
  <code>Context</code> の値が変わると、そのContextを購読しているすべてのコンポーネントが再レンダリングされます。<br />
  頻繁に変わる値（フォームの入力値など）をContextに入れると、想定外の範囲に影響が出ることがあります。<br />
  頻繁に更新されるグローバルな状態には、ZustandなどのStateライブラリを検討するのも手です。
</p>

<h2>まとめ</h2>
<p>
  Reactのパフォーマンス改善は「魔法のAPIを使う」より、<strong>再レンダリングの仕組みを理解して設計で抑える</strong>のが王道です。
</p>
<ul>
  <li><strong>React.memo</strong> — propsが変わらなければスキップ。ただしオブジェクト・関数propsには注意</li>
  <li><strong>useCallback</strong> — 関数propsの参照を安定させる。memoとセットで使う</li>
  <li><strong>useMemo</strong> — 重い計算のキャッシュ。軽い処理には使わない</li>
  <li><strong>設計</strong> — stateは下に置く、Contextの乱用を避ける。これが根本解決になることが多い</li>
</ul>
<p>
  まずは「どこが無駄に再レンダリングされているか」を React DevTools の Profiler で確認するところから始めるのがおすすめです。
</p>
  `,
};