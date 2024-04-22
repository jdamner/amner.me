import React from "react";

/* Components */
import Link, { type LinkProps } from "next/link";
import { ButtonClasses } from "./Button";

export default function ButtonLink(
  props: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement>,
) {
  return <Link className={ButtonClasses.join(" ")} {...props} />;
}
