/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import * as React from 'react'

import { Sponsor } from '~/components'
import { Card, CardContent } from '~/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'
import { tier1 } from '~/data/sponsors'

function SponsorsCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-[1020px] mx-auto px-4 md:px-0"
    >
      <CarouselContent className="overflow-y-visible">
        {tier1.map((s, idx) => (
          <CarouselItem key={idx} className="basis-1/3 lg:basis-1/5">
            <div className="flex items-center justify-center p-4 select-none">
              <Sponsor sponsor={s} />
              {/* <img src={image} alt={name} className="object-contain h-20" /> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default function Sponsorship() {
  return (
    <section className="text-center flex flex-col gap-y-8 items-center px-4 md:px-0">
      <h2 className="text-2xl md:text-[37px]">
        Sponsorship Is Always In Style
      </h2>
      <p className="text-[15px]">
        Fashion is personal. Here’s your chance to get to know the inspiration,
        vision, and drive that each designer brings to the FIG Runway.
      </p>

      <SponsorsCarousel />
      <Link
        className="btn !border-none !border-1 w-max uppercase text-[21px] !px-4 !bg-accent text-white"
        href="/sponsors"
      >
        Sponsorship
      </Link>
    </section>
  )
}
