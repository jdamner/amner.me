import React from "react"

import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Blog from "../components/Blog"
import Title from "../components/blog/Title"

import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Template({ data }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout title={frontmatter.title}>
            <article className='post'>
                <Title frontmatter={frontmatter} 
                    image={
                    <GatsbyImage
                        loading='eager'
                        image={getImage(frontmatter.thumbnail)}
                        alt={frontmatter.title} />
                    }
                    title={frontmatter.title} />
                <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                <Link to='/' rel='home' className="btn">« Return Home</Link>
            </article>
            <Blog />
        </Layout>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
        slug
        title
        thumbnail {
            childImageSharp {
                gatsbyImageData(
                  width: 800
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
        }
      }
    }
  }
`

