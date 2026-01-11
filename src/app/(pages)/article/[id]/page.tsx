"use client";

import Link from "next/link";
import Image from "next/image";
import { PageLayout } from '@/components';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Article } from '@/types/types';

export default function ArticlePage() {
  const params = useParams();
  const id = params?.id as string;
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch('/api/articles?limit=100');
        const data = await res.json();
        
        if (data.success) {
          // 按日期排序（新的在前）
          const sortedArticles = data.data.sort((a: Article, b: Article) => {
            const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
            const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
            return dateB - dateA;
          });
          setArticles(sortedArticles);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <PageLayout title="觀點文章" subtitle="TIPC Articles" headerpic="/images/header/article.jpeg">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-xl text-gray-600">載入中...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="觀點文章" subtitle="TIPC Articles" headerpic="/images/header/article.jpeg">
      <div className="min-h-screen bg-gray-50">

      {/* 主要內容區域 */}
      <div className="mx-auto px-10 sm:px-10 lg:px-30 py-16">
        {/* 文化分類區域 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {articles.map((article) => (
            <Link 
              key={article.id}
              href={`/article/${id}/${article.id}`}
              className="group relative bg-white rounded-1xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden border border-gray-100"
            >
            {/* 主要圖片區域 */}
            {/* 圖片容器 */}
            {/* Thumbnail */}
          <div className="relative w-full h-60">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover"
            />
            
            {/* Category Badge */}
            {article.nineBlocks && article.nineBlocks.length > 0 && (
              <div className="absolute bottom-0 left-0 flex">
                <div className="bg-orange-600 text-white px-2 py-2 font-bold text-base text-center">
                  文化影響力平台
                </div>
                <div className="bg-white text-black px-2 py-2 font-bold text-base text-center">
                  TIPC
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col h-full">
            <h2 className="text-gray-900 text-lg sm:text-2xl font-bold mb-2 line-clamp-2">
              {article.title.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < article.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Tags */}
            {article.keyWords && article.keyWords.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {article.keyWords.map((kw) => (
                  <span
                    key={kw.keyWordId}
                    className="inline-block bg-white text-black text-xs sm:text-base font-semibold px-3 py-1 rounded-full border border-gray-300"
                  >
                    {kw.keyWord.name}
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
