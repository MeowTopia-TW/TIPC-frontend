"use client";

import { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Navigation from '@/components/navigation/Navigation';

export default function MainVisual() {
  // Text content refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  // SVG element refs
  const mountainBackRefs = useRef<(HTMLImageElement | null)[]>([]);
  const mountainRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  // Single elements refs - organized
  const elementRefs = {
    rightTemple: useRef<HTMLImageElement>(null),
    leftTemple: useRef<HTMLImageElement>(null),
    villiage: useRef<HTMLImageElement>(null),
    leopard: useRef<HTMLImageElement>(null),
    bear: useRef<HTMLImageElement>(null),
    boat: useRef<HTMLImageElement>(null),
    wave: useRef<HTMLImageElement>(null),
    fish: useRef<HTMLImageElement>(null),
    noodle: useRef<HTMLImageElement>(null),
    red: useRef<HTMLImageElement>(null),
    taiwan: useRef<HTMLImageElement>(null),
  };

  // Animation configurations - centralized with shorter duration and longer delays
  const animationConfigs = useMemo(() => [
    {
      ref: elementRefs.rightTemple,
      from: { x: "60vw", y: "35vh", scale: 0.9, opacity: 0 },
      to: { x: "60vw", y: "25vh", scale: 1.4, opacity: 1, zIndex: 17, duration: 0.5, ease: "power2.out" },
      delay: 1.0
    },
    {
      ref: elementRefs.leftTemple,
      from: { x: "20vw", y: "40vh", scale: 1.0, opacity: 0 },
      to: { x: "20vw", y: "35vh", scale: 1.3, opacity: 1, zIndex: 17, duration: 0.5, ease: "power1.out" },
      delay: 1.6
    },
    {
      ref: elementRefs.villiage,
      from: { x: "50vw", y: "45vh", scale: 0.9, opacity: 0 },
      to: { x: "55vw", y: "50vh", scale: 1.4, opacity: 1, zIndex: 17, duration: 0.5, ease: "power2.out" },
      delay: 2.2
    },
    {
      ref: elementRefs.leopard,
      from: { x: "10vw", y: "50vh", scale: 0.7, opacity: 0 },
      to: { x: "7vw", y: "50vh", scale: 0.8, opacity: 1, zIndex: 17, duration: 0.5, ease: "power1.out" },
      delay: 2.8
    },
    {
      ref: elementRefs.bear,
      from: { x: "65vw", y: "-10vh", scale: 0.35, opacity: 0 },
      to: { x: "65vw", y: "-5vh", scale: 0.3, opacity: 1, zIndex: 5, duration: 0.5, ease: "power1.out" },
      delay: 3.4
    },
    {
      ref: elementRefs.boat,
      from: { x: "20vw", y: "53vh", scale: 0.9, opacity: 0 },
      to: { x: "18vw", y: "58vh", scale: 1, opacity: 1, zIndex: 20, duration: 0.5, ease: "power2.out" },
      delay: 4.0
    },
    {
      ref: elementRefs.wave,
      from: { x: "35vw", y: "82vh", scale: 0.9, opacity: 0 },
      to: { x: "27vw", y: "82vh", scale: 8.0, opacity: 1, zIndex: 21, duration: 0.5, ease: "power2.out" },
      delay: 4.1  // 調整為幾乎同時，只差0.1秒
    },
    {
      ref: elementRefs.fish,
      from: { x: "25vw", y: "50vh", scale: 0.5, opacity: 0 },
      to: { x: "20vw", y: "50vh", scale: 0.6, opacity: 1, zIndex: 20, duration: 0.5, ease: "power2.out" },
      delay: 4.7  // 調整時間配合boat/wave組合
    },
    {
      ref: elementRefs.noodle,
      from: { x: "66vw", y: "47vh", scale: 0.6, opacity: 0 },
      to: { x: "66vw", y: "47vh", scale: 0.7, opacity: 1, zIndex: 30, duration: 0.6, ease: "power1.out" },
      delay: 5.3  // 調整時間
    },
    {
      ref: elementRefs.red,
      from: { x: "20vw", y: "10vh", scale: 0.3, opacity: 0 },
      to: { x: "25vw", y: "10vh", scale: 0.4, opacity: 1, zIndex: 30, duration: 0.5, ease: "power2.out" },
      delay: 5.9  // 調整時間
    },
    {
      ref: elementRefs.taiwan,
      from: { x: "38vw", y: "19vh", scale: 1.0, opacity: 0 },
      to: { x: "38vw", y: "19vh", scale: 1.3, opacity: 1, zIndex: 30, duration: 0.6, ease: "power2.out" },
      delay: 6.5  // 調整時間
    }
  ], []);

  // SVG configurations - centralized
  const svgConfigs = useMemo(() => [
    { ref: elementRefs.rightTemple, src: "/animation/rightTemple.svg", alt: "right temple animation" },
    { ref: elementRefs.leftTemple, src: "/animation/leftTemple.svg", alt: "left temple animation" },
    { ref: elementRefs.villiage, src: "/animation/villiage.svg", alt: "villiage animation" },
    { ref: elementRefs.leopard, src: "/animation/leopard.svg", alt: "leopard animation" },
    { ref: elementRefs.bear, src: "/animation/bear.svg", alt: "bear animation" },
    { ref: elementRefs.boat, src: "/animation/boat.svg", alt: "Boat animation" },
    { ref: elementRefs.fish, src: "/animation/fish.svg", alt: "fish animation" },
    { ref: elementRefs.taiwan, src: "/animation/taiwan.svg", alt: "Taiwan animation" },
    { ref: elementRefs.wave, src: "/animation/wave.svg", alt: "wave animation", width: 50, height: 50 },
    { ref: elementRefs.noodle, src: "/animation/noodle.svg", alt: "noodle animation" },
    { ref: elementRefs.red, src: "/animation/red.svg", alt: "red animation" },
  ], []);

  // 共用的樣式配置
  const commonImageStyles = useMemo(() => ({
    imageRendering: 'auto' as const,
    backfaceVisibility: 'hidden' as const,
    transform: 'translate3d(0,0,0)',
  }), []);

  // Mountain configurations - memoized to prevent unnecessary re-renders
  const mountainBackConfigs = useMemo(() => [
    { x: "10vw", y: "6vh", endX: "32vw", endY: "15vh", scale: 1.9, delay: 0, zIndex: 12 },
    { x: "10vw", y: "25vh", endX: "32vw", endY: "35vh", scale: 1.7, delay: 0, zIndex: 14 },
    { x: "10vw", y: "40vh", endX: "30vw", endY: "53vh", scale: 1.9, delay: 0, zIndex: 16 }
  ], []);
  const mountainConfigs = useMemo(() => [
    { x: "15vw", y: "6vh", endX: "47vw", endY: "30vh", scale: 1, delay: 0, zIndex: 13 },
    { x: "15vw", y: "35vh", endX: "47vw", endY: "49.5vh", scale: 1, delay: 0, zIndex: 15 },
    { x: "10vw", y: "40vh", endX: "14vw", endY: "58vh", scale: 1.3, delay: 0, zIndex: 18 }
  ], []);

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

      // Main text animation sequence - 配合boat/wave同時出現的新時間軸
      tlText.to(titleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        delay: 7.3  // 調整到台灣動畫完成後
      })
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      }, 7.5);

    });

    return () => ctx.revert();
  }, [mountainBackConfigs, mountainConfigs, animationConfigs, commonImageStyles]);

  return (
    <section 
      className="relative w-full h-screen min-h-[600px] max-h-[1080px] overflow-hidden bg-white"
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
        
        {/* Animated Elements - 保持高畫質 */}
        {mountainBackConfigs.map((config, index) => (
          <Image
            key={index}
            ref={(el) => {
              mountainBackRefs.current[index] = el;
            }}
            src="/animation/mountainBack.svg"
            alt={`Mountain back animation ${index + 1}`}
            width={700}
            height={833}
            className="absolute inset-0 opacity-0"
            style={{ 
              ...commonImageStyles,
            }}
            priority
            quality={100} // 最高品質
          />
        ))};
        {mountainConfigs.map((config, index) => (
          <Image
            key={index}
            ref={(el) => {
              mountainRefs.current[index] = el;
            }}
            src="/animation/mountain.svg"
            alt={`Mountain animation ${index + 1}`}
            width={400}
            height={400}
            className="absolute inset-0 opacity-0"
            style={{ 
              ...commonImageStyles,
            }}
            priority
            quality={100}
          />
        ))};
        
        {/* Single SVG Elements - 使用配置化方式 */}
        {svgConfigs.map((config, index) => (
          <Image
            key={index}
            ref={config.ref}
            src={config.src}
            alt={config.alt}
            width={config.width || 400}
            height={config.height || 400}
            className="absolute inset-0 opacity-0"
            style={commonImageStyles}
            priority
            quality={100}
          />
        ))}

        

      </div>
    </section>
  );
}
