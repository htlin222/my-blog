# 林協霆的個人 blog 這裡有一些跟程式、醫學有關的文章

[網站連結](https://htl.physician.tw/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f9937de5-d092-40a4-bc57-00821fdedeec/deploy-status)](https://app.netlify.com/sites/my-blog-htlin/deploys)

歡迎光臨 🦎 林協霆醫師的個人 blog，這個網站由一名 🦀oncology+🩸hematology 肥肉的內科專科醫師維護，這裡有點雜草叢生，有很多地方都還在施工中，有亂長的藤蔓跟隨意嫁接的樹苗

- 當然，你也可以來[蜥蜴花園](https://physician.tw) 看看我的文章，說不定有什麼好玩的》 🎢
- 或[我的 Github](https://github.com/htlin222/)裡面也有一些有趣的東西
- 訂閱 [RSS feed](https://htl.physician.tw/index.xml) 獲取最新文章更新

## 技術點

這個部落格是使用多種現代網頁技術精心打造的，以下是詳細的技術實現：

### 核心架構

- **靜態網站生成器**：使用 [Hugo](https://gohugo.io/) (v0.122.0) 作為核心引擎，Hugo 是一個基於 Go 語言的超高效靜態網站生成器，以其驚人的速度和靈活性著稱
- **主題**：採用 `anubis2` 主題，提供簡潔、現代的閱讀體驗，支援深色/淺色模式自動切換

### 內容管理

- **Decap CMS** (前身為 Netlify CMS)：整合了基於 Git 的內容管理系統，讓我可以通過友好的 Web 界面編輯內容
- **Markdown**：所有文章都使用 Markdown 格式撰寫，便於維護和版本控制
- **Git 工作流**：使用 Git 進行版本控制，所有內容變更都可追蹤和回溯

### 部署與託管

- **Netlify**：採用 Netlify 進行自動化部署，當 Git 倉庫有新的提交時自動觸發構建和部署
- **自定義域名**：使用 `htl.physician.tw` 作為自定義域名，提升品牌識別度
- **HTTPS**：通過 Netlify 自動配置 SSL 證書，確保網站安全

### 互動功能

- **Giscus 評論系統**：基於 GitHub Discussions 的評論系統，讓讀者可以直接在文章下方留言討論
- **社交媒體整合**：整合了多個社交媒體平台的連結，包括 GitHub、LinkedIn、Facebook、X (Twitter)、YouTube 等
- **RSS 訂閱**：提供 RSS 功能，讀者可以訂閱最新內容更新。訂閱方式：
  - 直接訪問 RSS feed URL: [https://htl.physician.tw/index.xml](https://htl.physician.tw/index.xml)
  - 使用 RSS 閱讀器（如 Feedly、Inoreader、NetNewsWire 等）添加上述 URL
  - 在大多數現代瀏覽器中，可以在網站導航欄找到 RSS 圖標直接訂閱

### 代碼與排版

- **語法高亮**：使用 `catppuccin-mocha` 風格的代碼高亮，提升代碼閱讀體驗
- **目錄生成**：自動為長文章生成目錄 (TOC)，方便導航
- **複製代碼按鈕**：為代碼塊添加一鍵複製功能，提升用戶體驗

### 內容組織

- **多種內容類型**：設置了 Blog、Showcase 等不同內容類型，滿足不同展示需求
- **標籤系統**：使用標籤對內容進行分類，方便讀者按興趣瀏覽

這個部落格的架構設計注重簡潔、高效和良好的用戶體驗，同時保持了擴展性，可以根據需要輕鬆添加新功能或調整現有功能
