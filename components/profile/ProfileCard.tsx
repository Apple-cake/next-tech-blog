/**
 * プロフィールカード
 */

import Image from "next/image";

export default function ProfileCard() {
  return (
    <section className="md:mt-0 mb-0" aria-labelledby="profile-heading">
      <div className="w-full md:max-w-xs rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">

        {/* Avatar */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/images/avatar.png"
            alt="プロフィール画像"
            width={80}
            height={80}
            className="rounded-full mb-4"
          />

          {/* 名前 */}
          <p id="profile-heading" className="text-xl font-semibold text-zinc-900">
            Usagi
          </p>

          {/* 肩書き */}
          <p className="text-sm text-zinc-500 mb-4">
            フロントエンドエンジニア
          </p>

          {/* コメント */}
          <p className="text-sm text-zinc-600 leading-relaxed">
            Vue / React / TypeScript
            <br />
            UI設計やデザイン実装が好きです。
          </p>

          {/* 外部リンク */}
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              Twitter
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
