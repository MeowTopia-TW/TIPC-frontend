"use client";

import { useEffect, useState } from 'react';
import MediaGallery from "@/components/sections/MediaGallery";
import PageLayout from "@/components/layout/PageLayout";
import { GalleryItem, Article } from '@/types';
import photographData from '@/data/photograph.json';
import videoData from '@/data/video.json';

export default function LocalRevitalizationPage() {
  const [filteredArticles, setFilteredArticles] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    async function fetchArticles() {
      try {
        const res = await fetch('/api/articles?limit=100');
        const data = await res.json();
        
        if (data.success) {
          // Filter and transform articles
          const articles: GalleryItem[] = data.data
            .filter((article: Article) => 
              article.cakeCategory?.some(cc => cc.cakeCategory.name === "地方創生")
            )
            .map((article: Article) => ({
              id: `article-${article.id}`,
              type: 'article' as const,
              imageUrl: article.coverImage,
              altText: article.title,
              title: article.title,
              tag: article.keyWords?.[0]?.keyWord.name || '',
              linkHref: `/article/all/${article.id}`,
            }));
          setFilteredArticles(articles);
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
      <PageLayout 
        title="地方創生" 
        subtitle="Regional Revitalization"
        headerpic="/images/header/NineBlock.jpg"
      >
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-xl text-gray-600">載入中...</p>
        </div>
      </PageLayout>
    );
  }

  // Filter and transform photograph pictures
  const filteredPhotographs: GalleryItem[] = photographData
    .filter((photograph) => 
      photograph.cakeCategory?.includes("地方創生")
    )
    .map((photograph) => ({
      id: `photograph-${photograph.id}`,
      type: 'image' as const,
      size: photograph.size || 'wide' as 'wide' | 'tall' | 'normal' | undefined,
      imageUrl: photograph.src,
      altText: photograph.title,
      title: photograph.title,
      author: photograph.author,
      photoDate: photograph.photoDate,
      description: photograph.description,
    }));

  // Filter and transform videos
  const filteredVideos: GalleryItem[] = videoData
    .filter((video) => 
      video.cakeCategory?.includes("地方創生")
    )
    .map((video) => ({
      id: `video-${video.id}`,
      type: 'video' as const,
      imageUrl: video.thumbnail,
      altText: video.title,
      title: video.title,
      linkHref: video.src,
      description: video.description,
      keywords: video.keywords,
      duration: video.duration,
      cakeCategory: video.cakeCategory,
    }));

  // Combine all filtered media
  const allFilteredMedia = [
    ...filteredArticles,
    ...filteredPhotographs,
    ...filteredVideos,
  ];

  return (
    <PageLayout 
      title="地方創生" 
      subtitle="Regional Revitalization"
      headerpic="/images/header/NineBlock.jpg"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-8">
          {allFilteredMedia.length > 0 ? (
            <MediaGallery items={allFilteredMedia} />
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">
                目前沒有「地方創生」的內容
              </p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
