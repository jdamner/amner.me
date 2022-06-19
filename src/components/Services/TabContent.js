import { StaticImage } from "gatsby-plugin-image";
import React, { Fragment} from "react";

import { motion } from "framer-motion";

export default function TabContent({ tab }) {
    if (!tab || !tab.frontmatter) {
        return <div>No Content</div>
    }
    return (
        <Fragment>
            <div className='tab-content-title'>
                <h3>{ tab.frontmatter.title }</h3>
                <motion.div
                    initial={{ opacity: 0, rotate: 0, marginRight: 0 }}
                    animate={{ opacity: 1, rotate : 36, marginRight: "-6.25rem" }}
                    exit={{ opacity: 0, rotate: 0, marginRight: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                    className='flash'
                    >
                    <StaticImage 
                        src={'../../assets/flash.svg'} 
                        alt={'Decorative Flash'}
                        loading={'eager'} 
                        objectFit={'contain'} />
                </motion.div>
            </div>
            <div
                className='tab-content-body'
                dangerouslySetInnerHTML={{ __html: tab.html }}
            />
        </Fragment>
    );
}
