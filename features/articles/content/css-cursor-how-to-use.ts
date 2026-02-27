import { Article } from "../index";

export const cssCursorHowToUse: Article = {
  slug: "css-cursor-how-to-use",
  title: "【CSS】cursorの使い方とカーソルを変える方法、地味だけど超大事",
  description:
    "CSSのcursorプロパティの基本的な使い方を解説します。pointerやtextなどよく使う値を中心に、ユーザビリティを高める考え方もあわせて紹介します。",
  publishedAt: "2026.02.27",
  tags: [
    { name: "CSS", slug: "css" },
    { name: "UI", slug: "ui" },
  ],
  content: `
    <p>
      CSSの<code>cursor</code>プロパティは、
      <strong>マウスカーソルを要素に当てたときのカーソルの形状を変更できるプロパティ</strong>です。
    </p>

    <p>
      たとえば画像やボタンにリンクを設定したとき、
      カーソルが指先アイコン（pointer）に変わると
      「あ、ここ押せるんだな」と直感的に伝わります。
    </p>

    <p>
      こういう小さな配慮の積み重ねが、UIの分かりやすさを大きく左右します。
      正直かなり地味ですが、めちゃくちゃ大事です。
    </p>

    <h2>cursorの基本的な使い方</h2>

    <p>
      使い方はとてもシンプルです。
      カーソルを変更したい要素に対して
      <code>cursor: 値;</code>を指定します。
    </p>

    <pre><code>button {
  cursor: pointer;
}</code></pre>

    <p>
      上記の例では、ボタンにマウスを乗せたとき
      指先アイコン（pointer）に変わります。
    </p>

    <p>
      <code>p</code>タグや<code>div</code>タグ、
      <code>label</code>タグなど、さまざまな要素に適用できます。
    </p>

    <h2>よく使うcursorの値</h2>

    <p>
      cursorには多くの値がありますが、
      実務でよく使うのはそこまで多くありません。
    </p>

    <ul>
      <li><strong>auto</strong>（初期値）</li>
      <li><strong>default</strong></li>
      <li><strong>pointer</strong></li>
      <li><strong>text</strong></li>
      <li><strong>none</strong></li>
      <li><strong>move</strong></li>
      <li><strong>wait</strong></li>
      <li><strong>not-allowed</strong></li>
    </ul>

    <p>
      特に<strong>pointer</strong>は頻出です。
      クリックできる要素には、必ずと言っていいほど使われます。
    </p>

    <h2>UI目線での注意点</h2>

    <p>
      見た目だけボタン風にして、
      cursorを変更していないケースをよく見かけます。
    </p>

    <p>
      その状態だと、ユーザーは
      「押せるのかどうか」が一瞬で判断できません。
    </p>

    <p>
      デザインと挙動を一致させること。
      これがUI設計では非常に重要です。
    </p>

    <p>
      また、対応していない値を指定した場合は
      初期値（auto）で表示されます。
      ブラウザごとの挙動は必ず確認しましょう。
    </p>

    <h2>まとめ</h2>

    <p>
      cursorプロパティは小さなプロパティですが、
      ユーザビリティに直結する重要な要素です。
    </p>

    <p>
      「どういう操作ができるのか」を
      直感的に伝えられるUIを意識してみてください。
      その一歩が、完成度を確実に上げます。
    </p>
  `,
};