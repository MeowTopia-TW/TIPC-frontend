"use client";
import Image from "next/image";
import { PageLayout, MasonryGallery, UnityEmbed } from '@/components';
import { useParams } from "next/navigation";
import  exhibitionData  from "@/data/exhibition.json";


export default function ExhibitionContentPage() {
  const params = useParams();
  const id = params?.id as string;

  if (!id) return null;
  const Exhibitionitem = exhibitionData.find((item) => item.id === id);

  if (!Exhibitionitem) {
    return <p className="text-center mt-10">Articledata not found.</p>;
  }

  // Split description into paragraphs on newline(s) so each line becomes a separate paragraph
  const descriptionParagraphs = (Exhibitionitem.description || '')
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const TutorialParagraphs = (Exhibitionitem.Tutorial || '')
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  // masonry breakpoints are configured inline where used

  //unity
  /*useEffect(() => {
    const script = document.createElement("script")
    script.src = "/exhibitionBuild/AD3/Build/AD3.loader.js"
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script)
    }
  },[])
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const loaderUrl = "/exhibitionBuild/AD3/Build/AD3.loader.js";

    const config = {
      dataUrl: "/exhibitionBuild/AD3/Build/AD3.data",
      frameworkUrl: "/exhibitionBuild/AD3/Build/AD3.framework.js",
      codeUrl: "//exhibitionBuild/AD3/Build/AD3.wasm",
      streamingAssetsUrl: "/exhibitionBuild/AD3/Build/StreamingAssets",
      companyName: "DefaultCompany",
      productName: "YourGame",
      productVersion: "0.1.0",
    };

    const script = document.createElement("script");
    script.src = loaderUrl;
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      createUnityInstance(canvasRef.current, config, (p: number) => {
        setProgress(p);
      }).then((unityInstance: any) => {
        console.log("Unity loaded", unityInstance);
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);*/

  
  return (
    <PageLayout title={"線上展覽"} subtitle="Exhibition" headerpic="/images/header/exhibition.jpeg">
      <div className="min-h-screen bg-gray-50">

      {/* 主要內容區域 */}
        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title + Meta */}
        <header className="mb-8">
          <h1 className="border-l-4 border-[#833416] pl-4 text-3xl sm:text-4xl text-[#833416] font-bold mb-8">
            {Exhibitionitem.title}
          </h1>
          <span className="text-white text-lg bg-[#833416] backdrop-blur-sm px-2 py-2 rounded-full">{Exhibitionitem.exhibitor}</span>
        </header>

        {/* Cover Image */}
        <div className="relative w-full h-80 mb-8 rounded-xl overflow-hidden shadow">
          <Image
            src={Exhibitionitem.mainImage}
            alt="cover"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none">
    
          {/* Description rendered as paragraphs with spacing and bottom padding */}
          <div className="space-y-4 pb-6">
            {descriptionParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Inline Image */}
          <MasonryGallery
            images={Exhibitionitem.relatedImages}
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
              mode:"Image"
            }}
          />
          
          <div className="border-2 border-[#833416]"></div>

          {/* Exhibition gameplay*/}
          <div className="flex justify-center w-full mt-10 mb-6">
              <UnityEmbed 
                buildname={Exhibitionitem.BuildName}
              /> 
          </div>

          

          {/* Tutorial Description rendered as paragraphs with spacing and bottom padding */}
          <div className="space-y-4 pb-6">
            {TutorialParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 text-lg leading-none">
                {paragraph}
              </p>
            ))}
          </div>
          
        </section>
      </article>
    </div>
    </PageLayout>
  );
}
