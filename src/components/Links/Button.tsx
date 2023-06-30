import React from "react";
/**
 * Button 
 * 
 * @param {JSX.IntrinsicElements['button']} props
 * @returns {JSX.Element}
 */
export default function Button(props: React.JSX.IntrinsicElements['button']): React.JSX.Element {

	const classes = ButtonClasses;
	props.className && classes.push(props.className);
	return (
		<button {...props} className={ButtonClasses.join(' ')} >
			{props.children}
		</button>
	);
}

/**
 * Button Classes
 * 
 * @type {string[]}
 */
export const ButtonClasses: string[] = [
	'border-2 border-slate-500',
	'uppercase',
	'font-bold',
	'bg-white',
	'dark:bg-slate-900',
	'px-4',
	'py-2',
	'text-slate-800',
	'dark:text-slate-200',
	'hover:bg-slate-100',
	'dark:hover:bg-slate-800',
	'hover:text-black',
	'dark:hover:text-white'
];