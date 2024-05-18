import { type CollectionEntry, getCollection } from 'astro:content'
import { ImageResponse } from '@vercel/og'

interface Props {
  params: { slug: string }
  props: { post: CollectionEntry<'posts'> }
}

export async function GET({ props }: Props) {
  const { post } = props

  // Astro doesn't support tsx endpoints so usign React-element objects
  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props: {
            tw: 'pl-10 shrink flex',
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '48px',
                    fontFamily: 'DM Sans Bold',
                  },
                  children: post.data.title,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            tw: 'absolute right-[40px] bottom-[40px] flex items-center',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'text-blue-600 text-3xl',
                  style: {
                    fontFamily: 'DM Sans Bold',
                  },
                  children: 'Chenfn',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'px-2 text-3xl',
                  style: {
                    fontSize: '30px',
                  },
                  children: '|',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'text-3xl',
                  children: 'Blog',
                },
              },
            ],
          },
        },
      ],
      tw: 'w-full h-full flex items-center justify-center relative px-22',
      style: {
        background: '#f7f8e8',
      },
    },
  }

  return new ImageResponse(html, {
    width: 1200,
    height: 600,
  })
}

// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
  const blogPosts = await getCollection('posts')
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }))
}
