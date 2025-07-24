"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Array of 12 BTS images
const images = [
  '/BTS/109_Goundry.jpg',
  '/BTS/Backstage@FIG_2024_109.jpg',
  '/BTS/Backstage@FIG_2024_130.jpg',
  '/BTS/Backstage@FIG_2024_14.jpg',
  '/BTS/Backstage@FIG_2024_41.jpg',
  '/BTS/Backstage@FIG_2024_50.jpg',
  '/BTS/DSC00152.jpg',
  '/BTS/DSC_0026.jpg',
  '/BTS/DSC_0114.jpg',
  '/BTS/DSC_0176.jpg',
  '/BTS/DSC_0187.jpg',
  '/BTS/DSC_0206-2.jpg',
  '/BTS/DSC_0352.jpg'
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer" onClick={nextImage}>
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className="flex-none w-full relative" key={index}>
              <Image
                src={src}
                alt={`Behind the scenes ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Overlay with navigation hints */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-accent uppercase bg-black/50 px-3 py-1 rounded">
          Click to advance
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToImage(index);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}