/** Verifies that the public product-enterprise pages remain reachable and explicitly distinguish preparations from released products. */
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const appSource = readFileSync(resolve(projectRoot, "client/src/App.tsx"), "utf8");
const corporateSource = readFileSync(resolve(projectRoot, "client/src/pages/CorporatePage.tsx"), "utf8");
const homeSource = readFileSync(resolve(projectRoot, "client/src/pages/Home.tsx"), "utf8");
const viteConfigSource = readFileSync(resolve(projectRoot, "vite.config.ts"), "utf8");
const termsSource = readFileSync(resolve(projectRoot, "client/src/content/terms.ts"), "utf8");

describe("product enterprise page tree", () => {
  it("registers primary product-enterprise routes", () => {
    ["/research", "/qa-security", "/downloads", "/technology-map"].forEach((route) => {
      expect(appSource).toContain(`path="${route}"`);
    });
  });

  it("keeps the core products and public-status language in the site", () => {
    ["HeraixOS", "Heraix IGRAC", "Heraklion", "公開準備中", "現在、公開可能なダウンロードはありません"].forEach((term) => {
      expect(corporateSource).toContain(term);
    });
  });

  it("links the homepage to the product and ecosystem records", () => {
    ["HeraixOS Kub", "Heraix IGRAC", "Heraklion", "/technology-map"].forEach((term) => {
      expect(homeSource).toContain(term);
    });
  });

  it("keeps the revised homepage headline valid and singularly styled", () => {
    expect(homeSource).toContain('新たなエンタメ</span><br />');
    expect(homeSource).toContain('を作り出す');
    expect(homeSource).toContain('text-[clamp(3.45rem,8.3vw,131px)]');
    expect(homeSource).not.toMatch(/style=\{\{[^}]*\}\}\s*style=/);
  });

  it("publishes interim security guidance and clear product-record modules", () => {
    ["暫定セキュリティポリシー", "責任ある開示", "セキュリティに関する連絡を送る", "Heraklion / 研究アーキテクチャ", "HeraixOS Kub / 公開情報", "DOWNLOADSの公開状況を見る"].forEach((term) => {
      expect(corporateSource).toContain(term);
    });
  });

  it("keeps the MateMatika archive and stopped-development log adjacent on research", () => {
    ["Project:MateMatika", "開発中止", "MMka_5_SEP_large_minimal_update.zip", "DEVELOPMENT STOPPED", "RESEARCH ARCHIVE / PROJECT LOGS"].forEach((term) => {
      expect(corporateSource).toContain(term);
    });
  });

  it("includes the approved operational, project, and support page records", () => {
    ["/privacy", "/terms", "/support", "/releases", "/developers", "/press", "/accessibility", "/sitemap", "/projects/languagehaven", "/garage", "/forum/tbl/guidelines", "/news/archive-setup"].forEach((route) => {
      expect(appSource + corporateSource).toContain(route);
    });
  });

  it("documents the Garage system and links the third-party participation form", () => {
    ["GARAGE SYSTEM / THIRD-PARTY GARAGE", "Garage制度", "試す", "作る", "検証する", "撤退する", "サードパーティーガレージへ参加申請する", "https://forms.cloud.microsoft/r/TeYnafGRUr"].forEach((term) => {
      expect(corporateSource).toContain(term);
    });
  });

  it("keeps public preview HMR on the HTTPS WebSocket endpoint", () => {
    expect(viteConfigSource).toContain('protocol: "wss"');
    expect(viteConfigSource).toContain("clientPort: 443");
    expect(viteConfigSource).toContain("strictPort: true");
  });

  it("wraps route changes in a calm, reduced-motion-aware transition", () => {
    expect(appSource).toContain("AnimatePresence");
    expect(appSource).toContain("page-transition-shell");
    expect(appSource).toContain("useReducedMotion");
  });

  it("connects the news overview to an archive and a non-fabricated detail record", () => {
    ["title: \"News Archive\", href: \"/news/archive\"", "title: \"News Archive Setup\", href: \"/news/archive-setup\"", "SITE UPDATE / 2026-08-26"].forEach((term) => {
      expect(corporateSource).toContain(term);
    });
  });

  it("keeps the public inquiry CTA available for privacy and security records", () => {
    ["https://forms.cloud.microsoft/r/TeYnafGRUr", "/privacy", "/qa-security", "/security/reporting", "target=\"_blank\""].forEach((term) => {
      expect(corporateSource).toContain(term);
    });
  });

  it("publishes the attached common terms with IGRA-specific provisions", () => {
    ["SQAHIA Digital 共通利用規約", "第5章　IGRAプラットフォーム特則", "第24条（分離可能性）", "制定日：2026年10月10日", "代表者："].forEach((term) => {
      expect(termsSource).toContain(term);
    });
    expect(corporateSource).toContain("commonTermsMarkdown");
    expect(corporateSource).toContain("status: \"CURRENT\"");
  });

  it("normalizes trailing slashes so /terms/ does not fall back to About", () => {
    expect(corporateSource).toContain('const location = rawLocation.replace(/\\/+$/, "") || "/";');
  });
});
