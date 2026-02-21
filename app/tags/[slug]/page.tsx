import { articles } from "@/lib/articles";
import { tags } from "@/lib/tags";
import ArticleList from "@/components/article/ArticleList";

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
    <ArticleList
      articles={filtered}
      title={`# ${label} の記事`}
    />
  );
}