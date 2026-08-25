# SQAHIA Digital ページファイル書き出し一覧

このアーカイブには、現在の公式サイトでページ表示とページ遷移に関わるソースを収録しています。

| 区分 | ファイル | 内容 |
|---|---|---|
| ページ | `client/src/pages/Home.tsx` | ホーム、Project：TBLアクセス、事業成長グラフ |
| ページ | `client/src/pages/CorporatePage.tsx` | ABOUT、BUSINESS、PRODUCTS、TECHNOLOGY、PROJECTS、NEWS、CAREERS、CONTACTの共通ページ |
| ページ | `client/src/pages/RoadToCorporation.tsx` | 株式会社への道フォーラム |
| ページ | `client/src/pages/TBLForum.tsx` | Project：TBL専用フォーラム |
| ページ | `client/src/pages/NotFound.tsx` | 404ページ |
| ルーティング | `client/src/App.tsx` | 全ページのURLルート定義 |
| 共通スタイル | `client/src/index.css` | サイト全体のレイアウト、色、タイポグラフィ、レスポンシブUI |
| HTML設定 | `client/index.html` | ページタイトル、メタ設定、エントリーポイント |
| 仕様メモ | `ideas.md` | UI・ブランド方針の設計メモ |
| コンテンツ基準 | `content-map.md` | 公開情報・将来構想・準備中情報の整理 |

`CorporatePage.tsx`はURLパラメータに応じてサイトツリーの各下層ページを描画するため、ABOUTやBUSINESSなどのページ群はこのファイルに集約されています。
