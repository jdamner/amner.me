import InlineLink from "../Links/Inline";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function NavBar({ children }: { children: JSX.Element | JSX.Element[] | string }): JSX.Element {
	return (
		<nav className="w-full h-16 bg-gradient-to-r bg-emerald-900 text-slate-100 from-teal-900 to-emerald-600
			dark:to-emerald-900 dark:text-slate-200 dark:from-teal-900
		" id='main-nav'>
			<div className='container mx-auto h-full flex flex-row justify-between items-center px-3 md:px-0'>
				<InlineLink href="/" title="home"><HomeIcon className="stroke-1 h-10" /></InlineLink>
				{children}
			</div>
		</nav>
	);
}
