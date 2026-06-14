export type Locale = "zh-Hant" | "en";

export const SITE_URL = "https://ange1a.com";
export const SPARKS_CANONICAL = `${SITE_URL}/sparks`;
export const MEMORYSHOT_APP_STORE_URL =
  "https://apps.apple.com/gb/app/memoryshot/id6775766486";

export const copy = {
  hub: {
    "zh-Hant": {
      title: "Ange1a",
      description:
        "Ange1a 出品創意工具。Sparks（念頭）跨平台想法孵化，MemoryShot 把截圖同現場記錄變成可搜尋的記憶。",
      heroTitle: "創意工具，",
      heroTitleAccent: "為執行而生",
      heroSub:
        "Ange1a 開發跨平台 app，幫創作者把靈感收成可執行的計劃。",
    },
    en: {
      title: "Ange1a",
      description:
        "Creative tools by Ange1a. Sparks (念頭) for cross-platform idea incubation. MemoryShot turns screenshots and captures into searchable memories.",
      heroTitle: "Creative tools",
      heroTitleAccent: "built to ship",
      heroSub:
        "Ange1a builds cross-platform apps that turn scattered inspiration into executable plans.",
    },
  },
  sparks: {
    "zh-Hant": {
      title: "念頭 / Sparks",
      description:
        "念頭（Sparks）係跨平台想法孵化 app：iPhone 捕捉靈感，Mac 砌拼圖、開計劃、執行復盤。Ange1a 出品。",
      heroTitle: "捕捉碎片，",
      heroTitleAccent: "孵化成計劃",
      heroSub:
        "從靈感、拼圖到每日回顧，Sparks 把創意整理成可執行下一步。",
      ctaMac: "Mac 版",
      ctaIOS: "iPhone 版",
      exploreWorkflow: "探索工作流 →",
      macHeroAlt:
        "Sparks Mac 版介面：總覽儀表板同孵化想法拼圖板",
      iosHeroTitle: "把靈感",
      iosHeroTitleAccent: "即刻變成碎片",
      iosHeroSub:
        "圖片、連結、語音同隨口念頭，Sparks iOS 幫你一路捕捉，再同步到 Mac 深度孵化。",
      iosCaptureCta: "開始捕捉 →",
      iosHeroAlt:
        "Sparks iOS 版：靈感來源、快速捕捉語音同碎片池",
      workflow: [
        {
          title: "捕捉",
          body: "Share Extension、語音、相簿、連結收成碎片。",
        },
        {
          title: "砌圖",
          body: "互動拼圖板把碎片砌成成熟想法。",
        },
        {
          title: "開計劃",
          body: "計劃書、待辦、紙質開市圖一次到位。",
        },
        {
          title: "執行復盤",
          body: "日曆排程、KISS／GRAI 復盤，唔只記低。",
        },
      ],
      macTitle: "Sparks for Mac",
      macBody:
        "互動拼圖板、深度合成、計劃書、日曆待辦、AI 導師同 KISS／GRAI 復盤。",
      macFeatures: [
        "互動拼圖板",
        "計劃書同開市圖",
        "日曆待辦",
        "AI 導師對話",
      ],
      iosTitle: "Sparks iOS 捕捉版",
      iosBody:
        "路上捕捉：Share Extension、語音即時轉文字、相簿匯入、碎片池分類整理。",
      iosFeatures: [
        "多元來源：圖片、連結、書籍、語音",
        "快速捕捉：語音即時轉文字",
        "碎片化整理：分類標籤",
        "跨裝置同步到 Mac",
      ],
      syncTitle: "跨平台同步",
      syncBody:
        "兩邊用 Sign in with Apple 登入同一念頭帳號。而家可用 .flintsync 手動匯出／匯入；iCloud 自動同步規劃中。",
      faqTeaser: "常見問題同支援",
    },
    en: {
      title: "Sparks / 念頭",
      description:
        "Sparks (念頭) is a cross-platform idea incubation app: capture on iPhone, incubate and execute on Mac. By Ange1a.",
      heroTitle: "Capture fragments,",
      heroTitleAccent: "incubate into plans",
      heroSub:
        "From inspiration and puzzle boards to daily reviews — Sparks turns creative sparks into actionable next steps.",
      ctaMac: "Mac app",
      ctaIOS: "iPhone app",
      exploreWorkflow: "Explore workflow →",
      macHeroAlt:
        "Sparks for Mac: overview dashboard and idea incubation puzzle board",
      iosHeroTitle: "Turn inspiration",
      iosHeroTitleAccent: "into fragments instantly",
      iosHeroSub:
        "Photos, links, voice, and offhand thoughts — Sparks for iPhone captures on the go and syncs to Mac for deep incubation.",
      iosCaptureCta: "Start capturing →",
      iosHeroAlt:
        "Sparks for iPhone: inspiration sources, voice quick capture, and fragment pool",
      workflow: [
        {
          title: "Capture",
          body: "Share Extension, voice, photos, and links become fragments.",
        },
        {
          title: "Assemble",
          body: "Interactive boards turn fragments into mature ideas.",
        },
        {
          title: "Plan",
          body: "Plan documents, todos, and launch maps in one place.",
        },
        {
          title: "Execute",
          body: "Calendar scheduling and KISS/GRAI review, not just notes.",
        },
      ],
      macTitle: "Sparks for Mac",
      macBody:
        "Interactive boards, deep synthesis, plan documents, calendar todos, AI mentor, and KISS/GRAI review.",
      macFeatures: [
        "Interactive idea board",
        "Plan documents",
        "Calendar todos",
        "AI mentor chat",
      ],
      iosTitle: "Sparks for iPhone (Capture)",
      iosBody:
        "Capture on the go: Share Extension, real-time voice-to-text, photo import, and tagged fragment pool.",
      iosFeatures: [
        "Multiple sources: photos, links, books, voice",
        "Quick capture: live voice transcription",
        "Fragment organization with tags",
        "Sync to Mac when ready",
      ],
      syncTitle: "Cross-platform sync",
      syncBody:
        "Sign in with Apple on both apps under one Sparks account. Manual .flintsync export/import today; iCloud auto-sync planned.",
      faqTeaser: "FAQ and support",
    },
  },
  memoryshot: {
    "zh-Hant": {
      title: "MemoryShot",
      description:
        "MemoryShot 把截圖同現場記錄變成可搜尋記憶：拍照、語音備忘、自動定位，回家再分類。Ange1a 出品。",
      headline: "MemoryShot",
      sub: "讓每一張照片都值得留下。",
      status: "iOS",
      eyebrow: "Ange1a · iOS",
      heroTitle: "拍下當下，",
      heroTitleAccent: "記低為什麼要留",
      heroSub:
        "MemoryShot 專注優化你手機裡的每一張圖：現場拍照加語音備忘，自動記錄地址，回家再分類整理。日後搜尋、回想都找得到。",
      heroVisualCaption: "羊皮紙質感、咖啡墨字、黃銅點綴的編輯式介面",
      logoAlt: "MemoryShot app 圖示",
      ctaPrimary: "了解記憶功能",
      ctaSecondary: "相簿清理",
      appStoreEyebrow: "下載於",
      ctaAppStore: "App Store",
      workflowTitle: "從拍到找，一條清晰路徑",
      workflowSub: "不用當下就決定一切。先記錄，再整理，最後輕鬆找回。",
      workflow: [
        {
          title: "記錄",
          body: "現場拍照，按住錄音。本機語音轉文字，不需 API Token。",
        },
        {
          title: "定位",
          body: "自動記錄拍攝地址。詳情頁可開 Apple、Google 或高德地圖。",
        },
        {
          title: "整理",
          body: "回家再分類：景點、美食、娛樂等。可多選篩選，亦可自訂標籤。",
        },
        {
          title: "找回",
          body: "關鍵字搜尋語音稿、地址、OCR 文字。大卡片、網格或緊湊列表任你選。",
        },
      ],
      memoriesEyebrow: "記憶",
      memoriesTitle: "快速記錄，完整上下文",
      memoriesBody:
        "每一張圖都附帶「為什麼要留」：語音備忘、地址、標籤同 OCR 文字，全部可搜尋。",
      memoriesFeatures: [
        {
          title: "拍照 + 語音備忘",
          body: "單手操作，慣用手按鈕自動調位。錄音即時轉文字，寫入同一欄內容。",
        },
        {
          title: "相簿匯入（可選）",
          body: "匯入前可選錄音、手動填地址或使用目前位置，再 OCR + 可選 AI 分析。",
        },
        {
          title: "分類與篩選",
          body: "內建景點、娛樂、美食等分類。可新增自訂分類、拖曳排序、多選 OR 篩選。",
        },
        {
          title: "詳情地圖",
          body: "有座標或地址時顯示小地圖。設定預設地圖 App，亦可臨時切換。",
        },
      ],
      cleanupEyebrow: "清理",
      cleanupTitle: "循環瀏覽，果斷取捨",
      cleanupBody:
        "專為未收藏截圖設計：左滑移入垃圾桶、右滑暫留、心形收藏。零 Token，只用 PhotoKit。",
      cleanupFeatures: [
        "垃圾桶可單張還原或永久刪除",
        "鼓勵進度，清理更有動力",
        "收藏後不再出現在清理佇列",
      ],
      widgetTitle: "主畫面小工具",
      widgetBody:
        "加入「記錄記憶」widget，點一下即開相機建立新記憶。支援小、中、大主畫面尺寸。",
      designTitle: "編輯式日記美學",
      designBody:
        "羊皮紙氛圍、咖啡墨字、黃銅點綴同 refined glass 卡片。介面安靜，內容才是主角。",
      productIntroEyebrow: "產品 · iOS App",
      productIntroTitle: "MemoryShot",
      productIntroTagline: "把截圖與隨手拍攝，變成可搜尋的記憶",
      productIntroParagraphs: [
        "MemoryShot 是一款為日常影像而生的 iPhone 應用。現場拍照、按住錄音，本機語音轉文字；自動記錄拍攝地址，回家再為記憶分類標籤。支援關鍵字搜尋、多種顯示模式與地圖檢視。",
        "另有「清理」功能，以直覺手勢整理未收藏截圖——刪除、暫留或收藏，釋放手機空間，零 API Token 消耗。",
        "溫暖羊皮紙質感、精緻玻璃卡片與黃銅色點綴，讓記錄與整理都成為一種優雅的日常儀式。",
      ],
      productIntroStack: "SwiftUI · iOS 18 · SwiftData · WidgetKit",
      statusNote: "MemoryShot 現已於 App Store 上架。",
      backToHub: "← Ange1a",
      supportTitle: "本地優先，私隱清晰",
      supportBody:
        "MemoryShot 只請求核心功能所需權限。相片、語音同記憶資料預設儲存喺你裝置本地，唔會自動上傳到我哋伺服器。",
      faqTeaser: "常見問題同支援",
    },
    en: {
      title: "MemoryShot",
      description:
        "MemoryShot turns screenshots and live captures into searchable memories: photo, voice memo, auto location, categorize later. By Ange1a.",
      headline: "MemoryShot",
      sub: "Make every photo worth keeping.",
      status: "iOS",
      eyebrow: "Ange1a · iOS",
      heroTitle: "Capture the moment,",
      heroTitleAccent: "remember why it mattered",
      heroSub:
        "MemoryShot helps every image on your phone earn its place: shoot with a voice memo, auto-save your address, and organize when you are home. Search and recall later without digging through albums.",
      heroVisualCaption:
        "Editorial journal UI with parchment warmth, espresso ink, and brass accents",
      logoAlt: "MemoryShot app icon",
      ctaPrimary: "Explore memories",
      ctaSecondary: "Screenshot cleanup",
      appStoreEyebrow: "Download on the",
      ctaAppStore: "App Store",
      workflowTitle: "From capture to recall",
      workflowSub:
        "You do not have to decide everything in the moment. Record first, organize later, find fast.",
      workflow: [
        {
          title: "Capture",
          body: "Shoot on site, hold to record. On-device speech-to-text, no API token required.",
        },
        {
          title: "Locate",
          body: "Auto-save where you were. Open in Apple Maps, Google Maps, or Amap from detail view.",
        },
        {
          title: "Organize",
          body: "Tag later: sights, food, entertainment, and more. Multi-select filters plus custom categories.",
        },
        {
          title: "Find",
          body: "Search voice transcripts, addresses, and OCR text. Large cards, grid, or compact list.",
        },
      ],
      memoriesEyebrow: "Memories",
      memoriesTitle: "Quick capture, full context",
      memoriesBody:
        "Every image keeps the reason you saved it: voice notes, address, tags, and OCR, all searchable.",
      memoriesFeatures: [
        {
          title: "Photo + voice memo",
          body: "One-hand friendly with a dominant-hand shutter. Live transcription writes into the same field.",
        },
        {
          title: "Optional photo import",
          body: "Record, enter an address, or use current location before OCR and optional AI analysis.",
        },
        {
          title: "Categories and filters",
          body: "Built-in tags for travel, food, and fun. Add custom categories, reorder, and filter with OR logic.",
        },
        {
          title: "Detail map",
          body: "Mini map when coordinates or an address exist. Pick a default map app or switch per memory.",
        },
      ],
      cleanupEyebrow: "Cleanup",
      cleanupTitle: "Swipe through, decide fast",
      cleanupBody:
        "Built for unfavorited screenshots: swipe left to trash, right to keep, heart to favorite. Zero tokens, PhotoKit only.",
      cleanupFeatures: [
        "Trash supports restore or permanent delete",
        "Progress encouragement keeps momentum",
        "Favorites leave the cleanup queue",
      ],
      widgetTitle: "Home Screen widget",
      widgetBody:
        "Add the Quick Capture widget to open the camera and start a new memory in one tap. Small, medium, and large sizes.",
      designTitle: "Editorial journal aesthetic",
      designBody:
        "Parchment atmosphere, espresso typography, brass gold accents, and refined glass cards. Quiet chrome, loud memories.",
      productIntroEyebrow: "Product · iOS App",
      productIntroTitle: "MemoryShot",
      productIntroTagline:
        "Turn screenshots and casual photos into searchable memories",
      productIntroParagraphs: [
        "MemoryShot is an iPhone app built for everyday images. Shoot on site, hold to record with on-device speech-to-text; auto-save your address, then tag and organize when you are home. Keyword search, multiple display modes, and map views included.",
        "The Cleanup flow uses intuitive gestures on unfavorited screenshots — delete, keep, or favorite — to free storage with zero API token cost.",
        "Warm parchment surfaces, refined glass cards, and brass accents make capturing and organizing feel like a calm daily ritual.",
      ],
      productIntroStack: "SwiftUI · iOS 18 · SwiftData · WidgetKit",
      statusNote: "MemoryShot is now available on the App Store.",
      backToHub: "← Ange1a",
      supportTitle: "Local-first, privacy-forward",
      supportBody:
        "MemoryShot only requests permissions needed for core features. Photos, voice notes, and memories stay on your device by default — nothing is uploaded to our servers automatically.",
      faqTeaser: "FAQ and support",
    },
  },
  nav: {
    "zh-Hant": {
      products: "產品",
      sparks: "Sparks",
      memoryshot: "MemoryShot",
      support: "支援",
      privacy: "私隱",
    },
    en: {
      products: "Products",
      sparks: "Sparks",
      memoryshot: "MemoryShot",
      support: "Support",
      privacy: "Privacy",
    },
  },
  footer: {
    "zh-Hant": {
      rights: "© Ange1a. All rights reserved.",
    },
    en: {
      rights: "© Ange1a. All rights reserved.",
    },
  },
} as const;

