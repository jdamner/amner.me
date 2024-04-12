'use client'
import React from "react";
/* API */
import { motion } from "framer-motion"
/* Types */
import type { MotionProps } from "framer-motion"

export default function MotionButton(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { delay?: number }) {

    const letters = props.children?.toString().split('').map(
        (letter) => letter.replace(/\s/g, '\u00A0')
    ) ?? []

    return (
        <button {...props}>
            {letters.map((letter, index) => {
                const delay = props.delay + index * 0.05
                const motionProps: MotionProps = {
                    whileInView: {
                        translateY: [0, -3, 0],
                        transition: {
                            duration: 0.45,
                            delay,
                        },
                    },
                }
                return <motion.span {...motionProps} className="group-hover:underline inline-block" key={index}>{letter}</motion.span>
            })}
        </button>
    )
}
