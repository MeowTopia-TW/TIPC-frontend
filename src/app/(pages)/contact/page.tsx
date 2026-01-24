import { Metadata } from 'next';
import { PageLayout } from '@/components';

export const metadata: Metadata = {
  title: '聯絡我們 - 文化記憶庫',
  description: '聯絡文化記憶庫團隊，分享您的想法或尋求協助',
};

export default function ContactPage() {
  return (
    <PageLayout title="聯絡我們" subtitle="Contact Us" headerpic="/images/header/contact.jpeg">
      <div className="min-h-screen bg-gray-50">

      {/* 主要內容區域 */}
      <div
        className="
          max-w-6xl mx-auto px-10 py-70 sm:px-30 lg:px-30 sm:py-40 md:py-60 lg:py-80
          bg-[url('/images/aboutus.jpg')]
          bg-center bg-no-repeat
        "
      >
          {/* 聯絡資訊 */}
          <div className="space-y-8 flex flex-col items-center text-center">
            <div className="rounded-lg p-8 w-full max-w-2xl">
              <h2 className="text-4xl font-bold text-white mb-6 text-center">聯絡資訊</h2>
              <div className="space-y-6">
                 <div className="text-center">
                  <p className="text-xl lg:text-3xl text-white">缺聯絡人</p>
                </div>
                <div className="text-center">
                  <p className="text-xl lg:text-3xl text-white">garden91info@gmail.com</p>
                </div>
                <div className="text-center">
                  <p className="text-xl lg:text-3xl text-white">(02)-28342637</p>
                </div>

                <div className="text-center">
                  <p className="text-xl lg:text-3xl text-white">111台北市士林區仰德大道二段91號</p>
                </div>

              </div>
            </div>

            {/* <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">關注我們</h2>
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-12 h-12 bg-[#833416] rounded-lg flex items-center justify-center text-white hover:bg-[#a0471f] transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-12 h-12 bg-[#833416] rounded-lg flex items-center justify-center text-white hover:bg-[#a0471f] transition-colors">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="w-12 h-12 bg-[#833416] rounded-lg flex items-center justify-center text-white hover:bg-[#a0471f] transition-colors">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
