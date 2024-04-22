"use client";

import React from "react";

/* API */
import { useState } from "react";

/* Components */
import { EnvelopeOpenIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Title from "./Atoms/Title";
import ProtectedLink from "./Atoms/Links/ProtectedLink";

export default function ContactDetails(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const enableMouseOver = () => setIsMouseOver(true);
  const disableMouseOver = () => setIsMouseOver(false);

  const iconClass = "inline-block w-12 h-12 mr-3";

  return (
    <section className="px-4 py-3 container mx-auto" id="contact" {...props}>
      <Title title="Contact Me">Say hello</Title>
      <div className="w-full gap-5 my-10 text-center">
        <p className="my-5">
          If you&apos;d like to get in touch, just send me an email by clicking
          the link below.
        </p>
        <ProtectedLink
          href="mailto:jdamner@me.com"
          className="block bg-white dark:bg-slate-800 border-2 px-3 py-2 rounded-sm font-bold border-solid border-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700"
          onMouseEnter={enableMouseOver}
          onMouseLeave={disableMouseOver}
        >
          {isMouseOver ? (
            <EnvelopeOpenIcon className={iconClass} />
          ) : (
            <EnvelopeIcon className={iconClass} />
          )}
          Send an email
        </ProtectedLink>
      </div>
    </section>
  );
}