export type FAQItem = { q: string; a: string };

export const faqItems: Record<Locale, FAQItem[]> = {
  "zh-Hant": [
    {
      q: "Sparks（念頭）係咩？",
      a: "Sparks（中文名：念頭）係 Ange1a 出品嘅跨平台想法孵化 app。你可以喺 iPhone 快速捕捉靈感，喺 Mac 深度砌拼圖、開計劃、排日程同做復盤。",
    },
    {
      q: "Sparks 同 Flint 有咩分別？",
      a: "Flint 唔係獨立產品，只係 iOS 版念頭嘅內部工程代號。對使用者嚟講，iPhone 同 Mac 都叫念頭 / Sparks。",
    },
    {
      q: "iPhone 同 Mac 各自做咩？",
      a: "iPhone 負責路上捕捉（Share Extension、語音、相簿）、碎片池同輕量合成。Mac 負責互動拼圖板、計劃書、日曆待辦同 KISS／GRAI 復盤。",
    },
    {
      q: "點樣同步 iPhone 同 Mac 嘅資料？",
      a: "而家可以用 .flintsync 檔案手動匯出／匯入創意資料。兩邊用同一 Apple ID 登入念頭帳號。iCloud 自動同步規劃中。",
    },
    {
      q: "Angela 係咩？",
      a: "Angela 係成長洞察功能，根據你嘅捕捉同合成習慣提供維度評分同改進提示。iPhone 同 Mac 都有相關能力。",
    },
    {
      q: "免費版同 Premium 有咩分別？",
      a: "免費版可建立最多 40 個碎片。Premium 訂閱解除碎片上限，並解鎖完整 Angela 成長洞察等功能。",
    },
    {
      q: "念頭需要咩權限？",
      a: "iPhone 版可能請求相簿、麥克風同語音辨識權限，用於匯入圖片同語音備忘。Mac 版語音捕捉可能需要系統語音辨識權限。",
    },
    {
      q: "我嘅資料儲存喺邊？",
      a: "創意內容主要儲存喺你裝置本地。Sign in with Apple 用於身份驗證；訂閱經 RevenueCat 處理。詳見私隱政策。",
    },
    {
      q: "點樣聯絡支援？",
      a: "電郵 info@ange1a.com。產品官網：https://ange1a.com/sparks/",
    },
    {
      q: "Ange1a 仲有咩其他產品？",
      a: "除 Sparks 外，MemoryShot 已上線（iOS）。詳見 ange1a.com/memoryshot/。",
    },
  ],
  en: [
    {
      q: "What is Sparks (念頭)?",
      a: "Sparks (Chinese name: 念頭) is a cross-platform idea incubation app by Ange1a. Capture on iPhone; incubate, plan, and execute on Mac.",
    },
    {
      q: "What is the difference between Sparks and Flint?",
      a: "Flint is not a separate product. It is the internal engineering codename for the iOS app. Users see Sparks / 念頭 on both platforms.",
    },
    {
      q: "What does each platform do?",
      a: "iPhone handles on-the-go capture, fragment pool, and light synthesis. Mac handles interactive boards, plan documents, calendar todos, and KISS/GRAI review.",
    },
    {
      q: "How do I sync between iPhone and Mac?",
      a: "Use .flintsync files for manual export/import today. Sign in with the same Apple ID on both apps. iCloud auto-sync is planned.",
    },
    {
      q: "What is Angela?",
      a: "Angela is Sparks' growth insights feature: dimension scores and improvement hints based on your capture and synthesis habits.",
    },
    {
      q: "Free vs Premium?",
      a: "Free tier allows up to 40 fragments. Premium removes the limit and unlocks full Angela insights.",
    },
    {
      q: "What permissions does Sparks need?",
      a: "iPhone may request Photo Library, Microphone, and Speech Recognition. Mac may request speech recognition for voice input.",
    },
    {
      q: "Where is my data stored?",
      a: "Creative content is stored locally on your device. Sign in with Apple is for identity; subscriptions use RevenueCat. See the Privacy Policy.",
    },
    {
      q: "How do I get support?",
      a: "Email info@ange1a.com. Product site: https://ange1a.com/sparks/",
    },
    {
      q: "What else does Ange1a make?",
      a: "MemoryShot is available on iOS, alongside Sparks. Visit ange1a.com/memoryshot/.",
    },
  ],
};

