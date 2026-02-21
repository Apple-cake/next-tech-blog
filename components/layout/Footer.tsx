/**
 * Footer.tsx
 *
 * サイト共通フッター
 */

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

        {/* 上部リンク */}
        <div className="mb-8 text-xs text-zinc-600">
          <Link
            href="/privacy"
            className="hover:underline"
          >
            プライバシーポリシー
          </Link>

          <span className="mx-4">|</span>

          <Link
            href="/contact"
            className="hover:underline"
          >
            お問い合わせ
          </Link>
        </div>

        {/* サイト説明 */}
        <p className="text-xs text-zinc-600 mb-2">
          初心者プログラマーによる日々の学びを発信するサイト
        </p>

        {/* タイトル */}
        <h2 className="text-3xl font-bold mb-4">
          Usagi Blog
        </h2>

        {/* コピーライト */}
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Usagi Blog
        </p>
      </div>
    </footer>
  );
}