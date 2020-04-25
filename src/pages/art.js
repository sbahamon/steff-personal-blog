import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Art extends React.Component {
  render() {
    const siteTitle = "Steffany Bahamon's Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
         Art
        </h1>
        <p>art 2 come
        </p>
      </Layout>
    )
  }
}

export default Art
