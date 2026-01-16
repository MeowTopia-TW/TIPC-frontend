"use client";

import Link from "next/link";
import Image from "next/image";
import { PageLayout } from '@/components';
import { useState, useEffect } from "react";
import type { Selection } from '@/types';

export default function selectionAllPage() {
  const [selections, setSelections] = useState<Selection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //window.scrollTo(0, 0);

    async function fetchSelections() {
      try {
        const res = await fetch('/api/selections');
        const data = await res.json();

        if (data.success) {
          debugger;
          // Sort by publishedAt (newest first)
          const sortedSelections = data.data.sort((a: Selection, b: Selection) => {
            const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
            const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
            return dateB - dateA;
          });
          setSelections(sortedSelections);
        }
      } catch (error) {
        console.error('Error fetching selections:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchSelections();
  }, []);

  if (loading) {
    return (
      <PageLayout title="影響力精選" subtitle="TIPC Selections" headerpic="/images/header/article.jpeg">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-xl text-gray-600">載入中...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="影響力精選" subtitle="TIPC Selections" headerpic="/images/header/article.jpeg">
      <div className="min-h-screen bg-gray-50">

        {/* 主要內容區域 */}
        <div className="mx-auto px-10 sm:px-10 lg:px-30 py-16">
          {/* 精選新聞區域 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {selections.map((selection) => (
              <Link
                key={selection.id}
                href={`/selection/${selection.slug}`}
                className="group relative bg-white rounded-1xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden border border-gray-100"
              >
                {/* 主要圖片區域 */}
                <div className="relative w-full h-60">
                  <Image
                    src={selection.coverImage}
                    alt={selection.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col h-full">
                  <h2 className="text-gray-900 text-lg sm:text-2xl font-bold mb-2 line-clamp-2">
                    {selection.title.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < selection.title.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </h2>

                  {/* Tags */}
                  {/*TODO don't know why can not use {kw.keyWord.name}*/}
                  {selection.selection_keywords && selection.selection_keywords.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selection.selection_keywords.map((kw, index) => (
                        <span
                          key={index}
                          className="inline-block bg-white text-black text-xs sm:text-base font-semibold px-3 py-1 rounded-full border border-gray-300"
                        >
                          {kw.KeyWords.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
