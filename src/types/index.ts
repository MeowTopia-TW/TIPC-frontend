// 通用類型定義
export interface Partner {
  id: string;
  name: string;
  description: string;
  image: string;
  website?: string;
  established?: string;
  category?: string;
}

export interface BookData {
  id: string;
  bookName: string;
  author: string[];
  image: string;
  category?: string;
  publicDate?: string;
  publisher?: string;
  description?: string;
  tags?: string[];
  pages?: number;
  isbn?: string;
  eisbn?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  duration?: string;
}

export interface GalleryImage {
  id: number;
  title: string;
  src: string;
  description?: string;
  author?: string;
  date?: string;
  category?: string;
  subID?: string;
};

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  mainImage: string;
  subTitle: string;
  description: string;
  relatedImages: GalleryImage[];
  type: "current" | "past"; // column grouping
  alt: string;
}

export interface CultureKnowledge {
  id: string;
  title: string;
  image: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export interface VideoRecommendation {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  type: 'youtube' | 'local';
  src: string;
  detail: string;
}

export interface Article {
  id: number;
  title: string;
  author: string;
  description: string;
  cakeCategory: string[];
  keyWords: string[];
  nineBlocks: string[];
  uploadDate: string;
  relatedArticlesIDs: number[];
  imageMain: string;
  paragraphs: ParagraphBlock[];
  videos: string[];
  podcasts: string[];
  footnotes?: Array<{ id: string; text: string; url?: string }>;
}

export type ParagraphBlock =
  | {
      type: "text";
      content: Array<{ text?: string; notation?: string }>;
    }
  | {
      type: "image";
      url: string;
      caption?: string;
      notation?: string;
    }
  | {
      type: "quote";
      content: string;
    };


// API 響應類型
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}

// 頁面 Props 類型
export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
