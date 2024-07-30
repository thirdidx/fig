/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { ContactForm, Container, SiteFooter, Sponsor } from '~/components/'
import { tier1, tier2 } from '~/data/sponsors'

export default function SponsorsPage() {
  return (
    <Container>
      <div className="flex flex-col gap-y-10 md:gap-y-20 bg-white pt-32">
        <div className="mx-auto max-w-[1020px] w-full p-10 flex flex-col gap-y-4 justify-center items-center text-center">
          <h1 className="text-4xl text-center mb-8">Sponsors</h1>
          <div className="grid grid-cols-3 md:grid-cols-6">
            {[...tier1, ...tier2].map((s, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-4 select-none"
              >
                <Sponsor key={idx} sponsor={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
