import { motion } from "framer-motion";

export default function Title({ subtitle, title, children }: { subtitle?: string, title: string, children?: JSX.Element | JSX.Element[] | string }): JSX.Element {

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

    const motionProps = {
        initial: { maxWidth: 0 },
        viewport: { once: true },
        whileInView: { maxWidth: '100%' },
        transition: { duration: 1 },
        className: [
            'content',
            'w-full',
            'inline-block',
            'bg-slate-900',
            'dark:bg-slate-200',
            'h-2',
            'last:rotate-180',
            'grow',
            'hidden',
            'md:block',
        ].join(' '),
    }

    return (
        <section id="title" className='bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-300 py-5'>
            <div className='container mx-auto text-center py-5 px-3 md:px-0'>
                {subtitle && <h2 className={subtitleClasses.join(' ')}>
                    <motion.span { ...motionProps }></motion.span>
                    <span className='basis-1/2'>{subtitle}</span>
                    <motion.span { ...motionProps }></motion.span>
                </h2>}
                <h1 className="font-sans text-4xl md:text-9xl font-black uppercase mb-5">{title}</h1>
                {children}
            </div>
        </section>
    );
}
