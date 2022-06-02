import React from "react"

import { graphql, Link } from "gatsby"
import PostList from "../components/PostList"
import Layout from "../components/Layout"

export default function Template({ data }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout title={frontmatter.title}>            
            <div id='home' className='container'>
                <article className='post my-5'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-4 text-center'>
                            <img 
                                loading='eager'
                                src={frontmatter.thumbnail}
                                alt={frontmatter.title} 
                                className='img-fluid rounded w-100' />
                        </div>
                        <div className='col text-center'>
                            <h1 className="fancy-title">{frontmatter.title}</h1>
                        </div>
                    </div>

                    <div className='row py-4'>
                        <div className='col'>
                            <div
                                className="blog-post-content"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <Link to='/' rel='home'>« Return Home</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <small className=''>
                                Posted: {new Date(frontmatter.date).toLocaleDateString()}
                            </small>
                        </div>
                    </div>
                </article>
                <hr />

                <h2 className='fancy-title'>Read More?</h2>
                <section className='row my-5' id='portfolio'>
                    <div className='col-12'>
                        <div className='grid'>
                            <PostList data={data} />
                        </div>
                    </div>
                </section>
                <hr />
            </div>
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
        thumbnail
      }
    }
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            slug
            thumbnail
            title
          }
        }
      }
    }
  }
`

