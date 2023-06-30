/* Types */
import type { WithChildren } from "../../types/WithChildren.type";

/**
 * Header 
 * @param {JSX.IntrinsicElements['section'] & WithChildren & { subtitle?: string } } props
 * @returns {JSX.Element}
 */
export default function Header(
    { subtitle, title, children } : JSX.IntrinsicElements['section'] & WithChildren & { subtitle?: string }
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
        'order-1',
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
            <div className='container mx-auto text-center py-5 px-3 md:px-0 flex flex-col'>
                <h1 className="font-sans text-4xl md:text-9xl font-black uppercase mb-5 order-2">{title}</h1>
                {subtitle && <h2 className={subtitleClasses.join(' ')}>
                    <span className={subtitleSpanClasses.join(' ')}></span>
                    <span className='my-3 md:basis-1/2'>{subtitle}</span>
                    <span className={subtitleSpanClasses.join(' ')}></span>
                </h2>}
                <span className="order-3">{children}</span>
            </div>
        </section>
    );
}
