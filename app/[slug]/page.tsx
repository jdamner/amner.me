import React from "react";

/* Layout */
import { Blog, Header, TableOfContents } from "@/components";
import { Container, Article } from "@/components/Layouts/";

/* API */
import { getAllPostLinks, getPost } from "@/utils";

export async function generateStaticParams() {
  return getAllPostLinks().map((post) => ({
    slug: post.slug,
  }));
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const post = getPost(slug);
  const postLinks = getAllPostLinks();

  if (!post) {
    return null;
  }

  return (
    <>
      <Header title={post.data.title}>
        <p className="hidden">{post.data.date.toLocaleDateString()}</p>
      </Header>
      <Article
        offset
        image={post.data.thumbnail}
        first={<TableOfContents>{post.content}</TableOfContents>}
      >
        <div className="prose prose-slate dark:prose-invert">
          {post.content}
        </div>
      </Article>
      <Container alt>
        <Blog posts={postLinks} />
      </Container>
    </>
  );
};

export default Page;
