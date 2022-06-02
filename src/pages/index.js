import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Blog from "../components/Blog"


// styles



// markup
const IndexPage = () => {
  return (
    <Layout title='About Me'>
        <section className='row my-3' id='about'>
          <div className='col-md-4'>
            <h2 className="fancy-title">About Me</h2>
          </div>
          <div className='col-md-8'>
            <p>Some of the things I get up to at work incude:
            </p>
            <ul>
              <li>Developing and delivering API integrations for PHP and WordPress sites.</li>
              <li>Writing well-documented object-oriented PHP code that encourages reuse by the team.</li>
              <li>Creating and maintaining bespoke themes and plugins for WordPress sites.</li>
              <li>Designing and developing bespoke API endpoints, within the WordPress REST API system.</li>
              <li>Maintaining and rewriting a bespoke PHP platform package for increasing our WordPress site’s stabilinotesty, security and the efficiency of our development team. </li>
              <li>Developing bespoke e-commerce platforms, with integrations to third party services such as Sage</li>
              <li>Implementing and customising WooCommerce installations, with bespoke feature plugins, custom themes and  integrations with bespoke systems.</li>
              <li>Using Javascript to create dynamic pages, with content returned from API calls. </li>
              <li>Working with SQL in raw queries, and using frameworks such as Eloquent and WP_Query.</li>
              <li>Coaching and supporting a team of developers grow their skills and meet their objectives</li>
              <li>Supporting Project Managers and Business Development teams for technical guidance on quoting and supporting project lifecycles. </li>
              <li>Debugging and maintaining PHP projects built in many frameworks, including bespoke PHP frameworks developed in house.</li>
              <li>Developing systems that interact with complex data, such as data provided via third-party tools and services that run on device and output in raw formats.</li>
              <li>Worked with templating languages such as Twig and Blade. </li>
              <li>Use of node, webpack and other front-end compilation tools.</li>
              <li>Creation and supporting deployment pipelines, including dependancy management and testing in the pipeline for deployment.</li>
              <li>Managing and supporting migrations and deployments between servers.</li>
              <li>Identifying and resolving technical issues relating to website performance and page-speed insights.</li>
              <li>Supporting the team creating and running local development environments.</li>
              <li>Contributing to strategy and planning decisions around infrastructure and resource management</li>
            </ul>
            <p>
              Outside of PHP, I adore <a href='https://developer.apple.com/xcode/swift' target="_blank" rel='noreferrer'>Swift</a>,
              I like <a href='https://javascript.com' target="_blank" rel='noreferrer'>JavaScript</a>,
              I love <a href='https://reactjs.org' target="_blank" rel='noreferrer'>React</a>.
            </p>
            <p>
              I've recently had some fun with <a href='https://developer.apple.com/xcode/swiftui/' target="_blank" rel='noreferrer'>SwiftUI</a> on a private little project, and enjoy developing beautiful user expereinces.
            </p>
            <p>
              I make this site using <a href='https://gatsbyjs.com/' target="_blank" rel='noreferrer'>Gatsby</a> (<Link to='/why-not-wordpress'>why not wordpress?</Link>), and I've enjoyed <a href='https://shopify.com' target="_blank" rel='noreferrer'>Shopify</a> development in the past.
            </p>
          </div>
        </section>
        <Blog />
      </Layout>
  )
}

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             date
//             slug
//             thumbnail
//             title
//           }
//         }
//       }
//     }
//   }
// `

export default IndexPage
