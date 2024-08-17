'use client'
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function SponsorHero() {
  return (
    <div className="relative aspect-[21/9]">
      <Image
        className="z-[1]"
        src="/sponsor-hero-1.jpg"
        quality={80}
        priority
        fill
        style={{ objectFit: 'cover' }} // optional
        alt=""
      />
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] w-full max-w-[280px] md:max-w-[320px] lg:max-w-[400px]"
        src="/sponsors/feat/fig-x-evans-bank-white-stack.png"
        alt=""
      />
      <div className="absolute left-0 top-0 w-full h-full bg-black/20 z-[3]" />
    </div>
  )
}
