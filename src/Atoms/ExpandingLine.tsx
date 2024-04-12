'use client'
import React from "react";
/* API */
import { HTMLMotionProps, motion, useReducedMotion } from "framer-motion";

export default function ExpandingLine(props: HTMLMotionProps<'div'>) {
    const reducedMotion = useReducedMotion();
    const classes = [
        'bg-slate-800',
        'dark:bg-slate-300',
        'h-1',
        'w-full',
    ];
    return <motion.div
            className={classes.join(' ')}
            initial={{ maxWidth: reducedMotion ? '100%' : '0%' }}
            viewport={{ once: true }}
            whileInView={{ maxWidth: '100%' }}
            transition={{ duration: 0.5 }}
            { ...props }
        >
        </motion.div>
}