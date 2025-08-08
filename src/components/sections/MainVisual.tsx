"use client";

import { useRef, useEffect, useMemo, useState, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Navigation from '@/components/navigation/Navigation';

export default function MainVisual() {
  // 響應式狀態管理
  const [currentBreakpoint, setCurrentBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isClient, setIsClient] = useState(false);

  // Text content refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  // SVG element refs
  const mountainBackRefs = useRef<(HTMLImageElement | null)[]>([]);
  const mountainRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  // Single elements refs - organized
  const rightTempleRef = useRef<HTMLImageElement>(null);
  const leftTempleRef = useRef<HTMLImageElement>(null);
  const villiageRef = useRef<HTMLImageElement>(null);
  const leopardRef = useRef<HTMLImageElement>(null);
  const bearRef = useRef<HTMLImageElement>(null);
  const boatRef = useRef<HTMLImageElement>(null);
  const waveRef = useRef<HTMLImageElement>(null);
  const fishRef = useRef<HTMLImageElement>(null);
  const noodleRef = useRef<HTMLImageElement>(null);
  const redRef = useRef<HTMLImageElement>(null);
  const taiwanRef = useRef<HTMLImageElement>(null);

  const elementRefs = useMemo(() => ({
    rightTemple: rightTempleRef,
    leftTemple: leftTempleRef,
    villiage: villiageRef,
    leopard: leopardRef,
    bear: bearRef,
    boat: boatRef,
    wave: waveRef,
    fish: fishRef,
    noodle: noodleRef,
    red: redRef,
    taiwan: taiwanRef,
  }), []);

  // 客戶端檢測和響應式狀態管理
  useEffect(() => {
    setIsClient(true);
    
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCurrentBreakpoint('mobile');
      } else if (width < 1024) {
        setCurrentBreakpoint('tablet');
      } else {
        setCurrentBreakpoint('desktop');
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  // 檢測螢幕尺寸並返回對應配置 (SSR 安全)
  const getCurrentBreakpoint = useCallback(() => {
    return isClient ? currentBreakpoint : 'desktop';
  }, [isClient, currentBreakpoint]);

  // RWD Animation configurations - 根據螢幕尺寸調整
  const getResponsiveAnimationConfigs = useMemo(() => {
    // 根據不同螢幕尺寸的配置
    const configs = {
      mobile: {
        // Mobile 配置 (< 768px) - 以台灣為中心，只顯示核心元素
        taiwan: { 
          from: { x: "50%", y: "50%", scale: 1.0, xPercent: -50, yPercent: -50 }, 
          to: { x: "50%", y: "50%", scale: 1.0, xPercent: -50, yPercent: -50 } 
        },
        rightTemple: { 
          from: { x: "75%", y: "25%", scale: 0.8, xPercent: -50, yPercent: -50 }, 
          to: { x: "75%", y: "20%", scale: 0.9, xPercent: -50, yPercent: -50 } 
        },
        leftTemple: { 
          from: { x: "25%", y: "30%", scale: 0.8, xPercent: -50, yPercent: -50 }, 
          to: { x: "25%", y: "25%", scale: 0.9, xPercent: -50, yPercent: -50 } 
        },
        villiage: { 
          from: { x: "70%", y: "45%", scale: 0.7, xPercent: -50, yPercent: -50 }, 
          to: { x: "70%", y: "45%", scale: 0.8, xPercent: -50, yPercent: -50 } 
        },
        wave: { 
          from: { x: "45%", y: "70%", scale: 0.8, xPercent: -50, yPercent: -50 }, 
          to: { x: "40%", y: "70%", scale: 1.5, xPercent: -50, yPercent: -50 } 
        },
        fish: { 
          from: { x: "40%", y: "55%", scale: 0.6, xPercent: -50, yPercent: -50 }, 
          to: { x: "40%", y: "55%", scale: 0.7, xPercent: -50, yPercent: -50 } 
        }
      },
      tablet: {
        // Tablet 配置 (768px - 1024px)
        rightTemple: { from: { x: "55vw", y: "32vh", scale: 0.8 }, to: { x: "55vw", y: "22vh", scale: 1.2 } },
        leftTemple: { from: { x: "18vw", y: "37vh", scale: 0.9 }, to: { x: "18vw", y: "32vh", scale: 1.1 } },
        villiage: { from: { x: "45vw", y: "42vh", scale: 0.8 }, to: { x: "50vw", y: "47vh", scale: 1.2 } },
        leopard: { from: { x: "8vw", y: "47vh", scale: 0.6 }, to: { x: "5vw", y: "47vh", scale: 0.7 } },
        bear: { from: { x: "62vw", y: "-8vh", scale: 0.3 }, to: { x: "62vw", y: "-3vh", scale: 0.25 } },
        boat: { from: { x: "18vw", y: "50vh", scale: 0.8 }, to: { x: "16vw", y: "55vh", scale: 0.9 } },
        wave: { from: { x: "32vw", y: "79vh", scale: 0.8 }, to: { x: "24vw", y: "79vh", scale: 6.5 } },
        fish: { from: { x: "22vw", y: "47vh", scale: 0.45 }, to: { x: "17vw", y: "47vh", scale: 0.55 } },
        noodle: { from: { x: "63vw", y: "44vh", scale: 0.55 }, to: { x: "63vw", y: "44vh", scale: 0.65 } },
        red: { from: { x: "18vw", y: "7vh", scale: 0.28 }, to: { x: "22vw", y: "7vh", scale: 0.35 } },
        taiwan: { from: { x: "35vw", y: "16vh", scale: 0.9 }, to: { x: "35vw", y: "16vh", scale: 1.15 } }
      },
      desktop: {
        // Desktop 配置 (> 1024px) - 原本的配置
        rightTemple: { from: { x: "60vw", y: "35vh", scale: 0.9 }, to: { x: "60vw", y: "25vh", scale: 1.4 } },
        leftTemple: { from: { x: "20vw", y: "40vh", scale: 1.0 }, to: { x: "20vw", y: "35vh", scale: 1.3 } },
        villiage: { from: { x: "50vw", y: "45vh", scale: 0.9 }, to: { x: "55vw", y: "50vh", scale: 1.4 } },
        leopard: { from: { x: "10vw", y: "50vh", scale: 0.7 }, to: { x: "7vw", y: "50vh", scale: 0.8 } },
        bear: { from: { x: "65vw", y: "-10vh", scale: 0.35 }, to: { x: "65vw", y: "-5vh", scale: 0.3 } },
        boat: { from: { x: "20vw", y: "53vh", scale: 0.9 }, to: { x: "18vw", y: "58vh", scale: 1 } },
        wave: { from: { x: "35vw", y: "82vh", scale: 0.9 }, to: { x: "27vw", y: "82vh", scale: 8.0 } },
        fish: { from: { x: "25vw", y: "50vh", scale: 0.5 }, to: { x: "20vw", y: "50vh", scale: 0.6 } },
        noodle: { from: { x: "66vw", y: "47vh", scale: 0.6 }, to: { x: "66vw", y: "47vh", scale: 0.7 } },
        red: { from: { x: "20vw", y: "10vh", scale: 0.3 }, to: { x: "25vw", y: "10vh", scale: 0.4 } },
        taiwan: { from: { x: "38vw", y: "19vh", scale: 1.0 }, to: { x: "38vw", y: "19vh", scale: 1.3 } }
      }
    };

    return (breakpoint: 'mobile' | 'tablet' | 'desktop') => {
      const config = configs[breakpoint];
      
      // 基礎動畫 - 所有裝置都顯示
      const baseAnimations = [
        {
          ref: elementRefs.rightTemple,
          from: { ...config.rightTemple.from, opacity: 0 },
          to: { ...config.rightTemple.to, opacity: 1, zIndex: 17, duration: 0.5, ease: "power2.out" },
          delay: 1.0
        },
        {
          ref: elementRefs.leftTemple,
          from: { ...config.leftTemple.from, opacity: 0 },
          to: { ...config.leftTemple.to, opacity: 1, zIndex: 17, duration: 0.5, ease: "power1.out" },
          delay: 1.6
        },
        {
          ref: elementRefs.villiage,
          from: { ...config.villiage.from, opacity: 0 },
          to: { ...config.villiage.to, opacity: 1, zIndex: 17, duration: 0.5, ease: "power2.out" },
          delay: 2.2
        },
        {
          ref: elementRefs.wave,
          from: { ...config.wave.from, opacity: 0 },
          to: { ...config.wave.to, opacity: 1, zIndex: 21, duration: 0.5, ease: "power2.out" },
          delay: 2.8
        },
        {
          ref: elementRefs.fish,
          from: { ...config.fish.from, opacity: 0 },
          to: { ...config.fish.to, opacity: 1, zIndex: 20, duration: 0.5, ease: "power2.out" },
          delay: 3.4
        },
        {
          ref: elementRefs.taiwan,
          from: { ...config.taiwan.from, opacity: 0 },
          to: { ...config.taiwan.to, opacity: 1, zIndex: 30, duration: 0.6, ease: "power2.out" },
          delay: 4.0
        }
      ];

      // 只有 tablet 和 desktop 才顯示其他元素
      if (breakpoint === 'tablet' || breakpoint === 'desktop') {
        const fullConfig = configs[breakpoint];
        baseAnimations.push(
          {
            ref: elementRefs.leopard,
            from: { ...fullConfig.leopard.from, opacity: 0 },
            to: { ...fullConfig.leopard.to, opacity: 1, zIndex: 17, duration: 0.5, ease: "power1.out" },
            delay: 4.6
          },
          {
            ref: elementRefs.bear,
            from: { ...fullConfig.bear.from, opacity: 0 },
            to: { ...fullConfig.bear.to, opacity: 1, zIndex: 5, duration: 0.5, ease: "power1.out" },
            delay: 5.2
          },
          {
            ref: elementRefs.boat,
            from: { ...fullConfig.boat.from, opacity: 0 },
            to: { ...fullConfig.boat.to, opacity: 1, zIndex: 20, duration: 0.5, ease: "power2.out" },
            delay: 5.8
          },
          {
            ref: elementRefs.noodle,
            from: { ...fullConfig.noodle.from, opacity: 0 },
            to: { ...fullConfig.noodle.to, opacity: 1, zIndex: 30, duration: 0.6, ease: "power1.out" },
            delay: 6.4
          },
          {
            ref: elementRefs.red,
            from: { ...fullConfig.red.from, opacity: 0 },
            to: { ...fullConfig.red.to, opacity: 1, zIndex: 30, duration: 0.5, ease: "power2.out" },
            delay: 7.0
          }
        );
      }

      return baseAnimations;
    };
  }, [elementRefs]);

  // 動態取得當前螢幕對應的動畫配置
  const animationConfigs = useMemo(() => {
    const breakpoint = getCurrentBreakpoint();
    return getResponsiveAnimationConfigs(breakpoint);
  }, [getResponsiveAnimationConfigs, getCurrentBreakpoint]);

  // SVG configurations - 根據裝置類型顯示不同元素 (SSR 安全)
  const getResponsiveSvgConfigs = useCallback(() => {
    const isMobile = isClient && currentBreakpoint === 'mobile';
    
    // 手機版本只顯示中間部分的元素
    const mobileConfigs = [
      { ref: elementRefs.rightTemple, src: "/animation/rightTemple.svg", alt: "right temple animation", mobileWidth: 120, mobileHeight: 120 },
      { ref: elementRefs.leftTemple, src: "/animation/leftTemple.svg", alt: "left temple animation", mobileWidth: 100, mobileHeight: 100 },
      { ref: elementRefs.villiage, src: "/animation/villiage.svg", alt: "villiage animation", mobileWidth: 110, mobileHeight: 110 },
      { ref: elementRefs.taiwan, src: "/animation/taiwan.svg", alt: "Taiwan animation", mobileWidth: 300, mobileHeight: 300 },
      { ref: elementRefs.wave, src: "/animation/wave.svg", alt: "wave animation", width: 50, height: 50, mobileWidth: 40, mobileHeight: 40 },
      { ref: elementRefs.fish, src: "/animation/fish.svg", alt: "fish animation", mobileWidth: 70, mobileHeight: 70 },
    ];
    
    // 完整版本 (tablet/desktop) 顯示所有元素
    const fullConfigs = [
      { ref: elementRefs.rightTemple, src: "/animation/rightTemple.svg", alt: "right temple animation", mobileWidth: 120, mobileHeight: 120 },
      { ref: elementRefs.leftTemple, src: "/animation/leftTemple.svg", alt: "left temple animation", mobileWidth: 100, mobileHeight: 100 },
      { ref: elementRefs.villiage, src: "/animation/villiage.svg", alt: "villiage animation", mobileWidth: 110, mobileHeight: 110 },
      { ref: elementRefs.leopard, src: "/animation/leopard.svg", alt: "leopard animation", mobileWidth: 80, mobileHeight: 80 },
      { ref: elementRefs.bear, src: "/animation/bear.svg", alt: "bear animation", mobileWidth: 60, mobileHeight: 60 },
      { ref: elementRefs.boat, src: "/animation/boat.svg", alt: "Boat animation", mobileWidth: 90, mobileHeight: 90 },
      { ref: elementRefs.fish, src: "/animation/fish.svg", alt: "fish animation", mobileWidth: 70, mobileHeight: 70 },
      { ref: elementRefs.taiwan, src: "/animation/taiwan.svg", alt: "Taiwan animation", mobileWidth: 130, mobileHeight: 130 },
      { ref: elementRefs.wave, src: "/animation/wave.svg", alt: "wave animation", width: 50, height: 50, mobileWidth: 40, mobileHeight: 40 },
      { ref: elementRefs.noodle, src: "/animation/noodle.svg", alt: "noodle animation", mobileWidth: 80, mobileHeight: 80 },
      { ref: elementRefs.red, src: "/animation/red.svg", alt: "red animation", mobileWidth: 60, mobileHeight: 60 },
    ];
    
    return isMobile ? mobileConfigs : fullConfigs;
  }, [isClient, currentBreakpoint, elementRefs]);

  const svgConfigs = useMemo(() => getResponsiveSvgConfigs(), [getResponsiveSvgConfigs]);

  // 共用的樣式配置
  const commonImageStyles = useMemo(() => ({
    imageRendering: 'auto' as const,
    backfaceVisibility: 'hidden' as const,
    transform: 'translate3d(0,0,0)',
  }), []);

  // Mountain configurations - RWD 支援
  const getResponsiveMountainConfigs = useMemo(() => {
    const mountainBackConfigs = {
      mobile: [
        { x: "35%", y: "20%", endX: "55%", endY: "30%", scale: 0.8, delay: 0, zIndex: 12 },
        { x: "25%", y: "45%", endX: "45%", endY: "55%", scale: 0.8, delay: 0, zIndex: 14 }
      ],
      tablet: [
        { x: "8vw", y: "7vh", endX: "29vw", endY: "16vh", scale: 1.7, delay: 0, zIndex: 12 },
        { x: "8vw", y: "26vh", endX: "29vw", endY: "36vh", scale: 1.5, delay: 0, zIndex: 14 },
        { x: "8vw", y: "41vh", endX: "27vw", endY: "54vh", scale: 1.7, delay: 0, zIndex: 16 }
      ],
      desktop: [
        { x: "10vw", y: "6vh", endX: "32vw", endY: "15vh", scale: 1.9, delay: 0, zIndex: 12 },
        { x: "10vw", y: "25vh", endX: "32vw", endY: "35vh", scale: 1.7, delay: 0, zIndex: 14 },
        { x: "10vw", y: "40vh", endX: "30vw", endY: "53vh", scale: 1.9, delay: 0, zIndex: 16 }
      ]
    };

    const mountainConfigs = {
      mobile: [
        { x: "40%", y: "25%", endX: "65%", endY: "40%", scale: 0.7, delay: 0, zIndex: 13 },
        { x: "30%", y: "50%", endX: "55%", endY: "65%", scale: 0.7, delay: 0, zIndex: 15 }
      ],
      tablet: [
        { x: "12vw", y: "7vh", endX: "44vw", endY: "31vh", scale: 0.9, delay: 0, zIndex: 13 },
        { x: "12vw", y: "36vh", endX: "44vw", endY: "50vh", scale: 0.9, delay: 0, zIndex: 15 },
        { x: "8vw", y: "41vh", endX: "12vw", endY: "59vh", scale: 1.1, delay: 0, zIndex: 18 }
      ],
      desktop: [
        { x: "15vw", y: "6vh", endX: "47vw", endY: "30vh", scale: 1, delay: 0, zIndex: 13 },
        { x: "15vw", y: "35vh", endX: "47vw", endY: "49.5vh", scale: 1, delay: 0, zIndex: 15 },
        { x: "10vw", y: "40vh", endX: "14vw", endY: "58vh", scale: 1.3, delay: 0, zIndex: 18 }
      ]
    };

    return (breakpoint: 'mobile' | 'tablet' | 'desktop') => ({
      mountainBackConfigs: mountainBackConfigs[breakpoint],
      mountainConfigs: mountainConfigs[breakpoint]
    });
  }, []);

  // 動態取得當前螢幕對應的山脈配置
  const { mountainBackConfigs, mountainConfigs } = useMemo(() => {
    const breakpoint = getCurrentBreakpoint();
    return getResponsiveMountainConfigs(breakpoint);
  }, [getResponsiveMountainConfigs, getCurrentBreakpoint]);

  // Initialize animations
  useEffect(() => {
      const ctx = gsap.context(() => {
      const tlText = gsap.timeline({ defaults: { ease: "power3.out" } });
      const tlMain = gsap.timeline({ defaults: { ease: "power2.out" } });

      // 設置所有元素的初始狀態 (保持高品質)
      const allElementRefs = [
        ...mountainBackRefs.current.filter(Boolean),
        ...mountainRefs.current.filter(Boolean),
        ...Object.values(elementRefs).map(ref => ref.current).filter(Boolean)
      ];
      
      gsap.set(allElementRefs, { 
        opacity: 0,
        force3D: false, // 避免過度的3D加速影響品質
        backfaceVisibility: "hidden"
      });

      // part 1: 分階段執行山脈動畫 (避免同時執行太多)
      const mountainTimeline = gsap.timeline();
      
      mountainBackConfigs.forEach((config, index) => {
        const mountainElement = mountainBackRefs.current[index];
        if (mountainElement) {
          mountainTimeline.fromTo(mountainElement, 
            { 
              x: config.x,
              y: config.y,
              scale: 0.8,
              opacity: 0,
              zIndex: config.zIndex,
              force3D: false // 保持品質
            },
            { 
              x: config.endX,
              y: config.endY,
              scale: config.scale,
              opacity: 1,
              zIndex: config.zIndex,
              duration: 0.8,
              ease: "power2.out"
            }, index * 0.1);
        }
      });

      mountainConfigs.forEach((config, index) => {
        const mountainElement = mountainRefs.current[index];
        if (mountainElement) {
          mountainTimeline.fromTo(mountainElement, 
            { 
              x: config.x,
              y: config.y,
              scale: 0.8,
              opacity: 0,
              zIndex: config.zIndex,
              force3D: false
            },
            { 
              x: config.endX,
              y: config.endY,
              scale: config.scale,
              opacity: 1,
              zIndex: config.zIndex,
              duration: 0.8,
              ease: "power2.out"
            }, index * 0.1 + 0.3);
        }
      });      

      // part 2: 主要元素動畫 (使用配置化方式)
      animationConfigs.forEach(config => {
        tlMain.fromTo(config.ref.current,
          { 
            ...config.from,
            force3D: false
          },
          { 
            ...config.to
          }, config.delay);
      });


      // Set initial states for text elements
      gsap.set([titleRef.current, descriptionRef.current], { 
        opacity: 0, 
        y: 50, 
        scale: 0.9,
        force3D: false // 文字也保持高品質
      });

      // Main text animation sequence - 配合響應式動畫時間
      const textDelay = getCurrentBreakpoint() === 'mobile' ? 4.5 : 7.3;
      tlText.to(titleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        delay: textDelay  // 根據裝置調整文字出現時間
      })
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      }, textDelay + 0.2);

    });

    return () => ctx.revert();
  }, [mountainBackConfigs, mountainConfigs, animationConfigs, commonImageStyles, elementRefs, getCurrentBreakpoint]);

  return (
    <section 
      className="relative w-full h-screen min-h-[600px] max-h-[1080px] overflow-hidden"
      style={{ backgroundColor: '#F09F6F' }}
    >
      {/* Navigation */}
      <Navigation variant="main" />

      {/* Background Layer */}
      <div 
        className="absolute inset-0 origin-center"
      >
        {/* Add your background image here if needed */}
      </div>
      
      
      
      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-amber-50 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-shadow-lg leading-tight text-amber-100 opacity-0"
          >
            文化記憶庫
          </h1>
          
          {/* Description */}
          <p 
            ref={descriptionRef}
            className="font-body text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 text-shadow-md max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed text-slate-100 opacity-0"
          >
            踏上一段穿越時空的文化旅程，發現各民族獨特的傳統、藝術與智慧
          </p>
        </div>
        
        {/* Animated Elements - 保持高畫質，支援 RWD 尺寸 */}
        {mountainBackConfigs.map((config, index) => {
          const isMobile = isClient && currentBreakpoint === 'mobile';
          const width = isMobile ? 200 : 700;
          const height = isMobile ? 240 : 833;
          
          return (
            <Image
              key={index}
              ref={(el) => {
                mountainBackRefs.current[index] = el;
              }}
              src="/animation/mountainBack.svg"
              alt={`Mountain back animation ${index + 1}`}
              width={width}
              height={height}
              className="absolute inset-0 opacity-0"
              style={{ 
                ...commonImageStyles,
              }}
              priority
              quality={100} // 最高品質
            />
          );
        })}
        {mountainConfigs.map((config, index) => {
          const isMobile = isClient && currentBreakpoint === 'mobile';
          const width = isMobile ? 150 : 400;
          const height = isMobile ? 150 : 400;
          
          return (
            <Image
              key={index}
              ref={(el) => {
                mountainRefs.current[index] = el;
              }}
              src="/animation/mountain.svg"
              alt={`Mountain animation ${index + 1}`}
              width={width}
              height={height}
              className="absolute inset-0 opacity-0"
              style={{ 
                ...commonImageStyles,
              }}
              priority
              quality={100}
            />
          );
        })}
        
        {/* Single SVG Elements - 使用響應式配置 */}
        {svgConfigs.map((config, index) => {
          const isMobile = isClient && currentBreakpoint === 'mobile';
          const width = isMobile ? (config.mobileWidth || 300) : (config.width || 400);
          const height = isMobile ? (config.mobileHeight || 300) : (config.height || 400);
          
          return (
            <Image
              key={index}
              ref={config.ref}
              src={config.src}
              alt={config.alt}
              width={width}
              height={height}
              className="absolute inset-0 opacity-0"
              style={commonImageStyles}
              priority
              quality={100}
            />
          );
        })}

        

      </div>
    </section>
  );
}
