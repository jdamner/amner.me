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
export default function Title({ children, title }: WithChildren & { title?: string }): JSX.Element {

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
        <TwoThirds first={title && <h2 className={classes.join(' ')}>{title}</h2>}>
            {children && <>
                <div className='w-full text-left uppercase text-2xl font-black'>
                    <div className='mb-2'>{children}</div>
                    <motion.div
                        className='bg-black h-2 w-full dark:bg-slate-300'
                        initial={{ maxWidth: reducedMotion ? '100%' : '0%' }}
                        viewport={{ once: true }}
                        whileInView={{ maxWidth: '100%' }}
                        transition={{ duration: 0.5 }}
                    >
                    </motion.div>
                </div>
            </>
            }
        </TwoThirds>
    );
}
