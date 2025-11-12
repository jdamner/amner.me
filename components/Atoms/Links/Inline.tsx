import React from "react";

export default function InlineLink(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
  },
) {
  return <a className={InlineLinkClasses.join(" ")} {...props} />;
}

export const InlineLinkClasses = [
  "underline",
  "hover:text-orange-600",
  "hover:no-underline",
];
