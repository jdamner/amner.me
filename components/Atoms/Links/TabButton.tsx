import React from "react";
/* API */
import { useReducedMotion } from "framer-motion";

/* Components */
import MotionButton from "./MotionButton";

export default function TabButton(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { active?: boolean; delay?: number },
) {
  const { active, ...rest } = props;
  const classes = [
    "text-xl md:text-3xl font-bold mr-3 md:mr-0 group hover:underline",
    active
      ? "text-gray-900 dark:text-gray-200"
      : "text-gray-600 dark:text-gray-400",
  ];

  const newProps = {
    ...rest,
    className: `${rest.className} ${classes.join(" ")}`,
  };

  return useReducedMotion() ? (
    <button {...newProps} />
  ) : (
    <MotionButton {...newProps} />
  );
}
