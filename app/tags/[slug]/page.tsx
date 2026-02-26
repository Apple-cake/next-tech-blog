/**
 * タグ別一覧ページ
 */

import ArticleArchive from "@/components/article/ArticleArchive";
import { getArticlesByTag } from "@/features/articles";
import { tags } from "@/lib/tags";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const articles = getArticlesByTag(slug);
  const tagInfo = tags.find((t) => t.slug === slug);
  const label = tagInfo?.name ?? slug;

  return (
    <main className="max-w-7xl mx-auto px-6 md:pl-10 md:pr-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <ArticleArchive
          title={`# ${label} の記事`}
          articles={articles}
        />
      </div>
    </main>
  );
}