export const privacySections: Record<
  Locale,
  { title: string; sections: { heading: string; body: string }[] }
> = {
  "zh-Hant": {
    title: "私隱政策",
    sections: [
      {
        heading: "概述",
        body: "Ange1a 開發 Sparks（念頭）。本政策說明 iPhone 同 Mac 版 app 如何處理你嘅資料。",
      },
      {
        heading: "我哋收集咩資料",
        body: "你建立嘅創意資料（碎片、來源、計劃等）預設儲存喺裝置本地，唔會自動上傳到我哋伺服器。Sign in with Apple 提供匿名化識別符。Premium 訂閱經 RevenueCat 同 App Store 處理。若你喺 Mac 自行設定 OpenAI API Key，對話內容會直接發送去 OpenAI。",
      },
      {
        heading: "裝置權限",
        body: "iPhone 版可能請求相簿（匯入圖片）、麥克風（語音備忘）、語音辨識（轉錄文字）。你可以喺 iOS 設定隨時撤銷。",
      },
      {
        heading: "資料同步",
        body: "手動 .flintsync 匯出檔案由你自行保管。iCloud 自動同步（規劃中）會使用 Apple iCloud 基礎設施。",
      },
      {
        heading: "我哋唔會做嘅事",
        body: "我哋唔會出售你嘅創意內容，亦唔會用你嘅碎片做廣告定向（除非將來明確告知並取得同意）。",
      },
      {
        heading: "聯絡",
        body: "如有私隱問題，請聯絡 info@ange1a.com。生效日期：2026-06-14。",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "Overview",
        body: "Ange1a develops Sparks (念頭). This policy describes how the iPhone and Mac apps handle your information.",
      },
      {
        heading: "What we collect",
        body: "Creative data you create is stored locally on your device by default. Sign in with Apple provides an anonymized identifier. Premium subscriptions are processed by RevenueCat and the App Store. If you configure an OpenAI API Key on Mac, chat content is sent directly to OpenAI.",
      },
      {
        heading: "Device permissions",
        body: "The iPhone app may request Photo Library, Microphone, and Speech Recognition. You can revoke permissions anytime in iOS Settings.",
      },
      {
        heading: "Data sync",
        body: "Manual .flintsync exports are files you control. Planned iCloud sync will use Apple's iCloud infrastructure.",
      },
      {
        heading: "What we do not do",
        body: "We do not sell your creative content or use your fragments for ad targeting unless explicitly disclosed and consented.",
      },
      {
        heading: "Contact",
        body: "For privacy questions, contact info@ange1a.com. Effective date: 2026-06-14.",
      },
    ],
  },
};

