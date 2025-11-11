import React from "react";

/* Components */
import { ButtonClasses } from "./Button";

export default function ButtonLink(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
  },
) {
  return <a className={ButtonClasses.join(" ")} {...props} />;
}
