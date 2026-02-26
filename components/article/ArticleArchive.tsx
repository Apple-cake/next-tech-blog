/**
 * 記事一覧アーカイブ共通コンポーネント
 */

import ArticleList from "./ArticleList";
import Breadcrumb from "@/components/common/Breadcrumb";
import Sidebar from "@/components/layout/Sidebar";
import { Article } from "@/features/articles";

type Props = {
  title: string;
  articles: Article[];
};

export default function ArticleArchive({ title, articles }: Props) {
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
        </section>
        {/* サイドバー */}
        <Sidebar />
    </>
  );
}