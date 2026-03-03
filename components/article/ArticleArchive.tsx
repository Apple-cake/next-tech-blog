/**
 * 記事一覧アーカイブ共通コンポーネント
 */

import Link from "next/link";
import ArticleList from "./ArticleList";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Sidebar from "@/components/layout/Sidebar";
import { Article } from "@/features/articles";

type Props = {
  title: string;
  articles: Article[];
  totalPages?: number;
  currentPage?: number;
  basePath?: string;
};

export default function ArticleArchive({ title, articles ,totalPages ,currentPage, basePath }: Props) {
  return (
    <>
        <section className="flex-1 min-w-0">
        {/* パンくず */}
        <Breadcrumb
            items={[
            { label: "Usagi Blog", href: "/" },
            { label: title },
            ]}
        />
        {/* 記事一覧 */}
        <ArticleList
            articles={articles}
            title={title}
        />
        {totalPages && totalPages > 1 && (
          <div className="flex gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              return (
                <Link
                  key={page}
                  href={`${basePath}?page=${page}`}
                  className={
                    page === currentPage
                      ? "px-3 py-1 bg-black text-white"
                      : "px-3 py-1 border"
                  }
                >
                  {page}
                </Link>
              );
            })}
          </div>
        )}
        </section>
        {/* サイドバー */}
        <Sidebar />
    </>
  );
}