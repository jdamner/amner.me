import React from "react";

/* Layout */
import { Blog, Header, TOCInline } from "@/components";
import { Container, Article } from "@/components/Layouts/";

/* API */
import { useAllPosts } from "@/utils";

export default async function Template({
  params,
}: {
  params: { slug: string };
}) {
  const allPosts = await useAllPosts();
  const posts = allPosts.map((post) => ({
    title: post.title,
    thumbnail: post.thumbnail,
    slug: post.slug ?? "",
  }));

  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return null;
  }

  const date = new Date(post.date);
  return (
    <>
      <Header title={post.title}>
        <p className="hidden">{date.toDateString()}</p>
      </Header>
      <Article
        offset
        image={post.thumbnail}
        first={
          <ul className="mb-5 text-sm">
            <li>
              <strong>Author:</strong> James Amner
            </li>
            <li>
              <strong>Date:</strong> {date.toLocaleDateString("en-GB")}
            </li>
            <TOCInline content={post.content.toString()} />
          </ul>
        }
      >
        <div className="prose prose-slate dark:prose-invert">
          {post.content}
        </div>
      </Article>
      <Container alt>
        <Blog posts={posts} />
      </Container>
    </>
  );
}
