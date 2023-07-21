import React from "react";
/* API */
import { useRouter } from "next/router";
import { event } from "../../api/Insights";
import { useState } from "react";

/* Components */
import Link from "next/link";
import Image from "next/image";
import Spinner from "../Global/Spinner";

/* Types */
import type { Post } from "../../types/Post.type";

/**
 * Post Link
 * 
 * @param {Post} post
 * @returns JSX.Element
 */
export default function PostLink({ post }: { post: Post }): React.JSX.Element {
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
		'block',
		'bg-white',
		'dark:bg-slate-900',
		// 'relative',
		// 'border-solid',
		'border-2',
		'border-slate-500',
	]

	const linkClasses = [
		'bg-slate-900',
		'group-hover:bg-slate-700',
		'px-2',
		'text-lg',
		'leading-loose',
		'text-center text-slate-100',
	];

	const thumbnail = require('../../../public' + post.thumbnail);

	return (
		<Link href={post.slug} className={classes.join(' ')} onClick={handleClick}>
			{isClicked ? <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm z-10 rounded-md">
				<Spinner className='flex items-center justify-center w-full h-full' />
			</div> : null}
			<Image
				src={thumbnail}
				alt={post.title}
				width={375}
				height={375}
				className="w-full brightness-90 dark:brightness:75 group-hover:brightness-105"
				placeholder="blur"
			/>
			<h2 className={linkClasses.join(' ')}>{post.title}</h2>
		</Link>
	)
}
