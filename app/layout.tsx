/**
 * Root Layout
 *
 * Usagi Blog 全ページ共通レイアウト
 * SEOメタデータを設定
 */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Usagi Blog",
    template: "%s | Usagi Blog",
  },
  description: "Tech articles and engineering insights by Usagi.",
  openGraph: {
    title: "Usagi Blog",
    description: "Tech articles and engineering insights by Usagi.",
    url: "https://example.com",
    siteName: "Usagi Blog",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-zinc-50 text-zinc-900">
        {/* ヘッダー */}
        <header className="border-b bg-white">
          <div className="mx-auto max-w-4xl px-6 py-6">
            <h1 className="text-3xl font-bold">
              Usagi Blog
            </h1>
          </div>
        </header>

        {/* ページ内容 */}
        <main className="mx-auto max-w-4xl px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
