/**
 * ヒーローセクション
 */

export default function HeroSection() {
  return (
    <section
      className="
        relative
        w-screen
        left-1/2
        -translate-x-1/2
        overflow-hidden
        pt-16
        pb-10
        md:pt-24
        md:pb-16
        md:mb-4
      "
    >
      {/* 背景 */}
      <div className="absolute inset-0 hero-gradient -z-10">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <h1 className="relative text-2xl md:text-5xl font-bold mb-2 leading-tight hero-heading">
            設計で、
          </h1>
          <h1 className="relative text-2xl md:text-5xl font-bold mb-6 leading-tight hero-heading">
            プロダクトは進化する。
          </h1>

          <p className="text-zinc-600 text-sm md:text-lg leading-relaxed">
            フロントエンド設計・TypeScript・Reactアーキテクチャを中心に、
            スケーラブルな開発の思考法を発信しています。
          </p>
        </div>
      </div>
    </section>
  );
}
