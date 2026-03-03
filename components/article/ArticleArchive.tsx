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
  function getPaginationPages(totalPages: number, currentPage: number) {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // 先頭付近
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages - 1);
      pages.push(totalPages);
    }

    // 末尾付近
    else if (currentPage >= totalPages - 2) {
      pages.push(1);
      pages.push(2);
      pages.push("...");
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    // 中央
    else {
      pages.push(1);
      pages.push("...");

      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages.push(i);
      }

      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  }
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
        {totalPages && totalPages > 1 && currentPage && basePath && (
          <div className="flex gap-1 md:mx-4 mt-8 justify-center flex-wrap">
            {getPaginationPages(totalPages, currentPage).map((page, i) => {
              const newPage = `${page}-${i}`;
              if (page === "...") {
                return (
                  <span key={newPage} className="py-1 text-zinc-400">
                    …
                  </span>
                );
              }
              const baseClass = "text-center px-1 w-8 mx-0.25 md:w-9 py-0.75 md:py-1 rounded-md border";
              return (
                <Link
                  key={newPage}
                  href={`${basePath}?page=${page}`}
                  className={`${baseClass} ${
                    page === currentPage
                      ? "border-[var(--brand-500)] bg-[var(--brand-500)] text-white"
                      : "border-zinc-300 hover:bg-zinc-200 text-zinc-700"
                  }`}
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