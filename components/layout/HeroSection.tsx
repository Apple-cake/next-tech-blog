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
        pt-12
        pb-6
        md:pt-24
        md:pb-10
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
          <blockquote className="relative mb-4 md:mb-8">
            <span className="absolute -left-2 -top-2 md:-left-6 md:-top-6 text-6xl md:text-[140px] text-zinc-200 font-serif select-none">
              ”
            </span>
            <h1 className="text-2xl md:text-6xl font-bold leading-tight  italic tracking-tight hero-heading">
              Design is how it works.
            </h1>
          </blockquote>

          <p className="text-zinc-600 text-sm md:text-lg leading-relaxed">
            UI設計・TypeScriptを中心に、<br/>
            技術的な気づきや備忘録をまとめています。
          </p>
        </div>
      </div>
    </section>
  );
}
