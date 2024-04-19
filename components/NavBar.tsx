import React from "react";
/* Components */
import { HomeIcon } from "@heroicons/react/24/solid";
import InlineLink from "./Atoms/Links/Inline";

export default function NavBar(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
) {
  const { children, ...rest } = props;
  return (
    <nav
      className="w-full h-16 bg-gradient-to-r text-slate-100 from-slate-900 to-slate-700 dark:text-slate-200"
      id="main-nav"
      {...rest}
    >
      <div className="container mx-auto h-full flex flex-row items-center px-3 md:px-0">
        <div className="">
          <InlineLink href="/" className="text-slate-100 hover:text-slate-300">
            <HomeIcon className="h-10" />
            <span className="sr-only">Home</span>
          </InlineLink>
        </div>
        <div className="ml-auto">{children}</div>
      </div>
    </nav>
  );
}
