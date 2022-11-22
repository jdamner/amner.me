import React from "react"
import Layout from "../components/Layout"
import Blog from "../components/Blog"
import Header from "../components/Header"
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../api/Posts";
import markdownToHtml from "../api/MarkdownToHtml";

export default function Template({ post, posts }) {

    return (
        <Layout title={post.title}>
            <article className='post'>
                <Header frontmatter={post} 
                    image={
                    <Image
                        src={post.thumbnail}
                        alt={post.title}
                        style={{ objectFit: "cover" }}
                        priority fill
                         />
                    }
                    title={post.title} />
                <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <Link href='/' rel='home' className="btn">« Return Home</Link>
            </article>
            <Blog posts={posts} />
        </Layout>
    )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'content',
    'thumbnail'
  ])
  const content = await markdownToHtml(post.content || '')

  const posts = getAllPosts([
    'title',
    'slug',
    'thumbnail',
  ]);



  return {
    props: {
      post: {
        ...post,
        content,
      },
      posts,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}