"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { videosData } from "@/data";

export default function VideoRecommendations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const VideoRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Check if arrows should show
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  //move per video width
  /*const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const VidWidth  = (VideoRef.current ? VideoRef.current.offsetWidth : 0) + 24;
    const ContainerWidth = scrollRef.current.clientWidth;
    const amount = Math.floor(ContainerWidth / VidWidth) * VidWidth;
    console.log("vidwith="+VidWidth);

    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };*/
  //fix movement
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.4;
    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };
   
//jira

  return (
    <section
      className="relative py-8 sm:py-10 lg:py-12 bg-[#CC6915]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {/* 標題區塊 */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-10 text-black text-lg sm:text-xl lg:text-2xl font-semibold text-white">
          影音推薦
        </div>
        <div className=" mx-auto px-0 sm:px-0 lg:px-0 relative">
        {/* 漸層遮罩 */}
        <div className="absolute left-0 w-16 sm:w-12 lg:w-60 h-full bg-gradient-to-r from-[#CC6915] to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 w-16 sm:w-12 lg:w-60 h-full bg-gradient-to-l from-[#CC6915] to-transparent pointer-events-none z-10"></div>
        {/* Arrow buttons */}
        {isHovered && showLeft && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/0 rounded-full shadow hover:bg-white/10"
            onClick={() => scroll("left")}
          >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        {isHovered && showRight && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/0 rounded-full shadow hover:bg-white/10"
            onClick={() => scroll("right")}
          >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Scrollable video list */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scrollbar-hide"
        >
          {videosData.map((video) => (
            <div
              key={video.id}
              ref={VideoRef}
              className="group relative min-w-[280px] sm:min-w-[320px] lg:min-w-[400px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100 first:ml-30 last:mr-30"
            >
              {/* 影片縮圖區域 */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* 影片播放圖示 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/80 md:bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* 影片資訊標籤 */}
                <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {video.category}
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {video.duration}
                </div>
              </div>

              {/* 詳細描述 - 手機顯示，電腦 hover 顯示 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{video.title}</h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-200 line-clamp-3 md:line-clamp-none">{video.description}</p>
                  <div className="mt-3 md:mt-4 flex items-center justify-between">
                    <span className="text-xs md:text-sm bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                    <span className="text-xs md:text-sm font-medium">{video.duration}</span>
                  </div>
                </div>
              </div>

              {/* 懸停效果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
