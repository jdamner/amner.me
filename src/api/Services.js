import { join } from 'path'
import { getBySlug, getSlugs } from './GetData'

const servicesDirectory = join(process.cwd(), 'src/services')

export function getAllServices(fields = []) {
  const slugs = getSlugs( servicesDirectory )
  return slugs
    .map((slug) => getBySlug(slug, fields, servicesDirectory))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}