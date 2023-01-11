import { before, after } from "../../api/Utils";

export default function Title({ subtitle, title, children }: { subtitle?: string, title: string, children?: JSX.Element | JSX.Element[] | string }): JSX.Element {

    const beforeAfterClasses = [
        'content',
        'w-full',
        'bg-slate-900',
        'inline-block',
        'h-3',
    ];

    const subtitleClasses = [
        'font-sans',
        'text-lg',
        'md:text-xl',
        'font-black',
        'uppercase',
        'flex',
        'justify-center',
        'items-center',
        'w-full',
    ];

    return (
        <section id="title" className='bg-slate-200 py-5'>
            <div className='container mx-auto text-center py-5 px-3 md:px-0'>
                {subtitle && <h2 className={subtitleClasses.concat(before(beforeAfterClasses), after(beforeAfterClasses)).join(' ')}><span className='basis-1/2'>{subtitle}</span></h2>}
                <h1 className="font-sans text-4xl md:text-9xl font-black uppercase mb-5">{title}</h1>
                {children}
            </div>
        </section>
    );
}
