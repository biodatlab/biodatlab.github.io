import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const PeoplePage = ({
}) => {

  return (
    <Layout>
      <Helmet>
        <title>Lab blogs</title>
      </Helmet>
      <h1>People</h1>
      {/* <div className="grids">
        {People}
      </div> */}
    </Layout>
  )
}

export default PeoplePage
export const pageQuery = graphql`
  query peoplePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            thumbnail
            position
          }
        }
      }
    }
  }
`