import React from "react";
/* API */
import { motion, useReducedMotion } from "framer-motion";

/* Types */
import type { WithChildren } from "../../types/WithChildren.type";
import TwoThirds from "../Layouts/TwoThirds";

/**
 * Title Component
 * 
 * @param {children, string} props
 * @returns {JSX.Element}
 */
export default function Title({ children, title }: WithChildren & { title?: string }): React.JSX.Element {

    const classes = [
        'text-lg',
        'font-sans',
        'font-semibold',
        'tracking-tight',
        'text-left',
        'font-slate-800',
        'uppercase',
        'text-5xl',
        'md:text-6xl',
        'break-words',
        'basis-1/3',
    ];

    const reducedMotion = useReducedMotion();

    const ChildComponent = <div className='w-full text-left  text-2xl font-black'>
            {children}
            <motion.div
                className='bg-slate-800 h-1 w-full dark:bg-slate-300'
                initial={{ maxWidth: reducedMotion ? '100%' : '0%' }}
                viewport={{ once: true }}
                whileInView={{ maxWidth: '100%' }}
                transition={{ duration: 0.5 }}
            >
            </motion.div>
        </div>

    return (
        title ? 
        <TwoThirds first={<h2 className={classes.join(' ')}>{title}</h2>}>
            {children && ChildComponent}
        </TwoThirds> : 
        children && ChildComponent
    );
}
