/**
 * Usagi Blog トップページ
 */

import HomeClient from "@/components/home/HomeClient";
import HeroSection from "@/components/home/HeroSection";
import Sidebar from "@/components/layout/Sidebar";
import { articles } from "@/features/articles";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <HeroSection />
      {/* コンテンツエリア */}
      <div className="max-w-7xl mx-auto px-6 md:pl-10 md:pr-4 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          <HomeClient articles={articles} />
          {/* サイドバー */}
          <Sidebar />
        </div>
      </div>
    </>
  );
}
