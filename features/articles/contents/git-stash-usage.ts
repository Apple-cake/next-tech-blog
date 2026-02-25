import { Article } from "../index";

export const gitStash: Article = {
  slug: "git-stash-usage",
  title: "Git stash の使い方完全ガイド",
  description:
    "ブランチ作業中に現在の変更を一時退避するgit stashの基本的な使い方を解説します。",
  publishedAt: "2026.02.25",
  tags: [
    { name: "Git", slug: "git" },
  ],
  content: `
<h2>git stashとは？</h2>

<p>
<code>git stash</code>は、現在の作業内容を一時的に退避するためのコマンドです。<br>
ブランチを切り替えたいときや、急ぎの修正対応が発生したときに活躍します。
</p>

<p>
「まだコミットしたくない」「でも変更は一旦退避したい」という状況で非常に便利です。
</p>

<h2>よくある利用シーン</h2>

<ul>
<li>作業途中で別ブランチの修正が必要になった</li>
<li>Pullする前に一時退避したい</li>
<li>実験的な変更を一旦退避したい</li>
</ul>

<h2>変更を退避する</h2>

<pre><code>$ git stash</code></pre>

<p>新規ファイルも退避する場合は<code>-u</code>オプションをつけます。</p>

<pre><code>$ git stash -u</code></pre>

<p>ワーキングツリー（not staged）の変更だけを退避する場合は<code>-k</code>オプションをつけます。</p>

<pre><code>$ git stash -k</code></pre>

<p>メッセージを指定することもできます。</p>

<pre><code>$ git stash push -m "登録機能の途中実装"</code></pre>

<h2>スタッシュ一覧を確認する</h2>

<pre><code>$ git stash list</code></pre>

<h2>スタッシュの内容を確認する</h2>

<pre><code>$ git stash show stash@{0}
$ git stash show -p stash@{0}</code></pre>

<p>
<code>-p</code>を付けると差分まで確認できます。
</p>

<h2>スタッシュを戻す</h2>

<h3>削除しながら戻す（pop）</h3>

<pre><code>$ git stash pop
$ git stash pop stash@{0}</code></pre>

<h3>削除せず戻す（apply）</h3>

<pre><code>$ git stash apply
$ git stash apply stash@{0}</code></pre>

<h2>スタッシュから新しいブランチを作成する</h2>

<p>
退避内容を安全に復元したい場合は、ブランチを切って適用できます。
</p>

<pre><code>$ git stash branch new-branch-name stash@{0}</code></pre>

<h2>特定ファイルだけstashする</h2>

<pre><code>$ git stash push path/to/file</code></pre>

<h2>スタッシュを削除する</h2>

<pre><code>$ git stash drop stash@{0}
$ git stash clear</code></pre>

<p>
<code>clear</code>は全削除なので注意してください。
</p>

<h2>コンフリクトが発生した場合</h2>

<p>
<code>pop</code>や<code>apply</code>時にコンフリクトが発生することがあります。
その場合は通常のmergeと同じように解消します。
</p>

<h2>stashが消えた場合</h2>

<p>
誤って削除した場合でも、reflogから復元できることがあります。
</p>

<pre><code>$ git reflog</code></pre>

<p>
そこから該当コミットを探し、checkoutできます。
</p>

<h2>まとめ</h2>

<p>
<code>git stash</code>は、作業効率を大きく向上させるコマンドです。
正しく理解して使うことで、ブランチ運用がより安全になります。
</p>
`
};