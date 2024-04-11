import type {GrayMatterFile, Input} from 'gray-matter';

export type Post = MdFile<string> & {
	title: string;
	date: Date;
	thumbnail: string;
}

export type PostLinkType = {
	title: string;
	thumbnail: string;
	slug: string;
}

export type MdFile<T extends Input = string> = GrayMatterFile<T> & {
	slug?: string,
}