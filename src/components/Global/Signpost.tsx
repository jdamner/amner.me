import React from "react";
import ReactModal from "react-modal";
import Button from "../Links/Button";
import { motion } from "framer-motion";
import { event } from "../../api/Insights";
import { useState } from "react";

export default function Signpost({ children }): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: '4px solid black',
            zIndex: '200',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }
    }

    const handleModalClick = () => {
        setIsOpen(!isOpen);
        event('signpost-click', { open: !isOpen });
    }

    const handleModalClose = () => {
        setIsOpen(false);
    }

    const ContentWrapper = (props, children) => {
        return (
            <motion.div
                {...props}
                initial={{ top: -50 }}
                animate={{ top: 300 }}
                exit={{ top: -50 }}
                transition={{ duration: 0.1, type: 'spring', stiffness: 100 }}
            >
                {children}
            </motion.div>
        )
    }

    return (
        <>
            <Button onClick={handleModalClick}>Contact</Button>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={handleModalClose}
                contentLabel="Contact"
                style={modalStyle}
                contentElement={ContentWrapper}
            >
                {children}
            </ReactModal>
        </>
    )
}