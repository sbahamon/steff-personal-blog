import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Hi y'all {" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <h2>Testing main branch switch</h2>
        <p>Welcome to my personal website.</p>
        <p>
          This is a collection of my personal projects, blogs, and other things I find useful or informative.
          Please feel free to reach out to me if you find something interesting.
        </p>
      </Layout>
    )
  }
}

export default IndexPage
