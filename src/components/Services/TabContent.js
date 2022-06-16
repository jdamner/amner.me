import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function TabContent({ tab }) {
    if (!tab || !tab.frontmatter) {
        return <div>No Content</div>
    }
    return (
        <div className="tab-content">
            <div class='tab-content-title'>
                <StaticImage src={'../../assets/flash.svg'} alt={'Decorative Flash'} objectFit={'contain'} className='flash' />
                <h3>{ tab.frontmatter.title }</h3>
            </div>
            <div 
                dangerouslySetInnerHTML={ { __html: tab.html } }
                className='tab-content-body'
            />
        </div>
    );
}
