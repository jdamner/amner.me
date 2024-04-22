import React from "react";

/* Components */
import Link, { type LinkProps } from "next/link";

export default function InlineLink(
  props: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement>,
) {
  return <Link className={InlineLinkClasses.join(" ")} {...props} />;
}

export const InlineLinkClasses = [
  "underline",
  "hover:text-slate-800",
  "hover:no-underline",
];
