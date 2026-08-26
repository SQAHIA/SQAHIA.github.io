/** Verifies that the public product-enterprise pages remain reachable and explicitly distinguish preparations from released products. */
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const appSource = readFileSync(resolve(projectRoot, "client/src/App.tsx"), "utf8");
const corporateSource = readFileSync(resolve(projectRoot, "client/src/pages/CorporatePage.tsx"), "utf8");
const homeSource = readFileSync(resolve(projectRoot, "client/src/pages/Home.tsx"), "utf8");

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

  it("publishes interim security guidance and clear product-record modules", () => {
    ["暫定セキュリティポリシー", "責任ある開示", "セキュリティに関する連絡を送る", "Heraklion / 研究アーキテクチャ", "HeraixOS Kub / 公開情報", "DOWNLOADSの公開状況を見る"].forEach((term) => {
      expect(corporateSource).toContain(term);
    });
  });
});
