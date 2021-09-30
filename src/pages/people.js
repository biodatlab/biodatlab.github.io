import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PeopleLink from "../components/people-link"
import HelmetWrapper from "../components/helmetWrapper"

const PeoplePage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  const People = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PeopleLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <HelmetWrapper
        title="People"
      />
      <h1>People</h1>
      <div className="grids small">
        {People}
      </div>
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
    allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___order]}, filter: {frontmatter: {path: {regex: "/people/"}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            metaDescription
          }
        }
      }
    }
  }
`