import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Steffany Bahamon's Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
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
        <p>Welcome to my personal website.</p>
        <p>
          This is a collection of my personal projects, blogs, and other things I find useful or informative.
          Please feel free to reach out to me if you find something interesting.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Blogs</Button>
        </Link>
        <Link to="/project/">
          <Button marginTop="35px">Projects</Button>
        </Link>
        <Link to="/art/">
          <Button marginTop="35px">Art</Button>
        </Link>
        <Link to="/about-me/">
          <Button marginTop="35px">About Me</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
