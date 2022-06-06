import React, { Fragment } from "react"

import "@fontsource/comfortaa";
import "@fontsource/poiret-one";
import "@fontsource/limelight";

import Signpost from "./Signpost";

import "../sass/bootstrap.scss";
import "../sass/theme.scss";


export default function Layout({ children, title }) {
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <title>{title + " - Amner.me"}</title>
            <main id="page" className="site">
                <Signpost />
                <div id='home' className='container'>
                    {children}
                </div>
            </main>
            <footer id="footer">
                <small>&copy; James Amner {year}</small>
            </footer>
        </Fragment>
    )
}