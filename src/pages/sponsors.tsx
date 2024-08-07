import { Container, Sponsor } from '~/components/'
import { tier1, tier2, tier3, tier4, tier5 } from '~/data/sponsors'

export default function SponsorsPage() {
  return (
    <Container>
      <div className="flex flex-col gap-y-10 md:gap-y-20 bg-white pt-32">
        <div className="mx-auto max-w-[1020px] w-full p-10 flex flex-col gap-y-4 justify-center items-center md:items-start md:text-center pb-20">
          <h1 className="text-4xl text-center mb-8 self-center">Sponsors</h1>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-4 md:gap-8 items-center">
              <div className="flex items-center justify-center p-4 select-none">
                <Sponsor sponsor={tier1[0]} side="top" />
              </div>
            </div>
            {/* <div className="flex flex-col gap-4 items-start">
              <h4>Runway Sponsors</h4>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {tier2.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center p-4 select-none"
                  >
                    <Sponsor key={idx} sponsor={s} side="top" />
                  </div>
                ))}
              </div>
            </div> */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {tier3.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center p-4 select-none"
                  >
                    <Sponsor key={idx} sponsor={s} side="top" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {tier4.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center p-4 select-none"
                  >
                    <Sponsor key={idx} sponsor={s} side="top" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {tier5.map((s, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center p-4 select-none"
                >
                  <Sponsor key={idx} sponsor={s} side="top" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
