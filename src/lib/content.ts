export type Locale = "zh-Hant" | "en";

export const SITE_URL = "https://ange1a.com";
export const SPARKS_CANONICAL = `${SITE_URL}/sparks`;
export const MEMORYSHOT_APP_STORE_URL =
  "https://apps.apple.com/gb/app/memoryshot/id6775766486";
export const LUMINA_CANONICAL = `${SITE_URL}/lumina`;

export const copy = {
  hub: {
    "zh-Hant": {
      title: "Ange1a",
      description:
        "Ange1a 出品創意工具。Sparks（念頭）跨平台想法孵化，MemoryShot 把截圖同現場記錄變成可搜尋的記憶，晶靈 Lumina 結合八字命盤與水晶指引，NearDrop 離線快速傳檔，記一筆即將推出多人分帳 app。",
      heroTitle: "創意工具，",
      heroTitleAccent: "為執行而生",
      heroSub:
        "Ange1a 開發跨平台 app，幫創作者把靈感收成可執行的計劃。",
    },
    en: {
      title: "Ange1a",
      description:
        "Creative tools by Ange1a. Sparks (念頭) for cross-platform idea incubation. MemoryShot turns screenshots and captures into searchable memories. Lumina (晶靈) pairs Bazi charts with daily crystal guidance. NearDrop for offline file transfer. 記一筆 group expense splitting is coming soon.",
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
  lumina: {
    "zh-Hant": {
      title: "晶靈 / Lumina",
      description:
        "晶靈 Lumina 係 iOS 水晶伴侶 app：依八字命盤同今日流日，每日推薦最適合配戴嘅水晶；管理收藏、查百科、追蹤淨化。Ange1a 出品。",
      headline: "晶靈 Lumina",
      sub: "懂水晶，更懂自己。",
      status: "iOS",
      eyebrow: "Ange1a · iOS",
      heroTitle: "每日專屬",
      heroTitleAccent: "水晶指引",
      heroSub:
        "晶靈 Lumina 結合八字命盤與五行流日，為你推薦最適合配戴的水晶。管理收藏、查閱百科、追蹤淨化——全部在本機完成，無需網路。",
      heroVisualCaption: "紫晶暖金、奶油質感、優雅玻璃卡片的靈性介面",
      logoAlt: "晶靈 Lumina app 圖示",
      ctaPrimary: "了解功能",
      ctaSecondary: "命盤分析",
      ctaMarketing: "行銷資訊",
      ctaSupport: "支援與常見問題",
      workflowTitle: "從命盤到配戴，一條清晰路徑",
      workflowSub: "先建立八字命盤，再依今日流日推薦水晶，最後管理你的收藏。",
      workflow: [
        {
          title: "命盤",
          body: "輸入出生日期、時辰同出生地，本機計算八字四柱、日主同五行分布。",
        },
        {
          title: "今日",
          body: "依命盤同流日五行，每日推薦最適合配戴的水晶同配戴理由。",
        },
        {
          title: "收藏",
          body: "記錄你擁有嘅水晶，依五行分類，追蹤淨化狀態同配戴習慣。",
        },
        {
          title: "百科",
          body: "完整水晶圖鑑：五行屬性、功效、配戴建議，從入門到進階一次查清楚。",
        },
      ],
      featuresEyebrow: "核心功能",
      featuresTitle: "本機運算，私隱優先",
      featuresBody:
        "所有八字計算同水晶推薦皆在你裝置上完成，唔需要 API Token，亦唔會上傳個人資料。",
      features: [
        {
          title: "八字命盤",
          body: "日主、五行分布、喜用神一目了然。支援真太陽時校正同多地出生地名。",
        },
        {
          title: "每日水晶指引",
          body: "結合命盤體質同今日流日，推薦最適合配戴嘅水晶，附詳細理由。",
        },
        {
          title: "水晶收藏管理",
          body: "依五行分類、追蹤淨化間隔、附相片記錄，輕鬆掌握每一顆水晶。",
        },
        {
          title: "完整水晶百科",
          body: "內建豐富水晶資料：五行、功效、左右手配戴建議，支援中英雙語。",
        },
      ],
      designTitle: "靈性而精緻的介面",
      designBody:
        "紫晶暖金配色、奶油質感背景同 refined glass 卡片。介面安靜優雅，讓水晶同命盤成為主角。",
      productIntroEyebrow: "產品 · iOS App",
      productIntroTitle: "晶靈 Lumina",
      productIntroTagline: "八字命盤 × 每日水晶指引",
      productIntroParagraphs: [
        "晶靈 Lumina 是一款結合東方命理與水晶文化的 iPhone 應用。建立八字命盤後，app 會依你的日主、五行分布同今日流日，每日推薦最適合配戴的水晶，並解釋推薦理由。",
        "你可以管理水晶收藏、追蹤淨化狀態、查閱完整水晶百科。所有八字計算同推薦邏輯皆在本機完成，無需網路連線，個人資料唔會離開你嘅裝置。",
        "紫晶暖金配色、優雅玻璃卡片同精緻排版，讓每日水晶指引成為一種寧靜而有意義的儀式。",
      ],
      productIntroStack: "SwiftUI · iOS 18 · SwiftData",
      statusNote: "晶靈 Lumina 即將於 App Store 上架。",
      backToHub: "← Ange1a",
      supportTitle: "本機優先，私隱清晰",
      supportBody:
        "晶靈 Lumina 只請求核心功能所需權限。命盤、水晶收藏同推薦資料預設儲存喺你裝置本地，唔會自動上傳到我哋伺服器。",
      faqTeaser: "常見問題同支援",
      marketingTitle: "關於晶靈 Lumina",
      marketingSubtitle: "你的水晶靈性伴侶",
      marketingIntro:
        "晶靈 Lumina（英文名 Lumina）係 Ange1a 出品嘅 iOS 應用，將八字命理同水晶文化結合，幫你了解體質、選對水晶、養成每日配戴習慣。",
      marketingHighlights: [
        "依八字命盤同流日，每日推薦最適合配戴嘅水晶",
        "完整水晶百科：五行、功效、配戴建議",
        "管理水晶收藏，追蹤淨化狀態",
        "全部本機運算，無需網路，私隱優先",
        "支援繁體中文同 English",
      ],
      marketingDeveloper: "Ange1a",
      marketingContact: "info@ange1a.com",
      marketingPlatform: "iPhone · iOS 18 或以上",
      marketingCategory: "生活風格 / Lifestyle",
    },
    en: {
      title: "Lumina / 晶靈",
      description:
        "Lumina (晶靈) is an iOS crystal companion: daily crystal guidance from your Bazi chart and today's flow day. Manage your collection, browse the encyclopedia, track cleansing. By Ange1a.",
      headline: "Lumina / 晶靈",
      sub: "Know your crystals. Know yourself.",
      status: "iOS",
      eyebrow: "Ange1a · iOS",
      heroTitle: "Daily crystal",
      heroTitleAccent: "guidance made for you",
      heroSub:
        "Lumina pairs your Bazi chart with the day's five-element flow to recommend the crystals best suited for you. Manage your collection, browse the encyclopedia, track cleansing — all on-device, no network required.",
      heroVisualCaption:
        "Amethyst warmth, antique gold accents, and refined glass cards in a calm spiritual UI",
      logoAlt: "Lumina app icon",
      ctaPrimary: "Explore features",
      ctaSecondary: "Bazi chart",
      ctaMarketing: "Marketing info",
      ctaSupport: "Support & FAQ",
      workflowTitle: "From chart to wearing",
      workflowSub:
        "Build your Bazi profile first, get daily crystal picks, then manage your collection.",
      workflow: [
        {
          title: "Chart",
          body: "Enter birth date, time, and place. Bazi pillars, day master, and element balance computed on-device.",
        },
        {
          title: "Today",
          body: "Daily crystal recommendations based on your chart and today's elemental flow, with clear reasons.",
        },
        {
          title: "Collection",
          body: "Log crystals you own, sort by element, track cleansing intervals and wearing habits.",
        },
        {
          title: "Encyclopedia",
          body: "Full crystal library: elements, benefits, wearing guidance — beginner to advanced.",
        },
      ],
      featuresEyebrow: "Core features",
      featuresTitle: "On-device, privacy-first",
      featuresBody:
        "All Bazi calculations and crystal recommendations run locally on your device — no API tokens, no personal data uploaded.",
      features: [
        {
          title: "Bazi chart",
          body: "Day master, element distribution, and favorable elements at a glance. True solar time and preset birth places supported.",
        },
        {
          title: "Daily crystal guidance",
          body: "Recommendations that match your constitution and today's flow, with detailed explanations.",
        },
        {
          title: "Crystal inventory",
          body: "Sort by element, track cleansing intervals, attach photos — every crystal in one place.",
        },
        {
          title: "Crystal encyclopedia",
          body: "Rich built-in library: elements, benefits, left/right hand guidance. Traditional Chinese and English.",
        },
      ],
      designTitle: "Spiritual, refined design",
      designBody:
        "Amethyst and antique gold on a warm cream canvas with refined glass cards. Quiet chrome — your chart and crystals take center stage.",
      productIntroEyebrow: "Product · iOS App",
      productIntroTitle: "Lumina / 晶靈",
      productIntroTagline: "Bazi chart × daily crystal guidance",
      productIntroParagraphs: [
        "Lumina (晶靈) is an iPhone app that blends Eastern metaphysics with crystal culture. After building your Bazi chart, the app recommends the best crystals to wear each day based on your day master, element balance, and today's flow — with clear reasons why.",
        "Manage your crystal collection, track cleansing, and browse a full encyclopedia. All Bazi math and recommendation logic runs on-device with no network required. Your personal data never leaves your phone.",
        "Amethyst warmth, elegant glass cards, and careful typography turn daily crystal guidance into a calm, meaningful ritual.",
      ],
      productIntroStack: "SwiftUI · iOS 18 · SwiftData",
      statusNote: "Lumina is coming soon to the App Store.",
      backToHub: "← Ange1a",
      supportTitle: "Local-first, privacy-forward",
      supportBody:
        "Lumina only requests permissions needed for core features. Charts, collections, and recommendations stay on your device by default — nothing is uploaded to our servers automatically.",
      faqTeaser: "FAQ and support",
      marketingTitle: "About Lumina / 晶靈",
      marketingSubtitle: "Your crystal spiritual companion",
      marketingIntro:
        "Lumina (晶靈) is an iOS app by Ange1a that combines Bazi metaphysics with crystal culture — helping you understand your constitution, choose the right crystals, and build a daily wearing practice.",
      marketingHighlights: [
        "Daily crystal picks from your Bazi chart and elemental flow",
        "Full encyclopedia: elements, benefits, wearing guidance",
        "Manage your collection and track cleansing",
        "All on-device — no network required, privacy-first",
        "Traditional Chinese and English supported",
      ],
      marketingDeveloper: "Ange1a",
      marketingContact: "info@ange1a.com",
      marketingPlatform: "iPhone · iOS 18 or later",
      marketingCategory: "Lifestyle",
    },
  },
  neardrop: {
    "zh-Hant": {
      title: "NearDrop · Ange1a",
      description:
        "NearDrop 是 iPhone 離線快速傳檔工具：開啟個人熱點，掃描 QR 即可連線 — Android、Windows、Mac 瀏覽器即可收檔，檔案不經雲端。Ange1a 出品。",
      eyebrow: "Ange1a · iOS 離線傳檔",
      heroTitle: "附近傳檔，",
      heroTitleAccent: "無需網路",
      heroSub:
        "開啟個人熱點，掃描 QR 即可連線。iPhone 作為主機，附近裝置透過瀏覽器或 NearDrop App 直接收檔 — 無需網路、檔案不經雲端。",
      logoAlt: "NearDrop app 圖示",
      comingSoonLabel: "即將上線",
      statusNote: "NearDrop 即將在 App Store 上線。",
      backToHub: "← 返回 Ange1a",
      sections: [
        {
          id: "hero",
          src: "/assets/neardrop/neardrop-section-01-hero.png",
          alt: "NearDrop 主視覺：附近傳檔，無需網路 — 開啟個人熱點，掃描 QR 即可連線",
        },
        {
          id: "how-it-works",
          src: "/assets/neardrop/neardrop-section-02-how-it-works.png",
          alt: "NearDrop 三步驟：開啟個人熱點、顯示 QR Code、對方掃碼傳檔",
        },
        {
          id: "cross-platform",
          src: "/assets/neardrop/neardrop-section-03-cross-platform.png",
          alt: "NearDrop 跨平台連線：iPhone App 與 Android、Windows、Mac 瀏覽器",
        },
        {
          id: "privacy",
          src: "/assets/neardrop/neardrop-section-04-privacy.png",
          alt: "NearDrop 離線優先：檔案不經雲端，點對點本地傳輸",
        },
        {
          id: "use-cases",
          src: "/assets/neardrop/neardrop-section-05-use-cases.png",
          alt: "NearDrop 使用情境：旅行分檔、會議簡報、相簿備份、創作者交件",
        },
        {
          id: "cta",
          src: "/assets/neardrop/neardrop-section-06-cta.png",
          alt: "NearDrop 為創作者設計的安靜傳檔工具 — 即將上線",
        },
      ],
      features: [
        {
          title: "離線 P2P",
          body: "個人熱點建立本地網絡，檔案點對點直傳，無需網路連線。",
        },
        {
          title: "跨平台",
          body: "Android、Windows、Mac 用瀏覽器即可收檔；iPhone 可用 NearDrop App 掃碼連線。",
        },
        {
          title: "隱私優先",
          body: "無需註冊帳號，檔案不會上傳至任何伺服器。",
        },
      ],
    },
    en: {
      title: "NearDrop · Ange1a",
      description:
        "NearDrop is a fast offline file transfer app for iPhone. Turn on Personal Hotspot, share a QR code, and let nearby devices connect via browser or the NearDrop app — no internet, no cloud.",
      eyebrow: "Ange1a · Offline file transfer",
      heroTitle: "Transfer nearby,",
      heroTitleAccent: "no internet needed",
      heroSub:
        "Create a room, turn on Personal Hotspot, and share a QR code. Nearby devices connect through a browser or the NearDrop app — files stay off the cloud.",
      logoAlt: "NearDrop app icon",
      comingSoonLabel: "Coming soon",
      statusNote: "NearDrop is coming soon to the App Store.",
      backToHub: "← Back to Ange1a",
      sections: [
        {
          id: "hero",
          src: "/assets/neardrop/neardrop-section-01-hero.png",
          alt: "NearDrop hero: transfer nearby without internet — Personal Hotspot and QR connection",
        },
        {
          id: "how-it-works",
          src: "/assets/neardrop/neardrop-section-02-how-it-works.png",
          alt: "NearDrop three steps: enable hotspot, show QR code, scan and transfer",
        },
        {
          id: "cross-platform",
          src: "/assets/neardrop/neardrop-section-03-cross-platform.png",
          alt: "NearDrop cross-platform: iPhone app and browser upload on Android, Windows, Mac",
        },
        {
          id: "privacy",
          src: "/assets/neardrop/neardrop-section-04-privacy.png",
          alt: "NearDrop offline-first: no cloud, peer-to-peer local transfer",
        },
        {
          id: "use-cases",
          src: "/assets/neardrop/neardrop-section-05-use-cases.png",
          alt: "NearDrop use cases: travel sharing, meeting handoffs, photo backup, creator delivery",
        },
        {
          id: "cta",
          src: "/assets/neardrop/neardrop-section-06-cta.png",
          alt: "NearDrop — a quiet transfer tool for creators, coming soon",
        },
      ],
      features: [
        {
          title: "Offline P2P",
          body: "Personal Hotspot creates a local network for direct device-to-device transfers.",
        },
        {
          title: "Cross-platform",
          body: "Android, Windows, and Mac connect via browser. iPhone can join with the NearDrop app.",
        },
        {
          title: "Privacy-first",
          body: "No account required. Your files are never uploaded to our servers.",
        },
      ],
    },
  },
  nav: {
    "zh-Hant": {
      products: "產品",
      sparks: "Sparks",
      memoryshot: "MemoryShot",
      lumina: "晶靈 Lumina",
      refundReminder: "Refund Reminder",
      neardrop: "NearDrop",
      jiyi: "記一筆",
      support: "支援",
      privacy: "私隱",
    },
    en: {
      products: "Products",
      sparks: "Sparks",
      memoryshot: "MemoryShot",
      lumina: "晶靈 Lumina",
      refundReminder: "Refund Reminder",
      neardrop: "NearDrop",
      jiyi: "記一筆",
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
      a: "除 Sparks、MemoryShot、晶靈 Lumina 同 NearDrop（iOS 離線傳檔）外，記一筆（iOS 多人分帳）即將上線。",
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
      a: "Alongside Sparks, MemoryShot, Lumina (晶靈), and NearDrop (offline iOS file transfer), 記一筆 (iOS group expense splitting) is coming soon.",
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

export const luminaPrivacySections: Record<
  Locale,
  { title: string; sections: { heading: string; body: string }[] }
> = {
  "zh-Hant": {
    title: "私隱政策",
    sections: [
      {
        heading: "概述",
        body: "Ange1a 開發晶靈 Lumina。本政策說明 iOS app 如何處理你嘅資料。",
      },
      {
        heading: "我哋收集咩資料",
        body: "你建立嘅命盤資料（姓名、出生日期、時辰、出生地）、水晶收藏（相片、暱稱、備註、淨化紀錄）、每日推薦同使用紀錄，預設全部儲存喺裝置本地（SwiftData），唔會自動上傳到我哋伺服器。晶靈 Lumina 唔需要帳戶登入，亦唔收集廣告識別碼。",
      },
      {
        heading: "本機運算",
        body: "八字命盤計算、五行分析同每日水晶推薦皆在你裝置本機完成，離線亦可正常使用，唔需要網絡連線。",
      },
      {
        heading: "裝置權限",
        body: "晶靈 Lumina 可能請求相簿（為水晶附加相片，可選）同通知（每日提醒或淨化提醒，可選）。你可以喺 iOS 設定或 app 內設定隨時關閉通知。",
      },
      {
        heading: "資料刪除",
        body: "刪除 app 會一併移除裝置上嘅命盤、收藏同紀錄。我哋無法代你還原已刪除嘅本機資料。",
      },
      {
        heading: "我哋唔會做嘅事",
        body: "我哋唔會出售你嘅命盤或水晶收藏資料，亦唔會用你嘅資料做廣告定向（除非將來明確告知並取得同意）。",
      },
      {
        heading: "聯絡",
        body: "如有私隱問題，請聯絡 info@ange1a.com。生效日期：2026-06-16。",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "Overview",
        body: "Ange1a develops Lumina (晶靈). This policy describes how the iOS app handles your information.",
      },
      {
        heading: "What we collect",
        body: "Bazi profiles you create (name, birth date, time, place), crystal collections (photos, nicknames, notes, cleansing records), daily recommendations, and usage logs are stored locally on your device (SwiftData) by default and are not uploaded to our servers. Lumina does not require account sign-in and does not collect advertising identifiers.",
      },
      {
        heading: "On-device processing",
        body: "Bazi chart calculations, element analysis, and daily crystal recommendations all run on your device. The app works offline and does not require a network connection.",
      },
      {
        heading: "Device permissions",
        body: "Lumina may request Photo Library (optional, to attach crystal photos) and Notifications (optional, for daily or cleansing reminders). You can disable notifications anytime in iOS Settings or in the app.",
      },
      {
        heading: "Data deletion",
        body: "Deleting the app removes charts, collections, and logs from your device. We cannot restore locally deleted data on your behalf.",
      },
      {
        heading: "What we do not do",
        body: "We do not sell your chart or crystal collection data, or use your information for ad targeting unless explicitly disclosed and consented.",
      },
      {
        heading: "Contact",
        body: "For privacy questions, contact info@ange1a.com. Effective date: 2026-06-16.",
      },
    ],
  },
};

export function localeFromParam(param: string): Locale | null {
  if (param === "zh-Hant" || param === "en") return param;
  return null;
}

export const luminaFaqItems: Record<Locale, FAQItem[]> = {
  "zh-Hant": [
    {
      q: "晶靈 Lumina 係咩？",
      a: "晶靈 Lumina 係 Ange1a 出品嘅 iOS 水晶伴侶 app。依你嘅八字命盤同今日流日，每日推薦最適合配戴嘅水晶；另有水晶收藏管理、百科同淨化追蹤功能。",
    },
    {
      q: "需要網路先用到？",
      a: "唔需要。所有八字計算同水晶推薦皆在你裝置本機完成，離線亦可正常使用。",
    },
    {
      q: "點樣建立命盤？",
      a: "首次開啟 app 時輸入出生日期、時辰同出生地即可。支援真太陽時校正同預設出生地名（如香港）。",
    },
    {
      q: "每日水晶推薦點計出嚟？",
      a: "app 會分析你嘅日主、五行分布同喜用神，再結合今日流日嘅五行，推薦最適合平衡能量嘅水晶，並附詳細理由。",
    },
    {
      q: "點樣管理水晶收藏？",
      a: "喺「我的水晶」加入你擁有嘅水晶，可附相片、依五行分類、設定淨化間隔，app 會提醒你何時需要淨化。",
    },
    {
      q: "晶靈 Lumina 需要咩權限？",
      a: "相簿（為水晶附加相片，可選）、通知（每日提醒，可選）。命盤同收藏資料儲存喺本機，唔會自動上傳。詳見私隱政策。",
    },
    {
      q: "支援邊啲語言？",
      a: "支援繁體中文同 English，可喺設定切換。",
    },
    {
      q: "點樣聯絡支援？",
      a: "電郵 info@ange1a.com。產品官網：https://ange1a.com/lumina/",
    },
  ],
  en: [
    {
      q: "What is Lumina (晶靈)?",
      a: "Lumina (晶靈) is an iOS crystal companion app by Ange1a. It recommends crystals to wear each day based on your Bazi chart and today's elemental flow, plus collection management, encyclopedia, and cleansing tracking.",
    },
    {
      q: "Does it require internet?",
      a: "No. All Bazi calculations and crystal recommendations run on-device. The app works offline.",
    },
    {
      q: "How do I create my Bazi chart?",
      a: "Enter your birth date, time, and place on first launch. True solar time correction and preset birth places (e.g. Hong Kong) are supported.",
    },
    {
      q: "How are daily crystal recommendations calculated?",
      a: "The app analyzes your day master, element balance, and favorable elements, then combines them with today's flow to suggest crystals that best balance your energy — with clear reasons.",
    },
    {
      q: "How do I manage my crystal collection?",
      a: "In My Crystals, add crystals you own with optional photos, sort by element, set cleansing intervals, and get reminders when it's time to cleanse.",
    },
    {
      q: "What permissions does Lumina need?",
      a: "Photo Library (optional, for crystal photos) and Notifications (optional, for daily reminders). Chart and collection data stay on-device and are not uploaded automatically. See the Privacy Policy.",
    },
    {
      q: "What languages are supported?",
      a: "Traditional Chinese and English. Switch anytime in Settings.",
    },
    {
      q: "How do I get support?",
      a: "Email info@ange1a.com. Product site: https://ange1a.com/lumina/",
    },
  ],
};
