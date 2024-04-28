"use client";

import React from "react";

/* Components */
import Link from "next/link";
import Image from "next/image";

/* Types */
import type { PostLinkType } from "../../../types";

/**
 * Post Link
 *
 * @param {Post} post
 * @return JSX.Element
 */
export default function PostLink({
  thumbnail,
  title,
  slug,
}: PostLinkType): React.JSX.Element {
  const classes = [
    "group",
    "block",
    "bg-white",
    "dark:bg-slate-900",
    "border-2",
    "border-slate-500",
  ];

  const linkClasses = [
    "bg-slate-900",
    "group-hover:bg-slate-700",
    "px-2",
    "text-lg",
    "leading-loose",
    "text-center text-slate-100",
  ];

  return (
    <Link href={slug} className={classes.join(" ")}>
      <Image
        src={thumbnail}
        alt={""}
        width={375}
        height={375}
        className="w-full brightness-90 dark:brightness:75 group-hover:brightness-105"
      />
      <h2 className={linkClasses.join(" ")}>{title}</h2>
    </Link>
  );
}
