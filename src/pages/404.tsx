import Layout from "../components/Layout"
import Header from "../components/Global/Header"
import Html from "../components/Global/Html";

import { readMdFile } from "../api/Utils"
import type { MDFile } from "../types/mdfile.type";

/**
 * Not found page
 * @param {MDFile} { data, content }
 * @returns {JSX.Element} 
 */
export default function NotFoundPage( { data, content }: MDFile): JSX.Element {
  return (
    <Layout title="Page Not Found">
      <Header title="Page Not Found">
        <Html content={content} />
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
    props: await readMdFile( 'content/404.md' ),
  }
}
