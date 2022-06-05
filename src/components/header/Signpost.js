import React, { Component, Fragment } from "react";
import { Link } from "gatsby";
import ReactModal from "react-modal";

import Corner from '../../assets/corner1.svg';

import Style from "./Style";

export default class Signpost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
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
                    appElement={document.getElementById('___gatsby')}
                    isOpen={this.state.isOpen}
                    onRequestClose={this.handleModalClose}
                    contentLabel="Contact"
                    style={Style}
                >
                    <section className='contact' id='contact'>
                        <Corner />
                        <div className='contact-title'>
                            <h2>Say Hello</h2>
                            <p>Looking for someone just like me?</p>
                        </div>
                        <div className='contact-list'>
                            <a href='tel:+447515352631'>
                                +44 07515 352631
                            </a>
                            <a href='mailto:jdamner@me.com' className=''>
                                jdamner@me.com
                            </a>
                        </div>
                    </section>
                </ReactModal>
            </Fragment>
        )
    }
}