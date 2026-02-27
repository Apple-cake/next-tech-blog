import { Article } from "../index";

export const reactPerformance: Article = {
  slug: "react-performance",
  title: "Reactパフォーマンス改善メモ 無駄レンダリングを本気で潰す",
  description:
    "Reactのレンダリング最適化・メモ化・構造設計の観点から、実務で使えるパフォーマンス改善手法を具体例付きで解説します。",
  publishedAt: "2026.02.12",
  tags: [
    { name: "React", slug: "react" },
    { name: "パフォーマンス", slug: "performance" },
  ],
  content: `
<h2>なぜReactのパフォーマンス改善が重要なのか</h2>
<p>
Reactアプリが重くなる原因の多くは「不要な再レンダリング」です。
</p>
<p>
最適化は難しそうに見えますが、基本原則を押さえれば意外とシンプルです。
</p>

<h2>不要な再レンダリングを防ぐ</h2>
<p>
まずは「どこが再描画されているか」を理解することが重要です。
</p>
<p>
親コンポーネントが再描画されると、子も再描画されます。
</p>

<h2>React.memoの活用</h2>
<p>
propsが変わらない限り再描画を防ぎます。
</p>

<pre><code class="language-tsx">const Component = React.memo(function Component({ value }: { value: string }) {
  return &lt;div&gt;{value}&lt;/div&gt;;
});</code></pre>

<p>
ただし、propsが毎回新しい参照になる場合は効果がありません。
</p>

<h2>useCallbackで関数参照を安定させる</h2>

<pre><code class="language-tsx">const handleClick = useCallback(() => {
  console.log("clicked");
}, []);</code></pre>

<p>
関数をpropsで渡す場合は特に重要です。
</p>

<h2>useMemoで計算コストを削減</h2>

<pre><code class="language-tsx">const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);</code></pre>

<p>
重い処理を毎回実行しないようにできます。
</p>

<h2>設計レベルでの最適化</h2>
<p>
実は一番効くのは設計です。
</p>
<ul>
  <li>状態を必要最小限にする</li>
  <li>コンポーネントを適切に分割する</li>
  <li>Contextの過剰利用を避ける</li>
</ul>

<h2>まとめ</h2>
<p>
React最適化は魔法ではありません。
</p>
<p>
まずは再レンダリングを理解し、memo化を正しく使うこと。
</p>
<p>
そして最終的には「設計で解決する」のが王道です。
</p>
`,
};
