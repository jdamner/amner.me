import React, { Fragment } from "react"

import Footer from "./Footer"

import "@fontsource/comfortaa";
import "@fontsource/poiret-one";
import "@fontsource/limelight";

import "../sass/bootstrap.scss";
import "../sass/theme.scss";
import Signpost from "./header/Signpost";

export default function Layout({ children, title }) {
    return (
        <Fragment>
            <title>{title + " - Amner.me"}</title>
            <main id="page" className="site">
                <Signpost />
                <div id='home' className='container'>
                    {children}
                </div>
                <Footer />
            </main>
        </Fragment>
    )
}