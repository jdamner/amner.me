import React from "react"
import Link from "next/link"
import Layout from "../components/Layout"
import Header from "../components/Header"



// markup
const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <Header
        image={null}
        title="Page Not Found"
        text={
          <p>
            Sorry, we couldn’t find what you were looking for.
            <br />
            <Link href="/">Go home</Link>.
          </p>
        }
      />
      
    </Layout>
  )
}

export default NotFoundPage
