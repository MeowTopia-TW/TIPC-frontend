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


export interface storyImage {
  id: number;
  src: string;
  title: string;
  description: string;
  author: string;
  photoDate: string;
  cakeCategory: string[];
  nineBlocks: string[];
  subID: string;
  size: string;
}

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
  relatedImages: storyImage[];
  type: "current" | "past"; // column grouping
  alt: string;
}


export interface VideoRecommendation {
  id: string;
  title: string;
  author: string;
  shootingDate: string;
  description: string;
  thumbnail: string;
  duration: string;
  cakeCategory: string[];
  keywords: string[];
  nineBlocks: string[];
  src: string;
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
