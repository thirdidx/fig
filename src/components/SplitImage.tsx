'use client'

import { PhotoCarousel } from '~/components'
import { scrolltoHash } from '~/lib/utils'

const images = [
  '/hp-carousel-1.jpg',
  '/hp-carousel-2.jpg',
  '/hp-carousel-3.jpg',
  '/hp-carousel-4.jpg',
  '/hp-carousel-5.jpg',
  '/hp-carousel-6.jpg',
  '/hp-carousel-7.jpg',
  '/hp-carousel-8.jpg',
]

export default function SplitImage() {
  return (
    <section className="md:grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:-mt-1 min-h-[495px] -mt-px">
      <PhotoCarousel images={images} />
      <div
        className="relative overflow-hidden min-h-[495px]"
        style={{
          backgroundImage: 'url(/fabric-bg.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white flex flex-col items-center md:items-start gap-y-6 w-full max-w-[500px] p-4">
          <h2 className="text-2xl md:text-[37px]">
            Channel Your Inner-Fashionista
          </h2>
          <p>
            Dive into your closet and join us for a night of mind-blowing
            designs, dynamic performances, and unforgettable moments. Experience
            the passion, the energy, and the bold vision of Buffalo&rsquo;s
            fashion pioneers as they redefine the boundaries of style.
          </p>
          <p>Space is limited, so make sure you get your tickets today!</p>
          <a
            href="#tickets"
            onClick={(e) => scrolltoHash(e, 'tickets')}
            className="btn !border-white !border-1 w-max uppercase text-[33px] p-2 cursor-pointer"
          >
            Show Tickets
          </a>
        </div>
      </div>
    </section>
  )
}
