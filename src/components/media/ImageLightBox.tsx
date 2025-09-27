"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/types";

type ImageLightboxProps = {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
  initialRect: DOMRect | null;
};

export default function ImageLightbox({
  image,
  isOpen,
  onClose,
  initialRect,
}: ImageLightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // zoom animation helper
  const zoom = () => {
    if (panelRef.current && initialRect && backgroundRef.current) {
      const panelRect = panelRef.current.getBoundingClientRect();
      const scaleX = initialRect.width / panelRect.width;
      const scaleY = initialRect.height / panelRect.height;
      const translateX =
        initialRect.left +
        initialRect.width / 2 -
        (panelRect.left + panelRect.width / 2);
      const translateY =
        initialRect.top +
        initialRect.height / 2 -
        (panelRect.top + panelRect.height / 2);

      panelRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scaleX}, ${scaleY})`;
      panelRef.current.style.opacity = "0";
      backgroundRef.current.style.opacity = "0";
    }
  };

  // open animation
  useEffect(() => {
    if (isOpen && panelRef.current && initialRect && backgroundRef.current) {
      zoom();
      requestAnimationFrame(() => {
        if (panelRef.current && backgroundRef.current) {
          panelRef.current.style.transition =
            "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
          panelRef.current.style.transform = "none";
          panelRef.current.style.opacity = "1";
          backgroundRef.current.style.transition = "opacity 0.5s ease-in-out";
          backgroundRef.current.style.opacity = "1";
        }
      });

      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, initialRect]);

  // close animation
  const handleClose = () => {
    document.body.style.overflow = "";
    if (!panelRef.current || !initialRect) {
      onClose();
      return;
    }

    zoom();
    setTimeout(() => {
      onClose();
      if (panelRef.current) {
        panelRef.current.style.transform = "";
        panelRef.current.style.opacity = "";
      }
    }, 500);
  };

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleClose}
    >
      <div ref={backgroundRef} className="fixed inset-0 bg-black/80" />
      <div
        ref={panelRef}
        className="p-6 rounded-lg relative [&::-webkit-scrollbar]:hidden scrollbar-hide"
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-300 hover:text-white rounded-full shadow hover:bg-white/10"
          onClick={handleClose}
        >
          ✕
        </button>

        {/* Image */}
        <div className="flex items-center justify-center">
          <Image
            src={image.src}
            alt={image.title}
            width={1200}
            height={800}
            className="max-h-[80vh] object-contain"
          />
        </div>

        {/* Caption */}
        {image.title && (
          <div className="text-center text-white mt-4">{image.title}</div>
        )}
      </div>
    </div>
  );
}
