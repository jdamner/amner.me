import React, { Fragment } from "react"

import "@fontsource/comfortaa";
import "@fontsource/poiret-one";
import "@fontsource/limelight";

import Signpost from "./Signpost";

import "../sass/bootstrap.scss";
import "../sass/theme.scss";

import { motion } from "framer-motion";

import { pageView } from "../utils/insights";

export default function Layout({ children, title }) {
    pageView();
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <title>{title + " - Amner.me"}</title>
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