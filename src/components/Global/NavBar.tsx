/* Components */
import InlineLink from "../Links/Inline";
import { HomeIcon } from "@heroicons/react/24/outline";

/* Types */
import type { children } from "../../types/children.type";

/**
 * NavBar
 * 
 * @param {children} children
 * @returns {JSX.Element}
 */
export default function NavBar({ children }: { children? : children }): JSX.Element {
	return (
		<nav className="w-full h-16 bg-gradient-to-r bg-emerald-900 text-slate-100 from-teal-900 to-emerald-600 dark:to-emerald-900 dark:text-slate-200 dark:from-teal-900" id='main-nav'>
			<div className='container mx-auto h-full flex flex-row items-center px-3 md:px-0'>
				<div className='hidden md:block'>
					<InlineLink href="/"><HomeIcon className="stroke-1 h-10" /></InlineLink>
				</div>
				<div className="ml-auto">
					{children}
				</div>
			</div>
		</nav>
	);
}
