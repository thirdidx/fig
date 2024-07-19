import Image from 'next/image'

export default function SplitImage() {
  return (
    <section className="md:grid md:grid-cols-2 md:-mt-1 min-h-[495px] mb-10">
      <div className="relative">
        <Image
          src="/runway.jpg"
          quality={80}
          fill
          style={{ objectFit: 'cover' }}
          alt=""
        />
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white flex flex-col gap-y-6 w-full max-w-[500px] p-4">
          <h2 className="text-[37px]">Channel Your Inner-Fashionista</h2>
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
        <Image
          src="/fabric-bg.jpg"
          quality={80}
          fill
          alt=""
          style={{ zIndex: -1 }}
        />
      </div>
    </section>
  )
}
