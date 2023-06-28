/* API */
import { useState } from "react";
import { useRouter } from "next/router";
import { event } from "../../api/Insights";

/* Components */
import Spinner from "../Global/Spinner";
import Link from "next/link";
import { ButtonClasses } from "./Button";

/* Types */
import type { LinkProps } from "next/link"
import type { WithChildren } from "../../types/children.type";
import type { NextRouter } from "next/router";

/**
 * Button Link
 * 
 * @param {LinkProps & WithChildren} props
 * @returns {JSX.Element} 
 */
export default function ButtonLink(props : LinkProps & WithChildren): JSX.Element {

	const [isClicked, setIsClicked] = useState(false);


	let router: NextRouter|null = null;
	router = useRouter()

	const handleClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
		event('click', { name: e.currentTarget.innerText });
		setIsClicked(true);
		router?.events.on('routeChangeComplete', () => {
			setIsClicked(false);
		});
	}

	return (
		<Link className={ButtonClasses.join(' ')} {...props} onClick={handleClick}>
			{ isClicked ? <Spinner className='text-center' /> : props.children }
		</Link>
	)
}