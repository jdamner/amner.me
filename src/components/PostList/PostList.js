import React from "react"
import { graphql, StaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export default function PostList({ data }) {
  return (<StaticQuery
    query={graphql`
        query {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
              edges {
                node {
                  id
                  excerpt(pruneLength: 250)
                  frontmatter {
                    date
                    slug
                    thumbnail {
                      childImageSharp {
                        gatsbyImageData(
                          width: 200
                          placeholder: BLURRED
                          formats: [AUTO, WEBP, AVIF]
                        )
                      }
                    }
                    title
                  }
                }
              }
            }
          }
          `}
    render={data => {
      const { allMarkdownRemark } = data;
      var i = 0;
      const Posts = allMarkdownRemark.edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => {
          i++;
          const delay = i * 0.1;
          const image = getImage(edge.node.frontmatter.thumbnail);

          return (<motion.div
            key={edge.node.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay, duration: 0.5 }}
            className='grid-item'>
            <Link to={'/' + edge.node.frontmatter.slug}>
              {image ? (
                <GatsbyImage image={image} alt={edge.node.frontmatter.title} loading='lazy' />
              ) : null}
              <h3>
                {edge.node.frontmatter.title}
              </h3>
            </Link>
          </motion.div>)
        })
      return Posts
    }}
  />)


}