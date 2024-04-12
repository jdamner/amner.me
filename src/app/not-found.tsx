import React from "react";

import ReactMarkdown from 'react-markdown';

import { Header } from "../Components"
import { Container } from "../Layouts";

import { makeJsonParseable, readMdFile } from "../utils"

export const metadata = {
  title: 'Page Not Found',
  description: 'Page Not Found'
}

export default async function NotFound() { 
  const {content} = makeJsonParseable( await readMdFile( '404.md' ) )
  return (
    <>
      <Header title="Page Not Found">
        <Container>
          <ReactMarkdown className="prose mx-auto px-3 md:px-0 prose-slate dark:prose-invert">{ content }</ReactMarkdown>
        </Container>
      </Header>
    </>
  )
}
