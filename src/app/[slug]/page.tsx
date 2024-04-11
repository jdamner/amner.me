import React from "react";

/* Layout */
import { Blog, Header, TOCInline } from "../../Components";
import { Container, Article } from "../../Layouts";

import ReactMarkdown from 'react-markdown';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

/* API */
import { getAllPosts } from "../../data";
import { makeJsonParseable, makeSlug } from "../../utils";

export const generateStaticParams = (async () => {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
})

/**
 * Post Page
 * 
 * @param {PostPageProps}
 * @returns {JSX.Element}
 */
export default async function Template({ params }: { params: { slug: string } }) {
  const allPosts = makeJsonParseable(await getAllPosts())
  const posts = allPosts.map((post) => {
    return {
      title: post.title,
      thumbnail: post.thumbnail,
      slug: post.slug ?? ''
    }
  });

  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return null;
  }

  const date = new Date(post.date);
  return (
    <>
      <Header title={post.title}>
        <p className="hidden">{date.toDateString()}</p>
      </Header>
      <Article offset
        image={post.thumbnail}
        first={
          <ul className="mb-5 text-sm">
            <li><strong>Author:</strong> James Amner</li>
            <li><strong>Date:</strong> {date.toLocaleDateString('en-GB')}</li>
            <TOCInline content={post.content} />
          </ul>
        }>
        <ReactMarkdown
          className="prose prose-slate dark:prose-invert"
          components={{
            a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" />,
            pre: function Pre(props) {
              return <>{props?.children}</>
            },
            code(props) {
              const { children, className, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  style={vscDarkPlus}
                >
                  {String(children)}
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
    </>
  )
}
