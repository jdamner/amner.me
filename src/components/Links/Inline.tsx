import Link from "next/link"
import { event } from "../../api/Insights";

export default function InlineLink(props): JSX.Element {

	const handleClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
        event('click', { name: e.currentTarget.innerText });
    }

	return (
		<Link className={ InlineLinkClasses.join( ' ' ) } {...props} onClick={handleClick} >{props.children}</Link>
	)
}

export const InlineLinkClasses = [
	'underline',
	'hover:text-slate-800',
	'hover:no-underline'
];

