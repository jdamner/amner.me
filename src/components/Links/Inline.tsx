/* API */
import { event } from "../../api/Insights";

/* Components */
import Link from "next/link"

/* Types */
import type { LinkProps } from "next/link";
import type { withChildren } from "../../types/children.type";

/**
 * InlineLink
 * 
 * @param {LinkProps & withChildren} props
 * @returns {JSX.Element}
 */
export default function InlineLink(props: LinkProps & withChildren ): JSX.Element {

	const handleClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
        event('click', { name: e.currentTarget.innerText });
		props.onClick && props.onClick(e);
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

