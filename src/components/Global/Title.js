import React from "react";

import Seperator from "./Seperator";
import { motion } from "framer-motion";

export default function Title({ text }) {
    return (
        <motion.div
            className='blog-wrap-title'
            initial={{ opacity: 0, y: -100 }}
            viewport={{ once: true}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Seperator />
            <h2>{text}</h2>
            <Seperator modifier='rotate' />
        </motion.div>
    );
}