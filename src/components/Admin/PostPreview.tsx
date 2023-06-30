import React from "react";
import type { PreviewTemplateComponentProps } from "netlify-cms-core";
import type { Post } from "../../types/Post.type";

import Template from "../../pages/[slug]";

export default function PostPreview({ entry }: PreviewTemplateComponentProps): React.JSX.Element {

	const data = entry.getIn(['data']).toJS();
	const post: Post = {
		title: data.title as string,
		date: data.date as Date,
		thumbnail: data.thumbnail as string,
		content: data.body as string,
		slug: data.slug as string,
		data: [],
		orig: '',
		language: '',
		matter: '',
		stringify: () => data.body,
	};

	return <Template post={post} posts={[]} />;
}
