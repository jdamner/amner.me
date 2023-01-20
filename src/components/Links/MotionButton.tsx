/* API */
import { motion } from "framer-motion"
/* Types */
import type { MotionProps } from "framer-motion"

/**
 * Motion Button
 * 
 * Button where each letter is animated
 * 
 * @param {JSX.IntrinsicElements['button']} props
 * @returns JSX.Element
 */
export default function MotionButton(props: JSX.IntrinsicElements['button']): JSX.Element {

    const letters = props.children.toString().split('') as string[]
    // replace spaces with non-breaking spaces
    letters.forEach((letter, index) => {
        if (letter === ' ') {
            letters[index] = '\u00A0'
        }
    })

    return (
        <button {...props}>
            {letters.map((letter, index) => {
                const delay = props.tabIndex * 0.5 + index * 0.05
                const motionProps: MotionProps = {
                    style: {
                        display: 'inline-block',
                    },
                    whileInView: {
                        translateY: [0, -3, 0],
                        transition: {
                            duration: 0.45,
                            delay,
                        },
                    },
            
                }

                return <motion.span {...motionProps} className="group-hover:underline" key={index}>{letter}</motion.span>
            })
            }
        </button>
    )
}
