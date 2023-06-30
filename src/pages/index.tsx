import React from "react";
/* Layout/Visual Component */
import Layout from "../components/Layout"
import Blog from "../components/Global/Blog"
import Tabs from "../components/Global/Tabs";
import Header from "../components/Global/Header";
import Container from "../components/Layouts/Container";
import ReactMarkdown from 'react-markdown';

/* API */
import { getAllPosts, getAllServices } from "../api/GetData";
import { makeJsonParseable, readMdFile } from "../api/Utils";

/* Types */
import type { Post } from "../types/Post.type";
import { MdFile } from "../types/MdFile.type";
import Title from "../components/Global/Title";


type IndexPageProps = {
  posts: Post[],
  services: MdFile[],
  page: MdFile,
  service: MdFile
}

/**
 * Index Page
 * 
 * @param {IndexPageProps} { posts, services, page, service }
 * @returns {JSX.Element}
 */
export default function IndexPage({ posts, services, page, service }: IndexPageProps): React.JSX.Element {

  const serviceTabs = services.map(service => {
    return {
      title: service.data.title,
      content: service.content
    }
  })

  return (
    <Layout title='About Me'>
      <Header title='James Amner' subtitle='Senior PHP Developer'>
        <ReactMarkdown className="prose mx-auto px-3 md:px-0 prose-slate dark:prose-invert">{page.content}</ReactMarkdown>
      </Header>
      <Container>
        <Tabs title={<Title title={'Techincal Skills'}>Web Development</Title>} tabs={serviceTabs} defaultContent={service.content} />
      </Container>
      <Container alt>
        <Blog posts={posts} />
      </Container>
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
      page: makeJsonParseable(await readMdFile('index.md')),
      service: makeJsonParseable(await readMdFile('services.md'))
    },
  }
}
