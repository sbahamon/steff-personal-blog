import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Art extends React.Component {
  render() {
    
    return (
      <Layout>
        <SEO
          title="Art"
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
