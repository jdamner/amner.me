import { type ComponentProps } from "react";

/* Components */
import { ButtonClasses } from "./Button";
import { Link } from "react-router";

export default function ButtonLink(
  props: ComponentProps<typeof Link>
) {
  return <Link className={ButtonClasses.join(" ")} {...props} />;
}
