import fs from 'fs';
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'src/posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)

}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }

    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (field === 'thumbnail') {
      items[field] = data[field]
    }

    if (field === 'date') {
      let dateObj = typeof data[field] === 'Date' ? data[field] : new Date(data[field])
      items[field] = dateObj.toISOString()
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  fields.push('date')
  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}