"use client";

/**
 * Usagi Blog トップページ
 */

import Link from "next/link";
import { useMemo, useState } from "react";
import ArticleList from "@/components/article/ArticleList";
import HeroSection from "@/components/layout/HeroSection";
import Sidebar from "@/components/layout/Sidebar";
import { getAllArticles } from "@/features/articles";

type TabKey = "latest" | "react" | "typescript" | "css";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("latest");

  // ==========================
  // タブ定義
  // ==========================
  const tabs: { key: TabKey; label: string }[] = [
    { key: "latest", label: "新着" },
    { key: "react", label: "React" },
    { key: "typescript", label: "TypeScript" },
    { key: "css", label: "CSS" },
  ];

  // ==========================
  // フィルタロジック
  // ==========================
  const articles = getAllArticles();
  const filteredArticles = useMemo(() => {
    const base =
      activeTab === "latest"
        ? articles
        : articles.filter((article) =>
          article.tags.some((tag) => tag.slug === activeTab)
        );

    return base.slice(0, 5); // 最大5件
  }, [activeTab]);

  return (
    <>
      {/* ヒーローセクション */}
      <HeroSection />
      {/* コンテンツエリア */}
      <div className="max-w-7xl mx-auto px-6 md:pl-10 md:pr-4 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full pb-4 border-b border-zinc-200 md:pb-0 md:border-none">
            {/* タブUI */}
            <div className="flex gap-4 md:gap-8 border-b border-zinc-200">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`
                      px-2 pb-2 text-sm md:text-lg transition-colors
                      ${isActive
                        ? "border-b-2 border-[var(--brand-500)] text-zinc-900 font-semibold"
                        : "text-zinc-400 hover:text-zinc-900"
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {/* 記事一覧 */}
            <section id="articles" className="flex-1 min-w-0">
              <ArticleList
                articles={filteredArticles}
                title=""
              />
              {/* もっと見る */}
              <div className="mt-8 text-right">
                <Link
                  href={
                    activeTab === "latest"
                      ? "/articles"
                      : `/tags/${activeTab}`
                  }
                  className="
                    text-sm
                    font-medium
                    text-[var(--brand-500)]
                    hover:underline
                  "
                >
                  {activeTab === "latest"
                    ? "すべての記事を見る →"
                    : `${tabs.find(t => t.key === activeTab)?.label}の記事をすべて見る →`}
                </Link>
              </div>
            </section>
          </div>
          {/* サイドバー */}
          <Sidebar />
        </div>
      </div>
    </>
  );
}
