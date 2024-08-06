import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '~/components/ui/carousel'

export default function PhotoCarousel({ images }: { images: string[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false }),
  )

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      className="w-full bg-black"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="w-full aspect-square relative">
              <Image
                src={src}
                quality={80}
                fill
                style={{ objectFit: 'cover' }}
                alt=""
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
