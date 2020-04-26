import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Project extends React.Component {
  render() {
    
    return (
      <Layout>
        <SEO
          title="Projects"
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
