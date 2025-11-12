import React from "react";

export default function ProtectedLink(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & { href: string },
) {
  // extract the HREF from the props, and make it
  // an on-click event... Stops bots from crawling
  // the link, but allows users to click it.
  const { href, ...rest } = props;

  const onClick = () => {
    window.location.href = href.toString();
  };

  return <a {...rest} onClick={onClick} href="#" />;
}
