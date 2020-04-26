import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutMe extends React.Component {
  render() {

    return (
      <Layout>
        <SEO
          title="About Me"
          keywords={[`steffany`, `bahamon`, `developer`, `engineer`]}
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
