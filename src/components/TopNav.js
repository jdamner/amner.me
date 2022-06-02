import { Link } from "gatsby";
import React from "react";

import header from "../assets/header.jpg";

export default function TopNav() {
  return (

    <header id="masthead" className="site-header align-items-center sticky-top top">
      <nav className='navbar container'>
        <Link to="/" rel="home" className='navbar-brand fancy-title'>
          <img src={header} className="img-fluid" height='64' width='64' alt="" />
          &nbsp;James Amner
        </Link>
      </nav>
    </header>
  );

}