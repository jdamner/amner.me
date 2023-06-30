import React from "react";
/* Layout */
import Layout from "../components/Layout"
import Blog from "../components/Global/Blog"
import Header from "../components/Global/Header"
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

/* API */
import { getAllPosts } from "../api/GetData";
import { makeJsonParseable } from "../api/Utils";

/* Types */
import type { Post } from "../types/Post.type";
import Container from "../components/Layouts/Container";
import Article from "../components/Layouts/Article";
type PostPageProps = {
  post: Post,
  posts: Post[]
}
type PostPageParams = {
  params: {
    slug: string
  }
}


/**
 * Post Page
 * 
 * @param {PostPageProps}
 * @returns {JSX.Element}
 */
export default function Template({ post, posts }: PostPageProps): React.JSX.Element {
  const date = new Date(post.date);
  return (
    <Layout title={post.title}>
      <Header title={post.title}>
        <p className="hidden">{date.toDateString()}</p>
      </Header>
      <Article offset first={<>
        <Image
          className="border-2 border-slate-500 mb-5 bg-white"
          src={post.thumbnail}
          alt={post.title}
          width={1024}
          height={1024}
          placeholder="blur"
          priority
        />
        <ul className="mb-5 text-sm">
          <li><strong>Author:</strong> James Amner</li>
          <li><strong>Date:</strong> {date.toLocaleDateString('en-GB')}</li>
        </ul>
      </>}>
        <ReactMarkdown className="prose prose-slate dark:prose-invert">{post.content}</ReactMarkdown>
      </Article>
      <Container alt>
        <Blog posts={posts} />
      </Container>
    </Layout>
  )
}

/**
  * Gets static data for SS Generation
  * 
  * @param {PostPageParams} { params }
  * @returns {Promise<{ props: PostPageProps }>} 
  */
export async function getStaticProps({ params }: PostPageParams): Promise<{ props: PostPageProps }> {
  const posts = makeJsonParseable(await getAllPosts())
  const post = posts.find((post) => post.slug === params.slug)
  return {
    props: {
      post: post,
      posts: posts,
    },
  }
}

/**
 * Gets static paths for SS Generation
 * 
 * @returns {Promise<{ paths: PostPageParams[], fallback: boolean }>}
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
export async function getStaticPaths(): Promise<{ paths: PostPageParams[], fallback: boolean }> {
  const posts = await getAllPosts()

  return {
    paths: makeJsonParseable(
      posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        }
      })
    ),
    fallback: false,
  }
}
