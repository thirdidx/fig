/* eslint-disable @next/next/no-img-element */
export default function FeaturedDesigners() {
  return (
    <section className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 max-w-[1118px] mx-auto w-full">
      <div className="p-4 md:p-8 flex">
        <div className="flex gap-x-4 relative bg-black overflow-hidden border border-black">
          <div className="bg-white text-black w-[60px] relative">
            <div className="absolute left-0 top-1/2 -rotate-90 w-max text-center -translate-x-[48px] -translate-y-1/2">
              <span className="text-base md:text-[17px] vaneer uppercase tracking-widest">
                featured designer
              </span>
            </div>
          </div>
          <div className="p-4 flex items-center justify-center">
            <img
              src="/designer-headshot.png"
              alt=""
              className="!w-[222px] h-auto block"
            />
          </div>
          <div className="p-4 flex flex-col gap-4 justify-center">
            <h2 className="text-white text-[37px] leading-none">
              Designer Name Here
            </h2>
            <button className="btn !border-white !border-1 w-max uppercase text-[21px] p-2">
              See More
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-8 flex flex-col gap-y-4">
        <h2 className="text-2xl md:text-[37px]">Behind The Designs</h2>
        <p>
          Fashion is personal. Here’s your chance to get to know the
          inspiration, vision, and drive that each designer brings to the FIG
          Runway.
        </p>
        <button className="btn !border-none !bg-rose w-max uppercase text-[28px] p-2">
          Meet The Designers
        </button>
      </div>
    </section>
  )
}
