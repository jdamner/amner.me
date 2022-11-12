import React, { Fragment} from "react";
import { motion } from "framer-motion";
import Flash from "../Global/Flash";

export default function TabContent({ tab }) {
    if (!tab || !tab.frontmatter) {
        return <div>No Content</div>
    }
    return (
        <Fragment>
            <div className='tab-content-title'>
                <h3>{ tab.frontmatter.title }</h3>
                <motion.div
                    initial={{ opacity: 0, rotate: 0, marginRight: 0, marginTop: "2rem" }}
                    animate={{ opacity: 1, rotate : 0, marginRight: "-6.25rem", marginTop: 0 }}
                    exit={{ opacity: 0, rotate: 0, marginRight: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                    className='flash d-none d-md-block'
                    >
                        <Flash />
                </motion.div>
            </div>
            <div
                className='tab-content-body'
                dangerouslySetInnerHTML={{ __html: tab.html }}
            />
        </Fragment>
    );
}
