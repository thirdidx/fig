import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import {
  Container,
  FAQ,
  FeaturedDesigners,
  Hero,
  Intro,
  SiteFooter,
  SplitImage,
  SplitVideo,
  Sponsorship,
  Tickets,
} from '~/components/'
// import { useLiveQuery } from 'next-sanity/preview'
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
        <Sponsorship />
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
