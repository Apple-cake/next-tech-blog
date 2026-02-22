/**
 * Usagi Blog トップページ
 *
 * レスポンシブ2カラム構成
 * PC：記事一覧 + 右サイドバー
 * SP：縦並び（記事 → プロフィール）
 */

import ArticleList from "@/components/article/ArticleList";
import HeroSection from "@/components/layout/HeroSection";
import ProfileCard from "@/components/profile/ProfileCard";
import { articles } from "@/lib/articles";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <HeroSection />
      {/* コンテンツエリア */}
      <div className="max-w-7xl mx-auto px-6 md:pl-10 md:pr-4 py-10">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-4
            gap-10
          "
        >
          {/* 記事一覧 */}
          <section id="articles" className="md:col-span-3">
            <ArticleList
              articles={articles}
              title="新着記事"
            />
          </section>

          {/* サイドバー */}
          <aside className="md:col-span-1">
            <div className="md:sticky md:top-12">
              <ProfileCard />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