export const memoryshotFaqItems: Record<Locale, FAQItem[]> = {
  "zh-Hant": [
    {
      q: "MemoryShot 係咩？",
      a: "MemoryShot 係 Ange1a 出品嘅 iOS 記憶管理 app。現場拍照加語音備忘，自動記錄地址，回家再分類整理；另有截圖清理功能，幫你釋放相簿空間。",
    },
    {
      q: "點解儲唔到相片或語音？",
      a: "請確認相機、麥克風同相簿權限已開啟，並確保裝置有足夠儲存空間。",
    },
    {
      q: "點解語音轉文字失敗？",
      a: "請檢查網絡連線，並確認已喺 iOS 設定開啟語音辨識權限。",
    },
    {
      q: "點解小工具唔更新？",
      a: "試下移除後重新加入「記錄記憶」widget，再開啟 app 等一陣。",
    },
    {
      q: "清理功能點運作？",
      a: "清理專為未收藏截圖設計：左滑移入垃圾桶、右滑暫留、心形收藏。零 API Token，只用 PhotoKit 讀取相簿。",
    },
    {
      q: "MemoryShot 需要咩權限？",
      a: "相機（現場拍照）、麥克風（語音備忘）、語音辨識（轉錄文字）、相簿（匯入同清理）、定位（記錄拍攝地址，可選）。你可以喺 iOS 設定隨時撤銷。",
    },
    {
      q: "我嘅資料儲存喺邊？",
      a: "記憶內容預設儲存喺你裝置本地（SwiftData）。若你喺設定自行輸入 AI API Key，分析請求會直接發送去你所選嘅 AI 供應商。詳見私隱政策。",
    },
    {
      q: "點樣聯絡支援？",
      a: "電郵 info@ange1a.com。產品官網：https://ange1a.com/memoryshot/",
    },
  ],
  en: [
    {
      q: "What is MemoryShot?",
      a: "MemoryShot is an iOS memory management app by Ange1a. Shoot with a voice memo, auto-save your address, organize later, and clean up unfavorited screenshots to free storage.",
    },
    {
      q: "Why can't I save photos or voice notes?",
      a: "Make sure camera, microphone, and photo library permissions are granted, and that your device has enough storage.",
    },
    {
      q: "Why does speech-to-text fail?",
      a: "Check your network connection and confirm Speech Recognition permission is enabled in iOS Settings.",
    },
    {
      q: "Why isn't the widget updating?",
      a: "Try removing and re-adding the Quick Capture widget, then reopen the app and wait a moment.",
    },
    {
      q: "How does Cleanup work?",
      a: "Cleanup is for unfavorited screenshots: swipe left to trash, right to keep, heart to favorite. Zero API tokens — PhotoKit only.",
    },
    {
      q: "What permissions does MemoryShot need?",
      a: "Camera (live capture), Microphone (voice memos), Speech Recognition (transcription), Photo Library (import and cleanup), and Location (capture address, optional). Revoke anytime in iOS Settings.",
    },
    {
      q: "Where is my data stored?",
      a: "Memories are stored locally on your device (SwiftData). If you enter an AI API Key in Settings, analysis requests go directly to your chosen provider. See the Privacy Policy.",
    },
    {
      q: "How do I get support?",
      a: "Email info@ange1a.com. Product site: https://ange1a.com/memoryshot/",
    },
  ],
};

