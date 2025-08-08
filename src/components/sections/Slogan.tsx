import Image from "next/image";

export default function Slogan() {
  return (
    <section className="w-full py-6 sm:py-8 lg:py-[30px] box-border bg-[#FAF9EB]">
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full sm:w-[82%] grid grid-cols-1 lg:grid-cols-[9fr_7fr] overflow-hidden rounded-lg min-h-[400px] lg:min-h-[280px]">

          {/* 左側文字敘述 */}
          <div className="flex items-center h-full p-4 sm:p-6 bg-[#833416] relative order-2 lg:order-1">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 h-full pr-4 sm:pr-8 lg:pr-16 w-full flex flex-col justify-center">
            <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
              文化是人類智慧的結晶，承載著歷史的記憶與文明的傳承。
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
              透過現代科技與傳統文化的結合，我們能夠以全新的方式體驗和理解這些珍貴的文化遺產。
            </p>
            <div className="mt-6 lg:mt-8">
              <p className="text-xl sm:text-2xl lg:text-4xl text-white leading-relaxed text-right font-chenyuluoyan">
                文化記憶與我們
              </p>
            </div>
          </div>
          {/* 右邊緣漸層遮罩 - 調整位置避免覆蓋文字 */}
          <div className="absolute top-0 right-0 w-8 sm:w-12 h-full bg-gradient-to-r from-[#833416] to-transparent pointer-events-none z-10"></div>
          </div>

          {/* 右側圖片區域 */}
          <div className="h-full relative order-1 lg:order-2 min-h-[250px] lg:min-h-0">
            {/* 左邊緣漸層遮罩 */}
            <div className="absolute top-0 left-0 w-8 sm:w-12 h-full bg-gradient-to-r from-[#833416] to-transparent pointer-events-none z-20"></div>
            <div className="h-full">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/oldpic.jpg"
                  alt="文化探索"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
