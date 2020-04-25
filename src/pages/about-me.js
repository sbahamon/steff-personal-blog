import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutMe extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`