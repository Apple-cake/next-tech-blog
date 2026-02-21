/**
 * RootLayout
 *
 * - 全ページ共通レイアウト
 * - SEOメタデータ定義
 * - グローバルスタイル適用
 */

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://usagi-blog.vercel.app"),
  title: {
    default: "Usagi Blog",
    template: "%s | Usagi Blog",
  },
  description: "Tech articles and engineering insights by Usagi.",
  alternates: {
    canonical: "https://usagi-blog.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Usagi Blog",
    description: "Tech articles and engineering insights by Usagi.",
    url: "https://usagi-blog.vercel.app",
    siteName: "Usagi Blog",
    type: "website",
    images: [
      {
        url: "/images/avatar.png",
        width: 1200,
        height: 630,
      },
    ],
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
          <div className="mx-auto max-w-6xl px-4 py-6">
            <h1 className="text-3xl font-bold">
              <Link
                href="/"
                className="hover:opacity-80 transition-opacity"
              >
                Usagi Blog
              </Link>
            </h1>
          </div>
        </header>

        {/* ページ内容 */}
        <main className="bg-zinc-50">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>

        {/* フッター */}
        <Footer />
      </body>
    </html>
  );
}
