'use client'
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { useMediaQuery } from '~/lib/use-media-query'
import { cn } from '~/lib/utils'

const Loading = () => {
  return (
    <div className="w-full h-[calc(100vh_-_266px)] xl:h-screen relative aspect-video bg-black">
      <h4 className="h-full w-full text-center flex items-center justify-center text-white/[.60]">
        Loading...
      </h4>
    </div>
  )
}
export default function Hero() {
  const [videoIsLoaded, setVideoIsLoaded] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const isDesktopScreen = useMediaQuery('(min-width: 768px)')
  const heroRef = useRef(null)
  const videoRef = useRef(null)

  const handleScroll = (ref) => {
    window.scrollTo({
      top: heroRef?.current?.clientHeight,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 100)
  }, [])

  return (
    <div
      ref={heroRef}
      onClick={handleScroll}
      className={cn(
        'relative -mt-1 -mb-1 z-[1] w-full cursor-s-resize opacity-100',
        {
          'opacity-100': videoIsLoaded,
        },
      )}
    >
      <>
        {!isReady ? (
          <Loading />
        ) : (
          <>
            {isDesktopScreen ? (
              <div className="w-full h-[calc(100vh_-_266px)] xl:h-screen relative aspect-video bg-black">
                {!videoIsLoaded && (
                  <h4 className="h-full w-full text-center flex items-center justify-center text-white/[.60]">
                    Loading...
                  </h4>
                )}
                <video
                  ref={videoRef}
                  onCanPlayThrough={() => setVideoIsLoaded(true)}
                  preload="auto"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover outline-none"
                >
                  <source src="/hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <Image
                src="/hero-mobile.jpg"
                quality={80}
                priority
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
                alt=""
              />
            )}
          </>
        )}
      </>
    </div>
  )
}
