/**
 * SQAHIA Digital / Calibrated Quiet
 * Japanese modernist editorial layout: warm paper, ink typography, calibrated cobalt signals.
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
  {
    number: "01",
    title: "Digital Direction",
    ja: "デジタル戦略・要件整理",
    description:
      "事業の状況とユーザーの行動を読み解き、優先順位と実現への道筋を整えます。つくる前の「何を、なぜ」を明快にします。",
    points: ["現状・課題の整理", "顧客体験の設計", "Web・デジタル施策の構想"],
  },
  {
    number: "02",
    title: "Experience Design",
    ja: "Webサイト・体験設計",
    description:
      "ブランドのらしさが、迷いなく届く体験へ。情報設計からデザインまで、一貫した視点でつなぎます。",
    points: ["情報設計・UX設計", "UIデザイン", "ブランドサイト・LP制作"],
  },
  {
    number: "03",
    title: "Digital Enablement",
    ja: "運用・改善の仕組み化",
    description:
      "公開を終点にせず、運用しながら育てられる状態へ。チームに残るルールと改善の視点をつくります。",
    points: ["コンテンツ運用設計", "サイト改善・分析支援", "業務フローのデジタル化"],
  },
];

const process = [
  ["01", "Listen", "背景と現在地を理解する"],
  ["02", "Frame", "課題を整理し、優先順位を定める"],
  ["03", "Make", "納得できる形に、丁寧に実装する"],
  ["04", "Learn", "運用から学び、次の改善につなげる"],
];

const navItems = [
  ["Services", "#services"],
  ["Approach", "#approach"],
  ["About", "#about"],
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#121416]/10 bg-[#f6f3ec]/94 shadow-[0_8px_26px_rgba(18,20,22,0.05)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="SQAHIA Digital トップへ">
            <img
              src="/manus-storage/sqahia-mark_d9e346c3.png"
              alt=""
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:rotate-[-8deg]"
            />
            <div className="leading-none">
              <span className="block font-display text-[15px] font-bold tracking-[-0.05em]">SQAHIA</span>
              <span className="mt-1 block font-mono text-[8px] font-medium tracking-[0.2em] text-[#121416]/55">DIGITAL</span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="メインナビゲーション">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="nav-link font-mono text-[11px] tracking-[0.1em] text-[#121416]/75">
                {label}
              </a>
            ))}
            <a href="#contact" className="action-link inline-flex items-center gap-2 bg-[#1748e8] px-4 py-3 font-mono text-[10px] font-medium tracking-[0.1em] text-white">
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
            <a href="#contact" onClick={closeMenu} className="mt-5 flex items-center justify-between bg-[#1748e8] px-4 py-4 font-mono text-xs tracking-[0.1em] text-white">
              CONTACT <ArrowUpRight size={15} />
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-[760px] overflow-hidden pt-[72px] lg:min-h-[800px]">
          <div className="absolute inset-0 bg-[url('/manus-storage/sqahia-hero_f993646d.jpg')] bg-cover bg-[center_right]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6f3ec] via-[#f6f3ec]/92 to-[#f6f3ec]/10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f6f3ec] to-transparent" />
          <div className="absolute inset-0 bg-grain opacity-[0.15]" />

          <div className="relative mx-auto flex min-h-[688px] max-w-[1440px] flex-col justify-end px-5 pb-12 sm:px-8 sm:pb-16 lg:min-h-[728px] lg:px-12 lg:pb-20">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="max-w-[850px]">
              <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
                <span className="block h-2.5 w-2.5 rounded-full bg-[#1748e8]" />
                <p className="font-mono text-[10px] font-medium tracking-[0.17em] text-[#121416]/65 sm:text-[11px]">INDEPENDENT DIGITAL STUDIO / JAPAN</p>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-display text-[clamp(3.45rem,8.3vw,8.4rem)] font-bold leading-[0.88] tracking-[-0.075em] text-[#121416]">
                複雑さを、<br />
                <span className="text-[#1748e8]">次の行動</span>に変える。
              </motion.h1>
              <motion.div variants={fadeUp} className="mt-8 grid max-w-xl gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-[360px] text-[14px] leading-7 text-[#121416]/74 sm:text-[15px]">
                  SQAHIA Digitalは、事業と人の間にある複雑さを丁寧にほどき、明快なデジタル体験として設計します。
                </p>
                <a href="#services" className="group inline-flex w-fit items-center gap-3 border-b border-[#121416] pb-2 font-mono text-[11px] font-medium tracking-[0.1em] transition-colors hover:border-[#1748e8] hover:text-[#1748e8]">
                  WHAT WE DO <MoveRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.6 }} className="mt-12 grid grid-cols-2 border-t border-[#121416]/15 pt-4 sm:mt-16 sm:grid-cols-4">
              {["STRATEGY", "DESIGN", "BUILD", "IMPROVE"].map((word, index) => (
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
                迷いの多いデジタルを、<span className="relative whitespace-nowrap"><i className="relative z-10 not-italic">一緒に考え、</i><span className="absolute inset-x-0 bottom-[8%] -z-0 h-[23%] bg-[#1748e8]/20" /></span>使える形に整える。
              </p>
              <div className="mt-12 grid gap-10 border-t border-[#121416]/15 pt-6 md:grid-cols-2">
                <p className="text-[14px] leading-8 text-[#121416]/70">
                  SQAHIA Digitalは、戦略・デザイン・実装を分けずに捉える独立系のデジタルスタジオです。小さな違和感から大きな転換まで、目的に沿った解像度で伴走します。
                </p>
                <p className="text-[14px] leading-8 text-[#121416]/70">
                  つくることを目的にしません。事業の文脈、運用する人、使う人の接点を見つめ、続けられる設計を大切にしています。
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
                <h2 className="font-display text-[clamp(2.4rem,4.7vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.065em]">考えることから、<br />動かすことまで。</h2>
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

        <section id="approach" className="overflow-hidden bg-[#e9e4d9] py-20 sm:py-28 lg:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
            <div className="lg:col-span-3"><p className="section-kicker"><span>03</span> APPROACH</p></div>
            <div className="lg:col-span-8 lg:col-start-5">
              <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
                <h2 className="font-display text-[clamp(2.4rem,4.8vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.065em]">答えを急がず、<br />輪郭を合わせる。</h2>
                <p className="pb-1 text-[14px] leading-8 text-[#121416]/70">見た目だけを整えるのではなく、前提から一緒に確認します。目的が揃えば、つくるべきものと、つくらないことも見えてきます。</p>
              </div>
              <div className="relative mt-12 grid overflow-hidden border border-[#121416]/15 bg-[#f6f3ec] md:grid-cols-2">
                <div className="draft-field absolute right-0 top-0 hidden h-full w-1/2 md:block" aria-hidden="true"><div className="draft-square" /><div className="draft-aperture" /><span className="draft-line" /><p className="absolute bottom-7 left-7 font-mono text-[9px] tracking-[0.1em] text-[#121416]/50">ASSEMBLY / 03–04</p></div>
                <div className="relative z-10 grid divide-y divide-[#121416]/15 md:col-span-1">
                  {process.map(([number, title, description]) => (
                    <div key={number} className="group flex gap-5 p-5 sm:p-7">
                      <span className="font-mono text-[10px] text-[#1748e8]">{number}</span>
                      <div><h3 className="font-display text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-1.5 text-[12px] leading-6 text-[#121416]/63">{description}</p></div>
                    </div>
                  ))}
                </div>
                <div className="relative hidden min-h-[400px] md:block"><div className="absolute bottom-5 right-5 bg-[#121416] px-3 py-2 font-mono text-[9px] tracking-[0.1em] text-white">PROJECT FLOW / 04 STEPS</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f3ec] py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 border-b border-[#121416]/15 pb-9 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-3"><p className="section-kicker"><span>04</span> PERSPECTIVE</p></div>
              <div className="lg:col-span-8 lg:col-start-5"><h2 className="max-w-4xl font-display text-[clamp(2.3rem,4.4vw,4.7rem)] font-semibold leading-[1.02] tracking-[-0.06em]">小さく、深く。<br />だから、変化まで見届けられる。</h2></div>
            </div>
            <div className="grid gap-10 pt-9 md:grid-cols-2 lg:grid-cols-12">
              <div className="lg:col-span-4"><img src="/manus-storage/sqahia-precision_b5989ea7.jpg" alt="設計のためのノートと道具" className="aspect-[4/3] w-full object-cover" /></div>
              <div className="flex flex-col justify-between lg:col-span-4 lg:col-start-6">
                <p className="text-[15px] leading-8 text-[#121416]/72">個人事業主として、最初の対話から制作、公開後の改善まで責任を持って向き合います。規模よりも、課題への解像度とコミュニケーションの質を大切にしています。</p>
                <div className="mt-10 border-l-2 border-[#121416] pl-5"><p className="font-display text-2xl font-semibold tracking-[-0.04em]">必要な専門性は、<br />目的に合わせて編成します。</p><p className="mt-3 font-mono text-[10px] leading-5 tracking-[0.05em] text-[#121416]/55">A FLEXIBLE, FOCUSED PARTNERSHIP</p></div>
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
              <div className="lg:col-span-9"><h2 className="font-display text-[clamp(3.1rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.075em]">課題の輪郭から、<br />話しましょう。</h2></div>
              <div className="lg:col-span-3"><p className="mb-6 text-[14px] leading-7 text-[#121416]/72">プロジェクトの構想段階でも構いません。まずは、いま考えていることをお聞かせください。</p><a href="#top" className="action-link inline-flex w-full items-center justify-between bg-[#1748e8] px-4 py-4 font-mono text-[11px] font-medium tracking-[0.1em] text-white hover:bg-[#121416]">CONTACT DETAILS COMING SOON <ArrowUpRight size={17} /></a></div>
            </div>
            <p className="mt-16 border-t border-[#121416]/20 pt-4 font-mono text-[10px] tracking-[0.08em] text-[#121416]/55">SQAHIA DIGITAL — INDEPENDENT DIGITAL STUDIO / JAPAN</p>
          </div>
        </section>
      </main>

      <footer className="flex flex-col justify-between gap-4 bg-[#121416] px-5 py-5 text-white/55 sm:flex-row sm:px-8 lg:px-12">
        <p className="font-mono text-[9px] tracking-[0.11em]">© {new Date().getFullYear()} SQAHIA DIGITAL</p>
        <a className="font-mono text-[9px] tracking-[0.11em] transition-colors hover:text-white" href="#top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] as const } },
};
