/**
 * Helper functions for tests
 */
import fs from 'fs'
import path from 'path'

export function getPages(): string[] {
	const pages = [
		'index',
		'404',
		'cv',
	];
	const posts = fs.readdirSync(path.join(__dirname, '../content/posts'));
	posts.forEach((post) => {
		pages.push(`${post.replace('.md', '')}`);
	});
	
	return pages;
}
