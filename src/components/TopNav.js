import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function TopNav() {
  return (

    <header id="masthead" className="my-3">
      <nav className='navbar container site-header'>
        <div className="row justify-content-between align-items-center">
          <div className='col-md-4'>
            <Link to="/" rel="home" className='navbar-brand fancy-title'>
              <StaticImage src={'../assets/header.jpg'} className="img-fluid" alt="" />
            </Link>
          </div>
          <div className="col-md-8">

            <h1>I'm James Amner</h1>
            <p>I'm a web and software developer, and I like to turn my hand to anything in front of me.
              I'm a PHP Team leader at <a href='https://www.spindogs.co.uk' target="_blank" rel='noreferrer'>Spindogs</a> and
              I used to be Technical Director at <a href='https://gluestudio.co.uk' target="_blank" rel='noreferrer'>Glue Digital Studio</a>.
              My main focus of development is bespoke <a href='https://wordpress.org' target="_blank" rel='noreferrer'>Wordpress</a> plugins,
              themes and anything related. </p>
              <a className='btn' href='#contact'>Get in touch</a>
          </div>
        </div>
      </nav>
    </header>
  );

}