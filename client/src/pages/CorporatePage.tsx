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
  { title: "Entertainment", href: "/business/entertainment", status: "FUTURE PLAN", description: "ゲームとデジタルコンテンツを扱う構想。" },
  { title: "Software", href: "/business/software", status: "FUTURE PLAN", description: "プロダクトと技術基盤を育てる構想。" },
  { title: "Hardware Entertainment", href: "/business/hardware-entertainment", status: "PREPARING", description: "ハードウェアと体験の接点を探る研究領域。" },
  { title: "SPDE", href: "/business/spde", status: "FUTURE PLAN", description: "4年目以降に始動する新規領域。" },
];

const productChildren: Child[] = [
  { title: "Games", href: "/products/games", status: "PREPARING", description: "ゲーム作品の公式アーカイブ。" },
  { title: "Software", href: "/products/software", status: "PREPARING", description: "ソフトウェア製品の公式アーカイブ。" },
  { title: "Digital Contents", href: "/products/digital-contents", status: "PREPARING", description: "映像、音楽、インタラクティブ作品のアーカイブ。" },
];

const technologyChildren: Child[] = [
  { title: "Technology", href: "/technology/technology", status: "PREPARING", description: "体験を支える技術観点。" },
  { title: "Software", href: "/technology/software", status: "PREPARING", description: "ソフトウェア開発のアプローチ。" },
  { title: "API", href: "/technology/api", status: "PREPARING", description: "将来公開する開発者向け技術。" },
  { title: "Research", href: "/technology/research", status: "FUTURE PLAN", description: "技術と新しい体験の研究領域。" },
];

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
    lead: "将来のSQAHIA Digitalは、体験、ソフトウェア、研究の複数領域を段階的に育てる構想です。",
    body: "初期はEntertainmentとSoftwareを中心に、ユーザーへの直接価値と技術資産の両方をつくります。各領域の詳細は、事業計画に基づく将来の方向性であり、提供開始が確定したサービスではありません。",
    principles: [{ label: "ENT", text: "体験をつくり、市場とつながる。" }, { label: "SFT", text: "技術をつくり、事業の土台にする。" }, { label: "SPD", text: "次の領域を研究・検証する。" }], children: businessChildren,
  },
  "/business/entertainment": {
    section: "BUSINESS", code: "02.1", trail: "BUSINESS / ENTERTAINMENT", title: "面白さを、\n体験として届ける。", english: "ENTERTAINMENT", status: "FUTURE PLAN",
    lead: "ゲームとデジタルコンテンツを中心に、ユーザーへ直接価値を届ける事業領域として構想しています。",
    body: "PC、ゲーム機、Webなどを対象とするゲーム開発のほか、映像、音楽、インタラクティブコンテンツ、デジタルアートへの展開を想定します。小さくつくり、素早く試し、可能性を見極めながら育てる開発方式を重視します。",
    principles: [{ label: "GAMES", text: "オリジナル・実験的なゲーム体験。" }, { label: "CONTENT", text: "映像、音楽、インタラクティブ表現。" }, { label: "METHOD", text: "小さく作り、検証し、育てる。" }], note: "現在公開できるゲーム・コンテンツ作品はありません。作品情報は公開準備が整い次第、Productsに掲載します。",
  },
  "/business/software": {
    section: "BUSINESS", code: "02.2", trail: "BUSINESS / SOFTWARE", title: "体験を支える、\n技術そのものを。", english: "SOFTWARE", status: "FUTURE PLAN",
    lead: "将来のSoftware Divisionは、製品体験を成立させる技術と、独自のソフトウェア資産をつくる領域です。",
    body: "ソフトウェア、開発ツール、システムソフトウェア、API、開発支援技術、自社サービスの技術基盤を、事業と連動しながら育てることを想定しています。",
    principles: [{ label: "PRODUCT", text: "自社で提供できるソフトウェア。" }, { label: "TOOLING", text: "開発を支えるツールと仕組み。" }, { label: "PLATFORM", text: "将来のサービスを支える技術基盤。" }], note: "現在公開できるソフトウェア製品・APIはありません。",
  },
  "/business/hardware-entertainment": {
    section: "BUSINESS", code: "02.3", trail: "BUSINESS / HARDWARE ENTERTAINMENT", title: "触れる体験の、\n可能性を探る。", english: "HARDWARE ENTERTAINMENT", status: "PREPARING",
    lead: "ハードウェアとデジタルコンテンツの接点を探る研究・企画領域です。",
    body: "現時点では、具体的な製品、提供時期、開発体制は未定です。将来的に、インタラクション、デバイス、空間体験など、ソフトウェアだけでは完結しない体験の可能性を検討します。",
    principles: [{ label: "SCOPE", text: "デバイスと体験の関係を研究。" }, { label: "STATUS", text: "具体的な製品・計画は未公表。" }, { label: "UPDATE", text: "検討が進み次第、公式情報を更新。" }],
  },
  "/business/spde": {
    section: "BUSINESS", code: "02.4", trail: "BUSINESS / SPDE", title: "次の領域を、\n研究から始める。", english: "SPDE", status: "FUTURE PLAN",
    lead: "SPDEは、既存事業とは異なる新しい技術・サービスを研究する、将来の成長領域です。",
    body: "最初の3年間で経営、技術、収益の基盤を整えた後、4年目から始動することを計画しています。サービス仕様は固定せず、研究開発、市場調査、技術検証を踏まえて段階的に決定します。",
    principles: [{ label: "TIMING", text: "事業開始4年目以降を想定。" }, { label: "RESEARCH", text: "市場調査と技術検証を優先。" }, { label: "FLEXIBILITY", text: "詳細な仕様は段階的に定義。" }], note: "SPDEの正式名称・サービス内容は未確定です。",
  },
  "/products": {
    section: "PRODUCTS", code: "03", trail: "SQAHIA DIGITAL / PRODUCTS", title: "まだないものを、\n公開の準備へ。", english: "PRODUCTS", status: "PREPARING",
    lead: "製品・作品の公式アーカイブです。現在、公開できる製品情報はありません。",
    body: "Games、Software、Digital Contentsの各ページを、製品公開時の正式な情報源として整備しています。作品名、対応環境、提供方法、利用規約、サポート情報などは、内容が確定したものから掲載します。",
    principles: [{ label: "SOURCE", text: "製品の正式情報を集約する場所。" }, { label: "DISCLOSURE", text: "公開可能な事実のみ掲載する。" }, { label: "ARCHIVE", text: "作品と更新履歴を残す。" }], children: productChildren,
  },
  "/products/games": { section: "PRODUCTS", code: "03.1", trail: "PRODUCTS / GAMES", title: "Games\nArchive", english: "GAMES", status: "PREPARING", lead: "ゲーム作品の公式アーカイブを準備しています。", body: "現在、公開できるタイトル、対応プラットフォーム、発売時期はありません。作品の公開準備が整い次第、公式トレーラー、ストアリンク、サポート情報をこのページに掲載します。", principles: [{ label: "TITLES", text: "公開タイトル準備中。" }, { label: "PLATFORMS", text: "対応環境は未発表。" }, { label: "SUPPORT", text: "作品公開に合わせて案内予定。" }] },
  "/products/software": { section: "PRODUCTS", code: "03.2", trail: "PRODUCTS / SOFTWARE", title: "Software\nArchive", english: "SOFTWARE PRODUCTS", status: "PREPARING", lead: "ソフトウェア製品の公式アーカイブを準備しています。", body: "現在、公開できる製品、利用環境、提供形態はありません。製品の公開準備が整い次第、製品仕様、導入方法、更新情報を公式情報として掲載します。", principles: [{ label: "PRODUCTS", text: "公開製品は準備中。" }, { label: "DOCUMENTS", text: "利用資料は公開時に整備。" }, { label: "UPDATES", text: "更新履歴を公式に記録。" }] },
  "/products/digital-contents": { section: "PRODUCTS", code: "03.3", trail: "PRODUCTS / DIGITAL CONTENTS", title: "Digital\nContents", english: "DIGITAL CONTENTS", status: "PREPARING", lead: "映像、音楽、インタラクティブ作品などの公式アーカイブを準備しています。", body: "現在、公開できるコンテンツ情報はありません。公開時には、作品情報、クレジット、配信先、利用条件などを正確にお知らせします。", principles: [{ label: "VIDEO", text: "映像作品の情報を準備。" }, { label: "MUSIC", text: "音楽・音声作品の情報を準備。" }, { label: "INTERACTIVE", text: "インタラクティブ作品の情報を準備。" }] },
  "/technology": {
    section: "TECHNOLOGY", code: "04", trail: "SQAHIA DIGITAL / TECHNOLOGY", title: "技術を、\n未来の資産にする。", english: "TECHNOLOGY", status: "FUTURE PLAN",
    lead: "技術を単発の制作に消費せず、継続して事業を支える資産として育てる構想です。",
    body: "将来の技術活動は、ソフトウェア、開発支援、API、研究を横断します。公開する技術情報、開発者向け資料、研究成果は、事実と公開条件が整ったものから掲載します。",
    principles: [{ label: "BUILD", text: "体験を成立させる技術をつくる。" }, { label: "LEARN", text: "研究と検証を通じて学ぶ。" }, { label: "COMPOUND", text: "技術資産を次の価値へつなぐ。" }], children: technologyChildren,
  },
  "/technology/technology": { section: "TECHNOLOGY", code: "04.1", trail: "TECHNOLOGY / TECHNOLOGY", title: "Technology\nPerspective", english: "TECHNOLOGY", status: "PREPARING", lead: "SQAHIA Digitalが扱う技術観点を公開するページです。", body: "現在、外部へ公開できる具体的な技術仕様や実装情報はありません。公開の準備が整った技術領域から、目的、設計方針、利用条件を明らかにします。", principles: [{ label: "STATUS", text: "技術情報は公開準備中。" }, { label: "SCOPE", text: "体験と事業を支える技術。" }, { label: "POLICY", text: "公開条件を整えたものから発信。" }] },
  "/technology/software": { section: "TECHNOLOGY", code: "04.2", trail: "TECHNOLOGY / SOFTWARE", title: "Software\nEngineering", english: "SOFTWARE ENGINEERING", status: "PREPARING", lead: "ソフトウェア開発の考え方と、将来の技術資料を掲載するページです。", body: "プロダクト、開発ツール、システム基盤のそれぞれにおいて、目的と保守性を両立する設計を目指します。具体的な技術スタック・公開資料は準備中です。", principles: [{ label: "CLARITY", text: "目的を明快にする設計。" }, { label: "MAINTAIN", text: "続けられる仕組みを残す。" }, { label: "DOCUMENT", text: "公開資料は準備中。" }] },
  "/technology/api": { section: "TECHNOLOGY", code: "04.3", trail: "TECHNOLOGY / API", title: "API\nInterface", english: "API", status: "PREPARING", lead: "将来の開発者向けAPIに関する公式情報ページです。", body: "現在、一般公開中のAPI、SDK、開発者ポータルはありません。公開を行う場合には、仕様、認証、利用規約、変更履歴、サポート範囲を公式にお知らせします。", principles: [{ label: "AVAILABILITY", text: "公開APIはありません。" }, { label: "DOCUMENTATION", text: "公式ドキュメントを準備予定。" }, { label: "CHANGELOG", text: "公開時に変更管理を開始。" }] },
  "/technology/research": { section: "TECHNOLOGY", code: "04.4", trail: "TECHNOLOGY / RESEARCH", title: "Research\nRecord", english: "RESEARCH", status: "FUTURE PLAN", lead: "技術と新しいデジタル体験の可能性を検証する研究領域です。", body: "SPDEを含む将来の研究活動では、技術的な実現性、市場との接点、継続可能性を段階的に検証します。公開可能な研究テーマ・成果が確定した時点で、記録として掲載します。", principles: [{ label: "QUESTION", text: "まだ解かれていない課題を探す。" }, { label: "PROTOTYPE", text: "小さく試し、学びを残す。" }, { label: "RELEASE", text: "公開可能な成果を記録する。" }] },
  "/projects": { section: "PROJECTS", code: "05", trail: "SQAHIA DIGITAL / PROJECTS", title: "プロジェクトを、\n記録として残す。", english: "PROJECTS", status: "PREPARING", lead: "SQAHIA Digitalのプロジェクトアーカイブを準備しています。", body: "現在、公開できるプロジェクト事例はありません。自社プロダクト、研究、協業など、公開の許諾と情報整理が完了したものから、目的、プロセス、成果を記録します。", principles: [{ label: "CASE STUDIES", text: "公開事例を準備中。" }, { label: "PROCESS", text: "背景と設計の判断を記録。" }, { label: "CREDITS", text: "関係者と権利を正確に表記。" }] },
  "/news": { section: "NEWS", code: "06", trail: "SQAHIA DIGITAL / NEWS", title: "変化を、\n正式に知らせる。", english: "NEWS", status: "PREPARING", lead: "SQAHIA Digitalの公式ニュースアーカイブを準備しています。", body: "会社情報、製品公開、研究発表、採用、イベントなどの確定情報は、このページで時系列にお知らせします。現在、公開できるニュースはありません。", principles: [{ label: "OFFICIAL", text: "確定情報の一次発信。" }, { label: "ARCHIVE", text: "発表の履歴を保存。" }, { label: "UPDATE", text: "公開時に順次掲載。" }] },
  "/careers": { section: "CAREERS", code: "07", trail: "SQAHIA DIGITAL / CAREERS", title: "次の体験を、\n一緒につくる。", english: "CAREERS", status: "PREPARING", lead: "SQAHIA Digitalの採用情報ページを準備しています。", body: "現在、公開中の募集職種・採用条件はありません。事業の状況と体制が整い次第、必要な役割、選考の流れ、働き方に関する公式情報を掲載します。", principles: [{ label: "OPENINGS", text: "公開求人はありません。" }, { label: "PROCESS", text: "採用フローは準備中。" }, { label: "FUTURE", text: "体制整備後に公式発表。" }] },
  "/contact": {
    section: "CONTACT", code: "08", trail: "SQAHIA DIGITAL / CONTACT", title: "正しい窓口へ、\n正確に届ける。", english: "CONTACT", status: "PREPARING",
    lead: "お問い合わせ種別ごとの公式窓口を準備しています。",
    body: "現在、公開している連絡先はありません。事業、報道、採用、一般のお問い合わせについて、対応範囲と連絡方法が確定し次第、このページからご案内します。",
    principles: [{ label: "BUSINESS", text: "協業・業務に関する窓口。" }, { label: "PRESS", text: "取材・メディアに関する窓口。" }, { label: "GENERAL", text: "その他のお問い合わせ窓口。" }], children: contactChildren,
  },
  "/contact/business": { section: "CONTACT", code: "08.1", trail: "CONTACT / BUSINESS", title: "Business\nContact", english: "BUSINESS CONTACT", status: "PREPARING", lead: "協業・業務に関するお問い合わせ窓口です。", body: "現在、公開している業務お問い合わせ先はありません。対応領域と連絡方法が確定し次第、必要な情報とともに本ページでお知らせします。", principles: [{ label: "SCOPE", text: "協業・業務の相談。" }, { label: "STATUS", text: "連絡先は準備中。" }, { label: "UPDATE", text: "確定後に公式公開。" }] },
  "/contact/press": { section: "CONTACT", code: "08.2", trail: "CONTACT / PRESS", title: "Press\nContact", english: "PRESS CONTACT", status: "PREPARING", lead: "取材・メディアに関するお問い合わせ窓口です。", body: "現在、公開しているプレス窓口はありません。企業情報、製品情報、発表資料が整い次第、取材時のご案内と連絡方法を掲載します。", principles: [{ label: "MEDIA", text: "取材・メディアの窓口。" }, { label: "MATERIALS", text: "公式素材は準備中。" }, { label: "STATUS", text: "連絡先は未公開。" }] },
  "/contact/recruitment": { section: "CONTACT", code: "08.3", trail: "CONTACT / RECRUITMENT", title: "Recruitment\nContact", english: "RECRUITMENT CONTACT", status: "PREPARING", lead: "採用に関するお問い合わせ窓口です。", body: "現在、公開中の採用募集および採用窓口はありません。募集開始時には、応募条件、選考方法、個人情報の取り扱いとともに掲載します。", principles: [{ label: "OPENINGS", text: "公開求人はありません。" }, { label: "APPLY", text: "応募方法は準備中。" }, { label: "PRIVACY", text: "情報の取り扱いを明示予定。" }] },
  "/contact/general": { section: "CONTACT", code: "08.4", trail: "CONTACT / GENERAL", title: "General\nContact", english: "GENERAL CONTACT", status: "PREPARING", lead: "その他のお問い合わせ窓口です。", body: "現在、公開している一般お問い合わせ先はありません。連絡方法、対応時間、注意事項が整い次第、公式情報として掲載します。", principles: [{ label: "GENERAL", text: "一般のお問い合わせ。" }, { label: "RESPONSE", text: "対応範囲は準備中。" }, { label: "STATUS", text: "連絡先は未公開。" }] },
};

