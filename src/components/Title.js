import React from "react";
import Corner from "./Global/Corner";


export default function About({ image, title, text }) {
    return (
        <section id="title" className="title">
            <div className="title-wrap">
                <div className='title-image'>
                    { image ?? null }
                </div>

                <div className="title-content">
                    <Corner rotation={-90} />
                    <h1 className='title-content-title'>{ title }</h1>
                    { text ?? null }
                </div>
            </div>
        </section>
    );
}