import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { ContactForm, Container, PersonCard } from '~/components/'
import { team } from '~/data/team'

export default function AboutPage() {
  return (
    <Container>
      <div className="flex flex-col gap-y-10 md:gap-y-20 bg-white pt-32">
        <div className="mx-auto max-w-[1020px] w-full p-10 flex flex-col gap-y-4 justify-center items-center text-center">
          <h1 className="text-4xl text-center mb-8">The Fig Story</h1>
          <div className="flex flex-col gap-y-10 md:gap-y-20">
            <div className="flex flex-col gap-y-6">
              <h4>MISSION STATEMENT</h4>
              <p>
                At fig™, we are dedicated to empowering and celebrating local
                cut &amp; sew designers and creators in Buffalo&apos;s
                burgeoning fashion industry. Through our annual platform, we
                provide a space for the community to engage, connect, and
                celebrate self-expression. fig™ is not just a fashion show; it
                is an all-encompassing experience that fosters creativity,
                inclusivity, and the vibrant spirit of our local fashion
                community.
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <h2>TEAM</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {team.map((person) => (
                  <PersonCard
                    key={person.name}
                    person={person}
                    // className="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
