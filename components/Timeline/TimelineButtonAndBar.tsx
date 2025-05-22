import React from "react";

export default function TimelineButtonAndBar({
  last = false,
}: {
  last?: boolean;
}) {
  const buttonClasses = [
    "absolute",
    "w-4",
    "h-4",
    "mt-2.5",
    "-top-2.5",
    "bg-slate-900",
    "dark:bg-slate-400",
    "rounded-full",
  ];

  const barClasses = ["mt-1.5", "w-full", "h-1"];

  if (last) {
    barClasses.push(
      "bg-linear-to-r from-slate-300 to-transparent dark:from-slate-600",
    );
  } else {
    barClasses.push("bg-slate-300 dark:bg-slate-600");
  }
  return (
    <>
      <div className={barClasses.join(" ")} />
      <div className={buttonClasses.join(" ")} />
    </>
  );
}
