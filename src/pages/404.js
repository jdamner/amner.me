import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Title from "../components/Title"



// markup
const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <Title
        image={null}
        title="Page Not Found"
        text={
          <p>
            Sorry, we couldn’t find what you were looking for.
            <br />
            <Link to="/">Go home</Link>.
          </p>
        }
      />
      
    </Layout>
  )
}

export default NotFoundPage
