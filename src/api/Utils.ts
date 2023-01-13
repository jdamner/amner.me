/**
 * Helper functions
 */
import fs from 'fs'
import matter from 'gray-matter'
import type { MDFile } from '../types/mdfile.type'
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
 * 
 * @param {string} path The path to the file
 * 
 * @returns {Promise<MDFile>} The file contents
 */
export async function readMdFile(path: string): Promise<MDFile> {
	const fullPath = `${process.cwd()}/${path}`
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	return matter(fileContents)
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