import { StaticImage } from "gatsby-plugin-image";
import React, { Fragment} from "react";

export default function TabContent({ tab }) {
    if (!tab || !tab.frontmatter) {
        return <div>No Content</div>
    }
    return (
        <Fragment>
            <div class='tab-content-title'>
                <StaticImage 
                    src={'../../assets/flash.svg'} 
                    alt={'Decorative Flash'} 
                    objectFit={'contain'} 
                    className='flash' />
                <h3>{ tab.frontmatter.title }</h3>
            </div>
            <div
                className='tab-content-body'
                dangerouslySetInnerHTML={{ __html: tab.html }}
            />
        </Fragment>
    );
}
