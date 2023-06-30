import { MdFile } from "./MdFile.type";

export interface Post extends MdFile {
	title: string;
	date: Date;
	thumbnail: string;
}
