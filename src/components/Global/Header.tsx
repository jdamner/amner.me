/* Types */
import type { withChildren } from "../../types/children.type";

/**
 * Header 
 * @param {JSX.IntrinsicElements['section'] & withChildren & { subtitle?: string } } props
 * @returns {JSX.Element}
 */
export default function Header(
    { subtitle, title, children } : JSX.IntrinsicElements['section'] & withChildren & { subtitle?: string }
): JSX.Element {

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

    const subtitleSpanClasses = [
        'inline-block',
        'bg-slate-900',
        'dark:bg-slate-200',
        'h-2',
        'last:rotate-180',
        'grow',
        'hidden',
        'md:block',
        'w-1',
        'md:w-full',
    ]

    return (
        <section id="header" className='bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-300 py-5'>
            <div className='container mx-auto text-center py-5 px-3 md:px-0'>
                {subtitle && <h2 className={subtitleClasses.join(' ')}>
                    <span className={subtitleSpanClasses.join(' ')}></span>
                    <span className='my-3 md:basis-1/2'>{subtitle}</span>
                    <span className={subtitleSpanClasses.join(' ')}></span>
                </h2>}
                <h1 className="font-sans text-4xl md:text-9xl font-black uppercase mb-5">{title}</h1>
                {children}
            </div>
        </section>
    );
}
