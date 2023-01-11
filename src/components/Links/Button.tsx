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
	'px-4',
	'py-2',
	'text-slate-800',
	'hover:bg-slate-100',
	'hover:text-black'
];