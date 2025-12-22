// 活動探索
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageLayout, MasonryGallery } from '@/components';
import type { Exhibition } from "@/types";
import  exhibitionData  from "@/data/exhibition.json";


function ExhibitionCard({ exhibition }: { exhibition: Exhibition }) {
  const [expanded, setExpanded] = useState(false);

  
  return (
    <div className="relative group cursor-pointer ">
      {/* Click wrapper (except the button) */}
      <Link
        href={`/exhibition/${exhibition.id}`}
        className="block relative "
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("button")) {
            e.preventDefault(); // stop link if ▼ clicked
          }
        }}
      >
        {/* Main Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow">
          <Image
            src={exhibition.mainImage}
            alt={exhibition.title}
            fill
            className="object-cover"
          />

          {/* Overlay */}

          <div className={`absolute inset-0 bg-gradient-to-t from-[#CC6915] via-[#CC6915]/20 to-transparent opacity-100 transition-opacity duration-500 flex items-end`}>
            <div className="p-4 md:p-6 text-white">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{exhibition.title}</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-200 line-clamp-3 md:line-clamp-none">{exhibition.subTitle}</p>
              <div className="mt-3 md:mt-4 flex items-center justify-between">
                <span className="text-xs md:text-sm bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full">
                  {exhibition.exhibitor}
                </span>
                <span className="absolute right-0 text-xs md:text-sm font-medium mr-3">{exhibition.date}</span>
              </div>
              {/* ▼ button */}
              <button
                className="absolute bottom-3 right-1/2 bg-white/80 text-black rounded-full p-1 hover:bg-white transition"
                onClick={(e) => {
                  e.preventDefault();
                  setExpanded((prev) => !prev);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transform transition ${expanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* Expanded Section */}
      {expanded && (
        <div className="mt-6">
        <MasonryGallery
          images={exhibition.relatedImages.slice(0, 5)}
          breakpointColumnsObj={{
            default: 2,
          }}
          loadMoreConfig={{
            mode: "link",
            href: `/exhibition/${exhibition.id}`,
            buttonText: "查看展覽",
          }}
          lightboxMode={{
              mode:"Image"
            }}
        />
        </div>
      )}
    </div>
  );
}

export default function ExhibitionPage() {
  const [visibleCount, setVisibleCount] = useState(4); // 初始顯示數量
  const exhibitionsToShow = exhibitionData.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <PageLayout title={"線上展覽"} subtitle="Exhibition" headerpic="/images/header/exhibition.jpeg">
      <div className="min-h-screen bg-gray-50">

      {/* 主要內容區域 */}
      <div className="mx-auto px-10 sm:px-10 lg:px-30 py-16">
      {/* Current exhibitions */}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6">
        {exhibitionsToShow.map((exhibition) => (
          <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
        ))}
        </div>
      </div>   

      {/* 載入更多按鈕 */}
      {visibleCount < exhibitionData.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="bg-[#833416] text-white px-8 py-3 rounded-lg hover:bg-[#a0471f] transition-colors font-semibold"
          >
            載入更多
          </button>
        </div>
      )}   
    </div>
    </div>
    </PageLayout>
  );
}


/*
"use client";



import { PageLayout } from '@/components';

export default function ArticleContentPage() {
  
  
  return (
    <PageLayout title={"線上展覽"} subtitle="Exhibition" headerpic="/images/header/exhibition.jpeg">
      <div className="min-h-screen bg-gray-50">

    </div>
    </PageLayout>
  );
}*/
