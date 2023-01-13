import React, { Fragment } from "react"
import Signpost from "./Global/Signpost";
import { motion } from "framer-motion";
import { pageView } from "../api/Insights";
import Head from "next/head";
import ContactDetails from "./Global/ContactDetails";
import NavBar from "./Global/NavBar";

export default function Layout({ children, title }: { children: JSX.Element | JSX.Element[] | string, title: string }) {
  pageView();
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <Head>
        <title>{title + " - Amner.me"}</title>
        <meta name="description" content={title} />
      </Head>
      <NavBar>
        <Signpost>
          <ContactDetails />
        </Signpost>
      </NavBar>
      <main id="page">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.div>
      </main>
      <footer id="footer" className="container mx-auto text-center my-3">
        <small className="text-xs text">&copy; James Amner {year}</small>
      </footer>
    </Fragment>
  )
}