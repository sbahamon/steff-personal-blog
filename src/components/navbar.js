import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }      
      }
    `}
    render={data => (
      <header>
        <h1>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
            {data.site.siteMetadata.title}
        </Link>
        </h1>
      </header>
    )}
  />
)

