/* eslint-disable @next/next/no-img-element */
import * as React from 'react'

import { Card, CardContent } from '~/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'

const sponsors = [
  {
    name: 'Evans Bank',
    href: '#',
    image: '/logo-evans.svg',
  },
  {
    name: 'FourthIdea',
    href: '#',
    image: '/logo-fourthidea.svg',
  },
  {
    name: '43 North',
    href: '#',
    image: '/sponsors/high-level/43north-light.jpg',
  },
  {
    name: 'Buffalo Toronto Public Media',
    href: '#',
    image: '/sponsors/high-level/buffalo-toronto-public-media.png',
  },
  {
    name: 'Ciminelli Real Esate',
    href: '#',
    image: '/sponsors/high-level/ciminelli-real-esate.jpg',
  },
  {
    name: 'Dame',
    href: '#',
    image: '/sponsors/high-level/dame.png',
  },
  {
    name: 'Douglas Buffalo',
    href: '#',
    image: '/sponsors/high-level/douglas-buffalo-black.png',
  },
  {
    name: 'Great Lakes',
    href: '#',
    image: '/sponsors/high-level/great-lakes.png',
  },
  {
    name: 'NFTA Metro',
    href: '#',
    image: '/sponsors/high-level/nfta-metro.svg',
  },
  {
    name: 'Seneca One',
    href: '#',
    image: '/sponsors/high-level/seneca-one-black.png',
  },
  {
    name: 'Valval',
    href: '#',
    image: '/sponsors/high-level/valval.png',
  },
]

function SponsorsCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-[1020px] mx-auto px-4 md:px-0"
    >
      <CarouselContent>
        {[...sponsors, ...sponsors].map(({ name, href, image }, index) => (
          <CarouselItem key={index} className="basis-1/3 lg:basis-1/5">
            <div className="flex items-center justify-center p-4 select-none">
              {/* <span className="text-3xl font-semibold"></span> */}
              <img src={image} alt={name} className="object-contain h-20" />
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
      <button className="btn !border-none !border-1 w-max uppercase text-[21px] !px-4 !bg-accent text-white">
        Sponsorship
      </button>
    </section>
  )
}
