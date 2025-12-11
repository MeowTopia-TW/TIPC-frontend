import type { Partner, BookData, Event } from "@/types";

// 合作夥伴數據
export const partnersData: Partner[] = [
  {
    id: "cultural-museum",
    name: "「台語工藝詞庫」網站啟用 有助傳承台灣工藝與文化記憶",
    description: "國立臺灣工藝研究發展中心的臺語網站，提供臺語文創、工藝知識與教學資源，推廣本土語言與文化傳承。",
    image: "/images/partnerrecommendations/台灣工藝研究發展中心.jpg",
    category: "教育機構",
    established: "1985",
    website: "https://kanggesu.ntcri.org.tw/NTCRI_TaigiWebSite/"
  },
  {
    id: "heritage-foundation",
    name: "懷舊列車動起來 鐵道博開放搭藍皮火車賞古蹟 可預約",
    description: "國立鐵道博物館官方網站，呈現臺灣鐵道文化脈絡，典藏珍貴文物，提供豐富導覽與教育資源，傳承歷史記憶",
    image: "/images/partnerrecommendations/國家鐵道博物館.jpg",
    category: "博物館機構",
    established: "1992",
    website: "https://www.nrm.gov.tw/"
  },
  {
    id: "cultural-education",
    name: "百大文化基地計畫 新北黃金山城美學廊帶7月至11月推出「礦事聚作」遊程",
    description: "臺灣煤礦博物館官網，保存煤礦歷史記憶，展現礦業文化風華，結合教育與觀光，深入探索臺灣產業發展的軌跡。",
    image: "/images/partnerrecommendations/新平溪煤礦博物園區.jpg",
    category: "保護機構",
    established: "2001",
    website: "https://www.taiwancoal.com.tw/web/"
  },
];

 //TIPC選書
export const bookCardData: BookData[] = [
  {
    id: "1",
    bookName: "地方創生可以不一樣",
    author: ["李智仁", "陳德齡","嚴昱如"],
    image: "/images/books/book1.png",
    category: "文化資產",
    publicDate: "2025/06/30(1版1刷)",
    publisher: "五南",
    description: "地方創生近年來備受討論，也經歷了許多實踐歷程，成果令人敬佩。在各地的案例不斷累積之餘，如何透過系統化的整理，將政府與民間的角色清楚地說明與釐清，是本書的初衷；而如何從中找到關鍵的議題進行分析比較，進而找到臺灣可行的軌跡，是本書的內容。",
    tags: ["中文", "政策面"],
    pages: 224,
    isbn: "9978-626-423-539-6",
    eisbn: "9786264235365"
  },
  {
    id: "2",
    bookName: "地方創生可以不一樣",
    author: ["李智仁", "陳德齡","嚴昱如"],
    image: "/images/books/book1.png",
    category: "文化資產",
    publicDate: "2025/06/30(1版1刷)",
    publisher: "五南",
    description: "地方創生近年來備受討論，也經歷了許多實踐歷程，成果令人敬佩。在各地的案例不斷累積之餘，如何透過系統化的整理，將政府與民間的角色清楚地說明與釐清，是本書的初衷；而如何從中找到關鍵的議題進行分析比較，進而找到臺灣可行的軌跡，是本書的內容。",
    tags: ["中文", "政策面"],
    pages: 224,
    isbn: "9978-626-423-539-6",
    eisbn: "9786264235365"
  },
  {
    id: "3",
    bookName: "地方創生可以不一樣",
    author: ["李智仁", "陳德齡","嚴昱如"],
    image: "/images/books/book1.png",
    category: "文化資產",
    publicDate: "2025/06/30(1版1刷)",
    publisher: "五南",
    description: "地方創生近年來備受討論，也經歷了許多實踐歷程，成果令人敬佩。在各地的案例不斷累積之餘，如何透過系統化的整理，將政府與民間的角色清楚地說明與釐清，是本書的初衷；而如何從中找到關鍵的議題進行分析比較，進而找到臺灣可行的軌跡，是本書的內容。",
    tags: ["中文", "政策面"],
    pages: 224,
    isbn: "9978-626-423-539-6",
    eisbn: "9786264235365"
  },
  {
    id: "4",
    bookName: "地方創生可以不一樣",
    author: ["李智仁", "陳德齡","嚴昱如"],
    image: "/images/books/book1.png",
    category: "文化資產",
    publicDate: "2025/06/30(1版1刷)",
    publisher: "五南",
    description: "地方創生近年來備受討論，也經歷了許多實踐歷程，成果令人敬佩。在各地的案例不斷累積之餘，如何透過系統化的整理，將政府與民間的角色清楚地說明與釐清，是本書的初衷；而如何從中找到關鍵的議題進行分析比較，進而找到臺灣可行的軌跡，是本書的內容。",
    tags: ["中文", "政策面"],
    pages: 224,
    isbn: "9978-626-423-539-6",
    eisbn: "9786264235365"
  },
  {
    id: "5",
    bookName: "地方創生可以不一樣",
    author: ["李智仁", "陳德齡","嚴昱如"],
    image: "/images/books/book1.png",
    category: "文化資產",
    publicDate: "2025/06/30(1版1刷)",
    publisher: "五南",
    description: "地方創生近年來備受討論，也經歷了許多實踐歷程，成果令人敬佩。在各地的案例不斷累積之餘，如何透過系統化的整理，將政府與民間的角色清楚地說明與釐清，是本書的初衷；而如何從中找到關鍵的議題進行分析比較，進而找到臺灣可行的軌跡，是本書的內容。",
    tags: ["中文", "政策面"],
    pages: 224,
    isbn: "9978-626-423-539-6",
    eisbn: "9786264235365"
  },
];

