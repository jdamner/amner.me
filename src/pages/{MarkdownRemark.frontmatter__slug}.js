import React from "react"

import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Blog from "../components/Blog"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Template({ data }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout title={frontmatter.title}>
            <article className='post my-3 row'>
                <div className='col-md-4'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-12 text-center mb-3'>
                            { frontmatter.thumbnail ? (
                            
                            <GatsbyImage
                                loading='eager'
                                image={getImage(frontmatter.thumbnail)}
                                alt={frontmatter.title}
                                className='img-fluid rounded w-100' />
                            ) : null }
                        </div>
                        <div className='col text-center'>
                            <h2 className="fancy-title">{frontmatter.title}</h2>
                        </div>
                    </div>
                </div>

                <div className='col-md-8'>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
                <div className='col-6'>
                    <Link to='/' rel='home' className="btn">« Return Home</Link>
                </div>
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

