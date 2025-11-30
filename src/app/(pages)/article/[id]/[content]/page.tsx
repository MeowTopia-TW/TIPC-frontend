"use client";
import Image from "next/image";
import { PageLayout } from '@/components';
import { useParams } from "next/navigation";
import { CultureArticleData } from "@/data";

export default function ArticleContentPage() {
  const params = useParams();
  const content = params?.content as string;

  if (!content) return null;
  const Articleitem = CultureArticleData.find((item) => item.id === content);

  if (!Articleitem) {
    return <p className="text-center mt-10">Articledata not found.</p>;
  }
  
  return (
    <PageLayout title={Articleitem.title} subtitle="Article" headerpic="/images/header/article.jpeg">
      <div className="min-h-screen bg-gray-50">

      {/* 主要內容區域 */}
        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title + Meta */}
        <header className="mb-6 px-4">
          <blockquote className="text-4xl sm:text-6xl font-bold text-[#833416] border-l-4 border-[#833416] pl-4 mb-4">
            <h1 className="article-title">台北保安宮介紹</h1>
          </blockquote>
          <div className="flex items-center space-x-2">
            <p className="text-gray-700 text-lg">2025-09-13 · 作者: 復嘉</p>
          <div className="
                     /* Keeps it next to the text */
            px-2 py-0.5          /* Horizontal and vertical padding */
            rounded-full         /* Full rounded corners */
            border-2 border-gray-700 /* Outline color */
            text-gray-700         /* Text color */
            text-sm              /* Small text size */
            font-medium          /* Medium font weight */
          ">
            文化記憶
          </div>
          </div>
          
        </header>


        {/* Article Content */}
        <section className="prose prose-xl max-w-none">




          {/* Paragraph 1 */}
          <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Text Content Block */}
            <div className="p-4 order-2 lg:order-1">
              <p className="text-2xl/12 text-gray-700 mb-4">
                每當我說自己住在台北市保安街，總會有人笑著問：「那你家是不是在保安宮旁邊呢？」但其實，我家所在的保安街，已經算是大稻埕的外圍了。保安宮則位於大龍峒（舊稱「大浪泵」），靠近淡水河與基隆河的交會處。說起來，大龍峒的開發其實比萬華與大稻埕還要晚一些，不過如今卻以保安宮成了北台灣信仰文化的重要象徵。
              </p>
            </div>

            {/* Image Block (Ideal for horizontal or square images) */}
            <div className="px-4 order-1 lg:order-2">
              <img 
                src="/images/gallery/article1.jpg" 
                alt="Horizontal landscape image" 
                className="w-full h-auto object-cover rounded-xl shadow-2xl" 
              />
            </div>
          </div>




          {/* Paragraph 2 */}
          <div className="mt-12 lg:mt-20 p-4">
            <p className="text-2xl/12 text-gray-700 mb-4">
              大龍峒保安宮的歷史始於乾隆七年（1742年），由來自福建同安的移民從家鄉白礁慈濟宮分靈保生大帝香火，歷經兩次改建，於嘉慶十年至道光十年（1805年至1830年）間建成為現今的規模。 此廟宇曾是大龍峒地區的信仰中心，見證了同安移民的拓墾與分類械鬥。 保安宮也因其精緻的工藝、壁畫、石雕等豐富的文化資產，於2003年獲得聯合國教科文組織亞太文化資產保存獎。
            </p>
          </div>




          {/* Paragraph 3 */}
          <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Image Block (Ideal for horizontal or square images) */}
            <div className="p-4">
              <img 
                src="/images/gallery/article2.jpg" 
                alt="Horizontal landscape image" 
                className="w-full h-auto object-cover rounded-xl shadow-2xl" 
              />
            </div>

            {/* Text Content Block */}
            <div className="px-4">
              <p className="text-2xl/12 text-gray-700 mb-0">
                保安宮主祀醫藥之神「保生大帝」，俗稱「大道公」。保安宮還有一大特色，就是「求藥籤」。一般廟宇求的是「籤詩」，問的是命運與前程，但保安宮的藥籤，問的卻是「身體的病痛」。保生大帝主掌醫藥，因此以前醫藥尚未發達時，信眾若身體不適，便來抽籤問診。每支籤對應一個古方，寫明病因與處方，分為「外科」、「內科」與「小兒科」三類，甚至還會附上草藥名稱與煎煮方法，彷彿一位跨越時空的老醫師親自開立的藥方。
              </p>
            </div>
            
          </div>
          <div className="px-4">
            <p className="text-2xl/12 text-gray-700 mb-4">
              廟方出版《保生大帝藥籤解》，收錄所有藥籤內容，詳細記錄病症與對應配方，根據廟方人員說，這些藥方都有中藥師確認過，如今已絕版，十分珍貴。雖然現在無法再購得，但這樣的「問病求方」傳統，也是老一輩的重要記憶。
            </p>
          </div>
          


          {/* Paragraph 4 */}
          <div className="mt-12 lg:mt-20 px-4">
            <p className="text-2xl/12 text-gray-700 mb-4">
              最讓我著迷的，是那進入正殿廣場後兩側巍然佇立的鐘樓與鼓樓。在台北保安宮，鐘樓位於東方，鼓樓在西方。古時候它們不只是裝飾，更有報時的功能，早晨擊鐘，傍晚擊鼓，形成「晨鐘暮鼓」之聲，莊嚴又具節奏感。祭典舉行時，鐘鼓也成為重要的法器之一。
            </p>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Text Content Block */}
            <div className="px-4 order-2 lg:order-1">
              <p className="text-2xl/12 text-gray-700 mb-4">
                我注意到鼓樓上題有「鼍逢（ㄊㄨㄛˊ ㄆㄥˊ）」兩字，鐘樓上則刻著「鯨發」。那時我既覺得字難念，也好奇其意，便請教了一位熱心的志工。他先笑著指向鼓樓問我：「你覺得打鼓時會發出什麼聲音呢？」我回答：「應該是蹦蹦蹦吧！」他點點頭說：「『鼍』是一種古代爬蟲類生物，類似鱷魚，皮可以做鼓面；『逢』在這裡念作ㄆㄥˊ。『鼍逢』二字連念，形容鼓聲隆隆、迴盪不絕，正如《詩經．大雅．靈臺》所寫：『鼉鼓逢逢，矇瞍奏公。』」那畫面瞬間活了起來，彷彿古代的鼓聲在耳邊回響。
              </p>
            </div>

            {/* Image Block (Ideal for horizontal or square images) */}
            <div className="px-4 order-1 lg:order-2">
              <img 
                src="/images/gallery/article3.jpg" 
                alt="Horizontal landscape image" 
                className="w-full h-auto object-cover rounded-xl shadow-2xl" 
              />
            </div>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image Block (Ideal for horizontal or square images) */}
            <div className="p-4">
              <img 
                src="/images/gallery/article4.jpg" 
                alt="Horizontal landscape image" 
                className="w-full h-auto object-cover rounded-xl shadow-2xl" 
              />
            </div>

            {/* Text Content Block */}
            <div className="px-4">
              <p className="text-2xl/12 text-gray-700 mb-4">
                至於鐘樓上的「鯨發」，志工笑著說那也是一段趣事。因為「鐘」與「終」同音，在傳統文化裡被視為不祥，帶有「送終」之意，因此以「鯨」代之。而「鯨」的台語念作「海翁（hái-ang）」，其中的「ang」音恰似敲鐘的迴音，因此取其音諧，寓意吉祥。這說法雖然在網路上查不到，但聽起來既生動又富想像力，也讓我學到鯨魚的台語發音。
              </p>
            </div>

            
          </div>

          <div className="px-4">
            <p className="text-2xl/12 text-gray-700 mb-4">
              鐘頂的「鐘鈕」上雕著一隻神獸名叫蒲牢，而鐘槌則刻成鯨魚的形狀。根據傳說，蒲牢是龍的九子之一，形似小龍但性格敏感，特別怕鯨魚。《文選．班固．東都賦》裡有句：「於是發鯨魚，鏗華鐘」，注解說：「海邊有獸名蒲牢，素畏鯨，鯨擊之則鳴。」於是人們便用鯨形的鐘槌撞擊刻有蒲牢的鐘鈕，藉此發出宏亮的聲音。
            </p>
          </div>
          <div className="px-4">
            <p className="text-2xl/12 text-gray-700 mb-4">
              想像那畫面，不禁莞爾，一條巨大的鯨魚撞向一隻小龍，蒲牢被嚇得大叫，鐘聲便此誕生。既莊嚴又帶點可愛，讓人對古人的巧思佩服不已。
            </p>
          </div>
          <div className="px-4">
            <p className="text-2xl/12 text-gray-700 mb-4">
              在中秋節那天的下午四點親耳聽見敲鐘擊鼓，原來每逢農曆初一與十五，都有專人執行這項儀式。那沉穩低鳴的鐘聲與激昂的鼓聲在殿中交織，莊嚴肅穆，讓人心中油然生敬。
            </p>
          </div>

          
          {/* Paragraph 5 */}
          <div className="mt-12 lg:mt-20 px-4">
            <p className="text-2xl/12 text-gray-700 mb-4">
              保安宮門口的石獅子也藏著巧思。雄獅的項圈上掛著毛筆頭，象徵大龍峒文風鼎盛「五步一秀，十步一舉」；雌獅項圈則繫著鈴鐺，代表商業繁榮。據說昔日保安宮前共有四十四間店鋪，因此又稱「四十四坎店舖」。雌獅靠近這些商鋪一側，雄獅則面向孔廟，文武兩氣相映成趣。
            </p>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Text Content Block */}
            <div className="px-4 order-2 lg:order-1">
              <p className="text-2xl/12 text-gray-700 mb-4">
                最讓我驚喜的，是前殿屋頂一隅出現的「憨番扛厝角」。那是一位穿著西裝的洋人造型，似乎正吃力地撐起屋角，看起來滑稽又逗趣。這種人物雕飾源於清末時期，名為「憨番扛大杉」或「大力士扛屋脊」，雖無結構功能，卻象徵異文化進入本地社會後，被融入成為一種獨特的建築語彙。
              </p>
            </div>

            {/* Image Block (Ideal for horizontal or square images) */}
            <div className="px-4 order-1 lg:order-2">
              <img 
                src="/images/gallery/article5.jpg" 
                alt="Horizontal landscape image" 
                className="w-full h-auto object-cover rounded-xl shadow-2xl" 
              />
            </div>
          </div>




          {/* Paragraph 6 */}
          <div className="my-12 lg:my-20 p-4">
            <p className="text-2xl/12 text-gray-700 mb-4">
              保安宮不僅是信仰中心，更是一座活的歷史博物館，太多故事和細節藏在其中，這些雕刻、交趾陶和工匠的故事還有好多。除了有形資產還有無形資產保生文化祭。下次帶朋友來時，至少可以告訴他們鐘樓和鼓樓上的故事了。
            </p>
          </div>

         
          

        </section>
      </article>
    </div>
    </PageLayout>
  );
}