//活動
export const eventData: Event[] = [
  {
    id: "1",
    title: "地方創生可以不一樣新書發表會",
    date: "2025-08-16",
    mainImage: "/images/event/past/Book/bookmain.jpg",
  description: `脫下鞋子 奔跑
    我原本不知
    最終目的在何方
    直到我遇見心中燃起的光
    才發現
    目的地就在
    往完美的方向`,
    subTitle: "Impromptu142, 臺北市萬華區長沙街二段142號",
    relatedImages: [
    { id: 1, title: "book1", src: "/images/event/past/Book/book1.jpg" },
    { id: 2, title: "book2", src: "/images/event/past/Book/book2.jpg" },
    { id: 3, title: "book3", src: "/images/event/past/Book/book3.jpg" },
    { id: 4, title: "book4", src: "/images/event/past/Book/book4.jpg" },
    { id: 5, title: "book5", src: "/images/event/past/Book/book5.jpg" },
  ],
    type: "past",
    alt: "地方創生可以不一樣新書發表會",
  },
  {
    id: "2",
    title: "故宮浮世之美",
    date: "2025-09-20",
    mainImage: "/images/museums/故宮_浮世之美.jpg",
    description: "故宮博物院經典展覽，展現東方藝術之美",
    subTitle: "故宮博物院經典展覽，展現東方藝術之美",
    relatedImages: [
    { id: 1, title: "故宮_浮世之美", src: "/images/museums/故宮_浮世之美.jpg" },
  ],
    type: "current",
    alt: "故宮浮世之美",
  },
  {
    id: "3",
    title: "奇美博物館展覽",
    date: "2025-09-21",
    mainImage: "/images/museums/奇美博物館.jpg",
    description: "台南奇美博物館的精彩展覽與文物收藏",
    subTitle: "台南奇美博物館的精彩展覽與文物收藏",
    relatedImages: [
    { id: 1, title: "奇美博物館", src: "/images/museums/奇美博物館.jpg" },
  ],
    type: "current",
    alt: "奇美博物館展覽",
  },
  {
    id: "4",
    title: "田中達也特展",
    date: "2025-03-15 ~ 2025-04-01",
    mainImage: "/images/museums/田中.jpg",
    description: "田中達也特展-大師眼中的微型組合",
    subTitle: "田中達也特展-大師眼中的微型組合",
    relatedImages: [
    { id: 1, title: "田中達也特展", src: "/images/gallery/6.jpg" },
    { id: 2, title: "田中達也特展", src: "/images/gallery/7.jpg" },
    { id: 3, title: "田中達也特展", src: "/images/gallery/8.jpg" },
  ],
    type: "past",
    alt: "田中達也特展",
  },
  {
    id: "5",
    title: "世界新聞攝影展",
    date: "2025-03-15 ~ 2025-04-01",
    mainImage: "/images/museums/世界攝影展.jpg",
    relatedImages: [
    { id: 1, title: "世界攝影展", src: "/images/gallery/9.jpg" },
    { id: 2, title: "世界攝影展", src: "/images/gallery/10.jpg" },
    { id: 3, title: "世界攝影展", src: "/images/gallery/11.jpg" },
  ],
    description: "世界新聞攝影展 -財團法人玉溪有容教育基金",
    subTitle: "世界新聞攝影展 -財團法人玉溪有容教育基金",
    type: "past",
    alt: "世界新聞攝影展",
  },
  {
    id: "6",
    title: "彰化地方創生活動",
    date: "2025-10-14",
    mainImage: "/images/event/past/Changhua/Changhua_01.jpg",
    relatedImages: [
    { id: 1, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_01.jpg" },
    { id: 2, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_02.jpg" },
    { id: 3, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_03.jpg" },
    { id: 4, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_04.jpg" },
    { id: 5, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_05.jpg" },
    { id: 6, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_06.jpg" },
    { id: 7, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_07.jpg" },
    { id: 8, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_08.jpg" },
    { id: 9, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_09.jpg" },
    { id: 10, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_10.jpg" },
    { id: 11, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_11.jpg" },
    { id: 12, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_12.jpg" },
    { id: 13, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_13.jpg" },
    { id: 14, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_14.jpg" },
    { id: 15, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_15.jpg" },
    { id: 16, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_16.jpg" },
    { id: 17, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_17.jpg" },
    { id: 18, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_18.jpg" },
    { id: 19, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_19.jpg" },
    { id: 20, title: "彰化地方創生活動", src: "/images/event/past/Changhua/Changhua_20.jpg" },
  ],
    description: `1970年代美國環境政策法案立法制定過程，是將環社會經濟影響力評估（socio-economic impact assessment）納入環評的開始，而「社會影響力」從初期強調經濟影響，至後期越形重視社會、甚至社會文化(socio-cultural)的影響力。環境如何影響社會、文化，其實不斷在我們眼前發生。今天到訪芳苑泥灘，位處彰化縣潮間帶濕地，豐富的生物多樣性，包括招潮蟹、候鳥、彈塗魚等，及獨特的「平掛式」養殖珍珠蚵、全球唯一的「海牛採蚵」，這些因著自然環境而生存、長年累積、發展出之知識、技術及相關實踐的蚵農文化，極具有申請無形文化資產(應屬於傳統知識與實踐項目)的潛力。今天眼前的震撼是，沿岸大型風機造成的開發衝擊，造成環境破壞如何影響珍貴的蚵農文化斷裂、消逝，速度之快，之直接，之不可逆。慶幸的是，我們今天認識一群長期對於芳苑環境議題、也理解文化如何可以喚醒地方認同、對於地方創生參與有經驗的在地鄉親朋友，及謝謝惠女老師引薦，人劇團的咪咪導演。我們看到藝術介入文化記憶的催生是有力量的，也看到(像我們這樣的外部眼光)，當有方法擾動地方建立自信，是有機會共創打造，芳苑文化品牌的第一哩路。
跟大家分享，咪咪導演與我非常敬重的紀錄片柯金源導演，一同透過影像與表演藝術跨域，在2022年合作完成的《海之岸》紀錄片，以藝術形式書寫芳苑環境議題，除了表彰環境具有驅動文化影響力的能量，也透過影像，保存2022年當時芳苑潮間帶的地景空間，是影像傳頌文化記憶最好見證。
Ps 今天看到芳苑在地鄉親對於本地文化認同，與凝聚地方創生願景逐步化為共識的努力，我心裡好生羨慕。如果未來有一天，我有機會回到台南，能找到一群共同為台南文化記憶努力的夥伴，該是多麼幸福的一件事~~
地方創生不能停留在口中的理想，也不能停留在腦海的想像，有策略地付出行動，才會有效益，有影響力！我們，已經動起來了~`,
    subTitle: "彰化地方創生活動",
    type: "past",
    alt: "彰化地方創生活動",
  }
  
];

export const navItems = [
    { href: '/about', label: '關於我們' },
    { href: '/article/all', label: '觀點文章' },
    { href: '/story/all', label: '光影故事' },
    { href: '/gallery/all', label: 'TIPC影音' },
    { href: '/book', label: 'TIPC選書' },
    { href: '/archive', label: '典藏索引' },
    { href: '/exhibition', label: '線上展覽' },
    { href: '/event', label: '活動探索' },
    { href: '/partner', label: '合作夥伴' },
    { href: '/contact', label: '聯絡我們' },
];
