import React from "react";

/* Components */
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

  return <button {...newProps} />
}
