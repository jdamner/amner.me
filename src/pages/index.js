import React, { Fragment } from "react"
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout"
import Blog from "../components/Blog"
import Title from '../components/Title';
import Tabs from "../components/Services/Tabs";

// markup
const IndexPage = () => {
  return (
    <Layout title='About Me'>
        <Title
          image={<StaticImage src={'../assets/header.jpg'} alt="" />}
          title={"I'm James Amner"}
          text={<Fragment>
            <p>
              I'm a <span>web developer</span> and <span>PHP Team Lead</span> at <a href='https://www.spindogs.co.uk' target="_blank" rel='noreferrer'>Spindogs</a>.
            </p>
            <p>
              I specialise in <span>PHP and JavaScript</span> development, with a focus on <a href='https://www.wordpress.org' target="_blank" rel='noreferrer'>WordPress</a>. plugin and theme development.
            </p>
          </Fragment>}
        />
        <Tabs />
        <Blog />
      </Layout>
  )
}

export default IndexPage
