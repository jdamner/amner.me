
import { join } from 'path'
import { getBySlug, getSlugs } from './GetData'

const postsDirectory = join(process.cwd(), 'src/posts')

export function getPostBySlug(slug, fields = []) {
  return getBySlug(slug, fields, postsDirectory)
}

export function getAllPosts(fields = []) {
  const slugs = getSlugs( postsDirectory )
  fields.push('date')
  return slugs
    .map((slug) => getBySlug(slug, fields, postsDirectory))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}