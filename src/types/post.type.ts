/**
 * Post type
 * 
 * @typedef {Object} post
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
