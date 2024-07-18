/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import Card from '~/components/Card'
import Container from '~/components/Container'
import { SiteFooter } from '~/components/Footer'
import Hero from '~/components/Hero'
import { Sponsors } from '~/components/sponsors'
import Tickets from '~/components/tickets'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import Welcome from '~/components/Welcome'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  return (
    <Container>
      <Hero />
      <section className="bg-rose p-6 md:py-20 text-[19px] text-white z-[2] relative">
        <p className="max-w-[1018px] mx-auto">
          Fashion is more than just clothing—it&apos;s a statement, a creative
          expression, and a reflection of the vibrant energy of our community.
          This year’s show’s theme,”Street Couture,” embodies the raw
          authenticity and individuality of the Buffalo streets, elevated to the
          realm of high fashion. It&rsquo;s embraces the pulse of the city,
          where sidewalks become runways and every corner is a stage.
        </p>
      </section>
      <section className="md:grid md:grid-cols-2 md:-mt-1 min-h-[495px]">
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
              designs, dynamic performances, and unforgettable moments.
              Experience the passion, the energy, and the bold vision of
              Buffalo&rsquo;s fashion pioneers as they redefine the boundaries
              of style.
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
      <div className="flex flex-col gap-y-8">
        <section className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 max-w-[1118px] mx-auto w-full">
          <div className="p-8 flex">
            <div className="flex gap-x-4 relative bg-black overflow-hidden border border-black">
              <div className="bg-white text-black w-[60px] relative">
                <div className="absolute left-0 top-1/2 -rotate-90 w-max text-center -translate-x-[48px] -translate-y-1/2">
                  <span className="text-[17px] vaneer uppercase tracking-widest">
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
          <div className="p-8 flex flex-col gap-y-4">
            <h2 className="text-[37px]">Behind The Designs</h2>
            <p>
              Fashion is personal. Here’s your chance to get to know the
              inspiration, vision, and drive that each designer brings to the
              FIG Runway.
            </p>
            <button className="btn !border-none !bg-rose w-max uppercase text-[28px] p-2">
              Meet The Designers
            </button>
          </div>
        </section>

        <section className="text-center flex flex-col gap-4">
          <h2 className="text-[37px]">Sponsorship Is Always In Style</h2>
          <p className="text-[15px]">
            Fashion is personal. Here’s your chance to get to know the
            inspiration, vision, and drive that each designer brings to the FIG
            Runway.
          </p>

          <Sponsors />
        </section>

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

        <section className="mx-auto max-w-[1020px] w-full p-10 flex flex-col gap-y-4 justify-center items-center text-center">
          <Tickets />
        </section>

        <section className="mx-auto max-w-[800px] w-full p-10 flex flex-col gap-y-4 justify-center items-center text-center mb-12">
          <h2 className="text-[37px]">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it lorem ipsum dolor?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>

      <SiteFooter />

      {/* <section>
        {posts.length ? (
          posts.map((post) => <Card key={post._id} post={post} />)
        ) : (
          <Welcome />
        )}
      </section> */}
    </Container>
  )
}
