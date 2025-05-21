import React from "react";
/* API */
import { useReducedMotion } from "framer-motion";

/* Components */
import MotionButton from "./MotionButton";
import { ButtonClasses } from "./Button";
import clsx from "clsx";

export default function TabButton(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { active?: boolean; delay?: number },
) {
  const { active, ...rest } = props;

  const newProps = {
    ...rest,
    className: clsx(...ButtonClasses, props.className, "mb-1", {
      "bg-orange-100 text-black": active,
    }),
  };

  return useReducedMotion() ? (
    <button {...newProps} />
  ) : (
    <MotionButton {...newProps} />
  );
}
