import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutMe extends React.Component {
  render() {
    const siteTitle = "Steffany Bahamon's Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
         About Me
        </h1>
        <p> Under construction!
        </p>
      </Layout>
    )
  }
}

export default AboutMe
