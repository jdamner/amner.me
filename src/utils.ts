/**
 * Helper functions
 */
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { slug } from 'github-slugger'

import type { ReactNode } from 'react'
import type { MdFile } from './types'

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
	return {
		slug: slug(filename.replace(/\.md$/, '')),
		...matter(fileContents),
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

/**
 * Converts all headings in a markdown file to have IDs 
 * Converts 
 * ## Heading 1 
 * to become
 * ## Heading 1{#heading-1}
 * 
 * @param {string} markdown The markdown to convert
 * 
 * @returns {string}
 */
export function convertHeadingsToAnchorLinks(markdown: string): string {
	return markdown.replace(/(#{1,6})\s(.+)\n/gm, (match, p1, p2) => {
		return `${p1} ${p2}{#${slug(p2)}}\n`
	})
}


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