import fs from 'fs';
import { join } from 'path'
import matter from 'gray-matter'

const servicesDirectory = join(process.cwd(), 'src/services')

export function getServiceSlugs() {
  return fs.readdirSync(servicesDirectory)

}

export function getServiceBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(servicesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { ...data, content }
}

export function getAllServices(fields = []) {
  const slugs = getServiceSlugs()
  return slugs
    .map((slug) => getServiceBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}