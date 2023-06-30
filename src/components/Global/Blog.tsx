/* Layout */
import Title from "./Title";
import PostList from "./PostList";
/* Types */
import type { Post } from "../../types/Post.type";
import Container from "../Layouts/Container";

/**
 * Blog List
 * @param {Post[]} posts
 * @returns {JSX.Element}
 */
export default function Blog({ posts }: { posts: Post[] }): JSX.Element {
  return (
    <>
        <Title title="Projects and Writing">My blog</Title>
        <PostList posts={posts} />
      </>
  );
}
