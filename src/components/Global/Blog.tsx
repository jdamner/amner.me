import React from "react";
/* Layout */
import Title from "./Title";
import PostList from "./PostList";
/* Types */
import type { PostLinkType } from "../../types/Post.type";

/**
 * Blog List
 * @param {Post[]} posts
 * @returns {JSX.Element}
 */
export default function Blog({ posts }: { posts: PostLinkType[] }): React.JSX.Element {
  return (
    <>
        <Title title="Projects and Writing">Blog</Title>
        <PostList posts={posts} />
      </>
  );
}
