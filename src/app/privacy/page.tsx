import React from "react";
import ReactMarkdown from 'react-markdown';

import { makeJsonParseable, readMdFile } from "../../utils"

import Header from "../../components/Global/Header"
import Article from "../../components/Layouts/Article";
import Container from "../../components/Layouts/Container";

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for James Amner\'s personal website'
}

export default async function PrivacyPage() {

  const content = makeJsonParseable(await readMdFile('privacy.md')).content;

  return (<>
      <Header title="Privacy Policy">
      </Header>
      <Article offset image={'/privacy.jpg'}>
        <ReactMarkdown className="prose text-left mx-auto px-3 md:px-0 prose-slate dark:prose-invert">{content}</ReactMarkdown>
      </Article>
      <Container alt>
      </Container>
      </>
  )
}
