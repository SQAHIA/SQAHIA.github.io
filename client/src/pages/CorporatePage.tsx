/**
 * SQAHIA Digital / Corporate Page System
 * Directional Spectrum brings the official blue-to-cyan logo into a transparent information system without blurring current facts, future plans, and preparing content.
 */
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  ChevronRight,
  CircleDot,
  FileClock,
  FolderKanban,
  Menu,
  Newspaper,
  Route,
  Send,
  Sparkle,
  UsersRound,
  X,
} from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

type Status = "CURRENT" | "FUTURE PLAN" | "PREPARING";
type Child = { title: string; href: string; status: Status; description: string };
type PageData = {
  section: string;
  code: string;
  trail: string;
  title: string;
  english: string;
  status: Status;
  lead: string;
  body: string;
  principles: { label: string; text: string }[];
  note?: string;
  children?: Child[];
  corporateInfo?: { label: string; value: string; detail?: string; future?: boolean }[];
  projectHighlight?: { title: string; english: string; status: string; body: string };
  storyMaker?: { intro: string; members: { name: string; role: string }[]; principles: string[]; expansion: string; storyline: string };
  policyDocument?: { kicker: string; title: string; tag: string; sections: { title: string; summary: string; detail: string }[]; cta?: { href: string; label: string; note: string } };
  architecture?: { title: string; description: string; nodes: { label: string; role: string; detail: string }[] };
  specifications?: { title: string; description: string; groups: { label: string; value: string; note?: string }[]; cta?: { href: string; label: string } };
};

const aboutChildren: Child[] = [
  { title: "Philosophy", href: "/about/philosophy", status: "CURRENT", description: "SQAHIA Digitalが大切にする考え方。" },
  { title: "Mission", href: "/about/mission", status: "FUTURE PLAN", description: "技術と体験に向き合う長期的な使命。" },
  { title: "Vision", href: "/about/vision", status: "FUTURE PLAN", description: "目指す企業像と事業の広がり。" },
  { title: "Company", href: "/about/company", status: "CURRENT", description: "現在の事業形態と公開情報。" },
  { title: "History", href: "/about/history", status: "CURRENT", description: "公開できる活動・計画の記録。" },
  { title: "Organization", href: "/about/organization", status: "FUTURE PLAN", description: "将来の組織構想と部門の役割。" },
];

const businessChildren: Child[] = [
  { title: "Software Development", href: "/business/software", status: "PREPARING", description: "OS、システム、アプリケーションを扱う事業領域。" },
  { title: "AI & Intelligence", href: "/business/ai", status: "FUTURE PLAN", description: "AI・LLM・エージェントを研究する領域。" },
  { title: "Gaming & Entertainment", href: "/business/gaming-entertainment", status: "CURRENT", description: "ゲーム、ストーリー、デジタルコンテンツを扱う領域。" },
  { title: "Digital Platform", href: "/business/digital-platform", status: "FUTURE PLAN", description: "作品と技術を接続するプラットフォーム構想。" },
  { title: "R&D", href: "/business/research-development", status: "PREPARING", description: "次の製品と技術を検証する研究開発。" },
];

const productChildren: Child[] = [
  { title: "HeraixOS", href: "/products/heraixos", status: "PREPARING", description: "SQAHIA Digitalが開発するコンピューティングプラットフォーム。" },
  { title: "Heraix IGRAC", href: "/products/heraix-igrac", status: "FUTURE PLAN", description: "Create / Play / Publishのためのプラットフォーム構想。" },
  { title: "Heraklion", href: "/products/heraklion", status: "FUTURE PLAN", description: "AI / LLM・マルチエージェントの研究開発プロジェクト。" },
];

const technologyChildren: Child[] = [
  { title: "Heraix API", href: "/technology/heraix-api", status: "PREPARING", description: "将来の開発者向け接続基盤。" },
  { title: "Runtime", href: "/technology/runtime", status: "PREPARING", description: "作品とプロダクトを支える実行基盤。" },
  { title: "Platform", href: "/technology/platform", status: "PREPARING", description: "OS、ストア、Studioをつなぐ構成。" },
  { title: "Engineering", href: "/technology/engineering", status: "PREPARING", description: "設計、ビルド、QAを支える開発文化。" },
];

const qaChildren: Child[] = [
  { title: "QA Reports", href: "/qa-security/qa-reports", status: "PREPARING", description: "公開可能な検証記録を整理するページ。" },
  { title: "Security", href: "/qa-security/security", status: "PREPARING", description: "セキュリティ方針と連絡方法の準備。" },
  { title: "Advisories", href: "/qa-security/advisories", status: "PREPARING", description: "将来のセキュリティ告知アーカイブ。" },
];

const projectChildren: Child[] = [
  { title: "Project：TBL Forum", href: "/forum/tbl", status: "CURRENT", description: "多目的ストーリーメーカーの公開記録。" },
  { title: "Project：LanguageHaven", href: "/projects/languagehaven", status: "CURRENT", description: "HeraixOS_Kubを軸にした公開プロジェクト。" },
  { title: "Research", href: "/research", status: "PREPARING", description: "製品につながる研究開発の記録。" },
];

const sitemapChildren: Child[] = [
  { title: "Company & Business", href: "/about", status: "CURRENT", description: "考え方、会社情報、事業構造。" },
  { title: "Products", href: "/products", status: "PREPARING", description: "HeraixOS、Heraix IGRAC、Heraklion。" },
  { title: "Technology & Developers", href: "/technology", status: "PREPARING", description: "API、Runtime、Platform、Engineering。" },
  { title: "Research & QA", href: "/research", status: "PREPARING", description: "研究、品質、セキュリティの記録。" },
  { title: "Downloads & Support", href: "/downloads", status: "PREPARING", description: "配布、リリース、サポートの入口。" },
  { title: "Projects & Forums", href: "/projects", status: "CURRENT", description: "TBL、LanguageHaven、投資家向けフォーラム。" },
  { title: "Policies", href: "/privacy", status: "PREPARING", description: "プライバシー、利用方針、アクセシビリティ。" },
  { title: "Contact", href: "/contact", status: "CURRENT", description: "公式の問い合わせフォーム。" },
];

const contactFormUrl = "https://forms.cloud.microsoft/r/TeYnafGRUr";

const contactChildren: Child[] = [
  { title: "Business", href: "/contact/business", status: "PREPARING", description: "協業・業務に関する窓口。" },
  { title: "Press", href: "/contact/press", status: "PREPARING", description: "取材・メディアに関する窓口。" },
  { title: "Recruitment", href: "/contact/recruitment", status: "PREPARING", description: "採用に関する窓口。" },
  { title: "General", href: "/contact/general", status: "PREPARING", description: "その他のお問い合わせ窓口。" },
];

