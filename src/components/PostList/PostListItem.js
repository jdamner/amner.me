import React from "react";

import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function PostListItem({ post }) {
  const image = getImage(post.frontmatter.thumbnail);
  return (
    <Link className='grid-item' to={'/' + post.frontmatter.slug} key={post.id}>
      { image ? (
        <GatsbyImage image={image} alt={post.frontmatter.title} loading='lazy' />
      ) : null}
      <h3>
        {post.frontmatter.title}
      </h3>
    </Link>)
};