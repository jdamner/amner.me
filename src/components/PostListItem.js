import React from "react";

import { Link } from "gatsby";

export default function PostListItem({ post }) {
  return (
    <Link className='grid-item' to={'/' + post.frontmatter.slug} key={post.id}>
      <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} className='lazy' />
      <h3>
        {post.frontmatter.title}
      </h3>
      <span>Read More</span>
    </Link>)
};