// 蛋糕圖
"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CakeDiagram() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const layers = [
    {
      id: 'layer1',
      svgPath: '/cakeDiagram/產業.svg',
      link: '/industry-brand',
      position: { 
        base: { top: '45%', left: '52%' },  // Mobile
        md: { top: '45%', left: '52%' },    // Tablet 768px+
        lg: { top: '45%', left: '52%' },    // iPad Pro 1024px+
        xl: { top: '45%', left: '52%' }     // Desktop 1240px+
      },
      scale: { base: 0.45, md: 0.45, lg: 0.4, xl: 0.8 }
    },
    {
      id: 'layer2',
      svgPath: '/cakeDiagram/文化活動.svg',
      link: '/cultural-heritage',
      position: { 
        base: { top: '63%', left: '52%' },
        md: { top: '63%', left: '52%' },
        lg: { top: '63%', left: '52%' },
        xl: { top: '63%', left: '52%' }
      },
      scale: { base: 0.8, md: 0.8, lg: 0.8, xl: 1.4 }
    },
    {
      id: 'layer3',
      svgPath: '/cakeDiagram/共享.svg',
      link: '/shared-memory',
      position: { 
        base: { top: '84%', left: '52%' },
        md: { top: '84%', left: '52%' },
        lg: { top: '84%', left: '52%' },
        xl: { top: '84%', left: '52%' }
      },
      scale: { base: 1.0, md: 1.0, lg: 1.0, xl: 1.7 }
    }
  ];

  const textLabels = [
    {
      // 科技賦能+數位轉型
      id: 'tech-digital-left',
      svgPath: '/cakeDiagram/科技數位.svg',
      // Position as percentage of container - adjust per breakpoint for proper alignment
      position: { 
        base: { top: '55%', left: '13%' },  // Mobile
        md: { top: '55%', left: '13%' },    // Tablet 768px+
        lg: { top: '55%', left: '13%' },    // iPad Pro 1024px+
        xl: { top: '55%', left: '13%' }     // Desktop 1240px+
      },
      clickable: false,
      link: '',
      scale: { base: 0.1, md: 0.2, lg: 0.27, xl: 0.55 }
    },
    {
      // 地方創生
      id: 'local-revitalization',
      svgPath: '/cakeDiagram/地方創生.svg',
      position: { 
        base: { top: '54%', left: '20.5%' },
        md: { top: '54%', left: '20.5%' },
        lg: { top: '54%', left: '20.5%' },
        xl: { top: '54%', left: '20.5%' }
      },
      clickable: true,
      link: '/local-revitalization',
      scale: { base: 0.1, md: 0.2, lg: 0.3, xl: 0.55 }
    },
    {
      //科技賦能
      id: 'tech-enable-right',
      svgPath: '/cakeDiagram/科技.svg', 
      position: { 
        base: { top: '48%', left: '81%' },
        md: { top: '48%', left: '81%' },
        lg: { top: '48%', left: '81%' },
        xl: { top: '48%', left: '81%' }
      },
      clickable: false,
      link: '',
      scale: { base: 0.2, md: 0.2, lg: 0.25, xl: 0.55 }
    },
    {
      // 行銷+教育
      id: 'marketing-education',
      svgPath: '/cakeDiagram/行銷.svg',
      position: { 
        base: { top: '52%', left: '74%' },
        md: { top: '52%', left: '74%' },
        lg: { top: '52%', left: '74%' },
        xl: { top: '52%', left: '74%' }
      },
      clickable: false,
      link: '',
      scale: { base: 0.17, md: 0.2, lg: 0.27, xl: 0.55 }
    }
  ];

  const handleLayerClick = (link: string) => {
    router.push(link);
  };

  const getResponsiveScale = (scaleObj: { base: number; md: number; lg: number; xl: number }) => {
    if (windowWidth >= 2400) return scaleObj.xl;  // Desktop
    if (windowWidth >= 1024) return scaleObj.lg;  // iPad Pro
    if (windowWidth >= 768) return scaleObj.md;   // Tablet
    return scaleObj.base;  // Mobile
  };

  const getResponsivePosition = (posObj: { 
    base: { top?: string; left?: string; right?: string };
    md: { top?: string; left?: string; right?: string };
    lg: { top?: string; left?: string; right?: string };
    xl: { top?: string; left?: string; right?: string };
  }) => {
    if (windowWidth >= 2400) return posObj.xl;  // Desktop
    if (windowWidth >= 1024) return posObj.lg;  // iPad Pro
    if (windowWidth >= 768) return posObj.md;   // Tablet
    return posObj.base;  // Mobile
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#FAF9EB] flex items-center justify-center overflow-visible py-8 sm:py-12"
    >
      <div className="relative w-full mx-auto">
        
        {/* Cake Diagram Container */}
        <div className="relative w-full flex items-center justify-center">
          
          {/* Base Cake Image */}
          <div className="relative w-full">
            <Image
              src="/cakeDiagram/cakePic.png"
              alt="蛋糕圖"
              width={1400}
              height={950}
              className="w-full h-auto object-contain scale-90"
              priority
            />

            {/* Text Labels and Interactive Areas Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              
              {layers.map((layer) => {
                const currentScale = getResponsiveScale(layer.scale);
                const currentPosition = getResponsivePosition(layer.position);
                return (
                  <div key={layer.id}>
                    
                    {/* SVG Label - Always Visible and Clickable */}
                    <div
                      className="absolute pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-200"
                      style={{
                        top: currentPosition.top,
                        left: currentPosition.left,
                        transform: `translate(-50%, -50%) scale(${currentScale})`,
                        zIndex: 20,
                        transition: 'transform 0.3s ease'
                      }}
                      onClick={() => handleLayerClick(layer.link)}
                    >
                      <Image
                        src={layer.svgPath}
                        alt={`Layer ${layer.id}`}
                        width={500}
                        height={100}
                      />
                    </div>

                  </div>
                );
              })}

              {/* Text Labels */}
              {textLabels.map((label) => {
                const currentScale = getResponsiveScale(label.scale);
                const currentPosition = getResponsivePosition(label.position);
                return (
                  label.svgPath && (
                    <div
                      key={label.id}
                      className={`absolute ${label.clickable ? 'pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-200' : 'pointer-events-none'}`}
                      style={{
                        top: currentPosition.top,
                        left: currentPosition.left,
                        right: currentPosition.right,
                        transform: `translate(-50%, -50%) scale(${currentScale})`,
                        zIndex: 20,
                        transition: 'transform 0.3s ease'
                      }}
                      onClick={label.clickable ? () => handleLayerClick(label.link) : undefined}
                    >
                      <Image
                        src={label.svgPath}
                        alt={label.id}
                        width={200}
                        height={200}
                      />
                    </div>
                  )
                );
              })}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}