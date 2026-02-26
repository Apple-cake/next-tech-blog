/**
 * プロフィールカード
 */

import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <section className="md:mt-0 mb-0" aria-labelledby="profile-heading">
      <div className="w-full md:max-w-xs p-5 card-base">

        {/* Avatar */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/avatar.svg"
            alt="プロフィール画像"
            width={90}
            height={90}
            className="rounded-full mb-0"
          />

          {/* 名前 */}
          <p id="profile-heading" className="text-xl font-semibold text-zinc-900">
            Ryo Aiba
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
            <Link
              href="https://github.com/RyoAiba"
              className="flex items-center transition-opacity"
            >
              <Image
                src="/github-logo.svg"
                alt="GitHub Logo"
                width={36}
                height={36}
                className="md:w-8 md:h-8"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
