import React from "react";
/* Layout */
import Title from "./Title";
import PostList from "./PostList";
/* Types */
import type { PostLinkType } from "../../types";

export default function Blog({ posts }: { posts: PostLinkType[] }) {
  return (
    <>
      <Title title="Projects and Writing">Blog</Title>
      <PostList posts={posts} />
    </>
  );
}
