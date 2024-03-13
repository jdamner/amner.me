import type {GrayMatterFile} from 'gray-matter';

export type Post = MdFile & {
	title: string;
	date: Date;
	thumbnail: string;
}

export type PostLinkType = {
	title: string;
	thumbnail: string;
	slug: string;
}

export type MdFile = GrayMatterFile<string> & {
	slug?: string,
}