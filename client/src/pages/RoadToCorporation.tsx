/**
 * SQAHIA Digital / Road to Incorporation
 * A transparent planning record, updated for the official Directional Spectrum logo system.
 */
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeJapaneseYen,
  Building2,
  ChevronRight,
  CircleDot,
  FileText,
  GitBranch,
  Menu,
  MessageSquareText,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";
import { useState } from "react";

const forumNav = [
  ["00", "Overview", "#overview"],
  ["01", "Business", "#business"],
  ["02", "Capital", "#capital"],
  ["03", "Roadmap", "#roadmap"],
  ["04", "Disclosure", "#disclosure"],
];

const divisions = [
  ["ENT", "Entertainment", "ゲーム、映像、音楽、インタラクティブコンテンツ。市場と直接つながる体験をつくる領域。", "創業時から"],
  ["SFT", "Software", "自社プロダクト、開発ツール、API、技術基盤。体験を成立させる技術そのものをつくる領域。", "創業時から"],
  ["SPD", "SPDE", "研究開発を通じて検証する、新しい技術・サービスの領域。仕様は段階的に定義します。", "4年目以降"],
];

const growth = [
  ["PHASE 01", "Establish", "1–3年目", "EntertainmentとSoftwareの基盤を確立し、自社コンテンツ・技術資産・収益モデルを育てる。"],
  ["PHASE 02", "Expansion", "4年目", "既存事業を伸ばしながらSPDEを始動。新規事業、技術研究、外部連携へ展開する。"],
  ["PHASE 03", "Scale", "5年目以降", "3つの事業領域を複数の収益源として成長させ、特定事業への依存を低減する。"],
];

function Mark() {
  return <img src="/manus-storage/sqahia-logo-official_8e289d78.png" alt="" className="official-logo h-10 w-10 object-contain" />;
}

