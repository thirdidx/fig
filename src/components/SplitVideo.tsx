/* eslint-disable @next/next/no-img-element */
export default function SplitVideo() {
  return (
    <section className="bg-black">
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 w-full max-w-[1154px] mx-auto p-10">
        <div className="border border-gold flex items-center justify-center h-[282px]">
          <img className="w-[48px] h-auto" src="/i-play.svg" alt="" />
        </div>
        <div className="px-10 text-white flex flex-col justify-between">
          <h2 className="text-[37px]">Be Part of the Show</h2>
          <p className="text-[15px]">
            Are you ready to be a part of something extraordinary? The FIG
            Fashion Show invites designers, hair and makeup specialists, and
            volunteers to join us in creating an unforgettable event that
            celebrates Buffalo&rsquo;s thriving fashion community. Whether
            you&rsquo;re a seasoned professional or an emerging talent,
            there&rsquo;s a place for you at the FIG Fashion Show.
          </p>
          <button className="btn !border-white !border-1 w-max uppercase text-[33px] p-0">
            Join Us
          </button>
        </div>
      </div>
    </section>
  )
}
