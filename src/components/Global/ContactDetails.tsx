import React from "react";
/* API */
import { useState } from "react";

/* Components */
import Title from "./Title";
import { EnvelopeOpenIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import ProtectedLink from "../Links/ProtectedLink";

/**
 * Contact Details
 * @returns {JSX.Element}
 */
export default function ContactDetails(): React.JSX.Element {

	const [isMouseOver, setIsMouseOver] = useState(false);

	const enableMouseOver = () => {
		setIsMouseOver(true);
	}

	const disableMouseOver = () => {
		setIsMouseOver(false);
	}

	const IconClass = 'inline-block w-12 h-12 mr-3'

	return (
		<section className='px-4 py-3 container mx-auto' id='contact'>
			<Title title="Contact Me">Say hello</Title>
			<div className='w-full gap-5 my-10 text-center'>
				<p className='my-5'>If you&apos;d like to get in touch, just send me an email by clicking the link below.</p>
				<ProtectedLink href='mailto:jdamner@me.com' className="block bg-white dark:bg-slate-800 border-2 px-3 py-2 rounded-sm font-bold border-solid border-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700" onMouseEnter={enableMouseOver} onMouseLeave={disableMouseOver}>
					{isMouseOver ? <EnvelopeOpenIcon className={IconClass} /> : <EnvelopeIcon className={IconClass} />}
					Send an email
				</ProtectedLink>
			</div>
		</section>
	)
}
