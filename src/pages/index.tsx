/* Layout/Visual Component */
import Layout from "../components/Layout"
import Blog from "../components/Global/Blog"
import Tabs from "../components/Global/Tabs";
import Header from "../components/Global/Header";
import ReactMarkdown from 'react-markdown';

/* API */
import { getAllPosts, getAllServices } from "../api/GetData";
import { makeJsonParseable, readMdFile } from "../api/Utils";

/* Types */
import type { post } from "../types/post.type";
import { MDFile } from "../types/mdfile.type";

type IndexPageProps = {
  posts: post[],
  services: post[],
  page: MDFile,
  service: MDFile
}

/**
 * Index Page
 * 
 * @param {IndexPageProps} { posts, services, page, service }
 * @returns {JSX.Element}
 */
export default function IndexPage({ posts, services, page, service }: IndexPageProps): JSX.Element {
  return (
    <Layout title='About Me'>
      <Header title='James Amner' subtitle='Senior PHP Developer'>
        <ReactMarkdown className="prose mx-auto px-3 md:px-0 prose-slate dark:prose-invert">{page.content}</ReactMarkdown>
      </Header>
      <Tabs tabs={services} content={service.content} />
      <Blog posts={posts} />
    </Layout>
  )
}

/**
 * Gets static data for SS Generation
 * 
 * @returns {Promise<{ props: IndexPageProps }>} 
 */
export async function getStaticProps(): Promise<{ props: IndexPageProps }> {
  return {
    props: {
      posts: makeJsonParseable(await getAllPosts()),
      services: makeJsonParseable(await getAllServices()),
      page: makeJsonParseable(await readMdFile('content/index.md')),
      service: makeJsonParseable(await readMdFile('content/services.md'))
    },
  }
}
