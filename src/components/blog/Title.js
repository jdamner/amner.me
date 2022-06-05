import React from "react";
import Corner from "../global/Corner";


export default function About({ image, title, text }) {
    return (
        <section id="about" className="about">
            <div className="about-wrap">
                <div className='about-image'>
                    { image ?? null }
                </div>

                <div className="about-content">
                    <Corner rotation={-90} />
                    <h1 className='about-content-title'>{ title }</h1>
                    { text ?? null }
                </div>
            </div>
        </section>
    );
}