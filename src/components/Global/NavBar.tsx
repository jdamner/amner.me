import React from "react";
/* Components */
import InlineLink from "../Links/Inline";
import { HomeIcon } from "@heroicons/react/24/solid";

/* Types */
import type { WithChildren } from "../../types/WithChildren.type";

/**
 * NavBar
 * 
 * @param {children} children
 * @returns {JSX.Element}
 */
export default function NavBar({ children }: WithChildren): React.JSX.Element {
	return (
		<nav className="w-full h-16 bg-gradient-to-r text-slate-100 from-slate-900 to-slate-700 dark:text-slate-200" id='main-nav'>
			<div className='container mx-auto h-full flex flex-row items-center px-3 md:px-0'>
				<div className=''>
					<InlineLink href="/" className="text-slate-100 hover:text-slate-300">
						<HomeIcon className="h-10" />
						<span className="sr-only">Home</span>
					</InlineLink>
				</div>
				<div className="ml-auto">
					{children}
				</div>
			</div>
		</nav>
	);
}
