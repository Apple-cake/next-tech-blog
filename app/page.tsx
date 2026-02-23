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
        <div className="flex flex-col md:flex-row gap-10">
          {/* 記事一覧 */}
          <section id="articles" className="flex-1 min-w-0">
            <ArticleList
              articles={articles}
              title="新着記事"
            />
          </section>

          {/* サイドバー */}
          <aside className="w-full md:w-[260px] shrink-0">
            <div className="md:sticky md:top-12">
              <ProfileCard />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
