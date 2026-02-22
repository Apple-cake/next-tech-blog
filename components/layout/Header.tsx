/**
 * サイト共通ヘッダー
 */

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="text-3xl font-bold">
          <Link
            href="/"
            className="transition-opacity"
          >
            Usagi Blog
          </Link>
        </h1>
      </div>
    </header>
  );
}
