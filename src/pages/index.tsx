import type { GetStaticProps, InferGetStaticPropsType } from 'next'

// import { useLiveQuery } from 'next-sanity/preview'
import Container from '~/components/Container'
import FAQ from '~/components/FAQ'
import FeaturedDesigners from '~/components/FeaturedDesigners'
import { SiteFooter } from '~/components/Footer'
import Hero from '~/components/Hero'
import Intro from '~/components/Intro'
import SplitImage from '~/components/SplitImage'
import SplitVideo from '~/components/SplitVideo'
import Sponsors from '~/components/Sponsors'
import Tickets from '~/components/Tickets'
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
  // const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  return (
    <Container>
      <Hero />
      <Intro />
      <SplitImage />
      <div className="flex flex-col gap-y-10 md:gap-y-20 bg-white">
        <FeaturedDesigners />
        <Sponsors />
        <SplitVideo />
        <Tickets />
        <FAQ />
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
