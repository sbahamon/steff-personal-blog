import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Art extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
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
