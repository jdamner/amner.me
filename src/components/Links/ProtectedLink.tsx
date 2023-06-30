import React from "react";
import Link, { LinkProps } from "next/link";
import { WithChildren } from "../../types/WithChildren.type";

export default function ProtectedLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & WithChildren & React.RefAttributes<HTMLAnchorElement>): React.JSX.Element {

    // extract the HREF from the props, and make it 
    // an on-click event... Stops bots from crawling
    // the link, but allows users to click it.

    let href = props.href;
    let onClick = () => {
        window.location.href = href.toString();
    }

    return (
        <Link {...props} onClick={onClick} href='#'>{props.children}</Link>
    )
}