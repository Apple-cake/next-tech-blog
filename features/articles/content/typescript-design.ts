import { Article } from "../index";

export const typescriptDesign: Article = {
  slug: "typescript-design",
  title: "TypeScriptは型をちゃんと書くだけで人生が少し楽になる",
  description:
    "大規模開発に耐えうるTypeScriptの型設計手法を実例付きで解説。Union型・Discriminated Union・ドメイン設計・アンチパターンまで網羅します。",
  publishedAt: "2026.02.15",
  tags: [{ name: "TypeScript", slug: "typescript" }],
  content: `
<h2>なぜTypeScriptの型設計が重要なのか</h2>
<p>
TypeScriptは「型があるJavaScript」ですが、本質は<strong>設計のための言語</strong>だと思っています。
</p>
<p>
型設計が適切であれば、保守性・拡張性・安全性が大きく向上します。逆に、型が曖昧だとプロジェクトは徐々に壊れていきます。
</p>
<p>
特にチーム開発では、型は「仕様書」の役割も担います。ここを丁寧に設計するだけで、未来の自分やチームが本当に楽になります。
</p>

<h2>Union型とDiscriminated Unionの活用</h2>
<p>
複数の状態を扱う場合は、タグ付きUnion（Discriminated Union）を使うのが基本です。
</p>

<pre><code class="language-ts">type Result =
  | { status: "success"; data: string }
  | { status: "error"; message: string };</code></pre>

<p>
statusを判定軸にすることで、TypeScriptが安全に分岐を保証してくれます。
</p>

<pre><code class="language-ts">function handle(result: Result) {
  if (result.status === "success") {
    console.log(result.data);
  } else {
    console.log(result.message);
  }
}</code></pre>

<p>
条件分岐漏れも防げるので、実務ではほぼ必須テクニックです。
</p>

<h2>型をドメイン単位で設計する</h2>
<p>
UI単位で型を作るのではなく、「ビジネスの意味単位」で設計するのがおすすめです。
</p>
<p>
例えばUserという概念は、画面が変わっても変わりません。
</p>

<pre><code class="language-ts">type UserId = string;

interface User {
  id: UserId;
  name: string;
  email: string;
}</code></pre>

<p>
ドメイン中心に設計すると、再利用性が一気に上がります。
</p>

<h2>PartialやPickの使いすぎに注意</h2>
<p>
便利なUtility型ですが、多用すると型の意味が曖昧になります。
</p>

<pre><code class="language-ts">type UpdateUser = Partial&lt;User&gt;;</code></pre>

<p>
「何が任意なのか」が分からなくなるケースもあります。
明示的に型を作るほうが読みやすい場合も多いです。
</p>

<h2>neverを使った網羅性チェック</h2>
<p>
分岐漏れを完全に防ぐならneverチェックも有効です。
</p>

<pre><code class="language-ts">function assertNever(value: never): never {
  throw new Error("Unexpected value");
}</code></pre>

<p>
安全性を極限まで高めたい場合に使えます。
</p>

<h2>まとめ</h2>
<p>
型設計は後回しにしがちですが、実はプロジェクトの寿命を決める重要要素です。
</p>
<ul>
  <li>Unionはタグ付きで</li>
  <li>型はドメイン単位で</li>
  <li>Utility型は使いすぎない</li>
</ul>
<p>
少し意識を変えるだけで、コードの読みやすさが大きく変わります。
地味ですが、ここが一番差がつく部分です。
</p>
`,
};
