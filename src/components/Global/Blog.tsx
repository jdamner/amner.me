/* Layout */
import Title from "./Title";
import PostList from "./PostList";
/* Types */
import type { post } from "../../types/post.type";

export default function Blog({ posts }: { posts: post[] }) {
  return (
    <section className='bg-slate-200 dark:bg-slate-800 py-5' id='blog'>
      <div className='container mx-auto px-3 md:px-0'>
        <Title title="Projects and Writing">My blog</Title>
        <PostList posts={posts} />
      </div>
    </section>
  );
}
