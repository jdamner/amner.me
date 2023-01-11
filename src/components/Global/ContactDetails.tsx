
import Title from "./Title";
import { EnvelopeOpenIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function ContactDetails(): JSX.Element {

	const [isMouseOver, setIsMouseOver] = useState(false);

	const enableMouseOver = () => {
		setIsMouseOver(true);
	}

	const disableMouseOver = () => {
		setIsMouseOver(false);
	}

	return (
		<section className='bg-white px-4 py-3 container mx-auto' id='contact'>
			<Title title="Contact Me">Say hello</Title>
			<div className='w-full gap-5 my-10 text-center'>
				<p className='my-5'>If you&apos;d like to get in touch, just send me an email by clicking the link below.</p>
				<Link href='mailto:jdamner@me.com' className="block bg-white border-2 px-3 py-2 rounded-sm font-bold border-solid border-slate-900 hover:bg-slate-100" onMouseEnter={enableMouseOver} onMouseLeave={disableMouseOver}>
					{isMouseOver ? <EnvelopeOpenIcon className='inline-block w-12 h-14' /> : <EnvelopeIcon className='inline-block w-12 h-14' />}
					Send an email
				</Link>
			</div>
		</section>
	)
}
