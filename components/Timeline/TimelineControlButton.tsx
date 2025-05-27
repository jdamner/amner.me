import React from "react";

export default function TimelineControlButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { direction?: "left" | "right" },
) {
  const { direction = "left", ...rest } = props;

  const arrow =
    direction === "left" ? (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    ) : (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    );

  return (
    <button
      className="p-2 w-10 h-10 mx-3
                bg-orange-600 text-orange-100
                hover:bg-white hover:text-black
                hover:cursor-pointer
                disabled:opacity-50 disabled:cursor-default"
      {...rest}
    >
      {arrow}
    </button>
  );
}
