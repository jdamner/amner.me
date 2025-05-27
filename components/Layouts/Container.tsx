import clsx from "clsx";
import React from "react";

export default function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  const newProps = {
    ...rest,
    className: clsx("container mx-auto", className),
  };
  return <div {...newProps} />;
}
