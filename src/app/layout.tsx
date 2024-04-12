import React from 'react';


/* Components */
import { ContactDetails, NavBar, Signpost } from "../Components";
import { Container } from "../Layouts";
import Link from "next/link";
import { Poppins } from "next/font/google";

/* Types */
import type { Metadata } from 'next'

/* Global Styles */
import "../global.css";

// Get Regular, Bold and SemiBold
const font = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin-ext'],
});


export const metadata: Metadata = {
  title: 'Amner.me',
  description: 'James Amner\'s personal website',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const Links = [
    { href: '/cv', text: 'Digital CV' },
    { href: '/privacy', text: 'Privacy Policy' },
    { href: 'https://github.com/jdamner', text: 'GitHub', target: '_blank', rel: 'noopener noreferrer' },
  ]

  return <html>
    <head>
    </head>
    <body className='bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-300' style={font.style}>
      <NavBar>
        <Signpost title='Contact'>
          <ContactDetails />
        </Signpost>
      </NavBar>
      <main id="page">
        {children}
      </main>
      <footer id="footer">
        <Container>
          <div className="text-sm">
            <ul className="flex flex-wrap items-center justify-center gap-10 mb-10">
              {Links.map((link) => {
                return (
                  <li className='' key={link.href}>
                    <Link {...link} className="hover:underline">{link.text}</Link>
                  </li>
                )
              })
              }
            </ul>
            <div className='text-center'>
              &copy; James Amner {new Date().getFullYear()}
            </div>
          </div>
        </Container>
      </footer>
    </body>
  </html>
}