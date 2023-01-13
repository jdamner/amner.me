/**
 * Helper functions for tests
 */
import type { post } from '../src/types/post.type';
import fs from 'fs'
import path from 'path'

export function getTestPost(): post { 
	return {
		layout: 'post',
		title: 'Test Post',
		slug: 'test-post',
		thumbnail: 'https://example.com/image.png',
		content: 'Test content',
		date: new Date(2023, 1, 1),
	} as post;
}

export function getTestPosts(): post[] { 
	return [
		getTestPost(),
		getTestPost(),
		getTestPost(),
	]
}

export function getPages(): string[] {
	const pages = [
		'index',
		'404',
	];
	const posts = fs.readdirSync(path.join(__dirname, '../content/posts'));
	posts.forEach((post) => {
		pages.push(`${post.replace('.md', '')}`);
	});
	
	return pages;
}
