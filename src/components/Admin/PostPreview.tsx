import type { PreviewTemplateComponentProps } from "netlify-cms-core";
import type { post } from "../../types/post.type";

import Template from "../../pages/[slug]";

export default function PostPreview({ entry, fieldsMetaData, widgetFor }: PreviewTemplateComponentProps): JSX.Element {

	const data = entry.getIn(['data']).toJS();
	const post: post = {
		title: data.title as string,
		date: data.date as Date,
		thumbnail: data.thumbnail as string,
		content: data.body as string,
	};

	return <Template post={post} posts={[]} />;
}