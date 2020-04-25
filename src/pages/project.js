import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Project extends React.Component {
  render() {
    const siteTitle = "Steffany Bahamon's Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
         Projects
        </h1>
        <p>building this page out rn
        </p>
      </Layout>
    )
  }
}

export default Project
