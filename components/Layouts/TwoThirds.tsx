import React from "react";

export default function TwoThirds({
  first,
  children,
}: {
  children?: React.ReactNode;
  first?: React.ReactNode | React.ReactNode[];
}) {
  const classList = [
    "flex",
    "flex-col",
    "md:flex-row",
    "mb-5",
    "gap-5 md:items-stretch",
  ];

  return (
    <div className={classList.join(" ")}>
      <div className="basis-1/3">{first}</div>
      <div className="w-full">{children}</div>
    </div>
  );
}
