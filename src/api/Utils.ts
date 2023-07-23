/**
 * Helper functions
 */
import fs from 'fs'
import matter from 'gray-matter'
import type { MdFile } from '../types/MdFile.type'
import { join } from 'path'

/**
 * Makes an object JSON parseable
 * 
 * @param {any} obj The object to be parsed
 * @returns {any}
 */
export function makeJsonParseable<Type>(obj: Type): Type {
	return JSON.parse(JSON.stringify(obj)) as Type
}

/**
 * Reads a markdown file
 */
export async function readMdFile(filename: string, directory: string = 'content/'): Promise<MdFile> {
	const path = `${directory}/${filename}`
	const fullPath = `${process.cwd()}/${path}`
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const slug = filename.replace(/\.md$/, '')
	return {
		slug: slug,
		...matter(fileContents)
	}
}

/**
 * Reads all slugs from a directory
 * 
 * @param {string} directory The directory to read from
 * 
 * @returns {string[]}
 */
export function getFilesInDir(directory: string): string[] {
	const fullPath = join(process.cwd(), directory)
	return fs.readdirSync(fullPath)
}
