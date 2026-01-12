"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense, useState } from 'react';
import { PageLayout } from '@/components';
import MediaGallery from '@/components/sections/MediaGallery';
import { GalleryItem, Article, Video, Photograph } from '@/types';

// Mapping from categoryId to Chinese category name
const categoryMap: { [key: string]: string } = {
  food: '食',
  clothing: '衣',
  housing: '住',
  transportation: '行',
  education: '育',
  entertainment: '樂',
  event: '重要事件',
  festival: '經典節慶',
  industry: '指標產業',
};

function CategoryContent() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('id') || '';
  const categoryName = categoryMap[categoryId] || categoryId;
  const [filteredArticles, setFilteredArticles] = useState<GalleryItem[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<GalleryItem[]>([]);
  const [filteredPhotographs, setFilteredPhotographs] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    async function fetchData() {
      try {
        // Fetch articles
        const articlesRes = await fetch('/api/articles?limit=100');
        const articlesData = await articlesRes.json();
        
        if (articlesData.success) {
          const articles: GalleryItem[] = articlesData.data
            .filter((article: Article) => 
              article.cakeCategory?.some(cc => cc.cakeCategory.name === "文化記憶") &&
              article.nineBlocks?.some(nb => nb.nineBlock.name === categoryName)
            )
            .map((article: Article) => ({
              id: `article-${article.id}`,
              type: 'article' as const,
              imageUrl: article.coverImage,
              altText: article.title,
              title: article.title,
              tag: article.keyWords?.[0]?.keyWord.name || '',
              linkHref: `/article/${article.slug}`,
            }));
          setFilteredArticles(articles);
        }

        // Fetch videos
        const videosRes = await fetch('/api/videos');
        const videosData = await videosRes.json();
        
        if (videosData.success) {
          const videos: GalleryItem[] = videosData.data
            .filter((video: Video) => 
              video.cakeCategory?.some(cc => cc.cakeCategory.name === "文化記憶") &&
              video.nineBlocks?.some(nb => nb.nineBlock.name === categoryName)
            )
            .map((video: Video) => ({
              id: `video-${video.id}`,
              type: 'video' as const,
              imageUrl: video.mainImg,
              altText: video.title,
              title: video.title,
              linkHref: video.url,
              description: video.description,
              keywords: video.keyWords?.map(kw => kw.keyWord.name) || [],
            }));
          setFilteredVideos(videos);
        }

        // Fetch photographs
        const photographsRes = await fetch('/api/photographs');
        const photographsData = await photographsRes.json();
        
        if (photographsData.success) {
          const photographs: GalleryItem[] = photographsData.data
            .filter((photograph: Photograph) => 
              photograph.cakeCategory?.some(cc => cc.cakeCategory.name === "文化記憶") &&
              photograph.nineBlocks?.some(nb => nb.nineBlock.name === categoryName)
            )
            .map((photograph: Photograph) => ({
              id: `photograph-${photograph.id}`,
              type: 'image' as const,
              imageUrl: photograph.url,
              altText: photograph.title,
              title: photograph.title,
              author: photograph.author,
              photoDate: photograph.photoDate,
              description: photograph.description,
            }));
          setFilteredPhotographs(photographs);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [categoryName]);

  // Combine all filtered media
  const allFilteredMedia = [
    ...filteredArticles,
    ...filteredPhotographs,
    ...filteredVideos,
  ];
  
  if (loading) {
    return (
      <PageLayout 
        title={`文化記憶 - ${categoryName}`} 
        subtitle="Cultural Memory" 
        headerpic="/images/header/NineBlock.jpg"
      >
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-xl text-gray-600">載入中...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout 
      title={`文化記憶 - ${categoryName}`} 
      subtitle="Cultural Memory" 
      headerpic="/images/header/NineBlock.jpg"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-8">
          {allFilteredMedia.length > 0 ? (
            <MediaGallery items={allFilteredMedia} />
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">
                目前沒有「{categoryName}」分類的內容
              </p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default function CategoryFilterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">載入中...</p>
      </div>
    }>
      <CategoryContent />
    </Suspense>
  );
}
