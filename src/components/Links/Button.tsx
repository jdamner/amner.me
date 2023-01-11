export default function Button(props: any): JSX.Element {
	return (
		<button className={ButtonClasses.join( ' ' ) } {...props} >
			{props.children}
		</button>
	);
}

export const ButtonClasses = [
	'border-solid',
	'border-2',
	'border-slate-800',
	'uppercase',
	'font-black',
	'font-sans',
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