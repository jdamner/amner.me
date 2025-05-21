import React from "react";

/* Layout */
import { Article } from "@/components/Layouts/";

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

  if (!post) {
    return null;
  }

  return (
    <>
      <Article title={post.data.title}>
        <div className="prose prose-invert">{post.content}</div>
      </Article>
    </>
  );
};

export default Page;
