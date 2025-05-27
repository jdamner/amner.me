import Link from "next/link";
import React from "react";
import { font } from "utils/header-font";
import { Container } from "./Layouts";

export default function NavBar(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
) {
  return (
    <header
      className="w-full text-black bg-orange-600 p-4"
      id="main-nav"
      {...props}
    >
      <Container className="px-3">
        <Link
          href="/"
          className="font-black uppercase text-5xl"
          style={font.style}
        >
          James Amner
        </Link>
      </Container>
    </header>
  );
}
