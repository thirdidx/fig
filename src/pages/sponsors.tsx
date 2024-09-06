import { Container, Sponsor, SponsorHero } from '~/components/'
import { tier1, tier2, tier3, tier4, tier5 } from '~/data/sponsors'

export default function SponsorsPage() {
  return (
    <Container>
      <SponsorHero />
      <div className="flex flex-col gap-y-10 md:gap-y-20 bg-white">
        <div className="mx-auto max-w-[1020px] w-full p-10 flex flex-col gap-y-4 justify-center items-center md:items-start md:text-center pb-20">
          <h1 className="text-4xl text-center mb-8 self-center">Sponsors</h1>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {[...tier1, ...tier2, ...tier3, ...tier4, ...tier5].map(
                  (s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center p-4 select-none"
                    >
                      <Sponsor key={idx} sponsor={s} side="top" />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
