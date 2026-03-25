import { MetadataRoute } from "next";
import { articles } from "@/features/articles";

export const dynamic = "force-static";
export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://usagi-blog.vercel.app";

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(
      article.updatedAt ?? article.publishedAt ?? new Date()
    ).toISOString(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tags`,
      lastModified: new Date(),
    },

    ...articleUrls,
  ];
}