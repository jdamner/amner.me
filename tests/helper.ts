/**
 * Helper functions for tests
 */
import type { post } from '../src/types/post.type';

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
