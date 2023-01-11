import parse from 'html-react-parser';

export default function Html(props: { content: string, className?: string }): JSX.Element {
	return (
		<div className="prose mx-auto px-3 md:px-0 prose-slate dark:prose-invert" {...props}>
			{parse(props.content)}
		</div>
	);
}
