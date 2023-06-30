import Layout from "../components/Layout"
import Header from "../components/Global/Header"
import ReactMarkdown from 'react-markdown';
import { makeJsonParseable, readMdFile } from "../api/Utils"
import type { MdFile } from "../types/MdFile.type";
import Container from "../components/Layouts/Container";

/**
 * Privacy Page
 * @param {MdFile} { data, content }
 * @returns {JSX.Element} 
 */
export default function PrivacyPage( { content }: MdFile): JSX.Element {
  return (
    <Layout title="Privacy">
      <Header title="Privacy Policy">
      </Header>
      <Container>
        <ReactMarkdown className="prose text-left mx-auto px-3 md:px-0 prose-slate dark:prose-invert">{ content }</ReactMarkdown>
      </Container>
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
