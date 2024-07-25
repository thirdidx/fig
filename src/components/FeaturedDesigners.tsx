import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
export default function FeaturedDesigners() {
  return (
    <section className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 max-w-[1020px] mx-auto w-full">
      <div className="flex relative bg-black overflow-hidden border border-black mx-4 md:mx-0">
        <div className="bg-white text-black w-[60px] relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center w-max text-center">
            <span className="text-base md:text-[17px] vaneer uppercase tracking-[3px]">
              featured designer
            </span>
          </div>
        </div>
        <div className="p-4 md:px-8 md:py-6 w-[286px] flex items-center justify-center">
          <img
            src="/designer-headshot.png"
            alt=""
            className="w-[222px] h-auto"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center max-w-[170px] pr-4">
          <h2 className="text-white text-2xl md:text-[37px] leading-none">
            Designer Name Here
          </h2>
          <button className="btn !border-white !border-[1px] w-max uppercase text-[21px] py-px px-2">
            See More
          </button>
        </div>
      </div>

      <div className="p-4 md:p-8 flex flex-col gap-y-6">
        <h2 className="text-2xl md:text-[37px]">Behind The Designs</h2>
        <p>
          Fashion is personal. Here’s your chance to get to know the
          inspiration, vision, and drive that each designer brings to the FIG
          Runway.
        </p>
        <Link
          href="/designers"
          className="btn !border-none !bg-rose w-max uppercase text-[28px] p-2"
        >
          Meet The Designers
        </Link>
      </div>
    </section>
  )
}
