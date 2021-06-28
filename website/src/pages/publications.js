import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PublicationLink from "../components/publication-link"

const PublicationPage = ({
  data: {
    allPublicationsYaml: { edges },
  }
}) => {

  const Publication = edges
    .filter(edge => !!edge.node.title)
    .map(edge => <PublicationLink key={edge.node.id} publication={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>Publications</title>
      </Helmet>
      <h1>Publications</h1>
      <div className="primary-content">
        Please see Google scholar for list of publications or below.
      </div>
      <div>
        {Publication}
      </div>
    </Layout>
  )
}

export default PublicationPage
export const pageQuery = graphql`
  query publicationPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allPublicationsYaml(sort: {order: ASC, fields: [year]}) {
      edges {
        node {
          id
          title
          authors
          journal
          year
          url
        }
      }
    }
  }
`