import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  // markdown: content, json/yaml: data
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    cover: z.string().optional(),
    // Transform string to Date object
    createdAt: z.coerce
      .date()
      .or(z.string())
      .transform((v) => new Date(v)),
    updatedAt: z.coerce
      .date()
      .or(z.string())
      .optional()
      .transform((v) => (v ? new Date(v) : undefined)),
    draft: z.boolean().optional(),

    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
})

const categoryCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional()
  }),
})

export const collections = {
  posts: postCollection,
  categories: categoryCollection,
}
