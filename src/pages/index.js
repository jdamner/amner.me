import React, { Fragment } from "react"
import Image from "next/image";
import Layout from "../components/Layout"
import Blog from "../components/Blog"
import Header from '../components/Header';
import Tabs from "../components/Services/Tabs";
import HeaderJPG from '../assets/header.jpg';

import { getAllPosts } from "../api/Posts";
import { getAllServices } from "../api/Services";

const IndexPage = ( { posts, services }) => {
  return (
    <Layout title='About Me'>
        <Header
          image={<Image src={HeaderJPG} alt="" fill style={{ objectFit: "cover" }} priority placeholder="blur" />}
          title={"I'm James Amner"}
          text={<Fragment>
            <p>
              I'm a <span>Senior PHP Developer</span> at <a href='https://www.boxuk.com' target="_blank" rel='noreferrer'>BoxUK</a>.
            </p>
            <p>
              I specialise in <span>PHP and JavaScript</span> development, with a focus on <a href='https://www.wordpress.org' target="_blank" rel='noreferrer'>WordPress</a> plugin and theme development.
            </p>
          </Fragment>}
        />
        <Tabs tabs={services} />
        <Blog posts={posts} />
      </Layout>
  )
}

export default IndexPage

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'slug',
    'thumbnail',
  ])

  const services = await getAllServices([
    'title',
    'content'
  ]);

  return {
    props: { posts, services },
  }
}