export const memoryshotPrivacySections: Record<
  Locale,
  { title: string; sections: { heading: string; body: string }[] }
> = {
  "zh-Hant": {
    title: "私隱政策",
    sections: [
      {
        heading: "概述",
        body: "Ange1a 開發 MemoryShot。本政策說明 iOS app 如何處理你嘅資料。",
      },
      {
        heading: "我哋收集咩資料",
        body: "你建立嘅記憶（相片、語音稿、地址、標籤等）預設儲存喺裝置本地，唔會自動上傳到我哋伺服器。若你喺設定自行輸入 AI API Key，分析請求會直接發送去你所選嘅 AI 供應商（例如 OpenRouter），我哋唔會代你儲存 API Key 以外嘅對話內容。",
      },
      {
        heading: "裝置權限",
        body: "MemoryShot 可能請求相機（現場拍照）、麥克風（語音備忘）、語音辨識（轉錄文字）、相簿（匯入同清理截圖）、定位（記錄拍攝地址）。你可以喺 iOS 設定隨時撤銷。",
      },
      {
        heading: "相簿清理",
        body: "清理功能透過 PhotoKit 讀取未收藏截圖。刪除或移入垃圾桶嘅操作只影響你裝置本地相簿，唔涉及雲端上傳。",
      },
      {
        heading: "我哋唔會做嘅事",
        body: "我哋唔會出售你嘅相片或記憶內容，亦唔會用你嘅資料做廣告定向（除非將來明確告知並取得同意）。",
      },
      {
        heading: "聯絡",
        body: "如有私隱問題，請聯絡 info@ange1a.com。生效日期：2026-06-14。",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "Overview",
        body: "Ange1a develops MemoryShot. This policy describes how the iOS app handles your information.",
      },
      {
        heading: "What we collect",
        body: "Memories you create (photos, transcripts, addresses, tags) are stored locally on your device by default and are not uploaded to our servers. If you enter an AI API Key in Settings, analysis requests are sent directly to your chosen provider (e.g. OpenRouter). We do not store chat content beyond what your provider processes.",
      },
      {
        heading: "Device permissions",
        body: "MemoryShot may request Camera, Microphone, Speech Recognition, Photo Library, and Location. You can revoke permissions anytime in iOS Settings.",
      },
      {
        heading: "Screenshot cleanup",
        body: "Cleanup reads unfavorited screenshots via PhotoKit. Delete and trash actions affect your on-device photo library only — no cloud upload is involved.",
      },
      {
        heading: "What we do not do",
        body: "We do not sell your photos or memory content, or use your data for ad targeting unless explicitly disclosed and consented.",
      },
      {
        heading: "Contact",
        body: "For privacy questions, contact info@ange1a.com. Effective date: 2026-06-14.",
      },
    ],
  },
};

export function localeFromParam(param: string): Locale | null {
  if (param === "zh-Hant" || param === "en") return param;
  return null;
}
