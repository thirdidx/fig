import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(request: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string
      slug?: { current: string }
    }>(request, process.env.SANITY_WEBHOOK_SECRET)

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 })
    }

    if (!body?._type) {
      return new Response('Bad Request', { status: 400 })
    }

    // Revalidate based on document type
    switch (body._type) {
      case 'page':
        revalidateTag('pages')
        if (body.slug?.current) {
          revalidateTag(`page:${body.slug.current}`)
        }
        break
      case 'post':
        revalidateTag('posts')
        if (body.slug?.current) {
          revalidateTag(`post:${body.slug.current}`)
        }
        break
      case 'settings':
        revalidateTag('settings')
        break
      default:
        // Revalidate all content for other document types
        revalidateTag('sanity')
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    })
  } catch (error) {
    console.error('Error in revalidate webhook:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}