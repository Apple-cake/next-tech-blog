import { Article } from "../index";

export const gitStashUsage: Article = {
  slug: "git-stash-usage",
  title: "ブランチ切り替えで焦る人のためのgit stash入門",
  description:
    "ブランチ作業中に現在の変更を一時退避するgit stashの基本的な使い方を初心者向けにわかりやすく解説します。",
  publishedAt: "2026.02.25",
  tags: [
    { name: "Git", slug: "git" },
  ],
  content: `
<h2>git stashとは？</h2>

<p>
<code>git stash</code>は、いま作業している変更内容を「一時的に引き出しにしまう」ためのコマンドです。<br />
まだコミットしたくない変更を、いったん安全な場所に避難させるイメージです。
</p>

<p>
たとえば作業途中で「別ブランチの修正お願い！」と言われたとします。<br />
そのままだとブランチを切り替えられませんが、stashすればサッと退避できます。
</p>

<p>
つまりgit stashは、「今はまだ保存しないけど消したくもない」というワガママを叶えてくれるコマンドです。</p>

<h2>よくある利用シーン</h2>

<ul>
<li>作業途中で別ブランチの修正が必要になった</li>
<li>pullする前に変更を一旦退避したい</li>
<li>実験的な変更をあとで見返せるようにしておきたい</li>
</ul>

<p>
初心者のうちは「コミットすればいいのでは？」と思いがちです。<br />
でも未完成のコードを履歴に残したくないとき、stashが本領発揮します。
</p>

<h2>変更を退避する</h2>

<p>いちばん基本のコマンドはこちらです。</p>

<pre><code>$ git stash</code></pre>
<p>
これで現在の変更がまるごと退避され、作業ディレクトリがきれいな状態に戻ります。
</p>

<p>新規ファイルも含めて退避したい場合は<code>-u</code>を使います。</p>

<pre><code>$ git stash -u</code></pre>
<p>
デフォルトでは未追跡ファイルは含まれないので注意しましょう。
</p>

<p>ステージ済みの変更は残しておきたい場合は<code>-k</code>を使います。</p>

<pre><code>$ git stash -k</code></pre>
<p>
「addしたものはそのまま、まだの変更だけ退避」という動きになります。
</p>

<p>メッセージをつけると後から分かりやすくなります。</p>

<pre><code>$ git stash push -m "登録機能の途中実装"</code></pre>
<p>
stashは溜まっていくので、何の作業だったか書いておくと安心です。
</p>

<h2>スタッシュ一覧を確認する</h2>

<pre><code>$ git stash list</code></pre>
<p>
保存したstashが<code>stash@{0}</code>のような形で表示されます。
</p>

<h2>スタッシュの内容を確認する</h2>

<pre><code>$ git stash show stash@{0}
$ git stash show -p stash@{0}</code></pre>
<p>
<code>-p</code>を付けると差分まで確認できます。<br />
「あれ何退避したんだっけ？」となったときに便利です。
</p>

<h2>スタッシュを戻す</h2>

<h3>削除しながら戻す（pop）</h3>

<pre><code>$ git stash pop
$ git stash pop stash@{0}</code></pre>
<p>
適用と同時にstashを削除します。<br />
基本的にはこちらを使うことが多いです。
</p>

<h3>削除せず戻す（apply）</h3>

<pre><code>$ git stash apply
$ git stash apply stash@{0}</code></pre>
<p>
内容だけ復元してstashは残します。<br />
「念のため取っておきたい」ときはこちらです。
</p>

<h2>スタッシュから新しいブランチを作る</h2>

<p>
退避内容を安全に検証したいときは、新しいブランチを切って復元できます。<br />
既存ブランチを汚さず試せるので安心です。
</p>

<pre><code>$ git stash branch new-branch-name stash@{0}</code></pre>

<h2>特定ファイルだけstashする</h2>

<pre><code>$ git stash push path/to/file</code></pre>
<p>
全部ではなく一部だけ退避することも可能です。<br />
細かくコントロールしたいときに使えます。
</p>

<h2>スタッシュを削除する</h2>

<pre><code>$ git stash drop stash@{0}
$ git stash clear</code></pre>
<p>
<code>clear</code>は全削除なので注意してください。<br />
取り返しがつかなくなる可能性があります。
</p>

<h2>コンフリクトが発生した場合</h2>

<p>
<code>pop</code>や<code>apply</code>時にコンフリクトが起きることがあります。<br />
その場合は通常のmergeと同じように修正して解決します。
</p>

<h2>stashが消えた場合</h2>

<p>
誤って削除しても、reflogから復元できるケースがあります。<br />
完全に終わったと諦める前に確認してみましょう。
</p>

<pre><code>$ git reflog</code></pre>
<p>
そこから該当コミットを探してcheckoutできます。
</p>

<h2>まとめ</h2>

<p>
<code>git stash</code>は、作業の柔軟性を一気に高めてくれるコマンドです。<br />
仕組みを理解しておけば、ブランチ切り替えで焦ることはほぼなくなります。
</p>

<p>
まずは基本の<code>git stash</code>と<code>git stash pop</code>だけ覚えておけばOKです。<br />
慣れてきたらオプションを少しずつ使っていきましょう。
</p>
`
};