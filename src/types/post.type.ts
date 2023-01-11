/**
 * Post type
 * 
 * @typedef {Object} post
 * @property {string|null} layout
 * @property {string|null} title
 * @property {Date|null} date
 * @property {string|null} thumbnail
 * @property {string|null} slug
 * @property {string|null} content
 */
export type post = {
	layout: string|null;
	title: string|null;
	date: Date|null;
	thumbnail: string|null;
	slug: string|null;
	content: string|null;
};	
