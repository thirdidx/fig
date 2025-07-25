"use client";

import React, { useRef, useEffect } from "react";

interface HeroProps {
  block: {
    _type: string;
    _key: string;
    videoUrl?: string;
    heading?: string;
    subheading?: string;
  };
  index: number;
}

export default function Hero({ block }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure video plays on load
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Container-sized 16:9 aspect ratio for all screen sizes */}
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        {block.videoUrl && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={block.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white z-10 px-4">
            {block.heading && (
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
                {block.heading}
              </h1>
            )}
            {block.subheading && (
              <p className="text-lg md:text-xl lg:text-2xl">
                {block.subheading}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
