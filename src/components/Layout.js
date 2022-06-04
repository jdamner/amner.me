import React, { Fragment } from "react"

import Contact from "./Contact"
import Footer from "./Footer"
import TopNav from "./TopNav"

import "@fontsource/comfortaa";
import "@fontsource/poiret-one";
import "../sass/bootstrap.scss";
import "../sass/theme.scss";

export default function Layout({ children, title }) {
    return (
        <Fragment>
            <title>{title + "&mdash; Amner.me"}</title>
            <main id="page" className="site">
                <TopNav />
                <div id='home' className='container'>
                    {children}
                    <Contact />
                </div>
                <Footer />
            </main>
        </Fragment>
    )
}