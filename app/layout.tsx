import React from "react";

/* Components */
import Link from "next/link";
/* Types */
import type { Metadata } from "next";

/* Components */
import { Container } from "../components/Layouts";
import { NavBar } from "../components";

/* Global Styles */
import "./global.css";

export const metadata: Metadata = {
  title: "Amner.me",
  description: "James Amner's personal website",
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html>
    <head />
    <body className="bg-black text-orange-100  font-sans">
      <NavBar />
      <main id="page">{children}</main>
      <footer id="footer" className="bg-orange-600 text-black p-5">
        <Container>
          <div className="text-sm">
            <ul className="flex flex-wrap items-center justify-center gap-10 mb-10 uppercase font-bold">
              {[
                { href: "/cv", text: "Digital CV" },
                { href: "/privacy", text: "Privacy Policy" },
                {
                  href: "https://github.com/jdamner",
                  text: "GitHub",
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
              ].map((link) => (
                <li className="" key={link.href}>
                  <Link {...link} className="hover:underline">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-center">
              &copy; James Amner {new Date().getFullYear()}
            </div>
          </div>
        </Container>
      </footer>
    </body>
  </html>
);

export default Layout;