const pages: Record<string, PageData> = {
  "/about": {
    section: "ABOUT", code: "01", trail: "SQAHIA DIGITAL / ABOUT", title: "考え方から、\n事業を整える。", english: "ABOUT SQAHIA", status: "CURRENT",
    lead: "SQAHIA Digitalは、エンターテイメントを主に行い、ソフトウェアの開発やSPDEによるデータ収集にも取り組む団体です。",
    body: "ここでは、現在の活動を支える考え方と、法人化後を見据えたエンターテイメントを主軸とする事業構想を分けて公開します。確定していない計画は、将来計画であることを明示します。",
    principles: [{ label: "NOW", text: "現在は個人事業主として活動しています。" }, { label: "ENTERTAINMENT", text: "エンターテイメントを主に行います。" }, { label: "BEYOND", text: "ソフトウェア開発とSPDEデータ収集にも取り組みます。" }], children: aboutChildren,
  },
  "/about/philosophy": {
    section: "ABOUT", code: "01.1", trail: "ABOUT / PHILOSOPHY", title: "デジタルで、\n新しい体験を。", english: "PHILOSOPHY", status: "CURRENT",
    lead: "デジタル技術を、単なる道具ではなく、人が楽しみ、創造し、交流するための基盤として捉えます。",
    body: "技術、情報、表現を切り離すのではなく、面白さのためにそれぞれを結びます。未熟さゆえの好奇心と、無邪気に試す軽やかさを大切にしながら、まだない体験をつくります。",
    principles: [{ label: "PLAY", text: "面白いと思う方向へ、まず試す。" }, { label: "CURIOSITY", text: "未熟さを、学び続ける力にする。" }, { label: "INNOCENCE", text: "無邪気さを、つくる勇気にする。" }],
  },
  "/about/mission": {
    section: "ABOUT", code: "01.2", trail: "ABOUT / MISSION", title: "技術によって、\n可能性を広げる。", english: "MISSION", status: "FUTURE PLAN",
    lead: "将来のSQAHIA Digitalは、技術によってエンターテインメントとデジタル体験の可能性を広げることを使命として構想しています。",
    body: "新しいコンテンツ、新しいソフトウェア、新しい体験、そしてクリエイターが活動できる環境。これらを継続してつくるための技術と事業の土台を、段階的に積み上げます。",
    principles: [{ label: "CREATE", text: "まだない体験を構想する。" }, { label: "ENABLE", text: "表現を可能にする技術をつくる。" }, { label: "SHARE", text: "人と社会へ届ける方法を考える。" }], note: "本ページの使命は、法人化後を含む中長期の事業構想です。",
  },
  "/about/vision": {
    section: "ABOUT", code: "01.3", trail: "ABOUT / VISION", title: "体験と技術を、\n同時に育てる。", english: "VISION", status: "FUTURE PLAN",
    lead: "単なるゲームメーカーでも、単なるソフトウェア会社でもない。デジタルエンターテインメントとテクノロジーを融合する企業像を描いています。",
    body: "Entertainmentが人を楽しませ、Softwareが新しい技術をつくり、SPDEが未知の領域を探る。異なる領域を長期的に育てることで、SQAHIA Digital独自の企業価値を構築することを目指します。",
    principles: [{ label: "ENTERTAINMENT", text: "人と市場につながる体験。" }, { label: "SOFTWARE", text: "体験を成立させる技術資産。" }, { label: "SPDE", text: "次の可能性を探る新規領域。" }], note: "この企業像は投資家向け事業計画書に基づく将来構想です。",
  },
  "/about/company": {
    section: "ABOUT", code: "01.4", trail: "ABOUT / COMPANY", title: "現在地を、\n正確に伝える。", english: "COMPANY", status: "CURRENT",
    lead: "SQAHIA Digitalは現在、個人事業主として活動しています。法人化に向けた情報は、予定として明確に区別して公開します。",
    body: "法人化、資本金、人員構成、部門編成に関する情報は、投資家向け事業計画書における将来計画です。確定した情報が整い次第、このページを公式の会社情報として更新します。",
    principles: [{ label: "NAME", text: "SQAHIA Digital" }, { label: "STATUS", text: "個人事業主（現在）" }, { label: "FUTURE", text: "2028年の法人化を予定" }], note: "設立予定日および所在地は、登記完了前の予定情報です。登記情報、適格請求書発行事業者番号などは、確定後に更新します。",
    corporateInfo: [
      { label: "事業者名", value: "SQAHIA Digital", detail: "現在の事業者名" },
      { label: "代表者", value: "HRことSQAHIA", detail: "代表者名" },
      { label: "現在の事業形態", value: "個人事業主", detail: "現在の公式情報" },
      { label: "所在地", value: "静岡県........", detail: "詳細所在地は公開方針確定後に更新予定" },
      { label: "設立予定日", value: "2028年12月25日", detail: "法人化に向けた予定日", future: true },
    ],
  },
  "/about/history": {
    section: "ABOUT", code: "01.5", trail: "ABOUT / HISTORY", title: "記録を残し、\n次の判断へ。", english: "HISTORY", status: "CURRENT",
    lead: "SQAHIA Digitalの歩みは、公開できる事実と計画の更新を、時系列で記録していきます。",
    body: "現在公開している記録は、2026年8月15日に策定した事業計画書です。個別のプロジェクト、事業開始、法人化などの節目は、事実が確定した時点で追加します。",
    principles: [{ label: "2026.08.15", text: "SQAHIA Digital事業計画書を策定。" }, { label: "NEXT", text: "法人化に向けた計画を公開・更新。" }, { label: "ARCHIVE", text: "活動記録は確定次第追加予定。" }],
  },
  "/about/organization": {
    section: "ABOUT", code: "01.6", trail: "ABOUT / ORGANIZATION", title: "小さく始め、\n深く編成する。", english: "ORGANIZATION", status: "FUTURE PLAN",
    lead: "将来の創業時組織は、HQ、Entertainment、Softwareの最小構成から始める計画です。",
    body: "HQが事業戦略、財務、採用、契約、外部連携を統括し、EntertainmentとSoftwareが各領域の開発を担います。SPDEは基盤を整えた4年目以降に始動する構想です。",
    principles: [{ label: "HQ / 01", text: "経営・事業計画・ブランドを統括。" }, { label: "ENT / 02", text: "デジタルエンターテインメントを担当。" }, { label: "SFT / 01", text: "ソフトウェアと技術開発を担当。" }], note: "人員数・組織構成は、事業計画上の想定であり、現在の体制ではありません。",
  },
  "/business": {
    section: "BUSINESS", code: "02", trail: "SQAHIA DIGITAL / BUSINESS", title: "事業を、\n多層に育てる。", english: "BUSINESS", status: "FUTURE PLAN",
    lead: "SQAHIA Digitalは、ソフトウェア、AI、エンターテインメント、デジタルプラットフォーム、研究開発を接続する事業構想を育てています。",
    body: "自社プロダクトを企画・開発し、創作と技術の両方を積み上げることを目指します。各領域の提供状況は異なるため、公開済みの事実と準備中・将来構想を明確に分けて表示します。",
    principles: [{ label: "PRODUCT", text: "自社の製品と体験をつくる。" }, { label: "INTELLIGENCE", text: "知性の仕組みを研究する。" }, { label: "PLATFORM", text: "技術と作品の循環をつくる。" }], children: businessChildren,
  },
  "/business/entertainment": {
    section: "BUSINESS", code: "02.1", trail: "BUSINESS / ENTERTAINMENT", title: "面白さを、\n体験として届ける。", english: "ENTERTAINMENT", status: "FUTURE PLAN",
    lead: "ゲームとデジタルコンテンツを中心に、ユーザーへ直接価値を届ける事業領域として構想しています。",
    body: "PC、ゲーム機、Webなどを対象とするゲーム開発のほか、映像、音楽、インタラクティブコンテンツ、デジタルアートへの展開を想定します。小さくつくり、素早く試し、可能性を見極めながら育てる開発方式を重視します。",
    principles: [{ label: "GAMES", text: "オリジナル・実験的なゲーム体験。" }, { label: "CONTENT", text: "映像、音楽、インタラクティブ表現。" }, { label: "METHOD", text: "小さく作り、検証し、育てる。" }], projectHighlight: { title: "Project：TBL", english: "PUBLIC PROJECT / 01", status: "公開", body: "Project：TBLは、SQAHIA DigitalのEntertainment領域で公開するプロジェクトです。プロジェクトに関する確定情報は、このページを起点に順次更新します。" }, storyMaker: { intro: "TBLは、ソフトを所持しないプラットフォームとして参加できる、多目的なストーリーメーカーです。四人のベースメンバーを起点に、人物を加え、関係を編み替え、あなたの物語へ育てていきます。", members: [{ name: "カイザー", role: "ベースメンバー / 起点" }, { name: "スピカ", role: "ベースメンバー / 接続" }, { name: "エルシスト", role: "ベースメンバー / 展開" }, { name: "レミリオン", role: "ベースメンバー / 余白" }], principles: ["表現の自由と作品を認め合う", "サードパーティのリミックスを歓迎する", "すべてはSQAHIA Digitalがメイン"], expansion: "四人がいれば、どんな人物を追加しても君の物語にできる。", storyline: "四人のベースメンバー → 追加する人物 → あなたのストーリーライン" }, note: "このページは以前のBusiness分類を残すアーカイブ記録です。現在の事業構造では、Gaming & Entertainmentが正式な入口です。",
  },
  "/business/software": {
    section: "BUSINESS", code: "02.2", trail: "BUSINESS / SOFTWARE", title: "体験を支える、\n技術そのものを。", english: "SOFTWARE", status: "FUTURE PLAN",
    lead: "将来のSoftware Divisionは、製品体験を成立させる技術と、独自のソフトウェア資産をつくる領域です。",
    body: "ソフトウェア、開発ツール、システムソフトウェア、API、開発支援技術、自社サービスの技術基盤を、事業と連動しながら育てることを想定しています。",
    principles: [{ label: "PRODUCT", text: "自社で提供できるソフトウェア。" }, { label: "TOOLING", text: "開発を支えるツールと仕組み。" }, { label: "PLATFORM", text: "将来のサービスを支える技術基盤。" }], note: "このページは以前のBusiness分類を残すアーカイブ記録です。現在の事業構造では、Software Developmentが正式な入口です。",
  },
  "/business/hardware-entertainment": {
    section: "BUSINESS", code: "02.3", trail: "BUSINESS / HARDWARE ENTERTAINMENT", title: "触れる体験の、\n可能性を探る。", english: "HARDWARE ENTERTAINMENT", status: "PREPARING",
    lead: "ハードウェアとデジタルコンテンツの接点を探る研究・企画領域です。",
    body: "現時点では、具体的な製品、提供時期、開発体制は未定です。将来的に、インタラクション、デバイス、空間体験など、ソフトウェアだけでは完結しない体験の可能性を検討します。",
    principles: [{ label: "SCOPE", text: "デバイスと体験の関係を研究。" }, { label: "STATUS", text: "具体的な製品・計画は未公表。" }, { label: "UPDATE", text: "検討が進み次第、公式情報を更新。" }], projectHighlight: { title: "Project：LanguageHaven", english: "PUBLIC PROJECT / HARDWARE ENTERTAINMENT", status: "公開", body: "Project：LanguageHavenは、HeraixOS_Kubを軸に進めるHardware Entertainmentの公開プロジェクトです。協力はHeraix Computer Science Department（仮）。詳細な仕様・提供時期・開発体制は、確定した情報から順次更新します。" }, note: "このページは以前のBusiness分類を残すアーカイブ記録です。Project：LanguageHavenの公式記録はProjectsからも確認できます。",
  },
  "/business/spde": {
    section: "BUSINESS", code: "02.4", trail: "BUSINESS / SPDE", title: "次の領域を、\n研究から始める。", english: "SPDE", status: "FUTURE PLAN",
    lead: "SPDEは、既存事業とは異なる新しい技術・サービスを研究する、将来の成長領域です。",
    body: "最初の3年間で経営、技術、収益の基盤を整えた後、4年目から始動することを計画しています。サービス仕様は固定せず、研究開発、市場調査、技術検証を踏まえて段階的に決定します。",
    principles: [{ label: "TIMING", text: "事業開始4年目以降を想定。" }, { label: "RESEARCH", text: "市場調査と技術検証を優先。" }, { label: "FLEXIBILITY", text: "詳細な仕様は段階的に定義。" }], note: "このページは以前の事業計画の記録です。SPDEの正式名称・サービス内容は未確定で、現在の事業構造ではR&DとResearchの文脈で検討しています。",
  },
  "/products": {
    section: "PRODUCTS", code: "03", trail: "SQAHIA DIGITAL / PRODUCTS", title: "つくっているものを、\n正確に伝える。", english: "PRODUCTS", status: "PREPARING",
    lead: "HeraixOS、Heraix IGRAC、Heraklionを中心に、自社プロダクトと研究プロジェクトの公式情報を整理します。",
    body: "製品のダウンロード、対応環境、技術仕様、リリース情報は、公開条件が整ったものから掲載します。現時点で未確定の内容は、構想または準備中として明示します。",
    principles: [{ label: "HERAIXOS", text: "コンピューティングプラットフォーム。" }, { label: "IGRAC", text: "創作と遊びをつなぐ構想。" }, { label: "HERAKLION", text: "AI / LLMの研究開発。" }], children: productChildren,
  },
  "/products/heraixos": { section: "PRODUCTS", code: "03.1", trail: "PRODUCTS / HERAIXOS", title: "HeraixOS\nPlatform", english: "HERAIXOS", status: "PREPARING", lead: "HeraixOSは、SQAHIA Digitalが開発するコンピューティングプラットフォームです。", body: "HeraixOS Kubを含むEdition、Runtime、Store、Studioに関する情報は、公開条件と技術資料が整ったものからこのページで案内します。現時点ではダウンロード、対応環境、リリース情報は準備中です。", principles: [{ label: "KUB", text: "HeraixOS Kubの情報を準備。" }, { label: "PLATFORM", text: "Runtime・Store・Studioを構想。" }, { label: "DOCUMENTS", text: "技術資料は公開準備中。" }], specifications: { title: "HeraixOS Kub / 公開情報", description: "HeraixOS Kubは、HeraixOSのEditionとして準備しているコンピューティングプラットフォームです。実際のリリース前に、対応環境、インストール方法、整合性情報をこのページとDownloadsで正式に更新します。", groups: [{ label: "提供形態", value: "HeraixOSのEditionとして準備中", note: "配布形式・ライセンスは未確定です。" }, { label: "対応アーキテクチャ", value: "未公開", note: "CPUアーキテクチャ、起動方式は正式公開前に明示します。" }, { label: "対応ハードウェア", value: "未公開", note: "互換性マトリクスを公開予定です。" }, { label: "インストールイメージ", value: "準備中", note: "ISOなどの配布形式、サイズ、署名情報は未発表です。" }, { label: "Runtime / Store / Studio", value: "構想・設計段階", note: "利用可能な機能や提供時期は未確定です。" }, { label: "リリース情報", value: "未採番", note: "バージョン、Release Notes、SHA-256は公開時に掲載します。" }], cta: { href: "/downloads", label: "DOWNLOADSの公開状況を見る" } } },
  "/products/heraix-igrac": { section: "PRODUCTS", code: "03.2", trail: "PRODUCTS / HERAIX IGRAC", title: "Create. Play.\nPublish.", english: "HERAIX IGRAC", status: "FUTURE PLAN", lead: "Heraix IGRACは、ゲームとデジタルコンテンツをCreate / Play / Publishするためのプラットフォーム構想です。", body: "作品をつくる人、遊ぶ人、公開する人の接点を整え、創作が継続するための仕組みを研究します。仕様、利用方法、提供時期は確定していません。", principles: [{ label: "CREATE", text: "つくるための環境を構想。" }, { label: "PLAY", text: "遊びと表現をつなぐ。" }, { label: "PUBLISH", text: "公開と継続の仕組みを研究。" }] },
  "/products/heraklion": { section: "PRODUCTS", code: "03.3", trail: "PRODUCTS / HERAKLION", title: "Heraklion\nIntelligence", english: "HERAKLION", status: "FUTURE PLAN", lead: "Heraklionは、AI / LLMとマルチエージェントの可能性を探る研究開発プロジェクトです。", body: "HQ、Planner、Executor、Reviewerのような役割が循環する知性の構造を研究します。一般提供するAIサービス、API、モデル仕様は現在公開していません。", principles: [{ label: "HQ", text: "全体の目的と判断を整える。" }, { label: "AGENTS", text: "役割を持つ知性の循環を研究。" }, { label: "RESEARCH", text: "公開可能な成果を段階的に記録。" }], architecture: { title: "Heraklion / 研究アーキテクチャ", description: "これは、目的・計画・実行・検証を役割として分け、知性が循環する可能性を示す概念図です。実装済みのサービス構成、提供中のAPI、利用可能なモデルを表すものではありません。", nodes: [{ label: "INPUT", role: "Context", detail: "課題、創作の条件、参照する情報を受け取る。" }, { label: "HQ", role: "Direction", detail: "目的、制約、優先順位を整える。" }, { label: "PLANNER", role: "Plan", detail: "目的を作業単位と検証条件へ分解する。" }, { label: "EXECUTOR", role: "Act", detail: "生成、調査、ツール実行などの行為を担う。" }, { label: "REVIEWER", role: "Inspect", detail: "結果を確認し、次の計画へフィードバックする。" }] } },
  "/technology": {
    section: "TECHNOLOGY", code: "04", trail: "SQAHIA DIGITAL / TECHNOLOGY", title: "技術を、\n未来の資産にする。", english: "TECHNOLOGY", status: "FUTURE PLAN",
    lead: "技術を単発の制作に消費せず、継続して事業を支える資産として育てる構想です。",
    body: "将来の技術活動は、ソフトウェア、開発支援、API、研究を横断します。公開する技術情報、開発者向け資料、研究成果は、事実と公開条件が整ったものから掲載します。",
    principles: [{ label: "BUILD", text: "体験を成立させる技術をつくる。" }, { label: "LEARN", text: "研究と検証を通じて学ぶ。" }, { label: "COMPOUND", text: "技術資産を次の価値へつなぐ。" }], children: technologyChildren,
  },
  "/technology/heraix-api": { section: "TECHNOLOGY", code: "04.1", trail: "TECHNOLOGY / HERAIX API", title: "Heraix API\nInterface", english: "HERAIX API", status: "PREPARING", lead: "Heraix APIは、将来のプロダクトと外部開発者を接続するための技術基盤です。", body: "現在、一般公開中のAPI、SDK、開発者ポータルはありません。公開を行う際は、仕様、認証、変更履歴、サポート範囲を公式に案内します。", principles: [{ label: "INTERFACE", text: "プロダクトを接続する設計。" }, { label: "DOCUMENTATION", text: "公式資料を準備予定。" }, { label: "CHANGELOG", text: "公開時に変更管理を開始。" }] },
  "/technology/runtime": { section: "TECHNOLOGY", code: "04.2", trail: "TECHNOLOGY / RUNTIME", title: "Runtime\nFoundation", english: "RUNTIME", status: "PREPARING", lead: "Runtimeは、プロダクトと作品を動かすための実行基盤に関する研究領域です。", body: "IGR Runtime、NativeBridge、Package Systemなどを含む技術構成は、公開条件が整った内容から記録します。現時点で仕様や利用条件は公開していません。", principles: [{ label: "EXECUTE", text: "作品を動かす実行環境。" }, { label: "BRIDGE", text: "異なる技術を接続する構想。" }, { label: "PACKAGE", text: "配布と更新の仕組みを研究。" }] },
  "/technology/platform": { section: "TECHNOLOGY", code: "04.3", trail: "TECHNOLOGY / PLATFORM", title: "Platform\nSystem", english: "PLATFORM", status: "PREPARING", lead: "OS、Store、Studio、Runtimeをつなぐプラットフォーム構成を研究します。", body: "HeraixOSを核として、制作・配布・実行の各段階がつながる構成を目指します。実装状況、利用可能な機能、提供時期は準備中です。", principles: [{ label: "OS", text: "コンピューティング環境の基盤。" }, { label: "STUDIO", text: "制作を支える場を構想。" }, { label: "STORE", text: "公開と配布の接点を設計。" }] },
  "/technology/engineering": { section: "TECHNOLOGY", code: "04.4", trail: "TECHNOLOGY / ENGINEERING", title: "How We\nBuild", english: "ENGINEERING", status: "PREPARING", lead: "SQAHIA Digitalは、つくるだけでなく、検証し、改善し、記録する開発文化を目指します。", body: "C / C++、CMake、Ninja、SDL3、Dear ImGui、Wayland、Limineなどの技術は、採用・公開が確定したものから扱います。現時点での技術スタックを断定するものではありません。", principles: [{ label: "BUILD", text: "目的から実装を組み立てる。" }, { label: "TEST", text: "品質は検証によってつくる。" }, { label: "IMPROVE", text: "記録を次の改善につなぐ。" }] },
  "/business/ai": { section: "BUSINESS", code: "02.2", trail: "BUSINESS / AI & INTELLIGENCE", title: "知性を、\nつくる側へ。", english: "AI & INTELLIGENCE", status: "FUTURE PLAN", lead: "AI、LLM、AIエージェントを、自社の創作と技術を支える研究領域として育てます。", body: "Heraklionを含む研究開発を通じて、計画、実行、検証が協働する知性の構造を探ります。現時点で一般提供するAIサービスはありません。", principles: [{ label: "LLM", text: "言語モデルの可能性を研究。" }, { label: "AGENTS", text: "役割を持つ知性の連携。" }, { label: "HERAKLION", text: "研究開発プロジェクト。" }] },
  "/business/gaming-entertainment": { section: "BUSINESS", code: "02.3", trail: "BUSINESS / GAMING & ENTERTAINMENT", title: "遊びを、\nエコシステムに。", english: "GAMING & ENTERTAINMENT", status: "CURRENT", lead: "Project：TBLとHeraix IGRAC構想を起点に、参加者が想像と表現を広げられる体験をつくります。", body: "ゲーム、ストーリーメーカー、デジタルコンテンツを通じて、つくること・遊ぶこと・公開することがつながる場を研究します。提供形態や具体的なプロダクト仕様は、確定したものから公開します。", principles: [{ label: "TBL", text: "公開中のストーリーメーカー構想。" }, { label: "IGRAC", text: "Create / Play / Publishを研究。" }, { label: "CONTENT", text: "表現と参加をつなぐ。" }], projectHighlight: { title: "Project：TBL", english: "PUBLIC PROJECT / 01", status: "公開", body: "Project：TBLは、SQAHIA Digitalの公開プロジェクトです。詳細なストーリー・メンバー・公開記録はTBL Forumで順次更新します。" } },
  "/business/digital-platform": { section: "BUSINESS", code: "02.4", trail: "BUSINESS / DIGITAL PLATFORM", title: "技術と作品を、\nつなぐ場へ。", english: "DIGITAL PLATFORM", status: "FUTURE PLAN", lead: "プロダクト、コミュニティー、Runtime、Storeを接続するデジタルプラットフォームを構想しています。", body: "自社の技術と創作が循環し、利用者やクリエイターが参加できるための基盤を段階的に研究します。具体的なサービス仕様は未確定です。", principles: [{ label: "CONNECT", text: "作品と技術を接続。" }, { label: "COMMUNITY", text: "参加と創作の場を研究。" }, { label: "SCALE", text: "継続可能な基盤を設計。" }] },
  "/business/research-development": { section: "BUSINESS", code: "02.5", trail: "BUSINESS / R&D", title: "研究を、\n次の製品へ。", english: "RESEARCH & DEVELOPMENT", status: "PREPARING", lead: "研究開発は、まだない技術と体験の可能性を試し、次のプロダクトへつなげる領域です。", body: "HeraixOS、Heraix IGRAC、Heraklion、ClassicDOSなどの構想・実験を、公開可能な事実と将来計画に分けながら記録します。", principles: [{ label: "QUESTION", text: "次の問いを見つける。" }, { label: "PROTOTYPE", text: "小さく試し、学びを残す。" }, { label: "ARCHIVE", text: "実験の歴史を記録する。" }] },
  "/research": { section: "RESEARCH", code: "05", trail: "SQAHIA DIGITAL / RESEARCH", title: "研究から、\n新しい基盤を。", english: "RESEARCH & DEVELOPMENT", status: "PREPARING", lead: "SQAHIA Digitalの研究開発プロジェクトと、公開可能な検証記録を整理するページです。", body: "HeraixOS、Heraix IGRAC、Heraklion、ClassicDOSなどのテーマは、それぞれ公開状況が異なります。Active、Experimental、Archivedの記録方式は準備中です。", principles: [{ label: "ACTIVE", text: "進行中のテーマを準備中表示。" }, { label: "EXPERIMENTAL", text: "試作・検証の記録を整備。" }, { label: "ARCHIVED", text: "過去の挑戦も技術史として残す。" }] },
  "/qa-security": { section: "QA & SECURITY", code: "06", trail: "SQAHIA DIGITAL / QA & SECURITY", title: "品質は、\nつくるもの。", english: "QA & SECURITY", status: "PREPARING", lead: "SQAHIA Digitalは、品質を前提ではなく、設計・検証・記録によって育てるものとして扱います。", body: "QA Reports、Inspection Reports、Release Notes、Known Issues、Security Advisoriesなどの公開方式を整備します。現時点で公開可能な報告書やセキュリティ告知はありません。", principles: [{ label: "QA", text: "検証可能な品質を設計。" }, { label: "SECURITY", text: "方針と連絡経路を準備。" }, { label: "RECORD", text: "公開できる事実を記録。" }], policyDocument: { kicker: "INTERIM SECURITY POLICY", title: "暫定セキュリティポリシー", tag: "INTERIM / 2026", sections: [{ title: "適用範囲", summary: "暫定ポリシー", detail: "本概要は、SQAHIA Digitalの公開サイト、公開準備中のプロダクト情報、関連するデジタル資産の安全な取り扱いに関する暫定的な指針です。正式な製品サポート範囲や保証を定めるものではありません。" }, { title: "脆弱性の報告", summary: "責任ある開示", detail: "安全上の問題を見つけた場合は、再現手順、影響範囲、確認した環境を添えてお問い合わせフォームからご連絡ください。対応前の公開拡散や、データへの不正アクセスを伴う検証はお控えください。" }, { title: "情報の取り扱い", summary: "最小限の共有", detail: "お問い合わせには、パスワード、アクセストークン、個人情報、第三者の機密情報を記載しないでください。受付内容は、問題の確認と対応方針の検討に必要な範囲で扱います。" }, { title: "公開と更新", summary: "準備中", detail: "Supported Versions、対応目標時間、Security Advisories、公開鍵や署名情報は、製品と運用体制が整った段階で正式に案内します。" }], cta: { href: contactFormUrl, label: "セキュリティに関する連絡を送る", note: "Microsoft Formsが新しいタブで開きます。緊急性の高い場合でも、機密情報や認証情報は送信しないでください。" } }, children: qaChildren, note: "本セキュリティポリシーは暫定版です。製品の一般提供開始前に、対象範囲・報告方法・対応方針を改訂します。" },
  "/qa-security/qa-reports": { section: "QA & SECURITY", code: "06.1", trail: "QA & SECURITY / QA REPORTS", title: "QA\nReports", english: "QA REPORTS", status: "PREPARING", lead: "公開可能な品質保証・検証記録を掲載するページです。", body: "Build Information、Compatibility Matrix、Inspection Reportsなどを、公開条件が整ったものから掲載します。現時点で公開可能なレポートはありません。", principles: [{ label: "BUILD", text: "ビルド情報を記録。" }, { label: "TEST", text: "検証記録を整理。" }, { label: "COMPATIBILITY", text: "対応状況を公開予定。" }] },
  "/qa-security/security": { section: "QA & SECURITY", code: "06.2", trail: "QA & SECURITY / SECURITY", title: "Security\nPolicy", english: "SECURITY", status: "PREPARING", lead: "セキュリティ方針と脆弱性報告の受付方法を整備するページです。", body: "Supported Versions、Vulnerability Disclosure、Security Teamへの連絡方法は、体制と公開条件が整った時点で公式に案内します。", principles: [{ label: "POLICY", text: "方針を準備中。" }, { label: "DISCLOSURE", text: "報告方法を整備予定。" }, { label: "ADVISORIES", text: "将来の告知を記録。" }] },
  "/qa-security/advisories": { section: "QA & SECURITY", code: "06.3", trail: "QA & SECURITY / ADVISORIES", title: "Security\nAdvisories", english: "SECURITY ADVISORIES", status: "PREPARING", lead: "将来のセキュリティ告知アーカイブです。", body: "現在、公開中のセキュリティアドバイザリーはありません。製品と体制の公開状況に応じて、正確な告知と対応情報を掲載します。", principles: [{ label: "CURRENT", text: "公開中の告知はありません。" }, { label: "ARCHIVE", text: "告知履歴を残す。" }, { label: "RESPONSE", text: "対応情報を明確にする。" }] },
  "/privacy": { section: "LEGAL", code: "09.1", trail: "SQAHIA DIGITAL / PRIVACY", title: "個人情報を、\n慎重に扱う。", english: "PRIVACY", status: "PREPARING", lead: "お問い合わせフォームで受け取る情報の取り扱いに関する、公開準備中の方針です。", body: "本ページは、Microsoft Formsを通じて送信されるお問い合わせ情報の取り扱いを説明するための暫定的な概要です。正式なプライバシーポリシーは、事業体制と運用内容の確定後に改訂します。", principles: [{ label: "MINIMUM", text: "必要な情報だけを扱う。" }, { label: "PURPOSE", text: "お問い合わせ対応に利用する。" }, { label: "UPDATE", text: "正式版を公開前に更新する。" }], policyDocument: { kicker: "INTERIM PRIVACY NOTICE", title: "プライバシーに関する概要", tag: "INTERIM / 2026", sections: [{ title: "取得する情報", summary: "フォーム送信時", detail: "氏名、連絡先、所属、問い合わせ内容など、フォーム入力者が送信した情報を受け取る場合があります。" }, { title: "利用目的", summary: "対応・確認", detail: "お問い合わせへの回答、内容の確認、関連する連絡に必要な範囲で利用します。" }, { title: "第三者提供", summary: "原則として行わない", detail: "法令に基づく場合または本人の同意がある場合を除き、問い合わせ情報を第三者へ提供することを目的としません。" }, { title: "改訂", summary: "正式版へ更新", detail: "運用体制・連絡先・製品提供が確定した段階で、保管期間、委託先、開示等の手続を含む正式版へ改訂します。" }], cta: { href: contactFormUrl, label: "プライバシーに関する連絡を送る", note: "Microsoft Formsが新しいタブで開きます。不要な機密情報は送信しないでください。" } }, note: "本ページは法的助言ではなく、現時点の運用概要です。正式なポリシー公開前に内容が更新される場合があります。" },
  "/terms": { section: "LEGAL", code: "09.2", trail: "SQAHIA DIGITAL / TERMS", title: "利用の前提を、\n明確にする。", english: "TERMS OF USE", status: "PREPARING", lead: "公式サイト、公開フォーラム、将来のプロダクト利用に関する基本方針を整理する準備ページです。", body: "正式なサービス利用規約、製品ライセンス、コミュニティー規約は、対象となるサービスの公開前に個別に提示します。本ページは現時点での暫定的な利用方針を示します。", principles: [{ label: "FAIR USE", text: "他者の権利を尊重する。" }, { label: "SCOPE", text: "対象サービスごとに定める。" }, { label: "REVISION", text: "公開前に正式版へ更新する。" }], policyDocument: { kicker: "INTERIM TERMS OF USE", title: "利用方針の概要", tag: "INTERIM / 2026", sections: [{ title: "サイトの利用", summary: "情報提供", detail: "本サイトの内容は、SQAHIA Digitalの活動・構想・公開情報を知らせることを目的とします。未確定情報は準備中または構想として表示します。" }, { title: "知的財産", summary: "無断利用の制限", detail: "ロゴ、文章、図、画像、プロジェクト情報の利用条件は、個別に許可された場合を除き、公式の案内に従ってください。" }, { title: "フォーラム・コミュニティー", summary: "個別ルール", detail: "Project：TBLなどの参加・投稿・リミックスに関する条件は、各フォーラムのガイドラインで定めます。" }, { title: "改訂", summary: "対象に合わせて更新", detail: "製品・コミュニティーの提供開始に合わせ、対象範囲、禁止事項、免責、準拠方針を含む正式規約へ更新します。" }] }, note: "本ページは暫定的な概要です。正式な利用規約・ライセンス・コミュニティー規約ではありません。" },
  "/security/reporting": { section: "QA & SECURITY", code: "06.4", trail: "QA & SECURITY / SECURITY REPORTING", title: "安全上の問題を、\n正しく伝える。", english: "SECURITY REPORTING", status: "PREPARING", lead: "安全上の問題を見つけた場合の、暫定的な報告ガイドです。", body: "現時点で一般提供中の製品は限られているため、正式な脆弱性報告制度は準備中です。問題の可能性に気づいた場合は、影響を広げず、必要最小限の情報を公式フォームから共有してください。", principles: [{ label: "DESCRIBE", text: "再現手順と影響範囲を伝える。" }, { label: "PROTECT", text: "不正アクセスや公開拡散を行わない。" }, { label: "CONTACT", text: "公式フォームを利用する。" }], policyDocument: { kicker: "RESPONSIBLE DISCLOSURE / INTERIM", title: "セキュリティ報告ガイド", tag: "PREPARING", sections: [{ title: "報告に含める内容", summary: "再現可能性", detail: "対象URLまたは製品名、確認日時、再現手順、期待される結果、実際の結果、影響範囲を分かる範囲で共有してください。" }, { title: "避けてほしい行為", summary: "安全な検証", detail: "データの取得・改変・破壊、他者アカウントへのアクセス、サービス妨害、脆弱性の一般公開を伴う検証は行わないでください。" }, { title: "受付後の扱い", summary: "確認準備中", detail: "受付内容は、問題の確認と対応方針の検討に使用します。対応目標時間、報奨、公開方法は体制整備後に正式化します。" }], cta: { href: contactFormUrl, label: "セキュリティ報告を送る", note: "Microsoft Formsが新しいタブで開きます。パスワード、トークン、個人情報などの機密情報は送信しないでください。" } }, note: "緊急対応用の専用窓口は現在準備中です。報告制度の正式化後に更新します。" },
  "/support": { section: "SUPPORT", code: "10.1", trail: "SQAHIA DIGITAL / SUPPORT", title: "困ったときに、\n正しい入口へ。", english: "SUPPORT", status: "PREPARING", lead: "製品公開前のサポート案内と、将来のサポート体制に関する準備ページです。", body: "HeraixOS Kubなどの一般提供開始後は、対応環境、インストール前の確認、既知の制限、問い合わせ方法、リリースノートをこのページから案内します。現時点では製品サポートの受付・保証範囲は未確定です。", principles: [{ label: "CHECK", text: "公開状況と既知の制限を確認。" }, { label: "GUIDE", text: "手順は製品別に整備。" }, { label: "CONTACT", text: "必要な情報を添えて連絡。" }], note: "一般提供中のHeraixOS Kubサポート、専用サポート窓口、対応目標時間は準備中です。" },
  "/releases": { section: "RELEASES", code: "10.2", trail: "SQAHIA DIGITAL / RELEASES", title: "変更を、\n公式の記録へ。", english: "RELEASE NOTES", status: "PREPARING", lead: "製品、研究、プラットフォームの更新を記録する公式リリースノートの入口です。", body: "HeraixOS Kub、Heraix IGRAC、Heraklionなどの更新が公開可能になった時点で、バージョン、公開日、変更点、既知の問題、整合性情報を記録します。現在、公開済みのリリースはありません。", principles: [{ label: "VERSION", text: "版と公開日を記録。" }, { label: "CHANGELOG", text: "変更点を正確に知らせる。" }, { label: "KNOWN ISSUES", text: "既知の制限を明示する。" }] },
  "/developers": { section: "DEVELOPERS", code: "10.3", trail: "SQAHIA DIGITAL / DEVELOPERS", title: "つくる人のための、\n技術の入口。", english: "DEVELOPERS", status: "PREPARING", lead: "Heraix API、Runtime、SDK、技術資料を将来的に集約する開発者向け入口です。", body: "現在、一般公開中のSDK、APIキー、開発者ポータルはありません。公開開始時には、Getting Started、API Reference、Runtime Docs、SDK、Changelogを製品別に整備します。", principles: [{ label: "API", text: "外部との接続を準備。" }, { label: "RUNTIME", text: "実行基盤の資料を準備。" }, { label: "DOCS", text: "開発者向け記録を整える。" }], note: "将来のAPI提供可否、認証方式、利用条件は未確定です。" },
  "/research/heraklion": { section: "RESEARCH", code: "05.1", trail: "RESEARCH / HERAKLION", title: "知性の循環を、\n研究記録として。", english: "HERAKLION RESEARCH NOTES", status: "PREPARING", lead: "Heraklionの目的、アーキテクチャ、研究上の限界を記録するためのページです。", body: "Heraklionは、目的・計画・実行・検証の役割を分けた知性の循環を研究する構想です。実装済みのAIサービス、モデルの性能、一般公開のAPIを示すものではありません。", principles: [{ label: "PURPOSE", text: "役割分担の可能性を探る。" }, { label: "LIMITS", text: "研究と提供を混同しない。" }, { label: "LOG", text: "公開可能な更新を記録する。" }], note: "研究ログ、実験結果、モデル評価は公開条件が整った内容から追加します。" },
  "/products/heraixos/kub": { section: "PRODUCTS", code: "03.1.1", trail: "PRODUCTS / HERAIXOS / KUB", title: "HeraixOS Kub\nRecord", english: "HERAIXOS KUB", status: "PREPARING", lead: "HeraixOS Kubに関する公式情報を、仕様・対応環境・配布状況ごとに整理する詳細ページです。", body: "HeraixOS Kubは、HeraixOSのEditionとして準備中です。現在、CPUアーキテクチャ、起動方式、対応ハードウェア、配布形式、ライセンス、バージョン番号は正式公開前のため未確定です。", principles: [{ label: "EDITION", text: "HeraixOSのEditionとして準備。" }, { label: "COMPATIBILITY", text: "対応環境は未公開。" }, { label: "RELEASE", text: "配布情報は未採番。" }], specifications: { title: "Kub / 詳細な公開状態", description: "公式リリースの前に、対象環境、インストール方法、整合性確認、既知の制限をこのページとDownloadsで更新します。現在の表記は、公開準備中であることを示すものです。", groups: [{ label: "CPUアーキテクチャ", value: "未公開" }, { label: "起動方式", value: "未公開" }, { label: "対応ハードウェア", value: "未公開" }, { label: "配布形式", value: "準備中" }, { label: "ライセンス", value: "未確定" }, { label: "リリース番号", value: "未採番" }], cta: { href: "/downloads/heraixos-kub", label: "KubのDownloads状況を見る" } }, note: "実際のダウンロード、署名、ハッシュ、インストール手順は、正式公開前には提供しません。" },
  "/downloads/heraixos-kub": { section: "DOWNLOADS", code: "07.1", trail: "DOWNLOADS / HERAIXOS KUB", title: "Kub\nDownloads", english: "HERAIXOS KUB DOWNLOADS", status: "PREPARING", lead: "HeraixOS Kubの配布・整合性情報を掲載するための製品別Downloadsページです。", body: "現時点で、ダウンロード可能なISO、アーカイブ、署名、SHA-256、システム要件、インストールガイドは公開していません。公式リリース時には、最新版と過去版、整合性確認、既知の制限をこのページに掲載します。", principles: [{ label: "LATEST", text: "公開リリースはありません。" }, { label: "INTEGRITY", text: "署名・ハッシュは公開時に掲載。" }, { label: "INSTALL", text: "手順は公開時に案内。" }] },
  "/projects/languagehaven": { section: "PROJECTS", code: "11.1", trail: "PROJECTS / LANGUAGEHAVEN", title: "Project：\nLanguageHaven", english: "LANGUAGEHAVEN", status: "CURRENT", lead: "Project：LanguageHavenは、HeraixOS_Kubを軸に進めるHardware Entertainmentの公開プロジェクトです。", body: "協力先はHeraix Computer Science Department（仮）です。プロジェクトの詳細な仕様、提供時期、開発体制、対応環境は確定していないため、公開可能な情報から順次記録します。", principles: [{ label: "KUB", text: "HeraixOS_Kubとの接続。" }, { label: "COOPERATION", text: "協力先は仮称として掲載。" }, { label: "RECORD", text: "確定した情報から更新。" }], note: "協力先の正式名称・関係・公開範囲は未確定です。" },
  "/forum/tbl/guidelines": { section: "TBL FORUM", code: "F.01", trail: "PROJECT：TBL / GUIDELINES", title: "物語をつくるための、\n共通の前提。", english: "TBL PARTICIPATION GUIDELINES", status: "PREPARING", lead: "Project：TBLへ参加・投稿・リミックスするための正式ガイドラインを整備するページです。", body: "TBLの三原則を尊重しつつ、作品・キャラクター・投稿の扱い、クレジット、権利、参加資格、年齢条件、禁止事項を明確にする必要があります。これらの正式な条件は現在準備中です。", principles: [{ label: "RESPECT", text: "表現と作品を尊重する。" }, { label: "REMIX", text: "条件が整ったリミックスを歓迎。" }, { label: "RULES", text: "正式な投稿ルールを準備中。" }], note: "TBLの投稿・キャラクター追加・リミックスの正式な受付は、参加条件と権利方針が確定してから開始します。" },
  "/forum/tbl/characters": { section: "TBL FORUM", code: "F.02", trail: "PROJECT：TBL / CHARACTERS", title: "登場人物を、\n物語の索引へ。", english: "TBL CHARACTER INDEX", status: "PREPARING", lead: "TBLのベースメンバーと、将来の登場人物を整理するキャラクター索引です。", body: "カイザー、スピカ、エルシスト、レミリオンをベースメンバーとして公開しています。人物の詳細プロフィール、関係、登場記録、投稿されたキャラクターの扱いは、ガイドライン確定後に更新します。", principles: [{ label: "BASE / 04", text: "四人のベースメンバー。" }, { label: "RELATION", text: "関係性を記録する。" }, { label: "ARCHIVE", text: "登場記録を整理する。" }] },
  "/press": { section: "PRESS", code: "12.1", trail: "SQAHIA DIGITAL / PRESS", title: "伝えるための、\n正しい素材。", english: "PRESS KIT", status: "PREPARING", lead: "メディア、協業先、紹介記事向けの公式情報・素材を整理するプレスキットの入口です。", body: "会社概要、ロゴ、プロダクト概要、公開可能な画像、掲載時の表記、取材窓口を整備します。現在、ダウンロード可能な公式素材と利用条件は準備中です。", principles: [{ label: "BRAND", text: "公式ロゴと表記を案内。" }, { label: "FACTS", text: "公開済み事実を整理。" }, { label: "CONTACT", text: "取材窓口へ接続。" }], note: "ロゴ・画像の利用条件は、正式なプレスキット公開時に明示します。" },
  "/careers/faq": { section: "CAREERS", code: "13.1", trail: "CAREERS / FAQ", title: "一緒につくる前に、\n知ってほしいこと。", english: "CAREERS FAQ", status: "PREPARING", lead: "募集開始前に、SQAHIA Digitalの採用方針と参加までの考え方を案内するFAQページです。", body: "公開中の募集職種・雇用条件・働き方・選考基準はありません。募集開始後に、役割、作品提出の扱い、面談、個人情報の取り扱いを公式情報として追加します。", principles: [{ label: "TIMING", text: "募集開始時に更新。" }, { label: "PORTFOLIO", text: "提出方法を準備中。" }, { label: "PROCESS", text: "選考の流れを明確にする。" }] },
  "/accessibility": { section: "ACCESSIBILITY", code: "14.1", trail: "SQAHIA DIGITAL / ACCESSIBILITY", title: "誰にとっても、\n読める場所へ。", english: "ACCESSIBILITY", status: "PREPARING", lead: "SQAHIA Digitalは、情報が読みやすく、操作しやすいサイトを目指して改善を続けます。", body: "キーボード操作、見出し構造、コントラスト、画像代替テキスト、モバイル表示などを継続的に確認します。現時点で特定のアクセシビリティ規格への完全準拠を表明するものではありません。", principles: [{ label: "READ", text: "内容を読みやすく整える。" }, { label: "OPERATE", text: "操作しやすさを確認。" }, { label: "IMPROVE", text: "フィードバックから改善。" }], note: "利用上の問題を見つけた場合は、お問い合わせフォームからお知らせください。" },
  "/sitemap": { section: "SITEMAP", code: "14.2", trail: "SQAHIA DIGITAL / SITEMAP", title: "サイト全体を、\nひとつの地図に。", english: "SITEMAP", status: "CURRENT", lead: "SQAHIA Digitalの公式ページ、製品、フォーラム、運用情報への入口を整理します。", body: "HomeからAbout、Business、Products、Technology、Research、QA & Security、Downloads、Projects、News、Careers、Contact、Forumへ移動できます。新しいページは公開時にこの地図へ追加します。", principles: [{ label: "COMPANY", text: "考え方と現在地。" }, { label: "ECOSYSTEM", text: "製品・技術・研究。" }, { label: "OPERATIONS", text: "運用・連絡・公式記録。" }], children: sitemapChildren },
  "/downloads": { section: "DOWNLOADS", code: "07", trail: "SQAHIA DIGITAL / DOWNLOADS", title: "配布を、\n正確な情報から。", english: "DOWNLOADS", status: "PREPARING", lead: "SQAHIA Digitalの製品ダウンロードとリリース情報を集約するページです。", body: "HeraixOS Kubなどの配布を行う場合は、Latest Release、Previous Releases、SHA-256、ISO Size、System Requirements、Release Notesを公式情報として掲載します。現在、公開可能なダウンロードはありません。", principles: [{ label: "RELEASES", text: "公開リリースは準備中。" }, { label: "INTEGRITY", text: "ハッシュ情報を掲載予定。" }, { label: "SUPPORT", text: "対応環境と注意事項を明記。" }] },
  "/technology-map": { section: "ECOSYSTEM", code: "08", trail: "SQAHIA DIGITAL / TECHNOLOGY MAP", title: "技術と製品を、\nひとつの地図に。", english: "SQAHIA DIGITAL ECOSYSTEM", status: "FUTURE PLAN", lead: "SQAHIA Digitalの事業、技術、製品がどのようにつながるかを示すエコシステムマップです。", body: "Software、AI、Entertainmentの各領域から、HeraixOS、Heraklion、Heraix IGRACへ接続し、Kub、API、Runtime、Store、Studioなどの構想へ広げます。各要素の公開状況は異なります。", principles: [{ label: "SOFTWARE", text: "HeraixOS / Kub / API / Runtime。" }, { label: "AI", text: "Heraklion / LLM / Agents。" }, { label: "ENTERTAINMENT", text: "IGRAC / Gaming / TBL。" }] },
  "/projects": { section: "PROJECTS", code: "11", trail: "SQAHIA DIGITAL / PROJECTS", title: "プロジェクトを、\n記録として残す。", english: "PROJECTS", status: "CURRENT", lead: "SQAHIA Digitalの公開プロジェクトと研究記録を一覧するアーカイブです。", body: "Project：TBL、Project：LanguageHaven、研究開発など、公開範囲が確定したものから目的、背景、更新記録を整理します。各プロジェクトの状態と情報量は異なります。", principles: [{ label: "PUBLIC", text: "公開可能なプロジェクトを記録。" }, { label: "PROCESS", text: "背景と設計の判断を残す。" }, { label: "CREDITS", text: "関係者と権利を正確に表記。" }], children: projectChildren },
  "/news": { section: "NEWS", code: "06", trail: "SQAHIA DIGITAL / NEWS", title: "変化を、\n正式に知らせる。", english: "NEWS", status: "PREPARING", lead: "SQAHIA Digitalの公式ニュースアーカイブを準備しています。", body: "会社情報、製品公開、研究発表、採用、イベントなどの確定情報は、このページで時系列にお知らせします。現在、公開できるニュースはありません。", principles: [{ label: "OFFICIAL", text: "確定情報の一次発信。" }, { label: "ARCHIVE", text: "発表の履歴を保存。" }, { label: "UPDATE", text: "公開時に順次掲載。" }], children: [{ title: "News Archive", href: "/news/archive", status: "PREPARING", description: "記事公開に向けた公式アーカイブの構造。" }] },
  "/news/archive": { section: "NEWS", code: "06.1", trail: "NEWS / ARCHIVE", title: "発表を、\n後から辿れる形へ。", english: "NEWS ARCHIVE", status: "PREPARING", lead: "ニュース記事を、公式記録として公開・更新するためのアーカイブです。", body: "製品・会社に関する正式発表は準備中です。初回の正式発表以降は、公開日、対象プロダクト、本文、関連リンク、更新履歴を記事単位で掲載します。", principles: [{ label: "DATE", text: "公開日を記録する。" }, { label: "SOURCE", text: "一次情報を明示する。" }, { label: "REVISION", text: "更新履歴を残す。" }], children: [{ title: "News Archive Setup", href: "/news/archive-setup", status: "CURRENT", description: "公式記録の公開形式を整備したサイト更新。" }] },
  "/news/archive-setup": { section: "NEWS", code: "06.1.1", trail: "NEWS / ARCHIVE / SETUP", title: "News Archiveの\n公開準備について。", english: "SITE UPDATE / 2026-08-26", status: "CURRENT", lead: "SQAHIA Digitalは、製品・研究・会社情報の正式な発表を記録するNews Archiveの公開形式を整備しました。", body: "このページは、ニュース記事詳細の公開形式を示す初回のサイト更新記録です。HeraixOS Kub、Heraklion、Project：TBLなどの製品・プロジェクトに関する具体的な発表は、本記録には含みません。確定した情報だけを、今後の記事として掲載します。", principles: [{ label: "DATE", text: "2026年8月26日" }, { label: "SCOPE", text: "News Archiveの公開形式。" }, { label: "NEXT", text: "確定情報から記事を追加。" }], note: "本記事はサイト構造の更新記録です。製品の一般提供、リリース日、技術仕様、協業発表を意味するものではありません。" },
  "/careers": { section: "CAREERS", code: "07", trail: "SQAHIA DIGITAL / CAREERS", title: "次の体験を、\n一緒につくる。", english: "CAREERS", status: "PREPARING", lead: "SQAHIA Digitalは、エンターテイメントを中心に、ソフトウェア開発とSPDEのためのデータ収集にも取り組んでいます。現在は、最初の仲間を迎えるための準備期間です。", body: "公開中の募集職種・採用条件はまだありません。未熟さと無邪気さを大切にしながら、面白いと思う方向へ試し、作品と技術を育てる人を迎えられる体制を整えています。募集開始後は、①募集内容の公開、②応募、③作品や考えを聞く対話、④お互いの判断、という順で参加を進めます。役割、働き方、選考の流れ、応募条件はこのページで正式に案内します。", principles: [{ label: "WHO", text: "面白いを起点に、まず試せる人。" }, { label: "HOW", text: "未熟さを学びに、無邪気さを行動に変える。" }, { label: "WHEN", text: "体制と募集条件が整い次第、公開。" }], note: "現在は募集準備中です。採用開始前の個別応募・書類受付は行っていません。" },
  "/contact": {
    section: "CONTACT", code: "08", trail: "SQAHIA DIGITAL / CONTACT", title: "正しい窓口へ、\n正確に届ける。", english: "CONTACT", status: "PREPARING",
    lead: "事業、報道、採用、一般のお問い合わせを、専用フォームで受け付けています。",
    body: "お問い合わせ内容に応じて、下層の窓口またはMicrosoft Formsフォームをご利用ください。フォーム送信後、内容を確認のうえ担当者よりご連絡します。",
    principles: [{ label: "BUSINESS", text: "協業・業務に関する窓口。" }, { label: "PRESS", text: "取材・メディアに関する窓口。" }, { label: "GENERAL", text: "その他のお問い合わせ窓口。" }], children: contactChildren,
  },
  "/contact/business": { section: "CONTACT", code: "08.1", trail: "CONTACT / BUSINESS", title: "Business\nContact", english: "BUSINESS CONTACT", status: "PREPARING", lead: "協業・業務に関するお問い合わせ窓口です。", body: "協業、業務提携、プロジェクトに関するご相談は、指定のMicrosoft Formsフォームからお送りください。", principles: [{ label: "SCOPE", text: "協業・業務の相談。" }, { label: "STATUS", text: "連絡先は準備中。" }, { label: "UPDATE", text: "確定後に公式公開。" }] },
  "/contact/press": { section: "CONTACT", code: "08.2", trail: "CONTACT / PRESS", title: "Press\nContact", english: "PRESS CONTACT", status: "PREPARING", lead: "取材・メディアに関するお問い合わせ窓口です。", body: "取材、掲載、メディア関連のご連絡は、指定のMicrosoft Formsフォームからお送りください。", principles: [{ label: "MEDIA", text: "取材・メディアの窓口。" }, { label: "MATERIALS", text: "公式素材は準備中。" }, { label: "STATUS", text: "連絡先は未公開。" }] },
  "/contact/recruitment": { section: "CONTACT", code: "08.3", trail: "CONTACT / RECRUITMENT", title: "Recruitment\nContact", english: "RECRUITMENT CONTACT", status: "PREPARING", lead: "採用情報の公開と応募受付に関する案内ページです。", body: "現在は募集準備中ですが、採用に関するご連絡や関心の共有は、指定のMicrosoft Formsフォームからお送りいただけます。", principles: [{ label: "NOW", text: "募集準備中です。" }, { label: "LINK", text: "募集開始時はCAREERSへ掲載。" }, { label: "PRIVACY", text: "情報の取り扱いを明示します。" }] },
  "/contact/general": { section: "CONTACT", code: "08.4", trail: "CONTACT / GENERAL", title: "General\nContact", english: "GENERAL CONTACT", status: "PREPARING", lead: "その他のお問い合わせ窓口です。", body: "ご相談内容が他の窓口に当てはまらない場合は、指定のMicrosoft Formsフォームからお送りください。", principles: [{ label: "GENERAL", text: "一般のお問い合わせ。" }, { label: "RESPONSE", text: "対応範囲は準備中。" }, { label: "STATUS", text: "連絡先は未公開。" }] },
};

