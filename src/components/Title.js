import React from "react";
import Corner from "./Global/Corner";

import { AnimatePresence }  from "framer-motion";


export default function About({ image, title, text }) {
    return (
        <section id="title" className="title">
            <div className="title-wrap">
                <div className='title-image'>
                    <AnimatePresence exitBeforeEnter>
                        { image ?? null }
                    </AnimatePresence>
                </div>

                <div className="title-content">
                    <div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Corner rotation={-90} />
                    </div>
                    <h1 className='title-content-title'>{ title }</h1>
                    { text ?? null }
                </div>
            </div>
        </section>
    );
}