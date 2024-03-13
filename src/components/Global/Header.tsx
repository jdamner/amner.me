import React from "react";
import ExpandingLine from "./ExpandingLine";

export default function Header(
    props : React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>,HTMLDivElement> & { title: string, subtitle?: string }
) {
    const { subtitle, title, children, ...rest } = props;
    const subtitleClasses = [
        'font-sans',
        'text-md',
        'font-black',
        'justify-stretch',
        'items-center',
        'w-full',
        'order-1',
        'flex-col',
        'mb-5',
        'hidden',
        'md:text-xl',
        'md:flex',
        'md:flex-row',
    ];

    return (
        <section id="header" className='bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-300 py-10' { ...rest }>
            <div className='container mx-auto text-center py-5 px-3 md:px-0 flex flex-col'>
                <h1 className="font-sans text-5xl md:text-9xl font-black uppercase mb-5 order-2">{title}</h1>
                {subtitle && <h2 className={subtitleClasses.join(' ')}>
                    <ExpandingLine />
                    <span className='my-3 basis-3/4 grow px-5'>{subtitle}</span>
                    <ExpandingLine />
                </h2>}
                <span className="order-3">{children}</span>
            </div>
        </section>
    );
}
