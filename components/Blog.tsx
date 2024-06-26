import React from "react";
/* Layout */
import Title from "./Atoms/Title";
import PostList from "./PostList";
/* Types */
import type { PostLinkType } from "../types";

export default function Blog({ posts }: { posts: PostLinkType[] }) {
  return (
    <>
      <Title title="Projects and Writing"></Title>
      <PostList posts={posts} />
    </>
  );
}
