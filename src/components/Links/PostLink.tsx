/* API */
import { useRouter } from "next/router";
import { event } from "../../api/Insights";
import { useState } from "react";

/* Components */
import Link from "next/link";
import Image from "next/image";
import Spinner from "../Global/Spinner";

/* Types */
import type { post } from "../../types/post.type";

/**
 * Post Link
 * 
 * @param {post} post
 * @returns JSX.Element
 */
export default function PostLink({ post }: { post: post }): JSX.Element {
	const [isClicked, setIsClicked] = useState(false);
	const router = useRouter();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		event('click', { event: e.currentTarget.innerText });
		setIsClicked(true);
		router.events.on('routeChangeComplete', () => {
			setIsClicked(false);
		});
	}

	const classes = [
		'group',
		'mb-3',
		'block',
		'rounded-md',
		'overflow-hidden',
		'w-full',
		'bg-white',
		'relative',
	]

	const linkClasses = [
		'bg-gradient-to-r',
		'from-teal-900',
		'to-emerald-600',
		'group-hover:from-emerald-700',
		'group-hover:to-teal-500',
		'shadow-slate-900',
		'px-4',
		'text-lg',
		'font-sans',
		'font-semibold',
		'tracking-tight',
		'leading-loose',
		'text-center',
		'text-white',
		'normal-case',
	];

	return (
		<Link href={post.slug} className={classes.join(' ')} onClick={handleClick}>
			{isClicked ? <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm z-10 rounded-md">
				<Spinner className='flex items-center justify-center w-full h-full' />
			</div> : null}
			<Image
				src={post.thumbnail}
				alt={post.title}
				sizes="(max-width: 640px) 100vw, 640px
					(max-width: 768px) 33vw, 768px
					(max-width: 1024px) 25vw, 1024px
					"
				width={375}
				height={375}
				className="w-full brightness-90 group-hover:brightness-105 transition"
			/>
			<h2 className={linkClasses.join(' ')}>{post.title}</h2>
		</Link>
	)
}
