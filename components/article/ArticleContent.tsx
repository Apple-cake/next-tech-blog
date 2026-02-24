"use client";

/**
 * 記事本文
 */

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

type Props = {
  content: string;
};

export default function ArticleContent({ content }: Props) {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  }, []);

  return (
    <div
      className="prose prose-zinc prose-pre:overflow-x-auto prose-pre:p-4 prose-pre:rounded-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}