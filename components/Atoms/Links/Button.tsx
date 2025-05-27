import React from "react";

import { font } from "utils/header-font";

export default function Button(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
) {
  const newProps = {
    ...props,
    className: `${props.className} ${ButtonClasses.join(" ")}`,
  };
  return <button {...newProps} />;
}

/**
 * Button Classes
 *
 * @type {string[]}
 */
export const ButtonClasses: string[] = [
  "inline-block",
  "border-2",
  "border-orange-600",
  "bg-orange-600",
  "text-black",
  "uppercase",
  "text-2xl",
  "font-black",
  "px-4",
  "py-2",
  "hover:bg-orange-100",
  "hover:text-orange-600",
  "hover:border-orange-600",
  font.className,
];
