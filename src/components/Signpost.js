import React, { Component, Fragment } from "react";
import ReactModal from "react-modal";
import Corner from "./Global/Corner";

import { motion } from "framer-motion";

import { event } from "../api/insights";

export default class Signpost extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    modalStyle = {
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

    handleModalClick = () => {
        event('signpost-click', { open: this.state.isOpen });
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleModalClose = () => {
        this.setState({
            isOpen: false
        });
    }

    

    render = () => {
        const ContentWrapper = (props, children) => {
        return (<motion.div
            {...props}
            initial={{ top: -50 }}
            animate={{ top: 300 }}
            exit={{ top: -50 }}
            transition={{duration: 0.5, type: 'spring', stiffness: 200}}
            >
            { children }</motion.div> )}
        return (
            <Fragment>
                <motion.button 
                    initial={{ top: -150 }}
                    animate={{ top: 0 }}
                    exit={{ top: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 1.5 }}
                    className='signpost' 
                    onClick={this.handleModalClick} >
                    <div className='signpost-top'></div>
                    <div className='signpost-content'>
                        <span>Contact</span>
                    </div>
                    <div className='signpost-bottom'></div>
                </motion.button>
                    <ReactModal
                        isOpen={this.state.isOpen}
                        onRequestClose={this.handleModalClose}
                        contentLabel="Contact"
                        style={this.modalStyle}
                        contentElement={ContentWrapper}
                    >
                        <section className='contact' id='contact'>
                            <Corner />
                            <div className='contact-title'>
                                <h2>Say Hello</h2>
                                <p>Looking for someone just like me?</p>
                            </div>
                            <div className='contact-list'>
                                <a className='btn' href='tel:+447515352631' onClick={ event('phone-click', {})}>
                                    +44 07515 352631
                                </a>
                                <a className='btn' href='mailto:jdamner@me.com' onClick={ event('email-click', {})}>
                                    jdamner@me.com
                                </a>
                            </div>
                        </section>
                    </ReactModal>
            </Fragment>
        )
    }
}