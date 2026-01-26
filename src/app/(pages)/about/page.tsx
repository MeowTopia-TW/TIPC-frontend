// 關於我們
import { Metadata } from "next";
import { PageLayout } from "@/components";
import { notoSansTC } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "關於我們 - 文化記憶庫",
  description: "了解文化記憶庫的使命與願景，致力於保存和傳承珍貴的文化遺產",
};

export default function AboutPage() {
  return (
    <PageLayout
      title="關於我們"
      subtitle="About TIPC"
      headerpic="/images/header/about.jpeg"
    >
      <div className="min-h-screen bg-gray-50">
        {/* 主要內容區域 */}
        <div className="min-h-screen bg-gray-50">
          {/* 主要內容區域 */}
          <div className="max-w-[1700px] mx-auto px-10 sm:px-10 lg:px-30 py-16">
            {/* 只負責左右欄 */}
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">
              {/* ================= 左欄：我們的使命（可無限往下加） ================= */}
              <div className="space-y-16">
                {/* 我們的使命 */}
                <div className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-700">
                  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                    我們的使命
                  </h2>
                  <div className={notoSansTC.className}>
                    <p>我們是一群來自不同領域的夥伴</p>
                    <p>擁有的最大公約數就是「臺灣」</p>
                    <p>我們成長於這片土地上</p>
                    <p>縱使曾經到過遠方</p>
                    <p>但臺灣永遠是我們的家鄉</p>
                    <p>我們希望透過這個平台發聲</p>
                    <p>讓臺灣及世界看到最美的臺灣</p>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-700">
                  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                    Our Mission
                  </h2>
                  <div className={notoSansTC.className}>
                    <p>
                      We are a group of partners from different fields, whose
                      greatest common denominator is "Taiwan." We grew up on
                      this land, and even though we have traveled far away,
                      Taiwan will always be our home. We hope to use this
                      platform to give our voices a voice, allowing Taiwan and
                      the world to see the most beautiful Taiwan.
                    </p>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-700">
                  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                    私たちの使命
                  </h2>
                  <div className={notoSansTC.className}>
                    <p>
                      私たちは、様々な分野から集まったパートナー集団です。その最大共通項は「台湾」です。私たちはこの地で育ち、遠く離れた場所を旅しても、台湾は私たちの故郷であり続けます。このプラットフォームを通して、私たちの声を届け、台湾と世界に、最も美しい台湾の姿を届けたいと願っています。
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= 右欄：核心價值（獨立一欄） ================= */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                  核心理念
                </h3>

                <ul className="space-y-4 text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
                  <li className="flex items-start">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      1
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>善良</h4>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      2
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>珍惜</h4>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      3
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>感謝</h4>
                    </div>
                  </li>
                  <li className="flex items-start pb-10">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      4
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>永續</h4>
                    </div>
                  </li>
                </ul>
                <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                  Core Values
                </h3>
                <ul className="space-y-4 text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
                  <li className="flex items-start">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      1
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>Kindness</h4>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      2
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>Cherishment</h4>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      3
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>Gratitude</h4>
                    </div>
                  </li>
                  <li className="flex items-start pb-10">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      4
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>Sustainability</h4>
                    </div>
                  </li>
                </ul>
                <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                  こんぽん りねん
                </h3>
                <ul className="space-y-4 text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
                  <li className="flex items-start">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      1
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>人に善を尽くし</h4>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      2
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>万物を慈しみ</h4>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      3
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>天地に感謝し</h4>
                    </div>
                  </li>
                  <li className="flex items-start pd=10">
                    <span className="bg-[#833416] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      4
                    </span>
                    <div className="text-gray-900">
                      <h4 className={notoSansTC.className}>文化を永久に</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
