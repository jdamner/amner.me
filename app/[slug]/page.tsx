import React from "react";

/* Layout */
import { Blog, Header, TableOfContents } from "@/components";
import { Container, Article } from "@/components/Layouts/";

/* API */
import { useAllPostLinks, usePost } from "@/utils";

const Page = ({ params }: { params: { slug: string } }) => {
  const post = usePost(params.slug);
  const postLinks = useAllPostLinks();

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
