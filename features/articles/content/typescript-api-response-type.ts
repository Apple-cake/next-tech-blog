import { Article } from "../index";

export const typescriptApiResponseType: Article = {
  slug: "typescript-api-response-type",
  title: "fetchで取得したデータに型をつける — TypeScript × API入門",
  description:
    "TypeScriptを使っているのにAPIレスポンスがany型のまま、になっていませんか？型をつけることで補完が効いてバグも減ります。気象庁APIを題材に、実践的な型定義の方法を解説します。",
  publishedAt: "2026.02.26",
  tags: [
    { name: "TypeScript", slug: "typescript" },
    { name: "JavaScript", slug: "javascript" },
  ],
  content: `
<p>
  TypeScript を使っていても、API から取得したデータをそのまま使っていると
  補完が効かなかったり、存在しないプロパティを参照してしまったりしがちです。
</p>
<p>
  「一応 TypeScript で書いているけど、<code>any</code> だらけになってる…」という経験はないでしょうか。<br />
  この記事では、fetch でAPIレスポンスを受け取るときの型定義を、気象庁APIを題材にしながら丁寧に解説します。
</p>

<h2>まず型なしで書くとどうなるか</h2>
<p>
  TypeScript を使って fetch を書くと、最初はこんな感じになりがちです。
</p>

<pre><code class="language-typescript">const response = await fetch(
  "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json"
);
const data = await response.json();

console.log(data.text); // ← data は any 型なので補完が効かない
</code></pre>

<p>
  <code>response.json()</code> の戻り値は <code>Promise&lt;any&gt;</code> なので、<code>data</code> は <code>any</code> 型になります。<br />
  これだと TypeScript を使っている恩恵がほとんどなく、存在しないプロパティを参照してもエラーになりません。
</p>

<h2>APIレスポンスの型を定義する</h2>
<p>
  まず、APIが返してくるJSONの構造を確認します。<br />
  気象庁の <code>overview_forecast</code> エンドポイントは以下のような構造です。
</p>

<pre><code class="language-json">{
  "publishingOffice": "気象庁",
  "reportDatetime": "2026-02-26T11:00:00+09:00",
  "targetArea": "東京都",
  "headlineText": "",
  "text": "関東甲信地方は、高気圧に覆われておおむね晴れています。..."
}
</code></pre>

<p>
  この構造をもとに <code>type</code>（または <code>interface</code>）で型を定義します。
</p>

<pre><code class="language-typescript">type WeatherOverview = {
  publishingOffice: string;
  reportDatetime: string;
  targetArea: string;
  headlineText: string;
  text: string;
};
</code></pre>

<p>
  型定義は実際のJSONを <code>console.log()</code> で確認しながら作るのが確実です。<br />
  ブラウザの開発者ツールや、<a href="https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json" target="_blank" rel="noreferrer noopener">エンドポイントに直接アクセス</a>してJSONを眺めるのが手軽でおすすめです。
</p>

<h2>型を fetch に適用する</h2>
<p>
  型定義ができたら、<code>response.json()</code> にジェネリクスで型を渡します。<br />
  ただし、TypeScript 標準の <code>fetch</code> では <code>response.json()</code> に型パラメータを渡せないため、
  <strong>型アサーション（<code>as</code>）</strong> を使うのが一般的です。
</p>

<pre><code class="language-typescript">type WeatherOverview = {
  publishingOffice: string;
  reportDatetime: string;
  targetArea: string;
  headlineText: string;
  text: string;
};

async function getWeather(code: string): Promise&lt;void&gt; {
  const url = \`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/\${code}.json\`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(\`通信エラー: \${response.status}\`);
    }

    // response.json() の戻り値を WeatherOverview として扱う
    const data = (await response.json()) as WeatherOverview;

    // ここから data.text など補完が効くようになる
    console.log(data.text);
    console.log(data.targetArea);
  } catch (error) {
    console.error("取得失敗:", error);
  }
}
</code></pre>

<p>
  <code>as WeatherOverview</code> と書くことで、<code>data</code> は <code>WeatherOverview</code> 型として扱われます。<br />
  エディタ（VS Code など）上で <code>data.</code> と入力すると、定義したプロパティが補完で出てくるようになります。
</p>

<h3>型アサーションとは何か</h3>
<p>
  <code>as</code> を使った型アサーションは「この値はこの型だと私が保証します」とTypeScriptに伝える構文です。<br />
  TypeScript が自動で型を推論できない場面で、開発者が型を明示するために使います。
</p>
<p>
  ただし注意点があります。型アサーションは<strong>実際の値の中身を検証するわけではありません</strong>。<br />
  APIの仕様が変わって返ってくるデータの構造が変わっても、TypeScriptはコンパイル時に検知できません。<br />
  型を信頼しすぎず、実際にデータが想定通りかどうかは別途確認する意識が必要です。
</p>

<h2>axios の場合はジェネリクスで渡せる</h2>
<p>
  <code>axios</code> を使っている場合は、ジェネリクスで型をそのまま渡せてより直感的に書けます。
</p>

<pre><code class="language-typescript">import axios from "axios";

type WeatherOverview = {
  publishingOffice: string;
  reportDatetime: string;
  targetArea: string;
  headlineText: string;
  text: string;
};

async function getWeather(code: string): Promise&lt;void&gt; {
  const url = \`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/\${code}.json\`;

  try {
    // axios.get&lt;型&gt;() の形でレスポンスの型を指定できる
    const { data } = await axios.get&lt;WeatherOverview&gt;(url);

    console.log(data.text);       // 補完が効く
    console.log(data.targetArea); // 補完が効く
  } catch (error) {
    console.error("取得失敗:", error);
  }
}
</code></pre>

<p>
  <code>axios.get&lt;WeatherOverview&gt;(url)</code> とすると、<code>data</code> が <code>WeatherOverview</code> 型として推論されます。<br />
  型アサーションを使わずに済むので、コードとしてもすっきりします。
</p>

<h2>応用 — 型定義を別ファイルに切り出す</h2>
<p>
  型定義が増えてくると、関数ファイルの中に型がたくさん並ぶのが煩雑になってきます。<br />
  そういう場合は型定義専用のファイルに切り出すのがよくあるパターンです。
</p>

<pre><code class="language-typescript">// types/weather.ts
export type WeatherOverview = {
  publishingOffice: string;
  reportDatetime: string;
  targetArea: string;
  headlineText: string;
  text: string;
};
</code></pre>

<pre><code class="language-typescript">// api/weather.ts
import { WeatherOverview } from "../types/weather";

export async function getWeather(code: string): Promise&lt;WeatherOverview | null&gt; {
  const url = \`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/\${code}.json\`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(\`通信エラー: \${response.status}\`);
    return (await response.json()) as WeatherOverview;
  } catch (error) {
    console.error("取得失敗:", error);
    return null;
  }
}
</code></pre>

<p>
  関数の戻り値を <code>Promise&lt;WeatherOverview | null&gt;</code> とすることで、
  呼び出し元でも「nullの場合がある」ことを型レベルで表現できます。<br />
  これにより呼び出し側で <code>if (data === null) return;</code> のような安全なチェックが自然に書けるようになります。
</p>

<h2>まとめ</h2>
<p>
  APIレスポンスに型をつけることで、得られるメリットは主に2つです。
</p>
<ul>
  <li><strong>補完が効くようになる</strong> — プロパティ名のタイポをエディタが即座に検知してくれる</li>
  <li><strong>どんなデータが返るか明示できる</strong> — コードを読むだけで構造が分かるドキュメントとしても機能する</li>
</ul>
<p>
  最初から完璧な型定義を目指す必要はなく、まずは実際のJSONを <code>console.log()</code> で確認しながら
  使うプロパティだけ型をつけるところから始めるだけでも十分効果があります。
</p>
  `,
};