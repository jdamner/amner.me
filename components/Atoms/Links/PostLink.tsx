"use client";

import React from "react";

/* Components */
import Link from "next/link";
import Image from "next/image";

/* Types */
import type { PostLinkType } from "../../../types";
import Title from "../Title";

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
  return (
    <Link
      href={slug}
      className="group flex flex-col-reverse md:flex-row bg-slate-200 p-5 border-4 border-slate-200 dark:border-slate-900 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 transition-all duration-100 ease-in-out"
    >
      <Title reverse>{title}</Title>
      <Image
        src={thumbnail}
        alt={""}
        width={320}
        height={160}
        className="border-4 h-30 w-80 object-cover border-slate-800 dark:border-slate-300 brightness-90 dark:brightness:75 group-hover:brightness-105 bg-white dark:bg-slate-900 transition-all duration-100 ease-in-out"
      />
    </Link>
  );
}