export default function RoadToCorporation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#eeece7] text-[#121416] selection:bg-[#1748e8] selection:text-white">
      <header className="investor-header sticky top-0 z-50 border-b border-[#121416]/15 bg-[#eeece7]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1520px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="/" className="group flex items-center gap-3" aria-label="SQAHIA Digital公式サイトへ">
            <Mark />
            <span className="brand-lockup font-display text-[14px] font-bold tracking-[-0.05em]">SQAHIA <span className="font-mono text-[8px] font-medium tracking-[0.18em] text-[#121416]/50">DIGITAL</span></span>
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            <span className="font-mono text-[10px] tracking-[0.12em] text-[#121416]/45">INVESTOR FORUM / READ ONLY</span>
            <a href="/" className="forum-back-link"><ArrowLeft size={14} />OFFICIAL SITE</a>
          </div>
          <button type="button" onClick={() => setMenuOpen((current) => !current)} className="grid h-10 w-10 place-items-center border border-[#121416]/15 lg:hidden" aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
        {menuOpen && <div className="border-t border-[#121416]/15 bg-[#eeece7] px-5 pb-5 pt-2 lg:hidden">{forumNav.map(([id, label, href]) => <a key={id} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-[#121416]/10 py-3.5 font-mono text-xs"><span><b className="mr-3 text-[#1748e8]">{id}</b>{label}</span><ChevronRight size={15} /></a>)}<a href="/" className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.1em]"><ArrowLeft size={13} />OFFICIAL SITE</a></div>}
      </header>

      <main>
        <section id="overview" className="relative overflow-hidden border-b border-[#121416]/15">
          <div className="investor-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="forum-sigil" aria-hidden="true"><span /><i /><b /></div>
          <div className="relative mx-auto grid max-w-[1520px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:px-10 lg:py-28">
            <div className="lg:col-span-3"><p className="forum-kicker"><CircleDot size={11} fill="currentColor" /> CAP TABLE IN PROGRESS</p></div>
            <div className="lg:col-span-8 lg:col-start-5">
              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="font-mono text-[10px] font-medium tracking-[0.15em] text-[#1748e8]">INVESTOR FORUM / 2026.08.15 / VERSION 01</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="mt-5 font-display text-[clamp(3.5rem,7.8vw,8rem)] font-bold leading-[0.86] tracking-[-0.08em]">株式会社<br />への道。</motion.h1>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }} className="mt-10 grid gap-7 border-t border-[#121416]/20 pt-5 md:grid-cols-[1fr_0.74fr]">
                <p className="max-w-xl text-[15px] leading-8 text-[#121416]/76">SQAHIA Digitalが将来の法人化に向けて共有する、投資家・協力者向けの公開事業計画書です。設計の背景、判断の根拠、未確定な部分を、更新可能な記録として開きます。</p>
                <div className="border-l border-[#121416]/20 pl-5"><p className="font-mono text-[10px] leading-5 tracking-[0.06em] text-[#121416]/58">STATUS</p><p className="mt-2 font-display text-xl font-semibold tracking-[-0.04em]">現在は個人事業主。<br />本ページは将来計画です。</p></div>
              </motion.div>
            </div>
          </div>
          <div className="relative mx-auto max-w-[1520px] border-t border-[#121416]/15 px-5 sm:px-8 lg:px-10"><div className="grid grid-cols-2 divide-x divide-[#121416]/15 sm:grid-cols-4"><Stat label="COMPANY" value="SQAHIA Digital" /><Stat label="LEGAL STATUS" value="Individual business" /><Stat label="PLAN VERSION" value="01 / 2026.08" /><Stat label="ACCESS" value="Public record" /></div></div>
        </section>

        <section className="investor-pause border-b border-[#121416]/15"><div className="mx-auto grid max-w-[1520px] gap-5 px-5 py-9 sm:px-8 lg:grid-cols-12 lg:px-10"><div className="lg:col-span-3"><p className="font-mono text-[9px] tracking-[0.12em] text-[#147be2]">PLANNED MILESTONE</p></div><div className="lg:col-span-8 lg:col-start-5"><p className="max-w-md font-display text-[clamp(1.7rem,3.4vw,3.4rem)] font-semibold leading-[0.95] tracking-[-0.065em]">2028.12.25<span className="ml-3 align-middle font-mono text-[10px] font-normal tracking-[0.11em] text-[#121416]/55">INCORPORATION / PLANNED</span></p><span className="investor-reference-line" /></div></div></section>

        <div className="mx-auto grid max-w-[1520px] lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="hidden border-r border-[#121416]/15 px-10 py-12 lg:block">
            <div className="sticky top-[112px]">
              <p className="font-mono text-[9px] tracking-[0.14em] text-[#121416]/45">THREAD INDEX</p>
              <nav className="mt-5 border-t border-[#121416]/15">{forumNav.map(([id, label, href]) => <a href={href} key={id} className="forum-index-link"><span>{id}</span>{label}</a>)}</nav>
              <div className="mt-12 border border-[#121416]/15 p-4"><p className="font-mono text-[9px] tracking-[0.1em] text-[#121416]/45">IMPORTANT</p><p className="mt-2 text-[12px] leading-6 text-[#121416]/68">本ページは投資勧誘を目的としたものではありません。計画値には変更の可能性があります。</p></div>
            </div>
          </aside>

          <div className="px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
            <section className="forum-thread border-t-2 border-[#121416]" aria-labelledby="thread-00">
              <ThreadMeta code="THREAD 00" title="STARTING POINT" icon={<MessageSquareText size={16} />} />
              <article className="forum-post">
                <div className="forum-author"><span className="author-dot bg-[#1748e8]" /><div><p>FOUNDER NOTE</p><span>2026.08.15 / 09:00</span></div></div>
                <div><h2 id="thread-00" className="post-title">なぜ、株式会社への道を記録するのか。</h2><p className="post-copy">SQAHIA Digitalは現在、個人事業主として活動しています。本ページは、将来の法人化を前提にした事業構造と成長の考え方を、投資家・協力者との対話のために公開するものです。完成した約束ではなく、検証と更新を前提とした構想としてお読みください。</p><blockquote>「デジタルで、新しい体験を。」</blockquote></div>
              </article>
            </section>

            <section id="business" className="forum-thread" aria-labelledby="thread-01">
              <ThreadMeta code="THREAD 01" title="BUSINESS ARCHITECTURE" icon={<GitBranch size={16} />} />
              <article className="forum-post"><div className="forum-author"><span className="author-dot bg-[#121416]" /><div><p>PLANNING NOTE</p><span>BUSINESS / FUTURE MODEL</span></div></div><div><h2 id="thread-01" className="post-title">エンターテインメントと技術を、別々にしない。</h2><p className="post-copy">事業計画では、EntertainmentとSoftwareを創業時からの主要領域とします。コンテンツをつくることで必要な技術を見つけ、技術をつくることで新しい体験を可能にする。この双方向の開発を、将来のSQAHIA Digitalの核に据えます。</p><div className="division-list">{divisions.map(([code, name, body, timing]) => <div key={code} className="division-card"><div><span>{code}</span><p>{timing}</p></div><h3>{name}</h3><p>{body}</p></div>)}</div></div></article>
            </section>

            <section id="capital" className="forum-thread" aria-labelledby="thread-02">
              <ThreadMeta code="THREAD 02" title="CAPITAL & ORGANIZATION" icon={<BadgeJapaneseYen size={16} />} />
              <article className="forum-post"><div className="forum-author"><span className="author-dot bg-[#1748e8]" /><div><p>PLANNING NOTE</p><span>CAPITAL / EARLY TEAM</span></div></div><div><h2 id="thread-02" className="post-title">最初の燃料を、技術資産へ。</h2><p className="post-copy">法人化時の初期資金は、<strong>3,000万円を基準とする計画</strong>です。人件費や開発費だけではなく、研究開発、プロダクト、将来の採用に継続的に投資し、売上と技術資産を次の成長へつなげることを想定しています。</p><div className="metric-board"><div><BadgeJapaneseYen size={20} /><span>PLANNED CAPITAL</span><strong>¥30,000,000</strong><p>創業時想定。将来の法人化計画における基準額です。</p></div><div><UsersRound size={20} /><span>PLANNED EARLY TEAM</span><strong>04 <em>people</em></strong><p>HQ 1名、Entertainment 2名、Software 1名を想定しています。</p></div><div><Building2 size={20} /><span>OPERATING PRINCIPLE</span><strong>Small / Focused</strong><p>AI、クラウド、外部専門家を活用し、固定費を抑える計画です。</p></div></div></div></article>
            </section>

            <section id="roadmap" className="forum-thread" aria-labelledby="thread-03">
              <ThreadMeta code="THREAD 03" title="GROWTH ROADMAP" icon={<FileText size={16} />} />
              <article className="forum-post"><div className="forum-author"><span className="author-dot bg-[#121416]" /><div><p>ROADMAP NOTE</p><span>LONG-TERM / STAGED</span></div></div><div><h2 id="thread-03" className="post-title">小さく始め、検証を重ねる。</h2><p className="post-copy">すべての事業を同時に大きく始めるのではなく、事業と技術の基盤を先に整えます。SPDEは4年目以降に開始する研究・新規事業領域であり、詳細な仕様は市場調査と技術検証を踏まえて段階的に定めます。</p><ol className="roadmap-list">{growth.map(([phase, title, time, body]) => <li key={phase}><div><span>{phase}</span><time>{time}</time></div><h3>{title}</h3><p>{body}</p></li>)}</ol></div></article>
            </section>

            <section id="disclosure" className="forum-thread border-b-2 border-[#121416]" aria-labelledby="thread-04">
              <ThreadMeta code="THREAD 04" title="DISCLOSURE & PRINCIPLES" icon={<ShieldCheck size={16} />} />
              <article className="forum-post"><div className="forum-author"><span className="author-dot bg-[#1748e8]" /><div><p>DISCLOSURE NOTE</p><span>BRAND / GOVERNANCE</span></div></div><div><h2 id="thread-04" className="post-title">独立したブランドを、正確に扱う。</h2><p className="post-copy">HeraixはSQAHIA Digitalそのものではなく、独立した事業主体・ブランドとして扱います。技術・事業上の連携が必要な場合は、契約、ライセンス、共同開発などの適切な枠組みを前提とします。本計画は、SQAHIA DigitalとHeraixを同一視しない企業構造を目指します。</p><div className="disclosure-note"><span>READING NOTE</span><p>ここに記載する資金、人員、部門構成、成長時期はすべて<strong>将来の事業計画</strong>です。現時点の実績、確定した資金調達、または投資の勧誘を示すものではありません。</p></div></div></article>
            </section>

            <div className="mt-12 flex flex-col justify-between gap-5 border-t border-[#121416]/15 pt-5 sm:flex-row sm:items-center"><p className="font-mono text-[9px] leading-5 tracking-[0.07em] text-[#121416]/48">DOCUMENT STATUS / PUBLIC PLANNING RECORD<br />LAST UPDATED: 2026.08.15</p><a href="/" className="forum-back-link"><ArrowLeft size={14} />OFFICIAL SITEへ戻る</a></div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return <div className="min-h-[84px] px-3 py-4 first:pl-0 sm:px-5"><p className="font-mono text-[8px] tracking-[0.1em] text-[#121416]/45">{label}</p><p className="mt-2 font-mono text-[10px] tracking-[-0.02em] text-[#121416]/78">{value}</p></div>;
}

function ThreadMeta({ code, title, icon }: { code: string; title: string; icon: React.ReactNode }) {
  return <div className="flex items-center justify-between py-4 font-mono text-[10px] tracking-[0.1em] text-[#121416]/60"><span><b className="mr-3 text-[#1748e8]">{code}</b>{title}</span><span className="text-[#121416]">{icon}</span></div>;
}
