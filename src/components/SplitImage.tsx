import Image from 'next/image'

import { useMediaQuery } from '~/lib/use-media-query'

export default function SplitImage() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <section className="md:grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:-mt-1 min-h-[495px]">
      {isDesktop ? (
        <div className="relative">
          <Image
            src="/runway.jpg"
            quality={80}
            fill
            style={{ objectFit: 'cover' }}
            alt=""
          />
        </div>
      ) : (
        <Image
          src="/runway.jpg"
          quality={80}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt=""
        />
      )}

      <div
        className="relative overflow-hidden min-h-[495px]"
        style={{
          backgroundImage: 'url(/fabric-bg.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white flex flex-col gap-y-6 w-full max-w-[500px] p-4">
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
          <button className="btn !border-white !border-1 w-max uppercase text-[33px] p-2">
            Show Tickets
          </button>
        </div>
        {/* <Image
          src="/fabric-bg.jpg"
          quality={80}
          fill
          alt=""
          style={{ zIndex: -1 }}
        /> */}
      </div>
    </section>
  )
}
