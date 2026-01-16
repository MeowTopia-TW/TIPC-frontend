import { prisma } from '@/lib/prisma';
import Image from "next/image";
import { notFound } from 'next/navigation';
import { PageLayout, MasonryGallery } from '@/components';
import { notoSerifTC, notoSansTC } from '@/lib/fonts';

interface Props {
  params: { id: string } | Promise<{ id: string }>;
}
export default async function EventPage({ params }: Props) {
  const { id } = await params;
  if (!id) notFound(); // guarantees id exists

  const event = await prisma.event.findUnique({
    where: { id },
    include: {
      blocks: { orderBy: { position: 'asc' } },
      images: { orderBy: { position: 'asc' } },
    },
  });
  //window.scrollTo(0, 0);
  const description = event.blocks
  .filter((b) => b.type === 'text')
  .map((b) => b.data.content)
  .join('\n\n');

  const relatedImages = event.images.map((img) => ({
    id: img.id,
    src: img.src,
    title: event.title,
    description: '',
    author: '',
    uploadDate: img.createdAt,
    photoDate: img.createdAt,
    cakeCategory: [],
    nineBlocks: [],
    subID: img.id,
    size: '',
  }));


  if (!event) {
    return (
      <PageLayout title="活動探索" subtitle="Events" headerpic="/images/header/event.jpeg">
        <p className="text-center mt-10">找不到此活動</p>
      </PageLayout>
    );
  }

  // Split description into paragraphs on newline(s) so each line becomes a separate paragraph
  const descriptionParagraphs = (description || '')
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  // masonry breakpoints are configured inline where used
  
  return (
    <PageLayout title="活動探索" subtitle="Events" headerpic="/images/header/event.jpeg">
      <div className="min-h-screen bg-gray-50">

      {/* 主要內容區域 */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title + Meta */}
        <header className="mb-4">
          <blockquote className="text-4xl sm:text-6xl font-bold text-[#89986A] border-l-4 border-[#89986A] pl-4 mb-4">
            <h1 className={`leading-relaxed ${notoSerifTC.className}`}>
              {event.title.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < event.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
          </blockquote>
        </header>

        {/* Cover Image */}
        <div className="relative w-full h-65 sm:h-[32rem] mb-4">
          <Image
            src={event.mainImage}
            alt="cover"
            fill
            className="object-contain"
          />
        </div>

        {/* Article Content */}
        <section className={`prose prose-xl max-w-none ${notoSansTC.className} font-light`}>
          {/* Description rendered as paragraphs with spacing and bottom padding */}
          <div className="space-y-4 pb-6">
            {descriptionParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Inline Image */}
          <MasonryGallery
            images={relatedImages}
            breakpointColumnsObj={{
              default: 3, // 4 columns desktop
              1280: 3,
              1024: 3,
              768: 2,
              500: 2,
            }}
            loadMoreConfig={{
              mode: "append",
              batchSize: 12, 
              buttonText: "載入更多",
            }}
            lightboxMode={{
              mode:"zoom"
            }}
          />

          
        </section>
      </article>
    </div>
    </PageLayout>
  );
}
