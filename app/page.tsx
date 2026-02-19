/**
 * Usagi Blog トップページ
 *
 * レスポンシブ2カラム構成
 * PC：記事一覧 + 右サイドバー
 * SP：縦並び（記事 → プロフィール）
 */

import ArticleList from "@/components/article/ArticleList";
import ProfileCard from "@/components/profile/ProfileCard";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-4
          gap-10
        "
      >
        {/* 記事一覧エリア */}
        <section className="lg:col-span-3">
          <ArticleList />
        </section>

        {/* サイドバー */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-12">
            <ProfileCard />
          </div>
        </aside>
      </div>
    </main>
  );
}
