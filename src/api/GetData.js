import fs from 'fs';
import { join } from 'path'
import matter from 'gray-matter'


export function getSlugs(directory) {
	return fs.readdirSync(directory)

}

export function getBySlug(slug, fields = [], directory) {
	const realSlug = slug.replace(/\.md$/, '')
	const fullPath = join(directory, `${realSlug}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const { data, content } = matter(fileContents)

	const items = {}

	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug
		}
		if (field === 'content') {
			items[field] = content
		}
		if (typeof data[field] !== 'undefined') {
			items[field] = data[field]
		}

		if (field === 'thumbnail') {
			items[field] = data[field]
		}

		if (field === 'date') {
			let dateObj = typeof data[field] === 'Date' ? data[field] : new Date(data[field])
			items[field] = dateObj.toISOString()
		}
	});

	return items
}