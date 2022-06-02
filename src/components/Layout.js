import React, { Fragment } from "react"

import Contact from "./Contact"
import Footer from "./Footer"
import TopNav from "./TopNav"


export default function Layout({ children, title }) {
    return (
        <Fragment>
            <title>{title} - Amner.me</title>
            <main id="page" className="site">
                <TopNav />
                <div id='home' className='container'>
                    <div>{children}</div>
                    <Contact />
                </div>
                <Footer />
            </main>
        </Fragment>
    )
}