import React from "react";

import InlineLink from "../Atoms/Links/Inline";
import TimelineButtonAndBar from "./TimelineButtonAndBar";
import { font } from "@/utils/header-font";

export default function TimelineItem(
  props: React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > &
    Partial<{
      role: string;
      company: string;
      companyUrl: string;
      date: string;
      last: boolean;
    }>,
) {
  const { role, company, companyUrl, date, last = false, ...rest } = props;
  return (
    <li
      className="group snap-always snap-start  shrink-0 w-9/12 last:w-full"
      {...rest}
    >
      <TimelineButtonAndBar last={last} />
      <div className="mt-3">
        <h3
          className="w-full text-left text-4xl font-black mb-2 uppercase"
          style={font.style}
        >
          {role}
        </h3>
        <h4 className="text-lg">
          <InlineLink href={companyUrl} target="_blank">
            {company}
          </InlineLink>
        </h4>
        <span className="text-sm">{date}</span>
      </div>
    </li>
  );
}
