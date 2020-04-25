import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Land extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Lank Acknowledgement"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
         Land Acknowledgement
        </h1>
        <p>The work, research, and development of this website mostly takes place on the land of the Council of Three Fires: the Odawa, Ojibwe, and Potowami Nations.
            Many other nations such as the Miami, Ho-Chunk, Menominee, Sac, and Fox also traded here.
        </p>
        <p>Many of those people are <a href="https://aicchicago.org/">still here</a> and are still <a href="https://chicagoaicc.com/">organized</a></p>
      </Layout>
    )
  }
}

export default Land

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
