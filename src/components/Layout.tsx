/* API */
import { motion, useReducedMotion } from "framer-motion";
import { pageView } from "../api/Insights";

/* Components */
import Head from "next/head";
import ContactDetails from "./Global/ContactDetails";
import NavBar from "./Global/NavBar";
import Signpost from "./Global/Signpost";

/* Types */
import { children } from "../types/children.type";
import Link from "next/link";

export default function Layout({ children, title }: { children: children, title: string }) {
  //  Log page views
  pageView();

  const reducedMotion = useReducedMotion();

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
      <footer id="footer" className="container mx-auto px-3 md:px-0 my-3">
        <ul className="prose prose-ul:list-none max-w-full flex flex-col md:flex-row justify-between text text-xs">
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li>&copy; James Amner {new Date().getFullYear()}</li>
          <li><Link href="https://github.com/jdamner">GitHub</Link></li>
        </ul>
      </footer>
    </>
  )
}