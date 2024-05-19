import { type CollectionEntry, getCollection } from 'astro:content'

export const fetchPosts = async () => {
  // if PROD, filter draft post
  const posts = await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })

  // sort by updatedAt or createdAt
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedAt ?? a.data.createdAt).valueOf()
    const bDate = new Date(b.data.updatedAt ?? b.data.createdAt).valueOf()
    return bDate - aDate
  })
}

export const fetchTags = async () => {
  const tags = new Map<string, number>()
  const posts = await fetchPosts()
  posts.map((post) => {
    if (!post.data.tags) {
      return
    }

    post.data.tags.map((tag) => {
      tags.set(tag, (tags.get(tag) || 0) + 1)
    })
  })
  return tags
}

export const fetchCategories = async () => {
  const categories = new Map<string, number>()
  const posts = await fetchPosts()
  posts.map((post) => {
    const category = post.data.category ? post.data.category : 'default'
    categories.set(category, (categories.get(category) || 0) + 1)
  })
  return categories
}
