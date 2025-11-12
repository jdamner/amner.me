import React from "react";

import { font } from "@/utils/header-font";

export default function Title({ children }: React.PropsWithChildren) {
  const classes = [
    "tracking-tight",
    "uppercase",
    "text-6xl",
    "md:text-7xl",
    "lg:text-8xl",
    "text-orange-100",
    "mb-5",
  ];

  return <h2 className={classes.join(" ")} style={font.style}>{children}</h2>;
}
