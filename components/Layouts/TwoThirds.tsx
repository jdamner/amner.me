import React from "react";

export default function TwoThirds({
  top = false,
  first,
  children,
}: {
  children?: React.ReactNode;
  top?: boolean;
  first?: React.ReactNode | React.ReactNode[];
}) {
  const classList = ["flex", "flex-col", "md:flex-row", "mb-5", "gap-5"];

  if (top) {
    classList.push("md:items-stretch");
  } else {
    classList.push("md:items-end");
  }

  return (
    <div className={classList.join(" ")}>
      <div className="basis-1/3">{first}</div>
      <div className="w-full">{children}</div>
    </div>
  );
}
