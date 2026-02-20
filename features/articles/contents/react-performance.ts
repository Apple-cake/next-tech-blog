import { Article } from "../index";

export const reactPerformance: Article = {
  slug: "react-performance",
  title: "Reactパフォーマンス最適化戦略",
  description:
    "レンダリング最適化・メモ化・構造設計の観点からパフォーマンス改善を解説。",
  publishedAt: "2026.02.12",
  readingTime: "6分",
  tags: ["React", "パフォーマンス"],
  content: `
    <h2>不要な再レンダリングを防ぐ</h2>
    <p>
      Reactでは再レンダリングの制御がパフォーマンス改善の鍵になります。
    </p>

    <h2>React.memoの活用</h2>
    <p>
      propsが変わらない限り再描画を防ぐことで無駄な更新を防ぎます。
    </p>

    <pre><code>
const Component = React.memo(function Component(props) {
  return <div>{props.value}</div>;
});
    </code></pre>

    <h2>useMemo / useCallbackの適切な利用</h2>
    <p>
      計算コストの高い処理や関数参照の安定化に有効です。
    </p>
  `,
};
