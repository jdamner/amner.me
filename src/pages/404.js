import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
// markup
const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <h1>Page not found</h1>
      <p>
        Sorry, we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage
