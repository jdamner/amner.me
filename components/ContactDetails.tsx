
import React from "react";

/* API */
import { useState } from "react";

/* Components */
import { EnvelopeOpenIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import ProtectedLink from "./Atoms/Links/ProtectedLink";
import { font } from "@/utils/header-font";

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
    <section className="col-span-2 mt-5 lg:ml-8" id="contact" {...props}>
      <div className="px-4 py-3 bg-highlighted text-black flex flex-col gap-5">
        <h2 className="text-9xl tracking-tight uppercase" style={font.style}>
          Say hello
        </h2>
        <p className="mb-5">
          If you&apos;d like to get in touch, just send me an email by clicking
          the link below.
        </p>
        <ProtectedLink
          href="mailto:jdamner@me.com"
          className="inline-block px-3 py-3 bg-orange-100 text-black border-4 border-orange-600  hover:bg-orange-600 uppercase font-black text-4xl"
          style={font.style}
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
