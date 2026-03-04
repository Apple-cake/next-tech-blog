import { Article } from "../index";

export const javascriptAjaxPractice: Article = {
  slug: "javascript-ajax-practice",
  title: "気象庁APIで学ぶ、fetchとaxiosの実践的な使い方",
  description:
    "気象庁の公開APIを題材に、fetchとaxiosを使った非同期通信の実装を丁寧に解説します。eval()がNGな理由やエラーハンドリングの考え方も合わせて整理します。",
  publishedAt: "2026.02.23",
  tags: [
    { name: "JavaScript", slug: "javascript" },
  ],
  content: `
<p>
  前回の<a href="/articles/javascript-ajax">基本編</a>では、Ajaxの仕組みとfetch・axiosの概要を整理しました。<br />
  今回はその続きとして、実際に外部APIを叩いてデータを画面に表示するところまで実装してみます。
</p>
<p>
  題材は<strong>気象庁の公開API</strong>です。無料・登録不要で使えるので、Ajax の練習にちょうどいい素材です。<br />
  気象庁のデータを利用する際は<a href="https://www.jma.go.jp/jma/kishou/info/coment.html" target="_blank" rel="noreferrer noopener">利用規約</a>も確認しておいてください。
</p>

<h2>今回作るもの</h2>
<p>
  プルダウンで都道府県を選ぶと、気象庁のAPIから天気概況テキストを取得して画面に表示するUIです。<br />
  ページのリロードなしにデータが更新されるのが、Ajaxらしい動きです。
</p>

<h2>APIのURL構成を把握する</h2>
<p>
  気象庁が公開している天気概況のエンドポイントは以下の形式です。
</p>

<pre><code class="language-text">https://www.jma.go.jp/bosai/forecast/data/overview_forecast/{地域コード}.json
</code></pre>

<p>
  地域コードは<a href="https://www.jma.go.jp/bosai/forecast/" target="_blank" rel="noreferrer noopener">気象庁サイト</a>の各地域ページのURL末尾 <code>area_code=</code> の値で確認できます。<br />
  たとえば東京は <code>130000</code>、北海道は <code>011000</code>、大阪は <code>270000</code> です。
</p>

<h2>HTML — 画面側の実装</h2>
<p>
  プルダウンの選択が変わったタイミングで <code>getWeather()</code> 関数を呼び出し、取得した天気テキストを <code>#weather</code> に表示する構成です。
</p>

<pre><code class="language-html">&lt;select id="pref" onchange="getWeather(this.value)"&gt;
  &lt;option value="130000"&gt;東京&lt;/option&gt;
  &lt;option value="011000"&gt;北海道&lt;/option&gt;
  &lt;option value="270000"&gt;大阪&lt;/option&gt;
  &lt;option value="400000"&gt;福岡&lt;/option&gt;
  &lt;option value="471000"&gt;沖縄&lt;/option&gt;
&lt;/select&gt;
&lt;p&gt;天気予報：&lt;span id="weather"&gt;&lt;/span&gt;&lt;/p&gt;
</code></pre>

<p>
  <code>onchange</code> はプルダウンの選択が変わったときに発火するイベントです。<br />
  <code>this.value</code> で現在選択されている地域コードを取得し、関数の引数として渡しています。
</p>

<h2>fetch で実装する</h2>
<p>
  まずはライブラリなしの <code>fetch</code> で書いてみます。<br />
  <code>async/await</code> を組み合わせることで、非同期処理を上から順に読めるシンプルなコードになります。
</p>

<pre><code class="language-javascript">const getWeather = async (code) => {
  const url = \`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/\${code}.json\`;

  try {
    const response = await fetch(url);

    // fetch は404や500でも catch に落ちないため、明示的にチェックする
    if (!response.ok) {
      throw new Error(\`通信エラー: \${response.status}\`);
    }

    const data = await response.json();
    document.getElementById("weather").textContent = data.text;
  } catch (error) {
    console.error("天気の取得に失敗しました:", error);
    document.getElementById("weather").textContent = "データを取得できませんでした";
  }
};
</code></pre>

<h3>なぜ response.ok のチェックが必要なのか</h3>
<p>
  <code>fetch</code> は通信自体が成立している限り、サーバーが 404 や 500 を返しても <code>catch</code> に入りません。<br />
  「ページが見つかりませんでした」という応答でもエラーにならない、ということです。
</p>
<p>
  そのため <code>response.ok</code>（ステータスコードが 200〜299 のとき true になる）で明示的に確認し、
  問題があれば手動で <code>throw</code> するのが定番のパターンです。
</p>

<h3>eval() ではなく response.json() を使う理由</h3>
<p>
  古いコードでは <code>eval('(' + responseText + ')')</code> でJSONをパースしているものを見かけることがあります。<br />
  ただし <code>eval()</code> は渡した文字列を<strong>そのままJavaScriptとして実行</strong>してしまうため、
  悪意のあるデータが混入していた場合に任意のコードが動いてしまうリスクがあります。
</p>
<p>
  JSONのパースは <code>response.json()</code> または <code>JSON.parse()</code> を使うのが正しい書き方です。
  この2つはJSON形式以外の文字列が来たときにエラーを投げてくれるので、安全に扱えます。
</p>

<h2>axios で実装する</h2>
<p>
  同じ処理を <code>axios</code> で書くとこうなります。<br />
  CDNで導入する場合はHTMLに以下を追加してください。
</p>

<pre><code class="language-html">&lt;script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"&gt;&lt;/script&gt;
</code></pre>

<pre><code class="language-javascript">const getWeather = async (code) => {
  const url = \`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/\${code}.json\`;

  try {
    const { data } = await axios.get(url);
    document.getElementById("weather").textContent = data.text;
  } catch (error) {
    console.error("天気の取得に失敗しました:", error);
    document.getElementById("weather").textContent = "データを取得できませんでした";
  }
};
</code></pre>

<p>
  <code>fetch</code> と比べてかなりすっきりしました。<code>axios</code> には次のような自動処理が含まれているためです。
</p>
<ul>
  <li>404・500 などのHTTPエラーを自動で <code>catch</code> に流してくれる</li>
  <li>レスポンスのJSONパースが自動（<code>response.data</code> に中身が入っている）</li>
</ul>
<p>
  また、<code>axios.get(url)</code> のようにメソッドを外出しすることもできます。
  GETリクエストの場合はこちらの書き方のほうが短くなります。
</p>

<h2>fetch と axios の違いをまとめると</h2>
<p>
  実際に書き比べると違いが体感しやすいと思いますが、簡単に整理しておきます。
</p>

<table>
  <thead>
    <tr>
      <th></th>
      <th>fetch</th>
      <th>axios</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>導入</td>
      <td>不要（ブラウザ標準）</td>
      <td>CDN or npm が必要</td>
    </tr>
    <tr>
      <td>HTTPエラーの検知</td>
      <td>response.ok で手動チェック</td>
      <td>自動で catch に入る</td>
    </tr>
    <tr>
      <td>JSONのパース</td>
      <td>response.json() を明示的に呼ぶ</td>
      <td>自動（response.data に格納）</td>
    </tr>
    <tr>
      <td>コード量</td>
      <td>やや多め</td>
      <td>少なくてすむ</td>
    </tr>
  </tbody>
</table>

<p>
  小さなプロジェクトや「ライブラリを増やしたくない」場面は <code>fetch</code>、
  エラー処理を丁寧にしたい・複数のリクエストを扱う場面は <code>axios</code> が向いています。
</p>

<h2>まとめ</h2>
<p>
  実際にAPIを叩いてみると、Ajaxの非同期通信の感覚がかなりつかみやすくなります。
</p>
<ul>
  <li><strong>fetch</strong> はブラウザ標準で追加不要。<code>response.ok</code> のチェックを忘れずに</li>
  <li><strong>axios</strong> はHTTPエラーの自動検知とJSONパースが便利。コードが短くなる</li>
  <li><code>eval()</code> でのJSON変換はセキュリティ上NG。必ず <code>response.json()</code> か <code>JSON.parse()</code> を使う</li>
</ul>
<p>
  まずは気象庁APIで動かしてみて、取得したJSONの構造を <code>console.log(data)</code> で眺めてみるのがおすすめです。<br />
  次のステップとして、取得したデータに TypeScript の型をつける方法も別記事で解説しています。
</p>
  `,
};