import React from "react";
/* Layout */
import Layout from "../components/Layout"
import Blog from "../components/Global/Blog"
import Header from "../components/Global/Header"
import TOCInline from "../components/Toc";

import Image from "next/image";
import ReactMarkdown from 'react-markdown';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

/* API */
import { getAllPosts } from "../api/GetData";
import { makeJsonParseable, makeSlug } from "../api/Utils";

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
      <Article offset
        image={
          <Image
            className="border-2 border-slate-500 mb-5 bg-white"
            src={post.thumbnail}
            alt={post.title}
            width={1024}
            height={1024}
            placeholder="blur"
            priority
          />
        }
        first={
          <ul className="mb-5 text-sm">
            <li><strong>Author:</strong> James Amner</li>
            <li><strong>Date:</strong> {date.toLocaleDateString('en-GB')}</li>
            <TOCInline content={post.content} indentDepth={3} fromHeading={1} toHeading={6} exclude="" />
          </ul>
        }>
        <ReactMarkdown
          className="prose prose-slate dark:prose-invert"
          components={{
            pre: function Pre(props) {

              // if children contains `code` element, then it's a code block
              // and we should render it without the `pre` element because
              // the `SyntaxHighlighter` component will wrap it in a `pre`
              if (props.children[0].props.className) {
                return <>{props.children}</>
              }

              return <pre {...props} />
            },
            code(props) {
              const { children, className, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  language={match[1]}
                  style={vscDarkPlus}
                >
                  {children}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
            h1(props) {
              return <h1 id={makeSlug(props.children)} {...props} />
            },
            h2(props) {
              return <h2 id={makeSlug(props.children)} {...props} />
            },
            h3(props) {
              return <h3 id={makeSlug(props.children)} {...props} />
            },
            h4(props) {
              return <h4 id={makeSlug(props.children)} {...props} />
            },
            h5(props) {
              return <h5 id={makeSlug(props.children)} {...props} />
            },
            h6(props) {
              return <h6 id={makeSlug(props.children)} {...props} />
            }
          }}
        >{post.content}</ReactMarkdown>
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
