/**
 * タグ別一覧ページ
 */

import { articles } from "@/lib/articles";
import { tags } from "@/lib/tags";
import ArticleList from "@/components/article/ArticleList";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProfileCard from "@/components/profile/ProfileCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function TagPage({ params }: Props) {
  const { slug } = await params;

  const tagInfo = tags.find((t) => t.slug === slug);
  const label = tagInfo?.name ?? slug;

  const filtered = articles.filter((article) =>
    article.tags.some((tag) => tag.slug === slug)
  );

  return (
    <main className="max-w-7xl mx-auto px-6 md:pl-10 md:pr-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <section className="flex-1 min-w-0">
          {/* パンくず */}
          <Breadcrumb
            items={[
              { label: "Usagi Blog", href: "/" },
              { label: `# ${label} の記事` },
            ]}
          />
          {/* 記事一覧 */}
          <ArticleList
            articles={filtered}
            title={`# ${label} の記事`}
          />
        </section>
        {/* サイドバー */}
        <aside className="w-full md:w-[260px] shrink-0">
          <div className="md:sticky md:top-12">
            <ProfileCard />
          </div>
        </aside>
      </div>
    </main>
  );
}