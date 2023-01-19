/* API */
import { motion, useReducedMotion } from "framer-motion";

/* Types */
import type { children } from "../../types/children.type";

/**
 * Title Component
 * 
 * @param {children, string} props
 * @returns {JSX.Element}
 */
export default function Title({ children, title }: { children?: children, title: string }): JSX.Element {

    const classes = [
        'text-lg',
        'font-sans',
        'font-semibold',
        'tracking-tight',
        'text-left',
        'font-black',
        'uppercase',
        'text-xl',
        'md:text-6xl',
        'break-words',
        'basis-1/3',
    ];

    const reducedMotion = useReducedMotion();

    return (
        <div className="flex flex-col md:flex-row md:items-end mb-5">
            <h3 className={classes.join(' ')}>{title}</h3>
            <div className='w-full text-left uppercase text-2xl font-black'>
                <div className='mb-2'>{ children }</div>
                
                <motion.div
                    className='bg-black h-2 w-full dark:bg-slate-300'
                    initial={{ maxWidth: reducedMotion ? '100%' : '0%'}}
                    viewport={{ once: true }}
                    whileInView={{ maxWidth: '100%' }}
                    transition={{ duration: 0.5 }}
                >
                </motion.div>
            </div>
        </div>
    );
}