const topLinks = [
  ["ABOUT", "/about"], ["BUSINESS", "/business"], ["PRODUCTS", "/products"], ["TECH", "/technology"], ["RESEARCH", "/research"], ["QA", "/qa-security"], ["DOWNLOADS", "/downloads"],
];

export default function CorporatePage() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const page = pages[location] ?? pages["/about"];
  const isContactPage = location === "/contact" || location.startsWith("/contact/");
  const isInquiryCtaPage = isContactPage || ["/privacy", "/qa-security", "/security/reporting"].includes(location);

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-[#121416] selection:bg-[#1748e8] selection:text-white">
      <header className="corporate-header sticky top-0 z-50 border-b border-[#121416]/12 bg-[#f6f3ec]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1520px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="/" className="flex items-center gap-3" aria-label="SQAHIA Digitalホームへ"><img src="/manus-storage/sqahia-logo-official_8e289d78.png" alt="" className="official-logo h-10 w-10 object-contain" /><span className="brand-lockup font-display text-[14px] font-bold tracking-[-0.05em]">SQAHIA <span className="font-mono text-[8px] font-medium tracking-[0.18em] text-[#121416]/50">DIGITAL</span></span></a>
          <nav className="hidden items-center gap-4 xl:gap-5 lg:flex" aria-label="グローバルナビゲーション">{topLinks.map(([label, href]) => <a key={label} href={href} className="corporate-nav-link">{label}</a>)}<a href="/contact" className="corporate-contact-link">CONTACT <ArrowUpRight size={12} /></a></nav>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid h-10 w-10 place-items-center border border-[#121416]/15 lg:hidden" aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#121416]/12 bg-[#f6f3ec] px-5 pb-6 pt-2 lg:hidden" aria-label="モバイルナビゲーション">{topLinks.map(([label, href], index) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-[#121416]/12 py-3.5 font-mono text-xs"><span><b className="mr-3 text-[#1748e8]">0{index + 1}</b>{label}</span><ChevronRight size={15} /></a>)}<a href="/contact" onClick={() => setMenuOpen(false)} className="mt-5 flex items-center justify-between bg-[#1748e8] px-4 py-4 font-mono text-[11px] tracking-[0.1em] text-white">CONTACT <ArrowUpRight size={15} /></a></nav>}
      </header>

      <main>
        <section className="corporate-hero relative overflow-hidden border-b border-[#121416]/15">
          <div className="corporate-hero-grid absolute inset-0" aria-hidden="true" />
          <div className="corporate-sigil" aria-hidden="true"><span /><i /><b /></div>
          <div className="relative mx-auto grid max-w-[1520px] gap-9 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:px-10 lg:py-28">
            <div className="lg:col-span-3"><p className="section-kicker"><span>{page.code}</span>{page.section}</p></div>
            <div className="lg:col-span-8 lg:col-start-5"><p className="font-mono text-[10px] tracking-[0.13em] text-[#121416]/50">{page.trail}</p><h1 className="mt-5 whitespace-pre-line font-display text-[clamp(3.15rem,7vw,7.8rem)] font-bold leading-[0.86] tracking-[-0.08em]">{page.title}</h1><div className="mt-10 grid gap-6 border-t border-[#121416]/18 pt-5 md:grid-cols-[1fr_auto] md:items-end"><p className="max-w-2xl text-[15px] leading-8 text-[#121416]/75">{page.lead}</p><StatusBadge status={page.status} /></div></div>
          </div>
          <div className="relative mx-auto max-w-[1520px] border-t border-[#121416]/15 px-5 sm:px-8 lg:px-10"><div className="grid grid-cols-2 divide-x divide-[#121416]/15 sm:grid-cols-4"><MicroStat label="SECTION" value={page.section} /><MicroStat label="STATUS" value={labelFor(page.status)} /><MicroStat label="DOCUMENT" value="Studio record" /><MicroStat label="ROUTE" value={location} /></div></div>
        </section>

        <section className="mx-auto grid max-w-[1520px] lg:grid-cols-12">
          <aside className="hidden border-r border-[#121416]/15 px-10 py-12 lg:col-span-3 lg:block"><div className="sticky top-[112px]"><p className="font-mono text-[9px] tracking-[0.14em] text-[#121416]/45">SITE TREE</p><a href="/" className="mt-5 flex items-center gap-2 border-y border-[#121416]/15 py-3 font-mono text-[10px] tracking-[0.08em] transition-colors hover:text-[#1748e8]"><ArrowLeft size={13} />HOME</a><a href="/forum" className="mt-7 block border border-[#121416]/15 p-4 transition-colors hover:border-[#1748e8]"><p className="font-mono text-[9px] tracking-[0.1em] text-[#1748e8]">INVESTOR FORUM</p><p className="mt-2 font-display text-lg font-semibold tracking-[-0.04em]">株式会社への道</p><p className="mt-2 text-[11px] leading-5 text-[#121416]/60">将来の法人化計画を公開中</p></a></div></aside>
          <div className="px-5 py-14 sm:px-8 sm:py-20 lg:col-span-8 lg:col-start-5 lg:px-0">
            <p className="font-mono text-[10px] tracking-[0.12em] text-[#1748e8]">{page.english}</p>
            <div className="mt-5 grid gap-8 border-t-2 border-[#121416] pt-7 md:grid-cols-[minmax(0,1fr)_230px]"><div><p className="max-w-2xl text-[16px] leading-9 text-[#121416]/78">{page.body}</p>{location === "/contact/recruitment" && <a href="/careers" className="mt-7 inline-flex items-center gap-3 border-b border-[#1748e8] pb-2 font-mono text-[10px] tracking-[0.1em] text-[#1748e8]">CAREERSの採用情報を見る <ArrowUpRight size={15} /></a>}{isInquiryCtaPage && <a href={contactFormUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 bg-[#1748e8] px-5 py-4 font-mono text-[10px] tracking-[0.1em] text-white transition-transform hover:-translate-y-0.5">お問い合わせフォームを開く <ArrowUpRight size={15} /></a>}</div><div className="border-l border-[#121416]/18 pl-5"><p className="font-mono text-[9px] tracking-[0.1em] text-[#121416]/45">CONTENT STATUS</p><p className="mt-3 font-display text-xl font-semibold leading-tight tracking-[-0.04em]">{statusDescription(page.status)}</p></div></div>

            <div className="mt-16 grid border border-[#121416]/15 md:grid-cols-3">{page.principles.map((principle, index) => <div key={principle.label} className="min-h-[190px] border-b border-[#121416]/15 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"><span className="font-mono text-[10px] text-[#1748e8]">0{index + 1}</span><p className="mt-9 font-mono text-[9px] tracking-[0.11em] text-[#121416]/45">{principle.label}</p><p className="mt-3 font-display text-xl font-semibold leading-[1.15] tracking-[-0.04em]">{principle.text}</p></div>)}</div>

            <section className="section-artifact" aria-label={`${page.section}の編集図`}><div className="artifact-heading"><p>FIELD NOTE / {page.section}</p><span>{page.code}</span></div><div className="artifact-map">{page.principles.map((principle, index) => <div key={principle.label} className="artifact-node"><span>0{index + 1}</span><div><p>{principle.label}</p><strong>{principle.text}</strong></div></div>)}<i className="artifact-beam" /></div><p className="artifact-caption">{page.section === "ABOUT" ? "楽しさ、技術、観察を結び、次の体験へ。" : page.section === "BUSINESS" ? "体験をつくり、技術を育て、次を探る。" : page.section === "TECHNOLOGY" ? "試し、記録し、次の表現を可能にする。" : "つくる前と、公開した後をつなぐ記録。"}</p></section>

            {page.corporateInfo && <section className="mt-20"><div className="flex items-end justify-between border-b border-[#121416]/20 pb-4"><div><p className="font-mono text-[10px] tracking-[0.11em] text-[#1748e8]">CORPORATE PROFILE</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.055em]">企業情報</h2></div><Building2 size={19} className="text-[#121416]/55" /></div><dl className="corporate-profile">{page.corporateInfo.map((item) => <div key={item.label}><dt>{item.label}</dt><dd><div className="flex flex-wrap items-center gap-2"><strong>{item.value}</strong>{item.future && <span className="profile-plan-badge">予定</span>}</div>{item.detail && <p>{item.detail}</p>}</dd></div>)}</dl></section>}

            {page.specifications && <section className="mt-20" aria-label={`${page.specifications.title}の仕様情報`}><div className="flex flex-col justify-between gap-5 border-b border-[#121416]/20 pb-5 sm:flex-row sm:items-end"><div><p className="font-mono text-[10px] tracking-[0.11em] text-[#1748e8]">PRODUCT SPECIFICATION</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.055em]">{page.specifications.title}</h2></div><span className="border border-[#1748e8]/40 px-2 py-1 font-mono text-[9px] tracking-[0.1em] text-[#1748e8]">PRE-RELEASE</span></div><p className="mt-6 max-w-3xl text-[14px] leading-8 text-[#121416]/72">{page.specifications.description}</p><dl className="mt-8 grid border border-[#121416]/15 sm:grid-cols-2">{page.specifications.groups.map((item) => <div key={item.label} className="border-b border-[#121416]/15 p-5 odd:sm:border-r last:border-b-0 sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0"><dt className="font-mono text-[9px] tracking-[0.1em] text-[#121416]/45">{item.label}</dt><dd className="mt-3 font-display text-xl font-semibold leading-[1.2] tracking-[-0.04em]">{item.value}</dd>{item.note && <p className="mt-3 text-[12px] leading-6 text-[#121416]/62">{item.note}</p>}</div>)}</dl>{page.specifications.cta && <a href={page.specifications.cta.href} className="mt-7 inline-flex items-center gap-3 bg-[#1748e8] px-5 py-4 font-mono text-[10px] tracking-[0.1em] text-white transition-transform hover:-translate-y-0.5">{page.specifications.cta.label}<ArrowUpRight size={15} /></a>}</section>}

            {page.architecture && <section className="mt-20" aria-label={`${page.architecture.title}の概念図`}><div className="flex flex-col justify-between gap-5 border-b border-[#121416]/20 pb-5 sm:flex-row sm:items-end"><div><p className="font-mono text-[10px] tracking-[0.11em] text-[#1748e8]">AI ARCHITECTURE / CONCEPTUAL</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.055em]">{page.architecture.title}</h2></div><span className="font-mono text-[9px] tracking-[0.1em] text-[#121416]/45">RESEARCH DIAGRAM / NOT A PRODUCT SPEC</span></div><p className="mt-6 max-w-3xl text-[14px] leading-8 text-[#121416]/72">{page.architecture.description}</p><div className="mt-8 overflow-hidden border border-[#121416]/15 bg-[#efebe2]"><div className="grid border-b border-[#121416]/15 md:grid-cols-[0.8fr_1.2fr]"><ArchitectureNode node={page.architecture.nodes[0]} index={1} emphasis="input" /><ArchitectureNode node={page.architecture.nodes[1]} index={2} emphasis="hq" /></div><div className="grid md:grid-cols-3">{page.architecture.nodes.slice(2).map((node, index) => <ArchitectureNode key={node.label} node={node} index={index + 3} emphasis="agent" />)}</div><div className="flex flex-col justify-between gap-3 border-t border-[#121416]/15 px-5 py-4 sm:flex-row sm:items-center"><p className="font-mono text-[9px] tracking-[0.1em] text-[#1748e8]">REVIEW → PLANNER / LEARNING LOOP</p><p className="text-[12px] text-[#121416]/62">検証結果を次の計画と実行へ戻す循環モデル。</p></div></div></section>}

            {page.policyDocument && <section className="mt-20" aria-label={page.policyDocument.title}><div className="flex flex-col justify-between gap-5 border-b border-[#121416]/20 pb-5 sm:flex-row sm:items-end"><div><p className="font-mono text-[10px] tracking-[0.11em] text-[#1748e8]">{page.policyDocument.kicker}</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.055em]">{page.policyDocument.title}</h2></div><span className="border border-[#1748e8]/40 px-2 py-1 font-mono text-[9px] tracking-[0.1em] text-[#1748e8]">{page.policyDocument.tag}</span></div><div className="mt-8 divide-y divide-[#121416]/15 border-y border-[#121416]/15">{page.policyDocument.sections.map((item, index) => <article key={item.title} className="grid gap-3 py-6 md:grid-cols-[48px_180px_1fr]"><span className="font-mono text-[10px] text-[#1748e8]">{String(index + 1).padStart(2, "0")}</span><div><p className="font-mono text-[9px] tracking-[0.1em] text-[#121416]/45">{item.summary}</p><h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.04em]">{item.title}</h3></div><p className="text-[13px] leading-7 text-[#121416]/72">{item.detail}</p></article>)}</div>{page.policyDocument.cta && <><a href={page.policyDocument.cta.href} target={page.policyDocument.cta.href.startsWith("http") ? "_blank" : undefined} rel={page.policyDocument.cta.href.startsWith("http") ? "noreferrer" : undefined} className="mt-7 inline-flex items-center gap-3 bg-[#1748e8] px-5 py-4 font-mono text-[10px] tracking-[0.1em] text-white transition-transform hover:-translate-y-0.5">{page.policyDocument.cta.label} <ArrowUpRight size={15} /></a><p className="mt-3 text-[11px] leading-6 text-[#121416]/58">{page.policyDocument.cta.note}</p></>}</section>}

            {page.projectHighlight && <section className="project-highlight mt-20" aria-label={`${page.projectHighlight.title}の公開情報`}><div className="project-highlight-top"><div><p className="font-mono text-[10px] tracking-[0.11em] text-[#1748e8]">{page.projectHighlight.english}</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em]">{page.projectHighlight.title}</h2></div><span className="project-public-badge">{page.projectHighlight.status}</span></div><p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#121416]/75">{page.projectHighlight.body}</p><div className="project-highlight-mark"><span>PUBLIC / TBL</span><i /></div></section>}

            {page.storyMaker && <section className="tbl-story-system mt-20" aria-label="TBLストーリーメーカーの構造"><div className="tbl-section-heading"><div><p className="font-mono text-[10px] tracking-[0.11em] text-[#1748e8]">TBL STORY SYSTEM</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em]">物語を、追加できる。</h2></div><span className="font-mono text-[10px] tracking-[0.1em] text-[#121416]/45">BASE / 04</span></div><p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#121416]/75">{page.storyMaker.intro}</p><div className="tbl-member-grid">{page.storyMaker.members.map((member, index) => <div className="tbl-member-card" key={member.name}><span>0{index + 1}</span><div className="tbl-member-glyph" aria-hidden="true" /><h3>{member.name}</h3><p>{member.role}</p></div>)}</div><div className="tbl-storyline"><span>STORYLINE / BASE MEMBERS → YOUR CAST</span><strong>{page.storyMaker.storyline}</strong></div><div className="tbl-expansion-note"><p className="font-mono text-[9px] tracking-[0.11em] text-[#1748e8]">STORY EXPANSION</p><strong>{page.storyMaker.expansion}</strong></div><div className="tbl-principles"><p className="font-mono text-[9px] tracking-[0.11em] text-[#121416]/45">TBLの三原則</p>{page.storyMaker.principles.map((principle, index) => <div key={principle}><span>0{index + 1}</span><p>{principle}</p></div>)}</div></section>}

            {page.children && <section className="mt-20"><div className="flex items-end justify-between border-b border-[#121416]/20 pb-4"><div><p className="font-mono text-[10px] tracking-[0.11em] text-[#1748e8]">EXPLORE</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.055em]">関連ページ</h2></div><Route size={18} className="text-[#121416]/50" /></div><div className="divide-y divide-[#121416]/15">{page.children.map((child, index) => <a href={child.href} key={child.href} className="subpage-link group"><span className="font-mono text-[10px] text-[#1748e8]">{String(index + 1).padStart(2, "0")}</span><div><h3>{child.title}</h3><p>{child.description}</p></div><div className="flex items-center gap-3"><StatusBadge status={child.status} compact /><ArrowUpRight className="text-[#121416]/45 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" size={17} /></div></a>)}</div></section>}

            {page.note && <aside className="mt-14 border border-[#1748e8]/45 bg-[#1748e8]/[0.04] p-5"><p className="font-mono text-[9px] tracking-[0.1em] text-[#1748e8]">TRANSPARENCY NOTE</p><p className="mt-3 text-[13px] leading-7 text-[#121416]/74">{page.note}</p></aside>}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#121416]/15 bg-[#121416] px-5 py-7 text-white/60 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-[1520px] flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="flex items-center gap-3 text-white"><img src="/manus-storage/sqahia-logo-official_8e289d78.png" alt="" className="official-logo h-9 w-9" /><p className="brand-lockup font-display text-sm font-bold tracking-[-0.05em]">SQAHIA <span className="font-mono text-[8px] font-medium tracking-[0.18em] text-white/55">DIGITAL</span></p></div><p className="mt-3 font-mono text-[9px] tracking-[0.09em]">© {new Date().getFullYear()} SQAHIA DIGITAL</p></div><div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] tracking-[0.08em]"><a href="/about">ABOUT</a><a href="/business">BUSINESS</a><a href="/products">PRODUCTS</a><a href="/technology">TECH</a><a href="/research">RESEARCH</a><a href="/qa-security">QA</a><a href="/downloads">DOWNLOADS</a><a href="/support">SUPPORT</a><a href="/privacy">PRIVACY</a><a href="/terms">TERMS</a><a href="/sitemap">MAP</a><a href="/contact">CONTACT</a></div></div></footer>
    </div>
  );
}

function StatusBadge({ status, compact = false }: { status: Status; compact?: boolean }) {
  const className = status === "CURRENT" ? "status-current" : status === "FUTURE PLAN" ? "status-future" : "status-preparing";
  return <span className={`status-badge ${className} ${compact ? "status-compact" : ""}`}>{labelFor(status)}</span>;
}

function MicroStat({ label, value }: { label: string; value: string }) {
  return <div className="min-h-[77px] px-3 py-4 first:pl-0 sm:px-5"><p className="font-mono text-[8px] tracking-[0.1em] text-[#121416]/42">{label}</p><p className="mt-2 truncate font-mono text-[10px] tracking-[-0.02em] text-[#121416]/70">{value}</p></div>;
}

function ArchitectureNode({ node, index, emphasis }: { node: { label: string; role: string; detail: string }; index: number; emphasis: "input" | "hq" | "agent" }) {
  const tone = emphasis === "hq" ? "bg-[#1748e8] text-white" : "bg-transparent text-[#121416]";
  return <article className={`relative min-h-[210px] border-b border-[#121416]/15 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 ${tone}`}><span className={`font-mono text-[10px] ${emphasis === "hq" ? "text-white/75" : "text-[#1748e8]"}`}>0{index}</span><p className={`mt-8 font-mono text-[9px] tracking-[0.12em] ${emphasis === "hq" ? "text-white/65" : "text-[#121416]/45"}`}>{node.label} / {node.role}</p><h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.045em]">{node.label}</h3><p className={`mt-4 max-w-sm text-[13px] leading-7 ${emphasis === "hq" ? "text-white/82" : "text-[#121416]/70"}`}>{node.detail}</p>{emphasis !== "agent" && <i className={`absolute -bottom-px right-0 h-px w-10 ${emphasis === "hq" ? "bg-white" : "bg-[#1748e8]"}`} />}</article>;
}

function labelFor(status: Status) { return status === "CURRENT" ? "NOW" : status === "FUTURE PLAN" ? "EXPLORING" : "IN PROGRESS"; }
function statusDescription(status: Status) { return status === "CURRENT" ? "今、公開している情報です。" : status === "FUTURE PLAN" ? "探究・構想として共有しています。" : "公開に向けて情報を整えています。"; }
