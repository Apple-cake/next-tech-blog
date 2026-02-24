/**
 * サイト共通ヘッダー
 */

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-3 py-4 md:px-7">
        <h1 className="text-2xl font-bold">
          <Link
            href="/"
            className="flex items-center transition-opacity"
          >
            <Image
              src="/icon.svg"
              alt="Usagi Blog Logo"
              width={30}
              height={30}
              className="md:w-10 md:h-10"
            />
            Usagi Blog
          </Link>
        </h1>
      </div>
    </header>
  );
}
