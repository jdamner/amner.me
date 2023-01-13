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
export function makeJsonParseable( obj: any ) {
  return JSON.parse( JSON.stringify( obj ) )
}

/**
 * Before classes
 * 
 * @param {string[]} classes
 * 
 * @returns {string[]}
 */
export function before( classes: string[] ): string[] {
  return classes.map( ( c ) => `before:${c}` )
}

/**
 * After classes
 * 
 * @param {string[]} classes
 * 
 * @returns {string[]}
 */
export function after( classes: string[] ): string[] {
  return classes.map( ( c ) => `after:${c}` )
}

/**
 * Dark mode classes
 * 
 * @param {string[]} classes
 * 
 * @returns {string[]}
 */
export function dark( classes: string[] ): string[] {
  return classes.map( ( c ) => `dark:${c}` )
}

/**
 * Reads a markdown file
 * 
 * @param {string} path The path to the file
 * 
 * @returns {Promise<MDFile>} The file contents
 */
export async function readMdFile( path: string ): Promise<MDFile> {
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
export function getFilesInDir(directory:string): string[] {
	const fullPath = join(process.cwd(), directory)
	return fs.readdirSync(fullPath)
}