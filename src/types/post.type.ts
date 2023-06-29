/**
 * Post type
 * 
 * @property {string} layout
 * @property {string} title
 * @property {Date} date
 * @property {string} thumbnail
 * @property {string} slug
 * @property {string} content
 */
export type post = {
	layout?: string;
	title?: string;
	date?: Date;
	thumbnail?: string;
	slug?: string;
	content?: string;
};

export function isPost(object: any): object is post {
	return 'layout' in object && 
		'title' in object && 
		'date' in object && 
		'thumbnail' in object && 
		'slug' in object && 
		'content' in object
}