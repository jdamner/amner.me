import React from "react"

import PostListItem from "./PostListItem"

export default function PostList({ data }) {
    if (!data.allMarkdownRemark) {
        return null;
    }

    const { allMarkdownRemark } = data;
    const Posts = allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostListItem key={edge.node.id} post={edge.node} />)

    return Posts
}
