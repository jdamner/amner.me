import Link from "next/link"
import InlineLink from "../Links/Inline";

export default function NavBar(props): JSX.Element {
	return (
		<nav className="w-full h-16 bg-gradient-to-r bg-emerald-900 text-slate-100 from-teal-900 to-emerald-600">
			<div className='container mx-auto h-full flex flex-row justify-between items-center px-3 md:px-0'>
				<ul>
					<li className="inline-block mr-3">
						<InlineLink href="/" className="text-xl font-bold">amner.me</InlineLink>
					</li>
				</ul>
				{props.children}
			</div>
		</nav>
	);
}
