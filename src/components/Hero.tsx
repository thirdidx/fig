'use client'
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import { useMediaQuery } from '~/lib/use-media-query'

export default function Hero() {
  const isXLScreen = useMediaQuery('(min-width: 1280px)')

  return (
    <div className="relative -mt-1 -mb-1 z-[1] w-full xl:h-screen">
      {isXLScreen ? (
        <Image
          src="/hero-bg.jpg"
          quality={80}
          priority
          fill
          style={{ objectFit: 'cover' }}
          alt=""
        />
      ) : (
        <Image
          src="/hero-bg.jpg"
          quality={80}
          priority
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} // optional
          alt=""
        />
      )}
      <img
        src="/fig-vol2.svg"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 lg:w-full h-auto max-w-[467px] z-[3]"
      />
    </div>
  )
}
