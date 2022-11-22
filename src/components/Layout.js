import React, { Fragment } from "react"
import Signpost from "./Signpost";
import { motion } from "framer-motion";
import { pageView } from "../api/insights";
import Head from "next/head";

export default function Layout({ children, title }) {
    pageView();
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Head>
                <title>{title + " - Amner.me"}</title>
                <meta name="description" value={title} />
            </Head>
            <main id="page" className="site">
                <Signpost />
                <motion.div 
                    id='home' 
                    className='container'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    >
                    {children}
                </motion.div>
            </main>
            <footer id="footer">
                <small>&copy; James Amner {year}</small>
            </footer>
        </Fragment>
    )
}