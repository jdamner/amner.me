/* API */
import { readMdFile, getFilesInDir } from './utils';

/* Types */
import type { Post, MdFile } from './types'

const postsDirectory: string = 'content/posts'
const servicesDirectory: string = 'content/services'
const projectsDirectory: string = 'content/cv/projects'
const referencesDirectory: string = 'content/cv/references'
const employmentDirectory: string = 'content/cv/employment'
const educationDirectory: string = 'content/cv/education'

/**
 * Gets all files in a directory
 * @param {string} directory The directory to get files from
 * 
 * @returns {Promise<MdFile[]>} A promise that resolves to an array of MDFiles
 */
async function getAllInDirectory(directory: string): Promise<MdFile[]> {
	return Promise.all(
		getFilesInDir(directory).map(async (filename) => await readMdFile(filename, directory))
	)
}

/**
* Gets all Posts
* 
* @returns {Promise<Post[]>}
*/
export async function getAllPosts(): Promise<Post[]> {
	let files = await getAllInDirectory(postsDirectory)
	return files.map((file) => {
		return {
			title: file.data['title'] || null,
			date: new Date(file.data['date']),
			thumbnail: file.data['thumbnail'] || null,
			...file
		} as Post
	}).sort((post1, post2) =>
		(post1.date > post2.date ? -1 : 1)
	)
}

/**
* Gets all services
* 
* @returns {Promise<Post[]>}
*/
export async function getAllServices(): Promise<MdFile[]> {
	return getAllInDirectory(servicesDirectory)
}

/**
 * Gets all CV projects
 * 
 * @returns {Promise<Post[]>}
 */
export async function getAllProjects(): Promise<MdFile[]> {
	return getAllInDirectory(projectsDirectory)
}

/**
 * Gets all CV references
 * 
 * @returns {Promise<Post[]>}
 */
export async function getAllReferences(): Promise<MdFile[]> {
	return getAllInDirectory(referencesDirectory)
}

/**
 * Gets all CV employment
 * 	
 * @returns {Promise<Post[]>}
 */
export async function getAllEmployment(): Promise<MdFile[]> {
	return getAllInDirectory(employmentDirectory)
}

/**
 * Gets all CV education
 * 
 * @returns {Promise<Post[]>}
 */
export async function getAllEducation(): Promise<MdFile[]> {
	return getAllInDirectory(educationDirectory)
}
