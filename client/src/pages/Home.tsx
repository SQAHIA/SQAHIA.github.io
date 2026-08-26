/**
 * SQAHIA Digital / Directional Spectrum
 * The official blue-to-cyan logo informs a forward-moving, luminous UI layered over the editorial information system.
 */
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Circle,
  Menu,
  MoveRight,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  { number: "01", title: "Software", ja: "ソフトウェアをつくる", description: "OS、システム、アプリケーション、開発基盤を通じて、自社プロダクトの体験を支える技術を育てます。", points: ["OS・システムソフトウェア", "開発ツール・技術基盤", "API・開発支援技術"] },
  { number: "02", title: "AI & Intelligence", ja: "知性の仕組みを研究する", description: "Heraklionを含むAI・LLM・エージェント研究を通じて、創作と開発を支える新しい知性の形を探ります。", points: ["AI・LLMプロジェクト", "エージェントアーキテクチャ", "研究開発・検証"] },
  { number: "03", title: "Gaming & Entertainment", ja: "遊びと表現をつくる", description: "ゲーム、ストーリーメーカー、デジタルコンテンツを通じて、参加者が想像を広げられる体験をつくります。", points: ["Project：TBL", "Heraix IGRAC構想", "ゲーム・デジタルコンテンツ"] },
  { number: "04", title: "Digital Platform", ja: "プラットフォームを育てる", description: "プロダクト、コミュニティー、Runtime、ストアをつなぎ、自社の技術と作品が循環する場を設計します。", points: ["HeraixOS Kub", "Runtime・Platform", "研究とプロダクトの接続"] },
];

const productSignals = [
  ["01", "HeraixOS Kub", "A computing platform by SQAHIA Digital.", "/products/heraixos", "PREPARING"],
  ["02", "Heraix IGRAC", "Create / Play / Publish のためのプラットフォーム構想。", "/products/heraix-igrac", "FUTURE PLAN"],
  ["03", "Heraklion", "AI / LLMの研究開発プロジェクト。", "/products/heraklion", "R&D"],
];

const process = [
  ["01", "Listen", "背景と現在地を理解する"],
  ["02", "Frame", "課題を整理し、優先順位を定める"],
  ["03", "Make", "納得できる形に、丁寧に実装する"],
  ["04", "Learn", "運用から学び、次の改善につなげる"],
];

const growthStages = [
  ["アイデア", "ガレージ制度", "社員がアイデアを提案・簡易企画化", "1～3人", "0～50万円程度", "アイデアシート", "試作"],
  ["試作", "ガレージ制度", "プロトタイプ制作・ユーザー検証", "3～5人", "50～300万円程度", "試作品・検証結果", "プロジェクト化"],
  ["プロジェクト化", "ガレージ → プロジェクト", "市場性・実現性を検証し、事業計画を作成", "5～10人", "300～1,000万円程度", "PoC・事業計画", "スタジオ化候補"],
  ["スタジオ化", "スタジオ制", "正式なスタジオを設立し、継続的に制作・運営", "10～50人", "数千万円～", "製品・サービス", "成長"],
  ["成長", "スタジオ制", "人員・予算を増やし事業を拡大", "20～100人", "事業規模に応じて", "売上・利益・利用者評価等", "再評価"],
  ["再評価", "サンセット・ルール", "定期的に成果・将来性・組織状態を評価", "―", "―", "継続・再編・終了判断", "継続・再編・終了"],
  ["継続・再編・終了", "サンセット・ルール", "継続、縮小、他スタジオとの統合、終了を決定", "―", "―", "人員・予算・設備を再配分", "新しい挑戦へ"],
];

