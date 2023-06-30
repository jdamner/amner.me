import React from "react";
import Layout from "../components/Layout"
import Header from "../components/Global/Header"
import ReactMarkdown from 'react-markdown';
import { makeJsonParseable, readMdFile } from "../api/Utils"
import type { MdFile } from "../types/MdFile.type";
import Container from "../components/Layouts/Container";

/**
 * Not found page
 * @param {MdFile} { data, content }
 * @returns {JSX.Element} 
 */
export default function NotFoundPage( { content }: MdFile): React.JSX.Element {
  return (
    <Layout title="Page Not Found">
      <Header title="Page Not Found">
        <Container>
          <ReactMarkdown className="prose mx-auto px-3 md:px-0 prose-slate dark:prose-invert">{ content }</ReactMarkdown>
        </Container>
      </Header>
    </Layout>
  )
}

/**
 * Gets static data for SS Generation
 * 
 * @returns {Promise<{ props: MdFile }>}
 */
export async function getStaticProps(): Promise<{ props: MdFile }> {
  return {
    props: makeJsonParseable( await readMdFile( '404.md' ) ),
  }
}
