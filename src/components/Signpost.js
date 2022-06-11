import React, { Component, Fragment } from "react";
import ReactModal from "react-modal";

import Corner from '../assets/corner1.svg';

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
        ReactModal.setAppElement('#___gatsby')
        return (
            <Fragment>
                <button className='signpost' onClick={this.handleModalClick} >
                    <div className='signpost-top'></div>
                    <div className='signpost-content'>
                        <span>Contact</span>
                    </div>
                    <div className='signpost-bottom'></div>
                </button>
                <ReactModal
                    isOpen={this.state.isOpen}
                    onRequestClose={this.handleModalClose}
                    contentLabel="Contact"
                    style={this.modalStyle}
                >
                    <section className='contact' id='contact'>
                        <Corner />
                        <div className='contact-title'>
                            <h2>Say Hello</h2>
                            <p>Looking for someone just like me?</p>
                        </div>
                        <div className='contact-list'>
                            <a className='btn' href='tel:+447515352631'>
                                +44 07515 352631
                            </a>
                            <a className='btn' href='mailto:jdamner@me.com'>
                                jdamner@me.com
                            </a>
                        </div>
                    </section>
                </ReactModal>
            </Fragment>
        )
    }
}