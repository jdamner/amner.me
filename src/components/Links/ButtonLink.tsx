import Link from "next/link";
import { ButtonClasses } from "./Button";
import { useState } from "react";
import Spinner from "../Global/Spinner";
import { useRouter } from "next/router";
import { event } from "../../api/Insights";

export default function ButtonLink(props): JSX.Element {

	const [isClicked, setIsClicked] = useState(false);
	const router = useRouter();

	const handleClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
		event('click', { name: e.currentTarget.innerText });
		setIsClicked(true);
		router.events.on('routeChangeComplete', () => {
			setIsClicked(false);
		});
	}

	return (
		<Link className={ButtonClasses.join(' ')} {...props} onClick={handleClick}>
			{ isClicked ? 
				<Spinner className='text-center' /> : props.children }
		</Link>
	)
}