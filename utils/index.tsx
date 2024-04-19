/* External Deps */
import { readFileSync, readdirSync} from 'fs'
import { resolve } from 'path';
import matter from 'gray-matter'
import { slug } from 'github-slugger'

/* Components */
import { Markdown } from '@/components/Markdown';

/* Types */
import type { ReactNode } from 'react'
import type { Post, MdFile } from '../types'

/* Constants */
const postsDirectory: string = resolve('content/blog/');
const servicesDirectory: string = resolve('content/services');
const cvDirectory: string = resolve('content/cv');
const projectsDirectory: string = resolve(cvDirectory, 'projects');
const referencesDirectory: string = resolve(cvDirectory, 'references');
const employmentDirectory: string = resolve(cvDirectory, 'employment');
const educationDirectory: string = resolve(cvDirectory, 'education');

/**
 * Gets all files in a directory
 */
export const getAllInDirectory = async (directory: string) => Promise.all(
	getFilesInDir(directory).map(async (filename): Promise<MdFile> => await useReadMdFile(filename, directory))
)

/**
 * Reads a markdown file
 */
export async function useReadMdFile(filename: string, directory: string = 'content/'): Promise<MdFile> {
	const fileContents = readFileSync(`${directory}/${filename}`, 'utf8')
	const { content, data } = matter(fileContents)

	return {
		data,
		slug: slug(filename.replace(/\.mdx$/, '')),
		content: <Markdown>{content}</Markdown>,
	} as MdFile
}

/**
 * Reads all slugs from a directory
 */
export const getFilesInDir = (directory: string) => readdirSync(directory)


/**
 * Converts all headings in a markdown file to have IDs 
 * Converts 
 * ## Heading 1 
 * to become
 * ## Heading 1{#heading-1}
 */
export const convertHeadingsToAnchorLinks = (markdown: string) => markdown
	.replace(
		/(#{1,6})\s(.+)\n/gm, 
		(match, p1, p2) => `${p1} ${p2}{#${slug(p2)}}\n`
	)


/**
 * Converts a react node to a slug
 * 
 * Usually the value is a string, but sometimes it contains
 * a `<code>` element, which is a react node. This function
 * converts the value to a string.
 */
export function makeSlug(value: ReactNode | ReactNode[]): string {
	if (! Array.isArray(value)) return slug(value?.toString() ?? '');
	return slug(
		value.map((node) => {
			if (typeof node === 'string' ||
				typeof node === 'number' ||
				typeof node === 'boolean'
			) return node;

			if (typeof node === 'object' && node !== null && 'props' in node) {
				return makeSlug(node.props.children)
			}

			return ''
		}).join('')
	)
}
/**
* Gets all Posts
*/
export const useAllPosts = async () => (
	await getAllInDirectory(postsDirectory))
		.map((file): Post => ({
			title: file.data.title || null,
			date: new Date(file.data.date),
			thumbnail: file.data.thumbnail,
			...file
		}))
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1)
)

export const useAllServices = async () => getAllInDirectory(servicesDirectory);
export const getAllProjects = async () => getAllInDirectory(projectsDirectory);
export const useAllReferences = async () => getAllInDirectory(referencesDirectory);
export const useAllEmployment = async () => getAllInDirectory(employmentDirectory);
export const useAllEducation = async () => getAllInDirectory(educationDirectory);

