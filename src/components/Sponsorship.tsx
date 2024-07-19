import * as React from 'react'

import { Card, CardContent } from '~/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'

function SponsorsCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-[960px] mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
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
    <section className="text-center flex flex-col gap-4">
      <h2 className="text-2xl md:text-[37px]">
        Sponsorship Is Always In Style
      </h2>
      <p className="text-[15px]">
        Fashion is personal. Here’s your chance to get to know the inspiration,
        vision, and drive that each designer brings to the FIG Runway.
      </p>

      <SponsorsCarousel />
    </section>
  )
}
