import { Article } from "../index";

export const javascriptGetUserMedia: Article = {
  slug: "javascript-get-user-media",
  title: "getUserMediaでカメラにアクセスする方法を整理した",
  description:
    "navigator.mediaDevices.getUserMedia()を使ってカメラ・マイクにアクセスする基本実装を解説。constraintsオプションによる解像度・カメラ切り替えの設定方法も紹介します。",
  publishedAt: "2026.03.04",
  updatedAt: undefined,
  updatedAtTimestamp: undefined,
  tags: [
    { name: "JavaScript", slug: "javascript" },
  ],
  content: `
<p>
  ビデオ通話やQRコード読み取り、写真撮影など、ブラウザからカメラを操作したい場面は意外と多いです。<br />
  今回はそのために使う <code>getUserMedia()</code> の基本から、よく使うオプション設定まで整理します。
</p>

<h2>getUserMediaとは</h2>
<p>
  <code>navigator.mediaDevices.getUserMedia()</code> は、ユーザーのカメラやマイクにアクセスできるブラウザ標準のAPIです。<br />
  WebRTC（Web Real-Time Communication）の一部として定義されており、ビデオチャットや録画・撮影などに幅広く使われています。
</p>
<p>
  呼び出すとブラウザからユーザーに<strong>「カメラへのアクセスを許可しますか？」という許可ダイアログ</strong>が表示されます。<br />
  許可されれば映像ストリームが取得でき、拒否されればエラーになります。この許可の仕組みがあることで、無断でカメラを起動するようなことはできない設計になっています。
</p>
<p>
  なお、似た名前の <code>navigator.getUserMedia()</code>（接頭辞なし）は現在 <strong>非推奨（deprecated）</strong> です。<br />
  必ず <code>navigator.mediaDevices.getUserMedia()</code> を使いましょう。
</p>

<h2>基本的な実装</h2>
<p>
  まずはHTMLに映像を表示するための <code>&lt;video&gt;</code> 要素を用意します。<br />
  <code>autoplay</code> と <code>playsinline</code> を付けておくのが現代的な書き方です。<code>playsinline</code> はスマホで全画面にならないようにするための属性です。
</p>

<pre><code>&lt;video id="video" autoplay playsinline muted&gt;&lt;/video&gt;
</code></pre>

<p>
  続いて、JavaScriptでカメラにアクセスします。<code>getUserMedia()</code> はPromiseを返すので、<code>async/await</code> で書くのがすっきりします。
</p>

<pre><code>async function startCamera() {
  // 設定（カメラON・マイクOFF）
  const constraints = {
    video: true,
    audio: false,
  };

  try {
    // カメラにアクセスしてストリームを取得
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);

    // video要素にストリームをセット
    const video = document.getElementById("video");
    video.srcObject = mediaStream;
  } catch (err) {
    // 許可拒否・デバイスなしなど
    console.error("カメラへのアクセスに失敗しました:", err);
  }
}

startCamera();
</code></pre>

<p>
  <code>autoplay</code> 属性をHTMLに付けていれば、<code>video.play()</code> を明示的に呼ぶ必要はありません。<br />
  <code>srcObject</code> にストリームをセットするだけで自動的に再生が始まります。
</p>
<p>
  <code>catch</code> で受け取るエラーの種類は主に以下の3つです。把握しておくとデバッグが楽になります。
</p>
<ul>
  <li><strong>NotAllowedError</strong> — ユーザーが許可を拒否した</li>
  <li><strong>NotFoundError</strong> — カメラデバイスが見つからない</li>
  <li><strong>NotReadableError</strong> — カメラが他のアプリに占有されている</li>
</ul>

<h2>constraintsオプションの設定</h2>
<p>
  <code>getUserMedia()</code> の引数 <code>constraints</code> を使うと、解像度やカメラの向きなど細かい条件を指定できます。
</p>

<h3>解像度を指定する</h3>
<p>
  <code>video</code> にオブジェクトを渡すことで解像度を指定できます。<br />
  指定した解像度のカメラがデバイスに存在しない場合は、最も近い解像度にフォールバックされます。
</p>

<pre><code>const constraints = {
  audio: false,
  video: { width: 1280, height: 720 },
};
</code></pre>

<p>
  より細かく「最小・基準・最大」を指定したい場合は <code>min</code>・<code>ideal</code>・<code>max</code> が使えます。<br />
  <code>ideal</code> に最も近い解像度をブラウザが選んでくれます。
</p>

<pre><code>const constraints = {
  audio: false,
  video: {
    width:  { min: 640, ideal: 1280, max: 1920 },
    height: { min: 360, ideal: 720,  max: 1080 },
  },
};
</code></pre>

<h3>フロントカメラ・リアカメラを指定する</h3>
<p>
  スマホのようにカメラが前後にある場合、<code>facingMode</code> でどちらを使うか指定できます。
</p>

<pre><code>// フロントカメラ（インカメラ）
const constraints = {
  audio: false,
  video: { facingMode: "user" },
};

// リアカメラ（背面カメラ）
// exact を使うと「リアカメラが必ずある」前提になる。ない場合はエラーになるので注意
const constraints = {
  audio: false,
  video: { facingMode: { exact: "environment" } },
};
</code></pre>

<p>
  <code>exact</code> なしで <code>facingMode: "environment"</code> と書くと「できればリアカメラ、なければフロントでいい」という意味になります。<br />
  PCなどリアカメラがないデバイスでも動かしたい場合は <code>exact</code> を外した方が安全です。
</p>

<h3>デバイスIDで直接指定する</h3>
<p>
  最近のスマホはリアカメラが複数搭載されていることがあります。<br />
  そういった場合は <code>deviceId</code> でカメラを直接指定できます。
</p>
<p>
  デバイスID は <code>navigator.mediaDevices.enumerateDevices()</code> で取得できます。
</p>

<pre><code>// 接続されているビデオデバイスの一覧を取得
const devices = await navigator.mediaDevices.enumerateDevices();
const videoDevices = devices.filter((d) => d.kind === "videoinput");

// 取得したIDで指定
const constraints = {
  audio: false,
  video: { deviceId: { exact: videoDevices[0].deviceId } },
};
</code></pre>

<h2>注意点：HTTPSが必要</h2>
<p>
  <code>getUserMedia()</code> はユーザーのプライバシーに関わる強力なAPIのため、<strong>HTTPSのページ上でしか動作しません</strong>。<br />
  例外として <code>localhost</code> のみ HTTP でも動作します。本番環境へのデプロイ前にHTTPS設定を確認しておきましょう。
</p>

<h2>まとめ</h2>
<p>
  <code>getUserMedia()</code> を使えば、ライブラリなしでブラウザからカメラにアクセスできます。
</p>
<ul>
  <li><strong>基本は <code>async/await</code> + <code>try/catch</code></strong> でシンプルに書ける</li>
  <li><strong>constraints で解像度・カメラ方向・デバイスIDを細かく指定</strong>できる</li>
  <li><strong>本番環境はHTTPS必須</strong>。localhostのみHTTPが例外的に許可されている</li>
</ul>
  `,
};