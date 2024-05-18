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

export const fetchTags = async () => {}

export const fetchCategories = async () => {}
