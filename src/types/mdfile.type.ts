import matter from 'gray-matter';

export interface MdFile extends matter.GrayMatterFile<string> {
	slug?: string,
};
