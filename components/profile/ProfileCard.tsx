/**
 * プロフィールカード
 */

import Image from "next/image";

export default function ProfileCard() {
  return (
    <section className="mt-16 lg:mt-0" aria-labelledby="profile-heading">
      <div className="w-full md:max-w-xs rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">

        {/* Avatar */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/images/avatar.png"
            alt="プロフィール画像"
            width={80}
            height={80}
            className="rounded-full mb-4"
          />

          {/* Name */}
          <h2 id="profile-heading" className="text-xl font-semibold text-zinc-900">
            Usagi
          </h2>

          {/* Role */}
          <p className="text-sm text-zinc-500 mb-4">
            フロントエンドエンジニア / ブログ運営
          </p>

          {/* Bio */}
          <p className="text-sm text-zinc-600 leading-relaxed">
            Next.js・TypeScript・Firebaseを中心に、
            実務で得た知見や設計ノウハウを発信しています。
            スケーラブルで保守性の高いプロダクト開発が得意です。
          </p>

          {/* Links */}
          <div className="flex gap-4 mt-4">
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
