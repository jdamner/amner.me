import React from "react";
import Link, { LinkProps } from "next/link";

export default function ProtectedLink(props: LinkProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {

    // extract the HREF from the props, and make it 
    // an on-click event... Stops bots from crawling
    // the link, but allows users to click it.
    let { href, ...rest } = props;

    let onClick = () => {
        window.location.href = href.toString();
    }

    return (
        <Link {...rest} onClick={onClick} href='#' />
    )
}