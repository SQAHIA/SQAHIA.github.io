/**
 * SQAHIA Digital / Project：TBL Forum
 * A public, read-only story forum for the TBL platform and its base members.
 */
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ChevronRight, Menu, MessageSquareText, Quote, X } from "lucide-react";
import { useState } from "react";

const members = [
  ["01", "カイザー", "起点", "物語の入口になるベースメンバー。"],
  ["02", "スピカ", "接続", "人物と関係をつなぐベースメンバー。"],
  ["03", "エルシスト", "展開", "出来事を次の方向へ動かすベースメンバー。"],
  ["04", "レミリオン", "余白", "追加される人物を受け入れるベースメンバー。"],
];

const forumNav = [
  ["00", "Overview", "#overview"],
  ["01", "Base members", "#members"],
  ["02", "Principles", "#principles"],
  ["03", "Storyline", "#storyline"],
];

export default function TBLForum() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="tbl-forum min-h-screen bg-[#f6f3ec] text-[#121416] selection:bg-[#1748e8] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-[#121416]/15 bg-[#f6f3ec]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1520px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="/" className="flex items-center gap-3" aria-label="SQAHIA Digital公式サイトへ戻る">
            <img src="/manus-storage/sqahia-logo-official_8e289d78.png" alt="" className="official-logo h-10 w-10 object-contain" />
            <span className="brand-lockup font-display text-sm font-bold tracking-[-0.05em]">SQAHIA <span className="font-mono text-[8px] font-medium tracking-[0.18em] text-[#121416]/50">DIGITAL</span></span>
          </a>
          <div className="hidden items-center gap-6 lg:flex"><span className="font-mono text-[10px] tracking-[0.12em] text-[#121416]/45">PROJECT：TBL / PUBLIC FORUM</span><a href="/business/entertainment" className="forum-back-link"><ArrowLeft size={14} />ENTERTAINMENT</a></div>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid h-10 w-10 place-items-center border border-[#121416]/15 lg:hidden" aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#121416]/15 bg-[#f6f3ec] px-5 pb-5 pt-2 lg:hidden">{forumNav.map(([id, label, href]) => <a key={id} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-[#121416]/10 py-3.5 font-mono text-xs"><span><b className="mr-3 text-[#1748e8]">{id}</b>{label}</span><ChevronRight size={15} /></a>)}<a href="/" className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.1em]"><ArrowLeft size={13} />OFFICIAL SITE</a></nav>}
      </header>

      <main>
        <section id="overview" className="tbl-forum-hero relative overflow-hidden border-b border-[#121416]/15">
          <div className="tbl-forum-grid absolute inset-0" aria-hidden="true" />
          <div className="tbl-forum-light" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1520px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:px-10 lg:py-28">
            <div className="lg:col-span-3"><p className="font-mono text-[9px] tracking-[0.13em] text-[#1748e8]">PROJECT FORUM / READ ONLY</p><p className="mt-6 max-w-[170px] text-[12px] leading-6 text-[#121416]/60">公開された断片を読み、人物を加え、あなたの物語へ。</p></div>
            <div className="lg:col-span-8 lg:col-start-5"><motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-[10px] tracking-[0.15em] text-[#1748e8]">TBL / THREAD 00 / 2026.08</motion.p><motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-5 font-display text-[clamp(3.8rem,8.4vw,8.8rem)] font-bold leading-[0.84] tracking-[-0.08em]">物語は、<br /><span className="text-[#1748e8]">追加</span>できる。</motion.h1><div className="mt-10 grid gap-7 border-t border-[#121416]/20 pt-5 md:grid-cols-[1fr_0.72fr]"><p className="max-w-xl text-[15px] leading-8 text-[#121416]/76">Project：TBLは、SQAHIA Digitalが提供する多目的なストーリーメーカーです。ソフトを所持しないプラットフォームとして、四人のベースメンバーを起点に、どんな人物でもあなたの物語へ追加できます。</p><div className="border-l border-[#121416]/20 pl-5"><p className="font-mono text-[10px] tracking-[0.07em] text-[#121416]/50">FORUM STATUS</p><p className="mt-2 font-display text-xl font-semibold leading-tight tracking-[-0.04em]">公開中。<br />更新される記録です。</p></div></div></div>
          </div>
        </section>

        <div className="mx-auto grid max-w-[1520px] lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="hidden border-r border-[#121416]/15 px-10 py-12 lg:block"><div className="sticky top-[112px]"><p className="font-mono text-[9px] tracking-[0.14em] text-[#121416]/45">THREAD INDEX</p><nav className="mt-5 border-t border-[#121416]/15">{forumNav.map(([id, label, href]) => <a href={href} key={id} className="forum-index-link"><span>{id}</span>{label}</a>)}</nav><a href="/business/entertainment" className="mt-12 block border border-[#121416]/15 p-4 transition-colors hover:border-[#1748e8]"><p className="font-mono text-[9px] tracking-[0.1em] text-[#1748e8]">PARENT PROJECT</p><p className="mt-2 font-display text-lg font-semibold tracking-[-0.04em]">Entertainment</p><p className="mt-2 text-[11px] leading-5 text-[#121416]/60">公開プロジェクト一覧へ</p></a></div></aside>
          <div className="px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
            <ForumThread id="members" code="THREAD 01" title="BASE MEMBERS" label="FOUNDER NOTE"><h2 className="post-title">四人が、物語の入口になる。</h2><p className="post-copy">カイザー、スピカ、エルシスト、レミリオン。四人のベースメンバーがいれば、どんな人物を追加しても君の物語にできます。</p><div className="tbl-forum-member-grid">{members.map(([number, name, role, description]) => <article key={name}><span>{number}</span><div className="tbl-forum-glyph" aria-hidden="true" /><h3>{name}</h3><p className="font-mono text-[9px] tracking-[0.08em] text-[#1748e8]">{role}</p><p>{description}</p></article>)}</div></ForumThread>

            <ForumThread id="principles" code="THREAD 02" title="THREE PRINCIPLES" label="RULE NOTE"><h2 className="post-title">自由に、認め合い、広げる。</h2><div className="tbl-forum-principles"><div><span>01</span><p>表現の自由と作品を認め合う。</p></div><div><span>02</span><p>サードパーティのリミックスを歓迎する。</p></div><div><span>03</span><p>すべてはSQAHIA Digitalがメイン。</p></div></div></ForumThread>

            <ForumThread id="storyline" code="THREAD 03" title="STORYLINE" label="STRUCTURE NOTE"><h2 className="post-title">ベースから、あなたの物語へ。</h2><p className="post-copy">人物、出来事、関係性を追加することで、TBLのストーリーラインは更新されます。完成形を所有するのではなく、参加によって物語をつくります。</p><div className="tbl-forum-flow"><span>BASE MEMBERS</span><i>→</i><span>YOUR CAST</span><i>→</i><span>YOUR STORY</span></div><blockquote><Quote size={15} />四人がいれば、どんな人物を追加しても君の物語にできる。</blockquote></ForumThread>

            <section className="tbl-forum-footer-note border-t-2 border-[#121416] pt-6"><p className="font-mono text-[9px] tracking-[0.12em] text-[#1748e8]">PUBLIC RECORD / TBL</p><p className="mt-4 max-w-xl text-[13px] leading-7 text-[#121416]/65">このページはProject：TBLの公開フォーラムです。今後の人物、物語、更新情報は、この記録に追記していきます。</p><a href="/business/entertainment" className="mt-6 inline-flex items-center gap-2 border-b border-[#1748e8] pb-2 font-mono text-[10px] tracking-[0.1em] text-[#1748e8]">ENTERTAINMENTへ戻る <ArrowUpRight size={14} /></a></section>
          </div>
        </div>
      </main>
      <footer className="border-t border-[#121416]/15 bg-[#121416] px-5 py-7 text-white/60 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-[1520px] flex-col justify-between gap-5 sm:flex-row sm:items-end"><div className="flex items-center gap-3 text-white"><img src="/manus-storage/sqahia-logo-official_8e289d78.png" alt="" className="official-logo h-9 w-9" /><span className="brand-lockup font-display text-sm font-bold">SQAHIA <small className="font-mono text-[8px] tracking-[0.18em] text-white/55">DIGITAL</small></span></div><div className="flex gap-5 font-mono text-[9px] tracking-[0.08em]"><a href="/">HOME</a><a href="/forum">INVESTOR FORUM</a></div></div></footer>
    </div>
  );
}

function ForumThread({ id, code, title, label, children }: { id: string; code: string; title: string; label: string; children: React.ReactNode }) {
  return <section id={id} className="forum-thread tbl-forum-thread border-t-2 border-[#121416]" aria-labelledby={`${id}-title`}><div className="flex items-center justify-between py-4 font-mono text-[10px] tracking-[0.1em] text-[#121416]/60"><span><b className="mr-3 text-[#1748e8]">{code}</b>{title}</span><MessageSquareText size={16} /></div><article className="forum-post"><div className="forum-author"><span className="author-dot bg-[#1748e8]" /><div><p>{label}</p><span>PROJECT：TBL / PUBLIC</span></div></div><div><h2 id={`${id}-title`} className="sr-only">{title}</h2>{children}</div></article></section>;
}
