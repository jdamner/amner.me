/* API */
import { useReducedMotion } from "framer-motion"

/* Components */
import MotionButton from "./MotionButton";

/**
 * Tab Button 
 * 
 * @param {JSX.IntrinsicElements['button'] & { active: boolean }} props 
 * @returns {JSX.Element}
 */
export default function TabButton(props: JSX.IntrinsicElements['button'] & { active: boolean } ): JSX.Element {

    const classes = [
        "text-xl md:text-3xl font-bold mr-3 md:mr-0 group hover:underline",
        props.active ? "text-gray-900 dark:text-gray-300" : "text-gray-300 dark:text-gray-500"
    ]
    props.className && classes.push(props.className)

    props = {
        ...props,
        className: classes.join(' '),
    }

    // remove `active` prop
    delete props.active
    return useReducedMotion() ? 
        <button { ...props } /> :
        <MotionButton { ...props } />
}
