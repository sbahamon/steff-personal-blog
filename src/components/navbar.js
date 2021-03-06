import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import LightSwitch from "../components/lightswitch"


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
        <Nav>
            <StyledLink to="/about-me/">
            About Me 
            </StyledLink>
            <StyledLink to="/blog/">
            Blogs 
            </StyledLink>
            <StyledLink to="/project/">
            Projects 
            </StyledLink>
            <StyledLink to="/art/">
            Art
            </StyledLink>
            <LightSwitch/>
        </Nav>
      </header>
    )}
  />
)

const Nav = styled.nav`
  border-bottom: ${rhythm(1/15)} solid;
`

const StyledLink = styled(Link)`
  margin-right: ${rhythm(1)};
`
