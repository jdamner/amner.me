import React from "react"
import { graphql, StaticQuery } from "gatsby";
import PostListItem from "./PostListItem"

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
            const Posts = allMarkdownRemark.edges
                .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
                .map(edge => <PostListItem key={edge.node.id} post={edge.node} />)
            return Posts
        }}
    />)


}