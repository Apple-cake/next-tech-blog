import { Article } from "../index";

export const temp: Article = {
  slug: "url",
  title: "タイトル",
  description:
    "説明",
  publishedAt: "2026.02.15",
  tags: [
    { name: "TypeScript", slug: "typescript" },
  ],
  content: `
    <h2>見出し</h2>
    <p>
      本文
    </p>
  `,
};