const topLinks = [
  ["ABOUT", "/about"], ["BUSINESS", "/business"], ["PRODUCTS", "/products"], ["TECHNOLOGY", "/technology"], ["PROJECTS", "/projects"], ["NEWS", "/news"], ["CAREERS", "/careers"],
];

export default function CorporatePage() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const page = pages[location] ?? pages["/about"];

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
          <aside className="hidden border-r border-[#121416]/15 px-10 py-12 lg:col-span-3 lg:block"><div className="sticky top-[112px]"><p className="font-mono text-[9px] tracking-[0.14em] text-[#121416]/45">SITE TREE</p><a href="/" className="mt-5 flex items-center gap-2 border-y border-[#121416]/15 py-3 font-mono text-[10px] tracking-[0.08em] transition-colors hover:text-[#1748e8]"><ArrowLeft size={13} />HOME</a><a href="/road-to-incorporation" className="mt-7 block border border-[#121416]/15 p-4 transition-colors hover:border-[#1748e8]"><p className="font-mono text-[9px] tracking-[0.1em] text-[#1748e8]">INVESTOR FORUM</p><p className="mt-2 font-display text-lg font-semibold tracking-[-0.04em]">株式会社への道</p><p className="mt-2 text-[11px] leading-5 text-[#121416]/60">将来の法人化計画を公開中</p></a></div></aside>
          <div className="px-5 py-14 sm:px-8 sm:py-20 lg:col-span-8 lg:col-start-5 lg:px-0">
            <p className="font-mono text-[10px] tracking-[0.12em] text-[#1748e8]">{page.english}</p>
            <div className="mt-5 grid gap-8 border-t-2 border-[#121416] pt-7 md:grid-cols-[minmax(0,1fr)_230px]"><p className="max-w-2xl text-[16px] leading-9 text-[#121416]/78">{page.body}</p><div className="border-l border-[#121416]/18 pl-5"><p className="font-mono text-[9px] tracking-[0.1em] text-[#121416]/45">CONTENT STATUS</p><p className="mt-3 font-display text-xl font-semibold leading-tight tracking-[-0.04em]">{statusDescription(page.status)}</p></div></div>

            <div className="mt-16 grid border border-[#121416]/15 md:grid-cols-3">{page.principles.map((principle, index) => <div key={principle.label} className="min-h-[190px] border-b border-[#121416]/15 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"><span className="font-mono text-[10px] text-[#1748e8]">0{index + 1}</span><p className="mt-9 font-mono text-[9px] tracking-[0.11em] text-[#121416]/45">{principle.label}</p><p className="mt-3 font-display text-xl font-semibold leading-[1.15] tracking-[-0.04em]">{principle.text}</p></div>)}</div>

            <section className="section-artifact" aria-label={`${page.section}の編集図`}><div className="artifact-heading"><p>FIELD NOTE / {page.section}</p><span>{page.code}</span></div><div className="artifact-map">{page.principles.map((principle, index) => <div key={principle.label} className="artifact-node"><span>0{index + 1}</span><div><p>{principle.label}</p><strong>{principle.text}</strong></div></div>)}<i className="artifact-beam" /></div><p className="artifact-caption">{page.section === "ABOUT" ? "楽しさ、技術、観察を結び、次の体験へ。" : page.section === "BUSINESS" ? "体験をつくり、技術を育て、次を探る。" : page.section === "TECHNOLOGY" ? "試し、記録し、次の表現を可能にする。" : "つくる前と、公開した後をつなぐ記録。"}</p></section>

            {page.corporateInfo && <section className="mt-20"><div className="flex items-end justify-between border-b border-[#121416]/20 pb-4"><div><p className="font-mono text-[10px] tracking-[0.11em] text-[#1748e8]">CORPORATE PROFILE</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.055em]">企業情報</h2></div><Building2 size={19} className="text-[#121416]/55" /></div><dl className="corporate-profile">{page.corporateInfo.map((item) => <div key={item.label}><dt>{item.label}</dt><dd><div className="flex flex-wrap items-center gap-2"><strong>{item.value}</strong>{item.future && <span className="profile-plan-badge">予定</span>}</div>{item.detail && <p>{item.detail}</p>}</dd></div>)}</dl></section>}

            {page.children && <section className="mt-20"><div className="flex items-end justify-between border-b border-[#121416]/20 pb-4"><div><p className="font-mono text-[10px] tracking-[0.11em] text-[#1748e8]">EXPLORE</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.055em]">関連ページ</h2></div><Route size={18} className="text-[#121416]/50" /></div><div className="divide-y divide-[#121416]/15">{page.children.map((child, index) => <a href={child.href} key={child.href} className="subpage-link group"><span className="font-mono text-[10px] text-[#1748e8]">{String(index + 1).padStart(2, "0")}</span><div><h3>{child.title}</h3><p>{child.description}</p></div><div className="flex items-center gap-3"><StatusBadge status={child.status} compact /><ArrowUpRight className="text-[#121416]/45 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" size={17} /></div></a>)}</div></section>}

            {page.note && <aside className="mt-14 border border-[#1748e8]/45 bg-[#1748e8]/[0.04] p-5"><p className="font-mono text-[9px] tracking-[0.1em] text-[#1748e8]">TRANSPARENCY NOTE</p><p className="mt-3 text-[13px] leading-7 text-[#121416]/74">{page.note}</p></aside>}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#121416]/15 bg-[#121416] px-5 py-7 text-white/60 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-[1520px] flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="flex items-center gap-3 text-white"><img src="/manus-storage/sqahia-logo-official_8e289d78.png" alt="" className="official-logo h-9 w-9" /><p className="brand-lockup font-display text-sm font-bold tracking-[-0.05em]">SQAHIA <span className="font-mono text-[8px] font-medium tracking-[0.18em] text-white/55">DIGITAL</span></p></div><p className="mt-3 font-mono text-[9px] tracking-[0.09em]">© {new Date().getFullYear()} SQAHIA DIGITAL</p></div><div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] tracking-[0.08em]"><a href="/about">ABOUT</a><a href="/business">BUSINESS</a><a href="/products">PRODUCTS</a><a href="/technology">TECHNOLOGY</a><a href="/road-to-incorporation">INVESTOR FORUM</a><a href="/contact">CONTACT</a></div></div></footer>
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

function labelFor(status: Status) { return status === "CURRENT" ? "NOW" : status === "FUTURE PLAN" ? "EXPLORING" : "IN PROGRESS"; }
function statusDescription(status: Status) { return status === "CURRENT" ? "今、公開している情報です。" : status === "FUTURE PLAN" ? "探究・構想として共有しています。" : "公開に向けて情報を整えています。"; }
