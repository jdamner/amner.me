import { type ComponentProps } from "react";
import { Link } from "react-router";

export default function InlineLink(
  props: ComponentProps<typeof Link>
) {
  return <Link className={InlineLinkClasses.join(" ")} {...props} />;
}

export const InlineLinkClasses = [
  "underline",
  "hover:text-orange-600",
  "hover:no-underline",
];
