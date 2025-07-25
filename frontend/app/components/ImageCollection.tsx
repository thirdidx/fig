"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

// Define types based on the schema
type ImageItem = {
  _key: string;
  _type: "image";
  asset?: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: any;
  crop?: any;
  alt: string;
  caption?: string;
  credit?: string;
};

type ImageCollection = {
  _type: "imageCollection";
  _key?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  images: ImageItem[];
  layout?: "carousel" | "grid" | "masonry" | "slideshow";
  aspectRatio?: "original" | "square" | "landscape" | "portrait" | "wide";
  imageSize?: "small" | "medium" | "large";
  showCaptions?: boolean;
  showCredits?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  showArrows?: boolean;
  showDots?: boolean;
  columns?: number;
};

type ImageCollectionProps = {
  block: ImageCollection;
  index: number;
  isInContainer?: boolean;
};

const getAspectRatioClasses = (aspectRatio: string = "original") => {
  switch (aspectRatio) {
    case "square":
      return "aspect-square";
    case "landscape":
      return "aspect-video";
    case "portrait":
      return "aspect-[4/5]";
    case "wide":
      return "aspect-[21/9]";
    case "original":
    default:
      return "";
  }
};

const getImageSizeClasses = (size: string = "medium", layout: string = "carousel") => {
  if (layout === "carousel" || layout === "slideshow") {
    switch (size) {
      case "small":
        return "h-64 md:h-80";
      case "large":
        return "h-96 md:h-[32rem]";
      case "medium":
      default:
        return "h-80 md:h-96";
    }
  }
  
  // For grid/masonry layouts
  switch (size) {
    case "small":
      return "h-48";
    case "large":
      return "h-80";
    case "medium":
    default:
      return "h-64";
  }
};

const getGridClasses = (columns: number = 3) => {
  switch (columns) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-1 md:grid-cols-2";
    case 3:
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    case 4:
      return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    case 5:
      return "grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
    case 6:
      return "grid-cols-2 md:grid-cols-4 lg:grid-cols-6";
    default:
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  }
};

export default function ImageCollection({ block, isInContainer = false }: ImageCollectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(block.autoplay || false);

  const images = block.images || [];
  const layout = block.layout || "carousel";
  const aspectRatio = block.aspectRatio || "original";
  const imageSize = block.imageSize || "medium";
  const showCaptions = block.showCaptions !== false;
  const showCredits = block.showCredits || false;
  const showArrows = block.showArrows !== false;
  const showDots = block.showDots !== false;
  const autoplaySpeed = (block.autoplaySpeed || 5) * 1000;
  const columns = block.columns || 3;

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying && (layout === "carousel" || layout === "slideshow")) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoplaySpeed);
      return () => clearInterval(interval);
    }
  }, [isPlaying, images.length, autoplaySpeed, layout]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsPlaying(false);
  };

  if (!images.length) {
    return null;
  }

  const aspectRatioClasses = getAspectRatioClasses(aspectRatio);
  const imageSizeClasses = getImageSizeClasses(imageSize, layout);
  const gridClasses = getGridClasses(columns);

  const renderImage = (image: ImageItem, index: number, className?: string) => (
    <div key={image._key} className={`relative overflow-hidden ${className || ''}`}>
      <div className={`relative ${aspectRatioClasses || imageSizeClasses}`}>
        {image.asset && (
          <Image
            src={urlForImage(image)?.url() || ''}
            alt={image.alt}
            fill
            className={`object-cover transition-transform hover:scale-105 ${aspectRatioClasses ? '' : 'h-full w-full'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      
      {/* Caption/Credit Overlay */}
      {(showCaptions && image.caption) || (showCredits && image.credit) ? (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          {showCaptions && image.caption && (
            <p className="text-white text-sm font-medium mb-1">{image.caption}</p>
          )}
          {showCredits && image.credit && (
            <p className="text-white/80 text-xs">© {image.credit}</p>
          )}
        </div>
      ) : null}
    </div>
  );

  const renderCarousel = () => (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={image._key} className="w-full flex-shrink-0">
              {renderImage(image, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark/60 hover:bg-dark/80 text-light backdrop-blur-sm p-3 transition-all duration-200"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark/60 hover:bg-dark/80 text-light backdrop-blur-sm p-3 transition-all duration-200"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && images.length > 1 && (
        <div className="flex justify-center space-x-3 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 transition-all duration-200 ${
                index === currentIndex ? 'bg-maroon w-6' : 'bg-taupe hover:bg-maroon/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Play/Pause Button */}
      {block.autoplay && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 bg-dark/60 hover:bg-dark/80 text-light backdrop-blur-sm p-2 transition-all duration-200"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      )}
    </div>
  );

  const renderGrid = () => (
    <div className={`grid ${gridClasses} gap-4`}>
      {images.map((image, index) => renderImage(image, index))}
    </div>
  );

  const renderMasonry = () => (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
      {images.map((image, index) => renderImage(image, index, "break-inside-avoid"))}
    </div>
  );

  return (
    <div className={isInContainer ? "md:sticky md:top-0" : "container mx-auto my-12"}>
      <div className="py-8">
        {/* Header */}
        {(block.heading || block.subheading || block.description) && (
          <div className="text-center mb-8">
            {block.heading && (
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {block.heading}
              </h2>
            )}
            {block.subheading && (
              <p className="text-lg text-gray-600 mb-2">
                {block.subheading}
              </p>
            )}
            {block.description && (
              <p className="text-gray-600 max-w-2xl mx-auto">
                {block.description}
              </p>
            )}
          </div>
        )}

        {/* Image Display */}
        {layout === "carousel" || layout === "slideshow" ? (
          renderCarousel()
        ) : layout === "masonry" ? (
          renderMasonry()
        ) : (
          renderGrid()
        )}
      </div>
    </div>
  );
}