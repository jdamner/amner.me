import React from "react";
import Layout from "../components/Layout"
import Header from "../components/Global/Header"
import ReactMarkdown from 'react-markdown';
import { makeJsonParseable, readMdFile } from "../api/Utils"
import type { MdFile } from "../types/MdFile.type";
import Article from "../components/Layouts/Article";
import Image from "next/image";
import Privacy from '../../public/privacy.jpg'

/**
 * Privacy Page
 * @param {MdFile} { data, content }
 * @returns {JSX.Element} 
 */
export default function PrivacyPage( { content }: MdFile): React.JSX.Element {
  return (

    <Layout title="Privacy">
      <Header title="Privacy Policy">
      </Header>
      <Article offset first={<Image
                className="border-2 border-slate-500 mb-5 bg-white"
                src={Privacy}
                alt={"Privacy Policy"}
                width={1024}
                height={1024}
                placeholder="blur"
                priority />
      }>
        <ReactMarkdown className="prose text-left mx-auto px-3 md:px-0 prose-slate dark:prose-invert">{ content }</ReactMarkdown>
      </Article>
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
    props: makeJsonParseable( await readMdFile( 'privacy.md' ) ),
  }
}
