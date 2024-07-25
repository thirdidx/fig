import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { ContactForm, Container, PersonCard, SiteFooter } from '~/components/'
import { designers } from '~/data/designers'

export default function DesignersPage() {
  return (
    <Container>
      <div className="flex flex-col gap-y-10 md:gap-y-20 bg-white pt-32">
        <div className="mx-auto max-w-[1020px] w-full p-10 flex flex-col gap-y-4 justify-center items-center text-center">
          <h1 className="text-4xl text-center mb-8">Designer Showcase</h1>
          <div className="flex flex-col gap-y-6">
            <h2>Fig 2024 Lineup</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {designers.map((person) => (
                <PersonCard
                  key={person.name}
                  person={person}
                  // className="w-[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
