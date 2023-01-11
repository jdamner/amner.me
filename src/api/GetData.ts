/* API */
import { readMdFile, getFilesInDir } from './Utils';
import { join } from 'path';

/* Types */
import type { post } from '../types/post.type'

/**
 * Posts directory
 * 
 * @type {string}
 */
export const postsDirectory: string = 'content/posts'

/**
 * Services directory
 * 
 * @type {string}
 */
const servicesDirectory: string = 'content/services'

/**
 * Gets a post by slug
 * 
 * @param {string} slug The slug of the post
 * @param {string} directory The directory to read from
 * 
 * @returns {Promise<post>}
 */
export async function getData(slug: string, directory: string): Promise<post> {
	const realSlug = slug.replace(/\.md$/, '')
	const filePath = join(directory, `${realSlug}.md`)
	const { data, content } = await readMdFile(filePath)

	return {
		layout: data['layout'] || null,
		title: data['title'] || null,
		date: new Date(data['date']),
		thumbnail: data['thumbnail'] || null,
		slug: realSlug,
		content: content,
	} as post;
}

/**
* Gets all Posts
* 
* @returns {Promise<post[]>}
*/
export async function getAllPosts(sortCallback = (post1, post2) => (post1.date > post2.date ? -1 : 1)): Promise<post[]> {
	let slugs = getFilesInDir(postsDirectory)
	let posts = slugs.map((slug) => getData(slug, postsDirectory))
	return Promise.all(posts).then((posts) => posts.sort(sortCallback))
}

/**
* Gets all services
* 
* @returns {Promise<post[]>}
*/
export async function getAllServices(): Promise<post[]> {
	let slugs = getFilesInDir(servicesDirectory)
	return Promise.all(slugs.map((slug) => getData(slug, servicesDirectory)))
}