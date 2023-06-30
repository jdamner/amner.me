/* API */
import { motion, useReducedMotion } from "framer-motion";
import { pageView } from "../api/Insights";

/* Components */
import Head from "next/head";
import ContactDetails from "./Global/ContactDetails";
import NavBar from "./Global/NavBar";
import Signpost from "./Global/Signpost";
import Container from "./Layouts/Container";
/* Types */
import { WithChildren } from "../types/WithChildren.type";
import Link from "next/link";

export default function Layout({ children, title }: WithChildren & { title: string }) {
  //  Log page views
  pageView();

  const reducedMotion = useReducedMotion();

  const Links = [
    { href: '/cv', text: 'Digital CV' },
    { href: '/privacy', text: 'Privacy Policy' },
    { href: 'https://github.com/jdamner', text: 'GitHub', target: '_blank', rel: 'noopener noreferrer' },
  ]


  return (
    <>
      <Head>
        <title>{title + " - Amner.me"}</title>
        <meta name="description" content={title} />
      </Head>
      <NavBar>
        <Signpost title='Contact'>
          <ContactDetails />
        </Signpost>
      </NavBar>
      <main id="page">
        <motion.div
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: reducedMotion ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.div>
      </main>
      <footer id="footer">
        <Container>
          <div className="text-sm">
            <ul>
              {Links.map((link) => {
                return (
                  <li className='mb-2' key={link.href}>
                    <Link {...link}>{link.text}</Link>
                  </li>
                )
              })
              }
            </ul>
            <div className=''>
              &copy; James Amner {new Date().getFullYear()}
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}