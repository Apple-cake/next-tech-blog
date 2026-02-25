"use client";

/**
 * Usagi Blog トップページ
 */

import { useMemo, useState } from "react";
import ArticleList from "@/components/article/ArticleList";
import HeroSection from "@/components/layout/HeroSection";
import Sidebar from "@/components/layout/Sidebar";
import { articles } from "@/lib/articles";

type TabKey = "latest" | "react" | "typescript" | "design";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("latest");

  // ==========================
  // タブ定義
  // ==========================
  const tabs: { key: TabKey; label: string }[] = [
    { key: "latest", label: "新着" },
    { key: "react", label: "React" },
    { key: "typescript", label: "TypeScript" },
    { key: "design", label: "設計" },
  ];

  // ==========================
  // フィルタロジック
  // ==========================
  const filteredArticles = useMemo(() => {
    if (activeTab === "latest") {
      return articles;
    }

    return articles.filter((article) =>
      article.tags.some((tag) => tag.slug === activeTab)
    );
  }, [activeTab]);
  return (
    <>
      {/* ヒーローセクション */}
      <HeroSection />
      {/* コンテンツエリア */}
      <div className="max-w-7xl mx-auto px-6 md:pl-10 md:pr-4 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full">
            {/* タブUI */}
            <div className="flex gap-6 border-b border-zinc-200">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`
                      pb-3 text-sm md:text-base transition-colors
                      ${
                        isActive
                          ? "border-b-2 border-[var(--color-primary)] text-zinc-900 font-semibold"
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
            </section>
          </div>
          {/* サイドバー */}
          <Sidebar />
        </div>
      </div>
    </>
  );
}
