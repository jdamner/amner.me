/* API */
import { useState } from "react";
import { useRouter } from "next/router";
import { event } from "../../api/Insights";

/* Components */
import Spinner from "../Global/Spinner";
import Link from "next/link";

/* Types */
import type { LinkProps } from "next/link"
import type { withChildren } from "../../types/children.type";
import { ButtonClasses } from "./Button";

/**
 * Button Link
 * 
 * @param {LinkProps & withChildren} props
 * @returns {JSX.Element} 
 */
export default function ButtonLink(props : LinkProps & withChildren): JSX.Element {

	const [isClicked, setIsClicked] = useState(false);

	const router = useRouter()

	const handleClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
		event('click', { name: e.currentTarget.innerText });
		setIsClicked(true);
		router.events.on('routeChangeComplete', () => {
			setIsClicked(false);
		});
	}

	return (
		<Link className={ButtonClasses.join(' ')} {...props} onClick={handleClick}>
			{ isClicked ? <Spinner className='text-center' /> : props.children }
		</Link>
	)
}