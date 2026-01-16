import Image from "next/image";
import { PageLayout } from '@/components';
import { Selection } from '@/types';
import { notFound } from 'next/navigation';
import { notoSerifTC, notoSansTC } from '@/lib/fonts';
import { prisma } from "@/lib/prisma";

interface Props {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default async function SelectionContentPage({ params }: Props) {
  console.log("params:", params);
  const { slug } = await params;
  if (!slug) notFound(); // guarantees id exists
  const selection = await prisma.selections.findUnique({
    where: { slug },
    include: {
        selection_blocks: true,
        selection_annotations: true,
        selection_keywords: {
          include: {
            KeyWords: true,
          },
        },
        selection_podcasts: true,
        selection_videos: true,
    },
  });


  return (
    <PageLayout title="影響力精選" subtitle="TIPC Selections" headerpic="/images/header/article.jpeg">
      <div className="min-h-screen bg-gray-50">
        {/* 主要內容區域 */}
        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Title + Meta */}
          <header className="mb-8">
            <blockquote className="text-4xl sm:text-6xl font-bold text-[#CC6915] border-l-4 border-[#CC6915] pl-4 mb-4">
              <h1 className={`article-title leading-relaxed ${notoSerifTC.className}`}>
                {selection.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < selection.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
            </blockquote>
            <hr className="border-t border-gray-300 mb-4" />
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 flex-wrap gap-2">
                <p className="text-gray-700 text-base sm:text-xl md:text-2xl">作者:{selection.author}</p>
                {selection.selection_keywords.map((kw, index) => (
                  <div key={index} className="
                    px-2 py-0.5 sm:px-3 sm:py-1
                    rounded-full
                    border-2 border-gray-700
                    text-gray-700
                    text-sm sm:text-base md:text-lg
                    font-medium
                  ">
                    {kw.KeyWords.name}
                  </div>
                ))}
              </div>
              
            </div>
            <hr className="border-t border-gray-300 mt-4" />
          </header>

          <div className="relative w-full h-65 sm:h-[32rem] mb-4">
            <Image
              src={selection.coverImage}
              alt={selection.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <section className={`prose prose-xl max-w-none ${notoSansTC.className} font-light`}>
            {selection.selection_blocks.map((block, index) => {
              switch (block.type) {
                case "text": {
                  const textData = block.data as TextBlockData;
                  // Parse text content to handle inline markers like [1], [2]
                  const renderTextWithMarkers = (content: string) => {
                    const parts = content.split(/(\[\d+\])/g);
                    return parts.map((part, i) => {
                      const match = part.match(/\[(\d+)\]/);
                      if (match) {
                        return <sup key={i} className="text-[#833416] font-bold">[{match[1]}]</sup>;
                      }
                      return <span key={i}>{part}</span>;
                    });
                  };

                  return (
                    <p key={block.id} className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 font-light">
                      {renderTextWithMarkers(textData.content)}
                    </p>
                  );
                }

                case "image": {
                  const imageData = block.data as ImageBlockData;
                  return (
                    <figure key={block.id} className="my-8">
                      <div className="relative w-full" style={{ minHeight: '400px' }}>
                        <Image
                          src={imageData.url}
                          alt={imageData.alt || imageData.caption || article.title}
                          width={1200}
                          height={800}
                          className="rounded-lg object-contain mx-auto w-full h-auto"
                          unoptimized
                        />
                      </div>
                      {imageData.caption && (
                        <figcaption className="text-base text-gray-500 mt-2 text-left whitespace-pre-line">
                          {imageData.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                case "quote": {
                  const quoteData = block.data as QuoteBlockData;
                  return (
                    <blockquote
                      key={block.id}
                      className="border-l-4 border-[#833416] pl-4 italic text-gray-700 text-lg sm:text-xl my-6 whitespace-pre-line"
                    >
                      <p>{quoteData.content}</p>
                      {quoteData.source && (
                        <footer className="text-sm text-gray-600 mt-2">— {quoteData.source}</footer>
                      )}
                    </blockquote>
                  );
                }

                default:
                  return null;
              }
            })}
          </section>

          {/* Annotations Section */}
          {selection.selection_annotations && selection.selection_annotations.length > 0 && (
            <section className="mt-12 pt-8 border-t-2 border-gray-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">註解</h2>
              <ol className="space-y-3">
                {selection.selection_annotations.map((annotation) => (
                  <li key={annotation.id} className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    <sup className="text-[#833416] font-bold mr-2">[{annotation.marker}]</sup>
                    {annotation.url ? (
                      <a 
                        href={annotation.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600"
                      >
                        {annotation.text}
                      </a>
                    ) : (
                      annotation.text
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Videos Section */}
          {selection.selection_videos && selection.selection_videos.length > 0 && (
            <section className="mt-12 pt-8 border-t-2 border-gray-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">影片</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selection.selection_videos.map((video) => (
                  <div key={video.id} className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.url}
                      title={`Video ${video.id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Podcasts Section */}
          {selection.selection_podcasts && selection.selection_podcasts.length > 0 && (
            <section className="mt-12 pt-8 border-t-2 border-gray-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">相關Podcast</h2>
              <div className="space-y-4">
                {selection.selection_podcasts.map((podcast) => (
                  <div key={podcast.id} className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={podcast.url}
                      title={`Podcast ${podcast.id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* External Link Button */}
            {selection.url && (
              <div className="flex justify-center mt-8">
                <a
                  href={selection.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#CC6915] text-white rounded-full font-semibold hover:bg-[#B55A12] transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  see more
                </a>
              </div>
            )}

          
        </article>
      </div>
    </PageLayout>
    
  );
}
