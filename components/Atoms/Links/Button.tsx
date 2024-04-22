import React from "react";

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
  "border-2 border-slate-500",
  "uppercase",
  "font-bold",
  "bg-white",
  "dark:bg-slate-900",
  "px-4",
  "py-2",
  "text-slate-800",
  "dark:text-slate-200",
  "hover:bg-slate-100",
  "dark:hover:bg-slate-800",
  "hover:text-black",
  "dark:hover:text-white",
];
