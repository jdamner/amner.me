import { MdFile } from "./MdFile.type";

export interface Post extends MdFile {
	title: string;
	date: Date;
	thumbnail: string;
}

export interface PostLinkType {
	title: string;
	thumbnail: string;
	slug: string;
}