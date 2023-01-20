import Layout from "../components/Layout"
import Header from "../components/Global/Header"
import ReactMarkdown from 'react-markdown';
import { makeJsonParseable, readMdFile } from "../api/Utils"
import type { MDFile } from "../types/mdfile.type";

/**
 * Privacy Page
 * @param {MDFile} { data, content }
 * @returns {JSX.Element} 
 */
export default function PrivacyPage( { content }: MDFile): JSX.Element {
  return (
    <Layout title="Privacy">
      <Header title="Privacy Policy">
        <ReactMarkdown className="prose text-left mx-auto px-3 md:px-0 prose-slate dark:prose-invert">{ content }</ReactMarkdown>
      </Header>
    </Layout>
  )
}

/**
 * Gets static data for SS Generation
 * 
 * @returns {Promise<{ props: MDFile }>}
 */
export async function getStaticProps(): Promise<{ props: MDFile }> {
  return {
    props: makeJsonParseable( await readMdFile( 'content/privacy.md' ) ),
  }
}