const navItems = [
  ["ABOUT", "/about"],
  ["BUSINESS", "/business"],
  ["PRODUCTS", "/products"],
  ["TECH", "/technology"],
  ["RESEARCH", "/research"],
  ["QA", "/qa-security"],
  ["DOWNLOADS", "/downloads"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f6f3ec] text-[#121416] selection:bg-[#1748e8] selection:text-white">
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#121416]/10 bg-[#f6f3ec]/94 shadow-[0_8px_26px_rgba(18,20,22,0.05)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="SQAHIA Digital トップへ">
            <img
              src="/manus-storage/sqahia-logo-official_8e289d78.png"
              alt=""
              className="official-logo h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="brand-lockup leading-none">
              <span className="block font-display text-[15px] font-bold tracking-[-0.05em]">SQAHIA</span>
              <span className="mt-1 block font-mono text-[8px] font-medium tracking-[0.2em] text-[#121416]/55">DIGITAL</span>
            </div>
          </a>

          <nav className="hidden items-center gap-4 xl:gap-5 lg:flex" aria-label="メインナビゲーション">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="nav-link font-mono text-[11px] tracking-[0.1em] text-[#121416]/75">
                {label}
              </a>
            ))}
            <a href="/contact" className="action-link inline-flex items-center gap-2 bg-[#1748e8] px-4 py-3 font-mono text-[10px] font-medium tracking-[0.1em] text-white">
              CONTACT <ArrowUpRight size={13} strokeWidth={2.2} />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center border border-[#121416]/15 bg-[#f6f3ec] text-[#121416] lg:hidden"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#121416]/10 bg-[#f6f3ec] px-5 pb-6 pt-3 shadow-lg lg:hidden" aria-label="モバイルナビゲーション">
            {navItems.map(([label, href], index) => (
              <a key={label} href={href} onClick={closeMenu} className="flex items-center justify-between border-b border-[#121416]/10 py-4 font-display text-xl font-semibold">
                <span><span className="mr-3 font-mono text-[10px] text-[#1748e8]">0{index + 1}</span>{label}</span>
                <ChevronRight size={18} />
              </a>
            ))}
            <a href="/contact" onClick={closeMenu} className="mt-5 flex items-center justify-between bg-[#1748e8] px-4 py-4 font-mono text-xs tracking-[0.1em] text-white">
              CONTACT <ArrowUpRight size={15} />
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="home-hero relative min-h-[760px] overflow-hidden pt-[72px] lg:min-h-[800px]">
          <div className="absolute inset-0 bg-[url('/manus-storage/sqahia-hero_f993646d.jpg')] bg-cover bg-[center_right]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6f3ec] via-[#f6f3ec]/92 to-[#f6f3ec]/10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f6f3ec] to-transparent" />
          <div className="absolute inset-0 bg-grain opacity-[0.15]" />
          <div className="directional-ray absolute -right-[12%] top-[11%] h-[14%] w-[62%] rotate-[-42deg]" aria-hidden="true" />

          <div className="relative mx-auto flex min-h-[688px] max-w-[1440px] flex-col justify-end px-5 pb-12 sm:px-8 sm:pb-16 lg:min-h-[728px] lg:px-12 lg:pb-20">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="max-w-[850px]">
              <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
                <span className="block h-2.5 w-2.5 rounded-full bg-[#1748e8]" />
                <p className="font-mono text-[10px] font-medium tracking-[0.17em] text-[#121416]/65 sm:text-[11px]">DIGITAL ENTERTAINMENT &amp; TECHNOLOGY / JAPAN</p>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-display text-[clamp(3.45rem,8.3vw,8.4rem)] font-bold leading-[0.88] tracking-[-0.075em] text-[#121416]">
                <span className="text-[#1748e8]">新たなエンタメ</span>と<br />
                技術を作り出す
              </motion.h1>
              <motion.div variants={fadeUp} className="mt-8 grid max-w-xl gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-[360px] text-[14px] leading-7 text-[#121416]/74 sm:text-[15px]">
                  SQAHIA Digitalは、エンターテイメントを主に行いながら、ソフトウェアの開発やSPDEによるデータ収集にも取り組む団体です。
                </p>
                <a href="#services" className="group inline-flex w-fit items-center gap-3 border-b border-[#121416] pb-2 font-mono text-[11px] font-medium tracking-[0.1em] transition-colors hover:border-[#1748e8] hover:text-[#1748e8]">
                  WHAT WE DO <MoveRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.6 }} className="mt-12 grid grid-cols-2 border-t border-[#121416]/15 pt-4 sm:mt-16 sm:grid-cols-4">
              {["ENTERTAINMENT", "SOFTWARE", "RESEARCH", "FUTURE"].map((word, index) => (
                <div key={word} className="flex items-center gap-2 border-r border-[#121416]/15 px-3 first:pl-0 last:border-r-0 sm:px-4">
                  <span className="font-mono text-[9px] text-[#1748e8]">0{index + 1}</span>
                  <span className="font-mono text-[9px] tracking-[0.08em] text-[#121416]/55">{word}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="about" className="relative border-y border-[#121416]/12 bg-[#f6f3ec] py-20 sm:py-28 lg:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
            <div className="lg:col-span-3">
              <p className="section-kicker"><span>01</span> ABOUT SQAHIA</p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <p className="max-w-4xl font-display text-[clamp(2rem,4.2vw,4.4rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[#121416]">
                エンターテインメントと技術で、<span className="relative whitespace-nowrap"><i className="relative z-10 not-italic">まだない体験を、</i><span className="absolute inset-x-0 bottom-[8%] -z-0 h-[23%] bg-[#1748e8]/20" /></span>人へ届ける。
              </p>
              <div className="mt-12 grid gap-10 border-t border-[#121416]/15 pt-6 md:grid-cols-2">
                <p className="text-[14px] leading-8 text-[#121416]/70">
                  SQAHIA Digitalは、コンテンツと技術のどちらか一方に限定されない、デジタルエンターテインメントとテクノロジーの会社です。体験をつくることから、技術を生み出します。
                </p>
                <p className="text-[14px] leading-8 text-[#121416]/70">
                  大規模な組織と同じやり方で競争するのではなく、始めたての頃の「未熟さ」と「無邪気さ」を大切にしながら、作品と事業を育てていきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="technical-plate relative overflow-hidden bg-[#121416] py-20 text-[#f6f3ec] sm:py-28 lg:py-36">
          <div className="absolute inset-y-0 left-[8.33%] hidden w-px bg-white/10 lg:block" />
          <div className="absolute inset-y-0 right-[8.33%] hidden w-px bg-white/10 lg:block" />
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 border-b border-white/20 pb-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3"><p className="section-kicker text-white/60"><span>02</span> SERVICES</p></div>
              <div className="lg:col-span-7 lg:col-start-5">
                <h2 className="font-display text-[clamp(2.4rem,4.7vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.065em]">面白さから、<br />未来の技術まで。</h2>
              </div>
            </div>
            <div className="divide-y divide-white/20">
              {services.map((service) => (
                <article key={service.number} className="service-row group grid gap-6 py-9 lg:grid-cols-12 lg:gap-8 lg:py-12">
                  <div className="flex items-start justify-between lg:col-span-3">
                    <span className="font-mono text-[11px] text-[#87a0ff]">{service.number}</span>
                    <Circle className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:scale-[1.45] lg:hidden" fill="currentColor" />
                  </div>
                  <div className="lg:col-span-4 lg:col-start-5">
                    <p className="mb-2 font-mono text-[10px] tracking-[0.12em] text-white/45">{service.title}</p>
                    <h3 className="font-display text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{service.ja}</h3>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-[14px] leading-7 text-white/68">{service.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {service.points.map((point) => <li key={point} className="flex items-center gap-2 font-mono text-[10px] tracking-[0.04em] text-white/60"><Check size={12} className="text-white/50" />{point}</li>)}
                    </ul>
                  </div>
                  <div className="hidden justify-end lg:col-span-1 lg:flex"><ArrowDownRight className="h-5 w-5 text-white/65 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="relative overflow-hidden border-y border-[#121416]/15 bg-[#f6f3ec] py-20 sm:py-28 lg:py-36"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12"><div className="lg:col-span-3"><p className="section-kicker"><span>03</span> PRODUCTS</p></div><div className="lg:col-span-8 lg:col-start-5"><div className="flex flex-col justify-between gap-6 border-b border-[#121416]/15 pb-8 md:flex-row md:items-end"><div><p className="font-mono text-[10px] tracking-[0.12em] text-[#1748e8]">SQAHIA DIGITAL / PRODUCT SIGNALS</p><h2 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,4.8vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.065em]">つくっているものが、<br />会社を語る。</h2></div><a href="/technology-map" className="inline-flex w-fit items-center gap-2 border-b border-[#121416] pb-2 font-mono text-[10px] tracking-[0.1em] transition-colors hover:border-[#1748e8] hover:text-[#1748e8]">TECHNOLOGY MAP <ArrowUpRight size={15} /></a></div><div className="divide-y divide-[#121416]/15">{productSignals.map(([number, title, description, href, status]) => <a key={title} href={href} className="group grid gap-4 py-7 transition-colors hover:text-[#1748e8] sm:grid-cols-[54px_1fr_auto] sm:items-center"><span className="font-mono text-[10px] text-[#1748e8]">{number}</span><div><h3 className="font-display text-3xl font-semibold tracking-[-0.05em]">{title}</h3><p className="mt-2 text-[13px] leading-6 text-[#121416]/65 group-hover:text-[#1748e8]/75">{description}</p></div><div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.1em]"><span className="border border-[#121416]/20 px-2 py-1 text-[#121416]/55">{status}</span><ArrowUpRight size={16} /></div></a>)}</div></div></div></section>

        <section className="tbl-home-access relative overflow-hidden border-y border-[#121416]/15 bg-[#e9e4d9] py-16 sm:py-24 lg:py-28"><div className="tbl-home-access-grid" aria-hidden="true" /><div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:px-12"><div className="lg:col-span-3"><p className="section-kicker"><span>04</span> PROJECT FORUM</p></div><div className="relative lg:col-span-8 lg:col-start-5"><p className="font-mono text-[10px] tracking-[0.12em] text-[#1748e8]">PROJECT：TBL / PUBLIC RECORD</p><h2 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.07em]">物語を、<br /><span className="text-[#1748e8]">フォーラム</span>で育てる。</h2><div className="mt-8 flex flex-col justify-between gap-6 border-t border-[#121416]/15 pt-5 sm:flex-row sm:items-end"><p className="max-w-xl text-[14px] leading-7 text-[#121416]/70">作るのはあなた次第、Project：TBLはどなたでも自由に想像できるコミュニティーの一つです。公開記録を、専用フォーラムで読むことができます。</p><a href="/forum/tbl" className="inline-flex w-fit items-center gap-3 border-b border-[#121416] pb-2 font-mono text-[10px] tracking-[0.1em] transition-colors hover:border-[#1748e8] hover:text-[#1748e8]">TBL FORUMへ <ArrowUpRight size={15} /></a></div></div></div></section>

        <section id="approach" className="overflow-hidden bg-[#e9e4d9] py-20 sm:py-28 lg:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
            <div className="lg:col-span-3"><p className="section-kicker"><span>03</span> APPROACH</p></div>
            <div className="lg:col-span-8 lg:col-start-5">
              <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
                <h2 className="font-display text-[clamp(2.4rem,4.8vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.065em]">大企業になっても、<br />面白さを確保する。</h2>
                <p className="pb-1 text-[14px] leading-8 text-[#121416]/70">大きな組織と同じやり方ではなく、始めたてだからこそ持てる好奇心と軽やかさを大切にします。面白いと思う方向へ試し、学び、次の体験を育てます。</p>
              </div>
              <div className="relative mt-12 overflow-hidden border border-[#121416]/15 bg-[#f6f3ec]">
                <div className="growth-chart-heading"><span>GROWTH GRAPH / 07 STAGES</span><span>GARAGE → STUDIO → RE-EVALUATE</span></div>
                <div className="growth-chart-wrap"><table className="growth-chart"><thead><tr><th>段階</th><th>制度</th><th>具体的な活動</th><th>人員</th><th>予算</th><th>成果</th><th>次の段階</th></tr></thead><tbody>{growthStages.map(([stage, system, activity, people, budget, outcome, next]) => <tr key={stage}><td data-label="段階"><strong>{stage}</strong></td><td data-label="制度">{system}</td><td data-label="具体的な活動">{activity}</td><td data-label="人員">{people}</td><td data-label="予算">{budget}</td><td data-label="成果">{outcome}</td><td data-label="次の段階" className="growth-next">{next}</td></tr>)}</tbody></table></div>
                <p className="growth-chart-caption">面白さを守りながら、規模に応じて制度と責任を更新するための成長設計。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f3ec] py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 border-b border-[#121416]/15 pb-9 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3"><p className="section-kicker"><span>04</span> AMBITION</p></div>
              <div className="lg:col-span-8 lg:col-start-5"><h2 className="max-w-4xl font-display text-[clamp(2.3rem,4.4vw,4.7rem)] font-semibold leading-[1.02] tracking-[-0.06em]">小さく始め、<br />大きな体験を育てる。</h2></div>
            </div>
            <div className="grid gap-10 pt-9 md:grid-cols-2 lg:grid-cols-12">
              <div className="lg:col-span-4"><img src="/manus-storage/sqahia-precision_b5989ea7.jpg" alt="設計のためのノートと道具" className="aspect-[4/3] w-full object-cover" /></div>
              <div className="flex flex-col justify-between lg:col-span-4 lg:col-start-6">
                <p className="text-[15px] leading-8 text-[#121416]/72">現在は個人事業主として、法人化に向けた作品・技術・事業の基盤を整えています。エンターテイメントを主軸に、ソフトウェアの開発とSPDEのためのデータ収集を積み重ねます。</p>
                <div className="mt-10 border-l-2 border-[#121416] pl-5"><p className="font-display text-2xl font-semibold tracking-[-0.04em]">未熟だから、試せる。<br />無邪気だから、つくれる。</p><p className="mt-3 font-mono text-[10px] leading-5 tracking-[0.05em] text-[#121416]/55">ENTERTAINMENT × SOFTWARE × SPDE DATA</p></div>
              </div>
              <div className="flex items-end justify-end lg:col-span-2"><div className="relative h-11 w-11 border border-[#121416]/55"><div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#121416]" /><span className="absolute left-0 top-1/2 h-px w-full bg-[#121416]" /></div></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-plate relative overflow-hidden border-y border-[#121416]/15 bg-[#e9e4d9] px-5 py-20 text-[#121416] sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#121416]/20 sm:h-96 sm:w-96" />
          <div className="absolute -bottom-32 right-[20%] h-72 w-72 rounded-full border border-[#121416]/15" />
          <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-[#121416]/15 lg:block" />
          <div className="relative mx-auto max-w-[1440px]">
            <p className="section-kicker"><span>05</span> CONTACT</p>
            <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-9"><h2 className="font-display text-[clamp(3.1rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.075em]">次の体験を、<br />ともにつくる。</h2></div>
              <div className="lg:col-span-3"><p className="mb-6 text-[14px] leading-7 text-[#121416]/72">協業、取材、採用、技術に関するお問い合わせを、公式フォームで受け付けています。</p><a href="/contact" className="action-link inline-flex w-full items-center justify-between px-4 py-4 font-mono text-[11px] font-medium tracking-[0.1em] text-white">CONTACT SQAHIA DIGITAL <ArrowUpRight size={17} /></a></div>
            </div>
            <p className="mt-16 border-t border-[#121416]/20 pt-4 font-mono text-[10px] tracking-[0.08em] text-[#121416]/55">SQAHIA DIGITAL — INDEPENDENT DIGITAL STUDIO / JAPAN</p>
          </div>
        </section>
      </main>

      <footer className="flex flex-col justify-between gap-4 bg-[#121416] px-5 py-5 text-white/55 sm:flex-row sm:px-8 lg:px-12">
        <p className="font-mono text-[9px] tracking-[0.11em]">© {new Date().getFullYear()} SQAHIA DIGITAL</p>
        <div className="flex flex-wrap gap-5"><a className="font-mono text-[9px] tracking-[0.11em] transition-colors hover:text-white" href="/technology-map">TECHNOLOGY MAP</a><a className="font-mono text-[9px] tracking-[0.11em] transition-colors hover:text-white" href="/support">SUPPORT</a><a className="font-mono text-[9px] tracking-[0.11em] transition-colors hover:text-white" href="/privacy">PRIVACY</a><a className="font-mono text-[9px] tracking-[0.11em] transition-colors hover:text-white" href="/sitemap">SITEMAP</a><a className="font-mono text-[9px] tracking-[0.11em] transition-colors hover:text-white" href="/forum">INVESTOR FORUM</a><a className="font-mono text-[9px] tracking-[0.11em] transition-colors hover:text-white" href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] as const } },
};
